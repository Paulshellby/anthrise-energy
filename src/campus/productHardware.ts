import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

// Illustrative mesh enclosures, NOT manufacturer CAD or verified rear connector layouts.
// Original fittings / side cooling remain intact to preserve cable topology. No new ports are inferred.
// Product photos are never used as floating billboards; only the official mark is a decal.
export function createHardwareFactory(onAssetReady?: () => void){
 const geometries:THREE.BufferGeometry[]=[],materials:THREE.Material[]=[];
 const geo=<T extends THREE.BufferGeometry>(v:T)=>{geometries.push(v);return v;};
 const material=(color:number,roughness=.45,metalness=.15)=>{const v=new THREE.MeshStandardMaterial({color,roughness,metalness});materials.push(v);return v;};
 const white=material(0xf1f1ef,.32,.35),side=material(0x3c454a,.4,.6),dark=material(0x141f22,.65,.1),metal=material(0xb7c1c4,.23,.88),green=material(0x008a70,.35,.32),orange=material(0xe8a02f,.4,.3),red=material(0xa52e27,.65),rubber=material(0x242b2d,.94,0);
 const screen=new THREE.MeshPhysicalMaterial({color:0x08151d,roughness:.13,metalness:.25,clearcoat:1});materials.push(screen);
 const lcd=material(0x1d605d,.24,.15);
 const logo=new THREE.TextureLoader().load('/assets/brand/anthrise-official.png',onAssetReady);logo.colorSpace=THREE.SRGBColorSpace;
 const logoMat=new THREE.MeshStandardMaterial({map:logo,roughness:.4});materials.push(logoMat);
 const unit=geo(new THREE.BoxGeometry(1,1,1));
 function box(parent:THREE.Object3D,x:number,y:number,z:number,w:number,h:number,d:number,mat:THREE.Material,round=0){
  const mesh=new THREE.Mesh(round?geo(new RoundedBoxGeometry(w,h,d,3,Math.min(round,w*.2,h*.2,d*.2))):unit,mat);
  if(!round)mesh.scale.set(w,h,d);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;
 }
 function cylinder(parent:THREE.Object3D,x:number,y:number,z:number,r:number,length:number,mat:THREE.Material,axis:'x'|'y'|'z'='y'){
  const mesh=new THREE.Mesh(geo(new THREE.CylinderGeometry(r,r,length,20)),mat);mesh.position.set(x,y,z);
  if(axis==='x')mesh.rotation.z=Math.PI/2;if(axis==='z')mesh.rotation.x=Math.PI/2;mesh.castShadow=true;parent.add(mesh);return mesh;
 }
 function logoOn(parent:THREE.Object3D,x:number,y:number,z:number,w:number){const face=new THREE.Mesh(geo(new THREE.PlaneGeometry(w,w/5.28)),logoMat);face.position.set(x,y,z);parent.add(face);}
 function wave(parent:THREE.Object3D,points:number[][],radius:number,mat:THREE.Material){const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p as [number,number,number])));const mesh=new THREE.Mesh(geo(new THREE.TubeGeometry(curve,24,radius,5,false)),mat);parent.add(mesh);}
 function screws(parent:THREE.Object3D,w:number,h:number,z:number){for(const x of [-w/2+.035,w/2-.035])for(const y of [-h/2+.035,h/2-.035])cylinder(parent,x,y,z,.009,.007,metal,'z');}
 function calibrateCatalogueEnvelope(p:THREE.Group,dimensions:{width:number,depth:number,height:number},floorMounted=false){
  // A dimensional envelope is not a rear-interface drawing or manufacturer CAD.
  p.children.filter(child=>child.name.startsWith('Unverified')).forEach(child=>child.removeFromParent());
  const shape=new THREE.Group();shape.name='CatalogueCalibratedShape';
  [...p.children].forEach(child=>shape.add(child));p.add(shape);shape.updateMatrixWorld(true);
  const bounds=new THREE.Box3().setFromObject(shape),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());
  shape.scale.set(dimensions.width/1000/size.x,dimensions.height/1000/size.y,dimensions.depth/1000/size.z);
  shape.position.set(-center.x*shape.scale.x,floorMounted?-bounds.min.y*shape.scale.y-.002:-center.y*shape.scale.y,-center.z*shape.scale.z);
  p.userData.modelStatus='catalogue-size-calibrated illustrative mesh; rear interfaces and installation template unverified';
  p.userData.isManufacturerCad=false;p.userData.dimensionCalibrationSource='/assets/product-catalog.js';
  p.userData.catalogueDimensionsMm=dimensions;p.userData.scaleCalibrated=true;
  return p;
 }
 function battery(toCatalogueScale=false){
  const p=new THREE.Group();p.name='MeshProduct-ess16';
  p.userData.modelStatus='illustrative-enlarged; rear ports and fixing details unverified';
  p.userData.catalogueDimensionsMm={width:480,depth:235,height:874};
  p.userData.illustrativeBodyDimensionsM={width:.9,depth:.44,height:1.65};
  box(p,0,.92,0,.9,1.65,.44,side,.07);box(p,0,.92,.223,.865,1.59,.028,white,.012);
  box(p,0,1.35,.245,.31,.17,.026,metal,.012);box(p,0,1.35,.263,.292,.15,.018,screen,.008);box(p,0,1.37,.274,.16,.065,.003,lcd,.001);
  for(let i=0;i<5;i++)box(p,-.105+i*.052,1.302,.276,.018,.006,.003,white);
  logoOn(p,.12,.34,.24,.37);
  wave(p,[[-.41,.49,.24],[-.1,.43,.24],[.19,.55,.24],[.4,.6,.24]],.009,green);
  wave(p,[[.03,.52,.241],[.21,.64,.241],[.4,.67,.241]],.007,orange);
  for(const x of [-.456,.456]){
   box(p,x,1.34,-.02,.009,.16,.17,dark,.003);
   for(let j=0;j<17;j++)box(p,x,.4+j*.017,0,.009,.006,.21,dark);
  }
  for(const x of [-.32,.32])for(const z of [-.14,.14]){
   box(p,x,.13,z,.1,.1,.1,metal,.01);cylinder(p,x,.065,z,.067,.065,rubber,'x').name='BatteryCasterWheel';
  }
  for(const [x,mat] of [[-.465,red],[-.465,dark]] as const)cylinder(p,x,1.5,mat===red?-.085:.085,.025,.03,mat,'x').name='UnverifiedBatteryPowerTerminal';
  box(p,-.465,1.39,0,.02,.035,.05,dark,.002).name='UnverifiedBatteryDataPort';
  return toCatalogueScale?calibrateCatalogueEnvelope(p,{width:480,depth:235,height:874},true):p;
 }
 function inverter(large=false,toCatalogueScale=false){
  const p=new THREE.Group();p.name=large?'MeshProduct-hybrid50':'MeshProduct-hybrid6';const w=large?1.32:.9,h=large?1.42:1.18,d=large?.52:.54;
  p.userData.modelStatus='illustrative-enlarged; original port topology unverified';
  if(!large)p.userData.catalogueDimensionsMm={width:330,depth:228,height:433};
  box(p,0,0,0,w,h,d,side,.055);box(p,0,0,d/2+.006,w*.95,h*.965,.03,white,.012);
  box(p,.08,-h*.3,d/2+.026,w*.77,h*.33,.014,side,.006);
  wave(p,[[w*.46,-h*.06,d/2+.04],[w*.18,-h*.22,d/2+.04],[-w*.16,-h*.43,d/2+.04]],.008,green);
  box(p,0,h*.05,d/2+.034,w*.31,h*.2,.03,screen,.012);box(p,0,h*.075,d/2+.051,w*.18,h*.065,.003,lcd);
  logoOn(p,-w*.07,h*.32,d/2+.025,w*.43);
  for(const x of [-w/2-.004,w/2+.004])for(let i=0;i<15;i++)box(p,x,-h*.37+i*h*.051,-.03,.009,.012,d*.7,dark);
  for(let i=0;i<6;i++){
   const x=-w*.34+i*w*.136;cylinder(p,x,-h/2-.045,.05,.025,.1,i===0?red:dark).name='UnverifiedInverterPort';
   cylinder(p,x,-h/2-.1,.05,.019,.03,metal).name='UnverifiedInverterCableGland';
  }
  screws(p,w*.95,h*.96,d/2+.028);return !large&&toCatalogueScale?calibrateCatalogueEnvelope(p,{width:330,depth:228,height:433}):p;
 }
 function cabinet(){
  const p=new THREE.Group();p.name='MeshProduct-horizon';box(p,0,1.36,0,1.22,2.35,1.05,white,.035);
  box(p,0,2.46,0,1.26,.1,1.09,green,.014);box(p,-.1,1.37,.537,.92,2.1,.025,white,.01);
  box(p,.32,1.42,.56,.025,.22,.04,side,.003);box(p,.4,1.6,.56,.06,.08,.02,orange,.005);
  logoOn(p,-.18,2.12,.558,.55);
  for(let i=0;i<12;i++)box(p,-.2,.39+i*.027,.559,.57,.012,.008,side);
  box(p,.73,1.64,0,.32,.85,.78,side,.025);
  for(let i=0;i<10;i++)box(p,.9,1.28+i*.07,0,.01,.02,.66,dark);
  for(const x of [-.43,.43])for(const z of [-.35,.35])box(p,x,.12,z,.14,.22,.14,side,.015);
  for(const [x,mat] of [[-.08,red],[.08,dark]] as const)cylinder(p,x,.45,.55,.025,.07,mat,'z');
  return p;
 }
 function portable(){
  const p=new THREE.Group();p.name='MeshProduct-volt1000';
  box(p,0,.34,0,.9,.63,.54,side,.05);box(p,0,.34,.277,.84,.55,.025,white,.012);
  box(p,0,.67,0,.56,.065,.07,dark,.018);for(const x of [-.25,.25])box(p,x,.61,0,.06,.12,.07,dark,.015);
  box(p,-.06,.45,.297,.31,.13,.012,screen,.008);box(p,-.06,.455,.307,.18,.055,.003,lcd);
  cylinder(p,.27,.46,.305,.047,.02,side,'z');
  for(const x of [-.26,-.08,.1]){box(p,x,.22,.304,.13,.14,.008,side,.005);box(p,x-.025,.235,.313,.012,.03,.003,dark);box(p,x+.025,.235,.313,.012,.03,.003,dark);box(p,x,.198,.313,.02,.012,.003,dark);}
  for(const y of [.26,.32])for(const x of [.25,.32])box(p,x,y,.305,.04,.017,.006,dark);
  for(const x of [-.456,.456])for(let i=0;i<11;i++)box(p,x,.14+i*.035,0,.008,.012,.33,dark);
  cylinder(p,.465,.28,0,.026,.035,orange,'x');
  for(const x of [-.3,.3])for(const z of [-.17,.17])box(p,x,.02,z,.1,.04,.08,rubber,.006);
  wave(p,[[-.4,.075,.294],[0,.062,.294],[.4,.075,.294]],.008,green);return p;
 }
 function seed(){
  const p=new THREE.Group();p.name='MeshProduct-seed24';box(p,0,.36,0,1.02,.64,.63,dark,.026);box(p,0,.7,0,1.05,.07,.66,side,.015);
  box(p,0,.02,0,1.04,.04,.65,dark,.008);
  for(const [x,mat] of [[-.35,red],[.35,dark]] as const){cylinder(p,x,.77,-.13,.045,.08,mat);cylinder(p,x,.82,-.13,.025,.03,metal);}
  box(p,0,.36,.321,.84,.4,.005,white,.001);logoOn(p,0,.45,.328,.62);box(p,0,.25,.329,.83,.13,.004,green);
  for(const x of [-.54,.54]){box(p,x,.54,0,.04,.2,.1,side,.005);cylinder(p,x,.44,0,.035,.28,rubber,'z');}return p;
 }
 return {battery,inverter,cabinet,portable,seed,box,material,dispose(){geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());logo.dispose();}};
}
