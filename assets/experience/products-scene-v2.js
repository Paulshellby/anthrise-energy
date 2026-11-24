/* Full-screen architectural scene with aligned, interactive application regions. */
(()=>{'use strict';
const host=document.querySelector('#energy-city'),plane=host.querySelector('.scene-image-plane'),markerHost=document.querySelector('#scene-markers');
const definitions={
 storage:{label:'Energy storage',color:'#4f73d6',x:.285,y:.49,path:'M141 470 359 390 373 389 621 477 624 489 602 497 602 656 583 663 582 676 528 690 510 690 510 697 461 710 444 704 423 704 406 708 402 719 356 722 141 672Z'},
 inverter:{label:'Hybrid inverters',color:'#9262ce',x:.55,y:.35,path:'M552 299 835 225 879 237 1006 230 1195 272 1195 284 1180 290 1180 469 1077 503 882 559 552 502Z'},
 solar:{label:'Solar panels & kits',color:'#dca434',x:.79,y:.43,path:'M1027 475 1287 368 1415 387 1415 424 1183 516 1027 493Z'},
 lighting:{label:'Solar Lighting',color:'#399672',x:.43,y:.80,path:'M566 716 618 697 634 705 594 728 594 918 580 923 580 733Z M894 493 939 478 957 484 922 504 923 714 910 718 910 505Z M270 731 286 729 291 812 279 816Z M357 775 370 774 376 858 363 862Z M427 804 440 804 445 880 432 885Z M625 864 638 863 643 932 630 935Z M706 907 720 908 724 968 711 974Z M1009 683 1021 684 1026 751 1013 755Z M1053 713 1067 715 1069 766 1055 767Z'}
};
const imageWidth=1586,imageHeight=992,imageRatio=imageWidth/imageHeight;
const ns='http://www.w3.org/2000/svg',svg=document.createElementNS(ns,'svg');svg.setAttribute('viewBox','0 0 '+imageWidth+' '+imageHeight);svg.setAttribute('focusable','false');svg.classList.add('application-regions');svg.setAttribute('aria-hidden','true');plane.append(svg);
let hovered=null,selected=null,layoutState={};
function setHighlight(zone){if(hovered===zone)return;hovered=zone;host.dataset.hover=zone||'';for(const n of document.querySelectorAll('[data-zone]'))n.classList.toggle('is-hovered',n.dataset.zone===zone);for(const p of svg.children)p.classList.toggle('active-region',p.dataset.zone===zone);layout();window.dispatchEvent(new CustomEvent('anthrise:scene-hover',{detail:{zone}}));}
function choose(zone){selected=zone;setHighlight(zone);for(const n of document.querySelectorAll('[data-zone]'))n.setAttribute('aria-pressed',String(n.dataset.zone===zone));window.dispatchEvent(new CustomEvent('anthrise:product-zone',{detail:{zone}}));}
function attach(node,zone){node.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch')setHighlight(zone)});node.addEventListener('pointerleave',()=>setHighlight(selected));node.addEventListener('focus',()=>setHighlight(zone));node.addEventListener('blur',()=>setHighlight(selected));node.addEventListener('click',()=>choose(zone));}
for(const [zone,def] of Object.entries(definitions)){
 const p=document.createElementNS(ns,'path');p.setAttribute('d',def.path);p.setAttribute('focusable','false');p.setAttribute('tabindex','-1');p.addEventListener('pointerdown',e=>{if(e.pointerType!=='touch')e.preventDefault()});p.dataset.zone=zone;p.style.setProperty('--region-color',def.color);svg.append(p);attach(p,zone);
 const button=document.createElement('button');button.type='button';button.className='scene-marker';button.dataset.zone=zone;button.style.setProperty('--zone-color',def.color);button.innerHTML='<span class="marker-dot" aria-hidden="true"></span><span>'+def.label+'</span>';button.setAttribute('aria-controls','product-popover');button.setAttribute('aria-pressed','false');markerHost.append(button);attach(button,zone);
}
for(const button of document.querySelectorAll('.product-scene-tabs [data-zone]'))attach(button,button.dataset.zone);
function layout(){const w=host.clientWidth,h=host.clientHeight,pw=Math.max(w,h*imageRatio),ph=pw/imageRatio;let left=(w-pw)/2;const active=hovered||selected;
 if(w<781&&active)left=Math.min(0,Math.max(w-pw,w*.5-definitions[active].x*pw));
 const top=(h-ph)/2;plane.style.width=pw+'px';plane.style.height=ph+'px';plane.style.left=left+'px';plane.style.top=top+'px';layoutState={width:w,height:h,planeWidth:pw,planeHeight:ph,left,top};
 for(const [zone,def] of Object.entries(definitions)){const node=markerHost.querySelector('[data-zone="'+zone+'"]'),x=Math.min(w-node.offsetWidth/2-12,Math.max(node.offsetWidth/2+12,left+def.x*pw)),y=top+def.y*ph;node.style.left=x+'px';node.style.top=y+'px';}
}
const observer=new ResizeObserver(layout);observer.observe(host);host.dataset.renderer='architectural-scene';layout();
window.PRODUCT_SCENE={select:choose,hover:setHighlight,clear:()=>{selected=null;setHighlight(null);for(const n of document.querySelectorAll('[data-zone]'))n.setAttribute('aria-pressed','false')},getState:()=>({selected,hovered,renderer:host.dataset.renderer,colors:Object.fromEntries(Object.entries(definitions).map(([k,v])=>[k,v.color])),zones:Object.keys(definitions),productSpheres:document.querySelectorAll('.product-orbits,.orbit-space').length,layout:layoutState}),project:zone=>{const n=markerHost.querySelector('[data-zone="'+zone+'"]'),r=n.getBoundingClientRect();return {x:r.x+r.width/2,y:r.y+r.height/2}}};
window.addEventListener('pagehide',()=>observer.disconnect());window.dispatchEvent(new Event('anthrise:scene-ready'));
})();
