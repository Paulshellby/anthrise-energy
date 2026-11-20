import {createHardwareFactory} from './productHardware';
import {createCampusRoad,ROAD_WIDTH} from './roadLayout';
import {createCableHarness} from './cableRoutes';
import { createHomeRefinement } from './homeRefinement';
import * as THREE from 'three';
import { TextureBundle } from './textures';

export interface CampusWorld {
  root: THREE.Group;
  /** Smooth elevation function used across terrain, objects, and trail */
  terrainHeightAt: (x: number, z: number) => number;
  /** Update Night illumination (street lights, interior glow, TV/workstation screens) */
  setNightFactor: (nightFactor: number) => void;
  dispose: () => void;
}

/** Deterministic pseudo-random helper so campus landscaping is always clean and reproducible */
function seeded(idx: number): number {
  const s = Math.sin(idx * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
}

/** Shared continuous ground elevation: flat urban-campus plateau West/North, gently rolling ridge in Zone 03 South-East */
export function terrainHeightAt(x: number, z: number): number {
  const dx3 = x - 21.0;
  const dz3 = z - 15.2;
  const ridge3 = Math.exp(-(dx3 * dx3) / 145 - (dz3 * dz3) / 95) * 1.08;

  // Soft distant horizon hills well outside the 3 active building pads
  const distFromCenter = Math.hypot(x - 4, z);
  const rimFactor = THREE.MathUtils.smoothstep(distFromCenter, 34, 85);
  const perimeterWave =
    (Math.sin(x * 0.055) * Math.cos(z * 0.05) * 1.45 + Math.cos((x + z) * 0.035) * 0.85) * rimFactor;

  return ridge3 + perimeterWave;
}

function makeRoundedPad(
  width: number,
  depth: number,
  height: number,
  radius: number,
  material: THREE.Material
): THREE.Mesh {
  const shape = new THREE.Shape();
  const hw = width / 2;
  const hd = depth / 2;
  shape.moveTo(-hw + radius, -hd);
  shape.lineTo(hw - radius, -hd);
  shape.quadraticCurveTo(hw, -hd, hw, -hd + radius);
  shape.lineTo(hw, hd - radius);
  shape.quadraticCurveTo(hw, hd, hw - radius, hd);
  shape.lineTo(-hw + radius, hd);
  shape.quadraticCurveTo(-hw, hd, -hw, hd - radius);
  shape.lineTo(-hw, -hd + radius);
  shape.quadraticCurveTo(-hw, -hd, -hw + radius, -hd);

  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: height,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.06,
    bevelSegments: 2,
  });
  geo.rotateX(-Math.PI / 2);
  const mesh = new THREE.Mesh(geo, material);
  mesh.castShadow = false;
  mesh.receiveShadow = true;
  return mesh;
}

