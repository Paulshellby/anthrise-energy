import * as THREE from 'three';
import type { PbrTextureSet, TextureBundle } from './textures';

/** Incremental architectural illustration; not manufacturer CAD or a certified construction detail. */
export function createCommercialArchitectureDetail(worldRoot: THREE.Group, textures: TextureBundle): {
  root: THREE.Group;
  dispose: () => void;
} {
  // Resolve the actual shell rather than the offset C&I overlays in detailLayer.ts.
  // Call after campusWorld has created its commercial facility and equipment yard.
  const isBox = (o: THREE.Object3D, w: number, h: number, d: number): o is THREE.Mesh<THREE.BoxGeometry> => {
    if (!(o instanceof THREE.Mesh) || !(o.geometry instanceof THREE.BoxGeometry)) return false;
    const p = o.geometry.parameters;
    return Math.abs(p.width - w) < 1e-6 && Math.abs(p.height - h) < 1e-6 && Math.abs(p.depth - d) < 1e-6;
  };
  let warehouse: THREE.Mesh<THREE.BoxGeometry> | undefined;
  worldRoot.traverse(o => {
    if (isBox(o, 9.6, 5.2, 8.2) && o.parent instanceof THREE.Group &&
        Math.abs(o.position.x + 3.2) < 1e-6 && Math.abs(o.position.y - 2.6) < 1e-6) warehouse = o;
  });
  if (!warehouse || !(warehouse.parent instanceof THREE.Group) || !(warehouse.parent.parent instanceof THREE.Group)) {
    throw new Error('Commercial architecture detail requires the existing campusWorld warehouse shell');
  }
  const building = warehouse.parent;
  const zone = building.parent as THREE.Group;
  const cabinets = zone.children.filter((o): o is THREE.Group => o instanceof THREE.Group && o.name === 'MeshProduct-horizon');
  if (cabinets.length !== 2) throw new Error('Commercial architecture detail requires the two existing C&I cabinets');

  const root = new THREE.Group();
  root.name = 'CommercialArchitectureEntityDetails';
  root.userData.architecturalIllustration = true;
  root.userData.modelStatus = 'incremental commercial trim; closed relief doors on existing solid shell; not manufacturer CAD';
  building.add(root);
  const geometries: THREE.BufferGeometry[] = [];
  const materials: THREE.Material[] = [];
  const ownedTextures: THREE.Texture[] = [];
  const instances: THREE.InstancedMesh[] = [];
  let disposed = false;
  const geo = <T extends THREE.BufferGeometry>(g: T): T => { geometries.push(g); return g; };
  const ownedMat = <T extends THREE.Material>(m: T): T => { materials.push(m); return m; };
  const style = (w: number, h: number, d: number, fallback: THREE.MeshStandardMaterialParameters) => {
    const source = building.children.find(o => isBox(o, w, h, d));
    return ownedMat(source instanceof THREE.Mesh && source.material instanceof THREE.MeshStandardMaterial
      ? source.material.clone() : new THREE.MeshStandardMaterial(fallback));
  };
  // Clone the actual existing office/roof metal styles, never mutate externally owned materials.
  const slate = style(7.7, 0.22, 7.9, { color: 0x3b484d, roughness: 0.56, metalness: 0.28 });
  const frame = style(0.16, 4.6, 0.18, { color: 0x26343a, roughness: 0.38, metalness: 0.65 });
  const silver = style(1.75, 1, 1.5, { color: 0xc2ccd1, roughness: 0.32, metalness: 0.72 });
  const cladding = ownedMat(warehouse.material instanceof THREE.MeshStandardMaterial
    ? warehouse.material.clone() : new THREE.MeshStandardMaterial({ color: 0xd4dbdd, roughness: 0.55, metalness: 0.25 }));
  const seal = ownedMat(new THREE.MeshStandardMaterial({ color: 0x172124, roughness: 0.96 }));
  const paving = ownedMat(new THREE.MeshStandardMaterial({ color: 0xc9cbc5, roughness: 0.94, metalness: 0 }));

  // UV coordinates are metres before the texture's metres-per-tile transform; AO has its own uv1.
  function metricUV(g: THREE.BufferGeometry): THREE.BufferGeometry {
    const p = g.getAttribute('position'), n = g.getAttribute('normal');
    const uv: number[] = [];
    for (let i = 0; i < p.count; i++) {
      const nx = Math.abs(n.getX(i)), ny = Math.abs(n.getY(i)), nz = Math.abs(n.getZ(i));
      if (ny >= nx && ny >= nz) uv.push(p.getX(i), p.getZ(i));
      else if (nx >= nz) uv.push(p.getZ(i), p.getY(i));
      else uv.push(p.getX(i), p.getY(i));
    }
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setAttribute('uv1', new THREE.Float32BufferAttribute(uv, 2));
    return g;
  }
  const unitBox = geo(new THREE.BoxGeometry(1, 1, 1));
  function mesh(parent: THREE.Object3D, name: string, g: THREE.BufferGeometry, m: THREE.Material, x = 0, y = 0, z = 0) {
    const o = new THREE.Mesh(g, m); o.name = name; o.position.set(x, y, z);
    o.castShadow = true; o.receiveShadow = true; parent.add(o); return o;
  }
  function box(parent: THREE.Object3D, name: string, x: number, y: number, z: number, w: number, h: number, d: number, m: THREE.Material) {
    const textured = m === paving;
    const o = mesh(parent, name, textured ? geo(metricUV(new THREE.BoxGeometry(w, h, d))) : unitBox, m, x, y, z);
    if (!textured) o.scale.set(w, h, d);
    return o;
  }
  const dummy = new THREE.Object3D();
  function matrix(x: number, y: number, z: number, w = 1, h = 1, d = 1, ry = 0) {
    dummy.position.set(x, y, z); dummy.rotation.set(0, ry, 0); dummy.scale.set(w, h, d); dummy.updateMatrix();
    return dummy.matrix.clone();
  }
  function instanced(parent: THREE.Object3D, name: string, g: THREE.BufferGeometry, m: THREE.Material, matrices: THREE.Matrix4[], castShadow = true) {
    const o = new THREE.InstancedMesh(g, m, matrices.length); o.name = name;
    matrices.forEach((value, i) => o.setMatrixAt(i, value));
    o.instanceMatrix.needsUpdate = true; o.computeBoundingBox(); o.computeBoundingSphere();
    o.castShadow = castShadow; o.receiveShadow = true; parent.add(o); instances.push(o); return o;
  }
  const p = warehouse.geometry.parameters;
  const left = warehouse.position.x - p.width / 2;
  const right = warehouse.position.x + p.width / 2;
  const front = warehouse.position.z + p.depth / 2;
  const back = warehouse.position.z - p.depth / 2;
  const roofY = warehouse.position.y + p.height / 2;

  // Folded 3D roof-edge cap/drip: inward flange embeds 3 mm into the existing top,
  // outer return drops 120 mm. No roof/PV/HVAC transforms or mounting details are changed.
  function dripGeometry(length: number) {
    const shape = new THREE.Shape();
    const points = [[-0.11, 0.014], [0.065, 0.014], [0.065, -0.12], [0.045, -0.12], [0.045, -0.003], [-0.11, -0.003]];
    points.forEach(([outward, y], i) => i ? shape.lineTo(-outward, y) : shape.moveTo(-outward, y));
    shape.closePath();
    const g = new THREE.ExtrudeGeometry(shape, { depth: length, steps: 1, bevelEnabled: false });
    g.rotateY(Math.PI / 2); return geo(g);
  }
  const cap = dripGeometry(p.width);
  mesh(root, 'Warehouse-FrontFoldedDripCap', cap, slate, left, roofY, front);
  const rearCap = mesh(root, 'Warehouse-RearFoldedDripCap', cap, slate, right, roofY, back);
  rearCap.rotation.y = Math.PI;
  // A 5 mm end joint separates the west cap from each 110 mm front/rear inward flange.
  const westCap = mesh(root, 'Warehouse-WestFoldedDripCap', dripGeometry(p.depth - 0.23), slate, left, roofY, back + 0.115);
  westCap.rotation.y = -Math.PI / 2;

  // Real L-section corner metal flashing only on exposed west corners, not in the office overlap.
  function cornerGeometry(sign: number) {
    const shape = new THREE.Shape();
    const points = [[-0.018, 0.018], [0.14, 0.018], [0.14, 0.006], [-0.006, 0.006], [-0.006, -0.14], [-0.018, -0.14]];
    points.forEach(([x, z], i) => i ? shape.lineTo(x, -z * sign) : shape.moveTo(x, -z * sign));
    shape.closePath();
    const g = new THREE.ExtrudeGeometry(shape, { depth: 4.98, steps: 1, bevelEnabled: false });
    g.rotateX(-Math.PI / 2); return geo(g);
  }
  mesh(root, 'Warehouse-WestFrontLFlashing', cornerGeometry(1), silver, left, 0.10, front);
  mesh(root, 'Warehouse-WestRearLFlashing', cornerGeometry(-1), silver, left, 0.10, back);

  // Closed doors are actual shallow box relief assemblies touching the solid shell, not apertures.
  // West loading door avoids the cabinet yard and the legacy detached front loading-bay overlay.
  const roller = new THREE.Group(); roller.name = 'Warehouse-WestClosedRollerDoor';
  roller.position.set(left, 0, 0); roller.rotation.y = -Math.PI / 2; root.add(roller);
  box(roller, 'RollerDoor-ClosedLeaf', 0, 1.77, 0.018, 3.00, 3.30, 0.048, slate);
  for (const x of [-1.555, 1.555]) box(roller, 'RollerDoor-DeepGuideJamb', x, 1.82, 0.052, 0.11, 3.40, 0.124, frame);
  box(roller, 'RollerDoor-HeadCasing', 0, 3.555, 0.08, 3.22, 0.18, 0.18, frame);
  box(roller, 'RollerDoor-LowerWeatherSeal', 0, 0.14, 0.057, 2.99, 0.036, 0.034, seal);
  box(roller, 'RollerDoor-GroundedThreshold', 0, 0.081, 0.13, 3.26, 0.082, 0.33, paving);
  const ribs: THREE.Matrix4[] = [];
  for (let i = 0; i < 22; i++) ribs.push(matrix(0, 0.22 + i * 0.148, 0.054, 2.98, 0.033, 0.032));
  instanced(roller, 'RollerDoor-22RaisedSlatRibs', unitBox, cladding, ribs);

  const personnel = new THREE.Group(); personnel.name = 'Warehouse-FrontClosedPersonnelDoor';
  personnel.position.set(-0.65, 0, front); root.add(personnel);
  box(personnel, 'PersonnelDoor-ClosedLeaf', 0, 1.22, 0.02, 0.98, 2.20, 0.054, slate);
  for (const x of [-0.545, 0.545]) box(personnel, 'PersonnelDoor-SteppedJambCasing', x, 1.255, 0.053, 0.10, 2.31, 0.126, frame);
  box(personnel, 'PersonnelDoor-HeadCasing', 0, 2.435, 0.053, 1.19, 0.10, 0.126, frame);
  box(personnel, 'PersonnelDoor-GroundedSill', 0, 0.083, 0.135, 1.22, 0.086, 0.34, paving);
  box(personnel, 'PersonnelDoor-HandleBackplate', 0.34, 1.18, 0.056, 0.043, 0.18, 0.016, silver);
  box(personnel, 'PersonnelDoor-HandleNeck', 0.34, 1.18, 0.082, 0.026, 0.026, 0.046, silver);
  box(personnel, 'PersonnelDoor-LeverHandle', 0.285, 1.18, 0.106, 0.13, 0.024, 0.026, silver);
  const hingeGeo = geo(new THREE.CylinderGeometry(0.014, 0.014, 0.10, 8));
  instanced(personnel, 'PersonnelDoor-3HingeBarrels', hingeGeo, silver, [0.38, 1.22, 2.06].map(y => matrix(-0.50, y, 0.054)));

  // Thin but volumetric raised panel joints. Clip them around both closed-door assemblies.
  const seams: THREE.Matrix4[] = [];
  function frontSeam(x: number, low: number, high: number) {
    seams.push(matrix(x, (low + high) / 2, front + 0.011, 0.024, high - low, 0.034));
  }
  function westSeam(z: number, low: number, high: number) {
    seams.push(matrix(left - 0.011, (low + high) / 2, z, 0.034, high - low, 0.024));
  }
  for (let i = 1; i < 8; i++) {
    const x = left + i * 1.2;
    frontSeam(x, Math.abs(x + 0.65) < 0.64 ? 2.52 : 0.14, 5.06);
  }
  for (let i = 1; i < 7; i++) {
    const z = back + i * 1.2;
    westSeam(z, Math.abs(z) < 1.68 ? 3.70 : 0.14, 5.06);
  }
  seams.push(matrix((left + right) / 2, 2.80, front + 0.014, p.width - 0.30, 0.024, 0.035));
  for (const [z0, z1] of [[back + 0.15, -1.68], [1.68, front - 0.15]]) {
    seams.push(matrix(left - 0.014, 2.80, (z0 + z1) / 2, 0.035, 0.024, z1 - z0));
  }
  instanced(root, 'Warehouse-16OpeningClippedPanelJoints', unitBox, cladding, seams);

  // A short service walkway, in the SAME zone coordinate frame as the actual two cabinets.
  // It does not go under product feet or alter their existing anchor/contact elevations.
  const service = new THREE.Group(); service.name = 'CommercialCabinetServiceWalkway';
  service.position.copy(building.position).multiplyScalar(-1); root.add(service);
  const cx = (cabinets[0].position.x + cabinets[1].position.x) / 2 + 0.10;
  const cz = Math.max(...cabinets.map(c => c.position.z)) + 1.55;
  box(service, 'ServiceWalkway-EmbeddedBedding', cx, 0.293, cz, 3.90, 0.086, 1.45, paving).castShadow = false;
  const paverGeo = geo(metricUV(new THREE.BoxGeometry(0.638, 0.042, 0.338)));
  const pavers: THREE.Matrix4[] = [];
  for (let row = 0; row < 4; row++) for (let col = 0; col < 6; col++) {
    pavers.push(matrix(cx - 1.62 + col * 0.648, 0.339, cz - 0.522 + row * 0.348));
  }
  instanced(service, 'ServiceWalkway-24JointedPavers', paverGeo, paving, pavers, false);
  const guardX = [cx - 1.77, cx + 1.77];
  instanced(service, 'ServiceWalkway-2GuardBasePlates', unitBox, silver,
    guardX.map(x => matrix(x, 0.366, cz + 0.58, 0.25, 0.018, 0.25)));
  const bollardGeo = geo(new THREE.CylinderGeometry(0.065, 0.065, 0.90, 10));
  instanced(service, 'ServiceWalkway-2SteelGuardBollards', bollardGeo, frame,
    guardX.map(x => matrix(x, 0.815, cz + 0.58)));
  service.userData.architecturalIllustration = true;
  service.userData.certifiedMountingOrProtection = false;

  // Do not clone loader placeholders: Texture.clone() shares the source present at clone time.
  // Waiting ensures all current home PBR channels have loaded before assigning owned copies.
  function applyPaving(set: PbrTextureSet) {
    if (disposed) return;
    const channels = { map: set.color, normalMap: set.normal, roughnessMap: set.roughness, aoMap: set.ao };
    for (const key of ['map', 'normalMap', 'roughnessMap', 'aoMap'] as const) {
      const source = channels[key];
      if (!source) continue;
      const t = source.clone(); t.wrapS = t.wrapT = THREE.RepeatWrapping;
      t.repeat.set(1 / 0.75, 1 / 0.75); t.offset.set(0, 0); t.rotation = 0;
      t.colorSpace = key === 'map' ? THREE.SRGBColorSpace : THREE.NoColorSpace;
      t.channel = key === 'aoMap' ? 1 : 0; t.needsUpdate = true;
      ownedTextures.push(t); paving[key] = t;
    }
    paving.color.set(0xffffff); paving.roughness = 1; paving.normalScale.set(0.55, 0.55); paving.aoMapIntensity = 0.65;
    paving.needsUpdate = true;
  }
  // Without an explicit readiness signal, retain the safe untextured fallback.
  if (textures.homePbrReady) {
    void textures.homePbrReady.then(() => {
      if (!disposed && textures.homePbr) applyPaving(textures.homePbr.paving);
    }).catch(() => { /* Loading failed: retain untextured architectural paving, with no retry/download. */ });
  }

  return {
    root,
    dispose() {
      if (disposed) return;
      disposed = true; root.removeFromParent();
      instances.forEach(o => o.dispose());
      geometries.forEach(g => g.dispose()); materials.forEach(m => m.dispose()); ownedTextures.forEach(t => t.dispose());
      root.clear();
    },
  };
}
