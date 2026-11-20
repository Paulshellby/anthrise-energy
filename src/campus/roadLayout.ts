import * as THREE from 'three';
export const ROAD_WIDTH=4.4;
export const LANE_OFFSET=1.04;
export function createCampusRoad(){
 // The road, markings and both vehicle lanes share this one surveyed centerline.
 return new THREE.CatmullRomCurve3([
  [-85,0,10.6],[-28,0,10.6],[-15,0,10.8],[-5,0,10.3],[5,0,7.3],[15,0,4.9],[26,0,4.6],[35,0,8.8],[85,0,12.8],
 ].map(p=>new THREE.Vector3(p[0],p[1],p[2])),false,'centripetal');
}
export const BUILDING_FOOTPRINTS=[
 {name:'residential',minX:-17.6,maxX:-5,minZ:-1.5,maxZ:4.6},
 {name:'office',minX:-4,maxX:5.7,minZ:-15.8,maxZ:-9.5},
 {name:'industrial',minX:10,maxX:29,minZ:-13,maxZ:-3.4},
 {name:'offgrid',minX:19.5,maxX:25,minZ:13,maxZ:16.8},
];
