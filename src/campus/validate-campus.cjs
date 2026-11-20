/* Run from the project root: node src/campus/validate-campus.cjs
 * Real Three.js scene graphs; DOM / image loading are stubbed. This is not a visual/browser test.
 * Bundles source in memory only and never writes package / page / manifest / Git files.
 */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const esbuild = require('esbuild');
const THREE = require('three');
const context = new Proxy({}, { get: (_, key) => key === 'createLinearGradient' ? () => ({ addColorStop() {} }) : () => {} });
global.window = { innerWidth: 1440 };
global.document = { createElement: () => ({ width: 64, height: 128, getContext: () => context }) };
const originalLoad = THREE.TextureLoader.prototype.load;
THREE.TextureLoader.prototype.load = function (_, onLoad) { const texture = new THREE.Texture(); if (onLoad) onLoad(texture); return texture; };
const code = esbuild.buildSync({
  stdin: { contents: "export {createCampusWorld} from './src/campus/campusWorld'; export {createDetailLayer} from './src/campus/detailLayer'; export {createEnergyFlowSystem} from './src/campus/energyFlow'; export {CAMPUS_HOTSPOTS} from './src/campus/types';", resolveDir: process.cwd(), loader: 'ts' },
  bundle: true, write: false, platform: 'node', format: 'cjs', packages: 'external', logLevel: 'silent',
}).outputFiles[0].text;
const mod = new Module(path.join(process.cwd(), 'src/campus/.in-memory-validation.cjs'), module);
mod.filename = mod.id;
mod.paths = Module._nodeModulePaths(process.cwd());
mod._compile(code, mod.filename);
const { createCampusWorld, createDetailLayer, createEnergyFlowSystem, CAMPUS_HOTSPOTS } = mod.exports;
const texture = new THREE.Texture();
const textures = { solarPanel: texture, limestoneWall: texture, roadAsphalt: texture, grassGround: texture, timberDeck: texture, productTextures: new Map() };
const world = createCampusWorld(textures);
const details = createDetailLayer(world.root, textures);
const root = world.root;
const all = () => { const values = []; root.traverse(o => values.push(o)); return values; };
const lamps = all().filter(o => o.isLight);
const warmMaterials = [...new Set(all().flatMap(o => o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : []))].filter(m => m.emissive && m.emissive.getHex() !== 0 && m.emissive.r > m.emissive.b);
world.setNightFactor(0); details.setNightFactor(0);
assert(lamps.every(light => light.intensity === 0));
assert(warmMaterials.every(m => m.emissiveIntensity === 0));
const snapshot = () => all().map(o => [o.uuid, ...o.position.toArray(), ...o.quaternion.toArray(), ...o.scale.toArray()]);
const daySpace = snapshot();
world.setNightFactor(1); details.setNightFactor(1);
assert.deepEqual(snapshot(), daySpace, 'Day / night must change no object transforms');
assert(lamps.every(light => light.intensity > 0 && light.distance > 0 && light.decay === 2));
assert(warmMaterials.every(m => m.emissiveIntensity > 0));
const cars = all().filter(o => /^StaticParkedVehicle/.test(o.name));
assert.equal(cars.length, 3);
assert.equal(details.update, undefined, 'No vehicle animation callback');
for (const car of cars) car.traverse(o => { if (o.material && o.material.emissive) assert.equal(o.material.emissiveIntensity > 0 && o.material.emissive.getHex() !== 0, false); });
assert.equal(root.getObjectByName('HomeRoof-338IndividualTiles').count, 338);
assert(root.getObjectByName('HomeTechnicalWing-RealOpenings'));
assert.equal(all().filter(o => o.name === 'HomePVModule').length, 8);
assert.equal(all().filter(o => o.name === 'BatteryWheelContact').length, 4);
const battery = root.getObjectByName('MeshProduct-ess16');
assert.deepEqual(battery.userData.catalogueDimensionsMm, { width: 480, depth: 235, height: 874 });
root.updateMatrixWorld(true);
const batteryPosition = battery.getWorldPosition(new THREE.Vector3());
assert.deepEqual(batteryPosition.toArray(), [-14.25, 0.26, 4.68]);
const paver = root.getObjectByName('BatterySupportPaver');
const paverBounds = new THREE.Box3().setFromObject(paver);
const footingBounds = new THREE.Box3().setFromObject(root.getObjectByName('HomeFootingPad'));
assert(Math.abs(paverBounds.max.y - 0.258) < 0.000001);
assert(footingBounds.max.y < paverBounds.max.y, 'Footing must not bury the original wheels');
const inverter = root.getObjectByName('MeshProduct-hybrid6');
const inverterPosition = inverter.getWorldPosition(new THREE.Vector3());
assert.deepEqual(inverterPosition.toArray(), [-15.8, 2.21, 4.6]);
const cabinets = all().filter(o => o.name === 'MeshProduct-horizon');
assert.equal(cabinets.length, 2);
for (const cabinet of cabinets) assert(cabinet.children.some(m => m.position.x === 0.73 && m.scale.x === 1), 'Original rounded side cooling enclosure remains');

