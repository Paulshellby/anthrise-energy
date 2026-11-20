var ta="187";var ch=0,Bl=1,hh=2;var Ir=1,na=2,ws=3,Mi=0,Wt=1,on=2,Hi=0,As=1,Hl=2,zl=3,kl=4,uh=5;var zi=100,dh=101,fh=102,ph=103,mh=104,gh=200,xh=201,_h=202,vh=203,Gl=204,Vl=205,yh=206,Mh=207,Eh=208,Sh=209,bh=210,Th=211,wh=212,Ah=213,Rh=214,bo=0,To=1,wo=2,us=3,Ao=4,Ro=5,Co=6,Po=7,ia=0,Ch=1,Ph=2,Wn=0,Wl=1,Xl=2,ql=3,Lr=4,Yl=5,Zl=6,Jl=7;var $l=300,ki=301,Rs=302,sa=303,ra=304,Pi=1e3,Hn=1001,Io=1002,Jt=1003,Ih=1004;var Dr=1005;var rn=1006,oa=1007;var si=1008;var ln=1009,Kl=1010,Ql=1011,Cs=1012,aa=1013,Dn=1014,bn=1015,Nn=1016,la=1017,ca=1018,Gi=1020,jl=35902,ec=35899,tc=1021,nc=1022,Un=1023,ei=1026,ri=1027,ha=1028,ua=1029,Ei=1030,da=1031;var fa=1033,Nr=33776,Ur=33777,Fr=33778,Or=33779,pa=35840,ma=35841,ga=35842,xa=35843,_a=36196,va=37492,ya=37496,Ma=37488,Ea=37489,Br=37490,Sa=37491,ba=37808,Ta=37809,wa=37810,Aa=37811,Ra=37812,Ca=37813,Pa=37814,Ia=37815,La=37816,Da=37817,Na=37818,Ua=37819,Fa=37820,Oa=37821,Ba=36492,Ha=36494,za=36495,ka=36283,Ga=36284,Hr=36285,Va=36286;var js=2300,Lo=2301,Mo=2302,wl=2303,Al=2400,Rl=2401,Cl=2402;var Lh=3200;var zr=0,Dh=1,oi="",It="srgb",er="srgb-linear",tr="linear",St="srgb";var Eo=7680;var Nh=519,Uh=512,Fh=513,Oh=514,ic=515,Bh=516,Hh=517,sc=518,rc=519,zh=35044,oc=35048;var ac="300 es",xn=2e3,ds=2001;function Ku(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function fs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kh(){let i=fs("canvas");return i.style.display="block",i}var Pc={},ps=null;function lc(...i){let e="THREE."+i.shift();ps?ps("log",e,...i):console.log(e,...i)}function Gh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function je(...i){i=Gh(i);let e="THREE."+i.shift();if(ps)ps("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function nt(...i){i=Gh(i);let e="THREE."+i.shift();if(ps)ps("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ci(...i){let e=i.join(" ");e in Pc||(Pc[e]=!0,je(...i))}function Vh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Wh={[bo]:bo,[wo]:Co,[Ao]:Ao,[us]:Ro,[To]:To,[Co]:wo,[Po]:Po,[Ro]:us},kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ic=1234567,Js=Math.PI/180,Ii=180/Math.PI;function Vi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function ct(i,e,t){return Math.max(e,Math.min(t,i))}function cc(i,e){return(i%e+e)%e}function ju(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ed(i,e,t){return i!==e?(t-i)/(e-i):0}function $s(i,e,t){return(1-t)*i+t*e}function td(i,e,t,n){return $s(i,e,1-Math.exp(-t*n))}function nd(i,e=1){return e-Math.abs(cc(i,e*2)-e)}function id(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function sd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function rd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function od(i,e){return i+Math.random()*(e-i)}function ad(i){return i*(.5-Math.random())}function ld(i){i!==void 0&&(Ic=i);let e=Ic+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cd(i){return i*Js}function hd(i){return i*Ii}function ud(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function dd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fd(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),u=o((e-n)/2),d=r((n-e)/2),x=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*f,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*x,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*x,a*c);break;case"ZYZ":i.set(l*x,l*d,a*h,a*c);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function uc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Xh(i,e){if(e.constructor===Float32Array)return i;let t=uc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function qh(i,e){if(e.constructor===Float32Array)return i;let t=uc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var vt={DEG2RAD:Js,RAD2DEG:Ii,generateUUID:Vi,clamp:ct,euclideanModulo:cc,mapLinear:ju,inverseLerp:ed,lerp:$s,damp:td,pingpong:nd,smoothstep:id,smootherstep:sd,randInt:rd,randFloat:od,randFloatSpread:ad,seededRandom:ld,degToRad:cd,radToDeg:hd,isPowerOfTwo:ud,ceilPowerOfTwo:dd,floorPowerOfTwo:hc,setQuaternionFromProperEuler:fd,normalize:qh,denormalize:Xh},we=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_n=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[o+0],d=r[o+1],x=r[o+2],y=r[o+3];if(f!==y||l!==u||c!==d||h!==x){let p=l*u+c*d+h*x+f*y;p<0&&(u=-u,d=-d,x=-x,y=-y,p=-p);let m=1-a;if(p<.9995){let _=Math.acos(p),v=Math.sin(_);m=Math.sin(m*_)/v,a=Math.sin(a*_)/v,l=l*m+u*a,c=c*m+d*a,h=h*m+x*a,f=f*m+y*a}else{l=l*m+u*a,c=c*m+d*a,h=h*m+x*a,f=f*m+y*a;let _=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=_,c*=_,h*=_,f*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],u=r[o+1],d=r[o+2],x=r[o+3];return e[t]=a*x+h*f+l*d-c*u,e[t+1]=l*x+h*u+c*f-a*d,e[t+2]=c*x+h*d+a*u-l*f,e[t+3]=h*x-a*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),u=l(n/2),d=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f-u*d*x;break;case"YXZ":this._x=u*h*f+c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f+u*d*x;break;case"ZXY":this._x=u*h*f-c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f-u*d*x;break;case"ZYX":this._x=u*h*f-c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f+u*d*x;break;case"YZX":this._x=u*h*f+c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f-u*d*x;break;case"XZY":this._x=u*h*f-c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f+u*d*x;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return il.copy(this).projectOnVector(e),this.sub(il)}reflect(e){return this.sub(il.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},il=new I,Lc=new _n,st=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],x=n[8],y=s[0],p=s[3],m=s[6],_=s[1],v=s[4],M=s[7],w=s[2],T=s[5],g=s[8];return r[0]=o*y+a*_+l*w,r[3]=o*p+a*v+l*T,r[6]=o*m+a*M+l*g,r[1]=c*y+h*_+f*w,r[4]=c*p+h*v+f*T,r[7]=c*m+h*M+f*g,r[2]=u*y+d*_+x*w,r[5]=u*p+d*v+x*T,r[8]=u*m+d*M+x*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,x=t*f+n*u+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return e[0]=f*y,e[1]=(s*c-h*n)*y,e[2]=(a*n-s*o)*y,e[3]=u*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=d*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ci("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sl.makeScale(e,t)),this}rotate(e){return Ci("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sl.makeRotation(-e)),this}translate(e,t){return Ci("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},sl=new st,Dc=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nc=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pd(){let i={enabled:!0,workingColorSpace:er,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===St&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(s.r=hs(s.r),s.g=hs(s.g),s.b=hs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?tr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[er]:{primaries:e,whitePoint:n,transfer:tr,toXYZ:Dc,fromXYZ:Nc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:St,toXYZ:Dc,fromXYZ:Nc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),i}var xt=pd();function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ji,Do=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ji===void 0&&(Ji=fs("canvas")),Ji.width=e.width,Ji.height=e.height;let s=Ji.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ji}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=fs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=jn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jn(t[n]/255)*255):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},md=0,ms=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(rl(s[o].image)):r.push(rl(s[o]))}else r=rl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function rl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Do.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}var gd=0,ol=new I,nn=class i extends kn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Hn,s=Hn,r=rn,o=si,a=Un,l=ln,c=i.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Vi(),this.name="",this.source=new ms(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ol).x}get height(){return this.source.getSize(ol).y}get depth(){return this.source.getSize(ol).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$l)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pi:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case Io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pi:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case Io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=$l;nn.DEFAULT_ANISOTROPY=1;var Lt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],x=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(x+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,M=(d+1)/2,w=(m+1)/2,T=(h+u)/4,g=(f+y)/4,E=(x+p)/4;return v>M&&v>w?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=T/n,r=g/n):M>w?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=E/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=g/r,s=E/r),this.set(n,s,r,t),this}let _=Math.sqrt((p-x)*(p-x)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(p-x)/_,this.y=(f-y)/_,this.z=(u-h)/_,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},No=class extends kn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new nn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ms(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},un=class extends No{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},nr=class extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Uo=class extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Tt=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,l,c,h,f,u,d,x,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,f,u,d,x,y,p)}set(e,t,n,s,r,o,a,l,c,h,f,u,d,x,y,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=x,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/$i.setFromMatrixColumn(e,0).length(),r=1/$i.setFromMatrixColumn(e,1).length(),o=1/$i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=o*h,d=o*f,x=a*h,y=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+x*c,t[5]=u-y*c,t[9]=-a*l,t[2]=y-u*c,t[6]=x+d*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,x=c*h,y=c*f;t[0]=u+y*a,t[4]=x*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=d*a-x,t[6]=y+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,x=c*h,y=c*f;t[0]=u-y*a,t[4]=-o*f,t[8]=x+d*a,t[1]=d+x*a,t[5]=o*h,t[9]=y-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,d=o*f,x=a*h,y=a*f;t[0]=l*h,t[4]=x*c-d,t[8]=u*c+y,t[1]=l*f,t[5]=y*c+u,t[9]=d*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,d=o*c,x=a*l,y=a*c;t[0]=l*h,t[4]=y-u*f,t[8]=x*f+d,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*f+x,t[10]=u-y*f}else if(e.order==="XZY"){let u=o*l,d=o*c,x=a*l,y=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+y,t[5]=o*h,t[9]=d*f-x,t[2]=x*f-d,t[6]=a*h,t[10]=y*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xd,e,_d)}lookAt(e,t,n){let s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),li.crossVectors(n,cn),li.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),li.crossVectors(n,cn)),li.normalize(),Kr.crossVectors(cn,li),s[0]=li.x,s[4]=Kr.x,s[8]=cn.x,s[1]=li.y,s[5]=Kr.y,s[9]=cn.y,s[2]=li.z,s[6]=Kr.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],x=n[2],y=n[6],p=n[10],m=n[14],_=n[3],v=n[7],M=n[11],w=n[15],T=s[0],g=s[4],E=s[8],L=s[12],R=s[1],N=s[5],A=s[9],D=s[13],C=s[2],B=s[6],H=s[10],k=s[14],re=s[3],X=s[7],Z=s[11],le=s[15];return r[0]=o*T+a*R+l*C+c*re,r[4]=o*g+a*N+l*B+c*X,r[8]=o*E+a*A+l*H+c*Z,r[12]=o*L+a*D+l*k+c*le,r[1]=h*T+f*R+u*C+d*re,r[5]=h*g+f*N+u*B+d*X,r[9]=h*E+f*A+u*H+d*Z,r[13]=h*L+f*D+u*k+d*le,r[2]=x*T+y*R+p*C+m*re,r[6]=x*g+y*N+p*B+m*X,r[10]=x*E+y*A+p*H+m*Z,r[14]=x*L+y*D+p*k+m*le,r[3]=_*T+v*R+M*C+w*re,r[7]=_*g+v*N+M*B+w*X,r[11]=_*E+v*A+M*H+w*Z,r[15]=_*L+v*D+M*k+w*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],x=e[3],y=e[7],p=e[11],m=e[15],_=l*d-c*u,v=a*d-c*f,M=a*u-l*f,w=o*d-c*h,T=o*u-l*h,g=o*f-a*h;return t*(y*_-p*v+m*M)-n*(x*_-p*w+m*T)+s*(x*v-y*w+m*g)-r*(x*M-y*T+p*g)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],x=e[12],y=e[13],p=e[14],m=e[15],_=t*a-n*o,v=t*l-s*o,M=t*c-r*o,w=n*l-s*a,T=n*c-r*a,g=s*c-r*l,E=h*y-f*x,L=h*p-u*x,R=h*m-d*x,N=f*p-u*y,A=f*m-d*y,D=u*m-d*p,C=_*D-v*A+M*N+w*R-T*L+g*E;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/C;return e[0]=(a*D-l*A+c*N)*B,e[1]=(s*A-n*D-r*N)*B,e[2]=(y*g-p*T+m*w)*B,e[3]=(u*T-f*g-d*w)*B,e[4]=(l*R-o*D-c*L)*B,e[5]=(t*D-s*R+r*L)*B,e[6]=(p*M-x*g-m*v)*B,e[7]=(h*g-u*M+d*v)*B,e[8]=(o*A-a*R+c*E)*B,e[9]=(n*R-t*A-r*E)*B,e[10]=(x*T-y*M+m*_)*B,e[11]=(f*M-h*T-d*_)*B,e[12]=(a*L-o*N-l*E)*B,e[13]=(t*N-n*L+s*E)*B,e[14]=(y*v-x*w-p*_)*B,e[15]=(h*w-f*v+u*_)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,x=r*f,y=o*h,p=o*f,m=a*f,_=l*c,v=l*h,M=l*f,w=n.x,T=n.y,g=n.z;return s[0]=(1-(y+m))*w,s[1]=(d+M)*w,s[2]=(x-v)*w,s[3]=0,s[4]=(d-M)*T,s[5]=(1-(u+m))*T,s[6]=(p+_)*T,s[7]=0,s[8]=(x+v)*g,s[9]=(p-_)*g,s[10]=(1-(u+y))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=$i.set(s[0],s[1],s[2]).length(),a=$i.set(s[4],s[5],s[6]).length(),l=$i.set(s[8],s[9],s[10]).length();r<0&&(o=-o),An.copy(this);let c=1/o,h=1/a,f=1/l;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=f,An.elements[9]*=f,An.elements[10]*=f,t.setFromRotationMatrix(An),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=xn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),x,y;if(l)x=r/(o-r),y=o*r/(o-r);else if(a===xn)x=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===ds)x=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=xn,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s),x,y;if(l)x=1/(o-r),y=o/(o-r);else if(a===xn)x=-2/(o-r),y=-(o+r)/(o-r);else if(a===ds)x=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},$i=new I,An=new Tt,xd=new I(0,0,0),_d=new I(1,1,1),li=new I,Kr=new I,cn=new I,Uc=new Tt,Fc=new _n,Gn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fc.setFromEuler(this),this.setFromQuaternion(Fc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gn.DEFAULT_ORDER="XYZ";var ir=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},vd=0,Oc=new I,Ki=new _n,Zn=new Tt,Qr=new I,Gs=new I,yd=new I,Md=new _n,Bc=new I(1,0,0),Hc=new I(0,1,0),zc=new I(0,0,1),kc={type:"added"},Ed={type:"removed"},Qi={type:"childadded",child:null},al={type:"childremoved",child:null},wt=class i extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new Gn,n=new _n,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Tt},normalMatrix:{value:new st}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(Bc,e)}rotateY(e){return this.rotateOnAxis(Hc,e)}rotateZ(e){return this.rotateOnAxis(zc,e)}translateOnAxis(e,t){return Oc.copy(e).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bc,e)}translateY(e){return this.translateOnAxis(Hc,e)}translateZ(e){return this.translateOnAxis(zc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qr.copy(e):Qr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Gs,Qr,this.up):Zn.lookAt(Qr,Gs,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(Zn),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kc),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ed),al.child=e,this.dispatchEvent(al),al.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kc),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,yd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,Md,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),d=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};wt.DEFAULT_UP=new I(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var lt=class extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sd={type:"move"},gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,n),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,x=.005;c.inputState.pinching&&u>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sd)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new lt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},jr={h:0,s:0,l:0};function ll(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=xt.workingColorSpace){if(e=cc(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ll(o,r,e+1/3),this.g=ll(o,r,e),this.b=ll(o,r,e-1/3)}return xt.colorSpaceToWorking(this,s),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let n=Yh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return xt.workingToColorSpace(tn.copy(this),e),Math.round(ct(tn.r*255,0,255))*65536+Math.round(ct(tn.g*255,0,255))*256+Math.round(ct(tn.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(tn.copy(this),t);let n=tn.r,s=tn.g,r=tn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=It){xt.workingToColorSpace(tn.copy(this),e);let t=tn.r,n=tn.g,s=tn.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(jr);let n=$s(ci.h,jr.h,t),s=$s(ci.s,jr.s,t),r=$s(ci.l,jr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new Ge;Ge.NAMES=Yh;var sr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Li=class extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Rn=new I,Jn=new I,cl=new I,$n=new I,ji=new I,es=new I,Gc=new I,hl=new I,ul=new I,dl=new I,fl=new Lt,pl=new Lt,ml=new Lt,fi=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Rn.subVectors(e,t),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Rn.subVectors(s,t),Jn.subVectors(n,t),cl.subVectors(e,t);let o=Rn.dot(Rn),a=Rn.dot(Jn),l=Rn.dot(cl),c=Jn.dot(Jn),h=Jn.dot(cl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,x=(o*h-a*l)*u;return r.set(1-d-x,x,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return fl.setScalar(0),pl.setScalar(0),ml.setScalar(0),fl.fromBufferAttribute(e,t),pl.fromBufferAttribute(e,n),ml.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(fl,r.x),o.addScaledVector(pl,r.y),o.addScaledVector(ml,r.z),o}static isFrontFacing(e,t,n,s){return Rn.subVectors(n,t),Jn.subVectors(e,t),Rn.cross(Jn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Rn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;ji.subVectors(s,n),es.subVectors(r,n),hl.subVectors(e,n);let l=ji.dot(hl),c=es.dot(hl);if(l<=0&&c<=0)return t.copy(n);ul.subVectors(e,s);let h=ji.dot(ul),f=es.dot(ul);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(ji,o);dl.subVectors(e,r);let d=ji.dot(dl),x=es.dot(dl);if(x>=0&&d<=x)return t.copy(r);let y=d*c-l*x;if(y<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(es,a);let p=h*x-d*f;if(p<=0&&f-h>=0&&d-x>=0)return Gc.subVectors(r,s),a=(f-h)/(f-h+(d-x)),t.copy(s).addScaledVector(Gc,a);let m=1/(p+y+u);return o=y*m,a=u*m,t.copy(n).addScaledVector(ji,o).addScaledVector(es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),eo.copy(n.boundingBox)),eo.applyMatrix4(e.matrixWorld),this.union(eo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),to.subVectors(this.max,Vs),ts.subVectors(e.a,Vs),ns.subVectors(e.b,Vs),is.subVectors(e.c,Vs),hi.subVectors(ns,ts),ui.subVectors(is,ns),Ti.subVectors(ts,is);let t=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-Ti.z,Ti.y,hi.z,0,-hi.x,ui.z,0,-ui.x,Ti.z,0,-Ti.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-Ti.y,Ti.x,0];return!gl(t,ts,ns,is,to)||(t=[1,0,0,0,1,0,0,0,1],!gl(t,ts,ns,is,to))?!1:(no.crossVectors(hi,ui),t=[no.x,no.y,no.z],gl(t,ts,ns,is,to))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Kn=[new I,new I,new I,new I,new I,new I,new I,new I],Cn=new I,eo=new Vn,ts=new I,ns=new I,is=new I,hi=new I,ui=new I,Ti=new I,Vs=new I,to=new I,no=new I,wi=new I;function gl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){wi.fromArray(i,r);let a=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ht=new I,io=new we,bd=0,In=class extends kn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zh,this.updateRanges=[],this.gpuType=bn,this.version=0,this._normalizationScale=e!==void 0?uc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)io.fromBufferAttribute(this,t),io.applyMatrix3(e),this.setXY(t,io.x,io.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Xh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):qh(e,this.array)}};var rr=class extends In{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var or=class extends In{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ht=class extends In{constructor(e,t,n){super(new Float32Array(e),t,n)}},Td=new Vn,Ws=new I,xl=new I,pi=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Td.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);let t=Ws.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ws,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(xl)),this.expandByPoint(Ws.copy(e.center).sub(xl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wd=0,gn=new Tt,_l=new wt,ss=new I,hn=new Vn,Xs=new Vn,Zt=new I,Gt=class i extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ku(e)?or:rr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return _l.lookAt(e),_l.updateMatrix(),this.applyMatrix4(_l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ht(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(hn.min,Xs.min),hn.expandByPoint(Zt),Zt.addVectors(hn.max,Xs.max),hn.expandByPoint(Zt)):(hn.expandByPoint(Xs.min),hn.expandByPoint(Xs.max))}hn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Zt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Zt.fromBufferAttribute(a,c),l&&(ss.fromBufferAttribute(e,c),Zt.add(ss)),s=Math.max(s,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new In(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let L=0;L<n.count;L++)a[L]=new I,l[L]=new I;let h=new I,f=new I,u=new I,d=new we,x=new we,y=new we,p=new I,m=new I;function _(L,R,N){c[L]=c[R]=c[N]=1,h.fromBufferAttribute(n,L),f.fromBufferAttribute(n,R),u.fromBufferAttribute(n,N),d.fromBufferAttribute(r,L),x.fromBufferAttribute(r,R),y.fromBufferAttribute(r,N),f.sub(h),u.sub(h),x.sub(d),y.sub(d);let A=1/(x.x*y.y-y.x*x.y);isFinite(A)&&(p.copy(f).multiplyScalar(y.y).addScaledVector(u,-x.y).multiplyScalar(A),m.copy(u).multiplyScalar(x.x).addScaledVector(f,-y.x).multiplyScalar(A),a[L].add(p),a[R].add(p),a[N].add(p),l[L].add(m),l[R].add(m),l[N].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let L=0,R=v.length;L<R;++L){let N=v[L],A=N.start,D=N.count;for(let C=A,B=A+D;C<B;C+=3)_(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let M=new I,w=new I,T=new I,g=new I;function E(L){T.fromBufferAttribute(s,L),g.copy(T);let R=a[L];M.copy(R),M.sub(T.multiplyScalar(T.dot(R))).normalize(),w.crossVectors(g,R);let A=w.dot(l[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,A)}for(let L=0,R=n.count;L<R;++L)c[L]&&E(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,f=new I;if(e)for(let u=0,d=e.count;u<d;u+=3){let x=e.getX(u+0),y=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,p),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,x=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?d=l[y]*a.data.stride+a.offset:d=l[y]*h;for(let m=0;m<h;m++)u[x++]=c[d++]}return new In(u,h,f)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var vl=new I,Ad=new I,Rd=new st,Pn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=vl.subVectors(n,t).cross(Ad.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(vl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Rd.getNormalMatrix(e),s=this.coplanarPoint(vl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Cd=0,ti=class extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=As,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=Vl,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eo,this.stencilZFail=Eo,this.stencilZPass=Eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Pn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new we().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new we().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Qn=new I,yl=new I,so=new I,ro=new I,Fo=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){yl.copy(e).add(t).multiplyScalar(.5),so.copy(t).sub(e).normalize(),ro.copy(this.origin).sub(yl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(so),a=ro.dot(this.direction),l=-ro.dot(so),c=ro.lengthSq(),h=Math.abs(1-o*o),f,u,d,x;if(h>0)if(f=o*l-a,u=o*a-l,x=r*h,f>=0)if(u>=-x)if(u<=x){let y=1/h;f*=y,u*=y,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-x?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=x?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(yl).addScaledVector(so,u),d}intersectSphere(e,t){if(e.radius<0)return null;Qn.subVectors(e.center,this.origin);let n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=e.x-o.x,u=e.y-o.y,d=e.z-o.z,x=t.x-o.x,y=t.y-o.y,p=t.z-o.z,m=n.x-o.x,_=n.y-o.y,v=n.z-o.z,M=Math.abs(l),w=Math.abs(c),T=Math.abs(h),g,E,L,R,N,A,D,C,B,H,k,re;if(M>=w&&M>=T?(L=l,A=f,B=x,re=m,l>=0?(g=c,E=h,R=u,N=d,D=y,C=p,H=_,k=v):(g=h,E=c,R=d,N=u,D=p,C=y,H=v,k=_)):w>=T?(L=c,A=u,B=y,re=_,c>=0?(g=h,E=l,R=d,N=f,D=p,C=x,H=v,k=m):(g=l,E=h,R=f,N=d,D=x,C=p,H=m,k=v)):(L=h,A=d,B=p,re=v,h>=0?(g=l,E=c,R=f,N=u,D=x,C=y,H=m,k=_):(g=c,E=l,R=u,N=f,D=y,C=x,H=_,k=m)),L===0)return null;let X=g/L,Z=E/L,le=1/L,Ie=R-X*A,Pe=N-Z*A,J=D-X*B,ye=C-Z*B,be=H-X*re,Ve=k-Z*re,he=be*ye-Ve*J,ee=Ie*Ve-Pe*be,Le=J*Pe-ye*Ie;if(s){if(he<0||ee<0||Le<0)return null}else if((he<0||ee<0||Le<0)&&(he>0||ee>0||Le>0))return null;let _e=he+ee+Le;if(_e===0)return null;let Fe=le*(he*A+ee*B+Le*re);return(_e>0?Fe<0:Fe>0)?null:this.at(Fe/_e,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},an=class extends ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Vc=new Tt,Ai=new Fo,oo=new pi,Wc=new I,ao=new I,lo=new I,co=new I,Ml=new I,ho=new I,Xc=new I,uo=new I,se=class extends wt{constructor(e=new Gt,t=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(Ml.fromBufferAttribute(f,e),o?ho.addScaledVector(Ml,h):ho.addScaledVector(Ml.sub(t),h))}t.add(ho)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(r),Ai.copy(e.ray).recast(e.near),!(oo.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(oo,Wc)===null||Ai.origin.distanceToSquared(Wc)>(e.far-e.near)**2))&&(Vc.copy(r).invert(),Ai.copy(e.ray).applyMatrix4(Vc),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=u.length;x<y;x++){let p=u[x],m=o[p.materialIndex],_=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=_,w=v;M<w;M+=3){let T=a.getX(M),g=a.getX(M+1),E=a.getX(M+2);s=fo(this,m,e,n,c,h,f,T,g,E),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let p=x,m=y;p<m;p+=3){let _=a.getX(p),v=a.getX(p+1),M=a.getX(p+2);s=fo(this,o,e,n,c,h,f,_,v,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,y=u.length;x<y;x++){let p=u[x],m=o[p.materialIndex],_=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let M=_,w=v;M<w;M+=3){let T=M,g=M+1,E=M+2;s=fo(this,m,e,n,c,h,f,T,g,E),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let p=x,m=y;p<m;p+=3){let _=p,v=p+1,M=p+2;s=fo(this,o,e,n,c,h,f,_,v,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Pd(i,e,t,n,s,r,o,a){let l;if(e.side===Wt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Mi,a),l===null)return null;uo.copy(a),uo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(uo);return c<t.near||c>t.far?null:{distance:c,point:uo.clone(),object:i}}function fo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,ao),i.getVertexPosition(l,lo),i.getVertexPosition(c,co);let h=Pd(i,e,t,n,ao,lo,co,Xc);if(h){let f=new I;fi.getBarycoord(Xc,ao,lo,co,f),s&&(h.uv=fi.getInterpolatedAttribute(s,a,l,c,f,new we)),r&&(h.uv1=fi.getInterpolatedAttribute(r,a,l,c,f,new we)),o&&(h.normal=fi.getInterpolatedAttribute(o,a,l,c,f,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new I,materialIndex:0};fi.getNormal(ao,lo,co,u.normal),h.face=u,h.barycoord=f}return h}var ar=class extends nn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Jt,h=Jt,f,u){super(null,o,a,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var lr=class extends In{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},rs=new Tt,qc=new Tt,po=[],Yc=new Vn,Id=new Tt,qs=new se,Ys=new pi,zt=class extends se{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new lr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Id)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rs),Yc.copy(e.boundingBox).applyMatrix4(rs),this.boundingBox.union(Yc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rs),Ys.copy(e.boundingSphere).applyMatrix4(rs),this.boundingSphere.union(Ys)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(n),e.ray.intersectsSphere(Ys)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,rs),qc.multiplyMatrices(n,rs),qs.matrixWorld=qc,qs.raycast(e,po);for(let o=0,a=po.length;o<a;o++){let l=po[o];l.instanceId=r,l.object=this,t.push(l)}po.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new lr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ar(new Float32Array(s*this.count),s,this.count,ha,bn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ri=new pi,Ld=new we(.5,.5),mo=new I,mi=class{constructor(e=new Pn,t=new Pn,n=new Pn,s=new Pn,r=new Pn,o=new Pn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],x=r[8],y=r[9],p=r[10],m=r[11],_=r[12],v=r[13],M=r[14],w=r[15];if(s[0].setComponents(c-o,d-h,m-x,w-_).normalize(),s[1].setComponents(c+o,d+h,m+x,w+_).normalize(),s[2].setComponents(c+a,d+f,m+y,w+v).normalize(),s[3].setComponents(c-a,d-f,m-y,w-v).normalize(),n)s[4].setComponents(l,u,p,M).normalize(),s[5].setComponents(c-l,d-u,m-p,w-M).normalize();else if(s[4].setComponents(c-l,d-u,m-p,w-M).normalize(),t===xn)s[5].setComponents(c+l,d+u,m+p,w+M).normalize();else if(t===ds)s[5].setComponents(l,u,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){Ri.center.set(0,0,0);let t=Ld.distanceTo(e.center);return Ri.radius=.7071067811865476+t,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(mo.x=s.normal.x>0?e.max.x:e.min.x,mo.y=s.normal.y>0?e.max.y:e.min.y,mo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(mo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Zc=new Tt,Oo=class i{constructor(){this.coordinateSystem=xn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Zc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new mi),n[s].setFromProjectionMatrix(Zc,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new mi),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var cr=class extends nn{constructor(e=[],t=ki,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vn=class extends nn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ni=class extends nn{constructor(e,t,n=Dn,s,r,o,a=Jt,l=Jt,c,h=ei,f=1){if(h!==ei&&h!==ri)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ms(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},hr=class extends ni{constructor(e,t=Dn,n=ki,s,r,o=Jt,a=Jt,l,c=ei){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ur=class extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ke=class i extends Gt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(f,2));function x(y,p,m,_,v,M,w,T,g,E,L){let R=M/g,N=w/E,A=M/2,D=w/2,C=T/2,B=g+1,H=E+1,k=0,re=0,X=new I;for(let Z=0;Z<H;Z++){let le=Z*N-D;for(let Ie=0;Ie<B;Ie++){let Pe=Ie*R-A;X[y]=Pe*_,X[p]=le*v,X[m]=C,c.push(X.x,X.y,X.z),X[y]=0,X[p]=0,X[m]=T>0?1:-1,h.push(X.x,X.y,X.z),f.push(Ie/g),f.push(1-Z/E),k+=1}}for(let Z=0;Z<E;Z++)for(let le=0;le<g;le++){let Ie=u+le+B*Z,Pe=u+le+B*(Z+1),J=u+(le+1)+B*(Z+1),ye=u+(le+1)+B*Z;l.push(Ie,Pe,ye),l.push(Pe,J,ye),re+=6}a.addGroup(d,re,L),d+=re,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},dr=class i extends Gt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,f=Math.PI/2*e,u=t,d=2*f+u,x=n*2+r,y=s+1,p=new I,m=new I;for(let _=0;_<=x;_++){let v=0,M=0,w=0,T=0;if(_<=n){let L=_/n,R=L*Math.PI/2;M=-h-e*Math.cos(R),w=e*Math.sin(R),T=-e*Math.cos(R),v=L*f}else if(_<=n+r){let L=(_-n)/r;M=-h+L*t,w=e,T=0,v=f+L*u}else{let L=(_-n-r)/n,R=L*Math.PI/2;M=h+e*Math.sin(R),w=e*Math.cos(R),T=e*Math.sin(R),v=f+u+L*f}let g=Math.max(0,Math.min(1,v/d)),E=0;_===0?E=.5/s:_===x&&(E=-.5/s);for(let L=0;L<=s;L++){let R=L/s,N=R*Math.PI*2,A=Math.sin(N),D=Math.cos(N);m.x=-w*D,m.y=M,m.z=w*A,a.push(m.x,m.y,m.z),p.set(-w*D,T,w*A),p.normalize(),l.push(p.x,p.y,p.z),c.push(R+E,g)}if(_>0){let L=(_-1)*y;for(let R=0;R<s;R++){let N=L+R,A=L+R+1,D=_*y+R,C=_*y+R+1;o.push(N,A,D),o.push(A,C,D)}}}this.setIndex(o),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},xs=class i extends Gt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new I,h=new we;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let d=n+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(a,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Mt=class i extends Gt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],x=0,y=[],p=n/2,m=0;_(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ht(f,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(d,2));function _(){let M=new I,w=new I,T=0,g=(t-e)/n;for(let E=0;E<=r;E++){let L=[],R=E/r,N=R*(t-e)+e;for(let A=0;A<=s;A++){let D=A/s,C=D*l+a,B=Math.sin(C),H=Math.cos(C);w.x=N*B,w.y=-R*n+p,w.z=N*H,f.push(w.x,w.y,w.z),M.set(B,g,H).normalize(),u.push(M.x,M.y,M.z),d.push(D,1-R),L.push(x++)}y.push(L)}for(let E=0;E<s;E++)for(let L=0;L<r;L++){let R=y[L][E],N=y[L+1][E],A=y[L+1][E+1],D=y[L][E+1];(e>0||L!==0)&&(h.push(R,N,D),T+=3),(t>0||L!==r-1)&&(h.push(N,A,D),T+=3)}c.addGroup(m,T,0),m+=T}function v(M){let w=x,T=new we,g=new I,E=0,L=M===!0?e:t,R=M===!0?1:-1;for(let A=1;A<=s;A++)f.push(0,p*R,0),u.push(0,R,0),d.push(.5,.5),x++;let N=x;for(let A=0;A<=s;A++){let C=A/s*l+a,B=Math.cos(C),H=Math.sin(C);g.x=L*H,g.y=p*R,g.z=L*B,f.push(g.x,g.y,g.z),u.push(0,R,0),T.x=B*.5+.5,T.y=H*.5*R+.5,d.push(T.x,T.y),x++}for(let A=0;A<s;A++){let D=w+A,C=N+A;M===!0?h.push(C,C+1,D):h.push(C+1,C,D),E+=3}c.addGroup(m,E,M===!0?1:2),m+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Di=class i extends Mt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},fr=class i extends Gt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ht(r,3)),this.setAttribute("normal",new ht(r.slice(),3)),this.setAttribute("uv",new ht(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let v=new I,M=new I,w=new I;for(let T=0;T<t.length;T+=3)d(t[T+0],v),d(t[T+1],M),d(t[T+2],w),l(v,M,w,_)}function l(_,v,M,w){let T=w+1,g=[];for(let E=0;E<=T;E++){g[E]=[];let L=_.clone().lerp(M,E/T),R=v.clone().lerp(M,E/T),N=T-E;for(let A=0;A<=N;A++)A===0&&E===T?g[E][A]=L:g[E][A]=L.clone().lerp(R,A/N)}for(let E=0;E<T;E++)for(let L=0;L<2*(T-E)-1;L++){let R=Math.floor(L/2);L%2===0?(u(g[E][R+1]),u(g[E+1][R]),u(g[E][R])):(u(g[E][R+1]),u(g[E+1][R+1]),u(g[E+1][R]))}}function c(_){let v=new I;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(_),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function h(){let _=new I;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];let M=p(_)/2/Math.PI+.5,w=m(_)/Math.PI+.5;o.push(M,1-w)}x(),f()}function f(){for(let _=0;_<o.length;_+=6){let v=o[_+0],M=o[_+2],w=o[_+4],T=Math.max(v,M,w),g=Math.min(v,M,w);T>.9&&g<.1&&(v<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),w<.2&&(o[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function d(_,v){let M=_*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function x(){let _=new I,v=new I,M=new I,w=new I,T=new we,g=new we,E=new we;for(let L=0,R=0;L<r.length;L+=9,R+=6){_.set(r[L+0],r[L+1],r[L+2]),v.set(r[L+3],r[L+4],r[L+5]),M.set(r[L+6],r[L+7],r[L+8]),T.set(o[R+0],o[R+1]),g.set(o[R+2],o[R+3]),E.set(o[R+4],o[R+5]),w.copy(_).add(v).add(M).divideScalar(3);let N=p(w);y(T,R+0,_,N),y(g,R+2,v,N),y(E,R+4,M,N)}}function y(_,v,M,w){w<0&&_.x===1&&(o[v]=_.x-1),M.x===0&&M.z===0&&(o[v]=w/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},pr=class i extends fr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new we:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,s=[],r=[],o=[],a=new I,l=new Tt;for(let d=0;d<=e;d++){let x=d/e;s[d]=this.getTangentAt(x,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(ct(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,x))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(ct(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],d*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},_s=class extends dn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new we){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Bo=class extends _s{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function dc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Jc=new I,$c=new I,El=new dc,Sl=new dc,bl=new dc,yn=class extends dn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:($c.subVectors(s[0],s[1]).add(s[0]),c=$c);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Jc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Jc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);y<1e-4&&(y=1),x<1e-4&&(x=y),p<1e-4&&(p=y),El.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,x,y,p),Sl.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,x,y,p),bl.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,x,y,p)}else this.curveType==="catmullrom"&&(El.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Sl.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),bl.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(El.calc(l),Sl.calc(l),bl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Kc(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Dd(i,e){let t=1-i;return t*t*e}function Nd(i,e){return 2*(1-i)*i*e}function Ud(i,e){return i*i*e}function Ks(i,e,t,n){return Dd(i,e)+Nd(i,t)+Ud(i,n)}function Fd(i,e){let t=1-i;return t*t*t*e}function Od(i,e){let t=1-i;return 3*t*t*i*e}function Bd(i,e){return 3*(1-i)*i*i*e}function Hd(i,e){return i*i*i*e}function Qs(i,e,t,n,s){return Fd(i,e)+Od(i,t)+Bd(i,n)+Hd(i,s)}var mr=class extends dn{constructor(e=new we,t=new we,n=new we,s=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new we){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Qs(e,s.x,r.x,o.x,a.x),Qs(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ho=class extends dn{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Qs(e,s.x,r.x,o.x,a.x),Qs(e,s.y,r.y,o.y,a.y),Qs(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},gr=class extends dn{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vs=class extends dn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xr=class extends dn{constructor(e=new we,t=new we,n=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new we){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ks(e,s.x,r.x,o.x),Ks(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_r=class extends dn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ks(e,s.x,r.x,o.x),Ks(e,s.y,r.y,o.y),Ks(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vr=class extends dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Kc(a,l.x,c.x,h.x,f.x),Kc(a,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new we().fromArray(s))}return this}},zo=Object.freeze({__proto__:null,ArcCurve:Bo,CatmullRomCurve3:yn,CubicBezierCurve:mr,CubicBezierCurve3:Ho,EllipseCurve:_s,LineCurve:gr,LineCurve3:vs,QuadraticBezierCurve:xr,QuadraticBezierCurve3:_r,SplineCurve:vr}),ys=class extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new zo[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},yr=class extends ys{constructor(e){super(),this.type="Path",this.currentPoint=new we,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new gr(this.currentPoint.clone(),new we(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new xr(this.currentPoint.clone(),new we(e,t),new we(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new mr(this.currentPoint.clone(),new we(e,t),new we(n,s),new we(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new vr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new _s(e,t,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ln=class extends yr{constructor(e){super(e),this.uuid=Vi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new yr().fromJSON(s))}return this}};function zd(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Zh(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Xd(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,f=l;for(let u=t;u<s;u+=t){let d=i[u],x=i[u+1];d<a&&(a=d),x<l&&(l=x),d>h&&(h=d),x>f&&(f=x)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return Mr(r,o,t,a,l,c,0),o}function Zh(i,e,t,n,s){let r;if(s===nf(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Qc(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Qc(o/n|0,i[o],i[o+1],r);return r&&Ms(r,r.next)&&(Sr(r),r=r.next),r}function Ni(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ms(t,t.next)||Nt(t.prev,t,t.next)===0)){if(Sr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Mr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&$d(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Gd(i,n,s,r):kd(i)){e.push(l.i,i.i,c.i),Sr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Vd(Ni(i),e),Mr(i,e,t,n,s,r,2)):o===2&&Wd(i,e,t,n,s,r):Mr(Ni(i),e,t,n,s,r,1);break}}}function kd(i){let e=i.prev,t=i,n=i.next;if(Nt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),f=Math.min(a,l,c),u=Math.max(s,r,o),d=Math.max(a,l,c),x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=u&&x.y>=f&&x.y<=d&&Zs(s,a,r,l,o,c,x.x,x.y)&&Nt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Gd(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Nt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,d=Math.min(a,l,c),x=Math.min(h,f,u),y=Math.max(a,l,c),p=Math.max(h,f,u),m=Pl(d,x,e,t,n),_=Pl(y,p,e,t,n),v=i.prevZ,M=i.nextZ;for(;v&&v.z>=m&&M&&M.z<=_;){if(v.x>=d&&v.x<=y&&v.y>=x&&v.y<=p&&v!==s&&v!==o&&Zs(a,h,l,f,c,u,v.x,v.y)&&Nt(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=d&&M.x<=y&&M.y>=x&&M.y<=p&&M!==s&&M!==o&&Zs(a,h,l,f,c,u,M.x,M.y)&&Nt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=y&&v.y>=x&&v.y<=p&&v!==s&&v!==o&&Zs(a,h,l,f,c,u,v.x,v.y)&&Nt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=_;){if(M.x>=d&&M.x<=y&&M.y>=x&&M.y<=p&&M!==s&&M!==o&&Zs(a,h,l,f,c,u,M.x,M.y)&&Nt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Vd(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ms(n,s)&&$h(n,t,t.next,s)&&Er(n,s)&&Er(s,n)&&(e.push(n.i,t.i,s.i),Sr(t),Sr(t.next),t=i=s),t=t.next}while(t!==i);return Ni(t)}function Wd(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&jd(o,a)){let l=Kh(o,a);o=Ni(o,o.next),l=Ni(l,l.next),Mr(o,e,t,n,s,r,0),Mr(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Xd(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Zh(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Qd(c))}s.sort(qd);for(let r=0;r<s.length;r++)t=Yd(s[r],t);return t}function qd(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Yd(i,e){let t=Zd(i,e);if(!t)return e;let n=Kh(t,i);return Ni(n,n.next),Ni(t,t.next)}function Zd(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Ms(i,t))return t;do{if(Ms(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Jh(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);Er(t,i)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&Jd(o,t)))&&(o=t,h=f)}t=t.next}while(t!==a);return o}function Jd(i,e){return Nt(i.prev,i,e.prev)<0&&Nt(e.next,i,i.next)<0}function $d(i,e,t,n){let s=i;do s.z===0&&(s.z=Pl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Kd(s)}function Kd(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Pl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Qd(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Jh(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Zs(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Jh(i,e,t,n,s,r,o,a)}function jd(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ef(i,e)&&(Er(i,e)&&Er(e,i)&&tf(i,e)&&(Nt(i.prev,i,e.prev)||Nt(i,e.prev,e))||Ms(i,e)&&Nt(i.prev,i,i.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ms(i,e){return i.x===e.x&&i.y===e.y}function $h(i,e,t,n){let s=xo(Nt(i,e,t)),r=xo(Nt(i,e,n)),o=xo(Nt(t,n,i)),a=xo(Nt(t,n,e));return!!(s!==r&&o!==a||s===0&&go(i,t,e)||r===0&&go(i,n,e)||o===0&&go(t,i,n)||a===0&&go(t,e,n))}function go(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function xo(i){return i>0?1:i<0?-1:0}function ef(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&$h(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Er(i,e){return Nt(i.prev,i,i.next)<0?Nt(i,e,i.next)>=0&&Nt(i,i.prev,e)>=0:Nt(i,e,i.prev)<0||Nt(i,i.next,e)<0}function tf(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Kh(i,e){let t=Il(i.i,i.x,i.y),n=Il(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Qc(i,e,t,n){let s=Il(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Sr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Il(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function nf(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ll=class{static triangulate(e,t,n=2){return zd(e,t,n)}},zn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];jc(e),eh(n,e);let o=e.length;t.forEach(jc);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,eh(n,t[l]);let a=Ll.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function jc(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function eh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ui=class i extends Gt{constructor(e=new Ln([new we(.5,.5),new we(-.5,.5),new we(-.5,-.5),new we(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ht(s,3)),this.setAttribute("uv",new ht(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:d-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:sf,v,M=!1,w,T,g,E;if(m){v=m.getSpacedPoints(h),M=!0,u=!1;let ne=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(h,ne),T=new I,g=new I,E=new I}u||(p=0,d=0,x=0,y=0);let L=a.extractPoints(c),R=L.shape,N=L.holes;if(!zn.isClockWise(R)){R=R.reverse();for(let ne=0,de=N.length;ne<de;ne++){let me=N[ne];zn.isClockWise(me)&&(N[ne]=me.reverse())}}function D(ne){let me=10000000000000001e-36,xe=ne[0];for(let ge=1;ge<=ne.length;ge++){let De=ge%ne.length,Be=ne[De],it=Be.x-xe.x,rt=Be.y-xe.y,ot=it*it+rt*rt,O=Math.max(Math.abs(Be.x),Math.abs(Be.y),Math.abs(xe.x),Math.abs(xe.y)),yt=me*O*O;if(ot<=yt){ne.splice(De,1),ge--;continue}xe=Be}}D(R),N.forEach(D);let C=N.length,B=R;for(let ne=0;ne<C;ne++){let de=N[ne];R=R.concat(de)}function H(ne,de,me){return de||nt("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(de,me)}let k=R.length;function re(ne,de,me){let xe,ge,De,Be=ne.x-de.x,it=ne.y-de.y,rt=me.x-ne.x,ot=me.y-ne.y,O=Be*Be+it*it,yt=Be*ot-it*rt;if(Math.abs(yt)>Number.EPSILON){let et=Math.sqrt(O),gt=Math.sqrt(rt*rt+ot*ot),ve=de.x-it/et,ut=de.y+Be/et,Xe=me.x-ot/gt,Oe=me.y+rt/gt,P=((Xe-ve)*ot-(Oe-ut)*rt)/(Be*ot-it*rt);xe=ve+Be*P-ne.x,ge=ut+it*P-ne.y;let S=xe*xe+ge*ge;if(S<=2)return new we(xe,ge);De=Math.sqrt(S/2)}else{let et=!1;Be>Number.EPSILON?rt>Number.EPSILON&&(et=!0):Be<-Number.EPSILON?rt<-Number.EPSILON&&(et=!0):Math.sign(it)===Math.sign(ot)&&(et=!0),et?(xe=-it,ge=Be,De=Math.sqrt(O)):(xe=Be,ge=it,De=Math.sqrt(O/2))}return new we(xe/De,ge/De)}let X=[];for(let ne=0,de=B.length,me=de-1,xe=ne+1;ne<de;ne++,me++,xe++)me===de&&(me=0),xe===de&&(xe=0),X[ne]=re(B[ne],B[me],B[xe]);let Z=[],le,Ie=X.concat();for(let ne=0,de=C;ne<de;ne++){let me=N[ne];le=[];for(let xe=0,ge=me.length,De=ge-1,Be=xe+1;xe<ge;xe++,De++,Be++)De===ge&&(De=0),Be===ge&&(Be=0),le[xe]=re(me[xe],me[De],me[Be]);Z.push(le),Ie=Ie.concat(le)}let Pe;if(p===0)Pe=zn.triangulateShape(B,N);else{let ne=[],de=[];for(let me=0;me<p;me++){let xe=me/p,ge=d*Math.cos(xe*Math.PI/2),De=x*Math.sin(xe*Math.PI/2)+y;for(let Be=0,it=B.length;Be<it;Be++){let rt=H(B[Be],X[Be],De);ee(rt.x,rt.y,-ge),xe===0&&ne.push(rt)}for(let Be=0,it=C;Be<it;Be++){let rt=N[Be];le=Z[Be];let ot=[];for(let O=0,yt=rt.length;O<yt;O++){let et=H(rt[O],le[O],De);ee(et.x,et.y,-ge),xe===0&&ot.push(et)}xe===0&&de.push(ot)}}Pe=zn.triangulateShape(ne,de)}let J=Pe.length,ye=x+y;for(let ne=0;ne<k;ne++){let de=u?H(R[ne],Ie[ne],ye):R[ne];M?(g.copy(w.normals[0]).multiplyScalar(de.x),T.copy(w.binormals[0]).multiplyScalar(de.y),E.copy(v[0]).add(g).add(T),ee(E.x,E.y,E.z)):ee(de.x,de.y,0)}for(let ne=1;ne<=h;ne++)for(let de=0;de<k;de++){let me=u?H(R[de],Ie[de],ye):R[de];M?(g.copy(w.normals[ne]).multiplyScalar(me.x),T.copy(w.binormals[ne]).multiplyScalar(me.y),E.copy(v[ne]).add(g).add(T),ee(E.x,E.y,E.z)):ee(me.x,me.y,f/h*ne)}for(let ne=p-1;ne>=0;ne--){let de=ne/p,me=d*Math.cos(de*Math.PI/2),xe=x*Math.sin(de*Math.PI/2)+y;for(let ge=0,De=B.length;ge<De;ge++){let Be=H(B[ge],X[ge],xe);ee(Be.x,Be.y,f+me)}for(let ge=0,De=N.length;ge<De;ge++){let Be=N[ge];le=Z[ge];for(let it=0,rt=Be.length;it<rt;it++){let ot=H(Be[it],le[it],xe);M?ee(ot.x,ot.y+v[h-1].y,v[h-1].x+me):ee(ot.x,ot.y,f+me)}}}be(),Ve();function be(){let ne=s.length/3;if(u){let de=0,me=k*de;for(let xe=0;xe<J;xe++){let ge=Pe[xe];Le(ge[2]+me,ge[1]+me,ge[0]+me)}de=h+p*2,me=k*de;for(let xe=0;xe<J;xe++){let ge=Pe[xe];Le(ge[0]+me,ge[1]+me,ge[2]+me)}}else{for(let de=0;de<J;de++){let me=Pe[de];Le(me[2],me[1],me[0])}for(let de=0;de<J;de++){let me=Pe[de];Le(me[0]+k*h,me[1]+k*h,me[2]+k*h)}}n.addGroup(ne,s.length/3-ne,0)}function Ve(){let ne=s.length/3,de=0;he(B,de),de+=B.length;for(let me=0,xe=N.length;me<xe;me++){let ge=N[me];he(ge,de),de+=ge.length}n.addGroup(ne,s.length/3-ne,1)}function he(ne,de){let me=ne.length;for(;--me>=0;){let xe=me,ge=me-1;ge<0&&(ge=ne.length-1);for(let De=0,Be=h+p*2;De<Be;De++){let it=k*De,rt=k*(De+1),ot=de+xe+it,O=de+ge+it,yt=de+ge+rt,et=de+xe+rt;_e(ot,O,yt,et)}}}function ee(ne,de,me){l.push(ne),l.push(de),l.push(me)}function Le(ne,de,me){Fe(ne),Fe(de),Fe(me);let xe=s.length/3,ge=_.generateTopUV(n,s,xe-3,xe-2,xe-1);Je(ge[0]),Je(ge[1]),Je(ge[2])}function _e(ne,de,me,xe){Fe(ne),Fe(de),Fe(xe),Fe(de),Fe(me),Fe(xe);let ge=s.length/3,De=_.generateSideWallUV(n,s,ge-6,ge-3,ge-2,ge-1);Je(De[0]),Je(De[1]),Je(De[3]),Je(De[1]),Je(De[2]),Je(De[3])}function Fe(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function Je(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return rf(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new zo[s.type]().fromJSON(s)),new i(n,e.options)}},sf={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new we(r,o),new we(a,l),new we(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[s*3],d=e[s*3+1],x=e[s*3+2],y=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new we(o,1-l),new we(c,1-f),new we(u,1-x),new we(y,1-m)]:[new we(a,1-l),new we(h,1-f),new we(d,1-x),new we(p,1-m)]}};function rf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var gi=class i extends fr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Vt=class i extends Gt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=e/a,u=t/l,d=[],x=[],y=[],p=[];for(let m=0;m<h;m++){let _=m*u-o;for(let v=0;v<c;v++){let M=v*f-r;x.push(M,-_,0),y.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let v=_+c*m,M=_+c*(m+1),w=_+1+c*(m+1),T=_+1+c*m;d.push(v,M,T),d.push(M,w,T)}this.setIndex(d),this.setAttribute("position",new ht(x,3)),this.setAttribute("normal",new ht(y,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var br=class i extends Gt{constructor(e=new Ln([new we(0,.5),new we(-.5,-.5),new we(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ht(s,3)),this.setAttribute("normal",new ht(r,3)),this.setAttribute("uv",new ht(o,2));function c(h){let f=s.length/3,u=h.extractPoints(t),d=u.shape,x=u.holes;zn.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=x.length;p<m;p++){let _=x[p];zn.isClockWise(_)===!0&&(x[p]=_.reverse())}let y=zn.triangulateShape(d,x);for(let p=0,m=x.length;p<m;p++){let _=x[p];d=d.concat(_)}for(let p=0,m=d.length;p<m;p++){let _=d[p];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let p=0,m=y.length;p<m;p++){let _=y[p],v=_[0]+f,M=_[1]+f,w=_[2]+f;n.push(v,M,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return of(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function of(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Fi=class i extends Gt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new I,u=new I,d=[],x=[],y=[],p=[];for(let m=0;m<=n;m++){let _=[],v=m/n,M=o+v*a,w=e*Math.cos(M),T=Math.sqrt(e*e-w*w),g=0;m===0&&o===0?g=.5/t:m===n&&l===Math.PI&&(g=-.5/t);for(let E=0;E<=t;E++){let L=E/t,R=s+L*r;f.x=-T*Math.cos(R),f.y=w,f.z=T*Math.sin(R),x.push(f.x,f.y,f.z),u.copy(f).normalize(),y.push(u.x,u.y,u.z),p.push(L+g,1-v),_.push(c++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){let v=h[m][_+1],M=h[m][_],w=h[m+1][_],T=h[m+1][_+1];(m!==0||o>0)&&d.push(v,M,T),(m!==n-1||l<Math.PI)&&d.push(M,w,T)}this.setIndex(d),this.setAttribute("position",new ht(x,3)),this.setAttribute("normal",new ht(y,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var xi=class i extends Gt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new I,d=new I,x=new I;for(let y=0;y<=n;y++){let p=o+y/n*a;for(let m=0;m<=s;m++){let _=m/s*r;d.x=(e+t*Math.cos(p))*Math.cos(_),d.y=(e+t*Math.cos(p))*Math.sin(_),d.z=t*Math.sin(p),c.push(d.x,d.y,d.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),x.subVectors(d,u).normalize(),h.push(x.x,x.y,x.z),f.push(m/s),f.push(y/n)}}for(let y=1;y<=n;y++)for(let p=1;p<=s;p++){let m=(s+1)*y+p-1,_=(s+1)*(y-1)+p-1,v=(s+1)*(y-1)+p,M=(s+1)*y+p;l.push(m,_,M),l.push(_,v,M)}this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Mn=class i extends Gt{constructor(e=new _r(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new we,h=new I,f=[],u=[],d=[],x=[];y(),this.setIndex(x),this.setAttribute("position",new ht(f,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(d,2));function y(){for(let v=0;v<t;v++)p(v);p(r===!1?t:0),_(),m()}function p(v){h=e.getPointAt(v/t,h);let M=o.normals[v],w=o.binormals[v];for(let T=0;T<=s;T++){let g=T/s*Math.PI*2,E=Math.sin(g),L=-Math.cos(g);l.x=L*M.x+E*w.x,l.y=L*M.y+E*w.y,l.z=L*M.z+E*w.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function m(){for(let v=1;v<=t;v++)for(let M=1;M<=s;M++){let w=(s+1)*(v-1)+(M-1),T=(s+1)*v+(M-1),g=(s+1)*v+M,E=(s+1)*(v-1)+M;x.push(w,T,E),x.push(T,g,E)}}function _(){for(let v=0;v<=t;v++)for(let M=0;M<=s;M++)c.x=v/t,c.y=M/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new zo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Wi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(th(s))s.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(th(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function sn(i){let e={};for(let t=0;t<i.length;t++){let n=Wi(i[t]);for(let s in n)e[s]=n[s]}return e}function th(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function af(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}var Qh={clone:Wi,merge:sn},lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,En=class extends ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lf,this.fragmentShader=cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wi(e.uniforms),this.uniformsGroups=af(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ge().setHex(s.value);break;case"v2":this.uniforms[n].value=new we().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Lt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new st().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Tt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ko=class extends En{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ke=class extends ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zr,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Sn=class extends Ke{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ci('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ci('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Tr=class extends ti{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zr,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=ia,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Go=class extends ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Vo=class extends ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function os(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function _o(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var _i=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Wo=class extends _i{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Al,endingEnd:Al}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rl:r=e,a=2*t-n;break;case Cl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Rl:o=e,l=2*n-t;break;case Cl:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,x=(n-t)/(s-t),y=x*x,p=y*x,m=-u*p+2*u*y-u*x,_=(1+u)*p+(-1.5-2*u)*y+(-.5+u)*x+1,v=(-1-d)*p+(1.5+d)*y+.5*x,M=d*p-d*y;for(let w=0;w!==a;++w)r[w]=m*o[h+w]+_*o[c+w]+v*o[l+w]+M*o[f+w];return r}},Xo=class extends _i{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},qo=class extends _i{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Yo=class extends _i{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let x=(n-t)/(s-t),y=1-x;for(let p=0;p!==a;++p)r[p]=o[c+p]*y+o[l+p]*x;return r}let u=a*2,d=e-1;for(let x=0;x!==a;++x){let y=o[c+x],p=o[l+x],m=d*u+x*2,_=f[m],v=f[m+1],M=e*u+x*2,w=h[M],T=h[M+1],g=uf(n,t,_,w,s);r[x]=jh(g,y,v,T,p)}return r}};function jh(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function hf(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function uf(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=jh(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=hf(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var fn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=os(t,this.TimeBufferType),this.values=os(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:os(e.times,Array),values:os(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),_o(e.settings)&&(n.settings={inTangents:os(e.settings.inTangents,Array),outTangents:os(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new qo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Yo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case js:t=this.InterpolantFactoryMethodDiscrete;break;case Lo:t=this.InterpolantFactoryMethodLinear;break;case Mo:t=this.InterpolantFactoryMethodSmooth;break;case wl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return js;case this.InterpolantFactoryMethodLinear:return Lo;case this.InterpolantFactoryMethodSmooth:return Mo;case this.InterpolantFactoryMethodBezier:return wl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;_o(this.settings)&&(nh(this.settings.inTangents,e),nh(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;_o(this.settings)&&(ih(this.settings.inTangents,e),ih(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(nt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(nt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){nt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){nt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Qu(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){nt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Mo,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*n,u=f-n,d=f+n;for(let x=0;x!==n;++x){let y=t[f+x];if(y!==t[u+x]||y!==t[d+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,_o(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function nh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function ih(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=Lo;var vi=class extends fn{constructor(e,t,n){super(e,t,n)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=js;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Zo=class extends fn{constructor(e,t,n,s){super(e,t,n,s)}};Zo.prototype.ValueTypeName="color";var Jo=class extends fn{constructor(e,t,n,s){super(e,t,n,s)}};Jo.prototype.ValueTypeName="number";var $o=class extends _i{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)_n.slerpFlat(r,0,o,c-a,o,c,l);return r}},wr=class extends fn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new $o(this.times,this.values,this.getValueSize(),e)}};wr.prototype.ValueTypeName="quaternion";wr.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends fn{constructor(e,t,n){super(e,t,n)}};yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=js;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ko=class extends fn{constructor(e,t,n,s){super(e,t,n,s)}};Ko.prototype.ValueTypeName="vector";var So={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(sh(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!sh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function sh(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Qo=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],x=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},eu=new Qo,Es=class{constructor(e){this.manager=e!==void 0?e:eu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Es.DEFAULT_MATERIAL_NAME="__DEFAULT";var as=new WeakMap,jo=class extends Es{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=So.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let f=as.get(o);f===void 0&&(f=[],as.set(o,f)),f.push({onLoad:t,onError:s})}return o}let a=fs("img");function l(){h(),t&&t(this);let f=as.get(this)||[];for(let u=0;u<f.length;u++){let d=f[u];d.onLoad&&d.onLoad(this)}as.delete(this),r.manager.itemEnd(e)}function c(f){h(),s&&s(f),So.remove(`image:${e}`);let u=as.get(this)||[];for(let d=0;d<u.length;d++){let x=u[d];x.onError&&x.onError(f)}as.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),So.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var ii=class extends Es{constructor(e){super(e)}load(e,t,n,s){let r=new nn,o=new jo(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Oi=class extends wt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ar=class extends Oi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Tl=new Tt,rh=new I,oh=new I,Ss=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mi,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;rh.setFromMatrixPosition(e.matrixWorld),t.position.copy(rh),oh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(oh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Tl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ds||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},vo=new I,yo=new _n,Bn=new I,Rr=class extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vo,yo,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vo,yo,Bn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(vo,yo,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vo,yo,Bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},di=new I,ah=new we,lh=new we,Qt=class extends Rr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ii*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ii*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,ah,lh),t.subVectors(lh,ah)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Js*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Dl=class extends Ss{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ii*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Bi=class extends Oi{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Dl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Nl=class extends Ss{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0}},$t=class extends Oi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Nl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Cr=class extends Rr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ul=class extends Ss{constructor(){super(new Cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bs=class extends Oi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new Ul}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ls=-90,cs=1,Ts=class extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Qt(ls,cs,e,t);s.layers=this.layers,this.add(s);let r=new Qt(ls,cs,e,t);r.layers=this.layers,this.add(r);let o=new Qt(ls,cs,e,t);o.layers=this.layers,this.add(o);let a=new Qt(ls,cs,e,t);a.layers=this.layers,this.add(a);let l=new Qt(ls,cs,e,t);l.layers=this.layers,this.add(l);let c=new Qt(ls,cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},ea=class extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var pc="\\[\\]\\.:\\/",df=new RegExp("["+pc+"]","g"),mc="[^"+pc+"]",ff="[^"+pc.replace("\\.","")+"]",pf=/((?:WC+[\/:])*)/.source.replace("WC",mc),mf=/(WCOD+)?/.source.replace("WCOD",ff),gf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mc),xf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mc),_f=new RegExp("^"+pf+mf+gf+xf+"$"),vf=["material","materials","bones","map"],Fl=class{constructor(e,t,n){let s=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(df,"")}static parseTrackName(e){let t=_f.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);vf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){je("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;nt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=Fl;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _x=new Float32Array(1);var Pr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ct(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ol=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function gc(i,e,t,n){let s=yf(n);switch(t){case tc:return i*e;case ha:return i*e/s.components*s.byteLength;case ua:return i*e/s.components*s.byteLength;case Ei:return i*e*2/s.components*s.byteLength;case da:return i*e*2/s.components*s.byteLength;case nc:return i*e*3/s.components*s.byteLength;case Un:return i*e*4/s.components*s.byteLength;case fa:return i*e*4/s.components*s.byteLength;case Nr:case Ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fr:case Or:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ma:case xa:return Math.max(i,16)*Math.max(e,8)/4;case pa:case ga:return Math.max(i,8)*Math.max(e,8)/2;case _a:case va:case Ma:case Ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ya:case Br:case Sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ta:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case wa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case La:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Da:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Na:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Oa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ba:case Ha:case za:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ka:case Ga:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Hr:case Va:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yf(i){switch(i){case ln:case Kl:return{byteLength:1,components:1};case Cs:case Ql:case Nn:return{byteLength:2,components:1};case la:case ca:return{byteLength:2,components:4};case Dn:case aa:case bn:return{byteLength:4,components:1};case jl:case ec:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ta}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ta);function Eu(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Mf(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,x)=>d.start-x.start);let u=0;for(let d=1;d<f.length;d++){let x=f[u],y=f[d];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++u,f[u]=y)}f.length=u+1;for(let d=0,x=f.length;d<x;d++){let y=f[d];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Af=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,If=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Df=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Uf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ff=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Xf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$f=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ep=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,fp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_p=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ap=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ip=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Np=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Up=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Op=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$p=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,om=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Em=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Um=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$m=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Km=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:Ef,alphahash_pars_fragment:Sf,alphamap_fragment:bf,alphamap_pars_fragment:Tf,alphatest_fragment:wf,alphatest_pars_fragment:Af,aomap_fragment:Rf,aomap_pars_fragment:Cf,batching_pars_vertex:Pf,batching_vertex:If,begin_vertex:Lf,beginnormal_vertex:Df,bsdfs:Nf,iridescence_fragment:Uf,bumpmap_pars_fragment:Ff,clipping_planes_fragment:Of,clipping_planes_pars_fragment:Bf,clipping_planes_pars_vertex:Hf,clipping_planes_vertex:zf,color_fragment:kf,color_pars_fragment:Gf,color_pars_vertex:Vf,color_vertex:Wf,common:Xf,defaultnormal_vertex:qf,displacementmap_pars_vertex:Yf,displacementmap_vertex:Zf,emissivemap_fragment:Jf,emissivemap_pars_fragment:$f,colorspace_fragment:Kf,colorspace_pars_fragment:Qf,envmap_fragment:jf,envmap_common_pars_fragment:ep,envmap_pars_fragment:tp,envmap_pars_vertex:np,envmap_physical_pars_fragment:fp,envmap_vertex:ip,fog_vertex:sp,fog_pars_vertex:rp,fog_fragment:op,fog_pars_fragment:ap,gradientmap_pars_fragment:lp,lightmap_pars_fragment:cp,lights_lambert_fragment:hp,lights_lambert_pars_fragment:up,lights_pars_begin:dp,lights_toon_fragment:pp,lights_toon_pars_fragment:mp,lights_phong_fragment:gp,lights_phong_pars_fragment:xp,lights_physical_fragment:_p,lights_physical_pars_fragment:vp,lights_fragment_begin:yp,lights_fragment_maps:Mp,lights_fragment_end:Ep,lightprobes_pars_fragment:Sp,logdepthbuf_fragment:bp,logdepthbuf_pars_fragment:Tp,logdepthbuf_pars_vertex:wp,logdepthbuf_vertex:Ap,map_fragment:Rp,map_pars_fragment:Cp,map_particle_fragment:Pp,map_particle_pars_fragment:Ip,metalnessmap_fragment:Lp,metalnessmap_pars_fragment:Dp,morphinstance_vertex:Np,morphcolor_vertex:Up,morphnormal_vertex:Fp,morphtarget_pars_vertex:Op,morphtarget_vertex:Bp,normal_fragment_begin:Hp,normal_fragment_maps:zp,normal_pars_fragment:kp,normal_pars_vertex:Gp,normal_vertex:Vp,normalmap_pars_fragment:Wp,clearcoat_normal_fragment_begin:Xp,clearcoat_normal_fragment_maps:qp,clearcoat_pars_fragment:Yp,iridescence_pars_fragment:Zp,opaque_fragment:Jp,packing:$p,premultiplied_alpha_fragment:Kp,project_vertex:Qp,dithering_fragment:jp,dithering_pars_fragment:em,roughnessmap_fragment:tm,roughnessmap_pars_fragment:nm,shadowmap_pars_fragment:im,shadowmap_pars_vertex:sm,shadowmap_vertex:rm,shadowmask_pars_fragment:om,skinbase_vertex:am,skinning_pars_vertex:lm,skinning_vertex:cm,skinnormal_vertex:hm,specularmap_fragment:um,specularmap_pars_fragment:dm,tonemapping_fragment:fm,tonemapping_pars_fragment:pm,transmission_fragment:mm,transmission_pars_fragment:gm,uv_pars_fragment:xm,uv_pars_vertex:_m,uv_vertex:vm,worldpos_vertex:ym,background_vert:Mm,background_frag:Em,backgroundCube_vert:Sm,backgroundCube_frag:bm,cube_vert:Tm,cube_frag:wm,depth_vert:Am,depth_frag:Rm,distance_vert:Cm,distance_frag:Pm,equirect_vert:Im,equirect_frag:Lm,linedashed_vert:Dm,linedashed_frag:Nm,meshbasic_vert:Um,meshbasic_frag:Fm,meshlambert_vert:Om,meshlambert_frag:Bm,meshmatcap_vert:Hm,meshmatcap_frag:zm,meshnormal_vert:km,meshnormal_frag:Gm,meshphong_vert:Vm,meshphong_frag:Wm,meshphysical_vert:Xm,meshphysical_frag:qm,meshtoon_vert:Ym,meshtoon_frag:Zm,points_vert:Jm,points_frag:$m,shadow_vert:Km,shadow_frag:Qm,sprite_vert:jm,sprite_frag:eg},Ue={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},qn={basic:{uniforms:sn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:sn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:sn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:sn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:sn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Ge(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:sn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:sn([Ue.points,Ue.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:sn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:sn([Ue.common,Ue.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:sn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:sn([Ue.sprite,Ue.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:sn([Ue.common,Ue.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:sn([Ue.lights,Ue.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};qn.physical={uniforms:sn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var Wa={r:0,b:0,g:0},tg=new Tt,Su=new st;Su.set(-1,0,0,0,1,0,0,0,1);function ng(i,e,t,n,s,r){let o=new Ge(0),a=s===!0?0:1,l,c,h=null,f=0,u=null;function d(_){let v=_.isScene===!0?_.background:null;if(v&&v.isTexture){let M=_.backgroundBlurriness>0;v=e.get(v,M)}return v}function x(_){let v=!1,M=d(_);M===null?p(o,a):M&&M.isColor&&(p(M,1),v=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(_,v){let M=d(v);M&&M.isCubeTexture?(c===void 0&&(c=new se(new ke(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Wi(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tg.makeRotationFromEuler(v.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Su),c.material.toneMapped=xt.getTransfer(M.colorSpace)!==St,(h!==M||f!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,u=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new se(new Vt(2,2),new En({name:"BackgroundMaterial",uniforms:Wi(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=xt.getTransfer(M.colorSpace)!==St,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,u=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,v){_.getRGB(Wa,fc(i)),t.buffers.color.setClear(Wa.r,Wa.g,Wa.b,v,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),a=v,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,p(o,a)},render:x,addToRenderList:y,dispose:m}}function ig(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(N,A,D,C,B){let H=!1,k=f(N,C,D,A);r!==k&&(r=k,c(r.object)),H=d(N,C,D,B),H&&x(N,C,D,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,M(N,A,D,C),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function f(N,A,D,C){let B=C.wireframe===!0,H=n[A.id];H===void 0&&(H={},n[A.id]=H);let k=N.isInstancedMesh===!0?N.id:0,re=H[k];re===void 0&&(re={},H[k]=re);let X=re[D.id];X===void 0&&(X={},re[D.id]=X);let Z=X[B];return Z===void 0&&(Z=u(l()),X[B]=Z),Z}function u(N){let A=[],D=[],C=[];for(let B=0;B<t;B++)A[B]=0,D[B]=0,C[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:D,attributeDivisors:C,object:N,attributes:{},index:null}}function d(N,A,D,C){let B=r.attributes,H=A.attributes,k=0,re=D.getAttributes();for(let X in re)if(re[X].location>=0){let le=B[X],Ie=H[X];if(Ie===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(Ie=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(Ie=N.instanceColor)),le===void 0||le.attribute!==Ie||Ie&&le.data!==Ie.data)return!0;k++}return r.attributesNum!==k||r.index!==C}function x(N,A,D,C){let B={},H=A.attributes,k=0,re=D.getAttributes();for(let X in re)if(re[X].location>=0){let le=H[X];le===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(le=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(le=N.instanceColor));let Ie={};Ie.attribute=le,le&&le.data&&(Ie.data=le.data),B[X]=Ie,k++}r.attributes=B,r.attributesNum=k,r.index=C}function y(){let N=r.newAttributes;for(let A=0,D=N.length;A<D;A++)N[A]=0}function p(N){m(N,0)}function m(N,A){let D=r.newAttributes,C=r.enabledAttributes,B=r.attributeDivisors;D[N]=1,C[N]===0&&(i.enableVertexAttribArray(N),C[N]=1),B[N]!==A&&(i.vertexAttribDivisor(N,A),B[N]=A)}function _(){let N=r.newAttributes,A=r.enabledAttributes;for(let D=0,C=A.length;D<C;D++)A[D]!==N[D]&&(i.disableVertexAttribArray(D),A[D]=0)}function v(N,A,D,C,B,H,k){k===!0?i.vertexAttribIPointer(N,A,D,B,H):i.vertexAttribPointer(N,A,D,C,B,H)}function M(N,A,D,C){y();let B=C.attributes,H=D.getAttributes(),k=A.defaultAttributeValues;for(let re in H){let X=H[re];if(X.location>=0){let Z=B[re];if(Z===void 0&&(re==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),re==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor)),Z!==void 0){let le=Z.normalized,Ie=Z.itemSize,Pe=e.get(Z);if(Pe===void 0)continue;let J=Pe.buffer,ye=Pe.type,be=Pe.bytesPerElement,Ve=ye===i.INT||ye===i.UNSIGNED_INT||Z.gpuType===aa;if(Z.isInterleavedBufferAttribute){let he=Z.data,ee=he.isInterleavedBuffer===!0?he.stride:he.itemSize,Le=Z.offset;if(he.isInstancedInterleavedBuffer||he.isInstancedBufferAttribute){for(let _e=0;_e<X.locationSize;_e++)m(X.location+_e,he.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let _e=0;_e<X.locationSize;_e++)p(X.location+_e);i.bindBuffer(i.ARRAY_BUFFER,J);for(let _e=0;_e<X.locationSize;_e++)v(X.location+_e,Ie/X.locationSize,ye,le,ee*be,(Le+Ie/X.locationSize*_e)*be,Ve)}else{if(Z.isInstancedBufferAttribute){for(let he=0;he<X.locationSize;he++)m(X.location+he,Z.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let he=0;he<X.locationSize;he++)p(X.location+he);i.bindBuffer(i.ARRAY_BUFFER,J);for(let he=0;he<X.locationSize;he++)v(X.location+he,Ie/X.locationSize,ye,le,Ie*be,Ie/X.locationSize*he*be,Ve)}}else if(k!==void 0){let le=k[re];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(X.location,le);break;case 3:i.vertexAttrib3fv(X.location,le);break;case 4:i.vertexAttrib4fv(X.location,le);break;default:i.vertexAttrib1fv(X.location,le)}}}}_()}function w(){L();for(let N in n){let A=n[N];for(let D in A){let C=A[D];for(let B in C){let H=C[B];for(let k in H)h(H[k].object),delete H[k];delete C[B]}}delete n[N]}}function T(N){if(n[N.id]===void 0)return;let A=n[N.id];for(let D in A){let C=A[D];for(let B in C){let H=C[B];for(let k in H)h(H[k].object),delete H[k];delete C[B]}}delete n[N.id]}function g(N){for(let A in n){let D=n[A];for(let C in D){let B=D[C];if(B[N.id]===void 0)continue;let H=B[N.id];for(let k in H)h(H[k].object),delete H[k];delete B[N.id]}}}function E(N){for(let A in n){let D=n[A],C=N.isInstancedMesh===!0?N.id:0,B=D[C];if(B!==void 0){for(let H in B){let k=B[H];for(let re in k)h(k[re].object),delete k[re];delete B[H]}delete D[C],Object.keys(D).length===0&&delete n[A]}}}function L(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:E,releaseStatesOfProgram:g,initAttributes:y,enableAttribute:p,disableUnusedAttributes:_}}function sg(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function rg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(g){return!(g!==Un&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(g){let E=g===Nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==ln&&g!==bn&&!E&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(je("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&je("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:M,maxSamples:w,samples:T}}function og(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Pn,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let x=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||x===null||x.length===0||r&&!p)r?h(null):c();else{let _=r?0:n,v=_*4,M=m.clippingState||null;l.value=M,M=h(x,u,v,d);for(let w=0;w!==v;++w)M[w]=t[w];m.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,x){let y=f!==null?f.length:0,p=null;if(y!==0){if(p=l.value,x!==!0||p===null){let m=d+y*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,M=d;v!==y;++v,M+=4)o.copy(f[v]).applyMatrix4(_,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}var Vr=class extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new cr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ke(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:Hi});r.uniforms.tEquirect.value=t;let o=new se(s,r),a=t.minFilter;return t.minFilter===si&&(t.minFilter=rn),new Ts(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},tu=256,ag=3,lg=20,bu=256,Tu=16,cg=3,hg=new I,ug=new Ge,Is=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ts(1,10,null),this._boxMesh=new se(new ke(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=hg}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,x=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(ug));let p=new Ts(n,s,h);return p.position.copy(a),p.update(l,e),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=x,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(tu,hc(e))}_fromTexture(e,t){e.mapping===ki||e.mapping===Rs?this._setSize(e.image.length===0?tu:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=nu(e,!1,!1),n=Math.log2(e)-ag;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=nu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ki||e.mapping===Rs?(this._cubemapMaterial===null&&(this._cubemapMaterial=su()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=iu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=dg(),this._integrationMaterial=fg());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Tu);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-cg)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(bu*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=pg());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function nu(i,e,t){return new Vr(i,{minFilter:si,generateMipmaps:e,type:Nn,colorSpace:er,depthBuffer:t})}function Wr(i,e,t){return new En({name:i,uniforms:e,vertexShader:dt.cube_vert,fragmentShader:t,side:Wt,blending:Hi,depthTest:!1,depthWrite:!1})}function dg(){return Wr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${bu}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function fg(){return Wr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Tu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function pg(){return Wr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${lg}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function iu(){return Wr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function su(){return Wr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function mg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===sa||d===ra)if(e.has(u)){let x=e.get(u).texture;return a(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let y=new Vr(x.height);return y.fromEquirectangularTexture(i,u),e.set(u,y),u.addEventListener("dispose",c),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,x=d===sa||d===ra,y=d===ki||d===Rs;if(x||y){let p=t.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Is(i)),p=x?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let _=u.image;return x&&_&&_.height>0||y&&_&&l(_)?(n===null&&(n=new Is(i)),p=x?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,d){return d===sa?u.mapping=ki:d===ra&&(u.mapping=Rs),u}function l(u){let d=0,x=6;for(let y=0;y<x;y++)u[y]!==void 0&&d++;return d===x}function c(u){let d=u.target;d.removeEventListener("dispose",c);let x=e.get(d);x!==void 0&&(e.delete(d),x.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let x=t.get(d);x!==void 0&&(t.delete(d),x.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function gg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ci("WebGLRenderer: "+n+" extension not supported."),s}}}function xg(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(x=>delete s[x]);function a(x){l(x.target)}function l(x){x.index!==null&&e.remove(x.index);for(let p in x.attributes)e.remove(x.attributes[p]);x.removeEventListener("dispose",a),delete s[x.id],o.unregister(x);let y=r.get(x);y&&(e.remove(y),r.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function c(x,y){return s[y.id]!==void 0||(y.addEventListener("dispose",a),s[y.id]=new WeakRef(y),o.register(y,y.id,y),t.memory.geometries++),y}function h(x){let y=x.attributes;for(let p in y)e.update(y[p],i.ARRAY_BUFFER)}function f(x){let y=x.index,p=x.attributes.position,m=0;if(p===void 0)return;let _=y!==null?y.array.length:p.array.length/3-1,v=p.count>=65535?or:rr,M=new v(Math.ceil(_/3)*6,1),w=M.array;if(y!==null){let g=y.array;m=y.version;for(let E=0,L=0;E<_;E+=3){let R=g[E+0],N=g[E+1],A=g[E+2];w[L++]=R,w[L++]=N,w[L++]=N,w[L++]=A,w[L++]=A,w[L++]=R}}else{m=p.version;for(let g=0,E=0;g<_;g+=3){let L=g+0,R=g+1,N=g+2;w[E++]=L,w[E++]=R,w[E++]=R,w[E++]=N,w[E++]=N,w[E++]=L}}M.version=m;let T=r.get(x);T&&e.remove(T),r.set(x,M)}function u(x){let y=r.get(x);if(y){let p=x.index;p!==null&&y.version<p.version&&f(x)}else f(x);return r.get(x)}function d(){for(let x in s){let y=s[x].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function _g(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*o),t.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*o,d),t.update(u,n,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let y=0;for(let p=0;p<d;p++)y+=u[p];t.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function vg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:nt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function yg(i,e,t){let n=new WeakMap,s=new Lt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let L=function(){g.dispose(),n.delete(a),a.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],v=0;d===!0&&(v=1),x===!0&&(v=2),y===!0&&(v=3);let M=a.attributes.position.count*v,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*w*4*f),g=new nr(T,M,w,f);g.type=bn,g.needsUpdate=!0;let E=v*4;for(let R=0;R<f;R++){let N=p[R],A=m[R],D=_[R],C=M*w*4*R;for(let B=0;B<N.count;B++){let H=B*E;d===!0&&(s.fromBufferAttribute(N,B),T[C+H+0]=s.x,T[C+H+1]=s.y,T[C+H+2]=s.z,T[C+H+3]=0),x===!0&&(s.fromBufferAttribute(A,B),T[C+H+4]=s.x,T[C+H+5]=s.y,T[C+H+6]=s.z,T[C+H+7]=0),y===!0&&(s.fromBufferAttribute(D,B),T[C+H+8]=s.x,T[C+H+9]=s.y,T[C+H+10]=s.z,T[C+H+11]=D.itemSize===4?s.w:1)}}u={count:f,texture:g,size:new we(M,w)},n.set(a,u),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let x=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Mg(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Eg={[Wl]:"LINEAR_TONE_MAPPING",[Xl]:"REINHARD_TONE_MAPPING",[ql]:"CINEON_TONE_MAPPING",[Lr]:"ACES_FILMIC_TONE_MAPPING",[Zl]:"AGX_TONE_MAPPING",[Jl]:"NEUTRAL_TONE_MAPPING",[Yl]:"CUSTOM_TONE_MAPPING"};function Sg(i,e,t,n,s,r){let o=new un(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Gt;h.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ht([0,2,0,0,2,0],2));let f=new ko({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new se(h,f),d=new Cr(-1,1,1,-1,0,1),x=null,y=null,p=!1,m,_=null,v=[],M=!1;this.setSize=function(w,T){o.setSize(w,T),a!==null&&a.setSize(w,T),l!==null&&l.setSize(w,T);for(let g=0;g<v.length;g++){let E=v[g];E.setSize&&E.setSize(w,T)}},this.setEffects=function(w){v=w,M=v.length>0&&v[0].isRenderPass===!0;let T=o.width,g=o.height;v.length>0&&a===null&&(a=new un(T,g,{type:Nn,depthBuffer:!1,stencilBuffer:!1}),l=new un(T,g,{type:Nn,depthBuffer:!1,stencilBuffer:!1}));let E=s===!0&&v.some(L=>L.needsDepthTexture===!0);E!==(o.depthTexture!==null)&&(E===!0&&c===null&&(c=new ni(T,g),r===!0&&(c.format=ri,c.type=Gi)),o.dispose(),o.depthTexture=E?c:null,o.resolveDepthBuffer=E,o.storeMultisampledDepthBuffer=E);for(let L=0;L<v.length;L++){let R=v[L];R.setSize&&R.setSize(T,g),E&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(w,T){if(p||w.toneMapping===Wn&&v.length===0)return!1;if(_=T,T!==null){let g=T.width,E=T.height;(o.width!==g||o.height!==E)&&this.setSize(g,E)}return M===!1&&w.setRenderTarget(o),m=w.toneMapping,w.toneMapping=Wn,!0},this.hasRenderPass=function(){return M},this.end=function(w,T){w.toneMapping=m,p=!0;let g=o,E=a;for(let L=0;L<v.length;L++){let R=v[L];R.enabled!==!1&&(R.render(w,E,g,T),R.needsSwap!==!1&&(g=E,E=E===a?l:a))}if(x!==w.outputColorSpace||y!==w.toneMapping){x=w.outputColorSpace,y=w.toneMapping,f.defines={},xt.getTransfer(x)===St&&(f.defines.SRGB_TRANSFER="");let L=Eg[y];L&&(f.defines[L]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,w.setRenderTarget(_),w.render(u,d),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var wu=new nn,Au=new ni(1,1),Ru=new hr(1),Cu=new nr,Pu=new Uo,Iu=new cr,ru=[],ou=[],au=new Float32Array(16),lu=new Float32Array(9),cu=new Float32Array(4);function Ls(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ru[s];if(r===void 0&&(r=new Float32Array(s),ru[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ya(i,e){let t=ou[e];t===void 0&&(t=new Int32Array(e),ou[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function bg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function Ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function Rg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;cu.set(n),i.uniformMatrix2fv(this.addr,!1,cu),qt(t,n)}}function Cg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;lu.set(n),i.uniformMatrix3fv(this.addr,!1,lu),qt(t,n)}}function Pg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;au.set(n),i.uniformMatrix4fv(this.addr,!1,au),qt(t,n)}}function Ig(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}function Dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}function Ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}function Ug(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}function Og(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}function Bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}function Za(i){return i.version===0&&(i.compareFunction=rc,i.needsUpdate=!0),i}function Hg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Za(Au):r=wu,t.setTexture2D(e||r,s)}function zg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Pu,s)}function kg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Za(Ru):r=Iu,t.setTextureCube(e||r,s)}function Gg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Cu,s)}function Vg(i){switch(i){case 5126:return bg;case 35664:return Tg;case 35665:return wg;case 35666:return Ag;case 35674:return Rg;case 35675:return Cg;case 35676:return Pg;case 5124:case 35670:return Ig;case 35667:case 35671:return Lg;case 35668:case 35672:return Dg;case 35669:case 35673:return Ng;case 5125:return Ug;case 36294:return Fg;case 36295:return Og;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return zg;case 35680:case 36300:case 36308:case 36293:return kg;case 36289:case 36303:case 36311:case 36292:return Gg}}function Wg(i,e){i.uniform1fv(this.addr,e)}function Xg(i,e){let t=Ls(e,this.size,2);i.uniform2fv(this.addr,t)}function qg(i,e){let t=Ls(e,this.size,3);i.uniform3fv(this.addr,t)}function Yg(i,e){let t=Ls(e,this.size,4);i.uniform4fv(this.addr,t)}function Zg(i,e){let t=Ls(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Jg(i,e){let t=Ls(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $g(i,e){let t=Ls(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Kg(i,e){i.uniform1iv(this.addr,e)}function Qg(i,e){i.uniform2iv(this.addr,e)}function jg(i,e){i.uniform3iv(this.addr,e)}function e0(i,e){i.uniform4iv(this.addr,e)}function t0(i,e){i.uniform1uiv(this.addr,e)}function n0(i,e){i.uniform2uiv(this.addr,e)}function i0(i,e){i.uniform3uiv(this.addr,e)}function s0(i,e){i.uniform4uiv(this.addr,e)}function r0(i,e,t){let n=this.cache,s=e.length,r=Ya(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Za(Au):o=wu;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function o0(i,e,t){let n=this.cache,s=e.length,r=Ya(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Pu,r[o])}function a0(i,e,t){let n=this.cache,s=e.length,r=Ya(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Za(Ru):o=Iu;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function l0(i,e,t){let n=this.cache,s=e.length,r=Ya(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Cu,r[o])}function c0(i){switch(i){case 5126:return Wg;case 35664:return Xg;case 35665:return qg;case 35666:return Yg;case 35674:return Zg;case 35675:return Jg;case 35676:return $g;case 5124:case 35670:return Kg;case 35667:case 35671:return Qg;case 35668:case 35672:return jg;case 35669:case 35673:return e0;case 5125:return t0;case 36294:return n0;case 36295:return i0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return r0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return a0;case 36289:case 36303:case 36311:case 36292:return l0}}var vc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Vg(t.type)}},yc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=c0(t.type)}},Mc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},xc=/(\w+)(\])?(\[|\.)?/g;function hu(i,e){i.seq.push(e),i.map[e.id]=e}function h0(i,e,t){let n=i.name,s=n.length;for(xc.lastIndex=0;;){let r=xc.exec(n),o=xc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){hu(t,c===void 0?new vc(a,i,e):new yc(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Mc(a),hu(t,f)),t=f}}}var Ps=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);h0(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function uu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var u0=37297,d0=0;function f0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var du=new st;function p0(i){xt._getMatrix(du,xt.workingColorSpace,i);let e=`mat3( ${du.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(i)){case tr:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+f0(i.getShaderSource(e),a)}else return r}function m0(i,e){let t=p0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var g0={[Wl]:"Linear",[Xl]:"Reinhard",[ql]:"Cineon",[Lr]:"ACESFilmic",[Zl]:"AgX",[Jl]:"Neutral",[Yl]:"Custom"};function x0(i,e){let t=g0[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Xa=new I;function _0(){xt.getLuminanceCoefficients(Xa);let i=Xa.x.toFixed(4),e=Xa.y.toFixed(4),t=Xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function y0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function M0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Gr(i){return i!==""}function pu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function mu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var E0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ec(i){return i.replace(E0,S0)}function S0(i,e){let t=dt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ec(t)}var b0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gu(i){return i.replace(b0,T0)}function T0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var w0={[Ir]:"SHADOWMAP_TYPE_PCF",[ws]:"SHADOWMAP_TYPE_VSM"};function A0(i){return w0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var R0={[Rs]:"ENVMAP_MODE_REFRACTION"};function C0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":R0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var P0={[ia]:"ENVMAP_BLENDING_MULTIPLY",[Ch]:"ENVMAP_BLENDING_MIX",[Ph]:"ENVMAP_BLENDING_ADD"};function I0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":P0[i.combine]||"ENVMAP_BLENDING_NONE"}function L0(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=A0(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=C0(t),f=I0(t),u=v0(t),d=y0(r),x=s.createProgram(),y,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Gr).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Gr).join(`
`),p.length>0&&(p+=`
`)):(y=[xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),p=[xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?dt.tonemapping_pars_fragment:"",t.toneMapping!==Wn?x0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,m0("linearToOutputTexel",t.outputColorSpace),_0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gr).join(`
`)),o=Ec(o),o=pu(o,t),o=mu(o,t),a=Ec(a),a=pu(a,t),a=mu(a,t),o=gu(o),a=gu(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",t.glslVersion===ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=m+y+o,v=m+p+a,M=uu(s,s.VERTEX_SHADER,_),w=uu(s,s.FRAGMENT_SHADER,v);s.attachShader(x,M),s.attachShader(x,w),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(R){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(x)||"",A=s.getShaderInfoLog(M)||"",D=s.getShaderInfoLog(w)||"",C=N.trim(),B=A.trim(),H=D.trim(),k=!0,re=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,M,w);else{let X=fu(s,M,"vertex"),Z=fu(s,w,"fragment");nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+C+`
`+X+`
`+Z)}else C!==""?je("WebGLProgram: Program Info Log:",C):(B===""||H==="")&&(re=!1);re&&(R.diagnostics={runnable:k,programLog:C,vertexShader:{log:B,prefix:y},fragmentShader:{log:H,prefix:p}})}s.deleteShader(M),s.deleteShader(w),g=new Ps(s,x),E=M0(s,x)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(x,u0)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=w,this}var D0=0,Sc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new bc(e),t.set(e,n)),n}},bc=class{constructor(e){this.id=D0++,this.code=e,this.usedTimes=0}};function N0(i){return i===Ei||i===Br||i===Hr}function U0(i,e,t,n,s,r){let o=new ir,a=new Sc,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(g){return l.add(g),g===0?"uv":`uv${g}`}function x(g,E,L,R,N,A){let D=R.fog,C=N.geometry,B=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?R.environment:null,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,k=e.get(g.envMap||B,H),re=u[g.type],X=n.precision;g.precision!==null&&(X=n.getMaxPrecision(g.precision),X!==g.precision&&je("WebGLProgram.getParameters:",g.precision,"not supported, using",X,"instead."));let Z=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,le=Z!==void 0?Z.length:0,Ie=0;C.morphAttributes.position!==void 0&&(Ie=1),C.morphAttributes.normal!==void 0&&(Ie=2),C.morphAttributes.color!==void 0&&(Ie=3);let Pe,J,ye,be;if(re){let ue=qn[re];Pe=ue.vertexShader,J=ue.fragmentShader}else{Pe=g.vertexShader,J=g.fragmentShader;let ue=a.getVertexShaderStage(g),$e=a.getFragmentShaderStage(g);a.update(g,ue,$e),ye=ue.id,be=$e.id}let Ve=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),ee=N.isInstancedMesh===!0,Le=N.isBatchedMesh===!0,_e=!!g.map,Fe=!!g.matcap,Je=!!k,ne=Je&&k.isPMREMTexture===!0,de=!!g.aoMap,me=!!g.lightMap,xe=!!g.bumpMap&&g.wireframe===!1,ge=!!g.normalMap,De=!!g.displacementMap,Be=!!g.emissiveMap,it=!!g.metalnessMap,rt=!!g.roughnessMap,ot=g.anisotropy>0,O=g.clearcoat>0,yt=g.diffuseRoughness>0,et=g.dispersion>0,gt=g.retroreflectivity>0,ve=g.iridescence>0,ut=g.sheen>0,Xe=g.transmission>0,Oe=ot&&!!g.anisotropyMap,P=O&&!!g.clearcoatMap,S=O&&!!g.clearcoatNormalMap,W=O&&!!g.clearcoatRoughnessMap,pe=yt&&!!g.diffuseRoughnessMap,ie=ve&&!!g.iridescenceMap,Me=ve&&!!g.iridescenceThicknessMap,Ee=ut&&!!g.sheenColorMap,j=ut&&!!g.sheenRoughnessMap,te=!!g.specularMap,Se=!!g.specularColorMap,U=!!g.specularIntensityMap,K=Xe&&!!g.transmissionMap,Q=Xe&&!!g.thicknessMap,z=!!g.gradientMap,ce=!!g.alphaMap,fe=g.alphaTest>0,He=!!g.alphaHash,V=!!g.extensions,G=Wn;g.toneMapped&&(Ve===null||Ve.isXRRenderTarget===!0)&&(G=i.toneMapping);let oe=ne?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,Ae={shaderID:re,shaderType:g.type,shaderName:g.name,vertexShader:Pe,fragmentShader:J,defines:g.defines,customVertexShaderID:ye,customFragmentShaderID:be,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:X,batching:Le,batchingColor:Le&&N._colorsTexture!==null,instancing:ee,instancingColor:ee&&N.instanceColor!==null,instancingMorph:ee&&N.morphTexture!==null,outputColorSpace:Ve===null?i.outputColorSpace:Ve.isXRRenderTarget===!0?Ve.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:_e,matcap:Fe,envMap:Je,envMapMode:Je&&k.mapping,envMapPMREM:ne,envMapMaxLod:ne?oe.length-1:null,envMapSize:ne?oe[0].width:null,aoMap:de,lightMap:me,bumpMap:xe,normalMap:ge,displacementMap:De,emissiveMap:Be,normalMapObjectSpace:ge&&g.normalMapType===Dh,normalMapTangentSpace:ge&&g.normalMapType===zr,packedNormalMap:ge&&g.normalMapType===zr&&N0(g.normalMap.format),metalnessMap:it,roughnessMap:rt,anisotropy:ot,anisotropyMap:Oe,clearcoat:O,clearcoatMap:P,clearcoatNormalMap:S,clearcoatRoughnessMap:W,diffuseRoughness:yt,diffuseRoughnessMap:pe,dispersion:et,retroreflection:gt,iridescence:ve,iridescenceMap:ie,iridescenceThicknessMap:Me,sheen:ut,sheenColorMap:Ee,sheenRoughnessMap:j,specularMap:te,specularColorMap:Se,specularIntensityMap:U,transmission:Xe,transmissionMap:K,thicknessMap:Q,gradientMap:z,opaque:g.transparent===!1&&g.blending===As&&g.alphaToCoverage===!1,alphaMap:ce,alphaTest:fe,alphaHash:He,combine:g.combine,mapUv:_e&&d(g.map.channel),aoMapUv:de&&d(g.aoMap.channel),lightMapUv:me&&d(g.lightMap.channel),bumpMapUv:xe&&d(g.bumpMap.channel),normalMapUv:ge&&d(g.normalMap.channel),displacementMapUv:De&&d(g.displacementMap.channel),emissiveMapUv:Be&&d(g.emissiveMap.channel),metalnessMapUv:it&&d(g.metalnessMap.channel),roughnessMapUv:rt&&d(g.roughnessMap.channel),anisotropyMapUv:Oe&&d(g.anisotropyMap.channel),clearcoatMapUv:P&&d(g.clearcoatMap.channel),clearcoatNormalMapUv:S&&d(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&d(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:pe&&d(g.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&d(g.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&d(g.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&d(g.sheenColorMap.channel),sheenRoughnessMapUv:j&&d(g.sheenRoughnessMap.channel),specularMapUv:te&&d(g.specularMap.channel),specularColorMapUv:Se&&d(g.specularColorMap.channel),specularIntensityMapUv:U&&d(g.specularIntensityMap.channel),transmissionMapUv:K&&d(g.transmissionMap.channel),thicknessMapUv:Q&&d(g.thicknessMap.channel),alphaMapUv:ce&&d(g.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(ge||ot),vertexNormals:!!C.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!C.attributes.uv&&(_e||ce),fog:!!D,useFog:g.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||C.attributes.normal===void 0&&ge===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:he,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Ie,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:A.filter(ue=>ue.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:G,decodeVideoTexture:_e&&g.map.isVideoTexture===!0&&xt.getTransfer(g.map.colorSpace)===St,decodeVideoTextureEmissive:Be&&g.emissiveMap.isVideoTexture===!0&&xt.getTransfer(g.emissiveMap.colorSpace)===St,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===on,flipSided:g.side===Wt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:V&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(V&&g.extensions.multiDraw===!0||Le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function y(g){let E=[];if(g.shaderID?E.push(g.shaderID):(E.push(g.customVertexShaderID),E.push(g.customFragmentShaderID)),g.defines!==void 0)for(let L in g.defines)E.push(L),E.push(g.defines[L]);return g.isRawShaderMaterial===!1&&(p(E,g),m(E,g),E.push(i.outputColorSpace)),E.push(g.customProgramCacheKey),E.join()}function p(g,E){g.push(E.precision),g.push(E.outputColorSpace),g.push(E.envMapMode),g.push(E.envMapPMREM),g.push(E.envMapMaxLod),g.push(E.envMapSize),g.push(E.mapUv),g.push(E.alphaMapUv),g.push(E.lightMapUv),g.push(E.aoMapUv),g.push(E.bumpMapUv),g.push(E.normalMapUv),g.push(E.displacementMapUv),g.push(E.emissiveMapUv),g.push(E.metalnessMapUv),g.push(E.roughnessMapUv),g.push(E.anisotropyMapUv),g.push(E.clearcoatMapUv),g.push(E.clearcoatNormalMapUv),g.push(E.clearcoatRoughnessMapUv),g.push(E.diffuseRoughnessMapUv),g.push(E.iridescenceMapUv),g.push(E.iridescenceThicknessMapUv),g.push(E.sheenColorMapUv),g.push(E.sheenRoughnessMapUv),g.push(E.specularMapUv),g.push(E.specularColorMapUv),g.push(E.specularIntensityMapUv),g.push(E.transmissionMapUv),g.push(E.thicknessMapUv),g.push(E.combine),g.push(E.fogExp2),g.push(E.sizeAttenuation),g.push(E.morphTargetsCount),g.push(E.numSunLights),g.push(E.numDirLights),g.push(E.numPointLights),g.push(E.numSpotLights),g.push(E.numSpotLightMaps),g.push(E.numHemiLights),g.push(E.numRectAreaLights),g.push(E.numSunLightShadows),g.push(E.numDirLightShadows),g.push(E.numPointLightShadows),g.push(E.numSpotLightShadows),g.push(E.numSpotLightShadowsWithMaps),g.push(E.numLightProbes),g.push(E.numLightProbeGrids),g.push(E.shadowMapType),g.push(E.toneMapping),g.push(E.numClippingPlanes),g.push(E.numClipIntersection),g.push(E.depthPacking)}function m(g,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.diffuseRoughness&&o.enable(25),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function _(g){let E=u[g.type],L;if(E){let R=qn[E];L=Qh.clone(R.uniforms)}else L=g.uniforms;return L}function v(g,E){let L=h.get(E);return L!==void 0?++L.usedTimes:(L=new L0(i,E,g,s),c.push(L),h.set(E,L)),L}function M(g){if(--g.usedTimes===0){let E=c.indexOf(g);c[E]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function w(g){a.remove(g)}function T(){a.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:_,acquireProgram:v,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:T}}function F0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function O0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function _u(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,x,y,p,m){let _=i[e];return _===void 0?(_={id:u.id,object:u,geometry:d,material:x,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:p,group:m},i[e]=_):(_.id=u.id,_.object=u,_.geometry=d,_.material=x,_.materialVariant=o(u),_.groupOrder=y,_.renderOrder=u.renderOrder,_.z=p,_.group=m),e++,_}function l(u,d,x,y,p,m,_){_.reversedDepth===!0&&(p=-p);let v=a(u,d,x,y,p,m);x.transmission>0?n.push(v):x.transparent===!0?s.push(v):t.push(v)}function c(u,d,x,y,p,m){let _=a(u,d,x,y,p,m);x.transmission>0?n.unshift(_):x.transparent===!0?s.unshift(_):t.unshift(_)}function h(u,d){t.length>1&&t.sort(u||O0),n.length>1&&n.sort(d||_u),s.length>1&&s.sort(d||_u)}function f(){for(let u=e,d=i.length;u<d;u++){let x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function B0(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new vu,i.set(n,[o])):s>=r.length?(o=new vu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function H0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Ge};break;case"SpotLight":t={position:new I,direction:new I,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function z0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var k0=0;function G0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function V0(i){let e=new H0,t=z0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new Tt,o=new Tt;function a(c){let h=0,f=0,u=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let d=0,x=0,y=0,p=0,m=0,_=0,v=0,M=0,w=0,T=0,g=0,E=0,L=0,R=0;c.sort(G0);for(let A=0,D=c.length;A<D;A++){let C=c[A],B=C.color,H=C.intensity,k=C.distance,re=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ei?re=C.shadow.map.texture:re=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=B.r*H,f+=B.g*H,u+=B.b*H;else if(C.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(C.sh.coefficients[X],H);R++}else if(C.isSunLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Z=C.shadow,le=t.get(C);le.shadowIntensity=Z.intensity,le.shadowBias=Z.bias,le.shadowNormalBias=Z.normalBias,le.shadowRadius=Z.radius,le.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[x]=le,n.sunShadowMap[x]=re;let Ie=Z.getViewportCount();for(let Pe=0;Pe<Ie;Pe++)n.sunShadowMatrix[y+Pe]=Z.getMatrix(Pe),n.sunShadowCascade[y+Pe]=Z._cascadeData[Pe];y+=Ie,x++}n.sun[d]=X,d++}else if(C.isDirectionalLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Z=C.shadow,le=t.get(C);le.shadowIntensity=Z.intensity,le.shadowBias=Z.bias,le.shadowNormalBias=Z.normalBias,le.shadowRadius=Z.radius,le.shadowMapSize=Z.mapSize,n.directionalShadow[p]=le,n.directionalShadowMap[p]=re,n.directionalShadowMatrix[p]=C.shadow.matrix,w++}n.directional[p]=X,p++}else if(C.isSpotLight){let X=e.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(B).multiplyScalar(H),X.distance=k,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,n.spot[_]=X;let Z=C.shadow;if(C.map&&(n.spotLightMap[E]=C.map,E++,Z.updateMatrices(C),C.castShadow&&L++),n.spotLightMatrix[_]=Z.matrix,C.castShadow){let le=t.get(C);le.shadowIntensity=Z.intensity,le.shadowBias=Z.bias,le.shadowNormalBias=Z.normalBias,le.shadowRadius=Z.radius,le.shadowMapSize=Z.mapSize,n.spotShadow[_]=le,n.spotShadowMap[_]=re,g++}_++}else if(C.isRectAreaLight){let X=e.get(C);X.color.copy(B).multiplyScalar(H),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),n.rectArea[v]=X,v++}else if(C.isPointLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){let Z=C.shadow,le=t.get(C);le.shadowIntensity=Z.intensity,le.shadowBias=Z.bias,le.shadowNormalBias=Z.normalBias,le.shadowRadius=Z.radius,le.shadowMapSize=Z.mapSize,le.shadowCameraNear=Z.camera.near,le.shadowCameraFar=Z.camera.far,n.pointShadow[m]=le,n.pointShadowMap[m]=re,n.pointShadowMatrix[m]=C.shadow.matrix,T++}n.point[m]=X,m++}else if(C.isHemisphereLight){let X=e.get(C);X.skyColor.copy(C.color).multiplyScalar(H),X.groundColor.copy(C.groundColor).multiplyScalar(H),n.hemi[M]=X,M++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ue.LTC_FLOAT_1,n.rectAreaLTC2=Ue.LTC_FLOAT_2):(n.rectAreaLTC1=Ue.LTC_HALF_1,n.rectAreaLTC2=Ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let N=n.hash;(N.sunLength!==d||N.directionalLength!==p||N.pointLength!==m||N.spotLength!==_||N.rectAreaLength!==v||N.hemiLength!==M||N.numSunShadows!==x||N.numDirectionalShadows!==w||N.numPointShadows!==T||N.numSpotShadows!==g||N.numSpotMaps!==E||N.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=p,n.spot.length=_,n.rectArea.length=v,n.point.length=m,n.hemi.length=M,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+E-L,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=R,N.sunLength=d,N.directionalLength=p,N.pointLength=m,N.spotLength=_,N.rectAreaLength=v,N.hemiLength=M,N.numSunShadows=x,N.numDirectionalShadows=w,N.numPointShadows=T,N.numSpotShadows=g,N.numSpotMaps=E,N.numLightProbes=R,n.version=k0++)}function l(c,h){let f=0,u=0,d=0,x=0,y=0,p=0,m=h.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){let M=c[_];if(M.isSunLight){let w=n.sun[f];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),f++}else if(M.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(M.isSpotLight){let w=n.spot[x];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),x++}else if(M.isRectAreaLight){let w=n.rectArea[y];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){let w=n.point[d];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let w=n.hemi[p];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:n}}function yu(i){let e=new V0(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):t.push(f)}function a(f){n.push(f)}function l(){e.setup(t),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function W0(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new yu(i),e.set(s,[a])):r>=o.length?(a=new yu(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var X0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Y0=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Z0=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Mu=new Tt,kr=new I,_c=new I;function J0(i,e,t){let n=new mi,s=new we,r=new we,o=new Lt,a=new Go,l=new Vo,c={},h=t.maxTextureSize,f={[Mi]:Wt,[Wt]:Mi,[on]:on},u=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:X0,fragmentShader:q0}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let x=new Gt;x.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new se(x,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ir;let m=this.type;this.render=function(T,g,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===na&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ir);let L=i.getRenderTarget(),R=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),A=i.state;A.setBlending(Hi),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);let D=m!==this.type;D&&g.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(B=>B.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,B=T.length;C<B;C++){let H=T[C],k=H.shadow;if(k===void 0){je("WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let re=k.getFrameExtents();s.multiply(re),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,k.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=X,k.map===null||D===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ws){if(H.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new un(s.x,s.y,{format:Ei,type:Nn,minFilter:rn,magFilter:rn,generateMipmaps:!1}),k.map.texture.name=H.name+".shadowMap",k.map.depthTexture=new ni(s.x,s.y,bn),k.map.depthTexture.name=H.name+".shadowMapDepth",k.map.depthTexture.format=ei,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Jt,k.map.depthTexture.magFilter=Jt}else H.isPointLight?(k.map=new Vr(s.x),k.map.depthTexture=new hr(s.x,Dn)):(k.map=new un(s.x,s.y),k.map.depthTexture=new ni(s.x,s.y,Dn)),k.map.depthTexture.name=H.name+".shadowMap",k.map.depthTexture.format=ei,this.type===Ir?(k.map.depthTexture.compareFunction=X?sc:ic,k.map.depthTexture.minFilter=rn,k.map.depthTexture.magFilter=rn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Jt,k.map.depthTexture.magFilter=Jt);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let Z=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();H.isPointLight!==!0&&k.updateMatrices(H,E);let le=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:E.layers;for(let Ie=0;Ie<Z;Ie++){let Pe=k.getCamera(Ie);if(H.isPointLight){let J=k.camera,ye=k.matrix,be=H.distance||J.far;be!==J.far&&(J.far=be,J.updateProjectionMatrix()),kr.setFromMatrixPosition(H.matrixWorld),J.position.copy(kr),_c.copy(J.position),_c.add(Y0[Ie]),J.up.copy(Z0[Ie]),J.lookAt(_c),J.updateMatrixWorld(),ye.makeTranslation(-kr.x,-kr.y,-kr.z),Mu.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Mu,J.coordinateSystem,J.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,Ie),i.clear();else{Ie===0&&(i.setRenderTarget(k.map),i.clear());let J=k.getViewport(Ie);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),A.viewport(o)}n=k.getFrustum(Ie),M(g,E,Pe,H,le,this.type)}k.isPointLightShadow!==!0&&this.type===ws&&_(k,E),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(L,R,N)};function _(T,g){let E=e.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new un(s.x,s.y,{format:Ei,type:Nn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(g,null,E,u,y,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(g,null,E,d,y,null)}function v(T,g,E,L){let R=null,N=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)R=N;else if(R=E.isPointLight===!0?l:a,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let A=R.uuid,D=g.uuid,C=c[A];C===void 0&&(C={},c[A]=C);let B=C[D];B===void 0&&(B=R.clone(),C[D]=B,g.addEventListener("dispose",w)),R=B}if(R.visible=g.visible,R.wireframe=g.wireframe,L===ws?R.side=g.shadowSide!==null?g.shadowSide:g.side:R.side=g.shadowSide!==null?g.shadowSide:f[g.side],R.alphaMap=g.alphaMap,R.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,R.map=g.map,R.clipShadows=g.clipShadows,R.clippingPlanes=g.clippingPlanes,R.clipIntersection=g.clipIntersection,R.displacementMap=g.displacementMap,R.displacementScale=g.displacementScale,R.displacementBias=g.displacementBias,R.wireframeLinewidth=g.wireframeLinewidth,R.linewidth=g.linewidth,E.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let A=i.properties.get(R);A.light=E}return R}function M(T,g,E,L,R,N){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===ws)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);let C=e.update(T),B=T.material;if(Array.isArray(B)){let H=C.groups;for(let k=0,re=H.length;k<re;k++){let X=H[k],Z=B[X.materialIndex];if(Z&&Z.visible){let le=v(T,Z,L,N);T.onBeforeShadow(i,T,g,E,C,le,X),i.renderBufferDirect(E,null,C,le,T,X),T.onAfterShadow(i,T,g,E,C,le,X)}}}else if(B.visible){let H=v(T,B,L,N);T.onBeforeShadow(i,T,g,E,C,H,null),i.renderBufferDirect(E,null,C,H,T,null),T.onAfterShadow(i,T,g,E,C,H,null)}}let D=T.children;for(let C=0,B=D.length;C<B;C++)M(D[C],g,E,L,R,N)}function w(T){T.target.removeEventListener("dispose",w);for(let E in c){let L=c[E],R=T.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function $0(i,e){function t(){let U=!1,K=new Lt,Q=null,z=new Lt(0,0,0,0);return{setMask:function(ce){Q!==ce&&!U&&(i.colorMask(ce,ce,ce,ce),Q=ce)},setLocked:function(ce){U=ce},setClear:function(ce,fe,He,V,G){G===!0&&(ce*=V,fe*=V,He*=V),K.set(ce,fe,He,V),z.equals(K)===!1&&(i.clearColor(ce,fe,He,V),z.copy(K))},reset:function(){U=!1,Q=null,z.set(-1,0,0,0)}}}function n(){let U=!1,K=!1,Q=null,z=null,ce=null;return{setReversed:function(fe){if(K!==fe){let He=e.get("EXT_clip_control");fe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),K=fe;let V=ce;ce=null,this.setClear(V)}},getReversed:function(){return K},setTest:function(fe){fe?he(i.DEPTH_TEST):ee(i.DEPTH_TEST)},setMask:function(fe){Q!==fe&&!U&&(i.depthMask(fe),Q=fe)},setFunc:function(fe){if(K&&(fe=Wh[fe]),z!==fe){switch(fe){case bo:i.depthFunc(i.NEVER);break;case To:i.depthFunc(i.ALWAYS);break;case wo:i.depthFunc(i.LESS);break;case us:i.depthFunc(i.LEQUAL);break;case Ao:i.depthFunc(i.EQUAL);break;case Ro:i.depthFunc(i.GEQUAL);break;case Co:i.depthFunc(i.GREATER);break;case Po:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}z=fe}},setLocked:function(fe){U=fe},setClear:function(fe){ce!==fe&&(ce=fe,K&&(fe=1-fe),i.clearDepth(fe))},reset:function(){U=!1,Q=null,z=null,ce=null,K=!1}}}function s(){let U=!1,K=null,Q=null,z=null,ce=null,fe=null,He=null,V=null,G=null;return{setTest:function(oe){U||(oe?he(i.STENCIL_TEST):ee(i.STENCIL_TEST))},setMask:function(oe){K!==oe&&!U&&(i.stencilMask(oe),K=oe)},setFunc:function(oe,Ae,ue){(Q!==oe||z!==Ae||ce!==ue)&&(i.stencilFunc(oe,Ae,ue),Q=oe,z=Ae,ce=ue)},setOp:function(oe,Ae,ue){(fe!==oe||He!==Ae||V!==ue)&&(i.stencilOp(oe,Ae,ue),fe=oe,He=Ae,V=ue)},setLocked:function(oe){U=oe},setClear:function(oe){G!==oe&&(i.clearStencil(oe),G=oe)},reset:function(){U=!1,K=null,Q=null,z=null,ce=null,fe=null,He=null,V=null,G=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,h={},f={},u={},d=new WeakMap,x=[],y=null,p=!1,m=null,_=null,v=null,M=null,w=null,T=null,g=null,E=new Ge(0,0,0),L=0,R=!1,N=null,A=null,D=null,C=null,B=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,re=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=re>=1):X.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=re>=2);let Z=null,le={},Ie=i.getParameter(i.SCISSOR_BOX),Pe=i.getParameter(i.VIEWPORT),J=new Lt().fromArray(Ie),ye=new Lt().fromArray(Pe);function be(U,K,Q,z){let ce=new Uint8Array(4),fe=i.createTexture();i.bindTexture(U,fe),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<Q;He++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,z,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(K+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return fe}let Ve={};Ve[i.TEXTURE_2D]=be(i.TEXTURE_2D,i.TEXTURE_2D,1),Ve[i.TEXTURE_CUBE_MAP]=be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ve[i.TEXTURE_2D_ARRAY]=be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ve[i.TEXTURE_3D]=be(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(i.DEPTH_TEST),o.setFunc(us),xe(!1),ge(Bl),he(i.CULL_FACE),de(Hi);function he(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function ee(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Le(U,K){return u[U]!==K?(i.bindFramebuffer(U,K),u[U]=K,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=K),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=K),!0):!1}function _e(U,K){let Q=x,z=!1;if(U){Q=d.get(K),Q===void 0&&(Q=[],d.set(K,Q));let ce=U.textures;if(Q.length!==ce.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,He=ce.length;fe<He;fe++)Q[fe]=i.COLOR_ATTACHMENT0+fe;Q.length=ce.length,z=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,z=!0);z&&i.drawBuffers(Q)}function Fe(U){return y!==U?(i.useProgram(U),y=U,!0):!1}let Je={[zi]:i.FUNC_ADD,[dh]:i.FUNC_SUBTRACT,[fh]:i.FUNC_REVERSE_SUBTRACT};Je[ph]=i.MIN,Je[mh]=i.MAX;let ne={[gh]:i.ZERO,[xh]:i.ONE,[_h]:i.SRC_COLOR,[Gl]:i.SRC_ALPHA,[bh]:i.SRC_ALPHA_SATURATE,[Eh]:i.DST_COLOR,[yh]:i.DST_ALPHA,[vh]:i.ONE_MINUS_SRC_COLOR,[Vl]:i.ONE_MINUS_SRC_ALPHA,[Sh]:i.ONE_MINUS_DST_COLOR,[Mh]:i.ONE_MINUS_DST_ALPHA,[Th]:i.CONSTANT_COLOR,[wh]:i.ONE_MINUS_CONSTANT_COLOR,[Ah]:i.CONSTANT_ALPHA,[Rh]:i.ONE_MINUS_CONSTANT_ALPHA};function de(U,K,Q,z,ce,fe,He,V,G,oe){if(U===Hi){p===!0&&(ee(i.BLEND),p=!1);return}if(p===!1&&(he(i.BLEND),p=!0),U!==uh){if(U!==m||oe!==R){if((_!==zi||w!==zi)&&(i.blendEquation(i.FUNC_ADD),_=zi,w=zi),oe)switch(U){case As:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hl:i.blendFunc(i.ONE,i.ONE);break;case zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:nt("WebGLState: Invalid blending: ",U);break}else switch(U){case As:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zl:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kl:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",U);break}v=null,M=null,T=null,g=null,E.set(0,0,0),L=0,m=U,R=oe}return}ce=ce||K,fe=fe||Q,He=He||z,(K!==_||ce!==w)&&(i.blendEquationSeparate(Je[K],Je[ce]),_=K,w=ce),(Q!==v||z!==M||fe!==T||He!==g)&&(i.blendFuncSeparate(ne[Q],ne[z],ne[fe],ne[He]),v=Q,M=z,T=fe,g=He),(V.equals(E)===!1||G!==L)&&(i.blendColor(V.r,V.g,V.b,G),E.copy(V),L=G),m=U,R=!1}function me(U,K){U.side===on?ee(i.CULL_FACE):he(i.CULL_FACE);let Q=U.side===Wt;K&&(Q=!Q),xe(Q),U.blending===As&&U.transparent===!1?de(Hi):de(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let z=U.stencilWrite;a.setTest(z),z&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Be(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function xe(U){N!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),N=U)}function ge(U){U!==ch?(he(i.CULL_FACE),U!==A&&(U===Bl?i.cullFace(i.BACK):U===hh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ee(i.CULL_FACE),A=U}function De(U){U!==D&&(k&&i.lineWidth(U),D=U)}function Be(U,K,Q){U?(he(i.POLYGON_OFFSET_FILL),(C!==K||B!==Q)&&(C=K,B=Q,o.getReversed()&&(K=-K,Q=-Q),i.polygonOffset(K,Q))):ee(i.POLYGON_OFFSET_FILL)}function it(U){U?he(i.SCISSOR_TEST):ee(i.SCISSOR_TEST)}function rt(U){U===void 0&&(U=i.TEXTURE0+H-1),Z!==U&&(i.activeTexture(U),Z=U)}function ot(U,K,Q){Q===void 0&&(Z===null?Q=i.TEXTURE0+H-1:Q=Z);let z=le[Q];z===void 0&&(z={type:void 0,texture:void 0},le[Q]=z),(z.type!==U||z.texture!==K)&&(Z!==Q&&(i.activeTexture(Q),Z=Q),i.bindTexture(U,K||Ve[U]),z.type=U,z.texture=K)}function O(){let U=le[Z];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function yt(){try{i.compressedTexImage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function et(){try{i.compressedTexImage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function gt(){try{i.texSubImage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function ve(){try{i.texSubImage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function ut(){try{i.compressedTexSubImage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function Xe(){try{i.compressedTexSubImage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function Oe(){try{i.texStorage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function P(){try{i.texStorage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function S(){try{i.texImage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function W(){try{i.texImage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function pe(U){return f[U]!==void 0?f[U]:i.getParameter(U)}function ie(U,K){f[U]!==K&&(i.pixelStorei(U,K),f[U]=K)}function Me(U){J.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),J.copy(U))}function Ee(U){ye.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),ye.copy(U))}function j(U,K){let Q=c.get(K);Q===void 0&&(Q=new WeakMap,c.set(K,Q));let z=Q.get(U);z===void 0&&(z=i.getUniformBlockIndex(K,U.name),i.uniformBlockBinding(K,z,z),Q.set(U,z))}function te(U,K,Q){let ce=c.get(K).get(U);l[ce]!==Q&&(i.bindBufferBase(i.UNIFORM_BUFFER,ce,Q),l[ce]=Q)}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},Z=null,le={},u={},l={},d=new WeakMap,x=[],y=null,p=!1,m=null,_=null,v=null,M=null,w=null,T=null,g=null,E=new Ge(0,0,0),L=0,R=!1,N=null,A=null,D=null,C=null,B=null,J.set(0,0,i.canvas.width,i.canvas.height),ye.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:he,disable:ee,bindFramebuffer:Le,drawBuffers:_e,useProgram:Fe,setBlending:de,setMaterial:me,setFlipSided:xe,setCullFace:ge,setLineWidth:De,setPolygonOffset:Be,setScissorTest:it,activeTexture:rt,bindTexture:ot,unbindTexture:O,compressedTexImage2D:yt,compressedTexImage3D:et,texImage2D:S,texImage3D:W,pixelStorei:ie,getParameter:pe,updateUBOMapping:j,uniformBlockBinding:te,texStorage2D:Oe,texStorage3D:P,texSubImage2D:gt,texSubImage3D:ve,compressedTexSubImage2D:ut,compressedTexSubImage3D:Xe,scissor:Me,viewport:Ee,reset:Se}}function K0(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,h=new WeakMap,f=new Set,u,d=new WeakMap,x=new Set,y=new FinalizationRegistry(P=>x.delete(P)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,S){return p?new OffscreenCanvas(P,S):fs("canvas")}function _(P,S,W){let pe=1,ie=Oe(P);if((ie.width>W||ie.height>W)&&(pe=W/Math.max(ie.width,ie.height)),pe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Me=Math.floor(pe*ie.width),Ee=Math.floor(pe*ie.height);u===void 0&&(u=m(Me,Ee));let j=S?m(Me,Ee):u;return j.width=Me,j.height=Ee,j.getContext("2d").drawImage(P,0,0,Me,Ee),je("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Me+"x"+Ee+")."),j}else return"data"in P&&je("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),P;return P}function v(P){return P.generateMipmaps}function M(P){i.generateMipmap(P)}function w(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(P,S,W,pe,ie,Me=!1){if(P!==null){if(i[P]!==void 0)return i[P];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Ee;pe&&(Ee=e.get("EXT_texture_norm16"),Ee||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=S;if(S===i.RED&&(W===i.FLOAT&&(j=i.R32F),W===i.HALF_FLOAT&&(j=i.R16F),W===i.UNSIGNED_BYTE&&(j=i.R8),W===i.UNSIGNED_SHORT&&Ee&&(j=Ee.R16_EXT),W===i.SHORT&&Ee&&(j=Ee.R16_SNORM_EXT)),S===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.R8UI),W===i.UNSIGNED_SHORT&&(j=i.R16UI),W===i.UNSIGNED_INT&&(j=i.R32UI),W===i.BYTE&&(j=i.R8I),W===i.SHORT&&(j=i.R16I),W===i.INT&&(j=i.R32I)),S===i.RG&&(W===i.FLOAT&&(j=i.RG32F),W===i.HALF_FLOAT&&(j=i.RG16F),W===i.UNSIGNED_BYTE&&(j=i.RG8),W===i.UNSIGNED_SHORT&&Ee&&(j=Ee.RG16_EXT),W===i.SHORT&&Ee&&(j=Ee.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.RG8UI),W===i.UNSIGNED_SHORT&&(j=i.RG16UI),W===i.UNSIGNED_INT&&(j=i.RG32UI),W===i.BYTE&&(j=i.RG8I),W===i.SHORT&&(j=i.RG16I),W===i.INT&&(j=i.RG32I)),S===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.RGB8UI),W===i.UNSIGNED_SHORT&&(j=i.RGB16UI),W===i.UNSIGNED_INT&&(j=i.RGB32UI),W===i.BYTE&&(j=i.RGB8I),W===i.SHORT&&(j=i.RGB16I),W===i.INT&&(j=i.RGB32I)),S===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),W===i.UNSIGNED_INT&&(j=i.RGBA32UI),W===i.BYTE&&(j=i.RGBA8I),W===i.SHORT&&(j=i.RGBA16I),W===i.INT&&(j=i.RGBA32I)),S===i.RGB&&(W===i.UNSIGNED_SHORT&&Ee&&(j=Ee.RGB16_EXT),W===i.SHORT&&Ee&&(j=Ee.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),S===i.RGBA){let te=Me?tr:xt.getTransfer(ie);W===i.FLOAT&&(j=i.RGBA32F),W===i.HALF_FLOAT&&(j=i.RGBA16F),W===i.UNSIGNED_BYTE&&(j=te===St?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&Ee&&(j=Ee.RGBA16_EXT),W===i.SHORT&&Ee&&(j=Ee.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function g(P,S){let W;return P?S===null||S===Dn||S===Gi?W=i.DEPTH24_STENCIL8:S===bn?W=i.DEPTH32F_STENCIL8:S===Cs&&(W=i.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Dn||S===Gi?W=i.DEPTH_COMPONENT24:S===bn?W=i.DEPTH_COMPONENT32F:S===Cs&&(W=i.DEPTH_COMPONENT16),W}function E(P,S){return v(P)===!0||P.isFramebufferTexture&&P.minFilter!==Jt&&P.minFilter!==rn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function L(P){let S=new WeakRef(P);n.get(P).__ref=S,x.add(S),y.register(P,S,S)}function R(P){let S=n.get(P).__ref;S!==void 0&&(x.delete(S),y.unregister(S))}function N(P){D(P.target)}function A(P){C(P.target)}function D(P){P.removeEventListener("dispose",N),R(P),H(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&f.delete(P)}function C(P){P.removeEventListener("dispose",A),R(P),re(P)}function B(){for(let P of x){let S=P.deref();S!==void 0&&(S.isRenderTarget===!0?C(S):D(S))}x.clear(),f.clear()}function H(P){let S=n.get(P);if(S.__webglInit===void 0)return;let W=P.source,pe=d.get(W);if(pe){let ie=pe[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&k(P),Object.keys(pe).length===0&&d.delete(W)}n.remove(P)}function k(P){let S=n.get(P);i.deleteTexture(S.__webglTexture);let W=P.source,pe=d.get(W);delete pe[S.__cacheKey],o.memory.textures--}function re(P){let S=n.get(P);S.__depthDisposeCallback&&S.__depthDisposeCallback();let W=P.depthTexture;if(W&&W.renderTarget===P&&D(W),P.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(S.__webglFramebuffer[ie]))for(let Me=0;Me<S.__webglFramebuffer[ie].length;Me++)i.deleteFramebuffer(S.__webglFramebuffer[ie][Me]);else i.deleteFramebuffer(S.__webglFramebuffer[ie]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ie])}else{if(Array.isArray(S.__webglFramebuffer))for(let ie=0;ie<S.__webglFramebuffer.length;ie++)i.deleteFramebuffer(S.__webglFramebuffer[ie]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ie=0;ie<S.__webglColorRenderbuffer.length;ie++)S.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ie]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let pe=P.textures;for(let ie=0,Me=pe.length;ie<Me;ie++){let Ee=n.get(pe[ie]);Ee.__webglTexture&&(i.deleteTexture(Ee.__webglTexture),o.memory.textures--),n.remove(pe[ie])}n.remove(P)}let X=0;function Z(){X=0}function le(){return X}function Ie(P){X=P}function Pe(){let P=X;return P>=s.maxTextures&&je("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,P}function J(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.mipmapsAutoUpdate),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function ye(P,S){let W=n.get(P);if(P.isVideoTexture&&ut(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){let pe=P.image;if(pe===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{me(W,P,S);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+S)}function be(P,S){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){me(W,P,S);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+S)}function Ve(P,S){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){me(W,P,S);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+S)}function he(P,S){let W=n.get(P);if(P.version>0&&W.__version!==P.version){xe(W,P,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+S)}let ee={[Pi]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[Io]:i.MIRRORED_REPEAT},Le={[Jt]:i.NEAREST,[Ih]:i.NEAREST_MIPMAP_NEAREST,[Dr]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[oa]:i.LINEAR_MIPMAP_NEAREST,[si]:i.LINEAR_MIPMAP_LINEAR},_e={[Uh]:i.NEVER,[rc]:i.ALWAYS,[Fh]:i.LESS,[ic]:i.LEQUAL,[Oh]:i.EQUAL,[sc]:i.GEQUAL,[Bh]:i.GREATER,[Hh]:i.NOTEQUAL};function Fe(P,S){if(S.type===bn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===rn||S.magFilter===oa||S.magFilter===Dr||S.magFilter===si||S.minFilter===rn||S.minFilter===oa||S.minFilter===Dr||S.minFilter===si)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ee[S.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ee[S.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ee[S.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Le[S.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Le[S.minFilter]),S.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,_e[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Jt||S.minFilter!==Dr&&S.minFilter!==si||S.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Je(P,S){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",N),L(S));let pe=S.source,ie=d.get(pe);ie===void 0&&(ie={},d.set(pe,ie));let Me=J(S);if(Me!==P.__cacheKey){ie[Me]===void 0&&(ie[Me]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ie[Me].usedTimes++;let Ee=ie[P.__cacheKey];Ee!==void 0&&(ie[P.__cacheKey].usedTimes--,Ee.usedTimes===0&&k(S)),P.__cacheKey=Me,P.__webglTexture=ie[Me].texture}return W}function ne(P,S,W){return Math.floor(Math.floor(P/W)/S)}function de(P,S,W,pe){let Me=P.updateRanges;if(Me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,W,pe,S.data);else{Me.sort((U,K)=>U.start-K.start);let Ee=0;for(let U=1;U<Me.length;U++){let K=Me[Ee],Q=Me[U],z=K.start+K.count,ce=ne(Q.start,S.width,4),fe=ne(K.start,S.width,4);Q.start<=z+1&&ce===fe&&ne(Q.start+Q.count-1,S.width,4)===ce?K.count=Math.max(K.count,Q.start+Q.count-K.start):(++Ee,Me[Ee]=Q)}Me.length=Ee+1;let j=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),Se=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let U=0,K=Me.length;U<K;U++){let Q=Me[U],z=Math.floor(Q.start/4),ce=Math.ceil(Q.count/4),fe=z%S.width,He=Math.floor(z/S.width),V=ce,G=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,He),t.texSubImage2D(i.TEXTURE_2D,0,fe,He,V,G,W,pe,S.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function me(P,S,W){let pe=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(pe=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(pe=i.TEXTURE_3D);let ie=Je(P,S),Me=S.source;t.bindTexture(pe,P.__webglTexture,i.TEXTURE0+W);let Ee=n.get(Me);if(Me.version!==Ee.__version||ie===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let G=xt.getPrimaries(xt.workingColorSpace),oe=S.colorSpace===oi?null:xt.getPrimaries(S.colorSpace),Ae=S.colorSpace===oi||G===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let te=_(S.image,!1,s.maxTextureSize);te=Xe(S,te);let Se=r.convert(S.format,S.colorSpace),U=r.convert(S.type),K=T(S.internalFormat,Se,U,S.normalized,S.colorSpace,S.isVideoTexture);Fe(pe,S);let Q,z=S.mipmaps,ce=S.isVideoTexture!==!0,fe=Ee.__version===void 0||ie===!0,He=Me.dataReady,V=E(S,te);if(S.isDepthTexture)K=g(S.format===ri,S.type),fe&&(ce?t.texStorage2D(i.TEXTURE_2D,1,K,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,K,te.width,te.height,0,Se,U,null));else if(S.isDataTexture)if(z.length>0){ce&&fe&&t.texStorage2D(i.TEXTURE_2D,V,K,z[0].width,z[0].height);for(let G=0,oe=z.length;G<oe;G++)Q=z[G],ce?He&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,Q.width,Q.height,Se,U,Q.data):t.texImage2D(i.TEXTURE_2D,G,K,Q.width,Q.height,0,Se,U,Q.data);S.generateMipmaps=!1}else ce?(fe&&t.texStorage2D(i.TEXTURE_2D,V,K,te.width,te.height),He&&de(S,te,Se,U)):t.texImage2D(i.TEXTURE_2D,0,K,te.width,te.height,0,Se,U,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ce&&fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,V,K,z[0].width,z[0].height,te.depth);for(let G=0,oe=z.length;G<oe;G++)if(Q=z[G],S.format!==Un)if(Se!==null)if(ce){if(He)if(S.layerUpdates.size>0){let Ae=gc(Q.width,Q.height,S.format,S.type);for(let ue of S.layerUpdates){let $e=Q.data.subarray(ue*Ae/Q.data.BYTES_PER_ELEMENT,(ue+1)*Ae/Q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,ue,Q.width,Q.height,1,Se,$e)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,Q.width,Q.height,te.depth,Se,Q.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,K,Q.width,Q.height,te.depth,0,Q.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?He&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,Q.width,Q.height,te.depth,Se,U,Q.data):t.texImage3D(i.TEXTURE_2D_ARRAY,G,K,Q.width,Q.height,te.depth,0,Se,U,Q.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ce&&fe&&t.texStorage2D(i.TEXTURE_2D,V,K,z[0].width,z[0].height);for(let G=0,oe=z.length;G<oe;G++)Q=z[G],S.format!==Un?Se!==null?ce?He&&t.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,Q.width,Q.height,Se,Q.data):t.compressedTexImage2D(i.TEXTURE_2D,G,K,Q.width,Q.height,0,Q.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?He&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,Q.width,Q.height,Se,U,Q.data):t.texImage2D(i.TEXTURE_2D,G,K,Q.width,Q.height,0,Se,U,Q.data)}else if(S.isDataArrayTexture)if(ce){if(fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,V,K,te.width,te.height,te.depth),He)if(S.layerUpdates.size>0){let G=gc(te.width,te.height,S.format,S.type);for(let oe of S.layerUpdates){let Ae=te.data.subarray(oe*G/te.data.BYTES_PER_ELEMENT,(oe+1)*G/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,te.width,te.height,1,Se,U,Ae)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Se,U,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,K,te.width,te.height,te.depth,0,Se,U,te.data);else if(S.isData3DTexture)ce?(fe&&t.texStorage3D(i.TEXTURE_3D,V,K,te.width,te.height,te.depth),He&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Se,U,te.data)):t.texImage3D(i.TEXTURE_3D,0,K,te.width,te.height,te.depth,0,Se,U,te.data);else if(S.isFramebufferTexture){if(fe)if(ce)t.texStorage2D(i.TEXTURE_2D,V,K,te.width,te.height);else{let G=te.width,oe=te.height;for(let Ae=0;Ae<V;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,K,G,oe,0,Se,U,null),G>>=1,oe>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let G=i.canvas;if(G.hasAttribute("layoutsubtree")||G.setAttribute("layoutsubtree","true"),te.parentNode!==G){G.appendChild(te),f.add(S),G.onpaint=oe=>{let Ae=oe.changedElements;for(let ue of f)Ae.includes(ue.image)&&(ue.needsUpdate=!0)},G.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{let Ae=i.RGBA,ue=i.RGBA,$e=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ae,ue,$e,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(z.length>0){if(ce&&fe){let G=Oe(z[0]);t.texStorage2D(i.TEXTURE_2D,V,K,G.width,G.height)}for(let G=0,oe=z.length;G<oe;G++)Q=z[G],ce?He&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,Se,U,Q):t.texImage2D(i.TEXTURE_2D,G,K,Se,U,Q);S.generateMipmaps=!1}else if(ce){if(fe){let G=Oe(te);t.texStorage2D(i.TEXTURE_2D,V,K,G.width,G.height)}He&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,U,te)}else t.texImage2D(i.TEXTURE_2D,0,K,Se,U,te);v(S)&&S.mipmapsAutoUpdate===!0&&M(pe),Ee.__version=Me.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function xe(P,S,W){if(S.image.length!==6)return;let pe=Je(P,S),ie=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+W);let Me=n.get(ie);if(ie.version!==Me.__version||pe===!0){t.activeTexture(i.TEXTURE0+W);let Ee=xt.getPrimaries(xt.workingColorSpace),j=S.colorSpace===oi?null:xt.getPrimaries(S.colorSpace),te=S.colorSpace===oi||Ee===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Se=S.isCompressedTexture||S.image[0].isCompressedTexture,U=S.image[0]&&S.image[0].isDataTexture,K=[];for(let ue=0;ue<6;ue++)!Se&&!U?K[ue]=_(S.image[ue],!0,s.maxCubemapSize):K[ue]=U?S.image[ue].image:S.image[ue],K[ue]=Xe(S,K[ue]);let Q=K[0],z=r.convert(S.format,S.colorSpace),ce=r.convert(S.type),fe=T(S.internalFormat,z,ce,S.normalized,S.colorSpace),He=S.isVideoTexture!==!0,V=Me.__version===void 0||pe===!0,G=ie.dataReady,oe=E(S,Q);Fe(i.TEXTURE_CUBE_MAP,S);let Ae;if(S.isDepthTexture){if(fe=g(S.format===ri,S.type),V)if(He)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,fe,Q.width,Q.height);else for(let ue=0;ue<6;ue++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,fe,Q.width,Q.height,0,z,ce,null)}else if(Se){He&&V&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,fe,Q.width,Q.height);for(let ue=0;ue<6;ue++){Ae=K[ue].mipmaps;for(let $e=0;$e<Ae.length;$e++){let Qe=Ae[$e];S.format!==Un?z!==null?He?G&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,$e,0,0,Qe.width,Qe.height,z,Qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,$e,fe,Qe.width,Qe.height,0,Qe.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,$e,0,0,Qe.width,Qe.height,z,ce,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,$e,fe,Qe.width,Qe.height,0,z,ce,Qe.data)}}}else{if(Ae=S.mipmaps,He&&V){Ae.length>0&&oe++;let ue=Oe(K[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,fe,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(U){He?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,K[ue].width,K[ue].height,z,ce,K[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,fe,K[ue].width,K[ue].height,0,z,ce,K[ue].data);for(let $e=0;$e<Ae.length;$e++){let _t=Ae[$e].image[ue].image;He?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,$e+1,0,0,_t.width,_t.height,z,ce,_t.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,$e+1,fe,_t.width,_t.height,0,z,ce,_t.data)}}else{He?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,z,ce,K[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,fe,z,ce,K[ue]);for(let $e=0;$e<Ae.length;$e++){let Qe=Ae[$e];He?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,$e+1,0,0,z,ce,Qe.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,$e+1,fe,z,ce,Qe.image[ue])}}}v(S)&&S.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),Me.__version=ie.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function ge(P,S,W,pe,ie,Me){let Ee=r.convert(W.format,W.colorSpace),j=r.convert(W.type),te=T(W.internalFormat,Ee,j,W.normalized,W.colorSpace),Se=n.get(S),U=n.get(W);if(U.__renderTarget=S,!Se.__hasExternalTextures){let K=Math.max(1,S.width>>Me),Q=Math.max(1,S.height>>Me);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,Me,te,K,Q,S.depth,0,Ee,j,null):t.texImage2D(ie,Me,te,K,Q,0,Ee,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),ve(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,ie,U.__webglTexture,0,gt(S)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pe,ie,U.__webglTexture,Me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(P,S,W){if(i.bindRenderbuffer(i.RENDERBUFFER,P),S.depthBuffer){let pe=S.depthTexture,ie=pe&&pe.isDepthTexture?pe.type:null,Me=g(S.stencilBuffer,ie),Ee=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ve(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(S),Me,S.width,S.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(S),Me,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Me,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,P)}else{let pe=S.textures;for(let ie=0;ie<pe.length;ie++){let Me=pe[ie],Ee=r.convert(Me.format,Me.colorSpace),j=r.convert(Me.type),te=T(Me.internalFormat,Ee,j,Me.normalized,Me.colorSpace);ve(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(S),te,S.width,S.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(S),te,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,te,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(P,S,W){let pe=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=n.get(S.depthTexture);ie.__renderTarget=S;let Me=pe?S.depthTexture.image[0]:S.depthTexture.image;(!ie.__webglTexture||Me.width!==S.width||Me.height!==S.height)&&(Me.width=S.width,Me.height=S.height,S.depthTexture.needsUpdate=!0),pe?he(S.depthTexture,0):ye(S.depthTexture,0);let Ee=ie.__webglTexture,j=gt(S),te=pe?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,Se=S.depthTexture.format===ri?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===ei)ve(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Se,te,Ee,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,Se,te,Ee,0);else if(S.depthTexture.format===ri)ve(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Se,te,Ee,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,Se,te,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(P){let S=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){let pe=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),pe){let ie=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,pe.removeEventListener("dispose",ie)};pe.addEventListener("dispose",ie),S.__depthDisposeCallback=ie}S.__boundDepthTexture=pe}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(W)for(let pe=0;pe<6;pe++)Be(S.__webglFramebuffer[pe],P,pe);else P.texture.mipmaps.length>0?Be(S.__webglFramebuffer[0],P,0):Be(S.__webglFramebuffer,P,0);else if(W){S.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[pe]),S.__webglDepthbuffer[pe]===void 0)S.__webglDepthbuffer[pe]=i.createRenderbuffer(),De(S.__webglDepthbuffer[pe],P,!1);else{let ie=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=S.__webglDepthbuffer[pe];i.bindRenderbuffer(i.RENDERBUFFER,Me),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,Me)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),De(S.__webglDepthbuffer,P,!1);else{let ie=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Me),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,Me)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(P,S,W){let pe=n.get(P);S!==void 0&&ge(pe.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&it(P)}function ot(P){let S=P.texture,W=n.get(P),pe=n.get(S);P.addEventListener("dispose",A),L(P);let ie=P.textures,Me=P.isWebGLCubeRenderTarget===!0,Ee=ie.length>1;if(Ee||(pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture()),pe.__version=S.version,o.memory.textures++),Me){W.__webglFramebuffer=[];for(let j=0;j<6;j++)if(S.mipmaps.length>0){W.__webglFramebuffer[j]=[];for(let te=0;te<S.mipmaps.length;te++)W.__webglFramebuffer[j][te]=i.createFramebuffer()}else W.__webglFramebuffer[j]=i.createFramebuffer()}else{if(S.mipmaps.length>0){W.__webglFramebuffer=[];for(let j=0;j<S.mipmaps.length;j++)W.__webglFramebuffer[j]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let j=0,te=ie.length;j<te;j++){let Se=n.get(ie[j]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&ve(P)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let j=0;j<ie.length;j++){let te=ie[j];W.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[j]);let Se=r.convert(te.format,te.colorSpace),U=r.convert(te.type),K=T(te.internalFormat,Se,U,te.normalized,te.colorSpace,P.isXRRenderTarget===!0),Q=gt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,K,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,W.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),De(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Me){t.bindTexture(i.TEXTURE_CUBE_MAP,pe.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,S);for(let j=0;j<6;j++)if(S.mipmaps.length>0)for(let te=0;te<S.mipmaps.length;te++)ge(W.__webglFramebuffer[j][te],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,te);else ge(W.__webglFramebuffer[j],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);v(S)?M(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(Ee){for(let j=0,te=ie.length;j<te;j++){let Se=ie[j],U=n.get(Se),K=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(K=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,U.__webglTexture),Fe(K,Se),ge(W.__webglFramebuffer,P,Se,i.COLOR_ATTACHMENT0+j,K,0),v(Se)&&M(K)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(j=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,pe.__webglTexture),Fe(j,S),S.mipmaps.length>0)for(let te=0;te<S.mipmaps.length;te++)ge(W.__webglFramebuffer[te],P,S,i.COLOR_ATTACHMENT0,j,te);else ge(W.__webglFramebuffer,P,S,i.COLOR_ATTACHMENT0,j,0);v(S)?M(j):S.mipmaps.length>0&&i.texParameteri(j,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&it(P)}function O(P){let S=P.textures;for(let W=0,pe=S.length;W<pe;W++){let ie=S[W];if(v(ie)&&ie.mipmapsAutoUpdate===!0){let Me=w(P),Ee=n.get(ie).__webglTexture;t.bindTexture(Me,Ee),M(Me),t.unbindTexture()}}}let yt=[];function et(P){if(P.samples>0){if(ve(P)===!1){let S=P.textures,W=P.width,pe=P.height,ie=i.COLOR_BUFFER_BIT,Me=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(P),j=S.length>1;if(j)for(let Se=0;Se<S.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Se=0;Se<S.length;Se++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Se]);let U=n.get(S[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,U,0)}i.blitFramebuffer(0,0,W,pe,0,0,W,pe,ie,i.NEAREST),l===!0&&(yt.length=0,yt.push(i.COLOR_ATTACHMENT0+Se),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&yt.push(Me),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,yt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let Se=0;Se<S.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Se]);let U=n.get(S[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,U,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let S=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function gt(P){return Math.min(s.maxSamples,P.samples)}function ve(P){let S=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ut(P){let S=o.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function Xe(P,S){let W=P.colorSpace,pe=P.format,ie=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==er&&W!==oi&&(xt.getTransfer(W)===St?(pe!==Un||ie!==ln)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",W)),S}function Oe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Pe,this.resetTextureUnits=Z,this.getTextureUnits=le,this.setTextureUnits=Ie,this.setTexture2D=ye,this.setTexture2DArray=be,this.setTexture3D=Ve,this.setTextureCube=he,this.rebindTextures=rt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ve,this.dispose=B}function Q0(i,e){function t(n,s=oi){let r,o=xt.getTransfer(s);if(n===ln)return i.UNSIGNED_BYTE;if(n===la)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ca)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ec)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kl)return i.BYTE;if(n===Ql)return i.SHORT;if(n===Cs)return i.UNSIGNED_SHORT;if(n===aa)return i.INT;if(n===Dn)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===Nn)return i.HALF_FLOAT;if(n===tc)return i.ALPHA;if(n===nc)return i.RGB;if(n===Un)return i.RGBA;if(n===ei)return i.DEPTH_COMPONENT;if(n===ri)return i.DEPTH_STENCIL;if(n===ha)return i.RED;if(n===ua)return i.RED_INTEGER;if(n===Ei)return i.RG;if(n===da)return i.RG_INTEGER;if(n===fa)return i.RGBA_INTEGER;if(n===Nr||n===Ur||n===Fr||n===Or)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pa||n===ma||n===ga||n===xa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===pa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_a||n===va||n===ya||n===Ma||n===Ea||n===Br||n===Sa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_a||n===va)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ya)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ma)return r.COMPRESSED_R11_EAC;if(n===Ea)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Br)return r.COMPRESSED_RG11_EAC;if(n===Sa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ba||n===Ta||n===wa||n===Aa||n===Ra||n===Ca||n===Pa||n===Ia||n===La||n===Da||n===Na||n===Ua||n===Fa||n===Oa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ba)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ta)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wa)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Aa)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ra)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ca)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pa)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ia)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===La)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Da)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Na)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ua)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fa)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oa)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ba||n===Ha||n===za)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ba)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===za)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ka||n===Ga||n===Hr||n===Va)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ka)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ga)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Va)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var j0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ex=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Tc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ur(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new En({vertexShader:j0,fragmentShader:ex,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new se(new Vt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wc=class extends kn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,x=null,y=typeof XRWebGLBinding<"u",p=new Tc,m={},_=t.getContextAttributes(),v=null,M=null,w=[],T=[],g=new we,E=null,L=null,R=new Qt;R.viewport=new Lt;let N=new Qt;N.viewport=new Lt;let A=[R,N],D=new ea,C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ye=w[J];return ye===void 0&&(ye=new gs,w[J]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(J){let ye=w[J];return ye===void 0&&(ye=new gs,w[J]=ye),ye.getGripSpace()},this.getHand=function(J){let ye=w[J];return ye===void 0&&(ye=new gs,w[J]=ye),ye.getHandSpace()};function H(J){let ye=T.indexOf(J.inputSource);if(ye===-1)return;let be=w[ye];be!==void 0&&(be.update(J.inputSource,J.frame,c||o),be.dispatchEvent({type:J.type,data:J.inputSource}))}function k(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",re);for(let J=0;J<w.length;J++){let ye=T[J];ye!==null&&(T[J]=null,w[J].disconnect(ye))}C=null,B=null,p.reset();for(let J in m)delete m[J];if(e.setRenderTarget(v),d=null,u=null,f=null,s=null,M=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(g.width,g.height,!1),L!==null){let J=L.camera;J.fov=L.fov,J.zoom=L.zoom,J.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",k),s.addEventListener("inputsourceschange",re),_.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(g),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ve=null,he=null;_.depth&&(he=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=_.stencil?ri:ei,Ve=_.stencil?Gi:Dn);let ee={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(ee),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new un(u.textureWidth,u.textureHeight,{format:Un,type:ln,depthTexture:new ni(u.textureWidth,u.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let be={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new un(d.framebufferWidth,d.framebufferHeight,{format:Un,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Pe.setContext(s),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function re(J){for(let ye=0;ye<J.removed.length;ye++){let be=J.removed[ye],Ve=T.indexOf(be);Ve>=0&&(T[Ve]=null,w[Ve].disconnect(be))}for(let ye=0;ye<J.added.length;ye++){let be=J.added[ye],Ve=T.indexOf(be);if(Ve===-1){for(let ee=0;ee<w.length;ee++)if(ee>=T.length){T.push(be),Ve=ee;break}else if(T[ee]===null){T[ee]=be,Ve=ee;break}if(Ve===-1)break}let he=w[Ve];he&&he.connect(be)}}function X(J,ye){ye===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ye.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ye=J.near,be=J.far;p.texture!==null&&(p.depthNear>0&&(ye=p.depthNear),p.depthFar>0&&(be=p.depthFar)),D.near=N.near=R.near=ye,D.far=N.far=R.far=be,(C!==D.near||B!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),C=D.near,B=D.far),D.layers.mask=J.layers.mask|6,R.layers.mask=D.layers.mask&-5,N.layers.mask=D.layers.mask&-3;let Ve=J.parent,he=D.cameras;X(D,Ve);for(let ee=0;ee<he.length;ee++)X(he[ee],Ve);D.projectionMatrix.copy(R.projectionMatrix),D.projectionMatrixInverse.copy(R.projectionMatrixInverse),L===null&&J.isPerspectiveCamera&&(L={camera:J,fov:J.fov,zoom:J.zoom}),Z(J,D,Ve)};function Z(J,ye,be){be===null?J.matrix.copy(ye.matrixWorld):(J.matrix.copy(be.matrixWorld),J.matrix.invert(),J.matrix.multiply(ye.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ye.projectionMatrix),J.projectionMatrixInverse.copy(ye.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ii*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function(J){return m[J]};let le=null;function Ie(J,ye){if(h=ye.getViewerPose(c||o),x=ye,h!==null){let be=h.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let Ve=!1;be.length!==D.cameras.length&&(D.cameras.length=0,Ve=!0);for(let _e=0;_e<be.length;_e++){let Fe=be[_e],Je=null;if(d!==null)Je=d.getViewport(Fe);else{let de=f.getViewSubImage(u,Fe);Je=de.viewport,_e===0&&(e.setRenderTargetTextures(M,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(M))}let ne=A[_e];ne===void 0&&(ne=new Qt,ne.layers.enable(_e),ne.viewport=new Lt,A[_e]=ne),ne.matrix.fromArray(Fe.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Fe.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Je.x,Je.y,Je.width,Je.height),_e===0&&(D.matrix.copy(ne.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ve===!0&&D.cameras.push(ne)}let he=s.enabledFeatures;if(he&&he.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let _e=f.getDepthInformation(be[0]);_e&&_e.isValid&&_e.texture&&p.init(_e,s.renderState)}if(he&&he.includes("camera-access")&&y){e.state.unbindTexture(),f=n.getBinding();for(let _e=0;_e<be.length;_e++){let Fe=be[_e].camera;if(Fe){let Je=m[Fe];Je||(Je=new ur,m[Fe]=Je);let ne=f.getCameraImage(Fe);Je.sourceTexture=ne}}}}for(let be=0;be<w.length;be++){let Ve=T[be],he=w[be];Ve!==null&&he!==void 0&&he.update(Ve,ye,c||o)}le&&le(J,ye),ye.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ye}),x=null}let Pe=new Eu;Pe.setAnimationLoop(Ie),this.setAnimationLoop=function(J){le=J},this.dispose=function(){}}},tx=new Tt,Lu=new st;Lu.set(-1,0,0,0,1,0,0,0,1);function nx(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,fc(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,_,v,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),x(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,_,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Wt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Wt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _=e.get(m),v=_.envMap,M=_.envMapRotation;v&&(p.envMap.value=v,p.envMapRotation.value.setFromMatrix4(tx.makeRotationFromEuler(M)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Lu),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,_){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Wt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let _=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ix(i,e,t,n){let s={},r={};function o(_,v){let M=v.program;n.uniformBlockBinding(_,M,s[_.id])}function a(_,v){let M=s[_.id];M===void 0&&(x(_),M=l(_),s[_.id]=M,_.addEventListener("dispose",p));let w=v.program;n.updateUBOMapping(_,w);let T=e.render.frame;r[_.id]!==T&&(c(_),r[_.id]=T)}function l(_){let v=i.createBuffer(),M=_.__size,w=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,M,w),i.bindBuffer(i.UNIFORM_BUFFER,null),v}function c(_){let v=s[_.id],M=_.uniforms,w=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,g=M.length;T<g;T++){let E=M[T];if(Array.isArray(E))for(let L=0,R=E.length;L<R;L++)h(E[L],T,L,w);else h(E,T,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,v,M,w){if(u(_,v,M,w)===!0){let T=_.__offset,g=_.value;if(Array.isArray(g)){let E=0;for(let L=0;L<g.length;L++){let R=g[L],N=y(R,!0);f(R,_.__data,E),E+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,_.__data)}}function f(_,v,M){typeof _=="number"||typeof _=="boolean"?v[M]=_:_.isMatrix3?(v[M]=_.elements[0],v[M+1]=_.elements[1],v[M+2]=_.elements[2],v[M+3]=0,v[M+4]=_.elements[3],v[M+5]=_.elements[4],v[M+6]=_.elements[5],v[M+7]=0,v[M+8]=_.elements[6],v[M+9]=_.elements[7],v[M+10]=_.elements[8],v[M+11]=0):ArrayBuffer.isView(_)?v.set(_.subarray(0,v.length-M),M):_.toArray(v,M)}function u(_,v,M,w){let T=_.value,g=v+"_"+M;if(Array.isArray(T)){w[g]===void 0&&(w[g]=[]);let E=w[g],L=!1;for(let R=0;R<T.length;R++)d(T[R],E,R)===!0&&(L=!0);return L}return d(T,w,g)}function d(_,v,M){if(v[M]===void 0)return typeof _=="number"||typeof _=="boolean"?v[M]=_:ArrayBuffer.isView(_)?v[M]=_.slice():v[M]=_.clone(),!0;{let w=v[M];if(typeof _=="number"||typeof _=="boolean"){if(w!==_)return v[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(w.equals(_)===!1)return w.copy(_),!0}}return!1}function x(_){let v=_.uniforms,M=0,w=16;for(let g=0,E=v.length;g<E;g++){let L=Array.isArray(v[g])?v[g]:[v[g]];for(let R=0,N=L.length;R<N;R++){let A=L[R],D=Array.isArray(A.value)?A.value:[A.value],C=Array.isArray(v[g])||Array.isArray(A.value),B=M;for(let k=0,re=D.length;k<re;k++){let X=D[k],Z=y(X,C),le=M%w,Ie=le%Z.boundary,Pe=le+Ie;M+=Ie,Pe!==0&&w-Pe<Z.storage&&(M+=w-Pe),k===0&&(B=M),M+=Z.storage}let H=A.type==="int"?Int32Array:A.type==="uint"?Uint32Array:Float32Array;A.__data=new H((M-B)/Float32Array.BYTES_PER_ELEMENT),A.__offset=B}}let T=M%w;return T>0&&(M+=w-T),_.__size=M,_.__cache={},this}function y(_,v){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=16,M.storage=48):_.isMatrix4?(M.boundary=16,M.storage=64):_.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):je("WebGLRenderer: Unsupported uniform value type.",_),v===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function p(_){let v=_.target;v.removeEventListener("dispose",p),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let _ in s)i.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:m}}var sx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xn=null;function rx(){return Xn===null&&(Xn=new ar(sx,16,16,Ei,Nn),Xn.name="DFG_LUT",Xn.minFilter=rn,Xn.magFilter=rn,Xn.wrapS=Hn,Xn.wrapT=Hn,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}var qa=class{constructor(e={}){let{canvas:t=kh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=ln}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;let y=d,p=new Set([fa,da,ua]),m=new Set([ln,Dn,Cs,Gi,la,ca]),_=new Uint32Array(4),v=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},w=null,T=null,g=[],E=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,A=null,D=null,C=null,B=null;this._outputColorSpace=It;let H=0,k=0,re=null,X=-1,Z=null,le=new Lt,Ie=new Lt,Pe=null,J=new Ge(0),ye=0,be=t.width,Ve=t.height,he=1,ee=null,Le=null,_e=new Lt(0,0,be,Ve),Fe=new Lt(0,0,be,Ve),Je=!1,ne=new mi,de=new Oo,me=!1,xe=!1,ge=new Tt,De=new I,Be=new Lt,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},rt=!1;function ot(){return re===null?he:1}let O=n;function yt(b,F){return t.getContext(b,F)}let et,gt,ve,ut,Xe,Oe,P,S,W,pe,ie,Me,Ee,j,te,Se,U,K,Q,z,ce,fe,He;try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ta}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",ue,!1),O===null){let F="webgl2";if(O=yt(F,b),O===null)throw yt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}V()}catch(b){throw t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),nt("WebGLRenderer: "+b.message),b}function V(){et=new gg(O),et.init(),ce=new Q0(O,et),gt=new rg(O,et,e,ce),ve=new $0(O,et),gt.reversedDepthBuffer&&u&&ve.buffers.depth.setReversed(!0),D=O.createFramebuffer(),C=O.createFramebuffer(),B=O.createFramebuffer(),ut=new vg(O),Xe=new F0,Oe=new K0(O,et,ve,Xe,gt,ce,ut),P=new mg(R),S=new Mf(O),fe=new ig(O,S),W=new xg(O,S,ut,fe),pe=new Mg(O,W,S,fe,ut),K=new yg(O,gt,Oe),te=new og(Xe),ie=new U0(R,P,et,gt,fe,te),Me=new nx(R,Xe),Ee=new B0,j=new W0(et),U=new ng(R,P,ve,pe,x,l),Se=new J0(R,pe,gt),He=new ix(O,ut,gt,ve),Q=new sg(O,et,ut),z=new _g(O,et,ut),ut.programs=ie.programs,R.capabilities=gt,R.extensions=et,R.properties=Xe,R.renderLists=Ee,R.shadowMap=Se,R.state=ve,R.info=ut}y!==ln&&(L=new Sg(y,t.width,t.height,a,s,r));let G=new wc(R,O);this.xr=G,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=et.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=et.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(b){b!==void 0&&(he=b,this.setSize(be,Ve,!1))},this.getSize=function(b){return b.set(be,Ve)},this.setSize=function(b,F,$=!0){if(G.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}be=b,Ve=F,t.width=Math.floor(b*he),t.height=Math.floor(F*he),$===!0&&(t.style.width=b+"px",t.style.height=F+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(be*he,Ve*he).floor()},this.setDrawingBufferSize=function(b,F,$){be=b,Ve=F,he=$,t.width=Math.floor(b*$),t.height=Math.floor(F*$),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(y===ln){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(le)},this.getViewport=function(b){return b.copy(_e)},this.setViewport=function(b,F,$,q){b.isVector4?_e.set(b.x,b.y,b.z,b.w):_e.set(b,F,$,q),ve.viewport(le.copy(_e).multiplyScalar(ot()).round())},this.getScissor=function(b){return b.copy(Fe)},this.setScissor=function(b,F,$,q){b.isVector4?Fe.set(b.x,b.y,b.z,b.w):Fe.set(b,F,$,q),ve.scissor(Ie.copy(Fe).multiplyScalar(ot()).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(b){ve.setScissorTest(Je=b)},this.setOpaqueSort=function(b){ee=b},this.setTransparentSort=function(b){Le=b},this.getClearColor=function(b){return b.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,$=!0){let q=0;if(b){let Y=!1;if(re!==null){let Ce=re.texture.format;Y=p.has(Ce)}if(Y){let Ce=re.texture.type,We=m.has(Ce),Re=U.getClearColor(),Ne=U.getClearAlpha(),Ye=Re.r,tt=Re.g,at=Re.b;We?(_[0]=Ye,_[1]=tt,_[2]=at,_[3]=Ne,O.clearBufferuiv(O.COLOR,0,_)):(v[0]=Ye,v[1]=tt,v[2]=at,v[3]=Ne,O.clearBufferiv(O.COLOR,0,v))}else q|=O.COLOR_BUFFER_BIT}F&&(q|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),A=b},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),U.dispose(),Ee.dispose(),j.dispose(),Oe.dispose(),Xe.dispose(),P.dispose(),pe.dispose(),W.dispose(),fe.dispose(),He.dispose(),ie.dispose(),G.dispose(),G.removeEventListener("sessionstart",Xi),G.removeEventListener("sessionend",Si),Fn.stop()};function oe(b){b.preventDefault(),lc("WebGLRenderer: Context Lost."),N=!0}function Ae(){lc("WebGLRenderer: Context Restored."),N=!1;let b=ut.autoReset,F=Se.enabled,$=Se.autoUpdate,q=Se.needsUpdate,Y=Se.type;V(),ut.autoReset=b,Se.enabled=F,Se.autoUpdate=$,Se.needsUpdate=q,Se.type=Y}function ue(b){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function $e(b){let F=b.target;F.removeEventListener("dispose",$e),Qe(F)}function Qe(b){_t(b),Xe.remove(b)}function _t(b){let F=Xe.get(b).programs;F!==void 0&&(F.forEach(function($){ie.releaseProgram($)}),b.isShaderMaterial&&ie.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,$,q,Y,Ce){F===null&&(F=it);let We=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Re=zs(b,F,$,q,Y);ve.setMaterial(q,We);let Ne=$.index,Ye=1;if(q.wireframe===!0){if(Ne=W.getWireframeAttribute($),Ne===void 0)return;Ye=2}let tt=$.drawRange,at=$.attributes.position,qe=tt.start*Ye,mt=(tt.start+tt.count)*Ye;Ce!==null&&(qe=Math.max(qe,Ce.start*Ye),mt=Math.min(mt,(Ce.start+Ce.count)*Ye)),Ne!==null?(qe=Math.max(qe,0),mt=Math.min(mt,Ne.count)):at!=null&&(qe=Math.max(qe,0),mt=Math.min(mt,at.count));let Dt=mt-qe;if(Dt<0||Dt===1/0)return;fe.setup(Y,q,Re,$,Ne);let bt,Et=Q;if(Ne!==null&&(bt=S.get(Ne),Et=z,Et.setIndex(bt)),Y.isMesh)q.wireframe===!0?(ve.setLineWidth(q.wireframeLinewidth*ot()),Et.setMode(O.LINES)):Et.setMode(O.TRIANGLES);else if(Y.isLine){let Te=q.linewidth;Te===void 0&&(Te=1),ve.setLineWidth(Te*ot()),Y.isLineSegments?Et.setMode(O.LINES):Y.isLineLoop?Et.setMode(O.LINE_LOOP):Et.setMode(O.LINE_STRIP)}else Y.isPoints?Et.setMode(O.POINTS):Y.isSprite&&Et.setMode(O.TRIANGLES);if(Y.isBatchedMesh)if(et.get("WEBGL_multi_draw"))Et.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Te=Y._multiDrawStarts,ae=Y._multiDrawCounts,Ze=Y._multiDrawCount,ze=Ne?S.get(Ne).bytesPerElement:1,At=Xe.get(q).currentProgram.getUniforms();for(let Rt=0;Rt<Ze;Rt++)At.setValue(O,"_gl_DrawID",Rt),Et.render(Te[Rt]/ze,ae[Rt])}else if(Y.isInstancedMesh)Et.renderInstances(qe,Dt,Y.count);else if($.isInstancedBufferGeometry){let Te=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ae=Math.min($.instanceCount,Te);Et.renderInstances(qe,Dt,ae)}else Et.render(qe,Dt)};function pt(b,F,$,q){A!==null&&b.isNodeMaterial&&A.setObject(q,b),me===!0&&te.setState(b,$,!1),b.transparent===!0&&b.side===on&&b.forceSinglePass===!1?(b.side=Wt,b.needsUpdate=!0,On(b,F,q),b.side=Mi,b.needsUpdate=!0,On(b,F,q),b.side=on):On(b,F,q)}this.compile=function(b,F,$=null){$===null&&($=b),A!==null&&A.renderStart(b,F,$),T=j.get($),T.init(F),E.push(T),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),b!==$&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),T.setupLights(),A!==null&&A.updateLights(T.state.lightsArray),xe=this.localClippingEnabled,me=te.init(this.clippingPlanes,xe),me===!0&&te.setGlobalState(this.clippingPlanes,F),A!==null&&Se.render(T.state.shadowsArray,$,F);let q=new Set;return b.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Ce=Y.material;if(Ce)if(Array.isArray(Ce))for(let We=0;We<Ce.length;We++){let Re=Ce[We];pt(Re,$,F,Y),q.add(Re)}else pt(Ce,$,F,Y),q.add(Ce)}),T=E.pop(),A!==null&&A.renderEnd(),q},this.compileAsync=function(b,F,$=null){let q=this.compile(b,F,$);return new Promise(Y=>{function Ce(){if(q.forEach(function(We){let Ne=Xe.get(We).currentProgram;(Ne===void 0||Ne.isReady())&&q.delete(We)}),q.size===0){Y(b);return}setTimeout(Ce,10)}et.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Ut=null;function Yn(b){Ut&&Ut(b)}function Xi(){Fn.stop()}function Si(){Fn.start()}let Fn=new Eu;Fn.setAnimationLoop(Yn),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(b){Ut=b,G.setAnimationLoop(b),b===null?Fn.stop():Fn.start()},G.addEventListener("sessionstart",Xi),G.addEventListener("sessionend",Si),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;A!==null&&A.renderStart(b,F);let $=G.enabled===!0&&G.isPresenting===!0,q=L!==null&&(re===null||$)&&L.begin(R,re);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(G.cameraAutoUpdate===!0&&G.updateCamera(F),F=G.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,F,re),T=j.get(b,E.length),T.init(F),T.state.textureUnits=Oe.getTextureUnits(),E.push(T),ge.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?de.setFromArrayCamera(F):ne.setFromProjectionMatrix(ge,xn,F.reversedDepth),xe=this.localClippingEnabled,me=te.init(this.clippingPlanes,xe),w=Ee.get(b,g.length),w.init(),g.push(w),this.info.render.frame++,G.enabled===!0&&G.isPresenting===!0){let We=R.xr.getDepthSensingMesh();We!==null&&qi(We,F,-1/0,R.sortObjects)}qi(b,F,0,R.sortObjects),w.finish(),A!==null&&A.updateLights(T.state.lightsArray),R.sortObjects===!0&&w.sort(ee,Le),rt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,rt&&U.addToRenderList(w,b),this.info.autoReset===!0&&this.info.reset(),me===!0&&te.beginShadows();let Y=T.state.shadowsArray;if(Se.render(Y,b,F),me===!0&&te.endShadows(),(q&&L.hasRenderPass())===!1){let We=w.opaque,Re=w.transmissive;if(T.setupLights(),F.isArrayCamera){let Ne=F.cameras;if(Re.length>0)for(let Ye=0,tt=Ne.length;Ye<tt;Ye++){let at=Ne[Ye];Fs(We,Re,b,at)}rt&&U.render(b);for(let Ye=0,tt=Ne.length;Ye<tt;Ye++){let at=Ne[Ye];Yi(w,b,at,at.viewport)}}else Re.length>0&&Fs(We,Re,b,F),rt&&U.render(b),Yi(w,b,F)}re!==null&&k===0&&(Oe.updateMultisampleRenderTarget(re),Oe.updateRenderTargetMipmap(re)),q&&L.end(R),b.isScene===!0&&b.onAfterRender(R,b,F),fe.resetDefaultState(),X=-1,Z=null,E.pop(),E.length>0?(T=E[E.length-1],Oe.setTextureUnits(T.state.textureUnits),me===!0&&te.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,g.pop(),g.length>0?w=g[g.length-1]:w=null,A!==null&&A.renderEnd()};function qi(b,F,$,q){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){let We=F.isArrayCamera?de:ne;if(!b.frustumCulled||b.intersectsFrustum(We)){q&&Be.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ge);let Re=pe.update(b),Ne=b.material;Ne.visible&&w.push(b,Re,Ne,$,Be.z,null,F)}}else if(b.isMesh||b.isLine||b.isPoints){let We=F.isArrayCamera?de:ne;if(!b.frustumCulled||b.intersectsFrustum(We)){let Re=pe.update(b),Ne=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Be.copy(b.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Be.copy(Re.boundingSphere.center)),Be.applyMatrix4(b.matrixWorld).applyMatrix4(ge)),Array.isArray(Ne)){let Ye=Re.groups;for(let tt=0,at=Ye.length;tt<at;tt++){let qe=Ye[tt],mt=Ne[qe.materialIndex];mt&&mt.visible&&w.push(b,Re,mt,$,Be.z,qe,F)}}else Ne.visible&&w.push(b,Re,Ne,$,Be.z,null,F)}}}let Ce=b.children;for(let We=0,Re=Ce.length;We<Re;We++)qi(Ce[We],F,$,q)}function Yi(b,F,$,q){let{opaque:Y,transmissive:Ce,transparent:We}=b;T.setupLightsView($),me===!0&&te.setGlobalState(R.clippingPlanes,$),q&&ve.viewport(le.copy(q)),Y.length>0&&bi(Y,F,$),Ce.length>0&&bi(Ce,F,$),We.length>0&&bi(We,F,$),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Fs(b,F,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[q.id]===void 0){let qe=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[q.id]=new un(1,1,{generateMipmaps:!0,type:qe?Nn:ln,minFilter:si,samples:Math.max(4,gt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xt.workingColorSpace})}let Ce=T.state.transmissionRenderTarget[q.id],We=q.viewport||le;Ce.setSize(We.z*R.transmissionResolutionScale,We.w*R.transmissionResolutionScale);let Re=R.getRenderTarget(),Ne=R.getActiveCubeFace(),Ye=R.getActiveMipmapLevel();R.setRenderTarget(Ce),R.getClearColor(J),ye=R.getClearAlpha(),ye<1&&R.setClearColor(16777215,.5),R.clear(),rt&&U.render($);let tt=R.toneMapping;R.toneMapping=Wn;let at=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),T.setupLightsView(q),me===!0&&te.setGlobalState(R.clippingPlanes,q),bi(b,$,q),Oe.updateMultisampleRenderTarget(Ce),Oe.updateRenderTargetMipmap(Ce),et.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let mt=0,Dt=F.length;mt<Dt;mt++){let bt=F[mt],{object:Et,geometry:Te,material:ae,group:Ze}=bt;if(ae.side===on&&Et.layers.test(q.layers)){let ze=ae.side;ae.side=Wt,ae.needsUpdate=!0,Os(Et,$,q,Te,ae,Ze),ae.side=ze,ae.needsUpdate=!0,qe=!0}}qe===!0&&(Oe.updateMultisampleRenderTarget(Ce),Oe.updateRenderTargetMipmap(Ce))}R.setRenderTarget(Re,Ne,Ye),R.setClearColor(J,ye),at!==void 0&&(q.viewport=at),R.toneMapping=tt}function bi(b,F,$){let q=F.isScene===!0?F.overrideMaterial:null;for(let Y=0,Ce=b.length;Y<Ce;Y++){let We=b[Y],{object:Re,geometry:Ne,group:Ye}=We,tt=We.material;tt.allowOverride===!0&&q!==null&&(tt=q),Re.layers.test($.layers)&&Os(Re,F,$,Ne,tt,Ye)}}function Os(b,F,$,q,Y,Ce){A!==null&&Y.isNodeMaterial&&A.setObject(b,Y),b.onBeforeRender(R,F,$,q,Y,Ce),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(R,F,$,q,b,Ce),Y.transparent===!0&&Y.side===on&&Y.forceSinglePass===!1?(Y.side=Wt,Y.needsUpdate=!0,R.renderBufferDirect($,F,q,Y,b,Ce),Y.side=Mi,Y.needsUpdate=!0,R.renderBufferDirect($,F,q,Y,b,Ce),Y.side=on):R.renderBufferDirect($,F,q,Y,b,Ce),b.onAfterRender(R,F,$,q,Y,Ce)}function ai(b){let F=0;for(let $ of b)$.texture!==null&&F++;return F}function On(b,F,$){F.isScene!==!0&&(F=it);let q=Xe.get(b),Y=T.state.lights,Ce=T.state.shadowsArray,We=Y.state.version,Re=ie.getParameters(b,Y.state,Ce,F,$,T.state.lightProbeGridArray),Ne=ie.getProgramCacheKey(Re),Ye=q.programs;q.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,q.fog=F.fog;let tt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;q.envMap=P.get(b.envMap||q.environment,tt),q.envMapRotation=q.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Ye===void 0&&(b.addEventListener("dispose",$e),Ye=new Map,q.programs=Ye,q.programVariants=new Map);let at=Ye.get(Ne);if(at!==void 0){if(q.currentProgram===at&&q.lightsStateVersion===We)return Hs(b,Re),at}else Re.uniforms=ie.getUniforms(b),A!==null&&b.isNodeMaterial&&A.build(b,$,Re),b.onBeforeCompile(Re,R),at=ie.acquireProgram(Re,Ne),Ye.set(Ne,at),q.uniforms=Re.uniforms;let qe=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(qe.clippingPlanes=te.uniform),Hs(b,Re),q.needsLights=$r(b),q.lightsStateVersion=We,q.needsLights&&(qe.ambientLightColor.value=Y.state.ambient,qe.lightProbe.value=Y.state.probe,qe.sunLights.value=Y.state.sun,qe.sunLightShadows.value=Y.state.sunShadow,qe.directionalLights.value=Y.state.directional,qe.directionalLightShadows.value=Y.state.directionalShadow,qe.spotLights.value=Y.state.spot,qe.spotLightShadows.value=Y.state.spotShadow,qe.rectAreaLights.value=Y.state.rectArea,qe.ltc_1.value=Y.state.rectAreaLTC1,qe.ltc_2.value=Y.state.rectAreaLTC2,qe.pointLights.value=Y.state.point,qe.pointLightShadows.value=Y.state.pointShadow,qe.hemisphereLights.value=Y.state.hemi,qe.sunShadowMatrix.value=Y.state.sunShadowMatrix,qe.sunShadowCascade.value=Y.state.sunShadowCascade,qe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,qe.spotLightMatrix.value=Y.state.spotLightMatrix,qe.spotLightMap.value=Y.state.spotLightMap,qe.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.numLightProbeGrids=ai(T.state.lightProbeGridArray),q.currentProgram=at,q.uniformsList=null,at}function Jr(b,F,$,q,Y){let Ce=Xe.get(b),We=Ce.currentProgram.id+","+q+","+Y,Re=Ce.programVariants.get(We);return Re===void 0?(Re=On(b,F,$),Ce.programVariants.set(We,Re)):(Ce.currentProgram=Re,Ce.uniformsList=null,Ce.outputColorSpace=q,Ce.toneMapping=Y),Re}function Bs(b){if(b.uniformsList===null){let F=b.currentProgram.getUniforms();b.uniformsList=Ps.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Hs(b,F){let $=Xe.get(b);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function zs(b,F,$,q,Y){F.isScene!==!0&&(F=it),Oe.resetTextureUnits();let Ce=F.fog,We=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?F.environment:null,Re=re===null?R.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:xt.workingColorSpace,Ne=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Ye=P.get(q.envMap||We,Ne),tt=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,at=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),qe=!!$.morphAttributes.position,mt=!!$.morphAttributes.normal,Dt=!!$.morphAttributes.color,bt=Wn;q.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(bt=R.toneMapping);let Et=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Te=Et!==void 0?Et.length:0,ae=Xe.get(q),Ze=T.state.lights;if(me===!0&&(xe===!0||b!==Z)){let Ct=b===Z&&q.id===X;te.setState(q,b,Ct)}let ze=!1,At=!1;q.version===ae.__version?ae.needsLights&&ae.lightsStateVersion!==Ze.state.version||Y.isBatchedMesh&&ae.batching===!1||!Y.isBatchedMesh&&ae.batching===!0||Y.isBatchedMesh&&ae.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&ae.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&ae.instancing===!1||!Y.isInstancedMesh&&ae.instancing===!0||Y.isSkinnedMesh&&ae.skinning===!1||!Y.isSkinnedMesh&&ae.skinning===!0||Y.isInstancedMesh&&ae.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ae.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&ae.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&ae.instancingMorph===!1&&Y.morphTexture!==null||ae.envMap!==Ye||q.fog===!0&&ae.fog!==Ce||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==te.numPlanes||ae.numIntersection!==te.numIntersection)||ae.vertexAlphas!==tt||ae.vertexTangents!==at||ae.morphTargets!==qe||ae.morphNormals!==mt||ae.morphColors!==Dt||ae.morphTargetsCount!==Te||ae.numLightProbeGrids!==ai(T.state.lightProbeGridArray)?ze=!0:(ae.outputColorSpace!==Re||ae.toneMapping!==bt)&&(At=!0):(ze=!0,ae.__version=q.version);let Rt=ae.currentProgram;(ze===!0||At===!0)&&(Rt=At===!0?Jr(q,F,Y,Re,bt):On(q,F,Y),A&&q.isNodeMaterial&&A.onUpdateProgram(q,Rt,ae));let mn=!1,Kt=!1,kt=!1,ft=Rt.getUniforms(),Ft=ae.uniforms;if(ve.useProgram(Rt.program)&&(mn=!0,Kt=!0,kt=!0),q.id!==X&&(X=q.id,Kt=!0),mn||Z!==b){ve.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ft.setValue(O,"projectionMatrix",b.projectionMatrix),ft.setValue(O,"viewMatrix",b.matrixWorldInverse);let Bt=ft.map.cameraPosition;Bt!==void 0&&Bt.setValue(O,De.setFromMatrixPosition(b.matrixWorld)),gt.logarithmicDepthBuffer&&ft.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ft.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),Z!==b&&(Z=b,Kt=!0,kt=!0)}if(ae.needsLights&&(Ze.state.sunShadowMap.length>0&&ft.setValue(O,"sunShadowMap",Ze.state.sunShadowMap,Oe),Ze.state.directionalShadowMap.length>0&&ft.setValue(O,"directionalShadowMap",Ze.state.directionalShadowMap,Oe),Ze.state.spotShadowMap.length>0&&ft.setValue(O,"spotShadowMap",Ze.state.spotShadowMap,Oe),Ze.state.pointShadowMap.length>0&&ft.setValue(O,"pointShadowMap",Ze.state.pointShadowMap,Oe)),Y.isSkinnedMesh){ft.setOptional(O,Y,"bindMatrix"),ft.setOptional(O,Y,"bindMatrixInverse");let Ct=Y.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),ft.setValue(O,"boneTexture",Ct.boneTexture,Oe))}Y.isBatchedMesh&&(ft.setOptional(O,Y,"batchingTexture"),ft.setValue(O,"batchingTexture",Y._matricesTexture,Oe),ft.setOptional(O,Y,"batchingIdTexture"),ft.setValue(O,"batchingIdTexture",Y._indirectTexture,Oe),ft.setOptional(O,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ft.setValue(O,"batchingColorTexture",Y._colorsTexture,Oe));let Yt=$.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&K.update(Y,$,Rt),(Kt||ae.receiveShadow!==Y.receiveShadow)&&(ae.receiveShadow=Y.receiveShadow,ft.setValue(O,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&F.environment!==null&&(Ft.envMapIntensity.value=F.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=rx()),Kt){if(ft.setValue(O,"toneMappingExposure",R.toneMappingExposure),ae.needsLights&&ks(Ft,kt),Ce&&q.fog===!0&&Me.refreshFogUniforms(Ft,Ce),Me.refreshMaterialUniforms(Ft,q,he,Ve,T.state.transmissionRenderTarget[b.id]),ae.needsLights&&ae.numLightProbeGrids>0){let Ct=M,Bt=0;for(let jt of T.state.lightProbeGridArray)jt.texture!==null&&(Ct.textures[Bt]=jt.texture,Ct.min[Bt]=jt.boundingBox.min,Ct.max[Bt]=jt.boundingBox.max,Ct.resolution[Bt]=jt.resolution,Bt++);for(let jt in Ct)Ct[jt].length=Bt;Ft.probesSH.value=Ct.textures,Ft.probesMin.value=Ct.min,Ft.probesMax.value=Ct.max,Ft.probesResolution.value=Ct.resolution}Ps.upload(O,Bs(ae),Ft,Oe)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ps.upload(O,Bs(ae),Ft,Oe),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ft.setValue(O,"center",Y.center),ft.setValue(O,"modelViewMatrix",Y.modelViewMatrix),ft.setValue(O,"normalMatrix",Y.normalMatrix),ft.setValue(O,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let Ct=q.uniformsGroups;for(let Bt=0,jt=Ct.length;Bt<jt;Bt++){let Cc=Ct[Bt];He.update(Cc,Rt),He.bind(Cc,Rt)}}return Rt}function ks(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.sunLights.needsUpdate=F,b.sunLightShadows.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function $r(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(b,F,$){let q=Xe.get(b);q.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Xe.get(b.texture).__webglTexture=F,Xe.get(b.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:$,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){let $=Xe.get(b);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,$=0){re=b,H=F,k=$;let q=null,Y=!1,Ce=!1;if(b){let Re=Xe.get(b);if(Re.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(O.FRAMEBUFFER,Re.__webglFramebuffer),le.copy(b.viewport),Ie.copy(b.scissor),Pe=b.scissorTest,ve.viewport(le),ve.scissor(Ie),ve.setScissorTest(Pe),X=-1;return}else if(Re.__webglFramebuffer===void 0)Oe.setupRenderTarget(b);else if(Re.__hasExternalTextures)Oe.rebindTextures(b,Xe.get(b.texture).__webglTexture,Xe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let tt=b.depthTexture;if(Re.__boundDepthTexture!==tt){if(tt!==null&&Xe.has(tt)&&(b.width!==tt.image.width||b.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(b)}}let Ne=b.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Ce=!0);let Ye=Xe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ye[F])?q=Ye[F][$]:q=Ye[F],Y=!0):b.samples>0&&Oe.useMultisampledRTT(b)===!1?q=Xe.get(b).__webglMultisampledFramebuffer:Array.isArray(Ye)?q=Ye[$]:q=Ye,le.copy(b.viewport),Ie.copy(b.scissor),Pe=b.scissorTest}else le.copy(_e).multiplyScalar(he).floor(),Ie.copy(Fe).multiplyScalar(he).floor(),Pe=Je;if($!==0&&(q=D),ve.bindFramebuffer(O.FRAMEBUFFER,q)&&ve.drawBuffers(b,q),ve.viewport(le),ve.scissor(Ie),ve.setScissorTest(Pe),Y){let Re=Xe.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,Re.__webglTexture,$)}else if(Ce){let Re=F;for(let Ne=0;Ne<b.textures.length;Ne++){let Ye=Xe.get(b.textures[Ne]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ne,Ye.__webglTexture,$,Re)}}else if(b!==null&&$!==0){let Re=Xe.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Re.__webglTexture,$)}X=-1};function Zi(b){let F=Xe.get(b);return(F.__readFormat!==b.format||F.__readType!==b.type)&&(F.__readFormat=b.format,F.__readType=b.type,F.__formatReadable=gt.textureFormatReadable(b.format),F.__typeReadable=gt.textureTypeReadable(b.type)),F}this.readRenderTargetPixels=function(b,F,$,q,Y,Ce,We,Re=0){if(!(b&&b.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Xe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&We!==void 0&&(Ne=Ne[We],Array.isArray(Ne)&&(Ne=Ne[0])),Ne){ve.bindFramebuffer(O.FRAMEBUFFER,Ne);try{let Ye=b.textures[Re],tt=Ye.format,at=Ye.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Re);let qe=Zi(Ye);if(qe.__formatReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-q&&$>=0&&$<=b.height-Y&&O.readPixels(F,$,q,Y,ce.convert(tt),ce.convert(at),Ce)}finally{let Ye=re!==null?Xe.get(re).__webglFramebuffer:null;ve.bindFramebuffer(O.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(b,F,$,q,Y,Ce,We,Re=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Xe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&We!==void 0&&(Ne=Ne[We],Array.isArray(Ne)&&(Ne=Ne[0])),Ne)if(F>=0&&F<=b.width-q&&$>=0&&$<=b.height-Y){ve.bindFramebuffer(O.FRAMEBUFFER,Ne);let Ye=b.textures[Re],tt=Ye.format,at=Ye.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Re);let qe=Zi(Ye);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let mt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,mt),O.bufferData(O.PIXEL_PACK_BUFFER,Ce.byteLength,O.STREAM_READ),O.readPixels(F,$,q,Y,ce.convert(tt),ce.convert(at),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Dt=re!==null?Xe.get(re).__webglFramebuffer:null;ve.bindFramebuffer(O.FRAMEBUFFER,Dt);let bt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Vh(O,bt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,mt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ce),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(mt),O.deleteSync(bt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,$=0){let q=Math.pow(2,-$),Y=Math.floor(b.image.width*q),Ce=Math.floor(b.image.height*q),We=F!==null?F.x:0,Re=F!==null?F.y:0;Oe.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,We,Re,Y,Ce),ve.unbindTexture()},this.copyTextureToTexture=function(b,F,$=null,q=null,Y=0,Ce=0){let We,Re,Ne,Ye,tt,at,qe,mt,Dt,bt=b.isCompressedTexture?b.mipmaps[Ce]:b.image;if($!==null)We=$.max.x-$.min.x,Re=$.max.y-$.min.y,Ne=$.isBox3?$.max.z-$.min.z:1,Ye=$.min.x,tt=$.min.y,at=$.isBox3?$.min.z:0;else{let ft=Math.pow(2,-Y);We=Math.floor(bt.width*ft),Re=Math.floor(bt.height*ft),b.isDataArrayTexture?Ne=bt.depth:b.isData3DTexture?Ne=Math.floor(bt.depth*ft):Ne=1,Ye=0,tt=0,at=0}q!==null?(qe=q.x,mt=q.y,Dt=q.z):(qe=0,mt=0,Dt=0);let Et=ce.convert(F.format),Te=ce.convert(F.type),ae;F.isData3DTexture?(Oe.setTexture3D(F,0),ae=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Oe.setTexture2DArray(F,0),ae=O.TEXTURE_2D_ARRAY):(Oe.setTexture2D(F,0),ae=O.TEXTURE_2D),ve.activeTexture(O.TEXTURE0),ve.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),ve.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),ve.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);let Ze=ve.getParameter(O.UNPACK_ROW_LENGTH),ze=ve.getParameter(O.UNPACK_IMAGE_HEIGHT),At=ve.getParameter(O.UNPACK_SKIP_PIXELS),Rt=ve.getParameter(O.UNPACK_SKIP_ROWS),mn=ve.getParameter(O.UNPACK_SKIP_IMAGES);ve.pixelStorei(O.UNPACK_ROW_LENGTH,bt.width),ve.pixelStorei(O.UNPACK_IMAGE_HEIGHT,bt.height),ve.pixelStorei(O.UNPACK_SKIP_PIXELS,Ye),ve.pixelStorei(O.UNPACK_SKIP_ROWS,tt),ve.pixelStorei(O.UNPACK_SKIP_IMAGES,at);let Kt=b.isDataArrayTexture||b.isData3DTexture,kt=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){let ft=Xe.get(b),Ft=Xe.get(F),Yt=Xe.get(ft.__renderTarget),Ct=Xe.get(Ft.__renderTarget);ve.bindFramebuffer(O.READ_FRAMEBUFFER,Yt.__webglFramebuffer),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Bt=0;Bt<Ne;Bt++)Kt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Xe.get(b).__webglTexture,Y,at+Bt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Xe.get(F).__webglTexture,Ce,Dt+Bt)),O.blitFramebuffer(Ye,tt,Ye+We,tt+Re,qe,mt,qe+We,mt+Re,O.DEPTH_BUFFER_BIT,O.NEAREST);ve.bindFramebuffer(O.READ_FRAMEBUFFER,null),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Y!==0||b.isRenderTargetTexture||Xe.has(b)){let ft=Xe.get(b),Ft=Xe.get(F);ve.bindFramebuffer(O.READ_FRAMEBUFFER,C),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,B);for(let Yt=0;Yt<Ne;Yt++)Kt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ft.__webglTexture,Y,at+Yt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ft.__webglTexture,Y),kt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ft.__webglTexture,Ce,Dt+Yt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ft.__webglTexture,Ce),Y!==0?O.blitFramebuffer(Ye,tt,Ye+We,tt+Re,qe,mt,qe+We,mt+Re,O.COLOR_BUFFER_BIT,O.NEAREST):kt?O.copyTexSubImage3D(ae,Ce,qe,mt,Dt+Yt,Ye,tt,We,Re):O.copyTexSubImage2D(ae,Ce,qe,mt,Ye,tt,We,Re);ve.bindFramebuffer(O.READ_FRAMEBUFFER,null),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else kt?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(ae,Ce,qe,mt,Dt,We,Re,Ne,Et,Te,bt.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(ae,Ce,qe,mt,Dt,We,Re,Ne,Et,bt.data):O.texSubImage3D(ae,Ce,qe,mt,Dt,We,Re,Ne,Et,Te,bt):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Ce,qe,mt,We,Re,Et,Te,bt.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Ce,qe,mt,bt.width,bt.height,Et,bt.data):O.texSubImage2D(O.TEXTURE_2D,Ce,qe,mt,We,Re,Et,Te,bt);ve.pixelStorei(O.UNPACK_ROW_LENGTH,Ze),ve.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ze),ve.pixelStorei(O.UNPACK_SKIP_PIXELS,At),ve.pixelStorei(O.UNPACK_SKIP_ROWS,Rt),ve.pixelStorei(O.UNPACK_SKIP_IMAGES,mn),Ce===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&O.generateMipmap(ae),ve.unbindTexture()},this.initRenderTarget=function(b){Xe.get(b).__webglFramebuffer===void 0&&Oe.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Oe.setTextureCube(b,0):b.isData3DTexture?Oe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Oe.setTexture2DArray(b,0):Oe.setTexture2D(b,0),ve.unbindTexture()},this.resetState=function(){H=0,k=0,re=null,ve.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}};var Xr=new I;function Tn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Xr.copy(e),Xr[n]=0,Xr.normalize();let c=.5*o/(o+a),h=1-Xr.angleTo(i)/l;return Math.sign(Xr[t])===1?h*c:a/(o+a)+c+c*(1-h)}var Ds=class i extends ke{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new I,c=new I,h=new I(e,t,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,x=f.length/6,y=new I,p=.5/o;for(let m=0,_=0;m<f.length;m+=3,_+=2)switch(l.fromArray(f,m),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),f[m+0]=h.x*Math.sign(l.x)+c.x*r,f[m+1]=h.y*Math.sign(l.y)+c.y*r,f[m+2]=h.z*Math.sign(l.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/x)){case 0:y.set(1,0,0),d[_+0]=Tn(y,c,"z","y",r,n),d[_+1]=1-Tn(y,c,"y","z",r,t);break;case 1:y.set(-1,0,0),d[_+0]=1-Tn(y,c,"z","y",r,n),d[_+1]=1-Tn(y,c,"y","z",r,t);break;case 2:y.set(0,1,0),d[_+0]=1-Tn(y,c,"x","z",r,e),d[_+1]=Tn(y,c,"z","x",r,n);break;case 3:y.set(0,-1,0),d[_+0]=1-Tn(y,c,"x","z",r,e),d[_+1]=1-Tn(y,c,"z","x",r,n);break;case 4:y.set(0,0,1),d[_+0]=1-Tn(y,c,"x","y",r,e),d[_+1]=1-Tn(y,c,"y","x",r,t);break;case 5:y.set(0,0,-1),d[_+0]=Tn(y,c,"x","y",r,e),d[_+1]=1-Tn(y,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function Ja(i){let e=[],t=[],n=A=>(e.push(A),A),s=(A,D=.45,C=.15)=>{let B=new Ke({color:A,roughness:D,metalness:C});return t.push(B),B},r=s(15856111,.32,.35),o=s(3949898,.4,.6),a=s(1318690,.65,.1),l=s(12042692,.23,.88),c=s(35440,.35,.32),h=s(15245359,.4,.3),f=s(10825255,.65),u=s(2370349,.94,0),d=new Sn({color:529693,roughness:.13,metalness:.25,clearcoat:1});t.push(d);let x=s(1925213,.24,.15),y=new ii().load("/assets/brand/anthrise-official.png",i);y.colorSpace=It;let p=new Ke({map:y,roughness:.4});t.push(p);let m=n(new ke(1,1,1));function _(A,D,C,B,H,k,re,X,Z=0){let le=new se(Z?n(new Ds(H,k,re,3,Math.min(Z,H*.2,k*.2,re*.2))):m,X);return Z||le.scale.set(H,k,re),le.position.set(D,C,B),le.castShadow=!0,le.receiveShadow=!0,A.add(le),le}function v(A,D,C,B,H,k,re,X="y"){let Z=new se(n(new Mt(H,H,k,20)),re);return Z.position.set(D,C,B),X==="x"&&(Z.rotation.z=Math.PI/2),X==="z"&&(Z.rotation.x=Math.PI/2),Z.castShadow=!0,A.add(Z),Z}function M(A,D,C,B,H){let k=new se(n(new Vt(H,H/5.28)),p);k.position.set(D,C,B),A.add(k)}function w(A,D,C,B){let H=new yn(D.map(re=>new I(...re))),k=new se(n(new Mn(H,24,C,5,!1)),B);A.add(k)}function T(A,D,C,B){for(let H of[-D/2+.035,D/2-.035])for(let k of[-C/2+.035,C/2-.035])v(A,H,k,B,.009,.007,l,"z")}function g(){let A=new lt;A.name="MeshProduct-ess16",A.userData.modelStatus="illustrative-enlarged; rear ports and fixing details unverified",A.userData.catalogueDimensionsMm={width:480,depth:235,height:874},A.userData.illustrativeBodyDimensionsM={width:.9,depth:.44,height:1.65},_(A,0,.92,0,.9,1.65,.44,o,.07),_(A,0,.92,.223,.865,1.59,.028,r,.012),_(A,0,1.35,.245,.31,.17,.026,l,.012),_(A,0,1.35,.263,.292,.15,.018,d,.008),_(A,0,1.37,.274,.16,.065,.003,x,.001);for(let D=0;D<5;D++)_(A,-.105+D*.052,1.302,.276,.018,.006,.003,r);M(A,.12,.34,.24,.37),w(A,[[-.41,.49,.24],[-.1,.43,.24],[.19,.55,.24],[.4,.6,.24]],.009,c),w(A,[[.03,.52,.241],[.21,.64,.241],[.4,.67,.241]],.007,h);for(let D of[-.456,.456]){_(A,D,1.34,-.02,.009,.16,.17,a,.003);for(let C=0;C<17;C++)_(A,D,.4+C*.017,0,.009,.006,.21,a)}for(let D of[-.32,.32])for(let C of[-.14,.14])_(A,D,.13,C,.1,.1,.1,l,.01),v(A,D,.065,C,.067,.065,u,"x");for(let[D,C]of[[-.465,f],[-.465,a]])v(A,D,1.5,C===f?-.085:.085,.025,.03,C,"x");return _(A,-.465,1.39,0,.02,.035,.05,a,.002),A}function E(A=!1){let D=new lt;D.name=A?"MeshProduct-hybrid50":"MeshProduct-hybrid6";let C=A?1.32:.9,B=A?1.42:1.18,H=A?.52:.54;D.userData.modelStatus="illustrative-enlarged; original port topology unverified",A||(D.userData.catalogueDimensionsMm={width:330,depth:228,height:433}),_(D,0,0,0,C,B,H,o,.055),_(D,0,0,H/2+.006,C*.95,B*.965,.03,r,.012),_(D,.08,-B*.3,H/2+.026,C*.77,B*.33,.014,o,.006),w(D,[[C*.46,-B*.06,H/2+.04],[C*.18,-B*.22,H/2+.04],[-C*.16,-B*.43,H/2+.04]],.008,c),_(D,0,B*.05,H/2+.034,C*.31,B*.2,.03,d,.012),_(D,0,B*.075,H/2+.051,C*.18,B*.065,.003,x),M(D,-C*.07,B*.32,H/2+.025,C*.43);for(let k of[-C/2-.004,C/2+.004])for(let re=0;re<15;re++)_(D,k,-B*.37+re*B*.051,-.03,.009,.012,H*.7,a);for(let k=0;k<6;k++){let re=-C*.34+k*C*.136;v(D,re,-B/2-.045,.05,.025,.1,k===0?f:a),v(D,re,-B/2-.1,.05,.019,.03,l)}return T(D,C*.95,B*.96,H/2+.028),D}function L(){let A=new lt;A.name="MeshProduct-horizon",_(A,0,1.36,0,1.22,2.35,1.05,r,.035),_(A,0,2.46,0,1.26,.1,1.09,c,.014),_(A,-.1,1.37,.537,.92,2.1,.025,r,.01),_(A,.32,1.42,.56,.025,.22,.04,o,.003),_(A,.4,1.6,.56,.06,.08,.02,h,.005),M(A,-.18,2.12,.558,.55);for(let D=0;D<12;D++)_(A,-.2,.39+D*.027,.559,.57,.012,.008,o);_(A,.73,1.64,0,.32,.85,.78,o,.025);for(let D=0;D<10;D++)_(A,.9,1.28+D*.07,0,.01,.02,.66,a);for(let D of[-.43,.43])for(let C of[-.35,.35])_(A,D,.12,C,.14,.22,.14,o,.015);for(let[D,C]of[[-.08,f],[.08,a]])v(A,D,.45,.55,.025,.07,C,"z");return A}function R(){let A=new lt;A.name="MeshProduct-volt1000",_(A,0,.34,0,.9,.63,.54,o,.05),_(A,0,.34,.277,.84,.55,.025,r,.012),_(A,0,.67,0,.56,.065,.07,a,.018);for(let D of[-.25,.25])_(A,D,.61,0,.06,.12,.07,a,.015);_(A,-.06,.45,.297,.31,.13,.012,d,.008),_(A,-.06,.455,.307,.18,.055,.003,x),v(A,.27,.46,.305,.047,.02,o,"z");for(let D of[-.26,-.08,.1])_(A,D,.22,.304,.13,.14,.008,o,.005),_(A,D-.025,.235,.313,.012,.03,.003,a),_(A,D+.025,.235,.313,.012,.03,.003,a),_(A,D,.198,.313,.02,.012,.003,a);for(let D of[.26,.32])for(let C of[.25,.32])_(A,C,D,.305,.04,.017,.006,a);for(let D of[-.456,.456])for(let C=0;C<11;C++)_(A,D,.14+C*.035,0,.008,.012,.33,a);v(A,.465,.28,0,.026,.035,h,"x");for(let D of[-.3,.3])for(let C of[-.17,.17])_(A,D,.02,C,.1,.04,.08,u,.006);return w(A,[[-.4,.075,.294],[0,.062,.294],[.4,.075,.294]],.008,c),A}function N(){let A=new lt;A.name="MeshProduct-seed24",_(A,0,.36,0,1.02,.64,.63,a,.026),_(A,0,.7,0,1.05,.07,.66,o,.015),_(A,0,.02,0,1.04,.04,.65,a,.008);for(let[D,C]of[[-.35,f],[.35,a]])v(A,D,.77,-.13,.045,.08,C),v(A,D,.82,-.13,.025,.03,l);_(A,0,.36,.321,.84,.4,.005,r,.001),M(A,0,.45,.328,.62),_(A,0,.25,.329,.83,.13,.004,c);for(let D of[-.54,.54])_(A,D,.54,0,.04,.2,.1,o,.005),v(A,D,.44,0,.035,.28,u,"z");return A}return{battery:g,inverter:E,cabinet:L,portable:R,seed:N,box:_,material:s,dispose(){e.forEach(A=>A.dispose()),t.forEach(A=>A.dispose()),y.dispose()}}}var $a=4.4;function Ka(){return new yn([[-85,0,10.6],[-28,0,10.6],[-15,0,10.8],[-5,0,10.3],[5,0,7.3],[15,0,4.9],[26,0,4.6],[35,0,8.8],[85,0,12.8]].map(i=>new I(i[0],i[1],i[2])),!1,"centripetal")}function Ac(i){let e=[[-15.677,1.505,4.65],[-15.677,1.34,4.48],[-14.72,1.34,4.48],[-14.72,1.76,4.48],[-14.715,1.76,4.68]],t=[[17.9,i+1.5,16.55],[18.28,i+.9,16.55],[18.55,i+.9,16.72],[18.55,i+1.3,16.72]];return{"z1-pv-inv":[[-12.5,4.6,2.9],[-12.5,4.1,4.48],[-16.55,4.1,4.48],[-16.55,2.1,4.48],[-16.045,2.1,4.48],[-16.045,1.505,4.65]],"z1-inv-bat-day":e,"z1-bat-inv-night":[...e].reverse(),"z1-bms":[[-15.48,1.53,4.68],[-15.48,1.25,4.5],[-14.7,1.25,4.5],[-14.7,1.65,4.68]],"z1-inv-ac-loads":[[-15.82,1.53,4.65],[-15.82,1.16,4.48],[-17.72,1.16,4.48],[-17.72,2.1,4.48],[-17.72,2.1,2.15],[-17.72,3.38,2.15],[-12.25,3.38,2.15],[-8.9,3.38,2.15],[-8.9,2.9,-.35]],"z1-grid":[[-21.1,6.2,.9],[-17.72,4.1,.9],[-17.72,2.1,.9],[-17.72,2.1,2.15]],"z2-pv-inv":[[17.2,5.85,-7.2],[15.6,5.6,-4.2],[15.6,2.85,-4.2],[15.2,2.85,-3.4],[15.2,1,-3.4]],"z2-inv-bat-day":[[15.2,1,-3.4],[15.2,.5,-2.83],[12.2,.5,-2.83],[12.2,.65,-2.9]],"z2-bat-inv-night":[[12.2,.65,-2.9],[12.2,.5,-2.83],[15.2,.5,-2.83],[15.2,1,-3.4]],"z2-ac-loads":[[16,1,-3.4],[16,.48,-2.83],[17.7,.48,-2.83],[17.7,1.8,-2.9],[17.7,4.8,-4.2],[24.2,4.8,-4.2],[24.2,4.9,-6.2]],"z2-grid":[[8.5,6.8,-11.5],[14.5,5,-7.2],[17.7,5,-4.2],[17.7,1.8,-2.9]],"z3-pv-storage":[[15.8,i+1.45,14.6],[16.1,i+.4,15.8],[17.9,i+.4,16.55],[17.9,i+1.5,16.55]],"z3-controller-seed":t,"z3-bat-night":[[18.55,i+1.3,16.72],[18.55,i+.7,16.65],[20.4,i+.7,16.65],[20.4,i+1.4,13.47]],"z3-portable-pv":[[23,i+.8,18.8],[23,i+.4,18.8],[22,i+.4,17.25],[22.015,i+.76,17.25]],"z3-field-loads":[[21.47,i+.7,17.563],[21.47,i+.5,17.563],[22.4,i+.5,17.55],[22.4,i+.5,14.4],[22.4,i+1.3,14.4]]}}function Qa(i){let e=new ys;for(let t=1;t<i.length;t++)e.add(new vs(new I(...i[t-1]),new I(...i[t])));return e}function Du(i){let e=new lt;e.name="PhysicalCableHarness";let t=[],n=[],s=u=>{let d=new Ke({color:u,roughness:.75});return n.push(d),d},r=s(7831421),o=s(10301480),a=s(2239276),l=s(1203278),c=s(9675316);for(let[u,d]of Object.entries(Ac(i))){if(u.endsWith("night")&&u!=="z3-bat-night")continue;let x=u.includes("pv")||u.includes("bat")||u.includes("controller");for(let y=0;y<(x?2:1);y++){let p=d.map(v=>[v[0]+(x?y===0?-.027:.027:0),v[1],v[2]]);u==="z1-pv-inv"&&(p[p.length-1]=[y===0?-16.106:-15.984,1.505,4.65]),u==="z1-inv-bat-day"&&(p[0]=[y===0?-15.738:-15.616,1.505,4.65],p[p.length-1]=[-14.715,1.76,y===0?4.595:4.765]),u==="z3-controller-seed"&&(p[p.length-1]=[y===0?18.55:19.25,i+1.3,16.72]),u==="z3-bat-night"&&(p[0]=[y===0?18.55:19.25,i+1.3,16.72]);let m=new Mn(Qa(p),Math.max(16,d.length*10),u.includes("bms")?.012:x?.018:.028,8,!1);t.push(m);let _=new se(m,u.includes("bms")?l:x?y?a:o:r);_.name="Cable-"+u+"-"+y,_.castShadow=!0,e.add(_)}}let h=[[-14.68,.52,4.68],[-14.68,.4,4.45],[-17.72,.4,4.45],[-17.72,1.65,2.15]],f=new Mn(Qa(h),45,.013,6,!1);t.push(f),e.add(new se(f,c));for(let[u,d,x]of[[-16.55,2.1,4.5],[-14.8,1.34,4.5],[17.9,i+1.5,16.55]]){let y=new ke(.21,.28,.13);t.push(y);let p=new se(y,r);p.position.set(u,d,x),p.castShadow=!0,e.add(p);let m=new ke(.055,.09,.03);t.push(m);let _=new se(m,o);_.position.set(u,d,x+.08),e.add(_)}return{group:e,dispose(){t.forEach(u=>u.dispose()),n.forEach(u=>u.dispose())}}}var Nu=i=>i.userData,ox={overview:new I(5.6,1,4.2),home:new I(-11.5,1,2),commercial:new I(18.5,1,-7.8),offgrid:new I(18,1,19.2)};function wn(i,e,t=0){Object.assign(i.userData,{lightingRegion:e,overviewPriority:t})}function ax(i,e,t){let n=Math.max(0,Math.min(i.length,Math.floor(t)));if(n===i.length)return i.slice();let s=new I,r=i.map((l,c)=>({light:l,index:c,distance:l.getWorldPosition(s).distanceToSquared(ox[e]),priority:Number(Nu(l).overviewPriority??0)}));if(r.sort((l,c)=>e==="overview"?l.priority-c.priority||l.distance-c.distance||l.index-c.index:l.distance-c.distance||l.index-c.index),e!=="overview")return r.slice(0,n).map(l=>l.light);let o=[],a=["home","road","offgrid","commercial","road","home","offgrid"];for(let l of a){if(o.length>=n)break;let c=r.find(({light:h})=>Nu(h).lightingRegion===l&&!o.includes(h));c&&o.push(c.light)}for(let{light:l}of r){if(o.length>=n)break;o.includes(l)||o.push(l)}return o}function Uu(i,e,t){let n=new Set(ax(i,e,t));for(let s of i)s.visible=n.has(s)}function Fu(i,e,t,n){let s=new lt;s.name="HomeArchitecturalRefinement",i.add(s);let r=[],o=[],a=ee=>(r.push(ee),ee),l=ee=>(o.push(ee),ee),c=(ee,Le=.8,_e=0)=>l(new Ke({color:ee,roughness:Le,metalness:_e})),h=l(new Ke({color:16052453,map:n.limestoneWall,roughness:.86})),f=c(13880768,.92),u=c(2571070,.34,.55),d=c(11451326,.34,.72),x=l(new Ke({color:13215102,map:n.timberDeck,roughness:.84})),y=l(new Sn({color:10206151,roughness:.13,metalness:.08,transparent:!0,opacity:.48,ior:1.48,side:on,emissive:16761220,emissiveIntensity:0})),p=c(4742249,.83,.12),m=a(new ke(1,1,1));function _(ee,Le,_e,Fe,Je,ne,de,me,xe){let ge=new se(m,xe);return ge.name=Le,ge.position.set(_e,Fe,Je),ge.scale.set(ne,de,me),ge.castShadow=!0,ge.receiveShadow=!0,ee.add(ge),ge}let v=new lt;v.name="HomeTechnicalWing-RealOpenings",s.add(v),_(v,"TechnicalFloor",-3.4,.065,0,5.2,.13,5.4,f),_(v,"TechnicalRearWall",-3.4,1.75,-2.57,5.2,3.5,.26,h),_(v,"TechnicalRightWall",-.93,1.75,0,.26,3.5,5.4,h),_(v,"SideWallBelowWindow",-5.87,.45,0,.26,.9,5.4,h),_(v,"SideWallAboveWindow",-5.87,3.05,0,.26,.9,5.4,h),_(v,"SideWallRearReveal",-5.87,1.75,-1.98,.26,1.7,1.44,h),_(v,"SideWallFrontReveal",-5.87,1.75,1.98,.26,1.7,1.44,h),_(v,"ServiceWallLower",-3.4,.5875,2.6,5.2,1.175,.2,h),_(v,"ServiceWallUpper",-3.4,3.1125,2.6,5.2,.775,.2,h),_(v,"ServiceWallLeft",-5.475,1.95,2.6,1.05,1.55,.2,h),_(v,"ServiceWallRight",-2.225,1.95,2.6,2.85,1.55,.2,h),_(v,"InverterRecessBack",-4.3,1.95,2.49,1.3,1.55,.1,h);for(let ee of[1.52,2.38])_(v,"ConceptMountingRail",-4.3,ee,2.58,.62,.075,.1,d);for(let ee of[-1.26,0,1.26])_(v,"SideWindowMullion",-6.01,1.75,ee,.09,1.76,.065,u);for(let ee of[.88,2.62])_(v,"SideWindowTransom",-6.01,ee,0,.09,.065,2.6,u);_(v,"SideWindowSill",-6.04,.85,0,.3,.06,2.74,f),_(v,"SideWindowGlazing",-6.005,1.75,0,.018,1.64,2.47,y);for(let ee of[.16,3.01])_(s,"LivingBayTrack",2.8,ee,2.5,7.1,.075,.15,u);for(let ee of[.98,4.55])_(s,"LivingBaySlimMullion",ee,1.59,2.49,.055,2.82,.09,u);_(s,"LivingBayDoorPull",4.6,1.13,2.58,.03,.32,.04,d),_(s,"LivingThreshold",2.8,.055,2.82,7.4,.055,.56,f);for(let ee=0;ee<15;ee++)_(s,"TimberSideBatten",6.465,1.72,-2.2+ee*.3,.075,3.15,.095,x);for(let ee of[-5.98,-.82])_(s,"TechnicalCornerTrim",ee,1.75,2.73,.065,3.5,.06,f);_(s,"FacadePlinth",-3.4,.09,2.73,5.2,.15,.075,f),_(s,"BatterySupportPaver",-2.75,-.032,2.98,1.24,.06,.8,f);let M=l(new an({color:1581857,transparent:!0,opacity:.2,depthWrite:!1})),w=a(new xs(.085,24));for(let ee of[-.32,.32])for(let Le of[-.14,.14]){let _e=new se(w,M);_e.name="BatteryWheelContact",_e.rotation.x=-Math.PI/2,_e.scale.set(1.25,.7,1),_e.position.set(-2.75+ee,-.0015,2.98+Le),s.add(_e)}let T=new lt;T.name="HomeSlateRoofMesh",T.position.copy(t.position),T.rotation.copy(t.rotation),e.add(T);let g=new lt;g.name="HomePVPhysicalMount",T.add(g);let E=a(new ke(.502,.035,.495,2,1,2)),L=new zt(E,p,26*13);L.name="HomeRoof-338IndividualTiles",L.castShadow=!0,L.receiveShadow=!0;let R=new wt,N=ee=>{let Le=Math.sin(ee*78.233+11.73)*43758.5453;return Le-Math.floor(Le)},A=0;for(let ee=0;ee<13;ee++)for(let Le=0;Le<26;Le++)R.position.set(-6.25+Le*.5,.16+ee%2*.004,-3+ee*.5),R.updateMatrix(),L.setMatrixAt(A,R.matrix),L.setColorAt(A,new Ge().setHSL(.59,.14,.24+N(A)*.07)),A++;T.add(L);for(let ee of[-6.6,6.6])_(T,"RoofBargeboard",ee,-.015,0,.065,.29,6.5,u);for(let ee of[-3.2,3.2])_(T,"RoofFascia",0,-.015,ee,13.25,.29,.075,u);let D=ee=>4.23-Math.tan(.22)*(ee-.1)-.14/Math.cos(.22),C=new Ln;C.moveTo(-2.7,3.4),C.lineTo(2.7,3.4),C.lineTo(2.7,D(2.7)),C.lineTo(-2.7,D(-2.7)),C.closePath();let B=a(new Ui(C,{depth:.18,bevelEnabled:!1,steps:1}));B.rotateY(-Math.PI/2);for(let ee of[-5.82,6.45]){let Le=new se(B,h);Le.name="MonoPitchWallClosure",Le.position.x=ee,Le.castShadow=!0,Le.receiveShadow=!0,s.add(Le)}let H=D(-2.6)-3.4;_(s,"RearRoofWallClosure",.15,3.4+H/2,-2.6,12.55,H,.18,h);let k=a(new Mt(.075,.075,13.2,20,1,!0,0,Math.PI));k.rotateZ(Math.PI/2);let re=new se(k,u);re.name="RoofRainGutter",re.position.set(0,-.11,3.29),T.add(re);for(let ee of[-1.15,1.05])for(let Le of[-.58,.58])_(g,"PVMountingRail",0,.215,ee+Le,11.8,.05,.045,d);let X=c(5470276,.93),Z=a(new Fi(1,18,12)),le=[[-7.5,3.9],[-7.4,5.1],[6.95,3.7],[6.9,5.25]],Ie=new zt(Z,X,le.length*7);Ie.name="HomeGardenLayeredShrubs",Ie.castShadow=!0,Ie.receiveShadow=!0;let Pe=0;le.forEach(([ee,Le],_e)=>{_(s,"GardenBedEdge",ee,.03,Le,1.2,.09,1.1,f);for(let Fe=0;Fe<7;Fe++){let Je=Fe*2.399,ne=Fe===0?0:.33;R.position.set(ee+Math.cos(Je)*ne,.27+N(Fe+_e*9)*.18,Le+Math.sin(Je)*ne),R.scale.set(.32,.32+N(Fe+_e*12)*.17,.29),R.updateMatrix(),Ie.setMatrixAt(Pe++,R.matrix)}}),s.add(Ie);let J=c(13087899,.86),ye=c(3814699,1);for(let[ee,Le]of[[.25,3.12],[5.8,3.16]]){let _e=new se(a(new Mt(.22,.16,.46,28,1,!0)),J);_e.name="HomeEntrancePlanter",_e.position.set(ee,.23,Le),_e.castShadow=!0,s.add(_e);let Fe=new se(a(new xi(.22,.026,8,28)),J);Fe.rotation.x=Math.PI/2,Fe.position.set(ee,.46,Le),s.add(Fe);let Je=new se(a(new xs(.205,28)),ye);Je.rotation.x=-Math.PI/2,Je.position.set(ee,.42,Le),s.add(Je);for(let ne=0;ne<5;ne++){let de=new se(Z,X);de.position.set(ee+Math.cos(ne*2.4)*.13,.66+ne*.05,Le+Math.sin(ne*2.4)*.13),de.scale.set(.18,.22,.14),de.castShadow=!0,s.add(de)}}let be=l(new Ke({color:16772559,emissive:16761211,emissiveIntensity:0,roughness:.35})),Ve=[],he=l(new Ke({color:1847364,map:n.solarPanel,roughness:.3,metalness:.25}));for(let ee of[-.97,6.3]){_(s,"WallSconceMount",ee,2.46,2.75,.16,.26,.075,u),_(s,"WallSconceHousing",ee,2.47,2.91,.22,.28,.28,u),_(s,"WallSconceDiffuser",ee,2.325,2.91,.18,.018,.22,be);let Le=new Bi(16763015,0,7.5,.82,.55,2);Le.name="HomeWallSconce-Practical",Le.position.set(ee,2.3,2.96),wn(Le,"home",2),Le.target.position.set(ee,0,3.9),s.add(Le,Le.target),Ve.push({light:Le,intensity:38})}for(let ee of[1.65,5.1]){_(s,"AutonomousPathBollard",ee,.37,4.95,.16,.74,.16,u),_(s,"PathBollardDiffuser",ee,.64,4.95,.18,.1,.18,be),_(s,"PathBollardPVCap",ee,.77,4.95,.2,.035,.2,he);let _e=new $t(16764560,0,4.6,2);_e.name="AutonomousPathBollard-Practical",_e.position.set(ee,.64,4.95),wn(_e,"home",3),s.add(_e),Ve.push({light:_e,intensity:9})}return{root:s,roofMount:g,setNightFactor(ee){let Le=vt.clamp(ee,0,1);be.emissiveIntensity=1.65*Le,y.emissiveIntensity=.38*Le,Ve.forEach(({light:_e,intensity:Fe})=>{_e.intensity=Fe*Le})},dispose(){r.forEach(ee=>ee.dispose()),o.forEach(ee=>ee.dispose()),s.removeFromParent(),T.removeFromParent()}}}function Ns(i){let e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)}function Ot(i,e){let t=i-21,n=e-15.2,s=Math.exp(-(t*t)/145-n*n/95)*1.08,r=Math.hypot(i-4,e),o=vt.smoothstep(r,34,85),a=(Math.sin(i*.055)*Math.cos(e*.05)*1.45+Math.cos((i+e)*.035)*.85)*o;return s+a}function Rc(i,e,t,n,s){let r=new Ln,o=i/2,a=e/2;r.moveTo(-o+n,-a),r.lineTo(o-n,-a),r.quadraticCurveTo(o,-a,o,-a+n),r.lineTo(o,a-n),r.quadraticCurveTo(o,a,o-n,a),r.lineTo(-o+n,a),r.quadraticCurveTo(-o,a,-o,a-n),r.lineTo(-o,-a+n),r.quadraticCurveTo(-o,-a,-o+n,-a);let l=new Ui(r,{depth:t,bevelEnabled:!0,bevelThickness:.05,bevelSize:.06,bevelSegments:2});l.rotateX(-Math.PI/2);let c=new se(l,s);return c.castShadow=!1,c.receiveShadow=!0,c}function Ou(i,e){let t=new lt;t.name="AnthriseEnergyCampus";let n=Ja(e),s=Du(Ot(21,15.2));t.add(s.group);let r=[],o=[],a=Te=>(r.push(Te),Te),l=Te=>(o.push(Te),Te),c=l(new Ke({map:i.grassGround,color:7771490,roughness:.94,metalness:0})),h=l(new Ke({map:i.limestoneWall,color:15329248,roughness:.86,metalness:.04})),f=l(new Ke({map:i.limestoneWall,color:16184300,roughness:.82,metalness:.02})),u=l(new Ke({color:3885133,roughness:.56,metalness:.28})),d=l(new Ke({color:13949917,roughness:.55,metalness:.25})),x=l(new Ke({color:12766417,roughness:.32,metalness:.72})),y=l(new Ke({color:2503738,roughness:.38,metalness:.65})),p=l(new Sn({color:9942980,roughness:.12,metalness:.08,transparent:!0,opacity:.4,ior:1.48,reflectivity:.55})),m=l(new Sn({map:i.solarPanel,roughness:.22,metalness:.38,clearcoat:.65,clearcoatRoughness:.16})),_=l(new Ke({map:i.timberDeck,color:14136203,roughness:.8,metalness:.04})),v=l(new Ke({map:i.roadAsphalt,color:9279385,roughness:.88,metalness:.05})),M=l(new Ke({color:27477,roughness:.44,metalness:.18})),w=l(new Ke({color:15725299,roughness:.42,metalness:.22})),T=l(new Ke({color:7305853,roughness:.72,metalness:.3})),g=[],E=[],L=[],R=a(new Vt(190,190,72,72));R.rotateX(-Math.PI/2);let N=R.attributes.position;for(let Te=0;Te<N.count;Te++){let ae=N.getX(Te),Ze=N.getZ(Te);N.setY(Te,Ot(ae,Ze))}R.computeVertexNormals();let A=new se(R,c);A.receiveShadow=!0,t.add(A);let D=Ka(),C=(Te,ae,Ze)=>{let ze=[],At=[],Rt=[],mn=new I(0,1,0),Kt=new I;for(let ft=0;ft<=Ze;ft++){let Ft=ft/Ze,Yt=Te.getPointAt(Ft),Ct=Te.getTangentAt(Ft).normalize();Kt.crossVectors(Ct,mn).normalize();let Bt=Ot(Yt.x,Yt.z)+.045;if(ze.push(Yt.x-Kt.x*(ae*.5),Bt,Yt.z-Kt.z*(ae*.5)),ze.push(Yt.x+Kt.x*(ae*.5),Bt,Yt.z+Kt.z*(ae*.5)),At.push(Ft*6,0,Ft*6,1),ft<Ze){let jt=ft*2;Rt.push(jt,jt+1,jt+2,jt+1,jt+3,jt+2)}}let kt=new Gt;return kt.setAttribute("position",new ht(ze,3)),kt.setAttribute("uv",new ht(At,2)),kt.setIndex(Rt),kt.computeVertexNormals(),a(kt)},B=new se(C(D,$a,320),v);B.receiveShadow=!0,t.add(B);let H=a(new ke(.65,.015,.12)),k=l(new an({color:16777215,transparent:!0,opacity:.34})),re=90,X=new zt(H,k,re),Z=new wt;for(let Te=0;Te<re;Te++){let ae=(Te+.5)/re,Ze=D.getPointAt(ae),ze=D.getTangentAt(ae);Z.position.set(Ze.x,Ot(Ze.x,Ze.z)+.06,Ze.z),Z.rotation.set(0,Math.atan2(-ze.z,ze.x),0),Z.scale.setScalar(1),Z.updateMatrix(),X.setMatrixAt(Te,Z.matrix)}X.instanceMatrix.needsUpdate=!0,t.add(X);let le=new yn([new I(30.5,0,7.2),new I(28.5,0,11.2),new I(25.2,0,14.2)]),Ie=l(new Ke({color:13157044,roughness:.92,metalness:.02})),Pe=new se(C(le,1.35,22),Ie);Pe.receiveShadow=!0,t.add(Pe);let J=new lt;J.position.set(-11.5,0,2),t.add(J);let ye=Rc(17.4,12.6,.2,.7,h);ye.name="HomeFootingPad",ye.position.set(0,0,.2),J.add(ye),r.push(ye.geometry);let be=a(new ke(5.8,.08,3.6)),Ve=new se(be,v);Ve.position.set(-4.6,.23,6.2),Ve.receiveShadow=!0,J.add(Ve);for(let Te=0;Te<5;Te++){let ae=a(new ke(.9,.05,.55)),Ze=new se(ae,h);Ze.position.set(2.2+Te*1.15,.26,4.4),Ze.receiveShadow=!0,J.add(Ze)}let he=new lt;he.position.set(0,.26,-.3),J.add(he);let ee=new se(a(new ke(7.2,.14,5.2)),_);ee.position.set(2.8,.07,0),ee.receiveShadow=!0,he.add(ee);let Le=new se(a(new ke(7.3,3.4,.26)),f);Le.position.set(2.8,1.7,-2.47),Le.castShadow=!0,Le.receiveShadow=!0,he.add(Le);let _e=new se(a(new ke(.26,3.4,5.2)),f);_e.position.set(6.32,1.7,0),_e.castShadow=!0,_e.receiveShadow=!0,he.add(_e);let Fe=new se(a(new ke(7.3,.42,.34)),u);Fe.position.set(2.8,3.22,2.43),Fe.castShadow=!0,he.add(Fe),[-.75,2.8,6.2].forEach(Te=>{let ae=new se(a(new ke(.11,3.1,.14)),y);ae.position.set(Te,1.55,2.44),he.add(ae)});let Je=new se(a(new Vt(3.3,2.9)),p);Je.position.set(4.5,1.6,2.44),he.add(Je);let ne=new se(a(new ke(1.45,.4,.32)),w);ne.position.set(2.6,2.75,-2.18),he.add(ne);let de=new se(a(new ke(1.25,.05,.06)),y);de.position.set(2.6,2.6,-2.02),he.add(de);let me=l(new Ke({color:14279140,roughness:.28,metalness:.45})),xe=new se(a(new ke(.95,2.05,.85)),me);xe.position.set(-.05,1.08,-1.75),xe.castShadow=!0,he.add(xe);let ge=new se(a(new ke(3.2,.03,2.2)),l(new Ke({color:13227215,roughness:.95})));ge.position.set(2.9,.15,.2),he.add(ge);let De=l(new Ke({color:5401191,roughness:.86})),Be=new se(a(new ke(2.3,.52,.95)),De);Be.position.set(2.9,.4,-1.05),he.add(Be);let it=new se(a(new ke(2.3,.55,.25)),De);it.position.set(2.9,.78,-1.4),he.add(it);let rt=new se(a(new ke(1.15,.34,.65)),_);rt.position.set(2.9,.32,.25),he.add(rt);let ot=new se(a(new ke(.48,.5,1.75)),_);ot.position.set(5.9,.38,.1),he.add(ot);let O=l(new Ke({color:1977395,emissive:6797526,emissiveIntensity:.12,roughness:.25}));g.push({material:O,intensity:.32});let yt=new se(a(new ke(.08,.9,1.48)),O);yt.position.set(6.08,1.45,.1),he.add(yt);let et=l(new Ke({color:16774108,emissive:16759388,emissiveIntensity:.25,roughness:.35}));g.push({material:et,intensity:1.65});let gt=new se(a(new Mt(.18,.42,.28,18)),et);gt.position.set(2.9,2.95,.2),he.add(gt);let ve=new $t(16762763,0,9,2);ve.name="HomeInterior-Practical",wn(ve,"home",0),ve.position.set(2.9,2.65,.2),he.add(ve),L.push({light:ve,maxIntensity:32});let ut=new lt;ut.position.set(.3,3.68,0),he.add(ut);let Xe=new se(a(new ke(13.2,.28,6.4)),u);Xe.rotation.x=.22,Xe.position.set(0,.55,.1),Xe.castShadow=!0,Xe.receiveShadow=!0,ut.add(Xe);let Oe=Fu(he,ut,Xe,i);for(let Te=0;Te<2;Te++)for(let ae=0;ae<4;ae++){let Ze=new se(a(new ke(2.55,.08,1.9)),x),ze=new se(a(new Vt(2.45,1.8)),m);ze.rotation.x=-Math.PI/2,ze.position.y=.045;let At=new lt;At.add(Ze,ze),At.name="HomePVModule",At.position.set(-4.2+ae*2.8,.29,Te===0?-1.15:1.05);for(let Rt of[-1.22,1.22]){let mn=new se(a(new ke(.045,.09,.11)),x);mn.position.set(Rt,.01,.58),At.add(mn)}Oe.roofMount.add(At)}let P=n.inverter(!1);P.position.set(-4.3,1.95,2.9),he.add(P);let S=n.battery();S.position.set(-2.75,0,2.98),he.add(S);let W=new se(a(new Mt(.14,.19,6.6,12)),T);W.position.set(-9.6,3.3,-.8),W.castShadow=!0,he.add(W);let pe=new se(a(new ke(.16,.14,1.65)),y);pe.position.set(-9.6,6.1,-.8),he.add(pe);let ie=new se(a(new ke(.18,.85,.72)),w);ie.position.set(-6.08,1.85,-.8),he.add(ie);let Me=new se(a(new ke(.2,1.05,.92)),y);Me.position.set(-6.08,1.85,.45),he.add(Me);let Ee=new se(a(new Mt(.08,.11,1.55,10)),y);Ee.position.set(7.1,1.02,4.4),Ee.castShadow=!0,J.add(Ee);let j=l(new Ke({color:16708824,emissive:16762472,emissiveIntensity:.04,roughness:.25}));E.push(j);let te=new se(a(new Mt(.24,.19,.28,14)),j);te.position.set(7.1,1.84,4.4),J.add(te);let Se=new se(a(new Mt(.25,.25,.04,14)),m);Se.position.set(7.1,2,4.4),J.add(Se);let U=new $t(16763768,0,6.5,2);U.name="HomeCourtyard-Practical",wn(U,"home",1),U.position.set(7.1,1.75,4.4),J.add(U),L.push({light:U,maxIntensity:18});let K=new lt;K.position.set(19,0,-7),t.add(K);let Q=Rc(22.4,16.5,.26,.85,h);Q.position.set(0,0,.4),K.add(Q),r.push(Q.geometry);let z=new lt;z.position.set(.8,.26,-1.6),K.add(z);let ce=new se(a(new ke(9.6,5.2,8.2)),d);ce.position.set(-3.2,2.6,0),ce.castShadow=!0,ce.receiveShadow=!0,z.add(ce);let fe=l(new Ke({color:14936038,emissive:16764040,emissiveIntensity:.04,roughness:.72}));g.push({material:fe,intensity:.92});let He=new se(a(new ke(7,4.2,7)),fe);He.position.set(4.8,2.2,0),z.add(He);let V=new se(a(new ke(7.4,4.5,7.6)),p);V.position.set(4.8,2.35,0),z.add(V),[.2,2.35,4.65].forEach(Te=>{let ae=new se(a(new ke(7.7,.22,7.9)),u);ae.position.set(4.8,Te,0),ae.castShadow=!0,z.add(ae)}),[1.2,3.6,6,8.4].forEach(Te=>{let ae=new se(a(new ke(.16,4.6,.18)),y);ae.position.set(Te,2.3,3.84),z.add(ae)});let G=new $t(16763775,0,11,2);G.name="CommercialOffice-Practical",wn(G,"commercial",0),G.position.set(4.8,3,4.5),z.add(G),L.push({light:G,maxIntensity:40}),[-4.6,-2.1].forEach(Te=>{let ae=new se(a(new ke(1.75,1,1.5)),x);ae.position.set(Te+8.5,5.25,-1.8),ae.castShadow=!0,z.add(ae);let Ze=new se(a(new Mt(.48,.48,.14,16)),y);Ze.position.set(Te+8.5,5.8,-1.8),z.add(Ze)});for(let Te=0;Te<2;Te++)for(let ae=0;ae<5;ae++){let Ze=new se(a(new ke(2.55,.09,2.15)),x),ze=new se(a(new Vt(2.45,2.05)),m);ze.rotation.x=-Math.PI/2,ze.position.y=.05;let At=new lt;At.add(Ze,ze),At.rotation.x=.24,At.position.set(-6+ae*2.8,5.55,-2+Te*2.8),z.add(At)}[-6.8,-5.3].forEach(Te=>{let ae=n.cabinet();ae.position.set(Te,.2,3.55),K.add(ae)});let oe=n.inverter(!0);oe.position.set(-3.4,1.6,3.55),K.add(oe);let Ae=new se(a(new ke(1.55,.2,.85)),y);Ae.position.set(-3.4,.4,3.55),K.add(Ae);for(let Te of[-3.9,-2.9])n.box(K,Te,1.4,3.23,.06,2.3,.08,y);for(let Te of[1.2,2.2])n.box(K,-3.4,Te,3.26,1.1,.06,.08,y);let ue=new se(a(new ke(1.45,2.05,.95)),u);ue.position.set(-1.3,1.28,3.55),ue.castShadow=!0,K.add(ue);let $e=new se(a(new Mt(.16,.22,7.2,12)),T);$e.position.set(-10.5,3.6,-4.5),$e.castShadow=!0,K.add($e),[[-1.2,8.8],[7.2,8.6]].forEach(([Te,ae],Ze)=>{let ze=new se(a(new Mt(.09,.13,4.4,10)),y);ze.position.set(Te,2.2,ae),ze.castShadow=!0,K.add(ze);let At=new se(a(new ke(1.35,.14,.46)),x);At.position.set(Te,4.4,ae-.32),K.add(At);let Rt=new se(a(new Vt(1.28,.42)),m);Rt.rotation.x=-Math.PI/2,Rt.position.set(Te,4.48,ae-.32),K.add(Rt);let mn=l(new Ke({color:16777215,emissive:16770216,emissiveIntensity:.05,roughness:.2}));E.push(mn);let Kt=new se(a(new ke(.88,.06,.32)),mn);Kt.position.set(Te,4.31,ae-.32),K.add(Kt);let kt=new $t(16768944,0,13,2);kt.name=`SpineRoad-${Ze+1}-Practical`,wn(kt,"road",Ze),kt.position.set(Te,4,ae-.3),K.add(kt),L.push({light:kt,maxIntensity:80})});let _t=Ot(21,15.2),pt=new lt;pt.position.set(21,_t,15.2),t.add(pt);let Ut=Rc(10.6,6.8,.28,.45,_);Ut.position.set(.2,.02,0),pt.add(Ut),r.push(Ut.geometry);let Yn=new se(a(new ke(5.2,2.75,.24)),_);Yn.position.set(1.2,1.68,-1.65),Yn.castShadow=!0,pt.add(Yn);let Xi=new se(a(new ke(.24,2.75,3.2)),u);Xi.position.set(3.7,1.68,-.15),Xi.castShadow=!0,pt.add(Xi);let Si=new se(a(new ke(6.2,.2,4.2)),u);Si.rotation.x=.14,Si.position.set(1.2,3.22,-.1),Si.castShadow=!0,pt.add(Si),[-1.3,3.6].forEach(Te=>{let ae=new se(a(new Mt(.08,.08,2.75,8)),y);ae.position.set(Te,1.68,1.35),pt.add(ae)});let Fn=new se(a(new ke(2.1,.72,.85)),_);Fn.position.set(1.6,.68,-.8),pt.add(Fn);let qi=l(new Ke({color:1451562,emissive:6478268,emissiveIntensity:.35,roughness:.25}));g.push({material:qi,intensity:.4});let Yi=new se(a(new ke(.54,.36,.04)),qi);Yi.position.set(1.4,1.24,-.88),Yi.rotation.x=-.15,pt.add(Yi);let Fs=new se(a(new ke(.68,.56,.48)),w);Fs.position.set(2.9,.6,-.8),pt.add(Fs);let bi=l(new Ke({color:16773332,emissive:16758614,emissiveIntensity:.1,roughness:.28}));g.push({material:bi,intensity:1.8});let Os=new se(a(new Mt(.14,.16,.28,12)),bi);Os.position.set(.8,2.6,.6),pt.add(Os);let ai=new $t(16760422,0,8,2);ai.name="OffgridCabin-Practical",wn(ai,"offgrid",0),ai.position.set(.8,2.45,.6),pt.add(ai),L.push({light:ai,maxIntensity:28});let On=new lt;On.position.set(-5.2,.1,-.7),pt.add(On),[-1,1].forEach(Te=>{let ae=new se(a(new Mt(.06,.07,1.15,8)),y);ae.position.set(Te,.55,.65);let Ze=new se(a(new Mt(.06,.07,2.15,8)),y);Ze.position.set(Te,1.05,-.65),On.add(ae,Ze)});for(let Te=0;Te<2;Te++){let ae=new se(a(new ke(1.75,.08,2.35)),x),Ze=new se(a(new Vt(1.65,2.25)),m);Ze.rotation.x=-Math.PI/2,Ze.position.y=.05;let ze=new lt;ze.add(ae,Ze),ze.rotation.x=.56,ze.position.set(Te===0?-.95:.95,1.48,0),On.add(ze)}let Jr=new se(a(new ke(3.8,.22,1.15)),u);Jr.position.set(-.9,.36,1.65),pt.add(Jr);let Bs=n.seed();Bs.position.set(-2.1,.48,1.65),pt.add(Bs);let Hs=n.portable();Hs.position.set(.55,.48,2.05),pt.add(Hs);let zs=new se(a(new ke(1.3,.05,1.4)),m);zs.rotation.x=.6,zs.position.set(2,.65,3.6),pt.add(zs),n.box(pt,-.6,1.4,-1.78,.23,.3,.1,y,.015);let ks=new se(a(new Mt(.09,.14,4.35,10)),y);ks.position.set(5.8,2.15,1.3),ks.castShadow=!0,pt.add(ks);let $r=new se(a(new ke(.32,.56,.24)),x);$r.position.set(5.8,3.15,1.44),pt.add($r);let Zi=new se(a(new ke(1.15,.06,.88)),x);Zi.rotation.x=.42,Zi.position.set(5.8,4.5,1.3),pt.add(Zi);let b=new se(a(new Vt(1.08,.8)),m);b.rotation.x=-Math.PI/2+.42,b.position.set(5.8,4.54,1.32),pt.add(b);let F=new se(a(new ke(1.25,.1,.2)),y);F.position.set(5.2,3.92,1.3),pt.add(F);let $=l(new Ke({color:16775398,emissive:16765306,emissiveIntensity:.06,roughness:.2}));E.push($);let q=new se(a(new ke(.64,.09,.34)),$);q.position.set(4.65,3.88,1.3),pt.add(q);let Y=new $t(16766856,0,14,2);Y.name="OffgridTrail-Practical",wn(Y,"offgrid",2),Y.position.set(4.65,3.65,1.3),pt.add(Y),L.push({light:Y,maxIntensity:75});let Ce=a(new Mt(.11,.16,1.15,7));Ce.translate(0,.58,0);let We=l(new Ke({color:7297607,roughness:.9})),Re=a(new gi(.95,1));Re.scale(1,1.35,1),Re.translate(0,1.85,0);let Ne=l(new Ke({color:6065005,roughness:.85})),Ye=[[-22.5,-6.5,1.05],[-21,5.2,.85],[-16,-7.2,1.15],[-2.5,-5.8,1.1],[-1.2,.2,.9],[3.8,-9.5,1.25],[5.2,2.2,.95],[7.2,-16.5,1.15],[14.2,-16.8,1.2],[29.5,-14.8,1.1],[32.4,-7.2,1.15],[33.8,.5,1],[10.2,13.8,1.1],[11.4,21.2,1.25],[16.2,22.8,.95],[27.4,21.8,1.15],[31.8,17.5,1.05],[-8.5,16.2,1.1],[-18.8,15,1.2],[-26.5,6.2,1.25],[-25.5,-13,1.3],[22.5,-18.5,1.18]],tt=new zt(Ce,We,Ye.length),at=new zt(Re,Ne,Ye.length);tt.castShadow=!0,at.castShadow=!0,Ye.forEach(([Te,ae,Ze],ze)=>{let At=Ot(Te,ae);Z.position.set(Te,At,ae),Z.rotation.set(0,Ns(ze)*Math.PI*2,0),Z.scale.setScalar(Ze),Z.updateMatrix(),tt.setMatrixAt(ze,Z.matrix),at.setMatrixAt(ze,Z.matrix),at.setColorAt(ze,new Ge().setHSL(.39+(Ns(ze+5)-.5)*.04,.26,.42+Ns(ze+12)*.08))}),tt.instanceMatrix.needsUpdate=!0,at.instanceMatrix.needsUpdate=!0,at.instanceColor&&(at.instanceColor.needsUpdate=!0);let qe=a(new pr(.55,0)),mt=l(new Ke({color:11449261,roughness:.92})),Dt=[[13.8,13,.9],[14.9,17.2,.65],[17.6,20.6,1.1],[24.2,20,.85],[28.5,18.8,1.05],[29.5,12.6,.72],[12.2,10.6,.8],[8.6,15.8,1.15]],bt=new zt(qe,mt,Dt.length);Dt.forEach(([Te,ae,Ze],ze)=>{Z.position.set(Te,Ot(Te,ae)+.15,ae),Z.rotation.set(Ns(ze)*.6,Ns(ze+9)*Math.PI,Ns(ze+17)*.5),Z.scale.set(Ze*1.25,Ze*.72,Ze),Z.updateMatrix(),bt.setMatrixAt(ze,Z.matrix)}),bt.instanceMatrix.needsUpdate=!0;let Et=Te=>{let ae=vt.clamp(Te,0,1);g.forEach(({material:Ze,intensity:ze})=>{Ze.emissiveIntensity=ze*ae}),E.forEach(Ze=>{Ze.emissiveIntensity=1.9*ae}),L.forEach(Ze=>{Ze.light.intensity=Ze.maxIntensity*ae}),Oe.setNightFactor(ae)};return Et(0),{root:t,terrainHeightAt:Ot,setNightFactor:Et,dispose:()=>{Oe.dispose(),n.dispose(),s.dispose(),r.forEach(Te=>Te.dispose()),o.forEach(Te=>Te.dispose())}}}function Bu(i,e,t){let n=Ja(t),s=new lt;s.name="ArchitecturalDetailLayer",i.add(s);let r=[],o=[],a=[],l=V=>(r.push(V),V),c=V=>(o.push(V),V),h=(V,G=.75,oe=0)=>c(new Ke({color:V,roughness:G,metalness:oe})),f=h(14210505,.88),u=h(2505270,.36,.4),d=h(9398085,.85),x=h(12500917,.9),y=new Ge(6718864),p=new Ge(11770232),m=c(new Sn({color:y,roughness:.12,metalness:.08,transparent:!0,opacity:.68,envMapIntensity:.95,emissive:16760181,emissiveIntensity:0})),_=h(15921640,.64),v=h(2107429,.54,.25),M=h(6837061,.95),w=c(new Ke({color:16772547,emissive:16759139,emissiveIntensity:0,roughness:.6})),T=l(new ke(1,1,1));function g(V,G,oe,Ae,ue,$e,Qe,_t,pt=!1){let Ut=new se(pt?l(new Ds(ue,$e,Qe,2,Math.min(ue,$e,Qe)*.12)):T,_t);return pt||Ut.scale.set(ue,$e,Qe),Ut.position.set(G,oe,Ae),Ut.castShadow=!0,Ut.receiveShadow=!0,V.add(Ut),Ut}function E(V,G,oe,Ae,ue){let $e=oe.clone().sub(G),Qe=new se(l(new Mt(Ae*.74,Ae,$e.length(),14)),ue);return Qe.position.copy(G).add(oe).multiplyScalar(.5),Qe.quaternion.setFromUnitVectors(new I(0,1,0),$e.normalize()),Qe.castShadow=!0,V.add(Qe),Qe}function L(V,G,oe,Ae){let ue=new yn(G),$e=new se(l(new Mn(ue,48,oe,6,!1)),Ae);return V.add($e),$e}let N=new ii().load("/assets/brand/anthrise-official.png",t);N.colorSpace=It,a.push(N);let A=c(new Ke({map:N,color:16777215,roughness:.65,metalness:0})),D=new lt;D.position.set(.8,Ot(.8,-12.8)+.1,-12.8),D.name="AnthriseConceptOffice",s.add(D),g(D,0,.02,0,11,.22,8,x),g(D,0,4.25,0,9.6,8.2,5.8,f),g(D,0,4.3,3.02,8.9,7.5,.1,m);for(let V=0;V<4;V++){let G=.6+V*2;g(D,0,G,3.13,9.7,.14,.3,u);for(let oe=0;oe<7;oe++)g(D,-4.4+oe*1.47,G+.92,3.12,.055,1.84,.16,u);for(let oe=0;oe<5;oe++)g(D,-3.5+oe*1.6,G+.4,1.95,.95,.05,.5,d),g(D,-3.5+oe*1.6,G+.7,2.1,.35,.35,.1,v)}g(D,-3.4,1,3.15,2.2,2,.08,m);for(let V of[-3.9,-2.9])g(D,V,.95,3.25,.04,.5,.05,u);g(D,-2.9,2.25,3.65,3.8,.12,1.5,u),g(D,2.2,6.8,3.18,4.1,2.1,.15,_);let C=new se(l(new Vt(3.55,.68)),A);C.position.set(2.2,7.05,3.27),D.add(C);let B=document.createElement("canvas");B.width=768,B.height=100;let H=B.getContext("2d");H.clearRect(0,0,768,100),H.fillStyle="#174e40",H.font="500 49px sans-serif",H.textAlign="center",H.fillText("T E C H N O L O G Y",384,66);let k=new vn(B);k.colorSpace=It,a.push(k);let re=new se(l(new Vt(3.1,.4)),c(new Ke({map:k,transparent:!0,roughness:.8})));re.position.set(2.2,6.42,3.28),D.add(re),g(D,0,8.48,0,10.1,.24,6.3,u);for(let V=0;V<4;V++)g(D,-3.3+V*2.1,8.7,-.8,1.7,.08,2.5,c(new Ke({map:e.solarPanel,roughness:.25,metalness:.3})));let X=new lt;X.position.set(-11.5,.26,1.7),s.add(X);for(let V of[.42,.94,2.98,3.49])g(X,-3.4,V,2.715,5.12,.012,.025,x);for(let V of[-5.5,-3.15,-2.05,-.95])g(X,V,1.75,2.72,.012,3.3,.025,x);for(let V of[-.76,2.8,6.2])g(X,V,1.55,2.5,.045,3.02,.04,_),g(X,V,1.1,2.55,.04,.38,.04,u);let Z=new I(-6.3,4.23-.11*Math.cos(.22)-3.29*Math.sin(.22),.1-.11*Math.sin(.22)+3.29*Math.cos(.22));L(X,[Z,new I(-6.3,3.1,2.85),new I(-6.3,.2,2.85)],.055,u);let le=g(X,-.05,1.08,-1.29,.91,2,.03,_);g(X,.29,1.2,-1.25,.04,.65,.07,u),g(X,-.05,1.4,-1.24,.85,.018,.03,u);let Ie=g(X,5.15,.65,-1.6,1.25,1.15,.8,d);g(X,5.15,1.25,-1.6,1.35,.08,.9,f);for(let V=0;V<2;V++){let G=new se(l(new Mt(.18,.18,.02,24)),v);G.position.set(4.85+V*.6,1.31,-1.6),X.add(G)}g(X,5.15,.7,-1.17,.85,.62,.04,v);let Pe=new lt;Pe.position.set(18.5,.25,-7.8),s.add(Pe);for(let V=0;V<22;V++)g(Pe,-6.5+V*.6,2.7,4.83,.025,5.3,.03,x);for(let V=1;V<5;V++)g(Pe,0,V,4.84,13.2,.022,.025,x);g(Pe,3.6,1.6,4.9,3.3,3.1,.14,u);for(let V=0;V<10;V++)g(Pe,3.6,.35+V*.27,5,3.1,.16,.04,x);g(Pe,3.6,3.25,5.1,3.9,.12,.7,u);for(let V of[-4.2,-1.3,1.7]){g(Pe,V,5.65,1,1.5,.45,1.2,x);for(let G=0;G<9;G++)g(Pe,V-.6+G*.15,5.91,1,.04,.025,1,u)}let J=Ka(),ye=h(13158073,.9),be=c(new an({color:15131862}));for(let V of[-1,1]){let G=[];for(let oe=0;oe<=140;oe++){let Ae=oe/140,ue=J.getPointAt(Ae),$e=J.getTangentAt(Ae),Qe=new I(-$e.z,0,$e.x).normalize();ue.addScaledVector(Qe,V*($a/2+.05)),ue.y=Ot(ue.x,ue.z)+.12,G.push(ue)}L(s,G,.065,ye)}for(let V=0;V<7;V++)g(s,-1.1+V*.47,Ot(0,6.8)+.07,6.8,.27,.015,2.45,be);let Ve=h(3753024,.65,.4),he=h(10272181,.2,.15),ee=[[-24,1],[-24,-10],[-6,-18],[13,-19],[29,-18]];for(let[V,G]of ee){let oe=Ot(V,G);E(s,new I(V,oe,G),new I(V,oe+7.4,G),.105,d),g(s,V,oe+6.9,G,2.3,.13,.18,d);for(let Ae of[-.87,0,.87]){E(s,new I(V+Ae,oe+6.95,G),new I(V+Ae,oe+7.23,G),.06,he);let ue=new se(l(new xi(.1,.023,5,12)),he);ue.rotation.x=Math.PI/2,ue.position.set(V+Ae,oe+7.15,G),s.add(ue)}}for(let V=0;V<ee.length-1;V++)for(let G of[-.87,0,.87]){let oe=ee[V],Ae=ee[V+1],ue=Ot(...oe)+7.24,$e=Ot(...Ae)+7.24;L(s,[new I(oe[0]+G,ue,oe[1]),new I((oe[0]+Ae[0])/2+G,(ue+$e)/2-.5,(oe[1]+Ae[1])/2),new I(Ae[0]+G,$e,Ae[1])],.016,Ve)}let Le=[[-22.5,-6.5,1.05],[-21,5.2,.85],[-16,-7.2,1.15],[-2.5,-5.8,1.1],[-1.2,.2,.9],[5.2,2.2,.95],[14.2,-16.8,1.2],[29.5,-14.8,1.1],[32.4,-7.2,1.15],[33.8,.5,1],[10.2,13.8,1.1],[11.4,21.2,1.25],[16.2,22.8,.95],[27.4,21.8,1.15],[31.8,17.5,1.05],[-8.5,16.2,1.1],[-18.8,15,1.2],[-26.5,6.2,1.25],[-25.5,-13,1.3],[22.5,-18.5,1.18]],_e=document.createElement("canvas");_e.width=64,_e.height=128;let Fe=_e.getContext("2d");Fe.fillStyle="#ffffff",Fe.beginPath(),Fe.ellipse(32,61,25,55,-.12,0,Math.PI*2),Fe.fill(),Fe.strokeStyle="#c0d3ad",Fe.lineWidth=2,Fe.beginPath(),Fe.moveTo(31,113),Fe.lineTo(33,8),Fe.stroke();let Je=new vn(_e);Je.colorSpace=It,a.push(Je);let ne=c(new Ke({map:Je,transparent:!1,alphaTest:.5,side:on,color:6523707,roughness:.9})),de=window.innerWidth<=768?130:240,me=new zt(l(new Vt(.28,.49,2,3)),ne,Le.length*de);me.castShadow=!1;let xe=new wt,ge=0,De=V=>{let G=Math.sin(V*78.233+11.73)*43758.5453;return G-Math.floor(G)};Le.forEach(([V,G,oe],Ae)=>{let ue=Ot(V,G),$e=3.3*oe;E(s,new I(V,ue,G),new I(V+.12,ue+$e*.8,G),.115*oe,M);for(let Qe=0;Qe<7;Qe++){let _t=Qe*2.399+Ae,pt=new I(V+Math.sin(_t)*.9*oe,ue+$e*(.58+De(Ae*13+Qe)*.24),G+Math.cos(_t)*.9*oe);E(s,new I(V,ue+$e*.42,G),pt,.045*oe,M)}for(let Qe=0;Qe<de;Qe++){let _t=Ae*997+Qe,pt=De(_t+1)*Math.PI*2,Ut=Math.sqrt(De(_t+3))*1.38*oe;xe.position.set(V+Math.cos(pt)*Ut,ue+$e*.64+(De(_t+7)-.35)*1.8*oe,G+Math.sin(pt)*Ut),xe.rotation.set(De(_t+9)*Math.PI,De(_t+10)*Math.PI,De(_t+11)*Math.PI),xe.scale.setScalar((.7+De(_t+12)*1.2)*oe),xe.updateMatrix(),me.setMatrixAt(ge,xe.matrix),me.setColorAt(ge,new Ge().setHSL(.23+De(_t+14)*.11,.3+De(_t+15)*.2,.3+De(_t+16)*.16)),ge++}}),s.add(me);let Be=h(7902548,.95),it=h(10716327,.85),rt=h(15131589,.8),ot=new Ln;ot.moveTo(-.023,0),ot.quadraticCurveTo(-.035,.3,.12,.65),ot.quadraticCurveTo(.035,.25,.023,0);let O=l(new br(ot));Be.side=on;let yt=1100,et=new zt(O,Be,yt);for(let V=0;V<yt;V++){let G=V%2===0,oe=G?-22+De(V*7)*20:10+De(V*7)*23,Ae=G?13.4+De(V*13)*3.8:19.8+De(V*13)*5.5;xe.position.set(oe,Ot(oe,Ae)+.14,Ae),xe.rotation.set((De(V+6)-.5)*.5,De(V+8)*Math.PI*2,(De(V+11)-.5)*.5),xe.scale.set(.5+De(V+2),.35+De(V+5)*.6,.5+De(V+9)),xe.updateMatrix(),et.setMatrixAt(V,xe.matrix)}s.add(et);let gt=l(new gi(.075,1));for(let V=0;V<2;V++){let G=new zt(gt,V?rt:it,180);for(let oe=0;oe<180;oe++){let Ae=-20+De(oe*3+V*8)*15,ue=13+De(oe*7+V)*2;xe.position.set(Ae,Ot(Ae,ue)+.38+De(oe)*.17,ue),xe.scale.setScalar(.7+De(oe+4)*.6),xe.updateMatrix(),G.setMatrixAt(oe,xe.matrix)}s.add(G)}let ve=l(new gi(1,4)),ut=ve.getAttribute("position");for(let V=0;V<ut.count;V++){let G=new I().fromBufferAttribute(ut,V),oe=1+.12*Math.sin(G.x*6+G.y*9)+.07*Math.cos(G.z*13);ut.setXYZ(V,G.x*oe,G.y*oe*.6,G.z*oe)}ve.computeVertexNormals();let Xe=h(10065802,.97);for(let V=0;V<18;V++){let G=12+De(V+44)*19,oe=20+De(V+61)*6,Ae=new se(ve,Xe);Ae.position.set(G,Ot(G,oe)+.13,oe),Ae.scale.setScalar(.25+De(V+77)*.9),Ae.rotation.y=De(V+83)*6,Ae.castShadow=!0,Ae.receiveShadow=!0,s.add(Ae)}let Oe=new lt;Oe.position.set(18,Ot(18,19.2)+.12,19.2),s.add(Oe),g(Oe,0,1,0,2.6,.12,1.1,d);for(let V of[-1,1])for(let G of[-.37,.37])g(Oe,V,.5,G,.075,1,.075,u);let P=n.portable();P.position.set(-.5,1.06,0),Oe.add(P);let S=g(Oe,.65,1.49,-.1,.8,.52,.035,u);S.rotation.x=-.16,g(Oe,.65,1.08,.12,.8,.03,.5,u);let W=c(new Ke({color:11389393,emissive:8235173,emissiveIntensity:0}));g(Oe,.65,1.49,-.075,.68,.4,.008,W);let pe=new se(l(new Mt(.11,.11,.32,24)),w);pe.name="CampLantern",pe.position.set(1.08,1.26,.1),Oe.add(pe);let ie=new $t(16761211,0,5.5,2);ie.name="CampLantern-Practical",ie.position.set(1.08,1.32,.1),Oe.add(ie),wn(ie,"offgrid",1);let Me=new se(l(new Mt(.13,.13,.035,24)),v);Me.position.set(1.08,1.44,.1),Oe.add(Me);let Ee=new se(l(new xi(.105,.011,8,24,Math.PI)),u);Ee.position.set(1.08,1.46,.1),Oe.add(Ee);for(let V=0;V<2;V++){let G=g(Oe,-2.05-V*.85,.6,1,.8,.045,1.3,c(new Ke({map:e.solarPanel,roughness:.28,metalness:.25})));G.rotation.x=.58}L(Oe,[new I(-2.1,.24,1.45),new I(-1.5,.1,1.6),new I(-.035,.2,.6),new I(-.035,1.34,0)],.024,v),L(Oe,[new I(-.4,1.28,.313),new I(.05,1.14,.4),new I(.6,1.13,.3)],.018,v);let j=new lt;j.position.set(4,0,1.5),Oe.add(j);let te=c(new Ke({color:11837560,roughness:.9,emissive:12088629,emissiveIntensity:0})),Se=l(new Di(1.5,1.9,4,1,!0)),U=new se(Se,te);U.position.y=.95,U.rotation.y=Math.PI/4,U.scale.z=1.45,j.add(U),E(j,new I(-1.2,0,.8),new I(0,1.9,0),.025,u),E(j,new I(1.2,0,.8),new I(0,1.9,0),.025,u);let K=l(new Mt(.22,.22,.14,16)),Q=h(2369575,.95),z=h(11976641,.25,.8),ce=h(2704462,.16,.35),fe=h(14411231,.24,.15);return[{x:-17.2,z:8,y:.24,yaw:Math.PI/2,color:14476511},{x:26.5,z:-.4,y:.28,yaw:0,color:2378560},{x:28.5,z:-.4,y:.28,yaw:0,color:8885923}].forEach(({x:V,z:G,y:oe,yaw:Ae,color:ue},$e)=>{let Qe=new lt;Qe.name="StaticParkedVehicle"+$e,g(Qe,0,.47,0,1.04,.44,2.35,h(ue,.27,.55),!0),g(Qe,0,.88,-.12,.9,.53,1.35,ce,!0),g(Qe,0,1.12,-.12,.91,.06,1.1,h(ue,.27,.55),!0);for(let _t of[-.7,.52])g(Qe,0,.88,_t,.92,.035,.045,u);for(let _t of[-.52,.52])g(Qe,_t,.86,-.12,.035,.53,.08,u);for(let _t of[-.51,.51])for(let pt of[-.76,.76]){let Ut=new se(K,Q);Ut.rotation.z=Math.PI/2,Ut.position.set(_t,.25,pt),Qe.add(Ut);let Yn=new se(l(new Mt(.11,.11,.151,12)),z);Yn.rotation.z=Math.PI/2,Yn.position.copy(Ut.position),Qe.add(Yn)}for(let _t of[-.34,.34])g(Qe,_t,.56,1.18,.2,.1,.03,fe),g(Qe,_t,.56,-1.18,.2,.1,.03,h(9978680,.35));Qe.position.set(V,oe,G),Qe.rotation.y=Ae,s.add(Qe)}),{root:s,setNightFactor(V){let G=vt.clamp(V,0,1);m.color.copy(y).lerp(p,G),m.opacity=vt.lerp(.68,.88,G),m.emissiveIntensity=G*.95,w.emissiveIntensity=G*1.8,te.emissiveIntensity=G*.18,W.emissiveIntensity=G*.24,ie.intensity=G*16},dispose(){n.dispose(),r.forEach(V=>V.dispose()),o.forEach(V=>V.dispose()),a.forEach(V=>V.dispose()),s.removeFromParent()}}}var ja=class extends Li{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new ke;e.deleteAttribute("uv");let t=new Ke({side:Wt}),n=new Ke,s=new $t(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new se(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new zt(e,n,6),a=new wt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new se(e,Us(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new se(e,Us(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new se(e,Us(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new se(e,Us(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new se(e,Us(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new se(e,Us(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Us(i){return new Tr({color:0,emissive:16777215,emissiveIntensity:i})}var el=[{id:"overview",progress:0,pos:new I(3,19,55),target:new I(5.6,4.3,4.2),fov:41},{id:"home",progress:.34,pos:new I(-16.5,9.2,20.5),target:new I(-10.8,2.1,2.2),fov:38},{id:"commercial",progress:.67,pos:new I(24.5,11.4,13.5),target:new I(18.5,2.5,-5.8),fov:39},{id:"offgrid",progress:1,pos:new I(28.5,9.6,33.5),target:new I(21.6,1.5,15.6),fov:39}];function Hu(i){let e=0,t=0,n=0,s=0,r=0,o=0,a=!0,l=new I,c=new I,h=new I,f=new Pr,u=new I,d=new I,x=new I,y=new I,p=(_,v)=>{let M=vt.clamp(_,0,1),w=0;for(;w<el.length-2&&M>el[w+1].progress;)w++;let T=el[w],g=el[w+1],E=Math.max(1e-4,g.progress-T.progress),L=vt.clamp((M-T.progress)/E,0,1),R=L*L*(3-2*L);if(u.copy(T.pos),d.copy(g.pos),x.copy(T.target),y.copy(g.target),l.lerpVectors(u,d,R),c.lerpVectors(x,y,R),window.innerWidth<=768||v<1.05){let A=vt.lerp(1.42,1,vt.clamp((v-.45)/.6,0,1)),D=Math.max(A,1.75/Math.max(v,.35)),C=1-vt.smoothstep(M,0,.3),B=vt.lerp(A,D,C);h.subVectors(l,c).multiplyScalar(B),h.y*=1.08,l.copy(c).add(h)}let N=vt.lerp(T.fov,g.fov,R)+(v<.85?5:0);Math.abs(i.fov-N)>.05&&(i.fov=N,i.updateProjectionMatrix())},m=_=>{p(t,_),h.subVectors(l,c),f.setFromVector3(h),f.theta+=r,f.phi=vt.clamp(f.phi+o,.36,1.32),h.setFromSpherical(f),i.position.copy(c).add(h),i.lookAt(c)};return m(16/9),{setScrollProgress:_=>{let v=vt.clamp(_,0,1);v!==e&&(e=v,a=!0)},getZoneForProgress:_=>_<.17?"overview":_<.505?"home":_<.835?"commercial":"offgrid",setOrbitOffset:(_,v)=>{n=vt.clamp(n+_,-.45,.45),s=vt.clamp(s+v,-.18,.22),a=!0},resetOrbit:()=>{(n!==0||s!==0)&&(n=0,s=0,a=!0)},snapToProgress:(_,v)=>{e=vt.clamp(_,0,1),t=e,n=0,s=0,r=0,o=0,a=!1,m(v)},update:(_,v,M)=>{if(!(a||t!==e||r!==n||o!==s))return!1;if(M)t=e,r=n,o=s;else{let T=1-Math.exp(-6.4*Math.min(_,.08));t=Math.abs(e-t)<25e-5?e:vt.lerp(t,e,T),r=Math.abs(n-r)<4e-4?n:vt.lerp(r,n,T),o=Math.abs(s-o)<4e-4?s:vt.lerp(o,s,T)}return m(v),a=t!==e||r!==n||o!==s,!0}}}var tl={pv:16751135,bat:53662,ac:1892534,grid:5943016,light:16760386,bms:10679007},lx=9480368;function zu(){let i=new lt;i.name="EnergyFlowSystem",i.visible=!1;let e=Ot(21,15.2),t=[{id:"z1-pv-inv",kind:"pv",when:"day",points:[[-12.5,4.5,2.9],[-15.4,4.15,4.15],[-15.8,3.05,4.6]],packetCount:3,speed:.36},{id:"z1-inv-bat-day",kind:"bat",when:"day",points:[[-15.3,2,4.72],[-14.25,2,4.72],[-14.25,1.45,4.72]],packetCount:2,speed:.42},{id:"z1-bat-inv-night",kind:"bat",when:"night",points:[[-14.25,1.45,4.72],[-14.25,2,4.72],[-15.3,2,4.72]],packetCount:2,speed:.4},{id:"z1-bms",kind:"bms",when:"both",points:[[-15.2,2.22,4.76],[-14.1,2.22,4.76],[-14.1,1.55,4.76]],packetCount:2,speed:.55},{id:"z1-inv-ac-loads",kind:"ac",when:"both",points:[[-16.2,2.2,4.65],[-17.65,2.2,3.85],[-17.65,2.2,2.15],[-16.2,3.25,4.48],[-12.2,3.25,4.48],[-8.9,2.95,2.6],[-8.9,2.85,-.35]],packetCount:5,speed:.28},{id:"z1-grid",kind:"grid",when:"night",points:[[-21.1,6.2,.9],[-17.7,3.2,.9],[-17.7,2.1,2]],packetCount:3,speed:.34},{id:"z1-garden-light-day",kind:"pv",when:"day",points:[[-4.4,2.02,6.4],[-4.4,1.65,6.4]],packetCount:1,speed:.65},{id:"z1-garden-light-night",kind:"light",when:"night",points:[[-4.4,1.45,6.4],[-4.4,1.85,6.4]],packetCount:1,speed:.65},{id:"z2-pv-inv",kind:"pv",when:"day",points:[[17.2,5.85,-7.2],[15.6,5.5,-4.6],[15.6,2.35,-3.5]],packetCount:4,speed:.34},{id:"z2-inv-bat-day",kind:"bat",when:"day",points:[[15.2,1.65,-3.15],[13.8,1.65,-3.15],[12.3,1.65,-3.15]],packetCount:3,speed:.42},{id:"z2-bat-inv-night",kind:"bat",when:"night",points:[[12.3,1.65,-3.15],[13.8,1.65,-3.15],[15.2,1.65,-3.15]],packetCount:3,speed:.4},{id:"z2-ac-loads",kind:"ac",when:"both",points:[[16,1.65,-3.15],[17.7,1.65,-3.15],[21.4,2.4,-3.8],[24.2,4.9,-6.2]],packetCount:4,speed:.28},{id:"z2-grid",kind:"grid",when:"night",points:[[8.5,6.8,-11.5],[14.5,4.2,-7.2],[17.7,2.2,-3.6]],packetCount:3,speed:.3},{id:"z2-roadlight-day",kind:"pv",when:"day",points:[[17.8,4.55,1.5],[17.8,4.15,1.5]],packetCount:1,speed:.7},{id:"z2-roadlight-night",kind:"light",when:"night",points:[[17.8,4.35,1.5],[17.8,3.3,1.5]],packetCount:2,speed:.6},{id:"z3-pv-storage",kind:"pv",when:"day",points:[[15.8,e+1.45,14.6],[17.6,e+.9,16.4],[18.9,e+.85,16.85],[21.4,e+.85,17.25]],packetCount:3,speed:.38},{id:"z3-bat-night",kind:"bat",when:"night",points:[[18.9,e+.9,16.85],[20.4,e+.9,17.15],[21.55,e+.9,17.25]],packetCount:2,speed:.42},{id:"z3-field-loads",kind:"ac",when:"both",points:[[21.55,e+1.05,17.25],[22,e+1.1,15.6],[22.4,e+1.3,14.4]],packetCount:2,speed:.42},{id:"z3-split-day",kind:"pv",when:"day",points:[[26.8,e+4.5,16.5],[26.8,e+3.25,16.65]],packetCount:1,speed:.7},{id:"z3-split-night",kind:"light",when:"night",points:[[26.8,e+3.25,16.65],[26.75,e+3.9,16.5],[25.65,e+3.9,16.5]],packetCount:2,speed:.55}],n=Ac(e);t.forEach(g=>{n[g.id]&&(g.points=n[g.id])}),t.push({id:"z3-controller-seed",kind:"bat",when:"day",points:n["z3-controller-seed"],packetCount:2,speed:.35}),t.push({id:"z3-portable-pv",kind:"pv",when:"day",points:n["z3-portable-pv"],packetCount:2,speed:.35});let s=[],r=new dr(.022,.11,4,8);r.rotateX(Math.PI/2);let o=new Di(.045,.13,8);o.rotateX(Math.PI/2);let a=new an({color:16777215}),l=t.reduce((g,E)=>g+E.packetCount,0),c=new zt(r,a,l);c.name="EnergyFlowPackets",c.instanceMatrix.setUsage(oc),i.add(c);let h=new wt,f=new I,u=new I,d=new I(0,1,0),x=new _n,y=new Ge;t.forEach(g=>{let E=Qa(g.points),L=new Mn(E,Math.max(12,g.points.length*10),.012,7,!1),R=new an({color:tl[g.kind],transparent:!0,opacity:.9}),N=new se(L,R);N.name=`FlowConduit-${g.id}`,i.add(N);let A=new an({color:tl[g.kind],transparent:!0,opacity:.95}),D=Math.max(1,g.packetCount),C=new zt(o,A,D);C.name=`FlowArrows-${g.id}`;for(let B=0;B<D;B++){let H=(B+.5)/D;E.getPointAt(H,f),E.getTangentAt(H,u).normalize(),h.position.copy(f),x.setFromUnitVectors(new I(0,0,1),u),h.quaternion.copy(x),h.scale.setScalar(1),h.updateMatrix(),C.setMatrixAt(B,h.matrix)}C.instanceMatrix.needsUpdate=!0,C.visible=!1,i.add(C),s.push({spec:g,curve:E,tube:N,tubeMat:R,staticArrows:C})});let p=!1,m=!1,_=!1,v=0,M=g=>g.when==="both"||g.when==="night"&&p||g.when==="day"&&!p,w=()=>{let g=m||_;c.visible=!g,s.forEach(E=>{M(E.spec)?(E.tubeMat.color.setHex(tl[E.spec.kind]),E.tubeMat.opacity=E.spec.kind==="bms"?.55:.92,E.staticArrows.visible=g):(E.tubeMat.color.setHex(lx),E.tubeMat.opacity=.24,E.staticArrows.visible=!1)})};return w(),{group:i,setVisible:g=>{i.visible=g},setState:(g,E,L)=>{let R=g>=.5;(R!==p||E!==m||L!==_)&&(p=R,m=E,_=L,w())},update:g=>{if(!i.visible)return;!m&&!_&&(v+=g);let E=0;for(let L=0;L<s.length;L++){let R=s[L],N=M(R.spec),A=R.spec.packetCount;y.setHex(tl[R.spec.kind]);for(let D=0;D<A;D++){if(!N||m||_)h.scale.setScalar(1e-4),h.position.set(0,-100,0),h.updateMatrix(),c.setMatrixAt(E,h.matrix);else{let C=((v*R.spec.speed+D/A)%1+1)%1;R.curve.getPointAt(C,f),R.curve.getTangentAt(C,u).normalize(),h.position.copy(f),h.lookAt(f.x+u.x,f.y+u.y,f.z+u.z);let B=Math.min(C*6,(1-C)*6,1),H=(R.spec.kind==="bms"?.65:1)*Math.max(.2,B);h.scale.setScalar(H),h.updateMatrix(),c.setMatrixAt(E,h.matrix),c.setColorAt(E,y)}E++}}c.instanceMatrix.needsUpdate=!0,c.instanceColor&&(c.instanceColor.needsUpdate=!0)},dispose:()=>{r.dispose(),o.dispose(),a.dispose(),s.forEach(g=>{g.tube.geometry.dispose(),g.tubeMat.dispose(),g.staticArrows.material.dispose()})}}}var qr={overview:{id:"overview",num:"00",progress:0,title:{en:"Clean Energy Campus",zh:"\u7ACB\u4F53\u6E05\u6D01\u80FD\u6E90\u56ED\u533A"},subtitle:{en:"Scroll or choose a zone to explore residential, commercial, and off-grid energy architectures in one landscape.",zh:"\u5411\u4E0B\u6EDA\u52A8\u6216\u9009\u62E9\u533A\u57DF\uFF0C\u8FDE\u7EED\u63A2\u7D22\u5BB6\u5EAD\u3001\u5DE5\u5546\u4E1A\u4E0E\u504F\u8FDC\u79BB\u7F51\u80FD\u6E90\u7CFB\u7EDF\u3002"},noteDay:{en:"Day: Solar generation & storage charging",zh:"\u767D\u663C\uFF1A\u5149\u4F0F\u91C7\u96C6\u53D1\u7535\u4E0E\u50A8\u80FD\u84C4\u80FD"},noteNight:{en:"Night: Stored battery supply & autonomous solar lighting",zh:"\u591C\u665A\uFF1A\u50A8\u80FD\u653E\u7535\u4F9B\u7535\u4E0E\u72EC\u7ACB\u592A\u9633\u80FD\u7167\u660E"}},home:{id:"home",num:"01",progress:.34,title:{en:"HOME ENERGY",zh:"\u5BB6\u5EAD\u80FD\u6E90"},subtitle:{en:"First-region concept: detailed roof, glazing & installations. Hardware is illustrative, enlarged and not manufacturer CAD.",zh:"\u9996\u8F6E\u533A\u57DF\u6982\u5FF5\u9A8C\u8BC1\uFF1A\u7EC6\u5316\u5C4B\u9762\u3001\u7A97\u6846\u4E0E\u5B89\u88C5\u627F\u6258\uFF1B\u786C\u4EF6\u4E3A\u653E\u5927\u793A\u610F\uFF0C\u975E\u5382\u5BB6 CAD\u3002"},noteDay:{en:"Day: Roof PV feeds hybrid inverter, home loads & 16 kWh battery",zh:"\u767D\u663C\uFF1A\u5C4B\u9876\u5149\u4F0F\u7ECF\u6DF7\u5408\u9006\u53D8\u5668\u4F9B\u7535\u5BB6\u5C45\u8D1F\u8F7D\u5E76\u4E3A 16 kWh \u7535\u6C60\u84C4\u80FD"},noteNight:{en:"Night: 16 kWh battery discharges via inverter with grid backup & yard solar light on",zh:"\u591C\u665A\uFF1A16 kWh \u50A8\u80FD\u7ECF\u9006\u53D8\u5668\u4F9B\u80FD\uFF0C\u7535\u8868\u914D\u7535\u63D0\u4F9B\u7F51\u683C\u652F\u6491\uFF0C\u5EAD\u9662\u592A\u9633\u80FD\u706F\u4EAE\u8D77"}},commercial:{id:"commercial",num:"02",progress:.67,title:{en:"COMMERCIAL & INDUSTRIAL",zh:"\u5DE5\u5546\u4E1A\u80FD\u6E90"},subtitle:{en:"Concept scenario: rooftop PV, HORIZON ESS cabinets, 50 kW conversion, switchgear & road lighting.",zh:"\u6982\u5FF5\u5E94\u7528\u793A\u610F\uFF1A\u5927\u8DE8\u5EA6\u5149\u4F0F\u5C4B\u9762\u3001HORIZON \u50A8\u80FD\u67DC\u300150 kW \u53D8\u6D41\u5E76\u7F51\u4E0E\u56ED\u533A\u8DEF\u706F\u3002"},noteDay:{en:"Day: Facility PV array supplies operations & charges HORIZON ESS cabinets",zh:"\u767D\u663C\uFF1A\u5DE5\u5546\u4E1A\u5C4B\u9762\u5149\u4F0F\u652F\u6491\u5EFA\u7B51\u4E0E\u7A7A\u8C03\u8D1F\u8F7D\u5E76\u4E3A HORIZON \u50A8\u80FD\u67DC\u84C4\u80FD"},noteNight:{en:"Night: HORIZON ESS & switchgear support facility loads while road solar lights illuminate drive",zh:"\u591C\u665A\uFF1AHORIZON \u50A8\u80FD\u4E0E\u914D\u7535\u652F\u6301\u5EFA\u7B51\u8D1F\u8F7D\uFF0C\u56ED\u533A\u4E00\u4F53\u5316\u592A\u9633\u80FD\u8DEF\u706F\u81EA\u52A8\u4EAE\u706F"}},offgrid:{id:"offgrid",num:"03",progress:1,title:{en:"REMOTE & OFF-GRID",zh:"\u504F\u8FDC\u4E0E\u79BB\u7F51\u5E94\u7528"},subtitle:{en:"Disconnected from utility grid: standalone PV rack, SEED & Volt 1000 field power, and split street light.",zh:"\u72EC\u7ACB\u4E8E\u516C\u7528\u7535\u7F51\u4E4B\u5916\uFF1A\u72EC\u7ACB\u5149\u4F0F\u652F\u67B6\u3001SEED \u50A8\u80FD\u4E0E Volt 1000 \u79FB\u52A8\u4F5C\u4E1A\u4F9B\u7535\u3001\u5206\u4F53\u5F0F\u592A\u9633\u80FD\u8DEF\u706F\u3002"},noteDay:{en:"Day: Independent solar rack charges SEED storage & portable workstation power",zh:"\u767D\u663C\uFF1A\u79BB\u7F51\u5149\u4F0F\u72EC\u7ACB\u4E3A SEED \u7535\u6C60\u4E0E\u79FB\u52A8\u5DE5\u4F5C\u53F0\u4F9B\u7535\u84C4\u80FD\uFF08\u65E0\u7535\u7F51\u63A5\u5165\uFF09"},noteNight:{en:"Night: SEED & Volt 1000 power field tools & camp light; split street light runs independently",zh:"\u591C\u665A\uFF1ASEED \u4E0E Volt 1000 \u652F\u6491\u79FB\u52A8\u4EEA\u5668\u4E0E\u8425\u5730\u706F\uFF0C\u5206\u4F53\u5F0F\u592A\u9633\u80FD\u8DEF\u706F\u72EC\u7ACB\u7167\u660E"}}},ku=[{id:"brand-office",zone:"overview",kind:"info",worldPos:[-1,10.6,-12.8],kicker:{en:"Brand architecture concept",zh:"\u54C1\u724C\u5EFA\u7B51\u6982\u5FF5"},title:{en:"Anthrise Technology \xB7 Concept Office",zh:"Anthrise Technology \xB7 \u6982\u5FF5\u529E\u516C\u697C"},usage:{en:"A conceptual branded office in the energy landscape. Actual company contact details remain on the website.",zh:"\u80FD\u6E90\u573A\u666F\u4E2D\u7684\u54C1\u724C\u6982\u5FF5\u529E\u516C\u5EFA\u7B51\uFF0C\u5B9E\u9645\u516C\u53F8\u5730\u5740\u53CA\u8054\u7CFB\u4FE1\u606F\u4EE5\u7F51\u7AD9\u8054\u7CFB\u65B9\u5F0F\u4E3A\u51C6\u3002"}},{id:"ov-home",zone:"overview",targetZone:"home",kind:"zone",worldPos:[-11.5,6.2,2],kicker:{en:"01 \xB7 Residential",zh:"01 \xB7 \u5BB6\u5EAD\u573A\u666F"},title:{en:"Home Energy",zh:"\u5BB6\u5EAD\u80FD\u6E90"},usage:{en:"Click to inspect rooftop solar, hybrid inverter, 16 kWh battery & cutaway appliances.",zh:"\u70B9\u51FB\u8FDB\u5165\u67E5\u770B\u5C4B\u9876\u5149\u4F0F\u3001\u6DF7\u5408\u9006\u53D8\u5668\u300116 kWh \u7535\u6C60\u4E0E\u5BA4\u5185\u5BB6\u7535\u3002"}},{id:"ov-commercial",zone:"overview",targetZone:"commercial",kind:"zone",worldPos:[18.8,7.6,-7.2],kicker:{en:"02 \xB7 Commercial & Industrial",zh:"02 \xB7 \u5DE5\u5546\u4E1A\u573A\u666F"},title:{en:"Commercial & Industrial",zh:"\u5DE5\u5546\u4E1A\u80FD\u6E90"},usage:{en:"Click to inspect C&I solar array, HORIZON ESS cabinets, switchgear & road lights.",zh:"\u70B9\u51FB\u8FDB\u5165\u67E5\u770B\u5DE5\u5546\u4E1A\u5149\u4F0F\u5C4B\u9762\u3001HORIZON \u50A8\u80FD\u67DC\u3001\u914D\u7535\u4E0E\u9053\u8DEF\u7167\u660E\u3002"}},{id:"ov-offgrid",zone:"overview",targetZone:"offgrid",kind:"zone",worldPos:[20.5,5.4,15.2],kicker:{en:"03 \xB7 Remote & Off-Grid",zh:"03 \xB7 \u79BB\u7F51\u573A\u666F"},title:{en:"Remote & Off-Grid",zh:"\u504F\u8FDC\u4E0E\u79BB\u7F51\u5E94\u7528"},usage:{en:"Click to explore standalone solar power beyond utility lines.",zh:"\u70B9\u51FB\u63A2\u7D22\u8131\u79BB\u5E02\u7535\u7F51\u7684\u72EC\u7ACB\u5149\u4F0F\u4E0E\u4FBF\u643A\u50A8\u80FD\u7CFB\u7EDF\u3002"}},{id:"home-solar",zone:"home",kind:"product",worldPos:[-10.8,5.2,1.8],skuId:"origAER400",modelCode:"AE-R400",img:"/assets/images/stage-solar.png",topic:"home",hrefEn:"/products/origAER400-en.html",hrefZh:"/products/origAER400-zh.html",kicker:{en:"Photovoltaic modules \xB7 AE-R400",zh:"\u5149\u4F0F\u7EC4\u4EF6 \xB7 AE-R400"},title:{en:"Rooftop Solar Panels (400W)",zh:"\u5C4B\u9876\u5149\u4F0F\u677F\uFF08400W\uFF09"},usage:{en:"Generates DC electricity during daylight and routes via PV isolation to the wall-mounted hybrid inverter.",zh:"\u65E5\u95F4\u4EA7\u751F\u6E05\u6D01\u76F4\u6D41\u7535\uFF0C\u7ECF\u5149\u4F0F\u76F4\u6D41\u4FDD\u62A4\u901A\u9053\u8F93\u9001\u81F3\u5EFA\u7B51\u5916\u5899\u6DF7\u5408\u9006\u53D8\u5668\u3002"}},{id:"home-inverter",zone:"home",kind:"product",worldPos:[-15.8,3.18,4.72],skuId:"hybrid6",modelCode:"AE-I-HYBRID-6K",img:"/assets/images/products/hybrid6.png",topic:"home",hrefEn:"/products/hybrid6-en.html",hrefZh:"/products/hybrid6-zh.html",kicker:{en:"Power conversion \xB7 AE-I-HYBRID-6K",zh:"\u6DF7\u5408\u9006\u53D8\u5668 \xB7 AE-I-HYBRID-6K"},title:{en:"6 kW LV Hybrid Inverter",zh:"6 kW \u4F4E\u538B\u6DF7\u5408\u9006\u53D8\u5668"},usage:{en:"6 kW / 40\u201360 V / 135 A max. Catalogue W\xD7D\xD7H: 330\xD7228\xD7433 mm; this enlarged mesh is not to scale. Rear ports, mounting template, CAN/RS-485 profile and final battery compatibility require confirmation.",zh:"6 kW / 40\u201360 V / \u4E0A\u9650 135 A\uFF1B\u76EE\u5F55\u5BBD\xD7\u6DF1\xD7\u9AD8 330\xD7228\xD7433 mm\uFF0C\u5F53\u524D\u7F51\u683C\u4E3A\u653E\u5927\u793A\u610F\u3002\u540E\u80CC\u63A5\u53E3\u3001\u5B89\u88C5\u5B54\u56FE\u3001CAN/RS-485 \u534F\u8BAE\u4E0E\u6700\u7EC8\u7535\u6C60\u5339\u914D\u5F85\u786E\u8BA4\u3002"}},{id:"home-battery",zone:"home",kind:"product",worldPos:[-14.25,1.4,4.95],skuId:"ess16",modelCode:"AE-E-DAWN-16",img:"/assets/images/stage-battery.png",topic:"home",hrefEn:"/products/ess16-en.html",hrefZh:"/products/ess16-zh.html",kicker:{en:"Home storage \xB7 AE-E-DAWN-16",zh:"\u6237\u7528\u50A8\u80FD \xB7 AE-E-DAWN-16"},title:{en:"16 kWh Home Storage",zh:"16 kWh \u50A8\u80FD\u7535\u6C60"},usage:{en:"51.2 V LiFePO4 storage. Catalogue W\xD7D\xD7H: 480\xD7235\xD7874 mm, 120 kg net. The original enlarged wheeled mesh preserves cable anchors; it is not manufacturer CAD. Rear connectors, caster load rating and installation clearances await verified drawings.",zh:"51.2 V \u78F7\u9178\u94C1\u9502\u50A8\u80FD\uFF1B\u76EE\u5F55\u5BBD\xD7\u6DF1\xD7\u9AD8 480\xD7235\xD7874 mm\uFF0C\u51C0\u91CD 120 kg\u3002\u4FDD\u7559\u539F\u653E\u5927\u811A\u8F6E\u7F51\u683C\u53CA\u7BA1\u7EBF\u951A\u70B9\uFF0C\u975E\u5382\u5BB6 CAD\uFF1B\u540E\u80CC\u63A5\u53E3\u3001\u811A\u8F6E\u627F\u91CD\u4E0E\u5B89\u88C5\u51C0\u8DDD\u9700\u771F\u5B9E\u56FE\u7EB8\u6838\u5B9E\u3002"}},{id:"home-grid",zone:"home",kind:"info",worldPos:[-19.8,4.9,1.05],topic:"home",kicker:{en:"AC interface \xB7 Utility & breaker",zh:"\u5E76\u7F51\u4E0E\u914D\u7535\u63A5\u53E3"},title:{en:"Grid Meter & AC Panel",zh:"\u7535\u7F51\u63A5\u5165\u3001\u7535\u8868\u4E0E\u914D\u7535\u7BB1"},usage:{en:"Safely connects utility service metering and inverter AC output before feeding indoor household circuits.",zh:"\u5C06\u516C\u7528\u7535\u7F51\u8BA1\u91CF\u7AEF\u53E3\u4E0E\u6DF7\u5408\u9006\u53D8\u5668\u4EA4\u6D41\u8F93\u51FA\u5B89\u5168\u6C47\u5165\u5EFA\u7B51\u5185\u90E8\u914D\u7535\u56DE\u8DEF\u3002"}},{id:"home-loads",zone:"home",kind:"info",worldPos:[-8.4,2.05,2.35],topic:"home",kicker:{en:"Indoor AC circuits \xB7 Cutaway",zh:"\u5BA4\u5185\u4EA4\u6D41\u8D1F\u8F7D \xB7 \u5256\u89C6\u5C55\u793A"},title:{en:"Residential Appliances",zh:"\u5BA4\u5185\u65E5\u5E38\u7535\u5668"},usage:{en:"Kitchen refrigeration, split climate control, lighting, and living room electronics supplied via the AC distribution panel.",zh:"\u5305\u62EC\u7A7A\u8C03\u3001\u51B0\u7BB1\u3001\u5BA4\u5185\u7167\u660E\u4E0E\u5F71\u97F3\u529E\u516C\u8BBE\u5907\uFF0C\u5747\u7531\u6237\u5185\u4EA4\u6D41\u914D\u7535\u56DE\u8DEF\u89C4\u8303\u4F9B\u7535\u3002"}},{id:"home-light",zone:"home",kind:"light",worldPos:[-4.4,1.85,6.4],skuId:"jcLight28",modelCode:"AE-L-BLOOM-01",img:"/assets/images/products/jcLight28.png",topic:"lighting",hrefEn:"/products/jcLight28-en.html",hrefZh:"/products/jcLight28-zh.html",kicker:{en:"Independent lighting \xB7 AE-L-BLOOM-01",zh:"\u72EC\u7ACB\u5EAD\u9662\u706F \xB7 AE-L-BLOOM-01"},title:{en:"Solar Courtyard Column Light",zh:"\u592A\u9633\u80FD\u5EAD\u9662\u67F1\u706F"},usage:{en:"Self-contained top PV panel and internal LiFePO4 battery \u2014 charges by day and illuminates garden walkways at night off-grid.",zh:"\u5185\u7F6E\u9876\u90E8\u5149\u4F0F\u677F\u4E0E\u78F7\u9178\u94C1\u9502\u7535\u6C60\uFF0C\u767D\u5929\u81EA\u884C\u5145\u7535\u3001\u591C\u665A\u81EA\u52A8\u70B9\u4EAE\u5EAD\u9662\u8DEF\u5F84\uFF0C\u4E0D\u63A5\u5165\u6237\u5185\u7535\u7F51\u3002"}},{id:"ci-solar",zone:"commercial",kind:"product",worldPos:[19.8,6.2,-7.8],skuId:"origAER400",modelCode:"AE-R400",img:"/assets/images/stage-solar.png",topic:"business",hrefEn:"/products/origAER400-en.html",hrefZh:"/products/origAER400-zh.html",kicker:{en:"Commercial array \xB7 AE-R400",zh:"\u5C4B\u9762\u5149\u4F0F\u9635\u5217 \xB7 AE-R400"},title:{en:"Commercial Rooftop PV Array",zh:"\u5DE5\u5546\u4E1A\u5C4B\u9762\u5149\u4F0F"},usage:{en:"Conceptual large-span photovoltaic roof generation feeding high-power conversion equipment by day.",zh:"\u6982\u5FF5\u5C4B\u9762\u5149\u4F0F\u7CFB\u7EDF\uFF0C\u65E5\u95F4\u4E3A\u5DE5\u5546\u4E1A\u56ED\u533A\u63D0\u4F9B\u76F4\u6D41\u53D1\u7535\u5E76\u63A5\u5165\u9AD8\u529F\u7387\u53D8\u6D41\u8BBE\u5907\u3002"}},{id:"ci-horizon",zone:"commercial",kind:"product",worldPos:[12.95,2.25,-3.25],skuId:"series_horizon",modelCode:"AE-E-HORIZON",img:"/assets/images/products/series_horizon.png",topic:"business",hrefEn:"/products/series_horizon-en.html",hrefZh:"/products/series_horizon-zh.html",kicker:{en:"Concept BESS \xB7 AE-E-HORIZON",zh:"\u5DE5\u5546\u4E1A\u50A8\u80FD\u67DC \xB7 AE-E-HORIZON"},title:{en:"Commercial & Industrial ESS Cabinet",zh:"\u5DE5\u5546\u4E1A\u50A8\u80FD\u67DC"},usage:{en:"Planned modular HV DC battery cabinets (e.g. 50 kW / 112 kWh pairing concept) coordinated externally via CAN/RS-485.",zh:"\u6A21\u5757\u5316\u9AD8\u538B\u76F4\u6D41\u50A8\u80FD\u67DC\u65B9\u6848\uFF08\u5982 50 kW / 112 kWh \u6982\u5FF5\u642D\u914D\uFF09\uFF0C\u7ECF\u5916\u90E8\u53D8\u6D41\u4E0E\u914D\u7535\u67DC\u6309\u9879\u76EE\u5DE5\u51B5\u914D\u7F6E\u3002"}},{id:"ci-inverter",zone:"commercial",kind:"product",worldPos:[15.6,2.15,-3.25],skuId:"hybrid50",modelCode:"AE-I-HYBRID-50K",img:"/assets/images/products/hybrid50.png",topic:"business",hrefEn:"/products/hybrid50-en.html",hrefZh:"/products/hybrid50-zh.html",kicker:{en:"Three-phase HV \xB7 AE-I-HYBRID-50K",zh:"\u4E09\u76F8\u9AD8\u538B\u53D8\u6D41 \xB7 AE-I-HYBRID-50K"},title:{en:"50 kW Hybrid Inverter",zh:"50 kW \u6DF7\u7F51\u9006\u53D8\u5668"},usage:{en:"Three-phase power conversion bridging rooftop PV arrays, HORIZON ESS battery cabinets, and AC facility switchgear.",zh:"\u4E09\u76F8\u9AD8\u538B\u6DF7\u7F51\u9006\u53D8\u6838\u5FC3\uFF0C\u8FDE\u63A5\u5C4B\u9762\u5149\u4F0F\u3001HORIZON \u50A8\u80FD\u67DC\u4E0E\u5DE5\u5546\u4E1A\u4EA4\u6D41\u914D\u7535\u6BCD\u7EBF\u3002"}},{id:"ci-loads",zone:"commercial",kind:"info",worldPos:[23.8,3.1,-5.2],topic:"business",kicker:{en:"Switchgear & facility loads",zh:"\u914D\u7535\u6BCD\u7EBF\u4E0E\u56ED\u533A\u8D1F\u8F7D"},title:{en:"Switchgear, HVAC & Office Loads",zh:"\u914D\u7535\u67DC\u3001\u6696\u901A\u4E0E\u529E\u516C\u8D1F\u8F7D"},usage:{en:"Main AC distribution bay feeding rooftop cooling units, production bay lighting, and workspace circuits. Sizing requires site engineering review.",zh:"\u4EA4\u6D41\u914D\u7535\u603B\u67DC\u7EDF\u4E00\u8C03\u914D\u5C4B\u9762\u5236\u51B7\u3001\u8F66\u95F4\u7167\u660E\u4E0E\u529E\u516C\u8D1F\u8377\uFF0C\u5177\u4F53\u914D\u6BD4\u6309\u9879\u76EE\u6D4B\u7B97\u5B9A\u5236\u3002"}},{id:"ci-light",zone:"commercial",kind:"light",worldPos:[17.8,4.3,1.55],skuId:"jcLight09",modelCode:"AE-L-GUARD-05",img:"/assets/images/products/jcLight09.png",topic:"lighting",hrefEn:"/products/jcLight09-en.html",hrefZh:"/products/jcLight09-zh.html",kicker:{en:"Road luminaire \xB7 AE-L-GUARD-05",zh:"\u9053\u8DEF\u7167\u660E \xB7 AE-L-GUARD-05"},title:{en:"All-in-One Solar Street Light",zh:"\u4E00\u4F53\u5316\u592A\u9633\u80FD\u8DEF\u706F"},usage:{en:"Autonomous roadway luminaire with integrated PV and LiFePO4 battery illuminating commercial drives without trenching AC cable.",zh:"\u96C6\u6210\u5149\u4F0F\u677F\u4E0E\u78F7\u9178\u94C1\u9502\u7535\u6C60\u7684\u4E00\u4F53\u5316\u8DEF\u706F\uFF0C\u65E0\u9700\u5F00\u6316\u7535\u7F06\u5373\u53EF\u4E3A\u56ED\u533A\u9053\u8DEF\u63D0\u4F9B\u591C\u95F4\u7167\u660E\u3002"}},{id:"off-solar",zone:"offgrid",kind:"product",worldPos:[15.8,3.05,14.5],skuId:"origAESK1",modelCode:"AE-SK1",img:"/assets/images/products/origAESK1.png",topic:"outdoor",hrefEn:"/products/origAESK1-en.html",hrefZh:"/products/origAESK1-zh.html",kicker:{en:"Off-grid generation \xB7 AE-SK1",zh:"\u79BB\u7F51\u5149\u4F0F\u91C7\u96C6 \xB7 AE-SK1"},title:{en:"Ground Solar Array & Kit",zh:"\u72EC\u7ACB\u5149\u4F0F\u53D1\u7535\u5355\u5143"},usage:{en:"Stand-alone tilted ground PV rack deployed where no utility poles reach, charging field storage by day.",zh:"\u90E8\u7F72\u4E8E\u65E0\u5E02\u7535\u8986\u76D6\u533A\u57DF\u7684\u5730\u9762\u72EC\u7ACB\u5149\u4F0F\u9635\u5217\uFF0C\u65E5\u95F4\u76F4\u63A5\u4E3A\u79BB\u7F51\u50A8\u80FD\u5355\u5143\u8865\u7535\u3002"}},{id:"off-seed",zone:"offgrid",kind:"product",worldPos:[18.9,2.2,16.85],skuId:"series_seed24",modelCode:"AE-E-SEED",img:"/assets/images/products/series_seed24.png",topic:"outdoor",hrefEn:"/products/series_seed24-en.html",hrefZh:"/products/series_seed24-zh.html",kicker:{en:"Deep-cycle storage \xB7 AE-E-SEED",zh:"\u6DF1\u5FAA\u73AF\u50A8\u80FD \xB7 AE-E-SEED"},title:{en:"25.6V Deep Cycle LiFePO\u2084 Battery",zh:"25.6V \u6DF1\u5FAA\u73AF\u78F7\u9178\u94C1\u9502\u7535\u6C60"},usage:{en:"2.56 kWh deep-cycle battery storage serving remote cabins, monitoring gear, and off-grid field stations.",zh:"2.56 kWh \u6DF1\u5FAA\u73AF\u78F7\u9178\u94C1\u9502\u7535\u6C60\uFF0C\u9002\u7528\u4E8E\u504F\u8FDC\u9A7B\u70B9\u3001\u76D1\u6D4B\u7AD9\u4E0E\u79BB\u7F51\u57FA\u7840\u8D1F\u8377\u50A8\u80FD\u3002"}},{id:"off-volt",zone:"offgrid",kind:"product",worldPos:[21.55,2.15,17.25],skuId:"origAEV1000",modelCode:"AE-E-VOLT-1000",img:"/assets/images/products/origAEV1000.png",topic:"outdoor",hrefEn:"/products/origAEV1000-en.html",hrefZh:"/products/origAEV1000-zh.html",kicker:{en:"Portable station \xB7 AE-E-VOLT-1000",zh:"\u4FBF\u643A\u7535\u6E90 \xB7 AE-E-VOLT-1000"},title:{en:"Volt 1000 Portable Power Station",zh:"Volt 1000 \u6237\u5916\u4FBF\u643A\u7535\u6E90"},usage:{en:"768 Wh / 1000 W LiFePO4 portable unit supplying modest mobile loads: field laptops, camp lighting, radios & portable coolers.",zh:"768 Wh / 1000 W \u78F7\u9178\u94C1\u9502\u4FBF\u643A\u7535\u6E90\uFF0C\u4E13\u4E3A\u79FB\u52A8\u5DE5\u4F5C\u7AD9\u7B14\u8BB0\u672C\u3001\u901A\u4FE1\u8BBE\u5907\u3001\u8425\u5730\u7167\u660E\u4E0E\u8F66\u8F7D\u5C0F\u51B7\u7BB1\u7B49\u8F7B\u91CF\u8D1F\u8F7D\u4F9B\u7535\u3002"}},{id:"off-light",zone:"offgrid",kind:"light",worldPos:[26.8,5.15,16.5],skuId:"jcLight27",modelCode:"AE-L-GUARD-06",img:"/assets/images/stage-light.png",topic:"lighting",hrefEn:"/products/jcLight27-en.html",hrefZh:"/products/jcLight27-zh.html",kicker:{en:"Off-grid street light \xB7 AE-L-GUARD-06",zh:"\u72EC\u7ACB\u8DEF\u706F \xB7 AE-L-GUARD-06"},title:{en:"Split Solar Street Light",zh:"\u5206\u4F53\u5F0F\u592A\u9633\u80FD\u8DEF\u706F"},usage:{en:"IP66 weather-sealed luminaire with dedicated mast PV panel and integrated LiFePO4 battery \u2014 zero trenching or grid connection.",zh:"IP66 \u6237\u5916\u9632\u62A4\u7B49\u7EA7\uFF0C\u81EA\u5E26\u72EC\u7ACB\u5149\u4F0F\u677F\u4E0E\u78F7\u9178\u94C1\u9502\u7535\u6C60\u5305\uFF0C\u65E0\u9700\u62C9\u7EBF\u6216\u7535\u7F51\u63A5\u5165\u5373\u53EF\u591C\u95F4\u7167\u660E\u3002"}}],nl={en:{zones:{overview:"Overview",home:"01 Home Energy",commercial:"02 Commercial",offgrid:"03 Off-Grid"},dayBtn:"Day",nightBtn:"Night",flowShow:"Show energy flow",flowHide:"Hide energy flow",pauseMotion:"Pause motion",resumeMotion:"Resume motion",pauseFollow:"Pause Risey",resumeFollow:"Resume Risey",productsBtn:"Products",discussBtn:"Discuss your project",legendPv:"PV DC",legendBat:"Battery DC",legendAc:"AC Supply",legendGrid:"Grid Tie",legendLight:"Autonomous Solar Light",legendNote:"Conceptual application diagram \xB7 Zones 01\u201302 grid-interfaced, Zone 03 isolated off-grid",viewSpecs:"View specifications",inquireSetup:"Discuss this setup",visitZone:"Explore this zone",dragHint:"Scroll / drag to explore \xB7 Focus scene: arrow keys \xB7 Home resets view",fallbackTitle:"3D preview unavailable in this browser context",fallbackDesc:"Use the section links below to browse Anthrise residential, commercial, and off-grid products."},zh:{zones:{overview:"\u56ED\u533A\u5168\u666F",home:"01 \u5BB6\u5EAD\u80FD\u6E90",commercial:"02 \u5DE5\u5546\u4E1A\u80FD\u6E90",offgrid:"03 \u504F\u8FDC\u79BB\u7F51"},dayBtn:"\u767D\u663C",nightBtn:"\u591C\u665A",flowShow:"\u67E5\u770B\u80FD\u6E90\u6D41\u5411",flowHide:"\u9690\u85CF\u80FD\u6E90\u6D41\u5411",pauseMotion:"\u6682\u505C\u52A8\u6548",resumeMotion:"\u6062\u590D\u52A8\u6548",pauseFollow:"\u6682\u505C Risey",resumeFollow:"\u6062\u590D Risey",productsBtn:"\u4EA7\u54C1\u7CFB\u5217",discussBtn:"\u54A8\u8BE2\u60A8\u7684\u9879\u76EE",legendPv:"\u5149\u4F0F\u76F4\u6D41",legendBat:"\u50A8\u80FD\u76F4\u6D41",legendAc:"\u4EA4\u6D41\u4F9B\u7535",legendGrid:"\u5E76\u7F51\u7EBF\u8DEF",legendLight:"\u72EC\u7ACB\u592A\u9633\u80FD\u706F\u5177",legendNote:"\u6982\u5FF5\u8FD0\u884C\u793A\u610F \xB7 \u533A\u57DF 01\u201302 \u542B\u5E02\u7535\u63A5\u5165\uFF0C\u533A\u57DF 03 \u5B8C\u5168\u79BB\u7F51\u8FD0\u884C",viewSpecs:"\u67E5\u770B\u4EA7\u54C1\u53C2\u6570",inquireSetup:"\u54A8\u8BE2\u8BE5\u65B9\u6848",visitZone:"\u8FDB\u5165\u8BE5\u533A\u57DF",dragHint:"\u4E0B\u6ED1 / \u62D6\u62FD\u63A2\u7D22 \xB7 \u573A\u666F\u805A\u7126\u540E\u7528\u65B9\u5411\u952E \xB7 Home \u590D\u4F4D\u89C6\u89D2",fallbackTitle:"\u5F53\u524D\u73AF\u5883\u6682\u4E0D\u652F\u6301\u5B9E\u65F6 3D \u6E32\u67D3",fallbackDesc:"\u60A8\u53EF\u901A\u8FC7\u4E0B\u65B9\u5165\u53E3\u6D4F\u89C8 Anthrise \u5BB6\u5EAD\u3001\u5DE5\u5546\u4E1A\u53CA\u504F\u8FDC\u79BB\u7F51\u4EA7\u54C1\u4E0E\u65B9\u6848\u3002"}};function Gu(i,e){let t="en",n=null,s=null,r=new I,o=[],a=()=>{n=null,o.forEach(x=>{x.pinBtn.setAttribute("aria-expanded","false"),x.popEl.hidden=!0,x.rootEl.classList.remove("is-open")})},l=x=>{let y=x.popEl;if(y.hidden)return;y.style.setProperty("--pop-shift-x","0px"),y.classList.remove("hotspot-popover-below");let p=i.getBoundingClientRect();if(!p.width)return;let m=12,_=x.rootEl.getBoundingClientRect().top,v=_-22-p.top-m,M=p.bottom-m-_-22,w=v<Math.min(280,y.scrollHeight)&&M>v;y.classList.toggle("hotspot-popover-below",w),y.style.setProperty("--pop-max-height",`${Math.max(80,Math.min(420,w?M:v))}px`);let T=y.getBoundingClientRect();if(!T.width)return;let g=0;T.left<p.left+m?g=p.left+m-T.left:T.right>p.right-m&&(g=p.right-m-T.right),Math.abs(g)>.5&&y.style.setProperty("--pop-shift-x",`${g.toFixed(1)}px`)},c=x=>{let y=n===x.def.id;a(),!y&&(n=x.def.id,x.pinBtn.setAttribute("aria-expanded","true"),x.popEl.hidden=!1,x.rootEl.classList.add("is-open"),l(x))};i.innerHTML="",ku.forEach(x=>{let y=document.createElement("div");y.className=`campus-hotspot campus-hotspot-${x.kind}`,y.dataset.hotspotId=x.id,y.dataset.zone=x.zone;let p=document.createElement("button");p.type="button",p.className=`campus-pin campus-pin-${x.kind}`,p.setAttribute("aria-expanded","false");let m=document.createElement("span");m.className="campus-pin-dot",m.setAttribute("aria-hidden","true");let _=document.createElement("span");_.className="campus-pin-label",_.textContent=x.title.en,p.appendChild(m),p.appendChild(_);let v=document.createElement("div");v.className="campus-popover",v.hidden=!0,v.id=`campus-popover-${x.id}`,v.setAttribute("role","region"),p.setAttribute("aria-controls",v.id);let M=document.createElement("div");if(M.className="campus-pop-head",x.img){let N=document.createElement("div");N.className="campus-pop-thumb";let A=document.createElement("img");A.src=x.img,A.alt=x.title.en,A.loading="eager",A.decoding="async",N.appendChild(A),M.appendChild(N)}let w=document.createElement("div");w.className="campus-pop-titles";let T=document.createElement("p");T.className="campus-pop-kicker";let g=document.createElement("p");g.className="campus-pop-title",w.append(T,g),M.appendChild(w);let E=document.createElement("p");E.className="campus-pop-usage";let L=document.createElement("div");L.className="campus-pop-actions";let R={def:x,worldVec:new I(x.worldPos[0],x.worldPos[1],x.worldPos[2]),rootEl:y,pinBtn:p,tagEl:_,popEl:v,kickerEl:T,titleEl:g,usageEl:E,lastPx:-9999,lastPy:-9999};if(x.targetZone){let N=document.createElement("button");N.type="button",N.className="campus-pop-cta",N.addEventListener("click",A=>{A.stopPropagation(),a(),e.onSelectZone(x.targetZone)}),L.appendChild(N),R.visitBtn=N}else{if(x.skuId){let A=document.createElement("button");A.type="button",A.className="campus-pop-cta",A.addEventListener("click",D=>{D.stopPropagation(),a(),e.onInspectProduct(x.skuId)}),L.appendChild(A),R.specsBtn=A}if(x.hrefEn){let A=document.createElement("a");A.className="campus-pop-link",A.href=x.hrefEn,A.target="_blank",A.rel="noopener noreferrer",L.appendChild(A),R.linkEl=A}let N=document.createElement("button");N.type="button",N.className=x.skuId?"campus-pop-link":"campus-pop-cta",N.addEventListener("click",A=>{A.stopPropagation(),a(),e.onInquireProduct(x)}),L.appendChild(N),R.inquireBtn=N}v.append(M,E,L),y.append(p,v),i.appendChild(y),p.addEventListener("click",N=>{if(N.stopPropagation(),x.targetZone){a(),e.onSelectZone(x.targetZone);return}c(R)}),o.push(R)});let h=x=>{t=x;let y=nl[t];o.forEach(p=>{let{def:m}=p;p.tagEl.textContent=m.title[t],p.pinBtn.setAttribute("aria-label",m.title[t]),p.popEl.setAttribute("aria-label",m.title[t]),p.kickerEl.textContent=m.kicker[t],p.titleEl.textContent=m.title[t],p.usageEl.textContent=m.usage[t],p.visitBtn&&(p.visitBtn.textContent=y.visitZone),p.specsBtn&&(p.specsBtn.textContent=y.viewSpecs),p.linkEl&&m.hrefEn&&m.hrefZh&&(p.linkEl.href=t==="zh"?m.hrefZh:m.hrefEn,p.linkEl.textContent=t==="zh"?"\u4EA7\u54C1\u9875 \u2197":"Page \u2197"),p.inquireBtn&&(p.inquireBtn.textContent=y.inquireSetup)})};h("en");let f=x=>{let y=x.target;(!(y instanceof Element)||!y.closest(".campus-hotspot"))&&a()};document.addEventListener("click",f);let u=x=>{if(x.key!=="Escape"||!n)return;let y=o.find(p=>p.def.id===n);a(),y?.pinBtn.focus({preventScroll:!0}),x.preventDefault(),x.stopPropagation()};return i.addEventListener("keydown",u),{updateProjection:(x,y,p,m)=>{if(s!==m&&(a(),s=m),!(y<10||p<10))for(let _=0;_<o.length;_++){let v=o[_];if(!(v.def.zone===m)){v.rootEl.style.display="none";continue}if(r.copy(v.worldVec).project(x),r.z>1||r.z<-1||r.x<-1.04||r.x>1.04||r.y<-1.04||r.y>1.04){v.rootEl.style.display="none";continue}let w=(r.x*.5+.5)*y,T=(-r.y*.5+.5)*p;v.rootEl.style.display="",(Math.abs(w-v.lastPx)>=.35||Math.abs(T-v.lastPy)>=.35)&&(v.lastPx=w,v.lastPy=T,v.rootEl.style.left=`${w.toFixed(1)}px`,v.rootEl.style.top=`${T.toFixed(1)}px`),n===v.def.id&&l(v)}},setLanguage:h,closeAll:a,getOpenId:()=>n,dispose:()=>{document.removeEventListener("click",f),i.removeEventListener("keydown",u),i.innerHTML=""}}}function Yr(i,e){let t=document.createElement("canvas");t.width=i,t.height=e;let n=t.getContext("2d");return[t,n]}function Zr(i,e,t=1,n=1){return i.colorSpace=It,i.wrapS=Pi,i.wrapT=Pi,i.repeat.set(t,n),i.anisotropy=e,i.needsUpdate=!0,i}function cx(i){let[e,t]=Yr(512,512);t.fillStyle="#0e1b2d",t.fillRect(0,0,512,512);let n=t.createLinearGradient(0,0,512,512);n.addColorStop(0,"#13243b"),n.addColorStop(.5,"#0d192b"),n.addColorStop(1,"#152a44"),t.fillStyle=n,t.fillRect(10,10,492,492),t.strokeStyle="#cbd5dc",t.lineWidth=10,t.strokeRect(5,5,502,502);let s=6,r=10,o=12,a=(512-o*2)/s,l=(512-o*2)/r;for(let h=0;h<r;h++)for(let f=0;f<s;f++){let u=o+f*a,d=o+h*l;t.fillStyle=(h+f)%2===0?"#112238":"#142740",t.fillRect(u+2,d+2,a-4,l-4),t.fillStyle="rgba(205, 222, 236, 0.22)",t.fillRect(u+a*.25,d+2,1.2,l-4),t.fillRect(u+a*.5,d+2,1.2,l-4),t.fillRect(u+a*.75,d+2,1.2,l-4)}t.fillStyle="rgba(215, 226, 234, 0.42)",t.fillRect(10,254,492,4);let c=new vn(e);return Zr(c,i,1,1)}function hx(i){let[e,t]=Yr(256,256);t.fillStyle="#f2eee6",t.fillRect(0,0,256,256);for(let s=0;s<1800;s++){let r=s*73%256,o=s*137%256;t.fillStyle=s%3===0?"rgba(198, 190, 176, 0.18)":"rgba(255, 255, 255, 0.22)",t.fillRect(r,o,2,2)}t.strokeStyle="rgba(176, 168, 154, 0.24)",t.lineWidth=1;for(let s=64;s<256;s+=64)t.beginPath(),t.moveTo(0,s),t.lineTo(256,s),t.stroke();let n=new vn(e);return Zr(n,i,2,2)}function ux(i){let[e,t]=Yr(256,256);t.fillStyle="#6c777a",t.fillRect(0,0,256,256);for(let s=0;s<2600;s++){let r=s*97%256,o=s*53%256;t.fillStyle=s%2===0?"rgba(255, 255, 255, 0.055)":"rgba(18, 28, 30, 0.08)",t.fillRect(r,o,2,2)}let n=new vn(e);return Zr(n,i,6,1)}function dx(i){let[e,t]=Yr(512,512);t.fillStyle="#c5d3c6",t.fillRect(0,0,512,512);for(let s=0;s<4200;s++){let r=(Math.sin(s*127.1+17)*43758.5453%1+1)%1*512,o=(Math.sin(s*311.7+83)*29743.2347%1+1)%1*512,a=s%3;t.fillStyle=a===0?"rgba(164, 188, 166, 0.24)":a===1?"rgba(218, 226, 210, 0.22)":"rgba(128, 158, 134, 0.16)",t.fillRect(r,o,3,3)}let n=new vn(e);return Zr(n,i,16,16)}function fx(i){let[e,t]=Yr(256,256);t.fillStyle="#b98f63",t.fillRect(0,0,256,256);for(let s=0;s<256;s+=28)t.fillStyle=s%56===0?"rgba(155, 112, 70, 0.25)":"rgba(210, 174, 132, 0.15)",t.fillRect(0,s,256,25),t.fillStyle="rgba(72, 48, 28, 0.32)",t.fillRect(0,s+25,256,3);let n=new vn(e);return Zr(n,i,2,2)}function Vu(i){let e=Math.min(i.capabilities.getMaxAnisotropy(),4),t=cx(e),n=hx(e),s=ux(e),r=dx(e),o=fx(e),a=["/assets/images/stage-battery.png","/assets/images/stage-inverter.png","/assets/images/products/series_horizon.png","/assets/images/products/hybrid50.png","/assets/images/products/series_seed24.png","/assets/images/products/origAEV1000.png","/assets/images/stage-solar.png","/assets/images/stage-light.png","/assets/images/products/jcLight28.png","/assets/images/products/jcLight09.png"],l=new ii,c=new Map;return a.forEach(h=>{let f=l.load(h,u=>{u.colorSpace=It,u.anisotropy=e,u.needsUpdate=!0});f.colorSpace=It,c.set(h,f)}),{solarPanel:t,limestoneWall:n,roadAsphalt:s,grassGround:r,timberDeck:o,productTextures:c,dispose:()=>{t.dispose(),n.dispose(),s.dispose(),r.dispose(),o.dispose(),c.forEach(h=>h.dispose()),c.clear()}}}function Wu(){let i=new Ge(8369373),e=new Ge(14017769),t=new Ge(265768),n=new Ge(1848406),s={zenith:{value:i.clone()},horizon:{value:e.clone()}},r=new Fi(160,16,8),o=new En({uniforms:s,vertexShader:`
      varying vec3 skyDirection;
      void main() {
        skyDirection = normalize(position);
        // Rotation only: background follows the actual view without per-frame transforms.
        gl_Position = projectionMatrix * vec4(mat3(viewMatrix) * position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 zenith;
      uniform vec3 horizon;
      varying vec3 skyDirection;
      void main() {
        float elevation = smoothstep(-0.06, 0.7, normalize(skyDirection).y);
        gl_FragColor = vec4(mix(horizon, zenith, elevation), 1.0);
        #include <colorspace_fragment>
      }
    `,side:Wt,depthWrite:!1,depthTest:!1,fog:!1,toneMapped:!1}),a=new se(r,o);return a.name="CampusAtmosphericSky",a.frustumCulled=!1,a.renderOrder=-100,{mesh:a,setNightFactor(l){s.zenith.value.copy(i).lerp(t,l),s.horizon.value.copy(e).lerp(n,l)},dispose(){r.dispose(),o.dispose()}}}var Xu=new Ge(14017769),px=new Ge(1848406),qu=new Ge(16773853),mx=new Ge(9152992),Yu=new Ge(14150655),gx=new Ge(4746142),Zu=new Ge(9017211),xx=new Ge(1516348);function Ju(i){let{heroSection:e,stickyViewport:t,canvasHost:n,hotspotsHost:s,fallbackView:r}=i,o=!1,a=!1,l=!1,c=!1,h=!1,f=!1,u="day",d="overview",x="en",y=window.matchMedia("(prefers-reduced-motion: reduce)"),p=y.matches,m=0,_=0,v=null,M=null,w=0,T=null,g=null,E=z=>{console.warn("[Anthrise Campus 3D]",z),e.dataset.webglState="fallback",r.hidden=!1},L=window.setTimeout(()=>{!a&&!o&&E("WebGL initialization timed out")},3e3),R;try{R=document.createElement("canvas"),R.className="campus-webgl-canvas",R.setAttribute("aria-label","Interactive 3D Clean Energy Campus"),n.appendChild(R),v=new qa({canvas:R,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch(z){return window.clearTimeout(L),E(String(z)),{bridge:{setTime:()=>{},setFlowVisible:()=>{},setMotionPaused:()=>{},setZone:()=>{},setLanguage:()=>{},setSuspended:()=>{},closeHotspots:()=>{},getState:()=>({ready:!1,time:u,flowVisible:f,activeZone:d})},dispose:()=>{}}}let N=v.getContext(),A=N.getExtension("WEBGL_debug_renderer_info"),D=A?String(N.getParameter(A.UNMASKED_RENDERER_WEBGL)):"",C=/SwiftShader|llvmpipe|softpipe/i.test(D),B=window.innerWidth<=768;v.outputColorSpace=It,v.toneMapping=Lr,v.toneMappingExposure=.98,v.setPixelRatio(C?1:Math.min(window.devicePixelRatio||1,B?1.5:2)),v.shadowMap.enabled=!0,v.shadowMap.type=na;let H=new Li,k=Xu.clone(),re=new sr(k.getHex(),.009);H.background=k,H.fog=re;let X=Wu();H.add(X.mesh);let Z=new Is(v),le=new ja;M=Z.fromScene(le,.04),H.environment=M.texture,H.environmentIntensity=.36,le.dispose(),Z.dispose();let Ie=new Ar(Yu.getHex(),Zu.getHex(),.76);H.add(Ie);let Pe=new bs(qu.getHex(),2.35);Pe.position.set(28,36,22),Pe.castShadow=!0,Pe.shadow.mapSize.set(C||B?1024:2048,C||B?1024:2048),Pe.shadow.camera.near=6,Pe.shadow.camera.far=96,Pe.shadow.camera.left=-36,Pe.shadow.camera.right=36,Pe.shadow.camera.top=34,Pe.shadow.camera.bottom=-34,Pe.shadow.bias=-4e-4,Pe.shadow.normalBias=.025,H.add(Pe);let J=new bs(13362158,.28);J.position.set(-28,16,-24),H.add(J);let ye=new Qt(40,16/9,.4,220),be=!0,Ve=()=>{o||(be=!0)},he=Vu(v),ee=Ou(he,Ve);H.add(ee.root);let Le=Bu(ee.root,he,Ve),_e=zu();H.add(_e.group);let Fe=[];H.traverse(z=>{(z instanceof $t||z instanceof Bi)&&Fe.push(z)});let Je=C?4:B?6:Fe.length;e.dataset.lightingQuality=Je<Fe.length?"balanced":"full";let ne=()=>{Uu(Fe,d,Je)},de=Hu(ye),me=Math.max(1,n.clientWidth),xe=Math.max(1,n.clientHeight),ge=Gu(s,{onSelectZone:z=>O(z,!1),onInspectProduct:z=>i.onInspectProduct?.(z),onInquireProduct:z=>i.onInquireProduct?.(z)}),De=()=>{v&&(me=Math.max(1,n.clientWidth),xe=Math.max(1,n.clientHeight),v.setSize(me,xe,!1),ye.aspect=me/xe,ye.updateProjectionMatrix(),be=!0)};De();let Be=null,it=0,rt=()=>{let z=e.getBoundingClientRect(),ce=Math.max(1,t.clientHeight||window.innerHeight-70),fe=z.height-ce;if(fe<=40)return Be?qr[Be].progress:it;let He=vt.clamp(-z.top/fe,0,1);return it=He,He},ot=z=>{k.copy(Xu).lerp(px,z),X.setNightFactor(z),re.color.copy(k),re.density=vt.lerp(.009,.008,z),H.environmentIntensity=vt.lerp(.36,.12,z),v.toneMappingExposure=vt.lerp(.98,.96,z),Pe.color.copy(qu).lerp(mx,z),Pe.intensity=vt.lerp(2.35,.46,z),Ie.color.copy(Yu).lerp(gx,z),Ie.groundColor.copy(Zu).lerp(xx,z),Ie.intensity=vt.lerp(.76,.34,z),J.intensity=vt.lerp(.28,.16,z);let ce=u==="night"?z:0;ee.setNightFactor(ce),Le.setNightFactor(ce),ne(),_e.setState(_,p,h)},O=(z,ce=!1)=>{let fe=qr[z];if(!fe)return;let He=e.getBoundingClientRect(),V=Math.max(1,t.clientHeight||window.innerHeight-70),G=He.height-V;if(de.resetOrbit(),ge.closeAll(),G>40){let oe=window.scrollY+He.top-70,Ae=Math.max(0,oe+fe.progress*G);ce||p?(window.scrollTo({top:Ae,behavior:"auto"}),de.snapToProgress(fe.progress,me/xe)):window.scrollTo({top:Ae,behavior:"smooth"})}else Be=z,it=fe.progress,ce||p?de.snapToProgress(fe.progress,me/xe):de.setScrollProgress(fe.progress);d!==z&&(d=z,i.onZoneChange?.(z)),ne(),be=!0},yt=!1,et=0,gt=0,ve=0,ut=null,Xe=n.getAttribute("tabindex");n.tabIndex=0,n.setAttribute("aria-keyshortcuts","ArrowLeft ArrowRight ArrowUp ArrowDown Home Escape");let Oe=z=>{z.button!==0&&z.pointerType==="mouse"||ut!==null||z.target?.closest(".campus-hotspot, .campus-hud, button, a")||(yt=!0,ut=z.pointerId,n.setPointerCapture(z.pointerId),n.focus({preventScroll:!0}),ve=0,et=z.clientX,gt=z.clientY,n.classList.add("is-dragging"))},P=z=>{if(!yt||z.pointerId!==ut)return;let ce=z.clientX-et,fe=z.clientY-gt;et=z.clientX,gt=z.clientY,ve+=Math.hypot(ce,fe),de.setOrbitOffset(-ce*.0042,-fe*.0024),be=!0},S=z=>{!yt||z.pointerId!==ut||(yt=!1,ut=null,n.hasPointerCapture(z.pointerId)&&n.releasePointerCapture(z.pointerId),n.classList.remove("is-dragging"),ve>6&&(n.dataset.recentDrag="1",window.setTimeout(()=>{delete n.dataset.recentDrag},90)))},W=z=>{if(z.target!==n||z.altKey||z.ctrlKey||z.metaKey)return;let ce={ArrowLeft:[-.045,0],ArrowRight:[.045,0],ArrowUp:[0,-.025],ArrowDown:[0,.025]};if(ce[z.key])de.setOrbitOffset(...ce[z.key]);else if(z.key==="Home")de.resetOrbit();else if(z.key==="Escape")ge.closeAll();else return;z.preventDefault(),be=!0};n.addEventListener("pointerdown",Oe),n.addEventListener("pointercancel",S),n.addEventListener("lostpointercapture",S),n.addEventListener("keydown",W),window.addEventListener("pointermove",P,{passive:!0}),window.addEventListener("pointerup",S,{passive:!0});let pe=()=>{Be=null;let z=rt();de.setScrollProgress(z);let ce=de.getZoneForProgress(z);ce!==d&&(d=ce,i.onZoneChange?.(ce),ne()),be=!0};window.addEventListener("scroll",pe,{passive:!0});let ie=z=>{z.preventDefault(),c=!0,E("WebGL context lost")},Me=()=>{c=!1,be=!0,e.dataset.webglState="active",r.hidden=!0};R.addEventListener("webglcontextlost",ie),R.addEventListener("webglcontextrestored",Me),"ResizeObserver"in window&&(T=new ResizeObserver(()=>De()),T.observe(n)),"IntersectionObserver"in window&&(g=new IntersectionObserver(z=>{z.forEach(ce=>{l=!ce.isIntersecting})},{threshold:.02}),g.observe(e));let Ee=()=>{document.visibilityState==="visible"&&(te=performance.now())};document.addEventListener("visibilitychange",Ee);let j=z=>{p=z.matches,_e.setState(_,p,h),be=!0};y.addEventListener("change",j);let te=performance.now(),Se=0,U=0,K=z=>{if(o)return;if(w=window.requestAnimationFrame(K),l||c||document.visibilityState==="hidden"){te=z;return}if(C&&z-Se<45)return;let ce=Math.max(0,Math.min((z-te)/1e3,.08));te=z;let fe=!1;if(Math.abs(m-_)>.002){if(p||h||C)m=_;else{let oe=1-Math.exp(-3.6*ce);m=Math.abs(_-m)<.008?_:vt.lerp(m,_,oe)}ot(m),fe=!0}let He=rt();de.setScrollProgress(He);let V=de.update(ce,me/Math.max(1,xe),p),G=f&&!p&&!h;G?_e.update(ce):(be||fe)&&f&&_e.update(0),(be||fe||V||G||U<2)&&(Se=z,be=!1,v.render(H,ye),ge.updateProjection(ye,me,xe,d),U++,!a&&U>=2&&(a=!0,window.clearTimeout(L),e.dataset.webglState="active",r.hidden=!0))};return ot(0),de.snapToProgress(rt(),me/Math.max(1,xe)),v.render(H,ye),ge.updateProjection(ye,me,xe,d),a=!0,window.clearTimeout(L),e.dataset.webglState="active",r.hidden=!0,w=window.requestAnimationFrame(K),{bridge:{setTime:(z,ce=!1)=>{u=z,_=z==="night"?1:0,_e.setState(_,p,h),z==="day"&&(ee.setNightFactor(0),Le.setNightFactor(0)),(ce||p||h||C)&&(m=_,ot(m)),be=!0},setFlowVisible:z=>{f=z,_e.setVisible(z),be=!0},setMotionPaused:z=>{h=z,_e.setState(_,p,h),be=!0},setZone:O,setLanguage:z=>{x=z,ge.setLanguage(x),be=!0},setSuspended:z=>{c=z,z||(be=!0)},closeHotspots:()=>{ge.closeAll()},getState:()=>({ready:a,time:u,flowVisible:f,activeZone:d})},dispose:()=>{o=!0,window.clearTimeout(L),w&&window.cancelAnimationFrame(w),n.removeEventListener("pointerdown",Oe),n.removeEventListener("pointercancel",S),n.removeEventListener("lostpointercapture",S),n.removeEventListener("keydown",W),ut!==null&&n.hasPointerCapture(ut)&&n.releasePointerCapture(ut),n.removeAttribute("aria-keyshortcuts"),Xe===null?n.removeAttribute("tabindex"):n.setAttribute("tabindex",Xe),window.removeEventListener("pointermove",P),window.removeEventListener("pointerup",S),window.removeEventListener("scroll",pe),document.removeEventListener("visibilitychange",Ee),y.removeEventListener("change",j),R.removeEventListener("webglcontextlost",ie),R.removeEventListener("webglcontextrestored",Me),T?.disconnect(),g?.disconnect(),ge.dispose(),_e.dispose(),Le.dispose(),ee.dispose(),X.dispose(),he.dispose(),M?.dispose(),v?.dispose(),R.remove()}}}function $u(){let i=document.getElementById("hero-section"),e=document.getElementById("hero-scene-viewport"),t=document.getElementById("campus-canvas-host"),n=document.getElementById("campus-hotspots"),s=document.getElementById("campus-fallback-view");if(!i||!e||!t||!n||!s)return;let r=document.getElementById("campus-zone-num"),o=document.getElementById("campus-zone-title"),a=document.getElementById("campus-zone-subtitle"),l=document.getElementById("campus-zone-note"),c=document.getElementById("campus-drag-hint"),h=Array.from(document.querySelectorAll("[data-campus-zone]")),f="overview",u=i.dataset.sceneTime==="night"?"night":"day",d=document.documentElement.lang.startsWith("zh")?"zh":"en",x=()=>{let v=qr[f],M=nl[d];r&&(r.textContent=v.num),o&&(o.textContent=v.title[d]),a&&(a.textContent=v.subtitle[d]),l&&(l.textContent=u==="night"?v.noteNight[d]:v.noteDay[d]),c&&(c.textContent=M.dragHint),h.forEach(w=>{let T=w.dataset.campusZone;if(!T)return;let g=T===f;w.classList.toggle("is-active",g),w.setAttribute("aria-pressed",String(g));let E=w.querySelector(".campus-zone-label");E&&(E.textContent=M.zones[T])}),i.dataset.activeZone=f},m=Ju({heroSection:i,stickyViewport:e,canvasHost:t,hotspotsHost:n,fallbackView:s,onZoneChange:v=>{f=v,x()},onInspectProduct:v=>{if(typeof window.__anthriseOpenStageProduct=="function"){window.__anthriseOpenStageProduct(v);return}document.getElementById("products")?.scrollIntoView({behavior:"smooth",block:"start"})},onInquireProduct:v=>{let M=v.title[d],w=v.modelCode||"",T=v.topic||"home";if(typeof window.__anthrisePrefillInquiry=="function"){window.__anthrisePrefillInquiry(T,w,M);return}let g=document.getElementById("project-inquiry"),E=document.getElementById("inq-topic"),L=document.getElementById("inq-message");if(E instanceof HTMLSelectElement&&(E.value=T),L instanceof HTMLTextAreaElement){let R=d==="zh"?`[\u56ED\u533A\u573A\u666F\u54A8\u8BE2] ${M}${w?`\uFF08${w}\uFF09`:""}
`:`[Campus Inquiry] ${M}${w?` (${w})`:""}
`;L.value.includes(M)||(L.value=L.value.trim()?`${R}${L.value}`:R)}g?.scrollIntoView({behavior:"smooth",block:"start"})}}),_={...m.bridge,setTime:(v,M)=>{u=v,m.bridge.setTime(v,M),x()},setZone:(v,M)=>{f=v,m.bridge.setZone(v,M),x()},setLanguage:v=>{d=v,m.bridge.setLanguage(v),x()}};window.ANTHRISE_CAMPUS=_,h.forEach(v=>{v.addEventListener("click",()=>{let M=v.dataset.campusZone;M&&_.setZone(M,!1)})}),_.setTime(u,!0),_.setLanguage(d),x(),window.addEventListener("beforeunload",()=>{m.dispose()})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",$u,{once:!0}):$u();
/*! Bundled license information:

three/build/three.core.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
