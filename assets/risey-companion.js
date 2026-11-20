/* Shared Risey identity, menu, and electric roll for every page. */
(() => {
  'use strict';
  if (window.__anthriseUnifiedRisey) return;
  window.__anthriseUnifiedRisey = true;
  const boot = () => {
    const style=document.createElement('link');style.rel='stylesheet';style.href='/assets/risey-companion.css?v=20261120-risey2';document.head.append(style);
    document.documentElement.classList.add('unified-risey');
    const reduce=matchMedia('(prefers-reduced-motion: reduce)');
    const host=document.createElement('aside');host.id='risey-unified';host.dataset.state='idle';
    const arc='<svg class="risey-electric-arc" viewBox="0 0 100 100" aria-hidden="true"><path d="M8 54 25 48 19 62 42 47 37 60 63 43 57 58 82 47 75 64 95 55"/><path d="m23 18-9 16 13-3-8 17M80 69l9 7-12 4 6 13"/></svg>';
    host.innerHTML='<button class="risey-unified-actor" aria-controls="risey-unified-menu" aria-expanded="false"><img class="risey-unified-idle" src="/assets/images/risey-compact-idle.png" alt="Risey" draggable="false"><span class="risey-electric-shoes">'+arc+'</span><span class="risey-electric-ball"><img src="/assets/images/risey-curl-ball-v2.webp" alt="" draggable="false">'+arc+'</span></button><section id="risey-unified-menu" role="dialog" aria-label="Risey" hidden><strong>Risey</strong><nav></nav><button data-risey-pause></button><button data-risey-close></button></section>';
    document.body.append(host);
    if (!document.querySelector('.floating-controls')) {
      const contacts=document.createElement('nav');contacts.className='risey-shared-contacts';contacts.setAttribute('aria-label','Quick contact');
      contacts.innerHTML='<a href="https://wa.me/8615768897280" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-12 7L3 20l1.4-4.6A8 8 0 1 1 20 11.5Z"/><path d="M8 7c0 5 3 8 7 8l1-2-3-1-1 1-2-2 1-1-1-3Z"/></svg></a><a href="mailto:sales@anthrise-tech.com" aria-label="Email sales@anthrise-tech.com"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg></a>';
      document.body.append(contacts);
    }
    const actor=host.querySelector('.risey-unified-actor'),menu=host.querySelector('section');
    const text={en:['Open Risey assistant','Contact sales','WhatsApp','Email','Explore products','Pause Risey','Resume Risey','Close'],zh:['打开 Risey 助手','讨论你的项目','WhatsApp','电子邮件','浏览产品','暂停 Risey','继续 Risey','关闭'],es:['Abrir asistente Risey','Consultar proyecto','WhatsApp','Correo','Explorar productos','Pausar Risey','Reanudar Risey','Cerrar'],ru:['Открыть помощника Risey','Обсудить проект','WhatsApp','Эл. почта','Продукция','Пауза Risey','Продолжить Risey','Закрыть']};
    let paused=reduce.matches,x=0,y=0,serial=0,raf=0,previousFocus=null;
    const words=()=>text[document.documentElement.lang.split('-')[0]]||text.en;
    const home=()=>window.ANTHRISE_I18N?.home(window.ANTHRISE_I18N.language)||({zh:'/home-zh.html',es:'/home-es.html',ru:'/home-ru.html'}[document.documentElement.lang.split('-')[0]]||'/');
    const size=()=>innerWidth<641?126:198;
    const bounds=(a,b)=>({x:Math.max(0,Math.min(innerWidth-size(),a)),y:Math.max(76,Math.min(innerHeight-size()*492/420-12,b))});
    const dock=()=>bounds(innerWidth-size()-(innerWidth<641?57:76),innerHeight-size()*492/420-(innerWidth<641?92:104));
    function render(){host.style.width=size()+'px';host.style.transform=`translate3d(${x}px,${y}px,0)`}
    function setMenu(open,restore=false){menu.hidden=!open;actor.setAttribute('aria-expanded',String(open));if(open){previousFocus=document.activeElement;const left=Math.max(12,Math.min(innerWidth-menu.offsetWidth-12,x+size()-menu.offsetWidth));const top=Math.max(88,Math.min(innerHeight-menu.offsetHeight-12,y-menu.offsetHeight));menu.style.left=(left-x)+'px';menu.style.top=(top-y)+'px';menu.querySelector('a')?.focus({preventScroll:true})}else if(restore)(previousFocus||actor).focus({preventScroll:true})}
    function sync(){
      const w=words();actor.setAttribute('aria-label',w[0]);const contact=document.querySelector('#inquiry,#contact');
      const links=[contact?'#'+contact.id:home()+'#inquiry','https://wa.me/8615768897280','mailto:sales@anthrise-tech.com',home()+'#products'];
      const nav=menu.querySelector('nav');nav.replaceChildren();links.forEach((href,i)=>{const a=document.createElement('a');a.href=href;a.textContent=w[i+1];if(i===1){a.target='_blank';a.rel='noopener'}a.addEventListener('click',()=>setMenu(false));nav.append(a)});
      host.classList.toggle('is-paused',paused);menu.querySelector('[data-risey-pause]').textContent=w[paused?6:5];menu.querySelector('[data-risey-close]').textContent=w[7];
    }
    function stop(){serial++;cancelAnimationFrame(raf);host.dataset.state='idle'}
    function move(a,b,force=false){
      if((paused||reduce.matches)&&!force)return;
      setMenu(false);stop();const destination=bounds(a,b),sx=x,sy=y,token=serial,distance=Math.hypot(destination.x-x,destination.y-y);
      if(distance<12)return;
      if(reduce.matches||paused){x=destination.x;y=destination.y;render();return}
      host.dataset.state='rolling';host.style.setProperty('--roll-direction',destination.x>=x?1:-1);
      const duration=Math.min(1450,Math.max(550,distance/1.05)),begin=performance.now();
      function frame(now){if(token!==serial)return;const p=Math.min(1,(now-begin)/duration),ease=p*p*(3-2*p);x=sx+(destination.x-sx)*ease;y=sy+(destination.y-sy)*ease;render();if(p<1)raf=requestAnimationFrame(frame);else host.dataset.state='idle'}
      raf=requestAnimationFrame(frame);
    }
    actor.addEventListener('click',()=>setMenu(menu.hidden));
    menu.querySelector('[data-risey-close]').onclick=()=>setMenu(false,true);
    menu.querySelector('[data-risey-pause]').onclick=()=>{paused=!paused;stop();sync();const toggle=document.getElementById('risey-follow-toggle');if(toggle&&toggle.getAttribute('aria-pressed')!==String(paused))toggle.click()};
    let down=null;
    document.addEventListener('pointerdown',e=>{down={x:e.clientX,y:e.clientY};if(!host.contains(e.target))setMenu(false)},{passive:true});
    document.addEventListener('click',e=>{
      if(e.defaultPrevented||e.detail===0||e.button!==0||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||!down||Math.hypot(e.clientX-down.x,e.clientY-down.y)>8)return;
      if(!(e.target instanceof Element)||e.target.closest('a,button,input,textarea,select,form,label,summary,[role="button"],header,#risey-unified,.campus-hotspot,.campus-popover,.campus-zone-bar,#products-stage,.global-language-picker'))return;
      move(e.clientX-size()*.5,e.clientY-size()*.72);
    });
    let scrollTimer;
    window.addEventListener('scroll',()=>{clearTimeout(scrollTimer);setMenu(false);scrollTimer=setTimeout(()=>{const d=dock();move(d.x,d.y,true)},90)},{passive:true});
    window.addEventListener('resize',()=>{stop();const d=dock();x=d.x;y=d.y;render()},{passive:true});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden)setMenu(false,true);if(e.key==='Tab'&&!menu.hidden){const items=[...menu.querySelectorAll('a,button')],first=items[0],last=items.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
    document.getElementById('risey-follow-toggle')?.addEventListener('click',()=>{paused=document.getElementById('risey-follow-toggle').getAttribute('aria-pressed')==='true';stop();sync()});
    document.getElementById('motion-toggle')?.addEventListener('click',()=>stop());
    reduce.addEventListener('change',()=>{paused=reduce.matches;stop();sync()});
    document.addEventListener('visibilitychange',()=>{if(document.hidden){stop();const d=dock();x=d.x;y=d.y;render()}});
    new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
    const d=dock();x=d.x;y=d.y;render();sync();
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
