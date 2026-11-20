import * as THREE from 'three';
import type { TextureBundle } from './textures';
import { tagPracticalLight } from './lightingBudget';
import { createHomeArchitectureDetail } from './homeArchitectureDetail';
import { createHomePlantingDetail } from './homePlantingDetail';

type PbrSurface = { color: THREE.Texture; normal: THREE.Texture; roughness: THREE.Texture; ao?: THREE.Texture };
type HomePbrBundle = { plaster: PbrSurface; timber: PbrSurface; paving: PbrSurface };

/** First-region architectural concept. No CAD, rear connector or drilling template is implied. */
export function createHomeRefinement(
  homeBody: THREE.Group,
  roofGroup: THREE.Group,
  roofDeck: THREE.Mesh,
  textures: TextureBundle
) {
  const root = new THREE.Group();
  root.name = 'HomeArchitecturalRefinement';
  homeBody.add(root);
  const geometries: THREE.BufferGeometry[] = [];
  const materials: THREE.Material[] = [];
  const ownedTextureClones: THREE.Texture[] = [];
  const geo = <T extends THREE.BufferGeometry>(value: T): T => { geometries.push(value); return value; };
  const mat = <T extends THREE.Material>(value: T): T => { materials.push(value); return value; };
  const material = (color: number, roughness = 0.8, metalness = 0) =>
    mat(new THREE.MeshStandardMaterial({ color, roughness, metalness }));
  // Optional structural extension is local; textures.ts remains owned by the parent task.
  const homePbr = (textures as TextureBundle & { homePbr?: HomePbrBundle }).homePbr;
  function surface(pbr: PbrSurface | undefined, fallbackColor: number, roughness: number, normalStrength: number, fallbackMap?: THREE.Texture) {
    const m = mat(new THREE.MeshStandardMaterial({ color: pbr ? 0xffffff : fallbackColor, roughness, map: pbr ? null : (fallbackMap || null) }));
    if (pbr) {
      for (const [target, source] of [['map', pbr.color], ['normalMap', pbr.normal], ['roughnessMap', pbr.roughness], ['aoMap', pbr.ao]] as const) {
        if (!source) continue;
        const clone = source.clone(); clone.wrapS = clone.wrapT = THREE.RepeatWrapping; clone.repeat.set(0.5, 0.5);
        clone.colorSpace = target === 'map' ? THREE.SRGBColorSpace : THREE.NoColorSpace;
        clone.needsUpdate = true; ownedTextureClones.push(clone); m[target] = clone;
      }
      m.normalScale.set(normalStrength, normalStrength);
    }
    return m;
  }
  const stucco = surface(homePbr?.plaster, 0xf4f0e5, 0.86, 0.15, textures.limestoneWall);
  const limestone = surface(homePbr?.paving, 0xd3cdc0, 0.92, 0.3);
  const frame = material(0x273b3e, 0.34, 0.55);
  const silver = material(0xaebbbe, 0.34, 0.72);
  const glass = mat(new THREE.MeshPhysicalMaterial({ color: 0x9bbbc7, roughness: 0.13, metalness: 0.08, transparent: true, opacity: 0.48, ior: 1.48, side: THREE.DoubleSide, emissive: 0xffc184, emissiveIntensity: 0, depthWrite: false }));
  const tile = material(0x485c69, 0.83, 0.12);
  const unitBox = geo(new THREE.BoxGeometry(1, 1, 1));
  function box(parent: THREE.Object3D, name: string, x: number, y: number, z: number, w: number, h: number, d: number, surfaceMaterial: THREE.Material) {
    const metric = surfaceMaterial === stucco || surfaceMaterial === limestone;
    const g = metric ? geo(new THREE.BoxGeometry(w, h, d)) : unitBox;
    if (metric) {
      const p = g.getAttribute('position'), n = g.getAttribute('normal');
      if (p && n) {
        const uv: number[] = [];
        for (let i = 0; i < p.count; i++) {
          const nx = Math.abs(n.getX(i)), ny = Math.abs(n.getY(i)), nz = Math.abs(n.getZ(i));
          if (ny >= nx && ny >= nz) uv.push(p.getX(i), p.getZ(i));
          else if (nx >= nz) uv.push(p.getZ(i), p.getY(i));
          else uv.push(p.getX(i), p.getY(i));
        }
        g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setAttribute('uv1', new THREE.Float32BufferAttribute(uv, 2));
      }
    }
    const mesh = new THREE.Mesh(g, surfaceMaterial);
    mesh.name = name; mesh.position.set(x, y, z);
    if (!metric) mesh.scale.set(w, h, d);
    mesh.castShadow = true; mesh.receiveShadow = true; parent.add(mesh); return mesh;
  }

  // Same footprint as the old solid core, now a hollow enclosure with a real side window opening.
  const shell = new THREE.Group(); shell.name = 'HomeTechnicalWing-RealOpenings'; root.add(shell);
  box(shell, 'TechnicalFloor', -3.4, 0.065, 0, 5.2, 0.13, 5.4, limestone);
  box(shell, 'TechnicalRearWall', -3.4, 1.75, -2.57, 5.2, 3.5, 0.26, stucco);
  box(shell, 'TechnicalRightWall', -0.93, 1.75, 0, 0.26, 3.5, 5.4, stucco);
  box(shell, 'SideWallBelowWindow', -5.87, 0.45, 0, 0.26, 0.9, 5.4, stucco);
  box(shell, 'SideWallAboveWindow', -5.87, 3.05, 0, 0.26, 0.9, 5.4, stucco);
  box(shell, 'SideWallRearReveal', -5.87, 1.75, -1.98, 0.26, 1.7, 1.44, stucco);
  box(shell, 'SideWallFrontReveal', -5.87, 1.75, 1.98, 0.26, 1.7, 1.44, stucco);
  // Original architectural service recess, not a manufacturer rear-port or drilling template.
  box(shell, 'ServiceWallLower', -3.4, 0.5875, 2.6, 5.2, 1.175, 0.2, stucco);
  box(shell, 'ServiceWallUpper', -3.4, 3.1125, 2.6, 5.2, 0.775, 0.2, stucco);
  box(shell, 'ServiceWallLeft', -5.475, 1.95, 2.6, 1.05, 1.55, 0.2, stucco);
  box(shell, 'ServiceWallRight', -2.225, 1.95, 2.6, 2.85, 1.55, 0.2, stucco);
  box(shell, 'InverterRecessBack', -4.3, 1.95, 2.49, 1.3, 1.55, 0.1, stucco);
  for (const y of [1.52, 2.38]) box(shell, 'ConceptMountingRail', -4.3, y, 2.58, 0.62, 0.075, 0.1, silver);

  // The original battery / cable / hotspot coordinates are intentionally retained.
  // Wheel bottoms are y=-0.002 in homeBody coordinates; paver top follows that contact plane.
  box(root, 'BatterySupportPaver', -2.75, -0.032, 2.98, 1.24, 0.06, 0.8, limestone);
  const contact = mat(new THREE.MeshBasicMaterial({ color: 0x182321, transparent: true, opacity: 0.2, depthWrite: false }));
  const contactGeo = geo(new THREE.CircleGeometry(0.085, 24));
  for (const x of [-0.32, 0.32]) for (const z of [-0.14, 0.14]) {
    const mesh = new THREE.Mesh(contactGeo, contact);
    mesh.name = 'BatteryWheelContact';
    mesh.rotation.x = -Math.PI / 2;
    mesh.scale.set(1.25, 0.7, 1);
    mesh.position.set(-2.75 + x, -0.0015, 2.98 + z);
    root.add(mesh);
  }

  // The roof skin and PV mounts share the deck's transform, so every tile / rail has one slope.
  const roofSkin = new THREE.Group(); roofSkin.name = 'HomeSlateRoofMesh';
  roofSkin.position.copy(roofDeck.position); roofSkin.rotation.copy(roofDeck.rotation); roofGroup.add(roofSkin);
  const roofMount = new THREE.Group(); roofMount.name = 'HomePVPhysicalMount'; roofSkin.add(roofMount);
  const tileGeo = geo(new THREE.BoxGeometry(0.502, 0.035, 0.495, 2, 1, 2));
  const tiles = new THREE.InstancedMesh(tileGeo, tile, 26 * 13); tiles.name = 'HomeRoof-338IndividualTiles';
  tiles.castShadow = true; tiles.receiveShadow = true;
  const dummy = new THREE.Object3D();
  const random = (n: number) => { const v = Math.sin(n * 78.233 + 11.73) * 43758.5453; return v - Math.floor(v); };
  let idx = 0;
  for (let row = 0; row < 13; row++) for (let col = 0; col < 26; col++) {
    dummy.position.set(-6.25 + col * 0.5, 0.16 + (row % 2) * 0.004, -3 + row * 0.5); dummy.updateMatrix();
    tiles.setMatrixAt(idx, dummy.matrix); tiles.setColorAt(idx, new THREE.Color().setHSL(0.59, 0.14, 0.24 + random(idx) * 0.07)); idx++;
  }
  roofSkin.add(tiles);
  for (const x of [-6.6, 6.6]) box(roofSkin, 'RoofBargeboard', x, -0.015, 0, 0.065, 0.29, 6.5, frame);
  for (const z of [-3.2, 3.2]) box(roofSkin, 'RoofFascia', 0, -0.015, z, 13.25, 0.29, 0.075, frame);
  const topAt = (z: number) => 4.23 - Math.tan(0.22) * (z - 0.1) - 0.14 / Math.cos(0.22);
  const wedge = new THREE.Shape(); wedge.moveTo(-2.7, 3.4); wedge.lineTo(2.7, 3.4);
  wedge.lineTo(2.7, topAt(2.7)); wedge.lineTo(-2.7, topAt(-2.7)); wedge.closePath();
  const wedgeGeo = geo(new THREE.ExtrudeGeometry(wedge, { depth: 0.18, bevelEnabled: false, steps: 1 })); wedgeGeo.rotateY(-Math.PI / 2);
  for (const x of [-5.82, 6.45]) {
    const mesh = new THREE.Mesh(wedgeGeo, stucco); mesh.name = 'MonoPitchWallClosure'; mesh.position.x = x;
    mesh.castShadow = true; mesh.receiveShadow = true; root.add(mesh);
  }
  const rearHeight = topAt(-2.6) - 3.4;
  box(root, 'RearRoofWallClosure', 0.15, 3.4 + rearHeight / 2, -2.6, 12.55, rearHeight, 0.18, stucco);
  for (const row of [-1.15, 1.05]) for (const zOffset of [-0.58, 0.58]) box(roofMount, 'PVMountingRail', 0, 0.215, row + zOffset, 11.8, 0.05, 0.045, silver);

  const architecture = createHomeArchitectureDetail(homeBody, roofSkin, { frame, silver, glass });
  const planting = createHomePlantingDetail(homeBody);
  let disposed = false;
  function syncArchitecturalMaps() {
    if (!homePbr || disposed) return;
    for (const [surfaceName, maps, strength] of [['plaster', homePbr.plaster, 0.15], ['wood', homePbr.timber, 0.2], ['stone', homePbr.paving, 0.3]] as const) {
      architecture.setSurfaceMaps(surfaceName, { map: maps.color, normalMap: maps.normal, roughnessMap: maps.roughness, aoMap: maps.ao, metresPerTile: 2, color: 0xffffff });
      architecture.surfaceMaterials[surfaceName].normalScale.set(strength, strength);
    }
  }
  syncArchitecturalMaps();
  textures.homePbrReady?.then(() => {
    if (disposed) return;
    ownedTextureClones.forEach(texture => { texture.needsUpdate = true; });
    syncArchitecturalMaps();
  });

  // Original four practical lights and their day-zero/night-n logic: no new lights in detail modules.
  const glow = mat(new THREE.MeshStandardMaterial({ color: 0xffedcf, emissive: 0xffc17b, emissiveIntensity: 0, roughness: 0.35 }));
  const lights: { light: THREE.PointLight | THREE.SpotLight; intensity: number }[] = [];
  const pv = mat(new THREE.MeshStandardMaterial({ color: 0x1c3044, map: textures.solarPanel, roughness: 0.3, metalness: 0.25 }));
  for (const x of [-0.97, 6.3]) {
    box(root, 'WallSconceMount', x, 2.46, 2.75, 0.16, 0.26, 0.075, frame);
    box(root, 'WallSconceHousing', x, 2.47, 2.91, 0.22, 0.28, 0.28, frame);
    box(root, 'WallSconceDiffuser', x, 2.325, 2.91, 0.18, 0.018, 0.22, glow);
    const light = new THREE.SpotLight(0xffc887, 0, 7.5, 0.82, 0.55, 2);
    light.name = 'HomeWallSconce-Practical'; light.position.set(x, 2.3, 2.96);
    tagPracticalLight(light, 'home', 2); light.target.position.set(x, 0, 3.9); root.add(light, light.target); lights.push({ light, intensity: 38 });
  }
  for (const x of [1.65, 5.1]) {
    const z = 4.95;
    box(root, 'AutonomousPathBollard', x, 0.37, z, 0.16, 0.74, 0.16, frame);
    box(root, 'PathBollardDiffuser', x, 0.64, z, 0.18, 0.1, 0.18, glow);
    box(root, 'PathBollardPVCap', x, 0.77, z, 0.2, 0.035, 0.2, pv);
    const light = new THREE.PointLight(0xffce90, 0, 4.6, 2);
    light.name = 'AutonomousPathBollard-Practical'; light.position.set(x, 0.64, z);
    tagPracticalLight(light, 'home', 3); root.add(light); lights.push({ light, intensity: 9 });
  }
  return {
    root, roofMount, architecture, planting,
    setNightFactor(nightFactor: number) {
      const n = THREE.MathUtils.clamp(nightFactor, 0, 1);
      glow.emissiveIntensity = 1.65 * n; glass.emissiveIntensity = 0.38 * n;
      lights.forEach(({ light, intensity }) => { light.intensity = intensity * n; });
    },
    dispose() {
      disposed = true;
      architecture.dispose(); planting.dispose();
      geometries.forEach(value => value.dispose()); materials.forEach(value => value.dispose()); ownedTextureClones.forEach(value => value.dispose());
      root.removeFromParent(); roofSkin.removeFromParent();
    },
  };
}
