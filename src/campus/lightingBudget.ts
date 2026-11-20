import * as THREE from 'three';
import type { CampusZoneId } from './types';

export type PracticalLight = THREE.PointLight | THREE.SpotLight;
export type LightingRegion = 'home' | 'road' | 'commercial' | 'offgrid';
interface LightingMetadata {
  lightingRegion?: LightingRegion;
  overviewPriority?: number;
}
const metadata = (light: PracticalLight) => light.userData as LightingMetadata;

const ZONE_LIGHT_CENTERS: Record<CampusZoneId, THREE.Vector3> = {
  overview: new THREE.Vector3(5.6, 1, 4.2),
  home: new THREE.Vector3(-11.5, 1, 2),
  commercial: new THREE.Vector3(18.5, 1, -7.8),
  offgrid: new THREE.Vector3(18, 1, 19.2),
};

/** Metadata only: never changes a lamp's physical position, range, decay or intensity. */
export function tagPracticalLight(light: PracticalLight, region: LightingRegion, overviewPriority = 0) {
  Object.assign(light.userData, { lightingRegion: region, overviewPriority });
}

/** Four-light overview: house, spine road, outpost, commercial facade.
 * Six-light overview additionally includes the second road lamp and home courtyard.
 * Zone close-ups deliberately keep the original nearest-light strategy.
 */
export function selectPracticalLights(lights: PracticalLight[], zone: CampusZoneId, budget: number): PracticalLight[] {
  const limit = Math.max(0, Math.min(lights.length, Math.floor(budget)));
  if (limit === lights.length) return lights.slice();
  const position = new THREE.Vector3();
  const ranked = lights.map((light, index) => ({
    light,
    index,
    distance: light.getWorldPosition(position).distanceToSquared(ZONE_LIGHT_CENTERS[zone]),
    priority: Number(metadata(light).overviewPriority ?? 0),
  }));
  ranked.sort((a, b) => zone === 'overview'
    ? a.priority - b.priority || a.distance - b.distance || a.index - b.index
    : a.distance - b.distance || a.index - b.index);
  if (zone !== 'overview') return ranked.slice(0, limit).map(entry => entry.light);

  const selected: PracticalLight[] = [];
  const regionOrder: LightingRegion[] = ['home', 'road', 'offgrid', 'commercial', 'road', 'home', 'offgrid'];
  for (const region of regionOrder) {
    if (selected.length >= limit) break;
    const entry = ranked.find(({ light }) => metadata(light).lightingRegion === region && !selected.includes(light));
    if (entry) selected.push(entry.light);
  }
  for (const { light } of ranked) {
    if (selected.length >= limit) break;
    if (!selected.includes(light)) selected.push(light);
  }
  return selected;
}

export function applyPracticalLightBudget(lights: PracticalLight[], zone: CampusZoneId, budget: number) {
  const selected = new Set(selectPracticalLights(lights, zone, budget));
  for (const light of lights) light.visible = selected.has(light);
}
