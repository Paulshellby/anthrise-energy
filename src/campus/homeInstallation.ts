import * as THREE from 'three';
import type { TextureBundle, PbrTextureSet } from './textures';

/** Supports/ducts are architectural concepts, not manufacturer-certified fixing hardware. */
export function createHomeInstallation(
  homeBody: THREE.Group, battery: THREE.Group, inverter: THREE.Group, textures: TextureBundle
) {
  const root = new THREE.Group();
  root.name = 'HomeCatalogueScaleInstallation';
  root.userData.terminalCoordinatesVerified = false;
  homeBody.add(root);
  const geometries: THREE.BufferGeometry[] = [];
  const materials: THREE.Material[] = [];
  const geo = <T extends THREE.BufferGeometry>(g: T) => { geometries.push(g); return g; };
  const mat = <T extends THREE.Material>(m: T) => { materials.push(m); return m; };
  const simple = (color: number, roughness: number, metalness = 0) =>
    mat(new THREE.MeshStandardMaterial({ color, roughness, metalness }));
  const pbr = (set: PbrTextureSet | undefined, color: number, strength: number) => mat(new THREE.MeshStandardMaterial({
    color: set ? 0xffffff : color, roughness: 0.92,
    normalScale: new THREE.Vector2(strength, strength),
    ...(set ? { map: set.color, normalMap: set.normal, roughnessMap: set.roughness } : {}),
    ...(set?.ao ? { aoMap: set.ao } : {}),
  }));
  const stone = pbr(textures.homePbr?.paving, 0xd4cec2, 0.24);
  const board = pbr(textures.homePbr?.plaster, 0xece8dc, 0.12);
  const steel = simple(0x889b9c, 0.38, 0.72);
  const enclosure = simple(0xcbd0cb, 0.52, 0.12);
  const dark = simple(0x263432, 0.68);
  const unitBox = geo(new THREE.BoxGeometry(1, 1, 1));
  function box(name: string, position: number[], size: number[], surface: THREE.Material) {
    const mesh = new THREE.Mesh(unitBox, surface);
    mesh.name = name;
    mesh.position.set(position[0], position[1], position[2]);
    mesh.scale.set(size[0], size[1], size[2]);
    mesh.castShadow = true; mesh.receiveShadow = true;
    root.add(mesh); return mesh;
  }

  const retired: THREE.Object3D[] = [];
  homeBody.traverse(o => {
    if (['BatterySupportPaver', 'BatteryWheelContact', 'ConceptMountingRail'].includes(o.name)) retired.push(o);
  });
  retired.forEach(o => o.removeFromParent());

  // Fill the old enlarged equipment recess with a separate architectural service board.
  box('TechnicalServiceBackboard', [-4.3, 1.95, 2.67], [1.24, 1.49, 0.09], board);
  for (const y of [1.80, 2.10]) {
    const bracket = box('InverterArchitecturalSupportRail', [-4.3, y, 2.752], [0.27, 0.035, 0.084], steel);
    bracket.userData.manufacturerHolePattern = 'unknown';
  }
  // Four pads anchor the architectural rails, not any invented product drilling pattern.
  for (const x of [-4.42, -4.18]) for (const y of [1.80, 2.10]) {
    box('BackboardRailStandoff', [x, y, 2.715], [0.03, 0.04, 0.075], steel);
  }
  inverter.userData.installation = 'wall-mounted on conceptual architectural rails; manufacturer bracket pending';

  // The wheels touch the paver at local y=-.002, preserving the actual floor datum.
  const paver = box('BatterySupportPaver', [-2.75, -0.032, 2.98], [0.78, 0.06, 0.54], stone);
  paver.userData.supportLoadVerified = false;
  battery.userData.installation = 'wheeled floor mounting at catalogue size; slab/caster capacity pending';

  const shadowCanvas = document.createElement('canvas');
  shadowCanvas.width = shadowCanvas.height = 64;
  const ctx = shadowCanvas.getContext('2d')!;
  const radial = ctx.createRadialGradient(32, 32, 5, 32, 32, 31);
  radial.addColorStop(0, 'rgba(255,255,255,0.9)');
  radial.addColorStop(0.4, 'rgba(255,255,255,0.38)');
  radial.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = radial; ctx.fillRect(0, 0, 64, 64);
  const contactTexture = new THREE.CanvasTexture(shadowCanvas);
  const contact = mat(new THREE.MeshBasicMaterial({
    map: contactTexture, color: 0x142019, transparent: true, opacity: 0.48,
    depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1,
  }));
  const contactGeo = geo(new THREE.PlaneGeometry(0.11, 0.085));
  homeBody.updateWorldMatrix(true, true);
  const wheels: THREE.Object3D[] = [];
  battery.traverse(o => { if (o.name === 'BatteryCasterWheel') wheels.push(o); });
  wheels.forEach(wheel => {
    const local = homeBody.worldToLocal(wheel.getWorldPosition(new THREE.Vector3()));
    const shadow = new THREE.Mesh(contactGeo, contact);
    shadow.name = 'BatteryWheelContact'; shadow.rotation.x = -Math.PI / 2;
    shadow.position.set(local.x, -0.0018, local.z);
    shadow.userData.fromActualCasterPosition = true;
    root.add(shadow);
  });
  const baseShadow = new THREE.Mesh(geo(new THREE.PlaneGeometry(0.64, 0.34)), contact);
  baseShadow.name = 'BatterySoftContactOcclusion'; baseShadow.rotation.x = -Math.PI / 2;
  baseShadow.position.set(-2.75, -0.0019, 2.98); root.add(baseShadow);

  // Building-owned sealed service boxes. No electrical port is placed on either product.
  for (const [name, x, y, z, w, h, d] of [
    ['InverterServiceBox', -4.3, 1.47, 2.79, 0.34, 0.24, 0.12],
    ['BatteryIsolationServiceBox', -3.28, 0.64, 2.77, 0.23, 0.28, 0.13],
    ['PVArchitecturalIsolator', -4.65, 1.9, 2.75, 0.2, 0.3, 0.13],
  ] as const) {
    const service = box(name, [x, y, z], [w, h, d], enclosure);
    service.userData.manufacturerProduct = false;
    box(name + '-DoorRim', [x, y, z + d / 2 + 0.006], [w * 0.89, h * 0.89, 0.013], steel);
    box(name + '-Handle', [x + w * 0.29, y, z + d / 2 + 0.02], [0.018, 0.065, 0.02], dark);
    for (const dx of [-w * 0.33, w * 0.33]) {
      const gland = new THREE.Mesh(geo(new THREE.CylinderGeometry(0.018, 0.021, 0.035, 12)), dark);
      gland.name = 'ArchitecturalServiceBoxGland'; gland.position.set(x + dx, y - h / 2 - 0.015, z);
      root.add(gland);
    }
  }

  // Short architectural cable clamps anchor visible routes to the backboard, not open air.
  for (const [x, y] of [[-4.65, 2.52], [-4.65, 2.91], [-4.65, 3.32], [-3.28, 1.1], [-3.28, 1.28]]) {
    box('HomeConduitSaddlePlate', [x, y, 2.723], [0.095, 0.075, 0.035], steel);
    const saddle = new THREE.Mesh(geo(new THREE.TorusGeometry(0.037, 0.009, 6, 16, Math.PI)), steel);
    saddle.name = 'HomeConduitSaddle'; saddle.position.set(x, y, 2.73); saddle.rotation.z = Math.PI / 2;
    root.add(saddle);
  }
  return { root, dispose() {
    contactTexture.dispose(); geometries.forEach(g => g.dispose()); materials.forEach(m => m.dispose()); root.removeFromParent();
  } };
}
