import * as THREE from 'three';

/** Architectural illustration only: not a construction detail or manufacturer installation drawing. */
export type HomeDetailSurface = 'stone' | 'wood' | 'plaster';
export interface HomeDetailMaps {
  map?: THREE.Texture;
  normalMap?: THREE.Texture;
  roughnessMap?: THREE.Texture;
  aoMap?: THREE.Texture;
  /** UVs are in metres; one texture tile covers this many metres. */
  metresPerTile?: number;
  color?: number | string | THREE.Color;
}
export interface HomeArchitectureMaterials {
  frame: THREE.MeshStandardMaterial;
  silver: THREE.MeshStandardMaterial;
  glass: THREE.MeshPhysicalMaterial;
}

export function createHomeArchitectureDetail(
  homeBody: THREE.Group,
  roofSkin: THREE.Group,
  shared: HomeArchitectureMaterials
) {
  const root = new THREE.Group(); root.name = 'HomeArchitectureEntityDetails'; homeBody.add(root);
  const roofRoot = new THREE.Group(); roofRoot.name = 'HomeEaveDrainageDetails'; roofSkin.add(roofRoot);
  const geometries: THREE.BufferGeometry[] = [];
  const ownedMaterials: THREE.Material[] = [];
  const ownedTextures = new Map<HomeDetailSurface, THREE.Texture[]>();
  const geo = <T extends THREE.BufferGeometry>(g: T): T => { geometries.push(g); return g; };
  const material = (color: number, roughness = 0.85, metalness = 0) => {
    const m = new THREE.MeshStandardMaterial({ color, roughness, metalness }); ownedMaterials.push(m); return m;
  };
  const stone = material(0xcec8bc, 0.94);
  const wood = material(0xc0a17b, 0.86);
  const plaster = material(0xe5e0d3, 0.93);
  const mortar = material(0xada89d, 1);
  const dampProof = material(0x74756b, 0.97);
  const seal = material(0x141e20, 0.95);
  const surfaceMaterials = { stone, wood, plaster };
  const random = (n: number) => { const v = Math.sin(n * 137.2 + 14.7) * 43217.72; return v - Math.floor(v); };

  // Physical planar UVs: prevent stretching a single photo across a long board or stone course.
  function metricUV(g: THREE.BufferGeometry) {
    const p = g.getAttribute('position'), n = g.getAttribute('normal');
    if (!p || !n) throw new Error('Home detail geometry requires positions and normals');
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
    const textured = m === wood || m === stone || m === plaster;
    const o = mesh(parent, name, textured ? geo(metricUV(new THREE.BoxGeometry(w, h, d))) : unitBox, m, x, y, z);
    if (!textured) o.scale.set(w, h, d); return o;
  }
  function tube(parent: THREE.Object3D, name: string, points: THREE.Vector3[], radius: number, m: THREE.Material, segments = 16) {
    return mesh(parent, name, geo(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), segments, radius, 8, false)), m);
  }
  function frameLeaf(cx: number, cz: number, width: number) {
    const bottom = 0.145, top = 3.055;
    for (const x of [cx - width / 2, cx + width / 2]) {
      box(root, 'LivingGlassSash-Stile', x, (bottom + top) / 2, cz, 0.045, top - bottom, 0.062, shared.frame);
      box(root, 'LivingGlassSash-Gasket', x + (x < cx ? 0.024 : -0.024), 1.6, cz - 0.028, 0.012, 2.79, 0.017, seal);
    }
    for (const y of [bottom + 0.025, top - 0.025]) {
      box(root, 'LivingGlassSash-Rail', cx, y, cz, width, 0.055, 0.065, shared.frame);
      box(root, 'LivingGlassSash-HorizontalSeal', cx, y + (y < 1 ? 0.032 : -0.032), cz - 0.025, width - 0.085, 0.012, 0.018, seal);
    }
  }
  // Original 3.3 x 2.9 m glass plane in campusWorld is retained; these sashes enclose its edges.
  // No glass is added in the left cutaway opening (-0.75 .. 2.8 m).
  frameLeaf(3.675, 2.476, 1.65);
  frameLeaf(5.325, 2.493, 1.65);
  const pull = tube(root, 'LivingSlidingDoor-UShapedPull', [
    new THREE.Vector3(4.55, 1.0, 2.535), new THREE.Vector3(4.55, 1.035, 2.605),
    new THREE.Vector3(4.55, 1.285, 2.605), new THREE.Vector3(4.55, 1.32, 2.535),
  ], 0.013, shared.silver, 12);
  pull.userData.architecturalIllustration = true;
  for (const y of [1.01, 1.31]) box(root, 'DoorPull-Seat', 4.55, y, 2.532, 0.048, 0.045, 0.017, shared.frame);

  // Open twin-channel extruded track (cross section is an actual U profile, not a solid bar).
  const channel = new THREE.Shape();
  channel.moveTo(-0.092, 0); channel.lineTo(0.092, 0); channel.lineTo(0.092, 0.043);
  channel.lineTo(0.078, 0.043); channel.lineTo(0.078, 0.012); channel.lineTo(0.008, 0.012);
  channel.lineTo(0.008, 0.038); channel.lineTo(-0.008, 0.038); channel.lineTo(-0.008, 0.012);
  channel.lineTo(-0.078, 0.012); channel.lineTo(-0.078, 0.043); channel.lineTo(-0.092, 0.043); channel.closePath();
  const trackGeo = geo(new THREE.ExtrudeGeometry(channel, { depth: 7.1, steps: 1, bevelEnabled: false }));
  trackGeo.rotateY(Math.PI / 2); trackGeo.translate(-3.55, 0, 0);
  mesh(root, 'LivingBay-TwinSlidingTrack', trackGeo, shared.silver, 2.8, 0.133, 2.49);
  const headTrack = mesh(root, 'LivingBay-HeadTrackChannels', trackGeo, shared.frame, 2.8, 3.045, 2.49);
  headTrack.rotation.z = Math.PI;
  for (const x of [-0.73, 6.23]) box(root, 'LivingBay-JambReveal', x, 1.55, 2.35, 0.13, 3.0, 0.23, plaster);
  box(root, 'LivingBay-LintelShadowReveal', 2.8, 3.025, 2.285, 7.1, 0.027, 0.11, seal);
  box(root, 'LivingBay-ThresholdStone', 2.8, 0.083, 2.81, 7.4, 0.032, 0.57, stone);
  box(root, 'LivingBay-ThresholdDripLip', 2.8, 0.07, 3.09, 7.4, 0.022, 0.033, stone);

  // Two real panes fitted inside side-window stepped jambs and glazing beads.
  for (const z of [-1.26, 0, 1.26]) {
    box(root, 'TechnicalWindow-OuterStile', -6.005, 1.75, z, 0.095, 1.76, 0.065, shared.frame);
    box(root, 'TechnicalWindow-InnerGlazingBead', -6.065, 1.75, z, 0.018, 1.65, 0.024, shared.silver);
  }
  for (const y of [0.89, 2.61]) {
    box(root, 'TechnicalWindow-OuterRail', -6.005, y, 0, 0.095, 0.065, 2.6, shared.frame);
    box(root, 'TechnicalWindow-RailSeal', -6.056, y + (y < 1 ? 0.038 : -0.038), 0, 0.013, 0.016, 2.46, seal);
  }
  for (const z of [-0.63, 0.63]) {
    const pane = box(root, 'TechnicalWindow-SeatedPane', -6.012, 1.75, z, 0.012, 1.63, 1.195, shared.glass);
    pane.castShadow = false;
  }
  box(root, 'TechnicalWindow-DeepStoneSill', -6.04, 0.845, 0, 0.32, 0.065, 2.77, stone);
  box(root, 'TechnicalWindow-UndercutDrip', -6.191, 0.818, 0, 0.015, 0.014, 2.61, seal);
  for (const z of [-1.33, 1.33]) box(root, 'TechnicalWindow-SteppedPlasterReveal', -6.006, 1.75, z, 0.07, 1.79, 0.035, plaster);
  box(root, 'TechnicalWindow-PlasterHeadReveal', -6.006, 2.66, 0, 0.07, 0.035, 2.7, plaster);

  // Continuous skirting and waterproof base stay on masonry, not on equipment faces.
  for (const x of [-5.995, -0.785]) box(root, 'TechnicalCorner-RenderStop', x, 1.78, 2.712, 0.035, 3.42, 0.045, plaster);
  box(root, 'TechnicalBase-WaterproofBand', -3.4, 0.09, 2.724, 5.2, 0.18, 0.04, dampProof);
  box(root, 'TechnicalSide-WaterproofBand', -6.015, 0.09, 0, 0.04, 0.18, 5.4, dampProof);
  box(root, 'LivingInterior-BackSkirting', 2.8, 0.2, -2.317, 7.2, 0.115, 0.034, wood);
  box(root, 'LivingInterior-SideSkirting', 6.168, 0.2, -0.05, 0.034, 0.115, 4.8, wood);
  box(root, 'LivingOuter-WaterproofSkirting', 6.473, 0.17, 0, 0.045, 0.28, 5.19, dampProof);
  box(root, 'Plinth-MortarBacking', -3.4, 0.37, 2.713, 5.18, 0.35, 0.028, mortar);
  const brickGeo = geo(metricUV(new THREE.BoxGeometry(0.312, 0.105, 0.027)));
  const brickMatrices: THREE.Matrix4[] = [];
  const dummy = new THREE.Object3D();
  for (let row = 0; row < 3; row++) for (let col = 0; col < 16; col++) {
    dummy.position.set(-5.81 + col * 0.322 + (row % 2) * 0.08, 0.25 + row * 0.116, 2.74);
    dummy.rotation.set(0, 0, 0); dummy.scale.setScalar(1); dummy.updateMatrix(); brickMatrices.push(dummy.matrix.clone());
  }
  const bricks = new THREE.InstancedMesh(brickGeo, stone, brickMatrices.length); bricks.name = 'HomePlinth-RunningBond48StoneBlocks';
  brickMatrices.forEach((matrix, i) => { bricks.setMatrixAt(i, matrix); bricks.setColorAt(i, new THREE.Color().setScalar(0.92 + random(i) * 0.08)); });
  bricks.castShadow = true; bricks.receiveShadow = true; root.add(bricks);
  box(root, 'Plinth-StoneCoping', -3.4, 0.576, 2.746, 5.2, 0.042, 0.09, stone);

  // Recessed/fluted timber profile, with bevelled edges and a real narrow channel in each board.
  const board = new THREE.Shape();
  board.moveTo(-0.078, 0); board.lineTo(0.078, 0); board.lineTo(0.078, -0.043);
  board.lineTo(0.014, -0.043); board.lineTo(0.014, -0.031); board.lineTo(-0.014, -0.031);
  board.lineTo(-0.014, -0.043); board.lineTo(-0.078, -0.043); board.closePath();
  const boardGeo = new THREE.ExtrudeGeometry(board, { depth: 3.02, bevelEnabled: true, bevelSegments: 1, bevelSize: 0.002, bevelThickness: 0.002, steps: 1 });
  boardGeo.rotateX(-Math.PI / 2); boardGeo.rotateY(Math.PI / 2); metricUV(boardGeo); geo(boardGeo);
  const boards = new THREE.InstancedMesh(boardGeo, wood, 28); boards.name = 'HomeRightReveal-28FlutedTimberBoards';
  for (let i = 0; i < 28; i++) {
    dummy.position.set(6.474, 0.34, -2.38 + i * 0.176); dummy.rotation.set(0, 0, 0); dummy.scale.setScalar(1); dummy.updateMatrix();
    boards.setMatrixAt(i, dummy.matrix); boards.setColorAt(i, new THREE.Color().setScalar(0.9 + random(i + 51) * 0.1));
  }
  boards.castShadow = true; boards.receiveShadow = true; root.add(boards);
  for (const y of [0.31, 3.385]) box(root, 'TimberCladding-EdgeCap', 6.49, y, 0, 0.07, 0.035, 5.03, shared.frame);

  // Eave soffit boards and modest structural brackets, using the ORIGINAL roof transform.
  const soffitGeo = geo(metricUV(new THREE.BoxGeometry(0.398, 0.028, 0.54)));
  const soffit = new THREE.InstancedMesh(soffitGeo, wood, 32); soffit.name = 'HomeEave-32SoffitBoards';
  for (let i = 0; i < 32; i++) {
    dummy.position.set(-6.25 + i * 0.404, -0.168, 2.84); dummy.rotation.set(0, 0, 0); dummy.scale.setScalar(1); dummy.updateMatrix(); soffit.setMatrixAt(i, dummy.matrix);
  }
  soffit.receiveShadow = true; soffit.castShadow = true; roofRoot.add(soffit);
  for (const x of [-5.9, -3, 0, 3, 5.9]) {
    box(roofRoot, 'Eave-RafterTail', x, -0.22, 2.75, 0.075, 0.14, 0.76, wood);
    box(roofRoot, 'Eave-FasciaReturn', x, -0.09, 3.16, 0.105, 0.23, 0.075, shared.frame);
  }
  box(root, 'LivingBeam-EndBearing', 6.175, 2.96, 2.32, 0.18, 0.21, 0.23, shared.frame);
  box(root, 'LivingBeam-TechnicalBearing', -0.715, 2.96, 2.32, 0.18, 0.21, 0.23, shared.frame);

  // Thick-walled open half-round gutter: correct downward basin, rolled lip, ends and straps.
  const gutterShape = new THREE.Shape();
  for (let i = 0; i <= 16; i++) {
    const a = Math.PI + i * Math.PI / 16, x = Math.cos(a) * 0.092, y = Math.sin(a) * 0.092;
    if (i === 0) gutterShape.moveTo(x, y); else gutterShape.lineTo(x, y);
  }
  for (let i = 16; i >= 0; i--) { const a = Math.PI + i * Math.PI / 16; gutterShape.lineTo(Math.cos(a) * 0.079, Math.sin(a) * 0.079); }
  gutterShape.closePath();
  const gutterGeo = geo(new THREE.ExtrudeGeometry(gutterShape, { depth: 13.2, steps: 1, bevelEnabled: false }));
  gutterGeo.translate(0, 0, -6.6); gutterGeo.rotateY(Math.PI / 2);
  mesh(roofRoot, 'HomeRainGutter-OpenThickUChannel', gutterGeo, shared.frame, 0, -0.11, 3.29);
  const lipGeo = geo(new THREE.CylinderGeometry(0.011, 0.011, 13.2, 6)); lipGeo.rotateZ(Math.PI / 2);
  for (const z of [3.198, 3.382]) mesh(roofRoot, 'RainGutter-RolledLip', lipGeo, shared.silver, 0, -0.11, z);
  const capShape = new THREE.Shape(); capShape.moveTo(-0.092, 0);
  for (let i = 1; i <= 16; i++) { const a = Math.PI + i * Math.PI / 16; capShape.lineTo(Math.cos(a) * 0.092, Math.sin(a) * 0.092); } capShape.closePath();
  const capGeo = geo(new THREE.ExtrudeGeometry(capShape, { depth: 0.008, bevelEnabled: false })); capGeo.rotateY(Math.PI / 2);
  for (const x of [-6.608, 6.6]) mesh(roofRoot, 'RainGutter-SolidEndCap', capGeo, shared.frame, x, -0.11, 3.29);
  const strapGeo = geo(new THREE.TorusGeometry(0.101, 0.012, 5, 12, Math.PI)); strapGeo.rotateZ(Math.PI); strapGeo.rotateY(Math.PI / 2);
  for (let i = 0; i < 13; i++) {
    const x = -6 + i;
    mesh(roofRoot, 'RainGutter-HalfRoundSupportStrap', strapGeo, shared.silver, x, -0.11, 3.29);
    box(roofRoot, 'RainGutter-HangerSeat', x, -0.08, 3.17, 0.034, 0.07, 0.12, shared.silver);
  }
  roofSkin.updateWorldMatrix(true, false);
  const outlet = homeBody.worldToLocal(roofSkin.localToWorld(new THREE.Vector3(6.3, -0.19, 3.29)));
  const dropX = outlet.x + 0.13, dropZ = outlet.z - 0.34;
  tube(root, 'RainDownpipe-OffsetElbowsAndDischarge', [outlet,
    new THREE.Vector3(outlet.x, outlet.y - 0.15, outlet.z),
    new THREE.Vector3(dropX, outlet.y - 0.4, dropZ),
    new THREE.Vector3(dropX, outlet.y - 0.62, dropZ),
    new THREE.Vector3(dropX, 0.35, dropZ),
    new THREE.Vector3(dropX, 0.15, dropZ),
    new THREE.Vector3(dropX, 0.075, dropZ + 0.16),
  ], 0.047, shared.frame, 40);
  const sleeveGeo = geo(new THREE.CylinderGeometry(0.056, 0.056, 0.082, 10, 1, true));
  const bandGeo = geo(new THREE.TorusGeometry(0.056, 0.007, 5, 10)); bandGeo.rotateX(Math.PI / 2);
  for (const y of [0.36, 1.35, 2.4]) {
    mesh(root, 'RainDownpipe-JointSleeve', sleeveGeo, shared.frame, dropX, y, dropZ);
    mesh(root, 'RainDownpipe-WallCollar', bandGeo, shared.silver, dropX, y, dropZ);
    box(root, 'RainDownpipe-WallBracket', (dropX + 6.46) / 2, y, dropZ, dropX - 6.46, 0.035, 0.036, shared.silver);
    box(root, 'RainDownpipe-BracketWallSeat', 6.483, y, dropZ, 0.045, 0.09, 0.065, shared.frame);
  }
  const outletRing = geo(new THREE.CylinderGeometry(0.08, 0.05, 0.12, 12, 1, true));
  mesh(root, 'RainGutter-OutletSocket', outletRing, shared.silver, outlet.x, outlet.y - 0.015, outlet.z);

  // Fine stone paving at actual home-pad level (top -0.005 m). Reserved battery pad is untouched.
  const paverGeo = geo(metricUV(new THREE.BoxGeometry(0.588, 0.038, 0.388)));
  const paverMatrices: THREE.Matrix4[] = [];
  function pave(x: number, z: number) {
    if (x > -3.49 && x < -2.0 && z < 3.54) return;
    dummy.position.set(x, -0.024, z); dummy.rotation.set(0, 0, 0); dummy.scale.setScalar(1); dummy.updateMatrix(); paverMatrices.push(dummy.matrix.clone());
  }
  for (let row = 0; row < 4; row++) for (let col = 0; col < 20; col++) pave(-5.62 + col * 0.6, 2.9 + row * 0.4);
  // Central branch avoids the original zone01 stepping stones and both existing bollards.
  for (let row = 0; row < 4; row++) for (let col = 0; col < 3; col++) pave(-0.42 + col * 0.6, 4.5 + row * 0.4);
  for (let row = 0; row < 3; row++) for (let col = 0; col < 3; col++) pave(-5.62 + col * 0.6, 4.5 + row * 0.4);
  const paving = new THREE.InstancedMesh(paverGeo, stone, paverMatrices.length); paving.name = 'HomeCourtyard-JointedStonePaving';
  paverMatrices.forEach((matrix, i) => { paving.setMatrixAt(i, matrix); paving.setColorAt(i, new THREE.Color().setScalar(0.91 + random(i + 117) * 0.09)); });
  paving.castShadow = false; paving.receiveShadow = true; root.add(paving);
  for (const [x, w] of [[-2.4, 3.5], [3.62, 5.1]] as const) box(root, 'Courtyard-LowBoundaryKerb', x, 0.017, 4.326, w, 0.052, 0.048, stone);
  for (const x of [-0.749, 1.109]) box(root, 'EntrancePath-SideBoundary', x, 0.014, 5.15, 0.045, 0.05, 1.7, stone);
  box(root, 'EntrancePath-EndLandingEdge', 0.18, -0.003, 5.914, 1.86, 0.032, 0.048, stone);
  // Discharge splash stone is an architectural detail, outside the equipment apron.
  box(root, 'RainDischarge-SplashStone', dropX, -0.005, dropZ + 0.18, 0.26, 0.027, 0.38, stone);

  return {
    root, roofRoot, surfaceMaterials,
    setSurfaceMaps(surface: HomeDetailSurface, maps: HomeDetailMaps) {
      ownedTextures.get(surface)?.forEach(t => t.dispose());
      const clones: THREE.Texture[] = [];
      const m = surfaceMaterials[surface];
      for (const key of ['map', 'normalMap', 'roughnessMap', 'aoMap'] as const) {
        const source = maps[key];
        if (!source) { m[key] = null; continue; }
        const t = source.clone(); t.wrapS = t.wrapT = THREE.RepeatWrapping;
        const tile = maps.metresPerTile && maps.metresPerTile > 0 ? maps.metresPerTile : 1;
        t.repeat.set(1 / tile, 1 / tile); t.colorSpace = key === 'map' ? THREE.SRGBColorSpace : THREE.NoColorSpace;
        t.needsUpdate = true; clones.push(t); m[key] = t;
      }
      if (maps.color !== undefined) m.color.set(maps.color);
      ownedTextures.set(surface, clones); m.needsUpdate = true;
    },
    dispose() {
      root.removeFromParent(); roofRoot.removeFromParent();
      geometries.forEach(g => g.dispose()); ownedMaterials.forEach(m => m.dispose());
      ownedTextures.forEach(list => list.forEach(t => t.dispose()));
    },
  };
}
