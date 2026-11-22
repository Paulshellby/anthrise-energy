import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
// Exterior references only. Face photos preserve supplied labels; no inferred electrical specifications.
export async function createBoxExterior(model,renderer,id,isDisposed){
 const pre=id==='preassembled16',w=.44,d=pre?.741:.74,h=pre?.272:.51,folder='/assets/experience/'+(pre?'preassembled16-model-v3':'home32-model-v3')+'/';
 const names=pre?['front','back','right','left','top','bottom']:['front','right'];
 async function load(name){const img=await new Promise((resolve,reject)=>{const image=new Image();image.crossOrigin='anonymous';image.fetchPriority='high';image.onload=()=>resolve(image);image.onerror=()=>reject(new Error('Exterior reference unavailable: '+name));image.src=folder+'material-'+name+'.webp'});const texture=new THREE.Texture(img);texture.needsUpdate=true;texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());return texture}
 const maps=await Promise.all(names.map(load));if(isDisposed()){maps.forEach(t=>t.dispose());return false}const textures=Object.fromEntries(names.map((n,i)=>[n,maps[i]]));
 if(!pre){textures.left=textures.right.clone();textures.left.repeat.x=-1;textures.left.offset.x=1;textures.left.needsUpdate=true;}
 const body=new THREE.MeshStandardMaterial({color:0x17191c,roughness:.6,metalness:.22}),silver=new THREE.MeshStandardMaterial({color:0xbac1c5,metalness:.8,roughness:.25}),rubber=new THREE.MeshStandardMaterial({color:0x111314,roughness:.85});
 function mesh(g,m,x=0,y=0,z=0){const object=new THREE.Mesh(g,m);object.position.set(x,y,z);model.add(object);return object}
 mesh(new RoundedBoxGeometry(w,h,d,3,.006),body);
 function material(name){return new THREE.MeshStandardMaterial({map:textures[name],roughness:.7,metalness:.08})}
 function panel(width,height,map,x,y,z,ry=0,rx=0){const p=mesh(new THREE.PlaneGeometry(width,height),material(map),x,y,z);p.rotation.set(rx,ry,0);return p}
 panel(w-.006,h-.006,'front',0,0,d/2+.0006);
 if(pre){panel(w-.006,h-.006,'back',0,0,-d/2-.0006,Math.PI);panel(d-.006,h-.006,'right',w/2+.0006,0,0,Math.PI/2);panel(d-.006,h-.006,'left',-w/2-.0006,0,0,-Math.PI/2);panel(w-.006,d-.006,'top',0,h/2+.0006,0,0,-Math.PI/2);panel(w-.006,d-.006,'bottom',0,-h/2-.0006,0,0,Math.PI/2);
  for(const x of [-.135,.095])for(const y of [.092,.039]){const post=mesh(new THREE.CylinderGeometry(.011,.011,.016,24),silver,x,y,d/2+.009);post.rotation.x=Math.PI/2}
  for(const x of [-.17,.17])for(const z of [-.30,.30])mesh(new THREE.CylinderGeometry(.015,.019,.014,20),rubber,x,-h/2-.007,z);
 }else{
  panel(d-.008,h-.008,'right',w/2+.0006,0,0,Math.PI/2);panel(d-.008,h-.008,'left',-w/2-.0006,0,0,-Math.PI/2);
  const red=new THREE.MeshStandardMaterial({color:0xbb252b,roughness:.5}),black=new THREE.MeshStandardMaterial({color:0x101315,roughness:.55});
  for(const [x,m] of [[-.148,black],[.143,red]])for(const y of [-.003,-.057])mesh(new RoundedBoxGeometry(.042,.045,.025,3,.004),m,x,y,d/2+.012);
  // Four lifting eyes and compact casters are shown in the supplied exterior references.
  for(const x of [-.166,.166])for(const z of [-.286,.286]){mesh(new THREE.CylinderGeometry(.007,.009,.012,18),silver,x,h/2+.005,z);mesh(new THREE.TorusGeometry(.012,.0032,10,24),silver,x,h/2+.023,z);mesh(new THREE.BoxGeometry(.04,.012,.04),silver,x,-h/2-.006,z);const wheel=mesh(new THREE.CylinderGeometry(.024,.024,.022,24),rubber,x,-h/2-.033,z);wheel.rotation.z=Math.PI/2;}
  for(const x of [-.19,.19])for(const y of [-.22,.22])mesh(new THREE.SphereGeometry(.0025,8,6),silver,x,y,-d/2-.001);
 }
 return true;
}
