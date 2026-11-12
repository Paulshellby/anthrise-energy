/* Coordinated gesture score: every keyframe includes face, hands and stance.
 * Foot-contact correction keeps the support foot in place during a weight shift.
 */
(()=>{'use strict';
const keys=['lu','ll','lw','ru','rl','rw','lk','rk','lf','rf','liftL','liftR','footXL','footXR','head','earL','earR','tail','sway','breath','bounce','blinkL','blinkR','lookX','lookY','brow','browL','browR','smile','joy','thought','talk'];
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
const ease=v=>{const x=clamp(v);return x*x*x*(x*(x*6-15)+10)};
const rest=()=>Object.assign(Object.fromEntries(keys.map(k=>[k,0])),{lu:-.08,ru:.08,smile:.24});
const rot=(p,c,a)=>[c[0]+(p[0]-c[0])*Math.cos(a)-(p[1]-c[1])*Math.sin(a),c[1]+(p[0]-c[0])*Math.sin(a)+(p[1]-c[1])*Math.cos(a)];
const pulse=(t,start,width=.22)=>ease((t-start)/.055)*(1-ease((t-start-width+.07)/.07));
function name(state,kind='',micro=''){
 if(state==='smile')return micro?('idle-'+micro):'idle';
 if(state==='wave')return kind==='nearby'?'acknowledge':kind==='close'?'farewell':'welcome';
 if(state==='battery')return kind==='catalog'?'point':'present';
 if(state==='think')return kind==='search'?'search':'calculate';
 if(state==='service')return kind==='listening'?'listen':'receive';
 if(state==='happy')return kind==='selection'?'approve':'celebrate';
 return 'idle';
}
const cache=new Map();
function score(clip,variant=0){
 const id=clip+':'+variant;if(cache.has(id))return cache.get(id);
 const left=variant%2===1;
 const wave=left?{lu:.22,ll:.20,lw:.34,ru:.04,head:-.012,sway:.012}:{ru:-.30,rl:-.28,rw:-.40,lu:-.04,head:.012,sway:-.012};
 const waveBack=left?{lw:.10}:{rw:-.12};
 const planted={lk:.024,rk:-.024,bounce:-.0025};
 let f;
 switch(clip){
 case 'welcome':f=[[0,{}],[.10,{...planted,joy:.35,browL:.5,browR:.35,smile:.55}],[.25,{...wave,bounce:0,joy:1,smile:.9,earL:.035,earR:.035}],[.39,waveBack],[.50,left?{lw:.34}:{rw:-.40}],[.62,waveBack],[.76,{...wave,joy:.75}],[.90,{reset:true,head:.012,smile:.45}],[1,{reset:true}]];break;
 case 'acknowledge':case 'farewell':f=[[0,{}],[.17,{...wave,joy:.65,smile:.65}],[.35,waveBack],[.54,{...wave}],[.76,{reset:true,head:.018,smile:.4}],[1,{reset:true}]];break;
 case 'present':f=[[0,{}],[.14,{head:-.02,lookX:-.005,browL:.45,browR:.3,smile:.55,lk:.02,rk:-.02}],[.31,{lu:.12,ll:.12,lw:.10,ru:-.13,rl:-.10,rw:-.13,sway:.01,talk:.60,smile:.7}],[.48,{lu:.18,ll:.14,lw:.16,head:.02,talk:.22}],[.64,{lu:.12,ll:.10,lw:.08,head:-.01,talk:.58}],[.80,{head:.012,talk:.12}],[1,{reset:true}]];break;
 case 'point':f=[[0,{}],[.22,{lu:.12,ll:.12,lw:.15,head:-.025,lookX:-.006,browL:.45,browR:.2,smile:.6,sway:.008}],[.46,{lw:.05,head:.015}],[.68,{lu:.05,ll:.04,lw:.07,smile:.4}],[1,{reset:true}]];break;
 case 'calculate':f=[[0,{}],[.15,{thought:.8,head:-.025,browL:.9,browR:.2,lookY:-.006,ru:-.10,rl:-.12,rw:-.10}],[.32,{thought:1,head:-.045,ru:-.14,rl:-.22,rw:-.22,sway:.009,lk:.025,rk:-.045,liftR:.004,rf:-.045}],[.48,{liftR:0,rf:0,head:-.035,lookY:-.003}],[.63,{liftR:.004,rf:-.04,head:-.025}],[.77,{liftR:0,rf:0,head:.022,thought:.3,joy:.30,smile:.55}],[1,{reset:true}]];break;
 case 'search':f=[[0,{}],[.20,{thought:.75,browL:.8,browR:.15,lookX:-.005,head:-.025,lu:.025,ll:.04,ru:-.06,rl:-.06}],[.43,{lookX:.004,head:.025,earL:-.035,earR:.03}],[.64,{lookX:-.002,head:-.01,thought:.45}],[.82,{head:.018,thought:.1,smile:.5}],[1,{reset:true}]];break;
 case 'receive':f=[[0,{}],[.14,{...planted,browL:.4,browR:.4,smile:.6,head:.018}],[.30,{lu:.05,ll:.07,lw:.08,ru:-.18,rl:-.14,rw:-.12,bounce:0,head:.025,talk:.60}],[.43,{head:-.012,talk:.18}],[.55,{head:.018,talk:.55}],[.70,{head:0,talk:.05,ru:-.08,rl:-.04,rw:0,lu:-.04,ll:.02}],[.85,{head:.015,smile:.5}],[1,{reset:true}]];break;
 case 'listen':f=[[0,{}],[.17,{head:.018,browL:.3,browR:.3,ru:-.07,rl:-.04,lu:-.04,smile:.55}],[.34,{head:-.015,earL:-.025,earR:.025,lookY:-.001}],[.52,{head:.022,smile:.6}],[.73,{head:-.008}],[1,{reset:true,smile:.4}]];break;
 case 'approve':f=[[0,{}],[.16,{joy:.7,head:.02,browL:.4,browR:.4,ru:-.16,rl:-.16,rw:-.15,lu:.05,ll:.06,lk:.025,rk:-.025,bounce:-.002}],[.34,{joy:1,head:-.015,ru:-.24,rl:-.20,rw:-.22,bounce:0}],[.53,{head:.025,ru:-.16,rl:-.12,rw:-.12,smile:.9}],[.74,{head:0,joy:.5}],[1,{reset:true}]];break;
 case 'celebrate':f=[[0,{}],[.14,{...planted,bounce:-.004,joy:.45,head:.014}],[.31,{lu:.20,ll:.24,lw:.20,ru:-.28,rl:-.26,rw:-.28,lk:.018,rk:-.018,bounce:.009,joy:1,smile:1,earL:.045,earR:.045}],[.47,{bounce:0,lk:.03,rk:-.03,head:.02}],[.58,{bounce:-.002,head:-.012,lu:.12,ll:.12,ru:-.18,rl:-.15}],[.74,{bounce:0,joy:.7,head:.012}],[1,{reset:true}]];break;
 case 'idle-listen':f=[[0,{}],[.25,{head:-.018,browL:.25,browR:.25,smile:.45}],[.55,{head:.018,earR:.03}],[1,{reset:true}]];break;
 case 'idle-wink':f=[[0,{}],[.24,{head:.02,smile:.7,joy:.40,rw:-.07,ru:-.03}],[.60,{head:-.008,joy:.15}],[1,{reset:true}]];break;
 case 'idle-step':f=[[0,{}],[.20,{liftL:.007,lk:.06,lf:.045,lu:-.04,ru:.04,sway:-.008,head:.01,smile:.4}],[.38,{liftL:0,lk:0,lf:0,sway:0}],[.60,{liftR:.007,rk:-.06,rf:-.045,lu:-.06,ru:.02,sway:.008,head:-.01}],[.80,{liftR:0,rk:0,rf:0,sway:0}],[1,{reset:true}]];break;
 case 'idle-stretch':f=[[0,{}],[.23,{bounce:-.003,lk:.025,rk:-.025,head:.01}],[.48,{lu:.10,ll:.08,lw:.12,ru:-.12,rl:-.10,rw:-.12,bounce:0,head:-.015,earL:.035,earR:.035,smile:.55}],[.72,{lu:.03,ll:.03,ru:-.04,rl:-.03,head:.012}],[1,{reset:true}]];break;
 case 'idle-tail':f=[[0,{}],[.25,{tail:.05,head:.012,lw:.035,smile:.45}],[.54,{tail:-.035,head:-.008,lw:-.015}],[.78,{tail:.02}],[1,{reset:true}]];break;
 default:f=[[0,{}],[1,{}]];
 }
 if(left&&['calculate','receive','listen','approve','search'].includes(clip)){const source=f;let value=rest();f=source.map(([at,change])=>{value=Object.assign(change.reset?rest():{...value},change);const mirrored={...value,lu:-value.ru,ll:-value.rl,lw:-value.rw,ru:-value.lu,rl:-value.ll,rw:-value.lw,lk:-value.rk,rk:-value.lk,lf:-value.rf,rf:-value.lf,liftL:value.liftR,liftR:value.liftL,head:-value.head,sway:-value.sway,browL:value.browR,browR:value.browL,earL:value.earR,earR:value.earL};delete mirrored.reset;return[at,mirrored]})}
 let v=rest();const result=f.map(([at,values])=>{v=Object.assign(values.reset?rest():{...v},values);delete v.reset;return{at,value:v}});cache.set(id,result);return result;
}
function contact(p,side,raise){
 const left=side==='L',sole=left?[.430,.932]:[.625,.932],knee=left?[.450,.778]:[.605,.778],ankle=left?[.430,.865]:[.625,.865];
 const foot=rot(rot(sole,knee,left?p.lk:p.rk),ankle,left?p.lf:p.rf);
 const desired=rot([sole[0],sole[1]-raise],[.55,.93],-p.sway);
 p[left?'footXL':'footXR']=desired[0]-foot[0];p[left?'liftL':'liftR']=foot[1]-p.bounce-desired[1];
}
function sample(state,t,age,micro,blink,look=[0,0],options={}){
 const clip=name(state,options.kind,micro),variant=options.variant||0,duration=micro?(options.microDuration||2.8):(options.duration||({wave:5.6,service:6.2,happy:4.2}[state]||5.2));
 const local=micro?(options.microAge||0):age,u=clamp(local/Math.max(.5,duration)),frames=score(clip,variant);
 let a=frames[0],b=frames[frames.length-1];for(let i=1;i<frames.length;i++)if(u<=frames[i].at){a=frames[i-1];b=frames[i];break}
 const p=rest(),mix=ease((u-a.at)/Math.max(.001,b.at-a.at));for(const k of keys)p[k]=a.value[k]+(b.value[k]-a.value[k])*mix;
 p.breath=.0016*(.5+.5*Math.sin(t*1.35));p.tail+=.011*Math.sin(t*.9-.35)-p.sway*.25;
 if(clip==='idle'){p.head=.006*Math.sin(t*.65);p.smile=.28;p.browL=.08;p.browR=.08}
 if(clip==='welcome'||clip==='acknowledge')p.blinkL=Math.max(p.blinkL,pulse(local,duration*.49));
 if(clip==='celebrate'||clip==='approve'){const close=pulse(local,duration*.34,.25);p.blinkL=Math.max(p.blinkL,close);p.blinkR=Math.max(p.blinkR,close)}
 if(clip==='idle-wink')p.blinkL=Math.max(p.blinkL,pulse(local,.8,.25));
 if(blink){p.blinkL=1;p.blinkR=1}
 if(!['calculate','search','welcome','acknowledge','farewell','receive','listen','approve','celebrate'].includes(clip)){p.lookX+=clamp(look[0],-1,1)*.006;p.lookY+=clamp(look[1],-1,1)*.004}
 const hop=Math.max(0,p.bounce);contact(p,'L',p.liftL+hop);contact(p,'R',p.liftR+hop);
 return p;
}
window.AnthriseRiseyMotion={sample,name,score,keys};
})();
