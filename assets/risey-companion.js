/* Stationary Risey: eye tracking, occasional dances and a sales contact bubble. */
(()=>{'use strict';if(window.__anthriseUnifiedRisey)return;window.__anthriseUnifiedRisey=true;
function boot(){
 const icon=document.querySelector('link[rel~="icon"]')||document.createElement('link');
 icon.rel='icon';
 icon.type='image/png';
 icon.href='/assets/brand/anthrise-icon.png';
 if(!icon.isConnected)document.head.append(icon);
 const css=document.createElement('link');css.rel='stylesheet';css.href='/assets/risey-companion.css?v=20261125-homecatalog';document.head.append(css);
 const original=document.getElementById('risey-actor-btn');let host,actor;
 if(original){host=document.getElementById('risey-mover');actor=original;actor.removeAttribute('aria-controls');actor.removeAttribute('aria-expanded');}
 else{
  document.documentElement.classList.add('unified-risey');host=document.createElement('aside');host.id='risey-unified';host.dataset.state='idle';
  host.innerHTML='<button type="button" class="risey-unified-actor"><span class="risey-stationary-rig" aria-hidden="true"><img class="risey-stationary-layer" src="/assets/images/risey-compact-tail.png" alt=""><img class="risey-stationary-layer" src="/assets/images/risey-compact-body.png" alt=""><span class="risey-stationary-head"><span class="risey-stationary-eye eye-l"><img src="/assets/images/risey-compact-iris-l.png" alt=""></span><span class="risey-stationary-eye eye-r"><img src="/assets/images/risey-compact-iris-r.png" alt=""></span><img class="risey-stationary-layer" src="/assets/images/risey-compact-head.png" alt=""></span></span><span class="risey-stationary-dance" hidden aria-hidden="true"><img alt=""></span></button>';
  document.body.append(host);actor=host.querySelector('button');
  if(!document.querySelector('.floating-controls,.risey-shared-contacts')){const nav=document.createElement('nav');nav.className='risey-shared-contacts';nav.setAttribute('aria-label','Quick contact');nav.innerHTML='<a href="https://wa.me/8615768897280" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><svg viewBox="0 0 24 24"><path d="M20 11.5a8 8 0 0 1-12 7L3 20l1.4-4.6A8 8 0 1 1 20 11.5Z"/><path d="M8 7c0 5 3 8 7 8l1-2-3-1-1 1-2-2 1-1-1-3Z"/></svg></a><a href="mailto:sales@anthrise-tech.com" aria-label="Email"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg></a>';document.body.append(nav)}
 }
 const bubble=document.createElement('div');
 bubble.className='risey-simple-bubble';
 bubble.id='risey-greeting';
 bubble.hidden=true;
 bubble.classList.add('risey-assistant');
 bubble.setAttribute('role','region');
 bubble.innerHTML=`
  <header><strong>Risey</strong><button type="button" class="risey-close">×</button></header>
  <div class="risey-assistant-body">
   <p class="risey-answer" role="status"></p>
   <div class="risey-topics">
    <button type="button" data-topic="sizing"></button>
    <button type="button" data-topic="runtime"></button>
    <button type="button" data-topic="hybrid"></button>
    <button type="button" data-topic="commercial"></button>
   </div>
   <form class="risey-sizing" hidden>
    <label><span></span><input name="load" type="number" min="0.1" max="1000" step="any" value="1.5" required></label>
    <label><span></span><input name="hours" type="number" min="0.5" max="120" step="any" value="8" required></label>
    <label data-runtime hidden><span></span><input name="battery" type="number" min="0.01" max="10000" step="any" value="15.36" required disabled></label>
    <label data-runtime hidden><span></span><input name="usable" type="number" min="1" max="100" step="any" value="85" required disabled></label>
    <label data-runtime hidden><span></span><input name="efficiency" type="number" min="1" max="100" step="any" value="92" required disabled></label>
    <button type="submit"></button>
    <p role="status" class="risey-estimate"></p>
   </form>
   <form class="risey-question">
    <input name="question" type="text" maxlength="240" required>
    <button type="submit"></button>
   </form>
   <div class="risey-actions"><a class="risey-tools-link"></a><a class="risey-sales-link"></a></div>
  </div>`;
 host.append(bubble);
 actor.setAttribute('aria-controls',bubble.id);
 actor.setAttribute('aria-expanded','false');

 const copy={
  en:{
   labels:['Anthrise product assistant','Contact the sales team','Selection tools','Close assistant','Ask about our products','Ask','Storage sizing','Backup runtime','How hybrid works','C&I storage','Load (kW)','Backup (hours)','Battery capacity (kWh)','Usable capacity (%)','Efficiency (%)','Estimate'],
   hello:'I can help you size home storage and answer common questions about hybrid inverters and C&I systems.',
   sizing:'Enter your continuous load and target backup time to estimate the nominal battery capacity.',
   runtime:'Enter a battery capacity and continuous load to estimate backup runtime.',
   runtimeResult:value=>`Estimated backup time: ${value} hours at the stated load and settings.`,
   hybrid:'A hybrid inverter manages power from solar panels, batteries and the grid. In self-consumption mode, solar can supply loads first, then charge the battery. Export depends on site settings and grid approval.',
   commercial:'C&I storage can discharge during demand peaks to reduce grid draw. It can charge during lower-price hours or from surplus solar, depending on the site strategy.',
   fallback:'I don’t have a verified answer for that. Try a topic below, open the selection tools or ask our sales team.',
   estimate:value=>`Estimated battery capacity: ${value} kWh (85% usable capacity, 92% conversion efficiency). This is a planning estimate.`
  },
  zh:{
   labels:['昂旭产品助手','联系销售团队','选型工具','关闭助手','输入你的产品问题','提问','储能容量估算','备电续航估算','混合逆变器原理','工商业储能','持续负载 (kW)','备电时长 (小时)','电池容量 (kWh)','可用容量 (%)','转换效率 (%)','估算'],
   hello:'我可以帮你估算家用储能容量，也可以回答混合逆变器和工商业储能的常见问题。',
   sizing:'输入持续负载和目标备电时长，即可估算所需的额定电池容量。',
   runtime:'输入电池容量和持续负载，估算可供电的时间。',
   runtimeResult:value=>`按输入的负载和设置，预计可备电约 ${value} 小时。`,
   hybrid:'混合逆变器协调光伏、电池与电网。自发自用模式下，光伏通常先供负载，多余电量可给电池充电。余电能否上网取决于现场设置和并网许可。',
   commercial:'工商业储能可以在用电高峰放电，降低从电网取电的峰值。低价时段或光伏有余电时，可以按现场策略充电。',
   fallback:'我暂时没有可核实的答案。你可以选择下方的常见问题、打开选型工具或联系销售团队。',
   estimate:value=>`建议额定电池容量约 ${value} kWh（按 85% 可用容量、92% 转换效率估算，仅供初步选型）。`
  }
 };
 const answer=bubble.querySelector('.risey-answer');
 const sizing=bubble.querySelector('.risey-sizing');
 const estimate=bubble.querySelector('.risey-estimate');
 const question=bubble.querySelector('.risey-question');
 const close=bubble.querySelector('.risey-close');
 const tools=bubble.querySelector('.risey-tools-link');
 const sales=bubble.querySelector('.risey-sales-link');
 const topics=[...bubble.querySelectorAll('[data-topic]')];
 let locale,words=copy.en,topic='hello';
 function reply(next){
  topic=next;
  const runtime=next==='runtime';
  sizing.hidden=next!=='sizing'&&!runtime;
  sizing.elements.hours.disabled=runtime;
  sizing.elements.hours.closest('label').hidden=runtime;
  for(const label of sizing.querySelectorAll('[data-runtime]')){
   label.hidden=!runtime;
   label.querySelector('input').disabled=!runtime;
  }
  estimate.textContent='';
  answer.textContent=words[next];
 }
 function localize(){
  const language=window.ANTHRISE_I18N?.language||document.documentElement.lang;
  if(language===locale)return;
  locale=language;
  const localLanguage=locale.split('-')[0];
  words=copy[localLanguage]||copy.en;
  bubble.lang=copy[localLanguage]?localLanguage:'en';
  bubble.setAttribute('data-no-translate','');
  const [name,contact,tool,dismiss,prompt,ask,...options]=words.labels;
  const home=window.ANTHRISE_I18N?.home()||({zh:'/home-zh.html',es:'/home-es.html',ru:'/home-ru.html'}[localLanguage]||'/');
  actor.setAttribute('aria-label',name);
  bubble.setAttribute('aria-label',name);
  close.setAttribute('aria-label',dismiss);
  question.elements.question.placeholder=prompt;
  question.elements.question.setAttribute('aria-label',prompt);
  question.querySelector('button').textContent=ask;
  sales.textContent=contact;
  sales.href=home+'#project-inquiry';
  tools.textContent=tool;
  tools.href='/selection-tools.html?lang='+encodeURIComponent(locale);
  topics.forEach((button,index)=>button.textContent=options[index]);
  sizing.querySelectorAll('label span').forEach((label,index)=>label.textContent=options[index+4]);
  sizing.querySelector('button').textContent=options[9];
  estimate.textContent='';
  reply(topic);
 }
 topics.forEach(button=>button.addEventListener('click',()=>reply(button.dataset.topic)));
 sizing.addEventListener('submit',event=>{
  event.preventDefault();
  const read=name=>sizing.elements[name].valueAsNumber;
  const load=read('load');
  const format=value=>new Intl.NumberFormat(bubble.lang,{minimumFractionDigits:1,maximumFractionDigits:1}).format(value);
  estimate.textContent=topic==='runtime'
   ? words.runtimeResult(format(read('battery')*(read('usable')/100)*(read('efficiency')/100)/load))
   : words.estimate(format(load*read('hours')/(.85*.92)));
 });
 question.addEventListener('submit',event=>{
  event.preventDefault();
  const input=question.elements.question;
  const value=input.value.trim();
  if(!value)return;
  const matches=[
   ['commercial',/\bc\s*&\s*i\b|commercial|peak.shav|工商业|工商储能|削峰|填谷/i],
   ['runtime',/runtime|run time|how long|续航|能用多久/i],
   ['sizing',/siz(?:e|ing)|back.?up|capacity|\bkwh\b|容量|续航|备电|选型/i],
   ['hybrid',/inverter|hybrid|export|solar|逆变|混合|并网|光伏|上网/i]
  ];
  reply(matches.find(([,pattern])=>pattern.test(value))?.[0]||'fallback');
  input.value='';
 });
 let hideTimer;
 function show(){
  clearTimeout(hideTimer);
  bubble.hidden=false;
  host.classList.add('is-greeting');
  actor.setAttribute('aria-expanded','true');
 }
 function hide(){
  clearTimeout(hideTimer);
  host.classList.remove('is-greeting');
  bubble.hidden=true;
  actor.setAttribute('aria-expanded','false');
 }
 function scheduleHide(){
  clearTimeout(hideTimer);
  hideTimer=setTimeout(()=>{
   if(!actor.matches(':hover')&&!bubble.matches(':hover')&&!host.contains(document.activeElement))hide();
  },250);
 }
 for(const element of [actor,bubble]){
  element.addEventListener('pointerenter',show);
  element.addEventListener('pointerleave',scheduleHide);
 }
close.addEventListener('click',()=>{actor.focus({preventScroll:true});hide()});
 host.addEventListener('focusin',show);
 host.addEventListener('focusout',scheduleHide);
 actor.addEventListener('click',e=>{
  e.preventDefault();e.stopImmediatePropagation();show();
  question.elements.question.focus({preventScroll:true});
 },{capture:true});
 document.addEventListener('pointerdown',e=>{if(!host.contains(e.target))hide()});
 document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&!bubble.hidden){
   if(bubble.contains(document.activeElement))actor.focus({preventScroll:true});
   hide();
  }
 });
 window.addEventListener('anthrise:language-ready',localize);
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
