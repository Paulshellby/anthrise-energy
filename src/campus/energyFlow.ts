import {electricalRoutes,routeCurve} from './cableRoutes';
import * as THREE from 'three';
import { terrainHeightAt } from './campusWorld';

export type FlowKind = 'pv' | 'bat' | 'ac' | 'grid' | 'light' | 'bms';

interface ConduitSpec {
  id: string;
  kind: FlowKind;
  /** Active in 'day', 'night', or 'both' */
  when: 'day' | 'night' | 'both';
  /** If 'night', optional reverse direction? Simply define forward point order per mode */
  points: [number, number, number][];
  packetCount: number;
  speed: number;
}

interface ActiveTrack {
  spec: ConduitSpec;
  curve: THREE.CurvePath<THREE.Vector3>;
  tube: THREE.Mesh;
  tubeMat: THREE.MeshBasicMaterial;
  staticArrows: THREE.InstancedMesh;
}

export interface EnergyFlowSystem {
  group: THREE.Group;
  setVisible: (visible: boolean) => void;
  setState: (nightFactor: number, reducedMotion: boolean, paused: boolean) => void;
  update: (dt: number) => void;
  dispose: () => void;
}

const FLOW_COLORS: Record<FlowKind, number> = {
  pv: 0xff9a1f,
  bat: 0x00d19e,
  ac: 0x1ce0b6,
  grid: 0x5aaee8,
  light: 0xffbe42,
  bms: 0xa2f2df,
};

const RESTING_COLOR = 0x90a8b0;

