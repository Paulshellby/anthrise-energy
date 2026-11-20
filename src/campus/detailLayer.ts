import {createHardwareFactory} from './productHardware';
import {createCampusRoad,ROAD_WIDTH} from './roadLayout';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { terrainHeightAt } from './campusWorld';
import type { TextureBundle } from './textures';

// A separate detail layer keeps the exported equipment topology and product anchors intact.
export function createDetailLayer(parent:THREE.Group,textures:TextureBundle,onAssetReady?:()=>void){
 const hardware=createHardwareFactory(onAssetReady);
 const root=new THREE.Group();root.name='ArchitecturalDetailLayer';parent.add(root);
 const geometries:THREE.BufferGeometry[]=[],materials:THREE.Material[]=[],extraTextures:THREE.Texture[]=[];
 const g=<T extends THREE.BufferGeometry>(x:T):T=>{geometries.push(x);return x;};
 const m=<T extends THREE.Material>(x:T):T=>{materials.push(x);return x;};
 const mat=(color:number,roughness=.75,metalness=0)=>m(new THREE.MeshStandardMaterial({color,roughness,metalness}));
 const stone=mat(0xd8d5c9,.88),trim=mat(0x263a36,.36,.4),wood=mat(0x8f6745,.85),concrete=mat(0xbebfb5,.9);
 const glass=m(new THREE.MeshPhysicalMaterial({color:0x6f949c,roughness:.18,metalness:.25,transparent:true,opacity:.64,envMapIntensity:1.2}));
 const white=mat(0xf2f1e8,.64),black=mat(0x202825,.54,.25),bark=mat(0x685345,.95);
 const glow=m(new THREE.MeshStandardMaterial({color:0xffedc3,emissive:0xffb963,emissiveIntensity:0,roughness:.6}));
 const geoBox=g(new THREE.BoxGeometry(1,1,1));
 function box(to:THREE.Object3D,x:number,y:number,z:number,w:number,h:number,d:number,material:THREE.Material,round=false){
  const mesh=new THREE.Mesh(round?g(new RoundedBoxGeometry(w,h,d,2,Math.min(w,h,d)*.12)):geoBox,material);
  if(!round)mesh.scale.set(w,h,d);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;to.add(mesh);return mesh;
 }
 function cylinderBetween(to:THREE.Object3D,a:THREE.Vector3,b:THREE.Vector3,r:number,material:THREE.Material){
  const v=b.clone().sub(a),mesh=new THREE.Mesh(g(new THREE.CylinderGeometry(r*.74,r,v.length(),14)),material);
  mesh.position.copy(a).add(b).multiplyScalar(.5);mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),v.normalize());mesh.castShadow=true;to.add(mesh);return mesh;
 }
 function tube(to:THREE.Object3D,points:THREE.Vector3[],radius:number,material:THREE.Material){
  const curve=new THREE.CatmullRomCurve3(points);const mesh=new THREE.Mesh(g(new THREE.TubeGeometry(curve,48,radius,6,false)),material);to.add(mesh);return mesh;
 }
 const loader=new THREE.TextureLoader();
 const logo=loader.load('/assets/brand/anthrise-official.png',onAssetReady);logo.colorSpace=THREE.SRGBColorSpace;extraTextures.push(logo);
 const logoMat=m(new THREE.MeshStandardMaterial({map:logo,color:0xffffff,roughness:.65,metalness:0}));
 // Office is a branded architectural concept, not a representation of actual property.
 const office=new THREE.Group();office.position.set(.8,terrainHeightAt(.8,-12.8)+.1,-12.8);office.name='AnthriseConceptOffice';root.add(office);
 box(office,0,.02,0,11,.22,8,concrete);
 box(office,0,4.25,0,9.6,8.2,5.8,stone);
 box(office,0,4.3,3.02,8.9,7.5,.1,glass);
 for(let floor=0;floor<4;floor++){
  const y=.6+floor*2;
  box(office,0,y,3.13,9.7,.14,.3,trim);
  for(let j=0;j<7;j++)box(office,-4.4+j*1.47,y+.92,3.12,.055,1.84,.16,trim);
  for(let j=0;j<5;j++){
   box(office,-3.5+j*1.6,y+.4,1.95,.95,.05,.5,wood);
   box(office,-3.5+j*1.6,y+.7,2.1,.35,.35,.1,black);
  }
 }
 box(office,-3.4,1,3.15,2.2,2.0,.08,glass);
 for(const x of [-3.9,-2.9])box(office,x,.95,3.25,.04,.5,.05,trim);
 box(office,-2.9,2.25,3.65,3.8,.12,1.5,trim);
 box(office,2.2,6.8,3.18,4.1,2.1,.15,white);
 const sign=new THREE.Mesh(g(new THREE.PlaneGeometry(3.55,.68)),logoMat);sign.position.set(2.2,7.05,3.27);office.add(sign);
 const captionCanvas=document.createElement('canvas');captionCanvas.width=768;captionCanvas.height=100;
 const cx=captionCanvas.getContext('2d')!;cx.clearRect(0,0,768,100);cx.fillStyle='#174e40';cx.font='500 49px sans-serif';cx.textAlign='center';cx.fillText('T E C H N O L O G Y',384,66);
 const captionTex=new THREE.CanvasTexture(captionCanvas);captionTex.colorSpace=THREE.SRGBColorSpace;extraTextures.push(captionTex);
 const cap=new THREE.Mesh(g(new THREE.PlaneGeometry(3.1,.4)),m(new THREE.MeshStandardMaterial({map:captionTex,transparent:true,roughness:.8})));cap.position.set(2.2,6.42,3.28);office.add(cap);
 box(office,0,8.48,0,10.1,.24,6.3,trim);
 for(let i=0;i<4;i++)box(office,-3.3+i*2.1,8.7,-.8,1.7,.08,2.5,m(new THREE.MeshStandardMaterial({map:textures.solarPanel,roughness:.25,metalness:.3})));
 // Architectural joins, window reveals, gutters and solar framing around the original house.
 const home=new THREE.Group();home.position.set(-11.5,.26,1.7);root.add(home);
 for(const y of [.42,.94,2.98,3.49])box(home,-3.4,y,2.715,5.12,.012,.025,concrete);
 for(const x of [-5.5,-3.15,-2.05,-.95])box(home,x,1.75,2.72,.012,3.3,.025,concrete);
 for(const x of [-.76,2.8,6.2]){
  box(home,x,1.55,2.5,.045,3.02,.04,white);
  box(home,x,1.1,2.55,.04,.38,.04,trim);
 }
 const gutterEnd=new THREE.Vector3(-6.3,4.23-.11*Math.cos(.22)-3.29*Math.sin(.22),.1-.11*Math.sin(.22)+3.29*Math.cos(.22));
 tube(home,[gutterEnd,new THREE.Vector3(-6.3,3.1,2.85),new THREE.Vector3(-6.3,.2,2.85)],.055,trim);
 const fridgeFront=box(home,-.05,1.08,-1.29,.91,2,.03,white);box(home,.29,1.2,-1.25,.04,.65,.07,trim);box(home,-.05,1.4,-1.24,.85,.018,.03,trim);
 const stove=box(home,5.15,.65,-1.6,1.25,1.15,.8,wood);box(home,5.15,1.25,-1.6,1.35,.08,.9,stone);
 for(let i=0;i<2;i++){
  const burner=new THREE.Mesh(g(new THREE.CylinderGeometry(.18,.18,.02,24)),black);burner.position.set(4.85+i*.6,1.31,-1.6);home.add(burner);
 }
 box(home,5.15,.7,-1.17,.85,.62,.04,black);
 // Warehouse panel seams, loading bay, service route and mechanical details.
 const ci=new THREE.Group();ci.position.set(18.5,.25,-7.8);root.add(ci);
 for(let i=0;i<22;i++)box(ci,-6.5+i*.6,2.7,4.83,.025,5.3,.03,concrete);
 for(let j=1;j<5;j++)box(ci,0,j,4.84,13.2,.022,.025,concrete);
 box(ci,3.6,1.6,4.9,3.3,3.1,.14,trim);
 for(let j=0;j<10;j++)box(ci,3.6,.35+j*.27,5,3.1,.16,.04,concrete);
 box(ci,3.6,3.25,5.1,3.9,.12,.7,trim);
 for(const x of [-4.2,-1.3,1.7]){
  box(ci,x,5.65,1,1.5,.45,1.2,concrete);
  for(let i=0;i<9;i++)box(ci,x-.6+i*.15,5.91,1,.04,.025,1,trim);
 }
 // Road edging follows the base road mesh. Vehicles do not reference this curve.
 const roadCurve=createCampusRoad();
 const edgeMat=mat(0xc8c6b9,.9),paint=m(new THREE.MeshBasicMaterial({color:0xe6e4d6}));
 for(const side of [-1,1]){
  const pts:THREE.Vector3[]=[];
  for(let i=0;i<=140;i++){
   const t=i/140,p=roadCurve.getPointAt(t),v=roadCurve.getTangentAt(t),normal=new THREE.Vector3(-v.z,0,v.x).normalize();p.addScaledVector(normal,side*(ROAD_WIDTH/2+.05));p.y=terrainHeightAt(p.x,p.z)+.12;pts.push(p);
  }
  tube(root,pts,.065,edgeMat);
 }
 // Park entry and a pedestrian crossing at the office approach.
 for(let i=0;i<7;i++)box(root,-1.1+i*.47,terrainHeightAt(0,6.8)+.07,6.8,.27,.015,2.45,paint);
 // Grid infrastructure: only the residential/industrial side, never the off-grid ridge.
 const wireMat=mat(0x394440,.65,.4),insulatorMat=mat(0x9cbdb5,.2,.15);
 const poles=[[-24,1],[-24,-10],[-6,-18],[13,-19],[29,-18]];
 for(const [x,z] of poles){
  const y=terrainHeightAt(x,z);cylinderBetween(root,new THREE.Vector3(x,y,z),new THREE.Vector3(x,y+7.4,z),.105,wood);
  box(root,x,y+6.9,z,2.3,.13,.18,wood);
  for(const dx of [-.87,0,.87]){
   cylinderBetween(root,new THREE.Vector3(x+dx,y+6.95,z),new THREE.Vector3(x+dx,y+7.23,z),.06,insulatorMat);
   const ring=new THREE.Mesh(g(new THREE.TorusGeometry(.1,.023,5,12)),insulatorMat);ring.rotation.x=Math.PI/2;ring.position.set(x+dx,y+7.15,z);root.add(ring);
  }
 }
 for(let i=0;i<poles.length-1;i++)for(const dx of [-.87,0,.87]){
  const a=poles[i],b=poles[i+1],ay=terrainHeightAt(...a as [number,number])+7.24,by=terrainHeightAt(...b as [number,number])+7.24;
  tube(root,[new THREE.Vector3(a[0]+dx,ay,a[1]),new THREE.Vector3((a[0]+b[0])/2+dx,(ay+by)/2-.5,(a[1]+b[1])/2),new THREE.Vector3(b[0]+dx,by,b[1])],.016,wireMat);
 }
 // Organic foliage replaces the old geometric crowns. Shared instanced leaves and branch meshes.
 const treeCoords=[[-22.5,-6.5,1.05],[-21,5.2,.85],[-16,-7.2,1.15],[-2.5,-5.8,1.1],[-1.2,.2,.9],[5.2,2.2,.95],[14.2,-16.8,1.2],[29.5,-14.8,1.1],[32.4,-7.2,1.15],[33.8,.5,1],[10.2,13.8,1.1],[11.4,21.2,1.25],[16.2,22.8,.95],[27.4,21.8,1.15],[31.8,17.5,1.05],[-8.5,16.2,1.1],[-18.8,15,1.2],[-26.5,6.2,1.25],[-25.5,-13,1.3],[22.5,-18.5,1.18]];
 const leafCanvas=document.createElement('canvas');leafCanvas.width=64;leafCanvas.height=128;
 const lc=leafCanvas.getContext('2d')!;lc.fillStyle='#ffffff';lc.beginPath();lc.ellipse(32,61,25,55,-.12,0,Math.PI*2);lc.fill();lc.strokeStyle='#c0d3ad';lc.lineWidth=2;lc.beginPath();lc.moveTo(31,113);lc.lineTo(33,8);lc.stroke();
 const leafTex=new THREE.CanvasTexture(leafCanvas);leafTex.colorSpace=THREE.SRGBColorSpace;extraTextures.push(leafTex);
 const leafMat=m(new THREE.MeshStandardMaterial({map:leafTex,transparent:false,alphaTest:.5,side:THREE.DoubleSide,color:0x638b3b,roughness:.9}));
 const leavesPer=window.innerWidth<=768?130:240;
 const leaves=new THREE.InstancedMesh(g(new THREE.PlaneGeometry(.28,.49,2,3)),leafMat,treeCoords.length*leavesPer);leaves.castShadow=false;
 const dummy=new THREE.Object3D();let leafIndex=0;
 const rand=(n:number)=>{const v=Math.sin(n*78.233+11.73)*43758.5453;return v-Math.floor(v);};
 treeCoords.forEach(([x,z,scale],ti)=>{
  const y=terrainHeightAt(x,z),h=3.3*scale;
  cylinderBetween(root,new THREE.Vector3(x,y,z),new THREE.Vector3(x+.12,y+h*.8,z),.115*scale,bark);
  for(let k=0;k<7;k++){
   const a=k*2.399+ti,b=new THREE.Vector3(x+Math.sin(a)*.9*scale,y+h*(.58+rand(ti*13+k)*.24),z+Math.cos(a)*.9*scale);
   cylinderBetween(root,new THREE.Vector3(x,y+h*.42,z),b,.045*scale,bark);
  }
  for(let j=0;j<leavesPer;j++){
   const n=ti*997+j,ang=rand(n+1)*Math.PI*2,r=Math.sqrt(rand(n+3))*1.38*scale;
   dummy.position.set(x+Math.cos(ang)*r,y+h*.64+(rand(n+7)-.35)*1.8*scale,z+Math.sin(ang)*r);
   dummy.rotation.set(rand(n+9)*Math.PI,rand(n+10)*Math.PI,rand(n+11)*Math.PI);
   dummy.scale.setScalar((.7+rand(n+12)*1.2)*scale);dummy.updateMatrix();leaves.setMatrixAt(leafIndex,dummy.matrix);
   leaves.setColorAt(leafIndex,new THREE.Color().setHSL(.23+rand(n+14)*.11,.3+rand(n+15)*.2,.3+rand(n+16)*.16));leafIndex++;
  }
 });root.add(leaves);
 // Ground cover, flowering garden margins and irregular textured stone.
 const grassMat=mat(0x789554,.95),flowerMat=mat(0xa384a7,.85),flowerWhite=mat(0xe6e3c5,.8);
 const blade=new THREE.Shape();blade.moveTo(-.023,0);blade.quadraticCurveTo(-.035,.3,.12,.65);blade.quadraticCurveTo(.035,.25,.023,0);const grassGeo=g(new THREE.ShapeGeometry(blade));grassMat.side=THREE.DoubleSide;const grassCount=1100;
 const grasses=new THREE.InstancedMesh(grassGeo,grassMat,grassCount);
 for(let i=0;i<grassCount;i++){
  const side=i%2===0,x=side?-22+rand(i*7)*20:10+rand(i*7)*23,z=side?13.4+rand(i*13)*3.8:19.8+rand(i*13)*5.5;
  dummy.position.set(x,terrainHeightAt(x,z)+.14,z);dummy.rotation.set((rand(i+6)-.5)*.5,rand(i+8)*Math.PI*2,(rand(i+11)-.5)*.5);dummy.scale.set(.5+rand(i+2),.35+rand(i+5)*.6,.5+rand(i+9));dummy.updateMatrix();grasses.setMatrixAt(i,dummy.matrix);
 }root.add(grasses);
 const petalGeo=g(new THREE.IcosahedronGeometry(.075,1));
 for(let k=0;k<2;k++){
  const flowers=new THREE.InstancedMesh(petalGeo,k?flowerWhite:flowerMat,180);
  for(let i=0;i<180;i++){const x=-20+rand(i*3+k*8)*15,z=13+rand(i*7+k)*2;dummy.position.set(x,terrainHeightAt(x,z)+.38+rand(i)*.17,z);dummy.scale.setScalar(.7+rand(i+4)*.6);dummy.updateMatrix();flowers.setMatrixAt(i,dummy.matrix);}root.add(flowers);
 }
 const rockGeo=g(new THREE.IcosahedronGeometry(1,4)),rp=rockGeo.getAttribute('position');
 for(let i=0;i<rp.count;i++){const v=new THREE.Vector3().fromBufferAttribute(rp,i);const n=1+.12*Math.sin(v.x*6+v.y*9)+.07*Math.cos(v.z*13);rp.setXYZ(i,v.x*n,v.y*n*.6,v.z*n);}rockGeo.computeVertexNormals();
 const rockMat=mat(0x99978a,.97);
 for(let i=0;i<18;i++){const x=12+rand(i+44)*19,z=20+rand(i+61)*6,mesh=new THREE.Mesh(rockGeo,rockMat);mesh.position.set(x,terrainHeightAt(x,z)+.13,z);mesh.scale.setScalar(.25+rand(i+77)*.9);mesh.rotation.y=rand(i+83)*6;mesh.castShadow=true;mesh.receiveShadow=true;root.add(mesh);}
 // A practical off-grid work / camping site with recognisable appliances and cables.
 const camp=new THREE.Group();camp.position.set(18,terrainHeightAt(18,19.2)+.12,19.2);root.add(camp);
 box(camp,0,1,0,2.6,.12,1.1,wood);
 for(const x of [-1,1])for(const z of [-.37,.37])box(camp,x,.5,z,.075,1,.075,trim);
 const portableModel=hardware.portable();portableModel.position.set(-.5,1.06,0);camp.add(portableModel);
 const lid=box(camp,.65,1.49,-.1,.8,.52,.035,trim);lid.rotation.x=-.16;
 box(camp,.65,1.08,.12,.8,.03,.5,trim);
 box(camp,.65,1.49,-.075,.68,.4,.008,m(new THREE.MeshStandardMaterial({color:0xadc9d1,emissive:0x7da8a5,emissiveIntensity:.24})));
 const lantern=new THREE.Mesh(g(new THREE.CylinderGeometry(.11,.11,.32,24)),glow);lantern.name='CampLantern';lantern.position.set(1.08,1.26,.1);camp.add(lantern);
 const campLight=new THREE.PointLight(0xffc17b,0,5.5,2);campLight.name='CampLantern-Practical';campLight.position.set(1.08,1.32,.1);camp.add(campLight);
 const lanternCap=new THREE.Mesh(g(new THREE.CylinderGeometry(.13,.13,.035,24)),black);lanternCap.position.set(1.08,1.44,.1);camp.add(lanternCap);
 const lanternHandle=new THREE.Mesh(g(new THREE.TorusGeometry(.105,.011,8,24,Math.PI)),trim);lanternHandle.position.set(1.08,1.46,.1);camp.add(lanternHandle);
 for(let k=0;k<2;k++){
  const panel=box(camp,-2.05-k*.85,.6,1,.8,.045,1.3,m(new THREE.MeshStandardMaterial({map:textures.solarPanel,roughness:.28,metalness:.25})));panel.rotation.x=.58;
 }
 tube(camp,[new THREE.Vector3(-2.1,.24,1.45),new THREE.Vector3(-1.5,.1,1.6),new THREE.Vector3(-.035,.2,.6),new THREE.Vector3(-.035,1.34,0)],.024,black);
 tube(camp,[new THREE.Vector3(-.4,1.28,.313),new THREE.Vector3(.05,1.14,.4),new THREE.Vector3(.6,1.13,.3)],.018,black);
 const tent=new THREE.Group();tent.position.set(4,0,1.5);camp.add(tent);
 const tentMat=mat(0xb4a078,.9),tentGeo=g(new THREE.ConeGeometry(1.5,1.9,4,1,true));const fly=new THREE.Mesh(tentGeo,tentMat);fly.position.y=.95;fly.rotation.y=Math.PI/4;fly.scale.z=1.45;tent.add(fly);
 cylinderBetween(tent,new THREE.Vector3(-1.2,0,.8),new THREE.Vector3(0,1.9,0),.025,trim);cylinderBetween(tent,new THREE.Vector3(1.2,0,.8),new THREE.Vector3(0,1.9,0),.025,trim);
 // Three permanently parked cars. Fixed pad coordinates only: no paths, lanes, speeds or wheel updates.
 const wheelsGeo=g(new THREE.CylinderGeometry(.22,.22,.14,16)),wheelMat=mat(0x242827,.95);
 const wheelHub=mat(0xb6bfc1,.25,.8),windshield=mat(0x29444e,.16,.35);
 const headlamp=mat(0xdbe5df,.24,.15);
 const parking=[{x:-17.2,z:8.0,y:.24,yaw:Math.PI/2,color:0xdce4df},{x:26.5,z:-.4,y:.28,yaw:0,color:0x244b40},{x:28.5,z:-.4,y:.28,yaw:0,color:0x8796a3}];
 parking.forEach(({x,z,y,yaw,color},i)=>{
  const car=new THREE.Group();car.name='StaticParkedVehicle'+i;
  box(car,0,.47,0,1.04,.44,2.35,mat(color,.27,.55),true);box(car,0,.88,-.12,.9,.53,1.35,windshield,true);
  box(car,0,1.12,-.12,.91,.06,1.1,mat(color,.27,.55),true);
  for(const z of [-.7,.52])box(car,0,.88,z,.92,.035,.045,trim);
  for(const x of [-.52,.52])box(car,x,.86,-.12,.035,.53,.08,trim);
  for(const x of [-.51,.51])for(const z of [-.76,.76]){
   const wheel=new THREE.Mesh(wheelsGeo,wheelMat);wheel.rotation.z=Math.PI/2;wheel.position.set(x,.25,z);car.add(wheel);
   const hub=new THREE.Mesh(g(new THREE.CylinderGeometry(.11,.11,.151,12)),wheelHub);hub.rotation.z=Math.PI/2;hub.position.copy(wheel.position);car.add(hub);
  }
  for(const x of [-.34,.34]){box(car,x,.56,1.18,.2,.1,.03,headlamp);box(car,x,.56,-1.18,.2,.1,.03,mat(0x984338,.35));}
  car.position.set(x,y,z);car.rotation.y=yaw;root.add(car);
 });
 return {root,setNightFactor(factor:number){const n=THREE.MathUtils.clamp(factor,0,1);glow.emissiveIntensity=n*1.4;campLight.intensity=n*16;},dispose(){hardware.dispose();geometries.forEach(x=>x.dispose());materials.forEach(x=>x.dispose());extraTextures.forEach(x=>x.dispose());root.removeFromParent();}};
}
