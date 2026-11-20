import * as THREE from 'three';
import { homeElectricalRoutes } from './homeInstallationLayout';
type P=[number,number,number];
export function electricalRoutes(h:number):Record<string,P[]>{
 const seed:P[]=[[17.9,h+1.5,16.55],[18.28,h+.9,16.55],[18.55,h+.9,16.72],[18.55,h+1.3,16.72]];
 return {
 ...homeElectricalRoutes(),
 'z2-pv-inv':[[17.2,5.85,-7.2],[15.6,5.6,-4.2],[15.6,2.85,-4.2],[15.2,2.85,-3.4],[15.2,1.0,-3.4]],
 'z2-inv-bat-day':[[15.2,1,-3.4],[15.2,.5,-2.83],[12.2,.5,-2.83],[12.2,.65,-2.9]],
 'z2-bat-inv-night':[[12.2,.65,-2.9],[12.2,.5,-2.83],[15.2,.5,-2.83],[15.2,1,-3.4]],
 'z2-ac-loads':[[16,1,-3.4],[16,.48,-2.83],[17.7,.48,-2.83],[17.7,1.8,-2.9],[17.7,4.8,-4.2],[24.2,4.8,-4.2],[24.2,4.9,-6.2]],
 'z2-grid':[[8.5,6.8,-11.5],[14.5,5,-7.2],[17.7,5,-4.2],[17.7,1.8,-2.9]],
 'z3-pv-storage':[[15.8,h+1.45,14.6],[16.1,h+.4,15.8],[17.9,h+.4,16.55],[17.9,h+1.5,16.55]],
 'z3-controller-seed':seed,
 'z3-bat-night':[[18.55,h+1.3,16.72],[18.55,h+.7,16.65],[20.4,h+.7,16.65],[20.4,h+1.4,13.47]],
 'z3-portable-pv':[[23,h+.8,18.8],[23,h+.4,18.8],[22,h+.4,17.25],[22.015,h+.76,17.25]],
 'z3-field-loads':[[21.47,h+.7,17.563],[21.47,h+.5,17.563],[22.4,h+.5,17.55],[22.4,h+.5,14.4],[22.4,h+1.3,14.4]],
 };
}
export function routeCurve(points:P[],cornerRadius=0){
 const curve=new THREE.CurvePath<THREE.Vector3>(),p=points.map(value=>new THREE.Vector3(...value));
 let last=p[0];
 for(let i=1;i<p.length-1;i++){
  const before=p[i-1],center=p[i],after=p[i+1];
  const radius=Math.min(cornerRadius,center.distanceTo(before)*.32,center.distanceTo(after)*.32);
  if(radius<=0){curve.add(new THREE.LineCurve3(last,center));last=center;continue;}
  const incoming=center.clone().add(before.clone().sub(center).normalize().multiplyScalar(radius));
  const outgoing=center.clone().add(after.clone().sub(center).normalize().multiplyScalar(radius));
  curve.add(new THREE.LineCurve3(last,incoming));curve.add(new THREE.QuadraticBezierCurve3(incoming,center,outgoing));last=outgoing;
 }
 curve.add(new THREE.LineCurve3(last,p[p.length-1]));return curve;
}
export function createCableHarness(h:number){
 const group=new THREE.Group();group.name='PhysicalCableHarness';const geos:THREE.BufferGeometry[]=[],mats:THREE.Material[]=[];
 const mat=(color:number)=>{const m=new THREE.MeshStandardMaterial({color,roughness:.75});mats.push(m);return m;};
 const grey=mat(0x777f7d),red=mat(0x9d3028),black=mat(0x222b2c),comms=mat(0x125c4e),earth=mat(0x93a234);
 for(const [key,points] of Object.entries(electricalRoutes(h))){
  if(key.endsWith('night')&&key!=='z3-bat-night')continue;
  const pair=key.includes('pv')||key.includes('bat')||key.includes('controller');
  const home=key.startsWith('z1-');
  for(let side=0;side<(pair?2:1);side++){
   const offset=home?.0125:.027;
   const pts=points.map(p=>[p[0]+(pair?(side===0?-offset:offset):0),p[1],p[2]] as P);
   if(key==='z3-controller-seed')pts[pts.length-1]=[side===0?18.55:19.25,h+1.3,16.72];
   if(key==='z3-bat-night')pts[0]=[side===0?18.55:19.25,h+1.3,16.72];
   const radius=home?(key.includes('bms')?.004:pair?.0085:.019):(key.includes('bms')?.012:pair?.018:.028);
   const geo=new THREE.TubeGeometry(routeCurve(pts,home?.065:0),Math.max(16,points.length*12),radius,8,false);geos.push(geo);
   const mesh=new THREE.Mesh(geo,key.includes('bms')?comms:pair?(side?black:red):grey);mesh.name='Cable-'+key+'-'+side;mesh.castShadow=true;group.add(mesh);
   if(home)mesh.userData.endpoints='architectural service zones; product interfaces unverified';
  }
 }
 const pe:P[]=[[-14.78,.70,4.445],[-14.78,.4,4.445],[-17.72,.4,4.445],[-17.72,1.65,2.15]];
 const peg=new THREE.TubeGeometry(routeCurve(pe),45,.013,6,false);geos.push(peg);group.add(new THREE.Mesh(peg,earth));
 // Home service boxes now belong to the catalogue-scale installation module.
 for(const [x,y,z] of [[17.9,h+1.5,16.55]]){
  const geo=new THREE.BoxGeometry(.21,.28,.13);geos.push(geo);const box=new THREE.Mesh(geo,grey);box.position.set(x,y,z);box.castShadow=true;group.add(box);
  const switchGeo=new THREE.BoxGeometry(.055,.09,.03);geos.push(switchGeo);const sw=new THREE.Mesh(switchGeo,red);sw.position.set(x,y,z+.08);group.add(sw);
 }
 return {group,dispose(){geos.forEach(g=>g.dispose());mats.forEach(m=>m.dispose());}};
}