const flow = createEnergyFlowSystem();
assert.equal(flow.group.visible, false);
flow.setVisible(true); flow.setState(0, false, false); flow.update(0.25);
const byName = name => flow.group.getObjectByName(name);
const pvIds = ['z1-pv-inv', 'z1-garden-light-day', 'z2-pv-inv', 'z2-roadlight-day', 'z3-pv-storage', 'z3-split-day', 'z3-portable-pv'];
assert(pvIds.every(id => byName('FlowConduit-' + id).material.opacity > 0.8));
flow.setState(1, false, false); flow.update(0);
assert(pvIds.every(id => byName('FlowConduit-' + id).material.opacity === 0.24));
assert.equal(byName('FlowConduit-z1-bat-inv-night').material.opacity, 0.92);
const packets = byName('EnergyFlowPackets');
const packetMatrix = new THREE.Matrix4();
let pvActivePackets = 0;
// First three packet slots are the home PV source, followed by two day-charge slots.
for (let i = 0; i < 5; i++) { packets.getMatrixAt(i, packetMatrix); if (packetMatrix.elements[13] > -99) pvActivePackets++; }
assert.equal(pvActivePackets, 0, 'Night home PV / battery-charge particles are disabled');
flow.setState(1, false, true); flow.update(0);
assert.equal(packets.visible, false);
assert.equal(byName('FlowArrows-z1-bat-inv-night').visible, true);
assert.equal(byName('FlowArrows-z1-pv-inv').visible, false);
flow.setState(1, true, false); flow.update(0.2);
assert.equal(packets.visible, false);
flow.setVisible(false); assert.equal(flow.group.visible, false);
assert(CAMPUS_HOTSPOTS.find(h => h.id === 'home-battery').usage.en.includes('480'));
const sceneSource = fs.readFileSync('src/campus/CampusScene.ts', 'utf8');
assert(!/vehicleAnimating|detailLayer\.update/.test(sceneSource));
assert(/setPointerCapture/.test(sceneSource) && /pointercancel/.test(sceneSource));
assert(/e\.target !== canvasHost/.test(sceneSource), 'Arrow keys are stage-local');
assert(!fs.readFileSync('src/campus/index.ts', 'utf8').includes('flowToggle.click'));
world.setNightFactor(0); details.setNightFactor(0);
assert(lamps.every(light => light.intensity === 0) && warmMaterials.every(m => m.emissiveIntensity === 0));
const triangles = all().filter(o => o.isMesh).reduce((sum, mesh) => sum + (mesh.geometry.index ? mesh.geometry.index.count / 3 : mesh.geometry.getAttribute('position').count / 3) * (mesh.isInstancedMesh ? mesh.count : 1), 0);
console.log(JSON.stringify({ status: 'passed', browserTest: false, lights: lamps.length, warmLampMaterials: warmMaterials.length, staticCars: cars.length, roofTiles: 338, sceneTriangles: triangles, pvTracksChecked: pvIds.length, sameDayNightSpace: true, batteryPosition: batteryPosition.toArray(), inverterPosition: inverterPosition.toArray(), checks: ['day lights and warm emitters exactly zero', 'night physical distance / decay', 'three static cars, no update', 'real roof / shell / window / PV mounts', 'original battery / inverter anchors', 'both side-cooling cabinets retained', 'night PV packets off', 'flow hidden / shown / paused / reduced-motion', 'stage keyboard / pointer-cancel source guard'] }, null, 2));
flow.dispose(); details.dispose(); world.dispose(); texture.dispose();
THREE.TextureLoader.prototype.load = originalLoad;
