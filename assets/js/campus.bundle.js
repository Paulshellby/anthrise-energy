var oa="187";var xh=0,Wc=1,_h=2;var Oi=1,aa=2,As=3,Jn=0,qt=1,Wt=2,zi=0,Cs=1,Xc=2,qc=3,Yc=4,yh=5;var Gi=100,vh=101,Eh=102,Mh=103,Sh=104,bh=200,Th=201,wh=202,Rh=203,Zc=204,Jc=205,Ah=206,Ch=207,Ph=208,Ih=209,Lh=210,Dh=211,Nh=212,Uh=213,Fh=214,Po=0,Io=1,Lo=2,ps=3,Do=4,No=5,Uo=6,Fo=7,ca=0,Hh=1,Bh=2,$n=0,$c=1,Kc=2,Qc=3,Br=4,jc=5,el=6,tl=7;var nl=300,ki=301,Ps=302,la=303,ha=304,hn=1e3,Xn=1001,Ho=1002,jt=1003,Oh=1004;var Or=1005;var pn=1006,ua=1007;var hi=1008;var yn=1009,il=1010,sl=1011,Is=1012,da=1013,Gn=1014,In=1015,kn=1016,fa=1017,pa=1018,Vi=1020,rl=35902,ol=35899,al=1021,cl=1022,Vn=1023,oi=1026,ui=1027,ma=1028,ga=1029,Ti=1030,xa=1031;var _a=1033,zr=33776,Gr=33777,kr=33778,Vr=33779,ya=35840,va=35841,Ea=35842,Ma=35843,Sa=36196,ba=37492,Ta=37496,wa=37488,Ra=37489,Wr=37490,Aa=37491,Ca=37808,Pa=37809,Ia=37810,La=37811,Da=37812,Na=37813,Ua=37814,Fa=37815,Ha=37816,Ba=37817,Oa=37818,za=37819,Ga=37820,ka=37821,Va=36492,Wa=36494,Xa=36495,qa=36283,Ya=36284,Xr=36285,Za=36286;var sr=2300,Bo=2301,Ro=2302,Ic=2303,Lc=2400,Dc=2401,Nc=2402;var zh=3200;var qr=0,Gh=1,Yt="",St="srgb",rr="srgb-linear",or="linear",Rt="srgb";var Ao=7680;var kh=519,Vh=512,Wh=513,Xh=514,ll=515,qh=516,Yh=517,hl=518,ul=519,Zh=35044,dl=35048;var fl="300 es",An=2e3,ms=2001;function ud(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function dd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jh(){let i=gs("canvas");return i.style.display="block",i}var Fl={},xs=null;function pl(...i){let e="THREE."+i.shift();xs?xs("log",e,...i):console.log(e,...i)}function $h(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function at(...i){i=$h(i);let e="THREE."+i.shift();if(xs)xs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ct(...i){i=$h(i);let e="THREE."+i.shift();if(xs)xs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ii(...i){let e=i.join(" ");e in Fl||(Fl[e]=!0,at(...i))}function Kh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Qh={[Po]:Po,[Lo]:Uo,[Do]:Do,[ps]:No,[Io]:Io,[Uo]:Lo,[Fo]:Fo,[No]:ps},Yn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hl=1234567,er=Math.PI/180,Li=180/Math.PI;function Wi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function mt(i,e,t){return Math.max(e,Math.min(t,i))}function ml(i,e){return(i%e+e)%e}function fd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function pd(i,e,t){return i!==e?(t-i)/(e-i):0}function tr(i,e,t){return(1-t)*i+t*e}function md(i,e,t,n){return tr(i,e,1-Math.exp(-t*n))}function gd(i,e=1){return e-Math.abs(ml(i,e*2)-e)}function xd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function _d(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function yd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function vd(i,e){return i+Math.random()*(e-i)}function Ed(i){return i*(.5-Math.random())}function Md(i){i!==void 0&&(Hl=i);let e=Hl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sd(i){return i*er}function bd(i){return i*Li}function Td(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function wd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function gl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Rd(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),p=r((e-n)/2),u=o((e-n)/2),d=r((n-e)/2),x=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*p,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*p,a*l);break;case"ZXZ":i.set(c*p,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*x,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*x,a*l);break;case"ZYZ":i.set(c*x,c*d,a*h,a*l);break;default:at("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function jh(i,e){if(e.constructor===Float32Array)return i;let t=xl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function eu(i,e){if(e.constructor===Float32Array)return i;let t=xl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var bt={DEG2RAD:er,RAD2DEG:Li,generateUUID:Wi,clamp:mt,euclideanModulo:ml,mapLinear:fd,inverseLerp:pd,lerp:tr,damp:md,pingpong:gd,smoothstep:xd,smootherstep:_d,randInt:yd,randFloat:vd,randFloatSpread:Ed,seededRandom:Md,degToRad:Sd,radToDeg:bd,isPowerOfTwo:Td,ceilPowerOfTwo:wd,floorPowerOfTwo:gl,setQuaternionFromProperEuler:Rd,normalize:eu,denormalize:jh},Le=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],p=n[s+3],u=r[o+0],d=r[o+1],x=r[o+2],v=r[o+3];if(p!==v||c!==u||l!==d||h!==x){let f=c*u+l*d+h*x+p*v;f<0&&(u=-u,d=-d,x=-x,v=-v,f=-f);let m=1-a;if(f<.9995){let _=Math.acos(f),E=Math.sin(_);m=Math.sin(m*_)/E,a=Math.sin(a*_)/E,c=c*m+u*a,l=l*m+d*a,h=h*m+x*a,p=p*m+v*a}else{c=c*m+u*a,l=l*m+d*a,h=h*m+x*a,p=p*m+v*a;let _=1/Math.sqrt(c*c+l*l+h*h+p*p);c*=_,l*=_,h*=_,p*=_}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],p=r[o],u=r[o+1],d=r[o+2],x=r[o+3];return e[t]=a*x+h*p+c*d-l*u,e[t+1]=c*x+h*u+l*p-a*d,e[t+2]=l*x+h*d+a*u-c*p,e[t+3]=h*x-a*p-c*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),p=a(r/2),u=c(n/2),d=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=u*h*p+l*d*x,this._y=l*d*p-u*h*x,this._z=l*h*x+u*d*p,this._w=l*h*p-u*d*x;break;case"YXZ":this._x=u*h*p+l*d*x,this._y=l*d*p-u*h*x,this._z=l*h*x-u*d*p,this._w=l*h*p+u*d*x;break;case"ZXY":this._x=u*h*p-l*d*x,this._y=l*d*p+u*h*x,this._z=l*h*x+u*d*p,this._w=l*h*p-u*d*x;break;case"ZYX":this._x=u*h*p-l*d*x,this._y=l*d*p+u*h*x,this._z=l*h*x-u*d*p,this._w=l*h*p+u*d*x;break;case"YZX":this._x=u*h*p+l*d*x,this._y=l*d*p+u*h*x,this._z=l*h*x-u*d*p,this._w=l*h*p-u*d*x;break;case"XZY":this._x=u*h*p-l*d*x,this._y=l*d*p-u*h*x,this._z=l*h*x+u*d*p,this._w=l*h*p+u*d*x;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],p=t[10],u=n+a+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>p){let d=2*Math.sqrt(1+n-a-p);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>p){let d=2*Math.sqrt(1+a-n-p);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+p-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),p=2*(r*n-o*t);return this.x=t+c*l+o*p-a*h,this.y=n+c*h+a*l-r*p,this.z=s+c*p+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return cc.copy(this).projectOnVector(e),this.sub(cc)}reflect(e){return this.sub(cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},cc=new P,Bl=new Xt,ht=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],p=n[7],u=n[2],d=n[5],x=n[8],v=s[0],f=s[3],m=s[6],_=s[1],E=s[4],y=s[7],S=s[2],T=s[5],g=s[8];return r[0]=o*v+a*_+c*S,r[3]=o*f+a*E+c*T,r[6]=o*m+a*y+c*g,r[1]=l*v+h*_+p*S,r[4]=l*f+h*E+p*T,r[7]=l*m+h*y+p*g,r[2]=u*v+d*_+x*S,r[5]=u*f+d*E+x*T,r[8]=u*m+d*y+x*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],p=h*o-a*l,u=a*c-h*r,d=l*r-o*c,x=t*p+n*u+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return e[0]=p*v,e[1]=(s*l-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=u*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=d*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Ii("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lc.makeScale(e,t)),this}rotate(e){return Ii("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lc.makeRotation(-e)),this}translate(e,t){return Ii("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},lc=new ht,Ol=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zl=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ad(){let i={enabled:!0,workingColorSpace:rr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Rt&&(s.r=ri(s.r),s.g=ri(s.g),s.b=ri(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Rt&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yt?or:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[rr]:{primaries:e,whitePoint:n,transfer:or,toXYZ:Ol,fromXYZ:zl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:e,whitePoint:n,transfer:Rt,toXYZ:Ol,fromXYZ:zl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:St}}}),i}var Et=Ad();function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qi,Oo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qi===void 0&&(Qi=gs("canvas")),Qi.width=e.width,Qi.height=e.height;let s=Qi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Qi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=gs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ri(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Cd=0,_s=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Wi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(hc(s[o].image)):r.push(hc(s[o]))}else r=hc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function hc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Oo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}var Pd=0,uc=new P,un=class i extends Yn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Xn,s=Xn,r=pn,o=hi,a=Vn,c=yn,l=i.DEFAULT_ANISOTROPY,h=Yt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Wi(),this.name="",this.source=new _s(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(uc).x}get height(){return this.source.getSize(uc).y}get depth(){return this.source.getSize(uc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hn:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case Ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hn:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case Ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=nl;un.DEFAULT_ANISOTROPY=1;var Ut=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],p=c[8],u=c[1],d=c[5],x=c[9],v=c[2],f=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(p-v)<.01&&Math.abs(x-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+v)<.1&&Math.abs(x+f)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,y=(d+1)/2,S=(m+1)/2,T=(h+u)/4,g=(p+v)/4,M=(x+f)/4;return E>y&&E>S?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=g/n):y>S?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=M/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=g/r,s=M/r),this.set(n,s,r,t),this}let _=Math.sqrt((f-x)*(f-x)+(p-v)*(p-v)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(f-x)/_,this.y=(p-v)/_,this.z=(u-h)/_,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zo=class extends Yn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new un({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new _s(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mn=class extends zo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ar=class extends un{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Go=class extends un{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Pt=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,c,l,h,p,u,d,x,v,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,p,u,d,x,v,f)}set(e,t,n,s,r,o,a,c,l,h,p,u,d,x,v,f){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=p,m[14]=u,m[3]=d,m[7]=x,m[11]=v,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ji.setFromMatrixColumn(e,0).length(),r=1/ji.setFromMatrixColumn(e,1).length(),o=1/ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let u=o*h,d=o*p,x=a*h,v=a*p;t[0]=c*h,t[4]=-c*p,t[8]=l,t[1]=d+x*l,t[5]=u-v*l,t[9]=-a*c,t[2]=v-u*l,t[6]=x+d*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*h,d=c*p,x=l*h,v=l*p;t[0]=u+v*a,t[4]=x*a-d,t[8]=o*l,t[1]=o*p,t[5]=o*h,t[9]=-a,t[2]=d*a-x,t[6]=v+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*h,d=c*p,x=l*h,v=l*p;t[0]=u-v*a,t[4]=-o*p,t[8]=x+d*a,t[1]=d+x*a,t[5]=o*h,t[9]=v-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*h,d=o*p,x=a*h,v=a*p;t[0]=c*h,t[4]=x*l-d,t[8]=u*l+v,t[1]=c*p,t[5]=v*l+u,t[9]=d*l-x,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,d=o*l,x=a*c,v=a*l;t[0]=c*h,t[4]=v-u*p,t[8]=x*p+d,t[1]=p,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*p+x,t[10]=u-v*p}else if(e.order==="XZY"){let u=o*c,d=o*l,x=a*c,v=a*l;t[0]=c*h,t[4]=-p,t[8]=l*h,t[1]=u*p+v,t[5]=o*h,t[9]=d*p-x,t[2]=x*p-d,t[6]=a*h,t[10]=v*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Id,e,Ld)}lookAt(e,t,n){let s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),di.crossVectors(n,vn),di.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),di.crossVectors(n,vn)),di.normalize(),io.crossVectors(vn,di),s[0]=di.x,s[4]=io.x,s[8]=vn.x,s[1]=di.y,s[5]=io.y,s[9]=vn.y,s[2]=di.z,s[6]=io.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],p=n[5],u=n[9],d=n[13],x=n[2],v=n[6],f=n[10],m=n[14],_=n[3],E=n[7],y=n[11],S=n[15],T=s[0],g=s[4],M=s[8],A=s[12],C=s[1],D=s[5],N=s[9],I=s[13],b=s[2],z=s[6],B=s[10],G=s[14],oe=s[3],Y=s[7],J=s[11],de=s[15];return r[0]=o*T+a*C+c*b+l*oe,r[4]=o*g+a*D+c*z+l*Y,r[8]=o*M+a*N+c*B+l*J,r[12]=o*A+a*I+c*G+l*de,r[1]=h*T+p*C+u*b+d*oe,r[5]=h*g+p*D+u*z+d*Y,r[9]=h*M+p*N+u*B+d*J,r[13]=h*A+p*I+u*G+d*de,r[2]=x*T+v*C+f*b+m*oe,r[6]=x*g+v*D+f*z+m*Y,r[10]=x*M+v*N+f*B+m*J,r[14]=x*A+v*I+f*G+m*de,r[3]=_*T+E*C+y*b+S*oe,r[7]=_*g+E*D+y*z+S*Y,r[11]=_*M+E*N+y*B+S*J,r[15]=_*A+E*I+y*G+S*de,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],p=e[6],u=e[10],d=e[14],x=e[3],v=e[7],f=e[11],m=e[15],_=c*d-l*u,E=a*d-l*p,y=a*u-c*p,S=o*d-l*h,T=o*u-c*h,g=o*p-a*h;return t*(v*_-f*E+m*y)-n*(x*_-f*S+m*T)+s*(x*E-v*S+m*g)-r*(x*y-v*T+f*g)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],p=e[9],u=e[10],d=e[11],x=e[12],v=e[13],f=e[14],m=e[15],_=t*a-n*o,E=t*c-s*o,y=t*l-r*o,S=n*c-s*a,T=n*l-r*a,g=s*l-r*c,M=h*v-p*x,A=h*f-u*x,C=h*m-d*x,D=p*f-u*v,N=p*m-d*v,I=u*m-d*f,b=_*I-E*N+y*D+S*C-T*A+g*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/b;return e[0]=(a*I-c*N+l*D)*z,e[1]=(s*N-n*I-r*D)*z,e[2]=(v*g-f*T+m*S)*z,e[3]=(u*T-p*g-d*S)*z,e[4]=(c*C-o*I-l*A)*z,e[5]=(t*I-s*C+r*A)*z,e[6]=(f*y-x*g-m*E)*z,e[7]=(h*g-u*y+d*E)*z,e[8]=(o*N-a*C+l*M)*z,e[9]=(n*C-t*N-r*M)*z,e[10]=(x*T-v*y+m*_)*z,e[11]=(p*y-h*T-d*_)*z,e[12]=(a*A-o*D-c*M)*z,e[13]=(t*D-n*A+s*M)*z,e[14]=(v*E-x*S-f*_)*z,e[15]=(h*S-p*E+u*_)*z,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,p=a+a,u=r*l,d=r*h,x=r*p,v=o*h,f=o*p,m=a*p,_=c*l,E=c*h,y=c*p,S=n.x,T=n.y,g=n.z;return s[0]=(1-(v+m))*S,s[1]=(d+y)*S,s[2]=(x-E)*S,s[3]=0,s[4]=(d-y)*T,s[5]=(1-(u+m))*T,s[6]=(f+_)*T,s[7]=0,s[8]=(x+E)*g,s[9]=(f-_)*g,s[10]=(1-(u+v))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=ji.set(s[0],s[1],s[2]).length(),a=ji.set(s[4],s[5],s[6]).length(),c=ji.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Un.copy(this);let l=1/o,h=1/a,p=1/c;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=p,Un.elements[9]*=p,Un.elements[10]*=p,t.setFromRotationMatrix(Un),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=An,c=!1){let l=this.elements,h=2*r/(t-e),p=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),x,v;if(c)x=r/(o-r),v=o*r/(o-r);else if(a===An)x=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===ms)x=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=p,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=An,c=!1){let l=this.elements,h=2/(t-e),p=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s),x,v;if(c)x=1/(o-r),v=o/(o-r);else if(a===An)x=-2/(o-r),v=-(o+r)/(o-r);else if(a===ms)x=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=p,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=x,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ji=new P,Un=new Pt,Id=new P(0,0,0),Ld=new P(1,1,1),di=new P,io=new P,vn=new P,Gl=new Pt,kl=new Xt,Sn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],p=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kl.setFromEuler(this),this.setFromQuaternion(kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var ys=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Dd=0,Vl=new P,es=new Xt,ei=new Pt,so=new P,Ys=new P,Nd=new P,Ud=new Xt,Wl=new P(1,0,0),Xl=new P(0,1,0),ql=new P(0,0,1),Yl={type:"added"},Fd={type:"removed"},ts={type:"childadded",child:null},dc={type:"childremoved",child:null},Mt=class i extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new Sn,n=new Xt,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pt},normalMatrix:{value:new ht}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ys,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(Wl,e)}rotateY(e){return this.rotateOnAxis(Xl,e)}rotateZ(e){return this.rotateOnAxis(ql,e)}translateOnAxis(e,t){return Vl.copy(e).applyQuaternion(this.quaternion),this.position.add(Vl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wl,e)}translateY(e){return this.translateOnAxis(Xl,e)}translateZ(e){return this.translateOnAxis(ql,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?so.copy(e):so.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Ys,so,this.up):ei.lookAt(so,Ys,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),es.setFromRotationMatrix(ei),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yl),ts.child=e,this.dispatchEvent(ts),ts.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fd),dc.child=e,this.dispatchEvent(dc),dc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yl),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,e,Nd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,Ud,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let p=c[l];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),p=o(e.shapes),u=o(e.skeletons),d=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Mt.DEFAULT_UP=new P(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tt=class extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hd={type:"move"},vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let f=t.getJointPose(v,n),m=this._getHandJoint(l,v);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}let h=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],u=h.position.distanceTo(p.position),d=.02,x=.005;l.inputState.pinching&&u>d+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},ro={h:0,s:0,l:0};function fc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Et.workingColorSpace){return this.r=e,this.g=t,this.b=n,Et.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Et.workingColorSpace){if(e=ml(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=fc(o,r,e+1/3),this.g=fc(o,r,e),this.b=fc(o,r,e-1/3)}return Et.colorSpaceToWorking(this,s),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){let n=tu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return Et.workingToColorSpace(ln.copy(this),e),Math.round(mt(ln.r*255,0,255))*65536+Math.round(mt(ln.g*255,0,255))*256+Math.round(mt(ln.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.workingToColorSpace(ln.copy(this),t);let n=ln.r,s=ln.g,r=ln.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let p=o-a;switch(l=h<=.5?p/(o+a):p/(2-o-a),o){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Et.workingColorSpace){return Et.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=St){Et.workingToColorSpace(ln.copy(this),e);let t=ln.r,n=ln.g,s=ln.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(ro);let n=tr(fi.h,ro.h,t),s=tr(fi.s,ro.s,t),r=tr(fi.l,ro.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new Ve;Ve.NAMES=tu;var cr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Di=class extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fn=new P,ti=new P,pc=new P,ni=new P,ns=new P,is=new P,Zl=new P,mc=new P,gc=new P,xc=new P,_c=new Ut,yc=new Ut,vc=new Ut,xi=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Fn.subVectors(e,t),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Fn.subVectors(s,t),ti.subVectors(n,t),pc.subVectors(e,t);let o=Fn.dot(Fn),a=Fn.dot(ti),c=Fn.dot(pc),l=ti.dot(ti),h=ti.dot(pc),p=o*l-a*a;if(p===0)return r.set(0,0,0),null;let u=1/p,d=(l*c-a*h)*u,x=(o*h-a*c)*u;return r.set(1-d-x,x,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ni.x),c.addScaledVector(o,ni.y),c.addScaledVector(a,ni.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return _c.setScalar(0),yc.setScalar(0),vc.setScalar(0),_c.fromBufferAttribute(e,t),yc.fromBufferAttribute(e,n),vc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(_c,r.x),o.addScaledVector(yc,r.y),o.addScaledVector(vc,r.z),o}static isFrontFacing(e,t,n,s){return Fn.subVectors(n,t),ti.subVectors(e,t),Fn.cross(ti).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Fn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;ns.subVectors(s,n),is.subVectors(r,n),mc.subVectors(e,n);let c=ns.dot(mc),l=is.dot(mc);if(c<=0&&l<=0)return t.copy(n);gc.subVectors(e,s);let h=ns.dot(gc),p=is.dot(gc);if(h>=0&&p<=h)return t.copy(s);let u=c*p-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),t.copy(n).addScaledVector(ns,o);xc.subVectors(e,r);let d=ns.dot(xc),x=is.dot(xc);if(x>=0&&d<=x)return t.copy(r);let v=d*l-c*x;if(v<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(n).addScaledVector(is,a);let f=h*x-d*p;if(f<=0&&p-h>=0&&d-x>=0)return Zl.subVectors(r,s),a=(p-h)/(p-h+(d-x)),t.copy(s).addScaledVector(Zl,a);let m=1/(f+v+u);return o=v*m,a=u*m,t.copy(n).addScaledVector(ns,o).addScaledVector(is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oo.copy(n.boundingBox)),oo.applyMatrix4(e.matrixWorld),this.union(oo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),ao.subVectors(this.max,Zs),ss.subVectors(e.a,Zs),rs.subVectors(e.b,Zs),os.subVectors(e.c,Zs),pi.subVectors(rs,ss),mi.subVectors(os,rs),Ri.subVectors(ss,os);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Ri.z,Ri.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Ri.z,0,-Ri.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Ri.y,Ri.x,0];return!Ec(t,ss,rs,os,ao)||(t=[1,0,0,0,1,0,0,0,1],!Ec(t,ss,rs,os,ao))?!1:(co.crossVectors(pi,mi),t=[co.x,co.y,co.z],Ec(t,ss,rs,os,ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ii=[new P,new P,new P,new P,new P,new P,new P,new P],Hn=new P,oo=new mn,ss=new P,rs=new P,os=new P,pi=new P,mi=new P,Ri=new P,Zs=new P,ao=new P,co=new P,Ai=new P;function Ec(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ai.fromArray(i,r);let a=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),c=e.dot(Ai),l=t.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Vt=new P,lo=new Le,Bd=0,On=class extends Yn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zh,this.updateRanges=[],this.gpuType=In,this.version=0,this._normalizationScale=e!==void 0?xl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lo.fromBufferAttribute(this,t),lo.applyMatrix3(e),this.setXY(t,lo.x,lo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):jh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):eu(e,this.array)}};var lr=class extends On{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var hr=class extends On{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var je=class extends On{constructor(e,t,n){super(new Float32Array(e),t,n)}},Od=new mn,Js=new P,Mc=new P,_i=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Od.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);let t=Js.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Js,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(Mc)),this.expandByPoint(Js.copy(e.center).sub(Mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},zd=0,Rn=new Pt,Sc=new Mt,as=new P,En=new mn,$s=new mn,Qt=new P,Nt=class i extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ud(e)?hr:lr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ht().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return Sc.lookAt(e),Sc.updateMatrix(),this.applyMatrix4(Sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new je(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(En.min,$s.min),En.expandByPoint(Qt),Qt.addVectors(En.max,$s.max),En.expandByPoint(Qt)):(En.expandByPoint($s.min),En.expandByPoint($s.max))}En.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Qt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Qt.fromBufferAttribute(a,l),c&&(as.fromBufferAttribute(e,l),Qt.add(as)),s=Math.max(s,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new On(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let A=0;A<n.count;A++)a[A]=new P,c[A]=new P;let h=new P,p=new P,u=new P,d=new Le,x=new Le,v=new Le,f=new P,m=new P;function _(A,C,D){l[A]=l[C]=l[D]=1,h.fromBufferAttribute(n,A),p.fromBufferAttribute(n,C),u.fromBufferAttribute(n,D),d.fromBufferAttribute(r,A),x.fromBufferAttribute(r,C),v.fromBufferAttribute(r,D),p.sub(h),u.sub(h),x.sub(d),v.sub(d);let N=1/(x.x*v.y-v.x*x.y);isFinite(N)&&(f.copy(p).multiplyScalar(v.y).addScaledVector(u,-x.y).multiplyScalar(N),m.copy(u).multiplyScalar(x.x).addScaledVector(p,-v.x).multiplyScalar(N),a[A].add(f),a[C].add(f),a[D].add(f),c[A].add(m),c[C].add(m),c[D].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let A=0,C=E.length;A<C;++A){let D=E[A],N=D.start,I=D.count;for(let b=N,z=N+I;b<z;b+=3)_(e.getX(b+0),e.getX(b+1),e.getX(b+2))}let y=new P,S=new P,T=new P,g=new P;function M(A){T.fromBufferAttribute(s,A),g.copy(T);let C=a[A];y.copy(C),y.sub(T.multiplyScalar(T.dot(C))).normalize(),S.crossVectors(g,C);let N=S.dot(c[A])<0?-1:1;o.setXYZW(A,y.x,y.y,y.z,N)}for(let A=0,C=n.count;A<C;++A)l[A]&&M(A);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,p=new P;if(e)for(let u=0,d=e.count;u<d;u+=3){let x=e.getX(u+0),v=e.getX(u+1),f=e.getX(u+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,f),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,f),a.add(h),c.add(h),l.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,p=a.normalized,u=new l.constructor(c.length*h),d=0,x=0;for(let v=0,f=c.length;v<f;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*h;for(let m=0;m<h;m++)u[x++]=l[d++]}return new On(u,h,p)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,p=l.length;h<p;h++){let u=l[h],d=e(u,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let p=0,u=l.length;p<u;p++){let d=l[p];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],p=r[l];for(let u=0,d=p.length;u<d;u++)h.push(p[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let p=o[l];this.addGroup(p.start,p.count,p.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var bc=new P,Gd=new P,kd=new ht,Bn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=bc.subVectors(n,t).cross(Gd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(bc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||kd.getNormalMatrix(e),s=this.coplanarPoint(bc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Vd=0,ai=class extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=Cs,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=Jc,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ao,this.stencilZFail=Ao,this.stencilZPass=Ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Bn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Le().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var si=new P,Tc=new P,ho=new P,uo=new P,ur=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Tc.copy(e).add(t).multiplyScalar(.5),ho.copy(t).sub(e).normalize(),uo.copy(this.origin).sub(Tc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ho),a=uo.dot(this.direction),c=-uo.dot(ho),l=uo.lengthSq(),h=Math.abs(1-o*o),p,u,d,x;if(h>0)if(p=o*c-a,u=o*a-c,x=r*h,p>=0)if(u>=-x)if(u<=x){let v=1/h;p*=v,u*=v,d=p*(p+o*u+2*a)+u*(o*p+u+2*c)+l}else u=r,p=Math.max(0,-(o*u+a)),d=-p*p+u*(u+2*c)+l;else u=-r,p=Math.max(0,-(o*u+a)),d=-p*p+u*(u+2*c)+l;else u<=-x?(p=Math.max(0,-(-o*r+a)),u=p>0?-r:Math.min(Math.max(-r,-c),r),d=-p*p+u*(u+2*c)+l):u<=x?(p=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(p=Math.max(0,-(o*r+a)),u=p>0?r:Math.min(Math.max(-r,-c),r),d=-p*p+u*(u+2*c)+l);else u=o>0?-r:r,p=Math.max(0,-(o*u+a)),d=-p*p+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Tc).addScaledVector(ho,u),d}intersectSphere(e,t){if(e.radius<0)return null;si.subVectors(e.center,this.origin);let n=si.dot(this.direction),s=si.dot(si)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(e.min.z-u.z)*p,c=(e.max.z-u.z)*p):(a=(e.max.z-u.z)*p,c=(e.min.z-u.z)*p),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,p=e.x-o.x,u=e.y-o.y,d=e.z-o.z,x=t.x-o.x,v=t.y-o.y,f=t.z-o.z,m=n.x-o.x,_=n.y-o.y,E=n.z-o.z,y=Math.abs(c),S=Math.abs(l),T=Math.abs(h),g,M,A,C,D,N,I,b,z,B,G,oe;if(y>=S&&y>=T?(A=c,N=p,z=x,oe=m,c>=0?(g=l,M=h,C=u,D=d,I=v,b=f,B=_,G=E):(g=h,M=l,C=d,D=u,I=f,b=v,B=E,G=_)):S>=T?(A=l,N=u,z=v,oe=_,l>=0?(g=h,M=c,C=d,D=p,I=f,b=x,B=E,G=m):(g=c,M=h,C=p,D=d,I=x,b=f,B=m,G=E)):(A=h,N=d,z=f,oe=E,h>=0?(g=c,M=l,C=p,D=u,I=x,b=v,B=m,G=_):(g=l,M=c,C=u,D=p,I=v,b=x,B=_,G=m)),A===0)return null;let Y=g/A,J=M/A,de=1/A,Ne=C-Y*N,we=D-J*N,ee=I-Y*z,Se=b-J*z,te=B-Y*oe,Me=G-J*oe,he=te*Se-Me*ee,Fe=Ne*Me-we*te,rt=ee*we-Se*Ne;if(s){if(he<0||Fe<0||rt<0)return null}else if((he<0||Fe<0||rt<0)&&(he>0||Fe>0||rt>0))return null;let pe=he+Fe+rt;if(pe===0)return null;let _e=de*(he*N+Fe*z+rt*oe);return(pe>0?_e<0:_e>0)?null:this.at(_e/pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dn=class extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jl=new Pt,Ci=new ur,fo=new _i,$l=new P,po=new P,mo=new P,go=new P,wc=new P,xo=new P,Kl=new P,_o=new P,ue=class extends Mt{constructor(e=new Nt,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){xo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],p=r[c];h!==0&&(wc.fromBufferAttribute(p,e),o?xo.addScaledVector(wc,h):xo.addScaledVector(wc.sub(t),h))}t.add(xo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(r),Ci.copy(e.ray).recast(e.near),!(fo.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(fo,$l)===null||Ci.origin.distanceToSquared($l)>(e.far-e.near)**2))&&(Jl.copy(r).invert(),Ci.copy(e.ray).applyMatrix4(Jl),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=u.length;x<v;x++){let f=u[x],m=o[f.materialIndex],_=Math.max(f.start,d.start),E=Math.min(a.count,Math.min(f.start+f.count,d.start+d.count));for(let y=_,S=E;y<S;y+=3){let T=a.getX(y),g=a.getX(y+1),M=a.getX(y+2);s=yo(this,m,e,n,l,h,p,T,g,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let f=x,m=v;f<m;f+=3){let _=a.getX(f),E=a.getX(f+1),y=a.getX(f+2);s=yo(this,o,e,n,l,h,p,_,E,y),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,v=u.length;x<v;x++){let f=u[x],m=o[f.materialIndex],_=Math.max(f.start,d.start),E=Math.min(c.count,Math.min(f.start+f.count,d.start+d.count));for(let y=_,S=E;y<S;y+=3){let T=y,g=y+1,M=y+2;s=yo(this,m,e,n,l,h,p,T,g,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let f=x,m=v;f<m;f+=3){let _=f,E=f+1,y=f+2;s=yo(this,o,e,n,l,h,p,_,E,y),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function Wd(i,e,t,n,s,r,o,a){let c;if(e.side===qt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Jn,a),c===null)return null;_o.copy(a),_o.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(_o);return l<t.near||l>t.far?null:{distance:l,point:_o.clone(),object:i}}function yo(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,po),i.getVertexPosition(c,mo),i.getVertexPosition(l,go);let h=Wd(i,e,t,n,po,mo,go,Kl);if(h){let p=new P;xi.getBarycoord(Kl,po,mo,go,p),s&&(h.uv=xi.getInterpolatedAttribute(s,a,c,l,p,new Le)),r&&(h.uv1=xi.getInterpolatedAttribute(r,a,c,l,p,new Le)),o&&(h.normal=xi.getInterpolatedAttribute(o,a,c,l,p,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new P,materialIndex:0};xi.getNormal(po,mo,go,u.normal),h.face=u,h.barycoord=p}return h}var dr=class extends un{constructor(e=null,t=1,n=1,s,r,o,a,c,l=jt,h=jt,p,u){super(null,o,a,c,l,h,s,r,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fr=class extends On{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},cs=new Pt,Ql=new Pt,vo=[],jl=new mn,Xd=new Pt,Ks=new ue,Qs=new _i,Tt=class extends ue{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Xd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),jl.copy(e.boundingBox).applyMatrix4(cs),this.boundingBox.union(jl)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),Qs.copy(e.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(Qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(n),e.ray.intersectsSphere(Qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cs),Ql.multiplyMatrices(n,cs),Ks.matrixWorld=Ql,Ks.raycast(e,vo);for(let o=0,a=vo.length;o<a;o++){let c=vo[o];c.instanceId=r,c.object=this,t.push(c)}vo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new fr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new dr(new Float32Array(s*this.count),s,this.count,ma,In));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Pi=new _i,qd=new Le(.5,.5),Eo=new P,yi=class{constructor(e=new Bn,t=new Bn,n=new Bn,s=new Bn,r=new Bn,o=new Bn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],p=r[5],u=r[6],d=r[7],x=r[8],v=r[9],f=r[10],m=r[11],_=r[12],E=r[13],y=r[14],S=r[15];if(s[0].setComponents(l-o,d-h,m-x,S-_).normalize(),s[1].setComponents(l+o,d+h,m+x,S+_).normalize(),s[2].setComponents(l+a,d+p,m+v,S+E).normalize(),s[3].setComponents(l-a,d-p,m-v,S-E).normalize(),n)s[4].setComponents(c,u,f,y).normalize(),s[5].setComponents(l-c,d-u,m-f,S-y).normalize();else if(s[4].setComponents(l-c,d-u,m-f,S-y).normalize(),t===An)s[5].setComponents(l+c,d+u,m+f,S+y).normalize();else if(t===ms)s[5].setComponents(c,u,f,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){Pi.center.set(0,0,0);let t=qd.distanceTo(e.center);return Pi.radius=.7071067811865476+t,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Eo.x=s.normal.x>0?e.max.x:e.min.x,Eo.y=s.normal.y>0?e.max.y:e.min.y,Eo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Eo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},eh=new Pt,ko=class i{constructor(){this.coordinateSystem=An,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];eh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new yi),n[s].setFromProjectionMatrix(eh,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new yi),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var pr=class extends un{constructor(e=[],t=ki,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gn=class extends un{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ci=class extends un{constructor(e,t,n=Gn,s,r,o,a=jt,c=jt,l,h=oi,p=1){if(h!==oi&&h!==ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:p};super(u,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _s(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},mr=class extends ci{constructor(e,t=Gn,n=ki,s,r,o=jt,a=jt,c,l=oi){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},gr=class extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},He=class i extends Nt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],p=[],u=0,d=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new je(l,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(p,2));function x(v,f,m,_,E,y,S,T,g,M,A){let C=y/g,D=S/M,N=y/2,I=S/2,b=T/2,z=g+1,B=M+1,G=0,oe=0,Y=new P;for(let J=0;J<B;J++){let de=J*D-I;for(let Ne=0;Ne<z;Ne++){let we=Ne*C-N;Y[v]=we*_,Y[f]=de*E,Y[m]=b,l.push(Y.x,Y.y,Y.z),Y[v]=0,Y[f]=0,Y[m]=T>0?1:-1,h.push(Y.x,Y.y,Y.z),p.push(Ne/g),p.push(1-J/M),G+=1}}for(let J=0;J<M;J++)for(let de=0;de<g;de++){let Ne=u+de+z*J,we=u+de+z*(J+1),ee=u+(de+1)+z*(J+1),Se=u+(de+1)+z*J;c.push(Ne,we,Se),c.push(we,ee,Se),oe+=6}a.addGroup(d,oe,A),d+=oe,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},xr=class i extends Nt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=t/2,p=Math.PI/2*e,u=t,d=2*p+u,x=n*2+r,v=s+1,f=new P,m=new P;for(let _=0;_<=x;_++){let E=0,y=0,S=0,T=0;if(_<=n){let A=_/n,C=A*Math.PI/2;y=-h-e*Math.cos(C),S=e*Math.sin(C),T=-e*Math.cos(C),E=A*p}else if(_<=n+r){let A=(_-n)/r;y=-h+A*t,S=e,T=0,E=p+A*u}else{let A=(_-n-r)/n,C=A*Math.PI/2;y=h+e*Math.sin(C),S=e*Math.cos(C),T=e*Math.sin(C),E=p+u+A*p}let g=Math.max(0,Math.min(1,E/d)),M=0;_===0?M=.5/s:_===x&&(M=-.5/s);for(let A=0;A<=s;A++){let C=A/s,D=C*Math.PI*2,N=Math.sin(D),I=Math.cos(D);m.x=-S*I,m.y=y,m.z=S*N,a.push(m.x,m.y,m.z),f.set(-S*I,T,S*N),f.normalize(),c.push(f.x,f.y,f.z),l.push(C+M,g)}if(_>0){let A=(_-1)*v;for(let C=0;C<s;C++){let D=A+C,N=A+C+1,I=_*v+C,b=_*v+C+1;o.push(D,N,I),o.push(N,b,I)}}}this.setIndex(o),this.setAttribute("position",new je(a,3)),this.setAttribute("normal",new je(c,3)),this.setAttribute("uv",new je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},vi=class i extends Nt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new P,h=new Le;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let p=0,u=3;p<=t;p++,u+=3){let d=n+p/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(a,3)),this.setAttribute("uv",new je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},dt=class i extends Nt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],u=[],d=[],x=0,v=[],f=n/2,m=0;_(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new je(p,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(d,2));function _(){let y=new P,S=new P,T=0,g=(t-e)/n;for(let M=0;M<=r;M++){let A=[],C=M/r,D=C*(t-e)+e;for(let N=0;N<=s;N++){let I=N/s,b=I*c+a,z=Math.sin(b),B=Math.cos(b);S.x=D*z,S.y=-C*n+f,S.z=D*B,p.push(S.x,S.y,S.z),y.set(z,g,B).normalize(),u.push(y.x,y.y,y.z),d.push(I,1-C),A.push(x++)}v.push(A)}for(let M=0;M<s;M++)for(let A=0;A<r;A++){let C=v[A][M],D=v[A+1][M],N=v[A+1][M+1],I=v[A][M+1];(e>0||A!==0)&&(h.push(C,D,I),T+=3),(t>0||A!==r-1)&&(h.push(D,N,I),T+=3)}l.addGroup(m,T,0),m+=T}function E(y){let S=x,T=new Le,g=new P,M=0,A=y===!0?e:t,C=y===!0?1:-1;for(let N=1;N<=s;N++)p.push(0,f*C,0),u.push(0,C,0),d.push(.5,.5),x++;let D=x;for(let N=0;N<=s;N++){let b=N/s*c+a,z=Math.cos(b),B=Math.sin(b);g.x=A*B,g.y=f*C,g.z=A*z,p.push(g.x,g.y,g.z),u.push(0,C,0),T.x=z*.5+.5,T.y=B*.5*C+.5,d.push(T.x,T.y),x++}for(let N=0;N<s;N++){let I=S+N,b=D+N;y===!0?h.push(b,b+1,I):h.push(b+1,b,I),M+=3}l.addGroup(m,M,y===!0?1:2),m+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ni=class i extends dt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},_r=class i extends Nt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new je(r,3)),this.setAttribute("normal",new je(r.slice(),3)),this.setAttribute("uv",new je(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let E=new P,y=new P,S=new P;for(let T=0;T<t.length;T+=3)d(t[T+0],E),d(t[T+1],y),d(t[T+2],S),c(E,y,S,_)}function c(_,E,y,S){let T=S+1,g=[];for(let M=0;M<=T;M++){g[M]=[];let A=_.clone().lerp(y,M/T),C=E.clone().lerp(y,M/T),D=T-M;for(let N=0;N<=D;N++)N===0&&M===T?g[M][N]=A:g[M][N]=A.clone().lerp(C,N/D)}for(let M=0;M<T;M++)for(let A=0;A<2*(T-M)-1;A++){let C=Math.floor(A/2);A%2===0?(u(g[M][C+1]),u(g[M+1][C]),u(g[M][C])):(u(g[M][C+1]),u(g[M+1][C+1]),u(g[M+1][C]))}}function l(_){let E=new P;for(let y=0;y<r.length;y+=3)E.x=r[y+0],E.y=r[y+1],E.z=r[y+2],E.normalize().multiplyScalar(_),r[y+0]=E.x,r[y+1]=E.y,r[y+2]=E.z}function h(){let _=new P;for(let E=0;E<r.length;E+=3){_.x=r[E+0],_.y=r[E+1],_.z=r[E+2];let y=f(_)/2/Math.PI+.5,S=m(_)/Math.PI+.5;o.push(y,1-S)}x(),p()}function p(){for(let _=0;_<o.length;_+=6){let E=o[_+0],y=o[_+2],S=o[_+4],T=Math.max(E,y,S),g=Math.min(E,y,S);T>.9&&g<.1&&(E<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),S<.2&&(o[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function d(_,E){let y=_*3;E.x=e[y+0],E.y=e[y+1],E.z=e[y+2]}function x(){let _=new P,E=new P,y=new P,S=new P,T=new Le,g=new Le,M=new Le;for(let A=0,C=0;A<r.length;A+=9,C+=6){_.set(r[A+0],r[A+1],r[A+2]),E.set(r[A+3],r[A+4],r[A+5]),y.set(r[A+6],r[A+7],r[A+8]),T.set(o[C+0],o[C+1]),g.set(o[C+2],o[C+3]),M.set(o[C+4],o[C+5]),S.copy(_).add(E).add(y).divideScalar(3);let D=f(S);v(T,C+0,_,D),v(g,C+2,E,D),v(M,C+4,y,D)}}function v(_,E,y,S){S<0&&_.x===1&&(o[E]=_.x-1),y.x===0&&y.z===0&&(o[E]=S/2/Math.PI+.5)}function f(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},yr=class i extends _r{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){at("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Le:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],o=[],a=new P,c=new Pt;for(let d=0;d<=e;d++){let x=d/e;s[d]=this.getTangentAt(x,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),p<=l&&(l=p,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(mt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,x))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(mt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let x=1;x<=e;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],d*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Es=class extends bn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Le){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*p+this.aX,l=u*p+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Vo=class extends Es{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function _l(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,p){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+p)+(c-a)/p;u*=h,d*=h,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var th=new P,nh=new P,Rc=new _l,Ac=new _l,Cc=new _l,xn=class extends bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(nh.subVectors(s[0],s[1]).add(s[0]),l=nh);let p=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(th.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=th),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(l.distanceToSquared(p),d),v=Math.pow(p.distanceToSquared(u),d),f=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),x<1e-4&&(x=v),f<1e-4&&(f=v),Rc.initNonuniformCatmullRom(l.x,p.x,u.x,h.x,x,v,f),Ac.initNonuniformCatmullRom(l.y,p.y,u.y,h.y,x,v,f),Cc.initNonuniformCatmullRom(l.z,p.z,u.z,h.z,x,v,f)}else this.curveType==="catmullrom"&&(Rc.initCatmullRom(l.x,p.x,u.x,h.x,this.tension),Ac.initCatmullRom(l.y,p.y,u.y,h.y,this.tension),Cc.initCatmullRom(l.z,p.z,u.z,h.z,this.tension));return n.set(Rc.calc(c),Ac.calc(c),Cc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ih(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Yd(i,e){let t=1-i;return t*t*e}function Zd(i,e){return 2*(1-i)*i*e}function Jd(i,e){return i*i*e}function nr(i,e,t,n){return Yd(i,e)+Zd(i,t)+Jd(i,n)}function $d(i,e){let t=1-i;return t*t*t*e}function Kd(i,e){let t=1-i;return 3*t*t*i*e}function Qd(i,e){return 3*(1-i)*i*i*e}function jd(i,e){return i*i*i*e}function ir(i,e,t,n,s){return $d(i,e)+Kd(i,t)+Qd(i,n)+jd(i,s)}var vr=class extends bn{constructor(e=new Le,t=new Le,n=new Le,s=new Le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Le){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ir(e,s.x,r.x,o.x,a.x),ir(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wo=class extends bn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ir(e,s.x,r.x,o.x,a.x),ir(e,s.y,r.y,o.y,a.y),ir(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Er=class extends bn{constructor(e=new Le,t=new Le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ei=class extends bn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mr=class extends bn{constructor(e=new Le,t=new Le,n=new Le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Le){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(nr(e,s.x,r.x,o.x),nr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ui=class extends bn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(nr(e,s.x,r.x,o.x),nr(e,s.y,r.y,o.y),nr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sr=class extends bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Le){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(ih(a,c.x,l.x,h.x,p.x),ih(a,c.y,l.y,h.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Le().fromArray(s))}return this}},Xo=Object.freeze({__proto__:null,ArcCurve:Vo,CatmullRomCurve3:xn,CubicBezierCurve:vr,CubicBezierCurve3:Wo,EllipseCurve:Es,LineCurve:Er,LineCurve3:Ei,QuadraticBezierCurve:Mr,QuadraticBezierCurve3:Ui,SplineCurve:Sr}),Ms=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Xo[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},br=class extends Ms{constructor(e){super(),this.type="Path",this.currentPoint=new Le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Er(this.currentPoint.clone(),new Le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Mr(this.currentPoint.clone(),new Le(e,t),new Le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new vr(this.currentPoint.clone(),new Le(e,t),new Le(n,s),new Le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Sr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new Es(e,t,n,s,r,o,a,c);if(this.curves.length>0){let p=l.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},kt=class extends br{constructor(e){super(e),this.uuid=Wi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new br().fromJSON(s))}return this}};function ef(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=nu(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=of(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let h=a,p=c;for(let u=t;u<s;u+=t){let d=i[u],x=i[u+1];d<a&&(a=d),x<c&&(c=x),d>h&&(h=d),x>p&&(p=x)}l=Math.max(h-a,p-c),l=l!==0?32767/l:0}return Tr(r,o,t,a,c,l,0),o}function nu(i,e,t,n,s){let r;if(s===xf(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=sh(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=sh(o/n|0,i[o],i[o+1],r);return r&&Ss(r,r.next)&&(Rr(r),r=r.next),r}function Fi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ss(t,t.next)||Ot(t.prev,t,t.next)===0)){if(Rr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Tr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&uf(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?nf(i,n,s,r):tf(i)){e.push(c.i,i.i,l.i),Rr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=sf(Fi(i),e),Tr(i,e,t,n,s,r,2)):o===2&&rf(i,e,t,n,s,r):Tr(Fi(i),e,t,n,s,r,1);break}}}function tf(i){let e=i.prev,t=i,n=i.next;if(Ot(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),p=Math.min(a,c,l),u=Math.max(s,r,o),d=Math.max(a,c,l),x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=u&&x.y>=p&&x.y<=d&&js(s,a,r,c,o,l,x.x,x.y)&&Ot(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function nf(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Ot(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,p=r.y,u=o.y,d=Math.min(a,c,l),x=Math.min(h,p,u),v=Math.max(a,c,l),f=Math.max(h,p,u),m=Uc(d,x,e,t,n),_=Uc(v,f,e,t,n),E=i.prevZ,y=i.nextZ;for(;E&&E.z>=m&&y&&y.z<=_;){if(E.x>=d&&E.x<=v&&E.y>=x&&E.y<=f&&E!==s&&E!==o&&js(a,h,c,p,l,u,E.x,E.y)&&Ot(E.prev,E,E.next)>=0||(E=E.prevZ,y.x>=d&&y.x<=v&&y.y>=x&&y.y<=f&&y!==s&&y!==o&&js(a,h,c,p,l,u,y.x,y.y)&&Ot(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;E&&E.z>=m;){if(E.x>=d&&E.x<=v&&E.y>=x&&E.y<=f&&E!==s&&E!==o&&js(a,h,c,p,l,u,E.x,E.y)&&Ot(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;y&&y.z<=_;){if(y.x>=d&&y.x<=v&&y.y>=x&&y.y<=f&&y!==s&&y!==o&&js(a,h,c,p,l,u,y.x,y.y)&&Ot(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function sf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ss(n,s)&&su(n,t,t.next,s)&&wr(n,s)&&wr(s,n)&&(e.push(n.i,t.i,s.i),Rr(t),Rr(t.next),t=i=s),t=t.next}while(t!==i);return Fi(t)}function rf(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&pf(o,a)){let c=ru(o,a);o=Fi(o,o.next),c=Fi(c,c.next),Tr(o,e,t,n,s,r,0),Tr(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function of(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=nu(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(ff(l))}s.sort(af);for(let r=0;r<s.length;r++)t=cf(s[r],t);return t}function af(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function cf(i,e){let t=lf(i,e);if(!t)return e;let n=ru(t,i);return Fi(n,n.next),Fi(t,t.next)}function lf(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Ss(i,t))return t;do{if(Ss(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let p=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=n&&p>r&&(r=p,o=t.x<t.next.x?t:t.next,p===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&iu(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let p=Math.abs(s-t.y)/(n-t.x);wr(t,i)&&(p<h||p===h&&(t.x>o.x||t.x===o.x&&hf(o,t)))&&(o=t,h=p)}t=t.next}while(t!==a);return o}function hf(i,e){return Ot(i.prev,i,e.prev)<0&&Ot(e.next,i,i.next)<0}function uf(i,e,t,n){let s=i;do s.z===0&&(s.z=Uc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,df(s)}function df(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Uc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function ff(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function iu(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function js(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&iu(i,e,t,n,s,r,o,a)}function pf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!mf(i,e)&&(wr(i,e)&&wr(e,i)&&gf(i,e)&&(Ot(i.prev,i,e.prev)||Ot(i,e.prev,e))||Ss(i,e)&&Ot(i.prev,i,i.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ss(i,e){return i.x===e.x&&i.y===e.y}function su(i,e,t,n){let s=So(Ot(i,e,t)),r=So(Ot(i,e,n)),o=So(Ot(t,n,i)),a=So(Ot(t,n,e));return!!(s!==r&&o!==a||s===0&&Mo(i,t,e)||r===0&&Mo(i,n,e)||o===0&&Mo(t,i,n)||a===0&&Mo(t,e,n))}function Mo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function So(i){return i>0?1:i<0?-1:0}function mf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&su(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function wr(i,e){return Ot(i.prev,i,i.next)<0?Ot(i,e,i.next)>=0&&Ot(i,i.prev,e)>=0:Ot(i,e,i.prev)<0||Ot(i,i.next,e)<0}function gf(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ru(i,e){let t=Fc(i.i,i.x,i.y),n=Fc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function sh(i,e,t,n){let s=Fc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Rr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function xf(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Hc=class{static triangulate(e,t,n=2){return ef(e,t,n)}},qn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];rh(e),oh(n,e);let o=e.length;t.forEach(rh);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,oh(n,t[c]);let a=Hc.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function rh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function oh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var en=class i extends Nt{constructor(e=new kt([new Le(.5,.5),new Le(-.5,.5),new Le(-.5,-.5),new Le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new je(s,3)),this.setAttribute("uv",new je(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:_f,E,y=!1,S,T,g,M;if(m){E=m.getSpacedPoints(h),y=!0,u=!1;let V=m.isCatmullRomCurve3?m.closed:!1;S=m.computeFrenetFrames(h,V),T=new P,g=new P,M=new P}u||(f=0,d=0,x=0,v=0);let A=a.extractPoints(l),C=A.shape,D=A.holes;if(!qn.isClockWise(C)){C=C.reverse();for(let V=0,ge=D.length;V<ge;V++){let ie=D[V];qn.isClockWise(ie)&&(D[V]=ie.reverse())}}function I(V){let ie=10000000000000001e-36,F=V[0];for(let W=1;W<=V.length;W++){let k=W%V.length,re=V[k],ye=re.x-F.x,Re=re.y-F.y,Ee=ye*ye+Re*Re,O=Math.max(Math.abs(re.x),Math.abs(re.y),Math.abs(F.x),Math.abs(F.y)),Ze=ie*O*O;if(Ee<=Ze){V.splice(k,1),W--;continue}F=re}}I(C),D.forEach(I);let b=D.length,z=C;for(let V=0;V<b;V++){let ge=D[V];C=C.concat(ge)}function B(V,ge,ie){return ge||ct("ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(ge,ie)}let G=C.length;function oe(V,ge,ie){let F,W,k,re=V.x-ge.x,ye=V.y-ge.y,Re=ie.x-V.x,Ee=ie.y-V.y,O=re*re+ye*ye,Ze=re*Ee-ye*Re;if(Math.abs(Ze)>Number.EPSILON){let Xe=Math.sqrt(O),ot=Math.sqrt(Re*Re+Ee*Ee),Ce=ge.x-ye/Xe,ft=ge.y+re/Xe,Ge=ie.x-Ee/ot,ke=ie.y+Re/ot,L=((Ge-Ce)*Ee-(ke-ft)*Re)/(re*Ee-ye*Re);F=Ce+re*L-V.x,W=ft+ye*L-V.y;let w=F*F+W*W;if(w<=2)return new Le(F,W);k=Math.sqrt(w/2)}else{let Xe=!1;re>Number.EPSILON?Re>Number.EPSILON&&(Xe=!0):re<-Number.EPSILON?Re<-Number.EPSILON&&(Xe=!0):Math.sign(ye)===Math.sign(Ee)&&(Xe=!0),Xe?(F=-ye,W=re,k=Math.sqrt(O)):(F=re,W=ye,k=Math.sqrt(O/2))}return new Le(F/k,W/k)}let Y=[];for(let V=0,ge=z.length,ie=ge-1,F=V+1;V<ge;V++,ie++,F++)ie===ge&&(ie=0),F===ge&&(F=0),Y[V]=oe(z[V],z[ie],z[F]);let J=[],de,Ne=Y.concat();for(let V=0,ge=b;V<ge;V++){let ie=D[V];de=[];for(let F=0,W=ie.length,k=W-1,re=F+1;F<W;F++,k++,re++)k===W&&(k=0),re===W&&(re=0),de[F]=oe(ie[F],ie[k],ie[re]);J.push(de),Ne=Ne.concat(de)}let we;if(f===0)we=qn.triangulateShape(z,D);else{let V=[],ge=[];for(let ie=0;ie<f;ie++){let F=ie/f,W=d*Math.cos(F*Math.PI/2),k=x*Math.sin(F*Math.PI/2)+v;for(let re=0,ye=z.length;re<ye;re++){let Re=B(z[re],Y[re],k);Fe(Re.x,Re.y,-W),F===0&&V.push(Re)}for(let re=0,ye=b;re<ye;re++){let Re=D[re];de=J[re];let Ee=[];for(let O=0,Ze=Re.length;O<Ze;O++){let Xe=B(Re[O],de[O],k);Fe(Xe.x,Xe.y,-W),F===0&&Ee.push(Xe)}F===0&&ge.push(Ee)}}we=qn.triangulateShape(V,ge)}let ee=we.length,Se=x+v;for(let V=0;V<G;V++){let ge=u?B(C[V],Ne[V],Se):C[V];y?(g.copy(S.normals[0]).multiplyScalar(ge.x),T.copy(S.binormals[0]).multiplyScalar(ge.y),M.copy(E[0]).add(g).add(T),Fe(M.x,M.y,M.z)):Fe(ge.x,ge.y,0)}for(let V=1;V<=h;V++)for(let ge=0;ge<G;ge++){let ie=u?B(C[ge],Ne[ge],Se):C[ge];y?(g.copy(S.normals[V]).multiplyScalar(ie.x),T.copy(S.binormals[V]).multiplyScalar(ie.y),M.copy(E[V]).add(g).add(T),Fe(M.x,M.y,M.z)):Fe(ie.x,ie.y,p/h*V)}for(let V=f-1;V>=0;V--){let ge=V/f,ie=d*Math.cos(ge*Math.PI/2),F=x*Math.sin(ge*Math.PI/2)+v;for(let W=0,k=z.length;W<k;W++){let re=B(z[W],Y[W],F);Fe(re.x,re.y,p+ie)}for(let W=0,k=D.length;W<k;W++){let re=D[W];de=J[W];for(let ye=0,Re=re.length;ye<Re;ye++){let Ee=B(re[ye],de[ye],F);y?Fe(Ee.x,Ee.y+E[h-1].y,E[h-1].x+ie):Fe(Ee.x,Ee.y,p+ie)}}}te(),Me();function te(){let V=s.length/3;if(u){let ge=0,ie=G*ge;for(let F=0;F<ee;F++){let W=we[F];rt(W[2]+ie,W[1]+ie,W[0]+ie)}ge=h+f*2,ie=G*ge;for(let F=0;F<ee;F++){let W=we[F];rt(W[0]+ie,W[1]+ie,W[2]+ie)}}else{for(let ge=0;ge<ee;ge++){let ie=we[ge];rt(ie[2],ie[1],ie[0])}for(let ge=0;ge<ee;ge++){let ie=we[ge];rt(ie[0]+G*h,ie[1]+G*h,ie[2]+G*h)}}n.addGroup(V,s.length/3-V,0)}function Me(){let V=s.length/3,ge=0;he(z,ge),ge+=z.length;for(let ie=0,F=D.length;ie<F;ie++){let W=D[ie];he(W,ge),ge+=W.length}n.addGroup(V,s.length/3-V,1)}function he(V,ge){let ie=V.length;for(;--ie>=0;){let F=ie,W=ie-1;W<0&&(W=V.length-1);for(let k=0,re=h+f*2;k<re;k++){let ye=G*k,Re=G*(k+1),Ee=ge+F+ye,O=ge+W+ye,Ze=ge+W+Re,Xe=ge+F+Re;pe(Ee,O,Ze,Xe)}}}function Fe(V,ge,ie){c.push(V),c.push(ge),c.push(ie)}function rt(V,ge,ie){_e(V),_e(ge),_e(ie);let F=s.length/3,W=_.generateTopUV(n,s,F-3,F-2,F-1);De(W[0]),De(W[1]),De(W[2])}function pe(V,ge,ie,F){_e(V),_e(ge),_e(F),_e(ge),_e(ie),_e(F);let W=s.length/3,k=_.generateSideWallUV(n,s,W-6,W-3,W-2,W-1);De(k[0]),De(k[1]),De(k[3]),De(k[1]),De(k[2]),De(k[3])}function _e(V){s.push(c[V*3+0]),s.push(c[V*3+1]),s.push(c[V*3+2])}function De(V){r.push(V.x),r.push(V.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return yf(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Xo[s.type]().fromJSON(s)),new i(n,e.options)}},_f={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new Le(r,o),new Le(a,c),new Le(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],p=e[n*3+2],u=e[s*3],d=e[s*3+1],x=e[s*3+2],v=e[r*3],f=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Le(o,1-c),new Le(l,1-p),new Le(u,1-x),new Le(v,1-m)]:[new Le(a,1-c),new Le(h,1-p),new Le(d,1-x),new Le(f,1-m)]}};function yf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Zn=class i extends _r{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ar=class i extends Nt{constructor(e=[new Le(0,-.5),new Le(.5,0),new Le(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=mt(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,p=new P,u=new Le,d=new P,x=new P,v=new P,f=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:f=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,d.x=m*1,d.y=-f,d.z=m*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:v.normalize(),c.push(v.x,v.y,v.z);break;default:f=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,d.x=m*1,d.y=-f,d.z=m*0,x.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(x)}for(let _=0;_<=t;_++){let E=n+_*h*s,y=Math.sin(E),S=Math.cos(E);for(let T=0;T<=e.length-1;T++){p.x=e[T].x*y,p.y=e[T].y,p.z=e[T].x*S,o.push(p.x,p.y,p.z),u.x=_/t,u.y=T/(e.length-1),a.push(u.x,u.y);let g=c[3*T+0]*y,M=c[3*T+1],A=c[3*T+0]*S;l.push(g,M,A)}}for(let _=0;_<t;_++)for(let E=0;E<e.length-1;E++){let y=E+_*e.length,S=y,T=y+e.length,g=y+e.length+1,M=y+1;r.push(S,T,M),r.push(g,M,T)}this.setIndex(r),this.setAttribute("position",new je(o,3)),this.setAttribute("uv",new je(a,2)),this.setAttribute("normal",new je(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Ft=class i extends Nt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,p=e/a,u=t/c,d=[],x=[],v=[],f=[];for(let m=0;m<h;m++){let _=m*u-o;for(let E=0;E<l;E++){let y=E*p-r;x.push(y,-_,0),v.push(0,0,1),f.push(E/a),f.push(1-m/c)}}for(let m=0;m<c;m++)for(let _=0;_<a;_++){let E=_+l*m,y=_+l*(m+1),S=_+1+l*(m+1),T=_+1+l*m;d.push(E,y,T),d.push(y,S,T)}this.setIndex(d),this.setAttribute("position",new je(x,3)),this.setAttribute("normal",new je(v,3)),this.setAttribute("uv",new je(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Cr=class i extends Nt{constructor(e=new kt([new Le(0,.5),new Le(-.5,-.5),new Le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new je(s,3)),this.setAttribute("normal",new je(r,3)),this.setAttribute("uv",new je(o,2));function l(h){let p=s.length/3,u=h.extractPoints(t),d=u.shape,x=u.holes;qn.isClockWise(d)===!1&&(d=d.reverse());for(let f=0,m=x.length;f<m;f++){let _=x[f];qn.isClockWise(_)===!0&&(x[f]=_.reverse())}let v=qn.triangulateShape(d,x);for(let f=0,m=x.length;f<m;f++){let _=x[f];d=d.concat(_)}for(let f=0,m=d.length;f<m;f++){let _=d[f];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let f=0,m=v.length;f<m;f++){let _=v[f],E=_[0]+p,y=_[1]+p,S=_[2]+p;n.push(E,y,S),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return vf(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function vf(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Pr=class i extends Nt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],p=new P,u=new P,d=[],x=[],v=[],f=[];for(let m=0;m<=n;m++){let _=[],E=m/n,y=o+E*a,S=e*Math.cos(y),T=Math.sqrt(e*e-S*S),g=0;m===0&&o===0?g=.5/t:m===n&&c===Math.PI&&(g=-.5/t);for(let M=0;M<=t;M++){let A=M/t,C=s+A*r;p.x=-T*Math.cos(C),p.y=S,p.z=T*Math.sin(C),x.push(p.x,p.y,p.z),u.copy(p).normalize(),v.push(u.x,u.y,u.z),f.push(A+g,1-E),_.push(l++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){let E=h[m][_+1],y=h[m][_],S=h[m+1][_],T=h[m+1][_+1];(m!==0||o>0)&&d.push(E,y,T),(m!==n-1||c<Math.PI)&&d.push(y,S,T)}this.setIndex(d),this.setAttribute("position",new je(x,3)),this.setAttribute("normal",new je(v,3)),this.setAttribute("uv",new je(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var zn=class i extends Nt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],p=[],u=new P,d=new P,x=new P;for(let v=0;v<=n;v++){let f=o+v/n*a;for(let m=0;m<=s;m++){let _=m/s*r;d.x=(e+t*Math.cos(f))*Math.cos(_),d.y=(e+t*Math.cos(f))*Math.sin(_),d.z=t*Math.sin(f),l.push(d.x,d.y,d.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),x.subVectors(d,u).normalize(),h.push(x.x,x.y,x.z),p.push(m/s),p.push(v/n)}}for(let v=1;v<=n;v++)for(let f=1;f<=s;f++){let m=(s+1)*v+f-1,_=(s+1)*(v-1)+f-1,E=(s+1)*(v-1)+f,y=(s+1)*v+f;c.push(m,_,y),c.push(_,E,y)}this.setIndex(c),this.setAttribute("position",new je(l,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var _n=class i extends Nt{constructor(e=new Ui(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,c=new P,l=new Le,h=new P,p=[],u=[],d=[],x=[];v(),this.setIndex(x),this.setAttribute("position",new je(p,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(d,2));function v(){for(let E=0;E<t;E++)f(E);f(r===!1?t:0),_(),m()}function f(E){h=e.getPointAt(E/t,h);let y=o.normals[E],S=o.binormals[E];for(let T=0;T<=s;T++){let g=T/s*Math.PI*2,M=Math.sin(g),A=-Math.cos(g);c.x=A*y.x+M*S.x,c.y=A*y.y+M*S.y,c.z=A*y.z+M*S.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,p.push(a.x,a.y,a.z)}}function m(){for(let E=1;E<=t;E++)for(let y=1;y<=s;y++){let S=(s+1)*(E-1)+(y-1),T=(s+1)*E+(y-1),g=(s+1)*E+y,M=(s+1)*(E-1)+y;x.push(S,T,M),x.push(T,g,M)}}function _(){for(let E=0;E<=t;E++)for(let y=0;y<=s;y++)l.x=E/t,l.y=y/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Xo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Xi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(ah(s))s.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(ah(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function fn(i){let e={};for(let t=0;t<i.length;t++){let n=Xi(i[t]);for(let s in n)e[s]=n[s]}return e}function ah(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ef(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function yl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}var ou={clone:Xi,merge:fn},Mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cn=class extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mf,this.fragmentShader=Sf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xi(e.uniforms),this.uniformsGroups=Ef(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ve().setHex(s.value);break;case"v2":this.uniforms[n].value=new Le().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ht().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Pt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},qo=class extends Cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},qe=class extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qr,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Pn=class extends qe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ii('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ii('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ir=class extends ai{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qr,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=ca,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yo=class extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zo=class extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ls(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function bo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Mi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Jo=class extends Mi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lc,endingEnd:Lc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Dc:r=e,a=2*t-n;break;case Nc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Dc:o=e,c=2*n-t;break;case Nc:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,x=(n-t)/(s-t),v=x*x,f=v*x,m=-u*f+2*u*v-u*x,_=(1+u)*f+(-1.5-2*u)*v+(-.5+u)*x+1,E=(-1-d)*f+(1.5+d)*v+.5*x,y=d*f-d*v;for(let S=0;S!==a;++S)r[S]=m*o[h+S]+_*o[l+S]+E*o[c+S]+y*o[p+S];return r}},$o=class extends Mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),p=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*p+o[c+u]*h;return r}},Ko=class extends Mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Qo=class extends Mi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,p=this.outTangents;if(!h||!p){let x=(n-t)/(s-t),v=1-x;for(let f=0;f!==a;++f)r[f]=o[l+f]*v+o[c+f]*x;return r}let u=a*2,d=e-1;for(let x=0;x!==a;++x){let v=o[l+x],f=o[c+x],m=d*u+x*2,_=p[m],E=p[m+1],y=e*u+x*2,S=h[y],T=h[y+1],g=Tf(n,t,_,S,s);r[x]=au(g,v,E,T,f)}return r}};function au(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function bf(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Tf(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=au(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=bf(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Tn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ls(t,this.TimeBufferType),this.values=ls(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ls(e.times,Array),values:ls(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),bo(e.settings)&&(n.settings={inTangents:ls(e.settings.inTangents,Array),outTangents:ls(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $o(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Qo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case sr:t=this.InterpolantFactoryMethodDiscrete;break;case Bo:t=this.InterpolantFactoryMethodLinear;break;case Ro:t=this.InterpolantFactoryMethodSmooth;break;case Ic:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return at("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sr;case this.InterpolantFactoryMethodLinear:return Bo;case this.InterpolantFactoryMethodSmooth:return Ro;case this.InterpolantFactoryMethodBezier:return Ic}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;bo(this.settings)&&(ch(this.settings.inTangents,e),ch(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;bo(this.settings)&&(lh(this.settings.inTangents,e),lh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ct("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ct("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){ct("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){ct("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&dd(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){ct("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ro,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let p=a*n,u=p-n,d=p+n;for(let x=0;x!==n;++x){let v=t[p+x];if(v!==t[u+x]||v!==t[d+x]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let p=a*n,u=o*n;for(let d=0;d!==n;++d)t[u+d]=t[p+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,bo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ch(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function lh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=Bo;var Si=class extends Tn{constructor(e,t,n){super(e,t,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=sr;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var jo=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}};jo.prototype.ValueTypeName="color";var ea=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}};ea.prototype.ValueTypeName="number";var ta=class extends Mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Xt.slerpFlat(r,0,o,l-a,o,l,c);return r}},Lr=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ta(this.times,this.values,this.getValueSize(),e)}};Lr.prototype.ValueTypeName="quaternion";Lr.prototype.InterpolantFactoryMethodSmooth=void 0;var bi=class extends Tn{constructor(e,t,n){super(e,t,n)}};bi.prototype.ValueTypeName="string";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=sr;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var na=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}};na.prototype.ValueTypeName="vector";var Co={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(hh(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!hh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function hh(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var ia=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,p){return l.push(h,p),this},this.removeHandler=function(h){let p=l.indexOf(h);return p!==-1&&l.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=l.length;p<u;p+=2){let d=l[p],x=l[p+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},cu=new ia,bs=class{constructor(e){this.manager=e!==void 0?e:cu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};bs.DEFAULT_MATERIAL_NAME="__DEFAULT";var hs=new WeakMap,sa=class extends bs{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Co.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let p=hs.get(o);p===void 0&&(p=[],hs.set(o,p)),p.push({onLoad:t,onError:s})}return o}let a=gs("img");function c(){h(),t&&t(this);let p=hs.get(this)||[];for(let u=0;u<p.length;u++){let d=p[u];d.onLoad&&d.onLoad(this)}hs.delete(this),r.manager.itemEnd(e)}function l(p){h(),s&&s(p),Co.remove(`image:${e}`);let u=hs.get(this)||[];for(let d=0;d<u.length;d++){let x=u[d];x.onError&&x.onError(p)}hs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Co.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var li=class extends bs{constructor(e){super(e)}load(e,t,n,s){let r=new un,o=new sa(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Hi=class extends Mt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Dr=class extends Hi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Pc=new Pt,uh=new P,dh=new P,Ts=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yi,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;uh.setFromMatrixPosition(e.matrixWorld),t.position.copy(uh),dh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Pc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Pc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===ms||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Pc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},To=new P,wo=new Xt,Wn=new P,Nr=class extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(To,wo,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(To,wo,Wn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(To,wo,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(To,wo,Wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gi=new P,fh=new Le,ph=new Le,rn=class extends Nr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Li*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Li*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,t){return this.getViewBounds(e,fh,ph),t.subVectors(ph,fh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(er*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Bc=class extends Ts{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Li*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Bi=class extends Hi{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Bc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Oc=class extends Ts{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0}},tn=class extends Hi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Oc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ur=class extends Nr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zc=class extends Ts{constructor(){super(new Ur(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ws=class extends Hi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new zc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var us=-90,ds=1,Rs=class extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(us,ds,e,t);s.layers=this.layers,this.add(s);let r=new rn(us,ds,e,t);r.layers=this.layers,this.add(r);let o=new rn(us,ds,e,t);o.layers=this.layers,this.add(o);let a=new rn(us,ds,e,t);a.layers=this.layers,this.add(a);let c=new rn(us,ds,e,t);c.layers=this.layers,this.add(c);let l=new rn(us,ds,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,u,d),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},ra=class extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var vl="\\[\\]\\.:\\/",wf=new RegExp("["+vl+"]","g"),El="[^"+vl+"]",Rf="[^"+vl.replace("\\.","")+"]",Af=/((?:WC+[\/:])*)/.source.replace("WC",El),Cf=/(WCOD+)?/.source.replace("WCOD",Rf),Pf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",El),If=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",El),Lf=new RegExp("^"+Af+Cf+Pf+If+"$"),Df=["material","materials","bones","map"],Gc=class{constructor(e,t,n){let s=n||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wf,"")}static parseTrackName(e){let t=Lf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Df.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){at("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ct("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ct("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ct("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ct("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){ct("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;ct("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=Gc;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Lx=new Float32Array(1);var mh=new Pt,Fr=class{constructor(e,t,n=0,s=1/0){this.ray=new ur(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ys,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ct("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mh),this}intersectObject(e,t=!0,n=[]){return kc(e,this,n,t),n.sort(gh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)kc(e[s],this,n,t);return n.sort(gh),n}};function gh(i,e){return i.distance-e.distance}function kc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)kc(r[o],e,t,!0)}}var Hr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=mt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Vc=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function Ml(i,e,t,n){let s=Nf(n);switch(t){case al:return i*e;case ma:return i*e/s.components*s.byteLength;case ga:return i*e/s.components*s.byteLength;case Ti:return i*e*2/s.components*s.byteLength;case xa:return i*e*2/s.components*s.byteLength;case cl:return i*e*3/s.components*s.byteLength;case Vn:return i*e*4/s.components*s.byteLength;case _a:return i*e*4/s.components*s.byteLength;case zr:case Gr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case kr:case Vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case va:case Ma:return Math.max(i,16)*Math.max(e,8)/4;case ya:case Ea:return Math.max(i,8)*Math.max(e,8)/2;case Sa:case ba:case wa:case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ta:case Wr:case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Va:case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qa:case Ya:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Xr:case Za:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Nf(i){switch(i){case yn:case il:return{byteLength:1,components:1};case Is:case sl:case kn:return{byteLength:2,components:1};case fa:case pa:return{byteLength:2,components:4};case Gn:case da:case In:return{byteLength:4,components:1};case rl:case ol:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oa}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oa);function Pu(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Uf(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,p=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,c,l){let h=c.array,p=c.updateRanges;if(i.bindBuffer(l,a),p.length===0)i.bufferSubData(l,0,h);else{p.sort((d,x)=>d.start-x.start);let u=0;for(let d=1;d<p.length;d++){let x=p[u],v=p[d];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++u,p[u]=v)}p.length=u+1;for(let d=0,x=p.length;d<x;d++){let v=p[d];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Ff=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hf=`#ifdef USE_ALPHAHASH
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
#endif`,Bf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kf=`#ifdef USE_AOMAP
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
#endif`,Vf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wf=`#ifdef USE_BATCHING
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
#endif`,Xf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jf=`#ifdef USE_IRIDESCENCE
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
#endif`,$f=`#ifdef USE_BUMPMAP
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
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ip=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,rp=`#define PI 3.141592653589793
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
} // validated`,op=`vec3 transformedNormal = objectNormal;
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
#endif`,ap=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,up="gl_FragColor = linearToOutputTexel( gl_FragColor );",dp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fp=`#ifdef USE_ENVMAP
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
#endif`,pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mp=`#ifdef USE_GRADIENTMAP
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
}`,Sp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lp=`PhysicalMaterial material;
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
#endif`,Dp=`uniform sampler2D dfgLUT;
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
}`,Np=`
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
#endif`,Up=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hp=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Op=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xp=`#if defined( USE_POINTS_UV )
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
#endif`,qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jp=`#if defined( USE_MORPHCOLORS )
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
#endif`,$p=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kp=`#ifdef USE_MORPHTARGETS
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
#endif`,Qp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,em=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sm=`#ifdef USE_NORMALMAP
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
#endif`,rm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,am=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ym=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vm=`float getShadowMask() {
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
}`,Em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mm=`#ifdef USE_SKINNING
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
#endif`,Sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bm=`#ifdef USE_SKINNING
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
#endif`,Tm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Am=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cm=`#ifdef USE_TRANSMISSION
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
#endif`,Pm=`#ifdef USE_TRANSMISSION
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
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fm=`uniform sampler2D t2D;
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
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bm=`uniform float backgroundBlurriness;
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
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`#include <common>
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
}`,km=`#if DEPTH_PACKING == 3200
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
}`,Vm=`#define DISTANCE
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
}`,Wm=`#define DISTANCE
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
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`uniform float scale;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Jm=`#include <common>
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
}`,$m=`uniform vec3 diffuse;
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
}`,Km=`#define LAMBERT
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
}`,Qm=`#define LAMBERT
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
}`,jm=`#define MATCAP
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
}`,e0=`#define MATCAP
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
}`,t0=`#define NORMAL
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
}`,n0=`#define NORMAL
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
}`,i0=`#define PHONG
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
}`,s0=`#define PHONG
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
}`,r0=`#define STANDARD
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
}`,o0=`#define STANDARD
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
}`,a0=`#define TOON
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
}`,c0=`#define TOON
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
}`,l0=`uniform float size;
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
}`,h0=`uniform vec3 diffuse;
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
}`,u0=`#include <common>
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
}`,d0=`uniform vec3 color;
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
}`,f0=`uniform float rotation;
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
}`,p0=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:Ff,alphahash_pars_fragment:Hf,alphamap_fragment:Bf,alphamap_pars_fragment:Of,alphatest_fragment:zf,alphatest_pars_fragment:Gf,aomap_fragment:kf,aomap_pars_fragment:Vf,batching_pars_vertex:Wf,batching_vertex:Xf,begin_vertex:qf,beginnormal_vertex:Yf,bsdfs:Zf,iridescence_fragment:Jf,bumpmap_pars_fragment:$f,clipping_planes_fragment:Kf,clipping_planes_pars_fragment:Qf,clipping_planes_pars_vertex:jf,clipping_planes_vertex:ep,color_fragment:tp,color_pars_fragment:np,color_pars_vertex:ip,color_vertex:sp,common:rp,defaultnormal_vertex:op,displacementmap_pars_vertex:ap,displacementmap_vertex:cp,emissivemap_fragment:lp,emissivemap_pars_fragment:hp,colorspace_fragment:up,colorspace_pars_fragment:dp,envmap_fragment:fp,envmap_common_pars_fragment:pp,envmap_pars_fragment:mp,envmap_pars_vertex:gp,envmap_physical_pars_fragment:Rp,envmap_vertex:xp,fog_vertex:_p,fog_pars_vertex:yp,fog_fragment:vp,fog_pars_fragment:Ep,gradientmap_pars_fragment:Mp,lightmap_pars_fragment:Sp,lights_lambert_fragment:bp,lights_lambert_pars_fragment:Tp,lights_pars_begin:wp,lights_toon_fragment:Ap,lights_toon_pars_fragment:Cp,lights_phong_fragment:Pp,lights_phong_pars_fragment:Ip,lights_physical_fragment:Lp,lights_physical_pars_fragment:Dp,lights_fragment_begin:Np,lights_fragment_maps:Up,lights_fragment_end:Fp,lightprobes_pars_fragment:Hp,logdepthbuf_fragment:Bp,logdepthbuf_pars_fragment:Op,logdepthbuf_pars_vertex:zp,logdepthbuf_vertex:Gp,map_fragment:kp,map_pars_fragment:Vp,map_particle_fragment:Wp,map_particle_pars_fragment:Xp,metalnessmap_fragment:qp,metalnessmap_pars_fragment:Yp,morphinstance_vertex:Zp,morphcolor_vertex:Jp,morphnormal_vertex:$p,morphtarget_pars_vertex:Kp,morphtarget_vertex:Qp,normal_fragment_begin:jp,normal_fragment_maps:em,normal_pars_fragment:tm,normal_pars_vertex:nm,normal_vertex:im,normalmap_pars_fragment:sm,clearcoat_normal_fragment_begin:rm,clearcoat_normal_fragment_maps:om,clearcoat_pars_fragment:am,iridescence_pars_fragment:cm,opaque_fragment:lm,packing:hm,premultiplied_alpha_fragment:um,project_vertex:dm,dithering_fragment:fm,dithering_pars_fragment:pm,roughnessmap_fragment:mm,roughnessmap_pars_fragment:gm,shadowmap_pars_fragment:xm,shadowmap_pars_vertex:_m,shadowmap_vertex:ym,shadowmask_pars_fragment:vm,skinbase_vertex:Em,skinning_pars_vertex:Mm,skinning_vertex:Sm,skinnormal_vertex:bm,specularmap_fragment:Tm,specularmap_pars_fragment:wm,tonemapping_fragment:Rm,tonemapping_pars_fragment:Am,transmission_fragment:Cm,transmission_pars_fragment:Pm,uv_pars_fragment:Im,uv_pars_vertex:Lm,uv_vertex:Dm,worldpos_vertex:Nm,background_vert:Um,background_frag:Fm,backgroundCube_vert:Hm,backgroundCube_frag:Bm,cube_vert:Om,cube_frag:zm,depth_vert:Gm,depth_frag:km,distance_vert:Vm,distance_frag:Wm,equirect_vert:Xm,equirect_frag:qm,linedashed_vert:Ym,linedashed_frag:Zm,meshbasic_vert:Jm,meshbasic_frag:$m,meshlambert_vert:Km,meshlambert_frag:Qm,meshmatcap_vert:jm,meshmatcap_frag:e0,meshnormal_vert:t0,meshnormal_frag:n0,meshphong_vert:i0,meshphong_frag:s0,meshphysical_vert:r0,meshphysical_frag:o0,meshtoon_vert:a0,meshtoon_frag:c0,points_vert:l0,points_frag:h0,shadow_vert:u0,shadow_frag:d0,sprite_vert:f0,sprite_frag:p0},We={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Qn={basic:{uniforms:fn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:fn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:fn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:fn([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:fn([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Ve(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:fn([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:fn([We.points,We.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:fn([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:fn([We.common,We.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:fn([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:fn([We.sprite,We.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:fn([We.common,We.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:fn([We.lights,We.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Qn.physical={uniforms:fn([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};var Ja={r:0,b:0,g:0},m0=new Pt,Iu=new ht;Iu.set(-1,0,0,0,1,0,0,0,1);function g0(i,e,t,n,s,r){let o=new Ve(0),a=s===!0?0:1,c,l,h=null,p=0,u=null;function d(_){let E=_.isScene===!0?_.background:null;if(E&&E.isTexture){let y=_.backgroundBlurriness>0;E=e.get(E,y)}return E}function x(_){let E=!1,y=d(_);y===null?f(o,a):y&&y.isColor&&(f(y,1),E=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(_,E){let y=d(E);y&&y.isCubeTexture?(l===void 0&&(l=new ue(new He(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Xi(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,T,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(m0.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Iu),l.material.toneMapped=Et.getTransfer(y.colorSpace)!==Rt,(h!==y||p!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,p=y.version,u=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ue(new Ft(2,2),new Cn({name:"BackgroundMaterial",uniforms:Xi(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Et.getTransfer(y.colorSpace)!==Rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||p!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,p=y.version,u=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,E){_.getRGB(Ja,yl(i)),t.buffers.color.setClear(Ja.r,Ja.g,Ja.b,E,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,E=1){o.set(_),a=E,f(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,f(o,a)},render:x,addToRenderList:v,dispose:m}}function x0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(D,N,I,b,z){let B=!1,G=p(D,b,I,N);r!==G&&(r=G,l(r.object)),B=d(D,b,I,z),B&&x(D,b,I,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,y(D,N,I,b),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function p(D,N,I,b){let z=b.wireframe===!0,B=n[N.id];B===void 0&&(B={},n[N.id]=B);let G=D.isInstancedMesh===!0?D.id:0,oe=B[G];oe===void 0&&(oe={},B[G]=oe);let Y=oe[I.id];Y===void 0&&(Y={},oe[I.id]=Y);let J=Y[z];return J===void 0&&(J=u(c()),Y[z]=J),J}function u(D){let N=[],I=[],b=[];for(let z=0;z<t;z++)N[z]=0,I[z]=0,b[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:I,attributeDivisors:b,object:D,attributes:{},index:null}}function d(D,N,I,b){let z=r.attributes,B=N.attributes,G=0,oe=I.getAttributes();for(let Y in oe)if(oe[Y].location>=0){let de=z[Y],Ne=B[Y];if(Ne===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(Ne=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(Ne=D.instanceColor)),de===void 0||de.attribute!==Ne||Ne&&de.data!==Ne.data)return!0;G++}return r.attributesNum!==G||r.index!==b}function x(D,N,I,b){let z={},B=N.attributes,G=0,oe=I.getAttributes();for(let Y in oe)if(oe[Y].location>=0){let de=B[Y];de===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(de=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(de=D.instanceColor));let Ne={};Ne.attribute=de,de&&de.data&&(Ne.data=de.data),z[Y]=Ne,G++}r.attributes=z,r.attributesNum=G,r.index=b}function v(){let D=r.newAttributes;for(let N=0,I=D.length;N<I;N++)D[N]=0}function f(D){m(D,0)}function m(D,N){let I=r.newAttributes,b=r.enabledAttributes,z=r.attributeDivisors;I[D]=1,b[D]===0&&(i.enableVertexAttribArray(D),b[D]=1),z[D]!==N&&(i.vertexAttribDivisor(D,N),z[D]=N)}function _(){let D=r.newAttributes,N=r.enabledAttributes;for(let I=0,b=N.length;I<b;I++)N[I]!==D[I]&&(i.disableVertexAttribArray(I),N[I]=0)}function E(D,N,I,b,z,B,G){G===!0?i.vertexAttribIPointer(D,N,I,z,B):i.vertexAttribPointer(D,N,I,b,z,B)}function y(D,N,I,b){v();let z=b.attributes,B=I.getAttributes(),G=N.defaultAttributeValues;for(let oe in B){let Y=B[oe];if(Y.location>=0){let J=z[oe];if(J===void 0&&(oe==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),oe==="instanceColor"&&D.instanceColor&&(J=D.instanceColor)),J!==void 0){let de=J.normalized,Ne=J.itemSize,we=e.get(J);if(we===void 0)continue;let ee=we.buffer,Se=we.type,te=we.bytesPerElement,Me=Se===i.INT||Se===i.UNSIGNED_INT||J.gpuType===da;if(J.isInterleavedBufferAttribute){let he=J.data,Fe=he.isInterleavedBuffer===!0?he.stride:he.itemSize,rt=J.offset;if(he.isInstancedInterleavedBuffer||he.isInstancedBufferAttribute){for(let pe=0;pe<Y.locationSize;pe++)m(Y.location+pe,he.meshPerAttribute);D.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let pe=0;pe<Y.locationSize;pe++)f(Y.location+pe);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let pe=0;pe<Y.locationSize;pe++)E(Y.location+pe,Ne/Y.locationSize,Se,de,Fe*te,(rt+Ne/Y.locationSize*pe)*te,Me)}else{if(J.isInstancedBufferAttribute){for(let he=0;he<Y.locationSize;he++)m(Y.location+he,J.meshPerAttribute);D.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let he=0;he<Y.locationSize;he++)f(Y.location+he);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let he=0;he<Y.locationSize;he++)E(Y.location+he,Ne/Y.locationSize,Se,de,Ne*te,Ne/Y.locationSize*he*te,Me)}}else if(G!==void 0){let de=G[oe];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(Y.location,de);break;case 3:i.vertexAttrib3fv(Y.location,de);break;case 4:i.vertexAttrib4fv(Y.location,de);break;default:i.vertexAttrib1fv(Y.location,de)}}}}_()}function S(){A();for(let D in n){let N=n[D];for(let I in N){let b=N[I];for(let z in b){let B=b[z];for(let G in B)h(B[G].object),delete B[G];delete b[z]}}delete n[D]}}function T(D){if(n[D.id]===void 0)return;let N=n[D.id];for(let I in N){let b=N[I];for(let z in b){let B=b[z];for(let G in B)h(B[G].object),delete B[G];delete b[z]}}delete n[D.id]}function g(D){for(let N in n){let I=n[N];for(let b in I){let z=I[b];if(z[D.id]===void 0)continue;let B=z[D.id];for(let G in B)h(B[G].object),delete B[G];delete z[D.id]}}}function M(D){for(let N in n){let I=n[N],b=D.isInstancedMesh===!0?D.id:0,z=I[b];if(z!==void 0){for(let B in z){let G=z[B];for(let oe in G)h(G[oe].object),delete G[oe];delete z[B]}delete I[b],Object.keys(I).length===0&&delete n[N]}}}function A(){C(),o=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:g,initAttributes:v,enableAttribute:f,disableUnusedAttributes:_}}function _0(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let d=0;d<h;d++)u+=l[d];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function y0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(g){return!(g!==Vn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(g){let M=g===kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==yn&&g!==In&&!M&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(at("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&at("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:y,maxSamples:S,samples:T}}function v0(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Bn,a=new ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||n!==0||s;return s=u,n=p.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){t=h(p,u,0)},this.setState=function(p,u,d){let x=p.clippingPlanes,v=p.clipIntersection,f=p.clipShadows,m=i.get(p);if(!s||x===null||x.length===0||r&&!f)r?h(null):l();else{let _=r?0:n,E=_*4,y=m.clippingState||null;c.value=y,y=h(x,u,E,d);for(let S=0;S!==E;++S)y[S]=t[S];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,u,d,x){let v=p!==null?p.length:0,f=null;if(v!==0){if(f=c.value,x!==!0||f===null){let m=d+v*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(f===null||f.length<m)&&(f=new Float32Array(m));for(let E=0,y=d;E!==v;++E,y+=4)o.copy(p[E]).applyMatrix4(_,a),o.normal.toArray(f,y),f[y+3]=o.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}var Jr=class extends Mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new pr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new He(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:zi});r.uniforms.tEquirect.value=t;let o=new ue(s,r),a=t.minFilter;return t.minFilter===hi&&(t.minFilter=pn),new Rs(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},lu=256,E0=3,M0=20,Lu=256,Du=16,S0=3,b0=new P,T0=new Ve,Ds=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Rs(1,10,null),this._boxMesh=new ue(new He(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=b0}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let p=c.autoClear,u=c.autoClearColor,d=c.autoClearDepth,x=c.autoClearStencil,v=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(e.background=c.getClearColor(T0));let f=new Rs(n,s,h);return f.position.copy(a),f.update(c,e),c.autoClear=p,c.autoClearColor=u,c.autoClearDepth=d,c.autoClearStencil=x,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(lu,gl(e))}_fromTexture(e,t){e.mapping===ki||e.mapping===Ps?this._setSize(e.image.length===0?lu:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=hu(e,!1,!1),n=Math.log2(e)-E0;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=hu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ki||e.mapping===Ps?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=uu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=w0(),this._integrationMaterial=R0());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Du);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-S0)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(Lu*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=A0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function hu(i,e,t){return new Jr(i,{minFilter:hi,generateMipmaps:e,type:kn,colorSpace:rr,depthBuffer:t})}function $r(i,e,t){return new Cn({name:i,uniforms:e,vertexShader:_t.cube_vert,fragmentShader:t,side:qt,blending:zi,depthTest:!1,depthWrite:!1})}function w0(){return $r("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Lu}u

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
	`)}function R0(){return $r("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Du}},`

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
	`)}function A0(){return $r("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${M0}
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
	`)}function uu(){return $r("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function du(){return $r("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function C0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===la||d===ha)if(e.has(u)){let x=e.get(u).texture;return a(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let v=new Jr(x.height);return v.fromEquirectangularTexture(i,u),e.set(u,v),u.addEventListener("dispose",l),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,x=d===la||d===ha,v=d===ki||d===Ps;if(x||v){let f=t.get(u),m=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Ds(i)),f=x?n.fromEquirectangular(u,f):n.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,t.set(u,f),f.texture;if(f!==void 0)return f.texture;{let _=u.image;return x&&_&&_.height>0||v&&_&&c(_)?(n===null&&(n=new Ds(i)),f=x?n.fromEquirectangular(u):n.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,t.set(u,f),u.addEventListener("dispose",h),f.texture):null}}}return u}function a(u,d){return d===la?u.mapping=ki:d===ha&&(u.mapping=Ps),u}function c(u){let d=0,x=6;for(let v=0;v<x;v++)u[v]!==void 0&&d++;return d===x}function l(u){let d=u.target;d.removeEventListener("dispose",l);let x=e.get(d);x!==void 0&&(e.delete(d),x.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let x=t.get(d);x!==void 0&&(t.delete(d),x.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function P0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ii("WebGLRenderer: "+n+" extension not supported."),s}}}function I0(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(x=>delete s[x]);function a(x){c(x.target)}function c(x){x.index!==null&&e.remove(x.index);for(let f in x.attributes)e.remove(x.attributes[f]);x.removeEventListener("dispose",a),delete s[x.id],o.unregister(x);let v=r.get(x);v&&(e.remove(v),r.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function l(x,v){return s[v.id]!==void 0||(v.addEventListener("dispose",a),s[v.id]=new WeakRef(v),o.register(v,v.id,v),t.memory.geometries++),v}function h(x){let v=x.attributes;for(let f in v)e.update(v[f],i.ARRAY_BUFFER)}function p(x){let v=x.index,f=x.attributes.position,m=0;if(f===void 0)return;let _=v!==null?v.array.length:f.array.length/3-1,E=f.count>=65535?hr:lr,y=new E(Math.ceil(_/3)*6,1),S=y.array;if(v!==null){let g=v.array;m=v.version;for(let M=0,A=0;M<_;M+=3){let C=g[M+0],D=g[M+1],N=g[M+2];S[A++]=C,S[A++]=D,S[A++]=D,S[A++]=N,S[A++]=N,S[A++]=C}}else{m=f.version;for(let g=0,M=0;g<_;g+=3){let A=g+0,C=g+1,D=g+2;S[M++]=A,S[M++]=C,S[M++]=C,S[M++]=D,S[M++]=D,S[M++]=A}}y.version=m;let T=r.get(x);T&&e.remove(T),r.set(x,y)}function u(x){let v=r.get(x);if(v){let f=x.index;f!==null&&v.version<f.version&&p(x)}else p(x);return r.get(x)}function d(){for(let x in s){let v=s[x].deref();v!==void 0&&c(v)}}return{get:l,update:h,getWireframeAttribute:u,dispose:d}}function L0(i,e,t){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function c(p,u){i.drawElements(n,u,r,p*o),t.update(u,n,1)}function l(p,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,p*o,d),t.update(u,n,d))}function h(p,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,p,0,d);let v=0;for(let f=0;f<d;f++)v+=u[f];t.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function D0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:ct("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function N0(i,e,t){let n=new WeakMap,s=new Ut;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==p){let A=function(){g.dispose(),n.delete(a),a.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],E=0;d===!0&&(E=1),x===!0&&(E=2),v===!0&&(E=3);let y=a.attributes.position.count*E,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*S*4*p),g=new ar(T,y,S,p);g.type=In,g.needsUpdate=!0;let M=E*4;for(let C=0;C<p;C++){let D=f[C],N=m[C],I=_[C],b=y*S*4*C;for(let z=0;z<D.count;z++){let B=z*M;d===!0&&(s.fromBufferAttribute(D,z),T[b+B+0]=s.x,T[b+B+1]=s.y,T[b+B+2]=s.z,T[b+B+3]=0),x===!0&&(s.fromBufferAttribute(N,z),T[b+B+4]=s.x,T[b+B+5]=s.y,T[b+B+6]=s.z,T[b+B+7]=0),v===!0&&(s.fromBufferAttribute(I,z),T[b+B+8]=s.x,T[b+B+9]=s.y,T[b+B+10]=s.z,T[b+B+11]=I.itemSize===4?s.w:1)}}u={count:p,texture:g,size:new Le(y,S)},n.set(a,u),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];let x=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function U0(i,e,t,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,p=l.geometry,u=e.get(l,p);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var F0={[$c]:"LINEAR_TONE_MAPPING",[Kc]:"REINHARD_TONE_MAPPING",[Qc]:"CINEON_TONE_MAPPING",[Br]:"ACES_FILMIC_TONE_MAPPING",[el]:"AGX_TONE_MAPPING",[tl]:"NEUTRAL_TONE_MAPPING",[jc]:"CUSTOM_TONE_MAPPING"};function H0(i,e,t,n,s,r){let o=new Mn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,h=new Nt;h.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new je([0,2,0,0,2,0],2));let p=new qo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ue(h,p),d=new Ur(-1,1,1,-1,0,1),x=null,v=null,f=!1,m,_=null,E=[],y=!1;this.setSize=function(S,T){o.setSize(S,T),a!==null&&a.setSize(S,T),c!==null&&c.setSize(S,T);for(let g=0;g<E.length;g++){let M=E[g];M.setSize&&M.setSize(S,T)}},this.setEffects=function(S){E=S,y=E.length>0&&E[0].isRenderPass===!0;let T=o.width,g=o.height;E.length>0&&a===null&&(a=new Mn(T,g,{type:kn,depthBuffer:!1,stencilBuffer:!1}),c=new Mn(T,g,{type:kn,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&E.some(A=>A.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&l===null&&(l=new ci(T,g),r===!0&&(l.format=ui,l.type=Vi)),o.dispose(),o.depthTexture=M?l:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let A=0;A<E.length;A++){let C=E[A];C.setSize&&C.setSize(T,g),M&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(S,T){if(f||S.toneMapping===$n&&E.length===0)return!1;if(_=T,T!==null){let g=T.width,M=T.height;(o.width!==g||o.height!==M)&&this.setSize(g,M)}return y===!1&&S.setRenderTarget(o),m=S.toneMapping,S.toneMapping=$n,!0},this.hasRenderPass=function(){return y},this.end=function(S,T){S.toneMapping=m,f=!0;let g=o,M=a;for(let A=0;A<E.length;A++){let C=E[A];C.enabled!==!1&&(C.render(S,M,g,T),C.needsSwap!==!1&&(g=M,M=M===a?c:a))}if(x!==S.outputColorSpace||v!==S.toneMapping){x=S.outputColorSpace,v=S.toneMapping,p.defines={},Et.getTransfer(x)===Rt&&(p.defines.SRGB_TRANSFER="");let A=F0[v];A&&(p.defines[A]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=g.texture,S.setRenderTarget(_),S.render(u,d),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),p.dispose()}}var Nu=new un,Uu=new ci(1,1),Fu=new mr(1),Hu=new ar,Bu=new Go,Ou=new pr,fu=[],pu=[],mu=new Float32Array(16),gu=new Float32Array(9),xu=new Float32Array(4);function Ns(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=fu[s];if(r===void 0&&(r=new Float32Array(s),fu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Qa(i,e){let t=pu[e];t===void 0&&(t=new Int32Array(e),pu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function B0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function O0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2fv(this.addr,e),Jt(t,e)}}function z0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;i.uniform3fv(this.addr,e),Jt(t,e)}}function G0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4fv(this.addr,e),Jt(t,e)}}function k0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;xu.set(n),i.uniformMatrix2fv(this.addr,!1,xu),Jt(t,n)}}function V0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;gu.set(n),i.uniformMatrix3fv(this.addr,!1,gu),Jt(t,n)}}function W0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;mu.set(n),i.uniformMatrix4fv(this.addr,!1,mu),Jt(t,n)}}function X0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function q0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2iv(this.addr,e),Jt(t,e)}}function Y0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3iv(this.addr,e),Jt(t,e)}}function Z0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4iv(this.addr,e),Jt(t,e)}}function J0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2uiv(this.addr,e),Jt(t,e)}}function K0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3uiv(this.addr,e),Jt(t,e)}}function Q0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4uiv(this.addr,e),Jt(t,e)}}function ja(i){return i.version===0&&(i.compareFunction=ul,i.needsUpdate=!0),i}function j0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=ja(Uu):r=Nu,t.setTexture2D(e||r,s)}function eg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Bu,s)}function tg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=ja(Fu):r=Ou,t.setTextureCube(e||r,s)}function ng(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Hu,s)}function ig(i){switch(i){case 5126:return B0;case 35664:return O0;case 35665:return z0;case 35666:return G0;case 35674:return k0;case 35675:return V0;case 35676:return W0;case 5124:case 35670:return X0;case 35667:case 35671:return q0;case 35668:case 35672:return Y0;case 35669:case 35673:return Z0;case 5125:return J0;case 36294:return $0;case 36295:return K0;case 36296:return Q0;case 35678:case 36198:case 36298:case 36306:case 35682:return j0;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return tg;case 36289:case 36303:case 36311:case 36292:return ng}}function sg(i,e){i.uniform1fv(this.addr,e)}function rg(i,e){let t=Ns(e,this.size,2);i.uniform2fv(this.addr,t)}function og(i,e){let t=Ns(e,this.size,3);i.uniform3fv(this.addr,t)}function ag(i,e){let t=Ns(e,this.size,4);i.uniform4fv(this.addr,t)}function cg(i,e){let t=Ns(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function lg(i,e){let t=Ns(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function hg(i,e){let t=Ns(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ug(i,e){i.uniform1iv(this.addr,e)}function dg(i,e){i.uniform2iv(this.addr,e)}function fg(i,e){i.uniform3iv(this.addr,e)}function pg(i,e){i.uniform4iv(this.addr,e)}function mg(i,e){i.uniform1uiv(this.addr,e)}function gg(i,e){i.uniform2uiv(this.addr,e)}function xg(i,e){i.uniform3uiv(this.addr,e)}function _g(i,e){i.uniform4uiv(this.addr,e)}function yg(i,e,t){let n=this.cache,s=e.length,r=Qa(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=ja(Uu):o=Nu;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function vg(i,e,t){let n=this.cache,s=e.length,r=Qa(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Bu,r[o])}function Eg(i,e,t){let n=this.cache,s=e.length,r=Qa(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=ja(Fu):o=Ou;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function Mg(i,e,t){let n=this.cache,s=e.length,r=Qa(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Hu,r[o])}function Sg(i){switch(i){case 5126:return sg;case 35664:return rg;case 35665:return og;case 35666:return ag;case 35674:return cg;case 35675:return lg;case 35676:return hg;case 5124:case 35670:return ug;case 35667:case 35671:return dg;case 35668:case 35672:return fg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return xg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return Mg}}var Tl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ig(t.type)}},wl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sg(t.type)}},Rl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Sl=/(\w+)(\])?(\[|\.)?/g;function _u(i,e){i.seq.push(e),i.map[e.id]=e}function bg(i,e,t){let n=i.name,s=n.length;for(Sl.lastIndex=0;;){let r=Sl.exec(n),o=Sl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){_u(t,l===void 0?new Tl(a,i,e):new wl(a,i,e));break}else{let p=t.map[a];p===void 0&&(p=new Rl(a),_u(t,p)),t=p}}}var Ls=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);bg(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function yu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Tg=37297,wg=0;function Rg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var vu=new ht;function Ag(i){Et._getMatrix(vu,Et.workingColorSpace,i);let e=`mat3( ${vu.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(i)){case or:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Eu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Rg(i.getShaderSource(e),a)}else return r}function Cg(i,e){let t=Ag(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Pg={[$c]:"Linear",[Kc]:"Reinhard",[Qc]:"Cineon",[Br]:"ACESFilmic",[el]:"AgX",[tl]:"Neutral",[jc]:"Custom"};function Ig(i,e){let t=Pg[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var $a=new P;function Lg(){Et.getLuminanceCoefficients($a);let i=$a.x.toFixed(4),e=$a.y.toFixed(4),t=$a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zr).join(`
`)}function Ng(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ug(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Zr(i){return i!==""}function Mu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Su(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Fg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(i){return i.replace(Fg,Hg)}function Hg(i,e){let t=_t[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Al(t)}var Bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bu(i){return i.replace(Bg,Og)}function Og(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var zg={[Oi]:"SHADOWMAP_TYPE_PCF",[As]:"SHADOWMAP_TYPE_VSM"};function Gg(i){return zg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var kg={[Ps]:"ENVMAP_MODE_REFRACTION"};function Vg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":kg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Wg={[ca]:"ENVMAP_BLENDING_MULTIPLY",[Hh]:"ENVMAP_BLENDING_MIX",[Bh]:"ENVMAP_BLENDING_ADD"};function Xg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Wg[i.combine]||"ENVMAP_BLENDING_NONE"}function qg(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Gg(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Vg(t),p=Xg(t),u=Dg(t),d=Ng(r),x=s.createProgram(),v,f,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Zr).join(`
`),v.length>0&&(v+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Zr).join(`
`),f.length>0&&(f+=`
`)):(v=[Tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zr).join(`
`),f=[Tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?_t.tonemapping_pars_fragment:"",t.toneMapping!==$n?Ig("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,Cg("linearToOutputTexel",t.outputColorSpace),Lg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zr).join(`
`)),o=Al(o),o=Mu(o,t),o=Su(o,t),a=Al(a),a=Mu(a,t),a=Su(a,t),o=bu(o),a=bu(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,f=["#define varying in",t.glslVersion===fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let _=m+v+o,E=m+f+a,y=yu(s,s.VERTEX_SHADER,_),S=yu(s,s.FRAGMENT_SHADER,E);s.attachShader(x,y),s.attachShader(x,S),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(C){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(x)||"",N=s.getShaderInfoLog(y)||"",I=s.getShaderInfoLog(S)||"",b=D.trim(),z=N.trim(),B=I.trim(),G=!0,oe=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,y,S);else{let Y=Eu(s,y,"vertex"),J=Eu(s,S,"fragment");ct("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+b+`
`+Y+`
`+J)}else b!==""?at("WebGLProgram: Program Info Log:",b):(z===""||B==="")&&(oe=!1);oe&&(C.diagnostics={runnable:G,programLog:b,vertexShader:{log:z,prefix:v},fragmentShader:{log:B,prefix:f}})}s.deleteShader(y),s.deleteShader(S),g=new Ls(s,x),M=Ug(s,x)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(x,Tg)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=S,this}var Yg=0,Cl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Pl(e),t.set(e,n)),n}},Pl=class{constructor(e){this.id=Yg++,this.code=e,this.usedTimes=0}};function Zg(i){return i===Ti||i===Wr||i===Xr}function Jg(i,e,t,n,s,r){let o=new ys,a=new Cl,c=new Set,l=[],h=new Map,p=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(g){return c.add(g),g===0?"uv":`uv${g}`}function x(g,M,A,C,D,N){let I=C.fog,b=D.geometry,z=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?C.environment:null,B=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,G=e.get(g.envMap||z,B),oe=u[g.type],Y=n.precision;g.precision!==null&&(Y=n.getMaxPrecision(g.precision),Y!==g.precision&&at("WebGLProgram.getParameters:",g.precision,"not supported, using",Y,"instead."));let J=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,de=J!==void 0?J.length:0,Ne=0;b.morphAttributes.position!==void 0&&(Ne=1),b.morphAttributes.normal!==void 0&&(Ne=2),b.morphAttributes.color!==void 0&&(Ne=3);let we,ee,Se,te;if(oe){let xe=Qn[oe];we=xe.vertexShader,ee=xe.fragmentShader}else{we=g.vertexShader,ee=g.fragmentShader;let xe=a.getVertexShaderStage(g),et=a.getFragmentShaderStage(g);a.update(g,xe,et),Se=xe.id,te=et.id}let Me=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),Fe=D.isInstancedMesh===!0,rt=D.isBatchedMesh===!0,pe=!!g.map,_e=!!g.matcap,De=!!G,V=De&&G.isPMREMTexture===!0,ge=!!g.aoMap,ie=!!g.lightMap,F=!!g.bumpMap&&g.wireframe===!1,W=!!g.normalMap,k=!!g.displacementMap,re=!!g.emissiveMap,ye=!!g.metalnessMap,Re=!!g.roughnessMap,Ee=g.anisotropy>0,O=g.clearcoat>0,Ze=g.diffuseRoughness>0,Xe=g.dispersion>0,ot=g.retroreflectivity>0,Ce=g.iridescence>0,ft=g.sheen>0,Ge=g.transmission>0,ke=Ee&&!!g.anisotropyMap,L=O&&!!g.clearcoatMap,w=O&&!!g.clearcoatNormalMap,K=O&&!!g.clearcoatRoughnessMap,Ae=Ze&&!!g.diffuseRoughnessMap,ve=Ce&&!!g.iridescenceMap,X=Ce&&!!g.iridescenceThicknessMap,Q=ft&&!!g.sheenColorMap,$=ft&&!!g.sheenRoughnessMap,j=!!g.specularMap,me=!!g.specularColorMap,H=!!g.specularIntensityMap,ae=Ge&&!!g.transmissionMap,Z=Ge&&!!g.thicknessMap,Pe=!!g.gradientMap,Te=!!g.alphaMap,Ue=g.alphaTest>0,$e=!!g.alphaHash,ne=!!g.extensions,U=$n;g.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(U=i.toneMapping);let ce=V?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,be={shaderID:oe,shaderType:g.type,shaderName:g.name,vertexShader:we,fragmentShader:ee,defines:g.defines,customVertexShaderID:Se,customFragmentShaderID:te,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:Y,batching:rt,batchingColor:rt&&D._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&D.instanceColor!==null,instancingMorph:Fe&&D.morphTexture!==null,outputColorSpace:Me===null?i.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:pe,matcap:_e,envMap:De,envMapMode:De&&G.mapping,envMapPMREM:V,envMapMaxLod:V?ce.length-1:null,envMapSize:V?ce[0].width:null,aoMap:ge,lightMap:ie,bumpMap:F,normalMap:W,displacementMap:k,emissiveMap:re,normalMapObjectSpace:W&&g.normalMapType===Gh,normalMapTangentSpace:W&&g.normalMapType===qr,packedNormalMap:W&&g.normalMapType===qr&&Zg(g.normalMap.format),metalnessMap:ye,roughnessMap:Re,anisotropy:Ee,anisotropyMap:ke,clearcoat:O,clearcoatMap:L,clearcoatNormalMap:w,clearcoatRoughnessMap:K,diffuseRoughness:Ze,diffuseRoughnessMap:Ae,dispersion:Xe,retroreflection:ot,iridescence:Ce,iridescenceMap:ve,iridescenceThicknessMap:X,sheen:ft,sheenColorMap:Q,sheenRoughnessMap:$,specularMap:j,specularColorMap:me,specularIntensityMap:H,transmission:Ge,transmissionMap:ae,thicknessMap:Z,gradientMap:Pe,opaque:g.transparent===!1&&g.blending===Cs&&g.alphaToCoverage===!1,alphaMap:Te,alphaTest:Ue,alphaHash:$e,combine:g.combine,mapUv:pe&&d(g.map.channel),aoMapUv:ge&&d(g.aoMap.channel),lightMapUv:ie&&d(g.lightMap.channel),bumpMapUv:F&&d(g.bumpMap.channel),normalMapUv:W&&d(g.normalMap.channel),displacementMapUv:k&&d(g.displacementMap.channel),emissiveMapUv:re&&d(g.emissiveMap.channel),metalnessMapUv:ye&&d(g.metalnessMap.channel),roughnessMapUv:Re&&d(g.roughnessMap.channel),anisotropyMapUv:ke&&d(g.anisotropyMap.channel),clearcoatMapUv:L&&d(g.clearcoatMap.channel),clearcoatNormalMapUv:w&&d(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&d(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ae&&d(g.diffuseRoughnessMap.channel),iridescenceMapUv:ve&&d(g.iridescenceMap.channel),iridescenceThicknessMapUv:X&&d(g.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&d(g.sheenColorMap.channel),sheenRoughnessMapUv:$&&d(g.sheenRoughnessMap.channel),specularMapUv:j&&d(g.specularMap.channel),specularColorMapUv:me&&d(g.specularColorMap.channel),specularIntensityMapUv:H&&d(g.specularIntensityMap.channel),transmissionMapUv:ae&&d(g.transmissionMap.channel),thicknessMapUv:Z&&d(g.thicknessMap.channel),alphaMapUv:Te&&d(g.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(W||Ee),vertexNormals:!!b.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!b.attributes.uv&&(pe||Te),fog:!!I,useFog:g.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||b.attributes.normal===void 0&&W===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:he,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:b.attributes.position!==void 0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Ne,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:N.filter(xe=>xe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:U,decodeVideoTexture:pe&&g.map.isVideoTexture===!0&&Et.getTransfer(g.map.colorSpace)===Rt,decodeVideoTextureEmissive:re&&g.emissiveMap.isVideoTexture===!0&&Et.getTransfer(g.emissiveMap.colorSpace)===Rt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Wt,flipSided:g.side===qt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ne&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&g.extensions.multiDraw===!0||rt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return be.vertexUv1s=c.has(1),be.vertexUv2s=c.has(2),be.vertexUv3s=c.has(3),c.clear(),be}function v(g){let M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(let A in g.defines)M.push(A),M.push(g.defines[A]);return g.isRawShaderMaterial===!1&&(f(M,g),m(M,g),M.push(i.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function f(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapPMREM),g.push(M.envMapMaxLod),g.push(M.envMapSize),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.diffuseRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.numSunLights),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numSunLightShadows),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.numLightProbeGrids),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function m(g,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function _(g){let M=u[g.type],A;if(M){let C=Qn[M];A=ou.clone(C.uniforms)}else A=g.uniforms;return A}function E(g,M){let A=h.get(M);return A!==void 0?++A.usedTimes:(A=new qg(i,M,g,s),l.push(A),h.set(M,A)),A}function y(g){if(--g.usedTimes===0){let M=l.indexOf(g);l[M]=l[l.length-1],l.pop(),h.delete(g.cacheKey),g.destroy()}}function S(g){a.remove(g)}function T(){a.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:_,acquireProgram:E,releaseProgram:y,releaseShaderCache:S,programs:l,dispose:T}}function $g(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Kg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function wu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ru(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,x,v,f,m){let _=i[e];return _===void 0?(_={id:u.id,object:u,geometry:d,material:x,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:f,group:m},i[e]=_):(_.id=u.id,_.object=u,_.geometry=d,_.material=x,_.materialVariant=o(u),_.groupOrder=v,_.renderOrder=u.renderOrder,_.z=f,_.group=m),e++,_}function c(u,d,x,v,f,m,_){_.reversedDepth===!0&&(f=-f);let E=a(u,d,x,v,f,m);x.transmission>0?n.push(E):x.transparent===!0?s.push(E):t.push(E)}function l(u,d,x,v,f,m){let _=a(u,d,x,v,f,m);x.transmission>0?n.unshift(_):x.transparent===!0?s.unshift(_):t.unshift(_)}function h(u,d){t.length>1&&t.sort(u||Kg),n.length>1&&n.sort(d||wu),s.length>1&&s.sort(d||wu)}function p(){for(let u=e,d=i.length;u<d;u++){let x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:p,sort:h}}function Qg(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Ru,i.set(n,[o])):s>=r.length?(o=new Ru,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function jg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Ve};break;case"SpotLight":t={position:new P,direction:new P,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function ex(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var tx=0;function nx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ix(i){let e=new jg,t=ex(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let s=new P,r=new Pt,o=new Pt;function a(l){let h=0,p=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let d=0,x=0,v=0,f=0,m=0,_=0,E=0,y=0,S=0,T=0,g=0,M=0,A=0,C=0;l.sort(nx);for(let N=0,I=l.length;N<I;N++){let b=l[N],z=b.color,B=b.intensity,G=b.distance,oe=null;if(b.shadow&&b.shadow.map&&(b.shadow.map.texture.format===Ti?oe=b.shadow.map.texture:oe=b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)h+=z.r*B,p+=z.g*B,u+=z.b*B;else if(b.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(b.sh.coefficients[Y],B);C++}else if(b.isSunLight){let Y=e.get(b);if(Y.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let J=b.shadow,de=t.get(b);de.shadowIntensity=J.intensity,de.shadowBias=J.bias,de.shadowNormalBias=J.normalBias,de.shadowRadius=J.radius,de.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[x]=de,n.sunShadowMap[x]=oe;let Ne=J.getViewportCount();for(let we=0;we<Ne;we++)n.sunShadowMatrix[v+we]=J.getMatrix(we),n.sunShadowCascade[v+we]=J._cascadeData[we];v+=Ne,x++}n.sun[d]=Y,d++}else if(b.isDirectionalLight){let Y=e.get(b);if(Y.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let J=b.shadow,de=t.get(b);de.shadowIntensity=J.intensity,de.shadowBias=J.bias,de.shadowNormalBias=J.normalBias,de.shadowRadius=J.radius,de.shadowMapSize=J.mapSize,n.directionalShadow[f]=de,n.directionalShadowMap[f]=oe,n.directionalShadowMatrix[f]=b.shadow.matrix,S++}n.directional[f]=Y,f++}else if(b.isSpotLight){let Y=e.get(b);Y.position.setFromMatrixPosition(b.matrixWorld),Y.color.copy(z).multiplyScalar(B),Y.distance=G,Y.coneCos=Math.cos(b.angle),Y.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),Y.decay=b.decay,n.spot[_]=Y;let J=b.shadow;if(b.map&&(n.spotLightMap[M]=b.map,M++,J.updateMatrices(b),b.castShadow&&A++),n.spotLightMatrix[_]=J.matrix,b.castShadow){let de=t.get(b);de.shadowIntensity=J.intensity,de.shadowBias=J.bias,de.shadowNormalBias=J.normalBias,de.shadowRadius=J.radius,de.shadowMapSize=J.mapSize,n.spotShadow[_]=de,n.spotShadowMap[_]=oe,g++}_++}else if(b.isRectAreaLight){let Y=e.get(b);Y.color.copy(z).multiplyScalar(B),Y.halfWidth.set(b.width*.5,0,0),Y.halfHeight.set(0,b.height*.5,0),n.rectArea[E]=Y,E++}else if(b.isPointLight){let Y=e.get(b);if(Y.color.copy(b.color).multiplyScalar(b.intensity),Y.distance=b.distance,Y.decay=b.decay,b.castShadow){let J=b.shadow,de=t.get(b);de.shadowIntensity=J.intensity,de.shadowBias=J.bias,de.shadowNormalBias=J.normalBias,de.shadowRadius=J.radius,de.shadowMapSize=J.mapSize,de.shadowCameraNear=J.camera.near,de.shadowCameraFar=J.camera.far,n.pointShadow[m]=de,n.pointShadowMap[m]=oe,n.pointShadowMatrix[m]=b.shadow.matrix,T++}n.point[m]=Y,m++}else if(b.isHemisphereLight){let Y=e.get(b);Y.skyColor.copy(b.color).multiplyScalar(B),Y.groundColor.copy(b.groundColor).multiplyScalar(B),n.hemi[y]=Y,y++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=We.LTC_FLOAT_1,n.rectAreaLTC2=We.LTC_FLOAT_2):(n.rectAreaLTC1=We.LTC_HALF_1,n.rectAreaLTC2=We.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=u;let D=n.hash;(D.sunLength!==d||D.directionalLength!==f||D.pointLength!==m||D.spotLength!==_||D.rectAreaLength!==E||D.hemiLength!==y||D.numSunShadows!==x||D.numDirectionalShadows!==S||D.numPointShadows!==T||D.numSpotShadows!==g||D.numSpotMaps!==M||D.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=f,n.spot.length=_,n.rectArea.length=E,n.point.length=m,n.hemi.length=y,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+M-A,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,D.sunLength=d,D.directionalLength=f,D.pointLength=m,D.spotLength=_,D.rectAreaLength=E,D.hemiLength=y,D.numSunShadows=x,D.numDirectionalShadows=S,D.numPointShadows=T,D.numSpotShadows=g,D.numSpotMaps=M,D.numLightProbes=C,n.version=tx++)}function c(l,h){let p=0,u=0,d=0,x=0,v=0,f=0,m=h.matrixWorldInverse;for(let _=0,E=l.length;_<E;_++){let y=l[_];if(y.isSunLight){let S=n.sun[p];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),p++}else if(y.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(y.isSpotLight){let S=n.spot[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),x++}else if(y.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let S=n.hemi[f];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),f++}}}return{setup:a,setupView:c,state:n}}function Au(i){let e=new ix(i),t=[],n=[],s=[];function r(p){h.camera=p,t.length=0,n.length=0,s.length=0}function o(p){p.isLightProbeGrid?s.push(p):t.push(p)}function a(p){n.push(p)}function c(){e.setup(t),s.sort((p,u)=>p.priority-u.priority||p.id-u.id)}function l(p){e.setupView(t,p)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function sx(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Au(i),e.set(s,[a])):r>=o.length?(a=new Au(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ox=`uniform sampler2D shadow_pass;
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
}`,ax=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],cx=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Cu=new Pt,Yr=new P,bl=new P;function lx(i,e,t){let n=new yi,s=new Le,r=new Le,o=new Ut,a=new Yo,c=new Zo,l={},h=t.maxTextureSize,p={[Jn]:qt,[qt]:Jn,[Wt]:Wt},u=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:rx,fragmentShader:ox}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let x=new Nt;x.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ue(x,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oi;let m=this.type;this.render=function(T,g,M){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;this.type===aa&&(at("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Oi);let A=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),N=i.state;N.setBlending(zi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let I=m!==this.type;I&&g.traverse(function(b){b.material&&(Array.isArray(b.material)?b.material.forEach(z=>z.needsUpdate=!0):b.material.needsUpdate=!0)});for(let b=0,z=T.length;b<z;b++){let B=T[b],G=B.shadow;if(G===void 0){at("WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let oe=G.getFrameExtents();s.multiply(oe),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,G.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Y,G.map===null||I===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===As){if(B.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Mn(s.x,s.y,{format:Ti,type:kn,minFilter:pn,magFilter:pn,generateMipmaps:!1}),G.map.texture.name=B.name+".shadowMap",G.map.depthTexture=new ci(s.x,s.y,In),G.map.depthTexture.name=B.name+".shadowMapDepth",G.map.depthTexture.format=oi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=jt,G.map.depthTexture.magFilter=jt}else B.isPointLight?(G.map=new Jr(s.x),G.map.depthTexture=new mr(s.x,Gn)):(G.map=new Mn(s.x,s.y),G.map.depthTexture=new ci(s.x,s.y,Gn)),G.map.depthTexture.name=B.name+".shadowMap",G.map.depthTexture.format=oi,this.type===Oi?(G.map.depthTexture.compareFunction=Y?hl:ll,G.map.depthTexture.minFilter=pn,G.map.depthTexture.magFilter=pn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=jt,G.map.depthTexture.magFilter=jt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let J=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();B.isPointLight!==!0&&G.updateMatrices(B,M);let de=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:M.layers;for(let Ne=0;Ne<J;Ne++){let we=G.getCamera(Ne);if(B.isPointLight){let ee=G.camera,Se=G.matrix,te=B.distance||ee.far;te!==ee.far&&(ee.far=te,ee.updateProjectionMatrix()),Yr.setFromMatrixPosition(B.matrixWorld),ee.position.copy(Yr),bl.copy(ee.position),bl.add(ax[Ne]),ee.up.copy(cx[Ne]),ee.lookAt(bl),ee.updateMatrixWorld(),Se.makeTranslation(-Yr.x,-Yr.y,-Yr.z),Cu.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Cu,ee.coordinateSystem,ee.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,Ne),i.clear();else{Ne===0&&(i.setRenderTarget(G.map),i.clear());let ee=G.getViewport(Ne);o.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),N.viewport(o)}n=G.getFrustum(Ne),y(g,M,we,B,de,this.type)}G.isPointLightShadow!==!0&&this.type===As&&_(G,M),G.needsUpdate=!1}m=this.type,f.needsUpdate=!1,i.setRenderTarget(A,C,D)};function _(T,g){let M=e.update(v);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new Mn(s.x,s.y,{format:Ti,type:kn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(g,null,M,u,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(g,null,M,d,v,null)}function E(T,g,M,A){let C=null,D=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)C=D;else if(C=M.isPointLight===!0?c:a,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let N=C.uuid,I=g.uuid,b=l[N];b===void 0&&(b={},l[N]=b);let z=b[I];z===void 0&&(z=C.clone(),b[I]=z,g.addEventListener("dispose",S)),C=z}if(C.visible=g.visible,C.wireframe=g.wireframe,A===As?C.side=g.shadowSide!==null?g.shadowSide:g.side:C.side=g.shadowSide!==null?g.shadowSide:p[g.side],C.alphaMap=g.alphaMap,C.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,C.map=g.map,C.clipShadows=g.clipShadows,C.clippingPlanes=g.clippingPlanes,C.clipIntersection=g.clipIntersection,C.displacementMap=g.displacementMap,C.displacementScale=g.displacementScale,C.displacementBias=g.displacementBias,C.wireframeLinewidth=g.wireframeLinewidth,C.linewidth=g.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let N=i.properties.get(C);N.light=M}return C}function y(T,g,M,A,C,D){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===As)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);let b=e.update(T),z=T.material;if(Array.isArray(z)){let B=b.groups;for(let G=0,oe=B.length;G<oe;G++){let Y=B[G],J=z[Y.materialIndex];if(J&&J.visible){let de=E(T,J,A,D);T.onBeforeShadow(i,T,g,M,b,de,Y),i.renderBufferDirect(M,null,b,de,T,Y),T.onAfterShadow(i,T,g,M,b,de,Y)}}}else if(z.visible){let B=E(T,z,A,D);T.onBeforeShadow(i,T,g,M,b,B,null),i.renderBufferDirect(M,null,b,B,T,null),T.onAfterShadow(i,T,g,M,b,B,null)}}let I=T.children;for(let b=0,z=I.length;b<z;b++)y(I[b],g,M,A,C,D)}function S(T){T.target.removeEventListener("dispose",S);for(let M in l){let A=l[M],C=T.target.uuid;C in A&&(A[C].dispose(),delete A[C])}}}function hx(i,e){function t(){let H=!1,ae=new Ut,Z=null,Pe=new Ut(0,0,0,0);return{setMask:function(Te){Z!==Te&&!H&&(i.colorMask(Te,Te,Te,Te),Z=Te)},setLocked:function(Te){H=Te},setClear:function(Te,Ue,$e,ne,U){U===!0&&(Te*=ne,Ue*=ne,$e*=ne),ae.set(Te,Ue,$e,ne),Pe.equals(ae)===!1&&(i.clearColor(Te,Ue,$e,ne),Pe.copy(ae))},reset:function(){H=!1,Z=null,Pe.set(-1,0,0,0)}}}function n(){let H=!1,ae=!1,Z=null,Pe=null,Te=null;return{setReversed:function(Ue){if(ae!==Ue){let $e=e.get("EXT_clip_control");Ue?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),ae=Ue;let ne=Te;Te=null,this.setClear(ne)}},getReversed:function(){return ae},setTest:function(Ue){Ue?he(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(Ue){Z!==Ue&&!H&&(i.depthMask(Ue),Z=Ue)},setFunc:function(Ue){if(ae&&(Ue=Qh[Ue]),Pe!==Ue){switch(Ue){case Po:i.depthFunc(i.NEVER);break;case Io:i.depthFunc(i.ALWAYS);break;case Lo:i.depthFunc(i.LESS);break;case ps:i.depthFunc(i.LEQUAL);break;case Do:i.depthFunc(i.EQUAL);break;case No:i.depthFunc(i.GEQUAL);break;case Uo:i.depthFunc(i.GREATER);break;case Fo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pe=Ue}},setLocked:function(Ue){H=Ue},setClear:function(Ue){Te!==Ue&&(Te=Ue,ae&&(Ue=1-Ue),i.clearDepth(Ue))},reset:function(){H=!1,Z=null,Pe=null,Te=null,ae=!1}}}function s(){let H=!1,ae=null,Z=null,Pe=null,Te=null,Ue=null,$e=null,ne=null,U=null;return{setTest:function(ce){H||(ce?he(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(ce){ae!==ce&&!H&&(i.stencilMask(ce),ae=ce)},setFunc:function(ce,be,xe){(Z!==ce||Pe!==be||Te!==xe)&&(i.stencilFunc(ce,be,xe),Z=ce,Pe=be,Te=xe)},setOp:function(ce,be,xe){(Ue!==ce||$e!==be||ne!==xe)&&(i.stencilOp(ce,be,xe),Ue=ce,$e=be,ne=xe)},setLocked:function(ce){H=ce},setClear:function(ce){U!==ce&&(i.clearStencil(ce),U=ce)},reset:function(){H=!1,ae=null,Z=null,Pe=null,Te=null,Ue=null,$e=null,ne=null,U=null}}}let r=new t,o=new n,a=new s,c={},l=new WeakMap,h={},p={},u={},d=new WeakMap,x=[],v=null,f=!1,m=null,_=null,E=null,y=null,S=null,T=null,g=null,M=new Ve(0,0,0),A=0,C=!1,D=null,N=null,I=null,b=null,z=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,oe=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Y)[1]),G=oe>=1):Y.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),G=oe>=2);let J=null,de={},Ne=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),ee=new Ut().fromArray(Ne),Se=new Ut().fromArray(we);function te(H,ae,Z,Pe){let Te=new Uint8Array(4),Ue=i.createTexture();i.bindTexture(H,Ue),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<Z;$e++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(ae+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return Ue}let Me={};Me[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(i.DEPTH_TEST),o.setFunc(ps),F(!1),W(Wc),he(i.CULL_FACE),ge(zi);function he(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function Fe(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function rt(H,ae){return u[H]!==ae?(i.bindFramebuffer(H,ae),u[H]=ae,H===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ae),H===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function pe(H,ae){let Z=x,Pe=!1;if(H){Z=d.get(ae),Z===void 0&&(Z=[],d.set(ae,Z));let Te=H.textures;if(Z.length!==Te.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let Ue=0,$e=Te.length;Ue<$e;Ue++)Z[Ue]=i.COLOR_ATTACHMENT0+Ue;Z.length=Te.length,Pe=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,Pe=!0);Pe&&i.drawBuffers(Z)}function _e(H){return v!==H?(i.useProgram(H),v=H,!0):!1}let De={[Gi]:i.FUNC_ADD,[vh]:i.FUNC_SUBTRACT,[Eh]:i.FUNC_REVERSE_SUBTRACT};De[Mh]=i.MIN,De[Sh]=i.MAX;let V={[bh]:i.ZERO,[Th]:i.ONE,[wh]:i.SRC_COLOR,[Zc]:i.SRC_ALPHA,[Lh]:i.SRC_ALPHA_SATURATE,[Ph]:i.DST_COLOR,[Ah]:i.DST_ALPHA,[Rh]:i.ONE_MINUS_SRC_COLOR,[Jc]:i.ONE_MINUS_SRC_ALPHA,[Ih]:i.ONE_MINUS_DST_COLOR,[Ch]:i.ONE_MINUS_DST_ALPHA,[Dh]:i.CONSTANT_COLOR,[Nh]:i.ONE_MINUS_CONSTANT_COLOR,[Uh]:i.CONSTANT_ALPHA,[Fh]:i.ONE_MINUS_CONSTANT_ALPHA};function ge(H,ae,Z,Pe,Te,Ue,$e,ne,U,ce){if(H===zi){f===!0&&(Fe(i.BLEND),f=!1);return}if(f===!1&&(he(i.BLEND),f=!0),H!==yh){if(H!==m||ce!==C){if((_!==Gi||S!==Gi)&&(i.blendEquation(i.FUNC_ADD),_=Gi,S=Gi),ce)switch(H){case Cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xc:i.blendFunc(i.ONE,i.ONE);break;case qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ct("WebGLState: Invalid blending: ",H);break}else switch(H){case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case qc:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yc:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",H);break}E=null,y=null,T=null,g=null,M.set(0,0,0),A=0,m=H,C=ce}return}Te=Te||ae,Ue=Ue||Z,$e=$e||Pe,(ae!==_||Te!==S)&&(i.blendEquationSeparate(De[ae],De[Te]),_=ae,S=Te),(Z!==E||Pe!==y||Ue!==T||$e!==g)&&(i.blendFuncSeparate(V[Z],V[Pe],V[Ue],V[$e]),E=Z,y=Pe,T=Ue,g=$e),(ne.equals(M)===!1||U!==A)&&(i.blendColor(ne.r,ne.g,ne.b,U),M.copy(ne),A=U),m=H,C=!1}function ie(H,ae){H.side===Wt?Fe(i.CULL_FACE):he(i.CULL_FACE);let Z=H.side===qt;ae&&(Z=!Z),F(Z),H.blending===Cs&&H.transparent===!1?ge(zi):ge(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let Pe=H.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),re(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function F(H){D!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),D=H)}function W(H){H!==xh?(he(i.CULL_FACE),H!==N&&(H===Wc?i.cullFace(i.BACK):H===_h?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),N=H}function k(H){H!==I&&(G&&i.lineWidth(H),I=H)}function re(H,ae,Z){H?(he(i.POLYGON_OFFSET_FILL),(b!==ae||z!==Z)&&(b=ae,z=Z,o.getReversed()&&(ae=-ae,Z=-Z),i.polygonOffset(ae,Z))):Fe(i.POLYGON_OFFSET_FILL)}function ye(H){H?he(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function Re(H){H===void 0&&(H=i.TEXTURE0+B-1),J!==H&&(i.activeTexture(H),J=H)}function Ee(H,ae,Z){Z===void 0&&(J===null?Z=i.TEXTURE0+B-1:Z=J);let Pe=de[Z];Pe===void 0&&(Pe={type:void 0,texture:void 0},de[Z]=Pe),(Pe.type!==H||Pe.texture!==ae)&&(J!==Z&&(i.activeTexture(Z),J=Z),i.bindTexture(H,ae||Me[H]),Pe.type=H,Pe.texture=ae)}function O(){let H=de[J];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Ze(){try{i.compressedTexImage2D(...arguments)}catch(H){ct("WebGLState:",H)}}function Xe(){try{i.compressedTexImage3D(...arguments)}catch(H){ct("WebGLState:",H)}}function ot(){try{i.texSubImage2D(...arguments)}catch(H){ct("WebGLState:",H)}}function Ce(){try{i.texSubImage3D(...arguments)}catch(H){ct("WebGLState:",H)}}function ft(){try{i.compressedTexSubImage2D(...arguments)}catch(H){ct("WebGLState:",H)}}function Ge(){try{i.compressedTexSubImage3D(...arguments)}catch(H){ct("WebGLState:",H)}}function ke(){try{i.texStorage2D(...arguments)}catch(H){ct("WebGLState:",H)}}function L(){try{i.texStorage3D(...arguments)}catch(H){ct("WebGLState:",H)}}function w(){try{i.texImage2D(...arguments)}catch(H){ct("WebGLState:",H)}}function K(){try{i.texImage3D(...arguments)}catch(H){ct("WebGLState:",H)}}function Ae(H){return p[H]!==void 0?p[H]:i.getParameter(H)}function ve(H,ae){p[H]!==ae&&(i.pixelStorei(H,ae),p[H]=ae)}function X(H){ee.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),ee.copy(H))}function Q(H){Se.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Se.copy(H))}function $(H,ae){let Z=l.get(ae);Z===void 0&&(Z=new WeakMap,l.set(ae,Z));let Pe=Z.get(H);Pe===void 0&&(Pe=i.getUniformBlockIndex(ae,H.name),i.uniformBlockBinding(ae,Pe,Pe),Z.set(H,Pe))}function j(H,ae,Z){let Te=l.get(ae).get(H);c[Te]!==Z&&(i.bindBufferBase(i.UNIFORM_BUFFER,Te,Z),c[Te]=Z)}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},J=null,de={},u={},c={},d=new WeakMap,x=[],v=null,f=!1,m=null,_=null,E=null,y=null,S=null,T=null,g=null,M=new Ve(0,0,0),A=0,C=!1,D=null,N=null,I=null,b=null,z=null,ee.set(0,0,i.canvas.width,i.canvas.height),Se.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:he,disable:Fe,bindFramebuffer:rt,drawBuffers:pe,useProgram:_e,setBlending:ge,setMaterial:ie,setFlipSided:F,setCullFace:W,setLineWidth:k,setPolygonOffset:re,setScissorTest:ye,activeTexture:Re,bindTexture:Ee,unbindTexture:O,compressedTexImage2D:Ze,compressedTexImage3D:Xe,texImage2D:w,texImage3D:K,pixelStorei:ve,getParameter:Ae,updateUBOMapping:$,uniformBlockBinding:j,texStorage2D:ke,texStorage3D:L,texSubImage2D:ot,texSubImage3D:Ce,compressedTexSubImage2D:ft,compressedTexSubImage3D:Ge,scissor:X,viewport:Q,reset:me}}function ux(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Le,h=new WeakMap,p=new Set,u,d=new WeakMap,x=new Set,v=new FinalizationRegistry(L=>x.delete(L)),f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,w){return f?new OffscreenCanvas(L,w):gs("canvas")}function _(L,w,K){let Ae=1,ve=ke(L);if((ve.width>K||ve.height>K)&&(Ae=K/Math.max(ve.width,ve.height)),Ae<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let X=Math.floor(Ae*ve.width),Q=Math.floor(Ae*ve.height);u===void 0&&(u=m(X,Q));let $=w?m(X,Q):u;return $.width=X,$.height=Q,$.getContext("2d").drawImage(L,0,0,X,Q),at("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+X+"x"+Q+")."),$}else return"data"in L&&at("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),L;return L}function E(L){return L.generateMipmaps}function y(L){i.generateMipmap(L)}function S(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(L,w,K,Ae,ve,X=!1){if(L!==null){if(i[L]!==void 0)return i[L];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Q;Ae&&(Q=e.get("EXT_texture_norm16"),Q||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=w;if(w===i.RED&&(K===i.FLOAT&&($=i.R32F),K===i.HALF_FLOAT&&($=i.R16F),K===i.UNSIGNED_BYTE&&($=i.R8),K===i.UNSIGNED_SHORT&&Q&&($=Q.R16_EXT),K===i.SHORT&&Q&&($=Q.R16_SNORM_EXT)),w===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&($=i.R8UI),K===i.UNSIGNED_SHORT&&($=i.R16UI),K===i.UNSIGNED_INT&&($=i.R32UI),K===i.BYTE&&($=i.R8I),K===i.SHORT&&($=i.R16I),K===i.INT&&($=i.R32I)),w===i.RG&&(K===i.FLOAT&&($=i.RG32F),K===i.HALF_FLOAT&&($=i.RG16F),K===i.UNSIGNED_BYTE&&($=i.RG8),K===i.UNSIGNED_SHORT&&Q&&($=Q.RG16_EXT),K===i.SHORT&&Q&&($=Q.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&($=i.RG8UI),K===i.UNSIGNED_SHORT&&($=i.RG16UI),K===i.UNSIGNED_INT&&($=i.RG32UI),K===i.BYTE&&($=i.RG8I),K===i.SHORT&&($=i.RG16I),K===i.INT&&($=i.RG32I)),w===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&($=i.RGB8UI),K===i.UNSIGNED_SHORT&&($=i.RGB16UI),K===i.UNSIGNED_INT&&($=i.RGB32UI),K===i.BYTE&&($=i.RGB8I),K===i.SHORT&&($=i.RGB16I),K===i.INT&&($=i.RGB32I)),w===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&($=i.RGBA8UI),K===i.UNSIGNED_SHORT&&($=i.RGBA16UI),K===i.UNSIGNED_INT&&($=i.RGBA32UI),K===i.BYTE&&($=i.RGBA8I),K===i.SHORT&&($=i.RGBA16I),K===i.INT&&($=i.RGBA32I)),w===i.RGB&&(K===i.UNSIGNED_SHORT&&Q&&($=Q.RGB16_EXT),K===i.SHORT&&Q&&($=Q.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),w===i.RGBA){let j=X?or:Et.getTransfer(ve);K===i.FLOAT&&($=i.RGBA32F),K===i.HALF_FLOAT&&($=i.RGBA16F),K===i.UNSIGNED_BYTE&&($=j===Rt?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&Q&&($=Q.RGBA16_EXT),K===i.SHORT&&Q&&($=Q.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function g(L,w){let K;return L?w===null||w===Gn||w===Vi?K=i.DEPTH24_STENCIL8:w===In?K=i.DEPTH32F_STENCIL8:w===Is&&(K=i.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Gn||w===Vi?K=i.DEPTH_COMPONENT24:w===In?K=i.DEPTH_COMPONENT32F:w===Is&&(K=i.DEPTH_COMPONENT16),K}function M(L,w){return E(L)===!0||L.isFramebufferTexture&&L.minFilter!==jt&&L.minFilter!==pn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function A(L){let w=new WeakRef(L);n.get(L).__ref=w,x.add(w),v.register(L,w,w)}function C(L){let w=n.get(L).__ref;w!==void 0&&(x.delete(w),v.unregister(w))}function D(L){I(L.target)}function N(L){b(L.target)}function I(L){L.removeEventListener("dispose",D),C(L),B(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&p.delete(L)}function b(L){L.removeEventListener("dispose",N),C(L),oe(L)}function z(){for(let L of x){let w=L.deref();w!==void 0&&(w.isRenderTarget===!0?b(w):I(w))}x.clear(),p.clear()}function B(L){let w=n.get(L);if(w.__webglInit===void 0)return;let K=L.source,Ae=d.get(K);if(Ae){let ve=Ae[w.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&G(L),Object.keys(Ae).length===0&&d.delete(K)}n.remove(L)}function G(L){let w=n.get(L);i.deleteTexture(w.__webglTexture);let K=L.source,Ae=d.get(K);delete Ae[w.__cacheKey],o.memory.textures--}function oe(L){let w=n.get(L);w.__depthDisposeCallback&&w.__depthDisposeCallback();let K=L.depthTexture;if(K&&K.renderTarget===L&&I(K),L.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(w.__webglFramebuffer[ve]))for(let X=0;X<w.__webglFramebuffer[ve].length;X++)i.deleteFramebuffer(w.__webglFramebuffer[ve][X]);else i.deleteFramebuffer(w.__webglFramebuffer[ve]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ve])}else{if(Array.isArray(w.__webglFramebuffer))for(let ve=0;ve<w.__webglFramebuffer.length;ve++)i.deleteFramebuffer(w.__webglFramebuffer[ve]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ve=0;ve<w.__webglColorRenderbuffer.length;ve++)w.__webglColorRenderbuffer[ve]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ve]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let Ae=L.textures;for(let ve=0,X=Ae.length;ve<X;ve++){let Q=n.get(Ae[ve]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(Ae[ve])}n.remove(L)}let Y=0;function J(){Y=0}function de(){return Y}function Ne(L){Y=L}function we(){let L=Y;return L>=s.maxTextures&&at("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,L}function ee(L){let w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.mipmapsAutoUpdate),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function Se(L,w){let K=n.get(L);if(L.isVideoTexture&&ft(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&K.__version!==L.version){let Ae=L.image;if(Ae===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(Ae.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(K,L,w);return}}else L.isExternalTexture&&(K.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+w)}function te(L,w){let K=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){ie(K,L,w);return}else L.isExternalTexture&&(K.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+w)}function Me(L,w){let K=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){ie(K,L,w);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+w)}function he(L,w){let K=n.get(L);if(L.version>0&&K.__version!==L.version){F(K,L,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+w)}let Fe={[hn]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[Ho]:i.MIRRORED_REPEAT},rt={[jt]:i.NEAREST,[Oh]:i.NEAREST_MIPMAP_NEAREST,[Or]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[ua]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},pe={[Vh]:i.NEVER,[ul]:i.ALWAYS,[Wh]:i.LESS,[ll]:i.LEQUAL,[Xh]:i.EQUAL,[hl]:i.GEQUAL,[qh]:i.GREATER,[Yh]:i.NOTEQUAL};function _e(L,w){if(w.type===In&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===pn||w.magFilter===ua||w.magFilter===Or||w.magFilter===hi||w.minFilter===pn||w.minFilter===ua||w.minFilter===Or||w.minFilter===hi)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,Fe[w.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,Fe[w.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,Fe[w.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,rt[w.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,rt[w.minFilter]),w.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,pe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===jt||w.minFilter!==Or&&w.minFilter!==hi||w.type===In&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function De(L,w){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",D),A(w));let Ae=w.source,ve=d.get(Ae);ve===void 0&&(ve={},d.set(Ae,ve));let X=ee(w);if(X!==L.__cacheKey){ve[X]===void 0&&(ve[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),ve[X].usedTimes++;let Q=ve[L.__cacheKey];Q!==void 0&&(ve[L.__cacheKey].usedTimes--,Q.usedTimes===0&&G(w)),L.__cacheKey=X,L.__webglTexture=ve[X].texture}return K}function V(L,w,K){return Math.floor(Math.floor(L/K)/w)}function ge(L,w,K,Ae){let X=L.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,K,Ae,w.data);else{X.sort((H,ae)=>H.start-ae.start);let Q=0;for(let H=1;H<X.length;H++){let ae=X[Q],Z=X[H],Pe=ae.start+ae.count,Te=V(Z.start,w.width,4),Ue=V(ae.start,w.width,4);Z.start<=Pe+1&&Te===Ue&&V(Z.start+Z.count-1,w.width,4)===Te?ae.count=Math.max(ae.count,Z.start+Z.count-ae.start):(++Q,X[Q]=Z)}X.length=Q+1;let $=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let H=0,ae=X.length;H<ae;H++){let Z=X[H],Pe=Math.floor(Z.start/4),Te=Math.ceil(Z.count/4),Ue=Pe%w.width,$e=Math.floor(Pe/w.width),ne=Te,U=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,$e),t.texSubImage2D(i.TEXTURE_2D,0,Ue,$e,ne,U,K,Ae,w.data)}L.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,me)}}function ie(L,w,K){let Ae=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Ae=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Ae=i.TEXTURE_3D);let ve=De(L,w),X=w.source;t.bindTexture(Ae,L.__webglTexture,i.TEXTURE0+K);let Q=n.get(X);if(X.version!==Q.__version||ve===!0){if(t.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let U=Et.getPrimaries(Et.workingColorSpace),ce=w.colorSpace===Yt?null:Et.getPrimaries(w.colorSpace),be=w.colorSpace===Yt||U===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let j=_(w.image,!1,s.maxTextureSize);j=Ge(w,j);let me=r.convert(w.format,w.colorSpace),H=r.convert(w.type),ae=T(w.internalFormat,me,H,w.normalized,w.colorSpace,w.isVideoTexture);_e(Ae,w);let Z,Pe=w.mipmaps,Te=w.isVideoTexture!==!0,Ue=Q.__version===void 0||ve===!0,$e=X.dataReady,ne=M(w,j);if(w.isDepthTexture)ae=g(w.format===ui,w.type),Ue&&(Te?t.texStorage2D(i.TEXTURE_2D,1,ae,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,ae,j.width,j.height,0,me,H,null));else if(w.isDataTexture)if(Pe.length>0){Te&&Ue&&t.texStorage2D(i.TEXTURE_2D,ne,ae,Pe[0].width,Pe[0].height);for(let U=0,ce=Pe.length;U<ce;U++)Z=Pe[U],Te?$e&&t.texSubImage2D(i.TEXTURE_2D,U,0,0,Z.width,Z.height,me,H,Z.data):t.texImage2D(i.TEXTURE_2D,U,ae,Z.width,Z.height,0,me,H,Z.data);w.generateMipmaps=!1}else Te?(Ue&&t.texStorage2D(i.TEXTURE_2D,ne,ae,j.width,j.height),$e&&ge(w,j,me,H)):t.texImage2D(i.TEXTURE_2D,0,ae,j.width,j.height,0,me,H,j.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Te&&Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,ae,Pe[0].width,Pe[0].height,j.depth);for(let U=0,ce=Pe.length;U<ce;U++)if(Z=Pe[U],w.format!==Vn)if(me!==null)if(Te){if($e)if(w.layerUpdates.size>0){let be=Ml(Z.width,Z.height,w.format,w.type);for(let xe of w.layerUpdates){let et=Z.data.subarray(xe*be/Z.data.BYTES_PER_ELEMENT,(xe+1)*be/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,U,0,0,xe,Z.width,Z.height,1,me,et)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,U,0,0,0,Z.width,Z.height,j.depth,me,Z.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,U,ae,Z.width,Z.height,j.depth,0,Z.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?$e&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,U,0,0,0,Z.width,Z.height,j.depth,me,H,Z.data):t.texImage3D(i.TEXTURE_2D_ARRAY,U,ae,Z.width,Z.height,j.depth,0,me,H,Z.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Te&&Ue&&t.texStorage2D(i.TEXTURE_2D,ne,ae,Pe[0].width,Pe[0].height);for(let U=0,ce=Pe.length;U<ce;U++)Z=Pe[U],w.format!==Vn?me!==null?Te?$e&&t.compressedTexSubImage2D(i.TEXTURE_2D,U,0,0,Z.width,Z.height,me,Z.data):t.compressedTexImage2D(i.TEXTURE_2D,U,ae,Z.width,Z.height,0,Z.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?$e&&t.texSubImage2D(i.TEXTURE_2D,U,0,0,Z.width,Z.height,me,H,Z.data):t.texImage2D(i.TEXTURE_2D,U,ae,Z.width,Z.height,0,me,H,Z.data)}else if(w.isDataArrayTexture)if(Te){if(Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,ae,j.width,j.height,j.depth),$e)if(w.layerUpdates.size>0){let U=Ml(j.width,j.height,w.format,w.type);for(let ce of w.layerUpdates){let be=j.data.subarray(ce*U/j.data.BYTES_PER_ELEMENT,(ce+1)*U/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,j.width,j.height,1,me,H,be)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,me,H,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ae,j.width,j.height,j.depth,0,me,H,j.data);else if(w.isData3DTexture)Te?(Ue&&t.texStorage3D(i.TEXTURE_3D,ne,ae,j.width,j.height,j.depth),$e&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,me,H,j.data)):t.texImage3D(i.TEXTURE_3D,0,ae,j.width,j.height,j.depth,0,me,H,j.data);else if(w.isFramebufferTexture){if(Ue)if(Te)t.texStorage2D(i.TEXTURE_2D,ne,ae,j.width,j.height);else{let U=j.width,ce=j.height;for(let be=0;be<ne;be++)t.texImage2D(i.TEXTURE_2D,be,ae,U,ce,0,me,H,null),U>>=1,ce>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let U=i.canvas;if(U.hasAttribute("layoutsubtree")||U.setAttribute("layoutsubtree","true"),j.parentNode!==U){U.appendChild(j),p.add(w),U.onpaint=ce=>{let be=ce.changedElements;for(let xe of p)be.includes(xe.image)&&(xe.needsUpdate=!0)},U.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let be=i.RGBA,xe=i.RGBA,et=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,be,xe,et,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Te&&Ue){let U=ke(Pe[0]);t.texStorage2D(i.TEXTURE_2D,ne,ae,U.width,U.height)}for(let U=0,ce=Pe.length;U<ce;U++)Z=Pe[U],Te?$e&&t.texSubImage2D(i.TEXTURE_2D,U,0,0,me,H,Z):t.texImage2D(i.TEXTURE_2D,U,ae,me,H,Z);w.generateMipmaps=!1}else if(Te){if(Ue){let U=ke(j);t.texStorage2D(i.TEXTURE_2D,ne,ae,U.width,U.height)}$e&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,H,j)}else t.texImage2D(i.TEXTURE_2D,0,ae,me,H,j);E(w)&&w.mipmapsAutoUpdate===!0&&y(Ae),Q.__version=X.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function F(L,w,K){if(w.image.length!==6)return;let Ae=De(L,w),ve=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+K);let X=n.get(ve);if(ve.version!==X.__version||Ae===!0){t.activeTexture(i.TEXTURE0+K);let Q=Et.getPrimaries(Et.workingColorSpace),$=w.colorSpace===Yt?null:Et.getPrimaries(w.colorSpace),j=w.colorSpace===Yt||Q===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let me=w.isCompressedTexture||w.image[0].isCompressedTexture,H=w.image[0]&&w.image[0].isDataTexture,ae=[];for(let xe=0;xe<6;xe++)!me&&!H?ae[xe]=_(w.image[xe],!0,s.maxCubemapSize):ae[xe]=H?w.image[xe].image:w.image[xe],ae[xe]=Ge(w,ae[xe]);let Z=ae[0],Pe=r.convert(w.format,w.colorSpace),Te=r.convert(w.type),Ue=T(w.internalFormat,Pe,Te,w.normalized,w.colorSpace),$e=w.isVideoTexture!==!0,ne=X.__version===void 0||Ae===!0,U=ve.dataReady,ce=M(w,Z);_e(i.TEXTURE_CUBE_MAP,w);let be;if(w.isDepthTexture){if(Ue=g(w.format===ui,w.type),ne)if($e)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Ue,Z.width,Z.height);else for(let xe=0;xe<6;xe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Ue,Z.width,Z.height,0,Pe,Te,null)}else if(me){$e&&ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Ue,Z.width,Z.height);for(let xe=0;xe<6;xe++){be=ae[xe].mipmaps;for(let et=0;et<be.length;et++){let nt=be[et];w.format!==Vn?Pe!==null?$e?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et,0,0,nt.width,nt.height,Pe,nt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et,Ue,nt.width,nt.height,0,nt.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et,0,0,nt.width,nt.height,Pe,Te,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et,Ue,nt.width,nt.height,0,Pe,Te,nt.data)}}}else{if(be=w.mipmaps,$e&&ne){be.length>0&&ce++;let xe=ke(ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Ue,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(H){$e?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ae[xe].width,ae[xe].height,Pe,Te,ae[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Ue,ae[xe].width,ae[xe].height,0,Pe,Te,ae[xe].data);for(let et=0;et<be.length;et++){let yt=be[et].image[xe].image;$e?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et+1,0,0,yt.width,yt.height,Pe,Te,yt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et+1,Ue,yt.width,yt.height,0,Pe,Te,yt.data)}}else{$e?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Pe,Te,ae[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Ue,Pe,Te,ae[xe]);for(let et=0;et<be.length;et++){let nt=be[et];$e?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et+1,0,0,Pe,Te,nt.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et+1,Ue,Pe,Te,nt.image[xe])}}}E(w)&&w.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),X.__version=ve.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function W(L,w,K,Ae,ve,X){let Q=r.convert(K.format,K.colorSpace),$=r.convert(K.type),j=T(K.internalFormat,Q,$,K.normalized,K.colorSpace),me=n.get(w),H=n.get(K);if(H.__renderTarget=w,!me.__hasExternalTextures){let ae=Math.max(1,w.width>>X),Z=Math.max(1,w.height>>X);ve===i.TEXTURE_3D||ve===i.TEXTURE_2D_ARRAY?t.texImage3D(ve,X,j,ae,Z,w.depth,0,Q,$,null):t.texImage2D(ve,X,j,ae,Z,0,Q,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),Ce(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ae,ve,H.__webglTexture,0,ot(w)):(ve===i.TEXTURE_2D||ve>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Ae,ve,H.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function k(L,w,K){if(i.bindRenderbuffer(i.RENDERBUFFER,L),w.depthBuffer){let Ae=w.depthTexture,ve=Ae&&Ae.isDepthTexture?Ae.type:null,X=g(w.stencilBuffer,ve),Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ce(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot(w),X,w.width,w.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot(w),X,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,X,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,L)}else{let Ae=w.textures;for(let ve=0;ve<Ae.length;ve++){let X=Ae[ve],Q=r.convert(X.format,X.colorSpace),$=r.convert(X.type),j=T(X.internalFormat,Q,$,X.normalized,X.colorSpace);Ce(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot(w),j,w.width,w.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot(w),j,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,j,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function re(L,w,K){let Ae=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ve=n.get(w.depthTexture);ve.__renderTarget=w;let X=Ae?w.depthTexture.image[0]:w.depthTexture.image;(!ve.__webglTexture||X.width!==w.width||X.height!==w.height)&&(X.width=w.width,X.height=w.height,w.depthTexture.needsUpdate=!0),Ae?he(w.depthTexture,0):Se(w.depthTexture,0);let Q=ve.__webglTexture,$=ot(w),j=Ae?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,me=w.depthTexture.format===ui?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===oi)Ce(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,j,Q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,me,j,Q,0);else if(w.depthTexture.format===ui)Ce(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,j,Q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,me,j,Q,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ye(L){let w=n.get(L),K=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){let Ae=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Ae){let ve=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Ae.removeEventListener("dispose",ve)};Ae.addEventListener("dispose",ve),w.__depthDisposeCallback=ve}w.__boundDepthTexture=Ae}if(L.depthTexture&&!w.__autoAllocateDepthBuffer)if(K)for(let Ae=0;Ae<6;Ae++)re(w.__webglFramebuffer[Ae],L,Ae);else L.texture.mipmaps.length>0?re(w.__webglFramebuffer[0],L,0):re(w.__webglFramebuffer,L,0);else if(K){w.__webglDepthbuffer=[];for(let Ae=0;Ae<6;Ae++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Ae]),w.__webglDepthbuffer[Ae]===void 0)w.__webglDepthbuffer[Ae]=i.createRenderbuffer(),k(w.__webglDepthbuffer[Ae],L,!1);else{let ve=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=w.__webglDepthbuffer[Ae];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,X)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),k(w.__webglDepthbuffer,L,!1);else{let ve=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,X)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(L,w,K){let Ae=n.get(L);w!==void 0&&W(Ae.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&ye(L)}function Ee(L){let w=L.texture,K=n.get(L),Ae=n.get(w);L.addEventListener("dispose",N),A(L);let ve=L.textures,X=L.isWebGLCubeRenderTarget===!0,Q=ve.length>1;if(Q||(Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture()),Ae.__version=w.version,o.memory.textures++),X){K.__webglFramebuffer=[];for(let $=0;$<6;$++)if(w.mipmaps.length>0){K.__webglFramebuffer[$]=[];for(let j=0;j<w.mipmaps.length;j++)K.__webglFramebuffer[$][j]=i.createFramebuffer()}else K.__webglFramebuffer[$]=i.createFramebuffer()}else{if(w.mipmaps.length>0){K.__webglFramebuffer=[];for(let $=0;$<w.mipmaps.length;$++)K.__webglFramebuffer[$]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Q)for(let $=0,j=ve.length;$<j;$++){let me=n.get(ve[$]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&Ce(L)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let $=0;$<ve.length;$++){let j=ve[$];K.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[$]);let me=r.convert(j.format,j.colorSpace),H=r.convert(j.type),ae=T(j.internalFormat,me,H,j.normalized,j.colorSpace,L.isXRRenderTarget===!0),Z=ot(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,ae,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,K.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),k(K.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,Ae.__webglTexture),_e(i.TEXTURE_CUBE_MAP,w);for(let $=0;$<6;$++)if(w.mipmaps.length>0)for(let j=0;j<w.mipmaps.length;j++)W(K.__webglFramebuffer[$][j],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else W(K.__webglFramebuffer[$],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);E(w)?y(i.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(Q){for(let $=0,j=ve.length;$<j;$++){let me=ve[$],H=n.get(me),ae=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ae=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,H.__webglTexture),_e(ae,me),W(K.__webglFramebuffer,L,me,i.COLOR_ATTACHMENT0+$,ae,0),E(me)&&y(ae)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&($=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,Ae.__webglTexture),_e($,w),w.mipmaps.length>0)for(let j=0;j<w.mipmaps.length;j++)W(K.__webglFramebuffer[j],L,w,i.COLOR_ATTACHMENT0,$,j);else W(K.__webglFramebuffer,L,w,i.COLOR_ATTACHMENT0,$,0);E(w)?y($):w.mipmaps.length>0&&i.texParameteri($,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&ye(L)}function O(L){let w=L.textures;for(let K=0,Ae=w.length;K<Ae;K++){let ve=w[K];if(E(ve)&&ve.mipmapsAutoUpdate===!0){let X=S(L),Q=n.get(ve).__webglTexture;t.bindTexture(X,Q),y(X),t.unbindTexture()}}}let Ze=[];function Xe(L){if(L.samples>0){if(Ce(L)===!1){let w=L.textures,K=L.width,Ae=L.height,ve=i.COLOR_BUFFER_BIT,X=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=n.get(L),$=w.length>1;if($)for(let me=0;me<w.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let me=0;me<w.length;me++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ve|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ve|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Q.__webglColorRenderbuffer[me]);let H=n.get(w[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,H,0)}i.blitFramebuffer(0,0,K,Ae,0,0,K,Ae,ve,i.NEAREST),c===!0&&(Ze.length=0,Ze.push(i.COLOR_ATTACHMENT0+me),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&Ze.push(X),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let me=0;me<w.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,Q.__webglColorRenderbuffer[me]);let H=n.get(w[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,H,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&c){let w=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ot(L){return Math.min(s.maxSamples,L.samples)}function Ce(L){let w=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ft(L){let w=o.render.frame;h.get(L)!==w&&(h.set(L,w),L.update())}function Ge(L,w){let K=L.colorSpace,Ae=L.format,ve=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==rr&&K!==Yt&&(Et.getTransfer(K)===Rt?(Ae!==Vn||ve!==yn)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",K)),w}function ke(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=we,this.resetTextureUnits=J,this.getTextureUnits=de,this.setTextureUnits=Ne,this.setTexture2D=Se,this.setTexture2DArray=te,this.setTexture3D=Me,this.setTextureCube=he,this.rebindTextures=Re,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=W,this.useMultisampledRTT=Ce,this.dispose=z}function dx(i,e){function t(n,s=Yt){let r,o=Et.getTransfer(s);if(n===yn)return i.UNSIGNED_BYTE;if(n===fa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===pa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ol)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===il)return i.BYTE;if(n===sl)return i.SHORT;if(n===Is)return i.UNSIGNED_SHORT;if(n===da)return i.INT;if(n===Gn)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===kn)return i.HALF_FLOAT;if(n===al)return i.ALPHA;if(n===cl)return i.RGB;if(n===Vn)return i.RGBA;if(n===oi)return i.DEPTH_COMPONENT;if(n===ui)return i.DEPTH_STENCIL;if(n===ma)return i.RED;if(n===ga)return i.RED_INTEGER;if(n===Ti)return i.RG;if(n===xa)return i.RG_INTEGER;if(n===_a)return i.RGBA_INTEGER;if(n===zr||n===Gr||n===kr||n===Vr)if(o===Rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ya||n===va||n===Ea||n===Ma)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===va)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sa||n===ba||n===Ta||n===wa||n===Ra||n===Wr||n===Aa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sa||n===ba)return o===Rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ta)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===wa)return r.COMPRESSED_R11_EAC;if(n===Ra)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Wr)return r.COMPRESSED_RG11_EAC;if(n===Aa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ca||n===Pa||n===Ia||n===La||n===Da||n===Na||n===Ua||n===Fa||n===Ha||n===Ba||n===Oa||n===za||n===Ga||n===ka)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ca)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pa)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ia)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===La)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Da)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Na)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ua)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fa)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ha)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ba)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oa)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===za)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ga)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ka)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Va||n===Wa||n===Xa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Va)return o===Rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qa||n===Ya||n===Xr||n===Za)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var fx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,px=`
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

}`,Il=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new gr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Cn({vertexShader:fx,fragmentShader:px,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ue(new Ft(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ll=class extends Yn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,p=null,u=null,d=null,x=null,v=typeof XRWebGLBinding<"u",f=new Il,m={},_=t.getContextAttributes(),E=null,y=null,S=[],T=[],g=new Le,M=null,A=null,C=new rn;C.viewport=new Ut;let D=new rn;D.viewport=new Ut;let N=[C,D],I=new ra,b=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let Se=S[ee];return Se===void 0&&(Se=new vs,S[ee]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(ee){let Se=S[ee];return Se===void 0&&(Se=new vs,S[ee]=Se),Se.getGripSpace()},this.getHand=function(ee){let Se=S[ee];return Se===void 0&&(Se=new vs,S[ee]=Se),Se.getHandSpace()};function B(ee){let Se=T.indexOf(ee.inputSource);if(Se===-1)return;let te=S[Se];te!==void 0&&(te.update(ee.inputSource,ee.frame,l||o),te.dispatchEvent({type:ee.type,data:ee.inputSource}))}function G(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",oe);for(let ee=0;ee<S.length;ee++){let Se=T[ee];Se!==null&&(T[ee]=null,S[ee].disconnect(Se))}b=null,z=null,f.reset();for(let ee in m)delete m[ee];if(e.setRenderTarget(E),d=null,u=null,p=null,s=null,y=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(g.width,g.height,!1),A!==null){let ee=A.camera;ee.fov=A.fov,ee.zoom=A.zoom,ee.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,n.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&v&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",G),s.addEventListener("inputsourceschange",oe),_.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(g),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Me=null,he=null;_.depth&&(he=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=_.stencil?ui:oi,Me=_.stencil?Vi:Gn);let Fe={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(Fe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Mn(u.textureWidth,u.textureHeight,{format:Vn,type:yn,depthTexture:new ci(u.textureWidth,u.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let te={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Mn(d.framebufferWidth,d.framebufferHeight,{format:Vn,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),we.setContext(s),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function oe(ee){for(let Se=0;Se<ee.removed.length;Se++){let te=ee.removed[Se],Me=T.indexOf(te);Me>=0&&(T[Me]=null,S[Me].disconnect(te))}for(let Se=0;Se<ee.added.length;Se++){let te=ee.added[Se],Me=T.indexOf(te);if(Me===-1){for(let Fe=0;Fe<S.length;Fe++)if(Fe>=T.length){T.push(te),Me=Fe;break}else if(T[Fe]===null){T[Fe]=te,Me=Fe;break}if(Me===-1)break}let he=S[Me];he&&he.connect(te)}}function Y(ee,Se){Se===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(Se.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let Se=ee.near,te=ee.far;f.texture!==null&&(f.depthNear>0&&(Se=f.depthNear),f.depthFar>0&&(te=f.depthFar)),I.near=D.near=C.near=Se,I.far=D.far=C.far=te,(b!==I.near||z!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),b=I.near,z=I.far),I.layers.mask=ee.layers.mask|6,C.layers.mask=I.layers.mask&-5,D.layers.mask=I.layers.mask&-3;let Me=ee.parent,he=I.cameras;Y(I,Me);for(let Fe=0;Fe<he.length;Fe++)Y(he[Fe],Me);I.projectionMatrix.copy(C.projectionMatrix),I.projectionMatrixInverse.copy(C.projectionMatrixInverse),A===null&&ee.isPerspectiveCamera&&(A={camera:ee,fov:ee.fov,zoom:ee.zoom}),J(ee,I,Me)};function J(ee,Se,te){te===null?ee.matrix.copy(Se.matrixWorld):(ee.matrix.copy(te.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(Se.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(Se.projectionMatrix),ee.projectionMatrixInverse.copy(Se.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Li*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(ee){c=ee,u!==null&&(u.fixedFoveation=ee),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ee)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(I)},this.getCameraTexture=function(ee){return m[ee]};let de=null;function Ne(ee,Se){if(h=Se.getViewerPose(l||o),x=Se,h!==null){let te=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Me=!1;te.length!==I.cameras.length&&(I.cameras.length=0,Me=!0);for(let pe=0;pe<te.length;pe++){let _e=te[pe],De=null;if(d!==null)De=d.getViewport(_e);else{let ge=p.getViewSubImage(u,_e);De=ge.viewport,pe===0&&(e.setRenderTargetTextures(y,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(y))}let V=N[pe];V===void 0&&(V=new rn,V.layers.enable(pe),V.viewport=new Ut,N[pe]=V),V.matrix.fromArray(_e.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(_e.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(De.x,De.y,De.width,De.height),pe===0&&(I.matrix.copy(V.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Me===!0&&I.cameras.push(V)}let he=s.enabledFeatures;if(he&&he.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){p=n.getBinding();let pe=p.getDepthInformation(te[0]);pe&&pe.isValid&&pe.texture&&f.init(pe,s.renderState)}if(he&&he.includes("camera-access")&&v){e.state.unbindTexture(),p=n.getBinding();for(let pe=0;pe<te.length;pe++){let _e=te[pe].camera;if(_e){let De=m[_e];De||(De=new gr,m[_e]=De);let V=p.getCameraImage(_e);De.sourceTexture=V}}}}for(let te=0;te<S.length;te++){let Me=T[te],he=S[te];Me!==null&&he!==void 0&&he.update(Me,Se,l||o)}de&&de(ee,Se),Se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Se}),x=null}let we=new Pu;we.setAnimationLoop(Ne),this.setAnimationLoop=function(ee){de=ee},this.dispose=function(){}}},mx=new Pt,zu=new ht;zu.set(-1,0,0,0,1,0,0,0,1);function gx(i,e){function t(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,yl(i)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function s(f,m,_,E,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(f,m):m.isMeshLambertMaterial?(r(f,m),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(f,m),p(f,m)):m.isMeshPhongMaterial?(r(f,m),h(f,m),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(f,m),u(f,m),m.isMeshPhysicalMaterial&&d(f,m,y)):m.isMeshMatcapMaterial?(r(f,m),x(f,m)):m.isMeshDepthMaterial?r(f,m):m.isMeshDistanceMaterial?(r(f,m),v(f,m)):m.isMeshNormalMaterial?r(f,m):m.isLineBasicMaterial?(o(f,m),m.isLineDashedMaterial&&a(f,m)):m.isPointsMaterial?c(f,m,_,E):m.isSpriteMaterial?l(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,t(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===qt&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,t(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===qt&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,t(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,t(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let _=e.get(m),E=_.envMap,y=_.envMapRotation;E&&(f.envMap.value=E,f.envMapRotation.value.setFromMatrix4(mx.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(zu),f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,f.aoMapTransform))}function o(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform))}function a(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function c(f,m,_,E){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*_,f.scale.value=E*.5,m.map&&(f.map.value=m.map,t(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function l(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function p(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function u(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function d(f,m,_){f.ior.value=m.ior,m.diffuseRoughness>0&&(f.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qt&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.retroreflectivity>0&&(f.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,f.specularIntensityMapTransform))}function x(f,m){m.matcap&&(f.matcap.value=m.matcap)}function v(f,m){let _=e.get(m).light;f.referencePosition.value.setFromMatrixPosition(_.matrixWorld),f.nearDistance.value=_.shadow.camera.near,f.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xx(i,e,t,n){let s={},r={};function o(_,E){let y=E.program;n.uniformBlockBinding(_,y,s[_.id])}function a(_,E){let y=s[_.id];y===void 0&&(x(_),y=c(_),s[_.id]=y,_.addEventListener("dispose",f));let S=E.program;n.updateUBOMapping(_,S);let T=e.render.frame;r[_.id]!==T&&(l(_),r[_.id]=T)}function c(_){let E=i.createBuffer(),y=_.__size,S=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,y,S),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function l(_){let E=s[_.id],y=_.uniforms,S=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,g=y.length;T<g;T++){let M=y[T];if(Array.isArray(M))for(let A=0,C=M.length;A<C;A++)h(M[A],T,A,S);else h(M,T,0,S)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,E,y,S){if(u(_,E,y,S)===!0){let T=_.__offset,g=_.value;if(Array.isArray(g)){let M=0;for(let A=0;A<g.length;A++){let C=g[A],D=v(C,!0);p(C,_.__data,M),M+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else p(g,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,_.__data)}}function p(_,E,y){typeof _=="number"||typeof _=="boolean"?E[y]=_:_.isMatrix3?(E[y]=_.elements[0],E[y+1]=_.elements[1],E[y+2]=_.elements[2],E[y+3]=0,E[y+4]=_.elements[3],E[y+5]=_.elements[4],E[y+6]=_.elements[5],E[y+7]=0,E[y+8]=_.elements[6],E[y+9]=_.elements[7],E[y+10]=_.elements[8],E[y+11]=0):ArrayBuffer.isView(_)?E.set(_.subarray(0,E.length-y),y):_.toArray(E,y)}function u(_,E,y,S){let T=_.value,g=E+"_"+y;if(Array.isArray(T)){S[g]===void 0&&(S[g]=[]);let M=S[g],A=!1;for(let C=0;C<T.length;C++)d(T[C],M,C)===!0&&(A=!0);return A}return d(T,S,g)}function d(_,E,y){if(E[y]===void 0)return typeof _=="number"||typeof _=="boolean"?E[y]=_:ArrayBuffer.isView(_)?E[y]=_.slice():E[y]=_.clone(),!0;{let S=E[y];if(typeof _=="number"||typeof _=="boolean"){if(S!==_)return E[y]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(S.equals(_)===!1)return S.copy(_),!0}}return!1}function x(_){let E=_.uniforms,y=0,S=16;for(let g=0,M=E.length;g<M;g++){let A=Array.isArray(E[g])?E[g]:[E[g]];for(let C=0,D=A.length;C<D;C++){let N=A[C],I=Array.isArray(N.value)?N.value:[N.value],b=Array.isArray(E[g])||Array.isArray(N.value),z=y;for(let G=0,oe=I.length;G<oe;G++){let Y=I[G],J=v(Y,b),de=y%S,Ne=de%J.boundary,we=de+Ne;y+=Ne,we!==0&&S-we<J.storage&&(y+=S-we),G===0&&(z=y),y+=J.storage}let B=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new B((y-z)/Float32Array.BYTES_PER_ELEMENT),N.__offset=z}}let T=y%S;return T>0&&(y+=S-T),_.__size=y,_.__cache={},this}function v(_,E){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=16,y.storage=48):_.isMatrix4?(y.boundary=16,y.storage=64):_.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):at("WebGLRenderer: Unsupported uniform value type.",_),E===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function f(_){let E=_.target;E.removeEventListener("dispose",f),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(let _ in s)i.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:m}}var _x=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Kn=null;function yx(){return Kn===null&&(Kn=new dr(_x,16,16,Ti,kn),Kn.name="DFG_LUT",Kn.minFilter=pn,Kn.magFilter=pn,Kn.wrapS=Xn,Kn.wrapT=Xn,Kn.generateMipmaps=!1,Kn.needsUpdate=!0),Kn}var Ka=class{constructor(e={}){let{canvas:t=Jh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=yn}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;let v=d,f=new Set([_a,xa,ga]),m=new Set([yn,Gn,Is,Vi,fa,pa]),_=new Uint32Array(4),E=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},S=null,T=null,g=[],M=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,N=null,I=null,b=null,z=null;this._outputColorSpace=St;let B=0,G=0,oe=null,Y=-1,J=null,de=new Ut,Ne=new Ut,we=null,ee=new Ve(0),Se=0,te=t.width,Me=t.height,he=1,Fe=null,rt=null,pe=new Ut(0,0,te,Me),_e=new Ut(0,0,te,Me),De=!1,V=new yi,ge=new ko,ie=!1,F=!1,W=new Pt,k=new P,re=new Ut,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Re=!1;function Ee(){return oe===null?he:1}let O=n;function Ze(R,q){return t.getContext(R,q)}let Xe,ot,Ce,ft,Ge,ke,L,w,K,Ae,ve,X,Q,$,j,me,H,ae,Z,Pe,Te,Ue,$e;try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oa}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",xe,!1),O===null){let q="webgl2";if(O=Ze(q,R),O===null)throw Ze(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ne()}catch(R){throw t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),ct("WebGLRenderer: "+R.message),R}function ne(){Xe=new P0(O),Xe.init(),Te=new dx(O,Xe),ot=new y0(O,Xe,e,Te),Ce=new hx(O,Xe),ot.reversedDepthBuffer&&u&&Ce.buffers.depth.setReversed(!0),I=O.createFramebuffer(),b=O.createFramebuffer(),z=O.createFramebuffer(),ft=new D0(O),Ge=new $g,ke=new ux(O,Xe,Ce,Ge,ot,Te,ft),L=new C0(C),w=new Uf(O),Ue=new x0(O,w),K=new I0(O,w,ft,Ue),Ae=new U0(O,K,w,Ue,ft),ae=new N0(O,ot,ke),j=new v0(Ge),ve=new Jg(C,L,Xe,ot,Ue,j),X=new gx(C,Ge),Q=new Qg,$=new sx(Xe),H=new g0(C,L,Ce,Ae,x,c),me=new lx(C,Ae,ot),$e=new xx(O,ft,ot,Ce),Z=new _0(O,Xe,ft),Pe=new L0(O,Xe,ft),ft.programs=ve.programs,C.capabilities=ot,C.extensions=Xe,C.properties=Ge,C.renderLists=Q,C.shadowMap=me,C.state=Ce,C.info=ft}v!==yn&&(A=new H0(v,t.width,t.height,a,s,r));let U=new Ll(C,O);this.xr=U,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let R=Xe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Xe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(R){R!==void 0&&(he=R,this.setSize(te,Me,!1))},this.getSize=function(R){return R.set(te,Me)},this.setSize=function(R,q,fe=!0){if(U.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}te=R,Me=q,t.width=Math.floor(R*he),t.height=Math.floor(q*he),fe===!0&&(t.style.width=R+"px",t.style.height=q+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(te*he,Me*he).floor()},this.setDrawingBufferSize=function(R,q,fe){te=R,Me=q,he=fe,t.width=Math.floor(R*fe),t.height=Math.floor(q*fe),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(v===yn){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(de)},this.getViewport=function(R){return R.copy(pe)},this.setViewport=function(R,q,fe,se){R.isVector4?pe.set(R.x,R.y,R.z,R.w):pe.set(R,q,fe,se),Ce.viewport(de.copy(pe).multiplyScalar(Ee()).round())},this.getScissor=function(R){return R.copy(_e)},this.setScissor=function(R,q,fe,se){R.isVector4?_e.set(R.x,R.y,R.z,R.w):_e.set(R,q,fe,se),Ce.scissor(Ne.copy(_e).multiplyScalar(Ee()).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(R){Ce.setScissorTest(De=R)},this.setOpaqueSort=function(R){Fe=R},this.setTransparentSort=function(R){rt=R},this.getClearColor=function(R){return R.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor(...arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,fe=!0){let se=0;if(R){let le=!1;if(oe!==null){let Be=oe.texture.format;le=f.has(Be)}if(le){let Be=oe.texture.type,Ke=m.has(Be),Oe=H.getClearColor(),ze=H.getClearAlpha(),it=Oe.r,lt=Oe.g,xt=Oe.b;Ke?(_[0]=it,_[1]=lt,_[2]=xt,_[3]=ze,O.clearBufferuiv(O.COLOR,0,_)):(E[0]=it,E[1]=lt,E[2]=xt,E[3]=ze,O.clearBufferiv(O.COLOR,0,E))}else se|=O.COLOR_BUFFER_BIT}q&&(se|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(se|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&O.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),N=R},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),H.dispose(),Q.dispose(),$.dispose(),ke.dispose(),Ge.dispose(),L.dispose(),Ae.dispose(),K.dispose(),Ue.dispose(),$e.dispose(),ve.dispose(),U.dispose(),U.removeEventListener("sessionstart",qi),U.removeEventListener("sessionend",Yi),wn.stop()};function ce(R){R.preventDefault(),pl("WebGLRenderer: Context Lost."),D=!0}function be(){pl("WebGLRenderer: Context Restored."),D=!1;let R=ft.autoReset,q=me.enabled,fe=me.autoUpdate,se=me.needsUpdate,le=me.type;ne(),ft.autoReset=R,me.enabled=q,me.autoUpdate=fe,me.needsUpdate=se,me.type=le}function xe(R){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function et(R){let q=R.target;q.removeEventListener("dispose",et),nt(q)}function nt(R){yt(R),Ge.remove(R)}function yt(R){let q=Ge.get(R).programs;q!==void 0&&(q.forEach(function(fe){ve.releaseProgram(fe)}),R.isShaderMaterial&&ve.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,fe,se,le,Be){q===null&&(q=ye);let Ke=le.isMesh&&le.matrixWorld.determinantAffine()<0,Oe=to(R,q,fe,se,le);Ce.setMaterial(se,Ke);let ze=fe.index,it=1;if(se.wireframe===!0){if(ze=K.getWireframeAttribute(fe),ze===void 0)return;it=2}let lt=fe.drawRange,xt=fe.attributes.position,Ye=lt.start*it,vt=(lt.start+lt.count)*it;Be!==null&&(Ye=Math.max(Ye,Be.start*it),vt=Math.min(vt,(Be.start+Be.count)*it)),ze!==null?(Ye=Math.max(Ye,0),vt=Math.min(vt,ze.count)):xt!=null&&(Ye=Math.max(Ye,0),vt=Math.min(vt,xt.count));let zt=vt-Ye;if(zt<0||zt===1/0)return;Ue.setup(le,se,Oe,fe,ze);let At,wt=Z;if(ze!==null&&(At=w.get(ze),wt=Pe,wt.setIndex(At)),le.isMesh)se.wireframe===!0?(Ce.setLineWidth(se.wireframeLinewidth*Ee()),wt.setMode(O.LINES)):wt.setMode(O.TRIANGLES);else if(le.isLine){let $t=se.linewidth;$t===void 0&&($t=1),Ce.setLineWidth($t*Ee()),le.isLineSegments?wt.setMode(O.LINES):le.isLineLoop?wt.setMode(O.LINE_LOOP):wt.setMode(O.LINE_STRIP)}else le.isPoints?wt.setMode(O.POINTS):le.isSprite&&wt.setMode(O.TRIANGLES);if(le.isBatchedMesh)if(Xe.get("WEBGL_multi_draw"))wt.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{let $t=le._multiDrawStarts,Qe=le._multiDrawCounts,Kt=le._multiDrawCount,Ie=ze?w.get(ze).bytesPerElement:1,Je=Ge.get(se).currentProgram.getUniforms();for(let st=0;st<Kt;st++)Je.setValue(O,"_gl_DrawID",st),wt.render($t[st]/Ie,Qe[st])}else if(le.isInstancedMesh)wt.renderInstances(Ye,zt,le.count);else if(fe.isInstancedBufferGeometry){let $t=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Qe=Math.min(fe.instanceCount,$t);wt.renderInstances(Ye,zt,Qe)}else wt.render(Ye,zt)};function sn(R,q,fe,se){N!==null&&R.isNodeMaterial&&N.setObject(se,R),ie===!0&&j.setState(R,fe,!1),R.transparent===!0&&R.side===Wt&&R.forceSinglePass===!1?(R.side=qt,R.needsUpdate=!0,Nn(R,q,se),R.side=Jn,R.needsUpdate=!0,Nn(R,q,se),R.side=Wt):Nn(R,q,se)}this.compile=function(R,q,fe=null){fe===null&&(fe=R),N!==null&&N.renderStart(R,q,fe),T=$.get(fe),T.init(q),M.push(T),fe.traverseVisible(function(le){le.isLight&&le.layers.test(q.layers)&&(T.pushLight(le),le.castShadow&&T.pushShadow(le))}),R!==fe&&R.traverseVisible(function(le){le.isLight&&le.layers.test(q.layers)&&(T.pushLight(le),le.castShadow&&T.pushShadow(le))}),T.setupLights(),N!==null&&N.updateLights(T.state.lightsArray),F=this.localClippingEnabled,ie=j.init(this.clippingPlanes,F),ie===!0&&j.setGlobalState(this.clippingPlanes,q),N!==null&&me.render(T.state.shadowsArray,fe,q);let se=new Set;return R.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;let Be=le.material;if(Be)if(Array.isArray(Be))for(let Ke=0;Ke<Be.length;Ke++){let Oe=Be[Ke];sn(Oe,fe,q,le),se.add(Oe)}else sn(Be,fe,q,le),se.add(Be)}),T=M.pop(),N!==null&&N.renderEnd(),se},this.compileAsync=function(R,q,fe=null){let se=this.compile(R,q,fe);return new Promise(le=>{function Be(){if(se.forEach(function(Ke){let ze=Ge.get(Ke).currentProgram;(ze===void 0||ze.isReady())&&se.delete(Ke)}),se.size===0){le(R);return}setTimeout(Be,10)}Xe.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let ut=null;function jn(R){ut&&ut(R)}function qi(){wn.stop()}function Yi(){wn.start()}let wn=new Pu;wn.setAnimationLoop(jn),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(R){ut=R,U.setAnimationLoop(R),R===null?wn.stop():wn.start()},U.addEventListener("sessionstart",qi),U.addEventListener("sessionend",Yi),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;N!==null&&N.renderStart(R,q);let fe=U.enabled===!0&&U.isPresenting===!0,se=A!==null&&(oe===null||fe)&&A.begin(C,oe);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(U.cameraAutoUpdate===!0&&U.updateCamera(q),q=U.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,q,oe),T=$.get(R,M.length),T.init(q),T.state.textureUnits=ke.getTextureUnits(),M.push(T),W.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),q.isArrayCamera?ge.setFromArrayCamera(q):V.setFromProjectionMatrix(W,An,q.reversedDepth),F=this.localClippingEnabled,ie=j.init(this.clippingPlanes,F),S=Q.get(R,g.length),S.init(),g.push(S),this.info.render.frame++,U.enabled===!0&&U.isPresenting===!0){let Ke=C.xr.getDepthSensingMesh();Ke!==null&&Zi(Ke,q,-1/0,C.sortObjects)}Zi(R,q,0,C.sortObjects),S.finish(),N!==null&&N.updateLights(T.state.lightsArray),C.sortObjects===!0&&S.sort(Fe,rt),Re=U.enabled===!1||U.isPresenting===!1||U.hasDepthSensing()===!1,Re&&H.addToRenderList(S,R),this.info.autoReset===!0&&this.info.reset(),ie===!0&&j.beginShadows();let le=T.state.shadowsArray;if(me.render(le,R,q),ie===!0&&j.endShadows(),(se&&A.hasRenderPass())===!1){let Ke=S.opaque,Oe=S.transmissive;if(T.setupLights(),q.isArrayCamera){let ze=q.cameras;if(Oe.length>0)for(let it=0,lt=ze.length;it<lt;it++){let xt=ze[it];Ji(Ke,Oe,R,xt)}Re&&H.render(R);for(let it=0,lt=ze.length;it<lt;it++){let xt=ze[it];Os(S,R,xt,xt.viewport)}}else Oe.length>0&&Ji(Ke,Oe,R,q),Re&&H.render(R),Os(S,R,q)}oe!==null&&G===0&&(ke.updateMultisampleRenderTarget(oe),ke.updateRenderTargetMipmap(oe)),se&&A.end(C),R.isScene===!0&&R.onAfterRender(C,R,q),Ue.resetDefaultState(),Y=-1,J=null,M.pop(),M.length>0?(T=M[M.length-1],ke.setTextureUnits(T.state.textureUnits),ie===!0&&j.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,g.pop(),g.length>0?S=g[g.length-1]:S=null,N!==null&&N.renderEnd()};function Zi(R,q,fe,se){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)fe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)T.pushLight(R),R.castShadow&&T.pushShadow(R);else if(R.isSprite){let Ke=q.isArrayCamera?ge:V;if(!R.frustumCulled||R.intersectsFrustum(Ke)){se&&re.setFromMatrixPosition(R.matrixWorld).applyMatrix4(W);let Oe=Ae.update(R),ze=R.material;ze.visible&&S.push(R,Oe,ze,fe,re.z,null,q)}}else if(R.isMesh||R.isLine||R.isPoints){let Ke=q.isArrayCamera?ge:V;if(!R.frustumCulled||R.intersectsFrustum(Ke)){let Oe=Ae.update(R),ze=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),re.copy(R.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),re.copy(Oe.boundingSphere.center)),re.applyMatrix4(R.matrixWorld).applyMatrix4(W)),Array.isArray(ze)){let it=Oe.groups;for(let lt=0,xt=it.length;lt<xt;lt++){let Ye=it[lt],vt=ze[Ye.materialIndex];vt&&vt.visible&&S.push(R,Oe,vt,fe,re.z,Ye,q)}}else ze.visible&&S.push(R,Oe,ze,fe,re.z,null,q)}}}let Be=R.children;for(let Ke=0,Oe=Be.length;Ke<Oe;Ke++)Zi(Be[Ke],q,fe,se)}function Os(R,q,fe,se){let{opaque:le,transmissive:Be,transparent:Ke}=R;T.setupLightsView(fe),ie===!0&&j.setGlobalState(C.clippingPlanes,fe),se&&Ce.viewport(de.copy(se)),le.length>0&&wi(le,q,fe),Be.length>0&&wi(Be,q,fe),Ke.length>0&&wi(Ke,q,fe),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Ji(R,q,fe,se){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[se.id]===void 0){let Ye=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[se.id]=new Mn(1,1,{generateMipmaps:!0,type:Ye?kn:yn,minFilter:hi,samples:Math.max(4,ot.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Et.workingColorSpace})}let Be=T.state.transmissionRenderTarget[se.id],Ke=se.viewport||de;Be.setSize(Ke.z*C.transmissionResolutionScale,Ke.w*C.transmissionResolutionScale);let Oe=C.getRenderTarget(),ze=C.getActiveCubeFace(),it=C.getActiveMipmapLevel();C.setRenderTarget(Be),C.getClearColor(ee),Se=C.getClearAlpha(),Se<1&&C.setClearColor(16777215,.5),C.clear(),Re&&H.render(fe);let lt=C.toneMapping;C.toneMapping=$n;let xt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),T.setupLightsView(se),ie===!0&&j.setGlobalState(C.clippingPlanes,se),wi(R,fe,se),ke.updateMultisampleRenderTarget(Be),ke.updateRenderTargetMipmap(Be),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let vt=0,zt=q.length;vt<zt;vt++){let At=q[vt],{object:wt,geometry:$t,material:Qe,group:Kt}=At;if(Qe.side===Wt&&wt.layers.test(se.layers)){let Ie=Qe.side;Qe.side=qt,Qe.needsUpdate=!0,zs(wt,fe,se,$t,Qe,Kt),Qe.side=Ie,Qe.needsUpdate=!0,Ye=!0}}Ye===!0&&(ke.updateMultisampleRenderTarget(Be),ke.updateRenderTargetMipmap(Be))}C.setRenderTarget(Oe,ze,it),C.setClearColor(ee,Se),xt!==void 0&&(se.viewport=xt),C.toneMapping=lt}function wi(R,q,fe){let se=q.isScene===!0?q.overrideMaterial:null;for(let le=0,Be=R.length;le<Be;le++){let Ke=R[le],{object:Oe,geometry:ze,group:it}=Ke,lt=Ke.material;lt.allowOverride===!0&&se!==null&&(lt=se),Oe.layers.test(fe.layers)&&zs(Oe,q,fe,ze,lt,it)}}function zs(R,q,fe,se,le,Be){N!==null&&le.isNodeMaterial&&N.setObject(R,le),R.onBeforeRender(C,q,fe,se,le,Be),R.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),le.onBeforeRender(C,q,fe,se,R,Be),le.transparent===!0&&le.side===Wt&&le.forceSinglePass===!1?(le.side=qt,le.needsUpdate=!0,C.renderBufferDirect(fe,q,se,le,R,Be),le.side=Jn,le.needsUpdate=!0,C.renderBufferDirect(fe,q,se,le,R,Be),le.side=Wt):C.renderBufferDirect(fe,q,se,le,R,Be),R.onAfterRender(C,q,fe,se,le,Be)}function Gs(R){let q=0;for(let fe of R)fe.texture!==null&&q++;return q}function Nn(R,q,fe){q.isScene!==!0&&(q=ye);let se=Ge.get(R),le=T.state.lights,Be=T.state.shadowsArray,Ke=le.state.version,Oe=ve.getParameters(R,le.state,Be,q,fe,T.state.lightProbeGridArray),ze=ve.getProgramCacheKey(Oe),it=se.programs;se.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?q.environment:null,se.fog=q.fog;let lt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;se.envMap=L.get(R.envMap||se.environment,lt),se.envMapRotation=se.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,it===void 0&&(R.addEventListener("dispose",et),it=new Map,se.programs=it,se.programVariants=new Map);let xt=it.get(ze);if(xt!==void 0){if(se.currentProgram===xt&&se.lightsStateVersion===Ke)return Vs(R,Oe),xt}else Oe.uniforms=ve.getUniforms(R),N!==null&&R.isNodeMaterial&&N.build(R,fe,Oe),R.onBeforeCompile(Oe,C),xt=ve.acquireProgram(Oe,ze),it.set(ze,xt),se.uniforms=Oe.uniforms;let Ye=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=j.uniform),Vs(R,Oe),se.needsLights=Xs(R),se.lightsStateVersion=Ke,se.needsLights&&(Ye.ambientLightColor.value=le.state.ambient,Ye.lightProbe.value=le.state.probe,Ye.sunLights.value=le.state.sun,Ye.sunLightShadows.value=le.state.sunShadow,Ye.directionalLights.value=le.state.directional,Ye.directionalLightShadows.value=le.state.directionalShadow,Ye.spotLights.value=le.state.spot,Ye.spotLightShadows.value=le.state.spotShadow,Ye.rectAreaLights.value=le.state.rectArea,Ye.ltc_1.value=le.state.rectAreaLTC1,Ye.ltc_2.value=le.state.rectAreaLTC2,Ye.pointLights.value=le.state.point,Ye.pointLightShadows.value=le.state.pointShadow,Ye.hemisphereLights.value=le.state.hemi,Ye.sunShadowMatrix.value=le.state.sunShadowMatrix,Ye.sunShadowCascade.value=le.state.sunShadowCascade,Ye.directionalShadowMatrix.value=le.state.directionalShadowMatrix,Ye.spotLightMatrix.value=le.state.spotLightMatrix,Ye.spotLightMap.value=le.state.spotLightMap,Ye.pointShadowMatrix.value=le.state.pointShadowMatrix),se.numLightProbeGrids=Gs(T.state.lightProbeGridArray),se.currentProgram=xt,se.uniformsList=null,xt}function $i(R,q,fe,se,le){let Be=Ge.get(R),Ke=Be.currentProgram.id+","+se+","+le,Oe=Be.programVariants.get(Ke);return Oe===void 0?(Oe=Nn(R,q,fe),Be.programVariants.set(Ke,Oe)):(Be.currentProgram=Oe,Be.uniformsList=null,Be.outputColorSpace=se,Be.toneMapping=le),Oe}function ks(R){if(R.uniformsList===null){let q=R.currentProgram.getUniforms();R.uniformsList=Ls.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Vs(R,q){let fe=Ge.get(R);fe.outputColorSpace=q.outputColorSpace,fe.batching=q.batching,fe.batchingColor=q.batchingColor,fe.instancing=q.instancing,fe.instancingColor=q.instancingColor,fe.instancingMorph=q.instancingMorph,fe.skinning=q.skinning,fe.morphTargets=q.morphTargets,fe.morphNormals=q.morphNormals,fe.morphColors=q.morphColors,fe.morphTargetsCount=q.morphTargetsCount,fe.numClippingPlanes=q.numClippingPlanes,fe.numIntersection=q.numClipIntersection,fe.vertexAlphas=q.vertexAlphas,fe.vertexTangents=q.vertexTangents,fe.toneMapping=q.toneMapping}function to(R,q,fe,se,le){q.isScene!==!0&&(q=ye),ke.resetTextureUnits();let Be=q.fog,Ke=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?q.environment:null,Oe=oe===null?C.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Et.workingColorSpace,ze=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,it=L.get(se.envMap||Ke,ze),lt=se.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,xt=!!fe.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ye=!!fe.morphAttributes.position,vt=!!fe.morphAttributes.normal,zt=!!fe.morphAttributes.color,At=$n;se.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(At=C.toneMapping);let wt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,$t=wt!==void 0?wt.length:0,Qe=Ge.get(se),Kt=T.state.lights;if(ie===!0&&(F===!0||R!==J)){let Ct=R===J&&se.id===Y;j.setState(se,R,Ct)}let Ie=!1,Je=!1;se.version===Qe.__version?Qe.needsLights&&Qe.lightsStateVersion!==Kt.state.version||le.isBatchedMesh&&Qe.batching===!1||!le.isBatchedMesh&&Qe.batching===!0||le.isBatchedMesh&&Qe.batchingColor===!0&&le._colorsTexture===null||le.isBatchedMesh&&Qe.batchingColor===!1&&le._colorsTexture!==null||le.isInstancedMesh&&Qe.instancing===!1||!le.isInstancedMesh&&Qe.instancing===!0||le.isSkinnedMesh&&Qe.skinning===!1||!le.isSkinnedMesh&&Qe.skinning===!0||le.isInstancedMesh&&Qe.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&Qe.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&Qe.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&Qe.instancingMorph===!1&&le.morphTexture!==null||Qe.envMap!==it||se.fog===!0&&Qe.fog!==Be||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==j.numPlanes||Qe.numIntersection!==j.numIntersection)||Qe.vertexAlphas!==lt||Qe.vertexTangents!==xt||Qe.morphTargets!==Ye||Qe.morphNormals!==vt||Qe.morphColors!==zt||Qe.morphTargetsCount!==$t||Qe.numLightProbeGrids!==Gs(T.state.lightProbeGridArray)?Ie=!0:(Qe.outputColorSpace!==Oe||Qe.toneMapping!==At)&&(Je=!0):(Ie=!0,Qe.__version=se.version);let st=Qe.currentProgram;(Ie===!0||Je===!0)&&(st=Je===!0?$i(se,q,le,Oe,At):Nn(se,q,le),N&&se.isNodeMaterial&&N.onUpdateProgram(se,st,Qe));let pt=!1,It=!1,on=!1,gt=st.getUniforms(),Lt=Qe.uniforms;if(Ce.useProgram(st.program)&&(pt=!0,It=!0,on=!0),se.id!==Y&&(Y=se.id,It=!0),pt||J!==R){Ce.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),gt.setValue(O,"projectionMatrix",R.projectionMatrix),gt.setValue(O,"viewMatrix",R.matrixWorldInverse);let Bt=gt.map.cameraPosition;Bt!==void 0&&Bt.setValue(O,k.setFromMatrixPosition(R.matrixWorld)),ot.logarithmicDepthBuffer&&gt.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&gt.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),J!==R&&(J=R,It=!0,on=!0)}if(Qe.needsLights&&(Kt.state.sunShadowMap.length>0&&gt.setValue(O,"sunShadowMap",Kt.state.sunShadowMap,ke),Kt.state.directionalShadowMap.length>0&&gt.setValue(O,"directionalShadowMap",Kt.state.directionalShadowMap,ke),Kt.state.spotShadowMap.length>0&&gt.setValue(O,"spotShadowMap",Kt.state.spotShadowMap,ke),Kt.state.pointShadowMap.length>0&&gt.setValue(O,"pointShadowMap",Kt.state.pointShadowMap,ke)),le.isSkinnedMesh){gt.setOptional(O,le,"bindMatrix"),gt.setOptional(O,le,"bindMatrixInverse");let Ct=le.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),gt.setValue(O,"boneTexture",Ct.boneTexture,ke))}le.isBatchedMesh&&(gt.setOptional(O,le,"batchingTexture"),gt.setValue(O,"batchingTexture",le._matricesTexture,ke),gt.setOptional(O,le,"batchingIdTexture"),gt.setValue(O,"batchingIdTexture",le._indirectTexture,ke),gt.setOptional(O,le,"batchingColorTexture"),le._colorsTexture!==null&&gt.setValue(O,"batchingColorTexture",le._colorsTexture,ke));let Ht=fe.morphAttributes;if((Ht.position!==void 0||Ht.normal!==void 0||Ht.color!==void 0)&&ae.update(le,fe,st),(It||Qe.receiveShadow!==le.receiveShadow)&&(Qe.receiveShadow=le.receiveShadow,gt.setValue(O,"receiveShadow",le.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&q.environment!==null&&(Lt.envMapIntensity.value=q.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=yx()),It){if(gt.setValue(O,"toneMappingExposure",C.toneMappingExposure),Qe.needsLights&&Ws(Lt,on),Be&&se.fog===!0&&X.refreshFogUniforms(Lt,Be),X.refreshMaterialUniforms(Lt,se,he,Me,T.state.transmissionRenderTarget[R.id]),Qe.needsLights&&Qe.numLightProbeGrids>0){let Ct=y,Bt=0;for(let an of T.state.lightProbeGridArray)an.texture!==null&&(Ct.textures[Bt]=an.texture,Ct.min[Bt]=an.boundingBox.min,Ct.max[Bt]=an.boundingBox.max,Ct.resolution[Bt]=an.resolution,Bt++);for(let an in Ct)Ct[an].length=Bt;Lt.probesSH.value=Ct.textures,Lt.probesMin.value=Ct.min,Lt.probesMax.value=Ct.max,Lt.probesResolution.value=Ct.resolution}Ls.upload(O,ks(Qe),Lt,ke)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Ls.upload(O,ks(Qe),Lt,ke),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&gt.setValue(O,"center",le.center),gt.setValue(O,"modelViewMatrix",le.modelViewMatrix),gt.setValue(O,"normalMatrix",le.normalMatrix),gt.setValue(O,"modelMatrix",le.matrixWorld),se.uniformsGroups!==void 0){let Ct=se.uniformsGroups;for(let Bt=0,an=Ct.length;Bt<an;Bt++){let no=Ct[Bt];$e.update(no,st),$e.bind(no,st)}}return st}function Ws(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.sunLights.needsUpdate=q,R.sunLightShadows.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Xs(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(R,q,fe){let se=Ge.get(R);se.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),Ge.get(R.texture).__webglTexture=q,Ge.get(R.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:fe,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){let fe=Ge.get(R);fe.__webglFramebuffer=q,fe.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,fe=0){oe=R,B=q,G=fe;let se=null,le=!1,Be=!1;if(R){let Oe=Ge.get(R);if(Oe.__useDefaultFramebuffer!==void 0){Ce.bindFramebuffer(O.FRAMEBUFFER,Oe.__webglFramebuffer),de.copy(R.viewport),Ne.copy(R.scissor),we=R.scissorTest,Ce.viewport(de),Ce.scissor(Ne),Ce.setScissorTest(we),Y=-1;return}else if(Oe.__webglFramebuffer===void 0)ke.setupRenderTarget(R);else if(Oe.__hasExternalTextures)ke.rebindTextures(R,Ge.get(R.texture).__webglTexture,Ge.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let lt=R.depthTexture;if(Oe.__boundDepthTexture!==lt){if(lt!==null&&Ge.has(lt)&&(R.width!==lt.image.width||R.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(R)}}let ze=R.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Be=!0);let it=Ge.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(it[q])?se=it[q][fe]:se=it[q],le=!0):R.samples>0&&ke.useMultisampledRTT(R)===!1?se=Ge.get(R).__webglMultisampledFramebuffer:Array.isArray(it)?se=it[fe]:se=it,de.copy(R.viewport),Ne.copy(R.scissor),we=R.scissorTest}else de.copy(pe).multiplyScalar(he).floor(),Ne.copy(_e).multiplyScalar(he).floor(),we=De;if(fe!==0&&(se=I),Ce.bindFramebuffer(O.FRAMEBUFFER,se)&&Ce.drawBuffers(R,se),Ce.viewport(de),Ce.scissor(Ne),Ce.setScissorTest(we),le){let Oe=Ge.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+q,Oe.__webglTexture,fe)}else if(Be){let Oe=q;for(let ze=0;ze<R.textures.length;ze++){let it=Ge.get(R.textures[ze]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+ze,it.__webglTexture,fe,Oe)}}else if(R!==null&&fe!==0){let Oe=Ge.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Oe.__webglTexture,fe)}Y=-1};function qs(R){let q=Ge.get(R);return(q.__readFormat!==R.format||q.__readType!==R.type)&&(q.__readFormat=R.format,q.__readType=R.type,q.__formatReadable=ot.textureFormatReadable(R.format),q.__typeReadable=ot.textureTypeReadable(R.type)),q}this.readRenderTargetPixels=function(R,q,fe,se,le,Be,Ke,Oe=0){if(!(R&&R.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Ge.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ke!==void 0&&(ze=ze[Ke],Array.isArray(ze)&&(ze=ze[0])),ze){Ce.bindFramebuffer(O.FRAMEBUFFER,ze);try{let it=R.textures[Oe],lt=it.format,xt=it.type;R.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Oe);let Ye=qs(it);if(Ye.__formatReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-se&&fe>=0&&fe<=R.height-le&&O.readPixels(q,fe,se,le,Te.convert(lt),Te.convert(xt),Be)}finally{let it=oe!==null?Ge.get(oe).__webglFramebuffer:null;Ce.bindFramebuffer(O.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(R,q,fe,se,le,Be,Ke,Oe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Ge.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ke!==void 0&&(ze=ze[Ke],Array.isArray(ze)&&(ze=ze[0])),ze)if(q>=0&&q<=R.width-se&&fe>=0&&fe<=R.height-le){Ce.bindFramebuffer(O.FRAMEBUFFER,ze);let it=R.textures[Oe],lt=it.format,xt=it.type;R.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Oe);let Ye=qs(it);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let vt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,vt),O.bufferData(O.PIXEL_PACK_BUFFER,Be.byteLength,O.STREAM_READ),O.readPixels(q,fe,se,le,Te.convert(lt),Te.convert(xt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let zt=oe!==null?Ge.get(oe).__webglFramebuffer:null;Ce.bindFramebuffer(O.FRAMEBUFFER,zt);let At=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Kh(O,At,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,vt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Be),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(vt),O.deleteSync(At),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,fe=0){let se=Math.pow(2,-fe),le=Math.floor(R.image.width*se),Be=Math.floor(R.image.height*se),Ke=q!==null?q.x:0,Oe=q!==null?q.y:0;ke.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,fe,0,0,Ke,Oe,le,Be),Ce.unbindTexture()},this.copyTextureToTexture=function(R,q,fe=null,se=null,le=0,Be=0){let Ke,Oe,ze,it,lt,xt,Ye,vt,zt,At=R.isCompressedTexture?R.mipmaps[Be]:R.image;if(fe!==null)Ke=fe.max.x-fe.min.x,Oe=fe.max.y-fe.min.y,ze=fe.isBox3?fe.max.z-fe.min.z:1,it=fe.min.x,lt=fe.min.y,xt=fe.isBox3?fe.min.z:0;else{let gt=Math.pow(2,-le);Ke=Math.floor(At.width*gt),Oe=Math.floor(At.height*gt),R.isDataArrayTexture?ze=At.depth:R.isData3DTexture?ze=Math.floor(At.depth*gt):ze=1,it=0,lt=0,xt=0}se!==null?(Ye=se.x,vt=se.y,zt=se.z):(Ye=0,vt=0,zt=0);let wt=Te.convert(q.format),$t=Te.convert(q.type),Qe;q.isData3DTexture?(ke.setTexture3D(q,0),Qe=O.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ke.setTexture2DArray(q,0),Qe=O.TEXTURE_2D_ARRAY):(ke.setTexture2D(q,0),Qe=O.TEXTURE_2D),Ce.activeTexture(O.TEXTURE0),Ce.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,q.flipY),Ce.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Ce.pixelStorei(O.UNPACK_ALIGNMENT,q.unpackAlignment);let Kt=Ce.getParameter(O.UNPACK_ROW_LENGTH),Ie=Ce.getParameter(O.UNPACK_IMAGE_HEIGHT),Je=Ce.getParameter(O.UNPACK_SKIP_PIXELS),st=Ce.getParameter(O.UNPACK_SKIP_ROWS),pt=Ce.getParameter(O.UNPACK_SKIP_IMAGES);Ce.pixelStorei(O.UNPACK_ROW_LENGTH,At.width),Ce.pixelStorei(O.UNPACK_IMAGE_HEIGHT,At.height),Ce.pixelStorei(O.UNPACK_SKIP_PIXELS,it),Ce.pixelStorei(O.UNPACK_SKIP_ROWS,lt),Ce.pixelStorei(O.UNPACK_SKIP_IMAGES,xt);let It=R.isDataArrayTexture||R.isData3DTexture,on=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){let gt=Ge.get(R),Lt=Ge.get(q),Ht=Ge.get(gt.__renderTarget),Ct=Ge.get(Lt.__renderTarget);Ce.bindFramebuffer(O.READ_FRAMEBUFFER,Ht.__webglFramebuffer),Ce.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Bt=0;Bt<ze;Bt++)It&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ge.get(R).__webglTexture,le,xt+Bt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ge.get(q).__webglTexture,Be,zt+Bt)),O.blitFramebuffer(it,lt,it+Ke,lt+Oe,Ye,vt,Ye+Ke,vt+Oe,O.DEPTH_BUFFER_BIT,O.NEAREST);Ce.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(le!==0||R.isRenderTargetTexture||Ge.has(R)){let gt=Ge.get(R),Lt=Ge.get(q);Ce.bindFramebuffer(O.READ_FRAMEBUFFER,b),Ce.bindFramebuffer(O.DRAW_FRAMEBUFFER,z);for(let Ht=0;Ht<ze;Ht++)It?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,gt.__webglTexture,le,xt+Ht):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,gt.__webglTexture,le),on?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Lt.__webglTexture,Be,zt+Ht):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Lt.__webglTexture,Be),le!==0?O.blitFramebuffer(it,lt,it+Ke,lt+Oe,Ye,vt,Ye+Ke,vt+Oe,O.COLOR_BUFFER_BIT,O.NEAREST):on?O.copyTexSubImage3D(Qe,Be,Ye,vt,zt+Ht,it,lt,Ke,Oe):O.copyTexSubImage2D(Qe,Be,Ye,vt,it,lt,Ke,Oe);Ce.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else on?R.isDataTexture||R.isData3DTexture?O.texSubImage3D(Qe,Be,Ye,vt,zt,Ke,Oe,ze,wt,$t,At.data):q.isCompressedArrayTexture?O.compressedTexSubImage3D(Qe,Be,Ye,vt,zt,Ke,Oe,ze,wt,At.data):O.texSubImage3D(Qe,Be,Ye,vt,zt,Ke,Oe,ze,wt,$t,At):R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Be,Ye,vt,Ke,Oe,wt,$t,At.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Be,Ye,vt,At.width,At.height,wt,At.data):O.texSubImage2D(O.TEXTURE_2D,Be,Ye,vt,Ke,Oe,wt,$t,At);Ce.pixelStorei(O.UNPACK_ROW_LENGTH,Kt),Ce.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ie),Ce.pixelStorei(O.UNPACK_SKIP_PIXELS,Je),Ce.pixelStorei(O.UNPACK_SKIP_ROWS,st),Ce.pixelStorei(O.UNPACK_SKIP_IMAGES,pt),Be===0&&q.generateMipmaps===!0&&q.mipmapsAutoUpdate===!0&&O.generateMipmap(Qe),Ce.unbindTexture()},this.initRenderTarget=function(R){Ge.get(R).__webglFramebuffer===void 0&&ke.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ke.setTextureCube(R,0):R.isData3DTexture?ke.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ke.setTexture2DArray(R,0):ke.setTexture2D(R,0),Ce.unbindTexture()},this.resetState=function(){B=0,G=0,oe=null,Ce.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}};var Kr=new P;function Ln(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Kr.copy(e),Kr[n]=0,Kr.normalize();let l=.5*o/(o+a),h=1-Kr.angleTo(i)/c;return Math.sign(Kr[t])===1?h*l:a/(o+a)+l+l*(1-h)}var Us=class i extends He{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new P,l=new P,h=new P(e,t,n).divideScalar(2).subScalar(r),p=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,x=p.length/6,v=new P,f=.5/o;for(let m=0,_=0;m<p.length;m+=3,_+=2)switch(c.fromArray(p,m),l.copy(c),l.x-=Math.sign(l.x)*f,l.y-=Math.sign(l.y)*f,l.z-=Math.sign(l.z)*f,l.normalize(),p[m+0]=h.x*Math.sign(c.x)+l.x*r,p[m+1]=h.y*Math.sign(c.y)+l.y*r,p[m+2]=h.z*Math.sign(c.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/x)){case 0:v.set(1,0,0),d[_+0]=Ln(v,l,"z","y",r,n),d[_+1]=1-Ln(v,l,"y","z",r,t);break;case 1:v.set(-1,0,0),d[_+0]=1-Ln(v,l,"z","y",r,n),d[_+1]=1-Ln(v,l,"y","z",r,t);break;case 2:v.set(0,1,0),d[_+0]=1-Ln(v,l,"x","z",r,e),d[_+1]=Ln(v,l,"z","x",r,n);break;case 3:v.set(0,-1,0),d[_+0]=1-Ln(v,l,"x","z",r,e),d[_+1]=1-Ln(v,l,"z","x",r,n);break;case 4:v.set(0,0,1),d[_+0]=1-Ln(v,l,"x","y",r,e),d[_+1]=1-Ln(v,l,"y","x",r,t);break;case 5:v.set(0,0,-1),d[_+0]=Ln(v,l,"x","y",r,e),d[_+1]=1-Ln(v,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function ec(i){let e=[],t=[],n=I=>(e.push(I),I),s=(I,b=.45,z=.15)=>{let B=new qe({color:I,roughness:b,metalness:z});return t.push(B),B},r=s(15856111,.32,.35),o=s(3949898,.4,.6),a=s(1318690,.65,.1),c=s(12042692,.23,.88),l=s(35440,.35,.32),h=s(15245359,.4,.3),p=s(10825255,.65),u=s(2370349,.94,0),d=new Pn({color:529693,roughness:.13,metalness:.25,clearcoat:1});t.push(d);let x=s(1925213,.24,.15),v=new li().load("/assets/brand/anthrise-official.png",i);v.colorSpace=St;let f=new qe({map:v,roughness:.4});t.push(f);let m=n(new He(1,1,1));function _(I,b,z,B,G,oe,Y,J,de=0){let Ne=new ue(de?n(new Us(G,oe,Y,3,Math.min(de,G*.2,oe*.2,Y*.2))):m,J);return de||Ne.scale.set(G,oe,Y),Ne.position.set(b,z,B),Ne.castShadow=!0,Ne.receiveShadow=!0,I.add(Ne),Ne}function E(I,b,z,B,G,oe,Y,J="y"){let de=new ue(n(new dt(G,G,oe,20)),Y);return de.position.set(b,z,B),J==="x"&&(de.rotation.z=Math.PI/2),J==="z"&&(de.rotation.x=Math.PI/2),de.castShadow=!0,I.add(de),de}function y(I,b,z,B,G){let oe=new ue(n(new Ft(G,G/5.28)),f);oe.position.set(b,z,B),I.add(oe)}function S(I,b,z,B){let G=new xn(b.map(Y=>new P(...Y))),oe=new ue(n(new _n(G,24,z,5,!1)),B);I.add(oe)}function T(I,b,z,B){for(let G of[-b/2+.035,b/2-.035])for(let oe of[-z/2+.035,z/2-.035])E(I,G,oe,B,.009,.007,c,"z")}function g(I,b,z=!1){I.children.filter(J=>J.name.startsWith("Unverified")).forEach(J=>J.removeFromParent());let B=new tt;B.name="CatalogueCalibratedShape",[...I.children].forEach(J=>B.add(J)),I.add(B),B.updateMatrixWorld(!0);let G=new mn().setFromObject(B),oe=G.getSize(new P),Y=G.getCenter(new P);return B.scale.set(b.width/1e3/oe.x,b.height/1e3/oe.y,b.depth/1e3/oe.z),B.position.set(-Y.x*B.scale.x,z?-G.min.y*B.scale.y-.002:-Y.y*B.scale.y,-Y.z*B.scale.z),I.userData.modelStatus="catalogue-size-calibrated illustrative mesh; rear interfaces and installation template unverified",I.userData.isManufacturerCad=!1,I.userData.dimensionCalibrationSource="/assets/product-catalog.js",I.userData.catalogueDimensionsMm=b,I.userData.scaleCalibrated=!0,I}function M(I=!1){let b=new tt;b.name="MeshProduct-ess16",b.userData.modelStatus="illustrative-enlarged; rear ports and fixing details unverified",b.userData.catalogueDimensionsMm={width:480,depth:235,height:874},b.userData.illustrativeBodyDimensionsM={width:.9,depth:.44,height:1.65},_(b,0,.92,0,.9,1.65,.44,o,.07),_(b,0,.92,.223,.865,1.59,.028,r,.012),_(b,0,1.35,.245,.31,.17,.026,c,.012),_(b,0,1.35,.263,.292,.15,.018,d,.008),_(b,0,1.37,.274,.16,.065,.003,x,.001);for(let z=0;z<5;z++)_(b,-.105+z*.052,1.302,.276,.018,.006,.003,r);y(b,.12,.34,.24,.37),S(b,[[-.41,.49,.24],[-.1,.43,.24],[.19,.55,.24],[.4,.6,.24]],.009,l),S(b,[[.03,.52,.241],[.21,.64,.241],[.4,.67,.241]],.007,h);for(let z of[-.456,.456]){_(b,z,1.34,-.02,.009,.16,.17,a,.003);for(let B=0;B<17;B++)_(b,z,.4+B*.017,0,.009,.006,.21,a)}for(let z of[-.32,.32])for(let B of[-.14,.14])_(b,z,.13,B,.1,.1,.1,c,.01),E(b,z,.065,B,.067,.065,u,"x").name="BatteryCasterWheel";for(let[z,B]of[[-.465,p],[-.465,a]])E(b,z,1.5,B===p?-.085:.085,.025,.03,B,"x").name="UnverifiedBatteryPowerTerminal";return _(b,-.465,1.39,0,.02,.035,.05,a,.002).name="UnverifiedBatteryDataPort",I?g(b,{width:480,depth:235,height:874},!0):b}function A(I=!1,b=!1){let z=new tt;z.name=I?"MeshProduct-hybrid50":"MeshProduct-hybrid6";let B=I?1.32:.9,G=I?1.42:1.18,oe=I?.52:.54;z.userData.modelStatus="illustrative-enlarged; original port topology unverified",I||(z.userData.catalogueDimensionsMm={width:330,depth:228,height:433}),_(z,0,0,0,B,G,oe,o,.055),_(z,0,0,oe/2+.006,B*.95,G*.965,.03,r,.012),_(z,.08,-G*.3,oe/2+.026,B*.77,G*.33,.014,o,.006),S(z,[[B*.46,-G*.06,oe/2+.04],[B*.18,-G*.22,oe/2+.04],[-B*.16,-G*.43,oe/2+.04]],.008,l),_(z,0,G*.05,oe/2+.034,B*.31,G*.2,.03,d,.012),_(z,0,G*.075,oe/2+.051,B*.18,G*.065,.003,x),y(z,-B*.07,G*.32,oe/2+.025,B*.43);for(let Y of[-B/2-.004,B/2+.004])for(let J=0;J<15;J++)_(z,Y,-G*.37+J*G*.051,-.03,.009,.012,oe*.7,a);for(let Y=0;Y<6;Y++){let J=-B*.34+Y*B*.136;E(z,J,-G/2-.045,.05,.025,.1,Y===0?p:a).name="UnverifiedInverterPort",E(z,J,-G/2-.1,.05,.019,.03,c).name="UnverifiedInverterCableGland"}return T(z,B*.95,G*.96,oe/2+.028),!I&&b?g(z,{width:330,depth:228,height:433}):z}function C(){let I=new tt;I.name="MeshProduct-horizon",_(I,0,1.36,0,1.22,2.35,1.05,r,.035),_(I,0,2.46,0,1.26,.1,1.09,l,.014),_(I,-.1,1.37,.537,.92,2.1,.025,r,.01),_(I,.32,1.42,.56,.025,.22,.04,o,.003),_(I,.4,1.6,.56,.06,.08,.02,h,.005),y(I,-.18,2.12,.558,.55);for(let b=0;b<12;b++)_(I,-.2,.39+b*.027,.559,.57,.012,.008,o);_(I,.73,1.64,0,.32,.85,.78,o,.025);for(let b=0;b<10;b++)_(I,.9,1.28+b*.07,0,.01,.02,.66,a);for(let b of[-.43,.43])for(let z of[-.35,.35])_(I,b,.12,z,.14,.22,.14,o,.015);for(let[b,z]of[[-.08,p],[.08,a]])E(I,b,.45,.55,.025,.07,z,"z");return I}function D(){let I=new tt;I.name="MeshProduct-volt1000",_(I,0,.34,0,.9,.63,.54,o,.05),_(I,0,.34,.277,.84,.55,.025,r,.012),_(I,0,.67,0,.56,.065,.07,a,.018);for(let b of[-.25,.25])_(I,b,.61,0,.06,.12,.07,a,.015);_(I,-.06,.45,.297,.31,.13,.012,d,.008),_(I,-.06,.455,.307,.18,.055,.003,x),E(I,.27,.46,.305,.047,.02,o,"z");for(let b of[-.26,-.08,.1])_(I,b,.22,.304,.13,.14,.008,o,.005),_(I,b-.025,.235,.313,.012,.03,.003,a),_(I,b+.025,.235,.313,.012,.03,.003,a),_(I,b,.198,.313,.02,.012,.003,a);for(let b of[.26,.32])for(let z of[.25,.32])_(I,z,b,.305,.04,.017,.006,a);for(let b of[-.456,.456])for(let z=0;z<11;z++)_(I,b,.14+z*.035,0,.008,.012,.33,a);E(I,.465,.28,0,.026,.035,h,"x");for(let b of[-.3,.3])for(let z of[-.17,.17])_(I,b,.02,z,.1,.04,.08,u,.006);return S(I,[[-.4,.075,.294],[0,.062,.294],[.4,.075,.294]],.008,l),I}function N(){let I=new tt;I.name="MeshProduct-seed24",_(I,0,.36,0,1.02,.64,.63,a,.026),_(I,0,.7,0,1.05,.07,.66,o,.015),_(I,0,.02,0,1.04,.04,.65,a,.008);for(let[b,z]of[[-.35,p],[.35,a]])E(I,b,.77,-.13,.045,.08,z),E(I,b,.82,-.13,.025,.03,c);_(I,0,.36,.321,.84,.4,.005,r,.001),y(I,0,.45,.328,.62),_(I,0,.25,.329,.83,.13,.004,l);for(let b of[-.54,.54])_(I,b,.54,0,.04,.2,.1,o,.005),E(I,b,.44,0,.035,.28,u,"z");return I}return{battery:M,inverter:A,cabinet:C,portable:D,seed:N,box:_,material:s,dispose(){e.forEach(I=>I.dispose()),t.forEach(I=>I.dispose()),v.dispose()}}}var tc=4.4;function nc(){return new xn([[-85,0,10.6],[-28,0,10.6],[-15,0,10.8],[-5,0,10.3],[5,0,7.3],[15,0,4.9],[26,0,4.6],[35,0,8.8],[85,0,12.8]].map(i=>new P(i[0],i[1],i[2])),!1,"centripetal")}var Fs={inverterDc:[-15.85,1.77,4.49],inverterAc:[-15.75,1.77,4.49],inverterComms:[-15.8,1.81,4.5],batteryRearService:[-14.34,.87,4.56],batteryRearComms:[-14.31,.83,4.54]};function Gu(){let i=[Fs.inverterDc,[-15.85,1.54,4.43],[-14.78,1.54,4.43],[-14.78,.9,4.43],[-14.43,.9,4.54],Fs.batteryRearService];return{"z1-pv-inv":[[-12.5,4.6,2.9],[-12.5,4.1,4.43],[-16.15,4.1,4.43],[-16.15,2.12,4.43],[-15.85,2.12,4.43],Fs.inverterDc],"z1-inv-bat-day":i,"z1-bat-inv-night":[...i].reverse(),"z1-bms":[Fs.inverterComms,[-15.8,1.42,4.45],[-14.68,1.42,4.45],[-14.68,.83,4.45],Fs.batteryRearComms],"z1-inv-ac-loads":[Fs.inverterAc,[-15.75,1.58,4.43],[-17.72,1.58,4.43],[-17.72,2.1,4.43],[-17.72,2.1,2.15],[-17.72,3.38,2.15],[-12.25,3.38,2.15],[-8.9,3.38,2.15],[-8.9,2.9,-.35]],"z1-grid":[[-21.1,6.2,.9],[-17.72,4.1,.9],[-17.72,2.1,.9],[-17.72,2.1,2.15]]}}function Dl(i){let e=[[17.9,i+1.5,16.55],[18.28,i+.9,16.55],[18.55,i+.9,16.72],[18.55,i+1.3,16.72]];return{...Gu(),"z2-pv-inv":[[17.2,5.85,-7.2],[15.6,5.6,-4.2],[15.6,2.85,-4.2],[15.2,2.85,-3.4],[15.2,1,-3.4]],"z2-inv-bat-day":[[15.2,1,-3.4],[15.2,.5,-2.83],[12.2,.5,-2.83],[12.2,.65,-2.9]],"z2-bat-inv-night":[[12.2,.65,-2.9],[12.2,.5,-2.83],[15.2,.5,-2.83],[15.2,1,-3.4]],"z2-ac-loads":[[16,1,-3.4],[16,.48,-2.83],[17.7,.48,-2.83],[17.7,1.8,-2.9],[17.7,4.8,-4.2],[24.2,4.8,-4.2],[24.2,4.9,-6.2]],"z2-grid":[[8.5,6.8,-11.5],[14.5,5,-7.2],[17.7,5,-4.2],[17.7,1.8,-2.9]],"z3-pv-storage":[[15.8,i+1.45,14.6],[16.1,i+.4,15.8],[17.9,i+.4,16.55],[17.9,i+1.5,16.55]],"z3-controller-seed":e,"z3-bat-night":[[18.55,i+1.3,16.72],[18.55,i+.7,16.65],[20.4,i+.7,16.65],[20.4,i+1.4,13.47]],"z3-portable-pv":[[23,i+.8,18.8],[23,i+.4,18.8],[22,i+.4,17.25],[22.015,i+.76,17.25]],"z3-field-loads":[[21.47,i+.7,17.563],[21.47,i+.5,17.563],[22.4,i+.5,17.55],[22.4,i+.5,14.4],[22.4,i+1.3,14.4]]}}function ic(i,e=0){let t=new Ms,n=i.map(r=>new P(...r)),s=n[0];for(let r=1;r<n.length-1;r++){let o=n[r-1],a=n[r],c=n[r+1],l=Math.min(e,a.distanceTo(o)*.32,a.distanceTo(c)*.32);if(l<=0){t.add(new Ei(s,a)),s=a;continue}let h=a.clone().add(o.clone().sub(a).normalize().multiplyScalar(l)),p=a.clone().add(c.clone().sub(a).normalize().multiplyScalar(l));t.add(new Ei(s,h)),t.add(new Ui(h,a,p)),s=p}return t.add(new Ei(s,n[n.length-1])),t}function ku(i){let e=new tt;e.name="PhysicalCableHarness";let t=[],n=[],s=u=>{let d=new qe({color:u,roughness:.75});return n.push(d),d},r=s(7831421),o=s(10301480),a=s(2239276),c=s(1203278),l=s(9675316);for(let[u,d]of Object.entries(Dl(i))){if(u.endsWith("night")&&u!=="z3-bat-night")continue;let x=u.includes("pv")||u.includes("bat")||u.includes("controller"),v=u.startsWith("z1-");for(let f=0;f<(x?2:1);f++){let m=v?.0125:.027,_=d.map(T=>[T[0]+(x?f===0?-m:m:0),T[1],T[2]]);u==="z3-controller-seed"&&(_[_.length-1]=[f===0?18.55:19.25,i+1.3,16.72]),u==="z3-bat-night"&&(_[0]=[f===0?18.55:19.25,i+1.3,16.72]);let E=v?u.includes("bms")?.004:x?.0085:.019:u.includes("bms")?.012:x?.018:.028,y=new _n(ic(_,v?.065:0),Math.max(16,d.length*12),E,8,!1);t.push(y);let S=new ue(y,u.includes("bms")?c:x?f?a:o:r);S.name="Cable-"+u+"-"+f,S.castShadow=!0,e.add(S),v&&(S.userData.endpoints="architectural service zones; product interfaces unverified")}}let h=[[-14.78,.7,4.445],[-14.78,.4,4.445],[-17.72,.4,4.445],[-17.72,1.65,2.15]],p=new _n(ic(h),45,.013,6,!1);t.push(p),e.add(new ue(p,l));for(let[u,d,x]of[[17.9,i+1.5,16.55]]){let v=new He(.21,.28,.13);t.push(v);let f=new ue(v,r);f.position.set(u,d,x),f.castShadow=!0,e.add(f);let m=new He(.055,.09,.03);t.push(m);let _=new ue(m,o);_.position.set(u,d,x+.08),e.add(_)}return{group:e,dispose(){t.forEach(u=>u.dispose()),n.forEach(u=>u.dispose())}}}var Vu=i=>i.userData,vx={overview:new P(5.6,1,4.2),home:new P(-11.5,1,2),commercial:new P(18.5,1,-7.8),offgrid:new P(18,1,19.2)};function Dn(i,e,t=0){Object.assign(i.userData,{lightingRegion:e,overviewPriority:t})}function Ex(i,e,t){let n=Math.max(0,Math.min(i.length,Math.floor(t)));if(n===i.length)return i.slice();let s=new P,r=i.map((c,l)=>({light:c,index:l,distance:c.getWorldPosition(s).distanceToSquared(vx[e]),priority:Number(Vu(c).overviewPriority??0)}));if(r.sort((c,l)=>e==="overview"?c.priority-l.priority||c.distance-l.distance||c.index-l.index:c.distance-l.distance||c.index-l.index),e!=="overview")return r.slice(0,n).map(c=>c.light);let o=[],a=["home","road","offgrid","commercial","road","home","offgrid"];for(let c of a){if(o.length>=n)break;let l=r.find(({light:h})=>Vu(h).lightingRegion===c&&!o.includes(h));l&&o.push(l.light)}for(let{light:c}of r){if(o.length>=n)break;o.includes(c)||o.push(c)}return o}function Wu(i,e,t){let n=new Set(Ex(i,e,t));for(let s of i)s.visible=n.has(s)}function Xu(i,e,t){let n=new tt;n.name="HomeArchitectureEntityDetails",i.add(n);let s=new tt;s.name="HomeEaveDrainageDetails",e.add(s);let r=[],o=[],a=new Map,c=F=>(r.push(F),F),l=(F,W=.85,k=0)=>{let re=new qe({color:F,roughness:W,metalness:k});return o.push(re),re},h=l(13551804,.94),p=l(12624251,.86),u=l(15065299,.93),d=l(11380893,1),x=l(7632235,.97),v=l(1318432,.95),f={stone:h,wood:p,plaster:u},m=F=>{let W=Math.sin(F*137.2+14.7)*43217.72;return W-Math.floor(W)};function _(F){let W=F.getAttribute("position"),k=F.getAttribute("normal");if(!W||!k)throw new Error("Home detail geometry requires positions and normals");let re=[];for(let ye=0;ye<W.count;ye++){let Re=Math.abs(k.getX(ye)),Ee=Math.abs(k.getY(ye)),O=Math.abs(k.getZ(ye));Ee>=Re&&Ee>=O?re.push(W.getX(ye),W.getZ(ye)):Re>=O?re.push(W.getZ(ye),W.getY(ye)):re.push(W.getX(ye),W.getY(ye))}return F.setAttribute("uv",new je(re,2)),F.setAttribute("uv1",new je(re,2)),F}let E=c(new He(1,1,1));function y(F,W,k,re,ye=0,Re=0,Ee=0){let O=new ue(k,re);return O.name=W,O.position.set(ye,Re,Ee),O.castShadow=!0,O.receiveShadow=!0,F.add(O),O}function S(F,W,k,re,ye,Re,Ee,O,Ze){let Xe=Ze===p||Ze===h||Ze===u,ot=y(F,W,Xe?c(_(new He(Re,Ee,O))):E,Ze,k,re,ye);return Xe||ot.scale.set(Re,Ee,O),ot}function T(F,W,k,re,ye,Re=16){return y(F,W,c(new _n(new xn(k),Re,re,8,!1)),ye)}function g(F,W,k){for(let Re of[F-k/2,F+k/2])S(n,"LivingGlassSash-Stile",Re,(.145+3.055)/2,W,.045,3.055-.145,.062,t.frame),S(n,"LivingGlassSash-Gasket",Re+(Re<F?.024:-.024),1.6,W-.028,.012,2.79,.017,v);for(let Re of[.145+.025,3.055-.025])S(n,"LivingGlassSash-Rail",F,Re,W,k,.055,.065,t.frame),S(n,"LivingGlassSash-HorizontalSeal",F,Re+(Re<1?.032:-.032),W-.025,k-.085,.012,.018,v)}g(3.675,2.476,1.65),g(5.325,2.493,1.65);let M=T(n,"LivingSlidingDoor-UShapedPull",[new P(4.55,1,2.535),new P(4.55,1.035,2.605),new P(4.55,1.285,2.605),new P(4.55,1.32,2.535)],.013,t.silver,12);M.userData.architecturalIllustration=!0;for(let F of[1.01,1.31])S(n,"DoorPull-Seat",4.55,F,2.532,.048,.045,.017,t.frame);let A=new kt;A.moveTo(-.092,0),A.lineTo(.092,0),A.lineTo(.092,.043),A.lineTo(.078,.043),A.lineTo(.078,.012),A.lineTo(.008,.012),A.lineTo(.008,.038),A.lineTo(-.008,.038),A.lineTo(-.008,.012),A.lineTo(-.078,.012),A.lineTo(-.078,.043),A.lineTo(-.092,.043),A.closePath();let C=c(new en(A,{depth:7.1,steps:1,bevelEnabled:!1}));C.rotateY(Math.PI/2),C.translate(-3.55,0,0),y(n,"LivingBay-TwinSlidingTrack",C,t.silver,2.8,.133,2.49);let D=y(n,"LivingBay-HeadTrackChannels",C,t.frame,2.8,3.045,2.49);D.rotation.z=Math.PI;for(let F of[-.73,6.23])S(n,"LivingBay-JambReveal",F,1.55,2.35,.13,3,.23,u);S(n,"LivingBay-LintelShadowReveal",2.8,3.025,2.285,7.1,.027,.11,v),S(n,"LivingBay-ThresholdStone",2.8,.083,2.81,7.4,.032,.57,h),S(n,"LivingBay-ThresholdDripLip",2.8,.07,3.09,7.4,.022,.033,h);for(let F of[-1.26,0,1.26])S(n,"TechnicalWindow-OuterStile",-6.005,1.75,F,.095,1.76,.065,t.frame),S(n,"TechnicalWindow-InnerGlazingBead",-6.065,1.75,F,.018,1.65,.024,t.silver);for(let F of[.89,2.61])S(n,"TechnicalWindow-OuterRail",-6.005,F,0,.095,.065,2.6,t.frame),S(n,"TechnicalWindow-RailSeal",-6.056,F+(F<1?.038:-.038),0,.013,.016,2.46,v);for(let F of[-.63,.63]){let W=S(n,"TechnicalWindow-SeatedPane",-6.012,1.75,F,.012,1.63,1.195,t.glass);W.castShadow=!1}S(n,"TechnicalWindow-DeepStoneSill",-6.04,.845,0,.32,.065,2.77,h),S(n,"TechnicalWindow-UndercutDrip",-6.191,.818,0,.015,.014,2.61,v);for(let F of[-1.33,1.33])S(n,"TechnicalWindow-SteppedPlasterReveal",-6.006,1.75,F,.07,1.79,.035,u);S(n,"TechnicalWindow-PlasterHeadReveal",-6.006,2.66,0,.07,.035,2.7,u);for(let F of[-5.995,-.785])S(n,"TechnicalCorner-RenderStop",F,1.78,2.712,.035,3.42,.045,u);S(n,"TechnicalBase-WaterproofBand",-3.4,.09,2.724,5.2,.18,.04,x),S(n,"TechnicalSide-WaterproofBand",-6.015,.09,0,.04,.18,5.4,x),S(n,"LivingInterior-BackSkirting",2.8,.2,-2.317,7.2,.115,.034,p),S(n,"LivingInterior-SideSkirting",6.168,.2,-.05,.034,.115,4.8,p),S(n,"LivingOuter-WaterproofSkirting",6.473,.17,0,.045,.28,5.19,x),S(n,"Plinth-MortarBacking",-3.4,.37,2.713,5.18,.35,.028,d);let N=c(_(new He(.312,.105,.027))),I=[],b=new Mt;for(let F=0;F<3;F++)for(let W=0;W<16;W++)b.position.set(-5.81+W*.322+F%2*.08,.25+F*.116,2.74),b.rotation.set(0,0,0),b.scale.setScalar(1),b.updateMatrix(),I.push(b.matrix.clone());let z=new Tt(N,h,I.length);z.name="HomePlinth-RunningBond48StoneBlocks",I.forEach((F,W)=>{z.setMatrixAt(W,F),z.setColorAt(W,new Ve().setScalar(.92+m(W)*.08))}),z.castShadow=!0,z.receiveShadow=!0,n.add(z),S(n,"Plinth-StoneCoping",-3.4,.576,2.746,5.2,.042,.09,h);let B=new kt;B.moveTo(-.078,0),B.lineTo(.078,0),B.lineTo(.078,-.043),B.lineTo(.014,-.043),B.lineTo(.014,-.031),B.lineTo(-.014,-.031),B.lineTo(-.014,-.043),B.lineTo(-.078,-.043),B.closePath();let G=new en(B,{depth:3.02,bevelEnabled:!0,bevelSegments:1,bevelSize:.002,bevelThickness:.002,steps:1});G.rotateX(-Math.PI/2),G.rotateY(Math.PI/2),_(G),c(G);let oe=new Tt(G,p,28);oe.name="HomeRightReveal-28FlutedTimberBoards";for(let F=0;F<28;F++)b.position.set(6.474,.34,-2.38+F*.176),b.rotation.set(0,0,0),b.scale.setScalar(1),b.updateMatrix(),oe.setMatrixAt(F,b.matrix),oe.setColorAt(F,new Ve().setScalar(.9+m(F+51)*.1));oe.castShadow=!0,oe.receiveShadow=!0,n.add(oe);for(let F of[.31,3.385])S(n,"TimberCladding-EdgeCap",6.49,F,0,.07,.035,5.03,t.frame);let Y=c(_(new He(.398,.028,.54))),J=new Tt(Y,p,32);J.name="HomeEave-32SoffitBoards";for(let F=0;F<32;F++)b.position.set(-6.25+F*.404,-.168,2.84),b.rotation.set(0,0,0),b.scale.setScalar(1),b.updateMatrix(),J.setMatrixAt(F,b.matrix);J.receiveShadow=!0,J.castShadow=!0,s.add(J);for(let F of[-5.9,-3,0,3,5.9])S(s,"Eave-RafterTail",F,-.22,2.75,.075,.14,.76,p),S(s,"Eave-FasciaReturn",F,-.09,3.16,.105,.23,.075,t.frame);S(n,"LivingBeam-EndBearing",6.175,2.96,2.32,.18,.21,.23,t.frame),S(n,"LivingBeam-TechnicalBearing",-.715,2.96,2.32,.18,.21,.23,t.frame);let de=new kt;for(let F=0;F<=16;F++){let W=Math.PI+F*Math.PI/16,k=Math.cos(W)*.092,re=Math.sin(W)*.092;F===0?de.moveTo(k,re):de.lineTo(k,re)}for(let F=16;F>=0;F--){let W=Math.PI+F*Math.PI/16;de.lineTo(Math.cos(W)*.079,Math.sin(W)*.079)}de.closePath();let Ne=c(new en(de,{depth:13.2,steps:1,bevelEnabled:!1}));Ne.translate(0,0,-6.6),Ne.rotateY(Math.PI/2),y(s,"HomeRainGutter-OpenThickUChannel",Ne,t.frame,0,-.11,3.29);let we=c(new dt(.011,.011,13.2,6));we.rotateZ(Math.PI/2);for(let F of[3.198,3.382])y(s,"RainGutter-RolledLip",we,t.silver,0,-.11,F);let ee=new kt;ee.moveTo(-.092,0);for(let F=1;F<=16;F++){let W=Math.PI+F*Math.PI/16;ee.lineTo(Math.cos(W)*.092,Math.sin(W)*.092)}ee.closePath();let Se=c(new en(ee,{depth:.008,bevelEnabled:!1}));Se.rotateY(Math.PI/2);for(let F of[-6.608,6.6])y(s,"RainGutter-SolidEndCap",Se,t.frame,F,-.11,3.29);let te=c(new zn(.101,.012,5,12,Math.PI));te.rotateZ(Math.PI),te.rotateY(Math.PI/2);for(let F=0;F<13;F++){let W=-6+F;y(s,"RainGutter-HalfRoundSupportStrap",te,t.silver,W,-.11,3.29),S(s,"RainGutter-HangerSeat",W,-.08,3.17,.034,.07,.12,t.silver)}e.updateWorldMatrix(!0,!1);let Me=i.worldToLocal(e.localToWorld(new P(6.3,-.19,3.29))),he=Me.x+.13,Fe=Me.z-.34;T(n,"RainDownpipe-OffsetElbowsAndDischarge",[Me,new P(Me.x,Me.y-.15,Me.z),new P(he,Me.y-.4,Fe),new P(he,Me.y-.62,Fe),new P(he,.35,Fe),new P(he,.15,Fe),new P(he,.075,Fe+.16)],.047,t.frame,40);let rt=c(new dt(.056,.056,.082,10,1,!0)),pe=c(new zn(.056,.007,5,10));pe.rotateX(Math.PI/2);for(let F of[.36,1.35,2.4])y(n,"RainDownpipe-JointSleeve",rt,t.frame,he,F,Fe),y(n,"RainDownpipe-WallCollar",pe,t.silver,he,F,Fe),S(n,"RainDownpipe-WallBracket",(he+6.46)/2,F,Fe,he-6.46,.035,.036,t.silver),S(n,"RainDownpipe-BracketWallSeat",6.483,F,Fe,.045,.09,.065,t.frame);let _e=c(new dt(.08,.05,.12,12,1,!0));y(n,"RainGutter-OutletSocket",_e,t.silver,Me.x,Me.y-.015,Me.z);let De=c(_(new He(.588,.038,.388))),V=[];function ge(F,W){F>-3.49&&F<-2&&W<3.54||(b.position.set(F,-.024,W),b.rotation.set(0,0,0),b.scale.setScalar(1),b.updateMatrix(),V.push(b.matrix.clone()))}for(let F=0;F<4;F++)for(let W=0;W<20;W++)ge(-5.62+W*.6,2.9+F*.4);for(let F=0;F<4;F++)for(let W=0;W<3;W++)ge(-.42+W*.6,4.5+F*.4);for(let F=0;F<3;F++)for(let W=0;W<3;W++)ge(-5.62+W*.6,4.5+F*.4);let ie=new Tt(De,h,V.length);ie.name="HomeCourtyard-JointedStonePaving",V.forEach((F,W)=>{ie.setMatrixAt(W,F),ie.setColorAt(W,new Ve().setScalar(.91+m(W+117)*.09))}),ie.castShadow=!1,ie.receiveShadow=!0,n.add(ie);for(let[F,W]of[[-2.4,3.5],[3.62,5.1]])S(n,"Courtyard-LowBoundaryKerb",F,.017,4.326,W,.052,.048,h);for(let F of[-.749,1.109])S(n,"EntrancePath-SideBoundary",F,.014,5.15,.045,.05,1.7,h);return S(n,"EntrancePath-EndLandingEdge",.18,-.003,5.914,1.86,.032,.048,h),S(n,"RainDischarge-SplashStone",he,-.005,Fe+.18,.26,.027,.38,h),{root:n,roofRoot:s,surfaceMaterials:f,setSurfaceMaps(F,W){a.get(F)?.forEach(ye=>ye.dispose());let k=[],re=f[F];for(let ye of["map","normalMap","roughnessMap","aoMap"]){let Re=W[ye];if(!Re){re[ye]=null;continue}let Ee=Re.clone();Ee.wrapS=Ee.wrapT=hn;let O=W.metresPerTile&&W.metresPerTile>0?W.metresPerTile:1;Ee.repeat.set(1/O,1/O),Ee.colorSpace=ye==="map"?St:Yt,Ee.needsUpdate=!0,k.push(Ee),re[ye]=Ee}W.color!==void 0&&re.color.set(W.color),a.set(F,k),re.needsUpdate=!0},dispose(){n.removeFromParent(),s.removeFromParent(),r.forEach(F=>F.dispose()),o.forEach(F=>F.dispose()),a.forEach(F=>F.forEach(W=>W.dispose()))}}}function qu(i){let e=new tt;e.name="HomePlanting-LeafStemAndFlowerDetails",i.add(e);let t=[],n=[],s=pe=>(t.push(pe),pe),r=(pe,_e=.93,De=Jn)=>{let V=new qe({color:pe,roughness:_e,side:De});return n.push(V),V},o=r(16777215,.91,Wt),a=r(6643262,.98),c=r(7831894,.97),l=r(16777215,.95,Wt),h=r(16777215,.87,Wt),p=r(11708268,.96),u=r(4735543,1),d=r(7827557,1),x=r(12957088,.9,Wt),v=r(13025460,.94),f=pe=>{let _e=Math.sin(pe*76.43+9.37)*45718.72;return _e-Math.floor(_e)};function m(){let pe=[],_e=[],De=[];for(let ge=0;ge<=5;ge++){let ie=ge/5,F=Math.max(.003,Math.pow(Math.sin(Math.PI*ie),.8)*.5),W=Math.sin(Math.PI*ie)*.085;if(pe.push(-F,ie,-W*.28,0,ie,W,F,ie,-W*.28),_e.push(0,ie,.5,ie,1,ie),ge<5)for(let k=0;k<2;k++){let re=ge*3+k,ye=re+3;De.push(re,ye,re+1,re+1,ye,ye+1)}}let V=new Nt;return V.setAttribute("position",new je(pe,3)),V.setAttribute("uv",new je(_e,2)),V.setIndex(De),V.computeVertexNormals(),s(V)}let _=s(new Nt);_.setAttribute("position",new je([-.5,0,0,.5,0,0,-.34,.36,.07,.34,.36,.07,-.19,.74,.21,.19,.74,.21,-.015,1,.43,.015,1,.43],3)),_.setAttribute("uv",new je([0,0,1,0,0,.36,1,.36,0,.74,1,.74,0,1,1,1],2)),_.setIndex([0,2,1,1,2,3,2,4,3,3,4,5,4,6,5,5,6,7]),_.computeVertexNormals();let E=m(),y=s(new dt(1,1,1,5,1)),S=s(new Zn(1,0)),T=s(new vi(1,5)),g=[],M=[],A=[],C=[],D=[],N=[],I=[],b=new Mt,z=new P(0,1,0);function B(pe,_e,De,V,ge){b.position.copy(_e),b.scale.copy(De),b.quaternion.copy(V||new Xt),b.updateMatrix(),pe.push({matrix:b.matrix.clone(),color:ge})}function G(pe,_e,De,V){let ge=De.clone().sub(_e);B(pe,_e.clone().add(De).multiplyScalar(.5),new P(V*.7,ge.length(),V),new Xt().setFromUnitVectors(z,ge.normalize()))}function oe(pe,_e,De,V,ge=!1){let ie=_e.clone().sub(pe),F=ie.length(),W=new Xt().setFromUnitVectors(z,ie.normalize());W.multiply(new Xt().setFromAxisAngle(z,f(V+7)*Math.PI*2));let k=new Ve().setHSL(ge?.235+f(V)*.055:.265+f(V)*.065,.25+f(V+12)*.13,.245+f(V+31)*.17);B(g,pe,new P(De,F,F*.7),W,k)}function Y(pe,_e,De,V,ge=8,ie=.23){for(let F=0;F<ge;F++){let W=f(V+F*13)*Math.PI*2,k=new Xt().setFromEuler(new Sn(.08+f(V+F*5)*.22,W,.12-f(V+F*7)*.24));B(C,new P(pe+Math.cos(W)*.035,_e,De+Math.sin(W)*.035),new P(.013+f(V+F*11)*.015,ie*(.65+f(V+F*17)*.5),ie),k,new Ve().setHSL(.205+f(V+F*19)*.055,.28,.33+f(V+F*23)*.13))}}function J(pe,_e,De,V,ge,ie){let F=new P(pe,_e,De);for(let W=0;W<12;W++){let k=W*2.399+f(V+W)*.5,re=ie*(.5+f(V+W*3)*.5),ye=new P(pe+Math.cos(k)*re,_e+ge*(.56+f(V+W*5)*.45),De+Math.sin(k)*re),Re=F.clone().lerp(ye,.37);G(M,F,Re,.01),G(M,Re,ye,.0055);for(let Ee=0;Ee<7;Ee++){let O=.31+Ee*.093,Ze=F.clone().lerp(ye,O);for(let Xe of[-1,1]){let ot=k+Xe*(.9+Ee*.37),Ce=.14+f(V+W*73+Ee*11)*.065,ft=Ze.clone().add(new P(Math.cos(ot)*Ce,.032+f(V+Ee*17)*.045,Math.sin(ot)*Ce)),Ge=Ze.clone().lerp(ft,.12);G(M,Ze,Ge,.0016),oe(Ge,ft,Ce*.5,V+W*91+Ee*7+Xe)}}for(let Ee=0;Ee<3;Ee++){let O=k+Ee*2.1;oe(ye,ye.clone().add(new P(Math.cos(O)*.11,.065,Math.sin(O)*.11)),.063,V+W*31+Ee)}}}function de(pe,_e,De,V,ge){let ie=f(V)*Math.PI*2,F=new P(pe,_e,De),W=new P(pe+Math.cos(ie)*.07,_e+ge,De+Math.sin(ie)*.07);G(A,F,W,.0028);for(let k=0;k<3;k++){let re=F.clone().lerp(W,.2+k*.17),ye=ie+k*2.4;oe(re,re.clone().add(new P(Math.cos(ye)*.085,.032,Math.sin(ye)*.085)),.028,V+k*43,!0)}for(let k=0;k<4;k++){let re=W.clone().add(new P(0,k*.018,0));B(N,re,new P(.009,.013,.009));for(let ye=0;ye<5;ye++){let Re=ye*Math.PI*2/5+k*.5;B(D,re.clone().add(new P(Math.cos(Re)*.014,.005,Math.sin(Re)*.014)),new P(.013,.018,1),new Xt().setFromEuler(new Sn(-Math.PI/2+.35,0,Re)),new Ve().setHSL(.745+f(V+k)*.035,.2,.52+f(V+ye*21)*.13))}}}function Ne(pe,_e,De,V,ge,ie){let F=new ue(_e,De);return F.name=pe,F.position.set(V,ge,ie),F.castShadow=!0,F.receiveShadow=!0,e.add(F),F}let we=s(new He(1,1,1)),ee=s(new He(1.08,.029,.98));[[-7.5,3.9],[-7.4,5.1],[6.95,3.7],[6.9,5.25]].forEach(([pe,_e],De)=>{Ne("HomeBed-ExposedSoil",ee,u,pe,.011,_e);for(let V of[-1,1])Ne("HomeBed-OpenPerimeterSide",we,v,pe+V*.57,.03,_e).scale.set(.06,.075,1.1),Ne("HomeBed-OpenPerimeterEnd",we,v,pe,.03,_e+V*.52).scale.set(1.08,.075,.06);J(pe,.026,_e,De*1101+83,.58+f(De)*.14,.36);for(let V=0;V<12;V++){let ge=V*2.399,ie=.36+f(De*71+V)*.1,F=pe+Math.cos(ge)*ie,W=_e+Math.sin(ge)*ie;V%2===0&&de(F,.027,W,De*97+V*31,.27+f(V)*.13),Y(F,.028,W,De*79+V*131,7,.16)}for(let V=0;V<30;V++)B(I,new P(pe+(f(V*7+De*53)-.5)*1.01,.028,_e+(f(V*13+De*71)-.5)*.9),new P(.009+f(V)*.011,.006,.011))});let te=[new Le(0,0),new Le(.157,0),new Le(.215,.425),new Le(.225,.437),new Le(.224,.458),new Le(.199,.458),new Le(.192,.423),new Le(.146,.028),new Le(0,.028)],Me=s(new Ar(te,20)),he=s(new vi(.19,20));he.rotateX(-Math.PI/2);let Fe=s(new dt(.161,.157,.024,20));[[.25,3.12],[5.8,3.16]].forEach(([pe,_e],De)=>{Ne("HomeEntrancePlanter-ThicknessAndOpenRim",Me,x,pe,0,_e),Ne("HomeEntrancePlanter-RecessedSoil",he,u,pe,.416,_e),Ne("HomeEntrancePlanter-FootRing",Fe,x,pe,.012,_e),J(pe,.418,_e,7301+De*701,.45,.23);for(let V=0;V<18;V++){let ge=V*2.399,ie=Math.sqrt(f(V*19+De*53))*.17;B(I,new P(pe+Math.cos(ge)*ie,.418,_e+Math.sin(ge)*ie),new P(.011,.006,.008))}});for(let pe=0;pe<2;pe++)for(let _e=0;_e<26;_e++){let De=pe===0?-7.95+f(_e*71)*.3:7.35+f(_e*91)*.35,V=3.35+_e*.098;Y(De,-.004,V,19001+_e*83+pe*571,6,.16+f(_e*3)*.06)}function rt(pe,_e,De,V,ge=!0){let ie=new Tt(_e,De,V.length);return ie.name=pe,V.forEach((F,W)=>{ie.setMatrixAt(W,F.matrix),F.color&&ie.setColorAt(W,F.color)}),ie.instanceMatrix.needsUpdate=!0,ie.instanceColor&&(ie.instanceColor.needsUpdate=!0),ie.castShadow=ge,ie.receiveShadow=!0,ie.computeBoundingSphere(),e.add(ie),ie}return rt("HomePlanting-CuppedIndividualLeaves",E,o,g),rt("HomePlanting-WoodyBranchesAndPetioles",y,a,M),rt("HomePlanting-FineFlowerStems",y,c,A),rt("HomePlanting-LowArchingGrassBlades",_,l,C,!1),rt("HomePlanting-LayeredFlowerPetals",T,h,D,!1),rt("HomePlanting-TinyFlowerCentres",S,p,N,!1),rt("HomePlanting-SoilGranules",S,d,I,!1),{root:e,counts:{leaves:g.length,woodyStems:M.length,flowerStems:A.length,grassBlades:C.length,petals:D.length,soilGranules:I.length},setLeafMaps(pe,_e,De){o.map=pe||null,o.normalMap=_e||null,o.roughnessMap=De||null,o.normalScale?.set(.12,.12),o.needsUpdate=!0},dispose(){e.removeFromParent(),t.forEach(pe=>pe.dispose()),n.forEach(pe=>pe.dispose())}}}function Yu(i,e,t,n){let s=new tt;s.name="HomeArchitecturalRefinement",i.add(s);let r=[],o=[],a=[],c=te=>(r.push(te),te),l=te=>(o.push(te),te),h=(te,Me=.8,he=0)=>l(new qe({color:te,roughness:Me,metalness:he})),p=n.homePbr;function u(te,Me,he,Fe,rt){let pe=l(new qe({color:te?16777215:Me,roughness:he,map:te?null:rt||null}));if(te){for(let[_e,De]of[["map",te.color],["normalMap",te.normal],["roughnessMap",te.roughness],["aoMap",te.ao]]){if(!De)continue;let V=De.clone();V.wrapS=V.wrapT=hn,V.repeat.set(.5,.5),V.colorSpace=_e==="map"?St:Yt,V.needsUpdate=!0,a.push(V),pe[_e]=V}pe.normalScale.set(Fe,Fe)}return pe}let d=u(p?.plaster,16052453,.86,.15,n.limestoneWall),x=u(p?.paving,13880768,.92,.3),v=h(2571070,.34,.55),f=h(11451326,.34,.72),m=l(new Pn({color:10206151,roughness:.13,metalness:.08,transparent:!0,opacity:.48,ior:1.48,side:Wt,emissive:16761220,emissiveIntensity:0,depthWrite:!1})),_=h(4742249,.83,.12),E=c(new He(1,1,1));function y(te,Me,he,Fe,rt,pe,_e,De,V){let ge=V===d||V===x,ie=ge?c(new He(pe,_e,De)):E;if(ge){let W=ie.getAttribute("position"),k=ie.getAttribute("normal");if(W&&k){let re=[];for(let ye=0;ye<W.count;ye++){let Re=Math.abs(k.getX(ye)),Ee=Math.abs(k.getY(ye)),O=Math.abs(k.getZ(ye));Ee>=Re&&Ee>=O?re.push(W.getX(ye),W.getZ(ye)):Re>=O?re.push(W.getZ(ye),W.getY(ye)):re.push(W.getX(ye),W.getY(ye))}ie.setAttribute("uv",new je(re,2)),ie.setAttribute("uv1",new je(re,2))}}let F=new ue(ie,V);return F.name=Me,F.position.set(he,Fe,rt),ge||F.scale.set(pe,_e,De),F.castShadow=!0,F.receiveShadow=!0,te.add(F),F}let S=new tt;S.name="HomeTechnicalWing-RealOpenings",s.add(S),y(S,"TechnicalFloor",-3.4,.065,0,5.2,.13,5.4,x),y(S,"TechnicalRearWall",-3.4,1.75,-2.57,5.2,3.5,.26,d),y(S,"TechnicalRightWall",-.93,1.75,0,.26,3.5,5.4,d),y(S,"SideWallBelowWindow",-5.87,.45,0,.26,.9,5.4,d),y(S,"SideWallAboveWindow",-5.87,3.05,0,.26,.9,5.4,d),y(S,"SideWallRearReveal",-5.87,1.75,-1.98,.26,1.7,1.44,d),y(S,"SideWallFrontReveal",-5.87,1.75,1.98,.26,1.7,1.44,d),y(S,"ServiceWallLower",-3.4,.5875,2.6,5.2,1.175,.2,d),y(S,"ServiceWallUpper",-3.4,3.1125,2.6,5.2,.775,.2,d),y(S,"ServiceWallLeft",-5.475,1.95,2.6,1.05,1.55,.2,d),y(S,"ServiceWallRight",-2.225,1.95,2.6,2.85,1.55,.2,d),y(S,"InverterRecessBack",-4.3,1.95,2.49,1.3,1.55,.1,d);for(let te of[1.52,2.38])y(S,"ConceptMountingRail",-4.3,te,2.58,.62,.075,.1,f);y(s,"BatterySupportPaver",-2.75,-.032,2.98,1.24,.06,.8,x);let T=l(new dn({color:1581857,transparent:!0,opacity:.2,depthWrite:!1})),g=c(new vi(.085,24));for(let te of[-.32,.32])for(let Me of[-.14,.14]){let he=new ue(g,T);he.name="BatteryWheelContact",he.rotation.x=-Math.PI/2,he.scale.set(1.25,.7,1),he.position.set(-2.75+te,-.0015,2.98+Me),s.add(he)}let M=new tt;M.name="HomeSlateRoofMesh",M.position.copy(t.position),M.rotation.copy(t.rotation),e.add(M);let A=new tt;A.name="HomePVPhysicalMount",M.add(A);let C=c(new He(.502,.035,.495,2,1,2)),D=new Tt(C,_,26*13);D.name="HomeRoof-338IndividualTiles",D.castShadow=!0,D.receiveShadow=!0;let N=new Mt,I=te=>{let Me=Math.sin(te*78.233+11.73)*43758.5453;return Me-Math.floor(Me)},b=0;for(let te=0;te<13;te++)for(let Me=0;Me<26;Me++)N.position.set(-6.25+Me*.5,.16+te%2*.004,-3+te*.5),N.updateMatrix(),D.setMatrixAt(b,N.matrix),D.setColorAt(b,new Ve().setHSL(.59,.14,.24+I(b)*.07)),b++;M.add(D);for(let te of[-6.6,6.6])y(M,"RoofBargeboard",te,-.015,0,.065,.29,6.5,v);for(let te of[-3.2,3.2])y(M,"RoofFascia",0,-.015,te,13.25,.29,.075,v);let z=te=>4.23-Math.tan(.22)*(te-.1)-.14/Math.cos(.22),B=new kt;B.moveTo(-2.7,3.4),B.lineTo(2.7,3.4),B.lineTo(2.7,z(2.7)),B.lineTo(-2.7,z(-2.7)),B.closePath();let G=c(new en(B,{depth:.18,bevelEnabled:!1,steps:1}));G.rotateY(-Math.PI/2);for(let te of[-5.82,6.45]){let Me=new ue(G,d);Me.name="MonoPitchWallClosure",Me.position.x=te,Me.castShadow=!0,Me.receiveShadow=!0,s.add(Me)}let oe=z(-2.6)-3.4;y(s,"RearRoofWallClosure",.15,3.4+oe/2,-2.6,12.55,oe,.18,d);for(let te of[-1.15,1.05])for(let Me of[-.58,.58])y(A,"PVMountingRail",0,.215,te+Me,11.8,.05,.045,f);let Y=Xu(i,M,{frame:v,silver:f,glass:m}),J=qu(i),de=!1;function Ne(){if(!(!p||de))for(let[te,Me,he]of[["plaster",p.plaster,.15],["wood",p.timber,.2],["stone",p.paving,.3]])Y.setSurfaceMaps(te,{map:Me.color,normalMap:Me.normal,roughnessMap:Me.roughness,aoMap:Me.ao,metresPerTile:2,color:16777215}),Y.surfaceMaterials[te].normalScale.set(he,he)}Ne(),n.homePbrReady?.then(()=>{de||(a.forEach(te=>{te.needsUpdate=!0}),Ne())});let we=l(new qe({color:16772559,emissive:16761211,emissiveIntensity:0,roughness:.35})),ee=[],Se=l(new qe({color:1847364,map:n.solarPanel,roughness:.3,metalness:.25}));for(let te of[-.97,6.3]){y(s,"WallSconceMount",te,2.46,2.75,.16,.26,.075,v),y(s,"WallSconceHousing",te,2.47,2.91,.22,.28,.28,v),y(s,"WallSconceDiffuser",te,2.325,2.91,.18,.018,.22,we);let Me=new Bi(16763015,0,7.5,.82,.55,2);Me.name="HomeWallSconce-Practical",Me.position.set(te,2.3,2.96),Dn(Me,"home",2),Me.target.position.set(te,0,3.9),s.add(Me,Me.target),ee.push({light:Me,intensity:38})}for(let te of[1.65,5.1]){y(s,"AutonomousPathBollard",te,.37,4.95,.16,.74,.16,v),y(s,"PathBollardDiffuser",te,.64,4.95,.18,.1,.18,we),y(s,"PathBollardPVCap",te,.77,4.95,.2,.035,.2,Se);let he=new tn(16764560,0,4.6,2);he.name="AutonomousPathBollard-Practical",he.position.set(te,.64,4.95),Dn(he,"home",3),s.add(he),ee.push({light:he,intensity:9})}return{root:s,roofMount:A,architecture:Y,planting:J,setNightFactor(te){let Me=bt.clamp(te,0,1);we.emissiveIntensity=1.65*Me,m.emissiveIntensity=.38*Me,ee.forEach(({light:he,intensity:Fe})=>{he.intensity=Fe*Me})},dispose(){de=!0,Y.dispose(),J.dispose(),r.forEach(te=>te.dispose()),o.forEach(te=>te.dispose()),a.forEach(te=>te.dispose()),s.removeFromParent(),M.removeFromParent()}}}function Zu(i,e,t,n){let s=new tt;s.name="HomeCatalogueScaleInstallation",s.userData.terminalCoordinatesVerified=!1,i.add(s);let r=[],o=[],a=N=>(r.push(N),N),c=N=>(o.push(N),N),l=(N,I,b=0)=>c(new qe({color:N,roughness:I,metalness:b})),h=(N,I,b)=>c(new qe({color:N?16777215:I,roughness:.92,normalScale:new Le(b,b),...N?{map:N.color,normalMap:N.normal,roughnessMap:N.roughness}:{},...N?.ao?{aoMap:N.ao}:{}})),p=h(n.homePbr?.paving,13946562,.24),u=h(n.homePbr?.plaster,15526108,.12),d=l(8952732,.38,.72),x=l(13357259,.52,.12),v=l(2503730,.68),f=a(new He(1,1,1));function m(N,I,b,z){let B=new ue(f,z);return B.name=N,B.position.set(I[0],I[1],I[2]),B.scale.set(b[0],b[1],b[2]),B.castShadow=!0,B.receiveShadow=!0,s.add(B),B}let _=[];i.traverse(N=>{["BatterySupportPaver","BatteryWheelContact","ConceptMountingRail"].includes(N.name)&&_.push(N)}),_.forEach(N=>N.removeFromParent()),m("TechnicalServiceBackboard",[-4.3,1.95,2.67],[1.24,1.49,.09],u);for(let N of[1.8,2.1]){let I=m("InverterArchitecturalSupportRail",[-4.3,N,2.752],[.27,.035,.084],d);I.userData.manufacturerHolePattern="unknown"}for(let N of[-4.42,-4.18])for(let I of[1.8,2.1])m("BackboardRailStandoff",[N,I,2.715],[.03,.04,.075],d);t.userData.installation="wall-mounted on conceptual architectural rails; manufacturer bracket pending";let E=m("BatterySupportPaver",[-2.75,-.032,2.98],[.78,.06,.54],p);E.userData.supportLoadVerified=!1,e.userData.installation="wheeled floor mounting at catalogue size; slab/caster capacity pending";let y=document.createElement("canvas");y.width=y.height=64;let S=y.getContext("2d"),T=S.createRadialGradient(32,32,5,32,32,31);T.addColorStop(0,"rgba(255,255,255,0.9)"),T.addColorStop(.4,"rgba(255,255,255,0.38)"),T.addColorStop(1,"rgba(255,255,255,0)"),S.fillStyle=T,S.fillRect(0,0,64,64);let g=new gn(y),M=c(new dn({map:g,color:1318937,transparent:!0,opacity:.48,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1})),A=a(new Ft(.11,.085));i.updateWorldMatrix(!0,!0);let C=[];e.traverse(N=>{N.name==="BatteryCasterWheel"&&C.push(N)}),C.forEach(N=>{let I=i.worldToLocal(N.getWorldPosition(new P)),b=new ue(A,M);b.name="BatteryWheelContact",b.rotation.x=-Math.PI/2,b.position.set(I.x,-.0018,I.z),b.userData.fromActualCasterPosition=!0,s.add(b)});let D=new ue(a(new Ft(.64,.34)),M);D.name="BatterySoftContactOcclusion",D.rotation.x=-Math.PI/2,D.position.set(-2.75,-.0019,2.98),s.add(D);for(let[N,I,b,z,B,G,oe]of[["InverterServiceBox",-4.3,1.47,2.79,.34,.24,.12],["BatteryIsolationServiceBox",-3.28,.64,2.77,.23,.28,.13],["PVArchitecturalIsolator",-4.65,1.9,2.75,.2,.3,.13]]){let Y=m(N,[I,b,z],[B,G,oe],x);Y.userData.manufacturerProduct=!1,m(N+"-DoorRim",[I,b,z+oe/2+.006],[B*.89,G*.89,.013],d),m(N+"-Handle",[I+B*.29,b,z+oe/2+.02],[.018,.065,.02],v);for(let J of[-B*.33,B*.33]){let de=new ue(a(new dt(.018,.021,.035,12)),v);de.name="ArchitecturalServiceBoxGland",de.position.set(I+J,b-G/2-.015,z),s.add(de)}}for(let[N,I]of[[-4.65,2.52],[-4.65,2.91],[-4.65,3.32],[-3.28,1.1],[-3.28,1.28]]){m("HomeConduitSaddlePlate",[N,I,2.723],[.095,.075,.035],d);let b=new ue(a(new zn(.037,.009,6,16,Math.PI)),d);b.name="HomeConduitSaddle",b.position.set(N,I,2.73),b.rotation.z=Math.PI/2,s.add(b)}return{root:s,dispose(){g.dispose(),r.forEach(N=>N.dispose()),o.forEach(N=>N.dispose()),s.removeFromParent()}}}function Ju(i,e){let t=(k,re,ye,Re)=>{if(!(k instanceof ue)||!(k.geometry instanceof He))return!1;let Ee=k.geometry.parameters;return Math.abs(Ee.width-re)<1e-6&&Math.abs(Ee.height-ye)<1e-6&&Math.abs(Ee.depth-Re)<1e-6},n;if(i.traverse(k=>{t(k,9.6,5.2,8.2)&&k.parent instanceof tt&&Math.abs(k.position.x+3.2)<1e-6&&Math.abs(k.position.y-2.6)<1e-6&&(n=k)}),!n||!(n.parent instanceof tt)||!(n.parent.parent instanceof tt))throw new Error("Commercial architecture detail requires the existing campusWorld warehouse shell");let s=n.parent,o=s.parent.children.filter(k=>k instanceof tt&&k.name==="MeshProduct-horizon");if(o.length!==2)throw new Error("Commercial architecture detail requires the two existing C&I cabinets");let a=new tt;a.name="CommercialArchitectureEntityDetails",a.userData.architecturalIllustration=!0,a.userData.modelStatus="incremental commercial trim; closed relief doors on existing solid shell; not manufacturer CAD",s.add(a);let c=[],l=[],h=[],p=[],u=!1,d=k=>(c.push(k),k),x=k=>(l.push(k),k),v=(k,re,ye,Re)=>{let Ee=s.children.find(O=>t(O,k,re,ye));return x(Ee instanceof ue&&Ee.material instanceof qe?Ee.material.clone():new qe(Re))},f=v(7.7,.22,7.9,{color:3885133,roughness:.56,metalness:.28}),m=v(.16,4.6,.18,{color:2503738,roughness:.38,metalness:.65}),_=v(1.75,1,1.5,{color:12766417,roughness:.32,metalness:.72}),E=x(n.material instanceof qe?n.material.clone():new qe({color:13949917,roughness:.55,metalness:.25})),y=x(new qe({color:1515812,roughness:.96})),S=x(new qe({color:13224901,roughness:.94,metalness:0}));function T(k){let re=k.getAttribute("position"),ye=k.getAttribute("normal"),Re=[];for(let Ee=0;Ee<re.count;Ee++){let O=Math.abs(ye.getX(Ee)),Ze=Math.abs(ye.getY(Ee)),Xe=Math.abs(ye.getZ(Ee));Ze>=O&&Ze>=Xe?Re.push(re.getX(Ee),re.getZ(Ee)):O>=Xe?Re.push(re.getZ(Ee),re.getY(Ee)):Re.push(re.getX(Ee),re.getY(Ee))}return k.setAttribute("uv",new je(Re,2)),k.setAttribute("uv1",new je(Re,2)),k}let g=d(new He(1,1,1));function M(k,re,ye,Re,Ee=0,O=0,Ze=0){let Xe=new ue(ye,Re);return Xe.name=re,Xe.position.set(Ee,O,Ze),Xe.castShadow=!0,Xe.receiveShadow=!0,k.add(Xe),Xe}function A(k,re,ye,Re,Ee,O,Ze,Xe,ot){let Ce=ot===S,ft=M(k,re,Ce?d(T(new He(O,Ze,Xe))):g,ot,ye,Re,Ee);return Ce||ft.scale.set(O,Ze,Xe),ft}let C=new Mt;function D(k,re,ye,Re=1,Ee=1,O=1,Ze=0){return C.position.set(k,re,ye),C.rotation.set(0,Ze,0),C.scale.set(Re,Ee,O),C.updateMatrix(),C.matrix.clone()}function N(k,re,ye,Re,Ee,O=!0){let Ze=new Tt(ye,Re,Ee.length);return Ze.name=re,Ee.forEach((Xe,ot)=>Ze.setMatrixAt(ot,Xe)),Ze.instanceMatrix.needsUpdate=!0,Ze.computeBoundingBox(),Ze.computeBoundingSphere(),Ze.castShadow=O,Ze.receiveShadow=!0,k.add(Ze),p.push(Ze),Ze}let I=n.geometry.parameters,b=n.position.x-I.width/2,z=n.position.x+I.width/2,B=n.position.z+I.depth/2,G=n.position.z-I.depth/2,oe=n.position.y+I.height/2;function Y(k){let re=new kt;[[-.11,.014],[.065,.014],[.065,-.12],[.045,-.12],[.045,-.003],[-.11,-.003]].forEach(([Ee,O],Ze)=>Ze?re.lineTo(-Ee,O):re.moveTo(-Ee,O)),re.closePath();let Re=new en(re,{depth:k,steps:1,bevelEnabled:!1});return Re.rotateY(Math.PI/2),d(Re)}let J=Y(I.width);M(a,"Warehouse-FrontFoldedDripCap",J,f,b,oe,B);let de=M(a,"Warehouse-RearFoldedDripCap",J,f,z,oe,G);de.rotation.y=Math.PI;let Ne=M(a,"Warehouse-WestFoldedDripCap",Y(I.depth-.23),f,b,oe,G+.115);Ne.rotation.y=-Math.PI/2;function we(k){let re=new kt;[[-.018,.018],[.14,.018],[.14,.006],[-.006,.006],[-.006,-.14],[-.018,-.14]].forEach(([Ee,O],Ze)=>Ze?re.lineTo(Ee,-O*k):re.moveTo(Ee,-O*k)),re.closePath();let Re=new en(re,{depth:4.98,steps:1,bevelEnabled:!1});return Re.rotateX(-Math.PI/2),d(Re)}M(a,"Warehouse-WestFrontLFlashing",we(1),_,b,.1,B),M(a,"Warehouse-WestRearLFlashing",we(-1),_,b,.1,G);let ee=new tt;ee.name="Warehouse-WestClosedRollerDoor",ee.position.set(b,0,0),ee.rotation.y=-Math.PI/2,a.add(ee),A(ee,"RollerDoor-ClosedLeaf",0,1.77,.018,3,3.3,.048,f);for(let k of[-1.555,1.555])A(ee,"RollerDoor-DeepGuideJamb",k,1.82,.052,.11,3.4,.124,m);A(ee,"RollerDoor-HeadCasing",0,3.555,.08,3.22,.18,.18,m),A(ee,"RollerDoor-LowerWeatherSeal",0,.14,.057,2.99,.036,.034,y),A(ee,"RollerDoor-GroundedThreshold",0,.081,.13,3.26,.082,.33,S);let Se=[];for(let k=0;k<22;k++)Se.push(D(0,.22+k*.148,.054,2.98,.033,.032));N(ee,"RollerDoor-22RaisedSlatRibs",g,E,Se);let te=new tt;te.name="Warehouse-FrontClosedPersonnelDoor",te.position.set(-.65,0,B),a.add(te),A(te,"PersonnelDoor-ClosedLeaf",0,1.22,.02,.98,2.2,.054,f);for(let k of[-.545,.545])A(te,"PersonnelDoor-SteppedJambCasing",k,1.255,.053,.1,2.31,.126,m);A(te,"PersonnelDoor-HeadCasing",0,2.435,.053,1.19,.1,.126,m),A(te,"PersonnelDoor-GroundedSill",0,.083,.135,1.22,.086,.34,S),A(te,"PersonnelDoor-HandleBackplate",.34,1.18,.056,.043,.18,.016,_),A(te,"PersonnelDoor-HandleNeck",.34,1.18,.082,.026,.026,.046,_),A(te,"PersonnelDoor-LeverHandle",.285,1.18,.106,.13,.024,.026,_);let Me=d(new dt(.014,.014,.1,8));N(te,"PersonnelDoor-3HingeBarrels",Me,_,[.38,1.22,2.06].map(k=>D(-.5,k,.054)));let he=[];function Fe(k,re,ye){he.push(D(k,(re+ye)/2,B+.011,.024,ye-re,.034))}function rt(k,re,ye){he.push(D(b-.011,(re+ye)/2,k,.034,ye-re,.024))}for(let k=1;k<8;k++){let re=b+k*1.2;Fe(re,Math.abs(re+.65)<.64?2.52:.14,5.06)}for(let k=1;k<7;k++){let re=G+k*1.2;rt(re,Math.abs(re)<1.68?3.7:.14,5.06)}he.push(D((b+z)/2,2.8,B+.014,I.width-.3,.024,.035));for(let[k,re]of[[G+.15,-1.68],[1.68,B-.15]])he.push(D(b-.014,2.8,(k+re)/2,.035,.024,re-k));N(a,"Warehouse-16OpeningClippedPanelJoints",g,E,he);let pe=new tt;pe.name="CommercialCabinetServiceWalkway",pe.position.copy(s.position).multiplyScalar(-1),a.add(pe);let _e=(o[0].position.x+o[1].position.x)/2+.1,De=Math.max(...o.map(k=>k.position.z))+1.55;A(pe,"ServiceWalkway-EmbeddedBedding",_e,.293,De,3.9,.086,1.45,S).castShadow=!1;let V=d(T(new He(.638,.042,.338))),ge=[];for(let k=0;k<4;k++)for(let re=0;re<6;re++)ge.push(D(_e-1.62+re*.648,.339,De-.522+k*.348));N(pe,"ServiceWalkway-24JointedPavers",V,S,ge,!1);let ie=[_e-1.77,_e+1.77];N(pe,"ServiceWalkway-2GuardBasePlates",g,_,ie.map(k=>D(k,.366,De+.58,.25,.018,.25)));let F=d(new dt(.065,.065,.9,10));N(pe,"ServiceWalkway-2SteelGuardBollards",F,m,ie.map(k=>D(k,.815,De+.58))),pe.userData.architecturalIllustration=!0,pe.userData.certifiedMountingOrProtection=!1;function W(k){if(u)return;let re={map:k.color,normalMap:k.normal,roughnessMap:k.roughness,aoMap:k.ao};for(let ye of["map","normalMap","roughnessMap","aoMap"]){let Re=re[ye];if(!Re)continue;let Ee=Re.clone();Ee.wrapS=Ee.wrapT=hn,Ee.repeat.set(1/.75,1/.75),Ee.offset.set(0,0),Ee.rotation=0,Ee.colorSpace=ye==="map"?St:Yt,Ee.channel=ye==="aoMap"?1:0,Ee.needsUpdate=!0,h.push(Ee),S[ye]=Ee}S.color.set(16777215),S.roughness=1,S.normalScale.set(.55,.55),S.aoMapIntensity=.65,S.needsUpdate=!0}return e.homePbrReady&&e.homePbrReady.then(()=>{!u&&e.homePbr&&W(e.homePbr.paving)}).catch(()=>{}),{root:a,dispose(){u||(u=!0,a.removeFromParent(),p.forEach(k=>k.dispose()),c.forEach(k=>k.dispose()),l.forEach(k=>k.dispose()),h.forEach(k=>k.dispose()),a.clear())}}}function $u(i,e){let t=(X,Q)=>Math.abs(X-Q)<1e-5,n=(X,Q,$,j)=>{if(!(X instanceof ue)||!(X.geometry instanceof He))return!1;let me=X.geometry.parameters;return t(me.width,Q)&&t(me.height,$)&&t(me.depth,j)},s=i.children.find(X=>X instanceof tt&&t(X.position.x,21)&&t(X.position.z,15.2)&&X.children.some(Q=>n(Q,5.2,2.75,.24)&&t(Q.position.x,1.2)&&t(Q.position.z,-1.65))),r=i.children.find(X=>X instanceof ue&&X.geometry instanceof Ft&&t(X.geometry.parameters.width,190)&&t(X.geometry.parameters.height,190));if(!(s instanceof tt)||!(r instanceof ue))throw new Error("Off-grid detail requires the existing Zone 03 cabin and 190 m campus terrain mesh.");let o=s.children.find(X=>n(X,5.2,2.75,.24)),a=s.children.find(X=>n(X,.24,2.75,3.2)),c=s.children.find(X=>n(X,6.2,.2,4.2)),l=s.children.find(X=>X instanceof ue&&X.geometry instanceof en&&t(X.geometry.parameters.options.depth??0,.28)),h=s.children.find(X=>n(X,3.8,.22,1.15)),p=s.children.find(X=>X.name==="MeshProduct-volt1000");if(!(o instanceof ue)||!(a instanceof ue)||!(c instanceof ue)||!(l instanceof ue)||!(h instanceof ue)||!p||!t(o.position.y,1.68)||!t(a.position.x,3.7)||!t(a.position.z,-.15)||!t(c.position.x,1.2)||!t(c.position.y,3.22)||!t(c.position.z,-.1)||!t(c.rotation.x,.14)||!t(c.rotation.y,0)||!t(c.rotation.z,0)||!t(l.position.x,.2)||!t(l.position.y,.02)||!t(l.position.z,0)||!t(h.position.x,-.9)||!t(h.position.y,.36)||!t(h.position.z,1.65)||!t(p.position.x,.55)||!t(p.position.y,.48)||!t(p.position.z,2.05))throw new Error("Off-grid cabin/device layout changed; remeasure before applying this architectural concept.");if(s.getObjectByName("OffgridArchitectureEntityDetails"))throw new Error("Off-grid architectural detail is already attached; dispose it before recreating.");i.updateWorldMatrix(!0,!0);let u=s.matrixWorld.clone().invert(),d=X=>{let Q=new mn,$=new P;return X.traverse(j=>{if(!(j instanceof ue))return;let me=j.geometry.getAttribute("position"),H=u.clone().multiply(j.matrixWorld);for(let ae=0;ae<me.count;ae++)$.fromBufferAttribute(me,ae).applyMatrix4(H),Q.expandByPoint($)}),Q},x=d(l),v=d(h),f=d(p),m=x.max.y;if(!Number.isFinite(m)||!t(m,.35))throw new Error("Off-grid deck datum changed; entry/support heights need remeasurement.");let _=new Fr,E=new P,y=new P,S=new P,T=new P;function g(X,Q){E.set(X,100,Q).applyMatrix4(s.matrixWorld),y.set(X,-100,Q).applyMatrix4(s.matrixWorld),S.copy(y).sub(E).normalize(),_.set(E,S);let $=_.intersectObject(r,!1)[0];if(!$)throw new Error("Off-grid architectural base is outside the current terrain surface.");let j=T.copy($.point).applyMatrix4(u).y;if(!Number.isFinite(j))throw new Error("Nonfinite off-grid terrain intersection.");return j}function M(X,Q,$,j){let me=1/0,H=-1/0;for(let ae=0;ae<=4;ae++)for(let Z=0;Z<=4;Z++){let Pe=g(X+$*(ae/4-.5),Q+j*(Z/4-.5));me=Math.min(me,Pe),H=Math.max(H,Pe)}return{min:me,max:H}}let A=new tt;A.name="OffgridArchitectureEntityDetails",A.userData.architecturalConcept=!0,A.userData.manufacturerCad=!1,A.userData.terrainSampling="actual campus PlaneGeometry triangles, 5 x 5 samples/base, 45 mm embedment",A.userData.originalOpenFrontRetained=!0;let C=new Set,D=new Set,N=new Set,I=[],b=!1,z=X=>(C.add(X),X),B=(X,Q=.85,$=0)=>{let j=new qe({color:X,roughness:Q,metalness:$});return D.add(j),j},G=B(12098685,.86),oe=B(13158075,.94),Y=B(13290178,.95),J=B(4345940,.64,.32),de=B(10726830,.47,.7),Ne=B(6911095,.61,.52);function we(X){let Q=X.getAttribute("position"),$=X.getAttribute("normal"),j=[];for(let me=0;me<Q.count;me++){let H=Math.abs($.getX(me)),ae=Math.abs($.getY(me)),Z=Math.abs($.getZ(me));ae>=H&&ae>=Z?j.push(Q.getX(me),Q.getZ(me)):H>=Z?j.push(Q.getZ(me),Q.getY(me)):j.push(Q.getX(me),Q.getY(me))}return X.setAttribute("uv",new je(j,2)),X.setAttribute("uv1",new je(j,2)),X}function ee(X,Q,$,j,me=0,H=0,ae=0){let Z=new ue(z($),j);return Z.name=Q,Z.position.set(me,H,ae),Z.castShadow=!0,Z.receiveShadow=!0,X.add(Z),Z}function Se(X,Q,$,j,me,H,ae,Z,Pe){return ee(X,Q,we(new He(H,ae,Z)),Pe,$,j,me)}let te=new Mt;function Me(X,Q,$,j,me){let H=new Tt(z($),j,me.length);return H.name=Q,me.forEach((ae,Z)=>{te.position.set(ae.x,ae.y,ae.z),te.rotation.set(0,ae.rotationY??0,0),te.scale.setScalar(1),te.updateMatrix(),H.setMatrixAt(Z,te.matrix)}),H.instanceMatrix.needsUpdate=!0,H.castShadow=!0,H.receiveShadow=!0,I.push(H),X.add(H),H}function he(X,Q,$){let j=[],me=[],H=[],ae=[];for(let Pe of Q){let Te=we(new He(Pe.width,Pe.height,Pe.depth));Te.translate(Pe.x,Pe.y,Pe.z);let Ue=Te.getAttribute("position"),$e=Te.getAttribute("normal"),ne=Te.getAttribute("uv"),U=j.length/3;for(let be=0;be<Ue.count;be++)j.push(Ue.getX(be),Ue.getY(be),Ue.getZ(be)),me.push($e.getX(be),$e.getY(be),$e.getZ(be)),H.push(ne.getX(be),ne.getY(be));let ce=Te.getIndex();for(let be=0;be<ce.count;be++)ae.push(U+ce.getX(be));Te.dispose()}let Z=new Nt;return Z.setAttribute("position",new je(j,3)),Z.setAttribute("normal",new je(me,3)),Z.setAttribute("uv",new je(H,2)),Z.setAttribute("uv1",new je(H,2)),Z.setIndex(ae),ee(A,X,Z,$)}let Fe=we(new He(.038,2.61,.024)),rt=[],pe=[];for(let X=0;X<27;X++){let Q=o.position.x-2.6+(X+.5)*5.2/27;rt.push({x:Q,y:1.68,z:-1.521}),Math.abs(Q+.6)>.18&&pe.push({x:Q,y:1.68,z:-1.779})}Me(A,"CabinBack-InteriorTimberBattens",Fe,G,rt),Me(A,"CabinBack-ExteriorTimberBattens-ControllerClear",Fe,G,pe),Me(A,"CabinEast-17TimberBattens",Fe,G,Array.from({length:17},(X,Q)=>({x:3.829,y:1.68,z:-1.75+(Q+.5)*3.2/17,rotationY:Math.PI/2}))),Se(A,"CabinBack-InteriorBaseTrim",1.2,.373,-1.507,5.14,.095,.037,G),Se(A,"CabinEast-BaseWeatherTrim",3.83,.373,-.15,.04,.095,3.18,J);for(let X of[-1.418,3.818])Se(A,"CabinRear-CornerStop",X,1.68,-1.78,.043,2.68,.044,J);let _e=new tt;_e.name="OffgridOriginalSlope-EaveDetails",_e.position.copy(c.position),_e.quaternion.copy(c.quaternion),_e.scale.copy(c.scale),A.add(_e),Se(_e,"CabinEave-LowFrontFascia",0,-.015,2.112,6.2,.2,.035,J),Se(_e,"CabinEave-RearFascia",0,-.015,-2.112,6.2,.2,.035,J);for(let X of[-3.112,3.112])Se(_e,"CabinEave-SlopeSideFascia",X,-.015,0,.035,.2,4.2,J);let De=[];for(let X=0;X<16;X++)for(let Q of[-1.88,1.88])De.push({x:-3.1+(X+.5)*6.2/16,y:-.11,z:Q});Me(_e,"CabinEave-32JointedSoffitBoards",we(new He(.3815,.026,.42)),G,De),Me(_e,"CabinEave-6RafterTails",we(new He(.065,.09,.58)),G,[-2.65,0,2.65].flatMap(X=>[-1.81,1.81].map(Q=>({x:X,y:-.144,z:Q}))));let V=new kt;V.moveTo(2.06,.101),V.lineTo(2.145,.101),V.lineTo(2.145,-.044),V.lineTo(2.135,-.055),V.lineTo(2.1341,-.0542),V.lineTo(2.1438,-.0435),V.lineTo(2.1438,.0998),V.lineTo(2.06,.0998),V.closePath();let ge=new en(V,{depth:6.2,steps:1,bevelEnabled:!1});ge.rotateY(-Math.PI/2),ge.translate(3.1,0,0),ee(_e,"CabinLowEave-FoldedDripEdge",we(ge),de);let ie=1.35,F=c.position.y-.1/Math.cos(c.rotation.x)-(ie-c.position.z)*Math.tan(c.rotation.x),W=F-.11;Se(A,"CabinOpenFront-Header",1.15,F-.055,ie,4.9,.11,.14,J);for(let X of[2.2,3.48])Se(A,"CabinEntry-OpenJambFrame",X,(m+W)/2,ie,.065,W-m,.14,J),Se(A,"CabinEntry-TimberJambReveal",X+(X<3?.044:-.044),(m+W)/2,ie-.03,.024,W-m,.13,G);Se(A,"CabinEntry-HeadReveal",2.84,W-.02,ie-.03,1.215,.04,.13,G),Se(A,"CabinEntry-ThresholdStone",2.84,m+.016,ie+.025,1.215,.032,.3,oe);let k=we(new dt(.012,.012,.27,10));ee(A,"CabinEntry-JambGrabHandle",k,de,3.48,1.27,1.49);for(let X of[1.155,1.385]){let Q=Se(A,"CabinEntry-GrabHandleSeat",3.48,X,1.445,.036,.027,.09,de);Q.userData.notDoorOperatingHardware=!0}for(let X of[1.13,2.13])Se(A,"CabinOpenWindowBay-Stile",X,1.85,ie,.048,1.2,.11,J);for(let X of[1.25,2.45])Se(A,"CabinOpenWindowBay-Rail",1.63,X,ie,1.048,.048,.11,J);Se(A,"CabinOpenWindowBay-RevealedTimberSill",1.63,1.216,ie+.015,1.1,.028,.19,G);let re=[],ye=[];for(let X of[-4.45,-1.3,1.2,3.6,4.9])for(let Q of[-2.6,2.6]){let $=M(X,Q,.42,.42),j=$.min-.045,me=.035;re.push({x:X,y:(j+me)/2,z:Q,width:.42,height:me-j,depth:.42}),ye.push({x:X,z:Q,bottom:j,top:me,terrainMin:$.min,terrainMax:$.max})}he("CabinDeck-10GroundedConceptFootings",re,Y);for(let X of[-2.6,2.6])Se(A,"CabinDeck-FoundationBearer",.2,-.06,X,9.9,.18,.14,Ne);A.userData.footings=ye;let Re=.36,Ee=-.65,O=1.25,Ze=x.max.x-.13,Xe=m-g(Ze+4*Re+.08,Ee),ot=Math.max(2,Math.min(6,Math.ceil(Xe/.175))),Ce=g(Ze+ot*Re+.08,Ee),ft=(m-Ce)/ot,Ge=[],ke=[];for(let X=0;X<ot;X++){let Q=Ze+(X+.5)*Re,$=M(Q,Ee,Re,O),j=$.min-.045,me=m-X*ft;Se(A,"CabinEntry-GroundedEastStep-"+(X+1),Q,(me+j)/2,Ee,Re,me-j,O,oe),Ge.push({x:Q,z:Ee,width:Re,depth:O,bottom:j,top:me,terrainMin:$.min}),ke.push({x:Q+Re/2-.013,y:me-.009,z:Ee})}if(Me(A,"CabinEntry-RecessedStepNosing",we(new He(.026,.018,O)),de,ke),A.userData.entrySteps={side:"+X/east",run:Re,width:O,rise:ft,entryGround:Ce,records:Ge},ot>=4&&m-Ce>.5){let X=Ee-O/2+.085,Q=[Ge[0],Ge[Ge.length-1]];for(let ae of Q)ee(A,"CabinEntry-StairHandrailPost",we(new dt(.021,.021,.9,10)),J,ae.x,ae.top+.43,X);let $=new P(Q[0].x,Q[0].top+.88,X),j=new P(Q[1].x,Q[1].top+.88,X),me=j.clone().sub($),H=ee(A,"CabinEntry-SingleSlopingHandrail",we(new dt(.024,.024,me.length(),10)),J);H.position.copy($).add(j).multiplyScalar(.5),H.quaternion.setFromUnitVectors(new P(0,1,0),me.normalize()),A.userData.railing={stairOnly:!0,reason:"four risers and measured rise above 0.5 m",centerHeightAboveTread:.88,z:X,postEmbedment:.02,perimeterGuardAndCodeReview:"pending"}}else A.userData.railing="omitted: measured low stair; site-code/fall-risk review pending";let L=f.min.y-v.max.y;if(L>.002&&L<=.03){let X=Se(A,"PortableFieldStation-BenchSupportPlate",.55,(f.min.y+v.max.y)/2,2.05,1.12,L,.74,Ne);X.userData.architecturalSupportOnly=!0;let Q=v.max.y;he("PortableFieldStation-2DeckBearingSupports",[.06,1.04].map($=>({x:$,y:(m+Q)/2,z:2.36,width:.07,height:Q-m,depth:.07})),Ne),A.userData.portableSupport={thickness:L,top:f.min.y,bottom:v.max.y,center:[.55,2.05],size:[1.12,.74],feetRetained:!0,wheelsPresent:!1,contactSource:"existing procedural foot geometry and bench bounds; not manufacturer CAD"}}else A.userData.portableSupport={omitted:"No safe measured bench-to-foot gap; product remains untouched."};A.userData.pbrStatus=e.homePbr?"waiting-for-ready":"solid-material-fallback";function w(X){let Q=X.image;return!!Q&&(Q.naturalWidth??Q.width??0)>0&&(Q.naturalHeight??Q.height??0)>0}function K(){if(b||!e.homePbr)return;let X=[[G,e.homePbr.timber,1,.24],[Y,e.homePbr.plaster,1,.16],[oe,e.homePbr.paving,1,.28]];if(X.some(([,Q])=>[Q.color,Q.normal,Q.roughness,...Q.ao?[Q.ao]:[]].some($=>!w($)))){A.userData.pbrStatus="fallback-incomplete-source";return}for(let[Q,$,j,me]of X){for(let[H,ae]of[["map",$.color],["normalMap",$.normal],["roughnessMap",$.roughness],["aoMap",$.ao]]){if(!ae)continue;let Z=ae.clone();Z.wrapS=Z.wrapT=hn,Z.repeat.set(1/j,1/j),Z.offset.set(0,0),Z.rotation=0,Z.colorSpace=H==="map"?St:Yt,H==="aoMap"&&(Z.channel=1),Z.needsUpdate=!0,Q[H]=Z,N.add(Z)}Q.color.set(16777215),Q.roughness=1,Q.metalness=0,Q.normalScale.set(me,me),Q.aoMapIntensity=.55,Q.needsUpdate=!0}A.userData.pbrStatus="ready-clone-owned",A.userData.pbrMetresPerTile=1}e.homePbrReady?e.homePbrReady.then(K).catch(()=>{b||(A.userData.pbrStatus="fallback-load-failed")}):K();let Ae=0,ve=0;return A.traverse(X=>{X instanceof ue&&(Ae++,ve+=(X.geometry.index?.count??X.geometry.getAttribute("position").count)/3*(X instanceof Tt?X.count:1))}),A.userData.metrics={meshes:Ae,expandedTriangles:ve,ownedGeometries:C.size,ownedMaterials:D.size},s.add(A),{root:A,dispose(){b||(b=!0,A.removeFromParent(),I.forEach(X=>X.dispose()),C.forEach(X=>X.dispose()),D.forEach(X=>X.dispose()),N.forEach(X=>X.dispose()),C.clear(),D.clear(),N.clear(),I.length=0,A.clear(),A.userData.pbrStatus="disposed")}}}function Hs(i){let e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)}function Gt(i,e){let t=i-21,n=e-15.2,s=Math.exp(-(t*t)/145-n*n/95)*1.08,r=Math.hypot(i-4,e),o=bt.smoothstep(r,34,85),a=(Math.sin(i*.055)*Math.cos(e*.05)*1.45+Math.cos((i+e)*.035)*.85)*o;return s+a}function Nl(i,e,t,n,s){let r=new kt,o=i/2,a=e/2;r.moveTo(-o+n,-a),r.lineTo(o-n,-a),r.quadraticCurveTo(o,-a,o,-a+n),r.lineTo(o,a-n),r.quadraticCurveTo(o,a,o-n,a),r.lineTo(-o+n,a),r.quadraticCurveTo(-o,a,-o,a-n),r.lineTo(-o,-a+n),r.quadraticCurveTo(-o,-a,-o+n,-a);let c=new en(r,{depth:t,bevelEnabled:!0,bevelThickness:.05,bevelSize:.06,bevelSegments:2});c.rotateX(-Math.PI/2);let l=new ue(c,s);return l.castShadow=!1,l.receiveShadow=!0,l}function Ku(i,e){let t=new tt;t.name="AnthriseEnergyCampus";let n=ec(e),s=ku(Gt(21,15.2));t.add(s.group);let r=[],o=[],a=Ie=>(r.push(Ie),Ie),c=Ie=>(o.push(Ie),Ie),l=c(new qe({map:i.grassGround,color:7771490,roughness:.94,metalness:0})),h=c(new qe({map:i.limestoneWall,color:15329248,roughness:.86,metalness:.04})),p=c(new qe({map:i.limestoneWall,color:16184300,roughness:.82,metalness:.02})),u=c(new qe({color:3885133,roughness:.56,metalness:.28})),d=c(new qe({color:13949917,roughness:.55,metalness:.25})),x=c(new qe({color:12766417,roughness:.32,metalness:.72})),v=c(new qe({color:2503738,roughness:.38,metalness:.65})),f=c(new Pn({color:9942980,roughness:.12,metalness:.08,transparent:!0,opacity:.4,ior:1.48,reflectivity:.55})),m=c(new Pn({map:i.solarPanel,roughness:.22,metalness:.38,clearcoat:.65,clearcoatRoughness:.16})),_=c(new qe({map:i.timberDeck,color:14136203,roughness:.8,metalness:.04})),E=c(new qe({map:i.roadAsphalt,color:9279385,roughness:.88,metalness:.05})),y=c(new qe({color:27477,roughness:.44,metalness:.18})),S=c(new qe({color:15725299,roughness:.42,metalness:.22})),T=c(new qe({color:7305853,roughness:.72,metalness:.3})),g=[],M=[],A=[],C=a(new Ft(190,190,72,72));C.rotateX(-Math.PI/2);let D=C.attributes.position;for(let Ie=0;Ie<D.count;Ie++){let Je=D.getX(Ie),st=D.getZ(Ie);D.setY(Ie,Gt(Je,st))}C.computeVertexNormals();let N=new ue(C,l);N.receiveShadow=!0,t.add(N);let I=nc(),b=(Ie,Je,st)=>{let pt=[],It=[],on=[],gt=new P(0,1,0),Lt=new P;for(let Ct=0;Ct<=st;Ct++){let Bt=Ct/st,an=Ie.getPointAt(Bt),no=Ie.getTangentAt(Bt).normalize();Lt.crossVectors(no,gt).normalize();let Ul=Gt(an.x,an.z)+.045;if(pt.push(an.x-Lt.x*(Je*.5),Ul,an.z-Lt.z*(Je*.5)),pt.push(an.x+Lt.x*(Je*.5),Ul,an.z+Lt.z*(Je*.5)),It.push(Bt*6,0,Bt*6,1),Ct<st){let Ki=Ct*2;on.push(Ki,Ki+1,Ki+2,Ki+1,Ki+3,Ki+2)}}let Ht=new Nt;return Ht.setAttribute("position",new je(pt,3)),Ht.setAttribute("uv",new je(It,2)),Ht.setIndex(on),Ht.computeVertexNormals(),a(Ht)},z=new ue(b(I,tc,320),E);z.receiveShadow=!0,t.add(z);let B=a(new He(.65,.015,.12)),G=c(new dn({color:16777215,transparent:!0,opacity:.34})),oe=90,Y=new Tt(B,G,oe),J=new Mt;for(let Ie=0;Ie<oe;Ie++){let Je=(Ie+.5)/oe,st=I.getPointAt(Je),pt=I.getTangentAt(Je);J.position.set(st.x,Gt(st.x,st.z)+.06,st.z),J.rotation.set(0,Math.atan2(-pt.z,pt.x),0),J.scale.setScalar(1),J.updateMatrix(),Y.setMatrixAt(Ie,J.matrix)}Y.instanceMatrix.needsUpdate=!0,t.add(Y);let de=new xn([new P(30.5,0,7.2),new P(28.5,0,11.2),new P(25.2,0,14.2)]),Ne=c(new qe({color:13157044,roughness:.92,metalness:.02})),we=new ue(b(de,1.35,22),Ne);we.receiveShadow=!0,t.add(we);let ee=new tt;ee.position.set(-11.5,0,2),t.add(ee);let Se=Nl(17.4,12.6,.2,.7,h);Se.name="HomeFootingPad",Se.position.set(0,0,.2),ee.add(Se),r.push(Se.geometry);let te=a(new He(5.8,.08,3.6)),Me=new ue(te,E);Me.position.set(-4.6,.23,6.2),Me.receiveShadow=!0,ee.add(Me);for(let Ie=0;Ie<5;Ie++){let Je=a(new He(.9,.05,.55)),st=new ue(Je,h);st.position.set(2.2+Ie*1.15,.26,4.4),st.receiveShadow=!0,ee.add(st)}let he=new tt;he.position.set(0,.26,-.3),ee.add(he);let Fe=new ue(a(new He(7.2,.14,5.2)),_);Fe.position.set(2.8,.07,0),Fe.receiveShadow=!0,he.add(Fe);let rt=new ue(a(new He(7.3,3.4,.26)),p);rt.position.set(2.8,1.7,-2.47),rt.castShadow=!0,rt.receiveShadow=!0,he.add(rt);let pe=new ue(a(new He(.26,3.4,5.2)),p);pe.position.set(6.32,1.7,0),pe.castShadow=!0,pe.receiveShadow=!0,he.add(pe);let _e=new ue(a(new He(7.3,.42,.34)),u);_e.position.set(2.8,3.22,2.43),_e.castShadow=!0,he.add(_e),[-.75,2.8,6.2].forEach(Ie=>{let Je=new ue(a(new He(.11,3.1,.14)),v);Je.position.set(Ie,1.55,2.44),he.add(Je)});let De=new ue(a(new Ft(3.3,2.9)),f);De.position.set(4.5,1.6,2.44),he.add(De);let V=new ue(a(new He(1.45,.4,.32)),S);V.position.set(2.6,2.75,-2.18),he.add(V);let ge=new ue(a(new He(1.25,.05,.06)),v);ge.position.set(2.6,2.6,-2.02),he.add(ge);let ie=c(new qe({color:14279140,roughness:.28,metalness:.45})),F=new ue(a(new He(.95,2.05,.85)),ie);F.position.set(-.05,1.08,-1.75),F.castShadow=!0,he.add(F);let W=new ue(a(new He(3.2,.03,2.2)),c(new qe({color:13227215,roughness:.95})));W.position.set(2.9,.15,.2),he.add(W);let k=c(new qe({color:5401191,roughness:.86})),re=new ue(a(new He(2.3,.52,.95)),k);re.position.set(2.9,.4,-1.05),he.add(re);let ye=new ue(a(new He(2.3,.55,.25)),k);ye.position.set(2.9,.78,-1.4),he.add(ye);let Re=new ue(a(new He(1.15,.34,.65)),_);Re.position.set(2.9,.32,.25),he.add(Re);let Ee=new ue(a(new He(.48,.5,1.75)),_);Ee.position.set(5.9,.38,.1),he.add(Ee);let O=c(new qe({color:1977395,emissive:6797526,emissiveIntensity:.12,roughness:.25}));g.push({material:O,intensity:.32});let Ze=new ue(a(new He(.08,.9,1.48)),O);Ze.position.set(6.08,1.45,.1),he.add(Ze);let Xe=c(new qe({color:16774108,emissive:16759388,emissiveIntensity:.25,roughness:.35}));g.push({material:Xe,intensity:1.65});let ot=new ue(a(new dt(.18,.42,.28,18)),Xe);ot.position.set(2.9,2.95,.2),he.add(ot);let Ce=new tn(16762763,0,9,2);Ce.name="HomeInterior-Practical",Dn(Ce,"home",0),Ce.position.set(2.9,2.65,.2),he.add(Ce),A.push({light:Ce,maxIntensity:32});let ft=new tt;ft.position.set(.3,3.68,0),he.add(ft);let Ge=new ue(a(new He(13.2,.28,6.4)),u);Ge.rotation.x=.22,Ge.position.set(0,.55,.1),Ge.castShadow=!0,Ge.receiveShadow=!0,ft.add(Ge);let ke=Yu(he,ft,Ge,i);for(let Ie=0;Ie<2;Ie++)for(let Je=0;Je<4;Je++){let st=new ue(a(new He(2.55,.08,1.9)),x),pt=new ue(a(new Ft(2.45,1.8)),m);pt.rotation.x=-Math.PI/2,pt.position.y=.045;let It=new tt;It.add(st,pt),It.name="HomePVModule",It.position.set(-4.2+Je*2.8,.29,Ie===0?-1.15:1.05);for(let on of[-1.22,1.22]){let gt=new ue(a(new He(.045,.09,.11)),x);gt.position.set(on,.01,.58),It.add(gt)}ke.roofMount.add(It)}let L=n.inverter(!1,!0);L.position.set(-4.3,1.95,2.9),he.add(L);let w=n.battery(!0);w.position.set(-2.75,0,2.98),he.add(w);let K=Zu(he,w,L,i),Ae=new ue(a(new dt(.14,.19,6.6,12)),T);Ae.position.set(-9.6,3.3,-.8),Ae.castShadow=!0,he.add(Ae);let ve=new ue(a(new He(.16,.14,1.65)),v);ve.position.set(-9.6,6.1,-.8),he.add(ve);let X=new ue(a(new He(.18,.85,.72)),S);X.position.set(-6.08,1.85,-.8),he.add(X);let Q=new ue(a(new He(.2,1.05,.92)),v);Q.position.set(-6.08,1.85,.45),he.add(Q);let $=new ue(a(new dt(.08,.11,1.55,10)),v);$.position.set(7.1,1.02,4.4),$.castShadow=!0,ee.add($);let j=c(new qe({color:16708824,emissive:16762472,emissiveIntensity:.04,roughness:.25}));M.push(j);let me=new ue(a(new dt(.24,.19,.28,14)),j);me.position.set(7.1,1.84,4.4),ee.add(me);let H=new ue(a(new dt(.25,.25,.04,14)),m);H.position.set(7.1,2,4.4),ee.add(H);let ae=new tn(16763768,0,6.5,2);ae.name="HomeCourtyard-Practical",Dn(ae,"home",1),ae.position.set(7.1,1.75,4.4),ee.add(ae),A.push({light:ae,maxIntensity:18});let Z=new tt;Z.position.set(19,0,-7),t.add(Z);let Pe=Nl(22.4,16.5,.26,.85,h);Pe.position.set(0,0,.4),Z.add(Pe),r.push(Pe.geometry);let Te=new tt;Te.position.set(.8,.26,-1.6),Z.add(Te);let Ue=new ue(a(new He(9.6,5.2,8.2)),d);Ue.position.set(-3.2,2.6,0),Ue.castShadow=!0,Ue.receiveShadow=!0,Te.add(Ue);let $e=c(new qe({color:14936038,emissive:16764040,emissiveIntensity:.04,roughness:.72}));g.push({material:$e,intensity:.92});let ne=new ue(a(new He(7,4.2,7)),$e);ne.position.set(4.8,2.2,0),Te.add(ne);let U=new ue(a(new He(7.4,4.5,7.6)),f);U.position.set(4.8,2.35,0),Te.add(U),[.2,2.35,4.65].forEach(Ie=>{let Je=new ue(a(new He(7.7,.22,7.9)),u);Je.position.set(4.8,Ie,0),Je.castShadow=!0,Te.add(Je)}),[1.2,3.6,6,8.4].forEach(Ie=>{let Je=new ue(a(new He(.16,4.6,.18)),v);Je.position.set(Ie,2.3,3.84),Te.add(Je)});let ce=new tn(16763775,0,11,2);ce.name="CommercialOffice-Practical",Dn(ce,"commercial",0),ce.position.set(4.8,3,4.5),Te.add(ce),A.push({light:ce,maxIntensity:40}),[-4.6,-2.1].forEach(Ie=>{let Je=new ue(a(new He(1.75,1,1.5)),x);Je.position.set(Ie+8.5,5.25,-1.8),Je.castShadow=!0,Te.add(Je);let st=new ue(a(new dt(.48,.48,.14,16)),v);st.position.set(Ie+8.5,5.8,-1.8),Te.add(st)});for(let Ie=0;Ie<2;Ie++)for(let Je=0;Je<5;Je++){let st=new ue(a(new He(2.55,.09,2.15)),x),pt=new ue(a(new Ft(2.45,2.05)),m);pt.rotation.x=-Math.PI/2,pt.position.y=.05;let It=new tt;It.add(st,pt),It.rotation.x=.24,It.position.set(-6+Je*2.8,5.55,-2+Ie*2.8),Te.add(It)}[-6.8,-5.3].forEach(Ie=>{let Je=n.cabinet();Je.position.set(Ie,.2,3.55),Z.add(Je)});let be=n.inverter(!0);be.position.set(-3.4,1.6,3.55),Z.add(be);let xe=new ue(a(new He(1.55,.2,.85)),v);xe.position.set(-3.4,.4,3.55),Z.add(xe);for(let Ie of[-3.9,-2.9])n.box(Z,Ie,1.4,3.23,.06,2.3,.08,v);for(let Ie of[1.2,2.2])n.box(Z,-3.4,Ie,3.26,1.1,.06,.08,v);let et=new ue(a(new He(1.45,2.05,.95)),u);et.position.set(-1.3,1.28,3.55),et.castShadow=!0,Z.add(et);let nt=new ue(a(new dt(.16,.22,7.2,12)),T);nt.position.set(-10.5,3.6,-4.5),nt.castShadow=!0,Z.add(nt),[[-1.2,8.8],[7.2,8.6]].forEach(([Ie,Je],st)=>{let pt=new ue(a(new dt(.09,.13,4.4,10)),v);pt.position.set(Ie,2.2,Je),pt.castShadow=!0,Z.add(pt);let It=new ue(a(new He(1.35,.14,.46)),x);It.position.set(Ie,4.4,Je-.32),Z.add(It);let on=new ue(a(new Ft(1.28,.42)),m);on.rotation.x=-Math.PI/2,on.position.set(Ie,4.48,Je-.32),Z.add(on);let gt=c(new qe({color:16777215,emissive:16770216,emissiveIntensity:.05,roughness:.2}));M.push(gt);let Lt=new ue(a(new He(.88,.06,.32)),gt);Lt.position.set(Ie,4.31,Je-.32),Z.add(Lt);let Ht=new tn(16768944,0,13,2);Ht.name=`SpineRoad-${st+1}-Practical`,Dn(Ht,"road",st),Ht.position.set(Ie,4,Je-.3),Z.add(Ht),A.push({light:Ht,maxIntensity:80})});let sn=Gt(21,15.2),ut=new tt;ut.position.set(21,sn,15.2),t.add(ut);let jn=Nl(10.6,6.8,.28,.45,_);jn.position.set(.2,.02,0),ut.add(jn),r.push(jn.geometry);let qi=new ue(a(new He(5.2,2.75,.24)),_);qi.position.set(1.2,1.68,-1.65),qi.castShadow=!0,ut.add(qi);let Yi=new ue(a(new He(.24,2.75,3.2)),u);Yi.position.set(3.7,1.68,-.15),Yi.castShadow=!0,ut.add(Yi);let wn=new ue(a(new He(6.2,.2,4.2)),u);wn.rotation.x=.14,wn.position.set(1.2,3.22,-.1),wn.castShadow=!0,ut.add(wn),[-1.3,3.6].forEach(Ie=>{let Je=new ue(a(new dt(.08,.08,2.75,8)),v);Je.position.set(Ie,1.68,1.35),ut.add(Je)});let Zi=new ue(a(new He(2.1,.72,.85)),_);Zi.position.set(1.6,.68,-.8),ut.add(Zi);let Os=c(new qe({color:1451562,emissive:6478268,emissiveIntensity:.35,roughness:.25}));g.push({material:Os,intensity:.4});let Ji=new ue(a(new He(.54,.36,.04)),Os);Ji.position.set(1.4,1.24,-.88),Ji.rotation.x=-.15,ut.add(Ji);let wi=new ue(a(new He(.68,.56,.48)),S);wi.position.set(2.9,.6,-.8),ut.add(wi);let zs=c(new qe({color:16773332,emissive:16758614,emissiveIntensity:.1,roughness:.28}));g.push({material:zs,intensity:1.8});let Gs=new ue(a(new dt(.14,.16,.28,12)),zs);Gs.position.set(.8,2.6,.6),ut.add(Gs);let Nn=new tn(16760422,0,8,2);Nn.name="OffgridCabin-Practical",Dn(Nn,"offgrid",0),Nn.position.set(.8,2.45,.6),ut.add(Nn),A.push({light:Nn,maxIntensity:28});let $i=new tt;$i.position.set(-5.2,.1,-.7),ut.add($i),[-1,1].forEach(Ie=>{let Je=new ue(a(new dt(.06,.07,1.15,8)),v);Je.position.set(Ie,.55,.65);let st=new ue(a(new dt(.06,.07,2.15,8)),v);st.position.set(Ie,1.05,-.65),$i.add(Je,st)});for(let Ie=0;Ie<2;Ie++){let Je=new ue(a(new He(1.75,.08,2.35)),x),st=new ue(a(new Ft(1.65,2.25)),m);st.rotation.x=-Math.PI/2,st.position.y=.05;let pt=new tt;pt.add(Je,st),pt.rotation.x=.56,pt.position.set(Ie===0?-.95:.95,1.48,0),$i.add(pt)}let ks=new ue(a(new He(3.8,.22,1.15)),u);ks.position.set(-.9,.36,1.65),ut.add(ks);let Vs=n.seed();Vs.position.set(-2.1,.48,1.65),ut.add(Vs);let to=n.portable();to.position.set(.55,.48,2.05),ut.add(to);let Ws=new ue(a(new He(1.3,.05,1.4)),m);Ws.rotation.x=.6,Ws.position.set(2,.65,3.6),ut.add(Ws),n.box(ut,-.6,1.4,-1.78,.23,.3,.1,v,.015);let Xs=new ue(a(new dt(.09,.14,4.35,10)),v);Xs.position.set(5.8,2.15,1.3),Xs.castShadow=!0,ut.add(Xs);let qs=new ue(a(new He(.32,.56,.24)),x);qs.position.set(5.8,3.15,1.44),ut.add(qs);let R=new ue(a(new He(1.15,.06,.88)),x);R.rotation.x=.42,R.position.set(5.8,4.5,1.3),ut.add(R);let q=new ue(a(new Ft(1.08,.8)),m);q.rotation.x=-Math.PI/2+.42,q.position.set(5.8,4.54,1.32),ut.add(q);let fe=new ue(a(new He(1.25,.1,.2)),v);fe.position.set(5.2,3.92,1.3),ut.add(fe);let se=c(new qe({color:16775398,emissive:16765306,emissiveIntensity:.06,roughness:.2}));M.push(se);let le=new ue(a(new He(.64,.09,.34)),se);le.position.set(4.65,3.88,1.3),ut.add(le);let Be=new tn(16766856,0,14,2);Be.name="OffgridTrail-Practical",Dn(Be,"offgrid",2),Be.position.set(4.65,3.65,1.3),ut.add(Be),A.push({light:Be,maxIntensity:75});let Ke=a(new dt(.11,.16,1.15,7));Ke.translate(0,.58,0);let Oe=c(new qe({color:7297607,roughness:.9})),ze=a(new Zn(.95,1));ze.scale(1,1.35,1),ze.translate(0,1.85,0);let it=c(new qe({color:6065005,roughness:.85})),lt=[[-22.5,-6.5,1.05],[-21,5.2,.85],[-16,-7.2,1.15],[-2.5,-5.8,1.1],[-1.2,.2,.9],[3.8,-9.5,1.25],[5.2,2.2,.95],[7.2,-16.5,1.15],[14.2,-16.8,1.2],[29.5,-14.8,1.1],[32.4,-7.2,1.15],[33.8,.5,1],[10.2,13.8,1.1],[11.4,21.2,1.25],[16.2,22.8,.95],[27.4,21.8,1.15],[31.8,17.5,1.05],[-8.5,16.2,1.1],[-18.8,15,1.2],[-26.5,6.2,1.25],[-25.5,-13,1.3],[22.5,-18.5,1.18]],xt=new Tt(Ke,Oe,lt.length),Ye=new Tt(ze,it,lt.length);xt.castShadow=!0,Ye.castShadow=!0,lt.forEach(([Ie,Je,st],pt)=>{let It=Gt(Ie,Je);J.position.set(Ie,It,Je),J.rotation.set(0,Hs(pt)*Math.PI*2,0),J.scale.setScalar(st),J.updateMatrix(),xt.setMatrixAt(pt,J.matrix),Ye.setMatrixAt(pt,J.matrix),Ye.setColorAt(pt,new Ve().setHSL(.39+(Hs(pt+5)-.5)*.04,.26,.42+Hs(pt+12)*.08))}),xt.instanceMatrix.needsUpdate=!0,Ye.instanceMatrix.needsUpdate=!0,Ye.instanceColor&&(Ye.instanceColor.needsUpdate=!0);let vt=a(new yr(.55,0)),zt=c(new qe({color:11449261,roughness:.92})),At=[[13.8,13,.9],[14.9,17.2,.65],[17.6,20.6,1.1],[24.2,20,.85],[28.5,18.8,1.05],[29.5,12.6,.72],[12.2,10.6,.8],[8.6,15.8,1.15]],wt=new Tt(vt,zt,At.length);At.forEach(([Ie,Je,st],pt)=>{J.position.set(Ie,Gt(Ie,Je)+.15,Je),J.rotation.set(Hs(pt)*.6,Hs(pt+9)*Math.PI,Hs(pt+17)*.5),J.scale.set(st*1.25,st*.72,st),J.updateMatrix(),wt.setMatrixAt(pt,J.matrix)}),wt.instanceMatrix.needsUpdate=!0;let $t=Ju(t,i),Qe=$u(t,i),Kt=Ie=>{let Je=bt.clamp(Ie,0,1);g.forEach(({material:st,intensity:pt})=>{st.emissiveIntensity=pt*Je}),M.forEach(st=>{st.emissiveIntensity=1.9*Je}),A.forEach(st=>{st.light.intensity=st.maxIntensity*Je}),ke.setNightFactor(Je)};return Kt(0),{root:t,terrainHeightAt:Gt,setNightFactor:Kt,dispose:()=>{$t.dispose(),Qe.dispose(),K.dispose(),ke.dispose(),n.dispose(),s.dispose(),r.forEach(Ie=>Ie.dispose()),o.forEach(Ie=>Ie.dispose())}}}function Qu(i,e,t){let n=ec(t),s=new tt;s.name="ArchitecturalDetailLayer",i.add(s);let r=[],o=[],a=[],c=ne=>(r.push(ne),ne),l=ne=>(o.push(ne),ne),h=(ne,U=.75,ce=0)=>l(new qe({color:ne,roughness:U,metalness:ce})),p=h(14210505,.88),u=h(2505270,.36,.4),d=h(9398085,.85),x=h(12500917,.9),v=new Ve(6718864),f=new Ve(11770232),m=l(new Pn({color:v,roughness:.12,metalness:.08,transparent:!0,opacity:.68,envMapIntensity:.95,emissive:16760181,emissiveIntensity:0})),_=h(15921640,.64),E=h(2107429,.54,.25),y=h(6837061,.95),S=l(new qe({color:16772547,emissive:16759139,emissiveIntensity:0,roughness:.6})),T=c(new He(1,1,1));function g(ne,U,ce,be,xe,et,nt,yt,sn=!1){let ut=new ue(sn?c(new Us(xe,et,nt,2,Math.min(xe,et,nt)*.12)):T,yt);return sn||ut.scale.set(xe,et,nt),ut.position.set(U,ce,be),ut.castShadow=!0,ut.receiveShadow=!0,ne.add(ut),ut}function M(ne,U,ce,be,xe){let et=ce.clone().sub(U),nt=new ue(c(new dt(be*.74,be,et.length(),14)),xe);return nt.position.copy(U).add(ce).multiplyScalar(.5),nt.quaternion.setFromUnitVectors(new P(0,1,0),et.normalize()),nt.castShadow=!0,ne.add(nt),nt}function A(ne,U,ce,be){let xe=new xn(U),et=new ue(c(new _n(xe,48,ce,6,!1)),be);return ne.add(et),et}let D=new li().load("/assets/brand/anthrise-official.png",t);D.colorSpace=St,a.push(D);let N=l(new qe({map:D,color:16777215,roughness:.65,metalness:0})),I=new tt;I.position.set(.8,Gt(.8,-12.8)+.1,-12.8),I.name="AnthriseConceptOffice",s.add(I),g(I,0,.02,0,11,.22,8,x),g(I,0,4.25,0,9.6,8.2,5.8,p),g(I,0,4.3,3.02,8.9,7.5,.1,m);for(let ne=0;ne<4;ne++){let U=.6+ne*2;g(I,0,U,3.13,9.7,.14,.3,u);for(let ce=0;ce<7;ce++)g(I,-4.4+ce*1.47,U+.92,3.12,.055,1.84,.16,u);for(let ce=0;ce<5;ce++)g(I,-3.5+ce*1.6,U+.4,1.95,.95,.05,.5,d),g(I,-3.5+ce*1.6,U+.7,2.1,.35,.35,.1,E)}g(I,-3.4,1,3.15,2.2,2,.08,m);for(let ne of[-3.9,-2.9])g(I,ne,.95,3.25,.04,.5,.05,u);g(I,-2.9,2.25,3.65,3.8,.12,1.5,u),g(I,2.2,6.8,3.18,4.1,2.1,.15,_);let b=new ue(c(new Ft(3.55,.68)),N);b.position.set(2.2,7.05,3.27),I.add(b);let z=document.createElement("canvas");z.width=768,z.height=100;let B=z.getContext("2d");B.clearRect(0,0,768,100),B.fillStyle="#174e40",B.font="500 49px sans-serif",B.textAlign="center",B.fillText("T E C H N O L O G Y",384,66);let G=new gn(z);G.colorSpace=St,a.push(G);let oe=new ue(c(new Ft(3.1,.4)),l(new qe({map:G,transparent:!0,roughness:.8})));oe.position.set(2.2,6.42,3.28),I.add(oe),g(I,0,8.48,0,10.1,.24,6.3,u);for(let ne=0;ne<4;ne++)g(I,-3.3+ne*2.1,8.7,-.8,1.7,.08,2.5,l(new qe({map:e.solarPanel,roughness:.25,metalness:.3})));let Y=new tt;Y.position.set(-11.5,.26,1.7),s.add(Y);for(let ne of[.42,.94,2.98,3.49])g(Y,-3.4,ne,2.715,5.12,.012,.025,x);for(let ne of[-5.5,-3.15,-2.05,-.95])g(Y,ne,1.75,2.72,.012,3.3,.025,x);for(let ne of[-.76,2.8,6.2])g(Y,ne,1.55,2.5,.045,3.02,.04,_),g(Y,ne,1.1,2.55,.04,.38,.04,u);let J=new P(-6.3,4.23-.11*Math.cos(.22)-3.29*Math.sin(.22),.1-.11*Math.sin(.22)+3.29*Math.cos(.22));A(Y,[J,new P(-6.3,3.1,2.85),new P(-6.3,.2,2.85)],.055,u);let de=g(Y,-.05,1.08,-1.29,.91,2,.03,_);g(Y,.29,1.2,-1.25,.04,.65,.07,u),g(Y,-.05,1.4,-1.24,.85,.018,.03,u);let Ne=g(Y,5.15,.65,-1.6,1.25,1.15,.8,d);g(Y,5.15,1.25,-1.6,1.35,.08,.9,p);for(let ne=0;ne<2;ne++){let U=new ue(c(new dt(.18,.18,.02,24)),E);U.position.set(4.85+ne*.6,1.31,-1.6),Y.add(U)}g(Y,5.15,.7,-1.17,.85,.62,.04,E);let we=new tt;we.position.set(18.5,.25,-7.8),s.add(we);for(let ne=0;ne<22;ne++)g(we,-6.5+ne*.6,2.7,4.83,.025,5.3,.03,x);for(let ne=1;ne<5;ne++)g(we,0,ne,4.84,13.2,.022,.025,x);g(we,3.6,1.6,4.9,3.3,3.1,.14,u);for(let ne=0;ne<10;ne++)g(we,3.6,.35+ne*.27,5,3.1,.16,.04,x);g(we,3.6,3.25,5.1,3.9,.12,.7,u);for(let ne of[-4.2,-1.3,1.7]){g(we,ne,5.65,1,1.5,.45,1.2,x);for(let U=0;U<9;U++)g(we,ne-.6+U*.15,5.91,1,.04,.025,1,u)}let ee=nc(),Se=h(13158073,.9),te=l(new dn({color:15131862}));for(let ne of[-1,1]){let U=[];for(let ce=0;ce<=140;ce++){let be=ce/140,xe=ee.getPointAt(be),et=ee.getTangentAt(be),nt=new P(-et.z,0,et.x).normalize();xe.addScaledVector(nt,ne*(tc/2+.05)),xe.y=Gt(xe.x,xe.z)+.12,U.push(xe)}A(s,U,.065,Se)}for(let ne=0;ne<7;ne++)g(s,-1.1+ne*.47,Gt(0,6.8)+.07,6.8,.27,.015,2.45,te);let Me=h(3753024,.65,.4),he=h(10272181,.2,.15),Fe=[[-24,1],[-24,-10],[-6,-18],[13,-19],[29,-18]];for(let[ne,U]of Fe){let ce=Gt(ne,U);M(s,new P(ne,ce,U),new P(ne,ce+7.4,U),.105,d),g(s,ne,ce+6.9,U,2.3,.13,.18,d);for(let be of[-.87,0,.87]){M(s,new P(ne+be,ce+6.95,U),new P(ne+be,ce+7.23,U),.06,he);let xe=new ue(c(new zn(.1,.023,5,12)),he);xe.rotation.x=Math.PI/2,xe.position.set(ne+be,ce+7.15,U),s.add(xe)}}for(let ne=0;ne<Fe.length-1;ne++)for(let U of[-.87,0,.87]){let ce=Fe[ne],be=Fe[ne+1],xe=Gt(...ce)+7.24,et=Gt(...be)+7.24;A(s,[new P(ce[0]+U,xe,ce[1]),new P((ce[0]+be[0])/2+U,(xe+et)/2-.5,(ce[1]+be[1])/2),new P(be[0]+U,et,be[1])],.016,Me)}let rt=[[-22.5,-6.5,1.05],[-21,5.2,.85],[-16,-7.2,1.15],[-2.5,-5.8,1.1],[-1.2,.2,.9],[5.2,2.2,.95],[14.2,-16.8,1.2],[29.5,-14.8,1.1],[32.4,-7.2,1.15],[33.8,.5,1],[10.2,13.8,1.1],[11.4,21.2,1.25],[16.2,22.8,.95],[27.4,21.8,1.15],[31.8,17.5,1.05],[-8.5,16.2,1.1],[-18.8,15,1.2],[-26.5,6.2,1.25],[-25.5,-13,1.3],[22.5,-18.5,1.18]],pe=document.createElement("canvas");pe.width=64,pe.height=128;let _e=pe.getContext("2d");_e.fillStyle="#ffffff",_e.beginPath(),_e.ellipse(32,61,25,55,-.12,0,Math.PI*2),_e.fill(),_e.strokeStyle="#c0d3ad",_e.lineWidth=2,_e.beginPath(),_e.moveTo(31,113),_e.lineTo(33,8),_e.stroke();let De=new gn(pe);De.colorSpace=St,a.push(De);let V=l(new qe({map:De,transparent:!1,alphaTest:.5,side:Wt,color:6523707,roughness:.9})),ge=window.innerWidth<=768?130:240,ie=new Tt(c(new Ft(.28,.49,2,3)),V,rt.length*ge);ie.castShadow=!1;let F=new Mt,W=0,k=ne=>{let U=Math.sin(ne*78.233+11.73)*43758.5453;return U-Math.floor(U)};rt.forEach(([ne,U,ce],be)=>{let xe=Gt(ne,U),et=3.3*ce;M(s,new P(ne,xe,U),new P(ne+.12,xe+et*.8,U),.115*ce,y);for(let nt=0;nt<7;nt++){let yt=nt*2.399+be,sn=new P(ne+Math.sin(yt)*.9*ce,xe+et*(.58+k(be*13+nt)*.24),U+Math.cos(yt)*.9*ce);M(s,new P(ne,xe+et*.42,U),sn,.045*ce,y)}for(let nt=0;nt<ge;nt++){let yt=be*997+nt,sn=k(yt+1)*Math.PI*2,ut=Math.sqrt(k(yt+3))*1.38*ce;F.position.set(ne+Math.cos(sn)*ut,xe+et*.64+(k(yt+7)-.35)*1.8*ce,U+Math.sin(sn)*ut),F.rotation.set(k(yt+9)*Math.PI,k(yt+10)*Math.PI,k(yt+11)*Math.PI),F.scale.setScalar((.7+k(yt+12)*1.2)*ce),F.updateMatrix(),ie.setMatrixAt(W,F.matrix),ie.setColorAt(W,new Ve().setHSL(.23+k(yt+14)*.11,.3+k(yt+15)*.2,.3+k(yt+16)*.16)),W++}}),s.add(ie);let re=h(7902548,.95),ye=h(10716327,.85),Re=h(15131589,.8),Ee=new kt;Ee.moveTo(-.023,0),Ee.quadraticCurveTo(-.035,.3,.12,.65),Ee.quadraticCurveTo(.035,.25,.023,0);let O=c(new Cr(Ee));re.side=Wt;let Ze=1100,Xe=new Tt(O,re,Ze);for(let ne=0;ne<Ze;ne++){let U=ne%2===0,ce=U?-22+k(ne*7)*20:10+k(ne*7)*23,be=U?13.4+k(ne*13)*3.8:19.8+k(ne*13)*5.5;F.position.set(ce,Gt(ce,be)+.14,be),F.rotation.set((k(ne+6)-.5)*.5,k(ne+8)*Math.PI*2,(k(ne+11)-.5)*.5),F.scale.set(.5+k(ne+2),.35+k(ne+5)*.6,.5+k(ne+9)),F.updateMatrix(),Xe.setMatrixAt(ne,F.matrix)}s.add(Xe);let ot=c(new Zn(.075,1));for(let ne=0;ne<2;ne++){let U=new Tt(ot,ne?Re:ye,180);for(let ce=0;ce<180;ce++){let be=-20+k(ce*3+ne*8)*15,xe=13+k(ce*7+ne)*2;F.position.set(be,Gt(be,xe)+.38+k(ce)*.17,xe),F.scale.setScalar(.7+k(ce+4)*.6),F.updateMatrix(),U.setMatrixAt(ce,F.matrix)}s.add(U)}let Ce=c(new Zn(1,4)),ft=Ce.getAttribute("position");for(let ne=0;ne<ft.count;ne++){let U=new P().fromBufferAttribute(ft,ne),ce=1+.12*Math.sin(U.x*6+U.y*9)+.07*Math.cos(U.z*13);ft.setXYZ(ne,U.x*ce,U.y*ce*.6,U.z*ce)}Ce.computeVertexNormals();let Ge=h(10065802,.97);for(let ne=0;ne<18;ne++){let U=12+k(ne+44)*19,ce=20+k(ne+61)*6,be=new ue(Ce,Ge);be.position.set(U,Gt(U,ce)+.13,ce),be.scale.setScalar(.25+k(ne+77)*.9),be.rotation.y=k(ne+83)*6,be.castShadow=!0,be.receiveShadow=!0,s.add(be)}let ke=new tt;ke.position.set(18,Gt(18,19.2)+.12,19.2),s.add(ke),g(ke,0,1,0,2.6,.12,1.1,d);for(let ne of[-1,1])for(let U of[-.37,.37])g(ke,ne,.5,U,.075,1,.075,u);let L=n.portable();L.position.set(-.5,1.06,0),ke.add(L);let w=g(ke,.65,1.49,-.1,.8,.52,.035,u);w.rotation.x=-.16,g(ke,.65,1.08,.12,.8,.03,.5,u);let K=l(new qe({color:11389393,emissive:8235173,emissiveIntensity:0}));g(ke,.65,1.49,-.075,.68,.4,.008,K);let Ae=new ue(c(new dt(.11,.11,.32,24)),S);Ae.name="CampLantern",Ae.position.set(1.08,1.26,.1),ke.add(Ae);let ve=new tn(16761211,0,5.5,2);ve.name="CampLantern-Practical",ve.position.set(1.08,1.32,.1),ke.add(ve),Dn(ve,"offgrid",1);let X=new ue(c(new dt(.13,.13,.035,24)),E);X.position.set(1.08,1.44,.1),ke.add(X);let Q=new ue(c(new zn(.105,.011,8,24,Math.PI)),u);Q.position.set(1.08,1.46,.1),ke.add(Q);for(let ne=0;ne<2;ne++){let U=g(ke,-2.05-ne*.85,.6,1,.8,.045,1.3,l(new qe({map:e.solarPanel,roughness:.28,metalness:.25})));U.rotation.x=.58}A(ke,[new P(-2.1,.24,1.45),new P(-1.5,.1,1.6),new P(-.035,.2,.6),new P(-.035,1.34,0)],.024,E),A(ke,[new P(-.4,1.28,.313),new P(.05,1.14,.4),new P(.6,1.13,.3)],.018,E);let $=new tt;$.position.set(4,0,1.5),ke.add($);let j=l(new qe({color:11837560,roughness:.9,emissive:12088629,emissiveIntensity:0})),me=c(new Ni(1.5,1.9,4,1,!0)),H=new ue(me,j);H.position.y=.95,H.rotation.y=Math.PI/4,H.scale.z=1.45,$.add(H),M($,new P(-1.2,0,.8),new P(0,1.9,0),.025,u),M($,new P(1.2,0,.8),new P(0,1.9,0),.025,u);let ae=c(new dt(.22,.22,.14,16)),Z=h(2369575,.95),Pe=h(11976641,.25,.8),Te=h(2704462,.16,.35),Ue=h(14411231,.24,.15);return[{x:-17.2,z:8,y:.24,yaw:Math.PI/2,color:14476511},{x:26.5,z:-.4,y:.28,yaw:0,color:2378560},{x:28.5,z:-.4,y:.28,yaw:0,color:8885923}].forEach(({x:ne,z:U,y:ce,yaw:be,color:xe},et)=>{let nt=new tt;nt.name="StaticParkedVehicle"+et,g(nt,0,.47,0,1.04,.44,2.35,h(xe,.27,.55),!0),g(nt,0,.88,-.12,.9,.53,1.35,Te,!0),g(nt,0,1.12,-.12,.91,.06,1.1,h(xe,.27,.55),!0);for(let yt of[-.7,.52])g(nt,0,.88,yt,.92,.035,.045,u);for(let yt of[-.52,.52])g(nt,yt,.86,-.12,.035,.53,.08,u);for(let yt of[-.51,.51])for(let sn of[-.76,.76]){let ut=new ue(ae,Z);ut.rotation.z=Math.PI/2,ut.position.set(yt,.25,sn),nt.add(ut);let jn=new ue(c(new dt(.11,.11,.151,12)),Pe);jn.rotation.z=Math.PI/2,jn.position.copy(ut.position),nt.add(jn)}for(let yt of[-.34,.34])g(nt,yt,.56,1.18,.2,.1,.03,Ue),g(nt,yt,.56,-1.18,.2,.1,.03,h(9978680,.35));nt.position.set(ne,ce,U),nt.rotation.y=be,s.add(nt)}),{root:s,setNightFactor(ne){let U=bt.clamp(ne,0,1);m.color.copy(v).lerp(f,U),m.opacity=bt.lerp(.68,.88,U),m.emissiveIntensity=U*.95,S.emissiveIntensity=U*1.8,j.emissiveIntensity=U*.18,K.emissiveIntensity=U*.24,ve.intensity=U*16},dispose(){n.dispose(),r.forEach(ne=>ne.dispose()),o.forEach(ne=>ne.dispose()),a.forEach(ne=>ne.dispose()),s.removeFromParent()}}}var sc=class extends Di{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new He;e.deleteAttribute("uv");let t=new qe({side:qt}),n=new qe,s=new tn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ue(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Tt(e,n,6),a=new Mt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let c=new ue(e,Bs(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new ue(e,Bs(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new ue(e,Bs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let p=new ue(e,Bs(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let u=new ue(e,Bs(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new ue(e,Bs(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Bs(i){return new Ir({color:0,emissive:16777215,emissiveIntensity:i})}var rc=[{id:"overview",progress:0,pos:new P(3,19,55),target:new P(5.6,4.3,4.2),fov:41},{id:"home",progress:.34,pos:new P(-16.5,9.2,20.5),target:new P(-10.8,2.1,2.2),fov:38},{id:"commercial",progress:.67,pos:new P(24.5,11.4,13.5),target:new P(18.5,2.5,-5.8),fov:39},{id:"offgrid",progress:1,pos:new P(28.5,9.6,33.5),target:new P(21.6,1.5,15.6),fov:39}];function ju(i){let e=0,t=0,n=0,s=0,r=0,o=0,a=!0,c=new P,l=new P,h=new P,p=new Hr,u=new P,d=new P,x=new P,v=new P,f=(_,E)=>{let y=bt.clamp(_,0,1),S=0;for(;S<rc.length-2&&y>rc[S+1].progress;)S++;let T=rc[S],g=rc[S+1],M=Math.max(1e-4,g.progress-T.progress),A=bt.clamp((y-T.progress)/M,0,1),C=A*A*(3-2*A);if(u.copy(T.pos),d.copy(g.pos),x.copy(T.target),v.copy(g.target),c.lerpVectors(u,d,C),l.lerpVectors(x,v,C),window.innerWidth<=768||E<1.05){let N=bt.lerp(1.42,1,bt.clamp((E-.45)/.6,0,1)),I=Math.max(N,1.75/Math.max(E,.35)),b=1-bt.smoothstep(y,0,.3),z=bt.lerp(N,I,b);h.subVectors(c,l).multiplyScalar(z),h.y*=1.08,c.copy(l).add(h)}let D=bt.lerp(T.fov,g.fov,C)+(E<.85?5:0);Math.abs(i.fov-D)>.05&&(i.fov=D,i.updateProjectionMatrix())},m=_=>{f(t,_),h.subVectors(c,l),p.setFromVector3(h),p.theta+=r,p.phi=bt.clamp(p.phi+o,.36,1.32),h.setFromSpherical(p),i.position.copy(l).add(h),i.lookAt(l)};return m(16/9),{setScrollProgress:_=>{let E=bt.clamp(_,0,1);E!==e&&(e=E,a=!0)},getZoneForProgress:_=>_<.17?"overview":_<.505?"home":_<.835?"commercial":"offgrid",setOrbitOffset:(_,E)=>{n=bt.clamp(n+_,-.45,.45),s=bt.clamp(s+E,-.18,.22),a=!0},resetOrbit:()=>{(n!==0||s!==0)&&(n=0,s=0,a=!0)},snapToProgress:(_,E)=>{e=bt.clamp(_,0,1),t=e,n=0,s=0,r=0,o=0,a=!1,m(E)},update:(_,E,y)=>{if(!(a||t!==e||r!==n||o!==s))return!1;if(y)t=e,r=n,o=s;else{let T=1-Math.exp(-6.4*Math.min(_,.08));t=Math.abs(e-t)<25e-5?e:bt.lerp(t,e,T),r=Math.abs(n-r)<4e-4?n:bt.lerp(r,n,T),o=Math.abs(s-o)<4e-4?s:bt.lerp(o,s,T)}return m(E),a=t!==e||r!==n||o!==s,!0}}}var oc={pv:16751135,bat:53662,ac:1892534,grid:5943016,light:16760386,bms:10679007},Mx=9480368;function ed(){let i=new tt;i.name="EnergyFlowSystem",i.visible=!1;let e=Gt(21,15.2),t=[{id:"z1-pv-inv",kind:"pv",when:"day",points:[[-12.5,4.5,2.9],[-15.4,4.15,4.15],[-15.8,3.05,4.6]],packetCount:3,speed:.36},{id:"z1-inv-bat-day",kind:"bat",when:"day",points:[[-15.3,2,4.72],[-14.25,2,4.72],[-14.25,1.45,4.72]],packetCount:2,speed:.42},{id:"z1-bat-inv-night",kind:"bat",when:"night",points:[[-14.25,1.45,4.72],[-14.25,2,4.72],[-15.3,2,4.72]],packetCount:2,speed:.4},{id:"z1-bms",kind:"bms",when:"both",points:[[-15.2,2.22,4.76],[-14.1,2.22,4.76],[-14.1,1.55,4.76]],packetCount:2,speed:.55},{id:"z1-inv-ac-loads",kind:"ac",when:"both",points:[[-16.2,2.2,4.65],[-17.65,2.2,3.85],[-17.65,2.2,2.15],[-16.2,3.25,4.48],[-12.2,3.25,4.48],[-8.9,2.95,2.6],[-8.9,2.85,-.35]],packetCount:5,speed:.28},{id:"z1-grid",kind:"grid",when:"night",points:[[-21.1,6.2,.9],[-17.7,3.2,.9],[-17.7,2.1,2]],packetCount:3,speed:.34},{id:"z1-garden-light-day",kind:"pv",when:"day",points:[[-4.4,2.02,6.4],[-4.4,1.65,6.4]],packetCount:1,speed:.65},{id:"z1-garden-light-night",kind:"light",when:"night",points:[[-4.4,1.45,6.4],[-4.4,1.85,6.4]],packetCount:1,speed:.65},{id:"z2-pv-inv",kind:"pv",when:"day",points:[[17.2,5.85,-7.2],[15.6,5.5,-4.6],[15.6,2.35,-3.5]],packetCount:4,speed:.34},{id:"z2-inv-bat-day",kind:"bat",when:"day",points:[[15.2,1.65,-3.15],[13.8,1.65,-3.15],[12.3,1.65,-3.15]],packetCount:3,speed:.42},{id:"z2-bat-inv-night",kind:"bat",when:"night",points:[[12.3,1.65,-3.15],[13.8,1.65,-3.15],[15.2,1.65,-3.15]],packetCount:3,speed:.4},{id:"z2-ac-loads",kind:"ac",when:"both",points:[[16,1.65,-3.15],[17.7,1.65,-3.15],[21.4,2.4,-3.8],[24.2,4.9,-6.2]],packetCount:4,speed:.28},{id:"z2-grid",kind:"grid",when:"night",points:[[8.5,6.8,-11.5],[14.5,4.2,-7.2],[17.7,2.2,-3.6]],packetCount:3,speed:.3},{id:"z2-roadlight-day",kind:"pv",when:"day",points:[[17.8,4.55,1.5],[17.8,4.15,1.5]],packetCount:1,speed:.7},{id:"z2-roadlight-night",kind:"light",when:"night",points:[[17.8,4.35,1.5],[17.8,3.3,1.5]],packetCount:2,speed:.6},{id:"z3-pv-storage",kind:"pv",when:"day",points:[[15.8,e+1.45,14.6],[17.6,e+.9,16.4],[18.9,e+.85,16.85],[21.4,e+.85,17.25]],packetCount:3,speed:.38},{id:"z3-bat-night",kind:"bat",when:"night",points:[[18.9,e+.9,16.85],[20.4,e+.9,17.15],[21.55,e+.9,17.25]],packetCount:2,speed:.42},{id:"z3-field-loads",kind:"ac",when:"both",points:[[21.55,e+1.05,17.25],[22,e+1.1,15.6],[22.4,e+1.3,14.4]],packetCount:2,speed:.42},{id:"z3-split-day",kind:"pv",when:"day",points:[[26.8,e+4.5,16.5],[26.8,e+3.25,16.65]],packetCount:1,speed:.7},{id:"z3-split-night",kind:"light",when:"night",points:[[26.8,e+3.25,16.65],[26.75,e+3.9,16.5],[25.65,e+3.9,16.5]],packetCount:2,speed:.55}],n=Dl(e);t.forEach(g=>{n[g.id]&&(g.points=n[g.id])}),t.push({id:"z3-controller-seed",kind:"bat",when:"day",points:n["z3-controller-seed"],packetCount:2,speed:.35}),t.push({id:"z3-portable-pv",kind:"pv",when:"day",points:n["z3-portable-pv"],packetCount:2,speed:.35});let s=[],r=new xr(.022,.11,4,8);r.rotateX(Math.PI/2);let o=new Ni(.045,.13,8);o.rotateX(Math.PI/2);let a=new dn({color:16777215}),c=t.reduce((g,M)=>g+M.packetCount,0),l=new Tt(r,a,c);l.name="EnergyFlowPackets",l.instanceMatrix.setUsage(dl),i.add(l);let h=new Mt,p=new P,u=new P,d=new P(0,1,0),x=new Xt,v=new Ve;t.forEach(g=>{let M=ic(g.points,g.id.startsWith("z1-")?.065:0),A=new _n(M,Math.max(12,g.points.length*10),.012,7,!1),C=new dn({color:oc[g.kind],transparent:!0,opacity:.9}),D=new ue(A,C);D.name=`FlowConduit-${g.id}`,i.add(D);let N=new dn({color:oc[g.kind],transparent:!0,opacity:.95}),I=Math.max(1,g.packetCount),b=new Tt(o,N,I);b.name=`FlowArrows-${g.id}`;for(let z=0;z<I;z++){let B=(z+.5)/I;M.getPointAt(B,p),M.getTangentAt(B,u).normalize(),h.position.copy(p),x.setFromUnitVectors(new P(0,0,1),u),h.quaternion.copy(x),h.scale.setScalar(1),h.updateMatrix(),b.setMatrixAt(z,h.matrix)}b.instanceMatrix.needsUpdate=!0,b.visible=!1,i.add(b),s.push({spec:g,curve:M,tube:D,tubeMat:C,staticArrows:b})});let f=!1,m=!1,_=!1,E=0,y=g=>g.when==="both"||g.when==="night"&&f||g.when==="day"&&!f,S=()=>{let g=m||_;l.visible=!g,s.forEach(M=>{y(M.spec)?(M.tubeMat.color.setHex(oc[M.spec.kind]),M.tubeMat.opacity=M.spec.kind==="bms"?.55:.92,M.staticArrows.visible=g):(M.tubeMat.color.setHex(Mx),M.tubeMat.opacity=.24,M.staticArrows.visible=!1)})};return S(),{group:i,setVisible:g=>{i.visible=g},setState:(g,M,A)=>{let C=g>=.5;(C!==f||M!==m||A!==_)&&(f=C,m=M,_=A,S())},update:g=>{if(!i.visible)return;!m&&!_&&(E+=g);let M=0;for(let A=0;A<s.length;A++){let C=s[A],D=y(C.spec),N=C.spec.packetCount;v.setHex(oc[C.spec.kind]);for(let I=0;I<N;I++){if(!D||m||_)h.scale.setScalar(1e-4),h.position.set(0,-100,0),h.updateMatrix(),l.setMatrixAt(M,h.matrix);else{let b=((E*C.spec.speed+I/N)%1+1)%1;C.curve.getPointAt(b,p),C.curve.getTangentAt(b,u).normalize(),h.position.copy(p),h.lookAt(p.x+u.x,p.y+u.y,p.z+u.z);let z=Math.min(b*6,(1-b)*6,1),B=(C.spec.kind==="bms"?.65:1)*Math.max(.2,z);h.scale.setScalar(B),h.updateMatrix(),l.setMatrixAt(M,h.matrix),l.setColorAt(M,v)}M++}}l.instanceMatrix.needsUpdate=!0,l.instanceColor&&(l.instanceColor.needsUpdate=!0)},dispose:()=>{r.dispose(),o.dispose(),a.dispose(),s.forEach(g=>{g.tube.geometry.dispose(),g.tubeMat.dispose(),g.staticArrows.material.dispose()})}}}var Qr={overview:{id:"overview",num:"00",progress:0,title:{en:"Clean Energy Campus",zh:"\u7ACB\u4F53\u6E05\u6D01\u80FD\u6E90\u56ED\u533A"},subtitle:{en:"Scroll or choose a zone to explore residential, commercial, and off-grid energy architectures in one landscape.",zh:"\u5411\u4E0B\u6EDA\u52A8\u6216\u9009\u62E9\u533A\u57DF\uFF0C\u8FDE\u7EED\u63A2\u7D22\u5BB6\u5EAD\u3001\u5DE5\u5546\u4E1A\u4E0E\u504F\u8FDC\u79BB\u7F51\u80FD\u6E90\u7CFB\u7EDF\u3002"},noteDay:{en:"Day: Solar generation & storage charging",zh:"\u767D\u663C\uFF1A\u5149\u4F0F\u91C7\u96C6\u53D1\u7535\u4E0E\u50A8\u80FD\u84C4\u80FD"},noteNight:{en:"Night: Stored battery supply & autonomous solar lighting",zh:"\u591C\u665A\uFF1A\u50A8\u80FD\u653E\u7535\u4F9B\u7535\u4E0E\u72EC\u7ACB\u592A\u9633\u80FD\u7167\u660E"}},home:{id:"home",num:"01",progress:.34,title:{en:"HOME ENERGY",zh:"\u5BB6\u5EAD\u80FD\u6E90"},subtitle:{en:"Home quality sample: physical facade, planting and PBR materials. Battery/inverter envelopes follow catalogue sizes; ports and brackets remain unverified.",zh:"\u5BB6\u5EAD\u8D28\u91CF\u6837\u4F8B\uFF1A\u5B9E\u4F53\u7ED3\u6784\u3001\u7EC6\u53F6\u690D\u7269\u4E0E PBR \u6750\u8D28\uFF1B\u7535\u6C60/\u9006\u53D8\u5668\u5305\u7EDC\u6309\u76EE\u5F55\u5C3A\u5BF8\u6821\u51C6\uFF0C\u63A5\u53E3\u4E0E\u6302\u67B6\u4ECD\u5F85\u6838\u9A8C\u3002"},noteDay:{en:"Day: Roof PV feeds hybrid inverter, home loads & 16 kWh battery",zh:"\u767D\u663C\uFF1A\u5C4B\u9876\u5149\u4F0F\u7ECF\u6DF7\u5408\u9006\u53D8\u5668\u4F9B\u7535\u5BB6\u5C45\u8D1F\u8F7D\u5E76\u4E3A 16 kWh \u7535\u6C60\u84C4\u80FD"},noteNight:{en:"Night: 16 kWh battery discharges via inverter with grid backup & yard solar light on",zh:"\u591C\u665A\uFF1A16 kWh \u50A8\u80FD\u7ECF\u9006\u53D8\u5668\u4F9B\u80FD\uFF0C\u7535\u8868\u914D\u7535\u63D0\u4F9B\u7F51\u683C\u652F\u6491\uFF0C\u5EAD\u9662\u592A\u9633\u80FD\u706F\u4EAE\u8D77"}},commercial:{id:"commercial",num:"02",progress:.67,title:{en:"COMMERCIAL & INDUSTRIAL",zh:"\u5DE5\u5546\u4E1A\u80FD\u6E90"},subtitle:{en:"Concept scenario: rooftop PV, HORIZON ESS cabinets, 50 kW conversion, switchgear & road lighting.",zh:"\u6982\u5FF5\u5E94\u7528\u793A\u610F\uFF1A\u5927\u8DE8\u5EA6\u5149\u4F0F\u5C4B\u9762\u3001HORIZON \u50A8\u80FD\u67DC\u300150 kW \u53D8\u6D41\u5E76\u7F51\u4E0E\u56ED\u533A\u8DEF\u706F\u3002"},noteDay:{en:"Day: Facility PV array supplies operations & charges HORIZON ESS cabinets",zh:"\u767D\u663C\uFF1A\u5DE5\u5546\u4E1A\u5C4B\u9762\u5149\u4F0F\u652F\u6491\u5EFA\u7B51\u4E0E\u7A7A\u8C03\u8D1F\u8F7D\u5E76\u4E3A HORIZON \u50A8\u80FD\u67DC\u84C4\u80FD"},noteNight:{en:"Night: HORIZON ESS & switchgear support facility loads while road solar lights illuminate drive",zh:"\u591C\u665A\uFF1AHORIZON \u50A8\u80FD\u4E0E\u914D\u7535\u652F\u6301\u5EFA\u7B51\u8D1F\u8F7D\uFF0C\u56ED\u533A\u4E00\u4F53\u5316\u592A\u9633\u80FD\u8DEF\u706F\u81EA\u52A8\u4EAE\u706F"}},offgrid:{id:"offgrid",num:"03",progress:1,title:{en:"REMOTE & OFF-GRID",zh:"\u504F\u8FDC\u4E0E\u79BB\u7F51\u5E94\u7528"},subtitle:{en:"Disconnected from utility grid: standalone PV rack, SEED & Volt 1000 field power, and split street light.",zh:"\u72EC\u7ACB\u4E8E\u516C\u7528\u7535\u7F51\u4E4B\u5916\uFF1A\u72EC\u7ACB\u5149\u4F0F\u652F\u67B6\u3001SEED \u50A8\u80FD\u4E0E Volt 1000 \u79FB\u52A8\u4F5C\u4E1A\u4F9B\u7535\u3001\u5206\u4F53\u5F0F\u592A\u9633\u80FD\u8DEF\u706F\u3002"},noteDay:{en:"Day: Independent solar rack charges SEED storage & portable workstation power",zh:"\u767D\u663C\uFF1A\u79BB\u7F51\u5149\u4F0F\u72EC\u7ACB\u4E3A SEED \u7535\u6C60\u4E0E\u79FB\u52A8\u5DE5\u4F5C\u53F0\u4F9B\u7535\u84C4\u80FD\uFF08\u65E0\u7535\u7F51\u63A5\u5165\uFF09"},noteNight:{en:"Night: SEED & Volt 1000 power field tools & camp light; split street light runs independently",zh:"\u591C\u665A\uFF1ASEED \u4E0E Volt 1000 \u652F\u6491\u79FB\u52A8\u4EEA\u5668\u4E0E\u8425\u5730\u706F\uFF0C\u5206\u4F53\u5F0F\u592A\u9633\u80FD\u8DEF\u706F\u72EC\u7ACB\u7167\u660E"}}},td=[{id:"brand-office",zone:"overview",kind:"info",worldPos:[-1,10.6,-12.8],kicker:{en:"Brand architecture concept",zh:"\u54C1\u724C\u5EFA\u7B51\u6982\u5FF5"},title:{en:"Anthrise Technology \xB7 Concept Office",zh:"Anthrise Technology \xB7 \u6982\u5FF5\u529E\u516C\u697C"},usage:{en:"A conceptual branded office in the energy landscape. Actual company contact details remain on the website.",zh:"\u80FD\u6E90\u573A\u666F\u4E2D\u7684\u54C1\u724C\u6982\u5FF5\u529E\u516C\u5EFA\u7B51\uFF0C\u5B9E\u9645\u516C\u53F8\u5730\u5740\u53CA\u8054\u7CFB\u4FE1\u606F\u4EE5\u7F51\u7AD9\u8054\u7CFB\u65B9\u5F0F\u4E3A\u51C6\u3002"}},{id:"ov-home",zone:"overview",targetZone:"home",kind:"zone",worldPos:[-11.5,6.2,2],kicker:{en:"01 \xB7 Residential",zh:"01 \xB7 \u5BB6\u5EAD\u573A\u666F"},title:{en:"Home Energy",zh:"\u5BB6\u5EAD\u80FD\u6E90"},usage:{en:"Click to inspect rooftop solar, hybrid inverter, 16 kWh battery & cutaway appliances.",zh:"\u70B9\u51FB\u8FDB\u5165\u67E5\u770B\u5C4B\u9876\u5149\u4F0F\u3001\u6DF7\u5408\u9006\u53D8\u5668\u300116 kWh \u7535\u6C60\u4E0E\u5BA4\u5185\u5BB6\u7535\u3002"}},{id:"ov-commercial",zone:"overview",targetZone:"commercial",kind:"zone",worldPos:[18.8,7.6,-7.2],kicker:{en:"02 \xB7 Commercial & Industrial",zh:"02 \xB7 \u5DE5\u5546\u4E1A\u573A\u666F"},title:{en:"Commercial & Industrial",zh:"\u5DE5\u5546\u4E1A\u80FD\u6E90"},usage:{en:"Click to inspect C&I solar array, HORIZON ESS cabinets, switchgear & road lights.",zh:"\u70B9\u51FB\u8FDB\u5165\u67E5\u770B\u5DE5\u5546\u4E1A\u5149\u4F0F\u5C4B\u9762\u3001HORIZON \u50A8\u80FD\u67DC\u3001\u914D\u7535\u4E0E\u9053\u8DEF\u7167\u660E\u3002"}},{id:"ov-offgrid",zone:"overview",targetZone:"offgrid",kind:"zone",worldPos:[20.5,5.4,15.2],kicker:{en:"03 \xB7 Remote & Off-Grid",zh:"03 \xB7 \u79BB\u7F51\u573A\u666F"},title:{en:"Remote & Off-Grid",zh:"\u504F\u8FDC\u4E0E\u79BB\u7F51\u5E94\u7528"},usage:{en:"Click to explore standalone solar power beyond utility lines.",zh:"\u70B9\u51FB\u63A2\u7D22\u8131\u79BB\u5E02\u7535\u7F51\u7684\u72EC\u7ACB\u5149\u4F0F\u4E0E\u4FBF\u643A\u50A8\u80FD\u7CFB\u7EDF\u3002"}},{id:"home-solar",zone:"home",kind:"product",worldPos:[-10.8,5.2,1.8],skuId:"origAER400",modelCode:"AE-R400",img:"/assets/images/stage-solar.png",topic:"home",hrefEn:"/products/origAER400-en.html",hrefZh:"/products/origAER400-zh.html",kicker:{en:"Photovoltaic modules \xB7 AE-R400",zh:"\u5149\u4F0F\u7EC4\u4EF6 \xB7 AE-R400"},title:{en:"Rooftop Solar Panels (400W)",zh:"\u5C4B\u9876\u5149\u4F0F\u677F\uFF08400W\uFF09"},usage:{en:"Generates DC electricity during daylight and routes via PV isolation to the wall-mounted hybrid inverter.",zh:"\u65E5\u95F4\u4EA7\u751F\u6E05\u6D01\u76F4\u6D41\u7535\uFF0C\u7ECF\u5149\u4F0F\u76F4\u6D41\u4FDD\u62A4\u901A\u9053\u8F93\u9001\u81F3\u5EFA\u7B51\u5916\u5899\u6DF7\u5408\u9006\u53D8\u5668\u3002"}},{id:"home-inverter",zone:"home",kind:"product",worldPos:[-15.8,2.52,4.78],skuId:"hybrid6",modelCode:"AE-I-HYBRID-6K",img:"/assets/images/products/hybrid6.png",topic:"home",hrefEn:"/products/hybrid6-en.html",hrefZh:"/products/hybrid6-zh.html",kicker:{en:"Power conversion \xB7 AE-I-HYBRID-6K",zh:"\u6DF7\u5408\u9006\u53D8\u5668 \xB7 AE-I-HYBRID-6K"},title:{en:"6 kW LV Hybrid Inverter",zh:"6 kW \u4F4E\u538B\u6DF7\u5408\u9006\u53D8\u5668"},usage:{en:"6 kW / 40\u201360 V / 135 A max. Envelope calibrated to catalogue W\xD7D\xD7H 330\xD7228\xD7433 mm, not manufacturer CAD. Architectural support and conduits do not establish rear port locations, bracket geometry or final battery compatibility.",zh:"6 kW / 40\u201360 V / \u4E0A\u9650 135 A\uFF1B\u5305\u7EDC\u5DF2\u6309\u76EE\u5F55\u5BBD\xD7\u6DF1\xD7\u9AD8 330\xD7228\xD7433 mm \u6821\u51C6\uFF0C\u975E\u5382\u5BB6 CAD\u3002\u5EFA\u7B51\u652F\u6491\u548C\u7EBF\u7BA1\u4E0D\u4EE3\u8868\u5DF2\u6838\u9A8C\u7684\u80CC\u90E8\u7AEF\u53E3\u3001\u6302\u67B6\u5B54\u4F4D\u6216\u6700\u7EC8\u7535\u6C60\u517C\u5BB9\u6027\u3002"}},{id:"home-battery",zone:"home",kind:"product",worldPos:[-14.25,1.28,4.86],skuId:"ess16",modelCode:"AE-E-DAWN-16",img:"/assets/images/stage-battery.png",topic:"home",hrefEn:"/products/ess16-en.html",hrefZh:"/products/ess16-zh.html",kicker:{en:"Home storage \xB7 AE-E-DAWN-16",zh:"\u6237\u7528\u50A8\u80FD \xB7 AE-E-DAWN-16"},title:{en:"16 kWh Home Storage",zh:"16 kWh \u50A8\u80FD\u7535\u6C60"},usage:{en:"51.2 V LiFePO4, 120 kg net. Envelope calibrated to catalogue W\xD7D\xD7H 480\xD7235\xD7874 mm; wheels contact a physical paver. This is not manufacturer CAD. Rear service routing, caster/slab capacity and installation clearances require verified drawings.",zh:"51.2 V \u78F7\u9178\u94C1\u9502\uFF0C\u51C0\u91CD 120 kg\u3002\u5305\u7EDC\u5DF2\u6309\u76EE\u5F55\u5BBD\xD7\u6DF1\xD7\u9AD8 480\xD7235\xD7874 mm \u6821\u51C6\uFF0C\u811A\u8F6E\u63A5\u89E6\u5B9E\u4F53\u57AB\u77F3\u3002\u975E\u5382\u5BB6 CAD\uFF1B\u540E\u90E8\u670D\u52A1\u8D70\u7EBF\u3001\u811A\u8F6E/\u5730\u57FA\u627F\u8F7D\u4E0E\u5B89\u88C5\u51C0\u8DDD\u4ECD\u9700\u771F\u5B9E\u56FE\u7EB8\u6838\u5B9E\u3002"}},{id:"home-grid",zone:"home",kind:"info",worldPos:[-19.8,4.9,1.05],topic:"home",kicker:{en:"AC interface \xB7 Utility & breaker",zh:"\u5E76\u7F51\u4E0E\u914D\u7535\u63A5\u53E3"},title:{en:"Grid Meter & AC Panel",zh:"\u7535\u7F51\u63A5\u5165\u3001\u7535\u8868\u4E0E\u914D\u7535\u7BB1"},usage:{en:"Safely connects utility service metering and inverter AC output before feeding indoor household circuits.",zh:"\u5C06\u516C\u7528\u7535\u7F51\u8BA1\u91CF\u7AEF\u53E3\u4E0E\u6DF7\u5408\u9006\u53D8\u5668\u4EA4\u6D41\u8F93\u51FA\u5B89\u5168\u6C47\u5165\u5EFA\u7B51\u5185\u90E8\u914D\u7535\u56DE\u8DEF\u3002"}},{id:"home-loads",zone:"home",kind:"info",worldPos:[-8.4,2.05,2.35],topic:"home",kicker:{en:"Indoor AC circuits \xB7 Cutaway",zh:"\u5BA4\u5185\u4EA4\u6D41\u8D1F\u8F7D \xB7 \u5256\u89C6\u5C55\u793A"},title:{en:"Residential Appliances",zh:"\u5BA4\u5185\u65E5\u5E38\u7535\u5668"},usage:{en:"Kitchen refrigeration, split climate control, lighting, and living room electronics supplied via the AC distribution panel.",zh:"\u5305\u62EC\u7A7A\u8C03\u3001\u51B0\u7BB1\u3001\u5BA4\u5185\u7167\u660E\u4E0E\u5F71\u97F3\u529E\u516C\u8BBE\u5907\uFF0C\u5747\u7531\u6237\u5185\u4EA4\u6D41\u914D\u7535\u56DE\u8DEF\u89C4\u8303\u4F9B\u7535\u3002"}},{id:"home-light",zone:"home",kind:"light",worldPos:[-4.4,1.85,6.4],skuId:"jcLight28",modelCode:"AE-L-BLOOM-01",img:"/assets/images/products/jcLight28.png",topic:"lighting",hrefEn:"/products/jcLight28-en.html",hrefZh:"/products/jcLight28-zh.html",kicker:{en:"Independent lighting \xB7 AE-L-BLOOM-01",zh:"\u72EC\u7ACB\u5EAD\u9662\u706F \xB7 AE-L-BLOOM-01"},title:{en:"Solar Courtyard Column Light",zh:"\u592A\u9633\u80FD\u5EAD\u9662\u67F1\u706F"},usage:{en:"Self-contained top PV panel and internal LiFePO4 battery \u2014 charges by day and illuminates garden walkways at night off-grid.",zh:"\u5185\u7F6E\u9876\u90E8\u5149\u4F0F\u677F\u4E0E\u78F7\u9178\u94C1\u9502\u7535\u6C60\uFF0C\u767D\u5929\u81EA\u884C\u5145\u7535\u3001\u591C\u665A\u81EA\u52A8\u70B9\u4EAE\u5EAD\u9662\u8DEF\u5F84\uFF0C\u4E0D\u63A5\u5165\u6237\u5185\u7535\u7F51\u3002"}},{id:"ci-solar",zone:"commercial",kind:"product",worldPos:[19.8,6.2,-7.8],skuId:"origAER400",modelCode:"AE-R400",img:"/assets/images/stage-solar.png",topic:"business",hrefEn:"/products/origAER400-en.html",hrefZh:"/products/origAER400-zh.html",kicker:{en:"Commercial array \xB7 AE-R400",zh:"\u5C4B\u9762\u5149\u4F0F\u9635\u5217 \xB7 AE-R400"},title:{en:"Commercial Rooftop PV Array",zh:"\u5DE5\u5546\u4E1A\u5C4B\u9762\u5149\u4F0F"},usage:{en:"Conceptual large-span photovoltaic roof generation feeding high-power conversion equipment by day.",zh:"\u6982\u5FF5\u5C4B\u9762\u5149\u4F0F\u7CFB\u7EDF\uFF0C\u65E5\u95F4\u4E3A\u5DE5\u5546\u4E1A\u56ED\u533A\u63D0\u4F9B\u76F4\u6D41\u53D1\u7535\u5E76\u63A5\u5165\u9AD8\u529F\u7387\u53D8\u6D41\u8BBE\u5907\u3002"}},{id:"ci-horizon",zone:"commercial",kind:"product",worldPos:[12.95,2.25,-3.25],skuId:"series_horizon",modelCode:"AE-E-HORIZON",img:"/assets/images/products/series_horizon.png",topic:"business",hrefEn:"/products/series_horizon-en.html",hrefZh:"/products/series_horizon-zh.html",kicker:{en:"Concept BESS \xB7 AE-E-HORIZON",zh:"\u5DE5\u5546\u4E1A\u50A8\u80FD\u67DC \xB7 AE-E-HORIZON"},title:{en:"Commercial & Industrial ESS Cabinet",zh:"\u5DE5\u5546\u4E1A\u50A8\u80FD\u67DC"},usage:{en:"Planned modular HV DC battery cabinets (e.g. 50 kW / 112 kWh pairing concept) coordinated externally via CAN/RS-485.",zh:"\u6A21\u5757\u5316\u9AD8\u538B\u76F4\u6D41\u50A8\u80FD\u67DC\u65B9\u6848\uFF08\u5982 50 kW / 112 kWh \u6982\u5FF5\u642D\u914D\uFF09\uFF0C\u7ECF\u5916\u90E8\u53D8\u6D41\u4E0E\u914D\u7535\u67DC\u6309\u9879\u76EE\u5DE5\u51B5\u914D\u7F6E\u3002"}},{id:"ci-inverter",zone:"commercial",kind:"product",worldPos:[15.6,2.15,-3.25],skuId:"hybrid50",modelCode:"AE-I-HYBRID-50K",img:"/assets/images/products/hybrid50.png",topic:"business",hrefEn:"/products/hybrid50-en.html",hrefZh:"/products/hybrid50-zh.html",kicker:{en:"Three-phase HV \xB7 AE-I-HYBRID-50K",zh:"\u4E09\u76F8\u9AD8\u538B\u53D8\u6D41 \xB7 AE-I-HYBRID-50K"},title:{en:"50 kW Hybrid Inverter",zh:"50 kW \u6DF7\u7F51\u9006\u53D8\u5668"},usage:{en:"Three-phase power conversion bridging rooftop PV arrays, HORIZON ESS battery cabinets, and AC facility switchgear.",zh:"\u4E09\u76F8\u9AD8\u538B\u6DF7\u7F51\u9006\u53D8\u6838\u5FC3\uFF0C\u8FDE\u63A5\u5C4B\u9762\u5149\u4F0F\u3001HORIZON \u50A8\u80FD\u67DC\u4E0E\u5DE5\u5546\u4E1A\u4EA4\u6D41\u914D\u7535\u6BCD\u7EBF\u3002"}},{id:"ci-loads",zone:"commercial",kind:"info",worldPos:[23.8,3.1,-5.2],topic:"business",kicker:{en:"Switchgear & facility loads",zh:"\u914D\u7535\u6BCD\u7EBF\u4E0E\u56ED\u533A\u8D1F\u8F7D"},title:{en:"Switchgear, HVAC & Office Loads",zh:"\u914D\u7535\u67DC\u3001\u6696\u901A\u4E0E\u529E\u516C\u8D1F\u8F7D"},usage:{en:"Main AC distribution bay feeding rooftop cooling units, production bay lighting, and workspace circuits. Sizing requires site engineering review.",zh:"\u4EA4\u6D41\u914D\u7535\u603B\u67DC\u7EDF\u4E00\u8C03\u914D\u5C4B\u9762\u5236\u51B7\u3001\u8F66\u95F4\u7167\u660E\u4E0E\u529E\u516C\u8D1F\u8377\uFF0C\u5177\u4F53\u914D\u6BD4\u6309\u9879\u76EE\u6D4B\u7B97\u5B9A\u5236\u3002"}},{id:"ci-light",zone:"commercial",kind:"light",worldPos:[17.8,4.3,1.55],skuId:"jcLight09",modelCode:"AE-L-GUARD-05",img:"/assets/images/products/jcLight09.png",topic:"lighting",hrefEn:"/products/jcLight09-en.html",hrefZh:"/products/jcLight09-zh.html",kicker:{en:"Road luminaire \xB7 AE-L-GUARD-05",zh:"\u9053\u8DEF\u7167\u660E \xB7 AE-L-GUARD-05"},title:{en:"All-in-One Solar Street Light",zh:"\u4E00\u4F53\u5316\u592A\u9633\u80FD\u8DEF\u706F"},usage:{en:"Autonomous roadway luminaire with integrated PV and LiFePO4 battery illuminating commercial drives without trenching AC cable.",zh:"\u96C6\u6210\u5149\u4F0F\u677F\u4E0E\u78F7\u9178\u94C1\u9502\u7535\u6C60\u7684\u4E00\u4F53\u5316\u8DEF\u706F\uFF0C\u65E0\u9700\u5F00\u6316\u7535\u7F06\u5373\u53EF\u4E3A\u56ED\u533A\u9053\u8DEF\u63D0\u4F9B\u591C\u95F4\u7167\u660E\u3002"}},{id:"off-solar",zone:"offgrid",kind:"product",worldPos:[15.8,3.05,14.5],skuId:"origAESK1",modelCode:"AE-SK1",img:"/assets/images/products/origAESK1.png",topic:"outdoor",hrefEn:"/products/origAESK1-en.html",hrefZh:"/products/origAESK1-zh.html",kicker:{en:"Off-grid generation \xB7 AE-SK1",zh:"\u79BB\u7F51\u5149\u4F0F\u91C7\u96C6 \xB7 AE-SK1"},title:{en:"Ground Solar Array & Kit",zh:"\u72EC\u7ACB\u5149\u4F0F\u53D1\u7535\u5355\u5143"},usage:{en:"Stand-alone tilted ground PV rack deployed where no utility poles reach, charging field storage by day.",zh:"\u90E8\u7F72\u4E8E\u65E0\u5E02\u7535\u8986\u76D6\u533A\u57DF\u7684\u5730\u9762\u72EC\u7ACB\u5149\u4F0F\u9635\u5217\uFF0C\u65E5\u95F4\u76F4\u63A5\u4E3A\u79BB\u7F51\u50A8\u80FD\u5355\u5143\u8865\u7535\u3002"}},{id:"off-seed",zone:"offgrid",kind:"product",worldPos:[18.9,2.2,16.85],skuId:"series_seed24",modelCode:"AE-E-SEED",img:"/assets/images/products/series_seed24.png",topic:"outdoor",hrefEn:"/products/series_seed24-en.html",hrefZh:"/products/series_seed24-zh.html",kicker:{en:"Deep-cycle storage \xB7 AE-E-SEED",zh:"\u6DF1\u5FAA\u73AF\u50A8\u80FD \xB7 AE-E-SEED"},title:{en:"25.6V Deep Cycle LiFePO\u2084 Battery",zh:"25.6V \u6DF1\u5FAA\u73AF\u78F7\u9178\u94C1\u9502\u7535\u6C60"},usage:{en:"2.56 kWh deep-cycle battery storage serving remote cabins, monitoring gear, and off-grid field stations.",zh:"2.56 kWh \u6DF1\u5FAA\u73AF\u78F7\u9178\u94C1\u9502\u7535\u6C60\uFF0C\u9002\u7528\u4E8E\u504F\u8FDC\u9A7B\u70B9\u3001\u76D1\u6D4B\u7AD9\u4E0E\u79BB\u7F51\u57FA\u7840\u8D1F\u8377\u50A8\u80FD\u3002"}},{id:"off-volt",zone:"offgrid",kind:"product",worldPos:[21.55,2.15,17.25],skuId:"origAEV1000",modelCode:"AE-E-VOLT-1000",img:"/assets/images/products/origAEV1000.png",topic:"outdoor",hrefEn:"/products/origAEV1000-en.html",hrefZh:"/products/origAEV1000-zh.html",kicker:{en:"Portable station \xB7 AE-E-VOLT-1000",zh:"\u4FBF\u643A\u7535\u6E90 \xB7 AE-E-VOLT-1000"},title:{en:"Volt 1000 Portable Power Station",zh:"Volt 1000 \u6237\u5916\u4FBF\u643A\u7535\u6E90"},usage:{en:"768 Wh / 1000 W LiFePO4 portable unit supplying modest mobile loads: field laptops, camp lighting, radios & portable coolers.",zh:"768 Wh / 1000 W \u78F7\u9178\u94C1\u9502\u4FBF\u643A\u7535\u6E90\uFF0C\u4E13\u4E3A\u79FB\u52A8\u5DE5\u4F5C\u7AD9\u7B14\u8BB0\u672C\u3001\u901A\u4FE1\u8BBE\u5907\u3001\u8425\u5730\u7167\u660E\u4E0E\u8F66\u8F7D\u5C0F\u51B7\u7BB1\u7B49\u8F7B\u91CF\u8D1F\u8F7D\u4F9B\u7535\u3002"}},{id:"off-light",zone:"offgrid",kind:"light",worldPos:[26.8,5.15,16.5],skuId:"jcLight27",modelCode:"AE-L-GUARD-06",img:"/assets/images/stage-light.png",topic:"lighting",hrefEn:"/products/jcLight27-en.html",hrefZh:"/products/jcLight27-zh.html",kicker:{en:"Off-grid street light \xB7 AE-L-GUARD-06",zh:"\u72EC\u7ACB\u8DEF\u706F \xB7 AE-L-GUARD-06"},title:{en:"Split Solar Street Light",zh:"\u5206\u4F53\u5F0F\u592A\u9633\u80FD\u8DEF\u706F"},usage:{en:"IP66 weather-sealed luminaire with dedicated mast PV panel and integrated LiFePO4 battery \u2014 zero trenching or grid connection.",zh:"IP66 \u6237\u5916\u9632\u62A4\u7B49\u7EA7\uFF0C\u81EA\u5E26\u72EC\u7ACB\u5149\u4F0F\u677F\u4E0E\u78F7\u9178\u94C1\u9502\u7535\u6C60\u5305\uFF0C\u65E0\u9700\u62C9\u7EBF\u6216\u7535\u7F51\u63A5\u5165\u5373\u53EF\u591C\u95F4\u7167\u660E\u3002"}}],ac={en:{zones:{overview:"Overview",home:"01 Home Energy",commercial:"02 Commercial",offgrid:"03 Off-Grid"},dayBtn:"Day",nightBtn:"Night",flowShow:"Show energy flow",flowHide:"Hide energy flow",pauseMotion:"Pause motion",resumeMotion:"Resume motion",pauseFollow:"Pause Risey",resumeFollow:"Resume Risey",productsBtn:"Products",discussBtn:"Discuss your project",legendPv:"PV DC",legendBat:"Battery DC",legendAc:"AC Supply",legendGrid:"Grid Tie",legendLight:"Autonomous Solar Light",legendNote:"Conceptual application diagram \xB7 Zones 01\u201302 grid-interfaced, Zone 03 isolated off-grid",viewSpecs:"View specifications",inquireSetup:"Discuss this setup",visitZone:"Explore this zone",dragHint:"Scroll / drag to explore \xB7 Focus scene: arrow keys \xB7 Home resets view",fallbackTitle:"3D preview unavailable in this browser context",fallbackDesc:"Use the section links below to browse Anthrise residential, commercial, and off-grid products."},zh:{zones:{overview:"\u56ED\u533A\u5168\u666F",home:"01 \u5BB6\u5EAD\u80FD\u6E90",commercial:"02 \u5DE5\u5546\u4E1A\u80FD\u6E90",offgrid:"03 \u504F\u8FDC\u79BB\u7F51"},dayBtn:"\u767D\u663C",nightBtn:"\u591C\u665A",flowShow:"\u67E5\u770B\u80FD\u6E90\u6D41\u5411",flowHide:"\u9690\u85CF\u80FD\u6E90\u6D41\u5411",pauseMotion:"\u6682\u505C\u52A8\u6548",resumeMotion:"\u6062\u590D\u52A8\u6548",pauseFollow:"\u6682\u505C Risey",resumeFollow:"\u6062\u590D Risey",productsBtn:"\u4EA7\u54C1\u7CFB\u5217",discussBtn:"\u54A8\u8BE2\u60A8\u7684\u9879\u76EE",legendPv:"\u5149\u4F0F\u76F4\u6D41",legendBat:"\u50A8\u80FD\u76F4\u6D41",legendAc:"\u4EA4\u6D41\u4F9B\u7535",legendGrid:"\u5E76\u7F51\u7EBF\u8DEF",legendLight:"\u72EC\u7ACB\u592A\u9633\u80FD\u706F\u5177",legendNote:"\u6982\u5FF5\u8FD0\u884C\u793A\u610F \xB7 \u533A\u57DF 01\u201302 \u542B\u5E02\u7535\u63A5\u5165\uFF0C\u533A\u57DF 03 \u5B8C\u5168\u79BB\u7F51\u8FD0\u884C",viewSpecs:"\u67E5\u770B\u4EA7\u54C1\u53C2\u6570",inquireSetup:"\u54A8\u8BE2\u8BE5\u65B9\u6848",visitZone:"\u8FDB\u5165\u8BE5\u533A\u57DF",dragHint:"\u4E0B\u6ED1 / \u62D6\u62FD\u63A2\u7D22 \xB7 \u573A\u666F\u805A\u7126\u540E\u7528\u65B9\u5411\u952E \xB7 Home \u590D\u4F4D\u89C6\u89D2",fallbackTitle:"\u5F53\u524D\u73AF\u5883\u6682\u4E0D\u652F\u6301\u5B9E\u65F6 3D \u6E32\u67D3",fallbackDesc:"\u60A8\u53EF\u901A\u8FC7\u4E0B\u65B9\u5165\u53E3\u6D4F\u89C8 Anthrise \u5BB6\u5EAD\u3001\u5DE5\u5546\u4E1A\u53CA\u504F\u8FDC\u79BB\u7F51\u4EA7\u54C1\u4E0E\u65B9\u6848\u3002"}};function nd(i,e){let t="en",n=null,s=null,r=new P,o=[],a=()=>{n=null,o.forEach(x=>{x.pinBtn.setAttribute("aria-expanded","false"),x.popEl.hidden=!0,x.rootEl.classList.remove("is-open")})},c=x=>{let v=x.popEl;if(v.hidden)return;v.style.setProperty("--pop-shift-x","0px"),v.classList.remove("hotspot-popover-below");let f=i.getBoundingClientRect();if(!f.width)return;let m=12,_=x.rootEl.getBoundingClientRect().top,E=_-22-f.top-m,y=f.bottom-m-_-22,S=E<Math.min(280,v.scrollHeight)&&y>E;v.classList.toggle("hotspot-popover-below",S),v.style.setProperty("--pop-max-height",`${Math.max(80,Math.min(420,S?y:E))}px`);let T=v.getBoundingClientRect();if(!T.width)return;let g=0;T.left<f.left+m?g=f.left+m-T.left:T.right>f.right-m&&(g=f.right-m-T.right),Math.abs(g)>.5&&v.style.setProperty("--pop-shift-x",`${g.toFixed(1)}px`)},l=x=>{let v=n===x.def.id;a(),!v&&(n=x.def.id,x.pinBtn.setAttribute("aria-expanded","true"),x.popEl.hidden=!1,x.rootEl.classList.add("is-open"),c(x))};i.innerHTML="",td.forEach(x=>{let v=document.createElement("div");v.className=`campus-hotspot campus-hotspot-${x.kind}`,v.dataset.hotspotId=x.id,v.dataset.zone=x.zone;let f=document.createElement("button");f.type="button",f.className=`campus-pin campus-pin-${x.kind}`,f.setAttribute("aria-expanded","false");let m=document.createElement("span");m.className="campus-pin-dot",m.setAttribute("aria-hidden","true");let _=document.createElement("span");_.className="campus-pin-label",_.textContent=x.title.en,f.appendChild(m),f.appendChild(_);let E=document.createElement("div");E.className="campus-popover",E.hidden=!0,E.id=`campus-popover-${x.id}`,E.setAttribute("role","region"),f.setAttribute("aria-controls",E.id);let y=document.createElement("div");if(y.className="campus-pop-head",x.img){let D=document.createElement("div");D.className="campus-pop-thumb";let N=document.createElement("img");N.src=x.img,N.alt=x.title.en,N.loading="eager",N.decoding="async",D.appendChild(N),y.appendChild(D)}let S=document.createElement("div");S.className="campus-pop-titles";let T=document.createElement("p");T.className="campus-pop-kicker";let g=document.createElement("p");g.className="campus-pop-title",S.append(T,g),y.appendChild(S);let M=document.createElement("p");M.className="campus-pop-usage";let A=document.createElement("div");A.className="campus-pop-actions";let C={def:x,worldVec:new P(x.worldPos[0],x.worldPos[1],x.worldPos[2]),rootEl:v,pinBtn:f,tagEl:_,popEl:E,kickerEl:T,titleEl:g,usageEl:M,lastPx:-9999,lastPy:-9999};if(x.targetZone){let D=document.createElement("button");D.type="button",D.className="campus-pop-cta",D.addEventListener("click",N=>{N.stopPropagation(),a(),e.onSelectZone(x.targetZone)}),A.appendChild(D),C.visitBtn=D}else{if(x.skuId){let N=document.createElement("button");N.type="button",N.className="campus-pop-cta",N.addEventListener("click",I=>{I.stopPropagation(),a(),e.onInspectProduct(x.skuId)}),A.appendChild(N),C.specsBtn=N}if(x.hrefEn){let N=document.createElement("a");N.className="campus-pop-link",N.href=x.hrefEn,N.target="_blank",N.rel="noopener noreferrer",A.appendChild(N),C.linkEl=N}let D=document.createElement("button");D.type="button",D.className=x.skuId?"campus-pop-link":"campus-pop-cta",D.addEventListener("click",N=>{N.stopPropagation(),a(),e.onInquireProduct(x)}),A.appendChild(D),C.inquireBtn=D}E.append(y,M,A),v.append(f,E),i.appendChild(v),f.addEventListener("click",D=>{if(D.stopPropagation(),x.targetZone){a(),e.onSelectZone(x.targetZone);return}l(C)}),o.push(C)});let h=x=>{t=x;let v=ac[t];o.forEach(f=>{let{def:m}=f;f.tagEl.textContent=m.title[t],f.pinBtn.setAttribute("aria-label",m.title[t]),f.popEl.setAttribute("aria-label",m.title[t]),f.kickerEl.textContent=m.kicker[t],f.titleEl.textContent=m.title[t],f.usageEl.textContent=m.usage[t],f.visitBtn&&(f.visitBtn.textContent=v.visitZone),f.specsBtn&&(f.specsBtn.textContent=v.viewSpecs),f.linkEl&&m.hrefEn&&m.hrefZh&&(f.linkEl.href=t==="zh"?m.hrefZh:m.hrefEn,f.linkEl.textContent=t==="zh"?"\u4EA7\u54C1\u9875 \u2197":"Page \u2197"),f.inquireBtn&&(f.inquireBtn.textContent=v.inquireSetup)})};h("en");let p=x=>{let v=x.target;(!(v instanceof Element)||!v.closest(".campus-hotspot"))&&a()};document.addEventListener("click",p);let u=x=>{if(x.key!=="Escape"||!n)return;let v=o.find(f=>f.def.id===n);a(),v?.pinBtn.focus({preventScroll:!0}),x.preventDefault(),x.stopPropagation()};return i.addEventListener("keydown",u),{updateProjection:(x,v,f,m)=>{if(s!==m&&(a(),s=m),!(v<10||f<10))for(let _=0;_<o.length;_++){let E=o[_];if(!(E.def.zone===m)){E.rootEl.style.display="none";continue}if(r.copy(E.worldVec).project(x),r.z>1||r.z<-1||r.x<-1.04||r.x>1.04||r.y<-1.04||r.y>1.04){E.rootEl.style.display="none";continue}let S=(r.x*.5+.5)*v,T=(-r.y*.5+.5)*f;E.rootEl.style.display="",(Math.abs(S-E.lastPx)>=.35||Math.abs(T-E.lastPy)>=.35)&&(E.lastPx=S,E.lastPy=T,E.rootEl.style.left=`${S.toFixed(1)}px`,E.rootEl.style.top=`${T.toFixed(1)}px`),n===E.def.id&&c(E)}},setLanguage:h,closeAll:a,getOpenId:()=>n,dispose:()=>{document.removeEventListener("click",p),i.removeEventListener("keydown",u),i.innerHTML=""}}}function jr(i,e){let t=document.createElement("canvas");t.width=i,t.height=e;let n=t.getContext("2d");return[t,n]}function eo(i,e,t=1,n=1){return i.colorSpace=St,i.wrapS=hn,i.wrapT=hn,i.repeat.set(t,n),i.anisotropy=e,i.needsUpdate=!0,i}function Sx(i){let[e,t]=jr(512,512);t.fillStyle="#0e1b2d",t.fillRect(0,0,512,512);let n=t.createLinearGradient(0,0,512,512);n.addColorStop(0,"#13243b"),n.addColorStop(.5,"#0d192b"),n.addColorStop(1,"#152a44"),t.fillStyle=n,t.fillRect(10,10,492,492),t.strokeStyle="#cbd5dc",t.lineWidth=10,t.strokeRect(5,5,502,502);let s=6,r=10,o=12,a=(512-o*2)/s,c=(512-o*2)/r;for(let h=0;h<r;h++)for(let p=0;p<s;p++){let u=o+p*a,d=o+h*c;t.fillStyle=(h+p)%2===0?"#112238":"#142740",t.fillRect(u+2,d+2,a-4,c-4),t.fillStyle="rgba(205, 222, 236, 0.22)",t.fillRect(u+a*.25,d+2,1.2,c-4),t.fillRect(u+a*.5,d+2,1.2,c-4),t.fillRect(u+a*.75,d+2,1.2,c-4)}t.fillStyle="rgba(215, 226, 234, 0.42)",t.fillRect(10,254,492,4);let l=new gn(e);return eo(l,i,1,1)}function bx(i){let[e,t]=jr(256,256);t.fillStyle="#f2eee6",t.fillRect(0,0,256,256);for(let s=0;s<1800;s++){let r=s*73%256,o=s*137%256;t.fillStyle=s%3===0?"rgba(198, 190, 176, 0.18)":"rgba(255, 255, 255, 0.22)",t.fillRect(r,o,2,2)}t.strokeStyle="rgba(176, 168, 154, 0.24)",t.lineWidth=1;for(let s=64;s<256;s+=64)t.beginPath(),t.moveTo(0,s),t.lineTo(256,s),t.stroke();let n=new gn(e);return eo(n,i,2,2)}function Tx(i){let[e,t]=jr(256,256);t.fillStyle="#6c777a",t.fillRect(0,0,256,256);for(let s=0;s<2600;s++){let r=s*97%256,o=s*53%256;t.fillStyle=s%2===0?"rgba(255, 255, 255, 0.055)":"rgba(18, 28, 30, 0.08)",t.fillRect(r,o,2,2)}let n=new gn(e);return eo(n,i,6,1)}function wx(i){let[e,t]=jr(512,512);t.fillStyle="#c5d3c6",t.fillRect(0,0,512,512);for(let s=0;s<4200;s++){let r=(Math.sin(s*127.1+17)*43758.5453%1+1)%1*512,o=(Math.sin(s*311.7+83)*29743.2347%1+1)%1*512,a=s%3;t.fillStyle=a===0?"rgba(164, 188, 166, 0.24)":a===1?"rgba(218, 226, 210, 0.22)":"rgba(128, 158, 134, 0.16)",t.fillRect(r,o,3,3)}let n=new gn(e);return eo(n,i,16,16)}function Rx(i){let[e,t]=jr(256,256);t.fillStyle="#b98f63",t.fillRect(0,0,256,256);for(let s=0;s<256;s+=28)t.fillStyle=s%56===0?"rgba(155, 112, 70, 0.25)":"rgba(210, 174, 132, 0.15)",t.fillRect(0,s,256,25),t.fillStyle="rgba(72, 48, 28, 0.32)",t.fillRect(0,s+25,256,3);let n=new gn(e);return eo(n,i,2,2)}function id(i,e,t=4){let n=Math.min(i.capabilities.getMaxAnisotropy(),4,t),s=Sx(n),r=bx(n),o=Tx(n),a=wx(n),c=Rx(n),l=["/assets/images/stage-battery.png","/assets/images/stage-inverter.png","/assets/images/products/series_horizon.png","/assets/images/products/hybrid50.png","/assets/images/products/series_seed24.png","/assets/images/products/origAEV1000.png","/assets/images/stage-solar.png","/assets/images/stage-light.png","/assets/images/products/jcLight28.png","/assets/images/products/jcLight09.png"],h=new li,p=new Map;l.forEach(_=>{let E=h.load(_,y=>{y.colorSpace=St,y.anisotropy=n,y.needsUpdate=!0});E.colorSpace=St,p.set(_,E)});let u=[],d=[],x=(_,E,y=!1)=>{let S=()=>{};d.push(new Promise(g=>{S=g}));let T=h.load("/assets/materials/home/"+_+"-"+E+".jpg",()=>{S(),e?.()});return T.colorSpace=y?St:Yt,T.wrapS=T.wrapT=hn,T.repeat.set(1,1),T.anisotropy=n,u.push(T),T},v=(_,E=!1)=>({color:x(_,"color",!0),normal:x(_,"normalgl"),roughness:x(_,"roughness"),...E?{ao:x(_,"ambientocclusion")}:{}}),f={plaster:v("plaster"),timber:v("timber",!0),paving:v("paving",!0)},m=Promise.all(d).then(()=>{e?.()});return{solarPanel:s,limestoneWall:r,roadAsphalt:o,grassGround:a,timberDeck:c,homePbr:f,homePbrReady:m,productTextures:p,dispose:()=>{s.dispose(),r.dispose(),o.dispose(),a.dispose(),c.dispose(),p.forEach(_=>_.dispose()),p.clear(),u.forEach(_=>_.dispose())}}}function sd(){let i=new Ve(8369373),e=new Ve(14017769),t=new Ve(265768),n=new Ve(1848406),s={zenith:{value:i.clone()},horizon:{value:e.clone()}},r=new Pr(160,16,8),o=new Cn({uniforms:s,vertexShader:`
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
    `,side:qt,depthWrite:!1,depthTest:!1,fog:!1,toneMapped:!1}),a=new ue(r,o);return a.name="CampusAtmosphericSky",a.frustumCulled=!1,a.renderOrder=-100,{mesh:a,setNightFactor(c){s.zenith.value.copy(i).lerp(t,c),s.horizon.value.copy(e).lerp(n,c)},dispose(){r.dispose(),o.dispose()}}}var rd=new Ve(14017769),Ax=new Ve(1848406),od=new Ve(16773853),Cx=new Ve(9152992),ad=new Ve(14150655),Px=new Ve(4746142),cd=new Ve(9017211),Ix=new Ve(1516348);function ld(i){let{heroSection:e,stickyViewport:t,canvasHost:n,hotspotsHost:s,fallbackView:r}=i,o=!1,a=!1,c=!1,l=!1,h=!1,p=!1,u="day",d="overview",x="en",v=window.matchMedia("(prefers-reduced-motion: reduce)"),f=v.matches,m=0,_=0,E=null,y=null,S=0,T=null,g=null,M=U=>{console.warn("[Anthrise Campus 3D]",U),e.dataset.webglState="fallback",r.hidden=!1},A=window.setTimeout(()=>{!a&&!o&&M("WebGL initialization timed out")},3e3),C;try{C=document.createElement("canvas"),C.className="campus-webgl-canvas",C.setAttribute("aria-label","Interactive 3D Clean Energy Campus"),n.appendChild(C),E=new Ka({canvas:C,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch(U){return window.clearTimeout(A),M(String(U)),{bridge:{setTime:()=>{},setFlowVisible:()=>{},setMotionPaused:()=>{},setZone:()=>{},setLanguage:()=>{},setSuspended:()=>{},closeHotspots:()=>{},getState:()=>({ready:!1,time:u,flowVisible:p,activeZone:d})},dispose:()=>{}}}let D=E.getContext(),N=D.getExtension("WEBGL_debug_renderer_info"),I=N?String(D.getParameter(N.UNMASKED_RENDERER_WEBGL)):"",b=/SwiftShader|llvmpipe|softpipe/i.test(I),z=window.innerWidth<=768;E.outputColorSpace=St,E.toneMapping=Br,E.toneMappingExposure=.98,E.setPixelRatio(b?.85:Math.min(window.devicePixelRatio||1,z?1.5:2)),E.shadowMap.enabled=!0,E.shadowMap.type=b?Oi:aa;let B=new Di,G=rd.clone(),oe=new cr(G.getHex(),.009);B.background=G,B.fog=oe;let Y=sd();B.add(Y.mesh);let J=new Ds(E),de=new sc;y=J.fromScene(de,.04),B.environment=y.texture,B.environmentIntensity=.36,de.dispose(),J.dispose();let Ne=new Dr(ad.getHex(),cd.getHex(),.76);B.add(Ne);let we=new ws(od.getHex(),2.35);we.position.set(28,36,22),we.castShadow=!0,we.shadow.mapSize.set(b||z?1024:2048,b||z?1024:2048),we.shadow.camera.near=6,we.shadow.camera.far=96,we.shadow.camera.left=-36,we.shadow.camera.right=36,we.shadow.camera.top=34,we.shadow.camera.bottom=-34,we.shadow.bias=-4e-4,we.shadow.normalBias=.025,B.add(we,we.target);let ee=new ws(13362158,.28);ee.position.set(-28,16,-24),B.add(ee);let Se=new rn(40,16/9,.4,220),te=!0,Me=()=>{o||(te=!0)},he=id(E,Me,b?1:4),Fe=Ku(he,Me);B.add(Fe.root);let rt=Qu(Fe.root,he,Me),pe=ed();B.add(pe.group);let _e=[];B.traverse(U=>{(U instanceof tn||U instanceof Bi)&&_e.push(U)});let De=b?4:z?6:_e.length;e.dataset.lightingQuality=De<_e.length?"balanced":"full";let V=null,ge=()=>{if(Wu(_e,d,De),V!==d){V=d;let U=d==="home",ce=U?new P(-11.5,1,2):new P;we.target.position.copy(ce),we.position.copy(ce).add(new P(28,36,22)),we.target.updateMatrixWorld(!0);let be=we.shadow.camera;be.left=U?-12:-36,be.right=U?12:36,be.top=U?10:34,be.bottom=U?-10:-34,be.updateProjectionMatrix(),we.shadow.normalBias=U?.009:.025,we.shadow.needsUpdate=!0,e.dataset.shadowFocus=U?"home-contact":"campus"}},ie=ju(Se),F=Math.max(1,n.clientWidth),W=Math.max(1,n.clientHeight),k=nd(s,{onSelectZone:U=>ft(U,!1),onInspectProduct:U=>i.onInspectProduct?.(U),onInquireProduct:U=>i.onInquireProduct?.(U)}),re=()=>{E&&(F=Math.max(1,n.clientWidth),W=Math.max(1,n.clientHeight),E.setSize(F,W,!1),Se.aspect=F/W,Se.updateProjectionMatrix(),te=!0)};re();let ye=!1,Re=[],Ee=()=>{E.render(B,Se),k.updateProjection(Se,F,W,d),Re=Se.position.toArray()},O=()=>{ye||(ye=!0,queueMicrotask(()=>{ye=!1,!o&&(Ee(),te=!1)}))};he.homePbrReady?.then(O);let Ze=null,Xe=0,ot=()=>{let U=e.getBoundingClientRect(),ce=Math.max(1,t.clientHeight||window.innerHeight-70),be=U.height-ce;if(be<=40)return Ze?Qr[Ze].progress:Xe;let xe=bt.clamp((70-U.top)/be,0,1);return Xe=xe,xe},Ce=U=>{G.copy(rd).lerp(Ax,U),Y.setNightFactor(U),oe.color.copy(G),oe.density=bt.lerp(.009,.008,U),B.environmentIntensity=bt.lerp(.36,.12,U),E.toneMappingExposure=bt.lerp(.98,.96,U),we.color.copy(od).lerp(Cx,U),we.intensity=bt.lerp(2.35,.46,U),Ne.color.copy(ad).lerp(Px,U),Ne.groundColor.copy(cd).lerp(Ix,U),Ne.intensity=bt.lerp(.76,.34,U),ee.intensity=bt.lerp(.28,.16,U);let ce=u==="night"?U:0;Fe.setNightFactor(ce),rt.setNightFactor(ce),ge(),pe.setState(_,f,h)},ft=(U,ce=!1)=>{let be=Qr[U];if(!be)return;let xe=e.getBoundingClientRect(),et=Math.max(1,t.clientHeight||window.innerHeight-70),nt=xe.height-et;if(ie.resetOrbit(),k.closeAll(),nt>40){let yt=window.scrollY+xe.top-70,sn=Math.max(0,yt+be.progress*nt);ce||f?(window.scrollTo({top:sn,behavior:"auto"}),ie.snapToProgress(ot(),F/W)):window.scrollTo({top:sn,behavior:"smooth"})}else Ze=U,Xe=be.progress,ce||f?ie.snapToProgress(be.progress,F/W):ie.setScrollProgress(be.progress);d!==U&&(d=U,i.onZoneChange?.(U)),ge(),te=!0,ce&&O()},Ge=!1,ke=0,L=0,w=0,K=null,Ae=n.getAttribute("tabindex");n.tabIndex=0,n.setAttribute("aria-keyshortcuts","ArrowLeft ArrowRight ArrowUp ArrowDown Home Escape");let ve=U=>{U.button!==0&&U.pointerType==="mouse"||K!==null||U.target?.closest(".campus-hotspot, .campus-hud, button, a")||(Ge=!0,K=U.pointerId,n.setPointerCapture(U.pointerId),n.focus({preventScroll:!0}),w=0,ke=U.clientX,L=U.clientY,n.classList.add("is-dragging"))},X=U=>{if(!Ge||U.pointerId!==K)return;let ce=U.clientX-ke,be=U.clientY-L;ke=U.clientX,L=U.clientY,w+=Math.hypot(ce,be),ie.setOrbitOffset(-ce*.0042,-be*.0024),te=!0},Q=U=>{!Ge||U.pointerId!==K||(Ge=!1,K=null,n.hasPointerCapture(U.pointerId)&&n.releasePointerCapture(U.pointerId),n.classList.remove("is-dragging"),w>6&&(n.dataset.recentDrag="1",window.setTimeout(()=>{delete n.dataset.recentDrag},90)))},$=U=>{if(U.target!==n||U.altKey||U.ctrlKey||U.metaKey)return;let ce={ArrowLeft:[-.045,0],ArrowRight:[.045,0],ArrowUp:[0,-.025],ArrowDown:[0,.025]};if(ce[U.key])ie.setOrbitOffset(...ce[U.key]);else if(U.key==="Home")ie.resetOrbit();else if(U.key==="Escape")k.closeAll();else return;U.preventDefault(),te=!0};n.addEventListener("pointerdown",ve),n.addEventListener("pointercancel",Q),n.addEventListener("lostpointercapture",Q),n.addEventListener("keydown",$),window.addEventListener("pointermove",X,{passive:!0}),window.addEventListener("pointerup",Q,{passive:!0});let j=()=>{Ze=null;let U=ot();ie.setScrollProgress(U);let ce=ie.getZoneForProgress(U);ce!==d&&(d=ce,i.onZoneChange?.(ce),ge()),te=!0};window.addEventListener("scroll",j,{passive:!0});let me=U=>{U.preventDefault(),l=!0,M("WebGL context lost")},H=()=>{l=!1,te=!0,e.dataset.webglState="active",r.hidden=!0};C.addEventListener("webglcontextlost",me),C.addEventListener("webglcontextrestored",H),"ResizeObserver"in window&&(T=new ResizeObserver(()=>re()),T.observe(n)),"IntersectionObserver"in window&&(g=new IntersectionObserver(U=>{U.forEach(ce=>{c=!ce.isIntersecting})},{threshold:.02}),g.observe(e));let ae=()=>{document.visibilityState==="visible"&&(Pe=performance.now())};document.addEventListener("visibilitychange",ae);let Z=U=>{f=U.matches,pe.setState(_,f,h),te=!0};v.addEventListener("change",Z);let Pe=performance.now(),Te=0,Ue=0,$e=U=>{if(o)return;if(S=window.requestAnimationFrame($e),c||l||document.visibilityState==="hidden"){Pe=U;return}if(b&&U-Te<45)return;let ce=Math.max(0,Math.min((U-Pe)/1e3,.08));Pe=U;let be=!1;if(Math.abs(m-_)>.002){if(f||h||b)m=_;else{let yt=1-Math.exp(-3.6*ce);m=Math.abs(_-m)<.008?_:bt.lerp(m,_,yt)}Ce(m),be=!0}let xe=ot();ie.setScrollProgress(xe);let et=ie.update(ce,F/Math.max(1,W),f),nt=p&&!f&&!h;nt?pe.update(ce):(te||be)&&p&&pe.update(0),(te||be||et||nt||Ue<2)&&(Te=U,te=!1,Ee(),Ue++,!a&&Ue>=2&&(a=!0,window.clearTimeout(A),e.dataset.webglState="active",r.hidden=!0))};return Ce(0),ie.snapToProgress(ot(),F/Math.max(1,W)),Ee(),a=!0,window.clearTimeout(A),e.dataset.webglState="active",r.hidden=!0,S=window.requestAnimationFrame($e),{bridge:{setTime:(U,ce=!1)=>{u=U,_=U==="night"?1:0,pe.setState(_,f,h),U==="day"&&(Fe.setNightFactor(0),rt.setNightFactor(0)),(ce||f||h||b)&&(m=_,Ce(m)),te=!0,(ce||b)&&O()},setFlowVisible:U=>{p=U,pe.setVisible(U),te=!0},setMotionPaused:U=>{h=U,pe.setState(_,f,h),te=!0},setZone:ft,setLanguage:U=>{x=U,k.setLanguage(x),te=!0},setSuspended:U=>{l=U,U||(te=!0)},closeHotspots:()=>{k.closeAll()},getState:()=>({ready:a,time:u,flowVisible:p,activeZone:d}),getReviewState:()=>{let U=Object.values(he.homePbr||{}).flatMap(xe=>[xe.color,xe.normal,xe.roughness,...xe.ao?[xe.ao]:[]]),ce=xe=>xe.image?.width||0,be=[];return Fe.root.getObjectByName("HomeTechnicalWing-RealOpenings")?.traverse(xe=>{if(!(xe instanceof ue))return;let et=xe.material;et.map&&be.push({name:xe.name,width:ce(et.map),version:et.map.version})}),{cameraPosition:Se.position.toArray(),cameraQuaternion:Se.quaternion.toArray(),fov:Se.fov,aspect:Se.aspect,lastDrawCamera:Re,canvas:[C.width,C.height],gpu:I,loadedPbrMaps:U.filter(xe=>ce(xe)>0).length,totalPbrMaps:U.length,technicalWallMaps:be,renderCalls:E.info.render.calls,lights:_e.map(xe=>({name:xe.name,visible:xe.visible,intensity:xe.intensity})),nightBlend:m}}},dispose:()=>{o=!0,window.clearTimeout(A),S&&window.cancelAnimationFrame(S),n.removeEventListener("pointerdown",ve),n.removeEventListener("pointercancel",Q),n.removeEventListener("lostpointercapture",Q),n.removeEventListener("keydown",$),K!==null&&n.hasPointerCapture(K)&&n.releasePointerCapture(K),n.removeAttribute("aria-keyshortcuts"),Ae===null?n.removeAttribute("tabindex"):n.setAttribute("tabindex",Ae),window.removeEventListener("pointermove",X),window.removeEventListener("pointerup",Q),window.removeEventListener("scroll",j),document.removeEventListener("visibilitychange",ae),v.removeEventListener("change",Z),C.removeEventListener("webglcontextlost",me),C.removeEventListener("webglcontextrestored",H),T?.disconnect(),g?.disconnect(),k.dispose(),pe.dispose(),rt.dispose(),Fe.dispose(),Y.dispose(),he.dispose(),y?.dispose(),E?.dispose(),C.remove()}}}function hd(){let i=document.getElementById("hero-section"),e=document.getElementById("hero-scene-viewport"),t=document.getElementById("campus-canvas-host"),n=document.getElementById("campus-hotspots"),s=document.getElementById("campus-fallback-view");if(!i||!e||!t||!n||!s)return;let r=document.getElementById("campus-zone-num"),o=document.getElementById("campus-zone-title"),a=document.getElementById("campus-zone-subtitle"),c=document.getElementById("campus-zone-note"),l=document.getElementById("campus-drag-hint"),h=Array.from(document.querySelectorAll("[data-campus-zone]")),p="overview",u=i.dataset.sceneTime==="night"?"night":"day",d=document.documentElement.lang.startsWith("zh")?"zh":"en",x=()=>{let T=Qr[p],g=ac[d];r&&(r.textContent=T.num),o&&(o.textContent=T.title[d]),a&&(a.textContent=T.subtitle[d]),c&&(c.textContent=u==="night"?T.noteNight[d]:T.noteDay[d]),l&&(l.textContent=g.dragHint),h.forEach(M=>{let A=M.dataset.campusZone;if(!A)return;let C=A===p;M.classList.toggle("is-active",C),M.setAttribute("aria-pressed",String(C));let D=M.querySelector(".campus-zone-label");D&&(D.textContent=g.zones[A])}),i.dataset.activeZone=p},m=ld({heroSection:i,stickyViewport:e,canvasHost:t,hotspotsHost:n,fallbackView:s,onZoneChange:T=>{p=T,x()},onInspectProduct:T=>{if(typeof window.__anthriseOpenStageProduct=="function"){window.__anthriseOpenStageProduct(T);return}document.getElementById("products")?.scrollIntoView({behavior:"smooth",block:"start"})},onInquireProduct:T=>{let g=T.title[d],M=T.modelCode||"",A=T.topic||"home";if(typeof window.__anthrisePrefillInquiry=="function"){window.__anthrisePrefillInquiry(A,M,g);return}let C=document.getElementById("project-inquiry"),D=document.getElementById("inq-topic"),N=document.getElementById("inq-message");if(D instanceof HTMLSelectElement&&(D.value=A),N instanceof HTMLTextAreaElement){let I=d==="zh"?`[\u56ED\u533A\u573A\u666F\u54A8\u8BE2] ${g}${M?`\uFF08${M}\uFF09`:""}
`:`[Campus Inquiry] ${g}${M?` (${M})`:""}
`;N.value.includes(g)||(N.value=N.value.trim()?`${I}${N.value}`:I)}C?.scrollIntoView({behavior:"smooth",block:"start"})}}),_={...m.bridge,setTime:(T,g)=>{u=T,m.bridge.setTime(T,g),x()},setZone:(T,g)=>{p=T,m.bridge.setZone(T,g),x()},setLanguage:T=>{d=T,m.bridge.setLanguage(T),x()}};window.ANTHRISE_CAMPUS=_,h.forEach(T=>{T.addEventListener("click",()=>{let g=T.dataset.campusZone;g&&_.setZone(g,!1)})}),_.setTime(u,!0),_.setLanguage(d);let E=new URLSearchParams(window.location.search),y=E.get("campus-time");(y==="day"||y==="night")&&_.setTime(y,!0);let S=E.get("campus-zone");["overview","home","commercial","offgrid"].includes(S||"")&&_.setZone(S,!0),x(),window.addEventListener("beforeunload",()=>{m.dispose()})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",hd,{once:!0}):hd();
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
