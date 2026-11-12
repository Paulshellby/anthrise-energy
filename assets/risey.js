/* Risey: local, contextual navigation. No live chat or visitor tracking. */
(()=>{'use strict';
if(document.getElementById('risey'))return;
const host=document.createElement('aside');host.id='risey';host.dataset.state='smile';
host.innerHTML=`<div id="risey-bubble" hidden><span id="risey-welcome"></span><button id="risey-dismiss" type="button">×</button></div><section id="risey-panel" aria-labelledby="risey-title" hidden><h2 id="risey-title">Risey</h2><p id="risey-service"></p><nav id="risey-links"></nav><p id="risey-info" role="status"></p><button id="risey-motion" type="button"></button><button id="risey-close" type="button"></button></section><button id="risey-launch" type="button" aria-expanded="false" aria-controls="risey-panel"><span class="risey-rig" aria-hidden="true"><img class="risey-art" src="images/risey-motion/idle.png" alt="" draggable="false" width="288" height="320"><span class="risey-shine"></span></span><span class="risey-ground" aria-hidden="true"></span></button><span class="risey-caption">Risey</span>`;
document.body.append(host);
const q=s=>host.querySelector(s),panel=q('#risey-panel'),launch=q('#risey-launch'),bubble=q('#risey-bubble'),reduce=matchMedia('(prefers-reduced-motion: reduce)');
const copy={en:{welcome:"Hi, I'm Risey. Need help finding your energy solution?",service:'Website guide · self-service navigation. No live agent connected.',open:'Open Risey assistant',close:'Close assistant',dismiss:'Dismiss welcome',links:['Product catalogue','Capacity & runtime','Prepare an inquiry','Battery introduction'],states:['Smile','Wave','Think','Happy'],motion:'Pause animations',resume:'Resume animations',battery:'Explore battery models and check each product’s listed specifications. Capacity and compatibility vary by model.',think:'Start with your load and backup duration in the capacity calculator.',ready:'Choose a shortcut to explore ANTHRISE.',caption:'Risey · Guide'},zh:{welcome:'你好，我是 Risey。一起找到适合你的能源方案吧！',service:'网站导航助手 · 自助服务，未连接真人客服。',open:'打开 Risey 助手',close:'关闭助手',dismiss:'关闭欢迎气泡',links:['产品目录','容量与续航计算','准备商务询盘','电池介绍'],states:['微笑','挥手','思考','开心'],motion:'暂停动画',resume:'恢复动画',battery:'浏览电池型号并核对各产品列出的规格。容量与兼容性因型号而异。',think:'先在容量计算器中填写用电负载与备电时长。',ready:'选择快捷入口，了解 ANTHRISE。',caption:'Risey · 导航'}};

let paused=false,language='',poseTimer,blinkTimer,bubbleTimer,idleTimer,actionSerial=0,lastReaction=0;
const detailPage=location.pathname.endsWith('/product.html');let resting='smile';
const words=()=>copy[document.documentElement.lang.startsWith('zh')?'zh':'en'];
const moving=()=>!paused&&!reduce.matches&&!document.hidden;

const art=q('.risey-art'),rig=q('.risey-rig');
const assetBase=new URL('images/risey-motion/',document.baseURI),assets={},loaded={};
for(const name of ['idle','wave','think','happy','service','blink','battery']){const im=new Image();im.src=new URL(name+'.png',assetBase).href;assets[name]=im;loaded[name]=im.decode().then(()=>true).catch(()=>false)}
let visual='idle',visualRequest=0,transitionAnimation=null;
function visualName(){return host.dataset.blink==='true'?'blink':host.dataset.state==='smile'?'idle':host.dataset.state}
async function drawPose(){
 const requested=visualName(),ticket=++visualRequest;
 if(transitionAnimation){transitionAnimation.cancel();transitionAnimation=null}
 if(!await loaded[requested]||ticket!==visualRequest)return;
 if(requested===visual)return;
 if(transitionAnimation){transitionAnimation.cancel();transitionAnimation=null}
 const blinkOnly=(requested==='blink'&&visual==='idle')||(requested==='idle'&&visual==='blink');
 if(moving()&&!blinkOnly&&art.animate){
  transitionAnimation=art.animate([{opacity:1},{opacity:0}],{duration:90,easing:'ease-in',fill:'forwards'});
  try{await transitionAnimation.finished}catch{return}
  if(ticket!==visualRequest)return;
 }
 art.src=assets[requested].src;visual=requested;
 if(transitionAnimation){transitionAnimation.cancel();transitionAnimation=null}
 if(moving()&&!blinkOnly&&art.animate){transitionAnimation=art.animate([{opacity:0},{opacity:1}],{duration:140,easing:'ease-out'});try{await transitionAnimation.finished}catch{}}
}
new MutationObserver(drawPose).observe(host,{attributes:true,attributeFilter:['data-state','data-blink']});
art.addEventListener('error',()=>{art.src=new URL('images/risey-web.png',document.baseURI).href},{once:true});

function safeGet(k){try{return sessionStorage.getItem(k)}catch{return null}}
function safeSet(k,v){try{sessionStorage.setItem(k,v)}catch{}}
function pose(state,duration=3200){clearTimeout(poseTimer);host.dataset.blink='false';host.dataset.micro='';host.dataset.state=state;actionSerial++;if(duration)poseTimer=setTimeout(()=>{host.dataset.state=resting;host.dataset.micro=''},duration)}
function setOpen(open,restore=false){panel.hidden=!open;bubble.hidden=true;launch.setAttribute('aria-expanded',String(open));pose(open?'wave':resting,open?1800:0);if(open)q('#risey-close').focus();else if(restore)launch.focus()}
function hint(action){const c=words();return action==='think'?c.think:action==='service'?(c===copy.zh?'把需求告诉我，我们一起准备清楚的询盘。':'Let’s prepare your product and project requirements.'):action==='happy'?(c===copy.zh?'选好了！下一步我也陪你一起。':'Looking good! Ready for the next step.'):c.battery}
function react(action,speak=true){const now=Date.now();if(now-lastReaction<1200&&host.dataset.state===action)return;lastReaction=now;pose(action);q('#risey-info').textContent=hint(action);if(speak&&panel.hidden){q('#risey-welcome').textContent=hint(action);bubble.hidden=false;clearTimeout(bubbleTimer);bubbleTimer=setTimeout(()=>bubble.hidden=true,4800)}}
function sync(){const c=words();host.setAttribute('aria-label',c.open);launch.setAttribute('aria-label',c.open);q('#risey-dismiss').setAttribute('aria-label',c.dismiss);q('#risey-service').textContent=c.service;q('#risey-close').textContent=c.close;q('#risey-motion').textContent=paused?c.resume:c.motion;q('.risey-caption').textContent=c.caption;q('#risey-info').textContent=c.ready;
q('#risey-links').replaceChildren();['#products','#planner','#inquiry','#products'].forEach((href,i)=>{const a=document.createElement('a');a.href=document.getElementById(href.slice(1))?href:'index.html'+href;a.textContent=c.links[i];a.onclick=()=>{setOpen(false);react(i===1?'think':i===2?'service':'battery');if(!document.getElementById(href.slice(1)))safeSet('risey-arrival',i===1?'think':i===2?'service':'battery')};q('#risey-links').append(a)});language=document.documentElement.lang}
function scheduleBlink(){clearTimeout(blinkTimer);blinkTimer=setTimeout(()=>{if(moving()&&panel.hidden&&host.dataset.state==='smile'){const serial=actionSerial;host.dataset.blink='true';blinkTimer=setTimeout(()=>{host.dataset.blink='false';if(moving()&&serial===actionSerial&&Math.random()<.25){blinkTimer=setTimeout(()=>{if(serial===actionSerial)host.dataset.blink='true';blinkTimer=setTimeout(()=>{host.dataset.blink='false';scheduleBlink()},140)},160)}else scheduleBlink()},150)}else scheduleBlink()},3400+Math.random()*4100)}
function scheduleIdle(){clearTimeout(idleTimer);idleTimer=setTimeout(()=>{if(moving()&&panel.hidden&&host.dataset.state==='smile'){host.dataset.micro=Math.random()<.5?'listen':'tail';poseTimer=setTimeout(()=>host.dataset.micro='',1700)}scheduleIdle()},8500+Math.random()*6500)}
function motionChanged(){host.classList.toggle('motion-hidden',document.hidden);if(transitionAnimation){transitionAnimation.cancel();transitionAnimation=null}host.classList.toggle('paused',paused);host.dataset.blink='false';host.dataset.micro='';if(!moving()){clearTimeout(blinkTimer);clearTimeout(idleTimer)}else{scheduleBlink();scheduleIdle()}drawPose()}
launch.onclick=()=>setOpen(panel.hidden);launch.addEventListener('pointerenter',()=>{if(moving()&&panel.hidden&&host.dataset.state==='smile')pose('wave',1500)});
launch.addEventListener('pointermove',e=>{if(!moving()||e.pointerType==='touch')return;const r=launch.getBoundingClientRect();launch.style.setProperty('--look-x',((e.clientX-r.left)/r.width-.5)*3+'px');launch.style.setProperty('--look-y',((e.clientY-r.top)/r.height-.5)*2+'px')});
launch.addEventListener('pointerleave',()=>{launch.style.setProperty('--look-x','0px');launch.style.setProperty('--look-y','0px')});
q('#risey-close').onclick=()=>setOpen(false,true);q('#risey-dismiss').onclick=()=>bubble.hidden=true;
q('#risey-motion').onclick=()=>{paused=!paused;safeSet('risey-paused',String(paused));motionChanged();q('#risey-motion').textContent=paused?words().resume:words().motion};
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden)setOpen(false,true)});
document.addEventListener('pointerdown',e=>{if(!panel.hidden&&!host.contains(e.target))setOpen(false)});
new MutationObserver(()=>{if(language!==document.documentElement.lang)sync()}).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
document.addEventListener('visibilitychange',motionChanged);reduce.addEventListener('change',motionChanged);
document.addEventListener('focusin',e=>{const form=!!e.target.closest('#inquiryForm');host.classList.toggle('form-active',form);if(form)react('service',false)});
document.addEventListener('click',e=>{const t=e.target instanceof Element?e.target:null;if(!t||host.contains(t))return;let action;if(t.closest('[data-product],a[href*="product.html"]'))action='battery';else if(t.closest('a[href*="#inquiry"],#inquire,#addProduct,#useEstimate'))action='service';else if(t.closest('#copyInquiry,#downloadInquiry,#previewInquiry,[data-compare]'))action='happy';else if(t.closest('a[href*="#planner"],a[href*="#calculator"],#resetCalc'))action='think';else if(t.closest('#productFilters,#productGrid,#productSearch,#thumbnails,#next,#previous'))action='battery';if(action){react(action);if(t.closest('a[href]'))safeSet('risey-arrival',action)}},true);
document.addEventListener('input',e=>{if(e.target.closest('#planner,#calculator,.calculator'))react('think',false)});
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting&&panel.hidden&&Date.now()-lastReaction>4200){const sectionPose=e.target.id==='products'?'battery':e.target.id==='planner'?'think':'service';pose(sectionPose,2400)}},{threshold:.25});for(const id of ['products','planner','inquiry']){const el=document.getElementById(id);if(el)observer.observe(el)}}
paused=safeGet('risey-paused')==='true';sync();motionChanged();
const arrival=safeGet('risey-arrival');try{sessionStorage.removeItem('risey-arrival')}catch{}
if(arrival||detailPage||location.hash==='#inquiry'){const action={product:'battery',inquiry:'service'}[arrival]||arrival|| (location.hash==='#inquiry'?'service':detailPage?'battery':resting);react(['battery','think','service','happy'].includes(action)?action:resting)}
else if(!safeGet('risey-welcomed')){pose('wave',2800);q('#risey-welcome').textContent=words().welcome;bubble.hidden=false;bubbleTimer=setTimeout(()=>bubble.hidden=true,6500);safeSet('risey-welcomed','1')}
})();