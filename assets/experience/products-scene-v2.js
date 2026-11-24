/* Full-screen architectural scene with aligned, interactive application regions. */
(()=>{'use strict';
const host=document.querySelector('#energy-city'),plane=host.querySelector('.scene-image-plane'),markerHost=document.querySelector('#scene-markers');
const definitions={
 storage:{label:'Energy storage',color:'#4f73d6',x:.26,y:.49,path:'M63 504 283 414 471 481 555 511 552 530 532 537 532 704 456 729 349 755 65 713Z'},
 inverter:{label:'Hybrid inverters',color:'#9262ce',x:.555,y:.35,path:'M499 292 798 220 1177 282 1176 400 1076 419 1018 530 855 585 499 499Z'},
 solar:{label:'Solar panels & kits',color:'#dca434',x:.822,y:.43,path:'M997 501 1292 382 1405 404 1405 452 1221 546 998 520Z'},
 lighting:{label:'Solar Lighting',color:'#399672',x:.422,y:.798,path:'M513 755 570 733 586 736 539 763 539 966 524 970 524 764Z M867 528 934 502 952 508 894 534 894 751 880 758 880 532Z M289 823 306 824 307 890 292 892Z M364 842 379 843 380 915 365 918Z M573 882 588 883 589 950 573 954Z M982 718 995 719 995 775 982 776Z'},
 commercial:{label:'C&amp;I',color:'#007d77',x:.876,y:.232,path:'M1269 278 1292 270 1315 279 1334 275 1360 286 1358 355 1330 370 1268 355Z'}
};
const grid=document.createElement('span');
grid.className='scene-marker scene-marker--grid';
grid.style.setProperty('--zone-color','#007d77');
grid.innerHTML='<span class="marker-dot" aria-hidden="true"></span><span>Grid</span>';
markerHost.append(grid);

const imageWidth=1505,imageHeight=1045,imageRatio=imageWidth/imageHeight;
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
  const inset=node.offsetWidth/2+12;
  node.style.left=Math.min(w-inset,Math.max(inset,center))+'px';
  node.style.top=(top+y*ph)+'px';
 }
 place(grid,.829,.72);
 for(const [zone,def] of Object.entries(definitions)){
  place(markerHost.querySelector('[data-zone="'+zone+'"]'),def.x,def.y);
 }
}
const observer=new ResizeObserver(layout);observer.observe(host);host.dataset.renderer='architectural-scene';layout();
window.PRODUCT_SCENE={select:choose,hover:setHighlight,clear:()=>{selected=null;setHighlight(null);for(const n of document.querySelectorAll('[data-zone]'))n.setAttribute('aria-pressed','false')},getState:()=>({selected,hovered,renderer:host.dataset.renderer,colors:Object.fromEntries(Object.entries(definitions).map(([k,v])=>[k,v.color])),zones:Object.keys(definitions),productSpheres:document.querySelectorAll('.product-orbits,.orbit-space').length,layout:layoutState}),project:zone=>{const n=markerHost.querySelector('[data-zone="'+zone+'"]'),r=n.getBoundingClientRect();return {x:r.x+r.width/2,y:r.y+r.height/2}}};
window.addEventListener('pagehide',()=>observer.disconnect());window.dispatchEvent(new Event('anthrise:scene-ready'));
})();
