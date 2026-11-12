/* A single welded, skinned mesh. No separated raster limbs or pose crossfades. */
(()=>{'use strict';
const clamp=(x,a=0,b=1)=>Math.max(a,Math.min(b,x));
const smooth=(a,b,x)=>{const t=clamp((x-a)/(b-a));return t*t*(3-2*t)};
const R=(x,y,cx,cy,a)=>[cx+(x-cx)*Math.cos(a)-(y-cy)*Math.sin(a),cy+(x-cx)*Math.sin(a)+(y-cy)*Math.cos(a)];
function capsule(x,y,a,b,r){const dx=b[0]-a[0],dy=b[1]-a[1],l=dx*dx+dy*dy,t=clamp(((x-a[0])*dx+(y-a[1])*dy)/l);const d=Math.hypot(x-a[0]-t*dx,y-a[1]-t*dy);return 1-smooth(r*.80,r,d)}
const J={ls:[.454,.494],le:[.367,.560],lw:[.320,.605],lf:[.269,.654],rs:[.641,.489],re:[.731,.549],rw:[.772,.594],rf:[.828,.652],lh:[.490,.660],lk:[.450,.778],la:[.430,.865],rh:[.600,.660],rk:[.605,.778],ra:[.625,.865]};
const channels=['lu','ll','lw','ru','rl','rw','lk','rk','lf','rf','liftL','liftR','head','earL','earR','tail','sway','breath','bounce','blinkL','blinkR','lookX','lookY','brow','smile','joy','thought','talk'];
function neutral(){return Object.fromEntries(channels.map(k=>[k,0]))}
function targets(state,t,age,micro,blink,look=[0,0]){
 const p=neutral(),s=Math.sin,e=smooth(0,.8,age);p.lu=-.08;p.ru=.08;
 p.breath=.0022*(.5+.5*s(t*1.45));p.sway=.009*s(t*.67);p.tail=.028*s(t*1.02-.5);
 p.head=.014*s(t*.82+.6);p.earL=.025*s(t*1.1);p.earR=.019*s(t*.93+.7);
 p.lookX=look[0]*.007;p.lookY=look[1]*.005;p.smile=.24;
 p.blinkL=blink?1:0;p.blinkR=blink?1:0;
 if(state==='wave'){p.joy=e;p.blinkL=Math.max(p.blinkL,smooth(.9,1.05,age)*(1-smooth(1.25,1.5,age))*.95);p.ru=-.32*e;p.rl=(-.32+.05*s(age*4.2))*e;p.rw=.12*s(age*4.2+.6)*e;p.lw=.025*s(age*2);p.head=-.025*e;p.brow=.6*e;p.smile=.8;p.liftR=.004*(.5+.5*s(age*2.4))*e;p.rf=.04*e}
 if(state==='think'){p.thought=.95*e;p.ru=-.10*e;p.rl=-.18*e;p.rw=-.10*e;p.head=-.044*e;p.lookX=-.005*e;p.lookY=-.007*e;p.brow=.85*e;p.earL=-.05*e;p.lk=.025*e;p.lf=-.03*e;p.smile=.12}
 if(state==='service'){p.talk=(.92+.08*s(age*3.1))*e;p.lu=-.09*e;p.ll=.045*e;p.ru=-.15*e;p.rl=-.11*e;p.rw=.08*e;p.head=.025*s(age*2.1)*e;p.brow=.35;p.smile=.65;p.rf=.018*s(age*1.8)*e}
 if(state==='battery'){p.talk=.90*e;p.lu=-.13*e;p.ll=-.04*e;p.ru=-.12*e;p.rl=-.14*e;p.lw=.06*e;p.rw=-.04*e;p.head=.016*e;p.smile=.7;p.brow=.35*e}
 if(state==='happy'){p.joy=e;p.lu=.20*e;p.ll=.24*e;p.ru=-.28*e;p.rl=-.26*e;p.lw=.03*s(age*3)*e;p.rw=-.08*s(age*3)*e;p.lk=.035*(.5+.5*s(age*3))*e;p.rk=.035*(.5-.5*s(age*3))*e;p.liftL=.004*(.5+.5*s(age*3))*e;p.liftR=.004*(.5-.5*s(age*3))*e;p.bounce=.004*(.5+.5*s(age*3))*e;p.smile=1;p.brow=.45;p.blinkL=.70;p.blinkR=.70;p.tail=.045*s(t*1.7);p.earL=.04*e;p.earR=.04*e}
 if(micro==='listen'){p.talk=.18;p.head+=.028*s(age*1.7);p.earR-=.04;p.brow=.4}
 if(micro==='wink'){p.blinkL=.92;p.brow=.45;p.smile=.65;p.joy=.25}
 if(micro==='tail'){p.tail=.045*s(t*1.4);p.lw=.03*s(t*2);p.lk=.018*(.5+.5*s(t*2));p.liftL=.002*(.5+.5*s(t*2))}
 if(micro==='step'){p.lk=.045*(.5+.5*s(t*2.6));p.rk=.045*(.5-.5*s(t*2.6));p.liftL=.005*(.5+.5*s(t*2.6));p.liftR=.005*(.5-.5*s(t*2.6));p.lf=.035*s(t*2.6);p.rf=-.035*s(t*2.6)}
 if(micro==='stretch'){p.lu=-.10;p.ll=.025;p.ru=-.10;p.rl=-.05;p.earL=.045;p.earR=.045;p.head=.018}
 return p;
}
function weights(x,y){const gate=smooth(.435,.49,y)*(1-smooth(.70,.74,y));return {
 lu:capsule(x,y,J.ls,J.lf,.102)*smooth(0,.057,Math.hypot(x-J.ls[0],y-J.ls[1]))*gate,
 ll:capsule(x,y,J.le,J.lf,.090)*smooth(0,.055,Math.hypot(x-J.le[0],y-J.le[1]))*gate,
 lw:capsule(x,y,J.lw,J.lf,.076)*smooth(0,.028,Math.hypot(x-J.lw[0],y-J.lw[1]))*gate,
 ru:capsule(x,y,J.rs,J.rf,.105)*smooth(0,.057,Math.hypot(x-J.rs[0],y-J.rs[1]))*gate,
 rl:capsule(x,y,J.re,J.rf,.092)*smooth(0,.055,Math.hypot(x-J.re[0],y-J.re[1]))*gate,
 rw:capsule(x,y,J.rw,J.rf,.078)*smooth(0,.028,Math.hypot(x-J.rw[0],y-J.rw[1]))*gate,
 left:(1-smooth(.515,.565,x))*smooth(.66,.84,y),right:smooth(.515,.565,x)*smooth(.66,.84,y),
 head:1-smooth(.407,.474,y),earL:(1-smooth(.40,.47,x))*(1-smooth(.19,.27,y)),earR:smooth(.55,.63,x)*(1-smooth(.19,.27,y)),tail:(1-smooth(.30,.43,x))*smooth(.39,.48,y)*(1-smooth(.72,.80,y))
 }}
function deform(x,y,w,p,scale=1){
 let a=x,b=y;const rot=(cx,cy,angle,weight)=>{const q=R(a,b,cx,cy,angle*scale);a+=(q[0]-a)*weight;b+=(q[1]-b)*weight};
 rot(.55,.439,p.head,w.head);rot(.34,.205,p.earL,w.earL);rot(.66,.20,p.earR,w.earR);rot(.414,.669,p.tail,w.tail);
 function arm(side,k){const sh=J[side+'s'],el=J[side+'e'],wr=J[side+'w'];const elbow=R(...el,...sh,p[k+'u']*scale);const wrist0=R(...wr,...sh,p[k+'u']*scale),wrist=R(...wrist0,...elbow,p[k+'l']*scale);rot(...sh,p[k+'u'],w[k+'u']);rot(...elbow,p[k+'l'],w[k+'l']);rot(...wrist,p[k+'w'],w[k+'w'])}
 arm('l','l');arm('r','r');
 rot(...J.lk,p.lk,w.left);rot(...J.rk,p.rk,w.right);rot(...J.la,p.lf,w.left*smooth(.81,.86,y));rot(...J.ra,p.rf,w.right*smooth(.81,.86,y));
 b-=(p.liftL*w.left+p.liftR*w.right)*scale;
 b-=(p.breath*(1-smooth(.49,.94,y))+p.bounce)*scale;
 const q=R(a,b,.55,.93,p.sway*scale);return q;
}
function spring(values,velocity,to,dt){const n=Math.max(1,Math.ceil(dt/(1/120))),h=dt/n;for(let i=0;i<n;i++)for(const k of channels){const v=velocity[k]||0;velocity[k]=v+((k.startsWith('blink')?1000:74)*(to[k]-values[k])-(k.startsWith('blink')?62:18)*v)*h;values[k]+=velocity[k]*h}return values}
function geometry(n=48){const uv=new Float32Array((n+1)*(n+1)*2),ws=[],indices=[];let i=0;for(let y=0;y<=n;y++)for(let x=0;x<=n;x++){uv[i++]=x/n;uv[i++]=y/n;const w=weights(x/n,y/n);w.leftFoot=w.left*smooth(.81,.86,y/n);w.rightFoot=w.right*smooth(.81,.86,y/n);w.breath=1-smooth(.49,.94,y/n);ws.push(w)}for(let y=0;y<n;y++)for(let x=0;x<n;x++){const a=y*(n+1)+x,b=a+1,c=a+n+1,d=c+1;indices.push(a,b,c,b,d,c)}return{uv,ws,indices:new Uint16Array(indices)}}
function positions(mesh,p,scale=1){const z=scale,bones=[];const bone=(pivot,angle,key)=>bones.push({x:pivot[0],y:pivot[1],c:Math.cos(angle*z),s:Math.sin(angle*z),key});bone([.55,.439],p.head,'head');bone([.34,.205],p.earL,'earL');bone([.66,.20],p.earR,'earR');bone([.414,.669],p.tail,'tail');for(const side of ['l','r']){const sh=J[side+'s'],el=R(...J[side+'e'],...sh,p[side+'u']*z),wr0=R(...J[side+'w'],...sh,p[side+'u']*z),wr=R(...wr0,...el,p[side+'l']*z);bone(sh,p[side+'u'],side+'u');bone(el,p[side+'l'],side+'l');bone(wr,p[side+'w'],side+'w')}bone(J.lk,p.lk,'left');bone(J.rk,p.rk,'right');bone(J.la,p.lf,'leftFoot');bone(J.ra,p.rf,'rightFoot');const cs=Math.cos(p.sway*z),sn=Math.sin(p.sway*z);let out=new Float32Array(mesh.uv.length);for(let i=0;i<mesh.ws.length;i++){const w=mesh.ws[i];let x=mesh.uv[i*2],y=mesh.uv[i*2+1];for(const b of bones){const a=w[b.key]||0;if(a===0)continue;const dx=x-b.x,dy=y-b.y;x+=(dx*b.c-dy*b.s-dx)*a;y+=(dx*b.s+dy*b.c-dy)*a}y-=(p.liftL*w.left+p.liftR*w.right+p.breath*w.breath+p.bounce)*z;const dx=x-.55,dy=y-.93;out[i*2]=.55+dx*cs-dy*sn;out[i*2+1]=.93+dx*sn+dy*cs;}return out}
function minArea(pos,idx){let area=Infinity;for(let i=0;i<idx.length;i+=3){const a=idx[i]*2,b=idx[i+1]*2,c=idx[i+2]*2;area=Math.min(area,(pos[b]-pos[a])*(pos[c+1]-pos[a+1])-(pos[b+1]-pos[a+1])*(pos[c]-pos[a]))}return area}
const vertex=`attribute vec2 aPosition;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(aPosition.x*2.0-1.0,1.0-aPosition.y*2.0,0.0,1.0);}`;
const fragment=`precision mediump float;varying vec2 vUV;uniform sampler2D uBase;uniform sampler2D uBlink;uniform vec4 uFace;uniform vec3 uLook;uniform vec3 uEmotion;uniform sampler2D uJoy;uniform sampler2D uThought;uniform sampler2D uTalk;
float eye(vec2 uv,vec2 c,vec2 r){return 1.0-smoothstep(.80,1.08,length((uv-c)/r));}
void main(){vec2 uv=vUV;float l=eye(uv,vec2(.477,.307),vec2(.054,.049)),r=eye(uv,vec2(.620,.302),vec2(.041,.044));float gaze=max(l,r);vec2 sampleUV=uv-vec2(uLook.x,uLook.y)*gaze;
float brow=eye(uv,vec2(.477,.226),vec2(.035,.018))+eye(uv,vec2(.605,.219),vec2(.030,.018));sampleUV.y+=uLook.z*.0035*brow;
float mouth=eye(uv,vec2(.563,.371),vec2(.055,.024));sampleUV.y+=uFace.z*.003*mouth*abs(uv.x-.563)/.055;
vec4 base=texture2D(uBase,sampleUV),closed=texture2D(uBlink,uv);if(base.a<.001){gl_FragColor=vec4(0.0);return;}float mouthPatch=eye(uv,vec2(.563,.385),vec2(.087,.052));float dominant=max(uEmotion.x,max(uEmotion.y,uEmotion.z));float secondary=min(max(uEmotion.x,uEmotion.y),min(max(uEmotion.y,uEmotion.z),max(uEmotion.x,uEmotion.z)));float openness=clamp((dominant-secondary)*1.4,0.0,1.0);if(openness>.01){vec2 mouthUV=sampleUV;mouthUV.y=clamp(.377+(sampleUV.y-.377)/max(.15,openness),.340,.434);vec4 expression;if(uEmotion.x>=uEmotion.y&&uEmotion.x>=uEmotion.z)expression=texture2D(uJoy,mouthUV);else if(uEmotion.y>=uEmotion.z)expression=texture2D(uThought,mouthUV);else expression=texture2D(uTalk,mouthUV);base=mix(base,expression,mouthPatch*smoothstep(.03,.22,openness));}float close=clamp(l*uFace.x+r*uFace.y,0.0,1.0);vec4 c=mix(base,closed,close);
float blush=eye(uv,vec2(.421,.364),vec2(.027,.014))+eye(uv,vec2(.667,.357),vec2(.022,.012));c.rgb=mix(c.rgb,vec3(1.0,.60,.43),blush*uFace.z*.065);gl_FragColor=vec4(c.rgb*c.a,c.a);}`;
class RiseyRig{
 constructor(host,canvas,fallback,options={}){this.host=host;this.canvas=canvas;this.fallback=fallback;this.options=options;this.mesh=geometry();this.current=neutral();this.velocity=neutral();this.time=0;this.age=0;this.state='smile';this.paused=false;this.look=[0,0];this.raf=0;this.ready=false;this.stopped=false;this.frame=this.frame.bind(this);this.onVisibility=this.onVisibility.bind(this);document.addEventListener('visibilitychange',this.onVisibility);canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();this.stop();fallback.hidden=false;canvas.hidden=true});canvas.addEventListener('webglcontextrestored',()=>{this.init().catch(()=>{})});}
 async init(){const gl=this.canvas.getContext('webgl',{alpha:true,antialias:true,premultipliedAlpha:true,powerPreference:'low-power'});if(!gl)throw Error('WebGL unavailable');this.gl=gl;const shader=(type,source)=>{const s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));return s};const program=gl.createProgram();gl.attachShader(program,shader(gl.VERTEX_SHADER,vertex));gl.attachShader(program,shader(gl.FRAGMENT_SHADER,fragment));gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(program));gl.useProgram(program);this.program=program;
 const attrib=(name,data,usage)=>{const b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,data,usage);const loc=gl.getAttribLocation(program,name);gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,2,gl.FLOAT,false,0,0);return b};this.positionBuffer=attrib('aPosition',this.mesh.uv,gl.DYNAMIC_DRAW);attrib('aUV',this.mesh.uv,gl.STATIC_DRAW);const ib=gl.createBuffer();gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,ib);gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,this.mesh.indices,gl.STATIC_DRAW);
 this.textures={};const source=this.options.sources||{};const load=async(name,unit,uniform)=>{const image=new Image();image.src=source[name]||new URL('images/risey-rig/'+name+'.png',document.baseURI).href;await image.decode();if(name==='neutral'){const probe=document.createElement('canvas');probe.width=image.width;probe.height=image.height;const context=probe.getContext('2d');context.drawImage(image,0,0);const rgba=context.getImageData(0,0,image.width,image.height).data,active=[];for(let i=0;i<this.mesh.indices.length;i+=3){const ids=Array.from(this.mesh.indices.slice(i,i+3));const samples=[...ids.map(k=>[this.mesh.uv[k*2],this.mesh.uv[k*2+1]]),[ids.reduce((v,k)=>v+this.mesh.uv[k*2],0)/3,ids.reduce((v,k)=>v+this.mesh.uv[k*2+1],0)/3]];if(samples.some(([u,v])=>rgba[(Math.min(image.height-1,Math.floor(v*image.height))*image.width+Math.min(image.width-1,Math.floor(u*image.width)))*4+3]>48))active.push(...ids)}this.activeIndices=new Uint16Array(active)}const texture=gl.createTexture();this.textures[name]=texture;gl.activeTexture(gl.TEXTURE0+unit);gl.bindTexture(gl.TEXTURE_2D,texture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,image);gl.uniform1i(gl.getUniformLocation(program,uniform),unit)};
 await Promise.all([load('neutral',0,'uBase'),load('blink',1,'uBlink'),load('tail',2,'uTail'),load('joy',3,'uJoy'),load('thought',4,'uThought'),load('talk',5,'uTalk')]);this.uEmotion=gl.getUniformLocation(program,'uEmotion');this.uFace=gl.getUniformLocation(program,'uFace');this.uLook=gl.getUniformLocation(program,'uLook');gl.enable(gl.BLEND);gl.blendFunc(gl.ONE,gl.ONE_MINUS_SRC_ALPHA);this.canvas.width=448;this.canvas.height=448;gl.viewport(0,0,448,448);this.ready=true;this.stopped=false;this.canvas.hidden=false;this.fallback.hidden=true;this.canvas.dataset.renderer='welded-mesh';this.render();this.start();return this;
 }
 setState(state){if(state===this.state)return;this.state=state;this.age=0;if(this.paused||this.reduced){this.current=targets(state,0,1,'',false,[0,0]);this.velocity=neutral();this.render()}this.start()}
 setLook(x,y){this.look=[clamp(x,-1,1),clamp(y,-1,1)]}
 setPaused(paused,reduced=false){this.paused=paused;this.reduced=reduced;if(paused||reduced){this.stop();if(reduced){this.current=targets(this.state,0,1,'',false,[0,0]);this.velocity=neutral()}this.render()}else this.start()}
 onVisibility(){if(document.hidden)this.stop();else this.start()}
 start(){if(!this.ready||this.paused||this.reduced||document.hidden||this.raf)return;this.last=0;this.raf=requestAnimationFrame(this.frame)}
 stop(){if(this.raf)cancelAnimationFrame(this.raf);this.raf=0;this.last=0}
 frame(stamp){this.raf=0;if(this.paused||this.reduced||document.hidden)return;const dt=this.last?clamp((stamp-this.last)/1000,0,.04):1/60;this.last=stamp;this.time+=dt;this.age+=dt;const to=targets(this.state,this.time,this.age,this.host.dataset.micro,this.host.dataset.blink==='true',this.look);spring(this.current,this.velocity,to,dt);this.render();this.raf=requestAnimationFrame(this.frame)}
 render(){if(!this.ready)return;const gl=this.gl,p=this.current;let scale=1,pos=positions(this.mesh,{...p,tail:0});while(minArea(pos,this.activeIndices||this.mesh.indices)<.000025&&scale>.05){scale*=.8;pos=positions(this.mesh,{...p,tail:0},scale)}this.canvas.dataset.safetyScale=scale.toFixed(2);gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);gl.useProgram(this.program);gl.bindBuffer(gl.ARRAY_BUFFER,this.positionBuffer);
 const bind=(unit,texture)=>{gl.activeTexture(gl.TEXTURE0+unit);gl.bindTexture(gl.TEXTURE_2D,texture)};
 const tail=new Float32Array(this.mesh.uv.length),angle=p.tail+p.sway,cs=Math.cos(angle),sn=Math.sin(angle);
 for(let i=0;i<tail.length;i+=2){const x=this.mesh.uv[i]-.414,y=this.mesh.uv[i+1]-.669;tail[i]=.414+x*cs-y*sn;tail[i+1]=.669+x*sn+y*cs-p.breath*.45-p.bounce}
 bind(0,this.textures.tail);bind(1,this.textures.tail);gl.bufferSubData(gl.ARRAY_BUFFER,0,tail);gl.uniform3f(this.uEmotion,0,0,0);gl.uniform4f(this.uFace,0,0,0,0);gl.uniform3f(this.uLook,0,0,0);gl.drawElements(gl.TRIANGLES,this.mesh.indices.length,gl.UNSIGNED_SHORT,0);
 bind(0,this.textures.neutral);bind(1,this.textures.blink);gl.bufferSubData(gl.ARRAY_BUFFER,0,pos);gl.uniform3f(this.uEmotion,p.joy,p.thought,p.talk);gl.uniform4f(this.uFace,p.blinkL,p.blinkR,p.smile,0);gl.uniform3f(this.uLook,p.lookX,p.lookY,p.brow);gl.drawElements(gl.TRIANGLES,this.mesh.indices.length,gl.UNSIGNED_SHORT,0)}
 destroy(){this.stop();document.removeEventListener('visibilitychange',this.onVisibility)}
}
RiseyRig.math={neutral,targets,weights,deform,spring,geometry,positions,minArea};window.AnthriseRiseyRig=RiseyRig;
})();
