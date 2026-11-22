// Product category spheres: tangible image cards, independent idle and drag rotation.
const catalog=window.ATLAS_PRODUCTS||[],reduced=matchMedia('(prefers-reduced-motion: reduce)');
const shell=document.createElement('section');shell.className='product-orbits';shell.id='product-collections';shell.hidden=true;shell.setAttribute('role','dialog');shell.setAttribute('aria-modal','true');shell.setAttribute('aria-label','产品分类');
shell.innerHTML='<header><img src="/assets/brand/anthrise-official.png" alt="Anthrise"><span>探索产品系列</span><button class="orbit-close">返回园区 ×</button></header><div class="orbit-intro"><p>ANTHRISE COLLECTIONS</p><h1>从一款产品，探索更多可能。</h1><span>拖动旋转 · 单击放大 · 双击进入详情</span></div><div class="orbit-triangle"></div><button class="orbit-motion" aria-pressed="false">暂停旋转</button>';
document.body.append(shell);let raf=0,previous=0,paused=reduced.matches,busy=false,lastFocus;
const brand=document.createElement('button');brand.className='orbit-home';brand.setAttribute('aria-label','Anthrise，返回主页');const brandImage=shell.querySelector('header>img');brandImage.replaceWith(brand);brand.append(brandImage);brand.onclick=()=>{close();history.replaceState(null,'',location.pathname);window.scrollTo({top:0,behavior:'smooth'})};
const info=document.createElement('aside');info.className='orbit-product-info';info.hidden=true;info.innerHTML='<strong></strong><button>了解产品详情</button>';shell.append(info);let hovered=null,hideInfo;
function reveal(p,card){clearTimeout(hideInfo);hovered={p,card};info.hidden=false;info.querySelector('strong').textContent=p.zh;info.querySelector('button').onclick=()=>enter(p,card)}
info.onpointerenter=()=>{clearTimeout(hideInfo);const state=states.find(s=>s.globe.contains(hovered?.card));if(state)state.hover=true};info.onpointerleave=()=>{const state=states.find(s=>s.globe.contains(hovered?.card));if(state)state.hover=false};
const groups=[['storage','储能系统系列',p=>['storage','portable'].includes(p.category)],['solar','光伏与混合逆变器',p=>['solar','inverter'].includes(p.category)],['lighting','太阳能照明系列',p=>p.category==='lighting']];
const states=[];let activeCategory=0,clickTimer=0,selected=null;
const preview=document.createElement('div');preview.className='orbit-preview';preview.hidden=true;preview.setAttribute('role','dialog');preview.setAttribute('aria-modal','true');preview.setAttribute('aria-label','产品大图预览');
preview.innerHTML='<div class="orbit-preview-panel"><button class="orbit-preview-close" aria-label="关闭大图预览">×</button><img draggable="false" alt=""><h2></h2><p>双击图片或点击按钮进入详情</p><button class="orbit-preview-enter">进入详情 →</button></div>';shell.append(preview);
function dismissPreview(restore=true){clearTimeout(clickTimer);preview.hidden=true;const old=selected;selected=null;if(restore)old?.card.focus({preventScroll:true})}
function enlarge(p,card){selected={p,card};info.hidden=true;preview.querySelector('img').src='/'+p.image;preview.querySelector('img').alt=p.zh;preview.querySelector('h2').textContent=p.zh;preview.hidden=false;preview.querySelector('.orbit-preview-enter').focus({preventScroll:true})}
preview.querySelector('.orbit-preview-close').onclick=()=>dismissPreview();preview.onclick=e=>{if(e.target===preview)dismissPreview()};
preview.querySelector('img').ondblclick=()=>{if(selected)enter(selected.p)};
preview.querySelector('.orbit-preview-enter').onclick=()=>{if(selected)enter(selected.p)};
const nav=document.createElement('nav');nav.className='orbit-category-nav';nav.setAttribute('aria-label','切换产品类别');nav.innerHTML='<button class="orbit-category-prev" aria-label="上一个产品类别">‹</button><button class="orbit-category-next" aria-label="下一个产品类别">›</button>';shell.querySelector('.orbit-triangle').append(nav);
const position=document.createElement('p');position.className='orbit-position';position.setAttribute('aria-live','polite');shell.append(position);
function chooseCategory(index){dismissPreview(false);info.hidden=true;activeCategory=(index+states.length)%states.length;states.forEach((s,i)=>{s.stage.parentElement.hidden=i!==activeCategory;s.hover=false;s.drag=null});position.textContent=String(activeCategory+1).padStart(2,'0')+' / 03';nav.querySelector('.orbit-category-prev').title=groups[(activeCategory+2)%3][1];nav.querySelector('.orbit-category-next').title=groups[(activeCategory+1)%3][1]}
nav.querySelector('.orbit-category-prev').onclick=()=>chooseCategory(activeCategory-1);nav.querySelector('.orbit-category-next').onclick=()=>chooseCategory(activeCategory+1);
for(const [key,name,test] of groups){
 const items=catalog.filter(test),section=document.createElement('section');section.className='orbit-category orbit-'+key;
 const stage=document.createElement('div');stage.className='orbit-space';stage.setAttribute('aria-label',name+'，拖动旋转');stage.tabIndex=0;const globe=document.createElement('div');globe.className='orbit-globe';stage.append(globe);section.append(stage);
 const label=document.createElement('h2');label.textContent=name;section.append(label);const count=document.createElement('p');count.textContent=items.length+' 款产品';section.append(count);shell.querySelector('.orbit-triangle').append(section);
 const state={stage,globe,yaw:0,pitch:-.1,hover:false,drag:null,moved:false,items};states.push(state);
 items.forEach((p,i)=>{const y=1-2*(i+.5)/items.length,lat=Math.asin(y),theta=i*Math.PI*(3-Math.sqrt(5));const card=document.createElement('button');card.className='orbit-card';card.dataset.id=p.id;card.setAttribute('aria-label',p.zh);card.title=p.zh;const img=document.createElement('img');img.src='/'+p.image;img.alt=p.zh;img.draggable=false;card.append(img);globe.append(card);card.dataset.theta=theta;card.dataset.lat=lat;card.onclick=e=>{e.stopPropagation();if(state.moved){state.moved=false;return}clearTimeout(clickTimer);if(e.detail>1)return;clickTimer=setTimeout(()=>enlarge(p,card),300)};card.ondblclick=e=>{e.stopPropagation();clearTimeout(clickTimer);if(!state.moved)enter(p)};});
 globe.querySelectorAll('.orbit-card').forEach(card=>{
  const p=items.find(p=>p.id===card.dataset.id),image=card.querySelector('img');image.classList.add('orbit-source');
  const patches=[];for(let row=0;row<3;row++)for(let col=0;col<8;col++){const patch=document.createElement('span');patch.className='orbit-patch';patch.dataset.col=col;patch.dataset.row=row;card.append(patch);patches.push(patch)}
  const texture=()=>{const canvas=document.createElement('canvas');canvas.width=384;canvas.height=288;const c=canvas.getContext('2d');c.clearRect(0,0,384,288);const scale=Math.min(350/image.naturalWidth,258/image.naturalHeight);c.drawImage(image,(384-image.naturalWidth*scale)/2,(288-image.naturalHeight*scale)/2,image.naturalWidth*scale,image.naturalHeight*scale);const url=canvas.toDataURL();patches.forEach(s=>s.style.backgroundImage=`url(${url})`)};
  if(image.complete&&image.naturalWidth)texture();else image.addEventListener('load',texture,{once:true});
  card.onpointerenter=()=>reveal(p,card);card.onfocus=()=>reveal(p,card);
 });
 function layout(){const r=stage.clientWidth*.40;globe.querySelectorAll('.orbit-card').forEach(card=>{const t=+card.dataset.theta,l=+card.dataset.lat;card.style.transform=`translate3d(${r*Math.cos(l)*Math.sin(t)}px,${-r*Math.sin(l)}px,${r*Math.cos(l)*Math.cos(t)}px) rotateY(${t}rad) rotateX(${l}rad)`;const w=card.clientWidth,h=card.clientHeight;card.querySelectorAll('.orbit-patch').forEach(patch=>{const col=+patch.dataset.col,row=+patch.dataset.row,x=(col+.5)*w/8-w/2,y=(row+.5)*h/3-h/2,z=Math.sqrt(Math.max(0,r*r-x*x-y*y))-r;Object.assign(patch.style,{width:w/8+.65+'px',height:h/3+.65+'px',left:w/2+'px',top:h/2+'px',marginLeft:-w/16+'px',marginTop:-h/6+'px',backgroundSize:w+'px '+h+'px',backgroundPosition:(-col*w/8)+'px '+(-row*h/3)+'px',transform:`translate3d(${x}px,${y}px,${z}px) rotateY(${Math.asin(x/r)}rad) rotateX(${-Math.asin(y/r)}rad)`})})})}
 new ResizeObserver(layout).observe(stage);
 stage.addEventListener('pointerenter',()=>state.hover=true);stage.addEventListener('pointerleave',()=>state.hover=false);
 stage.addEventListener('pointerdown',e=>{state.drag={id:e.pointerId,x:e.clientX,y:e.clientY};state.moved=false});
 stage.addEventListener('pointermove',e=>{if(!state.drag)return;const dx=e.clientX-state.drag.x,dy=e.clientY-state.drag.y;if(Math.hypot(dx,dy)>3){state.moved=true;stage.setPointerCapture(e.pointerId);state.yaw+=dx*.008;state.pitch=Math.max(-.7,Math.min(.7,state.pitch-dy*.005));state.drag={id:e.pointerId,x:e.clientX,y:e.clientY};paint(state)}});
 for(const event of ['pointerup','pointercancel'])stage.addEventListener(event,()=>state.drag=null);
 stage.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();state.yaw+=(e.key==='ArrowRight'?1:-1)*.2;paint(state)}});
}
chooseCategory(0);
function paint(s){s.globe.style.transform=`rotateX(${s.pitch}rad) rotateY(${s.yaw}rad)`}
function tick(t){raf=0;if(shell.hidden)return;const dt=Math.min((t-previous)/1000,.04);previous=t;for(const s of states){if(s===states[activeCategory]&&preview.hidden&&!paused&&!reduced.matches&&!s.hover&&!s.drag)s.yaw+=dt*.12;paint(s)}raf=requestAnimationFrame(tick)}
function close(){dismissPreview(false);shell.hidden=true;info.hidden=true;document.body.classList.remove('orbits-open');cancelAnimationFrame(raf);raf=0;window.ANTHRISE_CAMPUS?.setSuspended(false);lastFocus?.focus?.({preventScroll:true})}
window.__anthriseOpenProductOrbits=()=>{lastFocus=document.activeElement;shell.hidden=false;document.body.classList.add('orbits-open');window.ANTHRISE_CAMPUS?.setSuspended(true);previous=performance.now();if(!raf)raf=requestAnimationFrame(tick);shell.querySelector('.orbit-close').focus({preventScroll:true})};
function enter(p){
 if(busy)return;busy=true;dismissPreview(false);info.hidden=true;shell.hidden=true;document.body.classList.remove('orbits-open');cancelAnimationFrame(raf);raf=0;
 window.__anthriseOpenAtlasProduct(p.id);busy=false;
}
shell.querySelector('.orbit-close').onclick=close;shell.querySelector('.orbit-motion').onclick=e=>{paused=!paused;e.currentTarget.textContent=paused?'恢复旋转':'暂停旋转';e.currentTarget.setAttribute('aria-pressed',String(paused))};
shell.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();e.stopPropagation();if(!preview.hidden)dismissPreview();else close()}if(e.key==='Tab'){const nodes=[...(preview.hidden?shell:preview).querySelectorAll('button,[tabindex="0"]')].filter(n=>n.getClientRects().length),first=nodes[0],last=nodes.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
window.ORBIT_PREVIEW={open:window.__anthriseOpenProductOrbits,getState:()=>({visible:!shell.hidden,busy,paused,activeCategory,previewProduct:selected?.p.id||null,counts:states.map(s=>s.items.length),angles:states.map(s=>s.yaw)})};
