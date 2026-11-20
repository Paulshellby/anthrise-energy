import * as THREE from 'three';
import type { TextureBundle } from './textures';

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
  const geo = <T extends THREE.BufferGeometry>(value: T): T => { geometries.push(value); return value; };
  const mat = <T extends THREE.Material>(value: T): T => { materials.push(value); return value; };
  const material = (color: number, roughness = 0.8, metalness = 0) =>
    mat(new THREE.MeshStandardMaterial({ color, roughness, metalness }));
  const stucco = mat(new THREE.MeshStandardMaterial({ color: 0xf4f0e5, map: textures.limestoneWall, roughness: 0.86 }));
  const limestone = material(0xd3cdc0, 0.92);
  const frame = material(0x273b3e, 0.34, 0.55);
  const silver = material(0xaebbbe, 0.34, 0.72);
  const timber = mat(new THREE.MeshStandardMaterial({ color: 0xc9a57e, map: textures.timberDeck, roughness: 0.84 }));
  const glass = mat(new THREE.MeshPhysicalMaterial({ color: 0xb5d5df, roughness: 0.13, metalness: 0.08, transparent: true, opacity: 0.48, ior: 1.48, side: THREE.DoubleSide }));
  const tile = material(0x485c69, 0.83, 0.12);
  const unitBox = geo(new THREE.BoxGeometry(1, 1, 1));
  function box(parent: THREE.Object3D, name: string, x: number, y: number, z: number, w: number, h: number, d: number, surface: THREE.Material) {
    const mesh = new THREE.Mesh(unitBox, surface);
    mesh.name = name;
    mesh.position.set(x, y, z);
    mesh.scale.set(w, h, d);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }

  // Same footprint as the old solid core, now a hollow enclosure with a real side window opening.
  const shell = new THREE.Group();
  shell.name = 'HomeTechnicalWing-RealOpenings';
  root.add(shell);
  box(shell, 'TechnicalFloor', -3.4, 0.065, 0, 5.2, 0.13, 5.4, limestone);
  box(shell, 'TechnicalRearWall', -3.4, 1.75, -2.57, 5.2, 3.5, 0.26, stucco);
  box(shell, 'TechnicalRightWall', -0.93, 1.75, 0, 0.26, 3.5, 5.4, stucco);
  box(shell, 'SideWallBelowWindow', -5.87, 0.45, 0, 0.26, 0.9, 5.4, stucco);
  box(shell, 'SideWallAboveWindow', -5.87, 3.05, 0, 0.26, 0.9, 5.4, stucco);
  box(shell, 'SideWallRearReveal', -5.87, 1.75, -1.98, 0.26, 1.7, 1.44, stucco);
  box(shell, 'SideWallFrontReveal', -5.87, 1.75, 1.98, 0.26, 1.7, 1.44, stucco);
  // A shallow architectural service recess avoids embedding the original inverter in masonry.
  // The rails are building elements only; product rear ports / fixing-hole patterns remain unknown.
  box(shell, 'ServiceWallLower', -3.4, 0.5875, 2.6, 5.2, 1.175, 0.2, stucco);
  box(shell, 'ServiceWallUpper', -3.4, 3.1125, 2.6, 5.2, 0.775, 0.2, stucco);
  box(shell, 'ServiceWallLeft', -5.475, 1.95, 2.6, 1.05, 1.55, 0.2, stucco);
  box(shell, 'ServiceWallRight', -2.225, 1.95, 2.6, 2.85, 1.55, 0.2, stucco);
  box(shell, 'InverterRecessBack', -4.3, 1.95, 2.49, 1.3, 1.55, 0.1, stucco);
  for (const y of [1.52, 2.38]) box(shell, 'ConceptMountingRail', -4.3, y, 2.58, 0.62, 0.075, 0.1, silver);
  for (const z of [-1.26, 0, 1.26]) box(shell, 'SideWindowMullion', -6.01, 1.75, z, 0.09, 1.76, 0.065, frame);
  for (const y of [0.88, 2.62]) box(shell, 'SideWindowTransom', -6.01, y, 0, 0.09, 0.065, 2.6, frame);
  box(shell, 'SideWindowSill', -6.04, 0.85, 0, 0.3, 0.06, 2.74, limestone);
  box(shell, 'SideWindowGlazing', -6.005, 1.75, 0, 0.018, 1.64, 2.47, glass);

  // Facade trim follows the existing open living bay. The central opening remains a cutaway.
  for (const y of [0.16, 3.01]) box(root, 'LivingBayTrack', 2.8, y, 2.5, 7.1, 0.075, 0.15, frame);
  for (const x of [0.98, 4.55]) box(root, 'LivingBaySlimMullion', x, 1.59, 2.49, 0.055, 2.82, 0.09, frame);
  box(root, 'LivingBayDoorPull', 4.6, 1.13, 2.58, 0.03, 0.32, 0.04, silver);
  box(root, 'LivingThreshold', 2.8, 0.055, 2.82, 7.4, 0.055, 0.56, limestone);
  // Vertical wood battens at the non-glazed side reveal, not pasted photographic panels.
  for (let i = 0; i < 15; i++) box(root, 'TimberSideBatten', 6.465, 1.72, -2.2 + i * 0.3, 0.075, 3.15, 0.095, timber);
  for (const x of [-5.98, -0.82]) box(root, 'TechnicalCornerTrim', x, 1.75, 2.73, 0.065, 3.5, 0.06, limestone);
  box(root, 'FacadePlinth', -3.4, 0.09, 2.73, 5.2, 0.15, 0.075, limestone);

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
  const roofSkin = new THREE.Group();
  roofSkin.name = 'HomeSlateRoofMesh';
  roofSkin.position.copy(roofDeck.position);
  roofSkin.rotation.copy(roofDeck.rotation);
  roofGroup.add(roofSkin);
  const roofMount = new THREE.Group();
  roofMount.name = 'HomePVPhysicalMount';
  roofSkin.add(roofMount);
  const tileGeo = geo(new THREE.BoxGeometry(0.502, 0.035, 0.495, 2, 1, 2));
  const tiles = new THREE.InstancedMesh(tileGeo, tile, 26 * 13);
  tiles.name = 'HomeRoof-338IndividualTiles';
  tiles.castShadow = true;
  tiles.receiveShadow = true;
  const dummy = new THREE.Object3D();
  const random = (n: number) => { const v = Math.sin(n * 78.233 + 11.73) * 43758.5453; return v - Math.floor(v); };
  let idx = 0;
  for (let row = 0; row < 13; row++) for (let col = 0; col < 26; col++) {
    dummy.position.set(-6.25 + col * 0.5, 0.16 + (row % 2) * 0.004, -3 + row * 0.5);
    dummy.updateMatrix();
    tiles.setMatrixAt(idx, dummy.matrix);
    tiles.setColorAt(idx, new THREE.Color().setHSL(0.59, 0.14, 0.24 + random(idx) * 0.07));
    idx++;
  }
  roofSkin.add(tiles);
  for (const x of [-6.6, 6.6]) box(roofSkin, 'RoofBargeboard', x, -0.015, 0, 0.065, 0.29, 6.5, frame);
  for (const z of [-3.2, 3.2]) box(roofSkin, 'RoofFascia', 0, -0.015, z, 13.25, 0.29, 0.075, frame);
  // Close the mono-pitch wedge on the two sides and back, maintaining the living-room cutaway.
  const topAt = (z: number) => 4.23 - Math.tan(0.22) * (z - 0.1) - 0.14 / Math.cos(0.22);
  const wedge = new THREE.Shape();
  wedge.moveTo(-2.7, 3.4); wedge.lineTo(2.7, 3.4);
  wedge.lineTo(2.7, topAt(2.7)); wedge.lineTo(-2.7, topAt(-2.7)); wedge.closePath();
  const wedgeGeo = geo(new THREE.ExtrudeGeometry(wedge, { depth: 0.18, bevelEnabled: false, steps: 1 }));
  wedgeGeo.rotateY(-Math.PI / 2);
  for (const x of [-5.82, 6.45]) {
    const mesh = new THREE.Mesh(wedgeGeo, stucco);
    mesh.name = 'MonoPitchWallClosure';
    mesh.position.x = x;
    mesh.castShadow = true; mesh.receiveShadow = true; root.add(mesh);
  }
  const rearHeight = topAt(-2.6) - 3.4;
  box(root, 'RearRoofWallClosure', 0.15, 3.4 + rearHeight / 2, -2.6, 12.55, rearHeight, 0.18, stucco);
  // Real gutter profile plus downspout, distinct from electrical conduit.
  const gutterGeo = geo(new THREE.CylinderGeometry(0.075, 0.075, 13.2, 20, 1, true, 0, Math.PI));
  gutterGeo.rotateZ(Math.PI / 2);
  const gutter = new THREE.Mesh(gutterGeo, frame);
  gutter.name = 'RoofRainGutter'; gutter.position.set(0, -0.11, 3.29); roofSkin.add(gutter);
  for (const row of [-1.15, 1.05]) for (const zOffset of [-0.58, 0.58]) {
    box(roofMount, 'PVMountingRail', 0, 0.215, row + zOffset, 11.8, 0.05, 0.045, silver);
  }

  // Restrained higher-subdivision perennial planting. Keep the service apron clear of foliage.
  const leaf = material(0x537844, 0.93);
  const foliageGeo = geo(new THREE.SphereGeometry(1, 18, 12));
  const shrubPositions = [[-7.5, 3.9], [-7.4, 5.1], [6.95, 3.7], [6.9, 5.25]];
  const shrubs = new THREE.InstancedMesh(foliageGeo, leaf, shrubPositions.length * 7);
  shrubs.name = 'HomeGardenLayeredShrubs'; shrubs.castShadow = true; shrubs.receiveShadow = true;
  let shrubIdx = 0;
  shrubPositions.forEach(([x, z], group) => {
    box(root, 'GardenBedEdge', x, 0.03, z, 1.2, 0.09, 1.1, limestone);
    for (let i = 0; i < 7; i++) {
      const a = i * 2.399, r = i === 0 ? 0 : 0.33;
      dummy.position.set(x + Math.cos(a) * r, 0.27 + random(i + group * 9) * 0.18, z + Math.sin(a) * r);
      dummy.scale.set(0.32, 0.32 + random(i + group * 12) * 0.17, 0.29); dummy.updateMatrix();
      shrubs.setMatrixAt(shrubIdx++, dummy.matrix);
    }
  });
  root.add(shrubs);
  // Terracotta pots with open rims and soil, placed away from the battery working clearance.
  const potMat = material(0xc7b49b, 0.86), soil = material(0x3a352b, 1);
  for (const [x, z] of [[0.25, 3.12], [5.8, 3.16]]) {
    const pot = new THREE.Mesh(geo(new THREE.CylinderGeometry(0.22, 0.16, 0.46, 28, 1, true)), potMat);
    pot.name = 'HomeEntrancePlanter'; pot.position.set(x, 0.23, z); pot.castShadow = true; root.add(pot);
    const rim = new THREE.Mesh(geo(new THREE.TorusGeometry(0.22, 0.026, 8, 28)), potMat);
    rim.rotation.x = Math.PI / 2; rim.position.set(x, 0.46, z); root.add(rim);
    const earth = new THREE.Mesh(geo(new THREE.CircleGeometry(0.205, 28)), soil);
    earth.rotation.x = -Math.PI / 2; earth.position.set(x, 0.42, z); root.add(earth);
    for (let i = 0; i < 5; i++) {
      const mesh = new THREE.Mesh(foliageGeo, leaf);
      mesh.position.set(x + Math.cos(i * 2.4) * 0.13, 0.66 + i * 0.05, z + Math.sin(i * 2.4) * 0.13);
      mesh.scale.set(0.18, 0.22, 0.14); mesh.castShadow = true; root.add(mesh);
    }
  }

  const glow = mat(new THREE.MeshStandardMaterial({ color: 0xffedcf, emissive: 0xffc17b, emissiveIntensity: 0, roughness: 0.35 }));
  const lights: { light: THREE.PointLight | THREE.SpotLight; intensity: number }[] = [];
  const pv = mat(new THREE.MeshStandardMaterial({ color: 0x1c3044, map: textures.solarPanel, roughness: 0.3, metalness: 0.25 }));
  // Concept architectural wall sconces, not a new SKU nor invented inverter fittings.
  for (const x of [-0.97, 6.3]) {
    box(root, 'WallSconceMount', x, 2.46, 2.75, 0.16, 0.26, 0.075, frame);
    box(root, 'WallSconceHousing', x, 2.47, 2.91, 0.22, 0.28, 0.28, frame);
    box(root, 'WallSconceDiffuser', x, 2.325, 2.91, 0.18, 0.018, 0.22, glow);
    const light = new THREE.SpotLight(0xffc887, 0, 7.5, 0.82, 0.55, 2);
    light.name = 'HomeWallSconce-Practical'; light.position.set(x, 2.3, 2.96);
    light.target.position.set(x, 0, 3.9); root.add(light, light.target);
    lights.push({ light, intensity: 38 });
  }
  // Autonomous path bollards: top PV / internal storage implied, no cable to home ESS.
  for (const x of [1.65, 5.1]) {
    const z = 4.95;
    box(root, 'AutonomousPathBollard', x, 0.37, z, 0.16, 0.74, 0.16, frame);
    box(root, 'PathBollardDiffuser', x, 0.64, z, 0.18, 0.1, 0.18, glow);
    box(root, 'PathBollardPVCap', x, 0.77, z, 0.2, 0.035, 0.2, pv);
    const light = new THREE.PointLight(0xffce90, 0, 4.6, 2);
    light.name = 'AutonomousPathBollard-Practical'; light.position.set(x, 0.64, z);
    root.add(light); lights.push({ light, intensity: 9 });
  }
  return {
    root,
    roofMount,
    setNightFactor(nightFactor: number) {
      const n = THREE.MathUtils.clamp(nightFactor, 0, 1);
      glow.emissiveIntensity = 1.65 * n;
      lights.forEach(({ light, intensity }) => { light.intensity = intensity * n; });
    },
    dispose() {
      geometries.forEach(value => value.dispose()); materials.forEach(value => value.dispose());
      root.removeFromParent(); roofSkin.removeFromParent();
    },
  };
}
