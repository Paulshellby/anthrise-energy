import * as THREE from 'three';

/** Small illustrative planting palette, not a botanical inventory or a photographed landscape. */
export function createHomePlantingDetail(homeBody: THREE.Group) {
  const root = new THREE.Group(); root.name = 'HomePlanting-LeafStemAndFlowerDetails'; homeBody.add(root);
  const geometries: THREE.BufferGeometry[] = [], materials: THREE.Material[] = [];
  const geo = <T extends THREE.BufferGeometry>(g: T): T => { geometries.push(g); return g; };
  const material = (color: number, roughness = 0.93, side: THREE.Side = THREE.FrontSide) => {
    const m = new THREE.MeshStandardMaterial({ color, roughness, side }); materials.push(m); return m;
  };
  const leafMat = material(0xffffff, 0.91, THREE.DoubleSide);
  const stemMat = material(0x655e3e, 0.98);
  const herbStemMat = material(0x778156, 0.97);
  const grassMat = material(0xffffff, 0.95, THREE.DoubleSide);
  const petalMat = material(0xffffff, 0.87, THREE.DoubleSide);
  const flowerCentreMat = material(0xb2a76c, 0.96);
  const soilMat = material(0x484237, 1);
  const soilGrainMat = material(0x777065, 1);
  const potMat = material(0xc5b5a0, 0.9, THREE.DoubleSide);
  const edgeMat = material(0xc6c0b4, 0.94);
  const r = (n: number) => { const x = Math.sin(n * 76.43 + 9.37) * 45718.72; return x - Math.floor(x); };

  // A cupped leaf with an actual central rib and taper, not an alpha billboard or sphere.
  function leafGeometry() {
    const vertices: number[] = [], uv: number[] = [], indices: number[] = [];
    for (let i = 0; i <= 5; i++) {
      const t = i / 5, width = Math.max(0.003, Math.pow(Math.sin(Math.PI * t), 0.8) * 0.5);
      const curl = Math.sin(Math.PI * t) * 0.085;
      vertices.push(-width, t, -curl * 0.28, 0, t, curl, width, t, -curl * 0.28);
      uv.push(0, t, 0.5, t, 1, t);
      if (i < 5) for (let side = 0; side < 2; side++) {
        const a = i * 3 + side, b = a + 3; indices.push(a, b, a + 1, a + 1, b, b + 1);
      }
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(indices); g.computeVertexNormals(); return geo(g);
  }
  // Thin, gently arching grass blade with three axial segments (six triangles).
  const grassGeo = geo(new THREE.BufferGeometry());
  grassGeo.setAttribute('position', new THREE.Float32BufferAttribute([
    -0.5, 0, 0, 0.5, 0, 0, -0.34, 0.36, 0.07, 0.34, 0.36, 0.07,
    -0.19, 0.74, 0.21, 0.19, 0.74, 0.21, -0.015, 1, 0.43, 0.015, 1, 0.43,
  ], 3));
  grassGeo.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 1, 0, 0, 0.36, 1, 0.36, 0, 0.74, 1, 0.74, 0, 1, 1, 1], 2));
  grassGeo.setIndex([0, 2, 1, 1, 2, 3, 2, 4, 3, 3, 4, 5, 4, 6, 5, 5, 6, 7]); grassGeo.computeVertexNormals();
  const leafGeo = leafGeometry();
  const stemGeo = geo(new THREE.CylinderGeometry(1, 1, 1, 5, 1));
  const grainGeo = geo(new THREE.IcosahedronGeometry(1, 0));
  const petalGeo = geo(new THREE.CircleGeometry(1, 5));
  type BatchEntry = { matrix: THREE.Matrix4; color?: THREE.Color };
  const leaves: BatchEntry[] = [], stems: BatchEntry[] = [], herbStems: BatchEntry[] = [], grasses: BatchEntry[] = [];
  const petals: BatchEntry[] = [], centres: BatchEntry[] = [], grains: BatchEntry[] = [];
  const dummy = new THREE.Object3D(), up = new THREE.Vector3(0, 1, 0);
  function entry(list: BatchEntry[], position: THREE.Vector3, scale: THREE.Vector3, rotation?: THREE.Quaternion, color?: THREE.Color) {
    dummy.position.copy(position); dummy.scale.copy(scale); dummy.quaternion.copy(rotation || new THREE.Quaternion()); dummy.updateMatrix();
    list.push({ matrix: dummy.matrix.clone(), color });
  }
  function branch(list: BatchEntry[], a: THREE.Vector3, b: THREE.Vector3, radius: number) {
    const d = b.clone().sub(a); entry(list, a.clone().add(b).multiplyScalar(0.5), new THREE.Vector3(radius * 0.7, d.length(), radius), new THREE.Quaternion().setFromUnitVectors(up, d.normalize()));
  }
  function leaf(a: THREE.Vector3, b: THREE.Vector3, width: number, seed: number, herb = false) {
    const d = b.clone().sub(a), length = d.length();
    const q = new THREE.Quaternion().setFromUnitVectors(up, d.normalize());
    q.multiply(new THREE.Quaternion().setFromAxisAngle(up, r(seed + 7) * Math.PI * 2));
    const color = new THREE.Color().setHSL(herb ? 0.235 + r(seed) * 0.055 : 0.265 + r(seed) * 0.065, 0.25 + r(seed + 12) * 0.13, 0.245 + r(seed + 31) * 0.17);
    entry(leaves, a, new THREE.Vector3(width, length, length * 0.7), q, color);
  }
  function tuft(x: number, y: number, z: number, seed: number, count = 8, height = 0.23) {
    for (let i = 0; i < count; i++) {
      const a = r(seed + i * 13) * Math.PI * 2;
      const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.08 + r(seed + i * 5) * 0.22, a, 0.12 - r(seed + i * 7) * 0.24));
      entry(grasses, new THREE.Vector3(x + Math.cos(a) * 0.035, y, z + Math.sin(a) * 0.035),
        new THREE.Vector3(0.013 + r(seed + i * 11) * 0.015, height * (0.65 + r(seed + i * 17) * 0.5), height), q,
        new THREE.Color().setHSL(0.205 + r(seed + i * 19) * 0.055, 0.28, 0.33 + r(seed + i * 23) * 0.13));
    }
  }
  function shrub(x: number, y: number, z: number, seed: number, height: number, spread: number) {
    const origin = new THREE.Vector3(x, y, z);
    for (let b = 0; b < 12; b++) {
      const a = b * 2.399 + r(seed + b) * 0.5, radius = spread * (0.5 + r(seed + b * 3) * 0.5);
      const end = new THREE.Vector3(x + Math.cos(a) * radius, y + height * (0.56 + r(seed + b * 5) * 0.45), z + Math.sin(a) * radius);
      const fork = origin.clone().lerp(end, 0.37); branch(stems, origin, fork, 0.01); branch(stems, fork, end, 0.0055);
      for (let n = 0; n < 7; n++) {
        const t = 0.31 + n * 0.093, at = origin.clone().lerp(end, t);
        for (const side of [-1, 1]) {
          const leafAngle = a + side * (0.9 + n * 0.37), size = 0.14 + r(seed + b * 73 + n * 11) * 0.065;
          const tip = at.clone().add(new THREE.Vector3(Math.cos(leafAngle) * size, 0.032 + r(seed + n * 17) * 0.045, Math.sin(leafAngle) * size));
          const neck = at.clone().lerp(tip, 0.12); branch(stems, at, neck, 0.0016); leaf(neck, tip, size * 0.5, seed + b * 91 + n * 7 + side);
        }
      }
      for (let n = 0; n < 3; n++) {
        const angle = a + n * 2.1;
        leaf(end, end.clone().add(new THREE.Vector3(Math.cos(angle) * 0.11, 0.065, Math.sin(angle) * 0.11)), 0.063, seed + b * 31 + n);
      }
    }
  }
  function flower(x: number, y: number, z: number, seed: number, height: number) {
    const a = r(seed) * Math.PI * 2;
    const base = new THREE.Vector3(x, y, z), tip = new THREE.Vector3(x + Math.cos(a) * 0.07, y + height, z + Math.sin(a) * 0.07);
    branch(herbStems, base, tip, 0.0028);
    for (let n = 0; n < 3; n++) {
      const at = base.clone().lerp(tip, 0.2 + n * 0.17), angle = a + n * 2.4;
      leaf(at, at.clone().add(new THREE.Vector3(Math.cos(angle) * 0.085, 0.032, Math.sin(angle) * 0.085)), 0.028, seed + n * 43, true);
    }
    // Four tiers of small florets rather than one coarse flower sphere.
    for (let tier = 0; tier < 4; tier++) {
      const centre = tip.clone().add(new THREE.Vector3(0, tier * 0.018, 0));
      entry(centres, centre, new THREE.Vector3(0.009, 0.013, 0.009));
      for (let p = 0; p < 5; p++) {
        const angle = p * Math.PI * 2 / 5 + tier * 0.5;
        entry(petals, centre.clone().add(new THREE.Vector3(Math.cos(angle) * 0.014, 0.005, Math.sin(angle) * 0.014)), new THREE.Vector3(0.013, 0.018, 1),
          new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2 + 0.35, 0, angle)),
          new THREE.Color().setHSL(0.745 + r(seed + tier) * 0.035, 0.2, 0.52 + r(seed + p * 21) * 0.13));
      }
    }
  }
  function regularMesh(name: string, geometry: THREE.BufferGeometry, m: THREE.Material, x: number, y: number, z: number) {
    const o = new THREE.Mesh(geometry, m); o.name = name; o.position.set(x, y, z); o.castShadow = true; o.receiveShadow = true; root.add(o); return o;
  }
  const edgeBox = geo(new THREE.BoxGeometry(1, 1, 1));
  const bedSoil = geo(new THREE.BoxGeometry(1.08, 0.029, 0.98));
  const beds: [number, number][] = [[-7.5, 3.9], [-7.4, 5.1], [6.95, 3.7], [6.9, 5.25]];
  beds.forEach(([x, z], b) => {
    regularMesh('HomeBed-ExposedSoil', bedSoil, soilMat, x, 0.011, z);
    for (const side of [-1, 1]) {
      regularMesh('HomeBed-OpenPerimeterSide', edgeBox, edgeMat, x + side * 0.57, 0.03, z).scale.set(0.06, 0.075, 1.1);
      regularMesh('HomeBed-OpenPerimeterEnd', edgeBox, edgeMat, x, 0.03, z + side * 0.52).scale.set(1.08, 0.075, 0.06);
    }
    shrub(x, 0.026, z, b * 1101 + 83, 0.58 + r(b) * 0.14, 0.36);
    for (let i = 0; i < 12; i++) {
      const a = i * 2.399, radius = 0.36 + r(b * 71 + i) * 0.1;
      const px = x + Math.cos(a) * radius, pz = z + Math.sin(a) * radius;
      if (i % 2 === 0) flower(px, 0.027, pz, b * 97 + i * 31, 0.27 + r(i) * 0.13);
      tuft(px, 0.028, pz, b * 79 + i * 131, 7, 0.16);
    }
    for (let i = 0; i < 30; i++) {
      entry(grains, new THREE.Vector3(x + (r(i * 7 + b * 53) - 0.5) * 1.01, 0.028, z + (r(i * 13 + b * 71) - 0.5) * 0.9),
        new THREE.Vector3(0.009 + r(i) * 0.011, 0.006, 0.011));
    }
  });

  // Same two planter positions; solid tapered wall cross-section includes rim, inner wall and base.
  const potProfile = [new THREE.Vector2(0, 0), new THREE.Vector2(0.157, 0), new THREE.Vector2(0.215, 0.425),
    new THREE.Vector2(0.225, 0.437), new THREE.Vector2(0.224, 0.458), new THREE.Vector2(0.199, 0.458),
    new THREE.Vector2(0.192, 0.423), new THREE.Vector2(0.146, 0.028), new THREE.Vector2(0, 0.028)];
  const potGeo = geo(new THREE.LatheGeometry(potProfile, 20));
  const earthGeo = geo(new THREE.CircleGeometry(0.19, 20)); earthGeo.rotateX(-Math.PI / 2);
  const footGeo = geo(new THREE.CylinderGeometry(0.161, 0.157, 0.024, 20));
  [[0.25, 3.12], [5.8, 3.16]].forEach(([x, z], p) => {
    regularMesh('HomeEntrancePlanter-ThicknessAndOpenRim', potGeo, potMat, x, 0, z);
    regularMesh('HomeEntrancePlanter-RecessedSoil', earthGeo, soilMat, x, 0.416, z);
    regularMesh('HomeEntrancePlanter-FootRing', footGeo, potMat, x, 0.012, z);
    shrub(x, 0.418, z, 7301 + p * 701, 0.45, 0.23);
    for (let i = 0; i < 18; i++) {
      const a = i * 2.399, rad = Math.sqrt(r(i * 19 + p * 53)) * 0.17;
      entry(grains, new THREE.Vector3(x + Math.cos(a) * rad, 0.418, z + Math.sin(a) * rad), new THREE.Vector3(0.011, 0.006, 0.008));
    }
  });
  // Low grass concentrated along existing garden edges, clear of service wall and entrance path.
  for (let side = 0; side < 2; side++) for (let i = 0; i < 26; i++) {
    const x = side === 0 ? -7.95 + r(i * 71) * 0.3 : 7.35 + r(i * 91) * 0.35;
    const z = 3.35 + i * 0.098;
    tuft(x, -0.004, z, 19001 + i * 83 + side * 571, 6, 0.16 + r(i * 3) * 0.06);
  }
  function batch(name: string, g: THREE.BufferGeometry, m: THREE.Material, entries: BatchEntry[], castShadow = true) {
    const instanced = new THREE.InstancedMesh(g, m, entries.length); instanced.name = name;
    entries.forEach((e, i) => { instanced.setMatrixAt(i, e.matrix); if (e.color) instanced.setColorAt(i, e.color); });
    instanced.instanceMatrix.needsUpdate = true; if (instanced.instanceColor) instanced.instanceColor.needsUpdate = true;
    instanced.castShadow = castShadow; instanced.receiveShadow = true; instanced.computeBoundingSphere(); root.add(instanced); return instanced;
  }
  batch('HomePlanting-CuppedIndividualLeaves', leafGeo, leafMat, leaves);
  batch('HomePlanting-WoodyBranchesAndPetioles', stemGeo, stemMat, stems);
  batch('HomePlanting-FineFlowerStems', stemGeo, herbStemMat, herbStems);
  batch('HomePlanting-LowArchingGrassBlades', grassGeo, grassMat, grasses, false);
  batch('HomePlanting-LayeredFlowerPetals', petalGeo, petalMat, petals, false);
  batch('HomePlanting-TinyFlowerCentres', grainGeo, flowerCentreMat, centres, false);
  batch('HomePlanting-SoilGranules', grainGeo, soilGrainMat, grains, false);
  return {
    root,
    counts: { leaves: leaves.length, woodyStems: stems.length, flowerStems: herbStems.length, grassBlades: grasses.length, petals: petals.length, soilGranules: grains.length },
    /** Optional owned-by-caller leaf textures; geometry provides full 0..1 leaf UVs. */
    setLeafMaps(map?: THREE.Texture, normalMap?: THREE.Texture, roughnessMap?: THREE.Texture) {
      leafMat.map = map || null; leafMat.normalMap = normalMap || null; leafMat.roughnessMap = roughnessMap || null;
      leafMat.normalScale?.set(0.12, 0.12); leafMat.needsUpdate = true;
    },
    dispose() { root.removeFromParent(); geometries.forEach(g => g.dispose()); materials.forEach(m => m.dispose()); },
  };
}
