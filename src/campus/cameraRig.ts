import * as THREE from 'three';
import { CampusZoneId } from './types';

interface Waypoint {
  id: CampusZoneId;
  progress: number;
  pos: THREE.Vector3;
  target: THREE.Vector3;
  fov: number;
}

const WAYPOINTS: Waypoint[] = [
  {
    id: 'overview',
    progress: 0.0,
    // Lower architectural overview: retain all zone anchors while opening a sky band.
    pos: new THREE.Vector3(3.0, 19.0, 55.0),
    target: new THREE.Vector3(5.6, 4.3, 4.2),
    fov: 41,
  },
  {
    id: 'home',
    progress: 0.34,
    pos: new THREE.Vector3(-16.5, 9.2, 20.5),
    target: new THREE.Vector3(-10.8, 2.1, 2.2),
    fov: 38,
  },
  {
    id: 'commercial',
    progress: 0.67,
    pos: new THREE.Vector3(24.5, 11.4, 13.5),
    target: new THREE.Vector3(18.5, 2.5, -5.8),
    fov: 39,
  },
  {
    id: 'offgrid',
    progress: 1.0,
    pos: new THREE.Vector3(28.5, 9.6, 33.5),
    target: new THREE.Vector3(21.6, 1.5, 15.6),
    fov: 39,
  },
];

export interface CameraRig {
  update: (dt: number, aspect: number, reducedMotion: boolean) => boolean;
  setScrollProgress: (u: number) => void;
  getZoneForProgress: (u: number) => CampusZoneId;
  setOrbitOffset: (dYaw: number, dPitch: number) => void;
  resetOrbit: () => void;
  snapToProgress: (u: number, aspect: number) => void;
}

export function createCameraRig(camera: THREE.PerspectiveCamera): CameraRig {
  let targetU = 0;
  let currentU = 0;

  let targetYaw = 0;
  let targetPitch = 0;
  let currentYaw = 0;
  let currentPitch = 0;
  let dirty = true;

  // Scratch vectors (zero allocation inside update loop)
  const basePos = new THREE.Vector3();
  const baseTarget = new THREE.Vector3();
  const relVec = new THREE.Vector3();
  const sph = new THREE.Spherical();
  const p0 = new THREE.Vector3();
  const p1 = new THREE.Vector3();
  const t0 = new THREE.Vector3();
  const t1 = new THREE.Vector3();

  const samplePath = (uRaw: number, aspect: number) => {
    const u = THREE.MathUtils.clamp(uRaw, 0, 1);
    let idx = 0;
    while (idx < WAYPOINTS.length - 2 && u > WAYPOINTS[idx + 1].progress) {
      idx++;
    }
    const wpA = WAYPOINTS[idx];
    const wpB = WAYPOINTS[idx + 1];
    const span = Math.max(0.0001, wpB.progress - wpA.progress);
    const localT = THREE.MathUtils.clamp((u - wpA.progress) / span, 0, 1);
    // Smoothstep interpolation between waypoints keeps holds gentle near each zone center
    const smoothT = localT * localT * (3 - 2 * localT);

    p0.copy(wpA.pos);
    p1.copy(wpB.pos);
    t0.copy(wpA.target);
    t1.copy(wpB.target);

    basePos.lerpVectors(p0, p1, smoothT);
    baseTarget.lerpVectors(t0, t1, smoothT);

    // Pull camera cleanly back on portrait / narrow mobile viewports so entire campus zone stays unclipped
    if (window.innerWidth <= 768 || aspect < 1.05) {
      const zonePull = THREE.MathUtils.lerp(1.42, 1.0, THREE.MathUtils.clamp((aspect - 0.45) / 0.6, 0, 1));
      const overviewPull = Math.max(zonePull, 1.75 / Math.max(aspect, 0.35));
      const overviewBlend = 1 - THREE.MathUtils.smoothstep(u, 0, 0.3);
      const pullFactor = THREE.MathUtils.lerp(zonePull, overviewPull, overviewBlend);
      relVec.subVectors(basePos, baseTarget).multiplyScalar(pullFactor);
      relVec.y *= 1.08;
      basePos.copy(baseTarget).add(relVec);
    }

    const fovTarget = THREE.MathUtils.lerp(wpA.fov, wpB.fov, smoothT) + (aspect < 0.85 ? 5 : 0);
    if (Math.abs(camera.fov - fovTarget) > 0.05) {
      camera.fov = fovTarget;
      camera.updateProjectionMatrix();
    }
  };

  const applyCamera = (aspect: number) => {
    samplePath(currentU, aspect);

    relVec.subVectors(basePos, baseTarget);
    sph.setFromVector3(relVec);
    sph.theta += currentYaw;
    sph.phi = THREE.MathUtils.clamp(sph.phi + currentPitch, 0.36, 1.32);
    relVec.setFromSpherical(sph);

    camera.position.copy(baseTarget).add(relVec);
    camera.lookAt(baseTarget);
  };

  applyCamera(16 / 9);

  return {
    setScrollProgress: (u: number) => {
      const clamped = THREE.MathUtils.clamp(u, 0, 1);
      if (clamped !== targetU) {
        targetU = clamped;
        dirty = true;
      }
    },
    getZoneForProgress: (u: number): CampusZoneId => {
      if (u < 0.17) return 'overview';
      if (u < 0.505) return 'home';
      if (u < 0.835) return 'commercial';
      return 'offgrid';
    },
    setOrbitOffset: (dYaw: number, dPitch: number) => {
      targetYaw = THREE.MathUtils.clamp(targetYaw + dYaw, -0.45, 0.45);
      targetPitch = THREE.MathUtils.clamp(targetPitch + dPitch, -0.18, 0.22);
      dirty = true;
    },
    resetOrbit: () => {
      if (targetYaw !== 0 || targetPitch !== 0) {
        targetYaw = 0;
        targetPitch = 0;
        dirty = true;
      }
    },
    snapToProgress: (u: number, aspect: number) => {
      targetU = THREE.MathUtils.clamp(u, 0, 1);
      currentU = targetU;
      targetYaw = 0;
      targetPitch = 0;
      currentYaw = 0;
      currentPitch = 0;
      dirty = false;
      applyCamera(aspect);
    },
    update: (dt: number, aspect: number, reducedMotion: boolean) => {
      const needsLerp =
        dirty ||
        currentU !== targetU ||
        currentYaw !== targetYaw ||
        currentPitch !== targetPitch;

      if (!needsLerp) return false;

      if (reducedMotion) {
        currentU = targetU;
        currentYaw = targetYaw;
        currentPitch = targetPitch;
      } else {
        const lambda = 1 - Math.exp(-6.4 * Math.min(dt, 0.08));
        currentU = Math.abs(targetU - currentU) < 0.00025 ? targetU : THREE.MathUtils.lerp(currentU, targetU, lambda);
        currentYaw = Math.abs(targetYaw - currentYaw) < 0.0004 ? targetYaw : THREE.MathUtils.lerp(currentYaw, targetYaw, lambda);
        currentPitch = Math.abs(targetPitch - currentPitch) < 0.0004 ? targetPitch : THREE.MathUtils.lerp(currentPitch, targetPitch, lambda);
      }
      applyCamera(aspect);
      dirty = currentU !== targetU || currentYaw !== targetYaw || currentPitch !== targetPitch;
      return true;
    },
  };
}
