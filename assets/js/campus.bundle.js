var ea="187";var oh=0,Fl=1,ah=2;var Pr=1,ta=2,ys=3,gi=0,Yt=1,cn=2,Pi=0,Ms=1,Ol=2,Bl=3,Hl=4,lh=5;var Ii=100,ch=101,hh=102,uh=103,dh=104,fh=200,ph=201,mh=202,gh=203,zl=204,kl=205,_h=206,xh=207,vh=208,yh=209,Mh=210,Sh=211,Eh=212,bh=213,Th=214,Eo=0,bo=1,To=2,ss=3,wo=4,Ao=5,Ro=6,Co=7,na=0,wh=1,Ah=2,zn=0,Gl=1,Vl=2,Wl=3,Ir=4,Xl=5,ql=6,Yl=7;var Zl=300,Li=301,Ss=302,ia=303,sa=304,wi=1e3,Dn=1001,Po=1002,Wt=1003,Rh=1004;var Lr=1005;var jt=1006,ra=1007;var ti=1008;var nn=1009,Jl=1010,$l=1011,Es=1012,oa=1013,wn=1014,xn=1015,An=1016,aa=1017,la=1018,Di=1020,Kl=35902,Ql=35899,jl=1021,ec=1022,Rn=1023,$n=1026,ni=1027,ca=1028,ha=1029,_i=1030,ua=1031;var da=1033,Dr=33776,Nr=33777,Ur=33778,Fr=33779,fa=35840,pa=35841,ma=35842,ga=35843,_a=36196,xa=37492,va=37496,ya=37488,Ma=37489,Or=37490,Sa=37491,Ea=37808,ba=37809,Ta=37810,wa=37811,Aa=37812,Ra=37813,Ca=37814,Pa=37815,Ia=37816,La=37817,Da=37818,Na=37819,Ua=37820,Fa=37821,Oa=36492,Ba=36494,Ha=36495,za=36283,ka=36284,Br=36285,Ga=36286;var Js=2300,Io=2301,yo=2302,Tl=2303,wl=2400,Al=2401,Rl=2402;var Ch=3200;var Hr=0,Ph=1,ii="",Pt="srgb",$s="srgb-linear",Ks="linear",yt="srgb";var Mo=7680;var Ih=519,Lh=512,Dh=513,Nh=514,tc=515,Uh=516,Fh=517,nc=518,ic=519,Oh=35044,sc=35048;var rc="300 es",dn=2e3,rs=2001;function Xu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bh(){let i=os("canvas");return i.style.display="block",i}var Ac={},as=null;function oc(...i){let e="THREE."+i.shift();as?as("log",e,...i):console.log(e,...i)}function Hh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function $e(...i){i=Hh(i);let e="THREE."+i.shift();if(as)as("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Qe(...i){i=Hh(i);let e="THREE."+i.shift();if(as)as("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ti(...i){let e=i.join(" ");e in Ac||(Ac[e]=!0,$e(...i))}function zh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var kh={[Eo]:Eo,[To]:Ro,[wo]:wo,[ss]:Ao,[bo]:bo,[Ro]:To,[Co]:Co,[Ao]:ss},Un=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rc=1234567,Xs=Math.PI/180,ls=180/Math.PI;function Ni(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function ct(i,e,t){return Math.max(e,Math.min(t,i))}function ac(i,e){return(i%e+e)%e}function Yu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Zu(i,e,t){return i!==e?(t-i)/(e-i):0}function qs(i,e,t){return(1-t)*i+t*e}function Ju(i,e,t,n){return qs(i,e,1-Math.exp(-t*n))}function $u(i,e=1){return e-Math.abs(ac(i,e*2)-e)}function Ku(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Qu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ju(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ed(i,e){return i+Math.random()*(e-i)}function td(i){return i*(.5-Math.random())}function nd(i){i!==void 0&&(Rc=i);let e=Rc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function id(i){return i*Xs}function sd(i){return i*ls}function rd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function od(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function lc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ad(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),d=o((e-n)/2),u=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*f,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*f,a*l);break;case"ZXZ":i.set(c*f,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*u,a*l);break;case"YXY":i.set(c*u,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*u,a*h,a*l);break;default:$e("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function cc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Gh(i,e){if(e.constructor===Float32Array)return i;let t=cc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Vh(i,e){if(e.constructor===Float32Array)return i;let t=cc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var _t={DEG2RAD:Xs,RAD2DEG:ls,generateUUID:Ni,clamp:ct,euclideanModulo:ac,mapLinear:Yu,inverseLerp:Zu,lerp:qs,damp:Ju,pingpong:$u,smoothstep:Ku,smootherstep:Qu,randInt:ju,randFloat:ed,randFloatSpread:td,seededRandom:nd,degToRad:id,radToDeg:sd,isPowerOfTwo:rd,ceilPowerOfTwo:od,floorPowerOfTwo:lc,setQuaternionFromProperEuler:ad,normalize:Vh,denormalize:Gh},Me=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},fn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],d=r[o+0],u=r[o+1],g=r[o+2],y=r[o+3];if(f!==y||c!==d||l!==u||h!==g){let m=c*d+l*u+h*g+f*y;m<0&&(d=-d,u=-u,g=-g,y=-y,m=-m);let p=1-a;if(m<.9995){let v=Math.acos(m),E=Math.sin(v);p=Math.sin(p*v)/E,a=Math.sin(a*v)/E,c=c*p+d*a,l=l*p+u*a,h=h*p+g*a,f=f*p+y*a}else{c=c*p+d*a,l=l*p+u*a,h=h*p+g*a,f=f*p+y*a;let v=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=v,l*=v,h*=v,f*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[o],d=r[o+1],u=r[o+2],g=r[o+3];return e[t]=a*g+h*f+c*u-l*d,e[t+1]=c*g+h*d+l*f-a*u,e[t+2]=l*g+h*u+a*d-c*f,e[t+3]=h*g-a*f-c*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),f=a(r/2),d=c(n/2),u=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*f+l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f-d*u*g;break;case"YXZ":this._x=d*h*f+l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f+d*u*g;break;case"ZXY":this._x=d*h*f-l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f-d*u*g;break;case"ZYX":this._x=d*h*f-l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f+d*u*g;break;case"YZX":this._x=d*h*f+l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f-d*u*g;break;case"XZY":this._x=d*h*f-l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f+d*u*g;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(o-s)*u}else if(n>a&&n>f){let u=2*Math.sqrt(1+n-a-f);this._w=(h-c)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+l)/u}else if(a>f){let u=2*Math.sqrt(1+a-n-f);this._w=(r-l)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+f-n-a);this._w=(o-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+c*l+o*f-a*h,this.y=n+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nl.copy(this).projectOnVector(e),this.sub(nl)}reflect(e){return this.sub(nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nl=new L,Cc=new fn,st=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],u=n[5],g=n[8],y=s[0],m=s[3],p=s[6],v=s[1],E=s[4],x=s[7],R=s[2],A=s[5],_=s[8];return r[0]=o*y+a*v+c*R,r[3]=o*m+a*E+c*A,r[6]=o*p+a*x+c*_,r[1]=l*y+h*v+f*R,r[4]=l*m+h*E+f*A,r[7]=l*p+h*x+f*_,r[2]=d*y+u*v+g*R,r[5]=d*m+u*E+g*A,r[8]=d*p+u*x+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,d=a*c-h*r,u=l*r-o*c,g=t*f+n*d+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=f*y,e[1]=(s*l-h*n)*y,e[2]=(a*n-s*o)*y,e[3]=d*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-a*t)*y,e[6]=u*y,e[7]=(n*c-l*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Ti("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(il.makeScale(e,t)),this}rotate(e){return Ti("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(il.makeRotation(-e)),this}translate(e,t){return Ti("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(il.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},il=new st,Pc=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ic=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ld(){let i={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===yt&&(s.r=Jn(s.r),s.g=Jn(s.g),s.b=Jn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?Ks:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[$s]:{primaries:e,whitePoint:n,transfer:Ks,toXYZ:Pc,fromXYZ:Ic,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:Pc,fromXYZ:Ic,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),i}var pt=ld();function Jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Gi,Lo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gi===void 0&&(Gi=os("canvas")),Gi.width=e.width,Gi.height=e.height;let s=Gi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Gi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=os("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Jn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Jn(t[n]/255)*255):t[n]=Jn(t[n]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cd=0,cs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=Ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(sl(s[o].image)):r.push(sl(s[o]))}else r=sl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function sl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}var hd=0,rl=new L,Kt=class i extends Un{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Dn,s=Dn,r=jt,o=ti,a=Rn,c=nn,l=i.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=Ni(),this.name="",this.source=new cs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(rl).x}get height(){return this.source.getSize(rl).y}get depth(){return this.source.getSize(rl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wi:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case Po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wi:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case Po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Zl;Kt.DEFAULT_ANISOTROPY=1;var It=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],f=c[8],d=c[1],u=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,x=(u+1)/2,R=(p+1)/2,A=(h+d)/4,_=(f+y)/4,M=(g+m)/4;return E>x&&E>R?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=A/n,r=_/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=A/s,r=M/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=_/r,s=M/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-y)/v,this.z=(d-h)/v,this.w=Math.acos((l+u+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Do=class extends Un{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Kt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new cs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends Do{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Qs=class extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var No=class extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var bt=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,c,l,h,f,d,u,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,f,d,u,g,y,m)}set(e,t,n,s,r,o,a,c,l,h,f,d,u,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=d,p[3]=u,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Vi.setFromMatrixColumn(e,0).length(),r=1/Vi.setFromMatrixColumn(e,1).length(),o=1/Vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=o*h,u=o*f,g=a*h,y=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=u+g*l,t[5]=d-y*l,t[9]=-a*c,t[2]=y-d*l,t[6]=g+u*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,u=c*f,g=l*h,y=l*f;t[0]=d+y*a,t[4]=g*a-u,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=u*a-g,t[6]=y+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,u=c*f,g=l*h,y=l*f;t[0]=d-y*a,t[4]=-o*f,t[8]=g+u*a,t[1]=u+g*a,t[5]=o*h,t[9]=y-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,u=o*f,g=a*h,y=a*f;t[0]=c*h,t[4]=g*l-u,t[8]=d*l+y,t[1]=c*f,t[5]=y*l+d,t[9]=u*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,u=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=y-d*f,t[8]=g*f+u,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=u*f+g,t[10]=d-y*f}else if(e.order==="XZY"){let d=o*c,u=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=d*f+y,t[5]=o*h,t[9]=u*f-g,t[2]=g*f-u,t[6]=a*h,t[10]=y*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ud,e,dd)}lookAt(e,t,n){let s=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),si.crossVectors(n,sn),si.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),si.crossVectors(n,sn)),si.normalize(),$r.crossVectors(sn,si),s[0]=si.x,s[4]=$r.x,s[8]=sn.x,s[1]=si.y,s[5]=$r.y,s[9]=sn.y,s[2]=si.z,s[6]=$r.z,s[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],u=n[13],g=n[2],y=n[6],m=n[10],p=n[14],v=n[3],E=n[7],x=n[11],R=n[15],A=s[0],_=s[4],M=s[8],N=s[12],w=s[1],T=s[5],D=s[9],F=s[13],I=s[2],H=s[6],z=s[10],V=s[14],ce=s[3],q=s[7],j=s[11],ae=s[15];return r[0]=o*A+a*w+c*I+l*ce,r[4]=o*_+a*T+c*H+l*q,r[8]=o*M+a*D+c*z+l*j,r[12]=o*N+a*F+c*V+l*ae,r[1]=h*A+f*w+d*I+u*ce,r[5]=h*_+f*T+d*H+u*q,r[9]=h*M+f*D+d*z+u*j,r[13]=h*N+f*F+d*V+u*ae,r[2]=g*A+y*w+m*I+p*ce,r[6]=g*_+y*T+m*H+p*q,r[10]=g*M+y*D+m*z+p*j,r[14]=g*N+y*F+m*V+p*ae,r[3]=v*A+E*w+x*I+R*ce,r[7]=v*_+E*T+x*H+R*q,r[11]=v*M+E*D+x*z+R*j,r[15]=v*N+E*F+x*V+R*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],d=e[10],u=e[14],g=e[3],y=e[7],m=e[11],p=e[15],v=c*u-l*d,E=a*u-l*f,x=a*d-c*f,R=o*u-l*h,A=o*d-c*h,_=o*f-a*h;return t*(y*v-m*E+p*x)-n*(g*v-m*R+p*A)+s*(g*E-y*R+p*_)-r*(g*x-y*A+m*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],d=e[10],u=e[11],g=e[12],y=e[13],m=e[14],p=e[15],v=t*a-n*o,E=t*c-s*o,x=t*l-r*o,R=n*c-s*a,A=n*l-r*a,_=s*l-r*c,M=h*y-f*g,N=h*m-d*g,w=h*p-u*g,T=f*m-d*y,D=f*p-u*y,F=d*p-u*m,I=v*F-E*D+x*T+R*w-A*N+_*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/I;return e[0]=(a*F-c*D+l*T)*H,e[1]=(s*D-n*F-r*T)*H,e[2]=(y*_-m*A+p*R)*H,e[3]=(d*A-f*_-u*R)*H,e[4]=(c*w-o*F-l*N)*H,e[5]=(t*F-s*w+r*N)*H,e[6]=(m*x-g*_-p*E)*H,e[7]=(h*_-d*x+u*E)*H,e[8]=(o*D-a*w+l*M)*H,e[9]=(n*w-t*D-r*M)*H,e[10]=(g*A-y*x+p*v)*H,e[11]=(f*x-h*A-u*v)*H,e[12]=(a*N-o*T-c*M)*H,e[13]=(t*T-n*N+s*M)*H,e[14]=(y*E-g*R-m*v)*H,e[15]=(h*R-f*E+d*v)*H,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,f=a+a,d=r*l,u=r*h,g=r*f,y=o*h,m=o*f,p=a*f,v=c*l,E=c*h,x=c*f,R=n.x,A=n.y,_=n.z;return s[0]=(1-(y+p))*R,s[1]=(u+x)*R,s[2]=(g-E)*R,s[3]=0,s[4]=(u-x)*A,s[5]=(1-(d+p))*A,s[6]=(m+v)*A,s[7]=0,s[8]=(g+E)*_,s[9]=(m-v)*_,s[10]=(1-(d+y))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Vi.set(s[0],s[1],s[2]).length(),a=Vi.set(s[4],s[5],s[6]).length(),c=Vi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Mn.copy(this);let l=1/o,h=1/a,f=1/c;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=f,Mn.elements[9]*=f,Mn.elements[10]*=f,t.setFromRotationMatrix(Mn),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=dn,c=!1){let l=this.elements,h=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),u=(n+s)/(n-s),g,y;if(c)g=r/(o-r),y=o*r/(o-r);else if(a===dn)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===rs)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=dn,c=!1){let l=this.elements,h=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),u=-(n+s)/(n-s),g,y;if(c)g=1/(o-r),y=o/(o-r);else if(a===dn)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===rs)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Vi=new L,Mn=new bt,ud=new L(0,0,0),dd=new L(1,1,1),si=new L,$r=new L,sn=new L,Lc=new bt,Dc=new fn,Fn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dc.setFromEuler(this),this.setFromQuaternion(Dc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fn.DEFAULT_ORDER="XYZ";var js=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},fd=0,Nc=new L,Wi=new fn,Wn=new bt,Kr=new L,Bs=new L,pd=new L,md=new fn,Uc=new L(1,0,0),Fc=new L(0,1,0),Oc=new L(0,0,1),Bc={type:"added"},gd={type:"removed"},Xi={type:"childadded",child:null},ol={type:"childremoved",child:null},Lt=class i extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Fn,n=new fn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new st}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(Uc,e)}rotateY(e){return this.rotateOnAxis(Fc,e)}rotateZ(e){return this.rotateOnAxis(Oc,e)}translateOnAxis(e,t){return Nc.copy(e).applyQuaternion(this.quaternion),this.position.add(Nc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uc,e)}translateY(e){return this.translateOnAxis(Fc,e)}translateZ(e){return this.translateOnAxis(Oc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Kr.copy(e):Kr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Bs,Kr,this.up):Wn.lookAt(Kr,Bs,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),Wi.setFromRotationMatrix(Wn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bc),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gd),ol.child=e,this.dispatchEvent(ol),ol.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bc),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,pd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,md,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),u=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Lt.DEFAULT_UP=new L(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ft=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},_d={type:"move"},hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,g=.005;l.inputState.pinching&&d>u+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=u-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_d)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function al(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var We=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=pt.workingColorSpace){if(e=ac(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=al(o,r,e+1/3),this.g=al(o,r,e),this.b=al(o,r,e-1/3)}return pt.colorSpaceToWorking(this,s),this}setStyle(e,t=Pt){function n(r){r!==void 0&&parseFloat(r)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){let n=Wh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}copyLinearToSRGB(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return pt.workingToColorSpace(Jt.copy(this),e),Math.round(ct(Jt.r*255,0,255))*65536+Math.round(ct(Jt.g*255,0,255))*256+Math.round(ct(Jt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(Jt.copy(this),t);let n=Jt.r,s=Jt.g,r=Jt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Pt){pt.workingToColorSpace(Jt.copy(this),e);let t=Jt.r,n=Jt.g,s=Jt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(Qr);let n=qs(ri.h,Qr.h,t),s=qs(ri.s,Qr.s,t),r=qs(ri.l,Qr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new We;We.NAMES=Wh;var er=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ai=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Sn=new L,Xn=new L,ll=new L,qn=new L,qi=new L,Yi=new L,Hc=new L,cl=new L,hl=new L,ul=new L,dl=new It,fl=new It,pl=new It,ci=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Sn.subVectors(e,t),s.cross(Sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Sn.subVectors(s,t),Xn.subVectors(n,t),ll.subVectors(e,t);let o=Sn.dot(Sn),a=Sn.dot(Xn),c=Sn.dot(ll),l=Xn.dot(Xn),h=Xn.dot(ll),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-u-g,g,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,qn.x),c.addScaledVector(o,qn.y),c.addScaledVector(a,qn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return dl.setScalar(0),fl.setScalar(0),pl.setScalar(0),dl.fromBufferAttribute(e,t),fl.fromBufferAttribute(e,n),pl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(dl,r.x),o.addScaledVector(fl,r.y),o.addScaledVector(pl,r.z),o}static isFrontFacing(e,t,n,s){return Sn.subVectors(n,t),Xn.subVectors(e,t),Sn.cross(Xn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),Sn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;qi.subVectors(s,n),Yi.subVectors(r,n),cl.subVectors(e,n);let c=qi.dot(cl),l=Yi.dot(cl);if(c<=0&&l<=0)return t.copy(n);hl.subVectors(e,s);let h=qi.dot(hl),f=Yi.dot(hl);if(h>=0&&f<=h)return t.copy(s);let d=c*f-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),t.copy(n).addScaledVector(qi,o);ul.subVectors(e,r);let u=qi.dot(ul),g=Yi.dot(ul);if(g>=0&&u<=g)return t.copy(r);let y=u*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Yi,a);let m=h*g-u*f;if(m<=0&&f-h>=0&&u-g>=0)return Hc.subVectors(r,s),a=(f-h)/(f-h+(u-g)),t.copy(s).addScaledVector(Hc,a);let p=1/(m+y+d);return o=y*p,a=d*p,t.copy(n).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},On=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,En):En.fromBufferAttribute(r,o),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jr.copy(n.boundingBox)),jr.applyMatrix4(e.matrixWorld),this.union(jr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),eo.subVectors(this.max,Hs),Zi.subVectors(e.a,Hs),Ji.subVectors(e.b,Hs),$i.subVectors(e.c,Hs),oi.subVectors(Ji,Zi),ai.subVectors($i,Ji),Mi.subVectors(Zi,$i);let t=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Mi.z,Mi.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Mi.z,0,-Mi.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Mi.y,Mi.x,0];return!ml(t,Zi,Ji,$i,eo)||(t=[1,0,0,0,1,0,0,0,1],!ml(t,Zi,Ji,$i,eo))?!1:(to.crossVectors(oi,ai),t=[to.x,to.y,to.z],ml(t,Zi,Ji,$i,eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Yn=[new L,new L,new L,new L,new L,new L,new L,new L],En=new L,jr=new On,Zi=new L,Ji=new L,$i=new L,oi=new L,ai=new L,Mi=new L,Hs=new L,eo=new L,to=new L,Si=new L;function ml(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Si.fromArray(i,r);let a=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),c=e.dot(Si),l=t.dot(Si),h=n.dot(Si);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Ot=new L,no=new Me,xd=0,Tn=class extends Un{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oh,this.updateRanges=[],this.gpuType=xn,this.version=0,this._normalizationScale=e!==void 0?cc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)no.fromBufferAttribute(this,t),no.applyMatrix3(e),this.setXY(t,no.x,no.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Gh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Vh(e,this.array)}};var tr=class extends Tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var nr=class extends Tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var dt=class extends Tn{constructor(e,t,n){super(new Float32Array(e),t,n)}},vd=new On,zs=new L,gl=new L,hi=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):vd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);let t=zs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(zs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(gl)),this.expandByPoint(zs.copy(e.center).sub(gl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},yd=0,un=new bt,_l=new Lt,Ki=new L,rn=new On,ks=new On,Vt=new L,Xt=class i extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xu(e)?nr:tr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return _l.lookAt(e),_l.updateMatrix(),this.applyMatrix4(_l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(rn.min,ks.min),rn.expandByPoint(Vt),Vt.addVectors(rn.max,ks.max),rn.expandByPoint(Vt)):(rn.expandByPoint(ks.min),rn.expandByPoint(ks.max))}rn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Vt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Vt.fromBufferAttribute(a,l),c&&(Ki.fromBufferAttribute(e,l),Vt.add(Ki)),s=Math.max(s,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Tn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let N=0;N<n.count;N++)a[N]=new L,c[N]=new L;let h=new L,f=new L,d=new L,u=new Me,g=new Me,y=new Me,m=new L,p=new L;function v(N,w,T){l[N]=l[w]=l[T]=1,h.fromBufferAttribute(n,N),f.fromBufferAttribute(n,w),d.fromBufferAttribute(n,T),u.fromBufferAttribute(r,N),g.fromBufferAttribute(r,w),y.fromBufferAttribute(r,T),f.sub(h),d.sub(h),g.sub(u),y.sub(u);let D=1/(g.x*y.y-y.x*g.y);isFinite(D)&&(m.copy(f).multiplyScalar(y.y).addScaledVector(d,-g.y).multiplyScalar(D),p.copy(d).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(D),a[N].add(m),a[w].add(m),a[T].add(m),c[N].add(p),c[w].add(p),c[T].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let N=0,w=E.length;N<w;++N){let T=E[N],D=T.start,F=T.count;for(let I=D,H=D+F;I<H;I+=3)v(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let x=new L,R=new L,A=new L,_=new L;function M(N){A.fromBufferAttribute(s,N),_.copy(A);let w=a[N];x.copy(w),x.sub(A.multiplyScalar(A.dot(w))).normalize(),R.crossVectors(_,w);let D=R.dot(c[N])<0?-1:1;o.setXYZW(N,x.x,x.y,x.z,D)}for(let N=0,w=n.count;N<w;++N)l[N]&&M(N);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,f=new L;if(e)for(let d=0,u=e.count;d<u;d+=3){let g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,u=t.count;d<u;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,f=a.normalized,d=new l.constructor(c.length*h),u=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?u=c[y]*a.data.stride+a.offset:u=c[y]*h;for(let p=0;p<h;p++)d[g++]=l[u++]}return new Tn(d,h,f)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){let d=l[h],u=e(d,n);c.push(u)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){let u=l[f];h.push(u.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],f=r[l];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var xl=new L,Md=new L,Sd=new st,bn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=xl.subVectors(n,t).cross(Md.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(xl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Sd.getNormalMatrix(e),s=this.coplanarPoint(xl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ed=0,Kn=class extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=Ms,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zl,this.blendDst=kl,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mo,this.stencilZFail=Mo,this.stencilZPass=Mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new bn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Me().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Me().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Zn=new L,vl=new L,io=new L,so=new L,Uo=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){vl.copy(e).add(t).multiplyScalar(.5),io.copy(t).sub(e).normalize(),so.copy(this.origin).sub(vl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(io),a=so.dot(this.direction),c=-so.dot(io),l=so.lengthSq(),h=Math.abs(1-o*o),f,d,u,g;if(h>0)if(f=o*c-a,d=o*a-c,g=r*h,f>=0)if(d>=-g)if(d<=g){let y=1/h;f*=y,d*=y,u=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+l):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(vl).addScaledVector(io,d),u}intersectSphere(e,t){if(e.radius<0)return null;Zn.subVectors(e.center,this.origin);let n=Zn.dot(this.direction),s=Zn.dot(Zn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,f=e.x-o.x,d=e.y-o.y,u=e.z-o.z,g=t.x-o.x,y=t.y-o.y,m=t.z-o.z,p=n.x-o.x,v=n.y-o.y,E=n.z-o.z,x=Math.abs(c),R=Math.abs(l),A=Math.abs(h),_,M,N,w,T,D,F,I,H,z,V,ce;if(x>=R&&x>=A?(N=c,D=f,H=g,ce=p,c>=0?(_=l,M=h,w=d,T=u,F=y,I=m,z=v,V=E):(_=h,M=l,w=u,T=d,F=m,I=y,z=E,V=v)):R>=A?(N=l,D=d,H=y,ce=v,l>=0?(_=h,M=c,w=u,T=f,F=m,I=g,z=E,V=p):(_=c,M=h,w=f,T=u,F=g,I=m,z=p,V=E)):(N=h,D=u,H=m,ce=E,h>=0?(_=c,M=l,w=f,T=d,F=g,I=y,z=p,V=v):(_=l,M=c,w=d,T=f,F=y,I=g,z=v,V=p)),N===0)return null;let q=_/N,j=M/N,ae=1/N,Ee=w-q*D,Ve=T-j*D,J=F-q*H,_e=I-j*H,Ae=z-q*ce,Oe=V-j*ce,ie=Ae*_e-Oe*J,Pe=Ee*Oe-Ve*Ae,at=J*Ve-_e*Ee;if(s){if(ie<0||Pe<0||at<0)return null}else if((ie<0||Pe<0||at<0)&&(ie>0||Pe>0||at>0))return null;let Le=ie+Pe+at;if(Le===0)return null;let Xe=ae*(ie*D+Pe*H+at*ce);return(Le>0?Xe<0:Xe>0)?null:this.at(Xe/Le,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tn=class extends Kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},zc=new bt,Ei=new Uo,ro=new hi,kc=new L,oo=new L,ao=new L,lo=new L,yl=new L,co=new L,Gc=new L,ho=new L,le=class extends Lt{constructor(e=new Xt,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){co.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],f=r[c];h!==0&&(yl.fromBufferAttribute(f,e),o?co.addScaledVector(yl,h):co.addScaledVector(yl.sub(t),h))}t.add(co)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(r),Ei.copy(e.ray).recast(e.near),!(ro.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(ro,kc)===null||Ei.origin.distanceToSquared(kc)>(e.far-e.near)**2))&&(zc.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(zc),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=o[m.materialIndex],v=Math.max(m.start,u.start),E=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let x=v,R=E;x<R;x+=3){let A=a.getX(x),_=a.getX(x+1),M=a.getX(x+2);s=uo(this,p,e,n,l,h,f,A,_,M),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,u.start),y=Math.min(a.count,u.start+u.count);for(let m=g,p=y;m<p;m+=3){let v=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);s=uo(this,o,e,n,l,h,f,v,E,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=o[m.materialIndex],v=Math.max(m.start,u.start),E=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let x=v,R=E;x<R;x+=3){let A=x,_=x+1,M=x+2;s=uo(this,p,e,n,l,h,f,A,_,M),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,u.start),y=Math.min(c.count,u.start+u.count);for(let m=g,p=y;m<p;m+=3){let v=m,E=m+1,x=m+2;s=uo(this,o,e,n,l,h,f,v,E,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function bd(i,e,t,n,s,r,o,a){let c;if(e.side===Yt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===gi,a),c===null)return null;ho.copy(a),ho.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ho);return l<t.near||l>t.far?null:{distance:l,point:ho.clone(),object:i}}function uo(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,oo),i.getVertexPosition(c,ao),i.getVertexPosition(l,lo);let h=bd(i,e,t,n,oo,ao,lo,Gc);if(h){let f=new L;ci.getBarycoord(Gc,oo,ao,lo,f),s&&(h.uv=ci.getInterpolatedAttribute(s,a,c,l,f,new Me)),r&&(h.uv1=ci.getInterpolatedAttribute(r,a,c,l,f,new Me)),o&&(h.normal=ci.getInterpolatedAttribute(o,a,c,l,f,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new L,materialIndex:0};ci.getNormal(oo,ao,lo,d.normal),h.face=d,h.barycoord=f}return h}var ir=class extends Kt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Wt,h=Wt,f,d){super(null,o,a,c,l,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sr=class extends Tn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qi=new bt,Vc=new bt,fo=[],Wc=new On,Td=new bt,Gs=new le,Vs=new hi,qt=class extends le{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Td)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new On),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qi),Wc.copy(e.boundingBox).applyMatrix4(Qi),this.boundingBox.union(Wc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qi),Vs.copy(e.boundingSphere).applyMatrix4(Qi),this.boundingSphere.union(Vs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Gs.geometry=this.geometry,Gs.material=this.material,Gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vs.copy(this.boundingSphere),Vs.applyMatrix4(n),e.ray.intersectsSphere(Vs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qi),Vc.multiplyMatrices(n,Qi),Gs.matrixWorld=Vc,Gs.raycast(e,fo);for(let o=0,a=fo.length;o<a;o++){let c=fo[o];c.instanceId=r,c.object=this,t.push(c)}fo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new sr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ir(new Float32Array(s*this.count),s,this.count,ca,xn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},bi=new hi,wd=new Me(.5,.5),po=new L,ui=class{constructor(e=new bn,t=new bn,n=new bn,s=new bn,r=new bn,o=new bn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],f=r[5],d=r[6],u=r[7],g=r[8],y=r[9],m=r[10],p=r[11],v=r[12],E=r[13],x=r[14],R=r[15];if(s[0].setComponents(l-o,u-h,p-g,R-v).normalize(),s[1].setComponents(l+o,u+h,p+g,R+v).normalize(),s[2].setComponents(l+a,u+f,p+y,R+E).normalize(),s[3].setComponents(l-a,u-f,p-y,R-E).normalize(),n)s[4].setComponents(c,d,m,x).normalize(),s[5].setComponents(l-c,u-d,p-m,R-x).normalize();else if(s[4].setComponents(l-c,u-d,p-m,R-x).normalize(),t===dn)s[5].setComponents(l+c,u+d,p+m,R+x).normalize();else if(t===rs)s[5].setComponents(c,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){bi.center.set(0,0,0);let t=wd.distanceTo(e.center);return bi.radius=.7071067811865476+t,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(po.x=s.normal.x>0?e.max.x:e.min.x,po.y=s.normal.y>0?e.max.y:e.min.y,po.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(po)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Xc=new bt,Fo=class i{constructor(){this.coordinateSystem=dn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Xc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ui),n[s].setFromProjectionMatrix(Xc,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ui),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var rr=class extends Kt{constructor(e=[],t=Li,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},pn=class extends Kt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qn=class extends Kt{constructor(e,t,n=wn,s,r,o,a=Wt,c=Wt,l,h=$n,f=1){if(h!==$n&&h!==ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},or=class extends Qn{constructor(e,t=wn,n=Li,s,r,o=Wt,a=Wt,c,l=$n){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ar=class extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},He=class i extends Xt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],f=[],d=0,u=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(f,2));function g(y,m,p,v,E,x,R,A,_,M,N){let w=x/_,T=R/M,D=x/2,F=R/2,I=A/2,H=_+1,z=M+1,V=0,ce=0,q=new L;for(let j=0;j<z;j++){let ae=j*T-F;for(let Ee=0;Ee<H;Ee++){let Ve=Ee*w-D;q[y]=Ve*v,q[m]=ae*E,q[p]=I,l.push(q.x,q.y,q.z),q[y]=0,q[m]=0,q[p]=A>0?1:-1,h.push(q.x,q.y,q.z),f.push(Ee/_),f.push(1-j/M),V+=1}}for(let j=0;j<M;j++)for(let ae=0;ae<_;ae++){let Ee=d+ae+H*j,Ve=d+ae+H*(j+1),J=d+(ae+1)+H*(j+1),_e=d+(ae+1)+H*j;c.push(Ee,Ve,_e),c.push(Ve,J,_e),ce+=6}a.addGroup(u,ce,N),u+=ce,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},lr=class i extends Xt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=t/2,f=Math.PI/2*e,d=t,u=2*f+d,g=n*2+r,y=s+1,m=new L,p=new L;for(let v=0;v<=g;v++){let E=0,x=0,R=0,A=0;if(v<=n){let N=v/n,w=N*Math.PI/2;x=-h-e*Math.cos(w),R=e*Math.sin(w),A=-e*Math.cos(w),E=N*f}else if(v<=n+r){let N=(v-n)/r;x=-h+N*t,R=e,A=0,E=f+N*d}else{let N=(v-n-r)/n,w=N*Math.PI/2;x=h+e*Math.sin(w),R=e*Math.cos(w),A=e*Math.sin(w),E=f+d+N*f}let _=Math.max(0,Math.min(1,E/u)),M=0;v===0?M=.5/s:v===g&&(M=-.5/s);for(let N=0;N<=s;N++){let w=N/s,T=w*Math.PI*2,D=Math.sin(T),F=Math.cos(T);p.x=-R*F,p.y=x,p.z=R*D,a.push(p.x,p.y,p.z),m.set(-R*F,A,R*D),m.normalize(),c.push(m.x,m.y,m.z),l.push(w+M,_)}if(v>0){let N=(v-1)*y;for(let w=0;w<s;w++){let T=N+w,D=N+w+1,F=v*y+w,I=v*y+w+1;o.push(T,D,F),o.push(D,I,F)}}}this.setIndex(o),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},us=class i extends Xt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new L,h=new Me;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){let u=n+f/t*s;l.x=e*Math.cos(u),l.y=e*Math.sin(u),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(a,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Tt=class i extends Xt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],u=[],g=0,y=[],m=n/2,p=0;v(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new dt(f,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(u,2));function v(){let x=new L,R=new L,A=0,_=(t-e)/n;for(let M=0;M<=r;M++){let N=[],w=M/r,T=w*(t-e)+e;for(let D=0;D<=s;D++){let F=D/s,I=F*c+a,H=Math.sin(I),z=Math.cos(I);R.x=T*H,R.y=-w*n+m,R.z=T*z,f.push(R.x,R.y,R.z),x.set(H,_,z).normalize(),d.push(x.x,x.y,x.z),u.push(F,1-w),N.push(g++)}y.push(N)}for(let M=0;M<s;M++)for(let N=0;N<r;N++){let w=y[N][M],T=y[N+1][M],D=y[N+1][M+1],F=y[N][M+1];(e>0||N!==0)&&(h.push(w,T,F),A+=3),(t>0||N!==r-1)&&(h.push(T,D,F),A+=3)}l.addGroup(p,A,0),p+=A}function E(x){let R=g,A=new Me,_=new L,M=0,N=x===!0?e:t,w=x===!0?1:-1;for(let D=1;D<=s;D++)f.push(0,m*w,0),d.push(0,w,0),u.push(.5,.5),g++;let T=g;for(let D=0;D<=s;D++){let I=D/s*c+a,H=Math.cos(I),z=Math.sin(I);_.x=N*z,_.y=m*w,_.z=N*H,f.push(_.x,_.y,_.z),d.push(0,w,0),A.x=H*.5+.5,A.y=z*.5*w+.5,u.push(A.x,A.y),g++}for(let D=0;D<s;D++){let F=R+D,I=T+D;x===!0?h.push(I,I+1,F):h.push(I+1,I,F),M+=3}l.addGroup(p,M,x===!0?1:2),p+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ri=class i extends Tt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},cr=class i extends Xt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let E=new L,x=new L,R=new L;for(let A=0;A<t.length;A+=3)u(t[A+0],E),u(t[A+1],x),u(t[A+2],R),c(E,x,R,v)}function c(v,E,x,R){let A=R+1,_=[];for(let M=0;M<=A;M++){_[M]=[];let N=v.clone().lerp(x,M/A),w=E.clone().lerp(x,M/A),T=A-M;for(let D=0;D<=T;D++)D===0&&M===A?_[M][D]=N:_[M][D]=N.clone().lerp(w,D/T)}for(let M=0;M<A;M++)for(let N=0;N<2*(A-M)-1;N++){let w=Math.floor(N/2);N%2===0?(d(_[M][w+1]),d(_[M+1][w]),d(_[M][w])):(d(_[M][w+1]),d(_[M+1][w+1]),d(_[M+1][w]))}}function l(v){let E=new L;for(let x=0;x<r.length;x+=3)E.x=r[x+0],E.y=r[x+1],E.z=r[x+2],E.normalize().multiplyScalar(v),r[x+0]=E.x,r[x+1]=E.y,r[x+2]=E.z}function h(){let v=new L;for(let E=0;E<r.length;E+=3){v.x=r[E+0],v.y=r[E+1],v.z=r[E+2];let x=m(v)/2/Math.PI+.5,R=p(v)/Math.PI+.5;o.push(x,1-R)}g(),f()}function f(){for(let v=0;v<o.length;v+=6){let E=o[v+0],x=o[v+2],R=o[v+4],A=Math.max(E,x,R),_=Math.min(E,x,R);A>.9&&_<.1&&(E<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),R<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function u(v,E){let x=v*3;E.x=e[x+0],E.y=e[x+1],E.z=e[x+2]}function g(){let v=new L,E=new L,x=new L,R=new L,A=new Me,_=new Me,M=new Me;for(let N=0,w=0;N<r.length;N+=9,w+=6){v.set(r[N+0],r[N+1],r[N+2]),E.set(r[N+3],r[N+4],r[N+5]),x.set(r[N+6],r[N+7],r[N+8]),A.set(o[w+0],o[w+1]),_.set(o[w+2],o[w+3]),M.set(o[w+4],o[w+5]),R.copy(v).add(E).add(x).divideScalar(3);let T=m(R);y(A,w+0,v,T),y(_,w+2,E,T),y(M,w+4,x,T)}}function y(v,E,x,R){R<0&&v.x===1&&(o[E]=v.x-1),x.x===0&&x.z===0&&(o[E]=R/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},hr=class i extends cr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var an=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$e("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,u=(o-h)/d;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Me:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],o=[],a=new L,c=new bt;for(let u=0;u<=e;u++){let g=u/e;s[u]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ct(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(a,g))}o[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(ct(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],u*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},ds=class extends an{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Me){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,u=l-this.aY;c=d*h-u*f+this.aX,l=d*f+u*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Oo=class extends ds{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function hc(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,f){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,u=(a-o)/h-(c-o)/(h+f)+(c-a)/f;d*=h,u*=h,s(o,a,d,u)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var qc=new L,Yc=new L,Ml=new hc,Sl=new hc,El=new hc,mn=class extends an{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Yc.subVectors(s[0],s[1]).add(s[0]),l=Yc);let f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(qc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=qc),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),u),y=Math.pow(f.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(h),u);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Ml.initNonuniformCatmullRom(l.x,f.x,d.x,h.x,g,y,m),Sl.initNonuniformCatmullRom(l.y,f.y,d.y,h.y,g,y,m),El.initNonuniformCatmullRom(l.z,f.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Ml.initCatmullRom(l.x,f.x,d.x,h.x,this.tension),Sl.initCatmullRom(l.y,f.y,d.y,h.y,this.tension),El.initCatmullRom(l.z,f.z,d.z,h.z,this.tension));return n.set(Ml.calc(c),Sl.calc(c),El.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Zc(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Ad(i,e){let t=1-i;return t*t*e}function Rd(i,e){return 2*(1-i)*i*e}function Cd(i,e){return i*i*e}function Ys(i,e,t,n){return Ad(i,e)+Rd(i,t)+Cd(i,n)}function Pd(i,e){let t=1-i;return t*t*t*e}function Id(i,e){let t=1-i;return 3*t*t*i*e}function Ld(i,e){return 3*(1-i)*i*i*e}function Dd(i,e){return i*i*i*e}function Zs(i,e,t,n,s){return Pd(i,e)+Id(i,t)+Ld(i,n)+Dd(i,s)}var ur=class extends an{constructor(e=new Me,t=new Me,n=new Me,s=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Me){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zs(e,s.x,r.x,o.x,a.x),Zs(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Bo=class extends an{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zs(e,s.x,r.x,o.x,a.x),Zs(e,s.y,r.y,o.y,a.y),Zs(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},dr=class extends an{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fs=class extends an{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fr=class extends an{constructor(e=new Me,t=new Me,n=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Me){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ys(e,s.x,r.x,o.x),Ys(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pr=class extends an{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ys(e,s.x,r.x,o.x),Ys(e,s.y,r.y,o.y),Ys(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mr=class extends an{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Zc(a,c.x,l.x,h.x,f.x),Zc(a,c.y,l.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Me().fromArray(s))}return this}},Ho=Object.freeze({__proto__:null,ArcCurve:Oo,CatmullRomCurve3:mn,CubicBezierCurve:ur,CubicBezierCurve3:Bo,EllipseCurve:ds,LineCurve:dr,LineCurve3:fs,QuadraticBezierCurve:fr,QuadraticBezierCurve3:pr,SplineCurve:mr}),ps=class extends an{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ho[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ho[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},gr=class extends ps{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new dr(this.currentPoint.clone(),new Me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new fr(this.currentPoint.clone(),new Me(e,t),new Me(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new ur(this.currentPoint.clone(),new Me(e,t),new Me(n,s),new Me(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new mr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new ds(e,t,n,s,r,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},jn=class extends gr{constructor(e){super(e),this.uuid=Ni(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new gr().fromJSON(s))}return this}};function Nd(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Xh(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Hd(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let h=a,f=c;for(let d=t;d<s;d+=t){let u=i[d],g=i[d+1];u<a&&(a=u),g<c&&(c=g),u>h&&(h=u),g>f&&(f=g)}l=Math.max(h-a,f-c),l=l!==0?32767/l:0}return _r(r,o,t,a,c,l,0),o}function Xh(i,e,t,n,s){let r;if(s===$d(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Jc(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Jc(o/n|0,i[o],i[o+1],r);return r&&ms(r,r.next)&&(vr(r),r=r.next),r}function Ci(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ms(t,t.next)||Dt(t.prev,t,t.next)===0)){if(vr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function _r(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Wd(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Fd(i,n,s,r):Ud(i)){e.push(c.i,i.i,l.i),vr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Od(Ci(i),e),_r(i,e,t,n,s,r,2)):o===2&&Bd(i,e,t,n,s,r):_r(Ci(i),e,t,n,s,r,1);break}}}function Ud(i){let e=i.prev,t=i,n=i.next;if(Dt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),f=Math.min(a,c,l),d=Math.max(s,r,o),u=Math.max(a,c,l),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=f&&g.y<=u&&Ws(s,a,r,c,o,l,g.x,g.y)&&Dt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Fd(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Dt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,f=r.y,d=o.y,u=Math.min(a,c,l),g=Math.min(h,f,d),y=Math.max(a,c,l),m=Math.max(h,f,d),p=Cl(u,g,e,t,n),v=Cl(y,m,e,t,n),E=i.prevZ,x=i.nextZ;for(;E&&E.z>=p&&x&&x.z<=v;){if(E.x>=u&&E.x<=y&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&Ws(a,h,c,f,l,d,E.x,E.y)&&Dt(E.prev,E,E.next)>=0||(E=E.prevZ,x.x>=u&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ws(a,h,c,f,l,d,x.x,x.y)&&Dt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;E&&E.z>=p;){if(E.x>=u&&E.x<=y&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&Ws(a,h,c,f,l,d,E.x,E.y)&&Dt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;x&&x.z<=v;){if(x.x>=u&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ws(a,h,c,f,l,d,x.x,x.y)&&Dt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Od(i,e){let t=i;do{let n=t.prev,s=t.next.next;!ms(n,s)&&Yh(n,t,t.next,s)&&xr(n,s)&&xr(s,n)&&(e.push(n.i,t.i,s.i),vr(t),vr(t.next),t=i=s),t=t.next}while(t!==i);return Ci(t)}function Bd(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Yd(o,a)){let c=Zh(o,a);o=Ci(o,o.next),c=Ci(c,c.next),_r(o,e,t,n,s,r,0),_r(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Hd(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Xh(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(qd(l))}s.sort(zd);for(let r=0;r<s.length;r++)t=kd(s[r],t);return t}function zd(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function kd(i,e){let t=Gd(i,e);if(!t)return e;let n=Zh(t,i);return Ci(n,n.next),Ci(t,t.next)}function Gd(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(ms(i,t))return t;do{if(ms(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&qh(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);xr(t,i)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&Vd(o,t)))&&(o=t,h=f)}t=t.next}while(t!==a);return o}function Vd(i,e){return Dt(i.prev,i,e.prev)<0&&Dt(e.next,i,i.next)<0}function Wd(i,e,t,n){let s=i;do s.z===0&&(s.z=Cl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Xd(s)}function Xd(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Cl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function qd(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function qh(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Ws(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&qh(i,e,t,n,s,r,o,a)}function Yd(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Zd(i,e)&&(xr(i,e)&&xr(e,i)&&Jd(i,e)&&(Dt(i.prev,i,e.prev)||Dt(i,e.prev,e))||ms(i,e)&&Dt(i.prev,i,i.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ms(i,e){return i.x===e.x&&i.y===e.y}function Yh(i,e,t,n){let s=go(Dt(i,e,t)),r=go(Dt(i,e,n)),o=go(Dt(t,n,i)),a=go(Dt(t,n,e));return!!(s!==r&&o!==a||s===0&&mo(i,t,e)||r===0&&mo(i,n,e)||o===0&&mo(t,i,n)||a===0&&mo(t,e,n))}function mo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function go(i){return i>0?1:i<0?-1:0}function Zd(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Yh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function xr(i,e){return Dt(i.prev,i,i.next)<0?Dt(i,e,i.next)>=0&&Dt(i,i.prev,e)>=0:Dt(i,e,i.prev)<0||Dt(i,i.next,e)<0}function Jd(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Zh(i,e){let t=Pl(i.i,i.x,i.y),n=Pl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Jc(i,e,t,n){let s=Pl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function vr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Pl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function $d(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Il=class{static triangulate(e,t,n=2){return Nd(e,t,n)}},Nn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];$c(e),Kc(n,e);let o=e.length;t.forEach($c);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Kc(n,t[c]);let a=Il.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function $c(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Kc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var yr=class i extends Xt{constructor(e=new jn([new Me(.5,.5),new Me(-.5,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new dt(s,3)),this.setAttribute("uv",new dt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:u-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Kd,E,x=!1,R,A,_,M;if(p){E=p.getSpacedPoints(h),x=!0,d=!1;let se=p.isCatmullRomCurve3?p.closed:!1;R=p.computeFrenetFrames(h,se),A=new L,_=new L,M=new L}d||(m=0,u=0,g=0,y=0);let N=a.extractPoints(l),w=N.shape,T=N.holes;if(!Nn.isClockWise(w)){w=w.reverse();for(let se=0,oe=T.length;se<oe;se++){let fe=T[se];Nn.isClockWise(fe)&&(T[se]=fe.reverse())}}function F(se){let fe=10000000000000001e-36,we=se[0];for(let ve=1;ve<=se.length;ve++){let Ye=ve%se.length,Ne=se[Ye],je=Ne.x-we.x,tt=Ne.y-we.y,lt=je*je+tt*tt,O=Math.max(Math.abs(Ne.x),Math.abs(Ne.y),Math.abs(we.x),Math.abs(we.y)),xt=fe*O*O;if(lt<=xt){se.splice(Ye,1),ve--;continue}we=Ne}}F(w),T.forEach(F);let I=T.length,H=w;for(let se=0;se<I;se++){let oe=T[se];w=w.concat(oe)}function z(se,oe,fe){return oe||Qe("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(oe,fe)}let V=w.length;function ce(se,oe,fe){let we,ve,Ye,Ne=se.x-oe.x,je=se.y-oe.y,tt=fe.x-se.x,lt=fe.y-se.y,O=Ne*Ne+je*je,xt=Ne*lt-je*tt;if(Math.abs(xt)>Number.EPSILON){let nt=Math.sqrt(O),et=Math.sqrt(tt*tt+lt*lt),xe=oe.x-je/nt,gt=oe.y+Ne/nt,ze=fe.x-lt/et,Ge=fe.y+tt/et,C=((ze-xe)*lt-(Ge-gt)*tt)/(Ne*lt-je*tt);we=xe+Ne*C-se.x,ve=gt+je*C-se.y;let S=we*we+ve*ve;if(S<=2)return new Me(we,ve);Ye=Math.sqrt(S/2)}else{let nt=!1;Ne>Number.EPSILON?tt>Number.EPSILON&&(nt=!0):Ne<-Number.EPSILON?tt<-Number.EPSILON&&(nt=!0):Math.sign(je)===Math.sign(lt)&&(nt=!0),nt?(we=-je,ve=Ne,Ye=Math.sqrt(O)):(we=Ne,ve=je,Ye=Math.sqrt(O/2))}return new Me(we/Ye,ve/Ye)}let q=[];for(let se=0,oe=H.length,fe=oe-1,we=se+1;se<oe;se++,fe++,we++)fe===oe&&(fe=0),we===oe&&(we=0),q[se]=ce(H[se],H[fe],H[we]);let j=[],ae,Ee=q.concat();for(let se=0,oe=I;se<oe;se++){let fe=T[se];ae=[];for(let we=0,ve=fe.length,Ye=ve-1,Ne=we+1;we<ve;we++,Ye++,Ne++)Ye===ve&&(Ye=0),Ne===ve&&(Ne=0),ae[we]=ce(fe[we],fe[Ye],fe[Ne]);j.push(ae),Ee=Ee.concat(ae)}let Ve;if(m===0)Ve=Nn.triangulateShape(H,T);else{let se=[],oe=[];for(let fe=0;fe<m;fe++){let we=fe/m,ve=u*Math.cos(we*Math.PI/2),Ye=g*Math.sin(we*Math.PI/2)+y;for(let Ne=0,je=H.length;Ne<je;Ne++){let tt=z(H[Ne],q[Ne],Ye);Pe(tt.x,tt.y,-ve),we===0&&se.push(tt)}for(let Ne=0,je=I;Ne<je;Ne++){let tt=T[Ne];ae=j[Ne];let lt=[];for(let O=0,xt=tt.length;O<xt;O++){let nt=z(tt[O],ae[O],Ye);Pe(nt.x,nt.y,-ve),we===0&&lt.push(nt)}we===0&&oe.push(lt)}}Ve=Nn.triangulateShape(se,oe)}let J=Ve.length,_e=g+y;for(let se=0;se<V;se++){let oe=d?z(w[se],Ee[se],_e):w[se];x?(_.copy(R.normals[0]).multiplyScalar(oe.x),A.copy(R.binormals[0]).multiplyScalar(oe.y),M.copy(E[0]).add(_).add(A),Pe(M.x,M.y,M.z)):Pe(oe.x,oe.y,0)}for(let se=1;se<=h;se++)for(let oe=0;oe<V;oe++){let fe=d?z(w[oe],Ee[oe],_e):w[oe];x?(_.copy(R.normals[se]).multiplyScalar(fe.x),A.copy(R.binormals[se]).multiplyScalar(fe.y),M.copy(E[se]).add(_).add(A),Pe(M.x,M.y,M.z)):Pe(fe.x,fe.y,f/h*se)}for(let se=m-1;se>=0;se--){let oe=se/m,fe=u*Math.cos(oe*Math.PI/2),we=g*Math.sin(oe*Math.PI/2)+y;for(let ve=0,Ye=H.length;ve<Ye;ve++){let Ne=z(H[ve],q[ve],we);Pe(Ne.x,Ne.y,f+fe)}for(let ve=0,Ye=T.length;ve<Ye;ve++){let Ne=T[ve];ae=j[ve];for(let je=0,tt=Ne.length;je<tt;je++){let lt=z(Ne[je],ae[je],we);x?Pe(lt.x,lt.y+E[h-1].y,E[h-1].x+fe):Pe(lt.x,lt.y,f+fe)}}}Ae(),Oe();function Ae(){let se=s.length/3;if(d){let oe=0,fe=V*oe;for(let we=0;we<J;we++){let ve=Ve[we];at(ve[2]+fe,ve[1]+fe,ve[0]+fe)}oe=h+m*2,fe=V*oe;for(let we=0;we<J;we++){let ve=Ve[we];at(ve[0]+fe,ve[1]+fe,ve[2]+fe)}}else{for(let oe=0;oe<J;oe++){let fe=Ve[oe];at(fe[2],fe[1],fe[0])}for(let oe=0;oe<J;oe++){let fe=Ve[oe];at(fe[0]+V*h,fe[1]+V*h,fe[2]+V*h)}}n.addGroup(se,s.length/3-se,0)}function Oe(){let se=s.length/3,oe=0;ie(H,oe),oe+=H.length;for(let fe=0,we=T.length;fe<we;fe++){let ve=T[fe];ie(ve,oe),oe+=ve.length}n.addGroup(se,s.length/3-se,1)}function ie(se,oe){let fe=se.length;for(;--fe>=0;){let we=fe,ve=fe-1;ve<0&&(ve=se.length-1);for(let Ye=0,Ne=h+m*2;Ye<Ne;Ye++){let je=V*Ye,tt=V*(Ye+1),lt=oe+we+je,O=oe+ve+je,xt=oe+ve+tt,nt=oe+we+tt;Le(lt,O,xt,nt)}}}function Pe(se,oe,fe){c.push(se),c.push(oe),c.push(fe)}function at(se,oe,fe){Xe(se),Xe(oe),Xe(fe);let we=s.length/3,ve=v.generateTopUV(n,s,we-3,we-2,we-1);Ie(ve[0]),Ie(ve[1]),Ie(ve[2])}function Le(se,oe,fe,we){Xe(se),Xe(oe),Xe(we),Xe(oe),Xe(fe),Xe(we);let ve=s.length/3,Ye=v.generateSideWallUV(n,s,ve-6,ve-3,ve-2,ve-1);Ie(Ye[0]),Ie(Ye[1]),Ie(Ye[3]),Ie(Ye[1]),Ie(Ye[2]),Ie(Ye[3])}function Xe(se){s.push(c[se*3+0]),s.push(c[se*3+1]),s.push(c[se*3+2])}function Ie(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Qd(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ho[s.type]().fromJSON(s)),new i(n,e.options)}},Kd={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new Me(r,o),new Me(a,c),new Me(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],f=e[n*3+2],d=e[s*3],u=e[s*3+1],g=e[s*3+2],y=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Me(o,1-c),new Me(l,1-f),new Me(d,1-g),new Me(y,1-p)]:[new Me(a,1-c),new Me(h,1-f),new Me(u,1-g),new Me(m,1-p)]}};function Qd(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var di=class i extends cr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var zt=class i extends Xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,f=e/a,d=t/c,u=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let v=p*d-o;for(let E=0;E<l;E++){let x=E*f-r;g.push(x,-v,0),y.push(0,0,1),m.push(E/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){let E=v+l*p,x=v+l*(p+1),R=v+1+l*(p+1),A=v+1+l*p;u.push(E,x,A),u.push(x,R,A)}this.setIndex(u),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(y,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Mr=class i extends Xt{constructor(e=new jn([new Me(0,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new dt(s,3)),this.setAttribute("normal",new dt(r,3)),this.setAttribute("uv",new dt(o,2));function l(h){let f=s.length/3,d=h.extractPoints(t),u=d.shape,g=d.holes;Nn.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,p=g.length;m<p;m++){let v=g[m];Nn.isClockWise(v)===!0&&(g[m]=v.reverse())}let y=Nn.triangulateShape(u,g);for(let m=0,p=g.length;m<p;m++){let v=g[m];u=u.concat(v)}for(let m=0,p=u.length;m<p;m++){let v=u[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=y.length;m<p;m++){let v=y[m],E=v[0]+f,x=v[1]+f,R=v[2]+f;n.push(E,x,R),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return jd(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function jd(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Sr=class i extends Xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],f=[],d=new L,u=new L,g=new L;for(let y=0;y<=n;y++){let m=o+y/n*a;for(let p=0;p<=s;p++){let v=p/s*r;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),l.push(u.x,u.y,u.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),g.subVectors(u,d).normalize(),h.push(g.x,g.y,g.z),f.push(p/s),f.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,v=(s+1)*(y-1)+m-1,E=(s+1)*(y-1)+m,x=(s+1)*y+m;c.push(p,v,x),c.push(v,E,x)}this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var gn=class i extends Xt{constructor(e=new pr(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,c=new L,l=new Me,h=new L,f=[],d=[],u=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new dt(f,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(u,2));function y(){for(let E=0;E<t;E++)m(E);m(r===!1?t:0),v(),p()}function m(E){h=e.getPointAt(E/t,h);let x=o.normals[E],R=o.binormals[E];for(let A=0;A<=s;A++){let _=A/s*Math.PI*2,M=Math.sin(_),N=-Math.cos(_);c.x=N*x.x+M*R.x,c.y=N*x.y+M*R.y,c.z=N*x.z+M*R.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,f.push(a.x,a.y,a.z)}}function p(){for(let E=1;E<=t;E++)for(let x=1;x<=s;x++){let R=(s+1)*(E-1)+(x-1),A=(s+1)*E+(x-1),_=(s+1)*E+x,M=(s+1)*(E-1)+x;g.push(R,A,M),g.push(A,_,M)}}function v(){for(let E=0;E<=t;E++)for(let x=0;x<=s;x++)l.x=E/t,l.y=x/s,u.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Ho[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Ui(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Qc(s))s.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Qc(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Qt(i){let e={};for(let t=0;t<i.length;t++){let n=Ui(i[t]);for(let s in n)e[s]=n[s]}return e}function Qc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ef(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function uc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}var Jh={clone:Ui,merge:Qt},tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bn=class extends Kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tf,this.fragmentShader=nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=ef(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new We().setHex(s.value);break;case"v2":this.uniforms[n].value=new Me().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new It().fromArray(s.value);break;case"m3":this.uniforms[n].value=new st().fromArray(s.value);break;case"m4":this.uniforms[n].value=new bt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},zo=class extends Bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ke=class extends Kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Hn=class extends Ke{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ti('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ti('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Er=class extends Kn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=na,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ko=class extends Kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Go=class extends Kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ji(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function _o(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var fi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Vo=class extends fi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wl,endingEnd:wl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Al:r=e,a=2*t-n;break;case Rl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Al:o=e,c=2*n-t;break;case Rl:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,g=(n-t)/(s-t),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,v=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,E=(-1-u)*m+(1.5+u)*y+.5*g,x=u*m-u*y;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+v*o[l+R]+E*o[c+R]+x*o[f+R];return r}},Wo=class extends fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),f=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*f+o[c+d]*h;return r}},Xo=class extends fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},qo=class extends fi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-t)/(s-t),y=1-g;for(let m=0;m!==a;++m)r[m]=o[l+m]*y+o[c+m]*g;return r}let d=a*2,u=e-1;for(let g=0;g!==a;++g){let y=o[l+g],m=o[c+g],p=u*d+g*2,v=f[p],E=f[p+1],x=e*d+g*2,R=h[x],A=h[x+1],_=rf(n,t,v,R,s);r[g]=$h(_,y,E,A,m)}return r}};function $h(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function sf(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function rf(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=$h(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=sf(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var ln=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ji(t,this.TimeBufferType),this.values=ji(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ji(e.times,Array),values:ji(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),_o(e.settings)&&(n.settings={inTangents:ji(e.settings.inTangents,Array),outTangents:ji(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new qo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Js:t=this.InterpolantFactoryMethodDiscrete;break;case Io:t=this.InterpolantFactoryMethodLinear;break;case yo:t=this.InterpolantFactoryMethodSmooth;break;case Tl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return $e("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Js;case this.InterpolantFactoryMethodLinear:return Io;case this.InterpolantFactoryMethodSmooth:return yo;case this.InterpolantFactoryMethodBezier:return Tl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;_o(this.settings)&&(jc(this.settings.inTangents,e),jc(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;_o(this.settings)&&(eh(this.settings.inTangents,e),eh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Qe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Qe("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Qe("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&qu(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Qe("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===yo,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let f=a*n,d=f-n,u=f+n;for(let g=0;g!==n;++g){let y=t[f+g];if(y!==t[d+g]||y!==t[u+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*n,d=o*n;for(let u=0;u!==n;++u)t[d+u]=t[f+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,_o(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function jc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function eh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}ln.prototype.ValueTypeName="";ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=Io;var pi=class extends ln{constructor(e,t,n){super(e,t,n)}};pi.prototype.ValueTypeName="bool";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=Js;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Yo=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}};Yo.prototype.ValueTypeName="color";var Zo=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}};Zo.prototype.ValueTypeName="number";var Jo=class extends fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)fn.slerpFlat(r,0,o,l-a,o,l,c);return r}},br=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Jo(this.times,this.values,this.getValueSize(),e)}};br.prototype.ValueTypeName="quaternion";br.prototype.InterpolantFactoryMethodSmooth=void 0;var mi=class extends ln{constructor(e,t,n){super(e,t,n)}};mi.prototype.ValueTypeName="string";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=Js;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var $o=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}};$o.prototype.ValueTypeName="vector";var So={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(th(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!th(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function th(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ko=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=l.length;f<d;f+=2){let u=l[f],g=l[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Kh=new Ko,gs=class{constructor(e){this.manager=e!==void 0?e:Kh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};gs.DEFAULT_MATERIAL_NAME="__DEFAULT";var es=new WeakMap,Qo=class extends gs{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=So.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let f=es.get(o);f===void 0&&(f=[],es.set(o,f)),f.push({onLoad:t,onError:s})}return o}let a=os("img");function c(){h(),t&&t(this);let f=es.get(this)||[];for(let d=0;d<f.length;d++){let u=f[d];u.onLoad&&u.onLoad(this)}es.delete(this),r.manager.itemEnd(e)}function l(f){h(),s&&s(f),So.remove(`image:${e}`);let d=es.get(this)||[];for(let u=0;u<d.length;u++){let g=d[u];g.onError&&g.onError(f)}es.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),So.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var ei=class extends gs{constructor(e){super(e)}load(e,t,n,s){let r=new Kt,o=new Qo(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},_s=class extends Lt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Tr=class extends _s{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},bl=new bt,nh=new L,ih=new L,wr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ui,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;nh.setFromMatrixPosition(e.matrixWorld),t.position.copy(nh),ih.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ih),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){bl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(bl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===rs||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},xo=new L,vo=new fn,Ln=new L,Ar=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xo,vo,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xo,vo,Ln.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(xo,vo,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xo,vo,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},li=new L,sh=new Me,rh=new Me,$t=class extends Ar{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,sh,rh),t.subVectors(rh,sh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ll=class extends wr{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0}},_n=class extends _s{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ll}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Rr=class extends Ar{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Dl=class extends wr{constructor(){super(new Rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xs=class extends _s{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Dl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ts=-90,ns=1,vs=class extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $t(ts,ns,e,t);s.layers=this.layers,this.add(s);let r=new $t(ts,ns,e,t);r.layers=this.layers,this.add(r);let o=new $t(ts,ns,e,t);o.layers=this.layers,this.add(o);let a=new $t(ts,ns,e,t);a.layers=this.layers,this.add(a);let c=new $t(ts,ns,e,t);c.layers=this.layers,this.add(c);let l=new $t(ts,ns,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},jo=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var dc="\\[\\]\\.:\\/",of=new RegExp("["+dc+"]","g"),fc="[^"+dc+"]",af="[^"+dc.replace("\\.","")+"]",lf=/((?:WC+[\/:])*)/.source.replace("WC",fc),cf=/(WCOD+)?/.source.replace("WCOD",af),hf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fc),uf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fc),df=new RegExp("^"+lf+cf+hf+uf+"$"),ff=["material","materials","bones","map"],Nl=class{constructor(e,t,n){let s=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(of,"")}static parseTrackName(e){let t=df.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ff.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){$e("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;Qe("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=Nl;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var h_=new Float32Array(1);var Cr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ct(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ul=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function pc(i,e,t,n){let s=pf(n);switch(t){case jl:return i*e;case ca:return i*e/s.components*s.byteLength;case ha:return i*e/s.components*s.byteLength;case _i:return i*e*2/s.components*s.byteLength;case ua:return i*e*2/s.components*s.byteLength;case ec:return i*e*3/s.components*s.byteLength;case Rn:return i*e*4/s.components*s.byteLength;case da:return i*e*4/s.components*s.byteLength;case Dr:case Nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ur:case Fr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pa:case ga:return Math.max(i,16)*Math.max(e,8)/4;case fa:case ma:return Math.max(i,8)*Math.max(e,8)/2;case _a:case xa:case ya:case Ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case va:case Or:case Sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ta:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case wa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case La:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Da:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Na:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Fa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Oa:case Ba:case Ha:return Math.ceil(i/4)*Math.ceil(e/4)*16;case za:case ka:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Br:case Ga:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pf(i){switch(i){case nn:case Jl:return{byteLength:1,components:1};case Es:case $l:case An:return{byteLength:2,components:1};case aa:case la:return{byteLength:2,components:4};case wn:case oa:case xn:return{byteLength:4,components:1};case Kl:case Ql:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ea}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ea);function vu(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function mf(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,h);else{f.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<f.length;u++){let g=f[d],y=f[u];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,f[d]=y)}f.length=d+1;for(let u=0,g=f.length;u<g;u++){let y=f[u];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_f=`#ifdef USE_ALPHAHASH
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
#endif`,xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sf=`#ifdef USE_AOMAP
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
#endif`,Ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bf=`#ifdef USE_BATCHING
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
#endif`,Tf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Af=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cf=`#ifdef USE_IRIDESCENCE
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
#endif`,Pf=`#ifdef USE_BUMPMAP
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
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Of=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Bf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Hf=`#define PI 3.141592653589793
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
} // validated`,zf=`vec3 transformedNormal = objectNormal;
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
#endif`,kf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",qf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,np=`#ifdef USE_GRADIENTMAP
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
}`,ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,op=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ap=`#ifdef USE_ENVMAP
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
#endif`,lp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dp=`PhysicalMaterial material;
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
#endif`,fp=`uniform sampler2D dfgLUT;
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
}`,pp=`
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
#endif`,mp=`#if defined( RE_IndirectDiffuse )
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
#endif`,gp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_p=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,xp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tp=`#if defined( USE_POINTS_UV )
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
#endif`,wp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ap=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cp=`#if defined( USE_MORPHCOLORS )
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
#endif`,Pp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ip=`#ifdef USE_MORPHTARGETS
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
#endif`,Lp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Np=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Bp=`#ifdef USE_NORMALMAP
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
#endif`,Hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$p=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,em=`float getShadowMask() {
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
}`,tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nm=`#ifdef USE_SKINNING
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
#endif`,im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sm=`#ifdef USE_SKINNING
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
#endif`,rm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cm=`#ifdef USE_TRANSMISSION
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
#endif`,hm=`#ifdef USE_TRANSMISSION
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gm=`uniform sampler2D t2D;
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
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`uniform float backgroundBlurriness;
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`#include <common>
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
}`,Sm=`#if DEPTH_PACKING == 3200
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
}`,Em=`#define DISTANCE
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
}`,bm=`#define DISTANCE
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`uniform float scale;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Cm=`#include <common>
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Im=`#define LAMBERT
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
}`,Lm=`#define LAMBERT
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
}`,Dm=`#define MATCAP
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
}`,Nm=`#define MATCAP
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
}`,Um=`#define NORMAL
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
}`,Fm=`#define NORMAL
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
}`,Om=`#define PHONG
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
}`,Bm=`#define PHONG
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
}`,Hm=`#define STANDARD
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
}`,zm=`#define STANDARD
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
}`,km=`#define TOON
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
}`,Gm=`#define TOON
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
}`,Vm=`uniform float size;
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
}`,Wm=`uniform vec3 diffuse;
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
}`,Xm=`#include <common>
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
}`,qm=`uniform vec3 color;
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
}`,Ym=`uniform float rotation;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:gf,alphahash_pars_fragment:_f,alphamap_fragment:xf,alphamap_pars_fragment:vf,alphatest_fragment:yf,alphatest_pars_fragment:Mf,aomap_fragment:Sf,aomap_pars_fragment:Ef,batching_pars_vertex:bf,batching_vertex:Tf,begin_vertex:wf,beginnormal_vertex:Af,bsdfs:Rf,iridescence_fragment:Cf,bumpmap_pars_fragment:Pf,clipping_planes_fragment:If,clipping_planes_pars_fragment:Lf,clipping_planes_pars_vertex:Df,clipping_planes_vertex:Nf,color_fragment:Uf,color_pars_fragment:Ff,color_pars_vertex:Of,color_vertex:Bf,common:Hf,defaultnormal_vertex:zf,displacementmap_pars_vertex:kf,displacementmap_vertex:Gf,emissivemap_fragment:Vf,emissivemap_pars_fragment:Wf,colorspace_fragment:Xf,colorspace_pars_fragment:qf,envmap_fragment:Yf,envmap_common_pars_fragment:Zf,envmap_pars_fragment:Jf,envmap_pars_vertex:$f,envmap_physical_pars_fragment:ap,envmap_vertex:Kf,fog_vertex:Qf,fog_pars_vertex:jf,fog_fragment:ep,fog_pars_fragment:tp,gradientmap_pars_fragment:np,lightmap_pars_fragment:ip,lights_lambert_fragment:sp,lights_lambert_pars_fragment:rp,lights_pars_begin:op,lights_toon_fragment:lp,lights_toon_pars_fragment:cp,lights_phong_fragment:hp,lights_phong_pars_fragment:up,lights_physical_fragment:dp,lights_physical_pars_fragment:fp,lights_fragment_begin:pp,lights_fragment_maps:mp,lights_fragment_end:gp,lightprobes_pars_fragment:_p,logdepthbuf_fragment:xp,logdepthbuf_pars_fragment:vp,logdepthbuf_pars_vertex:yp,logdepthbuf_vertex:Mp,map_fragment:Sp,map_pars_fragment:Ep,map_particle_fragment:bp,map_particle_pars_fragment:Tp,metalnessmap_fragment:wp,metalnessmap_pars_fragment:Ap,morphinstance_vertex:Rp,morphcolor_vertex:Cp,morphnormal_vertex:Pp,morphtarget_pars_vertex:Ip,morphtarget_vertex:Lp,normal_fragment_begin:Dp,normal_fragment_maps:Np,normal_pars_fragment:Up,normal_pars_vertex:Fp,normal_vertex:Op,normalmap_pars_fragment:Bp,clearcoat_normal_fragment_begin:Hp,clearcoat_normal_fragment_maps:zp,clearcoat_pars_fragment:kp,iridescence_pars_fragment:Gp,opaque_fragment:Vp,packing:Wp,premultiplied_alpha_fragment:Xp,project_vertex:qp,dithering_fragment:Yp,dithering_pars_fragment:Zp,roughnessmap_fragment:Jp,roughnessmap_pars_fragment:$p,shadowmap_pars_fragment:Kp,shadowmap_pars_vertex:Qp,shadowmap_vertex:jp,shadowmask_pars_fragment:em,skinbase_vertex:tm,skinning_pars_vertex:nm,skinning_vertex:im,skinnormal_vertex:sm,specularmap_fragment:rm,specularmap_pars_fragment:om,tonemapping_fragment:am,tonemapping_pars_fragment:lm,transmission_fragment:cm,transmission_pars_fragment:hm,uv_pars_fragment:um,uv_pars_vertex:dm,uv_vertex:fm,worldpos_vertex:pm,background_vert:mm,background_frag:gm,backgroundCube_vert:_m,backgroundCube_frag:xm,cube_vert:vm,cube_frag:ym,depth_vert:Mm,depth_frag:Sm,distance_vert:Em,distance_frag:bm,equirect_vert:Tm,equirect_frag:wm,linedashed_vert:Am,linedashed_frag:Rm,meshbasic_vert:Cm,meshbasic_frag:Pm,meshlambert_vert:Im,meshlambert_frag:Lm,meshmatcap_vert:Dm,meshmatcap_frag:Nm,meshnormal_vert:Um,meshnormal_frag:Fm,meshphong_vert:Om,meshphong_frag:Bm,meshphysical_vert:Hm,meshphysical_frag:zm,meshtoon_vert:km,meshtoon_frag:Gm,points_vert:Vm,points_frag:Wm,shadow_vert:Xm,shadow_frag:qm,sprite_vert:Ym,sprite_frag:Zm},Ce={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Gn={basic:{uniforms:Qt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Qt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Qt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Qt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Qt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new We(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Qt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Qt([Ce.points,Ce.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Qt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Qt([Ce.common,Ce.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Qt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Qt([Ce.sprite,Ce.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:Qt([Ce.common,Ce.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:Qt([Ce.lights,Ce.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Gn.physical={uniforms:Qt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var Va={r:0,b:0,g:0},Jm=new bt,yu=new st;yu.set(-1,0,0,0,1,0,0,0,1);function $m(i,e,t,n,s,r){let o=new We(0),a=s===!0?0:1,c,l,h=null,f=0,d=null;function u(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){let x=v.backgroundBlurriness>0;E=e.get(E,x)}return E}function g(v){let E=!1,x=u(v);x===null?m(o,a):x&&x.isColor&&(m(x,1),E=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(v,E){let x=u(E);x&&x.isCubeTexture?(l===void 0&&(l=new le(new He(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Ui(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Jm.makeRotationFromEuler(E.backgroundRotation)).transpose(),x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(yu),l.material.toneMapped=pt.getTransfer(x.colorSpace)!==yt,(h!==x||f!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new le(new zt(2,2),new Bn({name:"BackgroundMaterial",uniforms:Ui(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=pt.getTransfer(x.colorSpace)!==yt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,E){v.getRGB(Va,uc(i)),t.buffers.color.setClear(Va.r,Va.g,Va.b,E,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,E=1){o.set(v),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:g,addToRenderList:y,dispose:p}}function Km(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(T,D,F,I,H){let z=!1,V=f(T,I,F,D);r!==V&&(r=V,l(r.object)),z=u(T,I,F,H),z&&g(T,I,F,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,x(T,D,F,I),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function l(T){return i.bindVertexArray(T)}function h(T){return i.deleteVertexArray(T)}function f(T,D,F,I){let H=I.wireframe===!0,z=n[D.id];z===void 0&&(z={},n[D.id]=z);let V=T.isInstancedMesh===!0?T.id:0,ce=z[V];ce===void 0&&(ce={},z[V]=ce);let q=ce[F.id];q===void 0&&(q={},ce[F.id]=q);let j=q[H];return j===void 0&&(j=d(c()),q[H]=j),j}function d(T){let D=[],F=[],I=[];for(let H=0;H<t;H++)D[H]=0,F[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:I,object:T,attributes:{},index:null}}function u(T,D,F,I){let H=r.attributes,z=D.attributes,V=0,ce=F.getAttributes();for(let q in ce)if(ce[q].location>=0){let ae=H[q],Ee=z[q];if(Ee===void 0&&(q==="instanceMatrix"&&T.instanceMatrix&&(Ee=T.instanceMatrix),q==="instanceColor"&&T.instanceColor&&(Ee=T.instanceColor)),ae===void 0||ae.attribute!==Ee||Ee&&ae.data!==Ee.data)return!0;V++}return r.attributesNum!==V||r.index!==I}function g(T,D,F,I){let H={},z=D.attributes,V=0,ce=F.getAttributes();for(let q in ce)if(ce[q].location>=0){let ae=z[q];ae===void 0&&(q==="instanceMatrix"&&T.instanceMatrix&&(ae=T.instanceMatrix),q==="instanceColor"&&T.instanceColor&&(ae=T.instanceColor));let Ee={};Ee.attribute=ae,ae&&ae.data&&(Ee.data=ae.data),H[q]=Ee,V++}r.attributes=H,r.attributesNum=V,r.index=I}function y(){let T=r.newAttributes;for(let D=0,F=T.length;D<F;D++)T[D]=0}function m(T){p(T,0)}function p(T,D){let F=r.newAttributes,I=r.enabledAttributes,H=r.attributeDivisors;F[T]=1,I[T]===0&&(i.enableVertexAttribArray(T),I[T]=1),H[T]!==D&&(i.vertexAttribDivisor(T,D),H[T]=D)}function v(){let T=r.newAttributes,D=r.enabledAttributes;for(let F=0,I=D.length;F<I;F++)D[F]!==T[F]&&(i.disableVertexAttribArray(F),D[F]=0)}function E(T,D,F,I,H,z,V){V===!0?i.vertexAttribIPointer(T,D,F,H,z):i.vertexAttribPointer(T,D,F,I,H,z)}function x(T,D,F,I){y();let H=I.attributes,z=F.getAttributes(),V=D.defaultAttributeValues;for(let ce in z){let q=z[ce];if(q.location>=0){let j=H[ce];if(j===void 0&&(ce==="instanceMatrix"&&T.instanceMatrix&&(j=T.instanceMatrix),ce==="instanceColor"&&T.instanceColor&&(j=T.instanceColor)),j!==void 0){let ae=j.normalized,Ee=j.itemSize,Ve=e.get(j);if(Ve===void 0)continue;let J=Ve.buffer,_e=Ve.type,Ae=Ve.bytesPerElement,Oe=_e===i.INT||_e===i.UNSIGNED_INT||j.gpuType===oa;if(j.isInterleavedBufferAttribute){let ie=j.data,Pe=ie.isInterleavedBuffer===!0?ie.stride:ie.itemSize,at=j.offset;if(ie.isInstancedInterleavedBuffer||ie.isInstancedBufferAttribute){for(let Le=0;Le<q.locationSize;Le++)p(q.location+Le,ie.meshPerAttribute);T.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Le=0;Le<q.locationSize;Le++)m(q.location+Le);i.bindBuffer(i.ARRAY_BUFFER,J);for(let Le=0;Le<q.locationSize;Le++)E(q.location+Le,Ee/q.locationSize,_e,ae,Pe*Ae,(at+Ee/q.locationSize*Le)*Ae,Oe)}else{if(j.isInstancedBufferAttribute){for(let ie=0;ie<q.locationSize;ie++)p(q.location+ie,j.meshPerAttribute);T.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ie=0;ie<q.locationSize;ie++)m(q.location+ie);i.bindBuffer(i.ARRAY_BUFFER,J);for(let ie=0;ie<q.locationSize;ie++)E(q.location+ie,Ee/q.locationSize,_e,ae,Ee*Ae,Ee/q.locationSize*ie*Ae,Oe)}}else if(V!==void 0){let ae=V[ce];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(q.location,ae);break;case 3:i.vertexAttrib3fv(q.location,ae);break;case 4:i.vertexAttrib4fv(q.location,ae);break;default:i.vertexAttrib1fv(q.location,ae)}}}}v()}function R(){N();for(let T in n){let D=n[T];for(let F in D){let I=D[F];for(let H in I){let z=I[H];for(let V in z)h(z[V].object),delete z[V];delete I[H]}}delete n[T]}}function A(T){if(n[T.id]===void 0)return;let D=n[T.id];for(let F in D){let I=D[F];for(let H in I){let z=I[H];for(let V in z)h(z[V].object),delete z[V];delete I[H]}}delete n[T.id]}function _(T){for(let D in n){let F=n[D];for(let I in F){let H=F[I];if(H[T.id]===void 0)continue;let z=H[T.id];for(let V in z)h(z[V].object),delete z[V];delete H[T.id]}}}function M(T){for(let D in n){let F=n[D],I=T.isInstancedMesh===!0?T.id:0,H=F[I];if(H!==void 0){for(let z in H){let V=H[z];for(let ce in V)h(V[ce].object),delete V[ce];delete H[z]}delete F[I],Object.keys(F).length===0&&delete n[D]}}}function N(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function Qm(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let u=0;u<h;u++)d+=l[u];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function jm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==Rn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let M=_===An&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==nn&&_!==xn&&!M&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&($e("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&$e("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:x,maxSamples:R,samples:A}}function eg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new bn,a=new st,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||s;return s=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){let g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let v=r?0:n,E=v*4,x=p.clippingState||null;c.value=x,x=h(g,d,E,u);for(let R=0;R!==E;++R)x[R]=t[R];p.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,u,g){let y=f!==null?f.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=u+y*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,x=u;E!==y;++E,x+=4)o.copy(f[E]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var Gr=class extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new rr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new He(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:Pi});r.uniforms.tEquirect.value=t;let o=new le(s,r),a=t.minFilter;return t.minFilter===ti&&(t.minFilter=jt),new vs(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Qh=256,tg=3,ng=20,Mu=256,Su=16,ig=3,sg=new L,rg=new We,Ts=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new vs(1,10,null),this._boxMesh=new le(new He(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=sg}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,d=c.autoClearColor,u=c.autoClearDepth,g=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(rg));let m=new vs(n,s,h);return m.position.copy(a),m.update(c,e),c.autoClear=f,c.autoClearColor=d,c.autoClearDepth=u,c.autoClearStencil=g,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Qh,lc(e))}_fromTexture(e,t){e.mapping===Li||e.mapping===Ss?this._setSize(e.image.length===0?Qh:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=jh(e,!1,!1),n=Math.log2(e)-tg;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=jh(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Li||e.mapping===Ss?(this._cubemapMaterial===null&&(this._cubemapMaterial=tu()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=eu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=og(),this._integrationMaterial=ag());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Su);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-ig)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(Mu*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=lg());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function jh(i,e,t){return new Gr(i,{minFilter:ti,generateMipmaps:e,type:An,colorSpace:$s,depthBuffer:t})}function Vr(i,e,t){return new Bn({name:i,uniforms:e,vertexShader:ut.cube_vert,fragmentShader:t,side:Yt,blending:Pi,depthTest:!1,depthWrite:!1})}function og(){return Vr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Mu}u

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
	`)}function ag(){return Vr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Su}},`

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
	`)}function lg(){return Vr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ng}
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
	`)}function eu(){return Vr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function tu(){return Vr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function cg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,u=!1){return d==null?null:u?o(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===ia||u===sa)if(e.has(d)){let g=e.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new Gr(g.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",l),a(y.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let u=d.mapping,g=u===ia||u===sa,y=u===Li||u===Ss;if(g||y){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Ts(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let v=d.image;return g&&v&&v.height>0||y&&v&&c(v)?(n===null&&(n=new Ts(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,u){return u===ia?d.mapping=Li:u===sa&&(d.mapping=Ss),d}function c(d){let u=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&u++;return u===g}function l(d){let u=d.target;u.removeEventListener("dispose",l);let g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function hg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ti("WebGLRenderer: "+n+" extension not supported."),s}}}function ug(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(g=>delete s[g]);function a(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",a),delete s[g.id],o.unregister(g);let y=r.get(g);y&&(e.remove(y),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",a),s[y.id]=new WeakRef(y),o.register(y,y.id,y),t.memory.geometries++),y}function h(g){let y=g.attributes;for(let m in y)e.update(y[m],i.ARRAY_BUFFER)}function f(g){let y=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let v=y!==null?y.array.length:m.array.length/3-1,E=m.count>=65535?nr:tr,x=new E(Math.ceil(v/3)*6,1),R=x.array;if(y!==null){let _=y.array;p=y.version;for(let M=0,N=0;M<v;M+=3){let w=_[M+0],T=_[M+1],D=_[M+2];R[N++]=w,R[N++]=T,R[N++]=T,R[N++]=D,R[N++]=D,R[N++]=w}}else{p=m.version;for(let _=0,M=0;_<v;_+=3){let N=_+0,w=_+1,T=_+2;R[M++]=N,R[M++]=w,R[M++]=w,R[M++]=T,R[M++]=T,R[M++]=N}}x.version=p;let A=r.get(g);A&&e.remove(A),r.set(g,x)}function d(g){let y=r.get(g);if(y){let m=g.index;m!==null&&y.version<m.version&&f(g)}else f(g);return r.get(g)}function u(){for(let g in s){let y=s[g].deref();y!==void 0&&c(y)}}return{get:l,update:h,getWireframeAttribute:d,dispose:u}}function dg(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,u){u!==0&&(i.drawElementsInstanced(n,d,r,f*o,u),t.update(d,n,u))}function h(f,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,u);let y=0;for(let m=0;m<u;m++)y+=d[m];t.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function fg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Qe("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function pg(i,e,t){let n=new WeakMap,s=new It;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==f){let N=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",N)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],E=0;u===!0&&(E=1),g===!0&&(E=2),y===!0&&(E=3);let x=a.attributes.position.count*E,R=1;x>e.maxTextureSize&&(R=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let A=new Float32Array(x*R*4*f),_=new Qs(A,x,R,f);_.type=xn,_.needsUpdate=!0;let M=E*4;for(let w=0;w<f;w++){let T=m[w],D=p[w],F=v[w],I=x*R*4*w;for(let H=0;H<T.count;H++){let z=H*M;u===!0&&(s.fromBufferAttribute(T,H),A[I+z+0]=s.x,A[I+z+1]=s.y,A[I+z+2]=s.z,A[I+z+3]=0),g===!0&&(s.fromBufferAttribute(D,H),A[I+z+4]=s.x,A[I+z+5]=s.y,A[I+z+6]=s.z,A[I+z+7]=0),y===!0&&(s.fromBufferAttribute(F,H),A[I+z+8]=s.x,A[I+z+9]=s.y,A[I+z+10]=s.z,A[I+z+11]=F.itemSize===4?s.w:1)}}d={count:f,texture:_,size:new Me(x,R)},n.set(a,d),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let u=0;for(let y=0;y<l.length;y++)u+=l[y];let g=a.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function mg(i,e,t,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var gg={[Gl]:"LINEAR_TONE_MAPPING",[Vl]:"REINHARD_TONE_MAPPING",[Wl]:"CINEON_TONE_MAPPING",[Ir]:"ACES_FILMIC_TONE_MAPPING",[ql]:"AGX_TONE_MAPPING",[Yl]:"NEUTRAL_TONE_MAPPING",[Xl]:"CUSTOM_TONE_MAPPING"};function _g(i,e,t,n,s,r){let o=new on(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,h=new Xt;h.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new dt([0,2,0,0,2,0],2));let f=new zo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new le(h,f),u=new Rr(-1,1,1,-1,0,1),g=null,y=null,m=!1,p,v=null,E=[],x=!1;this.setSize=function(R,A){o.setSize(R,A),a!==null&&a.setSize(R,A),c!==null&&c.setSize(R,A);for(let _=0;_<E.length;_++){let M=E[_];M.setSize&&M.setSize(R,A)}},this.setEffects=function(R){E=R,x=E.length>0&&E[0].isRenderPass===!0;let A=o.width,_=o.height;E.length>0&&a===null&&(a=new on(A,_,{type:An,depthBuffer:!1,stencilBuffer:!1}),c=new on(A,_,{type:An,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&E.some(N=>N.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&l===null&&(l=new Qn(A,_),r===!0&&(l.format=ni,l.type=Di)),o.dispose(),o.depthTexture=M?l:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let N=0;N<E.length;N++){let w=E[N];w.setSize&&w.setSize(A,_),M&&w.needsDepthTexture===!0&&w.setDepthTexture&&w.setDepthTexture(l)}},this.begin=function(R,A){if(m||R.toneMapping===zn&&E.length===0)return!1;if(v=A,A!==null){let _=A.width,M=A.height;(o.width!==_||o.height!==M)&&this.setSize(_,M)}return x===!1&&R.setRenderTarget(o),p=R.toneMapping,R.toneMapping=zn,!0},this.hasRenderPass=function(){return x},this.end=function(R,A){R.toneMapping=p,m=!0;let _=o,M=a;for(let N=0;N<E.length;N++){let w=E[N];w.enabled!==!1&&(w.render(R,M,_,A),w.needsSwap!==!1&&(_=M,M=M===a?c:a))}if(g!==R.outputColorSpace||y!==R.toneMapping){g=R.outputColorSpace,y=R.toneMapping,f.defines={},pt.getTransfer(g)===yt&&(f.defines.SRGB_TRANSFER="");let N=gg[y];N&&(f.defines[N]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,R.setRenderTarget(v),R.render(d,u),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}var Eu=new Kt,bu=new Qn(1,1),Tu=new or(1),wu=new Qs,Au=new No,Ru=new rr,nu=[],iu=[],su=new Float32Array(16),ru=new Float32Array(9),ou=new Float32Array(4);function ws(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=nu[s];if(r===void 0&&(r=new Float32Array(s),nu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qa(i,e){let t=iu[e];t===void 0&&(t=new Int32Array(e),iu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function xg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}function yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}function Mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}function Sg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;ou.set(n),i.uniformMatrix2fv(this.addr,!1,ou),Gt(t,n)}}function Eg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;ru.set(n),i.uniformMatrix3fv(this.addr,!1,ru),Gt(t,n)}}function bg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;su.set(n),i.uniformMatrix4fv(this.addr,!1,su),Gt(t,n)}}function Tg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}function Ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}function Rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}function Cg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}function Ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}function Lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}function Ya(i){return i.version===0&&(i.compareFunction=ic,i.needsUpdate=!0),i}function Dg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ya(bu):r=Eu,t.setTexture2D(e||r,s)}function Ng(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Au,s)}function Ug(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ya(Tu):r=Ru,t.setTextureCube(e||r,s)}function Fg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||wu,s)}function Og(i){switch(i){case 5126:return xg;case 35664:return vg;case 35665:return yg;case 35666:return Mg;case 35674:return Sg;case 35675:return Eg;case 35676:return bg;case 5124:case 35670:return Tg;case 35667:case 35671:return wg;case 35668:case 35672:return Ag;case 35669:case 35673:return Rg;case 5125:return Cg;case 36294:return Pg;case 36295:return Ig;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Fg}}function Bg(i,e){i.uniform1fv(this.addr,e)}function Hg(i,e){let t=ws(e,this.size,2);i.uniform2fv(this.addr,t)}function zg(i,e){let t=ws(e,this.size,3);i.uniform3fv(this.addr,t)}function kg(i,e){let t=ws(e,this.size,4);i.uniform4fv(this.addr,t)}function Gg(i,e){let t=ws(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Vg(i,e){let t=ws(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Wg(i,e){let t=ws(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Xg(i,e){i.uniform1iv(this.addr,e)}function qg(i,e){i.uniform2iv(this.addr,e)}function Yg(i,e){i.uniform3iv(this.addr,e)}function Zg(i,e){i.uniform4iv(this.addr,e)}function Jg(i,e){i.uniform1uiv(this.addr,e)}function $g(i,e){i.uniform2uiv(this.addr,e)}function Kg(i,e){i.uniform3uiv(this.addr,e)}function Qg(i,e){i.uniform4uiv(this.addr,e)}function jg(i,e,t){let n=this.cache,s=e.length,r=qa(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ya(bu):o=Eu;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function e0(i,e,t){let n=this.cache,s=e.length,r=qa(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Au,r[o])}function t0(i,e,t){let n=this.cache,s=e.length,r=qa(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Ya(Tu):o=Ru;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function n0(i,e,t){let n=this.cache,s=e.length,r=qa(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||wu,r[o])}function i0(i){switch(i){case 5126:return Bg;case 35664:return Hg;case 35665:return zg;case 35666:return kg;case 35674:return Gg;case 35675:return Vg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return Zg;case 5125:return Jg;case 36294:return $g;case 36295:return Kg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return e0;case 35680:case 36300:case 36308:case 36293:return t0;case 36289:case 36303:case 36311:case 36292:return n0}}var _c=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Og(t.type)}},xc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=i0(t.type)}},vc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},mc=/(\w+)(\])?(\[|\.)?/g;function au(i,e){i.seq.push(e),i.map[e.id]=e}function s0(i,e,t){let n=i.name,s=n.length;for(mc.lastIndex=0;;){let r=mc.exec(n),o=mc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){au(t,l===void 0?new _c(a,i,e):new xc(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new vc(a),au(t,f)),t=f}}}var bs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);s0(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function lu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var r0=37297,o0=0;function a0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var cu=new st;function l0(i){pt._getMatrix(cu,pt.workingColorSpace,i);let e=`mat3( ${cu.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(i)){case Ks:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function hu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+a0(i.getShaderSource(e),a)}else return r}function c0(i,e){let t=l0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var h0={[Gl]:"Linear",[Vl]:"Reinhard",[Wl]:"Cineon",[Ir]:"ACESFilmic",[ql]:"AgX",[Yl]:"Neutral",[Xl]:"Custom"};function u0(i,e){let t=h0[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Wa=new L;function d0(){pt.getLuminanceCoefficients(Wa);let i=Wa.x.toFixed(4),e=Wa.y.toFixed(4),t=Wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function p0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function m0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function kr(i){return i!==""}function uu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function du(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var g0=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(i){return i.replace(g0,_0)}function _0(i,e){let t=ut[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return yc(t)}var x0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fu(i){return i.replace(x0,v0)}function v0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var y0={[Pr]:"SHADOWMAP_TYPE_PCF",[ys]:"SHADOWMAP_TYPE_VSM"};function M0(i){return y0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var S0={[Ss]:"ENVMAP_MODE_REFRACTION"};function E0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":S0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var b0={[na]:"ENVMAP_BLENDING_MULTIPLY",[wh]:"ENVMAP_BLENDING_MIX",[Ah]:"ENVMAP_BLENDING_ADD"};function T0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":b0[i.combine]||"ENVMAP_BLENDING_NONE"}function w0(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=M0(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=E0(t),f=T0(t),d=f0(t),u=p0(r),g=s.createProgram(),y,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(kr).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(kr).join(`
`),m.length>0&&(m+=`
`)):(y=[pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),m=[pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?ut.tonemapping_pars_fragment:"",t.toneMapping!==zn?u0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,c0("linearToOutputTexel",t.outputColorSpace),d0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(kr).join(`
`)),o=yc(o),o=uu(o,t),o=du(o,t),a=yc(a),a=uu(a,t),a=du(a,t),o=fu(o),a=fu(a),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",t.glslVersion===rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=p+y+o,E=p+m+a,x=lu(s,s.VERTEX_SHADER,v),R=lu(s,s.FRAGMENT_SHADER,E);s.attachShader(g,x),s.attachShader(g,R),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(w){if(i.debug.checkShaderErrors){let T=s.getProgramInfoLog(g)||"",D=s.getShaderInfoLog(x)||"",F=s.getShaderInfoLog(R)||"",I=T.trim(),H=D.trim(),z=F.trim(),V=!0,ce=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,x,R);else{let q=hu(s,x,"vertex"),j=hu(s,R,"fragment");Qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+I+`
`+q+`
`+j)}else I!==""?$e("WebGLProgram: Program Info Log:",I):(H===""||z==="")&&(ce=!1);ce&&(w.diagnostics={runnable:V,programLog:I,vertexShader:{log:H,prefix:y},fragmentShader:{log:z,prefix:m}})}s.deleteShader(x),s.deleteShader(R),_=new bs(s,g),M=m0(s,g)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(g,r0)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=o0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=x,this.fragmentShader=R,this}var A0=0,Mc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Sc(e),t.set(e,n)),n}},Sc=class{constructor(e){this.id=A0++,this.code=e,this.usedTimes=0}};function R0(i){return i===_i||i===Or||i===Br}function C0(i,e,t,n,s,r){let o=new js,a=new Mc,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,M,N,w,T,D){let F=w.fog,I=T.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?w.environment:null,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=e.get(_.envMap||H,z),ce=d[_.type],q=n.precision;_.precision!==null&&(q=n.getMaxPrecision(_.precision),q!==_.precision&&$e("WebGLProgram.getParameters:",_.precision,"not supported, using",q,"instead."));let j=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ae=j!==void 0?j.length:0,Ee=0;I.morphAttributes.position!==void 0&&(Ee=1),I.morphAttributes.normal!==void 0&&(Ee=2),I.morphAttributes.color!==void 0&&(Ee=3);let Ve,J,_e,Ae;if(ce){let ye=Gn[ce];Ve=ye.vertexShader,J=ye.fragmentShader}else{Ve=_.vertexShader,J=_.fragmentShader;let ye=a.getVertexShaderStage(_),mt=a.getFragmentShaderStage(_);a.update(_,ye,mt),_e=ye.id,Ae=mt.id}let Oe=i.getRenderTarget(),ie=i.state.buffers.depth.getReversed(),Pe=T.isInstancedMesh===!0,at=T.isBatchedMesh===!0,Le=!!_.map,Xe=!!_.matcap,Ie=!!V,se=Ie&&V.isPMREMTexture===!0,oe=!!_.aoMap,fe=!!_.lightMap,we=!!_.bumpMap&&_.wireframe===!1,ve=!!_.normalMap,Ye=!!_.displacementMap,Ne=!!_.emissiveMap,je=!!_.metalnessMap,tt=!!_.roughnessMap,lt=_.anisotropy>0,O=_.clearcoat>0,xt=_.diffuseRoughness>0,nt=_.dispersion>0,et=_.retroreflectivity>0,xe=_.iridescence>0,gt=_.sheen>0,ze=_.transmission>0,Ge=lt&&!!_.anisotropyMap,C=O&&!!_.clearcoatMap,S=O&&!!_.clearcoatNormalMap,k=O&&!!_.clearcoatRoughnessMap,de=xt&&!!_.diffuseRoughnessMap,re=xe&&!!_.iridescenceMap,Z=xe&&!!_.iridescenceThicknessMap,ue=gt&&!!_.sheenColorMap,$=gt&&!!_.sheenRoughnessMap,ee=!!_.specularMap,pe=!!_.specularColorMap,U=!!_.specularIntensityMap,K=ze&&!!_.transmissionMap,P=ze&&!!_.thicknessMap,W=!!_.gradientMap,G=!!_.alphaMap,te=_.alphaTest>0,he=!!_.alphaHash,De=!!_.extensions,ne=zn;_.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(ne=i.toneMapping);let Te=se?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Je={shaderID:ce,shaderType:_.type,shaderName:_.name,vertexShader:Ve,fragmentShader:J,defines:_.defines,customVertexShaderID:_e,customFragmentShaderID:Ae,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:q,batching:at,batchingColor:at&&T._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&T.instanceColor!==null,instancingMorph:Pe&&T.morphTexture!==null,outputColorSpace:Oe===null?i.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:pt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Le,matcap:Xe,envMap:Ie,envMapMode:Ie&&V.mapping,envMapPMREM:se,envMapMaxLod:se?Te.length-1:null,envMapSize:se?Te[0].width:null,aoMap:oe,lightMap:fe,bumpMap:we,normalMap:ve,displacementMap:Ye,emissiveMap:Ne,normalMapObjectSpace:ve&&_.normalMapType===Ph,normalMapTangentSpace:ve&&_.normalMapType===Hr,packedNormalMap:ve&&_.normalMapType===Hr&&R0(_.normalMap.format),metalnessMap:je,roughnessMap:tt,anisotropy:lt,anisotropyMap:Ge,clearcoat:O,clearcoatMap:C,clearcoatNormalMap:S,clearcoatRoughnessMap:k,diffuseRoughness:xt,diffuseRoughnessMap:de,dispersion:nt,retroreflection:et,iridescence:xe,iridescenceMap:re,iridescenceThicknessMap:Z,sheen:gt,sheenColorMap:ue,sheenRoughnessMap:$,specularMap:ee,specularColorMap:pe,specularIntensityMap:U,transmission:ze,transmissionMap:K,thicknessMap:P,gradientMap:W,opaque:_.transparent===!1&&_.blending===Ms&&_.alphaToCoverage===!1,alphaMap:G,alphaTest:te,alphaHash:he,combine:_.combine,mapUv:Le&&u(_.map.channel),aoMapUv:oe&&u(_.aoMap.channel),lightMapUv:fe&&u(_.lightMap.channel),bumpMapUv:we&&u(_.bumpMap.channel),normalMapUv:ve&&u(_.normalMap.channel),displacementMapUv:Ye&&u(_.displacementMap.channel),emissiveMapUv:Ne&&u(_.emissiveMap.channel),metalnessMapUv:je&&u(_.metalnessMap.channel),roughnessMapUv:tt&&u(_.roughnessMap.channel),anisotropyMapUv:Ge&&u(_.anisotropyMap.channel),clearcoatMapUv:C&&u(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&u(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&u(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:de&&u(_.diffuseRoughnessMap.channel),iridescenceMapUv:re&&u(_.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&u(_.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&u(_.sheenColorMap.channel),sheenRoughnessMapUv:$&&u(_.sheenRoughnessMap.channel),specularMapUv:ee&&u(_.specularMap.channel),specularColorMapUv:pe&&u(_.specularColorMap.channel),specularIntensityMapUv:U&&u(_.specularIntensityMap.channel),transmissionMapUv:K&&u(_.transmissionMap.channel),thicknessMapUv:P&&u(_.thicknessMap.channel),alphaMapUv:G&&u(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ve||lt),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:T.isPoints===!0&&!!I.attributes.uv&&(Le||G),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&ve===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ie,skinning:T.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Ee,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:D.filter(ye=>ye.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:Le&&_.map.isVideoTexture===!0&&pt.getTransfer(_.map.colorSpace)===yt,decodeVideoTextureEmissive:Ne&&_.emissiveMap.isVideoTexture===!0&&pt.getTransfer(_.emissiveMap.colorSpace)===yt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===cn,flipSided:_.side===Yt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:De&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&_.extensions.multiDraw===!0||at)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Je.vertexUv1s=c.has(1),Je.vertexUv2s=c.has(2),Je.vertexUv3s=c.has(3),c.clear(),Je}function y(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)M.push(N),M.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(m(M,_),p(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function m(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function p(_,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function v(_){let M=d[_.type],N;if(M){let w=Gn[M];N=Jh.clone(w.uniforms)}else N=_.uniforms;return N}function E(_,M){let N=h.get(M);return N!==void 0?++N.usedTimes:(N=new w0(i,M,_,s),l.push(N),h.set(M,N)),N}function x(_){if(--_.usedTimes===0){let M=l.indexOf(_);l[M]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function R(_){a.remove(_)}function A(){a.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:v,acquireProgram:E,releaseProgram:x,releaseShaderCache:R,programs:l,dispose:A}}function P0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function I0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function mu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function a(d,u,g,y,m,p){let v=i[e];return v===void 0?(v={id:d.id,object:d,geometry:u,material:g,materialVariant:o(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:p},i[e]=v):(v.id=d.id,v.object=d,v.geometry=u,v.material=g,v.materialVariant=o(d),v.groupOrder=y,v.renderOrder=d.renderOrder,v.z=m,v.group=p),e++,v}function c(d,u,g,y,m,p,v){v.reversedDepth===!0&&(m=-m);let E=a(d,u,g,y,m,p);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):t.push(E)}function l(d,u,g,y,m,p){let v=a(d,u,g,y,m,p);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):t.unshift(v)}function h(d,u){t.length>1&&t.sort(d||I0),n.length>1&&n.sort(u||mu),s.length>1&&s.sort(u||mu)}function f(){for(let d=e,u=i.length;d<u;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function L0(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new gu,i.set(n,[o])):s>=r.length?(o=new gu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function D0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new We};break;case"SpotLight":t={position:new L,direction:new L,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function N0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var U0=0;function F0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function O0(i){let e=new D0,t=N0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new bt,o=new bt;function a(l){let h=0,f=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let u=0,g=0,y=0,m=0,p=0,v=0,E=0,x=0,R=0,A=0,_=0,M=0,N=0,w=0;l.sort(F0);for(let D=0,F=l.length;D<F;D++){let I=l[D],H=I.color,z=I.intensity,V=I.distance,ce=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===_i?ce=I.shadow.map.texture:ce=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=H.r*z,f+=H.g*z,d+=H.b*z;else if(I.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(I.sh.coefficients[q],z);w++}else if(I.isSunLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,ae=t.get(I);ae.shadowIntensity=j.intensity,ae.shadowBias=j.bias,ae.shadowNormalBias=j.normalBias,ae.shadowRadius=j.radius,ae.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=ae,n.sunShadowMap[g]=ce;let Ee=j.getViewportCount();for(let Ve=0;Ve<Ee;Ve++)n.sunShadowMatrix[y+Ve]=j.getMatrix(Ve),n.sunShadowCascade[y+Ve]=j._cascadeData[Ve];y+=Ee,g++}n.sun[u]=q,u++}else if(I.isDirectionalLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,ae=t.get(I);ae.shadowIntensity=j.intensity,ae.shadowBias=j.bias,ae.shadowNormalBias=j.normalBias,ae.shadowRadius=j.radius,ae.shadowMapSize=j.mapSize,n.directionalShadow[m]=ae,n.directionalShadowMap[m]=ce,n.directionalShadowMatrix[m]=I.shadow.matrix,R++}n.directional[m]=q,m++}else if(I.isSpotLight){let q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(H).multiplyScalar(z),q.distance=V,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,n.spot[v]=q;let j=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,j.updateMatrices(I),I.castShadow&&N++),n.spotLightMatrix[v]=j.matrix,I.castShadow){let ae=t.get(I);ae.shadowIntensity=j.intensity,ae.shadowBias=j.bias,ae.shadowNormalBias=j.normalBias,ae.shadowRadius=j.radius,ae.shadowMapSize=j.mapSize,n.spotShadow[v]=ae,n.spotShadowMap[v]=ce,_++}v++}else if(I.isRectAreaLight){let q=e.get(I);q.color.copy(H).multiplyScalar(z),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=q,E++}else if(I.isPointLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let j=I.shadow,ae=t.get(I);ae.shadowIntensity=j.intensity,ae.shadowBias=j.bias,ae.shadowNormalBias=j.normalBias,ae.shadowRadius=j.radius,ae.shadowMapSize=j.mapSize,ae.shadowCameraNear=j.camera.near,ae.shadowCameraFar=j.camera.far,n.pointShadow[p]=ae,n.pointShadowMap[p]=ce,n.pointShadowMatrix[p]=I.shadow.matrix,A++}n.point[p]=q,p++}else if(I.isHemisphereLight){let q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(z),q.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[x]=q,x++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let T=n.hash;(T.sunLength!==u||T.directionalLength!==m||T.pointLength!==p||T.spotLength!==v||T.rectAreaLength!==E||T.hemiLength!==x||T.numSunShadows!==g||T.numDirectionalShadows!==R||T.numPointShadows!==A||T.numSpotShadows!==_||T.numSpotMaps!==M||T.numLightProbes!==w)&&(n.sun.length=u,n.directional.length=m,n.spot.length=v,n.rectArea.length=E,n.point.length=p,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+M-N,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=w,T.sunLength=u,T.directionalLength=m,T.pointLength=p,T.spotLength=v,T.rectAreaLength=E,T.hemiLength=x,T.numSunShadows=g,T.numDirectionalShadows=R,T.numPointShadows=A,T.numSpotShadows=_,T.numSpotMaps=M,T.numLightProbes=w,n.version=U0++)}function c(l,h){let f=0,d=0,u=0,g=0,y=0,m=0,p=h.matrixWorldInverse;for(let v=0,E=l.length;v<E;v++){let x=l[v];if(x.isSunLight){let R=n.sun[f];R.direction.setFromMatrixPosition(x.matrixWorld),R.direction.transformDirection(p),f++}else if(x.isDirectionalLight){let R=n.directional[d];R.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),d++}else if(x.isSpotLight){let R=n.spot[g];R.position.setFromMatrixPosition(x.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),g++}else if(x.isRectAreaLight){let R=n.rectArea[y];R.position.setFromMatrixPosition(x.matrixWorld),R.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),R.halfWidth.set(x.width*.5,0,0),R.halfHeight.set(0,x.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),y++}else if(x.isPointLight){let R=n.point[u];R.position.setFromMatrixPosition(x.matrixWorld),R.position.applyMatrix4(p),u++}else if(x.isHemisphereLight){let R=n.hemi[m];R.direction.setFromMatrixPosition(x.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:n}}function _u(i){let e=new O0(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):t.push(f)}function a(f){n.push(f)}function c(){e.setup(t),s.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function l(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function B0(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new _u(i),e.set(s,[a])):r>=o.length?(a=new _u(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var H0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z0=`uniform sampler2D shadow_pass;
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
}`,k0=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],G0=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],xu=new bt,zr=new L,gc=new L;function V0(i,e,t){let n=new ui,s=new Me,r=new Me,o=new It,a=new ko,c=new Go,l={},h=t.maxTextureSize,f={[gi]:Yt,[Yt]:gi,[cn]:cn},d=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:H0,fragmentShader:z0}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let g=new Xt;g.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new le(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pr;let p=this.type;this.render=function(A,_,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===ta&&($e("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Pr);let N=i.getRenderTarget(),w=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Pi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let F=p!==this.type;F&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(H=>H.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,H=A.length;I<H;I++){let z=A[I],V=z.shadow;if(V===void 0){$e("WebGLShadowMap:",z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ce=V.getFrameExtents();s.multiply(ce),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ce.x),s.x=r.x*ce.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ce.y),s.y=r.y*ce.y,V.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=q,V.map===null||F===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===ys){if(z.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new on(s.x,s.y,{format:_i,type:An,minFilter:jt,magFilter:jt,generateMipmaps:!1}),V.map.texture.name=z.name+".shadowMap",V.map.depthTexture=new Qn(s.x,s.y,xn),V.map.depthTexture.name=z.name+".shadowMapDepth",V.map.depthTexture.format=$n,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Wt,V.map.depthTexture.magFilter=Wt}else z.isPointLight?(V.map=new Gr(s.x),V.map.depthTexture=new or(s.x,wn)):(V.map=new on(s.x,s.y),V.map.depthTexture=new Qn(s.x,s.y,wn)),V.map.depthTexture.name=z.name+".shadowMap",V.map.depthTexture.format=$n,this.type===Pr?(V.map.depthTexture.compareFunction=q?nc:tc,V.map.depthTexture.minFilter=jt,V.map.depthTexture.magFilter=jt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Wt,V.map.depthTexture.magFilter=Wt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let j=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();z.isPointLight!==!0&&V.updateMatrices(z,M);let ae=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:M.layers;for(let Ee=0;Ee<j;Ee++){let Ve=V.getCamera(Ee);if(z.isPointLight){let J=V.camera,_e=V.matrix,Ae=z.distance||J.far;Ae!==J.far&&(J.far=Ae,J.updateProjectionMatrix()),zr.setFromMatrixPosition(z.matrixWorld),J.position.copy(zr),gc.copy(J.position),gc.add(k0[Ee]),J.up.copy(G0[Ee]),J.lookAt(gc),J.updateMatrixWorld(),_e.makeTranslation(-zr.x,-zr.y,-zr.z),xu.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),V._frustum.setFromProjectionMatrix(xu,J.coordinateSystem,J.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,Ee),i.clear();else{Ee===0&&(i.setRenderTarget(V.map),i.clear());let J=V.getViewport(Ee);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),D.viewport(o)}n=V.getFrustum(Ee),x(_,M,Ve,z,ae,this.type)}V.isPointLightShadow!==!0&&this.type===ys&&v(V,M),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(N,w,T)};function v(A,_){let M=e.update(y);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,u.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),A.mapPass===null?A.mapPass=new on(s.x,s.y,{format:_i,type:An}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(_,null,M,d,y,null),u.uniforms.shadow_pass.value=A.mapPass.texture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(_,null,M,u,y,null)}function E(A,_,M,N){let w=null,T=M.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)w=T;else if(w=M.isPointLight===!0?c:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let D=w.uuid,F=_.uuid,I=l[D];I===void 0&&(I={},l[D]=I);let H=I[F];H===void 0&&(H=w.clone(),I[F]=H,_.addEventListener("dispose",R)),w=H}if(w.visible=_.visible,w.wireframe=_.wireframe,N===ys?w.side=_.shadowSide!==null?_.shadowSide:_.side:w.side=_.shadowSide!==null?_.shadowSide:f[_.side],w.alphaMap=_.alphaMap,w.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,w.map=_.map,w.clipShadows=_.clipShadows,w.clippingPlanes=_.clippingPlanes,w.clipIntersection=_.clipIntersection,w.displacementMap=_.displacementMap,w.displacementScale=_.displacementScale,w.displacementBias=_.displacementBias,w.wireframeLinewidth=_.wireframeLinewidth,w.linewidth=_.linewidth,M.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let D=i.properties.get(w);D.light=M}return w}function x(A,_,M,N,w,T){if(A.visible===!1)return;if(A.layers.test(w)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===ys)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,A.matrixWorld);let I=e.update(A),H=A.material;if(Array.isArray(H)){let z=I.groups;for(let V=0,ce=z.length;V<ce;V++){let q=z[V],j=H[q.materialIndex];if(j&&j.visible){let ae=E(A,j,N,T);A.onBeforeShadow(i,A,_,M,I,ae,q),i.renderBufferDirect(M,null,I,ae,A,q),A.onAfterShadow(i,A,_,M,I,ae,q)}}}else if(H.visible){let z=E(A,H,N,T);A.onBeforeShadow(i,A,_,M,I,z,null),i.renderBufferDirect(M,null,I,z,A,null),A.onAfterShadow(i,A,_,M,I,z,null)}}let F=A.children;for(let I=0,H=F.length;I<H;I++)x(F[I],_,M,N,w,T)}function R(A){A.target.removeEventListener("dispose",R);for(let M in l){let N=l[M],w=A.target.uuid;w in N&&(N[w].dispose(),delete N[w])}}}function W0(i,e){function t(){let U=!1,K=new It,P=null,W=new It(0,0,0,0);return{setMask:function(G){P!==G&&!U&&(i.colorMask(G,G,G,G),P=G)},setLocked:function(G){U=G},setClear:function(G,te,he,De,ne){ne===!0&&(G*=De,te*=De,he*=De),K.set(G,te,he,De),W.equals(K)===!1&&(i.clearColor(G,te,he,De),W.copy(K))},reset:function(){U=!1,P=null,W.set(-1,0,0,0)}}}function n(){let U=!1,K=!1,P=null,W=null,G=null;return{setReversed:function(te){if(K!==te){let he=e.get("EXT_clip_control");te?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT),K=te;let De=G;G=null,this.setClear(De)}},getReversed:function(){return K},setTest:function(te){te?ie(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},setMask:function(te){P!==te&&!U&&(i.depthMask(te),P=te)},setFunc:function(te){if(K&&(te=kh[te]),W!==te){switch(te){case Eo:i.depthFunc(i.NEVER);break;case bo:i.depthFunc(i.ALWAYS);break;case To:i.depthFunc(i.LESS);break;case ss:i.depthFunc(i.LEQUAL);break;case wo:i.depthFunc(i.EQUAL);break;case Ao:i.depthFunc(i.GEQUAL);break;case Ro:i.depthFunc(i.GREATER);break;case Co:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}W=te}},setLocked:function(te){U=te},setClear:function(te){G!==te&&(G=te,K&&(te=1-te),i.clearDepth(te))},reset:function(){U=!1,P=null,W=null,G=null,K=!1}}}function s(){let U=!1,K=null,P=null,W=null,G=null,te=null,he=null,De=null,ne=null;return{setTest:function(Te){U||(Te?ie(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},setMask:function(Te){K!==Te&&!U&&(i.stencilMask(Te),K=Te)},setFunc:function(Te,Je,ye){(P!==Te||W!==Je||G!==ye)&&(i.stencilFunc(Te,Je,ye),P=Te,W=Je,G=ye)},setOp:function(Te,Je,ye){(te!==Te||he!==Je||De!==ye)&&(i.stencilOp(Te,Je,ye),te=Te,he=Je,De=ye)},setLocked:function(Te){U=Te},setClear:function(Te){ne!==Te&&(i.clearStencil(Te),ne=Te)},reset:function(){U=!1,K=null,P=null,W=null,G=null,te=null,he=null,De=null,ne=null}}}let r=new t,o=new n,a=new s,c={},l=new WeakMap,h={},f={},d={},u=new WeakMap,g=[],y=null,m=!1,p=null,v=null,E=null,x=null,R=null,A=null,_=null,M=new We(0,0,0),N=0,w=!1,T=null,D=null,F=null,I=null,H=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ce=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=ce>=1):q.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=ce>=2);let j=null,ae={},Ee=i.getParameter(i.SCISSOR_BOX),Ve=i.getParameter(i.VIEWPORT),J=new It().fromArray(Ee),_e=new It().fromArray(Ve);function Ae(U,K,P,W){let G=new Uint8Array(4),te=i.createTexture();i.bindTexture(U,te),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let he=0;he<P;he++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,W,0,i.RGBA,i.UNSIGNED_BYTE,G):i.texImage2D(K+he,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,G);return te}let Oe={};Oe[i.TEXTURE_2D]=Ae(i.TEXTURE_2D,i.TEXTURE_2D,1),Oe[i.TEXTURE_CUBE_MAP]=Ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Oe[i.TEXTURE_2D_ARRAY]=Ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Oe[i.TEXTURE_3D]=Ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(i.DEPTH_TEST),o.setFunc(ss),we(!1),ve(Fl),ie(i.CULL_FACE),oe(Pi);function ie(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Pe(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function at(U,K){return d[U]!==K?(i.bindFramebuffer(U,K),d[U]=K,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=K),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=K),!0):!1}function Le(U,K){let P=g,W=!1;if(U){P=u.get(K),P===void 0&&(P=[],u.set(K,P));let G=U.textures;if(P.length!==G.length||P[0]!==i.COLOR_ATTACHMENT0){for(let te=0,he=G.length;te<he;te++)P[te]=i.COLOR_ATTACHMENT0+te;P.length=G.length,W=!0}}else P[0]!==i.BACK&&(P[0]=i.BACK,W=!0);W&&i.drawBuffers(P)}function Xe(U){return y!==U?(i.useProgram(U),y=U,!0):!1}let Ie={[Ii]:i.FUNC_ADD,[ch]:i.FUNC_SUBTRACT,[hh]:i.FUNC_REVERSE_SUBTRACT};Ie[uh]=i.MIN,Ie[dh]=i.MAX;let se={[fh]:i.ZERO,[ph]:i.ONE,[mh]:i.SRC_COLOR,[zl]:i.SRC_ALPHA,[Mh]:i.SRC_ALPHA_SATURATE,[vh]:i.DST_COLOR,[_h]:i.DST_ALPHA,[gh]:i.ONE_MINUS_SRC_COLOR,[kl]:i.ONE_MINUS_SRC_ALPHA,[yh]:i.ONE_MINUS_DST_COLOR,[xh]:i.ONE_MINUS_DST_ALPHA,[Sh]:i.CONSTANT_COLOR,[Eh]:i.ONE_MINUS_CONSTANT_COLOR,[bh]:i.CONSTANT_ALPHA,[Th]:i.ONE_MINUS_CONSTANT_ALPHA};function oe(U,K,P,W,G,te,he,De,ne,Te){if(U===Pi){m===!0&&(Pe(i.BLEND),m=!1);return}if(m===!1&&(ie(i.BLEND),m=!0),U!==lh){if(U!==p||Te!==w){if((v!==Ii||R!==Ii)&&(i.blendEquation(i.FUNC_ADD),v=Ii,R=Ii),Te)switch(U){case Ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ol:i.blendFunc(i.ONE,i.ONE);break;case Bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qe("WebGLState: Invalid blending: ",U);break}else switch(U){case Ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ol:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Bl:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hl:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",U);break}E=null,x=null,A=null,_=null,M.set(0,0,0),N=0,p=U,w=Te}return}G=G||K,te=te||P,he=he||W,(K!==v||G!==R)&&(i.blendEquationSeparate(Ie[K],Ie[G]),v=K,R=G),(P!==E||W!==x||te!==A||he!==_)&&(i.blendFuncSeparate(se[P],se[W],se[te],se[he]),E=P,x=W,A=te,_=he),(De.equals(M)===!1||ne!==N)&&(i.blendColor(De.r,De.g,De.b,ne),M.copy(De),N=ne),p=U,w=!1}function fe(U,K){U.side===cn?Pe(i.CULL_FACE):ie(i.CULL_FACE);let P=U.side===Yt;K&&(P=!P),we(P),U.blending===Ms&&U.transparent===!1?oe(Pi):oe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let W=U.stencilWrite;a.setTest(W),W&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ne(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function we(U){T!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),T=U)}function ve(U){U!==oh?(ie(i.CULL_FACE),U!==D&&(U===Fl?i.cullFace(i.BACK):U===ah?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),D=U}function Ye(U){U!==F&&(V&&i.lineWidth(U),F=U)}function Ne(U,K,P){U?(ie(i.POLYGON_OFFSET_FILL),(I!==K||H!==P)&&(I=K,H=P,o.getReversed()&&(K=-K,P=-P),i.polygonOffset(K,P))):Pe(i.POLYGON_OFFSET_FILL)}function je(U){U?ie(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}function tt(U){U===void 0&&(U=i.TEXTURE0+z-1),j!==U&&(i.activeTexture(U),j=U)}function lt(U,K,P){P===void 0&&(j===null?P=i.TEXTURE0+z-1:P=j);let W=ae[P];W===void 0&&(W={type:void 0,texture:void 0},ae[P]=W),(W.type!==U||W.texture!==K)&&(j!==P&&(i.activeTexture(P),j=P),i.bindTexture(U,K||Oe[U]),W.type=U,W.texture=K)}function O(){let U=ae[j];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function xt(){try{i.compressedTexImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function nt(){try{i.compressedTexImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function et(){try{i.texSubImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function xe(){try{i.texSubImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function gt(){try{i.compressedTexSubImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function ze(){try{i.compressedTexSubImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function Ge(){try{i.texStorage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function C(){try{i.texStorage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function S(){try{i.texImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function k(){try{i.texImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function de(U){return f[U]!==void 0?f[U]:i.getParameter(U)}function re(U,K){f[U]!==K&&(i.pixelStorei(U,K),f[U]=K)}function Z(U){J.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),J.copy(U))}function ue(U){_e.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),_e.copy(U))}function $(U,K){let P=l.get(K);P===void 0&&(P=new WeakMap,l.set(K,P));let W=P.get(U);W===void 0&&(W=i.getUniformBlockIndex(K,U.name),i.uniformBlockBinding(K,W,W),P.set(U,W))}function ee(U,K,P){let G=l.get(K).get(U);c[G]!==P&&(i.bindBufferBase(i.UNIFORM_BUFFER,G,P),c[G]=P)}function pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},j=null,ae={},d={},c={},u=new WeakMap,g=[],y=null,m=!1,p=null,v=null,E=null,x=null,R=null,A=null,_=null,M=new We(0,0,0),N=0,w=!1,T=null,D=null,F=null,I=null,H=null,J.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:Pe,bindFramebuffer:at,drawBuffers:Le,useProgram:Xe,setBlending:oe,setMaterial:fe,setFlipSided:we,setCullFace:ve,setLineWidth:Ye,setPolygonOffset:Ne,setScissorTest:je,activeTexture:tt,bindTexture:lt,unbindTexture:O,compressedTexImage2D:xt,compressedTexImage3D:nt,texImage2D:S,texImage3D:k,pixelStorei:re,getParameter:de,updateUBOMapping:$,uniformBlockBinding:ee,texStorage2D:Ge,texStorage3D:C,texSubImage2D:et,texSubImage3D:xe,compressedTexSubImage2D:gt,compressedTexSubImage3D:ze,scissor:Z,viewport:ue,reset:pe}}function X0(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Me,h=new WeakMap,f=new Set,d,u=new WeakMap,g=new Set,y=new FinalizationRegistry(C=>g.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,S){return m?new OffscreenCanvas(C,S):os("canvas")}function v(C,S,k){let de=1,re=Ge(C);if((re.width>k||re.height>k)&&(de=k/Math.max(re.width,re.height)),de<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Z=Math.floor(de*re.width),ue=Math.floor(de*re.height);d===void 0&&(d=p(Z,ue));let $=S?p(Z,ue):d;return $.width=Z,$.height=ue,$.getContext("2d").drawImage(C,0,0,Z,ue),$e("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+Z+"x"+ue+")."),$}else return"data"in C&&$e("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),C;return C}function E(C){return C.generateMipmaps}function x(C){i.generateMipmap(C)}function R(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(C,S,k,de,re,Z=!1){if(C!==null){if(i[C]!==void 0)return i[C];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ue;de&&(ue=e.get("EXT_texture_norm16"),ue||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=S;if(S===i.RED&&(k===i.FLOAT&&($=i.R32F),k===i.HALF_FLOAT&&($=i.R16F),k===i.UNSIGNED_BYTE&&($=i.R8),k===i.UNSIGNED_SHORT&&ue&&($=ue.R16_EXT),k===i.SHORT&&ue&&($=ue.R16_SNORM_EXT)),S===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.R8UI),k===i.UNSIGNED_SHORT&&($=i.R16UI),k===i.UNSIGNED_INT&&($=i.R32UI),k===i.BYTE&&($=i.R8I),k===i.SHORT&&($=i.R16I),k===i.INT&&($=i.R32I)),S===i.RG&&(k===i.FLOAT&&($=i.RG32F),k===i.HALF_FLOAT&&($=i.RG16F),k===i.UNSIGNED_BYTE&&($=i.RG8),k===i.UNSIGNED_SHORT&&ue&&($=ue.RG16_EXT),k===i.SHORT&&ue&&($=ue.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RG8UI),k===i.UNSIGNED_SHORT&&($=i.RG16UI),k===i.UNSIGNED_INT&&($=i.RG32UI),k===i.BYTE&&($=i.RG8I),k===i.SHORT&&($=i.RG16I),k===i.INT&&($=i.RG32I)),S===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGB8UI),k===i.UNSIGNED_SHORT&&($=i.RGB16UI),k===i.UNSIGNED_INT&&($=i.RGB32UI),k===i.BYTE&&($=i.RGB8I),k===i.SHORT&&($=i.RGB16I),k===i.INT&&($=i.RGB32I)),S===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGBA8UI),k===i.UNSIGNED_SHORT&&($=i.RGBA16UI),k===i.UNSIGNED_INT&&($=i.RGBA32UI),k===i.BYTE&&($=i.RGBA8I),k===i.SHORT&&($=i.RGBA16I),k===i.INT&&($=i.RGBA32I)),S===i.RGB&&(k===i.UNSIGNED_SHORT&&ue&&($=ue.RGB16_EXT),k===i.SHORT&&ue&&($=ue.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),S===i.RGBA){let ee=Z?Ks:pt.getTransfer(re);k===i.FLOAT&&($=i.RGBA32F),k===i.HALF_FLOAT&&($=i.RGBA16F),k===i.UNSIGNED_BYTE&&($=ee===yt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&ue&&($=ue.RGBA16_EXT),k===i.SHORT&&ue&&($=ue.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(C,S){let k;return C?S===null||S===wn||S===Di?k=i.DEPTH24_STENCIL8:S===xn?k=i.DEPTH32F_STENCIL8:S===Es&&(k=i.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===wn||S===Di?k=i.DEPTH_COMPONENT24:S===xn?k=i.DEPTH_COMPONENT32F:S===Es&&(k=i.DEPTH_COMPONENT16),k}function M(C,S){return E(C)===!0||C.isFramebufferTexture&&C.minFilter!==Wt&&C.minFilter!==jt?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function N(C){let S=new WeakRef(C);n.get(C).__ref=S,g.add(S),y.register(C,S,S)}function w(C){let S=n.get(C).__ref;S!==void 0&&(g.delete(S),y.unregister(S))}function T(C){F(C.target)}function D(C){I(C.target)}function F(C){C.removeEventListener("dispose",T),w(C),z(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&f.delete(C)}function I(C){C.removeEventListener("dispose",D),w(C),ce(C)}function H(){for(let C of g){let S=C.deref();S!==void 0&&(S.isRenderTarget===!0?I(S):F(S))}g.clear(),f.clear()}function z(C){let S=n.get(C);if(S.__webglInit===void 0)return;let k=C.source,de=u.get(k);if(de){let re=de[S.__cacheKey];re.usedTimes--,re.usedTimes===0&&V(C),Object.keys(de).length===0&&u.delete(k)}n.remove(C)}function V(C){let S=n.get(C);i.deleteTexture(S.__webglTexture);let k=C.source,de=u.get(k);delete de[S.__cacheKey],o.memory.textures--}function ce(C){let S=n.get(C);S.__depthDisposeCallback&&S.__depthDisposeCallback();let k=C.depthTexture;if(k&&k.renderTarget===C&&F(k),C.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(S.__webglFramebuffer[re]))for(let Z=0;Z<S.__webglFramebuffer[re].length;Z++)i.deleteFramebuffer(S.__webglFramebuffer[re][Z]);else i.deleteFramebuffer(S.__webglFramebuffer[re]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[re])}else{if(Array.isArray(S.__webglFramebuffer))for(let re=0;re<S.__webglFramebuffer.length;re++)i.deleteFramebuffer(S.__webglFramebuffer[re]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let re=0;re<S.__webglColorRenderbuffer.length;re++)S.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[re]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let de=C.textures;for(let re=0,Z=de.length;re<Z;re++){let ue=n.get(de[re]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),o.memory.textures--),n.remove(de[re])}n.remove(C)}let q=0;function j(){q=0}function ae(){return q}function Ee(C){q=C}function Ve(){let C=q;return C>=s.maxTextures&&$e("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,C}function J(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.mipmapsAutoUpdate),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function _e(C,S){let k=n.get(C);if(C.isVideoTexture&&gt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){let de=C.image;if(de===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(k,C,S);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+S)}function Ae(C,S){let k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){fe(k,C,S);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+S)}function Oe(C,S){let k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){fe(k,C,S);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+S)}function ie(C,S){let k=n.get(C);if(C.version>0&&k.__version!==C.version){we(k,C,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+S)}let Pe={[wi]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[Po]:i.MIRRORED_REPEAT},at={[Wt]:i.NEAREST,[Rh]:i.NEAREST_MIPMAP_NEAREST,[Lr]:i.NEAREST_MIPMAP_LINEAR,[jt]:i.LINEAR,[ra]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},Le={[Lh]:i.NEVER,[ic]:i.ALWAYS,[Dh]:i.LESS,[tc]:i.LEQUAL,[Nh]:i.EQUAL,[nc]:i.GEQUAL,[Uh]:i.GREATER,[Fh]:i.NOTEQUAL};function Xe(C,S){if(S.type===xn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===jt||S.magFilter===ra||S.magFilter===Lr||S.magFilter===ti||S.minFilter===jt||S.minFilter===ra||S.minFilter===Lr||S.minFilter===ti)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Pe[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Pe[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Pe[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,at[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,at[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Le[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Wt||S.minFilter!==Lr&&S.minFilter!==ti||S.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ie(C,S){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",T),N(S));let de=S.source,re=u.get(de);re===void 0&&(re={},u.set(de,re));let Z=J(S);if(Z!==C.__cacheKey){re[Z]===void 0&&(re[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),re[Z].usedTimes++;let ue=re[C.__cacheKey];ue!==void 0&&(re[C.__cacheKey].usedTimes--,ue.usedTimes===0&&V(S)),C.__cacheKey=Z,C.__webglTexture=re[Z].texture}return k}function se(C,S,k){return Math.floor(Math.floor(C/k)/S)}function oe(C,S,k,de){let Z=C.updateRanges;if(Z.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,k,de,S.data);else{Z.sort((U,K)=>U.start-K.start);let ue=0;for(let U=1;U<Z.length;U++){let K=Z[ue],P=Z[U],W=K.start+K.count,G=se(P.start,S.width,4),te=se(K.start,S.width,4);P.start<=W+1&&G===te&&se(P.start+P.count-1,S.width,4)===G?K.count=Math.max(K.count,P.start+P.count-K.start):(++ue,Z[ue]=P)}Z.length=ue+1;let $=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),pe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let U=0,K=Z.length;U<K;U++){let P=Z[U],W=Math.floor(P.start/4),G=Math.ceil(P.count/4),te=W%S.width,he=Math.floor(W/S.width),De=G,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,he),t.texSubImage2D(i.TEXTURE_2D,0,te,he,De,ne,k,de,S.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,pe)}}function fe(C,S,k){let de=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(de=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(de=i.TEXTURE_3D);let re=Ie(C,S),Z=S.source;t.bindTexture(de,C.__webglTexture,i.TEXTURE0+k);let ue=n.get(Z);if(Z.version!==ue.__version||re===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let ne=pt.getPrimaries(pt.workingColorSpace),Te=S.colorSpace===ii?null:pt.getPrimaries(S.colorSpace),Je=S.colorSpace===ii||ne===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let ee=v(S.image,!1,s.maxTextureSize);ee=ze(S,ee);let pe=r.convert(S.format,S.colorSpace),U=r.convert(S.type),K=A(S.internalFormat,pe,U,S.normalized,S.colorSpace,S.isVideoTexture);Xe(de,S);let P,W=S.mipmaps,G=S.isVideoTexture!==!0,te=ue.__version===void 0||re===!0,he=Z.dataReady,De=M(S,ee);if(S.isDepthTexture)K=_(S.format===ni,S.type),te&&(G?t.texStorage2D(i.TEXTURE_2D,1,K,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,K,ee.width,ee.height,0,pe,U,null));else if(S.isDataTexture)if(W.length>0){G&&te&&t.texStorage2D(i.TEXTURE_2D,De,K,W[0].width,W[0].height);for(let ne=0,Te=W.length;ne<Te;ne++)P=W[ne],G?he&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,P.width,P.height,pe,U,P.data):t.texImage2D(i.TEXTURE_2D,ne,K,P.width,P.height,0,pe,U,P.data);S.generateMipmaps=!1}else G?(te&&t.texStorage2D(i.TEXTURE_2D,De,K,ee.width,ee.height),he&&oe(S,ee,pe,U)):t.texImage2D(i.TEXTURE_2D,0,K,ee.width,ee.height,0,pe,U,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){G&&te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,K,W[0].width,W[0].height,ee.depth);for(let ne=0,Te=W.length;ne<Te;ne++)if(P=W[ne],S.format!==Rn)if(pe!==null)if(G){if(he)if(S.layerUpdates.size>0){let Je=pc(P.width,P.height,S.format,S.type);for(let ye of S.layerUpdates){let mt=P.data.subarray(ye*Je/P.data.BYTES_PER_ELEMENT,(ye+1)*Je/P.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,ye,P.width,P.height,1,pe,mt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,P.width,P.height,ee.depth,pe,P.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,K,P.width,P.height,ee.depth,0,P.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?he&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,P.width,P.height,ee.depth,pe,U,P.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,K,P.width,P.height,ee.depth,0,pe,U,P.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{G&&te&&t.texStorage2D(i.TEXTURE_2D,De,K,W[0].width,W[0].height);for(let ne=0,Te=W.length;ne<Te;ne++)P=W[ne],S.format!==Rn?pe!==null?G?he&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,P.width,P.height,pe,P.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,K,P.width,P.height,0,P.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?he&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,P.width,P.height,pe,U,P.data):t.texImage2D(i.TEXTURE_2D,ne,K,P.width,P.height,0,pe,U,P.data)}else if(S.isDataArrayTexture)if(G){if(te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,K,ee.width,ee.height,ee.depth),he)if(S.layerUpdates.size>0){let ne=pc(ee.width,ee.height,S.format,S.type);for(let Te of S.layerUpdates){let Je=ee.data.subarray(Te*ne/ee.data.BYTES_PER_ELEMENT,(Te+1)*ne/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Te,ee.width,ee.height,1,pe,U,Je)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,pe,U,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,K,ee.width,ee.height,ee.depth,0,pe,U,ee.data);else if(S.isData3DTexture)G?(te&&t.texStorage3D(i.TEXTURE_3D,De,K,ee.width,ee.height,ee.depth),he&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,pe,U,ee.data)):t.texImage3D(i.TEXTURE_3D,0,K,ee.width,ee.height,ee.depth,0,pe,U,ee.data);else if(S.isFramebufferTexture){if(te)if(G)t.texStorage2D(i.TEXTURE_2D,De,K,ee.width,ee.height);else{let ne=ee.width,Te=ee.height;for(let Je=0;Je<De;Je++)t.texImage2D(i.TEXTURE_2D,Je,K,ne,Te,0,pe,U,null),ne>>=1,Te>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),ee.parentNode!==ne){ne.appendChild(ee),f.add(S),ne.onpaint=Te=>{let Je=Te.changedElements;for(let ye of f)Je.includes(ye.image)&&(ye.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{let Je=i.RGBA,ye=i.RGBA,mt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Je,ye,mt,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(W.length>0){if(G&&te){let ne=Ge(W[0]);t.texStorage2D(i.TEXTURE_2D,De,K,ne.width,ne.height)}for(let ne=0,Te=W.length;ne<Te;ne++)P=W[ne],G?he&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,pe,U,P):t.texImage2D(i.TEXTURE_2D,ne,K,pe,U,P);S.generateMipmaps=!1}else if(G){if(te){let ne=Ge(ee);t.texStorage2D(i.TEXTURE_2D,De,K,ne.width,ne.height)}he&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,U,ee)}else t.texImage2D(i.TEXTURE_2D,0,K,pe,U,ee);E(S)&&S.mipmapsAutoUpdate===!0&&x(de),ue.__version=Z.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function we(C,S,k){if(S.image.length!==6)return;let de=Ie(C,S),re=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+k);let Z=n.get(re);if(re.version!==Z.__version||de===!0){t.activeTexture(i.TEXTURE0+k);let ue=pt.getPrimaries(pt.workingColorSpace),$=S.colorSpace===ii?null:pt.getPrimaries(S.colorSpace),ee=S.colorSpace===ii||ue===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let pe=S.isCompressedTexture||S.image[0].isCompressedTexture,U=S.image[0]&&S.image[0].isDataTexture,K=[];for(let ye=0;ye<6;ye++)!pe&&!U?K[ye]=v(S.image[ye],!0,s.maxCubemapSize):K[ye]=U?S.image[ye].image:S.image[ye],K[ye]=ze(S,K[ye]);let P=K[0],W=r.convert(S.format,S.colorSpace),G=r.convert(S.type),te=A(S.internalFormat,W,G,S.normalized,S.colorSpace),he=S.isVideoTexture!==!0,De=Z.__version===void 0||de===!0,ne=re.dataReady,Te=M(S,P);Xe(i.TEXTURE_CUBE_MAP,S);let Je;if(S.isDepthTexture){if(te=_(S.format===ni,S.type),De)if(he)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,te,P.width,P.height);else for(let ye=0;ye<6;ye++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,te,P.width,P.height,0,W,G,null)}else if(pe){he&&De&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,te,P.width,P.height);for(let ye=0;ye<6;ye++){Je=K[ye].mipmaps;for(let mt=0;mt<Je.length;mt++){let Bt=Je[mt];S.format!==Rn?W!==null?he?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,mt,0,0,Bt.width,Bt.height,W,Bt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,mt,te,Bt.width,Bt.height,0,Bt.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):he?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,mt,0,0,Bt.width,Bt.height,W,G,Bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,mt,te,Bt.width,Bt.height,0,W,G,Bt.data)}}}else{if(Je=S.mipmaps,he&&De){Je.length>0&&Te++;let ye=Ge(K[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,te,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(U){he?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,K[ye].width,K[ye].height,W,G,K[ye].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,te,K[ye].width,K[ye].height,0,W,G,K[ye].data);for(let mt=0;mt<Je.length;mt++){let Cn=Je[mt].image[ye].image;he?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,mt+1,0,0,Cn.width,Cn.height,W,G,Cn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,mt+1,te,Cn.width,Cn.height,0,W,G,Cn.data)}}else{he?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,W,G,K[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,te,W,G,K[ye]);for(let mt=0;mt<Je.length;mt++){let Bt=Je[mt];he?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,mt+1,0,0,W,G,Bt.image[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,mt+1,te,W,G,Bt.image[ye])}}}E(S)&&S.mipmapsAutoUpdate===!0&&x(i.TEXTURE_CUBE_MAP),Z.__version=re.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ve(C,S,k,de,re,Z){let ue=r.convert(k.format,k.colorSpace),$=r.convert(k.type),ee=A(k.internalFormat,ue,$,k.normalized,k.colorSpace),pe=n.get(S),U=n.get(k);if(U.__renderTarget=S,!pe.__hasExternalTextures){let K=Math.max(1,S.width>>Z),P=Math.max(1,S.height>>Z);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,Z,ee,K,P,S.depth,0,ue,$,null):t.texImage2D(re,Z,ee,K,P,0,ue,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),xe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,re,U.__webglTexture,0,et(S)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,de,re,U.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(C,S,k){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){let de=S.depthTexture,re=de&&de.isDepthTexture?de.type:null,Z=_(S.stencilBuffer,re),ue=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xe(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(S),Z,S.width,S.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(S),Z,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Z,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,C)}else{let de=S.textures;for(let re=0;re<de.length;re++){let Z=de[re],ue=r.convert(Z.format,Z.colorSpace),$=r.convert(Z.type),ee=A(Z.internalFormat,ue,$,Z.normalized,Z.colorSpace);xe(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(S),ee,S.width,S.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(S),ee,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ee,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(C,S,k){let de=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(S.depthTexture);re.__renderTarget=S;let Z=de?S.depthTexture.image[0]:S.depthTexture.image;(!re.__webglTexture||Z.width!==S.width||Z.height!==S.height)&&(Z.width=S.width,Z.height=S.height,S.depthTexture.needsUpdate=!0),de?ie(S.depthTexture,0):_e(S.depthTexture,0);let ue=re.__webglTexture,$=et(S),ee=de?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,pe=S.depthTexture.format===ni?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===$n)xe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,ee,ue,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,pe,ee,ue,0);else if(S.depthTexture.format===ni)xe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,ee,ue,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,pe,ee,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function je(C){let S=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let de=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),de){let re=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,de.removeEventListener("dispose",re)};de.addEventListener("dispose",re),S.__depthDisposeCallback=re}S.__boundDepthTexture=de}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(k)for(let de=0;de<6;de++)Ne(S.__webglFramebuffer[de],C,de);else C.texture.mipmaps.length>0?Ne(S.__webglFramebuffer[0],C,0):Ne(S.__webglFramebuffer,C,0);else if(k){S.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[de]),S.__webglDepthbuffer[de]===void 0)S.__webglDepthbuffer[de]=i.createRenderbuffer(),Ye(S.__webglDepthbuffer[de],C,!1);else{let re=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[de];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,Z)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Ye(S.__webglDepthbuffer,C,!1);else{let re=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,Z)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(C,S,k){let de=n.get(C);S!==void 0&&ve(de.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&je(C)}function lt(C){let S=C.texture,k=n.get(C),de=n.get(S);C.addEventListener("dispose",D),N(C);let re=C.textures,Z=C.isWebGLCubeRenderTarget===!0,ue=re.length>1;if(ue||(de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture()),de.__version=S.version,o.memory.textures++),Z){k.__webglFramebuffer=[];for(let $=0;$<6;$++)if(S.mipmaps.length>0){k.__webglFramebuffer[$]=[];for(let ee=0;ee<S.mipmaps.length;ee++)k.__webglFramebuffer[$][ee]=i.createFramebuffer()}else k.__webglFramebuffer[$]=i.createFramebuffer()}else{if(S.mipmaps.length>0){k.__webglFramebuffer=[];for(let $=0;$<S.mipmaps.length;$++)k.__webglFramebuffer[$]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ue)for(let $=0,ee=re.length;$<ee;$++){let pe=n.get(re[$]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&xe(C)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let $=0;$<re.length;$++){let ee=re[$];k.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[$]);let pe=r.convert(ee.format,ee.colorSpace),U=r.convert(ee.type),K=A(ee.internalFormat,pe,U,ee.normalized,ee.colorSpace,C.isXRRenderTarget===!0),P=et(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,P,K,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,k.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Ye(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,de.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,S);for(let $=0;$<6;$++)if(S.mipmaps.length>0)for(let ee=0;ee<S.mipmaps.length;ee++)ve(k.__webglFramebuffer[$][ee],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ee);else ve(k.__webglFramebuffer[$],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);E(S)?x(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(ue){for(let $=0,ee=re.length;$<ee;$++){let pe=re[$],U=n.get(pe),K=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,U.__webglTexture),Xe(K,pe),ve(k.__webglFramebuffer,C,pe,i.COLOR_ATTACHMENT0+$,K,0),E(pe)&&x(K)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&($=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,de.__webglTexture),Xe($,S),S.mipmaps.length>0)for(let ee=0;ee<S.mipmaps.length;ee++)ve(k.__webglFramebuffer[ee],C,S,i.COLOR_ATTACHMENT0,$,ee);else ve(k.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,$,0);E(S)?x($):S.mipmaps.length>0&&i.texParameteri($,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&je(C)}function O(C){let S=C.textures;for(let k=0,de=S.length;k<de;k++){let re=S[k];if(E(re)&&re.mipmapsAutoUpdate===!0){let Z=R(C),ue=n.get(re).__webglTexture;t.bindTexture(Z,ue),x(Z),t.unbindTexture()}}}let xt=[];function nt(C){if(C.samples>0){if(xe(C)===!1){let S=C.textures,k=C.width,de=C.height,re=i.COLOR_BUFFER_BIT,Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(C),$=S.length>1;if($)for(let pe=0;pe<S.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let pe=0;pe<S.length;pe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[pe]);let U=n.get(S[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,U,0)}i.blitFramebuffer(0,0,k,de,0,0,k,de,re,i.NEAREST),c===!0&&(xt.length=0,xt.push(i.COLOR_ATTACHMENT0+pe),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&xt.push(Z),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let pe=0;pe<S.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,ue.__webglColorRenderbuffer[pe]);let U=n.get(S[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,U,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function et(C){return Math.min(s.maxSamples,C.samples)}function xe(C){let S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function gt(C){let S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function ze(C,S){let k=C.colorSpace,de=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==$s&&k!==ii&&(pt.getTransfer(k)===yt?(de!==Rn||re!==nn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",k)),S}function Ge(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=Ve,this.resetTextureUnits=j,this.getTextureUnits=ae,this.setTextureUnits=Ee,this.setTexture2D=_e,this.setTexture2DArray=Ae,this.setTexture3D=Oe,this.setTextureCube=ie,this.rebindTextures=tt,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=xe,this.dispose=H}function q0(i,e){function t(n,s=ii){let r,o=pt.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===aa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===la)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ql)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Jl)return i.BYTE;if(n===$l)return i.SHORT;if(n===Es)return i.UNSIGNED_SHORT;if(n===oa)return i.INT;if(n===wn)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===An)return i.HALF_FLOAT;if(n===jl)return i.ALPHA;if(n===ec)return i.RGB;if(n===Rn)return i.RGBA;if(n===$n)return i.DEPTH_COMPONENT;if(n===ni)return i.DEPTH_STENCIL;if(n===ca)return i.RED;if(n===ha)return i.RED_INTEGER;if(n===_i)return i.RG;if(n===ua)return i.RG_INTEGER;if(n===da)return i.RGBA_INTEGER;if(n===Dr||n===Nr||n===Ur||n===Fr)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fa||n===pa||n===ma||n===ga)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_a||n===xa||n===va||n===ya||n===Ma||n===Or||n===Sa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_a||n===xa)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===va)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ya)return r.COMPRESSED_R11_EAC;if(n===Ma)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Or)return r.COMPRESSED_RG11_EAC;if(n===Sa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ea||n===ba||n===Ta||n===wa||n===Aa||n===Ra||n===Ca||n===Pa||n===Ia||n===La||n===Da||n===Na||n===Ua||n===Fa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ea)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ba)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ta)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wa)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Aa)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ra)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ca)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pa)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ia)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===La)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Da)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Na)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ua)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fa)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oa||n===Ba||n===Ha)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Oa)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ba)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===za||n===ka||n===Br||n===Ga)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Br)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ga)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Y0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z0=`
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

}`,Ec=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ar(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Bn({vertexShader:Y0,fragmentShader:Z0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new le(new zt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bc=class extends Un{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,d=null,u=null,g=null,y=typeof XRWebGLBinding<"u",m=new Ec,p={},v=t.getContextAttributes(),E=null,x=null,R=[],A=[],_=new Me,M=null,N=null,w=new $t;w.viewport=new It;let T=new $t;T.viewport=new It;let D=[w,T],F=new jo,I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let _e=R[J];return _e===void 0&&(_e=new hs,R[J]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(J){let _e=R[J];return _e===void 0&&(_e=new hs,R[J]=_e),_e.getGripSpace()},this.getHand=function(J){let _e=R[J];return _e===void 0&&(_e=new hs,R[J]=_e),_e.getHandSpace()};function z(J){let _e=A.indexOf(J.inputSource);if(_e===-1)return;let Ae=R[_e];Ae!==void 0&&(Ae.update(J.inputSource,J.frame,l||o),Ae.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",ce);for(let J=0;J<R.length;J++){let _e=A[J];_e!==null&&(A[J]=null,R[J].disconnect(_e))}I=null,H=null,m.reset();for(let J in p)delete p[J];if(e.setRenderTarget(E),u=null,d=null,f=null,s=null,x=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(_.width,_.height,!1),N!==null){let J=N.camera;J.fov=N.fov,J.zoom=N.zoom,J.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",V),s.addEventListener("inputsourceschange",ce),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Oe=null,ie=null;v.depth&&(ie=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=v.stencil?ni:$n,Oe=v.stencil?Di:wn);let Pe={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Pe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new on(d.textureWidth,d.textureHeight,{format:Rn,type:nn,depthTexture:new Qn(d.textureWidth,d.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ae={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,Ae),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),x=new on(u.framebufferWidth,u.framebufferHeight,{format:Rn,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ve.setContext(s),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ce(J){for(let _e=0;_e<J.removed.length;_e++){let Ae=J.removed[_e],Oe=A.indexOf(Ae);Oe>=0&&(A[Oe]=null,R[Oe].disconnect(Ae))}for(let _e=0;_e<J.added.length;_e++){let Ae=J.added[_e],Oe=A.indexOf(Ae);if(Oe===-1){for(let Pe=0;Pe<R.length;Pe++)if(Pe>=A.length){A.push(Ae),Oe=Pe;break}else if(A[Pe]===null){A[Pe]=Ae,Oe=Pe;break}if(Oe===-1)break}let ie=R[Oe];ie&&ie.connect(Ae)}}function q(J,_e){_e===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(_e.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let _e=J.near,Ae=J.far;m.texture!==null&&(m.depthNear>0&&(_e=m.depthNear),m.depthFar>0&&(Ae=m.depthFar)),F.near=T.near=w.near=_e,F.far=T.far=w.far=Ae,(I!==F.near||H!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),I=F.near,H=F.far),F.layers.mask=J.layers.mask|6,w.layers.mask=F.layers.mask&-5,T.layers.mask=F.layers.mask&-3;let Oe=J.parent,ie=F.cameras;q(F,Oe);for(let Pe=0;Pe<ie.length;Pe++)q(ie[Pe],Oe);F.projectionMatrix.copy(w.projectionMatrix),F.projectionMatrixInverse.copy(w.projectionMatrixInverse),N===null&&J.isPerspectiveCamera&&(N={camera:J,fov:J.fov,zoom:J.zoom}),j(J,F,Oe)};function j(J,_e,Ae){Ae===null?J.matrix.copy(_e.matrixWorld):(J.matrix.copy(Ae.matrixWorld),J.matrix.invert(),J.matrix.multiply(_e.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(_e.projectionMatrix),J.projectionMatrixInverse.copy(_e.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ls*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(J){return p[J]};let ae=null;function Ee(J,_e){if(h=_e.getViewerPose(l||o),g=_e,h!==null){let Ae=h.views;u!==null&&(e.setRenderTargetFramebuffer(x,u.framebuffer),e.setRenderTarget(x));let Oe=!1;Ae.length!==F.cameras.length&&(F.cameras.length=0,Oe=!0);for(let Le=0;Le<Ae.length;Le++){let Xe=Ae[Le],Ie=null;if(u!==null)Ie=u.getViewport(Xe);else{let oe=f.getViewSubImage(d,Xe);Ie=oe.viewport,Le===0&&(e.setRenderTargetTextures(x,oe.colorTexture,oe.depthStencilTexture),e.setRenderTarget(x))}let se=D[Le];se===void 0&&(se=new $t,se.layers.enable(Le),se.viewport=new It,D[Le]=se),se.matrix.fromArray(Xe.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Xe.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Le===0&&(F.matrix.copy(se.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Oe===!0&&F.cameras.push(se)}let ie=s.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let Le=f.getDepthInformation(Ae[0]);Le&&Le.isValid&&Le.texture&&m.init(Le,s.renderState)}if(ie&&ie.includes("camera-access")&&y){e.state.unbindTexture(),f=n.getBinding();for(let Le=0;Le<Ae.length;Le++){let Xe=Ae[Le].camera;if(Xe){let Ie=p[Xe];Ie||(Ie=new ar,p[Xe]=Ie);let se=f.getCameraImage(Xe);Ie.sourceTexture=se}}}}for(let Ae=0;Ae<R.length;Ae++){let Oe=A[Ae],ie=R[Ae];Oe!==null&&ie!==void 0&&ie.update(Oe,_e,l||o)}ae&&ae(J,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),g=null}let Ve=new vu;Ve.setAnimationLoop(Ee),this.setAnimationLoop=function(J){ae=J},this.dispose=function(){}}},J0=new bt,Cu=new st;Cu.set(-1,0,0,0,1,0,0,0,1);function $0(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,uc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,E,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Yt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Yt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p),E=v.envMap,x=v.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(J0.makeRotationFromEuler(x)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Cu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,v){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function K0(i,e,t,n){let s={},r={};function o(v,E){let x=E.program;n.uniformBlockBinding(v,x,s[v.id])}function a(v,E){let x=s[v.id];x===void 0&&(g(v),x=c(v),s[v.id]=x,v.addEventListener("dispose",m));let R=E.program;n.updateUBOMapping(v,R);let A=e.render.frame;r[v.id]!==A&&(l(v),r[v.id]=A)}function c(v){let E=i.createBuffer(),x=v.__size,R=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,x,R),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function l(v){let E=s[v.id],x=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,_=x.length;A<_;A++){let M=x[A];if(Array.isArray(M))for(let N=0,w=M.length;N<w;N++)h(M[N],A,N,R);else h(M,A,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,E,x,R){if(d(v,E,x,R)===!0){let A=v.__offset,_=v.value;if(Array.isArray(_)){let M=0;for(let N=0;N<_.length;N++){let w=_[N],T=y(w,!0);f(w,v.__data,M),M+=T.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,v.__data)}}function f(v,E,x){typeof v=="number"||typeof v=="boolean"?E[x]=v:v.isMatrix3?(E[x]=v.elements[0],E[x+1]=v.elements[1],E[x+2]=v.elements[2],E[x+3]=0,E[x+4]=v.elements[3],E[x+5]=v.elements[4],E[x+6]=v.elements[5],E[x+7]=0,E[x+8]=v.elements[6],E[x+9]=v.elements[7],E[x+10]=v.elements[8],E[x+11]=0):ArrayBuffer.isView(v)?E.set(v.subarray(0,E.length-x),x):v.toArray(E,x)}function d(v,E,x,R){let A=v.value,_=E+"_"+x;if(Array.isArray(A)){R[_]===void 0&&(R[_]=[]);let M=R[_],N=!1;for(let w=0;w<A.length;w++)u(A[w],M,w)===!0&&(N=!0);return N}return u(A,R,_)}function u(v,E,x){if(E[x]===void 0)return typeof v=="number"||typeof v=="boolean"?E[x]=v:ArrayBuffer.isView(v)?E[x]=v.slice():E[x]=v.clone(),!0;{let R=E[x];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return E[x]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function g(v){let E=v.uniforms,x=0,R=16;for(let _=0,M=E.length;_<M;_++){let N=Array.isArray(E[_])?E[_]:[E[_]];for(let w=0,T=N.length;w<T;w++){let D=N[w],F=Array.isArray(D.value)?D.value:[D.value],I=Array.isArray(E[_])||Array.isArray(D.value),H=x;for(let V=0,ce=F.length;V<ce;V++){let q=F[V],j=y(q,I),ae=x%R,Ee=ae%j.boundary,Ve=ae+Ee;x+=Ee,Ve!==0&&R-Ve<j.storage&&(x+=R-Ve),V===0&&(H=x),x+=j.storage}let z=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new z((x-H)/Float32Array.BYTES_PER_ELEMENT),D.__offset=H}}let A=x%R;return A>0&&(x+=R-A),v.__size=x,v.__cache={},this}function y(v,E){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=16,x.storage=48):v.isMatrix4?(x.boundary=16,x.storage=64):v.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(x.boundary=16,x.storage=v.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",v),E===!0&&(x.boundary=16,x.storage=Math.ceil(x.storage/16)*16),x}function m(v){let E=v.target;E.removeEventListener("dispose",m),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:p}}var Q0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),kn=null;function j0(){return kn===null&&(kn=new ir(Q0,16,16,_i,An),kn.name="DFG_LUT",kn.minFilter=jt,kn.magFilter=jt,kn.wrapS=Dn,kn.wrapT=Dn,kn.generateMipmaps=!1,kn.needsUpdate=!0),kn}var Xa=class{constructor(e={}){let{canvas:t=Bh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=nn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let y=u,m=new Set([da,ua,ha]),p=new Set([nn,wn,Es,Di,aa,la]),v=new Uint32Array(4),E=new Int32Array(4),x={textures:[],min:[],max:[],resolution:[]},R=null,A=null,_=[],M=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,T=!1,D=null,F=null,I=null,H=null;this._outputColorSpace=Pt;let z=0,V=0,ce=null,q=-1,j=null,ae=new It,Ee=new It,Ve=null,J=new We(0),_e=0,Ae=t.width,Oe=t.height,ie=1,Pe=null,at=null,Le=new It(0,0,Ae,Oe),Xe=new It(0,0,Ae,Oe),Ie=!1,se=new ui,oe=new Fo,fe=!1,we=!1,ve=new bt,Ye=new L,Ne=new It,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},tt=!1;function lt(){return ce===null?ie:1}let O=n;function xt(b,B){return t.getContext(b,B)}let nt,et,xe,gt,ze,Ge,C,S,k,de,re,Z,ue,$,ee,pe,U,K,P,W,G,te,he;try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ea}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",ye,!1),O===null){let B="webgl2";if(O=xt(B,b),O===null)throw xt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}De()}catch(b){throw t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Qe("WebGLRenderer: "+b.message),b}function De(){nt=new hg(O),nt.init(),G=new q0(O,nt),et=new jm(O,nt,e,G),xe=new W0(O,nt),et.reversedDepthBuffer&&d&&xe.buffers.depth.setReversed(!0),F=O.createFramebuffer(),I=O.createFramebuffer(),H=O.createFramebuffer(),gt=new fg(O),ze=new P0,Ge=new X0(O,nt,xe,ze,et,G,gt),C=new cg(w),S=new mf(O),te=new Km(O,S),k=new ug(O,S,gt,te),de=new mg(O,k,S,te,gt),K=new pg(O,et,Ge),ee=new eg(ze),re=new C0(w,C,nt,et,te,ee),Z=new $0(w,ze),ue=new L0,$=new B0(nt),U=new $m(w,C,xe,de,g,c),pe=new V0(w,de,et),he=new K0(O,gt,et,xe),P=new Qm(O,nt,gt),W=new dg(O,nt,gt),gt.programs=re.programs,w.capabilities=et,w.extensions=nt,w.properties=ze,w.renderLists=ue,w.shadowMap=pe,w.state=xe,w.info=gt}y!==nn&&(N=new _g(y,t.width,t.height,a,s,r));let ne=new bc(w,O);this.xr=ne,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=nt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=nt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(b){b!==void 0&&(ie=b,this.setSize(Ae,Oe,!1))},this.getSize=function(b){return b.set(Ae,Oe)},this.setSize=function(b,B,Q=!0){if(ne.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=b,Oe=B,t.width=Math.floor(b*ie),t.height=Math.floor(B*ie),Q===!0&&(t.style.width=b+"px",t.style.height=B+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(Ae*ie,Oe*ie).floor()},this.setDrawingBufferSize=function(b,B,Q){Ae=b,Oe=B,ie=Q,t.width=Math.floor(b*Q),t.height=Math.floor(B*Q),this.setViewport(0,0,b,B)},this.setEffects=function(b){if(y===nn){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let B=0;B<b.length;B++)if(b[B].isOutputPass===!0){$e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ae)},this.getViewport=function(b){return b.copy(Le)},this.setViewport=function(b,B,Q,X){b.isVector4?Le.set(b.x,b.y,b.z,b.w):Le.set(b,B,Q,X),xe.viewport(ae.copy(Le).multiplyScalar(lt()).round())},this.getScissor=function(b){return b.copy(Xe)},this.setScissor=function(b,B,Q,X){b.isVector4?Xe.set(b.x,b.y,b.z,b.w):Xe.set(b,B,Q,X),xe.scissor(Ee.copy(Xe).multiplyScalar(lt()).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(b){xe.setScissorTest(Ie=b)},this.setOpaqueSort=function(b){Pe=b},this.setTransparentSort=function(b){at=b},this.getClearColor=function(b){return b.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,Q=!0){let X=0;if(b){let Y=!1;if(ce!==null){let be=ce.texture.format;Y=m.has(be)}if(Y){let be=ce.texture.type,Ue=p.has(be),Se=U.getClearColor(),Re=U.getClearAlpha(),ke=Se.r,it=Se.g,ht=Se.b;Ue?(v[0]=ke,v[1]=it,v[2]=ht,v[3]=Re,O.clearBufferuiv(O.COLOR,0,v)):(E[0]=ke,E[1]=it,E[2]=ht,E[3]=Re,O.clearBufferiv(O.COLOR,0,E))}else X|=O.COLOR_BUFFER_BIT}B&&(X|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),D=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),U.dispose(),ue.dispose(),$.dispose(),Ge.dispose(),ze.dispose(),C.dispose(),de.dispose(),k.dispose(),te.dispose(),he.dispose(),re.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Fi),ne.removeEventListener("sessionend",vi),Pn.stop()};function Te(b){b.preventDefault(),oc("WebGLRenderer: Context Lost."),T=!0}function Je(){oc("WebGLRenderer: Context Restored."),T=!1;let b=gt.autoReset,B=pe.enabled,Q=pe.autoUpdate,X=pe.needsUpdate,Y=pe.type;De(),gt.autoReset=b,pe.enabled=B,pe.autoUpdate=Q,pe.needsUpdate=X,pe.type=Y}function ye(b){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function mt(b){let B=b.target;B.removeEventListener("dispose",mt),Bt(B)}function Bt(b){Cn(b),ze.remove(b)}function Cn(b){let B=ze.get(b).programs;B!==void 0&&(B.forEach(function(Q){re.releaseProgram(Q)}),b.isShaderMaterial&&re.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,Q,X,Y,be){B===null&&(B=je);let Ue=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Se=Us(b,B,Q,X,Y);xe.setMaterial(X,Ue);let Re=Q.index,ke=1;if(X.wireframe===!0){if(Re=k.getWireframeAttribute(Q),Re===void 0)return;ke=2}let it=Q.drawRange,ht=Q.attributes.position,Fe=it.start*ke,rt=(it.start+it.count)*ke;be!==null&&(Fe=Math.max(Fe,be.start*ke),rt=Math.min(rt,(be.start+be.count)*ke)),Re!==null?(Fe=Math.max(Fe,0),rt=Math.min(rt,Re.count)):ht!=null&&(Fe=Math.max(Fe,0),rt=Math.min(rt,ht.count));let Ut=rt-Fe;if(Ut<0||Ut===1/0)return;te.setup(Y,X,Se,Q,Re);let St,vt=P;if(Re!==null&&(St=S.get(Re),vt=W,vt.setIndex(St)),Y.isMesh)X.wireframe===!0?(xe.setLineWidth(X.wireframeLinewidth*lt()),vt.setMode(O.LINES)):vt.setMode(O.TRIANGLES);else if(Y.isLine){let Ht=X.linewidth;Ht===void 0&&(Ht=1),xe.setLineWidth(Ht*lt()),Y.isLineSegments?vt.setMode(O.LINES):Y.isLineLoop?vt.setMode(O.LINE_LOOP):vt.setMode(O.LINE_STRIP)}else Y.isPoints?vt.setMode(O.POINTS):Y.isSprite&&vt.setMode(O.TRIANGLES);if(Y.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))vt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Ht=Y._multiDrawStarts,Be=Y._multiDrawCounts,ge=Y._multiDrawCount,me=Re?S.get(Re).bytesPerElement:1,qe=ze.get(X).currentProgram.getUniforms();for(let Ze=0;Ze<ge;Ze++)qe.setValue(O,"_gl_DrawID",Ze),vt.render(Ht[Ze]/me,Be[Ze])}else if(Y.isInstancedMesh)vt.renderInstances(Fe,Ut,Y.count);else if(Q.isInstancedBufferGeometry){let Ht=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Be=Math.min(Q.instanceCount,Ht);vt.renderInstances(Fe,Ut,Be)}else vt.render(Fe,Ut)};function Mt(b,B,Q,X){D!==null&&b.isNodeMaterial&&D.setObject(X,b),fe===!0&&ee.setState(b,Q,!1),b.transparent===!0&&b.side===cn&&b.forceSinglePass===!1?(b.side=Yt,b.needsUpdate=!0,In(b,B,X),b.side=gi,b.needsUpdate=!0,In(b,B,X),b.side=cn):In(b,B,X)}this.compile=function(b,B,Q=null){Q===null&&(Q=b),D!==null&&D.renderStart(b,B,Q),A=$.get(Q),A.init(B),M.push(A),Q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),b!==Q&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),A.setupLights(),D!==null&&D.updateLights(A.state.lightsArray),we=this.localClippingEnabled,fe=ee.init(this.clippingPlanes,we),fe===!0&&ee.setGlobalState(this.clippingPlanes,B),D!==null&&pe.render(A.state.shadowsArray,Q,B);let X=new Set;return b.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let be=Y.material;if(be)if(Array.isArray(be))for(let Ue=0;Ue<be.length;Ue++){let Se=be[Ue];Mt(Se,Q,B,Y),X.add(Se)}else Mt(be,Q,B,Y),X.add(be)}),A=M.pop(),D!==null&&D.renderEnd(),X},this.compileAsync=function(b,B,Q=null){let X=this.compile(b,B,Q);return new Promise(Y=>{function be(){if(X.forEach(function(Ue){let Re=ze.get(Ue).currentProgram;(Re===void 0||Re.isReady())&&X.delete(Ue)}),X.size===0){Y(b);return}setTimeout(be,10)}nt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let xi=null;function Ps(b){xi&&xi(b)}function Fi(){Pn.stop()}function vi(){Pn.start()}let Pn=new vu;Pn.setAnimationLoop(Ps),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(b){xi=b,ne.setAnimationLoop(b),b===null?Pn.stop():Pn.start()},ne.addEventListener("sessionstart",Fi),ne.addEventListener("sessionend",vi),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;D!==null&&D.renderStart(b,B);let Q=ne.enabled===!0&&ne.isPresenting===!0,X=N!==null&&(ce===null||Q)&&N.begin(w,ce);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(B),B=ne.getCamera()),b.isScene===!0&&b.onBeforeRender(w,b,B,ce),A=$.get(b,M.length),A.init(B),A.state.textureUnits=Ge.getTextureUnits(),M.push(A),ve.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?oe.setFromArrayCamera(B):se.setFromProjectionMatrix(ve,dn,B.reversedDepth),we=this.localClippingEnabled,fe=ee.init(this.clippingPlanes,we),R=ue.get(b,_.length),R.init(),_.push(R),this.info.render.frame++,ne.enabled===!0&&ne.isPresenting===!0){let Ue=w.xr.getDepthSensingMesh();Ue!==null&&Oi(Ue,B,-1/0,w.sortObjects)}Oi(b,B,0,w.sortObjects),R.finish(),D!==null&&D.updateLights(A.state.lightsArray),w.sortObjects===!0&&R.sort(Pe,at),tt=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,tt&&U.addToRenderList(R,b),this.info.autoReset===!0&&this.info.reset(),fe===!0&&ee.beginShadows();let Y=A.state.shadowsArray;if(pe.render(Y,b,B),fe===!0&&ee.endShadows(),(X&&N.hasRenderPass())===!1){let Ue=R.opaque,Se=R.transmissive;if(A.setupLights(),B.isArrayCamera){let Re=B.cameras;if(Se.length>0)for(let ke=0,it=Re.length;ke<it;ke++){let ht=Re[ke];Is(Ue,Se,b,ht)}tt&&U.render(b);for(let ke=0,it=Re.length;ke<it;ke++){let ht=Re[ke];Bi(R,b,ht,ht.viewport)}}else Se.length>0&&Is(Ue,Se,b,B),tt&&U.render(b),Bi(R,b,B)}ce!==null&&V===0&&(Ge.updateMultisampleRenderTarget(ce),Ge.updateRenderTargetMipmap(ce)),X&&N.end(w),b.isScene===!0&&b.onAfterRender(w,b,B),te.resetDefaultState(),q=-1,j=null,M.pop(),M.length>0?(A=M[M.length-1],Ge.setTextureUnits(A.state.textureUnits),fe===!0&&ee.setGlobalState(w.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?R=_[_.length-1]:R=null,D!==null&&D.renderEnd()};function Oi(b,B,Q,X){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)Q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)A.pushLight(b),b.castShadow&&A.pushShadow(b);else if(b.isSprite){let Ue=B.isArrayCamera?oe:se;if(!b.frustumCulled||b.intersectsFrustum(Ue)){X&&Ne.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ve);let Se=de.update(b),Re=b.material;Re.visible&&R.push(b,Se,Re,Q,Ne.z,null,B)}}else if(b.isMesh||b.isLine||b.isPoints){let Ue=B.isArrayCamera?oe:se;if(!b.frustumCulled||b.intersectsFrustum(Ue)){let Se=de.update(b),Re=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ne.copy(b.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ne.copy(Se.boundingSphere.center)),Ne.applyMatrix4(b.matrixWorld).applyMatrix4(ve)),Array.isArray(Re)){let ke=Se.groups;for(let it=0,ht=ke.length;it<ht;it++){let Fe=ke[it],rt=Re[Fe.materialIndex];rt&&rt.visible&&R.push(b,Se,rt,Q,Ne.z,Fe,B)}}else Re.visible&&R.push(b,Se,Re,Q,Ne.z,null,B)}}}let be=b.children;for(let Ue=0,Se=be.length;Ue<Se;Ue++)Oi(be[Ue],B,Q,X)}function Bi(b,B,Q,X){let{opaque:Y,transmissive:be,transparent:Ue}=b;A.setupLightsView(Q),fe===!0&&ee.setGlobalState(w.clippingPlanes,Q),X&&xe.viewport(ae.copy(X)),Y.length>0&&yi(Y,B,Q),be.length>0&&yi(be,B,Q),Ue.length>0&&yi(Ue,B,Q),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Is(b,B,Q,X){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[X.id]===void 0){let Fe=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[X.id]=new on(1,1,{generateMipmaps:!0,type:Fe?An:nn,minFilter:ti,samples:Math.max(4,et.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pt.workingColorSpace})}let be=A.state.transmissionRenderTarget[X.id],Ue=X.viewport||ae;be.setSize(Ue.z*w.transmissionResolutionScale,Ue.w*w.transmissionResolutionScale);let Se=w.getRenderTarget(),Re=w.getActiveCubeFace(),ke=w.getActiveMipmapLevel();w.setRenderTarget(be),w.getClearColor(J),_e=w.getClearAlpha(),_e<1&&w.setClearColor(16777215,.5),w.clear(),tt&&U.render(Q);let it=w.toneMapping;w.toneMapping=zn;let ht=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),A.setupLightsView(X),fe===!0&&ee.setGlobalState(w.clippingPlanes,X),yi(b,Q,X),Ge.updateMultisampleRenderTarget(be),Ge.updateRenderTargetMipmap(be),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let rt=0,Ut=B.length;rt<Ut;rt++){let St=B[rt],{object:vt,geometry:Ht,material:Be,group:ge}=St;if(Be.side===cn&&vt.layers.test(X.layers)){let me=Be.side;Be.side=Yt,Be.needsUpdate=!0,Ls(vt,Q,X,Ht,Be,ge),Be.side=me,Be.needsUpdate=!0,Fe=!0}}Fe===!0&&(Ge.updateMultisampleRenderTarget(be),Ge.updateRenderTargetMipmap(be))}w.setRenderTarget(Se,Re,ke),w.setClearColor(J,_e),ht!==void 0&&(X.viewport=ht),w.toneMapping=it}function yi(b,B,Q){let X=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,be=b.length;Y<be;Y++){let Ue=b[Y],{object:Se,geometry:Re,group:ke}=Ue,it=Ue.material;it.allowOverride===!0&&X!==null&&(it=X),Se.layers.test(Q.layers)&&Ls(Se,B,Q,Re,it,ke)}}function Ls(b,B,Q,X,Y,be){D!==null&&Y.isNodeMaterial&&D.setObject(b,Y),b.onBeforeRender(w,B,Q,X,Y,be),b.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(w,B,Q,X,b,be),Y.transparent===!0&&Y.side===cn&&Y.forceSinglePass===!1?(Y.side=Yt,Y.needsUpdate=!0,w.renderBufferDirect(Q,B,X,Y,b,be),Y.side=gi,Y.needsUpdate=!0,w.renderBufferDirect(Q,B,X,Y,b,be),Y.side=cn):w.renderBufferDirect(Q,B,X,Y,b,be),b.onAfterRender(w,B,Q,X,Y,be)}function Hi(b){let B=0;for(let Q of b)Q.texture!==null&&B++;return B}function In(b,B,Q){B.isScene!==!0&&(B=je);let X=ze.get(b),Y=A.state.lights,be=A.state.shadowsArray,Ue=Y.state.version,Se=re.getParameters(b,Y.state,be,B,Q,A.state.lightProbeGridArray),Re=re.getProgramCacheKey(Se),ke=X.programs;X.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?B.environment:null,X.fog=B.fog;let it=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;X.envMap=C.get(b.envMap||X.environment,it),X.envMapRotation=X.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,ke===void 0&&(b.addEventListener("dispose",mt),ke=new Map,X.programs=ke,X.programVariants=new Map);let ht=ke.get(Re);if(ht!==void 0){if(X.currentProgram===ht&&X.lightsStateVersion===Ue)return Ns(b,Se),ht}else Se.uniforms=re.getUniforms(b),D!==null&&b.isNodeMaterial&&D.build(b,Q,Se),b.onBeforeCompile(Se,w),ht=re.acquireProgram(Se,Re),ke.set(Re,ht),X.uniforms=Se.uniforms;let Fe=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Fe.clippingPlanes=ee.uniform),Ns(b,Se),X.needsLights=Jr(b),X.lightsStateVersion=Ue,X.needsLights&&(Fe.ambientLightColor.value=Y.state.ambient,Fe.lightProbe.value=Y.state.probe,Fe.sunLights.value=Y.state.sun,Fe.sunLightShadows.value=Y.state.sunShadow,Fe.directionalLights.value=Y.state.directional,Fe.directionalLightShadows.value=Y.state.directionalShadow,Fe.spotLights.value=Y.state.spot,Fe.spotLightShadows.value=Y.state.spotShadow,Fe.rectAreaLights.value=Y.state.rectArea,Fe.ltc_1.value=Y.state.rectAreaLTC1,Fe.ltc_2.value=Y.state.rectAreaLTC2,Fe.pointLights.value=Y.state.point,Fe.pointLightShadows.value=Y.state.pointShadow,Fe.hemisphereLights.value=Y.state.hemi,Fe.sunShadowMatrix.value=Y.state.sunShadowMatrix,Fe.sunShadowCascade.value=Y.state.sunShadowCascade,Fe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Fe.spotLightMatrix.value=Y.state.spotLightMatrix,Fe.spotLightMap.value=Y.state.spotLightMap,Fe.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.numLightProbeGrids=Hi(A.state.lightProbeGridArray),X.currentProgram=ht,X.uniformsList=null,ht}function Zr(b,B,Q,X,Y){let be=ze.get(b),Ue=be.currentProgram.id+","+X+","+Y,Se=be.programVariants.get(Ue);return Se===void 0?(Se=In(b,B,Q),be.programVariants.set(Ue,Se)):(be.currentProgram=Se,be.uniformsList=null,be.outputColorSpace=X,be.toneMapping=Y),Se}function Ds(b){if(b.uniformsList===null){let B=b.currentProgram.getUniforms();b.uniformsList=bs.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function Ns(b,B){let Q=ze.get(b);Q.outputColorSpace=B.outputColorSpace,Q.batching=B.batching,Q.batchingColor=B.batchingColor,Q.instancing=B.instancing,Q.instancingColor=B.instancingColor,Q.instancingMorph=B.instancingMorph,Q.skinning=B.skinning,Q.morphTargets=B.morphTargets,Q.morphNormals=B.morphNormals,Q.morphColors=B.morphColors,Q.morphTargetsCount=B.morphTargetsCount,Q.numClippingPlanes=B.numClippingPlanes,Q.numIntersection=B.numClipIntersection,Q.vertexAlphas=B.vertexAlphas,Q.vertexTangents=B.vertexTangents,Q.toneMapping=B.toneMapping}function Us(b,B,Q,X,Y){B.isScene!==!0&&(B=je),Ge.resetTextureUnits();let be=B.fog,Ue=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?B.environment:null,Se=ce===null?w.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:pt.workingColorSpace,Re=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,ke=C.get(X.envMap||Ue,Re),it=X.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ht=!!Q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Fe=!!Q.morphAttributes.position,rt=!!Q.morphAttributes.normal,Ut=!!Q.morphAttributes.color,St=zn;X.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(St=w.toneMapping);let vt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ht=vt!==void 0?vt.length:0,Be=ze.get(X),ge=A.state.lights;if(fe===!0&&(we===!0||b!==j)){let Et=b===j&&X.id===q;ee.setState(X,b,Et)}let me=!1,qe=!1;X.version===Be.__version?Be.needsLights&&Be.lightsStateVersion!==ge.state.version||Y.isBatchedMesh&&Be.batching===!1||!Y.isBatchedMesh&&Be.batching===!0||Y.isBatchedMesh&&Be.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Be.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Be.instancing===!1||!Y.isInstancedMesh&&Be.instancing===!0||Y.isSkinnedMesh&&Be.skinning===!1||!Y.isSkinnedMesh&&Be.skinning===!0||Y.isInstancedMesh&&Be.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Be.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Be.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Be.instancingMorph===!1&&Y.morphTexture!==null||Be.envMap!==ke||X.fog===!0&&Be.fog!==be||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ee.numPlanes||Be.numIntersection!==ee.numIntersection)||Be.vertexAlphas!==it||Be.vertexTangents!==ht||Be.morphTargets!==Fe||Be.morphNormals!==rt||Be.morphColors!==Ut||Be.morphTargetsCount!==Ht||Be.numLightProbeGrids!==Hi(A.state.lightProbeGridArray)?me=!0:(Be.outputColorSpace!==Se||Be.toneMapping!==St)&&(qe=!0):(me=!0,Be.__version=X.version);let Ze=Be.currentProgram;(me===!0||qe===!0)&&(Ze=qe===!0?Zr(X,B,Y,Se,St):In(X,B,Y),D&&X.isNodeMaterial&&D.onUpdateProgram(X,Ze,Be));let At=!1,en=!1,hn=!1,ot=Ze.getUniforms(),wt=Be.uniforms;if(xe.useProgram(Ze.program)&&(At=!0,en=!0,hn=!0),X.id!==q&&(q=X.id,en=!0),At||j!==b){xe.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ot.setValue(O,"projectionMatrix",b.projectionMatrix),ot.setValue(O,"viewMatrix",b.matrixWorldInverse);let Rt=ot.map.cameraPosition;Rt!==void 0&&Rt.setValue(O,Ye.setFromMatrixPosition(b.matrixWorld)),et.logarithmicDepthBuffer&&ot.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ot.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),j!==b&&(j=b,en=!0,hn=!0)}if(Be.needsLights&&(ge.state.sunShadowMap.length>0&&ot.setValue(O,"sunShadowMap",ge.state.sunShadowMap,Ge),ge.state.directionalShadowMap.length>0&&ot.setValue(O,"directionalShadowMap",ge.state.directionalShadowMap,Ge),ge.state.spotShadowMap.length>0&&ot.setValue(O,"spotShadowMap",ge.state.spotShadowMap,Ge),ge.state.pointShadowMap.length>0&&ot.setValue(O,"pointShadowMap",ge.state.pointShadowMap,Ge)),Y.isSkinnedMesh){ot.setOptional(O,Y,"bindMatrix"),ot.setOptional(O,Y,"bindMatrixInverse");let Et=Y.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),ot.setValue(O,"boneTexture",Et.boneTexture,Ge))}Y.isBatchedMesh&&(ot.setOptional(O,Y,"batchingTexture"),ot.setValue(O,"batchingTexture",Y._matricesTexture,Ge),ot.setOptional(O,Y,"batchingIdTexture"),ot.setValue(O,"batchingIdTexture",Y._indirectTexture,Ge),ot.setOptional(O,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ot.setValue(O,"batchingColorTexture",Y._colorsTexture,Ge));let Ft=Q.morphAttributes;if((Ft.position!==void 0||Ft.normal!==void 0||Ft.color!==void 0)&&K.update(Y,Q,Ze),(en||Be.receiveShadow!==Y.receiveShadow)&&(Be.receiveShadow=Y.receiveShadow,ot.setValue(O,"receiveShadow",Y.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&B.environment!==null&&(wt.envMapIntensity.value=B.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=j0()),en){if(ot.setValue(O,"toneMappingExposure",w.toneMappingExposure),Be.needsLights&&Fs(wt,hn),be&&X.fog===!0&&Z.refreshFogUniforms(wt,be),Z.refreshMaterialUniforms(wt,X,ie,Oe,A.state.transmissionRenderTarget[b.id]),Be.needsLights&&Be.numLightProbeGrids>0){let Et=x,Rt=0;for(let yn of A.state.lightProbeGridArray)yn.texture!==null&&(Et.textures[Rt]=yn.texture,Et.min[Rt]=yn.boundingBox.min,Et.max[Rt]=yn.boundingBox.max,Et.resolution[Rt]=yn.resolution,Rt++);for(let yn in Et)Et[yn].length=Rt;wt.probesSH.value=Et.textures,wt.probesMin.value=Et.min,wt.probesMax.value=Et.max,wt.probesResolution.value=Et.resolution}bs.upload(O,Ds(Be),wt,Ge)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(bs.upload(O,Ds(Be),wt,Ge),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ot.setValue(O,"center",Y.center),ot.setValue(O,"modelViewMatrix",Y.modelViewMatrix),ot.setValue(O,"normalMatrix",Y.normalMatrix),ot.setValue(O,"modelMatrix",Y.matrixWorld),X.uniformsGroups!==void 0){let Et=X.uniformsGroups;for(let Rt=0,yn=Et.length;Rt<yn;Rt++){let Os=Et[Rt];he.update(Os,Ze),he.bind(Os,Ze)}}return Ze}function Fs(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.sunLights.needsUpdate=B,b.sunLightShadows.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function Jr(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ce},this.setRenderTargetTextures=function(b,B,Q){let X=ze.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),ze.get(b.texture).__webglTexture=B,ze.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){let Q=ze.get(b);Q.__webglFramebuffer=B,Q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,Q=0){ce=b,z=B,V=Q;let X=null,Y=!1,be=!1;if(b){let Se=ze.get(b);if(Se.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(O.FRAMEBUFFER,Se.__webglFramebuffer),ae.copy(b.viewport),Ee.copy(b.scissor),Ve=b.scissorTest,xe.viewport(ae),xe.scissor(Ee),xe.setScissorTest(Ve),q=-1;return}else if(Se.__webglFramebuffer===void 0)Ge.setupRenderTarget(b);else if(Se.__hasExternalTextures)Ge.rebindTextures(b,ze.get(b.texture).__webglTexture,ze.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let it=b.depthTexture;if(Se.__boundDepthTexture!==it){if(it!==null&&ze.has(it)&&(b.width!==it.image.width||b.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(b)}}let Re=b.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(be=!0);let ke=ze.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ke[B])?X=ke[B][Q]:X=ke[B],Y=!0):b.samples>0&&Ge.useMultisampledRTT(b)===!1?X=ze.get(b).__webglMultisampledFramebuffer:Array.isArray(ke)?X=ke[Q]:X=ke,ae.copy(b.viewport),Ee.copy(b.scissor),Ve=b.scissorTest}else ae.copy(Le).multiplyScalar(ie).floor(),Ee.copy(Xe).multiplyScalar(ie).floor(),Ve=Ie;if(Q!==0&&(X=F),xe.bindFramebuffer(O.FRAMEBUFFER,X)&&xe.drawBuffers(b,X),xe.viewport(ae),xe.scissor(Ee),xe.setScissorTest(Ve),Y){let Se=ze.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,Se.__webglTexture,Q)}else if(be){let Se=B;for(let Re=0;Re<b.textures.length;Re++){let ke=ze.get(b.textures[Re]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Re,ke.__webglTexture,Q,Se)}}else if(b!==null&&Q!==0){let Se=ze.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Se.__webglTexture,Q)}q=-1};function zi(b){let B=ze.get(b);return(B.__readFormat!==b.format||B.__readType!==b.type)&&(B.__readFormat=b.format,B.__readType=b.type,B.__formatReadable=et.textureFormatReadable(b.format),B.__typeReadable=et.textureTypeReadable(b.type)),B}this.readRenderTargetPixels=function(b,B,Q,X,Y,be,Ue,Se=0){if(!(b&&b.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ue!==void 0&&(Re=Re[Ue],Array.isArray(Re)&&(Re=Re[0])),Re){xe.bindFramebuffer(O.FRAMEBUFFER,Re);try{let ke=b.textures[Se],it=ke.format,ht=ke.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Se);let Fe=zi(ke);if(Fe.__formatReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Fe.__typeReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-X&&Q>=0&&Q<=b.height-Y&&O.readPixels(B,Q,X,Y,G.convert(it),G.convert(ht),be)}finally{let ke=ce!==null?ze.get(ce).__webglFramebuffer:null;xe.bindFramebuffer(O.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(b,B,Q,X,Y,be,Ue,Se=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ue!==void 0&&(Re=Re[Ue],Array.isArray(Re)&&(Re=Re[0])),Re)if(B>=0&&B<=b.width-X&&Q>=0&&Q<=b.height-Y){xe.bindFramebuffer(O.FRAMEBUFFER,Re);let ke=b.textures[Se],it=ke.format,ht=ke.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Se);let Fe=zi(ke);if(Fe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Fe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let rt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,rt),O.bufferData(O.PIXEL_PACK_BUFFER,be.byteLength,O.STREAM_READ),O.readPixels(B,Q,X,Y,G.convert(it),G.convert(ht),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ut=ce!==null?ze.get(ce).__webglFramebuffer:null;xe.bindFramebuffer(O.FRAMEBUFFER,Ut);let St=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await zh(O,St,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,rt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,be),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(rt),O.deleteSync(St),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,Q=0){let X=Math.pow(2,-Q),Y=Math.floor(b.image.width*X),be=Math.floor(b.image.height*X),Ue=B!==null?B.x:0,Se=B!==null?B.y:0;Ge.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,Ue,Se,Y,be),xe.unbindTexture()},this.copyTextureToTexture=function(b,B,Q=null,X=null,Y=0,be=0){let Ue,Se,Re,ke,it,ht,Fe,rt,Ut,St=b.isCompressedTexture?b.mipmaps[be]:b.image;if(Q!==null)Ue=Q.max.x-Q.min.x,Se=Q.max.y-Q.min.y,Re=Q.isBox3?Q.max.z-Q.min.z:1,ke=Q.min.x,it=Q.min.y,ht=Q.isBox3?Q.min.z:0;else{let ot=Math.pow(2,-Y);Ue=Math.floor(St.width*ot),Se=Math.floor(St.height*ot),b.isDataArrayTexture?Re=St.depth:b.isData3DTexture?Re=Math.floor(St.depth*ot):Re=1,ke=0,it=0,ht=0}X!==null?(Fe=X.x,rt=X.y,Ut=X.z):(Fe=0,rt=0,Ut=0);let vt=G.convert(B.format),Ht=G.convert(B.type),Be;B.isData3DTexture?(Ge.setTexture3D(B,0),Be=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Ge.setTexture2DArray(B,0),Be=O.TEXTURE_2D_ARRAY):(Ge.setTexture2D(B,0),Be=O.TEXTURE_2D),xe.activeTexture(O.TEXTURE0),xe.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),xe.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),xe.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);let ge=xe.getParameter(O.UNPACK_ROW_LENGTH),me=xe.getParameter(O.UNPACK_IMAGE_HEIGHT),qe=xe.getParameter(O.UNPACK_SKIP_PIXELS),Ze=xe.getParameter(O.UNPACK_SKIP_ROWS),At=xe.getParameter(O.UNPACK_SKIP_IMAGES);xe.pixelStorei(O.UNPACK_ROW_LENGTH,St.width),xe.pixelStorei(O.UNPACK_IMAGE_HEIGHT,St.height),xe.pixelStorei(O.UNPACK_SKIP_PIXELS,ke),xe.pixelStorei(O.UNPACK_SKIP_ROWS,it),xe.pixelStorei(O.UNPACK_SKIP_IMAGES,ht);let en=b.isDataArrayTexture||b.isData3DTexture,hn=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){let ot=ze.get(b),wt=ze.get(B),Ft=ze.get(ot.__renderTarget),Et=ze.get(wt.__renderTarget);xe.bindFramebuffer(O.READ_FRAMEBUFFER,Ft.__webglFramebuffer),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Rt=0;Rt<Re;Rt++)en&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ze.get(b).__webglTexture,Y,ht+Rt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ze.get(B).__webglTexture,be,Ut+Rt)),O.blitFramebuffer(ke,it,ke+Ue,it+Se,Fe,rt,Fe+Ue,rt+Se,O.DEPTH_BUFFER_BIT,O.NEAREST);xe.bindFramebuffer(O.READ_FRAMEBUFFER,null),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Y!==0||b.isRenderTargetTexture||ze.has(b)){let ot=ze.get(b),wt=ze.get(B);xe.bindFramebuffer(O.READ_FRAMEBUFFER,I),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,H);for(let Ft=0;Ft<Re;Ft++)en?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ot.__webglTexture,Y,ht+Ft):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ot.__webglTexture,Y),hn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,wt.__webglTexture,be,Ut+Ft):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,wt.__webglTexture,be),Y!==0?O.blitFramebuffer(ke,it,ke+Ue,it+Se,Fe,rt,Fe+Ue,rt+Se,O.COLOR_BUFFER_BIT,O.NEAREST):hn?O.copyTexSubImage3D(Be,be,Fe,rt,Ut+Ft,ke,it,Ue,Se):O.copyTexSubImage2D(Be,be,Fe,rt,ke,it,Ue,Se);xe.bindFramebuffer(O.READ_FRAMEBUFFER,null),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else hn?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(Be,be,Fe,rt,Ut,Ue,Se,Re,vt,Ht,St.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(Be,be,Fe,rt,Ut,Ue,Se,Re,vt,St.data):O.texSubImage3D(Be,be,Fe,rt,Ut,Ue,Se,Re,vt,Ht,St):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,be,Fe,rt,Ue,Se,vt,Ht,St.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,be,Fe,rt,St.width,St.height,vt,St.data):O.texSubImage2D(O.TEXTURE_2D,be,Fe,rt,Ue,Se,vt,Ht,St);xe.pixelStorei(O.UNPACK_ROW_LENGTH,ge),xe.pixelStorei(O.UNPACK_IMAGE_HEIGHT,me),xe.pixelStorei(O.UNPACK_SKIP_PIXELS,qe),xe.pixelStorei(O.UNPACK_SKIP_ROWS,Ze),xe.pixelStorei(O.UNPACK_SKIP_IMAGES,At),be===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&O.generateMipmap(Be),xe.unbindTexture()},this.initRenderTarget=function(b){ze.get(b).__webglFramebuffer===void 0&&Ge.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ge.setTextureCube(b,0):b.isData3DTexture?Ge.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ge.setTexture2DArray(b,0):Ge.setTexture2D(b,0),xe.unbindTexture()},this.resetState=function(){z=0,V=0,ce=null,xe.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}};var Wr=new L;function vn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Wr.copy(e),Wr[n]=0,Wr.normalize();let l=.5*o/(o+a),h=1-Wr.angleTo(i)/c;return Math.sign(Wr[t])===1?h*l:a/(o+a)+l+l*(1-h)}var As=class i extends He{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new L,l=new L,h=new L(e,t,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,g=f.length/6,y=new L,m=.5/o;for(let p=0,v=0;p<f.length;p+=3,v+=2)switch(c.fromArray(f,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),f[p+0]=h.x*Math.sign(c.x)+l.x*r,f[p+1]=h.y*Math.sign(c.y)+l.y*r,f[p+2]=h.z*Math.sign(c.z)+l.z*r,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/g)){case 0:y.set(1,0,0),u[v+0]=vn(y,l,"z","y",r,n),u[v+1]=1-vn(y,l,"y","z",r,t);break;case 1:y.set(-1,0,0),u[v+0]=1-vn(y,l,"z","y",r,n),u[v+1]=1-vn(y,l,"y","z",r,t);break;case 2:y.set(0,1,0),u[v+0]=1-vn(y,l,"x","z",r,e),u[v+1]=vn(y,l,"z","x",r,n);break;case 3:y.set(0,-1,0),u[v+0]=1-vn(y,l,"x","z",r,e),u[v+1]=1-vn(y,l,"z","x",r,n);break;case 4:y.set(0,0,1),u[v+0]=1-vn(y,l,"x","y",r,e),u[v+1]=1-vn(y,l,"y","x",r,t);break;case 5:y.set(0,0,-1),u[v+0]=vn(y,l,"x","y",r,e),u[v+1]=1-vn(y,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function Za(){let i=[],e=[],t=T=>(i.push(T),T),n=(T,D=.45,F=.15)=>{let I=new Ke({color:T,roughness:D,metalness:F});return e.push(I),I},s=n(15856111,.32,.35),r=n(3949898,.4,.6),o=n(1318690,.65,.1),a=n(12042692,.23,.88),c=n(35440,.35,.32),l=n(15245359,.4,.3),h=n(10825255,.65),f=n(2370349,.94,0),d=new Hn({color:529693,roughness:.13,metalness:.25,clearcoat:1});e.push(d);let u=n(1925213,.24,.15),g=new ei().load("/assets/brand/anthrise-official.png");g.colorSpace=Pt;let y=new Ke({map:g,roughness:.4});e.push(y);let m=t(new He(1,1,1));function p(T,D,F,I,H,z,V,ce,q=0){let j=new le(q?t(new As(H,z,V,3,Math.min(q,H*.2,z*.2,V*.2))):m,ce);return q||j.scale.set(H,z,V),j.position.set(D,F,I),j.castShadow=!0,j.receiveShadow=!0,T.add(j),j}function v(T,D,F,I,H,z,V,ce="y"){let q=new le(t(new Tt(H,H,z,20)),V);return q.position.set(D,F,I),ce==="x"&&(q.rotation.z=Math.PI/2),ce==="z"&&(q.rotation.x=Math.PI/2),q.castShadow=!0,T.add(q),q}function E(T,D,F,I,H){let z=new le(t(new zt(H,H/5.28)),y);z.position.set(D,F,I),T.add(z)}function x(T,D,F,I){let H=new mn(D.map(V=>new L(...V))),z=new le(t(new gn(H,24,F,5,!1)),I);T.add(z)}function R(T,D,F,I){for(let H of[-D/2+.035,D/2-.035])for(let z of[-F/2+.035,F/2-.035])v(T,H,z,I,.009,.007,a,"z")}function A(){let T=new ft;T.name="MeshProduct-ess16",p(T,0,.92,0,.9,1.65,.44,r,.07),p(T,0,.92,.223,.865,1.59,.028,s,.012),p(T,0,1.35,.245,.31,.17,.026,a,.012),p(T,0,1.35,.263,.292,.15,.018,d,.008),p(T,0,1.37,.274,.16,.065,.003,u,.001);for(let D=0;D<5;D++)p(T,-.105+D*.052,1.302,.276,.018,.006,.003,s);E(T,.12,.34,.24,.37),x(T,[[-.41,.49,.24],[-.1,.43,.24],[.19,.55,.24],[.4,.6,.24]],.009,c),x(T,[[.03,.52,.241],[.21,.64,.241],[.4,.67,.241]],.007,l);for(let D of[-.456,.456]){p(T,D,1.34,-.02,.009,.16,.17,o,.003);for(let F=0;F<17;F++)p(T,D,.4+F*.017,0,.009,.006,.21,o)}for(let D of[-.32,.32])for(let F of[-.14,.14])p(T,D,.13,F,.1,.1,.1,a,.01),v(T,D,.065,F,.067,.065,f,"x");for(let[D,F]of[[-.465,h],[-.465,o]])v(T,D,1.5,F===h?-.085:.085,.025,.03,F,"x");return p(T,-.465,1.39,0,.02,.035,.05,o,.002),T}function _(T=!1){let D=new ft;D.name=T?"MeshProduct-hybrid50":"MeshProduct-hybrid6";let F=T?1.32:.9,I=T?1.42:1.18,H=T?.52:.54;p(D,0,0,0,F,I,H,r,.055),p(D,0,0,H/2+.006,F*.95,I*.965,.03,s,.012),p(D,.08,-I*.3,H/2+.026,F*.77,I*.33,.014,r,.006),x(D,[[F*.46,-I*.06,H/2+.04],[F*.18,-I*.22,H/2+.04],[-F*.16,-I*.43,H/2+.04]],.008,c),p(D,0,I*.05,H/2+.034,F*.31,I*.2,.03,d,.012),p(D,0,I*.075,H/2+.051,F*.18,I*.065,.003,u),E(D,-F*.07,I*.32,H/2+.025,F*.43);for(let z of[-F/2-.004,F/2+.004])for(let V=0;V<15;V++)p(D,z,-I*.37+V*I*.051,-.03,.009,.012,H*.7,o);for(let z=0;z<6;z++){let V=-F*.34+z*F*.136;v(D,V,-I/2-.045,.05,.025,.1,z===0?h:o),v(D,V,-I/2-.1,.05,.019,.03,a)}return R(D,F*.95,I*.96,H/2+.028),D}function M(){let T=new ft;T.name="MeshProduct-horizon",p(T,0,1.36,0,1.22,2.35,1.05,s,.035),p(T,0,2.46,0,1.26,.1,1.09,c,.014),p(T,-.1,1.37,.537,.92,2.1,.025,s,.01),p(T,.32,1.42,.56,.025,.22,.04,r,.003),p(T,.4,1.6,.56,.06,.08,.02,l,.005),E(T,-.18,2.12,.558,.55);for(let D=0;D<12;D++)p(T,-.2,.39+D*.027,.559,.57,.012,.008,r);p(T,.73,1.64,0,.32,.85,.78,r,.025);for(let D=0;D<10;D++)p(T,.9,1.28+D*.07,0,.01,.02,.66,o);for(let D of[-.43,.43])for(let F of[-.35,.35])p(T,D,.12,F,.14,.22,.14,r,.015);for(let[D,F]of[[-.08,h],[.08,o]])v(T,D,.45,.55,.025,.07,F,"z");return T}function N(){let T=new ft;T.name="MeshProduct-volt1000",p(T,0,.34,0,.9,.63,.54,r,.05),p(T,0,.34,.277,.84,.55,.025,s,.012),p(T,0,.67,0,.56,.065,.07,o,.018);for(let D of[-.25,.25])p(T,D,.61,0,.06,.12,.07,o,.015);p(T,-.06,.45,.297,.31,.13,.012,d,.008),p(T,-.06,.455,.307,.18,.055,.003,u),v(T,.27,.46,.305,.047,.02,r,"z");for(let D of[-.26,-.08,.1])p(T,D,.22,.304,.13,.14,.008,r,.005),p(T,D-.025,.235,.313,.012,.03,.003,o),p(T,D+.025,.235,.313,.012,.03,.003,o),p(T,D,.198,.313,.02,.012,.003,o);for(let D of[.26,.32])for(let F of[.25,.32])p(T,F,D,.305,.04,.017,.006,o);for(let D of[-.456,.456])for(let F=0;F<11;F++)p(T,D,.14+F*.035,0,.008,.012,.33,o);v(T,.465,.28,0,.026,.035,l,"x");for(let D of[-.3,.3])for(let F of[-.17,.17])p(T,D,.02,F,.1,.04,.08,f,.006);return x(T,[[-.4,.075,.294],[0,.062,.294],[.4,.075,.294]],.008,c),T}function w(){let T=new ft;T.name="MeshProduct-seed24",p(T,0,.36,0,1.02,.64,.63,o,.026),p(T,0,.7,0,1.05,.07,.66,r,.015),p(T,0,.02,0,1.04,.04,.65,o,.008);for(let[D,F]of[[-.35,h],[.35,o]])v(T,D,.77,-.13,.045,.08,F),v(T,D,.82,-.13,.025,.03,a);p(T,0,.36,.321,.84,.4,.005,s,.001),E(T,0,.45,.328,.62),p(T,0,.25,.329,.83,.13,.004,c);for(let D of[-.54,.54])p(T,D,.54,0,.04,.2,.1,r,.005),v(T,D,.44,0,.035,.28,f,"z");return T}return{battery:A,inverter:_,cabinet:M,portable:N,seed:w,box:p,material:n,dispose(){i.forEach(T=>T.dispose()),e.forEach(T=>T.dispose()),g.dispose()}}}var Ja=4.4,Pu=1.04;function $a(){return new mn([[-85,0,10.6],[-28,0,10.6],[-15,0,10.8],[-5,0,10.3],[5,0,7.3],[15,0,4.9],[26,0,4.6],[35,0,8.8],[85,0,12.8]].map(i=>new L(i[0],i[1],i[2])),!1,"centripetal")}function Tc(i){let e=[[-15.677,1.505,4.65],[-15.677,1.34,4.48],[-14.72,1.34,4.48],[-14.72,1.76,4.48],[-14.715,1.76,4.68]],t=[[17.9,i+1.5,16.55],[18.28,i+.9,16.55],[18.55,i+.9,16.72],[18.55,i+1.3,16.72]];return{"z1-pv-inv":[[-12.5,4.6,2.9],[-12.5,4.1,4.48],[-16.55,4.1,4.48],[-16.55,2.1,4.48],[-16.045,2.1,4.48],[-16.045,1.505,4.65]],"z1-inv-bat-day":e,"z1-bat-inv-night":[...e].reverse(),"z1-bms":[[-15.48,1.53,4.68],[-15.48,1.25,4.5],[-14.7,1.25,4.5],[-14.7,1.65,4.68]],"z1-inv-ac-loads":[[-15.82,1.53,4.65],[-15.82,1.16,4.48],[-17.72,1.16,4.48],[-17.72,2.1,4.48],[-17.72,2.1,2.15],[-17.72,3.38,2.15],[-12.25,3.38,2.15],[-8.9,3.38,2.15],[-8.9,2.9,-.35]],"z1-grid":[[-21.1,6.2,.9],[-17.72,4.1,.9],[-17.72,2.1,.9],[-17.72,2.1,2.15]],"z2-pv-inv":[[17.2,5.85,-7.2],[15.6,5.6,-4.2],[15.6,2.85,-4.2],[15.2,2.85,-3.4],[15.2,1,-3.4]],"z2-inv-bat-day":[[15.2,1,-3.4],[15.2,.5,-2.83],[12.2,.5,-2.83],[12.2,.65,-2.9]],"z2-bat-inv-night":[[12.2,.65,-2.9],[12.2,.5,-2.83],[15.2,.5,-2.83],[15.2,1,-3.4]],"z2-ac-loads":[[16,1,-3.4],[16,.48,-2.83],[17.7,.48,-2.83],[17.7,1.8,-2.9],[17.7,4.8,-4.2],[24.2,4.8,-4.2],[24.2,4.9,-6.2]],"z2-grid":[[8.5,6.8,-11.5],[14.5,5,-7.2],[17.7,5,-4.2],[17.7,1.8,-2.9]],"z3-pv-storage":[[15.8,i+1.45,14.6],[16.1,i+.4,15.8],[17.9,i+.4,16.55],[17.9,i+1.5,16.55]],"z3-controller-seed":t,"z3-bat-night":[[18.55,i+1.3,16.72],[18.55,i+.7,16.65],[20.4,i+.7,16.65],[20.4,i+1.4,13.47]],"z3-portable-pv":[[23,i+.8,18.8],[23,i+.4,18.8],[22,i+.4,17.25],[22.015,i+.76,17.25]],"z3-field-loads":[[21.47,i+.7,17.563],[21.47,i+.5,17.563],[22.4,i+.5,17.55],[22.4,i+.5,14.4],[22.4,i+1.3,14.4]]}}function Ka(i){let e=new ps;for(let t=1;t<i.length;t++)e.add(new fs(new L(...i[t-1]),new L(...i[t])));return e}function Iu(i){let e=new ft;e.name="PhysicalCableHarness";let t=[],n=[],s=d=>{let u=new Ke({color:d,roughness:.75});return n.push(u),u},r=s(7831421),o=s(10301480),a=s(2239276),c=s(1203278),l=s(9675316);for(let[d,u]of Object.entries(Tc(i))){if(d.endsWith("night")&&d!=="z3-bat-night")continue;let g=d.includes("pv")||d.includes("bat")||d.includes("controller");for(let y=0;y<(g?2:1);y++){let m=u.map(E=>[E[0]+(g?y===0?-.027:.027:0),E[1],E[2]]);d==="z1-pv-inv"&&(m[m.length-1]=[y===0?-16.106:-15.984,1.505,4.65]),d==="z1-inv-bat-day"&&(m[0]=[y===0?-15.738:-15.616,1.505,4.65],m[m.length-1]=[-14.715,1.76,y===0?4.595:4.765]),d==="z3-controller-seed"&&(m[m.length-1]=[y===0?18.55:19.25,i+1.3,16.72]),d==="z3-bat-night"&&(m[0]=[y===0?18.55:19.25,i+1.3,16.72]);let p=new gn(Ka(m),Math.max(16,u.length*10),d.includes("bms")?.012:g?.018:.028,8,!1);t.push(p);let v=new le(p,d.includes("bms")?c:g?y?a:o:r);v.name="Cable-"+d+"-"+y,v.castShadow=!0,e.add(v)}}let h=[[-14.68,.52,4.68],[-14.68,.4,4.45],[-17.72,.4,4.45],[-17.72,1.65,2.15]],f=new gn(Ka(h),45,.013,6,!1);t.push(f),e.add(new le(f,l));for(let[d,u,g]of[[-16.55,2.1,4.5],[-14.8,1.34,4.5],[17.9,i+1.5,16.55]]){let y=new He(.21,.28,.13);t.push(y);let m=new le(y,r);m.position.set(d,u,g),m.castShadow=!0,e.add(m);let p=new He(.055,.09,.03);t.push(p);let v=new le(p,o);v.position.set(d,u,g+.08),e.add(v)}return{group:e,dispose(){t.forEach(d=>d.dispose()),n.forEach(d=>d.dispose())}}}function Rs(i){let e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)}function Nt(i,e){let t=i-21,n=e-15.2,s=Math.exp(-(t*t)/145-n*n/95)*1.08,r=Math.hypot(i-4,e),o=_t.smoothstep(r,34,85),a=(Math.sin(i*.055)*Math.cos(e*.05)*1.45+Math.cos((i+e)*.035)*.85)*o;return s+a}function wc(i,e,t,n,s){let r=new jn,o=i/2,a=e/2;r.moveTo(-o+n,-a),r.lineTo(o-n,-a),r.quadraticCurveTo(o,-a,o,-a+n),r.lineTo(o,a-n),r.quadraticCurveTo(o,a,o-n,a),r.lineTo(-o+n,a),r.quadraticCurveTo(-o,a,-o,a-n),r.lineTo(-o,-a+n),r.quadraticCurveTo(-o,-a,-o+n,-a);let c=new yr(r,{depth:t,bevelEnabled:!0,bevelThickness:.05,bevelSize:.06,bevelSegments:2});c.rotateX(-Math.PI/2);let l=new le(c,s);return l.castShadow=!1,l.receiveShadow=!0,l}function Lu(i){let e=new ft;e.name="AnthriseEnergyCampus";let t=Za(),n=Iu(Nt(21,15.2));e.add(n.group);let s=[],r=[],o=ge=>(s.push(ge),ge),a=ge=>(r.push(ge),ge),c=a(new Ke({map:i.grassGround,color:10336132,roughness:.94,metalness:0})),l=a(new Ke({map:i.limestoneWall,color:15329248,roughness:.86,metalness:.04})),h=a(new Ke({map:i.limestoneWall,color:16184300,roughness:.82,metalness:.02})),f=a(new Ke({color:3885133,roughness:.56,metalness:.28})),d=a(new Ke({color:13949917,roughness:.55,metalness:.25})),u=a(new Ke({color:12766417,roughness:.32,metalness:.72})),g=a(new Ke({color:2503738,roughness:.38,metalness:.65})),y=a(new Hn({color:14676726,roughness:.08,metalness:.05,transparent:!0,opacity:.34,ior:1.48,reflectivity:.7})),m=a(new Hn({map:i.solarPanel,roughness:.22,metalness:.38,clearcoat:.65,clearcoatRoughness:.16})),p=a(new Ke({map:i.timberDeck,color:14136203,roughness:.8,metalness:.04})),v=a(new Ke({map:i.roadAsphalt,color:9279385,roughness:.88,metalness:.05})),E=a(new Ke({color:27477,roughness:.44,metalness:.18})),x=a(new Ke({color:15725299,roughness:.42,metalness:.22})),R=a(new Ke({color:7305853,roughness:.72,metalness:.3})),A=[],_=[],M=[],N=[],w=o(new zt(190,190,72,72));w.rotateX(-Math.PI/2);let T=w.attributes.position;for(let ge=0;ge<T.count;ge++){let me=T.getX(ge),qe=T.getZ(ge);T.setY(ge,Nt(me,qe))}w.computeVertexNormals();let D=new le(w,c);D.receiveShadow=!0,e.add(D);let F=$a(),I=(ge,me,qe)=>{let Ze=[],At=[],en=[],hn=new L(0,1,0),ot=new L;for(let Ft=0;Ft<=qe;Ft++){let Et=Ft/qe,Rt=ge.getPointAt(Et),yn=ge.getTangentAt(Et).normalize();ot.crossVectors(yn,hn).normalize();let Os=Nt(Rt.x,Rt.z)+.045;if(Ze.push(Rt.x-ot.x*(me*.5),Os,Rt.z-ot.z*(me*.5)),Ze.push(Rt.x+ot.x*(me*.5),Os,Rt.z+ot.z*(me*.5)),At.push(Et*6,0,Et*6,1),Ft<qe){let ki=Ft*2;en.push(ki,ki+1,ki+2,ki+1,ki+3,ki+2)}}let wt=new Xt;return wt.setAttribute("position",new dt(Ze,3)),wt.setAttribute("uv",new dt(At,2)),wt.setIndex(en),wt.computeVertexNormals(),o(wt)},H=new le(I(F,Ja,320),v);H.receiveShadow=!0,e.add(H);let z=o(new He(.65,.015,.12)),V=a(new tn({color:16777215,transparent:!0,opacity:.34})),ce=90,q=new qt(z,V,ce),j=new Lt;for(let ge=0;ge<ce;ge++){let me=(ge+.5)/ce,qe=F.getPointAt(me),Ze=F.getTangentAt(me);j.position.set(qe.x,Nt(qe.x,qe.z)+.06,qe.z),j.rotation.set(0,Math.atan2(-Ze.z,Ze.x),0),j.scale.setScalar(1),j.updateMatrix(),q.setMatrixAt(ge,j.matrix)}q.instanceMatrix.needsUpdate=!0,e.add(q);let ae=new mn([new L(30.5,0,7.2),new L(28.5,0,11.2),new L(25.2,0,14.2)]),Ee=a(new Ke({color:13157044,roughness:.92,metalness:.02})),Ve=new le(I(ae,1.35,22),Ee);Ve.receiveShadow=!0,e.add(Ve);let J=new ft;J.position.set(-11.5,0,2),e.add(J);let _e=wc(17.4,12.6,.24,.7,l);_e.position.set(0,0,.2),J.add(_e),s.push(_e.geometry);let Ae=o(new He(5.8,.08,3.6)),Oe=new le(Ae,v);Oe.position.set(-4.6,.23,6.2),Oe.receiveShadow=!0,J.add(Oe);for(let ge=0;ge<5;ge++){let me=o(new He(.9,.05,.55)),qe=new le(me,l);qe.position.set(2.2+ge*1.15,.26,4.4),qe.receiveShadow=!0,J.add(qe)}let ie=new ft;ie.position.set(0,.26,-.3),J.add(ie);let Pe=new le(o(new He(5.2,3.5,5.4)),h);Pe.position.set(-3.4,1.75,0),Pe.castShadow=!0,Pe.receiveShadow=!0,ie.add(Pe);let at=new le(o(new He(7.2,.14,5.2)),p);at.position.set(2.8,.07,0),at.receiveShadow=!0,ie.add(at);let Le=new le(o(new He(7.3,3.4,.26)),h);Le.position.set(2.8,1.7,-2.47),Le.castShadow=!0,Le.receiveShadow=!0,ie.add(Le);let Xe=new le(o(new He(.26,3.4,5.2)),h);Xe.position.set(6.32,1.7,0),Xe.castShadow=!0,Xe.receiveShadow=!0,ie.add(Xe);let Ie=new le(o(new He(7.3,.42,.34)),f);Ie.position.set(2.8,3.22,2.43),Ie.castShadow=!0,ie.add(Ie),[-.75,2.8,6.2].forEach(ge=>{let me=new le(o(new He(.11,3.1,.14)),g);me.position.set(ge,1.55,2.44),ie.add(me)});let se=new le(o(new zt(3.3,2.9)),y);se.position.set(4.5,1.6,2.44),ie.add(se);let oe=new le(o(new He(1.45,.4,.32)),x);oe.position.set(2.6,2.75,-2.18),ie.add(oe);let fe=new le(o(new He(1.25,.05,.06)),g);fe.position.set(2.6,2.6,-2.02),ie.add(fe);let we=a(new Ke({color:14279140,roughness:.28,metalness:.45})),ve=new le(o(new He(.95,2.05,.85)),we);ve.position.set(-.05,1.08,-1.75),ve.castShadow=!0,ie.add(ve);let Ye=new le(o(new He(3.2,.03,2.2)),a(new Ke({color:13227215,roughness:.95})));Ye.position.set(2.9,.15,.2),ie.add(Ye);let Ne=a(new Ke({color:5401191,roughness:.86})),je=new le(o(new He(2.3,.52,.95)),Ne);je.position.set(2.9,.4,-1.05),ie.add(je);let tt=new le(o(new He(2.3,.55,.25)),Ne);tt.position.set(2.9,.78,-1.4),ie.add(tt);let lt=new le(o(new He(1.15,.34,.65)),p);lt.position.set(2.9,.32,.25),ie.add(lt);let O=new le(o(new He(.48,.5,1.75)),p);O.position.set(5.9,.38,.1),ie.add(O);let xt=a(new Ke({color:1977395,emissive:6797526,emissiveIntensity:.12,roughness:.25}));A.push(xt);let nt=new le(o(new He(.08,.9,1.48)),xt);nt.position.set(6.08,1.45,.1),ie.add(nt);let et=a(new Ke({color:16774108,emissive:16759388,emissiveIntensity:.25,roughness:.35}));A.push(et);let xe=new le(o(new Tt(.18,.42,.28,18)),et);xe.position.set(2.9,2.95,.2),ie.add(xe);let gt=new _n(16758886,0,12,1.6);gt.position.set(2.9,2.65,.2),ie.add(gt),N.push({light:gt,maxIntensity:6.5});let ze=new ft;ze.position.set(.3,3.68,0),ie.add(ze);let Ge=new le(o(new He(13.2,.28,6.4)),f);Ge.rotation.x=.22,Ge.position.set(0,.55,.1),Ge.castShadow=!0,Ge.receiveShadow=!0,ze.add(Ge);for(let ge=0;ge<2;ge++)for(let me=0;me<4;me++){let qe=new le(o(new He(2.55,.08,1.9)),u),Ze=new le(o(new zt(2.45,1.8)),m);Ze.rotation.x=-Math.PI/2,Ze.position.y=.045;let At=new ft;At.add(qe,Ze),At.rotation.x=.22,At.position.set(-4.2+me*2.8,.72+(ge===0?.26:-.22),ge===0?-1.05:1.15),ze.add(At)}let C=t.inverter(!1);C.position.set(-4.3,1.95,2.9),ie.add(C);let S=t.battery();S.position.set(-2.75,0,2.98),ie.add(S);let k=new le(o(new Tt(.14,.19,6.6,12)),R);k.position.set(-9.6,3.3,-.8),k.castShadow=!0,ie.add(k);let de=new le(o(new He(.16,.14,1.65)),g);de.position.set(-9.6,6.1,-.8),ie.add(de);let re=new le(o(new He(.18,.85,.72)),x);re.position.set(-6.08,1.85,-.8),ie.add(re);let Z=new le(o(new He(.2,1.05,.92)),g);Z.position.set(-6.08,1.85,.45),ie.add(Z);let ue=new le(o(new Tt(.08,.11,1.55,10)),g);ue.position.set(7.1,1.02,4.4),ue.castShadow=!0,J.add(ue);let $=a(new Ke({color:16708824,emissive:16762472,emissiveIntensity:.04,roughness:.25}));_.push($);let ee=new le(o(new Tt(.24,.19,.28,14)),$);ee.position.set(7.1,1.84,4.4),J.add(ee);let pe=new le(o(new Tt(.25,.25,.04,14)),m);pe.position.set(7.1,2,4.4),J.add(pe);let U=new _n(16763768,0,8,1.8);U.position.set(7.1,1.75,4.4),J.add(U),N.push({light:U,maxIntensity:3.4});let K=new ft;K.position.set(19,0,-7),e.add(K);let P=wc(22.4,16.5,.26,.85,l);P.position.set(0,0,.4),K.add(P),s.push(P.geometry);let W=new ft;W.position.set(.8,.26,-1.6),K.add(W);let G=new le(o(new He(9.6,5.2,8.2)),d);G.position.set(-3.2,2.6,0),G.castShadow=!0,G.receiveShadow=!0,W.add(G);let te=a(new Ke({color:14936038,emissive:16764040,emissiveIntensity:.04,roughness:.72}));A.push(te);let he=new le(o(new He(7,4.2,7)),te);he.position.set(4.8,2.2,0),W.add(he);let De=new le(o(new He(7.4,4.5,7.6)),y);De.position.set(4.8,2.35,0),W.add(De),[.2,2.35,4.65].forEach(ge=>{let me=new le(o(new He(7.7,.22,7.9)),f);me.position.set(4.8,ge,0),me.castShadow=!0,W.add(me)}),[1.2,3.6,6,8.4].forEach(ge=>{let me=new le(o(new He(.16,4.6,.18)),g);me.position.set(ge,2.3,3.84),W.add(me)});let ne=new _n(16763775,0,14,1.5);ne.position.set(4.8,3,4.5),W.add(ne),N.push({light:ne,maxIntensity:5.5}),[-4.6,-2.1].forEach(ge=>{let me=new le(o(new He(1.75,1,1.5)),u);me.position.set(ge+8.5,5.25,-1.8),me.castShadow=!0,W.add(me);let qe=new le(o(new Tt(.48,.48,.14,16)),g);qe.position.set(ge+8.5,5.8,-1.8),W.add(qe)});for(let ge=0;ge<2;ge++)for(let me=0;me<5;me++){let qe=new le(o(new He(2.55,.09,2.15)),u),Ze=new le(o(new zt(2.45,2.05)),m);Ze.rotation.x=-Math.PI/2,Ze.position.y=.05;let At=new ft;At.add(qe,Ze),At.rotation.x=.24,At.position.set(-6+me*2.8,5.55,-2+ge*2.8),W.add(At)}[-6.8,-5.3].forEach(ge=>{let me=t.cabinet();me.position.set(ge,.2,3.55),K.add(me)});let Te=t.inverter(!0);Te.position.set(-3.4,1.6,3.55),K.add(Te);let Je=new le(o(new He(1.55,.2,.85)),g);Je.position.set(-3.4,.4,3.55),K.add(Je);for(let ge of[-3.9,-2.9])t.box(K,ge,1.4,3.23,.06,2.3,.08,g);for(let ge of[1.2,2.2])t.box(K,-3.4,ge,3.26,1.1,.06,.08,g);let ye=new le(o(new He(1.45,2.05,.95)),f);ye.position.set(-1.3,1.28,3.55),ye.castShadow=!0,K.add(ye);let mt=new le(o(new Tt(.16,.22,7.2,12)),R);mt.position.set(-10.5,3.6,-4.5),mt.castShadow=!0,K.add(mt),[[-1.2,8.8],[7.2,8.6]].forEach(([ge,me])=>{let qe=new le(o(new Tt(.09,.13,4.4,10)),g);qe.position.set(ge,2.2,me),qe.castShadow=!0,K.add(qe);let Ze=new le(o(new He(1.35,.14,.46)),u);Ze.position.set(ge,4.4,me-.32),K.add(Ze);let At=new le(o(new zt(1.28,.42)),m);At.rotation.x=-Math.PI/2,At.position.set(ge,4.48,me-.32),K.add(At);let en=a(new Ke({color:16777215,emissive:16770216,emissiveIntensity:.05,roughness:.2}));_.push(en);let hn=new le(o(new He(.88,.06,.32)),en);hn.position.set(ge,4.31,me-.32),K.add(hn);let ot=new _n(16768944,0,13,1.7);ot.position.set(ge,4,me-.3),K.add(ot),N.push({light:ot,maxIntensity:5.5});let wt=a(new tn({color:16769436,transparent:!0,opacity:0,depthWrite:!1}));M.push(wt);let Ft=new le(o(new us(2.6,24)),wt);Ft.rotation.x=-Math.PI/2,Ft.position.set(ge,.08,me-.5),K.add(Ft)});let Cn=Nt(21,15.2),Mt=new ft;Mt.position.set(21,Cn,15.2),e.add(Mt);let xi=wc(10.6,6.8,.28,.45,p);xi.position.set(.2,.02,0),Mt.add(xi),s.push(xi.geometry);let Ps=new le(o(new He(5.2,2.75,.24)),p);Ps.position.set(1.2,1.68,-1.65),Ps.castShadow=!0,Mt.add(Ps);let Fi=new le(o(new He(.24,2.75,3.2)),f);Fi.position.set(3.7,1.68,-.15),Fi.castShadow=!0,Mt.add(Fi);let vi=new le(o(new He(6.2,.2,4.2)),f);vi.rotation.x=.14,vi.position.set(1.2,3.22,-.1),vi.castShadow=!0,Mt.add(vi),[-1.3,3.6].forEach(ge=>{let me=new le(o(new Tt(.08,.08,2.75,8)),g);me.position.set(ge,1.68,1.35),Mt.add(me)});let Pn=new le(o(new He(2.1,.72,.85)),p);Pn.position.set(1.6,.68,-.8),Mt.add(Pn);let Oi=a(new Ke({color:1451562,emissive:6478268,emissiveIntensity:.35,roughness:.25}));A.push(Oi);let Bi=new le(o(new He(.54,.36,.04)),Oi);Bi.position.set(1.4,1.24,-.88),Bi.rotation.x=-.15,Mt.add(Bi);let Is=new le(o(new He(.68,.56,.48)),x);Is.position.set(2.9,.6,-.8),Mt.add(Is);let yi=a(new Ke({color:16773332,emissive:16758614,emissiveIntensity:.1,roughness:.28}));A.push(yi);let Ls=new le(o(new Tt(.14,.16,.28,12)),yi);Ls.position.set(.8,2.6,.6),Mt.add(Ls);let Hi=new _n(16760422,0,10,1.7);Hi.position.set(.8,2.45,.6),Mt.add(Hi),N.push({light:Hi,maxIntensity:4.8});let In=new ft;In.position.set(-5.2,.1,-.7),Mt.add(In),[-1,1].forEach(ge=>{let me=new le(o(new Tt(.06,.07,1.15,8)),g);me.position.set(ge,.55,.65);let qe=new le(o(new Tt(.06,.07,2.15,8)),g);qe.position.set(ge,1.05,-.65),In.add(me,qe)});for(let ge=0;ge<2;ge++){let me=new le(o(new He(1.75,.08,2.35)),u),qe=new le(o(new zt(1.65,2.25)),m);qe.rotation.x=-Math.PI/2,qe.position.y=.05;let Ze=new ft;Ze.add(me,qe),Ze.rotation.x=.56,Ze.position.set(ge===0?-.95:.95,1.48,0),In.add(Ze)}let Zr=new le(o(new He(3.8,.22,1.15)),f);Zr.position.set(-.9,.36,1.65),Mt.add(Zr);let Ds=t.seed();Ds.position.set(-2.1,.48,1.65),Mt.add(Ds);let Ns=t.portable();Ns.position.set(.55,.48,2.05),Mt.add(Ns);let Us=new le(o(new He(1.3,.05,1.4)),m);Us.rotation.x=.6,Us.position.set(2,.65,3.6),Mt.add(Us),t.box(Mt,-.6,1.4,-1.78,.23,.3,.1,g,.015);let Fs=new le(o(new Tt(.09,.14,4.35,10)),g);Fs.position.set(5.8,2.15,1.3),Fs.castShadow=!0,Mt.add(Fs);let Jr=new le(o(new He(.32,.56,.24)),u);Jr.position.set(5.8,3.15,1.44),Mt.add(Jr);let zi=new le(o(new He(1.15,.06,.88)),u);zi.rotation.x=.42,zi.position.set(5.8,4.5,1.3),Mt.add(zi);let b=new le(o(new zt(1.08,.8)),m);b.rotation.x=-Math.PI/2+.42,b.position.set(5.8,4.54,1.32),Mt.add(b);let B=new le(o(new He(1.25,.1,.2)),g);B.position.set(5.2,3.92,1.3),Mt.add(B);let Q=a(new Ke({color:16775398,emissive:16765306,emissiveIntensity:.06,roughness:.2}));_.push(Q);let X=new le(o(new He(.64,.09,.34)),Q);X.position.set(4.65,3.88,1.3),Mt.add(X);let Y=new _n(16766856,0,14,1.6);Y.position.set(4.65,3.65,1.3),Mt.add(Y),N.push({light:Y,maxIntensity:6.2});let be=a(new tn({color:16767370,transparent:!0,opacity:0,depthWrite:!1}));M.push(be);let Ue=new le(o(new us(2.5,24)),be);Ue.rotation.x=-Math.PI/2,Ue.position.set(4.65,.05,1.3),Mt.add(Ue);let Se=o(new Tt(.11,.16,1.15,7));Se.translate(0,.58,0);let Re=a(new Ke({color:7297607,roughness:.9})),ke=o(new di(.95,1));ke.scale(1,1.35,1),ke.translate(0,1.85,0);let it=a(new Ke({color:6065005,roughness:.85})),ht=[[-22.5,-6.5,1.05],[-21,5.2,.85],[-16,-7.2,1.15],[-2.5,-5.8,1.1],[-1.2,.2,.9],[3.8,-9.5,1.25],[5.2,2.2,.95],[7.2,-16.5,1.15],[14.2,-16.8,1.2],[29.5,-14.8,1.1],[32.4,-7.2,1.15],[33.8,.5,1],[10.2,13.8,1.1],[11.4,21.2,1.25],[16.2,22.8,.95],[27.4,21.8,1.15],[31.8,17.5,1.05],[-8.5,16.2,1.1],[-18.8,15,1.2],[-26.5,6.2,1.25],[-25.5,-13,1.3],[22.5,-18.5,1.18]],Fe=new qt(Se,Re,ht.length),rt=new qt(ke,it,ht.length);Fe.castShadow=!0,rt.castShadow=!0,ht.forEach(([ge,me,qe],Ze)=>{let At=Nt(ge,me);j.position.set(ge,At,me),j.rotation.set(0,Rs(Ze)*Math.PI*2,0),j.scale.setScalar(qe),j.updateMatrix(),Fe.setMatrixAt(Ze,j.matrix),rt.setMatrixAt(Ze,j.matrix),rt.setColorAt(Ze,new We().setHSL(.39+(Rs(Ze+5)-.5)*.04,.26,.42+Rs(Ze+12)*.08))}),Fe.instanceMatrix.needsUpdate=!0,rt.instanceMatrix.needsUpdate=!0,rt.instanceColor&&(rt.instanceColor.needsUpdate=!0);let Ut=o(new hr(.55,0)),St=a(new Ke({color:11449261,roughness:.92})),vt=[[13.8,13,.9],[14.9,17.2,.65],[17.6,20.6,1.1],[24.2,20,.85],[28.5,18.8,1.05],[29.5,12.6,.72],[12.2,10.6,.8],[8.6,15.8,1.15]],Ht=new qt(Ut,St,vt.length);vt.forEach(([ge,me,qe],Ze)=>{j.position.set(ge,Nt(ge,me)+.15,me),j.rotation.set(Rs(Ze)*.6,Rs(Ze+9)*Math.PI,Rs(Ze+17)*.5),j.scale.set(qe*1.25,qe*.72,qe),j.updateMatrix(),Ht.setMatrixAt(Ze,j.matrix)}),Ht.instanceMatrix.needsUpdate=!0;let Be=ge=>{let me=_t.clamp(ge,0,1);A.forEach((qe,Ze)=>{let At=Ze===2?.35:.12;qe.emissiveIntensity=_t.lerp(At,1.35,me)}),_.forEach(qe=>{qe.emissiveIntensity=_t.lerp(.05,1.9,me)}),M.forEach(qe=>{qe.opacity=_t.lerp(0,.22,me)}),N.forEach(qe=>{qe.light.intensity=qe.maxIntensity*me})};return Be(0),{root:e,terrainHeightAt:Nt,setNightFactor:Be,dispose:()=>{t.dispose(),n.dispose(),s.forEach(ge=>ge.dispose()),r.forEach(ge=>ge.dispose())}}}function Du(i,e){let t=Za(),n=new ft;n.name="ArchitecturalDetailLayer",i.add(n);let s=[],r=[],o=[],a=P=>(s.push(P),P),c=P=>(r.push(P),P),l=(P,W=.75,G=0)=>c(new Ke({color:P,roughness:W,metalness:G})),h=l(14210505,.88),f=l(2505270,.36,.4),d=l(9398085,.85),u=l(12500917,.9),g=c(new Hn({color:7312540,roughness:.18,metalness:.25,transparent:!0,opacity:.64,envMapIntensity:1.2})),y=l(15921640,.64),m=l(2107429,.54,.25),p=l(6837061,.95),v=c(new Ke({color:16772547,emissive:16759139,emissiveIntensity:.12,roughness:.6})),E=a(new He(1,1,1));function x(P,W,G,te,he,De,ne,Te,Je=!1){let ye=new le(Je?a(new As(he,De,ne,2,Math.min(he,De,ne)*.12)):E,Te);return Je||ye.scale.set(he,De,ne),ye.position.set(W,G,te),ye.castShadow=!0,ye.receiveShadow=!0,P.add(ye),ye}function R(P,W,G,te,he){let De=G.clone().sub(W),ne=new le(a(new Tt(te*.74,te,De.length(),7)),he);return ne.position.copy(W).add(G).multiplyScalar(.5),ne.quaternion.setFromUnitVectors(new L(0,1,0),De.normalize()),ne.castShadow=!0,P.add(ne),ne}function A(P,W,G,te){let he=new mn(W),De=new le(a(new gn(he,48,G,6,!1)),te);return P.add(De),De}let M=new ei().load("/assets/brand/anthrise-official.png");M.colorSpace=Pt,o.push(M);let N=c(new Ke({map:M,color:16777215,roughness:.65,metalness:0})),w=new ft;w.position.set(.8,Nt(.8,-12.8)+.1,-12.8),w.name="AnthriseConceptOffice",n.add(w),x(w,0,.02,0,11,.22,8,u),x(w,0,4.25,0,9.6,8.2,5.8,h),x(w,0,4.3,3.02,8.9,7.5,.1,g);for(let P=0;P<4;P++){let W=.6+P*2;x(w,0,W,3.13,9.7,.14,.3,f);for(let G=0;G<7;G++)x(w,-4.4+G*1.47,W+.92,3.12,.055,1.84,.16,f);for(let G=0;G<5;G++)x(w,-3.5+G*1.6,W+.4,1.95,.95,.05,.5,d),x(w,-3.5+G*1.6,W+.7,2.1,.35,.35,.1,m)}x(w,-3.4,1,3.15,2.2,2,.08,g);for(let P of[-3.9,-2.9])x(w,P,.95,3.25,.04,.5,.05,f);x(w,-2.9,2.25,3.65,3.8,.12,1.5,f),x(w,2.2,6.8,3.18,4.1,2.1,.15,y);let T=new le(a(new zt(3.55,.68)),N);T.position.set(2.2,7.05,3.27),w.add(T);let D=document.createElement("canvas");D.width=768,D.height=100;let F=D.getContext("2d");F.clearRect(0,0,768,100),F.fillStyle="#174e40",F.font="500 49px sans-serif",F.textAlign="center",F.fillText("T E C H N O L O G Y",384,66);let I=new pn(D);I.colorSpace=Pt,o.push(I);let H=new le(a(new zt(3.1,.4)),c(new Ke({map:I,transparent:!0,roughness:.8})));H.position.set(2.2,6.42,3.28),w.add(H),x(w,0,8.48,0,10.1,.24,6.3,f);for(let P=0;P<4;P++)x(w,-3.3+P*2.1,8.7,-.8,1.7,.08,2.5,c(new Ke({map:e.solarPanel,roughness:.25,metalness:.3})));let z=new ft;z.position.set(-11.5,.26,1.7),n.add(z);for(let P=.4;P<3.5;P+=.52)x(z,-3.4,P,2.715,5.12,.022,.025,u);for(let P=-5.5;P<-1;P+=1.1)x(z,P,1.75,2.72,.022,3.3,.025,u);for(let P of[-.76,2.8,6.2])x(z,P,1.55,2.5,.045,3.02,.04,y),x(z,P,1.1,2.55,.04,.38,.04,f);for(let P=0;P<22;P++)x(z,-5.8+P*.55,3.75,2.76,.2,.09,.35,d);A(z,[new L(-6,3.65,2.8),new L(-6,2.8,2.8),new L(-6,.2,2.8)],.065,f);let V=x(z,-.05,1.08,-1.29,.91,2,.03,y);x(z,.29,1.2,-1.25,.04,.65,.07,f),x(z,-.05,1.4,-1.24,.85,.018,.03,f);let ce=x(z,5.15,.65,-1.6,1.25,1.15,.8,d);x(z,5.15,1.25,-1.6,1.35,.08,.9,h);for(let P=0;P<2;P++){let W=new le(a(new Tt(.18,.18,.02,24)),m);W.position.set(4.85+P*.6,1.31,-1.6),z.add(W)}x(z,5.15,.7,-1.17,.85,.62,.04,m);let q=new ft;q.position.set(18.5,.25,-7.8),n.add(q);for(let P=0;P<22;P++)x(q,-6.5+P*.6,2.7,4.83,.025,5.3,.03,u);for(let P=1;P<5;P++)x(q,0,P,4.84,13.2,.022,.025,u);x(q,3.6,1.6,4.9,3.3,3.1,.14,f);for(let P=0;P<10;P++)x(q,3.6,.35+P*.27,5,3.1,.16,.04,u);x(q,3.6,3.25,5.1,3.9,.12,.7,f);for(let P of[-4.2,-1.3,1.7]){x(q,P,5.65,1,1.5,.45,1.2,u);for(let W=0;W<9;W++)x(q,P-.6+W*.15,5.91,1,.04,.025,1,f)}let j=$a(),ae=l(13158073,.9),Ee=c(new tn({color:15131862}));for(let P of[-1,1]){let W=[];for(let G=0;G<=140;G++){let te=G/140,he=j.getPointAt(te),De=j.getTangentAt(te),ne=new L(-De.z,0,De.x).normalize();he.addScaledVector(ne,P*(Ja/2+.05)),he.y=Nt(he.x,he.z)+.12,W.push(he)}A(n,W,.065,ae)}for(let P=0;P<7;P++)x(n,-1.1+P*.47,Nt(0,6.8)+.07,6.8,.27,.015,2.45,Ee);let Ve=l(3753024,.65,.4),J=l(10272181,.2,.15),_e=[[-24,1],[-24,-10],[-6,-18],[13,-19],[29,-18]];for(let[P,W]of _e){let G=Nt(P,W);R(n,new L(P,G,W),new L(P,G+7.4,W),.105,d),x(n,P,G+6.9,W,2.3,.13,.18,d);for(let te of[-.87,0,.87]){R(n,new L(P+te,G+6.95,W),new L(P+te,G+7.23,W),.06,J);let he=new le(a(new Sr(.1,.023,5,12)),J);he.rotation.x=Math.PI/2,he.position.set(P+te,G+7.15,W),n.add(he)}}for(let P=0;P<_e.length-1;P++)for(let W of[-.87,0,.87]){let G=_e[P],te=_e[P+1],he=Nt(...G)+7.24,De=Nt(...te)+7.24;A(n,[new L(G[0]+W,he,G[1]),new L((G[0]+te[0])/2+W,(he+De)/2-.5,(G[1]+te[1])/2),new L(te[0]+W,De,te[1])],.016,Ve)}let Ae=[[-22.5,-6.5,1.05],[-21,5.2,.85],[-16,-7.2,1.15],[-2.5,-5.8,1.1],[-1.2,.2,.9],[5.2,2.2,.95],[14.2,-16.8,1.2],[29.5,-14.8,1.1],[32.4,-7.2,1.15],[33.8,.5,1],[10.2,13.8,1.1],[11.4,21.2,1.25],[16.2,22.8,.95],[27.4,21.8,1.15],[31.8,17.5,1.05],[-8.5,16.2,1.1],[-18.8,15,1.2],[-26.5,6.2,1.25],[-25.5,-13,1.3],[22.5,-18.5,1.18]],Oe=document.createElement("canvas");Oe.width=64,Oe.height=128;let ie=Oe.getContext("2d");ie.fillStyle="#ffffff",ie.beginPath(),ie.ellipse(32,61,25,55,-.12,0,Math.PI*2),ie.fill(),ie.strokeStyle="#c0d3ad",ie.lineWidth=2,ie.beginPath(),ie.moveTo(31,113),ie.lineTo(33,8),ie.stroke();let Pe=new pn(Oe);Pe.colorSpace=Pt,o.push(Pe);let at=c(new Ke({map:Pe,transparent:!1,alphaTest:.5,side:cn,color:6523707,roughness:.9})),Le=window.innerWidth<=768?130:240,Xe=new qt(a(new zt(.28,.49)),at,Ae.length*Le);Xe.castShadow=!1;let Ie=new Lt,se=0,oe=P=>{let W=Math.sin(P*78.233+11.73)*43758.5453;return W-Math.floor(W)};Ae.forEach(([P,W,G],te)=>{let he=Nt(P,W),De=3.3*G;R(n,new L(P,he,W),new L(P+.12,he+De*.8,W),.115*G,p);for(let ne=0;ne<7;ne++){let Te=ne*2.399+te,Je=new L(P+Math.sin(Te)*.9*G,he+De*(.58+oe(te*13+ne)*.24),W+Math.cos(Te)*.9*G);R(n,new L(P,he+De*.42,W),Je,.045*G,p)}for(let ne=0;ne<Le;ne++){let Te=te*997+ne,Je=oe(Te+1)*Math.PI*2,ye=Math.sqrt(oe(Te+3))*1.38*G;Ie.position.set(P+Math.cos(Je)*ye,he+De*.64+(oe(Te+7)-.35)*1.8*G,W+Math.sin(Je)*ye),Ie.rotation.set(oe(Te+9)*Math.PI,oe(Te+10)*Math.PI,oe(Te+11)*Math.PI),Ie.scale.setScalar((.7+oe(Te+12)*1.2)*G),Ie.updateMatrix(),Xe.setMatrixAt(se,Ie.matrix),Xe.setColorAt(se,new We().setHSL(.23+oe(Te+14)*.11,.3+oe(Te+15)*.2,.3+oe(Te+16)*.16)),se++}}),n.add(Xe);let fe=l(7902548,.95),we=l(10716327,.85),ve=l(15131589,.8),Ye=new jn;Ye.moveTo(-.023,0),Ye.quadraticCurveTo(-.035,.3,.12,.65),Ye.quadraticCurveTo(.035,.25,.023,0);let Ne=a(new Mr(Ye));fe.side=cn;let je=1100,tt=new qt(Ne,fe,je);for(let P=0;P<je;P++){let W=P%2===0,G=W?-22+oe(P*7)*20:10+oe(P*7)*23,te=W?13.4+oe(P*13)*3.8:19.8+oe(P*13)*5.5;Ie.position.set(G,Nt(G,te)+.14,te),Ie.rotation.set((oe(P+6)-.5)*.5,oe(P+8)*Math.PI*2,(oe(P+11)-.5)*.5),Ie.scale.set(.5+oe(P+2),.35+oe(P+5)*.6,.5+oe(P+9)),Ie.updateMatrix(),tt.setMatrixAt(P,Ie.matrix)}n.add(tt);let lt=a(new di(.075,1));for(let P=0;P<2;P++){let W=new qt(lt,P?ve:we,180);for(let G=0;G<180;G++){let te=-20+oe(G*3+P*8)*15,he=13+oe(G*7+P)*2;Ie.position.set(te,Nt(te,he)+.38+oe(G)*.17,he),Ie.scale.setScalar(.7+oe(G+4)*.6),Ie.updateMatrix(),W.setMatrixAt(G,Ie.matrix)}n.add(W)}let O=a(new di(1,4)),xt=O.getAttribute("position");for(let P=0;P<xt.count;P++){let W=new L().fromBufferAttribute(xt,P),G=1+.12*Math.sin(W.x*6+W.y*9)+.07*Math.cos(W.z*13);xt.setXYZ(P,W.x*G,W.y*G*.6,W.z*G)}O.computeVertexNormals();let nt=l(10065802,.97);for(let P=0;P<18;P++){let W=12+oe(P+44)*19,G=20+oe(P+61)*6,te=new le(O,nt);te.position.set(W,Nt(W,G)+.13,G),te.scale.setScalar(.25+oe(P+77)*.9),te.rotation.y=oe(P+83)*6,te.castShadow=!0,te.receiveShadow=!0,n.add(te)}let et=new ft;et.position.set(18,Nt(18,19.2)+.12,19.2),n.add(et),x(et,0,1,0,2.6,.12,1.1,d);for(let P of[-1,1])for(let W of[-.37,.37])x(et,P,.5,W,.075,1,.075,f);let xe=t.portable();xe.position.set(-.5,1.06,0),et.add(xe);let gt=x(et,.65,1.49,-.1,.8,.52,.035,f);gt.rotation.x=-.16,x(et,.65,1.08,.12,.8,.03,.5,f),x(et,.65,1.49,-.075,.68,.4,.008,c(new Ke({color:11389393,emissive:8235173,emissiveIntensity:.24})));let ze=new le(a(new Tt(.11,.11,.32,16)),v);ze.position.set(1.08,1.26,.1),et.add(ze);for(let P=0;P<2;P++){let W=x(et,-2.05-P*.85,.6,1,.8,.045,1.3,c(new Ke({map:e.solarPanel,roughness:.28,metalness:.25})));W.rotation.x=.58}A(et,[new L(-2.1,.24,1.45),new L(-1.5,.1,1.6),new L(-.035,.2,.6),new L(-.035,1.34,0)],.024,m),A(et,[new L(-.4,1.28,.313),new L(.05,1.14,.4),new L(.6,1.13,.3)],.018,m);let Ge=new ft;Ge.position.set(4,0,1.5),et.add(Ge);let C=l(11837560,.9),S=a(new Ri(1.5,1.9,4,1,!0)),k=new le(S,C);k.position.y=.95,k.rotation.y=Math.PI/4,k.scale.z=1.45,Ge.add(k),R(Ge,new L(-1.2,0,.8),new L(0,1.9,0),.025,f),R(Ge,new L(1.2,0,.8),new L(0,1.9,0),.025,f);let de=a(new Tt(.22,.22,.14,16)),re=l(2369575,.95),Z=l(11976641,.25,.8),ue=l(2704462,.16,.35),$=j.getLength(),ee=[];[14476511,2378560,7175047,11449525].forEach((P,W)=>{let G=new ft;G.name="MovingVehicle"+W,x(G,0,.47,0,1.04,.44,2.35,l(P,.27,.55),!0),x(G,0,.88,-.12,.9,.53,1.35,ue,!0),x(G,0,1.12,-.12,.91,.06,1.1,l(P,.27,.55),!0);for(let he of[-.7,.52])x(G,0,.88,he,.92,.035,.045,f);for(let he of[-.52,.52])x(G,he,.86,-.12,.035,.53,.08,f);let te=[];for(let he of[-.51,.51])for(let De of[-.76,.76]){let ne=new le(de,re);ne.rotation.z=Math.PI/2,ne.position.set(he,.25,De),G.add(ne),te.push(ne);let Te=new le(a(new Tt(.11,.11,.151,12)),Z);Te.rotation.z=Math.PI/2,Te.position.copy(ne.position),G.add(Te)}for(let he of[-.34,.34])x(G,he,.56,1.18,.2,.1,.03,v),x(G,he,.56,-1.18,.2,.1,.03,l(9978680,.35));n.add(G),ee.push({group:G,wheels:te,phase:[.21,.36,.62,.79][W],dir:W%2===0?1:-1,speed:1.9})});let pe=0,U=0,K=(P,W=!1)=>{W||(pe+=Math.max(0,P));let G=new L,te=new L;for(let he of ee){let De=((he.phase+he.dir*pe*he.speed/$)%1+1)%1,ne=j.getPointAt(De);j.getTangentAt(De,G),te.set(-G.z,0,G.x).normalize(),ne.addScaledVector(te,he.dir*Pu),ne.y=Nt(ne.x,ne.z)+.09,he.group.position.copy(ne),he.group.rotation.y=Math.atan2(G.x,G.z)+(he.dir===1?0:Math.PI),he.wheels.forEach(Te=>{Te.rotation.x=-he.dir*pe*he.speed/.22})}};return K(0,!0),{root:n,update:K,setNightFactor(P){U=P,v.emissiveIntensity=.03+P*1.4},dispose(){t.dispose(),s.forEach(P=>P.dispose()),r.forEach(P=>P.dispose()),o.forEach(P=>P.dispose())}}}var Qa=class extends Ai{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new He;e.deleteAttribute("uv");let t=new Ke({side:Yt}),n=new Ke,s=new _n(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new le(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new qt(e,n,6),a=new Lt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let c=new le(e,Cs(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new le(e,Cs(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new le(e,Cs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new le(e,Cs(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let d=new le(e,Cs(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let u=new le(e,Cs(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Cs(i){return new Er({color:0,emissive:16777215,emissiveIntensity:i})}var ja=[{id:"overview",progress:0,pos:new L(2.8,28.8,52),target:new L(5.6,-.2,4.2),fov:39},{id:"home",progress:.34,pos:new L(-16.5,9.2,20.5),target:new L(-10.8,2.1,2.2),fov:38},{id:"commercial",progress:.67,pos:new L(24.5,11.4,13.5),target:new L(18.5,2.5,-5.8),fov:39},{id:"offgrid",progress:1,pos:new L(28.5,9.6,33.5),target:new L(21.6,1.5,15.6),fov:39}];function Nu(i){let e=0,t=0,n=0,s=0,r=0,o=0,a=!0,c=new L,l=new L,h=new L,f=new Cr,d=new L,u=new L,g=new L,y=new L,m=(v,E)=>{let x=_t.clamp(v,0,1),R=0;for(;R<ja.length-2&&x>ja[R+1].progress;)R++;let A=ja[R],_=ja[R+1],M=Math.max(1e-4,_.progress-A.progress),N=_t.clamp((x-A.progress)/M,0,1),w=N*N*(3-2*N);if(d.copy(A.pos),u.copy(_.pos),g.copy(A.target),y.copy(_.target),c.lerpVectors(d,u,w),l.lerpVectors(g,y,w),window.innerWidth<=768||E<1.05){let D=_t.lerp(1.42,1,_t.clamp((E-.45)/.6,0,1)),F=Math.max(D,1.75/Math.max(E,.35)),I=1-_t.smoothstep(x,0,.3),H=_t.lerp(D,F,I);h.subVectors(c,l).multiplyScalar(H),h.y*=1.08,c.copy(l).add(h)}let T=_t.lerp(A.fov,_.fov,w)+(E<.85?5:0);Math.abs(i.fov-T)>.05&&(i.fov=T,i.updateProjectionMatrix())},p=v=>{m(t,v),h.subVectors(c,l),f.setFromVector3(h),f.theta+=r,f.phi=_t.clamp(f.phi+o,.36,1.32),h.setFromSpherical(f),i.position.copy(l).add(h),i.lookAt(l)};return p(16/9),{setScrollProgress:v=>{let E=_t.clamp(v,0,1);E!==e&&(e=E,a=!0)},getZoneForProgress:v=>v<.17?"overview":v<.505?"home":v<.835?"commercial":"offgrid",setOrbitOffset:(v,E)=>{n=_t.clamp(n+v,-.45,.45),s=_t.clamp(s+E,-.18,.22),a=!0},resetOrbit:()=>{(n!==0||s!==0)&&(n=0,s=0,a=!0)},snapToProgress:(v,E)=>{e=_t.clamp(v,0,1),t=e,n=0,s=0,r=0,o=0,a=!1,p(E)},update:(v,E,x)=>{if(!(a||t!==e||r!==n||o!==s))return!1;if(x)t=e,r=n,o=s;else{let A=1-Math.exp(-6.4*Math.min(v,.08));t=Math.abs(e-t)<25e-5?e:_t.lerp(t,e,A),r=Math.abs(n-r)<4e-4?n:_t.lerp(r,n,A),o=Math.abs(s-o)<4e-4?s:_t.lerp(o,s,A)}return p(E),a=t!==e||r!==n||o!==s,!0}}}var el={pv:16751135,bat:53662,ac:1892534,grid:5943016,light:16760386,bms:10679007},e_=9480368;function Uu(){let i=new ft;i.name="EnergyFlowSystem",i.visible=!1;let e=Nt(21,15.2),t=[{id:"z1-pv-inv",kind:"pv",when:"day",points:[[-12.5,4.5,2.9],[-15.4,4.15,4.15],[-15.8,3.05,4.6]],packetCount:3,speed:.36},{id:"z1-inv-bat-day",kind:"bat",when:"day",points:[[-15.3,2,4.72],[-14.25,2,4.72],[-14.25,1.45,4.72]],packetCount:2,speed:.42},{id:"z1-bat-inv-night",kind:"bat",when:"night",points:[[-14.25,1.45,4.72],[-14.25,2,4.72],[-15.3,2,4.72]],packetCount:2,speed:.4},{id:"z1-bms",kind:"bms",when:"both",points:[[-15.2,2.22,4.76],[-14.1,2.22,4.76],[-14.1,1.55,4.76]],packetCount:2,speed:.55},{id:"z1-inv-ac-loads",kind:"ac",when:"both",points:[[-16.2,2.2,4.65],[-17.65,2.2,3.85],[-17.65,2.2,2.15],[-16.2,3.25,4.48],[-12.2,3.25,4.48],[-8.9,2.95,2.6],[-8.9,2.85,-.35]],packetCount:5,speed:.28},{id:"z1-grid",kind:"grid",when:"night",points:[[-21.1,6.2,.9],[-17.7,3.2,.9],[-17.7,2.1,2]],packetCount:3,speed:.34},{id:"z1-garden-light-day",kind:"pv",when:"day",points:[[-4.4,2.02,6.4],[-4.4,1.65,6.4]],packetCount:1,speed:.65},{id:"z1-garden-light-night",kind:"light",when:"night",points:[[-4.4,1.45,6.4],[-4.4,1.85,6.4]],packetCount:1,speed:.65},{id:"z2-pv-inv",kind:"pv",when:"day",points:[[17.2,5.85,-7.2],[15.6,5.5,-4.6],[15.6,2.35,-3.5]],packetCount:4,speed:.34},{id:"z2-inv-bat-day",kind:"bat",when:"day",points:[[15.2,1.65,-3.15],[13.8,1.65,-3.15],[12.3,1.65,-3.15]],packetCount:3,speed:.42},{id:"z2-bat-inv-night",kind:"bat",when:"night",points:[[12.3,1.65,-3.15],[13.8,1.65,-3.15],[15.2,1.65,-3.15]],packetCount:3,speed:.4},{id:"z2-ac-loads",kind:"ac",when:"both",points:[[16,1.65,-3.15],[17.7,1.65,-3.15],[21.4,2.4,-3.8],[24.2,4.9,-6.2]],packetCount:4,speed:.28},{id:"z2-grid",kind:"grid",when:"night",points:[[8.5,6.8,-11.5],[14.5,4.2,-7.2],[17.7,2.2,-3.6]],packetCount:3,speed:.3},{id:"z2-roadlight-day",kind:"pv",when:"day",points:[[17.8,4.55,1.5],[17.8,4.15,1.5]],packetCount:1,speed:.7},{id:"z2-roadlight-night",kind:"light",when:"night",points:[[17.8,4.35,1.5],[17.8,3.3,1.5]],packetCount:2,speed:.6},{id:"z3-pv-storage",kind:"pv",when:"day",points:[[15.8,e+1.45,14.6],[17.6,e+.9,16.4],[18.9,e+.85,16.85],[21.4,e+.85,17.25]],packetCount:3,speed:.38},{id:"z3-bat-night",kind:"bat",when:"night",points:[[18.9,e+.9,16.85],[20.4,e+.9,17.15],[21.55,e+.9,17.25]],packetCount:2,speed:.42},{id:"z3-field-loads",kind:"ac",when:"both",points:[[21.55,e+1.05,17.25],[22,e+1.1,15.6],[22.4,e+1.3,14.4]],packetCount:2,speed:.42},{id:"z3-split-day",kind:"pv",when:"day",points:[[26.8,e+4.5,16.5],[26.8,e+3.25,16.65]],packetCount:1,speed:.7},{id:"z3-split-night",kind:"light",when:"night",points:[[26.8,e+3.25,16.65],[26.75,e+3.9,16.5],[25.65,e+3.9,16.5]],packetCount:2,speed:.55}],n=Tc(e);t.forEach(_=>{n[_.id]&&(_.points=n[_.id])}),t.push({id:"z3-controller-seed",kind:"bat",when:"day",points:n["z3-controller-seed"],packetCount:2,speed:.35}),t.push({id:"z3-portable-pv",kind:"pv",when:"day",points:n["z3-portable-pv"],packetCount:2,speed:.35});let s=[],r=new lr(.022,.11,4,8);r.rotateX(Math.PI/2);let o=new Ri(.045,.13,8);o.rotateX(Math.PI/2);let a=new tn({color:16777215}),c=t.reduce((_,M)=>_+M.packetCount,0),l=new qt(r,a,c);l.instanceMatrix.setUsage(sc),i.add(l);let h=new Lt,f=new L,d=new L,u=new L(0,1,0),g=new fn,y=new We;t.forEach(_=>{let M=Ka(_.points),N=new gn(M,Math.max(12,_.points.length*10),.012,7,!1),w=new tn({color:el[_.kind],transparent:!0,opacity:.9}),T=new le(N,w);i.add(T);let D=new tn({color:el[_.kind],transparent:!0,opacity:.95}),F=Math.max(1,_.packetCount),I=new qt(o,D,F);for(let H=0;H<F;H++){let z=(H+.5)/F;M.getPointAt(z,f),M.getTangentAt(z,d).normalize(),h.position.copy(f),g.setFromUnitVectors(new L(0,0,1),d),h.quaternion.copy(g),h.scale.setScalar(1),h.updateMatrix(),I.setMatrixAt(H,h.matrix)}I.instanceMatrix.needsUpdate=!0,I.visible=!1,i.add(I),s.push({spec:_,curve:M,tube:T,tubeMat:w,staticArrows:I})});let m=!1,p=!1,v=!1,E=0,x=_=>_.when==="both"||_.when==="night"&&m||_.when==="day"&&!m,R=()=>{let _=p||v;l.visible=!_,s.forEach(M=>{x(M.spec)?(M.tubeMat.color.setHex(el[M.spec.kind]),M.tubeMat.opacity=M.spec.kind==="bms"?.55:.92,M.staticArrows.visible=_):(M.tubeMat.color.setHex(e_),M.tubeMat.opacity=.24,M.staticArrows.visible=!1)})};return R(),{group:i,setVisible:_=>{i.visible=_},setState:(_,M,N)=>{let w=_>=.5;(w!==m||M!==p||N!==v)&&(m=w,p=M,v=N,R())},update:_=>{if(!i.visible)return;!p&&!v&&(E+=_);let M=0;for(let N=0;N<s.length;N++){let w=s[N],T=x(w.spec),D=w.spec.packetCount;y.setHex(el[w.spec.kind]);for(let F=0;F<D;F++){if(!T||p||v)h.scale.setScalar(1e-4),h.position.set(0,-100,0),h.updateMatrix(),l.setMatrixAt(M,h.matrix);else{let I=((E*w.spec.speed+F/D)%1+1)%1;w.curve.getPointAt(I,f),w.curve.getTangentAt(I,d).normalize(),h.position.copy(f),h.lookAt(f.x+d.x,f.y+d.y,f.z+d.z);let H=Math.min(I*6,(1-I)*6,1),z=(w.spec.kind==="bms"?.65:1)*Math.max(.2,H);h.scale.setScalar(z),h.updateMatrix(),l.setMatrixAt(M,h.matrix),l.setColorAt(M,y)}M++}}l.instanceMatrix.needsUpdate=!0,l.instanceColor&&(l.instanceColor.needsUpdate=!0)},dispose:()=>{r.dispose(),o.dispose(),a.dispose(),s.forEach(_=>{_.tube.geometry.dispose(),_.tubeMat.dispose(),_.staticArrows.material.dispose()})}}}var Xr={overview:{id:"overview",num:"00",progress:0,title:{en:"Clean Energy Campus",zh:"\u7ACB\u4F53\u6E05\u6D01\u80FD\u6E90\u56ED\u533A"},subtitle:{en:"Scroll or choose a zone to explore residential, commercial, and off-grid energy architectures in one landscape.",zh:"\u5411\u4E0B\u6EDA\u52A8\u6216\u9009\u62E9\u533A\u57DF\uFF0C\u8FDE\u7EED\u63A2\u7D22\u5BB6\u5EAD\u3001\u5DE5\u5546\u4E1A\u4E0E\u504F\u8FDC\u79BB\u7F51\u80FD\u6E90\u7CFB\u7EDF\u3002"},noteDay:{en:"Day: Solar generation & storage charging",zh:"\u767D\u663C\uFF1A\u5149\u4F0F\u91C7\u96C6\u53D1\u7535\u4E0E\u50A8\u80FD\u84C4\u80FD"},noteNight:{en:"Night: Stored battery supply & autonomous solar lighting",zh:"\u591C\u665A\uFF1A\u50A8\u80FD\u653E\u7535\u4F9B\u7535\u4E0E\u72EC\u7ACB\u592A\u9633\u80FD\u7167\u660E"}},home:{id:"home",num:"01",progress:.34,title:{en:"HOME ENERGY",zh:"\u5BB6\u5EAD\u80FD\u6E90"},subtitle:{en:"Rooftop PV, hybrid inverter, 16 kWh battery, utility meter & cutaway everyday appliances.",zh:"\u5C4B\u9876\u5149\u4F0F\u3001\u6DF7\u5408\u9006\u53D8\u5668\u300116 kWh \u5BB6\u7528\u50A8\u80FD\u3001\u7535\u8868\u914D\u7535\u7BB1\u4E0E\u5BA4\u5185\u5BB6\u7535\u8D1F\u8F7D\u3002"},noteDay:{en:"Day: Roof PV feeds hybrid inverter, home loads & 16 kWh battery",zh:"\u767D\u663C\uFF1A\u5C4B\u9876\u5149\u4F0F\u7ECF\u6DF7\u5408\u9006\u53D8\u5668\u4F9B\u7535\u5BB6\u5C45\u8D1F\u8F7D\u5E76\u4E3A 16 kWh \u7535\u6C60\u84C4\u80FD"},noteNight:{en:"Night: 16 kWh battery discharges via inverter with grid backup & yard solar light on",zh:"\u591C\u665A\uFF1A16 kWh \u50A8\u80FD\u7ECF\u9006\u53D8\u5668\u4F9B\u80FD\uFF0C\u7535\u8868\u914D\u7535\u63D0\u4F9B\u7F51\u683C\u652F\u6491\uFF0C\u5EAD\u9662\u592A\u9633\u80FD\u706F\u4EAE\u8D77"}},commercial:{id:"commercial",num:"02",progress:.67,title:{en:"COMMERCIAL & INDUSTRIAL",zh:"\u5DE5\u5546\u4E1A\u80FD\u6E90"},subtitle:{en:"Concept scenario: rooftop PV, HORIZON ESS cabinets, 50 kW conversion, switchgear & road lighting.",zh:"\u6982\u5FF5\u5E94\u7528\u793A\u610F\uFF1A\u5927\u8DE8\u5EA6\u5149\u4F0F\u5C4B\u9762\u3001HORIZON \u50A8\u80FD\u67DC\u300150 kW \u53D8\u6D41\u5E76\u7F51\u4E0E\u56ED\u533A\u8DEF\u706F\u3002"},noteDay:{en:"Day: Facility PV array supplies operations & charges HORIZON ESS cabinets",zh:"\u767D\u663C\uFF1A\u5DE5\u5546\u4E1A\u5C4B\u9762\u5149\u4F0F\u652F\u6491\u5EFA\u7B51\u4E0E\u7A7A\u8C03\u8D1F\u8F7D\u5E76\u4E3A HORIZON \u50A8\u80FD\u67DC\u84C4\u80FD"},noteNight:{en:"Night: HORIZON ESS & switchgear support facility loads while road solar lights illuminate drive",zh:"\u591C\u665A\uFF1AHORIZON \u50A8\u80FD\u4E0E\u914D\u7535\u652F\u6301\u5EFA\u7B51\u8D1F\u8F7D\uFF0C\u56ED\u533A\u4E00\u4F53\u5316\u592A\u9633\u80FD\u8DEF\u706F\u81EA\u52A8\u4EAE\u706F"}},offgrid:{id:"offgrid",num:"03",progress:1,title:{en:"REMOTE & OFF-GRID",zh:"\u504F\u8FDC\u4E0E\u79BB\u7F51\u5E94\u7528"},subtitle:{en:"Disconnected from utility grid: standalone PV rack, SEED & Volt 1000 field power, and split street light.",zh:"\u72EC\u7ACB\u4E8E\u516C\u7528\u7535\u7F51\u4E4B\u5916\uFF1A\u72EC\u7ACB\u5149\u4F0F\u652F\u67B6\u3001SEED \u50A8\u80FD\u4E0E Volt 1000 \u79FB\u52A8\u4F5C\u4E1A\u4F9B\u7535\u3001\u5206\u4F53\u5F0F\u592A\u9633\u80FD\u8DEF\u706F\u3002"},noteDay:{en:"Day: Independent solar rack charges SEED storage & portable workstation power",zh:"\u767D\u663C\uFF1A\u79BB\u7F51\u5149\u4F0F\u72EC\u7ACB\u4E3A SEED \u7535\u6C60\u4E0E\u79FB\u52A8\u5DE5\u4F5C\u53F0\u4F9B\u7535\u84C4\u80FD\uFF08\u65E0\u7535\u7F51\u63A5\u5165\uFF09"},noteNight:{en:"Night: SEED & Volt 1000 power field tools & camp light; split street light runs independently",zh:"\u591C\u665A\uFF1ASEED \u4E0E Volt 1000 \u652F\u6491\u79FB\u52A8\u4EEA\u5668\u4E0E\u8425\u5730\u706F\uFF0C\u5206\u4F53\u5F0F\u592A\u9633\u80FD\u8DEF\u706F\u72EC\u7ACB\u7167\u660E"}}},Fu=[{id:"brand-office",zone:"overview",kind:"info",worldPos:[-1,10.6,-12.8],kicker:{en:"Brand architecture concept",zh:"\u54C1\u724C\u5EFA\u7B51\u6982\u5FF5"},title:{en:"Anthrise Technology \xB7 Concept Office",zh:"Anthrise Technology \xB7 \u6982\u5FF5\u529E\u516C\u697C"},usage:{en:"A conceptual branded office in the energy landscape. Actual company contact details remain on the website.",zh:"\u80FD\u6E90\u573A\u666F\u4E2D\u7684\u54C1\u724C\u6982\u5FF5\u529E\u516C\u5EFA\u7B51\uFF0C\u5B9E\u9645\u516C\u53F8\u5730\u5740\u53CA\u8054\u7CFB\u4FE1\u606F\u4EE5\u7F51\u7AD9\u8054\u7CFB\u65B9\u5F0F\u4E3A\u51C6\u3002"}},{id:"ov-home",zone:"overview",targetZone:"home",kind:"zone",worldPos:[-11.5,6.2,2],kicker:{en:"01 \xB7 Residential",zh:"01 \xB7 \u5BB6\u5EAD\u573A\u666F"},title:{en:"Home Energy",zh:"\u5BB6\u5EAD\u80FD\u6E90"},usage:{en:"Click to inspect rooftop solar, hybrid inverter, 16 kWh battery & cutaway appliances.",zh:"\u70B9\u51FB\u8FDB\u5165\u67E5\u770B\u5C4B\u9876\u5149\u4F0F\u3001\u6DF7\u5408\u9006\u53D8\u5668\u300116 kWh \u7535\u6C60\u4E0E\u5BA4\u5185\u5BB6\u7535\u3002"}},{id:"ov-commercial",zone:"overview",targetZone:"commercial",kind:"zone",worldPos:[18.8,7.6,-7.2],kicker:{en:"02 \xB7 Commercial & Industrial",zh:"02 \xB7 \u5DE5\u5546\u4E1A\u573A\u666F"},title:{en:"Commercial & Industrial",zh:"\u5DE5\u5546\u4E1A\u80FD\u6E90"},usage:{en:"Click to inspect C&I solar array, HORIZON ESS cabinets, switchgear & road lights.",zh:"\u70B9\u51FB\u8FDB\u5165\u67E5\u770B\u5DE5\u5546\u4E1A\u5149\u4F0F\u5C4B\u9762\u3001HORIZON \u50A8\u80FD\u67DC\u3001\u914D\u7535\u4E0E\u9053\u8DEF\u7167\u660E\u3002"}},{id:"ov-offgrid",zone:"overview",targetZone:"offgrid",kind:"zone",worldPos:[20.5,5.4,15.2],kicker:{en:"03 \xB7 Remote & Off-Grid",zh:"03 \xB7 \u79BB\u7F51\u573A\u666F"},title:{en:"Remote & Off-Grid",zh:"\u504F\u8FDC\u4E0E\u79BB\u7F51\u5E94\u7528"},usage:{en:"Click to explore standalone solar power beyond utility lines.",zh:"\u70B9\u51FB\u63A2\u7D22\u8131\u79BB\u5E02\u7535\u7F51\u7684\u72EC\u7ACB\u5149\u4F0F\u4E0E\u4FBF\u643A\u50A8\u80FD\u7CFB\u7EDF\u3002"}},{id:"home-solar",zone:"home",kind:"product",worldPos:[-10.8,5.2,1.8],skuId:"origAER400",modelCode:"AE-R400",img:"/assets/images/stage-solar.png",topic:"home",hrefEn:"/products/origAER400-en.html",hrefZh:"/products/origAER400-zh.html",kicker:{en:"Photovoltaic modules \xB7 AE-R400",zh:"\u5149\u4F0F\u7EC4\u4EF6 \xB7 AE-R400"},title:{en:"Rooftop Solar Panels (400W)",zh:"\u5C4B\u9876\u5149\u4F0F\u677F\uFF08400W\uFF09"},usage:{en:"Generates DC electricity during daylight and routes via PV isolation to the wall-mounted hybrid inverter.",zh:"\u65E5\u95F4\u4EA7\u751F\u6E05\u6D01\u76F4\u6D41\u7535\uFF0C\u7ECF\u5149\u4F0F\u76F4\u6D41\u4FDD\u62A4\u901A\u9053\u8F93\u9001\u81F3\u5EFA\u7B51\u5916\u5899\u6DF7\u5408\u9006\u53D8\u5668\u3002"}},{id:"home-inverter",zone:"home",kind:"product",worldPos:[-15.8,3.18,4.72],skuId:"hybrid6",modelCode:"AE-I-HYBRID-6K",img:"/assets/images/products/hybrid6.png",topic:"home",hrefEn:"/products/hybrid6-en.html",hrefZh:"/products/hybrid6-zh.html",kicker:{en:"Power conversion \xB7 AE-I-HYBRID-6K",zh:"\u6DF7\u5408\u9006\u53D8\u5668 \xB7 AE-I-HYBRID-6K"},title:{en:"6 kW LV Hybrid Inverter",zh:"6 kW \u4F4E\u538B\u6DF7\u5408\u9006\u53D8\u5668"},usage:{en:"6 kW / 40\u201360 V / up to 135 A battery current. The 51.2 V battery catalogue lists 200 A discharge. CAN/RS-485 protocol profile and final system approval require confirmation.",zh:"6 kW / 40\u201360 V / \u7535\u6C60\u5145\u653E\u7535\u4E0A\u9650 135 A\uFF1B51.2 V \u7535\u6C60\u76EE\u5F55\u6807\u6CE8\u653E\u7535 200 A\u3002CAN/RS-485 \u534F\u8BAE\u914D\u7F6E\u548C\u6700\u7EC8\u7CFB\u7EDF\u5339\u914D\u4ECD\u9700\u786E\u8BA4\u3002"}},{id:"home-battery",zone:"home",kind:"product",worldPos:[-14.25,1.4,4.95],skuId:"ess16",modelCode:"AE-E-DAWN-16",img:"/assets/images/stage-battery.png",topic:"home",hrefEn:"/products/ess16-en.html",hrefZh:"/products/ess16-zh.html",kicker:{en:"Home storage \xB7 AE-E-DAWN-16",zh:"\u6237\u7528\u50A8\u80FD \xB7 AE-E-DAWN-16"},title:{en:"16 kWh Home Storage",zh:"16 kWh \u50A8\u80FD\u7535\u6C60"},usage:{en:"51.2V LiFePO4 residential unit storing surplus daytime solar energy through the hybrid inverter for evening household loads.",zh:"51.2V \u78F7\u9178\u94C1\u9502\u6237\u7528\u50A8\u80FD\u5355\u5143\uFF0C\u7531\u6DF7\u5408\u9006\u53D8\u5668\u534F\u8C03\u65E5\u95F4\u84C4\u80FD\u4E0E\u591C\u95F4\u4F4F\u5B85\u4F9B\u7535\u3002"}},{id:"home-grid",zone:"home",kind:"info",worldPos:[-19.8,4.9,1.05],topic:"home",kicker:{en:"AC interface \xB7 Utility & breaker",zh:"\u5E76\u7F51\u4E0E\u914D\u7535\u63A5\u53E3"},title:{en:"Grid Meter & AC Panel",zh:"\u7535\u7F51\u63A5\u5165\u3001\u7535\u8868\u4E0E\u914D\u7535\u7BB1"},usage:{en:"Safely connects utility service metering and inverter AC output before feeding indoor household circuits.",zh:"\u5C06\u516C\u7528\u7535\u7F51\u8BA1\u91CF\u7AEF\u53E3\u4E0E\u6DF7\u5408\u9006\u53D8\u5668\u4EA4\u6D41\u8F93\u51FA\u5B89\u5168\u6C47\u5165\u5EFA\u7B51\u5185\u90E8\u914D\u7535\u56DE\u8DEF\u3002"}},{id:"home-loads",zone:"home",kind:"info",worldPos:[-8.4,2.05,2.35],topic:"home",kicker:{en:"Indoor AC circuits \xB7 Cutaway",zh:"\u5BA4\u5185\u4EA4\u6D41\u8D1F\u8F7D \xB7 \u5256\u89C6\u5C55\u793A"},title:{en:"Residential Appliances",zh:"\u5BA4\u5185\u65E5\u5E38\u7535\u5668"},usage:{en:"Kitchen refrigeration, split climate control, lighting, and living room electronics supplied via the AC distribution panel.",zh:"\u5305\u62EC\u7A7A\u8C03\u3001\u51B0\u7BB1\u3001\u5BA4\u5185\u7167\u660E\u4E0E\u5F71\u97F3\u529E\u516C\u8BBE\u5907\uFF0C\u5747\u7531\u6237\u5185\u4EA4\u6D41\u914D\u7535\u56DE\u8DEF\u89C4\u8303\u4F9B\u7535\u3002"}},{id:"home-light",zone:"home",kind:"light",worldPos:[-4.4,1.85,6.4],skuId:"jcLight28",modelCode:"AE-L-BLOOM-01",img:"/assets/images/products/jcLight28.png",topic:"lighting",hrefEn:"/products/jcLight28-en.html",hrefZh:"/products/jcLight28-zh.html",kicker:{en:"Independent lighting \xB7 AE-L-BLOOM-01",zh:"\u72EC\u7ACB\u5EAD\u9662\u706F \xB7 AE-L-BLOOM-01"},title:{en:"Solar Courtyard Column Light",zh:"\u592A\u9633\u80FD\u5EAD\u9662\u67F1\u706F"},usage:{en:"Self-contained top PV panel and internal LiFePO4 battery \u2014 charges by day and illuminates garden walkways at night off-grid.",zh:"\u5185\u7F6E\u9876\u90E8\u5149\u4F0F\u677F\u4E0E\u78F7\u9178\u94C1\u9502\u7535\u6C60\uFF0C\u767D\u5929\u81EA\u884C\u5145\u7535\u3001\u591C\u665A\u81EA\u52A8\u70B9\u4EAE\u5EAD\u9662\u8DEF\u5F84\uFF0C\u4E0D\u63A5\u5165\u6237\u5185\u7535\u7F51\u3002"}},{id:"ci-solar",zone:"commercial",kind:"product",worldPos:[19.8,6.2,-7.8],skuId:"origAER400",modelCode:"AE-R400",img:"/assets/images/stage-solar.png",topic:"business",hrefEn:"/products/origAER400-en.html",hrefZh:"/products/origAER400-zh.html",kicker:{en:"Commercial array \xB7 AE-R400",zh:"\u5C4B\u9762\u5149\u4F0F\u9635\u5217 \xB7 AE-R400"},title:{en:"Commercial Rooftop PV Array",zh:"\u5DE5\u5546\u4E1A\u5C4B\u9762\u5149\u4F0F"},usage:{en:"Conceptual large-span photovoltaic roof generation feeding high-power conversion equipment by day.",zh:"\u6982\u5FF5\u5C4B\u9762\u5149\u4F0F\u7CFB\u7EDF\uFF0C\u65E5\u95F4\u4E3A\u5DE5\u5546\u4E1A\u56ED\u533A\u63D0\u4F9B\u76F4\u6D41\u53D1\u7535\u5E76\u63A5\u5165\u9AD8\u529F\u7387\u53D8\u6D41\u8BBE\u5907\u3002"}},{id:"ci-horizon",zone:"commercial",kind:"product",worldPos:[12.95,2.25,-3.25],skuId:"series_horizon",modelCode:"AE-E-HORIZON",img:"/assets/images/products/series_horizon.png",topic:"business",hrefEn:"/products/series_horizon-en.html",hrefZh:"/products/series_horizon-zh.html",kicker:{en:"Concept BESS \xB7 AE-E-HORIZON",zh:"\u5DE5\u5546\u4E1A\u50A8\u80FD\u67DC \xB7 AE-E-HORIZON"},title:{en:"Commercial & Industrial ESS Cabinet",zh:"\u5DE5\u5546\u4E1A\u50A8\u80FD\u67DC"},usage:{en:"Planned modular HV DC battery cabinets (e.g. 50 kW / 112 kWh pairing concept) coordinated externally via CAN/RS-485.",zh:"\u6A21\u5757\u5316\u9AD8\u538B\u76F4\u6D41\u50A8\u80FD\u67DC\u65B9\u6848\uFF08\u5982 50 kW / 112 kWh \u6982\u5FF5\u642D\u914D\uFF09\uFF0C\u7ECF\u5916\u90E8\u53D8\u6D41\u4E0E\u914D\u7535\u67DC\u6309\u9879\u76EE\u5DE5\u51B5\u914D\u7F6E\u3002"}},{id:"ci-inverter",zone:"commercial",kind:"product",worldPos:[15.6,2.15,-3.25],skuId:"hybrid50",modelCode:"AE-I-HYBRID-50K",img:"/assets/images/products/hybrid50.png",topic:"business",hrefEn:"/products/hybrid50-en.html",hrefZh:"/products/hybrid50-zh.html",kicker:{en:"Three-phase HV \xB7 AE-I-HYBRID-50K",zh:"\u4E09\u76F8\u9AD8\u538B\u53D8\u6D41 \xB7 AE-I-HYBRID-50K"},title:{en:"50 kW Hybrid Inverter",zh:"50 kW \u6DF7\u7F51\u9006\u53D8\u5668"},usage:{en:"Three-phase power conversion bridging rooftop PV arrays, HORIZON ESS battery cabinets, and AC facility switchgear.",zh:"\u4E09\u76F8\u9AD8\u538B\u6DF7\u7F51\u9006\u53D8\u6838\u5FC3\uFF0C\u8FDE\u63A5\u5C4B\u9762\u5149\u4F0F\u3001HORIZON \u50A8\u80FD\u67DC\u4E0E\u5DE5\u5546\u4E1A\u4EA4\u6D41\u914D\u7535\u6BCD\u7EBF\u3002"}},{id:"ci-loads",zone:"commercial",kind:"info",worldPos:[23.8,3.1,-5.2],topic:"business",kicker:{en:"Switchgear & facility loads",zh:"\u914D\u7535\u6BCD\u7EBF\u4E0E\u56ED\u533A\u8D1F\u8F7D"},title:{en:"Switchgear, HVAC & Office Loads",zh:"\u914D\u7535\u67DC\u3001\u6696\u901A\u4E0E\u529E\u516C\u8D1F\u8F7D"},usage:{en:"Main AC distribution bay feeding rooftop cooling units, production bay lighting, and workspace circuits. Sizing requires site engineering review.",zh:"\u4EA4\u6D41\u914D\u7535\u603B\u67DC\u7EDF\u4E00\u8C03\u914D\u5C4B\u9762\u5236\u51B7\u3001\u8F66\u95F4\u7167\u660E\u4E0E\u529E\u516C\u8D1F\u8377\uFF0C\u5177\u4F53\u914D\u6BD4\u6309\u9879\u76EE\u6D4B\u7B97\u5B9A\u5236\u3002"}},{id:"ci-light",zone:"commercial",kind:"light",worldPos:[17.8,4.3,1.55],skuId:"jcLight09",modelCode:"AE-L-GUARD-05",img:"/assets/images/products/jcLight09.png",topic:"lighting",hrefEn:"/products/jcLight09-en.html",hrefZh:"/products/jcLight09-zh.html",kicker:{en:"Road luminaire \xB7 AE-L-GUARD-05",zh:"\u9053\u8DEF\u7167\u660E \xB7 AE-L-GUARD-05"},title:{en:"All-in-One Solar Street Light",zh:"\u4E00\u4F53\u5316\u592A\u9633\u80FD\u8DEF\u706F"},usage:{en:"Autonomous roadway luminaire with integrated PV and LiFePO4 battery illuminating commercial drives without trenching AC cable.",zh:"\u96C6\u6210\u5149\u4F0F\u677F\u4E0E\u78F7\u9178\u94C1\u9502\u7535\u6C60\u7684\u4E00\u4F53\u5316\u8DEF\u706F\uFF0C\u65E0\u9700\u5F00\u6316\u7535\u7F06\u5373\u53EF\u4E3A\u56ED\u533A\u9053\u8DEF\u63D0\u4F9B\u591C\u95F4\u7167\u660E\u3002"}},{id:"off-solar",zone:"offgrid",kind:"product",worldPos:[15.8,3.05,14.5],skuId:"origAESK1",modelCode:"AE-SK1",img:"/assets/images/products/origAESK1.png",topic:"outdoor",hrefEn:"/products/origAESK1-en.html",hrefZh:"/products/origAESK1-zh.html",kicker:{en:"Off-grid generation \xB7 AE-SK1",zh:"\u79BB\u7F51\u5149\u4F0F\u91C7\u96C6 \xB7 AE-SK1"},title:{en:"Ground Solar Array & Kit",zh:"\u72EC\u7ACB\u5149\u4F0F\u53D1\u7535\u5355\u5143"},usage:{en:"Stand-alone tilted ground PV rack deployed where no utility poles reach, charging field storage by day.",zh:"\u90E8\u7F72\u4E8E\u65E0\u5E02\u7535\u8986\u76D6\u533A\u57DF\u7684\u5730\u9762\u72EC\u7ACB\u5149\u4F0F\u9635\u5217\uFF0C\u65E5\u95F4\u76F4\u63A5\u4E3A\u79BB\u7F51\u50A8\u80FD\u5355\u5143\u8865\u7535\u3002"}},{id:"off-seed",zone:"offgrid",kind:"product",worldPos:[18.9,2.2,16.85],skuId:"series_seed24",modelCode:"AE-E-SEED",img:"/assets/images/products/series_seed24.png",topic:"outdoor",hrefEn:"/products/series_seed24-en.html",hrefZh:"/products/series_seed24-zh.html",kicker:{en:"Deep-cycle storage \xB7 AE-E-SEED",zh:"\u6DF1\u5FAA\u73AF\u50A8\u80FD \xB7 AE-E-SEED"},title:{en:"25.6V Deep Cycle LiFePO\u2084 Battery",zh:"25.6V \u6DF1\u5FAA\u73AF\u78F7\u9178\u94C1\u9502\u7535\u6C60"},usage:{en:"2.56 kWh deep-cycle battery storage serving remote cabins, monitoring gear, and off-grid field stations.",zh:"2.56 kWh \u6DF1\u5FAA\u73AF\u78F7\u9178\u94C1\u9502\u7535\u6C60\uFF0C\u9002\u7528\u4E8E\u504F\u8FDC\u9A7B\u70B9\u3001\u76D1\u6D4B\u7AD9\u4E0E\u79BB\u7F51\u57FA\u7840\u8D1F\u8377\u50A8\u80FD\u3002"}},{id:"off-volt",zone:"offgrid",kind:"product",worldPos:[21.55,2.15,17.25],skuId:"origAEV1000",modelCode:"AE-E-VOLT-1000",img:"/assets/images/products/origAEV1000.png",topic:"outdoor",hrefEn:"/products/origAEV1000-en.html",hrefZh:"/products/origAEV1000-zh.html",kicker:{en:"Portable station \xB7 AE-E-VOLT-1000",zh:"\u4FBF\u643A\u7535\u6E90 \xB7 AE-E-VOLT-1000"},title:{en:"Volt 1000 Portable Power Station",zh:"Volt 1000 \u6237\u5916\u4FBF\u643A\u7535\u6E90"},usage:{en:"768 Wh / 1000 W LiFePO4 portable unit supplying modest mobile loads: field laptops, camp lighting, radios & portable coolers.",zh:"768 Wh / 1000 W \u78F7\u9178\u94C1\u9502\u4FBF\u643A\u7535\u6E90\uFF0C\u4E13\u4E3A\u79FB\u52A8\u5DE5\u4F5C\u7AD9\u7B14\u8BB0\u672C\u3001\u901A\u4FE1\u8BBE\u5907\u3001\u8425\u5730\u7167\u660E\u4E0E\u8F66\u8F7D\u5C0F\u51B7\u7BB1\u7B49\u8F7B\u91CF\u8D1F\u8F7D\u4F9B\u7535\u3002"}},{id:"off-light",zone:"offgrid",kind:"light",worldPos:[26.8,5.15,16.5],skuId:"jcLight27",modelCode:"AE-L-GUARD-06",img:"/assets/images/stage-light.png",topic:"lighting",hrefEn:"/products/jcLight27-en.html",hrefZh:"/products/jcLight27-zh.html",kicker:{en:"Off-grid street light \xB7 AE-L-GUARD-06",zh:"\u72EC\u7ACB\u8DEF\u706F \xB7 AE-L-GUARD-06"},title:{en:"Split Solar Street Light",zh:"\u5206\u4F53\u5F0F\u592A\u9633\u80FD\u8DEF\u706F"},usage:{en:"IP66 weather-sealed luminaire with dedicated mast PV panel and integrated LiFePO4 battery \u2014 zero trenching or grid connection.",zh:"IP66 \u6237\u5916\u9632\u62A4\u7B49\u7EA7\uFF0C\u81EA\u5E26\u72EC\u7ACB\u5149\u4F0F\u677F\u4E0E\u78F7\u9178\u94C1\u9502\u7535\u6C60\u5305\uFF0C\u65E0\u9700\u62C9\u7EBF\u6216\u7535\u7F51\u63A5\u5165\u5373\u53EF\u591C\u95F4\u7167\u660E\u3002"}}],tl={en:{zones:{overview:"Overview",home:"01 Home Energy",commercial:"02 Commercial",offgrid:"03 Off-Grid"},dayBtn:"Day",nightBtn:"Night",flowShow:"Show energy flow",flowHide:"Hide energy flow",pauseMotion:"Pause motion",resumeMotion:"Resume motion",pauseFollow:"Pause Risey",resumeFollow:"Resume Risey",productsBtn:"Products",discussBtn:"Discuss your project",legendPv:"PV DC",legendBat:"Battery DC",legendAc:"AC Supply",legendGrid:"Grid Tie",legendLight:"Autonomous Solar Light",legendNote:"Conceptual application diagram \xB7 Zones 01\u201302 grid-interfaced, Zone 03 isolated off-grid",viewSpecs:"View specifications",inquireSetup:"Discuss this setup",visitZone:"Explore this zone",dragHint:"Scroll to tour \xB7 Drag to orbit",fallbackTitle:"3D preview unavailable in this browser context",fallbackDesc:"Use the section links below to browse Anthrise residential, commercial, and off-grid products."},zh:{zones:{overview:"\u56ED\u533A\u5168\u666F",home:"01 \u5BB6\u5EAD\u80FD\u6E90",commercial:"02 \u5DE5\u5546\u4E1A\u80FD\u6E90",offgrid:"03 \u504F\u8FDC\u79BB\u7F51"},dayBtn:"\u767D\u663C",nightBtn:"\u591C\u665A",flowShow:"\u67E5\u770B\u80FD\u6E90\u6D41\u5411",flowHide:"\u9690\u85CF\u80FD\u6E90\u6D41\u5411",pauseMotion:"\u6682\u505C\u52A8\u6548",resumeMotion:"\u6062\u590D\u52A8\u6548",pauseFollow:"\u6682\u505C Risey",resumeFollow:"\u6062\u590D Risey",productsBtn:"\u4EA7\u54C1\u7CFB\u5217",discussBtn:"\u54A8\u8BE2\u60A8\u7684\u9879\u76EE",legendPv:"\u5149\u4F0F\u76F4\u6D41",legendBat:"\u50A8\u80FD\u76F4\u6D41",legendAc:"\u4EA4\u6D41\u4F9B\u7535",legendGrid:"\u5E76\u7F51\u7EBF\u8DEF",legendLight:"\u72EC\u7ACB\u592A\u9633\u80FD\u706F\u5177",legendNote:"\u6982\u5FF5\u8FD0\u884C\u793A\u610F \xB7 \u533A\u57DF 01\u201302 \u542B\u5E02\u7535\u63A5\u5165\uFF0C\u533A\u57DF 03 \u5B8C\u5168\u79BB\u7F51\u8FD0\u884C",viewSpecs:"\u67E5\u770B\u4EA7\u54C1\u53C2\u6570",inquireSetup:"\u54A8\u8BE2\u8BE5\u65B9\u6848",visitZone:"\u8FDB\u5165\u8BE5\u533A\u57DF",dragHint:"\u4E0B\u6ED1\u6F2B\u6E38\u56ED\u533A \xB7 \u62D6\u62FD\u5FAE\u8C03\u89C6\u89D2",fallbackTitle:"\u5F53\u524D\u73AF\u5883\u6682\u4E0D\u652F\u6301\u5B9E\u65F6 3D \u6E32\u67D3",fallbackDesc:"\u60A8\u53EF\u901A\u8FC7\u4E0B\u65B9\u5165\u53E3\u6D4F\u89C8 Anthrise \u5BB6\u5EAD\u3001\u5DE5\u5546\u4E1A\u53CA\u504F\u8FDC\u79BB\u7F51\u4EA7\u54C1\u4E0E\u65B9\u6848\u3002"}};function Ou(i,e){let t="en",n=null,s=null,r=new L,o=[],a=()=>{n=null,o.forEach(u=>{u.pinBtn.setAttribute("aria-expanded","false"),u.popEl.hidden=!0,u.rootEl.classList.remove("is-open")})},c=u=>{let g=u.popEl;if(g.hidden)return;g.style.setProperty("--pop-shift-x","0px"),g.classList.remove("hotspot-popover-below");let y=i.getBoundingClientRect(),m=g.getBoundingClientRect();if(!y.width||!m.width)return;let p=12,v=0;m.left<y.left+p?v=y.left+p-m.left:m.right>y.right-p&&(v=y.right-p-m.right),Math.abs(v)>.5&&g.style.setProperty("--pop-shift-x",`${v.toFixed(1)}px`),m.top<y.top+p&&g.classList.add("hotspot-popover-below")},l=u=>{let g=n===u.def.id;a(),!g&&(n=u.def.id,u.pinBtn.setAttribute("aria-expanded","true"),u.popEl.hidden=!1,u.rootEl.classList.add("is-open"),c(u))};i.innerHTML="",Fu.forEach(u=>{let g=document.createElement("div");g.className=`campus-hotspot campus-hotspot-${u.kind}`,g.dataset.hotspotId=u.id,g.dataset.zone=u.zone;let y=document.createElement("button");y.type="button",y.className=`campus-pin campus-pin-${u.kind}`,y.setAttribute("aria-expanded","false");let m=document.createElement("span");m.className="campus-pin-dot",m.setAttribute("aria-hidden","true");let p=document.createElement("span");p.className="campus-pin-label",p.textContent=u.title.en,y.appendChild(m),y.appendChild(p);let v=document.createElement("div");v.className="campus-popover",v.hidden=!0;let E=document.createElement("div");if(E.className="campus-pop-head",u.img){let w=document.createElement("div");w.className="campus-pop-thumb";let T=document.createElement("img");T.src=u.img,T.alt=u.title.en,T.loading="eager",T.decoding="async",w.appendChild(T),E.appendChild(w)}let x=document.createElement("div");x.className="campus-pop-titles";let R=document.createElement("p");R.className="campus-pop-kicker";let A=document.createElement("p");A.className="campus-pop-title",x.append(R,A),E.appendChild(x);let _=document.createElement("p");_.className="campus-pop-usage";let M=document.createElement("div");M.className="campus-pop-actions";let N={def:u,worldVec:new L(u.worldPos[0],u.worldPos[1],u.worldPos[2]),rootEl:g,pinBtn:y,tagEl:p,popEl:v,kickerEl:R,titleEl:A,usageEl:_,lastPx:-9999,lastPy:-9999};if(u.targetZone){let w=document.createElement("button");w.type="button",w.className="campus-pop-cta",w.addEventListener("click",T=>{T.stopPropagation(),a(),e.onSelectZone(u.targetZone)}),M.appendChild(w),N.visitBtn=w}else{if(u.skuId){let T=document.createElement("button");T.type="button",T.className="campus-pop-cta",T.addEventListener("click",D=>{D.stopPropagation(),a(),e.onInspectProduct(u.skuId)}),M.appendChild(T),N.specsBtn=T}if(u.hrefEn){let T=document.createElement("a");T.className="campus-pop-link",T.href=u.hrefEn,T.target="_blank",T.rel="noopener noreferrer",M.appendChild(T),N.linkEl=T}let w=document.createElement("button");w.type="button",w.className=u.skuId?"campus-pop-link":"campus-pop-cta",w.addEventListener("click",T=>{T.stopPropagation(),a(),e.onInquireProduct(u)}),M.appendChild(w),N.inquireBtn=w}v.append(E,_,M),g.append(y,v),i.appendChild(g),y.addEventListener("click",w=>{if(w.stopPropagation(),u.targetZone){a(),e.onSelectZone(u.targetZone);return}l(N)}),o.push(N)});let h=u=>{t=u;let g=tl[t];o.forEach(y=>{let{def:m}=y;y.tagEl.textContent=m.title[t],y.pinBtn.setAttribute("aria-label",m.title[t]),y.kickerEl.textContent=m.kicker[t],y.titleEl.textContent=m.title[t],y.usageEl.textContent=m.usage[t],y.visitBtn&&(y.visitBtn.textContent=g.visitZone),y.specsBtn&&(y.specsBtn.textContent=g.viewSpecs),y.linkEl&&m.hrefEn&&m.hrefZh&&(y.linkEl.href=t==="zh"?m.hrefZh:m.hrefEn,y.linkEl.textContent=t==="zh"?"\u4EA7\u54C1\u9875 \u2197":"Page \u2197"),y.inquireBtn&&(y.inquireBtn.textContent=g.inquireSetup)})};h("en");let f=u=>{let g=u.target;(!(g instanceof Element)||!g.closest(".campus-hotspot"))&&a()};return document.addEventListener("click",f),{updateProjection:(u,g,y,m)=>{if(s!==m&&(a(),s=m),!(g<10||y<10))for(let p=0;p<o.length;p++){let v=o[p];if(!(v.def.zone===m)){v.rootEl.style.display="none";continue}if(r.copy(v.worldVec).project(u),r.z>1||r.z<-1||r.x<-1.04||r.x>1.04||r.y<-1.04||r.y>1.04){v.rootEl.style.display="none";continue}let x=(r.x*.5+.5)*g,R=(-r.y*.5+.5)*y;v.rootEl.style.display="",(Math.abs(x-v.lastPx)>=.35||Math.abs(R-v.lastPy)>=.35)&&(v.lastPx=x,v.lastPy=R,v.rootEl.style.left=`${x.toFixed(1)}px`,v.rootEl.style.top=`${R.toFixed(1)}px`),n===v.def.id&&c(v)}},setLanguage:h,closeAll:a,getOpenId:()=>n,dispose:()=>{document.removeEventListener("click",f),i.innerHTML=""}}}function qr(i,e){let t=document.createElement("canvas");t.width=i,t.height=e;let n=t.getContext("2d");return[t,n]}function Yr(i,e,t=1,n=1){return i.colorSpace=Pt,i.wrapS=wi,i.wrapT=wi,i.repeat.set(t,n),i.anisotropy=e,i.needsUpdate=!0,i}function t_(i){let[e,t]=qr(512,512);t.fillStyle="#0e1b2d",t.fillRect(0,0,512,512);let n=t.createLinearGradient(0,0,512,512);n.addColorStop(0,"#13243b"),n.addColorStop(.5,"#0d192b"),n.addColorStop(1,"#152a44"),t.fillStyle=n,t.fillRect(10,10,492,492),t.strokeStyle="#cbd5dc",t.lineWidth=10,t.strokeRect(5,5,502,502);let s=6,r=10,o=12,a=(512-o*2)/s,c=(512-o*2)/r;for(let h=0;h<r;h++)for(let f=0;f<s;f++){let d=o+f*a,u=o+h*c;t.fillStyle=(h+f)%2===0?"#112238":"#142740",t.fillRect(d+2,u+2,a-4,c-4),t.fillStyle="rgba(205, 222, 236, 0.22)",t.fillRect(d+a*.25,u+2,1.2,c-4),t.fillRect(d+a*.5,u+2,1.2,c-4),t.fillRect(d+a*.75,u+2,1.2,c-4)}t.fillStyle="rgba(215, 226, 234, 0.42)",t.fillRect(10,254,492,4);let l=new pn(e);return Yr(l,i,1,1)}function n_(i){let[e,t]=qr(256,256);t.fillStyle="#f2eee6",t.fillRect(0,0,256,256);for(let s=0;s<1800;s++){let r=s*73%256,o=s*137%256;t.fillStyle=s%3===0?"rgba(198, 190, 176, 0.18)":"rgba(255, 255, 255, 0.22)",t.fillRect(r,o,2,2)}t.strokeStyle="rgba(176, 168, 154, 0.24)",t.lineWidth=1;for(let s=64;s<256;s+=64)t.beginPath(),t.moveTo(0,s),t.lineTo(256,s),t.stroke();let n=new pn(e);return Yr(n,i,2,2)}function i_(i){let[e,t]=qr(256,256);t.fillStyle="#6c777a",t.fillRect(0,0,256,256);for(let s=0;s<2600;s++){let r=s*97%256,o=s*53%256;t.fillStyle=s%2===0?"rgba(255, 255, 255, 0.055)":"rgba(18, 28, 30, 0.08)",t.fillRect(r,o,2,2)}let n=new pn(e);return Yr(n,i,6,1)}function s_(i){let[e,t]=qr(512,512);t.fillStyle="#c5d3c6",t.fillRect(0,0,512,512);for(let s=0;s<4200;s++){let r=(Math.sin(s*127.1+17)*43758.5453%1+1)%1*512,o=(Math.sin(s*311.7+83)*29743.2347%1+1)%1*512,a=s%3;t.fillStyle=a===0?"rgba(164, 188, 166, 0.24)":a===1?"rgba(218, 226, 210, 0.22)":"rgba(128, 158, 134, 0.16)",t.fillRect(r,o,3,3)}let n=new pn(e);return Yr(n,i,16,16)}function r_(i){let[e,t]=qr(256,256);t.fillStyle="#b98f63",t.fillRect(0,0,256,256);for(let s=0;s<256;s+=28)t.fillStyle=s%56===0?"rgba(155, 112, 70, 0.25)":"rgba(210, 174, 132, 0.15)",t.fillRect(0,s,256,25),t.fillStyle="rgba(72, 48, 28, 0.32)",t.fillRect(0,s+25,256,3);let n=new pn(e);return Yr(n,i,2,2)}function Bu(i){let e=Math.min(i.capabilities.getMaxAnisotropy(),4),t=t_(e),n=n_(e),s=i_(e),r=s_(e),o=r_(e),a=["/assets/images/stage-battery.png","/assets/images/stage-inverter.png","/assets/images/products/series_horizon.png","/assets/images/products/hybrid50.png","/assets/images/products/series_seed24.png","/assets/images/products/origAEV1000.png","/assets/images/stage-solar.png","/assets/images/stage-light.png","/assets/images/products/jcLight28.png","/assets/images/products/jcLight09.png"],c=new ei,l=new Map;return a.forEach(h=>{let f=c.load(h,d=>{d.colorSpace=Pt,d.anisotropy=e,d.needsUpdate=!0});f.colorSpace=Pt,l.set(h,f)}),{solarPanel:t,limestoneWall:n,roadAsphalt:s,grassGround:r,timberDeck:o,productTextures:l,dispose:()=>{t.dispose(),n.dispose(),s.dispose(),r.dispose(),o.dispose(),l.forEach(h=>h.dispose()),l.clear()}}}var Hu=new We(14543083),o_=new We(1451570),zu=new We(16774628),a_=new We(10207983),ku=new We(15135743),l_=new We(4944020),Gu=new We(11978172),c_=new We(1912374);function Vu(i){let{heroSection:e,stickyViewport:t,canvasHost:n,hotspotsHost:s,fallbackView:r}=i,o=!1,a=!1,c=!1,l=!1,h=!1,f=!1,d="day",u="overview",g="en",y=window.matchMedia("(prefers-reduced-motion: reduce)"),m=y.matches,p=0,v=0,E=null,x=null,R=0,A=null,_=null,M=Z=>{console.warn("[Anthrise Campus 3D]",Z),e.dataset.webglState="fallback",r.hidden=!1},N=window.setTimeout(()=>{!a&&!o&&M("WebGL initialization timed out")},3e3),w;try{w=document.createElement("canvas"),w.className="campus-webgl-canvas",w.setAttribute("aria-label","Interactive 3D Clean Energy Campus"),n.appendChild(w),E=new Xa({canvas:w,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch(Z){return window.clearTimeout(N),M(String(Z)),{bridge:{setTime:()=>{},setFlowVisible:()=>{},setMotionPaused:()=>{},setZone:()=>{},setLanguage:()=>{},setSuspended:()=>{},closeHotspots:()=>{},getState:()=>({ready:!1,time:d,flowVisible:f,activeZone:u})},dispose:()=>{}}}let T=E.getContext(),D=T.getExtension("WEBGL_debug_renderer_info"),F=D?String(T.getParameter(D.UNMASKED_RENDERER_WEBGL)):"",I=/SwiftShader|llvmpipe|softpipe/i.test(F),H=window.innerWidth<=768;E.outputColorSpace=Pt,E.toneMapping=Ir,E.toneMappingExposure=1.02,E.setPixelRatio(I?1:Math.min(window.devicePixelRatio||1,H?1.5:2)),E.shadowMap.enabled=!0,E.shadowMap.type=ta;let z=new Ai,V=Hu.clone(),ce=new er(V.getHex(),.0068);z.background=V,z.fog=ce;let q=new Ts(E),j=new Qa;x=q.fromScene(j,.04),z.environment=x.texture,z.environmentIntensity=.5,j.dispose(),q.dispose();let ae=new Tr(ku.getHex(),Gu.getHex(),.92);z.add(ae);let Ee=new xs(zu.getHex(),2.1);Ee.position.set(28,36,22),Ee.castShadow=!0,Ee.shadow.mapSize.set(I||H?1024:2048,I||H?1024:2048),Ee.shadow.camera.near=6,Ee.shadow.camera.far=96,Ee.shadow.camera.left=-36,Ee.shadow.camera.right=36,Ee.shadow.camera.top=34,Ee.shadow.camera.bottom=-34,Ee.shadow.bias=-4e-4,Ee.shadow.normalBias=.025,z.add(Ee);let Ve=new xs(13362158,.45);Ve.position.set(-28,16,-24),z.add(Ve);let J=new $t(40,16/9,.4,220),_e=Bu(E),Ae=Lu(_e);z.add(Ae.root);let Oe=Du(Ae.root,_e),ie=Uu();z.add(ie.group);let Pe=Nu(J),at=Math.max(1,n.clientWidth),Le=Math.max(1,n.clientHeight),Xe=Ou(s,{onSelectZone:Z=>Ye(Z,!1),onInspectProduct:Z=>i.onInspectProduct?.(Z),onInquireProduct:Z=>i.onInquireProduct?.(Z)}),Ie=!0,se=()=>{E&&(at=Math.max(1,n.clientWidth),Le=Math.max(1,n.clientHeight),E.setSize(at,Le,!1),J.aspect=at/Le,J.updateProjectionMatrix(),Ie=!0)};se();let oe=null,fe=0,we=()=>{let Z=e.getBoundingClientRect(),ue=Math.max(1,t.clientHeight||window.innerHeight-70),$=Z.height-ue;if($<=40)return oe?Xr[oe].progress:fe;let ee=_t.clamp(-Z.top/$,0,1);return fe=ee,ee},ve=Z=>{V.copy(Hu).lerp(o_,Z),ce.color.copy(V),ce.density=_t.lerp(.0068,.0076,Z),z.environmentIntensity=_t.lerp(.5,.25,Z),Ee.color.copy(zu).lerp(a_,Z),Ee.intensity=_t.lerp(2.1,.85,Z),ae.color.copy(ku).lerp(l_,Z),ae.groundColor.copy(Gu).lerp(c_,Z),ae.intensity=_t.lerp(.92,.64,Z),Ve.intensity=_t.lerp(.45,.36,Z),Ae.setNightFactor(Z),Oe.setNightFactor(Z),ie.setState(Z,m,h)},Ye=(Z,ue=!1)=>{let $=Xr[Z];if(!$)return;let ee=e.getBoundingClientRect(),pe=Math.max(1,t.clientHeight||window.innerHeight-70),U=ee.height-pe;if(Pe.resetOrbit(),Xe.closeAll(),U>40){let K=window.scrollY+ee.top-70,P=Math.max(0,K+$.progress*U);ue||m?(window.scrollTo({top:P,behavior:"auto"}),Pe.snapToProgress($.progress,at/Le)):window.scrollTo({top:P,behavior:"smooth"})}else oe=Z,fe=$.progress,ue||m?Pe.snapToProgress($.progress,at/Le):Pe.setScrollProgress($.progress);u!==Z&&(u=Z,i.onZoneChange?.(Z)),Ie=!0},Ne=!1,je=0,tt=0,lt=0,O=Z=>{Z.button!==0&&Z.pointerType==="mouse"||Z.target?.closest(".campus-hotspot, .campus-hud, button, a")||(Ne=!0,lt=0,je=Z.clientX,tt=Z.clientY,n.classList.add("is-dragging"))},xt=Z=>{if(!Ne)return;let ue=Z.clientX-je,$=Z.clientY-tt;je=Z.clientX,tt=Z.clientY,lt+=Math.hypot(ue,$),Pe.setOrbitOffset(-ue*.0042,-$*.0024),Ie=!0},nt=()=>{Ne&&(Ne=!1,n.classList.remove("is-dragging"),lt>6&&(n.dataset.recentDrag="1",window.setTimeout(()=>{delete n.dataset.recentDrag},90)))};n.addEventListener("pointerdown",O),window.addEventListener("pointermove",xt,{passive:!0}),window.addEventListener("pointerup",nt,{passive:!0});let et=()=>{oe=null;let Z=we();Pe.setScrollProgress(Z);let ue=Pe.getZoneForProgress(Z);ue!==u&&(u=ue,i.onZoneChange?.(ue)),Ie=!0};window.addEventListener("scroll",et,{passive:!0});let xe=Z=>{Z.preventDefault(),l=!0,M("WebGL context lost")},gt=()=>{l=!1,Ie=!0,e.dataset.webglState="active",r.hidden=!0};w.addEventListener("webglcontextlost",xe),w.addEventListener("webglcontextrestored",gt),"ResizeObserver"in window&&(A=new ResizeObserver(()=>se()),A.observe(n)),"IntersectionObserver"in window&&(_=new IntersectionObserver(Z=>{Z.forEach(ue=>{c=!ue.isIntersecting})},{threshold:.02}),_.observe(e));let ze=()=>{document.visibilityState==="visible"&&(C=performance.now())};document.addEventListener("visibilitychange",ze);let Ge=Z=>{m=Z.matches,ie.setState(p,m,h)};y.addEventListener("change",Ge);let C=performance.now(),S=0,k=0,de=Z=>{if(o)return;if(R=window.requestAnimationFrame(de),c||l||document.visibilityState==="hidden"){C=Z;return}if(I&&Z-S<45)return;let ue=Math.max(0,Math.min((Z-C)/1e3,.08));C=Z;let $=!1;if(Math.abs(p-v)>.002){if(m||h)p=v;else{let P=1-Math.exp(-3.6*ue);p=Math.abs(v-p)<.008?v:_t.lerp(p,v,P)}ve(p),$=!0}let ee=we();Pe.setScrollProgress(ee);let pe=Pe.update(ue,at/Math.max(1,Le),m),U=f&&!m&&!h,K=!m&&!h;Oe.update(ue,!K),U?ie.update(ue):Ie&&f&&ie.update(0),(Ie||$||pe||U||K||k<2)&&(S=Z,Ie=!1,E.render(z,J),Xe.updateProjection(J,at,Le,u),k++,!a&&k>=2&&(a=!0,window.clearTimeout(N),e.dataset.webglState="active",r.hidden=!0))};return ve(0),Pe.snapToProgress(we(),at/Math.max(1,Le)),E.render(z,J),Xe.updateProjection(J,at,Le,u),a=!0,window.clearTimeout(N),e.dataset.webglState="active",r.hidden=!0,R=window.requestAnimationFrame(de),{bridge:{setTime:(Z,ue=!1)=>{d=Z,v=Z==="night"?1:0,(ue||m)&&(p=v,ve(p)),Ie=!0},setFlowVisible:Z=>{f=Z,ie.setVisible(Z),Ie=!0},setMotionPaused:Z=>{h=Z,ie.setState(p,m,h),Ie=!0},setZone:Ye,setLanguage:Z=>{g=Z,Xe.setLanguage(g),Ie=!0},setSuspended:Z=>{l=Z,Z||(Ie=!0)},closeHotspots:()=>{Xe.closeAll()},getState:()=>({ready:a,time:d,flowVisible:f,activeZone:u})},dispose:()=>{o=!0,window.clearTimeout(N),R&&window.cancelAnimationFrame(R),n.removeEventListener("pointerdown",O),window.removeEventListener("pointermove",xt),window.removeEventListener("pointerup",nt),window.removeEventListener("scroll",et),document.removeEventListener("visibilitychange",ze),y.removeEventListener("change",Ge),w.removeEventListener("webglcontextlost",xe),w.removeEventListener("webglcontextrestored",gt),A?.disconnect(),_?.disconnect(),Xe.dispose(),ie.dispose(),Oe.dispose(),Ae.dispose(),_e.dispose(),x?.dispose(),E?.dispose(),w.remove()}}}function Wu(){let i=document.getElementById("hero-section"),e=document.getElementById("hero-scene-viewport"),t=document.getElementById("campus-canvas-host"),n=document.getElementById("campus-hotspots"),s=document.getElementById("campus-fallback-view");if(!i||!e||!t||!n||!s)return;let r=document.getElementById("campus-zone-num"),o=document.getElementById("campus-zone-title"),a=document.getElementById("campus-zone-subtitle"),c=document.getElementById("campus-zone-note"),l=document.getElementById("campus-drag-hint"),h=Array.from(document.querySelectorAll("[data-campus-zone]")),f="overview",d=i.dataset.sceneTime==="night"?"night":"day",u=document.documentElement.lang.startsWith("zh")?"zh":"en",g=()=>{let x=Xr[f],R=tl[u];r&&(r.textContent=x.num),o&&(o.textContent=x.title[u]),a&&(a.textContent=x.subtitle[u]),c&&(c.textContent=d==="night"?x.noteNight[u]:x.noteDay[u]),l&&(l.textContent=R.dragHint),h.forEach(A=>{let _=A.dataset.campusZone;if(!_)return;let M=_===f;A.classList.toggle("is-active",M),A.setAttribute("aria-pressed",String(M));let N=A.querySelector(".campus-zone-label");N&&(N.textContent=R.zones[_])}),i.dataset.activeZone=f},p=Vu({heroSection:i,stickyViewport:e,canvasHost:t,hotspotsHost:n,fallbackView:s,onZoneChange:x=>{f=x,g()},onInspectProduct:x=>{if(typeof window.__anthriseOpenStageProduct=="function"){window.__anthriseOpenStageProduct(x);return}document.getElementById("products")?.scrollIntoView({behavior:"smooth",block:"start"})},onInquireProduct:x=>{let R=x.title[u],A=x.modelCode||"",_=x.topic||"home";if(typeof window.__anthrisePrefillInquiry=="function"){window.__anthrisePrefillInquiry(_,A,R);return}let M=document.getElementById("project-inquiry"),N=document.getElementById("inq-topic"),w=document.getElementById("inq-message");if(N instanceof HTMLSelectElement&&(N.value=_),w instanceof HTMLTextAreaElement){let T=u==="zh"?`[\u56ED\u533A\u573A\u666F\u54A8\u8BE2] ${R}${A?`\uFF08${A}\uFF09`:""}
`:`[Campus Inquiry] ${R}${A?` (${A})`:""}
`;w.value.includes(R)||(w.value=w.value.trim()?`${T}${w.value}`:T)}M?.scrollIntoView({behavior:"smooth",block:"start"})}}),v={...p.bridge,setTime:(x,R)=>{d=x,p.bridge.setTime(x,R),g()},setZone:(x,R)=>{f=x,p.bridge.setZone(x,R),g()},setLanguage:x=>{u=x,p.bridge.setLanguage(x),g()}};window.ANTHRISE_CAMPUS=v,h.forEach(x=>{x.addEventListener("click",()=>{let R=x.dataset.campusZone;R&&v.setZone(R,!1)})}),v.setTime(d,!0),v.setLanguage(u),g();let E=document.getElementById("scene-flow-toggle");E instanceof HTMLButtonElement&&E.getAttribute("aria-pressed")!=="true"&&E.click(),window.addEventListener("beforeunload",()=>{p.dispose()})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Wu,{once:!0}):Wu();
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
