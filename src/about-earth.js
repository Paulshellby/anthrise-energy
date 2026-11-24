import * as THREE from 'three';
const host=document.querySelector('.about-earth');
if(host){
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');let renderer,raf=0,visible=true,last=0;
 try{
  renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.75));renderer.outputColorSpace=THREE.SRGBColorSpace;host.append(renderer.domElement);
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(32,1,.1,30);camera.position.z=4.1;
  const material=new THREE.MeshStandardMaterial({roughness:1,metalness:0});
  material.onBeforeCompile=shader=>{shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>','#include <map_fragment>\nfloat ocean = smoothstep(0.01, 0.08, diffuseColor.b - diffuseColor.r); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.025, 0.20, 0.46), ocean * 0.55);')};
  const globe=new THREE.Mesh(new THREE.SphereGeometry(1,72,48),material);globe.rotation.y=-1.8;globe.rotation.z=.1;scene.add(globe);
  const clouds=new THREE.Mesh(new THREE.SphereGeometry(1.008,64,40),new THREE.MeshStandardMaterial({transparent:true,opacity:.76,depthWrite:false}));clouds.rotation.copy(globe.rotation);scene.add(clouds);
  new THREE.TextureLoader().load('/assets/experience/about-earth/clouds.png',texture=>{texture.colorSpace=THREE.SRGBColorSpace;clouds.material.map=texture;clouds.material.needsUpdate=true;draw()});
  scene.add(new THREE.AmbientLight(0xffffff,2));const sun=new THREE.DirectionalLight(0xffffff,2.1);sun.position.set(-3,3,5);scene.add(sun);
  function draw(){renderer.render(scene,camera)}
  function stop(){cancelAnimationFrame(raf);raf=0;last=0}
  function frame(time){raf=0;if(document.hidden||!visible||reduced.matches)return;const dt=last?Math.min((time-last)/1000,.08):0;last=time;globe.rotation.y+=dt*.055;clouds.rotation.y+=dt*.06;draw();raf=requestAnimationFrame(frame)}
  function start(){if(!raf&&visible&&!document.hidden&&!reduced.matches)raf=requestAnimationFrame(frame);else draw()}
  new ResizeObserver(()=>{const size=host.clientWidth;renderer.setSize(size,size,false);draw()}).observe(host);
  new THREE.TextureLoader().load('/assets/experience/about-earth/earth.jpg',texture=>{texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=renderer.capabilities.getMaxAnisotropy();globe.material.map=texture;globe.material.needsUpdate=true;host.classList.add('is-ready');draw();start()},undefined,()=>{stop();renderer.domElement.hidden=true});
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)start();else stop()}).observe(host);
  document.addEventListener('visibilitychange',()=>document.hidden?stop():start());reduced.addEventListener('change',()=>{stop();start()});
  renderer.domElement.addEventListener('webglcontextlost',event=>{event.preventDefault();stop();host.classList.remove('is-ready');renderer.domElement.hidden=true});
  window.ABOUT_EARTH={getState:()=>({ready:host.classList.contains('is-ready'),rotation:globe.rotation.y,animated:!!raf,reduced:reduced.matches})};
 }catch{if(renderer)renderer.dispose();}
}