export function createEnergyFlowSystem(): EnergyFlowSystem {
  const group = new THREE.Group();
  group.name = 'EnergyFlowSystem';
  group.visible = false;

  const z3Y = terrainHeightAt(21.0, 15.2);

  // Conceptual conduits aligned with visible equipment; final installation design requires engineering review.
  const specs: ConduitSpec[] = [
    // ---------------- ZONE 01: HOME ENERGY ----------------
    // PV DC Roof -> Wall Conduit -> Hybrid Inverter (Day ONLY)
    {
      id: 'z1-pv-inv',
      kind: 'pv',
      when: 'day',
      points: [
        [-12.5, 4.5, 2.9],
        [-15.4, 4.15, 4.15],
        [-15.8, 3.05, 4.6],
      ],
      packetCount: 3,
      speed: 0.36,
    },
    // Inverter -> 16 kWh Battery Charge (Day)
    {
      id: 'z1-inv-bat-day',
      kind: 'bat',
      when: 'day',
      points: [
        [-15.3, 2.0, 4.72],
        [-14.25, 2.0, 4.72],
        [-14.25, 1.45, 4.72],
      ],
      packetCount: 2,
      speed: 0.42,
    },
    // 16 kWh Battery Discharge -> Inverter (Night)
    {
      id: 'z1-bat-inv-night',
      kind: 'bat',
      when: 'night',
      points: [
        [-14.25, 1.45, 4.72],
        [-14.25, 2.0, 4.72],
        [-15.3, 2.0, 4.72],
      ],
      packetCount: 2,
      speed: 0.4,
    },
    // Inverter <-> Battery BMS Comms
    {
      id: 'z1-bms',
      kind: 'bms',
      when: 'both',
      points: [
        [-15.2, 2.22, 4.76],
        [-14.1, 2.22, 4.76],
        [-14.1, 1.55, 4.76],
      ],
      packetCount: 2,
      speed: 0.55,
    },
    // Inverter AC Output -> West Wall AC Panel -> Front Fascia -> Interior Appliances
    {
      id: 'z1-inv-ac-loads',
      kind: 'ac',
      when: 'both',
      points: [
        [-16.2, 2.2, 4.65],
        [-17.65, 2.2, 3.85],
        [-17.65, 2.2, 2.15],
        [-16.2, 3.25, 4.48],
        [-12.2, 3.25, 4.48],
        [-8.9, 2.95, 2.6],
        [-8.9, 2.85, -0.35],
      ],
      packetCount: 5,
      speed: 0.28,
    },
    // Utility Grid Pole -> Utility Meter -> AC Panel (Night backup / active grid sync; quiet resting by Day)
    {
      id: 'z1-grid',
      kind: 'grid',
      when: 'night',
      points: [
        [-21.1, 6.2, 0.9],
        [-17.7, 3.2, 0.9],
        [-17.7, 2.1, 2.0],
      ],
      packetCount: 3,
      speed: 0.34,
    },
    // Zone 01 Garden Column Solar Light (Internal PV -> Battery Day; Battery -> Head Night)
    {
      id: 'z1-garden-light-day',
      kind: 'pv',
      when: 'day',
      points: [
        [-4.4, 2.02, 6.4],
        [-4.4, 1.65, 6.4],
      ],
      packetCount: 1,
      speed: 0.65,
    },
    {
      id: 'z1-garden-light-night',
      kind: 'light',
      when: 'night',
      points: [
        [-4.4, 1.45, 6.4],
        [-4.4, 1.85, 6.4],
      ],
      packetCount: 1,
      speed: 0.65,
    },

    // ---------------- ZONE 02: COMMERCIAL & INDUSTRIAL ----------------
    // Roof PV Array -> 50 kW Hybrid Inverter (Day ONLY)
    {
      id: 'z2-pv-inv',
      kind: 'pv',
      when: 'day',
      points: [
        [17.2, 5.85, -7.2],
        [15.6, 5.5, -4.6],
        [15.6, 2.35, -3.5],
      ],
      packetCount: 4,
      speed: 0.34,
    },
    // 50 kW Hybrid Inverter -> HORIZON ESS Cabinets (Day Charge)
    {
      id: 'z2-inv-bat-day',
      kind: 'bat',
      when: 'day',
      points: [
        [15.2, 1.65, -3.15],
        [13.8, 1.65, -3.15],
        [12.3, 1.65, -3.15],
      ],
      packetCount: 3,
      speed: 0.42,
    },
    // HORIZON ESS Cabinets -> 50 kW Hybrid Inverter (Night Discharge)
    {
      id: 'z2-bat-inv-night',
      kind: 'bat',
      when: 'night',
      points: [
        [12.3, 1.65, -3.15],
        [13.8, 1.65, -3.15],
        [15.2, 1.65, -3.15],
      ],
      packetCount: 3,
      speed: 0.4,
    },
    // 50 kW Inverter -> AC Switchgear -> HVAC / Office Loads
    {
      id: 'z2-ac-loads',
      kind: 'ac',
      when: 'both',
      points: [
        [16.0, 1.65, -3.15],
        [17.7, 1.65, -3.15],
        [21.4, 2.4, -3.8],
        [24.2, 4.9, -6.2],
      ],
      packetCount: 4,
      speed: 0.28,
    },
    // C&I Grid Pole -> AC Switchgear (Night grid supplement)
    {
      id: 'z2-grid',
      kind: 'grid',
      when: 'night',
      points: [
        [8.5, 6.8, -11.5],
        [14.5, 4.2, -7.2],
        [17.7, 2.2, -3.6],
      ],
      packetCount: 3,
      speed: 0.3,
    },
    // C&I All-in-One Road Lights (Autonomous internal Day/Night)
    {
      id: 'z2-roadlight-day',
      kind: 'pv',
      when: 'day',
      points: [
        [17.8, 4.55, 1.5],
        [17.8, 4.15, 1.5],
      ],
      packetCount: 1,
      speed: 0.7,
    },
    {
      id: 'z2-roadlight-night',
      kind: 'light',
      when: 'night',
      points: [
        [17.8, 4.35, 1.5],
        [17.8, 3.3, 1.5],
      ],
      packetCount: 2,
      speed: 0.6,
    },

    // ---------------- ZONE 03: REMOTE & OFF-GRID (ISOLATED — ZERO GRID CONNECTION) ----------------
    // Off-grid PV Rack -> SEED 25.6V & Volt 1000 Charging (Day ONLY)
    {
      id: 'z3-pv-storage',
      kind: 'pv',
      when: 'day',
      points: [
        [15.8, z3Y + 1.45, 14.6],
        [17.6, z3Y + 0.9, 16.4],
        [18.9, z3Y + 0.85, 16.85],
        [21.4, z3Y + 0.85, 17.25],
      ],
      packetCount: 3,
      speed: 0.38,
    },
    // SEED Storage -> Volt 1000 / Outpost DC+AC Station (Night supply)
    {
      id: 'z3-bat-night',
      kind: 'bat',
      when: 'night',
      points: [
        [18.9, z3Y + 0.9, 16.85],
        [20.4, z3Y + 0.9, 17.15],
        [21.55, z3Y + 0.9, 17.25],
      ],
      packetCount: 2,
      speed: 0.42,
    },
    // Volt 1000 -> Portable Field Laptop / Cooler / Lantern Loads (Day & Night)
    {
      id: 'z3-field-loads',
      kind: 'ac',
      when: 'both',
      points: [
        [21.55, z3Y + 1.05, 17.25],
        [22.0, z3Y + 1.1, 15.6],
        [22.4, z3Y + 1.3, 14.4],
      ],
      packetCount: 2,
      speed: 0.42,
    },
    // Split Solar Street Light (Standalone internal pole PV -> battery Day; battery -> head Night)
    {
      id: 'z3-split-day',
      kind: 'pv',
      when: 'day',
      points: [
        [26.8, z3Y + 4.5, 16.5],
        [26.8, z3Y + 3.25, 16.65],
      ],
      packetCount: 1,
      speed: 0.7,
    },
    {
      id: 'z3-split-night',
      kind: 'light',
      when: 'night',
      points: [
        [26.8, z3Y + 3.25, 16.65],
        [26.75, z3Y + 3.9, 16.5],
        [25.65, z3Y + 3.9, 16.5],
      ],
      packetCount: 2,
      speed: 0.55,
    },
  ];

  const connected=electricalRoutes(z3Y);
  specs.forEach(spec=>{if(connected[spec.id])spec.points=connected[spec.id];});
  specs.push({id:'z3-controller-seed',kind:'bat',when:'day',points:connected['z3-controller-seed'],packetCount:2,speed:.35});
  specs.push({id:'z3-portable-pv',kind:'pv',when:'day',points:connected['z3-portable-pv'],packetCount:2,speed:.35});
  const tracks: ActiveTrack[] = [];
  const packetGeo = new THREE.CapsuleGeometry(0.022, 0.11, 4, 8);
  packetGeo.rotateX(Math.PI / 2);

  const arrowGeo = new THREE.ConeGeometry(0.045, 0.13, 8);
  arrowGeo.rotateX(Math.PI / 2);

  const packetMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

  const totalPackets = specs.reduce((acc, s) => acc + s.packetCount, 0);
  const packetInstanced = new THREE.InstancedMesh(packetGeo, packetMat, totalPackets);
  packetInstanced.name = 'EnergyFlowPackets';
  packetInstanced.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  group.add(packetInstanced);

  const dummy = new THREE.Object3D();
  const pPos = new THREE.Vector3();
  const pTan = new THREE.Vector3();
  const upVec = new THREE.Vector3(0, 1, 0);
  const quat = new THREE.Quaternion();
  const colorScratch = new THREE.Color();

  specs.forEach((spec) => {
    const curve = routeCurve(spec.points, spec.id.startsWith('z1-') ? 0.065 : 0);
    const tubeGeo = new THREE.TubeGeometry(curve, Math.max(12, spec.points.length * 10), 0.012, 7, false);
    const tubeMat = new THREE.MeshBasicMaterial({
      color: FLOW_COLORS[spec.kind],
      transparent: true,
      opacity: 0.9,
    });
    const tube = new THREE.Mesh(tubeGeo, tubeMat);
    tube.name = `FlowConduit-${spec.id}`;
    group.add(tube);

    // Static directional arrowheads shown when reduced motion or flow paused
    const arrowMat = new THREE.MeshBasicMaterial({
      color: FLOW_COLORS[spec.kind],
      transparent: true,
      opacity: 0.95,
    });
    const arrowCount = Math.max(1, spec.packetCount);
    const staticArrows = new THREE.InstancedMesh(arrowGeo, arrowMat, arrowCount);
    staticArrows.name = `FlowArrows-${spec.id}`;
    for (let a = 0; a < arrowCount; a++) {
      const t = (a + 0.5) / arrowCount;
      curve.getPointAt(t, pPos);
      curve.getTangentAt(t, pTan).normalize();
      dummy.position.copy(pPos);
      quat.setFromUnitVectors(new THREE.Vector3(0, 0, 1), pTan);
      dummy.quaternion.copy(quat);
      dummy.scale.setScalar(1);
      dummy.updateMatrix();
      staticArrows.setMatrixAt(a, dummy.matrix);
    }
    staticArrows.instanceMatrix.needsUpdate = true;
    staticArrows.visible = false;
    group.add(staticArrows);

    tracks.push({ spec, curve, tube, tubeMat, staticArrows });
  });

  let isNight = false;
  let isReduced = false;
  let isPaused = false;
  let clockPhase = 0;

  const isTrackActive = (spec: ConduitSpec) =>
    spec.when === 'both' || (spec.when === 'night' && isNight) || (spec.when === 'day' && !isNight);

  const syncVisualMode = () => {
    const useStatic = isReduced || isPaused;
    packetInstanced.visible = !useStatic;

    tracks.forEach((tr) => {
      const active = isTrackActive(tr.spec);
      if (active) {
        tr.tubeMat.color.setHex(FLOW_COLORS[tr.spec.kind]);
        tr.tubeMat.opacity = tr.spec.kind === 'bms' ? 0.55 : 0.92;
        tr.staticArrows.visible = useStatic;
      } else {
        tr.tubeMat.color.setHex(RESTING_COLOR);
        tr.tubeMat.opacity = 0.24;
        tr.staticArrows.visible = false;
      }
    });
  };

  syncVisualMode();

  const update = (dt: number) => {
    if (!group.visible) return;
    if (!isReduced && !isPaused) {
      clockPhase += dt;
    }

    let instanceIdx = 0;
    for (let tIdx = 0; tIdx < tracks.length; tIdx++) {
      const tr = tracks[tIdx];
      const active = isTrackActive(tr.spec);
      const count = tr.spec.packetCount;

      colorScratch.setHex(FLOW_COLORS[tr.spec.kind]);

      for (let i = 0; i < count; i++) {
        if (!active || isReduced || isPaused) {
          dummy.scale.setScalar(0.0001);
          dummy.position.set(0, -100, 0);
          dummy.updateMatrix();
          packetInstanced.setMatrixAt(instanceIdx, dummy.matrix);
        } else {
          const u = ((clockPhase * tr.spec.speed + i / count) % 1 + 1) % 1;
          tr.curve.getPointAt(u, pPos);
          tr.curve.getTangentAt(u, pTan).normalize();

          dummy.position.copy(pPos);
          dummy.lookAt(pPos.x + pTan.x, pPos.y + pTan.y, pPos.z + pTan.z);
          // Smooth pulse envelope at ends so packets fade in/out cleanly
          const edgeFade = Math.min(u * 6, (1 - u) * 6, 1);
          const s = (tr.spec.kind === 'bms' ? 0.65 : 1.0) * Math.max(0.2, edgeFade);
          dummy.scale.setScalar(s);
          dummy.updateMatrix();
          packetInstanced.setMatrixAt(instanceIdx, dummy.matrix);
          packetInstanced.setColorAt(instanceIdx, colorScratch);
        }
        instanceIdx++;
      }
    }

    packetInstanced.instanceMatrix.needsUpdate = true;
    if (packetInstanced.instanceColor) {
      packetInstanced.instanceColor.needsUpdate = true;
    }
    void upVec;
  };

  return {
    group,
    setVisible: (visible: boolean) => {
      group.visible = visible;
    },
    setState: (nightFactor: number, reducedMotion: boolean, paused: boolean) => {
      const nextNight = nightFactor >= 0.5;
      if (nextNight !== isNight || reducedMotion !== isReduced || paused !== isPaused) {
        isNight = nextNight;
        isReduced = reducedMotion;
        isPaused = paused;
        syncVisualMode();
      }
    },
    update,
    dispose: () => {
      packetGeo.dispose();
      arrowGeo.dispose();
      packetMat.dispose();
      tracks.forEach((tr) => {
        tr.tube.geometry.dispose();
        tr.tubeMat.dispose();
        (tr.staticArrows.material as THREE.Material).dispose();
      });
    },
  };
}
