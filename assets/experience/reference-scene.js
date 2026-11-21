/* Fixed-camera reference scene. Day/night plates + real SVG and DOM interaction.
   Uses the existing site's product stage, product records and Risey controller. */
(() => {
  'use strict';
  const hero=document.getElementById('hero-section'),frame=document.getElementById('hero-scene-viewport'),plane=document.getElementById('reference-plane'),popover=document.getElementById('reference-popover');
  if(!hero||!plane)return;
  const reduce=matchMedia('(prefers-reduced-motion: reduce)'),products=window.REFERENCE_PRODUCTS||{};
  const state={time:'day',flow:false,paused:reduce.matches,suspended:false,lang:document.documentElement.lang.startsWith('zh')?'zh':'en',family:'all',zone:'overview',zoom:1,x:0,y:0,ready:false};
  let selected=null,returnFocus=null,lastTick=0,motionClock=0,raf=0;
  const svgNS='http://www.w3.org/2000/svg',flowHost=document.getElementById('reference-flows');
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const definitions=[
    {key:'home-battery',id:'ess16',family:'storage',x:433,y:683,zone:'home',usage:['储能设备置于平整、遮蔽的设备区，通过逆变器参与家庭供电。安装与系统匹配需按实际项目确认。','The battery sits on a sheltered utility pad and connects through the inverter. Installation and system matching require project confirmation.']},
    {key:'home-inverter',id:'hybrid6',family:'solar',x:412,y:525,zone:'home',usage:['墙装逆变器连接屋顶光伏、储能电池与家庭配电。图中展示运行路径，不代替电气施工图。','Wall-mounted inverter linking PV, battery storage and distribution. The scene illustrates operation, not an installation drawing.']},
    {key:'business-storage',id:'series_horizon',family:'storage',x:1136,y:518,zone:'business',usage:['工商业储能柜在设备基础上安装，侧置散热设备保留维护空间。','Commercial cabinets installed on equipment bases with service clearance around their side cooling modules.']},
    {key:'portable',id:'origAEV2500',family:'storage',x:1429,y:806,zone:'offgrid',usage:['便携电源连接折叠光伏板充电；夜间由储能给露营灯等负载供电。','The portable station charges from a folding PV panel and supplies camping loads from stored energy after dark.']},
    {key:'streetlight',id:'jcLight09',family:'lighting',x:949,y:279,zone:'lighting',usage:['路灯固定在道路灯杆上。白天关闭照明，夜间照亮道路，供能来自独立太阳能照明系统。','Pole-mounted road lighting. Lamps are off in daylight and illuminate the road at night using their own solar lighting system.']},
    {key:'bollard',id:'jcLight28',family:'lighting',x:459,y:844,zone:'lighting',usage:['庭院灯沿步道固定安装，夜间在铺装和花坛边缘形成照明。','Bollards mounted along the walkway illuminate paving and the borders of planted beds after dark.']},
    {key:'wall-lantern',id:'jcLight04',family:'lighting',x:351,y:611,zone:'lighting',usage:['壁灯以背板固定在入口墙面，夜间照亮门廊与入口。','Wall lanterns attached by their backplates illuminate entrances and porches after dark.']},
    {key:'pv',id:'origAER400',family:'solar',x:267,y:362,zone:'home',usage:['屋顶组件展示光伏发电的应用位置；实际阵列的型号、数量与组串设计按项目确认。','Roof-mounted PV illustrates the application. Actual module selection, quantities and string design require project confirmation.']},
    {key:'offgrid-battery',id:'ess16',family:'storage',x:1354,y:220,zone:'offgrid',usage:['离网小屋由当地光伏与储能系统供电，图中不将其连接至园区公用电网。','The remote lodge uses its own PV and storage system, isolated from the campus utility connection.']},
  ];
  const zoneData={overview:{x:836,y:470,zoom:1,zh:'园区全景',en:'Overview'},home:{x:350,y:590,zoom:1.65,zh:'家庭能源',en:'Home Energy'},business:{x:1150,y:520,zoom:1.6,zh:'工商业能源',en:'Business Energy'},offgrid:{x:1390,y:510,zoom:1.55,zh:'离网与便携',en:'Off-grid & Portable'},lighting:{x:725,y:690,zoom:1.45,zh:'太阳能照明',en:'Solar Lighting'}};
  const hotspotHost=document.getElementById('reference-hotspots');
  definitions.forEach(def=>{
    const p=products[def.id];if(!p)return;
    const b=document.createElement('button');b.type='button';b.className='reference-hotspot campus-hotspot';b.dataset.hotspot=def.key;b.dataset.family=def.family;b.style.left=def.x/1672*100+'%';b.style.top=def.y/941*100+'%';b.setAttribute('aria-expanded','false');b.setAttribute('aria-controls','reference-popover');b.innerHTML='<span class="reference-hotspot-dot"></span><span class="reference-hotspot-label"></span>';
    b.onclick=event=>{event.stopPropagation();if(selected===def.key){closePopover(true);return}openProduct(def,b)};hotspotHost.append(b);
  });
  [['home',327,785],['business',1115,617],['offgrid',1485,270],['lighting',621,875]].forEach(([zone,x,y])=>{
    const b=document.createElement('button');b.className='reference-zone-pin campus-zone-btn';b.dataset.zonePin=zone;b.style.left=x/1672*100+'%';b.style.top=y/941*100+'%';b.onclick=()=>focusZone(zone);hotspotHost.append(b);
  });
  function syncCopy(){
    const zh=state.lang==='zh';document.getElementById('reference-time-note').textContent=zh?(state.time==='day'?'白天 · 光伏供能与储能充电 · 灯具关闭':'夜晚 · 储能供电 · 路灯、庭院灯与壁灯亮起'):(state.time==='day'?'Day · Solar supply and battery charging · Lamps off':'Night · Stored energy supply · Lighting on');
    definitions.forEach(d=>{const b=hotspotHost.querySelector('[data-hotspot="'+d.key+'"]'),p=products[d.id];if(b&&p){const name=zh?p.zh:p.en;b.setAttribute('aria-label',name);b.querySelector('.reference-hotspot-label').textContent=name}});
    hotspotHost.querySelectorAll('[data-zone-pin]').forEach(b=>{b.textContent=zoneData[b.dataset.zonePin][zh?'zh':'en']});
  }
  function closePopover(restore=false){popover.hidden=true;selected=null;hotspotHost.querySelectorAll('[aria-expanded=true]').forEach(b=>b.setAttribute('aria-expanded','false'));if(restore)returnFocus?.focus({preventScroll:true})}
  function openProduct(def,button){
    closePopover();selected=def.key;returnFocus=button;const p=products[def.id],zh=state.lang==='zh',idx=zh?1:0;
    button.setAttribute('aria-expanded','true');popover.innerHTML='<button class="reference-popover-close" aria-label="'+(zh?'关闭产品信息':'Close product information')+'">×</button><p class="reference-product-family">'+(zh?{storage:'储能系列',solar:'光伏与逆变器',lighting:'太阳能照明'}[def.family]:{storage:'ENERGY STORAGE',solar:'SOLAR & INVERTERS',lighting:'SOLAR LIGHTING'}[def.family])+'</p><img class="reference-product-image" src="/'+esc(p.image)+'" alt="'+esc(zh?p.zh:p.en)+'"><h3 id="reference-product-title">'+esc(zh?p.zh:p.en)+'</h3><p class="reference-model">'+esc(p.modelCode)+'</p><p class="reference-usage">'+esc(def.usage[zh?0:1])+'</p><dl>'+p.specs.slice(0,3).map(s=>'<div><dt>'+esc(s.label[idx])+'</dt><dd>'+esc(s.value[idx])+'</dd></div>').join('')+'</dl><button class="reference-product-action">'+(zh?'查看完整产品资料':'View full product details')+'</button>';
    popover.hidden=false;popover.querySelector('.reference-popover-close').onclick=()=>closePopover(true);popover.querySelector('.reference-product-action').onclick=()=>{closePopover();if(window.__anthriseOpenAtlasProduct)window.__anthriseOpenAtlasProduct(def.id);else if(window.__anthriseOpenStageProduct)window.__anthriseOpenStageProduct(def.id);else location.href='/products/'+def.id+'-'+(zh?'zh':'en')+'.html'};
  }
  function constrain(){const maxX=Math.max(0,(plane.offsetWidth*state.zoom-frame.clientWidth)/2),maxY=Math.max(0,(plane.offsetHeight*state.zoom-frame.clientHeight)/2);state.x=Math.max(-maxX,Math.min(maxX,state.x));state.y=Math.max(-maxY,Math.min(maxY,state.y))}
  function renderCamera(){constrain();hero.style.setProperty('--zoom',state.zoom);hero.style.setProperty('--pan-x',state.x+'px');hero.style.setProperty('--pan-y',state.y+'px');frame.classList.toggle('is-zoomed',state.zoom>1.01)}
  function layout(){const w=Math.min(frame.clientWidth,frame.clientHeight*1672/941);plane.style.width=w+'px';plane.style.height=w*941/1672+'px';if(state.zone!=='overview')positionZone();else renderCamera()}
  function positionZone(){const z=zoneData[state.zone];state.zoom=z.zoom;state.x=(836-z.x)*plane.offsetWidth/1672*state.zoom;state.y=(470.5-z.y)*plane.offsetHeight/941*state.zoom;renderCamera()}
  function focusZone(zone){if(!zoneData[zone])return;closePopover();state.zone=zone;positionZone();document.querySelectorAll('[data-focus]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.focus===zone)))}
  document.querySelectorAll('[data-focus]').forEach(b=>b.onclick=()=>focusZone(b.dataset.focus));
  document.querySelectorAll('.reference-families button').forEach(b=>b.onclick=()=>{closePopover();state.family=b.dataset.family;hero.dataset.family=state.family;document.querySelectorAll('.reference-families button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));hotspotHost.querySelectorAll('[data-hotspot]').forEach(x=>{const muted=state.family!=='all'&&x.dataset.family!==state.family;x.classList.toggle('is-muted',muted);x.disabled=muted})});
  document.querySelectorAll('[data-zoom]').forEach(b=>b.onclick=()=>{if(b.dataset.zoom==='reset'){focusZone('overview');return}state.zone='overview';state.zoom=Math.max(1,Math.min(2.8,state.zoom+(b.dataset.zoom==='in'?.35:-.35)));renderCamera()});
  let drag=null,moved=false;
  frame.addEventListener('pointerdown',e=>{if(e.target.closest('button,a,.campus-popover,.campus-hud-card'))return;drag={id:e.pointerId,x:e.clientX,y:e.clientY,px:state.x,py:state.y};moved=false;if(state.zoom>1)frame.setPointerCapture(e.pointerId)});
  frame.addEventListener('pointermove',e=>{if(!drag||drag.id!==e.pointerId)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(Math.hypot(dx,dy)>7){moved=true;if(state.zoom>1){frame.classList.add('is-dragging');state.zone='overview';state.x=drag.px+dx;state.y=drag.py+dy;renderCamera()}}});
  const endDrag=()=>{drag=null;frame.classList.remove('is-dragging')};frame.addEventListener('pointerup',endDrag);frame.addEventListener('pointercancel',endDrag);frame.addEventListener('click',e=>{
    if(moved){e.preventDefault();e.stopImmediatePropagation();moved=false;return}
    const clicked=e.target.closest('.reference-hotspot');
    if(clicked){
      // On small maps several 44px touch targets can overlap. Select the nearest
      // visible product center, rather than whichever button happens to be last.
      let choice=clicked;
      if(e.detail!==0){let best=Infinity;hotspotHost.querySelectorAll('.reference-hotspot:not([disabled])').forEach(b=>{const r=b.getBoundingClientRect(),d=Math.hypot(e.clientX-r.left-r.width/2,e.clientY-r.top-r.height/2);if(d<best){choice=b;best=d}})}
      e.preventDefault();e.stopImmediatePropagation();const def=definitions.find(d=>d.key===choice.dataset.hotspot);if(selected===def.key)closePopover(true);else openProduct(def,choice);return;
    }
    if(!e.target.closest('button,a,.campus-popover'))closePopover();
  },true);
  frame.addEventListener('keydown',e=>{if(e.target!==frame)return;if(e.key==='Escape')focusZone('overview');if(e.key==='+'||e.key==='='){state.zoom=Math.min(2.8,state.zoom+.3);renderCamera()}if(e.key==='-'){state.zoom=Math.max(1,state.zoom-.3);renderCamera()}});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!popover.hidden)closePopover(true)});
  popover.addEventListener('click',event=>event.stopPropagation());
  const flowDefinitions=[
    {id:'home-pv',mode:'day',path:'M402 399 L432 425 L432 478'},
    {id:'home-charge',mode:'day',path:'M412 565 L412 588 Q412 599 431 603 L433 630'},
    {id:'home-discharge',mode:'night',path:'M433 630 L433 607 Q412 602 412 588 L412 565'},
    {id:'home-load',mode:'both',path:'M438 566 L448 588 L485 588 L485 618'},
    {id:'business-pv',mode:'day',path:'M1044 398 L1166 405 Q1209 404 1208 430 L1208 444'},
    {id:'business-charge',mode:'day',path:'M1208 444 L1168 444 L1168 467'},
    {id:'business-discharge',mode:'night',path:'M1168 467 L1168 444 L1208 444'},
    {id:'business-load',mode:'both',path:'M1208 444 L1230 444 L1230 483'},
    {id:'offgrid-pv',mode:'day',path:'M1472 219 L1440 257 L1331 257 L1331 205 L1310 205 L1310 196'},
    {id:'offgrid-charge',mode:'day',path:'M1310 196 L1310 215 L1330 215 L1330 236'},
    {id:'offgrid-discharge',mode:'night',path:'M1330 236 L1330 215 L1310 215 L1310 196'},
    {id:'offgrid-load',mode:'both',path:'M1310 195 L1294 195 L1294 182 L1276 182'},
    {id:'camp-charge',mode:'day',path:'M1321 717 L1321 749 Q1320 781 1385 795'},
    {id:'camp-output',mode:'both',path:'M1465 814 Q1493 817 1493 780 L1493 765 L1525 765'},
  ];
  const flows=flowDefinitions.map((d,index)=>{const group=document.createElementNS(svgNS,'g');group.classList.add('reference-flow');group.dataset.flowId=d.id;const path=document.createElementNS(svgNS,'path');path.setAttribute('d',d.path);path.setAttribute('class','reference-flow-path');group.append(path);const dots=[0,.48].map(offset=>{const c=document.createElementNS(svgNS,'circle');c.setAttribute('r','3');c.setAttribute('class','reference-flow-dot');group.append(c);return {node:c,offset:offset+index*.067}});flowHost.append(group);return {...d,group,path,dots,length:path.getTotalLength()}});
  function syncFlows(){flows.forEach(f=>{f.group.dataset.active=String(f.mode==='both'||f.mode===state.time)})}
  function setTime(time,instant=false){state.time=time==='night'?'night':'day';hero.dataset.sceneTime=state.time;if(instant){hero.classList.add('reference-instant');setTimeout(()=>hero.classList.remove('reference-instant'),0)}syncFlows();syncCopy()}
  function tick(now){const dt=lastTick?Math.min(.06,(now-lastTick)/1000):0;lastTick=now;if(!state.paused&&!state.suspended&&!document.hidden&&!reduce.matches)motionClock+=dt;
    if(!state.suspended){
      if(state.flow)flows.forEach(f=>{if(f.group.dataset.active==='false')return;f.dots.forEach(d=>{const p=f.path.getPointAtLength(((motionClock*.21+d.offset)%1)*f.length);d.node.setAttribute('cx',p.x);d.node.setAttribute('cy',p.y)})});
    }
    raf=requestAnimationFrame(tick);
  }
  const bridge={setTime,setFlowVisible(value){state.flow=!!value;hero.dataset.flowVisible=String(state.flow)},setMotionPaused(value){state.paused=!!value},setSuspended(value){state.suspended=!!value;if(value)closePopover()},setLanguage(lang){state.lang=lang==='zh'?'zh':'en';syncCopy()},closeHotspots:closePopover,goToZone(zone){focusZone(zone==='commercial'?'business':zone)},getState(){return {...state,ready:true,renderer:'fixed-camera-reference',activeFlowIds:flows.filter(f=>f.group.dataset.active!=='false').map(f=>f.id),traffic:[],vehicleAnimation:false}}};
  window.ANTHRISE_CAMPUS=bridge;
  new ResizeObserver(layout).observe(frame);reduce.addEventListener('change',()=>{state.paused=reduce.matches});
  document.addEventListener('visibilitychange',()=>{lastTick=0});window.addEventListener('pagehide',()=>cancelAnimationFrame(raf),{once:true});
  layout();syncCopy();syncFlows();state.ready=true;raf=requestAnimationFrame(tick);
})();
