import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
// Reference-based exterior visualization. No internal geometry or certification claims.
const folder='/assets/experience/ess16-floor/';
export async function mount(host){
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(33,1,.01,20);camera.position.set(0,.08,1.7);camera.lookAt(0,0,0);
 const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.setClearColor(0x000000,0);renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.25;host.append(renderer.domElement);
 const canvas=renderer.domElement;canvas.tabIndex=0;canvas.setAttribute('role','img');canvas.setAttribute('aria-label','360° · ANTHRISE 16kWh');canvas.style.touchAction='none';
 scene.add(new THREE.HemisphereLight(0xffffff,0xaba899,3));const key=new THREE.DirectionalLight(0xffffff,3.5);key.position.set(2,4,5);scene.add(key);const rim=new THREE.DirectionalLight(0xdce9ef,2.5);rim.position.set(-3,2,-4);scene.add(rim);
 const pivot=new THREE.Group(),model=new THREE.Group();scene.add(pivot);pivot.add(model);let observer;let yaw=-.52,pitch=.08,scale=1,auto=!matchMedia('(prefers-reduced-motion: reduce)').matches,visible=true,disposed=false,raf,last=0,drag,ready=false;
 const white=new THREE.MeshStandardMaterial({color:0xf1f2f3,roughness:.32,metalness:.13}),silver=new THREE.MeshStandardMaterial({color:0xbfc5c8,metalness:.88,roughness:.2}),rubber=new THREE.MeshStandardMaterial({color:0x171a1b,roughness:.65}),black=new THREE.MeshStandardMaterial({color:0x222728,roughness:.45});
 function mesh(g,m,x=0,y=0,z=0){const o=new THREE.Mesh(g,m);o.position.set(x,y,z);model.add(o);return o}
 mesh(new RoundedBoxGeometry(.5,.7,.27,6,.022),white);
 const loader=new THREE.TextureLoader();async function texture(name){const t=await loader.loadAsync(folder+'material-'+name+'.webp');t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=renderer.capabilities.getMaxAnisotropy();return t}
 function face(w,h,r){const s=new THREE.Shape();s.moveTo(-w/2+r,-h/2);s.lineTo(w/2-r,-h/2);s.quadraticCurveTo(w/2,-h/2,w/2,-h/2+r);s.lineTo(w/2,h/2-r);s.quadraticCurveTo(w/2,h/2,w/2-r,h/2);s.lineTo(-w/2+r,h/2);s.quadraticCurveTo(-w/2,h/2,-w/2,h/2-r);s.lineTo(-w/2,-h/2+r);s.quadraticCurveTo(-w/2,-h/2,-w/2+r,-h/2);const g=new THREE.ShapeGeometry(s,24),p=g.attributes.position,u=g.attributes.uv;for(let i=0;i<p.count;i++)u.setXY(i,p.getX(i)/w+.5,p.getY(i)/h+.5);return g}
 try{const textures=await Promise.all(['front','back','top'].map(texture));if(disposed){textures.forEach(t=>t.dispose());return}
  const material=t=>new THREE.MeshStandardMaterial({map:t,roughness:.42,metalness:.04});mesh(face(.493,.693,.022),material(textures[0]),0,0,.1356);const back=mesh(face(.493,.693,.022),material(textures[1]),0,0,-.1356);back.rotation.y=Math.PI;
  const top=mesh(face(.475,.245,.012),material(textures[2]),0,.3505,0);top.rotation.x=-Math.PI/2;top.rotation.z=Math.PI;
  ready=true;
 }catch(e){dispose();throw e}
 // The reference has a recessed grip and diamond ventilation on both sides.
 for(const side of [-1,1]){
  const grip=mesh(new RoundedBoxGeometry(.006,.052,.108,3,.008),silver,side*.251,.205,0);mesh(new RoundedBoxGeometry(.007,.034,.086,3,.006),black,side*.254,.205,0);
  mesh(new RoundedBoxGeometry(.004,.26,.16,3,.008),silver,side*.251,-.105,0);mesh(new THREE.BoxGeometry(.004,.245,.145),black,side*.254,-.105,0);
  const grille=new THREE.Group();grille.position.set(side*.257,-.105,0);model.add(grille);
  const lineMat=new THREE.MeshStandardMaterial({color:0xe1e5e6,metalness:.45,roughness:.4});
  // Perforations are bounded to the vent panel, not a tiled photograph.
  const lattice=new THREE.InstancedMesh(new THREE.BoxGeometry(.001,.009,.0012),lineMat,440),dummy=new THREE.Object3D();let instance=0;for(let row=0;row<20;row++)for(let col=0;col<11;col++)for(const angle of [-.65,.65]){dummy.position.set(0,(row-9.5)*.0115,(col-5)*.012);dummy.rotation.set(angle,0,0);dummy.updateMatrix();lattice.setMatrixAt(instance++,dummy.matrix)}grille.add(lattice);
  for(const y of [.27,.12,-.27])mesh(new THREE.SphereGeometry(.0028,8,6),silver,side*.253,y,.083);
 }
 // Chrome U-handles run front-to-back above the top panel.
 for(const x of [-.204,.204]){const points=[new THREE.Vector3(x,.35,-.086),new THREE.Vector3(x,.394,-.086),new THREE.Vector3(x,.404,-.067),new THREE.Vector3(x,.404,.067),new THREE.Vector3(x,.394,.086),new THREE.Vector3(x,.35,.086)];mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points),48,.0055,10,false),silver);for(const z of [-.086,.086])mesh(new THREE.CylinderGeometry(.012,.012,.011,20),silver,x,.354,z)}
 for(const [x,color]of [[-.115,0x17191a],[-.047,0x17191a],[.047,0xc51b20],[.112,0xc51b20]]){const m=new THREE.MeshStandardMaterial({color,roughness:.3});mesh(new THREE.CylinderGeometry(.016,.018,.013,20),m,x,.361,.065);mesh(new THREE.CylinderGeometry(.011,.011,.014,20),m,x,.374,.065)}
 // Four casters, including rear wheels, are actual geometry in the same scale.
 for(const x of [-.185,.185])for(const z of [-.085,.085]){mesh(new THREE.BoxGeometry(.049,.008,.047),silver,x,-.354,z);mesh(new THREE.BoxGeometry(.007,.039,.037),silver,x-.018,-.376,z);mesh(new THREE.BoxGeometry(.007,.039,.037),silver,x+.018,-.376,z);const wheel=mesh(new THREE.CylinderGeometry(.027,.027,.026,32),rubber,x,-.395,z);wheel.rotation.z=Math.PI/2;const axle=mesh(new THREE.CylinderGeometry(.009,.009,.034,20),silver,x,-.395,z);axle.rotation.z=Math.PI/2}
 function update(){pivot.rotation.set(pitch,yaw,0,'YXZ');pivot.scale.setScalar(scale);host.dataset.yaw=String(yaw);host.dataset.pitch=String(pitch);renderer.render(scene,camera)}
 function resize(){if(disposed)return;const r=host.getBoundingClientRect();if(!r.width||!r.height)return;renderer.setSize(r.width,r.height);camera.aspect=r.width/r.height;camera.position.z=camera.aspect<.8?2.1:1.7;camera.updateProjectionMatrix();update()}
 observer=new ResizeObserver(resize);observer.observe(host);resize();
 function tick(time){if(disposed||!visible)return;const delta=Math.min((time-last)/1000,.05);last=time;if(auto&&!drag){yaw+=delta*.16;update()}raf=requestAnimationFrame(tick)}
 function start(){if(!raf&&visible&&!disposed){last=performance.now();raf=requestAnimationFrame(tick)}}
 canvas.addEventListener('pointerdown',e=>{e.stopPropagation();auto=false;drag={id:e.pointerId,x:e.clientX,y:e.clientY};canvas.setPointerCapture(e.pointerId);canvas.classList.add('is-dragging')});canvas.addEventListener('pointermove',e=>{if(!drag)return;e.stopPropagation();yaw+=(e.clientX-drag.x)*.009;pitch=Math.max(-1.25,Math.min(1.25,pitch+(e.clientY-drag.y)*.006));drag.x=e.clientX;drag.y=e.clientY;update()});function release(e){if(!drag)return;e.stopPropagation();drag=null;canvas.classList.remove('is-dragging')}canvas.addEventListener('pointerup',release);canvas.addEventListener('pointercancel',release);
 canvas.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key))return;e.preventDefault();e.stopPropagation();auto=false;if(e.key==='ArrowLeft')yaw-=.22;if(e.key==='ArrowRight')yaw+=.22;if(e.key==='ArrowUp')pitch=Math.max(-1.25,pitch-.16);if(e.key==='ArrowDown')pitch=Math.min(1.25,pitch+.16);update()});
 function dispose(){if(disposed)return;disposed=true;cancelAnimationFrame(raf);observer?.disconnect();model.traverse(o=>{o.geometry?.dispose();if(o.material){o.material.map?.dispose();o.material.dispose()}});renderer.dispose();canvas.remove()}
 start();return {dispose,setVisible(value){visible=value;if(value){raf=0;resize();start()}else{cancelAnimationFrame(raf);raf=0}},zoom(value){scale=value;update()},reset(){yaw=-.52;pitch=.08;scale=1;update()},toggle(){auto=!auto;return auto},getState:()=>({yaw,pitch,scale,auto,ready})};
}
window.ANTHRISE_ESS16_VIEWER={mount};
