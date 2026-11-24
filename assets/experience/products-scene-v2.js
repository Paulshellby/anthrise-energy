/* Full-screen architectural scene with aligned, interactive application regions. */
(()=>{'use strict';
const host=document.querySelector('#energy-city'),plane=host.querySelector('.scene-image-plane'),markerHost=document.querySelector('#scene-markers');
const definitions={
 storage:{label:'Energy storage',color:'#4f73d6',x:.19,y:.55,path:'M62 285 208 232 338 278 340 386 224 405 63 384Z'},
 inverter:{label:'Hybrid inverters',color:'#9262ce',x:.35,y:.38,path:'M248 181 429 155 617 179 615 294 459 331 248 292Z'},
 solar:{label:'Solar panels & kits',color:'#dca434',x:.53,y:.55,path:'M495 289 632 244 830 263 826 291 690 327 494 302Z'},
 lighting:{label:'Solar Lighting',color:'#399672',x:.23,y:.82,path:'M298 417 338 401 344 410 311 426 310 527 300 527Z M453 306 478 297 484 304 471 314 471 434 458 436Z M186 465 197 465 198 501 187 503Z'},
 commercial:{label:'C&amp;I',color:'#007d77',x:.74,y:.58,path:'M732 207 889 183 1082 209 1082 313 984 356 732 316Z'}
};
const grid=document.createElement('span');
grid.className='scene-marker scene-marker--grid';
grid.style.setProperty('--zone-color','#007d77');
grid.innerHTML='<span class="marker-dot" aria-hidden="true"></span><span>Grid</span>';
markerHost.append(grid);

const imageWidth=1254,imageHeight=534,imageRatio=1.55;
const ns='http://www.w3.org/2000/svg',svg=document.createElementNS(ns,'svg');svg.setAttribute('viewBox','0 0 '+imageWidth+' '+imageHeight);svg.setAttribute('focusable','false');svg.classList.add('application-regions');svg.setAttribute('aria-hidden','true');plane.append(svg);
let hovered=null,selected=null,layoutState={};
function setHighlight(zone){if(hovered===zone)return;hovered=zone;host.dataset.hover=zone||'';for(const n of document.querySelectorAll('[data-zone]'))n.classList.toggle('is-hovered',n.dataset.zone===zone);for(const p of svg.children)p.classList.toggle('active-region',p.dataset.zone===zone);layout();window.dispatchEvent(new CustomEvent('anthrise:scene-hover',{detail:{zone}}));}
function choose(zone){selected=zone;setHighlight(zone);for(const n of document.querySelectorAll('[data-zone]'))n.setAttribute('aria-pressed',String(n.dataset.zone===zone));window.dispatchEvent(new CustomEvent('anthrise:product-zone',{detail:{zone}}));}
function attach(node,zone){node.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch')setHighlight(zone)});node.addEventListener('pointerleave',()=>setHighlight(selected));node.addEventListener('focus',()=>setHighlight(zone));node.addEventListener('blur',()=>setHighlight(selected));node.addEventListener('click',()=>choose(zone));}
for(const [zone,def] of Object.entries(definitions)){
 const p=document.createElementNS(ns,'path');p.setAttribute('d',def.path);p.setAttribute('focusable','false');p.setAttribute('tabindex','-1');p.addEventListener('pointerdown',e=>{if(e.pointerType!=='touch')e.preventDefault()});p.dataset.zone=zone;p.style.setProperty('--region-color',def.color);svg.append(p);attach(p,zone);
 const button=document.createElement('button');button.type='button';button.className='scene-marker';button.dataset.zone=zone;button.style.setProperty('--zone-color',def.color);button.innerHTML='<span class="marker-dot" aria-hidden="true"></span><span'+(zone==='commercial'?' data-no-translate':'')+'>'+def.label+'</span>';button.setAttribute('aria-controls','product-popover');button.setAttribute('aria-pressed','false');markerHost.append(button);attach(button,zone);
}
for(const button of document.querySelectorAll('.product-scene-tabs [data-zone]'))attach(button,button.dataset.zone);
function layout(){
 const w=host.clientWidth,h=host.clientHeight,pw=Math.max(w,h*imageRatio),ph=pw/imageRatio;
 const active=hovered||selected,mobile=w<781;
 let left=(w-pw)/2;
 if(mobile&&active)left=Math.min(0,Math.max(w-pw,w*.5-definitions[active].x*pw));
 const top=(h-ph)/2;
 plane.style.width=pw+'px';plane.style.height=ph+'px';plane.style.left=left+'px';plane.style.top=top+'px';
 layoutState={width:w,height:h,planeWidth:pw,planeHeight:ph,left,top};
 function place(node,x,y){
  const center=left+x*pw;
  node.hidden=mobile&&(center<0||center>w);
  const inset=node.offsetWidth/2+12;
  node.style.left=Math.min(w-inset,Math.max(inset,center))+'px';
  node.style.top=(top+y*ph)+'px';
 }
 place(grid,.90,.40);
 for(const [zone,def] of Object.entries(definitions)){
  place(markerHost.querySelector('[data-zone="'+zone+'"]'),def.x,def.y);
 }
}
const observer=new ResizeObserver(layout);observer.observe(host);host.dataset.renderer='architectural-scene';layout();
window.PRODUCT_SCENE={select:choose,hover:setHighlight,clear:()=>{selected=null;setHighlight(null);for(const n of document.querySelectorAll('[data-zone]'))n.setAttribute('aria-pressed','false')},getState:()=>({selected,hovered,renderer:host.dataset.renderer,colors:Object.fromEntries(Object.entries(definitions).map(([k,v])=>[k,v.color])),zones:Object.keys(definitions),productSpheres:document.querySelectorAll('.product-orbits,.orbit-space').length,layout:layoutState}),project:zone=>{const n=markerHost.querySelector('[data-zone="'+zone+'"]'),r=n.getBoundingClientRect();return {x:r.x+r.width/2,y:r.y+r.height/2}}};
window.addEventListener('pagehide',()=>observer.disconnect());window.dispatchEvent(new Event('anthrise:scene-ready'));
})();