/** Creates an oriented product unit visual plane flush in front of a hardware enclosure */
function makeProductFaceplate(
  tex: THREE.Texture | undefined,
  w: number,
  h: number
): THREE.Mesh | null {
  if (!tex) return null;
  const mat = new THREE.MeshStandardMaterial({
    map: tex,
    transparent: true,
    alphaTest: 0.14,
    roughness: 0.35,
    metalness: 0.12,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  return mesh;
}

export function createCampusWorld(textures: TextureBundle, onAssetReady?: () => void): CampusWorld {
  const root = new THREE.Group();
  root.name = 'AnthriseEnergyCampus';
  const hardware=createHardwareFactory(onAssetReady);
  const harness=createCableHarness(terrainHeightAt(21,15.2));root.add(harness.group);

  const geometries: THREE.BufferGeometry[] = [];
  const materials: THREE.Material[] = [];

  const trackGeo = <T extends THREE.BufferGeometry>(g: T): T => {
    geometries.push(g);
    return g;
  };
  const trackMat = <T extends THREE.Material>(m: T): T => {
    materials.push(m);
    return m;
  };

  // Shared Architectural Materials
  const meadowMat = trackMat(
    new THREE.MeshStandardMaterial({
      map: textures.grassGround,
      color: 0x9db784,
      roughness: 0.94,
      metalness: 0.0,
    })
  );
  const plinthMat = trackMat(
    new THREE.MeshStandardMaterial({
      map: textures.limestoneWall,
      color: 0xe9e7e0,
      roughness: 0.86,
      metalness: 0.04,
    })
  );
  const wallWarmMat = trackMat(
    new THREE.MeshStandardMaterial({
      map: textures.limestoneWall,
      color: 0xf6f3ec,
      roughness: 0.82,
      metalness: 0.02,
    })
  );
  const wallSlateMat = trackMat(
    new THREE.MeshStandardMaterial({
      color: 0x3b484d,
      roughness: 0.56,
      metalness: 0.28,
    })
  );
  const ciCladdingMat = trackMat(
    new THREE.MeshStandardMaterial({
      color: 0xd4dbdd,
      roughness: 0.55,
      metalness: 0.25,
    })
  );
  const aluminumMat = trackMat(
    new THREE.MeshStandardMaterial({
      color: 0xc2ccd1,
      roughness: 0.32,
      metalness: 0.72,
    })
  );
  const darkSteelMat = trackMat(
    new THREE.MeshStandardMaterial({
      color: 0x26343a,
      roughness: 0.38,
      metalness: 0.65,
    })
  );
  const glassMat = trackMat(
    new THREE.MeshPhysicalMaterial({
      color: 0xdff2f6,
      roughness: 0.08,
      metalness: 0.05,
      transparent: true,
      opacity: 0.34,
      ior: 1.48,
      reflectivity: 0.7,
    })
  );
  const pvSurfaceMat = trackMat(
    new THREE.MeshPhysicalMaterial({
      map: textures.solarPanel,
      roughness: 0.22,
      metalness: 0.38,
      clearcoat: 0.65,
      clearcoatRoughness: 0.16,
    })
  );
  const timberMat = trackMat(
    new THREE.MeshStandardMaterial({
      map: textures.timberDeck,
      color: 0xd7b38b,
      roughness: 0.8,
      metalness: 0.04,
    })
  );
  const asphaltMat = trackMat(
    new THREE.MeshStandardMaterial({
      map: textures.roadAsphalt,
      color: 0x8d9799,
      roughness: 0.88,
      metalness: 0.05,
    })
  );
  const emeraldAccentMat = trackMat(
    new THREE.MeshStandardMaterial({
      color: 0x006b55,
      roughness: 0.44,
      metalness: 0.18,
    })
  );
  const cabinetBodyMat = trackMat(
    new THREE.MeshStandardMaterial({
      color: 0xeff2f3,
      roughness: 0.42,
      metalness: 0.22,
    })
  );
  const utilityPoleMat = trackMat(
    new THREE.MeshStandardMaterial({
      color: 0x6f7a7d,
      roughness: 0.72,
      metalness: 0.3,
    })
  );

  // Night-reactive emissive & practical lighting lists
  const warmGlowMats: THREE.MeshStandardMaterial[] = [];
  const solarLampMats: THREE.MeshStandardMaterial[] = [];
  const practicalLights: { light: THREE.PointLight; maxIntensity: number }[] = [];

  // -------------------------------------------------------------------------
  // 1. Continuous Ground Terrain (Never a floating clipped box)
  // -------------------------------------------------------------------------
  const terrainGeo = trackGeo(new THREE.PlaneGeometry(190, 190, 72, 72));
  terrainGeo.rotateX(-Math.PI / 2);
  const posAttr = terrainGeo.attributes.position;
  for (let i = 0; i < posAttr.count; i++) {
    const x = posAttr.getX(i);
    const z = posAttr.getZ(i);
    posAttr.setY(i, terrainHeightAt(x, z));
  }
  terrainGeo.computeVertexNormals();
  const terrainMesh = new THREE.Mesh(terrainGeo, meadowMat);
  terrainMesh.receiveShadow = true;
  root.add(terrainMesh);

  // -------------------------------------------------------------------------
  // 2. Unified Spine Road & Restrained Visitor Tour Path (Zones 01 <-> 02 -> Trailhead)
  //    Explicitly STOPS at trailhead before Zone 03 off-grid ridge!
  // -------------------------------------------------------------------------
  const roadCurve = createCampusRoad();

  const buildRoadRibbon = (curve: THREE.CatmullRomCurve3, width: number, segments: number) => {
    const verts: number[] = [];
    const uvs: number[] = [];
    const indices: number[] = [];
    const up = new THREE.Vector3(0, 1, 0);
    const right = new THREE.Vector3();

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const p = curve.getPointAt(t);
      const tan = curve.getTangentAt(t).normalize();
      right.crossVectors(tan, up).normalize();
      const y = terrainHeightAt(p.x, p.z) + 0.045;

      verts.push(p.x - right.x * (width * 0.5), y, p.z - right.z * (width * 0.5));
      verts.push(p.x + right.x * (width * 0.5), y, p.z + right.z * (width * 0.5));
      uvs.push(t * 6, 0, t * 6, 1);

      if (i < segments) {
        const base = i * 2;
        indices.push(base, base + 1, base + 2, base + 1, base + 3, base + 2);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    return trackGeo(geo);
  };

  const mainRoadMesh = new THREE.Mesh(buildRoadRibbon(roadCurve, ROAD_WIDTH, 320), asphaltMat);
  mainRoadMesh.receiveShadow = true;
  root.add(mainRoadMesh);

  // Subtle low-contrast visitor guide dashes along campus road (NOT luminous electrical flow)
  const guideDashGeo = trackGeo(new THREE.BoxGeometry(0.65, 0.015, 0.12));
  const guideDashMat = trackMat(
    new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.34,
    })
  );
  const guideDashCount = 90;
  const guideDashes = new THREE.InstancedMesh(guideDashGeo, guideDashMat, guideDashCount);
  const dummy = new THREE.Object3D();
  for (let i = 0; i < guideDashCount; i++) {
    const t = (i + 0.5) / guideDashCount;
    const p = roadCurve.getPointAt(t);
    const tan = roadCurve.getTangentAt(t);
    dummy.position.set(p.x, terrainHeightAt(p.x, p.z) + 0.06, p.z);
    dummy.rotation.set(0, Math.atan2(-tan.z, tan.x), 0);
    dummy.scale.setScalar(1);
    dummy.updateMatrix();
    guideDashes.setMatrixAt(i, dummy.matrix);
  }
  guideDashes.instanceMatrix.needsUpdate = true;
  root.add(guideDashes);

  // Gravel/Stone walking footpath from road trailhead up into Zone 03 Off-Grid ridge (NO power cables)
  const trailCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(30.5, 0, 7.2),
    new THREE.Vector3(28.5, 0, 11.2),
    new THREE.Vector3(25.2, 0, 14.2),
  ]);
  const stoneTrailMat = trackMat(
    new THREE.MeshStandardMaterial({ color: 0xc8c2b4, roughness: 0.92, metalness: 0.02 })
  );
  const trailMesh = new THREE.Mesh(buildRoadRibbon(trailCurve, 1.35, 22), stoneTrailMat);
  trailMesh.receiveShadow = true;
  root.add(trailMesh);

  // -------------------------------------------------------------------------
  // 3. Zone 01: HOME ENERGY (-11.5, 0, 2.0)
  // -------------------------------------------------------------------------
  const zone01 = new THREE.Group();
  zone01.position.set(-11.5, 0, 2.0);
  root.add(zone01);

  // Top including bevel is 0.25 m, below the unchanged battery contact plane (0.258 m).
  const homePad = makeRoundedPad(17.4, 12.6, 0.20, 0.7, plinthMat);
  homePad.name = 'HomeFootingPad';
  homePad.position.set(0, 0, 0.2);
  zone01.add(homePad);
  geometries.push(homePad.geometry);

  // Driveway apron linking house left side to spine road
  const driveGeo = trackGeo(new THREE.BoxGeometry(5.8, 0.08, 3.6));
  const driveMesh = new THREE.Mesh(driveGeo, asphaltMat);
  driveMesh.position.set(-4.6, 0.23, 6.2);
  driveMesh.receiveShadow = true;
  zone01.add(driveMesh);

  // Garden walkway stones to courtyard lamp
  for (let s = 0; s < 5; s++) {
    const stepGeo = trackGeo(new THREE.BoxGeometry(0.9, 0.05, 0.55));
    const step = new THREE.Mesh(stepGeo, plinthMat);
    step.position.set(2.2 + s * 1.15, 0.26, 4.4);
    step.receiveShadow = true;
    zone01.add(step);
  }

  // Residential Architectural Shell: Technical Wing (left) + Cutaway Living Wing (right)
  const homeBody = new THREE.Group();
  homeBody.position.set(0, 0.26, -0.3);
  zone01.add(homeBody);

  // The technical wing is now a hollow shell with real window / mounting recess openings.
  // Added below through homeRefinement; the original equipment transforms remain unchanged.

  // Living room cutaway enclosure: Back wall + right end wall + floor + ceiling slab + front dark steel frame
  const livingFloor = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(7.2, 0.14, 5.2)), timberMat);
  livingFloor.position.set(2.8, 0.07, 0);
  livingFloor.receiveShadow = true;
  homeBody.add(livingFloor);

  const backWall = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(7.3, 3.4, 0.26)), wallWarmMat);
  backWall.position.set(2.8, 1.7, -2.47);
  backWall.castShadow = true;
  backWall.receiveShadow = true;
  homeBody.add(backWall);

  const rightWall = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(0.26, 3.4, 5.2)), wallWarmMat);
  rightWall.position.set(6.32, 1.7, 0);
  rightWall.castShadow = true;
  rightWall.receiveShadow = true;
  homeBody.add(rightWall);

  // Top fascia header across living bay
  const frontHeader = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(7.3, 0.42, 0.34)), wallSlateMat);
  frontHeader.position.set(2.8, 3.22, 2.43);
  frontHeader.castShadow = true;
  homeBody.add(frontHeader);

  // Slim architectural mullions framing cutaway glass bay
  [-0.75, 2.8, 6.2].forEach((mx) => {
    const mullion = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(0.11, 3.1, 0.14)), darkSteelMat);
    mullion.position.set(mx, 1.55, 2.44);
    homeBody.add(mullion);
  });

  // Subtle translucent edge glass on right bay half only so appliances stay ultra crisp
  const bayGlass = new THREE.Mesh(trackGeo(new THREE.PlaneGeometry(3.3, 2.9)), glassMat);
  bayGlass.position.set(4.5, 1.6, 2.44);
  homeBody.add(bayGlass);

  // Indoor Residential Appliances & Living Details (Clearly visible inside cutaway!)
  // Split AC indoor unit high on back wall
  const acUnit = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(1.45, 0.4, 0.32)), cabinetBodyMat);
  acUnit.position.set(2.6, 2.75, -2.18);
  homeBody.add(acUnit);
  const acVane = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(1.25, 0.05, 0.06)), darkSteelMat);
  acVane.position.set(2.6, 2.6, -2.02);
  homeBody.add(acVane);

  // Refrigerator on left-back interior corner
  const fridgeMat = trackMat(new THREE.MeshStandardMaterial({ color: 0xd9e1e4, roughness: 0.28, metalness: 0.45 }));
  const fridge = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(0.95, 2.05, 0.85)), fridgeMat);
  fridge.position.set(-0.05, 1.08, -1.75);
  fridge.castShadow = true;
  homeBody.add(fridge);

  // Sofa + coffee table + rug
  const rug = new THREE.Mesh(
    trackGeo(new THREE.BoxGeometry(3.2, 0.03, 2.2)),
    trackMat(new THREE.MeshStandardMaterial({ color: 0xc9d4cf, roughness: 0.95 }))
  );
  rug.position.set(2.9, 0.15, 0.2);
  homeBody.add(rug);

  const sofaMat = trackMat(new THREE.MeshStandardMaterial({ color: 0x526a67, roughness: 0.86 }));
  const sofaBase = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(2.3, 0.52, 0.95)), sofaMat);
  sofaBase.position.set(2.9, 0.4, -1.05);
  homeBody.add(sofaBase);
  const sofaBack = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(2.3, 0.55, 0.25)), sofaMat);
  sofaBack.position.set(2.9, 0.78, -1.4);
  homeBody.add(sofaBack);

  const coffeeTable = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(1.15, 0.34, 0.65)), timberMat);
  coffeeTable.position.set(2.9, 0.32, 0.25);
  homeBody.add(coffeeTable);

  // TV screen against right wall
  const tvConsole = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(0.48, 0.5, 1.75)), timberMat);
  tvConsole.position.set(5.9, 0.38, 0.1);
  homeBody.add(tvConsole);

  const tvGlowMat = trackMat(
    new THREE.MeshStandardMaterial({
      color: 0x1e2c33,
      emissive: 0x67b8d6,
      emissiveIntensity: 0.12,
      roughness: 0.25,
    })
  );
  warmGlowMats.push(tvGlowMat);
  const tvScreen = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(0.08, 0.9, 1.48)), tvGlowMat);
  tvScreen.position.set(6.08, 1.45, 0.1);
  homeBody.add(tvScreen);

  // Interior warm pendant ceiling light + Night PointLight
  const homeLampGlowMat = trackMat(
    new THREE.MeshStandardMaterial({
      color: 0xfff3dc,
      emissive: 0xffba5c,
      emissiveIntensity: 0.25,
      roughness: 0.35,
    })
  );
  warmGlowMats.push(homeLampGlowMat);
  const lampShade = new THREE.Mesh(trackGeo(new THREE.CylinderGeometry(0.18, 0.42, 0.28, 18)), homeLampGlowMat);
  lampShade.position.set(2.9, 2.95, 0.2);
  homeBody.add(lampShade);

  const homeInteriorLight = new THREE.PointLight(0xffc78b, 0.0, 9, 2);
  homeInteriorLight.position.set(2.9, 2.65, 0.2);
  homeBody.add(homeInteriorLight);
  practicalLights.push({ light: homeInteriorLight, maxIntensity: 32 });

  // Architectural Pitched Solar Roof (Slopes cleanly toward front-south camera)
  const roofGroup = new THREE.Group();
  roofGroup.position.set(0.3, 3.68, 0);
  homeBody.add(roofGroup);

  const mainRoofDeck = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(13.2, 0.28, 6.4)), wallSlateMat);
  mainRoofDeck.rotation.x = 0.22;
  mainRoofDeck.position.set(0, 0.55, 0.1);
  mainRoofDeck.castShadow = true;
  mainRoofDeck.receiveShadow = true;
  roofGroup.add(mainRoofDeck);
  const homeRefinement = createHomeRefinement(homeBody, roofGroup, mainRoofDeck, textures);

  // 8 rooftop modules share the slate deck's slope and sit above visible mounting rails.
  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < 4; c++) {
      const panelFrame = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(2.55, 0.08, 1.9)), aluminumMat);
      const panelGlass = new THREE.Mesh(trackGeo(new THREE.PlaneGeometry(2.45, 1.8)), pvSurfaceMat);
      panelGlass.rotation.x = -Math.PI / 2;
      panelGlass.position.y = 0.045;
      const pvUnit = new THREE.Group();
      pvUnit.add(panelFrame, panelGlass);
      pvUnit.name = 'HomePVModule';
      pvUnit.position.set(-4.2 + c * 2.8, 0.29, r === 0 ? -1.15 : 1.05);
      for (const x of [-1.22, 1.22]) {
        const clamp = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(0.045, 0.09, 0.11)), aluminumMat);
        clamp.position.set(x, 0.01, 0.58);
        pvUnit.add(clamp);
      }
      homeRefinement.roofMount.add(pvUnit);
    }
  }

  // External Residential Equipment: Hybrid Inverter + 16 kWh Battery on unobstructed left-front wall!
  const residentialInverter=hardware.inverter(false);residentialInverter.position.set(-4.3,1.95,2.9);homeBody.add(residentialInverter);
  const residentialBattery=hardware.battery();residentialBattery.position.set(-2.75,0,2.98);homeBody.add(residentialBattery);

  // Grid Utility Pole + Overhead Service Drop + Wall Utility Meter & AC Distribution Panel (Left Exterior)
  const utilityPole = new THREE.Mesh(trackGeo(new THREE.CylinderGeometry(0.14, 0.19, 6.6, 12)), utilityPoleMat);
  utilityPole.position.set(-9.6, 3.3, -0.8);
  utilityPole.castShadow = true;
  homeBody.add(utilityPole);

  const crossArm = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(0.16, 0.14, 1.65)), darkSteelMat);
  crossArm.position.set(-9.6, 6.1, -0.8);
  homeBody.add(crossArm);

  const meterBox = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(0.18, 0.85, 0.72)), cabinetBodyMat);
  meterBox.position.set(-6.08, 1.85, -0.8);
  homeBody.add(meterBox);

  const acPanelBox = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(0.2, 1.05, 0.92)), darkSteelMat);
  acPanelBox.position.set(-6.08, 1.85, 0.45);
  homeBody.add(acPanelBox);

  // Courtyard Solar Column Light (jcLight28 / AE-L-BLOOM-01)
  const courtyardPole = new THREE.Mesh(trackGeo(new THREE.CylinderGeometry(0.08, 0.11, 1.55, 10)), darkSteelMat);
  courtyardPole.position.set(7.1, 1.02, 4.4);
  courtyardPole.castShadow = true;
  zone01.add(courtyardPole);

  const courtyardLampMat = trackMat(
    new THREE.MeshStandardMaterial({
      color: 0xfef4d8,
      emissive: 0xffc668,
      emissiveIntensity: 0.04,
      roughness: 0.25,
    })
  );
  solarLampMats.push(courtyardLampMat);
  const courtyardHead = new THREE.Mesh(trackGeo(new THREE.CylinderGeometry(0.24, 0.19, 0.28, 14)), courtyardLampMat);
  courtyardHead.position.set(7.1, 1.84, 4.4);
  zone01.add(courtyardHead);

  const courtyardSolarCap = new THREE.Mesh(trackGeo(new THREE.CylinderGeometry(0.25, 0.25, 0.04, 14)), pvSurfaceMat);
  courtyardSolarCap.position.set(7.1, 2.0, 4.4);
  zone01.add(courtyardSolarCap);

  const courtyardPoint = new THREE.PointLight(0xffcb78, 0.0, 6.5, 2);
  courtyardPoint.position.set(7.1, 1.75, 4.4);
  zone01.add(courtyardPoint);
  practicalLights.push({ light: courtyardPoint, maxIntensity: 18 });

  // -------------------------------------------------------------------------
  // 4. Zone 02: COMMERCIAL & INDUSTRIAL (19.0, 0, -7.0)
  // -------------------------------------------------------------------------
  const zone02 = new THREE.Group();
  zone02.position.set(19.0, 0, -7.0);
  root.add(zone02);

  const ciPad = makeRoundedPad(22.4, 16.5, 0.26, 0.85, plinthMat);
  ciPad.position.set(0, 0, 0.4);
  zone02.add(ciPad);
  geometries.push(ciPad.geometry);

  // Main C&I Facility Building (Warehouse + Curtain-Wall Office Wing)
  const ciBuilding = new THREE.Group();
  ciBuilding.position.set(0.8, 0.26, -1.6);
  zone02.add(ciBuilding);

  // Left warehouse structural bay
  const warehouseBay = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(9.6, 5.2, 8.2)), ciCladdingMat);
  warehouseBay.position.set(-3.2, 2.6, 0);
  warehouseBay.castShadow = true;
  warehouseBay.receiveShadow = true;
  ciBuilding.add(warehouseBay);

  // Right curtain-wall office & control wing (with interior night glow!)
  const officeCoreMat = trackMat(
    new THREE.MeshStandardMaterial({
      color: 0xe3e7e6,
      emissive: 0xffcc88,
      emissiveIntensity: 0.04,
      roughness: 0.72,
    })
  );
  warmGlowMats.push(officeCoreMat);
  const officeInnerCore = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(7.0, 4.2, 7.0)), officeCoreMat);
  officeInnerCore.position.set(4.8, 2.2, 0);
  ciBuilding.add(officeInnerCore);

  const officeGlassShell = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(7.4, 4.5, 7.6)), glassMat);
  officeGlassShell.position.set(4.8, 2.35, 0);
  ciBuilding.add(officeGlassShell);

  // Dark steel architectural mullions & floor plates around office wing
  [0.2, 2.35, 4.65].forEach((fy) => {
    const slab = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(7.7, 0.22, 7.9)), wallSlateMat);
    slab.position.set(4.8, fy, 0);
    slab.castShadow = true;
    ciBuilding.add(slab);
  });
  [1.2, 3.6, 6.0, 8.4].forEach((mx) => {
    const col = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(0.16, 4.6, 0.18)), darkSteelMat);
    col.position.set(mx, 2.3, 3.84);
    ciBuilding.add(col);
  });

  const ciOfficeLight = new THREE.PointLight(0xffcb7f, 0.0, 11, 2);
  ciOfficeLight.position.set(4.8, 3.0, 4.5);
  ciBuilding.add(ciOfficeLight);
  practicalLights.push({ light: ciOfficeLight, maxIntensity: 40 });

  // Rooftop HVAC Chiller / AHU Units (Clearly visible loads)
  [-4.6, -2.1].forEach((hx) => {
    const chiller = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(1.75, 1.0, 1.5)), aluminumMat);
    chiller.position.set(hx + 8.5, 5.25, -1.8);
    chiller.castShadow = true;
    ciBuilding.add(chiller);
    const fanRing = new THREE.Mesh(trackGeo(new THREE.CylinderGeometry(0.48, 0.48, 0.14, 16)), darkSteelMat);
    fanRing.position.set(hx + 8.5, 5.8, -1.8);
    ciBuilding.add(fanRing);
  });

  // Ordered Commercial Rooftop PV Arrays (2 banks x 4 modules across roof)
  for (let bank = 0; bank < 2; bank++) {
    for (let col = 0; col < 5; col++) {
      const rack = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(2.55, 0.09, 2.15)), aluminumMat);
      const pv = new THREE.Mesh(trackGeo(new THREE.PlaneGeometry(2.45, 2.05)), pvSurfaceMat);
      pv.rotation.x = -Math.PI / 2;
      pv.position.y = 0.05;
      const g = new THREE.Group();
      g.add(rack, pv);
      g.rotation.x = 0.24;
      g.position.set(-6.0 + col * 2.8, 5.55, -2.0 + bank * 2.8);
      ciBuilding.add(g);
    }
  }

  // Dedicated Front-Left Equipment Yard (Unobstructed, readable & clickable!)
  [-6.8,-5.3].forEach(cx=>{const cab=hardware.cabinet();cab.position.set(cx,.2,3.55);zone02.add(cab);});
  const hy50=hardware.inverter(true);hy50.position.set(-3.4,1.6,3.55);zone02.add(hy50);
  const hyRack=new THREE.Mesh(trackGeo(new THREE.BoxGeometry(1.55,.2,.85)),darkSteelMat);hyRack.position.set(-3.4,.4,3.55);zone02.add(hyRack);
  for(const x of [-3.9,-2.9])hardware.box(zone02,x,1.4,3.23,.06,2.3,.08,darkSteelMat);
  for(const y of [1.2,2.2])hardware.box(zone02,-3.4,y,3.26,1.1,.06,.08,darkSteelMat);

  // AC Switchgear & Metering Bay
  const switchgear = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(1.45, 2.05, 0.95)), wallSlateMat);
  switchgear.position.set(-1.3, 1.28, 3.55);
  switchgear.castShadow = true;
  zone02.add(switchgear);

  // Commercial Grid Feeder Pole (North-West perimeter of C&I zone)
  const ciGridPole = new THREE.Mesh(trackGeo(new THREE.CylinderGeometry(0.16, 0.22, 7.2, 12)), utilityPoleMat);
  ciGridPole.position.set(-10.5, 3.6, -4.5);
  ciGridPole.castShadow = true;
  zone02.add(ciGridPole);

  // Autonomous Roadside All-in-One Solar Street Lights (jcLight09 / AE-L-GUARD-05)
  const roadLightCoords: [number, number][] = [
    [-1.2, 8.8],
    [7.2, 8.6],
  ];
  roadLightCoords.forEach(([lx, lz]) => {
    const mast = new THREE.Mesh(trackGeo(new THREE.CylinderGeometry(0.09, 0.13, 4.4, 10)), darkSteelMat);
    mast.position.set(lx, 2.2, lz);
    mast.castShadow = true;
    zone02.add(mast);

    const headArm = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(1.35, 0.14, 0.46)), aluminumMat);
    headArm.position.set(lx, 4.4, lz - 0.32);
    zone02.add(headArm);

    const topPv = new THREE.Mesh(trackGeo(new THREE.PlaneGeometry(1.28, 0.42)), pvSurfaceMat);
    topPv.rotation.x = -Math.PI / 2;
    topPv.position.set(lx, 4.48, lz - 0.32);
    zone02.add(topPv);

    const roadLampMat = trackMat(
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0xffe4a8,
        emissiveIntensity: 0.05,
        roughness: 0.2,
      })
    );
    solarLampMats.push(roadLampMat);
    const diffuser = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(0.88, 0.06, 0.32)), roadLampMat);
    diffuser.position.set(lx, 4.31, lz - 0.32);
    zone02.add(diffuser);

    const roadPoint = new THREE.PointLight(0xffdfb0, 0.0, 13, 2);
    roadPoint.position.set(lx, 4.0, lz - 0.3);
    zone02.add(roadPoint);
    practicalLights.push({ light: roadPoint, maxIntensity: 80 });
  });

  // -------------------------------------------------------------------------
  // 5. Zone 03: REMOTE & OFF-GRID (21.0, terrainH, 15.2) — ZERO UTILITY LINES!
  // -------------------------------------------------------------------------
  const z3Y = terrainHeightAt(21.0, 15.2);
  const zone03 = new THREE.Group();
  zone03.position.set(21.0, z3Y, 15.2);
  root.add(zone03);

  // Elevated natural timber deck & stone hearth pad
  const deckPad = makeRoundedPad(10.6, 6.8, 0.28, 0.45, timberMat);
  deckPad.position.set(0.2, 0.02, 0);
  zone03.add(deckPad);
  geometries.push(deckPad.geometry);

  // Eco-Field Outpost Shelter (Steel frame + Cedar wall + Mono-pitch roof + Open glass front)
  const cabinBack = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(5.2, 2.75, 0.24)), timberMat);
  cabinBack.position.set(1.2, 1.68, -1.65);
  cabinBack.castShadow = true;
  zone03.add(cabinBack);

  const cabinSide = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(0.24, 2.75, 3.2)), wallSlateMat);
  cabinSide.position.set(3.7, 1.68, -0.15);
  cabinSide.castShadow = true;
  zone03.add(cabinSide);

  const cabinRoof = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(6.2, 0.2, 4.2)), wallSlateMat);
  cabinRoof.rotation.x = 0.14;
  cabinRoof.position.set(1.2, 3.22, -0.1);
  cabinRoof.castShadow = true;
  zone03.add(cabinRoof);

  // Roof support posts
  [-1.3, 3.6].forEach((px) => {
    const post = new THREE.Mesh(trackGeo(new THREE.CylinderGeometry(0.08, 0.08, 2.75, 8)), darkSteelMat);
    post.position.set(px, 1.68, 1.35);
    zone03.add(post);
  });

  // Open Workstation Inside Outpost: Desk, Field Laptop, Compact Cooler, Suspended Lantern
  const desk = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(2.1, 0.72, 0.85)), timberMat);
  desk.position.set(1.6, 0.68, -0.8);
  zone03.add(desk);

  const laptopGlowMat = trackMat(
    new THREE.MeshStandardMaterial({
      color: 0x16262a,
      emissive: 0x62d9bc,
      emissiveIntensity: 0.35,
      roughness: 0.25,
    })
  );
  warmGlowMats.push(laptopGlowMat);
  const laptopScreen = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(0.54, 0.36, 0.04)), laptopGlowMat);
  laptopScreen.position.set(1.4, 1.24, -0.88);
  laptopScreen.rotation.x = -0.15;
  zone03.add(laptopScreen);

  const coolerBox = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(0.68, 0.56, 0.48)), cabinetBodyMat);
  coolerBox.position.set(2.9, 0.6, -0.8);
  zone03.add(coolerBox);

  const lanternMat = trackMat(
    new THREE.MeshStandardMaterial({
      color: 0xfff0d4,
      emissive: 0xffb756,
      emissiveIntensity: 0.1,
      roughness: 0.28,
    })
  );
  warmGlowMats.push(lanternMat);
  const campLantern = new THREE.Mesh(trackGeo(new THREE.CylinderGeometry(0.14, 0.16, 0.28, 12)), lanternMat);
  campLantern.position.set(0.8, 2.6, 0.6);
  zone03.add(campLantern);

  const cabinLight = new THREE.PointLight(0xffbe66, 0.0, 8, 2);
  cabinLight.position.set(0.8, 2.45, 0.6);
  zone03.add(cabinLight);
  practicalLights.push({ light: cabinLight, maxIntensity: 28 });

  // Ground-Mounted Off-Grid Solar Array Rack (AE-SK1) beside the deck
  const offRackGroup = new THREE.Group();
  offRackGroup.position.set(-5.2, 0.1, -0.7);
  zone03.add(offRackGroup);

  [-1.0, 1.0].forEach((rx) => {
    const legF = new THREE.Mesh(trackGeo(new THREE.CylinderGeometry(0.06, 0.07, 1.15, 8)), darkSteelMat);
    legF.position.set(rx, 0.55, 0.65);
    const legB = new THREE.Mesh(trackGeo(new THREE.CylinderGeometry(0.06, 0.07, 2.15, 8)), darkSteelMat);
    legB.position.set(rx, 1.05, -0.65);
    offRackGroup.add(legF, legB);
  });
  for (let p = 0; p < 2; p++) {
    const frame = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(1.75, 0.08, 2.35)), aluminumMat);
    const pv = new THREE.Mesh(trackGeo(new THREE.PlaneGeometry(1.65, 2.25)), pvSurfaceMat);
    pv.rotation.x = -Math.PI / 2;
    pv.position.y = 0.05;
    const panel = new THREE.Group();
    panel.add(frame, pv);
    panel.rotation.x = 0.56;
    panel.position.set(p === 0 ? -0.95 : 0.95, 1.48, 0);
    offRackGroup.add(panel);
  }

  // Sheltered Hardware Bench: AE-E-SEED 25.6V Deep Cycle Battery + AE-E-VOLT-1000 Portable Station
  const benchBase = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(3.8, 0.22, 1.15)), wallSlateMat);
  benchBase.position.set(-0.9, 0.36, 1.65);
  zone03.add(benchBase);

  const seedModel=hardware.seed();seedModel.position.set(-2.1,.48,1.65);zone03.add(seedModel);
  const voltModel=hardware.portable();voltModel.position.set(.55,.48,2.05);zone03.add(voltModel);
  const foldPanel=new THREE.Mesh(trackGeo(new THREE.BoxGeometry(1.3,.05,1.4)),pvSurfaceMat);foldPanel.rotation.x=.6;foldPanel.position.set(2,.65,3.6);zone03.add(foldPanel);
  hardware.box(zone03,-.6,1.4,-1.78,.23,.3,.1,darkSteelMat,.015);

  // Standalone Split Solar Street Light (jcLight27 / AE-L-GUARD-06) at Trailhead
  const splitPole = new THREE.Mesh(trackGeo(new THREE.CylinderGeometry(0.09, 0.14, 4.35, 10)), darkSteelMat);
  splitPole.position.set(5.8, 2.15, 1.3);
  splitPole.castShadow = true;
  zone03.add(splitPole);

  const splitBatBox = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(0.32, 0.56, 0.24)), aluminumMat);
  splitBatBox.position.set(5.8, 3.15, 1.44);
  zone03.add(splitBatBox);

  const splitPvMount = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(1.15, 0.06, 0.88)), aluminumMat);
  splitPvMount.rotation.x = 0.42;
  splitPvMount.position.set(5.8, 4.5, 1.3);
  zone03.add(splitPvMount);

  const splitPv = new THREE.Mesh(trackGeo(new THREE.PlaneGeometry(1.08, 0.8)), pvSurfaceMat);
  splitPv.rotation.x = -Math.PI / 2 + 0.42;
  splitPv.position.set(5.8, 4.54, 1.32);
  zone03.add(splitPv);

  const splitArm = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(1.25, 0.1, 0.2)), darkSteelMat);
  splitArm.position.set(5.2, 3.92, 1.3);
  zone03.add(splitArm);

  const splitLampMat = trackMat(
    new THREE.MeshStandardMaterial({
      color: 0xfff8e6,
      emissive: 0xffd17a,
      emissiveIntensity: 0.06,
      roughness: 0.2,
    })
  );
  solarLampMats.push(splitLampMat);
  const splitLuminaire = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(0.64, 0.09, 0.34)), splitLampMat);
  splitLuminaire.position.set(4.65, 3.88, 1.3);
  zone03.add(splitLuminaire);

  const splitStreetLight = new THREE.PointLight(0xffd788, 0.0, 14, 2);
  splitStreetLight.position.set(4.65, 3.65, 1.3);
  zone03.add(splitStreetLight);
  practicalLights.push({ light: splitStreetLight, maxIntensity: 75 });

  // -------------------------------------------------------------------------
  // 6. Instanced Architectural Landscaping (Trees, Shrubs, Limestone Rocks)
  // -------------------------------------------------------------------------
  const trunkGeo = trackGeo(new THREE.CylinderGeometry(0.11, 0.16, 1.15, 7));
  trunkGeo.translate(0, 0.58, 0);
  const trunkMat = trackMat(new THREE.MeshStandardMaterial({ color: 0x6f5a47, roughness: 0.9 }));

  const crownGeo = trackGeo(new THREE.IcosahedronGeometry(0.95, 1));
  crownGeo.scale(1, 1.35, 1);
  crownGeo.translate(0, 1.85, 0);
  const crownMat = trackMat(new THREE.MeshStandardMaterial({ color: 0x5c8b6d, roughness: 0.85 }));

  const treeCoords: [number, number, number][] = [
    [-22.5, -6.5, 1.05],
    [-21.0, 5.2, 0.85],
    [-16.0, -7.2, 1.15],
    [-2.5, -5.8, 1.1],
    [-1.2, 0.2, 0.9],
    [3.8, -9.5, 1.25],
    [5.2, 2.2, 0.95],
    [7.2, -16.5, 1.15],
    [14.2, -16.8, 1.2],
    [29.5, -14.8, 1.1],
    [32.4, -7.2, 1.15],
    [33.8, 0.5, 1.0],
    [10.2, 13.8, 1.1],
    [11.4, 21.2, 1.25],
    [16.2, 22.8, 0.95],
    [27.4, 21.8, 1.15],
    [31.8, 17.5, 1.05],
    [-8.5, 16.2, 1.1],
    [-18.8, 15.0, 1.2],
    [-26.5, 6.2, 1.25],
    [-25.5, -13.0, 1.3],
    [22.5, -18.5, 1.18],
  ];

  const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, treeCoords.length);
  const crowns = new THREE.InstancedMesh(crownGeo, crownMat, treeCoords.length);
  trunks.castShadow = true;
  crowns.castShadow = true;

  treeCoords.forEach(([tx, tz, scale], i) => {
    const ty = terrainHeightAt(tx, tz);
    dummy.position.set(tx, ty, tz);
    dummy.rotation.set(0, seeded(i) * Math.PI * 2, 0);
    dummy.scale.setScalar(scale);
    dummy.updateMatrix();
    trunks.setMatrixAt(i, dummy.matrix);
    crowns.setMatrixAt(i, dummy.matrix);
    crowns.setColorAt(i, new THREE.Color().setHSL(0.39 + (seeded(i + 5) - 0.5) * 0.04, 0.26, 0.42 + seeded(i + 12) * 0.08));
  });
  trunks.instanceMatrix.needsUpdate = true;
  crowns.instanceMatrix.needsUpdate = true;
  if (crowns.instanceColor) crowns.instanceColor.needsUpdate = true;
  // Superseded by layered organic branches and foliage in detailLayer.

  // Stylized Limestone Boulders around Off-Grid Knoll
  const rockGeo = trackGeo(new THREE.DodecahedronGeometry(0.55, 0));
  const rockMat = trackMat(new THREE.MeshStandardMaterial({ color: 0xaeb3ad, roughness: 0.92 }));
  const rockCoords: [number, number, number][] = [
    [13.8, 13.0, 0.9],
    [14.9, 17.2, 0.65],
    [17.6, 20.6, 1.1],
    [24.2, 20.0, 0.85],
    [28.5, 18.8, 1.05],
    [29.5, 12.6, 0.72],
    [12.2, 10.6, 0.8],
    [8.6, 15.8, 1.15],
  ];
  const rocks = new THREE.InstancedMesh(rockGeo, rockMat, rockCoords.length);
  rockCoords.forEach(([rx, rz, rs], i) => {
    dummy.position.set(rx, terrainHeightAt(rx, rz) + 0.15, rz);
    dummy.rotation.set(seeded(i) * 0.6, seeded(i + 9) * Math.PI, seeded(i + 17) * 0.5);
    dummy.scale.set(rs * 1.25, rs * 0.72, rs);
    dummy.updateMatrix();
    rocks.setMatrixAt(i, dummy.matrix);
  });
  rocks.instanceMatrix.needsUpdate = true;
  // Superseded by detailed mineral boulders in detailLayer.

  // Night Reactivity Update
  const setNightFactor = (nightFactor: number) => {
    const n = THREE.MathUtils.clamp(nightFactor, 0, 1);

    warmGlowMats.forEach((m) => {
      m.emissiveIntensity = 1.35 * n;
    });

    solarLampMats.forEach((m) => {
      m.emissiveIntensity = 1.9 * n;
    });

    practicalLights.forEach((entry) => {
      entry.light.intensity = entry.maxIntensity * n;
    });
    homeRefinement.setNightFactor(n);
  };

  setNightFactor(0);

  return {
    root,
    terrainHeightAt,
    setNightFactor,
    dispose: () => {
      homeRefinement.dispose();
      hardware.dispose();harness.dispose();
      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());
    },
  };
}
