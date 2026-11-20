import * as THREE from 'three';
import type { PbrTextureSet, TextureBundle } from './textures';

/** Civil/architectural illustration, not surveyed terrain, manufacturer CAD, or installation advice. */
export function createOffgridArchitectureDetail(
  worldRoot: THREE.Group,
  textures: TextureBundle
): { root: THREE.Group; dispose: () => void } {
  const near = (a: number, b: number) => Math.abs(a - b) < 0.00001;
  const isBox = (object: THREE.Object3D, w: number, h: number, d: number): object is THREE.Mesh<THREE.BoxGeometry> => {
    if (!(object instanceof THREE.Mesh) || !(object.geometry instanceof THREE.BoxGeometry)) return false;
    const p = object.geometry.parameters;
    return near(p.width, w) && near(p.height, h) && near(p.depth, d);
  };
  // The existing Zone 03 shell is unnamed. Match its actual primitive/anchor, not a guessed building name.
  const zone = worldRoot.children.find(object => object instanceof THREE.Group &&
    near(object.position.x, 21) && near(object.position.z, 15.2) && object.children.some(child =>
      isBox(child, 5.2, 2.75, 0.24) && near(child.position.x, 1.2) && near(child.position.z, -1.65)));
  const terrain = worldRoot.children.find(object => object instanceof THREE.Mesh &&
    object.geometry instanceof THREE.PlaneGeometry && near(object.geometry.parameters.width, 190) &&
    near(object.geometry.parameters.height, 190));
  if (!(zone instanceof THREE.Group) || !(terrain instanceof THREE.Mesh)) {
    throw new Error('Off-grid detail requires the existing Zone 03 cabin and 190 m campus terrain mesh.');
  }
  const back = zone.children.find(object => isBox(object, 5.2, 2.75, 0.24));
  const side = zone.children.find(object => isBox(object, 0.24, 2.75, 3.2));
  const roof = zone.children.find(object => isBox(object, 6.2, 0.2, 4.2));
  const deck = zone.children.find(object => object instanceof THREE.Mesh &&
    object.geometry instanceof THREE.ExtrudeGeometry && near(object.geometry.parameters.options.depth ?? 0, 0.28));
  const bench = zone.children.find(object => isBox(object, 3.8, 0.22, 1.15));
  const station = zone.children.find(object => object.name === 'MeshProduct-volt1000');
  if (!(back instanceof THREE.Mesh) || !(side instanceof THREE.Mesh) || !(roof instanceof THREE.Mesh) ||
      !(deck instanceof THREE.Mesh) || !(bench instanceof THREE.Mesh) || !station ||
      !near(back.position.y, 1.68) || !near(side.position.x, 3.7) || !near(side.position.z, -0.15) ||
      !near(roof.position.x, 1.2) || !near(roof.position.y, 3.22) || !near(roof.position.z, -0.1) ||
      !near(roof.rotation.x, 0.14) || !near(roof.rotation.y, 0) || !near(roof.rotation.z, 0) ||
      !near(deck.position.x, 0.2) || !near(deck.position.y, 0.02) || !near(deck.position.z, 0) ||
      !near(bench.position.x, -0.9) || !near(bench.position.y, 0.36) || !near(bench.position.z, 1.65) ||
      !near(station.position.x, 0.55) || !near(station.position.y, 0.48) || !near(station.position.z, 2.05)) {
    throw new Error('Off-grid cabin/device layout changed; remeasure before applying this architectural concept.');
  }
  if (zone.getObjectByName('OffgridArchitectureEntityDetails')) {
    throw new Error('Off-grid architectural detail is already attached; dispose it before recreating.');
  }
  worldRoot.updateWorldMatrix(true, true);
  const inverseZone = zone.matrixWorld.clone().invert();
  // Vertex-space bounds stay precise even when the parent world is translated/rotated/scaled.
  const localBounds = (object: THREE.Object3D) => {
    const bounds = new THREE.Box3();
    const vertex = new THREE.Vector3();
    object.traverse(child => {
      if (!(child instanceof THREE.Mesh)) return;
      const positions = child.geometry.getAttribute('position');
      const matrix = inverseZone.clone().multiply(child.matrixWorld);
      for (let i = 0; i < positions.count; i++) {
        vertex.fromBufferAttribute(positions, i).applyMatrix4(matrix); bounds.expandByPoint(vertex);
      }
    });
    return bounds;
  };
  const deckBounds = localBounds(deck), benchBounds = localBounds(bench), stationBounds = localBounds(station);
  const deckTop = deckBounds.max.y;
  if (!Number.isFinite(deckTop) || !near(deckTop, 0.35)) {
    throw new Error('Off-grid deck datum changed; entry/support heights need remeasurement.');
  }
  // Raycast the existing 72 x 72 triangulated surface, NOT the smoother analytic height approximation.
  const raycaster = new THREE.Raycaster();
  const rayStart = new THREE.Vector3(), rayEnd = new THREE.Vector3(), rayDirection = new THREE.Vector3();
  const hitLocal = new THREE.Vector3();
  function groundY(x: number, z: number): number {
    rayStart.set(x, 100, z).applyMatrix4(zone!.matrixWorld);
    rayEnd.set(x, -100, z).applyMatrix4(zone!.matrixWorld);
    rayDirection.copy(rayEnd).sub(rayStart).normalize();
    raycaster.set(rayStart, rayDirection);
    const hit = raycaster.intersectObject(terrain!, false)[0];
    if (!hit) throw new Error('Off-grid architectural base is outside the current terrain surface.');
    const y = hitLocal.copy(hit.point).applyMatrix4(inverseZone).y;
    if (!Number.isFinite(y)) throw new Error('Nonfinite off-grid terrain intersection.');
    return y;
  }
  function groundRange(x: number, z: number, width: number, depth: number) {
    let min = Infinity, max = -Infinity;
    for (let i = 0; i <= 4; i++) for (let j = 0; j <= 4; j++) {
      const y = groundY(x + width * (i / 4 - 0.5), z + depth * (j / 4 - 0.5));
      min = Math.min(min, y); max = Math.max(max, y);
    }
    return { min, max };
  }

  const root = new THREE.Group(); root.name = 'OffgridArchitectureEntityDetails';
  root.userData.architecturalConcept = true;
  root.userData.manufacturerCad = false;
  root.userData.terrainSampling = 'actual campus PlaneGeometry triangles, 5 x 5 samples/base, 45 mm embedment';
  root.userData.originalOpenFrontRetained = true;
  const geometries = new Set<THREE.BufferGeometry>();
  const materials = new Set<THREE.Material>();
  const ownedTextures = new Set<THREE.Texture>();
  const instances: THREE.InstancedMesh[] = [];
  let disposed = false;
  const track = <T extends THREE.BufferGeometry>(geometry: T): T => { geometries.add(geometry); return geometry; };
  const surface = (color: number, roughness = 0.85, metalness = 0) => {
    const material = new THREE.MeshStandardMaterial({ color, roughness, metalness });
    materials.add(material); return material;
  };
  const timber = surface(0xb89c7d, 0.86);
  const paving = surface(0xc8c6bb, 0.94);
  const render = surface(0xcacac2, 0.95);
  const frame = surface(0x425054, 0.64, 0.32);
  const zinc = surface(0xa3adae, 0.47, 0.7);
  const supportSteel = surface(0x697477, 0.61, 0.52);
  // No emissive material, light, texture load, source-material edit, or lighting-state callback.
  function metricUV(geometry: THREE.BufferGeometry) {
    const p = geometry.getAttribute('position'), n = geometry.getAttribute('normal');
    const uv: number[] = [];
    for (let i = 0; i < p.count; i++) {
      const nx = Math.abs(n.getX(i)), ny = Math.abs(n.getY(i)), nz = Math.abs(n.getZ(i));
      if (ny >= nx && ny >= nz) uv.push(p.getX(i), p.getZ(i));
      else if (nx >= nz) uv.push(p.getZ(i), p.getY(i));
      else uv.push(p.getX(i), p.getY(i));
    }
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geometry.setAttribute('uv1', new THREE.Float32BufferAttribute(uv, 2));
    return geometry;
  }
  function mesh(parent: THREE.Object3D, name: string, geometry: THREE.BufferGeometry, material: THREE.Material,
    x = 0, y = 0, z = 0) {
    const object = new THREE.Mesh(track(geometry), material); object.name = name; object.position.set(x, y, z);
    object.castShadow = true; object.receiveShadow = true; parent.add(object); return object;
  }
  function box(parent: THREE.Object3D, name: string, x: number, y: number, z: number,
    width: number, height: number, depth: number, material: THREE.Material) {
    return mesh(parent, name, metricUV(new THREE.BoxGeometry(width, height, depth)), material, x, y, z);
  }
  const dummy = new THREE.Object3D();
  function repeated(parent: THREE.Object3D, name: string, geometry: THREE.BufferGeometry,
    material: THREE.Material, poses: { x: number; y: number; z: number; rotationY?: number }[]) {
    const object = new THREE.InstancedMesh(track(geometry), material, poses.length); object.name = name;
    poses.forEach((p, i) => {
      dummy.position.set(p.x, p.y, p.z); dummy.rotation.set(0, p.rotationY ?? 0, 0); dummy.scale.setScalar(1);
      dummy.updateMatrix(); object.setMatrixAt(i, dummy.matrix);
    });
    object.instanceMatrix.needsUpdate = true; object.castShadow = true; object.receiveShadow = true;
    instances.push(object); parent.add(object); return object;
  }
  // Merge differently sized grounded blocks without instance scaling that would stretch metric UVs.
  type Block = { x: number; y: number; z: number; width: number; height: number; depth: number };
  function mergedBlocks(name: string, blocks: Block[], material: THREE.Material) {
    const positions: number[] = [], normals: number[] = [], uv: number[] = [], indices: number[] = [];
    for (const b of blocks) {
      const geometry = metricUV(new THREE.BoxGeometry(b.width, b.height, b.depth));
      geometry.translate(b.x, b.y, b.z);
      const p = geometry.getAttribute('position'), n = geometry.getAttribute('normal'), t = geometry.getAttribute('uv');
      const offset = positions.length / 3;
      for (let i = 0; i < p.count; i++) {
        positions.push(p.getX(i), p.getY(i), p.getZ(i));
        normals.push(n.getX(i), n.getY(i), n.getZ(i)); uv.push(t.getX(i), t.getY(i));
      }
      const index = geometry.getIndex()!;
      for (let i = 0; i < index.count; i++) indices.push(offset + index.getX(i));
      geometry.dispose(); // temporary CPU geometry; never shared with the original scene
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geometry.setAttribute('uv1', new THREE.Float32BufferAttribute(uv, 2)); geometry.setIndex(indices);
    return mesh(root, name, geometry, material);
  }

  // 38 mm thin battens at approximately 190 mm pitch: tangible relief, not a screenshot plane.
  const battenGeometry = metricUV(new THREE.BoxGeometry(0.038, 2.61, 0.024));
  const inner: { x: number; y: number; z: number }[] = [], outer: typeof inner = [];
  for (let i = 0; i < 27; i++) {
    const x = back.position.x - 2.6 + (i + 0.5) * 5.2 / 27;
    inner.push({ x, y: 1.68, z: -1.521 });
    // Existing rear controller box (-.6, 1.4, -1.78) gets a clear vertical strip; no device cladding.
    if (Math.abs(x + 0.6) > 0.18) outer.push({ x, y: 1.68, z: -1.779 });
  }
  repeated(root, 'CabinBack-InteriorTimberBattens', battenGeometry, timber, inner);
  repeated(root, 'CabinBack-ExteriorTimberBattens-ControllerClear', battenGeometry, timber, outer);
  repeated(root, 'CabinEast-17TimberBattens', battenGeometry, timber,
    Array.from({ length: 17 }, (_, i) => ({ x: 3.829, y: 1.68, z: -1.75 + (i + 0.5) * 3.2 / 17, rotationY: Math.PI / 2 })));
  box(root, 'CabinBack-InteriorBaseTrim', 1.2, 0.373, -1.507, 5.14, 0.095, 0.037, timber);
  box(root, 'CabinEast-BaseWeatherTrim', 3.83, 0.373, -0.15, 0.04, 0.095, 3.18, frame);
  for (const x of [-1.418, 3.818]) box(root, 'CabinRear-CornerStop', x, 1.68, -1.78, 0.043, 2.68, 0.044, frame);

  const roofRoot = new THREE.Group(); roofRoot.name = 'OffgridOriginalSlope-EaveDetails';
  roofRoot.position.copy(roof.position); roofRoot.quaternion.copy(roof.quaternion); roofRoot.scale.copy(roof.scale); root.add(roofRoot);
  box(roofRoot, 'CabinEave-LowFrontFascia', 0, -0.015, 2.112, 6.2, 0.2, 0.035, frame);
  box(roofRoot, 'CabinEave-RearFascia', 0, -0.015, -2.112, 6.2, 0.2, 0.035, frame);
  for (const x of [-3.112, 3.112]) box(roofRoot, 'CabinEave-SlopeSideFascia', x, -0.015, 0, 0.035, 0.2, 4.2, frame);
  const soffitPoses: { x: number; y: number; z: number }[] = [];
  for (let i = 0; i < 16; i++) for (const z of [-1.88, 1.88]) {
    soffitPoses.push({ x: -3.1 + (i + 0.5) * 6.2 / 16, y: -0.11, z });
  }
  repeated(roofRoot, 'CabinEave-32JointedSoffitBoards', metricUV(new THREE.BoxGeometry(0.3815, 0.026, 0.42)), timber, soffitPoses);
  repeated(roofRoot, 'CabinEave-6RafterTails', metricUV(new THREE.BoxGeometry(0.065, 0.09, 0.58)), timber,
    [-2.65, 0, 2.65].flatMap(x => [-1.81, 1.81].map(z => ({ x, y: -0.144, z }))));
  // A closed approximately 1.2 mm conceptual folded-metal profile, extruded along roof-local X.
  const drip = new THREE.Shape();
  drip.moveTo(2.06, 0.101); drip.lineTo(2.145, 0.101); drip.lineTo(2.145, -0.044);
  drip.lineTo(2.135, -0.055); drip.lineTo(2.1341, -0.0542); drip.lineTo(2.1438, -0.0435);
  drip.lineTo(2.1438, 0.0998); drip.lineTo(2.06, 0.0998); drip.closePath();
  const dripGeometry = new THREE.ExtrudeGeometry(drip, { depth: 6.2, steps: 1, bevelEnabled: false });
  dripGeometry.rotateY(-Math.PI / 2); dripGeometry.translate(3.1, 0, 0);
  mesh(roofRoot, 'CabinLowEave-FoldedDripEdge', metricUV(dripGeometry), zinc);

  // There are NO original cabin door leaves or glazing panes. Keep the broad left cutaway open.
  // These are only open-air architectural surrounds on the unobstructed right-hand entry side.
  const frontZ = 1.35;
  const undersideY = roof.position.y - 0.1 / Math.cos(roof.rotation.x) -
    (frontZ - roof.position.z) * Math.tan(roof.rotation.x);
  const headBottom = undersideY - 0.11;
  box(root, 'CabinOpenFront-Header', 1.15, undersideY - 0.055, frontZ, 4.9, 0.11, 0.14, frame);
  for (const x of [2.2, 3.48]) {
    box(root, 'CabinEntry-OpenJambFrame', x, (deckTop + headBottom) / 2, frontZ, 0.065, headBottom - deckTop, 0.14, frame);
    box(root, 'CabinEntry-TimberJambReveal', x + (x < 3 ? 0.044 : -0.044), (deckTop + headBottom) / 2,
      frontZ - 0.03, 0.024, headBottom - deckTop, 0.13, timber);
  }
  box(root, 'CabinEntry-HeadReveal', 2.84, headBottom - 0.02, frontZ - 0.03, 1.215, 0.04, 0.13, timber);
  box(root, 'CabinEntry-ThresholdStone', 2.84, deckTop + 0.016, frontZ + 0.025, 1.215, 0.032, 0.3, paving);
  // Grab handle belongs to the new jamb, not an invented door leaf or manufacturer fitting.
  const handleGeometry = metricUV(new THREE.CylinderGeometry(0.012, 0.012, 0.27, 10));
  mesh(root, 'CabinEntry-JambGrabHandle', handleGeometry, zinc, 3.48, 1.27, 1.49);
  for (const y of [1.155, 1.385]) {
    const seat = box(root, 'CabinEntry-GrabHandleSeat', 3.48, y, 1.445, 0.036, 0.027, 0.09, zinc);
    seat.userData.notDoorOperatingHardware = true;
  }
  for (const x of [1.13, 2.13]) box(root, 'CabinOpenWindowBay-Stile', x, 1.85, frontZ, 0.048, 1.2, 0.11, frame);
  for (const y of [1.25, 2.45]) box(root, 'CabinOpenWindowBay-Rail', 1.63, y, frontZ, 1.048, 0.048, 0.11, frame);
  box(root, 'CabinOpenWindowBay-RevealedTimberSill', 1.63, 1.216, frontZ + 0.015, 1.1, 0.028, 0.19, timber);

  const foundation: Block[] = [];
  const footingRecords: { x: number; z: number; bottom: number; top: number; terrainMin: number; terrainMax: number }[] = [];
  for (const x of [-4.45, -1.3, 1.2, 3.6, 4.9]) for (const z of [-2.6, 2.6]) {
    const ground = groundRange(x, z, 0.42, 0.42), bottom = ground.min - 0.045, top = 0.035;
    foundation.push({ x, y: (bottom + top) / 2, z, width: 0.42, height: top - bottom, depth: 0.42 });
    footingRecords.push({ x, z, bottom, top, terrainMin: ground.min, terrainMax: ground.max });
  }
  mergedBlocks('CabinDeck-10GroundedConceptFootings', foundation, render);
  for (const z of [-2.6, 2.6]) box(root, 'CabinDeck-FoundationBearer', 0.2, -0.06, z, 9.9, 0.18, 0.14, supportSteel);
  root.userData.footings = footingRecords;

  // East-side deck access is clear of the western PV rack, front folding panel, all cables, and pole.
  const run = 0.36, stairZ = -0.65, stairWidth = 1.25, stairStart = deckBounds.max.x - 0.13;
  const estimateRise = deckTop - groundY(stairStart + 4 * run + 0.08, stairZ);
  const count = Math.max(2, Math.min(6, Math.ceil(estimateRise / 0.175)));
  const entryGround = groundY(stairStart + count * run + 0.08, stairZ);
  const rise = (deckTop - entryGround) / count;
  const stairRecords: { x: number; z: number; width: number; depth: number; bottom: number; top: number; terrainMin: number }[] = [];
  const nosingPoses: { x: number; y: number; z: number }[] = [];
  for (let i = 0; i < count; i++) {
    const x = stairStart + (i + 0.5) * run, ground = groundRange(x, stairZ, run, stairWidth);
    const bottom = ground.min - 0.045, top = deckTop - i * rise;
    box(root, 'CabinEntry-GroundedEastStep-' + (i + 1), x, (top + bottom) / 2, stairZ, run, top - bottom, stairWidth, paving);
    stairRecords.push({ x, z: stairZ, width: run, depth: stairWidth, bottom, top, terrainMin: ground.min });
    nosingPoses.push({ x: x + run / 2 - 0.013, y: top - 0.009, z: stairZ });
  }
  repeated(root, 'CabinEntry-RecessedStepNosing', metricUV(new THREE.BoxGeometry(0.026, 0.018, stairWidth)), zinc, nosingPoses);
  root.userData.entrySteps = { side: '+X/east', run, width: stairWidth, rise, entryGround, records: stairRecords };
  // Four risers / about 675 mm total terrain-to-deck rise justify ONE modest stair handrail.
  // It is not a claim of guard/code compliance; no perimeter railing crowds the devices or PV.
  if (count >= 4 && deckTop - entryGround > 0.5) {
    const railZ = stairZ - stairWidth / 2 + 0.085;
    const ends = [stairRecords[0], stairRecords[stairRecords.length - 1]];
    for (const step of ends) {
      mesh(root, 'CabinEntry-StairHandrailPost', metricUV(new THREE.CylinderGeometry(0.021, 0.021, 0.9, 10)),
        frame, step.x, step.top + 0.43, railZ); // bottom is 20 mm into the actual solid tread
    }
    const a = new THREE.Vector3(ends[0].x, ends[0].top + 0.88, railZ);
    const b = new THREE.Vector3(ends[1].x, ends[1].top + 0.88, railZ);
    const direction = b.clone().sub(a);
    const rail = mesh(root, 'CabinEntry-SingleSlopingHandrail',
      metricUV(new THREE.CylinderGeometry(0.024, 0.024, direction.length(), 10)), frame);
    rail.position.copy(a).add(b).multiplyScalar(0.5);
    rail.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
    root.userData.railing = { stairOnly: true, reason: 'four risers and measured rise above 0.5 m',
      centerHeightAboveTread: 0.88, z: railZ, postEmbedment: 0.02, perimeterGuardAndCodeReview: 'pending' };
  } else root.userData.railing = 'omitted: measured low stair; site-code/fall-risk review pending';

  const gap = stationBounds.min.y - benchBounds.max.y;
  // The actual portable model has rubber feet, no wheels. Fill only the measured existing 10 mm gap.
  if (gap > 0.002 && gap <= 0.03) {
    const plate = box(root, 'PortableFieldStation-BenchSupportPlate', 0.55,
      (stationBounds.min.y + benchBounds.max.y) / 2, 2.05, 1.12, gap, 0.74, supportSteel);
    plate.userData.architecturalSupportOnly = true;
    const legTop = benchBounds.max.y;
    mergedBlocks('PortableFieldStation-2DeckBearingSupports', [0.06, 1.04].map(x => ({
      x, y: (deckTop + legTop) / 2, z: 2.36, width: 0.07, height: legTop - deckTop, depth: 0.07
    })), supportSteel);
    root.userData.portableSupport = { thickness: gap, top: stationBounds.min.y, bottom: benchBounds.max.y,
      center: [0.55, 2.05], size: [1.12, 0.74], feetRetained: true, wheelsPresent: false,
      contactSource: 'existing procedural foot geometry and bench bounds; not manufacturer CAD' };
  } else root.userData.portableSupport = { omitted: 'No safe measured bench-to-foot gap; product remains untouched.' };

  root.userData.pbrStatus = textures.homePbr ? 'waiting-for-ready' : 'solid-material-fallback';
  function imageReady(texture: THREE.Texture) {
    const image = texture.image as { width?: number; height?: number; naturalWidth?: number; naturalHeight?: number } | undefined;
    return !!image && (image.naturalWidth ?? image.width ?? 0) > 0 && (image.naturalHeight ?? image.height ?? 0) > 0;
  }
  function applyPbr() {
    if (disposed || !textures.homePbr) return;
    const bindings: [THREE.MeshStandardMaterial, PbrTextureSet, number, number][] = [
      [timber, textures.homePbr.timber, 1, 0.24],
      [render, textures.homePbr.plaster, 1, 0.16],
      [paving, textures.homePbr.paving, 1, 0.28]
    ];
    // Guard even a prematurely resolved promise: never clone an unloaded Source.
    if (bindings.some(([, set]) => [set.color, set.normal, set.roughness, ...(set.ao ? [set.ao] : [])].some(t => !imageReady(t)))) {
      root.userData.pbrStatus = 'fallback-incomplete-source'; return;
    }
    for (const [material, set, tileMetres, normalStrength] of bindings) {
      for (const [key, source] of [['map', set.color], ['normalMap', set.normal], ['roughnessMap', set.roughness], ['aoMap', set.ao]] as const) {
        if (!source) continue;
        const clone = source.clone(); clone.wrapS = clone.wrapT = THREE.RepeatWrapping;
        clone.repeat.set(1 / tileMetres, 1 / tileMetres); clone.offset.set(0, 0); clone.rotation = 0;
        clone.colorSpace = key === 'map' ? THREE.SRGBColorSpace : THREE.NoColorSpace;
        if (key === 'aoMap') clone.channel = 1;
        clone.needsUpdate = true; material[key] = clone; ownedTextures.add(clone);
      }
      material.color.set(0xffffff); material.roughness = 1; material.metalness = 0;
      material.normalScale.set(normalStrength, normalStrength); material.aoMapIntensity = 0.55; material.needsUpdate = true;
    }
    root.userData.pbrStatus = 'ready-clone-owned';
    root.userData.pbrMetresPerTile = 1;
  }
  if (textures.homePbrReady) {
    void textures.homePbrReady.then(applyPbr).catch(() => { if (!disposed) root.userData.pbrStatus = 'fallback-load-failed'; });
  } else applyPbr(); // Without a readiness promise, the same loaded-image guard still applies.

  let meshCount = 0, expandedTriangles = 0;
  root.traverse(object => {
    if (!(object instanceof THREE.Mesh)) return;
    meshCount++;
    expandedTriangles += (object.geometry.index?.count ?? object.geometry.getAttribute('position').count) / 3 *
      (object instanceof THREE.InstancedMesh ? object.count : 1);
  });
  root.userData.metrics = { meshes: meshCount, expandedTriangles, ownedGeometries: geometries.size, ownedMaterials: materials.size };
  // Attach only the new root. Existing devices, roof, walls, terrain, emissions, and cables are never reparented.
  zone.add(root);
  return {
    root,
    dispose() {
      if (disposed) return; disposed = true;
      root.removeFromParent(); instances.forEach(object => object.dispose());
      geometries.forEach(geometry => geometry.dispose()); materials.forEach(material => material.dispose());
      ownedTextures.forEach(texture => texture.dispose());
      geometries.clear(); materials.clear(); ownedTextures.clear(); instances.length = 0;
      root.clear(); root.userData.pbrStatus = 'disposed';
    }
  };
}
