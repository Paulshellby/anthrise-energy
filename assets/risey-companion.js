/* Stationary Risey: eye tracking, occasional dances and a quiet hover greeting. */
(()=>{'use strict';if(window.__anthriseUnifiedRisey)return;window.__anthriseUnifiedRisey=true;
function boot(){
 const css=document.createElement('link');css.rel='stylesheet';css.href='/assets/risey-companion.css?v=20261124-portals1';document.head.append(css);
 const original=document.getElementById('risey-actor-btn');let host,actor;
 if(original){host=document.getElementById('risey-mover');actor=original;actor.removeAttribute('aria-controls');actor.removeAttribute('aria-expanded');}
 else{
  document.documentElement.classList.add('unified-risey');host=document.createElement('aside');host.id='risey-unified';host.dataset.state='idle';
  host.innerHTML='<button type="button" class="risey-unified-actor"><span class="risey-stationary-rig" aria-hidden="true"><img class="risey-stationary-layer" src="/assets/images/risey-compact-tail.png" alt=""><img class="risey-stationary-layer" src="/assets/images/risey-compact-body.png" alt=""><span class="risey-stationary-head"><span class="risey-stationary-eye eye-l"><img src="/assets/images/risey-compact-iris-l.png" alt=""></span><span class="risey-stationary-eye eye-r"><img src="/assets/images/risey-compact-iris-r.png" alt=""></span><img class="risey-stationary-layer" src="/assets/images/risey-compact-head.png" alt=""></span></span><span class="risey-stationary-dance" hidden aria-hidden="true"><img alt=""></span></button>';
  document.body.append(host);actor=host.querySelector('button');
  if(!document.querySelector('.floating-controls,.risey-shared-contacts')){const nav=document.createElement('nav');nav.className='risey-shared-contacts';nav.setAttribute('aria-label','Quick contact');nav.innerHTML='<a href="https://wa.me/8615768897280" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><svg viewBox="0 0 24 24"><path d="M20 11.5a8 8 0 0 1-12 7L3 20l1.4-4.6A8 8 0 1 1 20 11.5Z"/><path d="M8 7c0 5 3 8 7 8l1-2-3-1-1 1-2-2 1-1-1-3Z"/></svg></a><a href="mailto:sales@anthrise-tech.com" aria-label="Email"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg></a>';document.body.append(nav)}
 }
 const bubble=document.createElement('span');bubble.className='risey-simple-bubble';bubble.id='risey-greeting';bubble.setAttribute('role','tooltip');host.append(bubble);actor.setAttribute('aria-describedby',bubble.id);
 const greetings={en:'Hi, I’m Risey. How can I help?',zh:'你好，我是 Risey。需要帮忙吗？',es:'Hola, soy Risey. ¿Te ayudo?',ru:'Привет, я Risey. Чем помочь?'};
 function localize(){const lang=document.documentElement.lang.split('-')[0];bubble.textContent=greetings[lang]||greetings.en;actor.setAttribute('aria-label',lang==='zh'?'Risey，点击跳舞':'Risey, click to dance')}
 const show=()=>host.classList.add('is-greeting'),hide=()=>host.classList.remove('is-greeting');actor.addEventListener('pointerenter',show);actor.addEventListener('pointerleave',hide);actor.addEventListener('focus',show);actor.addEventListener('blur',hide);
 let hideTimer;actor.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();show();clearTimeout(hideTimer);hideTimer=setTimeout(hide,3500);if(original)window.RISEY_STATIONARY?.dance();else dance()},{capture:true});
 document.addEventListener('keydown',e=>{if(e.key==='Escape')hide()});
 new MutationObserver(localize).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});localize();
 if(original)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)'),rig=host.querySelector('.risey-stationary-rig'),viewport=host.querySelector('.risey-stationary-dance'),sheet=viewport.querySelector('img'),eyes=[...host.querySelectorAll('.risey-stationary-eye img')];
 let px=0,py=0,lx=0,ly=0,frameId=0,danceTimer=0,dancing=false,danceStart=0,lastTime=0;
 const kinds=['samba','hiphop','tango','ballet'];setTimeout(()=>{if(!reduced.matches&&!navigator.connection?.saveData)for(const k of kinds){const img=new Image();img.src='/assets/images/risey-dance-'+k+'.png'}},2500);
 function dock(){const product=(document.body.classList.contains('products-body')||document.body.classList.contains('solutions-portal')),small=innerWidth<641,w=product?(small?74:100):(small?94:140);host.style.width=w+'px';host.style.transform=`translate3d(${innerWidth-w-(small?8:20)}px,${Math.max(100,innerHeight-w*492/420-(small?170:148))}px,0)`}
 function planDance(){clearTimeout(danceTimer);if(!reduced.matches&&!document.hidden)danceTimer=setTimeout(dance,18500+Math.random()*13500)}
 function dance(){if(reduced.matches||document.hidden||dancing)return;clearTimeout(danceTimer);const kind=kinds[Math.floor(Math.random()*kinds.length)];sheet.src='/assets/images/risey-dance-'+kind+'.png';dancing=true;danceStart=performance.now();host.dataset.state='dancing';rig.hidden=true;viewport.hidden=false;start()}
 function frame(now){frameId=0;if(document.hidden||reduced.matches)return;const dt=lastTime?Math.min((now-lastTime)/1000,.05):1/60;lastTime=now;
  if(dancing){const elapsed=now-danceStart,seq=[0,1,2,3,4,5,4,3,2,1];sheet.style.transform=`translateX(${-seq[Math.floor(elapsed/125)%seq.length]*100/6}%)`;if(elapsed>=5400){dancing=false;host.dataset.state='idle';rig.hidden=false;viewport.hidden=true;planDance()}}
  else{const a=1-Math.exp(-dt*9);lx+=(px-lx)*a;ly+=(py-ly)*a;eyes.forEach((eye,i)=>eye.style.transform=`translate(${lx*(i?9:7)}%,${ly*6}%)`)}
  frameId=requestAnimationFrame(frame);
 }
 function start(){if(!frameId&&!document.hidden&&!reduced.matches)frameId=requestAnimationFrame(frame)}
 function stop(){cancelAnimationFrame(frameId);frameId=0;lastTime=0;clearTimeout(danceTimer);dancing=false;host.dataset.state='idle';rig.hidden=false;viewport.hidden=true}
 document.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse'&&e.pointerType!=='pen')return;const r=actor.getBoundingClientRect();px=Math.max(-1,Math.min(1,(e.clientX-r.x-r.width*.4)/Math.max(200,innerWidth*.4)));py=Math.max(-1,Math.min(1,(e.clientY-r.y-r.height*.43)/Math.max(180,innerHeight*.4)))},{passive:true});
 document.addEventListener('mouseleave',()=>{px=py=0});window.addEventListener('resize',dock,{passive:true});document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();else{start();planDance()}});reduced.addEventListener('change',()=>{stop();start();planDance()});
 dock();start();planDance();window.RISEY_STATIONARY={getState:()=>({stationary:true,mode:host.dataset.state,pupilX:lx,pupilY:ly}),dance};
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();})();
