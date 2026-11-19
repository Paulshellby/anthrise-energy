var ea="187";var sh=0,Nl=1,rh=2;var wr=1,ta=2,Ss=3,fi=0,Jt=1,xn=2,Ii=0,Es=1,Ul=2,Fl=3,Ol=4,oh=5;var Li=100,ah=101,lh=102,ch=103,hh=104,uh=200,dh=201,fh=202,ph=203,Bl=204,Hl=205,mh=206,gh=207,_h=208,xh=209,vh=210,yh=211,Mh=212,Sh=213,Eh=214,Mo=0,So=1,Eo=2,as=3,bo=4,To=5,wo=6,Ao=7,na=0,bh=1,Th=2,On=0,zl=1,kl=2,Gl=3,Ar=4,Vl=5,Wl=6,Xl=7;var ql=300,Di=301,bs=302,ia=303,sa=304,wi=1e3,Ln=1001,Ro=1002,Wt=1003,wh=1004;var Rr=1005;var tn=1006,ra=1007;var Jn=1008;var sn=1009,Yl=1010,Zl=1011,Ts=1012,oa=1013,An=1014,vn=1015,Rn=1016,aa=1017,la=1018,Ni=1020,Jl=35902,$l=35899,Kl=1021,Ql=1022,Cn=1023,qn=1026,$n=1027,ca=1028,ha=1029,pi=1030,ua=1031;var da=1033,Cr=33776,Pr=33777,Ir=33778,Lr=33779,fa=35840,pa=35841,ma=35842,ga=35843,_a=36196,xa=37492,va=37496,ya=37488,Ma=37489,Dr=37490,Sa=37491,Ea=37808,ba=37809,Ta=37810,wa=37811,Aa=37812,Ra=37813,Ca=37814,Pa=37815,Ia=37816,La=37817,Da=37818,Na=37819,Ua=37820,Fa=37821,Oa=36492,Ba=36494,Ha=36495,za=36283,ka=36284,Nr=36285,Ga=36286;var qs=2300,Co=2301,xo=2302,El=2303,bl=2400,Tl=2401,wl=2402;var Ah=3200;var Ur=0,Rh=1,Kn="",Dt="srgb",Ys="srgb-linear",Zs="linear",Mt="srgb";var vo=7680;var Ch=519,Ph=512,Ih=513,Lh=514,jl=515,Dh=516,Nh=517,ec=518,tc=519,Uh=35044,nc=35048;var ic="300 es",fn=2e3,ls=2001;function Gu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Vu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function cs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fh(){let i=cs("canvas");return i.style.display="block",i}var Tc={},hs=null;function sc(...i){let e="THREE."+i.shift();hs?hs("log",e,...i):console.log(e,...i)}function Oh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function $e(...i){i=Oh(i);let e="THREE."+i.shift();if(hs)hs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Qe(...i){i=Oh(i);let e="THREE."+i.shift();if(hs)hs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ti(...i){let e=i.join(" ");e in Tc||(Tc[e]=!0,$e(...i))}function Bh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Hh={[Mo]:Mo,[Eo]:wo,[bo]:bo,[as]:To,[So]:So,[wo]:Eo,[Ao]:Ao,[To]:as},Dn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wc=1234567,Gs=Math.PI/180,us=180/Math.PI;function Ui(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function rc(i,e){return(i%e+e)%e}function Wu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Xu(i,e,t){return i!==e?(t-i)/(e-i):0}function Vs(i,e,t){return(1-t)*i+t*e}function qu(i,e,t,n){return Vs(i,e,1-Math.exp(-t*n))}function Yu(i,e=1){return e-Math.abs(rc(i,e*2)-e)}function Zu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ju(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function $u(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ku(i,e){return i+Math.random()*(e-i)}function Qu(i){return i*(.5-Math.random())}function ju(i){i!==void 0&&(wc=i);let e=wc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ed(i){return i*Gs}function td(i){return i*us}function nd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function id(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function oc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sd(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),d=o((e-n)/2),u=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*f,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*_,l*u,a*c);break;case"YXY":i.set(l*u,a*h,l*_,a*c);break;case"ZYZ":i.set(l*_,l*u,a*h,a*c);break;default:$e("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ac(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function zh(i,e){if(e.constructor===Float32Array)return i;let t=ac(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function kh(i,e){if(e.constructor===Float32Array)return i;let t=ac(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var vt={DEG2RAD:Gs,RAD2DEG:us,generateUUID:Ui,clamp:at,euclideanModulo:rc,mapLinear:Wu,inverseLerp:Xu,lerp:Vs,damp:qu,pingpong:Yu,smoothstep:Zu,smootherstep:Ju,randInt:$u,randFloat:Ku,randFloatSpread:Qu,seededRandom:ju,degToRad:ed,radToDeg:td,isPowerOfTwo:nd,ceilPowerOfTwo:id,floorPowerOfTwo:oc,setQuaternionFromProperEuler:sd,normalize:kh,denormalize:zh},Se=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],d=r[o+0],u=r[o+1],_=r[o+2],M=r[o+3];if(f!==M||l!==d||c!==u||h!==_){let p=l*d+c*u+h*_+f*M;p<0&&(d=-d,u=-u,_=-_,M=-M,p=-p);let m=1-a;if(p<.9995){let x=Math.acos(p),y=Math.sin(x);m=Math.sin(m*x)/y,a=Math.sin(a*x)/y,l=l*m+d*a,c=c*m+u*a,h=h*m+_*a,f=f*m+M*a}else{l=l*m+d*a,c=c*m+u*a,h=h*m+_*a,f=f*m+M*a;let x=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=x,c*=x,h*=x,f*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],d=r[o+1],u=r[o+2],_=r[o+3];return e[t]=a*_+h*f+l*u-c*d,e[t+1]=l*_+h*d+c*f-a*u,e[t+2]=c*_+h*u+a*d-l*f,e[t+3]=h*_-a*f-l*d-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),d=l(n/2),u=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*h*f+c*u*_,this._y=c*u*f-d*h*_,this._z=c*h*_+d*u*f,this._w=c*h*f-d*u*_;break;case"YXZ":this._x=d*h*f+c*u*_,this._y=c*u*f-d*h*_,this._z=c*h*_-d*u*f,this._w=c*h*f+d*u*_;break;case"ZXY":this._x=d*h*f-c*u*_,this._y=c*u*f+d*h*_,this._z=c*h*_+d*u*f,this._w=c*h*f-d*u*_;break;case"ZYX":this._x=d*h*f-c*u*_,this._y=c*u*f+d*h*_,this._z=c*h*_-d*u*f,this._w=c*h*f+d*u*_;break;case"YZX":this._x=d*h*f+c*u*_,this._y=c*u*f+d*h*_,this._z=c*h*_-d*u*f,this._w=c*h*f-d*u*_;break;case"XZY":this._x=d*h*f-c*u*_,this._y=c*u*f-d*h*_,this._z=c*h*_+d*u*f,this._w=c*h*f+d*u*_;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>f){let u=2*Math.sqrt(1+n-a-f);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>f){let u=2*Math.sqrt(1+a-n-f);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ac.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return el.copy(this).projectOnVector(e),this.sub(el)}reflect(e){return this.sub(el.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},el=new C,Ac=new pn,tt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],_=n[8],M=s[0],p=s[3],m=s[6],x=s[1],y=s[4],v=s[7],w=s[2],T=s[5],g=s[8];return r[0]=o*M+a*x+l*w,r[3]=o*p+a*y+l*T,r[6]=o*m+a*v+l*g,r[1]=c*M+h*x+f*w,r[4]=c*p+h*y+f*T,r[7]=c*m+h*v+f*g,r[2]=d*M+u*x+_*w,r[5]=d*p+u*y+_*T,r[8]=d*m+u*v+_*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*r,u=c*r-o*l,_=t*f+n*d+s*u;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return e[0]=f*M,e[1]=(s*c-h*n)*M,e[2]=(a*n-s*o)*M,e[3]=d*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-a*t)*M,e[6]=u*M,e[7]=(n*l-c*t)*M,e[8]=(o*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ti("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(tl.makeScale(e,t)),this}rotate(e){return Ti("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(tl.makeRotation(-e)),this}translate(e,t){return Ti("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},tl=new tt,Rc=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cc=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rd(){let i={enabled:!0,workingColorSpace:Ys,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Mt&&(s.r=Xn(s.r),s.g=Xn(s.g),s.b=Xn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Mt&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Kn?Zs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ys]:{primaries:e,whitePoint:n,transfer:Zs,toXYZ:Rc,fromXYZ:Cc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:Rc,fromXYZ:Cc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),i}var ft=rd();function Xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Xi,Po=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xi===void 0&&(Xi=cs("canvas")),Xi.width=e.width,Xi.height=e.height;let s=Xi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Xi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=cs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xn(t[n]/255)*255):t[n]=Xn(t[n]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},od=0,ds=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nl(s[o].image)):r.push(nl(s[o]))}else r=nl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function nl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Po.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}var ad=0,il=new C,jt=class i extends Dn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ln,s=Ln,r=tn,o=Jn,a=Cn,l=sn,c=i.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Ui(),this.name="",this.source=new ds(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(il).x}get height(){return this.source.getSize(il).y}get depth(){return this.source.getSize(il).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ql)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wi:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case Ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wi:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case Ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=ql;jt.DEFAULT_ANISOTROPY=1;var Pt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],_=l[9],M=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-M)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+M)<.1&&Math.abs(_+p)<.1&&Math.abs(c+u+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,v=(u+1)/2,w=(m+1)/2,T=(h+d)/4,g=(f+M)/4,E=(_+p)/4;return y>v&&y>w?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=g/n):v>w?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=E/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=g/r,s=E/r),this.set(n,s,r,t),this}let x=Math.sqrt((p-_)*(p-_)+(f-M)*(f-M)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(p-_)/x,this.y=(f-M)/x,this.z=(d-h)/x,this.w=Math.acos((c+u+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Io=class extends Dn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new jt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ds(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends Io{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Js=class extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Lo=class extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var wt=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,l,c,h,f,d,u,_,M,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,f,d,u,_,M,p)}set(e,t,n,s,r,o,a,l,c,h,f,d,u,_,M,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=d,m[3]=u,m[7]=_,m[11]=M,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/qi.setFromMatrixColumn(e,0).length(),r=1/qi.setFromMatrixColumn(e,1).length(),o=1/qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=o*h,u=o*f,_=a*h,M=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=u+_*c,t[5]=d-M*c,t[9]=-a*l,t[2]=M-d*c,t[6]=_+u*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,u=l*f,_=c*h,M=c*f;t[0]=d+M*a,t[4]=_*a-u,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=u*a-_,t[6]=M+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,u=l*f,_=c*h,M=c*f;t[0]=d-M*a,t[4]=-o*f,t[8]=_+u*a,t[1]=u+_*a,t[5]=o*h,t[9]=M-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,u=o*f,_=a*h,M=a*f;t[0]=l*h,t[4]=_*c-u,t[8]=d*c+M,t[1]=l*f,t[5]=M*c+d,t[9]=u*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,u=o*c,_=a*l,M=a*c;t[0]=l*h,t[4]=M-d*f,t[8]=_*f+u,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=u*f+_,t[10]=d-M*f}else if(e.order==="XZY"){let d=o*l,u=o*c,_=a*l,M=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+M,t[5]=o*h,t[9]=u*f-_,t[2]=_*f-u,t[6]=a*h,t[10]=M*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ld,e,cd)}lookAt(e,t,n){let s=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),jn.crossVectors(n,rn),jn.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),jn.crossVectors(n,rn)),jn.normalize(),Zr.crossVectors(rn,jn),s[0]=jn.x,s[4]=Zr.x,s[8]=rn.x,s[1]=jn.y,s[5]=Zr.y,s[9]=rn.y,s[2]=jn.z,s[6]=Zr.z,s[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],_=n[2],M=n[6],p=n[10],m=n[14],x=n[3],y=n[7],v=n[11],w=n[15],T=s[0],g=s[4],E=s[8],I=s[12],A=s[1],L=s[5],B=s[9],V=s[13],D=s[2],z=s[6],Y=s[10],q=s[14],ne=s[3],$=s[7],se=s[11],re=s[15];return r[0]=o*T+a*A+l*D+c*ne,r[4]=o*g+a*L+l*z+c*$,r[8]=o*E+a*B+l*Y+c*se,r[12]=o*I+a*V+l*q+c*re,r[1]=h*T+f*A+d*D+u*ne,r[5]=h*g+f*L+d*z+u*$,r[9]=h*E+f*B+d*Y+u*se,r[13]=h*I+f*V+d*q+u*re,r[2]=_*T+M*A+p*D+m*ne,r[6]=_*g+M*L+p*z+m*$,r[10]=_*E+M*B+p*Y+m*se,r[14]=_*I+M*V+p*q+m*re,r[3]=x*T+y*A+v*D+w*ne,r[7]=x*g+y*L+v*z+w*$,r[11]=x*E+y*B+v*Y+w*se,r[15]=x*I+y*V+v*q+w*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],u=e[14],_=e[3],M=e[7],p=e[11],m=e[15],x=l*u-c*d,y=a*u-c*f,v=a*d-l*f,w=o*u-c*h,T=o*d-l*h,g=o*f-a*h;return t*(M*x-p*y+m*v)-n*(_*x-p*w+m*T)+s*(_*y-M*w+m*g)-r*(_*v-M*T+p*g)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],u=e[11],_=e[12],M=e[13],p=e[14],m=e[15],x=t*a-n*o,y=t*l-s*o,v=t*c-r*o,w=n*l-s*a,T=n*c-r*a,g=s*c-r*l,E=h*M-f*_,I=h*p-d*_,A=h*m-u*_,L=f*p-d*M,B=f*m-u*M,V=d*m-u*p,D=x*V-y*B+v*L+w*A-T*I+g*E;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/D;return e[0]=(a*V-l*B+c*L)*z,e[1]=(s*B-n*V-r*L)*z,e[2]=(M*g-p*T+m*w)*z,e[3]=(d*T-f*g-u*w)*z,e[4]=(l*A-o*V-c*I)*z,e[5]=(t*V-s*A+r*I)*z,e[6]=(p*v-_*g-m*y)*z,e[7]=(h*g-d*v+u*y)*z,e[8]=(o*B-a*A+c*E)*z,e[9]=(n*A-t*B-r*E)*z,e[10]=(_*T-M*v+m*x)*z,e[11]=(f*v-h*T-u*x)*z,e[12]=(a*I-o*L-l*E)*z,e[13]=(t*L-n*I+s*E)*z,e[14]=(M*y-_*w-p*x)*z,e[15]=(h*w-f*y+d*x)*z,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,d=r*c,u=r*h,_=r*f,M=o*h,p=o*f,m=a*f,x=l*c,y=l*h,v=l*f,w=n.x,T=n.y,g=n.z;return s[0]=(1-(M+m))*w,s[1]=(u+v)*w,s[2]=(_-y)*w,s[3]=0,s[4]=(u-v)*T,s[5]=(1-(d+m))*T,s[6]=(p+x)*T,s[7]=0,s[8]=(_+y)*g,s[9]=(p-x)*g,s[10]=(1-(d+M))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=qi.set(s[0],s[1],s[2]).length(),a=qi.set(s[4],s[5],s[6]).length(),l=qi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Sn.copy(this);let c=1/o,h=1/a,f=1/l;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=f,Sn.elements[9]*=f,Sn.elements[10]*=f,t.setFromRotationMatrix(Sn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=fn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),u=(n+s)/(n-s),_,M;if(l)_=r/(o-r),M=o*r/(o-r);else if(a===fn)_=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===ls)_=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=fn,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),u=-(n+s)/(n-s),_,M;if(l)_=1/(o-r),M=o/(o-r);else if(a===fn)_=-2/(o-r),M=-(o+r)/(o-r);else if(a===ls)_=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},qi=new C,Sn=new wt,ld=new C(0,0,0),cd=new C(1,1,1),jn=new C,Zr=new C,rn=new C,Pc=new wt,Ic=new pn,Nn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ic.setFromEuler(this),this.setFromQuaternion(Ic,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nn.DEFAULT_ORDER="XYZ";var $s=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},hd=0,Lc=new C,Yi=new pn,zn=new wt,Jr=new C,Us=new C,ud=new C,dd=new pn,Dc=new C(1,0,0),Nc=new C(0,1,0),Uc=new C(0,0,1),Fc={type:"added"},fd={type:"removed"},Zi={type:"childadded",child:null},sl={type:"childremoved",child:null},It=class i extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new Nn,n=new pn,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new wt},normalMatrix:{value:new tt}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $s,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(Dc,e)}rotateY(e){return this.rotateOnAxis(Nc,e)}rotateZ(e){return this.rotateOnAxis(Uc,e)}translateOnAxis(e,t){return Lc.copy(e).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dc,e)}translateY(e){return this.translateOnAxis(Nc,e)}translateZ(e){return this.translateOnAxis(Uc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Jr.copy(e):Jr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Us,Jr,this.up):zn.lookAt(Jr,Us,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),Yi.setFromRotationMatrix(zn),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fc),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fd),sl.child=e,this.dispatchEvent(sl),sl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fc),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,ud),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,dd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),u=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};It.DEFAULT_UP=new C(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Et=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},pd={type:"move"},fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let M of e.hand.values()){let p=t.getJointPose(M,n),m=this._getHandJoint(c,M);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,_=.005;c.inputState.pinching&&d>u+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=u-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pd)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},$r={h:0,s:0,l:0};function rl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ft.workingColorSpace){if(e=rc(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=rl(o,r,e+1/3),this.g=rl(o,r,e),this.b=rl(o,r,e-1/3)}return ft.colorSpaceToWorking(this,s),this}setStyle(e,t=Dt){function n(r){r!==void 0&&parseFloat(r)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){let n=Gh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return ft.workingToColorSpace(Kt.copy(this),e),Math.round(at(Kt.r*255,0,255))*65536+Math.round(at(Kt.g*255,0,255))*256+Math.round(at(Kt.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(Kt.copy(this),t);let n=Kt.r,s=Kt.g,r=Kt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Dt){ft.workingToColorSpace(Kt.copy(this),e);let t=Kt.r,n=Kt.g,s=Kt.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL($r);let n=Vs(ei.h,$r.h,t),s=Vs(ei.s,$r.s,t),r=Vs(ei.l,$r.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new qe;qe.NAMES=Gh;var Ks=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new qe(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ai=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},En=new C,kn=new C,ol=new C,Gn=new C,Ji=new C,$i=new C,Oc=new C,al=new C,ll=new C,cl=new C,hl=new Pt,ul=new Pt,dl=new Pt,si=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),En.subVectors(e,t),s.cross(En);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){En.subVectors(s,t),kn.subVectors(n,t),ol.subVectors(e,t);let o=En.dot(En),a=En.dot(kn),l=En.dot(ol),c=kn.dot(kn),h=kn.dot(ol),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(c*l-a*h)*d,_=(o*h-a*l)*d;return r.set(1-u-_,_,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return hl.setScalar(0),ul.setScalar(0),dl.setScalar(0),hl.fromBufferAttribute(e,t),ul.fromBufferAttribute(e,n),dl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(hl,r.x),o.addScaledVector(ul,r.y),o.addScaledVector(dl,r.z),o}static isFrontFacing(e,t,n,s){return En.subVectors(n,t),kn.subVectors(e,t),En.cross(kn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),En.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ji.subVectors(s,n),$i.subVectors(r,n),al.subVectors(e,n);let l=Ji.dot(al),c=$i.dot(al);if(l<=0&&c<=0)return t.copy(n);ll.subVectors(e,s);let h=Ji.dot(ll),f=$i.dot(ll);if(h>=0&&f<=h)return t.copy(s);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(Ji,o);cl.subVectors(e,r);let u=Ji.dot(cl),_=$i.dot(cl);if(_>=0&&u<=_)return t.copy(r);let M=u*c-l*_;if(M<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector($i,a);let p=h*_-u*f;if(p<=0&&f-h>=0&&u-_>=0)return Oc.subVectors(r,s),a=(f-h)/(f-h+(u-_)),t.copy(s).addScaledVector(Oc,a);let m=1/(p+M+d);return o=M*m,a=d*m,t.copy(n).addScaledVector(Ji,o).addScaledVector($i,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Un=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(e.matrixWorld),this.union(Kr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),Qr.subVectors(this.max,Fs),Ki.subVectors(e.a,Fs),Qi.subVectors(e.b,Fs),ji.subVectors(e.c,Fs),ti.subVectors(Qi,Ki),ni.subVectors(ji,Qi),yi.subVectors(Ki,ji);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-yi.z,yi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,yi.z,0,-yi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-yi.y,yi.x,0];return!fl(t,Ki,Qi,ji,Qr)||(t=[1,0,0,0,1,0,0,0,1],!fl(t,Ki,Qi,ji,Qr))?!1:(jr.crossVectors(ti,ni),t=[jr.x,jr.y,jr.z],fl(t,Ki,Qi,ji,Qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Vn=[new C,new C,new C,new C,new C,new C,new C,new C],bn=new C,Kr=new Un,Ki=new C,Qi=new C,ji=new C,ti=new C,ni=new C,yi=new C,Fs=new C,Qr=new C,jr=new C,Mi=new C;function fl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Mi.fromArray(i,r);let a=s.x*Math.abs(Mi.x)+s.y*Math.abs(Mi.y)+s.z*Math.abs(Mi.z),l=e.dot(Mi),c=t.dot(Mi),h=n.dot(Mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ot=new C,eo=new Se,md=0,wn=class extends Dn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:md++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Uh,this.updateRanges=[],this.gpuType=vn,this.version=0,this._normalizationScale=e!==void 0?ac(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)eo.fromBufferAttribute(this,t),eo.applyMatrix3(e),this.setXY(t,eo.x,eo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):zh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):kh(e,this.array)}};var Qs=class extends wn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var js=class extends wn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var pt=class extends wn{constructor(e,t,n){super(new Float32Array(e),t,n)}},gd=new Un,Os=new C,pl=new C,ri=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):gd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);let t=Os.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Os,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(pl)),this.expandByPoint(Os.copy(e.center).sub(pl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},_d=0,dn=new wt,ml=new It,es=new C,on=new Un,Bs=new Un,Vt=new C,Yt=class i extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gu(e)?js:Qs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return ml.lookAt(e),ml.updateMatrix(),this.applyMatrix4(ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(on.min,Bs.min),on.expandByPoint(Vt),Vt.addVectors(on.max,Bs.max),on.expandByPoint(Vt)):(on.expandByPoint(Bs.min),on.expandByPoint(Bs.max))}on.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Vt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Vt.fromBufferAttribute(a,c),l&&(es.fromBufferAttribute(e,c),Vt.add(es)),s=Math.max(s,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new wn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)a[I]=new C,l[I]=new C;let h=new C,f=new C,d=new C,u=new Se,_=new Se,M=new Se,p=new C,m=new C;function x(I,A,L){c[I]=c[A]=c[L]=1,h.fromBufferAttribute(n,I),f.fromBufferAttribute(n,A),d.fromBufferAttribute(n,L),u.fromBufferAttribute(r,I),_.fromBufferAttribute(r,A),M.fromBufferAttribute(r,L),f.sub(h),d.sub(h),_.sub(u),M.sub(u);let B=1/(_.x*M.y-M.x*_.y);isFinite(B)&&(p.copy(f).multiplyScalar(M.y).addScaledVector(d,-_.y).multiplyScalar(B),m.copy(d).multiplyScalar(_.x).addScaledVector(f,-M.x).multiplyScalar(B),a[I].add(p),a[A].add(p),a[L].add(p),l[I].add(m),l[A].add(m),l[L].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,A=y.length;I<A;++I){let L=y[I],B=L.start,V=L.count;for(let D=B,z=B+V;D<z;D+=3)x(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let v=new C,w=new C,T=new C,g=new C;function E(I){T.fromBufferAttribute(s,I),g.copy(T);let A=a[I];v.copy(A),v.sub(T.multiplyScalar(T.dot(A))).normalize(),w.crossVectors(g,A);let B=w.dot(l[I])<0?-1:1;o.setXYZW(I,v.x,v.y,v.z,B)}for(let I=0,A=n.count;I<A;++I)c[I]&&E(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,f=new C;if(e)for(let d=0,u=e.count;d<u;d+=3){let _=e.getX(d+0),M=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,p),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,u=t.count;d<u;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),u=0,_=0;for(let M=0,p=l.length;M<p;M++){a.isInterleavedBufferAttribute?u=l[M]*a.data.stride+a.offset:u=l[M]*h;for(let m=0;m<h;m++)d[_++]=c[u++]}return new wn(d,h,f)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],u=e(d,n);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let u=c[f];h.push(u.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var gl=new C,xd=new C,vd=new tt,Tn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=gl.subVectors(n,t).cross(xd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(gl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||vd.getNormalMatrix(e),s=this.coplanarPoint(gl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},yd=0,Yn=class extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=Es,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bl,this.blendDst=Hl,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vo,this.stencilZFail=vo,this.stencilZPass=vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Tn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Se().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Se().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Wn=new C,_l=new C,to=new C,no=new C,Do=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){_l.copy(e).add(t).multiplyScalar(.5),to.copy(t).sub(e).normalize(),no.copy(this.origin).sub(_l);let r=e.distanceTo(t)*.5,o=-this.direction.dot(to),a=no.dot(this.direction),l=-no.dot(to),c=no.lengthSq(),h=Math.abs(1-o*o),f,d,u,_;if(h>0)if(f=o*l-a,d=o*a-l,_=r*h,f>=0)if(d>=-_)if(d<=_){let M=1/h;f*=M,d*=M,u=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(_l).addScaledVector(to,d),u}intersectSphere(e,t){if(e.radius<0)return null;Wn.subVectors(e.center,this.origin);let n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=e.x-o.x,d=e.y-o.y,u=e.z-o.z,_=t.x-o.x,M=t.y-o.y,p=t.z-o.z,m=n.x-o.x,x=n.y-o.y,y=n.z-o.z,v=Math.abs(l),w=Math.abs(c),T=Math.abs(h),g,E,I,A,L,B,V,D,z,Y,q,ne;if(v>=w&&v>=T?(I=l,B=f,z=_,ne=m,l>=0?(g=c,E=h,A=d,L=u,V=M,D=p,Y=x,q=y):(g=h,E=c,A=u,L=d,V=p,D=M,Y=y,q=x)):w>=T?(I=c,B=d,z=M,ne=x,c>=0?(g=h,E=l,A=u,L=f,V=p,D=_,Y=y,q=m):(g=l,E=h,A=f,L=u,V=_,D=p,Y=m,q=y)):(I=h,B=u,z=p,ne=y,h>=0?(g=l,E=c,A=f,L=d,V=_,D=M,Y=m,q=x):(g=c,E=l,A=d,L=f,V=M,D=_,Y=x,q=m)),I===0)return null;let $=g/I,se=E/I,re=1/I,de=A-$*B,Ge=L-se*B,j=V-$*z,_e=D-se*z,ce=Y-$*ne,Pe=q-se*ne,fe=ce*_e-Pe*j,Le=de*Pe-Ge*ce,st=j*Ge-_e*de;if(s){if(fe<0||Le<0||st<0)return null}else if((fe<0||Le<0||st<0)&&(fe>0||Le>0||st>0))return null;let De=fe+Le+st;if(De===0)return null;let ke=re*(fe*B+Le*z+st*ne);return(De>0?ke<0:ke>0)?null:this.at(ke/De,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nn=class extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Bc=new wt,Si=new Do,io=new ri,Hc=new C,so=new C,ro=new C,oo=new C,xl=new C,ao=new C,zc=new C,lo=new C,ae=class extends It{constructor(e=new Yt,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ao.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(xl.fromBufferAttribute(f,e),o?ao.addScaledVector(xl,h):ao.addScaledVector(xl.sub(t),h))}t.add(ao)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(r),Si.copy(e.ray).recast(e.near),!(io.containsPoint(Si.origin)===!1&&(Si.intersectSphere(io,Hc)===null||Si.origin.distanceToSquared(Hc)>(e.far-e.near)**2))&&(Bc.copy(r).invert(),Si.copy(e.ray).applyMatrix4(Bc),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Si)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=d.length;_<M;_++){let p=d[_],m=o[p.materialIndex],x=Math.max(p.start,u.start),y=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let v=x,w=y;v<w;v+=3){let T=a.getX(v),g=a.getX(v+1),E=a.getX(v+2);s=co(this,m,e,n,c,h,f,T,g,E),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let _=Math.max(0,u.start),M=Math.min(a.count,u.start+u.count);for(let p=_,m=M;p<m;p+=3){let x=a.getX(p),y=a.getX(p+1),v=a.getX(p+2);s=co(this,o,e,n,c,h,f,x,y,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,M=d.length;_<M;_++){let p=d[_],m=o[p.materialIndex],x=Math.max(p.start,u.start),y=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let v=x,w=y;v<w;v+=3){let T=v,g=v+1,E=v+2;s=co(this,m,e,n,c,h,f,T,g,E),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let _=Math.max(0,u.start),M=Math.min(l.count,u.start+u.count);for(let p=_,m=M;p<m;p+=3){let x=p,y=p+1,v=p+2;s=co(this,o,e,n,c,h,f,x,y,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Md(i,e,t,n,s,r,o,a){let l;if(e.side===Jt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===fi,a),l===null)return null;lo.copy(a),lo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(lo);return c<t.near||c>t.far?null:{distance:c,point:lo.clone(),object:i}}function co(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,so),i.getVertexPosition(l,ro),i.getVertexPosition(c,oo);let h=Md(i,e,t,n,so,ro,oo,zc);if(h){let f=new C;si.getBarycoord(zc,so,ro,oo,f),s&&(h.uv=si.getInterpolatedAttribute(s,a,l,c,f,new Se)),r&&(h.uv1=si.getInterpolatedAttribute(r,a,l,c,f,new Se)),o&&(h.normal=si.getInterpolatedAttribute(o,a,l,c,f,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new C,materialIndex:0};si.getNormal(so,ro,oo,d.normal),h.face=d,h.barycoord=f}return h}var er=class extends jt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Wt,h=Wt,f,d){super(null,o,a,l,c,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tr=class extends wn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ts=new wt,kc=new wt,ho=[],Gc=new Un,Sd=new wt,Hs=new ae,zs=new ri,Zt=class extends ae{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new tr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Sd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Un),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ts),Gc.copy(e.boundingBox).applyMatrix4(ts),this.boundingBox.union(Gc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ts),zs.copy(e.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(zs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Hs.geometry=this.geometry,Hs.material=this.material,Hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(n),e.ray.intersectsSphere(zs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ts),kc.multiplyMatrices(n,ts),Hs.matrixWorld=kc,Hs.raycast(e,ho);for(let o=0,a=ho.length;o<a;o++){let l=ho[o];l.instanceId=r,l.object=this,t.push(l)}ho.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new tr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new er(new Float32Array(s*this.count),s,this.count,ca,vn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ei=new ri,Ed=new Se(.5,.5),uo=new C,oi=class{constructor(e=new Tn,t=new Tn,n=new Tn,s=new Tn,r=new Tn,o=new Tn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],u=r[7],_=r[8],M=r[9],p=r[10],m=r[11],x=r[12],y=r[13],v=r[14],w=r[15];if(s[0].setComponents(c-o,u-h,m-_,w-x).normalize(),s[1].setComponents(c+o,u+h,m+_,w+x).normalize(),s[2].setComponents(c+a,u+f,m+M,w+y).normalize(),s[3].setComponents(c-a,u-f,m-M,w-y).normalize(),n)s[4].setComponents(l,d,p,v).normalize(),s[5].setComponents(c-l,u-d,m-p,w-v).normalize();else if(s[4].setComponents(c-l,u-d,m-p,w-v).normalize(),t===fn)s[5].setComponents(c+l,u+d,m+p,w+v).normalize();else if(t===ls)s[5].setComponents(l,d,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){Ei.center.set(0,0,0);let t=Ed.distanceTo(e.center);return Ei.radius=.7071067811865476+t,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(uo.x=s.normal.x>0?e.max.x:e.min.x,uo.y=s.normal.y>0?e.max.y:e.min.y,uo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(uo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Vc=new wt,No=class i{constructor(){this.coordinateSystem=fn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Vc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new oi),n[s].setFromProjectionMatrix(Vc,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new oi),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var nr=class extends jt{constructor(e=[],t=Di,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},mn=class extends jt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Zn=class extends jt{constructor(e,t,n=An,s,r,o,a=Wt,l=Wt,c,h=qn,f=1){if(h!==qn&&h!==$n)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ds(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ir=class extends Zn{constructor(e,t=An,n=Di,s,r,o=Wt,a=Wt,l,c=qn){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},sr=class extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ue=class i extends Yt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,u=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(f,2));function _(M,p,m,x,y,v,w,T,g,E,I){let A=v/g,L=w/E,B=v/2,V=w/2,D=T/2,z=g+1,Y=E+1,q=0,ne=0,$=new C;for(let se=0;se<Y;se++){let re=se*L-V;for(let de=0;de<z;de++){let Ge=de*A-B;$[M]=Ge*x,$[p]=re*y,$[m]=D,c.push($.x,$.y,$.z),$[M]=0,$[p]=0,$[m]=T>0?1:-1,h.push($.x,$.y,$.z),f.push(de/g),f.push(1-se/E),q+=1}}for(let se=0;se<E;se++)for(let re=0;re<g;re++){let de=d+re+z*se,Ge=d+re+z*(se+1),j=d+(re+1)+z*(se+1),_e=d+(re+1)+z*se;l.push(de,Ge,_e),l.push(Ge,j,_e),ne+=6}a.addGroup(u,ne,I),u+=ne,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},rr=class i extends Yt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,f=Math.PI/2*e,d=t,u=2*f+d,_=n*2+r,M=s+1,p=new C,m=new C;for(let x=0;x<=_;x++){let y=0,v=0,w=0,T=0;if(x<=n){let I=x/n,A=I*Math.PI/2;v=-h-e*Math.cos(A),w=e*Math.sin(A),T=-e*Math.cos(A),y=I*f}else if(x<=n+r){let I=(x-n)/r;v=-h+I*t,w=e,T=0,y=f+I*d}else{let I=(x-n-r)/n,A=I*Math.PI/2;v=h+e*Math.sin(A),w=e*Math.cos(A),T=e*Math.sin(A),y=f+d+I*f}let g=Math.max(0,Math.min(1,y/u)),E=0;x===0?E=.5/s:x===_&&(E=-.5/s);for(let I=0;I<=s;I++){let A=I/s,L=A*Math.PI*2,B=Math.sin(L),V=Math.cos(L);m.x=-w*V,m.y=v,m.z=w*B,a.push(m.x,m.y,m.z),p.set(-w*V,T,w*B),p.normalize(),l.push(p.x,p.y,p.z),c.push(A+E,g)}if(x>0){let I=(x-1)*M;for(let A=0;A<s;A++){let L=I+A,B=I+A+1,V=x*M+A,D=x*M+A+1;o.push(L,B,V),o.push(B,D,V)}}}this.setIndex(o),this.setAttribute("position",new pt(a,3)),this.setAttribute("normal",new pt(l,3)),this.setAttribute("uv",new pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ps=class i extends Yt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new C,h=new Se;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){let u=n+f/t*s;c.x=e*Math.cos(u),c.y=e*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(a,3)),this.setAttribute("uv",new pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Rt=class i extends Yt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],u=[],_=0,M=[],p=n/2,m=0;x(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new pt(f,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(u,2));function x(){let v=new C,w=new C,T=0,g=(t-e)/n;for(let E=0;E<=r;E++){let I=[],A=E/r,L=A*(t-e)+e;for(let B=0;B<=s;B++){let V=B/s,D=V*l+a,z=Math.sin(D),Y=Math.cos(D);w.x=L*z,w.y=-A*n+p,w.z=L*Y,f.push(w.x,w.y,w.z),v.set(z,g,Y).normalize(),d.push(v.x,v.y,v.z),u.push(V,1-A),I.push(_++)}M.push(I)}for(let E=0;E<s;E++)for(let I=0;I<r;I++){let A=M[I][E],L=M[I+1][E],B=M[I+1][E+1],V=M[I][E+1];(e>0||I!==0)&&(h.push(A,L,V),T+=3),(t>0||I!==r-1)&&(h.push(L,B,V),T+=3)}c.addGroup(m,T,0),m+=T}function y(v){let w=_,T=new Se,g=new C,E=0,I=v===!0?e:t,A=v===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,p*A,0),d.push(0,A,0),u.push(.5,.5),_++;let L=_;for(let B=0;B<=s;B++){let D=B/s*l+a,z=Math.cos(D),Y=Math.sin(D);g.x=I*Y,g.y=p*A,g.z=I*z,f.push(g.x,g.y,g.z),d.push(0,A,0),T.x=z*.5+.5,T.y=Y*.5*A+.5,u.push(T.x,T.y),_++}for(let B=0;B<s;B++){let V=w+B,D=L+B;v===!0?h.push(D,D+1,V):h.push(D+1,D,V),E+=3}c.addGroup(m,E,v===!0?1:2),m+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ai=class i extends Rt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},or=class i extends Yt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new pt(r,3)),this.setAttribute("normal",new pt(r.slice(),3)),this.setAttribute("uv",new pt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let y=new C,v=new C,w=new C;for(let T=0;T<t.length;T+=3)u(t[T+0],y),u(t[T+1],v),u(t[T+2],w),l(y,v,w,x)}function l(x,y,v,w){let T=w+1,g=[];for(let E=0;E<=T;E++){g[E]=[];let I=x.clone().lerp(v,E/T),A=y.clone().lerp(v,E/T),L=T-E;for(let B=0;B<=L;B++)B===0&&E===T?g[E][B]=I:g[E][B]=I.clone().lerp(A,B/L)}for(let E=0;E<T;E++)for(let I=0;I<2*(T-E)-1;I++){let A=Math.floor(I/2);I%2===0?(d(g[E][A+1]),d(g[E+1][A]),d(g[E][A])):(d(g[E][A+1]),d(g[E+1][A+1]),d(g[E+1][A]))}}function c(x){let y=new C;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(x),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){let x=new C;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];let v=p(x)/2/Math.PI+.5,w=m(x)/Math.PI+.5;o.push(v,1-w)}_(),f()}function f(){for(let x=0;x<o.length;x+=6){let y=o[x+0],v=o[x+2],w=o[x+4],T=Math.max(y,v,w),g=Math.min(y,v,w);T>.9&&g<.1&&(y<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),w<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function u(x,y){let v=x*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function _(){let x=new C,y=new C,v=new C,w=new C,T=new Se,g=new Se,E=new Se;for(let I=0,A=0;I<r.length;I+=9,A+=6){x.set(r[I+0],r[I+1],r[I+2]),y.set(r[I+3],r[I+4],r[I+5]),v.set(r[I+6],r[I+7],r[I+8]),T.set(o[A+0],o[A+1]),g.set(o[A+2],o[A+3]),E.set(o[A+4],o[A+5]),w.copy(x).add(y).add(v).divideScalar(3);let L=p(w);M(T,A+0,x,L),M(g,A+2,y,L),M(E,A+4,v,L)}}function M(x,y,v,w){w<0&&x.x===1&&(o[y]=x.x-1),v.x===0&&v.z===0&&(o[y]=w/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},ar=class i extends or{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$e("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,u=(o-h)/d;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Se:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new C,s=[],r=[],o=[],a=new C,l=new wt;for(let u=0;u<=e;u++){let _=u/e;s[u]=this.getTangentAt(_,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(at(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,_))}o[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(at(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],u*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},ms=class extends ln{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Se){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Uo=class extends ms{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function lc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,u*=h,s(o,a,d,u)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Wc=new C,Xc=new C,vl=new lc,yl=new lc,Ml=new lc,gn=class extends ln{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Xc.subVectors(s[0],s[1]).add(s[0]),c=Xc);let f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Wc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Wc),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(f),u),M=Math.pow(f.distanceToSquared(d),u),p=Math.pow(d.distanceToSquared(h),u);M<1e-4&&(M=1),_<1e-4&&(_=M),p<1e-4&&(p=M),vl.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,_,M,p),yl.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,_,M,p),Ml.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,_,M,p)}else this.curveType==="catmullrom"&&(vl.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),yl.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),Ml.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(vl.calc(l),yl.calc(l),Ml.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function qc(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function bd(i,e){let t=1-i;return t*t*e}function Td(i,e){return 2*(1-i)*i*e}function wd(i,e){return i*i*e}function Ws(i,e,t,n){return bd(i,e)+Td(i,t)+wd(i,n)}function Ad(i,e){let t=1-i;return t*t*t*e}function Rd(i,e){let t=1-i;return 3*t*t*i*e}function Cd(i,e){return 3*(1-i)*i*i*e}function Pd(i,e){return i*i*i*e}function Xs(i,e,t,n,s){return Ad(i,e)+Rd(i,t)+Cd(i,n)+Pd(i,s)}var lr=class extends ln{constructor(e=new Se,t=new Se,n=new Se,s=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Se){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xs(e,s.x,r.x,o.x,a.x),Xs(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fo=class extends ln{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xs(e,s.x,r.x,o.x,a.x),Xs(e,s.y,r.y,o.y,a.y),Xs(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},cr=class extends ln{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oo=class extends ln{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hr=class extends ln{constructor(e=new Se,t=new Se,n=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Se){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ws(e,s.x,r.x,o.x),Ws(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ur=class extends ln{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ws(e,s.x,r.x,o.x),Ws(e,s.y,r.y,o.y),Ws(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dr=class extends ln{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(qc(a,l.x,c.x,h.x,f.x),qc(a,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Se().fromArray(s))}return this}},Bo=Object.freeze({__proto__:null,ArcCurve:Uo,CatmullRomCurve3:gn,CubicBezierCurve:lr,CubicBezierCurve3:Fo,EllipseCurve:ms,LineCurve:cr,LineCurve3:Oo,QuadraticBezierCurve:hr,QuadraticBezierCurve3:ur,SplineCurve:dr}),Ho=class extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Bo[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},fr=class extends Ho{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new cr(this.currentPoint.clone(),new Se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new hr(this.currentPoint.clone(),new Se(e,t),new Se(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new lr(this.currentPoint.clone(),new Se(e,t),new Se(n,s),new Se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new dr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new ms(e,t,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},gs=class extends fr{constructor(e){super(e),this.uuid=Ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new fr().fromJSON(s))}return this}};function Id(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Vh(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Fd(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,f=l;for(let d=t;d<s;d+=t){let u=i[d],_=i[d+1];u<a&&(a=u),_<l&&(l=_),u>h&&(h=u),_>f&&(f=_)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return pr(r,o,t,a,l,c,0),o}function Vh(i,e,t,n,s){let r;if(s===Yd(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Yc(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Yc(o/n|0,i[o],i[o+1],r);return r&&_s(r,r.next)&&(gr(r),r=r.next),r}function Ri(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(_s(t,t.next)||Nt(t.prev,t,t.next)===0)){if(gr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function pr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&kd(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Dd(i,n,s,r):Ld(i)){e.push(l.i,i.i,c.i),gr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Nd(Ri(i),e),pr(i,e,t,n,s,r,2)):o===2&&Ud(i,e,t,n,s,r):pr(Ri(i),e,t,n,s,r,1);break}}}function Ld(i){let e=i.prev,t=i,n=i.next;if(Nt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),f=Math.min(a,l,c),d=Math.max(s,r,o),u=Math.max(a,l,c),_=n.next;for(;_!==e;){if(_.x>=h&&_.x<=d&&_.y>=f&&_.y<=u&&ks(s,a,r,l,o,c,_.x,_.y)&&Nt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Dd(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Nt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,d=o.y,u=Math.min(a,l,c),_=Math.min(h,f,d),M=Math.max(a,l,c),p=Math.max(h,f,d),m=Al(u,_,e,t,n),x=Al(M,p,e,t,n),y=i.prevZ,v=i.nextZ;for(;y&&y.z>=m&&v&&v.z<=x;){if(y.x>=u&&y.x<=M&&y.y>=_&&y.y<=p&&y!==s&&y!==o&&ks(a,h,l,f,c,d,y.x,y.y)&&Nt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=u&&v.x<=M&&v.y>=_&&v.y<=p&&v!==s&&v!==o&&ks(a,h,l,f,c,d,v.x,v.y)&&Nt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=m;){if(y.x>=u&&y.x<=M&&y.y>=_&&y.y<=p&&y!==s&&y!==o&&ks(a,h,l,f,c,d,y.x,y.y)&&Nt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=x;){if(v.x>=u&&v.x<=M&&v.y>=_&&v.y<=p&&v!==s&&v!==o&&ks(a,h,l,f,c,d,v.x,v.y)&&Nt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Nd(i,e){let t=i;do{let n=t.prev,s=t.next.next;!_s(n,s)&&Xh(n,t,t.next,s)&&mr(n,s)&&mr(s,n)&&(e.push(n.i,t.i,s.i),gr(t),gr(t.next),t=i=s),t=t.next}while(t!==i);return Ri(t)}function Ud(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Wd(o,a)){let l=qh(o,a);o=Ri(o,o.next),l=Ri(l,l.next),pr(o,e,t,n,s,r,0),pr(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Fd(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Vh(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Vd(c))}s.sort(Od);for(let r=0;r<s.length;r++)t=Bd(s[r],t);return t}function Od(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Bd(i,e){let t=Hd(i,e);if(!t)return e;let n=qh(t,i);return Ri(n,n.next),Ri(t,t.next)}function Hd(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(_s(i,t))return t;do{if(_s(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Wh(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);mr(t,i)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&zd(o,t)))&&(o=t,h=f)}t=t.next}while(t!==a);return o}function zd(i,e){return Nt(i.prev,i,e.prev)<0&&Nt(e.next,i,i.next)<0}function kd(i,e,t,n){let s=i;do s.z===0&&(s.z=Al(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Gd(s)}function Gd(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Al(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Vd(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Wh(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function ks(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Wh(i,e,t,n,s,r,o,a)}function Wd(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Xd(i,e)&&(mr(i,e)&&mr(e,i)&&qd(i,e)&&(Nt(i.prev,i,e.prev)||Nt(i,e.prev,e))||_s(i,e)&&Nt(i.prev,i,i.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function _s(i,e){return i.x===e.x&&i.y===e.y}function Xh(i,e,t,n){let s=po(Nt(i,e,t)),r=po(Nt(i,e,n)),o=po(Nt(t,n,i)),a=po(Nt(t,n,e));return!!(s!==r&&o!==a||s===0&&fo(i,t,e)||r===0&&fo(i,n,e)||o===0&&fo(t,i,n)||a===0&&fo(t,e,n))}function fo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function po(i){return i>0?1:i<0?-1:0}function Xd(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Xh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function mr(i,e){return Nt(i.prev,i,i.next)<0?Nt(i,e,i.next)>=0&&Nt(i,i.prev,e)>=0:Nt(i,e,i.prev)<0||Nt(i,i.next,e)<0}function qd(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function qh(i,e){let t=Rl(i.i,i.x,i.y),n=Rl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Yc(i,e,t,n){let s=Rl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function gr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Rl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Yd(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Cl=class{static triangulate(e,t,n=2){return Id(e,t,n)}},bi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Zc(e),Jc(n,e);let o=e.length;t.forEach(Zc);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Jc(n,t[l]);let a=Cl.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Zc(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Jc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var _r=class i extends Yt{constructor(e=new gs([new Se(.5,.5),new Se(-.5,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new pt(s,3)),this.setAttribute("uv",new pt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:u-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Zd,y,v=!1,w,T,g,E;if(m){y=m.getSpacedPoints(h),v=!0,d=!1;let Z=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(h,Z),T=new C,g=new C,E=new C}d||(p=0,u=0,_=0,M=0);let I=a.extractPoints(c),A=I.shape,L=I.holes;if(!bi.isClockWise(A)){A=A.reverse();for(let Z=0,pe=L.length;Z<pe;Z++){let ue=L[Z];bi.isClockWise(ue)&&(L[Z]=ue.reverse())}}function V(Z){let ue=10000000000000001e-36,Te=Z[0];for(let xe=1;xe<=Z.length;xe++){let Je=xe%Z.length,Ne=Z[Je],et=Ne.x-Te.x,je=Ne.y-Te.y,rt=et*et+je*je,O=Math.max(Math.abs(Ne.x),Math.abs(Ne.y),Math.abs(Te.x),Math.abs(Te.y)),ot=ue*O*O;if(rt<=ot){Z.splice(Je,1),xe--;continue}Te=Ne}}V(A),L.forEach(V);let D=L.length,z=A;for(let Z=0;Z<D;Z++){let pe=L[Z];A=A.concat(pe)}function Y(Z,pe,ue){return pe||Qe("ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(pe,ue)}let q=A.length;function ne(Z,pe,ue){let Te,xe,Je,Ne=Z.x-pe.x,et=Z.y-pe.y,je=ue.x-Z.x,rt=ue.y-Z.y,O=Ne*Ne+et*et,ot=Ne*rt-et*je;if(Math.abs(ot)>Number.EPSILON){let it=Math.sqrt(O),dt=Math.sqrt(je*je+rt*rt),ge=pe.x-et/it,mt=pe.y+Ne/it,Oe=ue.x-rt/dt,Ye=ue.y+je/dt,R=((Oe-ge)*rt-(Ye-mt)*je)/(Ne*rt-et*je);Te=ge+Ne*R-Z.x,xe=mt+et*R-Z.y;let S=Te*Te+xe*xe;if(S<=2)return new Se(Te,xe);Je=Math.sqrt(S/2)}else{let it=!1;Ne>Number.EPSILON?je>Number.EPSILON&&(it=!0):Ne<-Number.EPSILON?je<-Number.EPSILON&&(it=!0):Math.sign(et)===Math.sign(rt)&&(it=!0),it?(Te=-et,xe=Ne,Je=Math.sqrt(O)):(Te=Ne,xe=et,Je=Math.sqrt(O/2))}return new Se(Te/Je,xe/Je)}let $=[];for(let Z=0,pe=z.length,ue=pe-1,Te=Z+1;Z<pe;Z++,ue++,Te++)ue===pe&&(ue=0),Te===pe&&(Te=0),$[Z]=ne(z[Z],z[ue],z[Te]);let se=[],re,de=$.concat();for(let Z=0,pe=D;Z<pe;Z++){let ue=L[Z];re=[];for(let Te=0,xe=ue.length,Je=xe-1,Ne=Te+1;Te<xe;Te++,Je++,Ne++)Je===xe&&(Je=0),Ne===xe&&(Ne=0),re[Te]=ne(ue[Te],ue[Je],ue[Ne]);se.push(re),de=de.concat(re)}let Ge;if(p===0)Ge=bi.triangulateShape(z,L);else{let Z=[],pe=[];for(let ue=0;ue<p;ue++){let Te=ue/p,xe=u*Math.cos(Te*Math.PI/2),Je=_*Math.sin(Te*Math.PI/2)+M;for(let Ne=0,et=z.length;Ne<et;Ne++){let je=Y(z[Ne],$[Ne],Je);Le(je.x,je.y,-xe),Te===0&&Z.push(je)}for(let Ne=0,et=D;Ne<et;Ne++){let je=L[Ne];re=se[Ne];let rt=[];for(let O=0,ot=je.length;O<ot;O++){let it=Y(je[O],re[O],Je);Le(it.x,it.y,-xe),Te===0&&rt.push(it)}Te===0&&pe.push(rt)}}Ge=bi.triangulateShape(Z,pe)}let j=Ge.length,_e=_+M;for(let Z=0;Z<q;Z++){let pe=d?Y(A[Z],de[Z],_e):A[Z];v?(g.copy(w.normals[0]).multiplyScalar(pe.x),T.copy(w.binormals[0]).multiplyScalar(pe.y),E.copy(y[0]).add(g).add(T),Le(E.x,E.y,E.z)):Le(pe.x,pe.y,0)}for(let Z=1;Z<=h;Z++)for(let pe=0;pe<q;pe++){let ue=d?Y(A[pe],de[pe],_e):A[pe];v?(g.copy(w.normals[Z]).multiplyScalar(ue.x),T.copy(w.binormals[Z]).multiplyScalar(ue.y),E.copy(y[Z]).add(g).add(T),Le(E.x,E.y,E.z)):Le(ue.x,ue.y,f/h*Z)}for(let Z=p-1;Z>=0;Z--){let pe=Z/p,ue=u*Math.cos(pe*Math.PI/2),Te=_*Math.sin(pe*Math.PI/2)+M;for(let xe=0,Je=z.length;xe<Je;xe++){let Ne=Y(z[xe],$[xe],Te);Le(Ne.x,Ne.y,f+ue)}for(let xe=0,Je=L.length;xe<Je;xe++){let Ne=L[xe];re=se[xe];for(let et=0,je=Ne.length;et<je;et++){let rt=Y(Ne[et],re[et],Te);v?Le(rt.x,rt.y+y[h-1].y,y[h-1].x+ue):Le(rt.x,rt.y,f+ue)}}}ce(),Pe();function ce(){let Z=s.length/3;if(d){let pe=0,ue=q*pe;for(let Te=0;Te<j;Te++){let xe=Ge[Te];st(xe[2]+ue,xe[1]+ue,xe[0]+ue)}pe=h+p*2,ue=q*pe;for(let Te=0;Te<j;Te++){let xe=Ge[Te];st(xe[0]+ue,xe[1]+ue,xe[2]+ue)}}else{for(let pe=0;pe<j;pe++){let ue=Ge[pe];st(ue[2],ue[1],ue[0])}for(let pe=0;pe<j;pe++){let ue=Ge[pe];st(ue[0]+q*h,ue[1]+q*h,ue[2]+q*h)}}n.addGroup(Z,s.length/3-Z,0)}function Pe(){let Z=s.length/3,pe=0;fe(z,pe),pe+=z.length;for(let ue=0,Te=L.length;ue<Te;ue++){let xe=L[ue];fe(xe,pe),pe+=xe.length}n.addGroup(Z,s.length/3-Z,1)}function fe(Z,pe){let ue=Z.length;for(;--ue>=0;){let Te=ue,xe=ue-1;xe<0&&(xe=Z.length-1);for(let Je=0,Ne=h+p*2;Je<Ne;Je++){let et=q*Je,je=q*(Je+1),rt=pe+Te+et,O=pe+xe+et,ot=pe+xe+je,it=pe+Te+je;De(rt,O,ot,it)}}}function Le(Z,pe,ue){l.push(Z),l.push(pe),l.push(ue)}function st(Z,pe,ue){ke(Z),ke(pe),ke(ue);let Te=s.length/3,xe=x.generateTopUV(n,s,Te-3,Te-2,Te-1);We(xe[0]),We(xe[1]),We(xe[2])}function De(Z,pe,ue,Te){ke(Z),ke(pe),ke(Te),ke(pe),ke(ue),ke(Te);let xe=s.length/3,Je=x.generateSideWallUV(n,s,xe-6,xe-3,xe-2,xe-1);We(Je[0]),We(Je[1]),We(Je[3]),We(Je[1]),We(Je[2]),We(Je[3])}function ke(Z){s.push(l[Z*3+0]),s.push(l[Z*3+1]),s.push(l[Z*3+2])}function We(Z){r.push(Z.x),r.push(Z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Jd(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Bo[s.type]().fromJSON(s)),new i(n,e.options)}},Zd={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new Se(r,o),new Se(a,l),new Se(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],d=e[s*3],u=e[s*3+1],_=e[s*3+2],M=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Se(o,1-l),new Se(c,1-f),new Se(d,1-_),new Se(M,1-m)]:[new Se(a,1-l),new Se(h,1-f),new Se(u,1-_),new Se(p,1-m)]}};function Jd(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var li=class i extends or{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ht=class i extends Yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=e/a,d=t/l,u=[],_=[],M=[],p=[];for(let m=0;m<h;m++){let x=m*d-o;for(let y=0;y<c;y++){let v=y*f-r;_.push(v,-x,0),M.push(0,0,1),p.push(y/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){let y=x+c*m,v=x+c*(m+1),w=x+1+c*(m+1),T=x+1+c*m;u.push(y,v,T),u.push(v,w,T)}this.setIndex(u),this.setAttribute("position",new pt(_,3)),this.setAttribute("normal",new pt(M,3)),this.setAttribute("uv",new pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var xr=class i extends Yt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],d=new C,u=new C,_=new C;for(let M=0;M<=n;M++){let p=o+M/n*a;for(let m=0;m<=s;m++){let x=m/s*r;u.x=(e+t*Math.cos(p))*Math.cos(x),u.y=(e+t*Math.cos(p))*Math.sin(x),u.z=t*Math.sin(p),c.push(u.x,u.y,u.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),_.subVectors(u,d).normalize(),h.push(_.x,_.y,_.z),f.push(m/s),f.push(M/n)}}for(let M=1;M<=n;M++)for(let p=1;p<=s;p++){let m=(s+1)*M+p-1,x=(s+1)*(M-1)+p-1,y=(s+1)*(M-1)+p,v=(s+1)*M+p;l.push(m,x,v),l.push(x,y,v)}this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Ci=class i extends Yt{constructor(e=new ur(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,c=new Se,h=new C,f=[],d=[],u=[],_=[];M(),this.setIndex(_),this.setAttribute("position",new pt(f,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(u,2));function M(){for(let y=0;y<t;y++)p(y);p(r===!1?t:0),x(),m()}function p(y){h=e.getPointAt(y/t,h);let v=o.normals[y],w=o.binormals[y];for(let T=0;T<=s;T++){let g=T/s*Math.PI*2,E=Math.sin(g),I=-Math.cos(g);l.x=I*v.x+E*w.x,l.y=I*v.y+E*w.y,l.z=I*v.z+E*w.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function m(){for(let y=1;y<=t;y++)for(let v=1;v<=s;v++){let w=(s+1)*(y-1)+(v-1),T=(s+1)*y+(v-1),g=(s+1)*y+v,E=(s+1)*(y-1)+v;_.push(w,T,E),_.push(T,g,E)}}function x(){for(let y=0;y<=t;y++)for(let v=0;v<=s;v++)c.x=y/t,c.y=v/s,u.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Bo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Fi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if($c(s))s.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if($c(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function en(i){let e={};for(let t=0;t<i.length;t++){let n=Fi(i[t]);for(let s in n)e[s]=n[s]}return e}function $c(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function $d(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var Yh={clone:Fi,merge:en},Kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fn=class extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kd,this.fragmentShader=Qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fi(e.uniforms),this.uniformsGroups=$d(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new qe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Se().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new tt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new wt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},zo=class extends Fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},nt=class extends Yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ur,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ci=class extends nt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ti('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ti('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var vr=class extends Yn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ur,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=na,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ko=class extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Go=class extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ns(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function mo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var hi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Vo=class extends hi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bl,endingEnd:bl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Tl:r=e,a=2*t-n;break;case wl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Tl:o=e,l=2*n-t;break;case wl:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,_=(n-t)/(s-t),M=_*_,p=M*_,m=-d*p+2*d*M-d*_,x=(1+d)*p+(-1.5-2*d)*M+(-.5+d)*_+1,y=(-1-u)*p+(1.5+u)*M+.5*_,v=u*p-u*M;for(let w=0;w!==a;++w)r[w]=m*o[h+w]+x*o[c+w]+y*o[l+w]+v*o[f+w];return r}},Wo=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),f=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[l+d]*h;return r}},Xo=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},qo=class extends hi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let _=(n-t)/(s-t),M=1-_;for(let p=0;p!==a;++p)r[p]=o[c+p]*M+o[l+p]*_;return r}let d=a*2,u=e-1;for(let _=0;_!==a;++_){let M=o[c+_],p=o[l+_],m=u*d+_*2,x=f[m],y=f[m+1],v=e*d+_*2,w=h[v],T=h[v+1],g=ef(n,t,x,w,s);r[_]=Zh(g,M,y,T,p)}return r}};function Zh(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function jd(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function ef(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Zh(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=jd(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var cn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ns(t,this.TimeBufferType),this.values=ns(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ns(e.times,Array),values:ns(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),mo(e.settings)&&(n.settings={inTangents:ns(e.settings.inTangents,Array),outTangents:ns(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new qo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case qs:t=this.InterpolantFactoryMethodDiscrete;break;case Co:t=this.InterpolantFactoryMethodLinear;break;case xo:t=this.InterpolantFactoryMethodSmooth;break;case El:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return $e("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return Co;case this.InterpolantFactoryMethodSmooth:return xo;case this.InterpolantFactoryMethodBezier:return El}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;mo(this.settings)&&(Kc(this.settings.inTangents,e),Kc(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;mo(this.settings)&&(Qc(this.settings.inTangents,e),Qc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Qe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Qe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Qe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Vu(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Qe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===xo,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*n,d=f-n,u=f+n;for(let _=0;_!==n;++_){let M=t[f+_];if(M!==t[d+_]||M!==t[u+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,d=o*n;for(let u=0;u!==n;++u)t[d+u]=t[f+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,mo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Kc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Qc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}cn.prototype.ValueTypeName="";cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=Co;var ui=class extends cn{constructor(e,t,n){super(e,t,n)}};ui.prototype.ValueTypeName="bool";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=qs;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Yo=class extends cn{constructor(e,t,n,s){super(e,t,n,s)}};Yo.prototype.ValueTypeName="color";var Zo=class extends cn{constructor(e,t,n,s){super(e,t,n,s)}};Zo.prototype.ValueTypeName="number";var Jo=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)pn.slerpFlat(r,0,o,c-a,o,c,l);return r}},yr=class extends cn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Jo(this.times,this.values,this.getValueSize(),e)}};yr.prototype.ValueTypeName="quaternion";yr.prototype.InterpolantFactoryMethodSmooth=void 0;var di=class extends cn{constructor(e,t,n){super(e,t,n)}};di.prototype.ValueTypeName="string";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=qs;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var $o=class extends cn{constructor(e,t,n,s){super(e,t,n,s)}};$o.prototype.ValueTypeName="vector";var yo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(jc(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!jc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function jc(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ko=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let u=c[f],_=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Jh=new Ko,xs=class{constructor(e){this.manager=e!==void 0?e:Jh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};xs.DEFAULT_MATERIAL_NAME="__DEFAULT";var is=new WeakMap,Qo=class extends xs{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=yo.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let f=is.get(o);f===void 0&&(f=[],is.set(o,f)),f.push({onLoad:t,onError:s})}return o}let a=cs("img");function l(){h(),t&&t(this);let f=is.get(this)||[];for(let d=0;d<f.length;d++){let u=f[d];u.onLoad&&u.onLoad(this)}is.delete(this),r.manager.itemEnd(e)}function c(f){h(),s&&s(f),yo.remove(`image:${e}`);let d=is.get(this)||[];for(let u=0;u<d.length;u++){let _=d[u];_.onError&&_.onError(f)}is.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),yo.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var Pi=class extends xs{constructor(e){super(e)}load(e,t,n,s){let r=new jt,o=new Qo(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},vs=class extends It{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Mr=class extends vs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Sl=new wt,eh=new C,th=new C,Sr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oi,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;eh.setFromMatrixPosition(e.matrixWorld),t.position.copy(eh),th.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(th),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Sl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Sl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ls||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Sl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},go=new C,_o=new pn,In=new C,Er=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(go,_o,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(go,_o,In.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(go,_o,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(go,_o,In.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ii=new C,nh=new Se,ih=new Se,Qt=class extends Er{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return us*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,nh,ih),t.subVectors(ih,nh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Gs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Pl=class extends Sr{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0}},_n=class extends vs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Pl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},br=class extends Er{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Il=class extends Sr{constructor(){super(new br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ys=class extends vs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Il}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ss=-90,rs=1,Ms=class extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Qt(ss,rs,e,t);s.layers=this.layers,this.add(s);let r=new Qt(ss,rs,e,t);r.layers=this.layers,this.add(r);let o=new Qt(ss,rs,e,t);o.layers=this.layers,this.add(o);let a=new Qt(ss,rs,e,t);a.layers=this.layers,this.add(a);let l=new Qt(ss,rs,e,t);l.layers=this.layers,this.add(l);let c=new Qt(ss,rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=M,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},jo=class extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var hc="\\[\\]\\.:\\/",tf=new RegExp("["+hc+"]","g"),uc="[^"+hc+"]",nf="[^"+hc.replace("\\.","")+"]",sf=/((?:WC+[\/:])*)/.source.replace("WC",uc),rf=/(WCOD+)?/.source.replace("WCOD",nf),of=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uc),af=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uc),lf=new RegExp("^"+sf+rf+of+af+"$"),cf=["material","materials","bones","map"],Ll=class{constructor(e,t,n){let s=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tf,"")}static parseTrackName(e){let t=lf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);cf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){$e("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Qe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=Ll;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var o_=new Float32Array(1);var Tr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=at(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(at(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Dl=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function dc(i,e,t,n){let s=hf(n);switch(t){case Kl:return i*e;case ca:return i*e/s.components*s.byteLength;case ha:return i*e/s.components*s.byteLength;case pi:return i*e*2/s.components*s.byteLength;case ua:return i*e*2/s.components*s.byteLength;case Ql:return i*e*3/s.components*s.byteLength;case Cn:return i*e*4/s.components*s.byteLength;case da:return i*e*4/s.components*s.byteLength;case Cr:case Pr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ir:case Lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pa:case ga:return Math.max(i,16)*Math.max(e,8)/4;case fa:case ma:return Math.max(i,8)*Math.max(e,8)/2;case _a:case xa:case ya:case Ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case va:case Dr:case Sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ta:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case wa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case La:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Da:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Na:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Fa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Oa:case Ba:case Ha:return Math.ceil(i/4)*Math.ceil(e/4)*16;case za:case ka:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Nr:case Ga:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hf(i){switch(i){case sn:case Yl:return{byteLength:1,components:1};case Ts:case Zl:case Rn:return{byteLength:2,components:1};case aa:case la:return{byteLength:2,components:4};case An:case oa:case vn:return{byteLength:4,components:1};case Jl:case $l:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ea}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ea);function _u(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function uf(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((u,_)=>u.start-_.start);let d=0;for(let u=1;u<f.length;u++){let _=f[d],M=f[u];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++d,f[d]=M)}f.length=d+1;for(let u=0,_=f.length;u<_;u++){let M=f[u];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ff=`#ifdef USE_ALPHAHASH
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
#endif`,pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xf=`#ifdef USE_AOMAP
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
#endif`,vf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yf=`#ifdef USE_BATCHING
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
#endif`,Mf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tf=`#ifdef USE_IRIDESCENCE
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
#endif`,wf=`#ifdef USE_BUMPMAP
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
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,If=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Nf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Uf=`#define PI 3.141592653589793
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
} // validated`,Ff=`vec3 transformedNormal = objectNormal;
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
#endif`,Of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vf=`#ifdef USE_ENVMAP
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
#endif`,Wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qf=`#ifdef USE_GRADIENTMAP
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
}`,jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,np=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ip=`#ifdef USE_ENVMAP
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
#endif`,sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lp=`PhysicalMaterial material;
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
#endif`,cp=`uniform sampler2D dfgLUT;
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
}`,hp=`
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
#endif`,up=`#if defined( RE_IndirectDiffuse )
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
#endif`,dp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fp=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,pp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mp=`#if defined( USE_POINTS_UV )
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
#endif`,Sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tp=`#if defined( USE_MORPHCOLORS )
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
#endif`,wp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ap=`#ifdef USE_MORPHTARGETS
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
#endif`,Rp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Np=`#ifdef USE_NORMALMAP
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
#endif`,Up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$p=`float getShadowMask() {
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
}`,Kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qp=`#ifdef USE_SKINNING
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
#endif`,jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,em=`#ifdef USE_SKINNING
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
#endif`,tm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rm=`#ifdef USE_TRANSMISSION
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
#endif`,om=`#ifdef USE_TRANSMISSION
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dm=`uniform sampler2D t2D;
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`uniform float backgroundBlurriness;
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`#include <common>
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
}`,xm=`#if DEPTH_PACKING == 3200
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
}`,vm=`#define DISTANCE
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
}`,ym=`#define DISTANCE
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`uniform float scale;
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
}`,bm=`uniform vec3 diffuse;
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
}`,Tm=`#include <common>
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
}`,wm=`uniform vec3 diffuse;
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
}`,Am=`#define LAMBERT
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
}`,Rm=`#define LAMBERT
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
}`,Cm=`#define MATCAP
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
}`,Pm=`#define MATCAP
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
}`,Im=`#define NORMAL
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
}`,Lm=`#define NORMAL
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
}`,Dm=`#define PHONG
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
}`,Nm=`#define PHONG
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
}`,Um=`#define STANDARD
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
}`,Fm=`#define STANDARD
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
}`,Om=`#define TOON
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
}`,Bm=`#define TOON
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
}`,Hm=`uniform float size;
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
}`,zm=`uniform vec3 diffuse;
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
}`,km=`#include <common>
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
}`,Gm=`uniform vec3 color;
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
}`,Vm=`uniform float rotation;
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
}`,Wm=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:df,alphahash_pars_fragment:ff,alphamap_fragment:pf,alphamap_pars_fragment:mf,alphatest_fragment:gf,alphatest_pars_fragment:_f,aomap_fragment:xf,aomap_pars_fragment:vf,batching_pars_vertex:yf,batching_vertex:Mf,begin_vertex:Sf,beginnormal_vertex:Ef,bsdfs:bf,iridescence_fragment:Tf,bumpmap_pars_fragment:wf,clipping_planes_fragment:Af,clipping_planes_pars_fragment:Rf,clipping_planes_pars_vertex:Cf,clipping_planes_vertex:Pf,color_fragment:If,color_pars_fragment:Lf,color_pars_vertex:Df,color_vertex:Nf,common:Uf,defaultnormal_vertex:Ff,displacementmap_pars_vertex:Of,displacementmap_vertex:Bf,emissivemap_fragment:Hf,emissivemap_pars_fragment:zf,colorspace_fragment:kf,colorspace_pars_fragment:Gf,envmap_fragment:Vf,envmap_common_pars_fragment:Wf,envmap_pars_fragment:Xf,envmap_pars_vertex:qf,envmap_physical_pars_fragment:ip,envmap_vertex:Yf,fog_vertex:Zf,fog_pars_vertex:Jf,fog_fragment:$f,fog_pars_fragment:Kf,gradientmap_pars_fragment:Qf,lightmap_pars_fragment:jf,lights_lambert_fragment:ep,lights_lambert_pars_fragment:tp,lights_pars_begin:np,lights_toon_fragment:sp,lights_toon_pars_fragment:rp,lights_phong_fragment:op,lights_phong_pars_fragment:ap,lights_physical_fragment:lp,lights_physical_pars_fragment:cp,lights_fragment_begin:hp,lights_fragment_maps:up,lights_fragment_end:dp,lightprobes_pars_fragment:fp,logdepthbuf_fragment:pp,logdepthbuf_pars_fragment:mp,logdepthbuf_pars_vertex:gp,logdepthbuf_vertex:_p,map_fragment:xp,map_pars_fragment:vp,map_particle_fragment:yp,map_particle_pars_fragment:Mp,metalnessmap_fragment:Sp,metalnessmap_pars_fragment:Ep,morphinstance_vertex:bp,morphcolor_vertex:Tp,morphnormal_vertex:wp,morphtarget_pars_vertex:Ap,morphtarget_vertex:Rp,normal_fragment_begin:Cp,normal_fragment_maps:Pp,normal_pars_fragment:Ip,normal_pars_vertex:Lp,normal_vertex:Dp,normalmap_pars_fragment:Np,clearcoat_normal_fragment_begin:Up,clearcoat_normal_fragment_maps:Fp,clearcoat_pars_fragment:Op,iridescence_pars_fragment:Bp,opaque_fragment:Hp,packing:zp,premultiplied_alpha_fragment:kp,project_vertex:Gp,dithering_fragment:Vp,dithering_pars_fragment:Wp,roughnessmap_fragment:Xp,roughnessmap_pars_fragment:qp,shadowmap_pars_fragment:Yp,shadowmap_pars_vertex:Zp,shadowmap_vertex:Jp,shadowmask_pars_fragment:$p,skinbase_vertex:Kp,skinning_pars_vertex:Qp,skinning_vertex:jp,skinnormal_vertex:em,specularmap_fragment:tm,specularmap_pars_fragment:nm,tonemapping_fragment:im,tonemapping_pars_fragment:sm,transmission_fragment:rm,transmission_pars_fragment:om,uv_pars_fragment:am,uv_pars_vertex:lm,uv_vertex:cm,worldpos_vertex:hm,background_vert:um,background_frag:dm,backgroundCube_vert:fm,backgroundCube_frag:pm,cube_vert:mm,cube_frag:gm,depth_vert:_m,depth_frag:xm,distance_vert:vm,distance_frag:ym,equirect_vert:Mm,equirect_frag:Sm,linedashed_vert:Em,linedashed_frag:bm,meshbasic_vert:Tm,meshbasic_frag:wm,meshlambert_vert:Am,meshlambert_frag:Rm,meshmatcap_vert:Cm,meshmatcap_frag:Pm,meshnormal_vert:Im,meshnormal_frag:Lm,meshphong_vert:Dm,meshphong_frag:Nm,meshphysical_vert:Um,meshphysical_frag:Fm,meshtoon_vert:Om,meshtoon_frag:Bm,points_vert:Hm,points_frag:zm,shadow_vert:km,shadow_frag:Gm,sprite_vert:Vm,sprite_frag:Wm},Ce={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Hn={basic:{uniforms:en([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:en([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:en([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:en([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:en([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:en([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:en([Ce.points,Ce.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:en([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:en([Ce.common,Ce.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:en([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:en([Ce.sprite,Ce.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:en([Ce.common,Ce.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:en([Ce.lights,Ce.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Hn.physical={uniforms:en([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};var Va={r:0,b:0,g:0},Xm=new wt,xu=new tt;xu.set(-1,0,0,0,1,0,0,0,1);function qm(i,e,t,n,s,r){let o=new qe(0),a=s===!0?0:1,l,c,h=null,f=0,d=null;function u(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){let v=x.backgroundBlurriness>0;y=e.get(y,v)}return y}function _(x){let y=!1,v=u(x);v===null?p(o,a):v&&v.isColor&&(p(v,1),y=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(x,y){let v=u(y);v&&v.isCubeTexture?(c===void 0&&(c=new ae(new Ue(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Fi(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Xm.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(xu),c.material.toneMapped=ft.getTransfer(v.colorSpace)!==Mt,(h!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ae(new Ht(2,2),new Fn({name:"BackgroundMaterial",uniforms:Fi(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ft.getTransfer(v.colorSpace)!==Mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,y){x.getRGB(Va,cc(i)),t.buffers.color.setClear(Va.r,Va.g,Va.b,y,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),a=y,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,p(o,a)},render:_,addToRenderList:M,dispose:m}}function Ym(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(L,B,V,D,z){let Y=!1,q=f(L,D,V,B);r!==q&&(r=q,c(r.object)),Y=u(L,D,V,z),Y&&_(L,D,V,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,v(L,B,V,D),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function f(L,B,V,D){let z=D.wireframe===!0,Y=n[B.id];Y===void 0&&(Y={},n[B.id]=Y);let q=L.isInstancedMesh===!0?L.id:0,ne=Y[q];ne===void 0&&(ne={},Y[q]=ne);let $=ne[V.id];$===void 0&&($={},ne[V.id]=$);let se=$[z];return se===void 0&&(se=d(l()),$[z]=se),se}function d(L){let B=[],V=[],D=[];for(let z=0;z<t;z++)B[z]=0,V[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:D,object:L,attributes:{},index:null}}function u(L,B,V,D){let z=r.attributes,Y=B.attributes,q=0,ne=V.getAttributes();for(let $ in ne)if(ne[$].location>=0){let re=z[$],de=Y[$];if(de===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(de=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(de=L.instanceColor)),re===void 0||re.attribute!==de||de&&re.data!==de.data)return!0;q++}return r.attributesNum!==q||r.index!==D}function _(L,B,V,D){let z={},Y=B.attributes,q=0,ne=V.getAttributes();for(let $ in ne)if(ne[$].location>=0){let re=Y[$];re===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(re=L.instanceColor));let de={};de.attribute=re,re&&re.data&&(de.data=re.data),z[$]=de,q++}r.attributes=z,r.attributesNum=q,r.index=D}function M(){let L=r.newAttributes;for(let B=0,V=L.length;B<V;B++)L[B]=0}function p(L){m(L,0)}function m(L,B){let V=r.newAttributes,D=r.enabledAttributes,z=r.attributeDivisors;V[L]=1,D[L]===0&&(i.enableVertexAttribArray(L),D[L]=1),z[L]!==B&&(i.vertexAttribDivisor(L,B),z[L]=B)}function x(){let L=r.newAttributes,B=r.enabledAttributes;for(let V=0,D=B.length;V<D;V++)B[V]!==L[V]&&(i.disableVertexAttribArray(V),B[V]=0)}function y(L,B,V,D,z,Y,q){q===!0?i.vertexAttribIPointer(L,B,V,z,Y):i.vertexAttribPointer(L,B,V,D,z,Y)}function v(L,B,V,D){M();let z=D.attributes,Y=V.getAttributes(),q=B.defaultAttributeValues;for(let ne in Y){let $=Y[ne];if($.location>=0){let se=z[ne];if(se===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(se=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(se=L.instanceColor)),se!==void 0){let re=se.normalized,de=se.itemSize,Ge=e.get(se);if(Ge===void 0)continue;let j=Ge.buffer,_e=Ge.type,ce=Ge.bytesPerElement,Pe=_e===i.INT||_e===i.UNSIGNED_INT||se.gpuType===oa;if(se.isInterleavedBufferAttribute){let fe=se.data,Le=fe.isInterleavedBuffer===!0?fe.stride:fe.itemSize,st=se.offset;if(fe.isInstancedInterleavedBuffer||fe.isInstancedBufferAttribute){for(let De=0;De<$.locationSize;De++)m($.location+De,fe.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let De=0;De<$.locationSize;De++)p($.location+De);i.bindBuffer(i.ARRAY_BUFFER,j);for(let De=0;De<$.locationSize;De++)y($.location+De,de/$.locationSize,_e,re,Le*ce,(st+de/$.locationSize*De)*ce,Pe)}else{if(se.isInstancedBufferAttribute){for(let fe=0;fe<$.locationSize;fe++)m($.location+fe,se.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let fe=0;fe<$.locationSize;fe++)p($.location+fe);i.bindBuffer(i.ARRAY_BUFFER,j);for(let fe=0;fe<$.locationSize;fe++)y($.location+fe,de/$.locationSize,_e,re,de*ce,de/$.locationSize*fe*ce,Pe)}}else if(q!==void 0){let re=q[ne];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv($.location,re);break;case 3:i.vertexAttrib3fv($.location,re);break;case 4:i.vertexAttrib4fv($.location,re);break;default:i.vertexAttrib1fv($.location,re)}}}}x()}function w(){I();for(let L in n){let B=n[L];for(let V in B){let D=B[V];for(let z in D){let Y=D[z];for(let q in Y)h(Y[q].object),delete Y[q];delete D[z]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;let B=n[L.id];for(let V in B){let D=B[V];for(let z in D){let Y=D[z];for(let q in Y)h(Y[q].object),delete Y[q];delete D[z]}}delete n[L.id]}function g(L){for(let B in n){let V=n[B];for(let D in V){let z=V[D];if(z[L.id]===void 0)continue;let Y=z[L.id];for(let q in Y)h(Y[q].object),delete Y[q];delete z[L.id]}}}function E(L){for(let B in n){let V=n[B],D=L.isInstancedMesh===!0?L.id:0,z=V[D];if(z!==void 0){for(let Y in z){let q=z[Y];for(let ne in q)h(q[ne].object),delete q[ne];delete z[Y]}delete V[D],Object.keys(V).length===0&&delete n[B]}}}function I(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:A,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:E,releaseStatesOfProgram:g,initAttributes:M,enableAttribute:p,disableUnusedAttributes:x}}function Zm(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let u=0;u<h;u++)d+=c[u];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Jm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(g){return!(g!==Cn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(g){let E=g===Rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==sn&&g!==vn&&!E&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&($e("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&$e("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,maxSamples:w,samples:T}}function $m(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Tn,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||s;return s=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){let _=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{let x=r?0:n,y=x*4,v=m.clippingState||null;l.value=v,v=h(_,d,y,u);for(let w=0;w!==y;++w)v[w]=t[w];m.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,u,_){let M=f!==null?f.length:0,p=null;if(M!==0){if(p=l.value,_!==!0||p===null){let m=u+M*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,v=u;y!==M;++y,v+=4)o.copy(f[y]).applyMatrix4(x,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}var Br=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new nr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ue(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:Ii});r.uniforms.tEquirect.value=t;let o=new ae(s,r),a=t.minFilter;return t.minFilter===Jn&&(t.minFilter=tn),new Ms(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},$h=256,Km=3,Qm=20,vu=256,yu=16,jm=3,eg=new C,tg=new qe,As=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ms(1,10,null),this._boxMesh=new ae(new Ue(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=eg}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,d=l.autoClearColor,u=l.autoClearDepth,_=l.autoClearStencil,M=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(e.background=l.getClearColor(tg));let p=new Ms(n,s,h);return p.position.copy(a),p.update(l,e),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=u,l.autoClearStencil=_,e.background=M,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max($h,oc(e))}_fromTexture(e,t){e.mapping===Di||e.mapping===bs?this._setSize(e.image.length===0?$h:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Kh(e,!1,!1),n=Math.log2(e)-Km;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Kh(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Di||e.mapping===bs?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Qh()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=ng(),this._integrationMaterial=ig());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/yu);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-jm)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(vu*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=sg());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Kh(i,e,t){return new Br(i,{minFilter:Jn,generateMipmaps:e,type:Rn,colorSpace:Ys,depthBuffer:t})}function Hr(i,e,t){return new Fn({name:i,uniforms:e,vertexShader:ct.cube_vert,fragmentShader:t,side:Jt,blending:Ii,depthTest:!1,depthWrite:!1})}function ng(){return Hr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${vu}u

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
	`)}function ig(){return Hr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:yu}},`

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
	`)}function sg(){return Hr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Qm}
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
	`)}function Qh(){return Hr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function jh(){return Hr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function rg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,u=!1){return d==null?null:u?o(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===ia||u===sa)if(e.has(d)){let _=e.get(d).texture;return a(_,d.mapping)}else{let _=d.image;if(_&&_.height>0){let M=new Br(_.height);return M.fromEquirectangularTexture(i,d),e.set(d,M),d.addEventListener("dispose",c),a(M.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let u=d.mapping,_=u===ia||u===sa,M=u===Di||u===bs;if(_||M){let p=t.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new As(i)),p=_?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let x=d.image;return _&&x&&x.height>0||M&&x&&l(x)?(n===null&&(n=new As(i)),p=_?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function a(d,u){return u===ia?d.mapping=Di:u===sa&&(d.mapping=bs),d}function l(d){let u=0,_=6;for(let M=0;M<_;M++)d[M]!==void 0&&u++;return u===_}function c(d){let u=d.target;u.removeEventListener("dispose",c);let _=e.get(u);_!==void 0&&(e.delete(u),_.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let _=t.get(u);_!==void 0&&(t.delete(u),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function og(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ti("WebGLRenderer: "+n+" extension not supported."),s}}}function ag(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(_=>delete s[_]);function a(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(let p in _.attributes)e.remove(_.attributes[p]);_.removeEventListener("dispose",a),delete s[_.id],o.unregister(_);let M=r.get(_);M&&(e.remove(M),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(_,M){return s[M.id]!==void 0||(M.addEventListener("dispose",a),s[M.id]=new WeakRef(M),o.register(M,M.id,M),t.memory.geometries++),M}function h(_){let M=_.attributes;for(let p in M)e.update(M[p],i.ARRAY_BUFFER)}function f(_){let M=_.index,p=_.attributes.position,m=0;if(p===void 0)return;let x=M!==null?M.array.length:p.array.length/3-1,y=p.count>=65535?js:Qs,v=new y(Math.ceil(x/3)*6,1),w=v.array;if(M!==null){let g=M.array;m=M.version;for(let E=0,I=0;E<x;E+=3){let A=g[E+0],L=g[E+1],B=g[E+2];w[I++]=A,w[I++]=L,w[I++]=L,w[I++]=B,w[I++]=B,w[I++]=A}}else{m=p.version;for(let g=0,E=0;g<x;g+=3){let I=g+0,A=g+1,L=g+2;w[E++]=I,w[E++]=A,w[E++]=A,w[E++]=L,w[E++]=L,w[E++]=I}}v.version=m;let T=r.get(_);T&&e.remove(T),r.set(_,v)}function d(_){let M=r.get(_);if(M){let p=_.index;p!==null&&M.version<p.version&&f(_)}else f(_);return r.get(_)}function u(){for(let _ in s){let M=s[_].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:d,dispose:u}}function lg(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,u){u!==0&&(i.drawElementsInstanced(n,d,r,f*o,u),t.update(d,n,u))}function h(f,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,u);let M=0;for(let p=0;p<u;p++)M+=d[p];t.update(M,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function cg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Qe("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function hg(i,e,t){let n=new WeakMap,s=new Pt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==f){let I=function(){g.dispose(),n.delete(a),a.removeEventListener("dispose",I)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],y=0;u===!0&&(y=1),_===!0&&(y=2),M===!0&&(y=3);let v=a.attributes.position.count*y,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*w*4*f),g=new Js(T,v,w,f);g.type=vn,g.needsUpdate=!0;let E=y*4;for(let A=0;A<f;A++){let L=p[A],B=m[A],V=x[A],D=v*w*4*A;for(let z=0;z<L.count;z++){let Y=z*E;u===!0&&(s.fromBufferAttribute(L,z),T[D+Y+0]=s.x,T[D+Y+1]=s.y,T[D+Y+2]=s.z,T[D+Y+3]=0),_===!0&&(s.fromBufferAttribute(B,z),T[D+Y+4]=s.x,T[D+Y+5]=s.y,T[D+Y+6]=s.z,T[D+Y+7]=0),M===!0&&(s.fromBufferAttribute(V,z),T[D+Y+8]=s.x,T[D+Y+9]=s.y,T[D+Y+10]=s.z,T[D+Y+11]=V.itemSize===4?s.w:1)}}d={count:f,texture:g,size:new Se(v,w)},n.set(a,d),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let u=0;for(let M=0;M<c.length;M++)u+=c[M];let _=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function ug(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var dg={[zl]:"LINEAR_TONE_MAPPING",[kl]:"REINHARD_TONE_MAPPING",[Gl]:"CINEON_TONE_MAPPING",[Ar]:"ACES_FILMIC_TONE_MAPPING",[Wl]:"AGX_TONE_MAPPING",[Xl]:"NEUTRAL_TONE_MAPPING",[Vl]:"CUSTOM_TONE_MAPPING"};function fg(i,e,t,n,s,r){let o=new an(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Yt;h.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new pt([0,2,0,0,2,0],2));let f=new zo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ae(h,f),u=new br(-1,1,1,-1,0,1),_=null,M=null,p=!1,m,x=null,y=[],v=!1;this.setSize=function(w,T){o.setSize(w,T),a!==null&&a.setSize(w,T),l!==null&&l.setSize(w,T);for(let g=0;g<y.length;g++){let E=y[g];E.setSize&&E.setSize(w,T)}},this.setEffects=function(w){y=w,v=y.length>0&&y[0].isRenderPass===!0;let T=o.width,g=o.height;y.length>0&&a===null&&(a=new an(T,g,{type:Rn,depthBuffer:!1,stencilBuffer:!1}),l=new an(T,g,{type:Rn,depthBuffer:!1,stencilBuffer:!1}));let E=s===!0&&y.some(I=>I.needsDepthTexture===!0);E!==(o.depthTexture!==null)&&(E===!0&&c===null&&(c=new Zn(T,g),r===!0&&(c.format=$n,c.type=Ni)),o.dispose(),o.depthTexture=E?c:null,o.resolveDepthBuffer=E,o.storeMultisampledDepthBuffer=E);for(let I=0;I<y.length;I++){let A=y[I];A.setSize&&A.setSize(T,g),E&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(w,T){if(p||w.toneMapping===On&&y.length===0)return!1;if(x=T,T!==null){let g=T.width,E=T.height;(o.width!==g||o.height!==E)&&this.setSize(g,E)}return v===!1&&w.setRenderTarget(o),m=w.toneMapping,w.toneMapping=On,!0},this.hasRenderPass=function(){return v},this.end=function(w,T){w.toneMapping=m,p=!0;let g=o,E=a;for(let I=0;I<y.length;I++){let A=y[I];A.enabled!==!1&&(A.render(w,E,g,T),A.needsSwap!==!1&&(g=E,E=E===a?l:a))}if(_!==w.outputColorSpace||M!==w.toneMapping){_=w.outputColorSpace,M=w.toneMapping,f.defines={},ft.getTransfer(_)===Mt&&(f.defines.SRGB_TRANSFER="");let I=dg[M];I&&(f.defines[I]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,w.setRenderTarget(x),w.render(d,u),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var Mu=new jt,Su=new Zn(1,1),Eu=new ir(1),bu=new Js,Tu=new Lo,wu=new nr,eu=[],tu=[],nu=new Float32Array(16),iu=new Float32Array(9),su=new Float32Array(4);function Rs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=eu[s];if(r===void 0&&(r=new Float32Array(s),eu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qa(i,e){let t=tu[e];t===void 0&&(t=new Int32Array(e),tu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function pg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function _g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function xg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;su.set(n),i.uniformMatrix2fv(this.addr,!1,su),kt(t,n)}}function vg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;iu.set(n),i.uniformMatrix3fv(this.addr,!1,iu),kt(t,n)}}function yg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;nu.set(n),i.uniformMatrix4fv(this.addr,!1,nu),kt(t,n)}}function Mg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function Eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function Tg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function Ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function Rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function Ya(i){return i.version===0&&(i.compareFunction=tc,i.needsUpdate=!0),i}function Cg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ya(Su):r=Mu,t.setTexture2D(e||r,s)}function Pg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Tu,s)}function Ig(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ya(Eu):r=wu,t.setTextureCube(e||r,s)}function Lg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||bu,s)}function Dg(i){switch(i){case 5126:return pg;case 35664:return mg;case 35665:return gg;case 35666:return _g;case 35674:return xg;case 35675:return vg;case 35676:return yg;case 5124:case 35670:return Mg;case 35667:case 35671:return Sg;case 35668:case 35672:return Eg;case 35669:case 35673:return bg;case 5125:return Tg;case 36294:return wg;case 36295:return Ag;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Cg;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Lg}}function Ng(i,e){i.uniform1fv(this.addr,e)}function Ug(i,e){let t=Rs(e,this.size,2);i.uniform2fv(this.addr,t)}function Fg(i,e){let t=Rs(e,this.size,3);i.uniform3fv(this.addr,t)}function Og(i,e){let t=Rs(e,this.size,4);i.uniform4fv(this.addr,t)}function Bg(i,e){let t=Rs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Hg(i,e){let t=Rs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function zg(i,e){let t=Rs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function kg(i,e){i.uniform1iv(this.addr,e)}function Gg(i,e){i.uniform2iv(this.addr,e)}function Vg(i,e){i.uniform3iv(this.addr,e)}function Wg(i,e){i.uniform4iv(this.addr,e)}function Xg(i,e){i.uniform1uiv(this.addr,e)}function qg(i,e){i.uniform2uiv(this.addr,e)}function Yg(i,e){i.uniform3uiv(this.addr,e)}function Zg(i,e){i.uniform4uiv(this.addr,e)}function Jg(i,e,t){let n=this.cache,s=e.length,r=qa(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ya(Su):o=Mu;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function $g(i,e,t){let n=this.cache,s=e.length,r=qa(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Tu,r[o])}function Kg(i,e,t){let n=this.cache,s=e.length,r=qa(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Ya(Eu):o=wu;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function Qg(i,e,t){let n=this.cache,s=e.length,r=qa(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||bu,r[o])}function jg(i){switch(i){case 5126:return Ng;case 35664:return Ug;case 35665:return Fg;case 35666:return Og;case 35674:return Bg;case 35675:return Hg;case 35676:return zg;case 5124:case 35670:return kg;case 35667:case 35671:return Gg;case 35668:case 35672:return Vg;case 35669:case 35673:return Wg;case 5125:return Xg;case 36294:return qg;case 36295:return Yg;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return Qg}}var mc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dg(t.type)}},gc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jg(t.type)}},_c=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},fc=/(\w+)(\])?(\[|\.)?/g;function ru(i,e){i.seq.push(e),i.map[e.id]=e}function e0(i,e,t){let n=i.name,s=n.length;for(fc.lastIndex=0;;){let r=fc.exec(n),o=fc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ru(t,c===void 0?new mc(a,i,e):new gc(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new _c(a),ru(t,f)),t=f}}}var ws=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);e0(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function ou(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var t0=37297,n0=0;function i0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var au=new tt;function s0(i){ft._getMatrix(au,ft.workingColorSpace,i);let e=`mat3( ${au.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(i)){case Zs:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function lu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+i0(i.getShaderSource(e),a)}else return r}function r0(i,e){let t=s0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var o0={[zl]:"Linear",[kl]:"Reinhard",[Gl]:"Cineon",[Ar]:"ACESFilmic",[Wl]:"AgX",[Xl]:"Neutral",[Vl]:"Custom"};function a0(i,e){let t=o0[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Wa=new C;function l0(){ft.getLuminanceCoefficients(Wa);let i=Wa.x.toFixed(4),e=Wa.y.toFixed(4),t=Wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function h0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function u0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Or(i){return i!==""}function cu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function hu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var d0=/^[ \t]*#include +<([\w\d./]+)>/gm;function xc(i){return i.replace(d0,f0)}function f0(i,e){let t=ct[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return xc(t)}var p0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uu(i){return i.replace(p0,m0)}function m0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function du(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var g0={[wr]:"SHADOWMAP_TYPE_PCF",[Ss]:"SHADOWMAP_TYPE_VSM"};function _0(i){return g0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var x0={[bs]:"ENVMAP_MODE_REFRACTION"};function v0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":x0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var y0={[na]:"ENVMAP_BLENDING_MULTIPLY",[bh]:"ENVMAP_BLENDING_MIX",[Th]:"ENVMAP_BLENDING_ADD"};function M0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":y0[i.combine]||"ENVMAP_BLENDING_NONE"}function S0(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=_0(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=v0(t),f=M0(t),d=c0(t),u=h0(r),_=s.createProgram(),M,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Or).join(`
`),M.length>0&&(M+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Or).join(`
`),p.length>0&&(p+=`
`)):(M=[du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),p=[du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?ct.tonemapping_pars_fragment:"",t.toneMapping!==On?a0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,r0("linearToOutputTexel",t.outputColorSpace),l0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),o=xc(o),o=cu(o,t),o=hu(o,t),a=xc(a),a=cu(a,t),a=hu(a,t),o=uu(o),a=uu(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,M=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,p=["#define varying in",t.glslVersion===ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=m+M+o,y=m+p+a,v=ou(s,s.VERTEX_SHADER,x),w=ou(s,s.FRAGMENT_SHADER,y);s.attachShader(_,v),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(A){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(_)||"",B=s.getShaderInfoLog(v)||"",V=s.getShaderInfoLog(w)||"",D=L.trim(),z=B.trim(),Y=V.trim(),q=!0,ne=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,v,w);else{let $=lu(s,v,"vertex"),se=lu(s,w,"fragment");Qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+D+`
`+$+`
`+se)}else D!==""?$e("WebGLProgram: Program Info Log:",D):(z===""||Y==="")&&(ne=!1);ne&&(A.diagnostics={runnable:q,programLog:D,vertexShader:{log:z,prefix:M},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(v),s.deleteShader(w),g=new ws(s,_),E=u0(s,_)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(_,t0)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=n0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=v,this.fragmentShader=w,this}var E0=0,vc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new yc(e),t.set(e,n)),n}},yc=class{constructor(e){this.id=E0++,this.code=e,this.usedTimes=0}};function b0(i){return i===pi||i===Dr||i===Nr}function T0(i,e,t,n,s,r){let o=new $s,a=new vc,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,E,I,A,L,B){let V=A.fog,D=L.geometry,z=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?A.environment:null,Y=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,q=e.get(g.envMap||z,Y),ne=d[g.type],$=n.precision;g.precision!==null&&($=n.getMaxPrecision(g.precision),$!==g.precision&&$e("WebGLProgram.getParameters:",g.precision,"not supported, using",$,"instead."));let se=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,re=se!==void 0?se.length:0,de=0;D.morphAttributes.position!==void 0&&(de=1),D.morphAttributes.normal!==void 0&&(de=2),D.morphAttributes.color!==void 0&&(de=3);let Ge,j,_e,ce;if(ne){let Ee=Hn[ne];Ge=Ee.vertexShader,j=Ee.fragmentShader}else{Ge=g.vertexShader,j=g.fragmentShader;let Ee=a.getVertexShaderStage(g),_t=a.getFragmentShaderStage(g);a.update(g,Ee,_t),_e=Ee.id,ce=_t.id}let Pe=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),Le=L.isInstancedMesh===!0,st=L.isBatchedMesh===!0,De=!!g.map,ke=!!g.matcap,We=!!q,Z=We&&q.isPMREMTexture===!0,pe=!!g.aoMap,ue=!!g.lightMap,Te=!!g.bumpMap&&g.wireframe===!1,xe=!!g.normalMap,Je=!!g.displacementMap,Ne=!!g.emissiveMap,et=!!g.metalnessMap,je=!!g.roughnessMap,rt=g.anisotropy>0,O=g.clearcoat>0,ot=g.diffuseRoughness>0,it=g.dispersion>0,dt=g.retroreflectivity>0,ge=g.iridescence>0,mt=g.sheen>0,Oe=g.transmission>0,Ye=rt&&!!g.anisotropyMap,R=O&&!!g.clearcoatMap,S=O&&!!g.clearcoatNormalMap,k=O&&!!g.clearcoatRoughnessMap,he=ot&&!!g.diffuseRoughnessMap,ie=ge&&!!g.iridescenceMap,X=ge&&!!g.iridescenceThicknessMap,le=mt&&!!g.sheenColorMap,J=mt&&!!g.sheenRoughnessMap,ee=!!g.specularMap,me=!!g.specularColorMap,N=!!g.specularIntensityMap,P=Oe&&!!g.transmissionMap,U=Oe&&!!g.thicknessMap,H=!!g.gradientMap,te=!!g.alphaMap,Q=g.alphaTest>0,ve=!!g.alphaHash,Ae=!!g.extensions,oe=On;g.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(oe=i.toneMapping);let Be=Z?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,Ze={shaderID:ne,shaderType:g.type,shaderName:g.name,vertexShader:Ge,fragmentShader:j,defines:g.defines,customVertexShaderID:_e,customFragmentShaderID:ce,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:$,batching:st,batchingColor:st&&L._colorsTexture!==null,instancing:Le,instancingColor:Le&&L.instanceColor!==null,instancingMorph:Le&&L.morphTexture!==null,outputColorSpace:Pe===null?i.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:De,matcap:ke,envMap:We,envMapMode:We&&q.mapping,envMapPMREM:Z,envMapMaxLod:Z?Be.length-1:null,envMapSize:Z?Be[0].width:null,aoMap:pe,lightMap:ue,bumpMap:Te,normalMap:xe,displacementMap:Je,emissiveMap:Ne,normalMapObjectSpace:xe&&g.normalMapType===Rh,normalMapTangentSpace:xe&&g.normalMapType===Ur,packedNormalMap:xe&&g.normalMapType===Ur&&b0(g.normalMap.format),metalnessMap:et,roughnessMap:je,anisotropy:rt,anisotropyMap:Ye,clearcoat:O,clearcoatMap:R,clearcoatNormalMap:S,clearcoatRoughnessMap:k,diffuseRoughness:ot,diffuseRoughnessMap:he,dispersion:it,retroreflection:dt,iridescence:ge,iridescenceMap:ie,iridescenceThicknessMap:X,sheen:mt,sheenColorMap:le,sheenRoughnessMap:J,specularMap:ee,specularColorMap:me,specularIntensityMap:N,transmission:Oe,transmissionMap:P,thicknessMap:U,gradientMap:H,opaque:g.transparent===!1&&g.blending===Es&&g.alphaToCoverage===!1,alphaMap:te,alphaTest:Q,alphaHash:ve,combine:g.combine,mapUv:De&&u(g.map.channel),aoMapUv:pe&&u(g.aoMap.channel),lightMapUv:ue&&u(g.lightMap.channel),bumpMapUv:Te&&u(g.bumpMap.channel),normalMapUv:xe&&u(g.normalMap.channel),displacementMapUv:Je&&u(g.displacementMap.channel),emissiveMapUv:Ne&&u(g.emissiveMap.channel),metalnessMapUv:et&&u(g.metalnessMap.channel),roughnessMapUv:je&&u(g.roughnessMap.channel),anisotropyMapUv:Ye&&u(g.anisotropyMap.channel),clearcoatMapUv:R&&u(g.clearcoatMap.channel),clearcoatNormalMapUv:S&&u(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&u(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:he&&u(g.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&u(g.iridescenceMap.channel),iridescenceThicknessMapUv:X&&u(g.iridescenceThicknessMap.channel),sheenColorMapUv:le&&u(g.sheenColorMap.channel),sheenRoughnessMapUv:J&&u(g.sheenRoughnessMap.channel),specularMapUv:ee&&u(g.specularMap.channel),specularColorMapUv:me&&u(g.specularColorMap.channel),specularIntensityMapUv:N&&u(g.specularIntensityMap.channel),transmissionMapUv:P&&u(g.transmissionMap.channel),thicknessMapUv:U&&u(g.thicknessMap.channel),alphaMapUv:te&&u(g.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(xe||rt),vertexNormals:!!D.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!D.attributes.uv&&(De||te),fog:!!V,useFog:g.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||D.attributes.normal===void 0&&xe===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:fe,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:de,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:B.filter(Ee=>Ee.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:oe,decodeVideoTexture:De&&g.map.isVideoTexture===!0&&ft.getTransfer(g.map.colorSpace)===Mt,decodeVideoTextureEmissive:Ne&&g.emissiveMap.isVideoTexture===!0&&ft.getTransfer(g.emissiveMap.colorSpace)===Mt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===xn,flipSided:g.side===Jt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ae&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&g.extensions.multiDraw===!0||st)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ze.vertexUv1s=l.has(1),Ze.vertexUv2s=l.has(2),Ze.vertexUv3s=l.has(3),l.clear(),Ze}function M(g){let E=[];if(g.shaderID?E.push(g.shaderID):(E.push(g.customVertexShaderID),E.push(g.customFragmentShaderID)),g.defines!==void 0)for(let I in g.defines)E.push(I),E.push(g.defines[I]);return g.isRawShaderMaterial===!1&&(p(E,g),m(E,g),E.push(i.outputColorSpace)),E.push(g.customProgramCacheKey),E.join()}function p(g,E){g.push(E.precision),g.push(E.outputColorSpace),g.push(E.envMapMode),g.push(E.envMapPMREM),g.push(E.envMapMaxLod),g.push(E.envMapSize),g.push(E.mapUv),g.push(E.alphaMapUv),g.push(E.lightMapUv),g.push(E.aoMapUv),g.push(E.bumpMapUv),g.push(E.normalMapUv),g.push(E.displacementMapUv),g.push(E.emissiveMapUv),g.push(E.metalnessMapUv),g.push(E.roughnessMapUv),g.push(E.anisotropyMapUv),g.push(E.clearcoatMapUv),g.push(E.clearcoatNormalMapUv),g.push(E.clearcoatRoughnessMapUv),g.push(E.diffuseRoughnessMapUv),g.push(E.iridescenceMapUv),g.push(E.iridescenceThicknessMapUv),g.push(E.sheenColorMapUv),g.push(E.sheenRoughnessMapUv),g.push(E.specularMapUv),g.push(E.specularColorMapUv),g.push(E.specularIntensityMapUv),g.push(E.transmissionMapUv),g.push(E.thicknessMapUv),g.push(E.combine),g.push(E.fogExp2),g.push(E.sizeAttenuation),g.push(E.morphTargetsCount),g.push(E.numSunLights),g.push(E.numDirLights),g.push(E.numPointLights),g.push(E.numSpotLights),g.push(E.numSpotLightMaps),g.push(E.numHemiLights),g.push(E.numRectAreaLights),g.push(E.numSunLightShadows),g.push(E.numDirLightShadows),g.push(E.numPointLightShadows),g.push(E.numSpotLightShadows),g.push(E.numSpotLightShadowsWithMaps),g.push(E.numLightProbes),g.push(E.numLightProbeGrids),g.push(E.shadowMapType),g.push(E.toneMapping),g.push(E.numClippingPlanes),g.push(E.numClipIntersection),g.push(E.depthPacking)}function m(g,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.diffuseRoughness&&o.enable(25),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function x(g){let E=d[g.type],I;if(E){let A=Hn[E];I=Yh.clone(A.uniforms)}else I=g.uniforms;return I}function y(g,E){let I=h.get(E);return I!==void 0?++I.usedTimes:(I=new S0(i,E,g,s),c.push(I),h.set(E,I)),I}function v(g){if(--g.usedTimes===0){let E=c.indexOf(g);c[E]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function w(g){a.remove(g)}function T(){a.dispose()}return{getParameters:_,getProgramCacheKey:M,getUniforms:x,acquireProgram:y,releaseProgram:v,releaseShaderCache:w,programs:c,dispose:T}}function w0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function A0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function fu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function a(d,u,_,M,p,m){let x=i[e];return x===void 0?(x={id:d.id,object:d,geometry:u,material:_,materialVariant:o(d),groupOrder:M,renderOrder:d.renderOrder,z:p,group:m},i[e]=x):(x.id=d.id,x.object=d,x.geometry=u,x.material=_,x.materialVariant=o(d),x.groupOrder=M,x.renderOrder=d.renderOrder,x.z=p,x.group=m),e++,x}function l(d,u,_,M,p,m,x){x.reversedDepth===!0&&(p=-p);let y=a(d,u,_,M,p,m);_.transmission>0?n.push(y):_.transparent===!0?s.push(y):t.push(y)}function c(d,u,_,M,p,m){let x=a(d,u,_,M,p,m);_.transmission>0?n.unshift(x):_.transparent===!0?s.unshift(x):t.unshift(x)}function h(d,u){t.length>1&&t.sort(d||A0),n.length>1&&n.sort(u||fu),s.length>1&&s.sort(u||fu)}function f(){for(let d=e,u=i.length;d<u;d++){let _=i[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function R0(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new pu,i.set(n,[o])):s>=r.length?(o=new pu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function C0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new qe};break;case"SpotLight":t={position:new C,direction:new C,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function P0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var I0=0;function L0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function D0(i){let e=new C0,t=P0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new wt,o=new wt;function a(c){let h=0,f=0,d=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let u=0,_=0,M=0,p=0,m=0,x=0,y=0,v=0,w=0,T=0,g=0,E=0,I=0,A=0;c.sort(L0);for(let B=0,V=c.length;B<V;B++){let D=c[B],z=D.color,Y=D.intensity,q=D.distance,ne=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===pi?ne=D.shadow.map.texture:ne=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=z.r*Y,f+=z.g*Y,d+=z.b*Y;else if(D.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(D.sh.coefficients[$],Y);A++}else if(D.isSunLight){let $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let se=D.shadow,re=t.get(D);re.shadowIntensity=se.intensity,re.shadowBias=se.bias,re.shadowNormalBias=se.normalBias,re.shadowRadius=se.radius,re.shadowMapSize.copy(se.mapSize).multiply(se.getFrameExtents()),n.sunShadow[_]=re,n.sunShadowMap[_]=ne;let de=se.getViewportCount();for(let Ge=0;Ge<de;Ge++)n.sunShadowMatrix[M+Ge]=se.getMatrix(Ge),n.sunShadowCascade[M+Ge]=se._cascadeData[Ge];M+=de,_++}n.sun[u]=$,u++}else if(D.isDirectionalLight){let $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let se=D.shadow,re=t.get(D);re.shadowIntensity=se.intensity,re.shadowBias=se.bias,re.shadowNormalBias=se.normalBias,re.shadowRadius=se.radius,re.shadowMapSize=se.mapSize,n.directionalShadow[p]=re,n.directionalShadowMap[p]=ne,n.directionalShadowMatrix[p]=D.shadow.matrix,w++}n.directional[p]=$,p++}else if(D.isSpotLight){let $=e.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(z).multiplyScalar(Y),$.distance=q,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,n.spot[x]=$;let se=D.shadow;if(D.map&&(n.spotLightMap[E]=D.map,E++,se.updateMatrices(D),D.castShadow&&I++),n.spotLightMatrix[x]=se.matrix,D.castShadow){let re=t.get(D);re.shadowIntensity=se.intensity,re.shadowBias=se.bias,re.shadowNormalBias=se.normalBias,re.shadowRadius=se.radius,re.shadowMapSize=se.mapSize,n.spotShadow[x]=re,n.spotShadowMap[x]=ne,g++}x++}else if(D.isRectAreaLight){let $=e.get(D);$.color.copy(z).multiplyScalar(Y),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),n.rectArea[y]=$,y++}else if(D.isPointLight){let $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){let se=D.shadow,re=t.get(D);re.shadowIntensity=se.intensity,re.shadowBias=se.bias,re.shadowNormalBias=se.normalBias,re.shadowRadius=se.radius,re.shadowMapSize=se.mapSize,re.shadowCameraNear=se.camera.near,re.shadowCameraFar=se.camera.far,n.pointShadow[m]=re,n.pointShadowMap[m]=ne,n.pointShadowMatrix[m]=D.shadow.matrix,T++}n.point[m]=$,m++}else if(D.isHemisphereLight){let $=e.get(D);$.skyColor.copy(D.color).multiplyScalar(Y),$.groundColor.copy(D.groundColor).multiplyScalar(Y),n.hemi[v]=$,v++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let L=n.hash;(L.sunLength!==u||L.directionalLength!==p||L.pointLength!==m||L.spotLength!==x||L.rectAreaLength!==y||L.hemiLength!==v||L.numSunShadows!==_||L.numDirectionalShadows!==w||L.numPointShadows!==T||L.numSpotShadows!==g||L.numSpotMaps!==E||L.numLightProbes!==A)&&(n.sun.length=u,n.directional.length=p,n.spot.length=x,n.rectArea.length=y,n.point.length=m,n.hemi.length=v,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+E-I,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=A,L.sunLength=u,L.directionalLength=p,L.pointLength=m,L.spotLength=x,L.rectAreaLength=y,L.hemiLength=v,L.numSunShadows=_,L.numDirectionalShadows=w,L.numPointShadows=T,L.numSpotShadows=g,L.numSpotMaps=E,L.numLightProbes=A,n.version=I0++)}function l(c,h){let f=0,d=0,u=0,_=0,M=0,p=0,m=h.matrixWorldInverse;for(let x=0,y=c.length;x<y;x++){let v=c[x];if(v.isSunLight){let w=n.sun[f];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(m),f++}else if(v.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),d++}else if(v.isSpotLight){let w=n.spot[_];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),_++}else if(v.isRectAreaLight){let w=n.rectArea[M];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),M++}else if(v.isPointLight){let w=n.point[u];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){let w=n.hemi[p];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:n}}function mu(i){let e=new D0(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):t.push(f)}function a(f){n.push(f)}function l(){e.setup(t),s.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function N0(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new mu(i),e.set(s,[a])):r>=o.length?(a=new mu(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var U0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F0=`uniform sampler2D shadow_pass;
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
}`,O0=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],B0=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],gu=new wt,Fr=new C,pc=new C;function H0(i,e,t){let n=new oi,s=new Se,r=new Se,o=new Pt,a=new ko,l=new Go,c={},h=t.maxTextureSize,f={[fi]:Jt,[Jt]:fi,[xn]:xn},d=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:U0,fragmentShader:F0}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let _=new Yt;_.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new ae(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wr;let m=this.type;this.render=function(T,g,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===ta&&($e("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wr);let I=i.getRenderTarget(),A=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Ii),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let V=m!==this.type;V&&g.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(z=>z.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,z=T.length;D<z;D++){let Y=T[D],q=Y.shadow;if(q===void 0){$e("WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let ne=q.getFrameExtents();s.multiply(ne),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,q.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=$,q.map===null||V===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Ss){if(Y.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new an(s.x,s.y,{format:pi,type:Rn,minFilter:tn,magFilter:tn,generateMipmaps:!1}),q.map.texture.name=Y.name+".shadowMap",q.map.depthTexture=new Zn(s.x,s.y,vn),q.map.depthTexture.name=Y.name+".shadowMapDepth",q.map.depthTexture.format=qn,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Wt,q.map.depthTexture.magFilter=Wt}else Y.isPointLight?(q.map=new Br(s.x),q.map.depthTexture=new ir(s.x,An)):(q.map=new an(s.x,s.y),q.map.depthTexture=new Zn(s.x,s.y,An)),q.map.depthTexture.name=Y.name+".shadowMap",q.map.depthTexture.format=qn,this.type===wr?(q.map.depthTexture.compareFunction=$?ec:jl,q.map.depthTexture.minFilter=tn,q.map.depthTexture.magFilter=tn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Wt,q.map.depthTexture.magFilter=Wt);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let se=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();Y.isPointLight!==!0&&q.updateMatrices(Y,E);let re=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:E.layers;for(let de=0;de<se;de++){let Ge=q.getCamera(de);if(Y.isPointLight){let j=q.camera,_e=q.matrix,ce=Y.distance||j.far;ce!==j.far&&(j.far=ce,j.updateProjectionMatrix()),Fr.setFromMatrixPosition(Y.matrixWorld),j.position.copy(Fr),pc.copy(j.position),pc.add(O0[de]),j.up.copy(B0[de]),j.lookAt(pc),j.updateMatrixWorld(),_e.makeTranslation(-Fr.x,-Fr.y,-Fr.z),gu.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),q._frustum.setFromProjectionMatrix(gu,j.coordinateSystem,j.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,de),i.clear();else{de===0&&(i.setRenderTarget(q.map),i.clear());let j=q.getViewport(de);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),B.viewport(o)}n=q.getFrustum(de),v(g,E,Ge,Y,re,this.type)}q.isPointLightShadow!==!0&&this.type===Ss&&x(q,E),q.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(I,A,L)};function x(T,g){let E=e.update(M);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null?T.mapPass=new an(s.x,s.y,{format:pi,type:Rn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(g,null,E,d,M,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(g,null,E,u,M,null)}function y(T,g,E,I){let A=null,L=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)A=L;else if(A=E.isPointLight===!0?l:a,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let B=A.uuid,V=g.uuid,D=c[B];D===void 0&&(D={},c[B]=D);let z=D[V];z===void 0&&(z=A.clone(),D[V]=z,g.addEventListener("dispose",w)),A=z}if(A.visible=g.visible,A.wireframe=g.wireframe,I===Ss?A.side=g.shadowSide!==null?g.shadowSide:g.side:A.side=g.shadowSide!==null?g.shadowSide:f[g.side],A.alphaMap=g.alphaMap,A.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,A.map=g.map,A.clipShadows=g.clipShadows,A.clippingPlanes=g.clippingPlanes,A.clipIntersection=g.clipIntersection,A.displacementMap=g.displacementMap,A.displacementScale=g.displacementScale,A.displacementBias=g.displacementBias,A.wireframeLinewidth=g.wireframeLinewidth,A.linewidth=g.linewidth,E.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let B=i.properties.get(A);B.light=E}return A}function v(T,g,E,I,A,L){if(T.visible===!1)return;if(T.layers.test(A)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===Ss)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);let D=e.update(T),z=T.material;if(Array.isArray(z)){let Y=D.groups;for(let q=0,ne=Y.length;q<ne;q++){let $=Y[q],se=z[$.materialIndex];if(se&&se.visible){let re=y(T,se,I,L);T.onBeforeShadow(i,T,g,E,D,re,$),i.renderBufferDirect(E,null,D,re,T,$),T.onAfterShadow(i,T,g,E,D,re,$)}}}else if(z.visible){let Y=y(T,z,I,L);T.onBeforeShadow(i,T,g,E,D,Y,null),i.renderBufferDirect(E,null,D,Y,T,null),T.onAfterShadow(i,T,g,E,D,Y,null)}}let V=T.children;for(let D=0,z=V.length;D<z;D++)v(V[D],g,E,I,A,L)}function w(T){T.target.removeEventListener("dispose",w);for(let E in c){let I=c[E],A=T.target.uuid;A in I&&(I[A].dispose(),delete I[A])}}}function z0(i,e){function t(){let N=!1,P=new Pt,U=null,H=new Pt(0,0,0,0);return{setMask:function(te){U!==te&&!N&&(i.colorMask(te,te,te,te),U=te)},setLocked:function(te){N=te},setClear:function(te,Q,ve,Ae,oe){oe===!0&&(te*=Ae,Q*=Ae,ve*=Ae),P.set(te,Q,ve,Ae),H.equals(P)===!1&&(i.clearColor(te,Q,ve,Ae),H.copy(P))},reset:function(){N=!1,U=null,H.set(-1,0,0,0)}}}function n(){let N=!1,P=!1,U=null,H=null,te=null;return{setReversed:function(Q){if(P!==Q){let ve=e.get("EXT_clip_control");Q?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),P=Q;let Ae=te;te=null,this.setClear(Ae)}},getReversed:function(){return P},setTest:function(Q){Q?fe(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(Q){U!==Q&&!N&&(i.depthMask(Q),U=Q)},setFunc:function(Q){if(P&&(Q=Hh[Q]),H!==Q){switch(Q){case Mo:i.depthFunc(i.NEVER);break;case So:i.depthFunc(i.ALWAYS);break;case Eo:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case bo:i.depthFunc(i.EQUAL);break;case To:i.depthFunc(i.GEQUAL);break;case wo:i.depthFunc(i.GREATER);break;case Ao:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}H=Q}},setLocked:function(Q){N=Q},setClear:function(Q){te!==Q&&(te=Q,P&&(Q=1-Q),i.clearDepth(Q))},reset:function(){N=!1,U=null,H=null,te=null,P=!1}}}function s(){let N=!1,P=null,U=null,H=null,te=null,Q=null,ve=null,Ae=null,oe=null;return{setTest:function(Be){N||(Be?fe(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(Be){P!==Be&&!N&&(i.stencilMask(Be),P=Be)},setFunc:function(Be,Ze,Ee){(U!==Be||H!==Ze||te!==Ee)&&(i.stencilFunc(Be,Ze,Ee),U=Be,H=Ze,te=Ee)},setOp:function(Be,Ze,Ee){(Q!==Be||ve!==Ze||Ae!==Ee)&&(i.stencilOp(Be,Ze,Ee),Q=Be,ve=Ze,Ae=Ee)},setLocked:function(Be){N=Be},setClear:function(Be){oe!==Be&&(i.clearStencil(Be),oe=Be)},reset:function(){N=!1,P=null,U=null,H=null,te=null,Q=null,ve=null,Ae=null,oe=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,h={},f={},d={},u=new WeakMap,_=[],M=null,p=!1,m=null,x=null,y=null,v=null,w=null,T=null,g=null,E=new qe(0,0,0),I=0,A=!1,L=null,B=null,V=null,D=null,z=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,ne=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec($)[1]),q=ne>=1):$.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=ne>=2);let se=null,re={},de=i.getParameter(i.SCISSOR_BOX),Ge=i.getParameter(i.VIEWPORT),j=new Pt().fromArray(de),_e=new Pt().fromArray(Ge);function ce(N,P,U,H){let te=new Uint8Array(4),Q=i.createTexture();i.bindTexture(N,Q),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ve=0;ve<U;ve++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(P,0,i.RGBA,1,1,H,0,i.RGBA,i.UNSIGNED_BYTE,te):i.texImage2D(P+ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,te);return Q}let Pe={};Pe[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),Pe[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pe[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(i.DEPTH_TEST),o.setFunc(as),Te(!1),xe(Nl),fe(i.CULL_FACE),pe(Ii);function fe(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Le(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function st(N,P){return d[N]!==P?(i.bindFramebuffer(N,P),d[N]=P,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=P),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=P),!0):!1}function De(N,P){let U=_,H=!1;if(N){U=u.get(P),U===void 0&&(U=[],u.set(P,U));let te=N.textures;if(U.length!==te.length||U[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,ve=te.length;Q<ve;Q++)U[Q]=i.COLOR_ATTACHMENT0+Q;U.length=te.length,H=!0}}else U[0]!==i.BACK&&(U[0]=i.BACK,H=!0);H&&i.drawBuffers(U)}function ke(N){return M!==N?(i.useProgram(N),M=N,!0):!1}let We={[Li]:i.FUNC_ADD,[ah]:i.FUNC_SUBTRACT,[lh]:i.FUNC_REVERSE_SUBTRACT};We[ch]=i.MIN,We[hh]=i.MAX;let Z={[uh]:i.ZERO,[dh]:i.ONE,[fh]:i.SRC_COLOR,[Bl]:i.SRC_ALPHA,[vh]:i.SRC_ALPHA_SATURATE,[_h]:i.DST_COLOR,[mh]:i.DST_ALPHA,[ph]:i.ONE_MINUS_SRC_COLOR,[Hl]:i.ONE_MINUS_SRC_ALPHA,[xh]:i.ONE_MINUS_DST_COLOR,[gh]:i.ONE_MINUS_DST_ALPHA,[yh]:i.CONSTANT_COLOR,[Mh]:i.ONE_MINUS_CONSTANT_COLOR,[Sh]:i.CONSTANT_ALPHA,[Eh]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(N,P,U,H,te,Q,ve,Ae,oe,Be){if(N===Ii){p===!0&&(Le(i.BLEND),p=!1);return}if(p===!1&&(fe(i.BLEND),p=!0),N!==oh){if(N!==m||Be!==A){if((x!==Li||w!==Li)&&(i.blendEquation(i.FUNC_ADD),x=Li,w=Li),Be)switch(N){case Es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ul:i.blendFunc(i.ONE,i.ONE);break;case Fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ol:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qe("WebGLState: Invalid blending: ",N);break}else switch(N){case Es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ul:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Fl:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ol:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",N);break}y=null,v=null,T=null,g=null,E.set(0,0,0),I=0,m=N,A=Be}return}te=te||P,Q=Q||U,ve=ve||H,(P!==x||te!==w)&&(i.blendEquationSeparate(We[P],We[te]),x=P,w=te),(U!==y||H!==v||Q!==T||ve!==g)&&(i.blendFuncSeparate(Z[U],Z[H],Z[Q],Z[ve]),y=U,v=H,T=Q,g=ve),(Ae.equals(E)===!1||oe!==I)&&(i.blendColor(Ae.r,Ae.g,Ae.b,oe),E.copy(Ae),I=oe),m=N,A=!1}function ue(N,P){N.side===xn?Le(i.CULL_FACE):fe(i.CULL_FACE);let U=N.side===Jt;P&&(U=!U),Te(U),N.blending===Es&&N.transparent===!1?pe(Ii):pe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let H=N.stencilWrite;a.setTest(H),H&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ne(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function Te(N){L!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),L=N)}function xe(N){N!==sh?(fe(i.CULL_FACE),N!==B&&(N===Nl?i.cullFace(i.BACK):N===rh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),B=N}function Je(N){N!==V&&(q&&i.lineWidth(N),V=N)}function Ne(N,P,U){N?(fe(i.POLYGON_OFFSET_FILL),(D!==P||z!==U)&&(D=P,z=U,o.getReversed()&&(P=-P,U=-U),i.polygonOffset(P,U))):Le(i.POLYGON_OFFSET_FILL)}function et(N){N?fe(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function je(N){N===void 0&&(N=i.TEXTURE0+Y-1),se!==N&&(i.activeTexture(N),se=N)}function rt(N,P,U){U===void 0&&(se===null?U=i.TEXTURE0+Y-1:U=se);let H=re[U];H===void 0&&(H={type:void 0,texture:void 0},re[U]=H),(H.type!==N||H.texture!==P)&&(se!==U&&(i.activeTexture(U),se=U),i.bindTexture(N,P||Pe[N]),H.type=N,H.texture=P)}function O(){let N=re[se];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ot(){try{i.compressedTexImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function it(){try{i.compressedTexImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function dt(){try{i.texSubImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function ge(){try{i.texSubImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function mt(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function Oe(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function Ye(){try{i.texStorage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function R(){try{i.texStorage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function S(){try{i.texImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function k(){try{i.texImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function he(N){return f[N]!==void 0?f[N]:i.getParameter(N)}function ie(N,P){f[N]!==P&&(i.pixelStorei(N,P),f[N]=P)}function X(N){j.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),j.copy(N))}function le(N){_e.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),_e.copy(N))}function J(N,P){let U=c.get(P);U===void 0&&(U=new WeakMap,c.set(P,U));let H=U.get(N);H===void 0&&(H=i.getUniformBlockIndex(P,N.name),i.uniformBlockBinding(P,H,H),U.set(N,H))}function ee(N,P,U){let te=c.get(P).get(N);l[te]!==U&&(i.bindBufferBase(i.UNIFORM_BUFFER,te,U),l[te]=U)}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},se=null,re={},d={},l={},u=new WeakMap,_=[],M=null,p=!1,m=null,x=null,y=null,v=null,w=null,T=null,g=null,E=new qe(0,0,0),I=0,A=!1,L=null,B=null,V=null,D=null,z=null,j.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:fe,disable:Le,bindFramebuffer:st,drawBuffers:De,useProgram:ke,setBlending:pe,setMaterial:ue,setFlipSided:Te,setCullFace:xe,setLineWidth:Je,setPolygonOffset:Ne,setScissorTest:et,activeTexture:je,bindTexture:rt,unbindTexture:O,compressedTexImage2D:ot,compressedTexImage3D:it,texImage2D:S,texImage3D:k,pixelStorei:ie,getParameter:he,updateUBOMapping:J,uniformBlockBinding:ee,texStorage2D:Ye,texStorage3D:R,texSubImage2D:dt,texSubImage3D:ge,compressedTexSubImage2D:mt,compressedTexSubImage3D:Oe,scissor:X,viewport:le,reset:me}}function k0(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,h=new WeakMap,f=new Set,d,u=new WeakMap,_=new Set,M=new FinalizationRegistry(R=>_.delete(R)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,S){return p?new OffscreenCanvas(R,S):cs("canvas")}function x(R,S,k){let he=1,ie=Ye(R);if((ie.width>k||ie.height>k)&&(he=k/Math.max(ie.width,ie.height)),he<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let X=Math.floor(he*ie.width),le=Math.floor(he*ie.height);d===void 0&&(d=m(X,le));let J=S?m(X,le):d;return J.width=X,J.height=le,J.getContext("2d").drawImage(R,0,0,X,le),$e("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+X+"x"+le+")."),J}else return"data"in R&&$e("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function y(R){return R.generateMipmaps}function v(R){i.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(R,S,k,he,ie,X=!1){if(R!==null){if(i[R]!==void 0)return i[R];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let le;he&&(le=e.get("EXT_texture_norm16"),le||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=S;if(S===i.RED&&(k===i.FLOAT&&(J=i.R32F),k===i.HALF_FLOAT&&(J=i.R16F),k===i.UNSIGNED_BYTE&&(J=i.R8),k===i.UNSIGNED_SHORT&&le&&(J=le.R16_EXT),k===i.SHORT&&le&&(J=le.R16_SNORM_EXT)),S===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.R8UI),k===i.UNSIGNED_SHORT&&(J=i.R16UI),k===i.UNSIGNED_INT&&(J=i.R32UI),k===i.BYTE&&(J=i.R8I),k===i.SHORT&&(J=i.R16I),k===i.INT&&(J=i.R32I)),S===i.RG&&(k===i.FLOAT&&(J=i.RG32F),k===i.HALF_FLOAT&&(J=i.RG16F),k===i.UNSIGNED_BYTE&&(J=i.RG8),k===i.UNSIGNED_SHORT&&le&&(J=le.RG16_EXT),k===i.SHORT&&le&&(J=le.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RG8UI),k===i.UNSIGNED_SHORT&&(J=i.RG16UI),k===i.UNSIGNED_INT&&(J=i.RG32UI),k===i.BYTE&&(J=i.RG8I),k===i.SHORT&&(J=i.RG16I),k===i.INT&&(J=i.RG32I)),S===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGB8UI),k===i.UNSIGNED_SHORT&&(J=i.RGB16UI),k===i.UNSIGNED_INT&&(J=i.RGB32UI),k===i.BYTE&&(J=i.RGB8I),k===i.SHORT&&(J=i.RGB16I),k===i.INT&&(J=i.RGB32I)),S===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),k===i.UNSIGNED_INT&&(J=i.RGBA32UI),k===i.BYTE&&(J=i.RGBA8I),k===i.SHORT&&(J=i.RGBA16I),k===i.INT&&(J=i.RGBA32I)),S===i.RGB&&(k===i.UNSIGNED_SHORT&&le&&(J=le.RGB16_EXT),k===i.SHORT&&le&&(J=le.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),S===i.RGBA){let ee=X?Zs:ft.getTransfer(ie);k===i.FLOAT&&(J=i.RGBA32F),k===i.HALF_FLOAT&&(J=i.RGBA16F),k===i.UNSIGNED_BYTE&&(J=ee===Mt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&le&&(J=le.RGBA16_EXT),k===i.SHORT&&le&&(J=le.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function g(R,S){let k;return R?S===null||S===An||S===Ni?k=i.DEPTH24_STENCIL8:S===vn?k=i.DEPTH32F_STENCIL8:S===Ts&&(k=i.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===An||S===Ni?k=i.DEPTH_COMPONENT24:S===vn?k=i.DEPTH_COMPONENT32F:S===Ts&&(k=i.DEPTH_COMPONENT16),k}function E(R,S){return y(R)===!0||R.isFramebufferTexture&&R.minFilter!==Wt&&R.minFilter!==tn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function I(R){let S=new WeakRef(R);n.get(R).__ref=S,_.add(S),M.register(R,S,S)}function A(R){let S=n.get(R).__ref;S!==void 0&&(_.delete(S),M.unregister(S))}function L(R){V(R.target)}function B(R){D(R.target)}function V(R){R.removeEventListener("dispose",L),A(R),Y(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&f.delete(R)}function D(R){R.removeEventListener("dispose",B),A(R),ne(R)}function z(){for(let R of _){let S=R.deref();S!==void 0&&(S.isRenderTarget===!0?D(S):V(S))}_.clear(),f.clear()}function Y(R){let S=n.get(R);if(S.__webglInit===void 0)return;let k=R.source,he=u.get(k);if(he){let ie=he[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&q(R),Object.keys(he).length===0&&u.delete(k)}n.remove(R)}function q(R){let S=n.get(R);i.deleteTexture(S.__webglTexture);let k=R.source,he=u.get(k);delete he[S.__cacheKey],o.memory.textures--}function ne(R){let S=n.get(R);S.__depthDisposeCallback&&S.__depthDisposeCallback();let k=R.depthTexture;if(k&&k.renderTarget===R&&V(k),R.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(S.__webglFramebuffer[ie]))for(let X=0;X<S.__webglFramebuffer[ie].length;X++)i.deleteFramebuffer(S.__webglFramebuffer[ie][X]);else i.deleteFramebuffer(S.__webglFramebuffer[ie]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ie])}else{if(Array.isArray(S.__webglFramebuffer))for(let ie=0;ie<S.__webglFramebuffer.length;ie++)i.deleteFramebuffer(S.__webglFramebuffer[ie]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ie=0;ie<S.__webglColorRenderbuffer.length;ie++)S.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ie]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let he=R.textures;for(let ie=0,X=he.length;ie<X;ie++){let le=n.get(he[ie]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),o.memory.textures--),n.remove(he[ie])}n.remove(R)}let $=0;function se(){$=0}function re(){return $}function de(R){$=R}function Ge(){let R=$;return R>=s.maxTextures&&$e("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,R}function j(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.mipmapsAutoUpdate),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function _e(R,S){let k=n.get(R);if(R.isVideoTexture&&mt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){let he=R.image;if(he===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(k,R,S);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+S)}function ce(R,S){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){ue(k,R,S);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+S)}function Pe(R,S){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){ue(k,R,S);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+S)}function fe(R,S){let k=n.get(R);if(R.version>0&&k.__version!==R.version){Te(k,R,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+S)}let Le={[wi]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[Ro]:i.MIRRORED_REPEAT},st={[Wt]:i.NEAREST,[wh]:i.NEAREST_MIPMAP_NEAREST,[Rr]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[ra]:i.LINEAR_MIPMAP_NEAREST,[Jn]:i.LINEAR_MIPMAP_LINEAR},De={[Ph]:i.NEVER,[tc]:i.ALWAYS,[Ih]:i.LESS,[jl]:i.LEQUAL,[Lh]:i.EQUAL,[ec]:i.GEQUAL,[Dh]:i.GREATER,[Nh]:i.NOTEQUAL};function ke(R,S){if(S.type===vn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===tn||S.magFilter===ra||S.magFilter===Rr||S.magFilter===Jn||S.minFilter===tn||S.minFilter===ra||S.minFilter===Rr||S.minFilter===Jn)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Le[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Le[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Le[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,st[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,st[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,De[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Wt||S.minFilter!==Rr&&S.minFilter!==Jn||S.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function We(R,S){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",L),I(S));let he=S.source,ie=u.get(he);ie===void 0&&(ie={},u.set(he,ie));let X=j(S);if(X!==R.__cacheKey){ie[X]===void 0&&(ie[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ie[X].usedTimes++;let le=ie[R.__cacheKey];le!==void 0&&(ie[R.__cacheKey].usedTimes--,le.usedTimes===0&&q(S)),R.__cacheKey=X,R.__webglTexture=ie[X].texture}return k}function Z(R,S,k){return Math.floor(Math.floor(R/k)/S)}function pe(R,S,k,he){let X=R.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,k,he,S.data);else{X.sort((N,P)=>N.start-P.start);let le=0;for(let N=1;N<X.length;N++){let P=X[le],U=X[N],H=P.start+P.count,te=Z(U.start,S.width,4),Q=Z(P.start,S.width,4);U.start<=H+1&&te===Q&&Z(U.start+U.count-1,S.width,4)===te?P.count=Math.max(P.count,U.start+U.count-P.start):(++le,X[le]=U)}X.length=le+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let N=0,P=X.length;N<P;N++){let U=X[N],H=Math.floor(U.start/4),te=Math.ceil(U.count/4),Q=H%S.width,ve=Math.floor(H/S.width),Ae=te,oe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve),t.texSubImage2D(i.TEXTURE_2D,0,Q,ve,Ae,oe,k,he,S.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,me)}}function ue(R,S,k){let he=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(he=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(he=i.TEXTURE_3D);let ie=We(R,S),X=S.source;t.bindTexture(he,R.__webglTexture,i.TEXTURE0+k);let le=n.get(X);if(X.version!==le.__version||ie===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let oe=ft.getPrimaries(ft.workingColorSpace),Be=S.colorSpace===Kn?null:ft.getPrimaries(S.colorSpace),Ze=S.colorSpace===Kn||oe===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let ee=x(S.image,!1,s.maxTextureSize);ee=Oe(S,ee);let me=r.convert(S.format,S.colorSpace),N=r.convert(S.type),P=T(S.internalFormat,me,N,S.normalized,S.colorSpace,S.isVideoTexture);ke(he,S);let U,H=S.mipmaps,te=S.isVideoTexture!==!0,Q=le.__version===void 0||ie===!0,ve=X.dataReady,Ae=E(S,ee);if(S.isDepthTexture)P=g(S.format===$n,S.type),Q&&(te?t.texStorage2D(i.TEXTURE_2D,1,P,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,P,ee.width,ee.height,0,me,N,null));else if(S.isDataTexture)if(H.length>0){te&&Q&&t.texStorage2D(i.TEXTURE_2D,Ae,P,H[0].width,H[0].height);for(let oe=0,Be=H.length;oe<Be;oe++)U=H[oe],te?ve&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,U.width,U.height,me,N,U.data):t.texImage2D(i.TEXTURE_2D,oe,P,U.width,U.height,0,me,N,U.data);S.generateMipmaps=!1}else te?(Q&&t.texStorage2D(i.TEXTURE_2D,Ae,P,ee.width,ee.height),ve&&pe(S,ee,me,N)):t.texImage2D(i.TEXTURE_2D,0,P,ee.width,ee.height,0,me,N,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){te&&Q&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,P,H[0].width,H[0].height,ee.depth);for(let oe=0,Be=H.length;oe<Be;oe++)if(U=H[oe],S.format!==Cn)if(me!==null)if(te){if(ve)if(S.layerUpdates.size>0){let Ze=dc(U.width,U.height,S.format,S.type);for(let Ee of S.layerUpdates){let _t=U.data.subarray(Ee*Ze/U.data.BYTES_PER_ELEMENT,(Ee+1)*Ze/U.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,Ee,U.width,U.height,1,me,_t)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,U.width,U.height,ee.depth,me,U.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,P,U.width,U.height,ee.depth,0,U.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,U.width,U.height,ee.depth,me,N,U.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,P,U.width,U.height,ee.depth,0,me,N,U.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{te&&Q&&t.texStorage2D(i.TEXTURE_2D,Ae,P,H[0].width,H[0].height);for(let oe=0,Be=H.length;oe<Be;oe++)U=H[oe],S.format!==Cn?me!==null?te?ve&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,U.width,U.height,me,U.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,P,U.width,U.height,0,U.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?ve&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,U.width,U.height,me,N,U.data):t.texImage2D(i.TEXTURE_2D,oe,P,U.width,U.height,0,me,N,U.data)}else if(S.isDataArrayTexture)if(te){if(Q&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,P,ee.width,ee.height,ee.depth),ve)if(S.layerUpdates.size>0){let oe=dc(ee.width,ee.height,S.format,S.type);for(let Be of S.layerUpdates){let Ze=ee.data.subarray(Be*oe/ee.data.BYTES_PER_ELEMENT,(Be+1)*oe/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Be,ee.width,ee.height,1,me,N,Ze)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,me,N,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,P,ee.width,ee.height,ee.depth,0,me,N,ee.data);else if(S.isData3DTexture)te?(Q&&t.texStorage3D(i.TEXTURE_3D,Ae,P,ee.width,ee.height,ee.depth),ve&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,me,N,ee.data)):t.texImage3D(i.TEXTURE_3D,0,P,ee.width,ee.height,ee.depth,0,me,N,ee.data);else if(S.isFramebufferTexture){if(Q)if(te)t.texStorage2D(i.TEXTURE_2D,Ae,P,ee.width,ee.height);else{let oe=ee.width,Be=ee.height;for(let Ze=0;Ze<Ae;Ze++)t.texImage2D(i.TEXTURE_2D,Ze,P,oe,Be,0,me,N,null),oe>>=1,Be>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let oe=i.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),ee.parentNode!==oe){oe.appendChild(ee),f.add(S),oe.onpaint=Be=>{let Ze=Be.changedElements;for(let Ee of f)Ze.includes(Ee.image)&&(Ee.needsUpdate=!0)},oe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{let Ze=i.RGBA,Ee=i.RGBA,_t=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ze,Ee,_t,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(H.length>0){if(te&&Q){let oe=Ye(H[0]);t.texStorage2D(i.TEXTURE_2D,Ae,P,oe.width,oe.height)}for(let oe=0,Be=H.length;oe<Be;oe++)U=H[oe],te?ve&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,me,N,U):t.texImage2D(i.TEXTURE_2D,oe,P,me,N,U);S.generateMipmaps=!1}else if(te){if(Q){let oe=Ye(ee);t.texStorage2D(i.TEXTURE_2D,Ae,P,oe.width,oe.height)}ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,N,ee)}else t.texImage2D(i.TEXTURE_2D,0,P,me,N,ee);y(S)&&S.mipmapsAutoUpdate===!0&&v(he),le.__version=X.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Te(R,S,k){if(S.image.length!==6)return;let he=We(R,S),ie=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);let X=n.get(ie);if(ie.version!==X.__version||he===!0){t.activeTexture(i.TEXTURE0+k);let le=ft.getPrimaries(ft.workingColorSpace),J=S.colorSpace===Kn?null:ft.getPrimaries(S.colorSpace),ee=S.colorSpace===Kn||le===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let me=S.isCompressedTexture||S.image[0].isCompressedTexture,N=S.image[0]&&S.image[0].isDataTexture,P=[];for(let Ee=0;Ee<6;Ee++)!me&&!N?P[Ee]=x(S.image[Ee],!0,s.maxCubemapSize):P[Ee]=N?S.image[Ee].image:S.image[Ee],P[Ee]=Oe(S,P[Ee]);let U=P[0],H=r.convert(S.format,S.colorSpace),te=r.convert(S.type),Q=T(S.internalFormat,H,te,S.normalized,S.colorSpace),ve=S.isVideoTexture!==!0,Ae=X.__version===void 0||he===!0,oe=ie.dataReady,Be=E(S,U);ke(i.TEXTURE_CUBE_MAP,S);let Ze;if(S.isDepthTexture){if(Q=g(S.format===$n,S.type),Ae)if(ve)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Q,U.width,U.height);else for(let Ee=0;Ee<6;Ee++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Q,U.width,U.height,0,H,te,null)}else if(me){ve&&Ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,Q,U.width,U.height);for(let Ee=0;Ee<6;Ee++){Ze=P[Ee].mipmaps;for(let _t=0;_t<Ze.length;_t++){let Ct=Ze[_t];S.format!==Cn?H!==null?ve?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,_t,0,0,Ct.width,Ct.height,H,Ct.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,_t,Q,Ct.width,Ct.height,0,Ct.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ve?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,_t,0,0,Ct.width,Ct.height,H,te,Ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,_t,Q,Ct.width,Ct.height,0,H,te,Ct.data)}}}else{if(Ze=S.mipmaps,ve&&Ae){Ze.length>0&&Be++;let Ee=Ye(P[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,Q,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(N){ve?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,P[Ee].width,P[Ee].height,H,te,P[Ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Q,P[Ee].width,P[Ee].height,0,H,te,P[Ee].data);for(let _t=0;_t<Ze.length;_t++){let hn=Ze[_t].image[Ee].image;ve?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,_t+1,0,0,hn.width,hn.height,H,te,hn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,_t+1,Q,hn.width,hn.height,0,H,te,hn.data)}}else{ve?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,H,te,P[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Q,H,te,P[Ee]);for(let _t=0;_t<Ze.length;_t++){let Ct=Ze[_t];ve?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,_t+1,0,0,H,te,Ct.image[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,_t+1,Q,H,te,Ct.image[Ee])}}}y(S)&&S.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),X.__version=ie.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function xe(R,S,k,he,ie,X){let le=r.convert(k.format,k.colorSpace),J=r.convert(k.type),ee=T(k.internalFormat,le,J,k.normalized,k.colorSpace),me=n.get(S),N=n.get(k);if(N.__renderTarget=S,!me.__hasExternalTextures){let P=Math.max(1,S.width>>X),U=Math.max(1,S.height>>X);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,X,ee,P,U,S.depth,0,le,J,null):t.texImage2D(ie,X,ee,P,U,0,le,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),ge(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,ie,N.__webglTexture,0,dt(S)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,he,ie,N.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(R,S,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){let he=S.depthTexture,ie=he&&he.isDepthTexture?he.type:null,X=g(S.stencilBuffer,ie),le=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ge(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt(S),X,S.width,S.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt(S),X,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,X,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,R)}else{let he=S.textures;for(let ie=0;ie<he.length;ie++){let X=he[ie],le=r.convert(X.format,X.colorSpace),J=r.convert(X.type),ee=T(X.internalFormat,le,J,X.normalized,X.colorSpace);ge(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt(S),ee,S.width,S.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt(S),ee,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ee,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(R,S,k){let he=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=n.get(S.depthTexture);ie.__renderTarget=S;let X=he?S.depthTexture.image[0]:S.depthTexture.image;(!ie.__webglTexture||X.width!==S.width||X.height!==S.height)&&(X.width=S.width,X.height=S.height,S.depthTexture.needsUpdate=!0),he?fe(S.depthTexture,0):_e(S.depthTexture,0);let le=ie.__webglTexture,J=dt(S),ee=he?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,me=S.depthTexture.format===$n?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===qn)ge(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,ee,le,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,me,ee,le,0);else if(S.depthTexture.format===$n)ge(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,ee,le,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,me,ee,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(R){let S=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let he=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),he){let ie=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,he.removeEventListener("dispose",ie)};he.addEventListener("dispose",ie),S.__depthDisposeCallback=ie}S.__boundDepthTexture=he}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(k)for(let he=0;he<6;he++)Ne(S.__webglFramebuffer[he],R,he);else R.texture.mipmaps.length>0?Ne(S.__webglFramebuffer[0],R,0):Ne(S.__webglFramebuffer,R,0);else if(k){S.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[he]),S.__webglDepthbuffer[he]===void 0)S.__webglDepthbuffer[he]=i.createRenderbuffer(),Je(S.__webglDepthbuffer[he],R,!1);else{let ie=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer[he];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,X)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Je(S.__webglDepthbuffer,R,!1);else{let ie=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,X)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(R,S,k){let he=n.get(R);S!==void 0&&xe(he.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&et(R)}function rt(R){let S=R.texture,k=n.get(R),he=n.get(S);R.addEventListener("dispose",B),I(R);let ie=R.textures,X=R.isWebGLCubeRenderTarget===!0,le=ie.length>1;if(le||(he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture()),he.__version=S.version,o.memory.textures++),X){k.__webglFramebuffer=[];for(let J=0;J<6;J++)if(S.mipmaps.length>0){k.__webglFramebuffer[J]=[];for(let ee=0;ee<S.mipmaps.length;ee++)k.__webglFramebuffer[J][ee]=i.createFramebuffer()}else k.__webglFramebuffer[J]=i.createFramebuffer()}else{if(S.mipmaps.length>0){k.__webglFramebuffer=[];for(let J=0;J<S.mipmaps.length;J++)k.__webglFramebuffer[J]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(le)for(let J=0,ee=ie.length;J<ee;J++){let me=n.get(ie[J]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&ge(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let J=0;J<ie.length;J++){let ee=ie[J];k.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[J]);let me=r.convert(ee.format,ee.colorSpace),N=r.convert(ee.type),P=T(ee.internalFormat,me,N,ee.normalized,ee.colorSpace,R.isXRRenderTarget===!0),U=dt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,U,P,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,k.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Je(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),ke(i.TEXTURE_CUBE_MAP,S);for(let J=0;J<6;J++)if(S.mipmaps.length>0)for(let ee=0;ee<S.mipmaps.length;ee++)xe(k.__webglFramebuffer[J][ee],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ee);else xe(k.__webglFramebuffer[J],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);y(S)?v(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(le){for(let J=0,ee=ie.length;J<ee;J++){let me=ie[J],N=n.get(me),P=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(P=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(P,N.__webglTexture),ke(P,me),xe(k.__webglFramebuffer,R,me,i.COLOR_ATTACHMENT0+J,P,0),y(me)&&v(P)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(J=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,he.__webglTexture),ke(J,S),S.mipmaps.length>0)for(let ee=0;ee<S.mipmaps.length;ee++)xe(k.__webglFramebuffer[ee],R,S,i.COLOR_ATTACHMENT0,J,ee);else xe(k.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,J,0);y(S)?v(J):S.mipmaps.length>0&&i.texParameteri(J,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&et(R)}function O(R){let S=R.textures;for(let k=0,he=S.length;k<he;k++){let ie=S[k];if(y(ie)&&ie.mipmapsAutoUpdate===!0){let X=w(R),le=n.get(ie).__webglTexture;t.bindTexture(X,le),v(X),t.unbindTexture()}}}let ot=[];function it(R){if(R.samples>0){if(ge(R)===!1){let S=R.textures,k=R.width,he=R.height,ie=i.COLOR_BUFFER_BIT,X=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(R),J=S.length>1;if(J)for(let me=0;me<S.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let me=0;me<S.length;me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[me]);let N=n.get(S[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,k,he,0,0,k,he,ie,i.NEAREST),l===!0&&(ot.length=0,ot.push(i.COLOR_ATTACHMENT0+me),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&ot.push(X),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let me=0;me<S.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,le.__webglColorRenderbuffer[me]);let N=n.get(S[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,N,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function dt(R){return Math.min(s.maxSamples,R.samples)}function ge(R){let S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function mt(R){let S=o.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Oe(R,S){let k=R.colorSpace,he=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Ys&&k!==Kn&&(ft.getTransfer(k)===Mt?(he!==Cn||ie!==sn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",k)),S}function Ye(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Ge,this.resetTextureUnits=se,this.getTextureUnits=re,this.setTextureUnits=de,this.setTexture2D=_e,this.setTexture2DArray=ce,this.setTexture3D=Pe,this.setTextureCube=fe,this.rebindTextures=je,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ge,this.dispose=z}function G0(i,e){function t(n,s=Kn){let r,o=ft.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===aa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===la)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$l)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yl)return i.BYTE;if(n===Zl)return i.SHORT;if(n===Ts)return i.UNSIGNED_SHORT;if(n===oa)return i.INT;if(n===An)return i.UNSIGNED_INT;if(n===vn)return i.FLOAT;if(n===Rn)return i.HALF_FLOAT;if(n===Kl)return i.ALPHA;if(n===Ql)return i.RGB;if(n===Cn)return i.RGBA;if(n===qn)return i.DEPTH_COMPONENT;if(n===$n)return i.DEPTH_STENCIL;if(n===ca)return i.RED;if(n===ha)return i.RED_INTEGER;if(n===pi)return i.RG;if(n===ua)return i.RG_INTEGER;if(n===da)return i.RGBA_INTEGER;if(n===Cr||n===Pr||n===Ir||n===Lr)if(o===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fa||n===pa||n===ma||n===ga)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_a||n===xa||n===va||n===ya||n===Ma||n===Dr||n===Sa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_a||n===xa)return o===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===va)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ya)return r.COMPRESSED_R11_EAC;if(n===Ma)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Dr)return r.COMPRESSED_RG11_EAC;if(n===Sa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ea||n===ba||n===Ta||n===wa||n===Aa||n===Ra||n===Ca||n===Pa||n===Ia||n===La||n===Da||n===Na||n===Ua||n===Fa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ea)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ba)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ta)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wa)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Aa)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ra)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ca)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pa)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ia)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===La)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Da)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Na)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ua)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fa)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oa||n===Ba||n===Ha)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Oa)return o===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ba)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===za||n===ka||n===Nr||n===Ga)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ga)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ni?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var V0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W0=`
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

}`,Mc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new sr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Fn({vertexShader:V0,fragmentShader:W0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ae(new Ht(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sc=class extends Dn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,_=null,M=typeof XRWebGLBinding<"u",p=new Mc,m={},x=t.getContextAttributes(),y=null,v=null,w=[],T=[],g=new Se,E=null,I=null,A=new Qt;A.viewport=new Pt;let L=new Qt;L.viewport=new Pt;let B=[A,L],V=new jo,D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let _e=w[j];return _e===void 0&&(_e=new fs,w[j]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(j){let _e=w[j];return _e===void 0&&(_e=new fs,w[j]=_e),_e.getGripSpace()},this.getHand=function(j){let _e=w[j];return _e===void 0&&(_e=new fs,w[j]=_e),_e.getHandSpace()};function Y(j){let _e=T.indexOf(j.inputSource);if(_e===-1)return;let ce=w[_e];ce!==void 0&&(ce.update(j.inputSource,j.frame,c||o),ce.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",ne);for(let j=0;j<w.length;j++){let _e=T[j];_e!==null&&(T[j]=null,w[j].disconnect(_e))}D=null,z=null,p.reset();for(let j in m)delete m[j];if(e.setRenderTarget(y),u=null,d=null,f=null,s=null,v=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(g.width,g.height,!1),I!==null){let j=I.camera;j.fov=I.fov,j.zoom=I.zoom,j.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",q),s.addEventListener("inputsourceschange",ne),x.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(g),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Pe=null,fe=null;x.depth&&(fe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=x.stencil?$n:qn,Pe=x.stencil?Ni:An);let Le={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Le),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new an(d.textureWidth,d.textureHeight,{format:Cn,type:sn,depthTexture:new Zn(d.textureWidth,d.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ce={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new an(u.framebufferWidth,u.framebufferHeight,{format:Cn,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ge.setContext(s),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ne(j){for(let _e=0;_e<j.removed.length;_e++){let ce=j.removed[_e],Pe=T.indexOf(ce);Pe>=0&&(T[Pe]=null,w[Pe].disconnect(ce))}for(let _e=0;_e<j.added.length;_e++){let ce=j.added[_e],Pe=T.indexOf(ce);if(Pe===-1){for(let Le=0;Le<w.length;Le++)if(Le>=T.length){T.push(ce),Pe=Le;break}else if(T[Le]===null){T[Le]=ce,Pe=Le;break}if(Pe===-1)break}let fe=w[Pe];fe&&fe.connect(ce)}}function $(j,_e){_e===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(_e.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let _e=j.near,ce=j.far;p.texture!==null&&(p.depthNear>0&&(_e=p.depthNear),p.depthFar>0&&(ce=p.depthFar)),V.near=L.near=A.near=_e,V.far=L.far=A.far=ce,(D!==V.near||z!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),D=V.near,z=V.far),V.layers.mask=j.layers.mask|6,A.layers.mask=V.layers.mask&-5,L.layers.mask=V.layers.mask&-3;let Pe=j.parent,fe=V.cameras;$(V,Pe);for(let Le=0;Le<fe.length;Le++)$(fe[Le],Pe);V.projectionMatrix.copy(A.projectionMatrix),V.projectionMatrixInverse.copy(A.projectionMatrixInverse),I===null&&j.isPerspectiveCamera&&(I={camera:j,fov:j.fov,zoom:j.zoom}),se(j,V,Pe)};function se(j,_e,ce){ce===null?j.matrix.copy(_e.matrixWorld):(j.matrix.copy(ce.matrixWorld),j.matrix.invert(),j.matrix.multiply(_e.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(_e.projectionMatrix),j.projectionMatrixInverse.copy(_e.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=us*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function(j){return m[j]};let re=null;function de(j,_e){if(h=_e.getViewerPose(c||o),_=_e,h!==null){let ce=h.views;u!==null&&(e.setRenderTargetFramebuffer(v,u.framebuffer),e.setRenderTarget(v));let Pe=!1;ce.length!==V.cameras.length&&(V.cameras.length=0,Pe=!0);for(let De=0;De<ce.length;De++){let ke=ce[De],We=null;if(u!==null)We=u.getViewport(ke);else{let pe=f.getViewSubImage(d,ke);We=pe.viewport,De===0&&(e.setRenderTargetTextures(v,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(v))}let Z=B[De];Z===void 0&&(Z=new Qt,Z.layers.enable(De),Z.viewport=new Pt,B[De]=Z),Z.matrix.fromArray(ke.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(ke.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(We.x,We.y,We.width,We.height),De===0&&(V.matrix.copy(Z.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Pe===!0&&V.cameras.push(Z)}let fe=s.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();let De=f.getDepthInformation(ce[0]);De&&De.isValid&&De.texture&&p.init(De,s.renderState)}if(fe&&fe.includes("camera-access")&&M){e.state.unbindTexture(),f=n.getBinding();for(let De=0;De<ce.length;De++){let ke=ce[De].camera;if(ke){let We=m[ke];We||(We=new sr,m[ke]=We);let Z=f.getCameraImage(ke);We.sourceTexture=Z}}}}for(let ce=0;ce<w.length;ce++){let Pe=T[ce],fe=w[ce];Pe!==null&&fe!==void 0&&fe.update(Pe,_e,c||o)}re&&re(j,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),_=null}let Ge=new _u;Ge.setAnimationLoop(de),this.setAnimationLoop=function(j){re=j},this.dispose=function(){}}},X0=new wt,Au=new tt;Au.set(-1,0,0,0,1,0,0,0,1);function q0(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,cc(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,x,y,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&u(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),M(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,x,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Jt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Jt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let x=e.get(m),y=x.envMap,v=x.envMapRotation;y&&(p.envMap.value=y,p.envMapRotation.value.setFromMatrix4(X0.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Au),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,x){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Jt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function M(p,m){let x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Y0(i,e,t,n){let s={},r={};function o(x,y){let v=y.program;n.uniformBlockBinding(x,v,s[x.id])}function a(x,y){let v=s[x.id];v===void 0&&(_(x),v=l(x),s[x.id]=v,x.addEventListener("dispose",p));let w=y.program;n.updateUBOMapping(x,w);let T=e.render.frame;r[x.id]!==T&&(c(x),r[x.id]=T)}function l(x){let y=i.createBuffer(),v=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,v,w),i.bindBuffer(i.UNIFORM_BUFFER,null),y}function c(x){let y=s[x.id],v=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,g=v.length;T<g;T++){let E=v[T];if(Array.isArray(E))for(let I=0,A=E.length;I<A;I++)h(E[I],T,I,w);else h(E,T,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(x,y,v,w){if(d(x,y,v,w)===!0){let T=x.__offset,g=x.value;if(Array.isArray(g)){let E=0;for(let I=0;I<g.length;I++){let A=g[I],L=M(A,!0);f(A,x.__data,E),E+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,x.__data)}}function f(x,y,v){typeof x=="number"||typeof x=="boolean"?y[v]=x:x.isMatrix3?(y[v]=x.elements[0],y[v+1]=x.elements[1],y[v+2]=x.elements[2],y[v+3]=0,y[v+4]=x.elements[3],y[v+5]=x.elements[4],y[v+6]=x.elements[5],y[v+7]=0,y[v+8]=x.elements[6],y[v+9]=x.elements[7],y[v+10]=x.elements[8],y[v+11]=0):ArrayBuffer.isView(x)?y.set(x.subarray(0,y.length-v),v):x.toArray(y,v)}function d(x,y,v,w){let T=x.value,g=y+"_"+v;if(Array.isArray(T)){w[g]===void 0&&(w[g]=[]);let E=w[g],I=!1;for(let A=0;A<T.length;A++)u(T[A],E,A)===!0&&(I=!0);return I}return u(T,w,g)}function u(x,y,v){if(y[v]===void 0)return typeof x=="number"||typeof x=="boolean"?y[v]=x:ArrayBuffer.isView(x)?y[v]=x.slice():y[v]=x.clone(),!0;{let w=y[v];if(typeof x=="number"||typeof x=="boolean"){if(w!==x)return y[v]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(w.equals(x)===!1)return w.copy(x),!0}}return!1}function _(x){let y=x.uniforms,v=0,w=16;for(let g=0,E=y.length;g<E;g++){let I=Array.isArray(y[g])?y[g]:[y[g]];for(let A=0,L=I.length;A<L;A++){let B=I[A],V=Array.isArray(B.value)?B.value:[B.value],D=Array.isArray(y[g])||Array.isArray(B.value),z=v;for(let q=0,ne=V.length;q<ne;q++){let $=V[q],se=M($,D),re=v%w,de=re%se.boundary,Ge=re+de;v+=de,Ge!==0&&w-Ge<se.storage&&(v+=w-Ge),q===0&&(z=v),v+=se.storage}let Y=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new Y((v-z)/Float32Array.BYTES_PER_ELEMENT),B.__offset=z}}let T=v%w;return T>0&&(v+=w-T),x.__size=v,x.__cache={},this}function M(x,y){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=16,v.storage=48):x.isMatrix4?(v.boundary=16,v.storage=64):x.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(v.boundary=16,v.storage=x.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",x),y===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function p(x){let y=x.target;y.removeEventListener("dispose",p),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(let x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:o,update:a,dispose:m}}var Z0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bn=null;function J0(){return Bn===null&&(Bn=new er(Z0,16,16,pi,Rn),Bn.name="DFG_LUT",Bn.minFilter=tn,Bn.magFilter=tn,Bn.wrapS=Ln,Bn.wrapT=Ln,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}var Xa=class{constructor(e={}){let{canvas:t=Fh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=sn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let M=u,p=new Set([da,ua,ha]),m=new Set([sn,An,Ts,Ni,aa,la]),x=new Uint32Array(4),y=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},w=null,T=null,g=[],E=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,L=!1,B=null,V=null,D=null,z=null;this._outputColorSpace=Dt;let Y=0,q=0,ne=null,$=-1,se=null,re=new Pt,de=new Pt,Ge=null,j=new qe(0),_e=0,ce=t.width,Pe=t.height,fe=1,Le=null,st=null,De=new Pt(0,0,ce,Pe),ke=new Pt(0,0,ce,Pe),We=!1,Z=new oi,pe=new No,ue=!1,Te=!1,xe=new wt,Je=new C,Ne=new Pt,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function rt(){return ne===null?fe:1}let O=n;function ot(b,F){return t.getContext(b,F)}let it,dt,ge,mt,Oe,Ye,R,S,k,he,ie,X,le,J,ee,me,N,P,U,H,te,Q,ve;try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ea}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",Ze,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),O===null){let F="webgl2";if(O=ot(F,b),O===null)throw ot(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ae()}catch(b){throw t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Qe("WebGLRenderer: "+b.message),b}function Ae(){it=new og(O),it.init(),te=new G0(O,it),dt=new Jm(O,it,e,te),ge=new z0(O,it),dt.reversedDepthBuffer&&d&&ge.buffers.depth.setReversed(!0),V=O.createFramebuffer(),D=O.createFramebuffer(),z=O.createFramebuffer(),mt=new cg(O),Oe=new w0,Ye=new k0(O,it,ge,Oe,dt,te,mt),R=new rg(A),S=new uf(O),Q=new Ym(O,S),k=new ag(O,S,mt,Q),he=new ug(O,k,S,Q,mt),P=new hg(O,dt,Ye),ee=new $m(Oe),ie=new T0(A,R,it,dt,Q,ee),X=new q0(A,Oe),le=new R0,J=new N0(it),N=new qm(A,R,ge,he,_,l),me=new H0(A,he,dt),ve=new Y0(O,mt,dt,ge),U=new Zm(O,it,mt),H=new lg(O,it,mt),mt.programs=ie.programs,A.capabilities=dt,A.extensions=it,A.properties=Oe,A.renderLists=le,A.shadowMap=me,A.state=ge,A.info=mt}M!==sn&&(I=new fg(M,t.width,t.height,a,s,r));let oe=new Sc(A,O);this.xr=oe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=it.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=it.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(b){b!==void 0&&(fe=b,this.setSize(ce,Pe,!1))},this.getSize=function(b){return b.set(ce,Pe)},this.setSize=function(b,F,K=!0){if(oe.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=b,Pe=F,t.width=Math.floor(b*fe),t.height=Math.floor(F*fe),K===!0&&(t.style.width=b+"px",t.style.height=F+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(ce*fe,Pe*fe).floor()},this.setDrawingBufferSize=function(b,F,K){ce=b,Pe=F,fe=K,t.width=Math.floor(b*K),t.height=Math.floor(F*K),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(M===sn){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){$e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(re)},this.getViewport=function(b){return b.copy(De)},this.setViewport=function(b,F,K,G){b.isVector4?De.set(b.x,b.y,b.z,b.w):De.set(b,F,K,G),ge.viewport(re.copy(De).multiplyScalar(rt()).round())},this.getScissor=function(b){return b.copy(ke)},this.setScissor=function(b,F,K,G){b.isVector4?ke.set(b.x,b.y,b.z,b.w):ke.set(b,F,K,G),ge.scissor(de.copy(ke).multiplyScalar(rt()).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(b){ge.setScissorTest(We=b)},this.setOpaqueSort=function(b){Le=b},this.setTransparentSort=function(b){st=b},this.getClearColor=function(b){return b.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,K=!0){let G=0;if(b){let W=!1;if(ne!==null){let Me=ne.texture.format;W=p.has(Me)}if(W){let Me=ne.texture.type,Fe=m.has(Me),ye=N.getClearColor(),we=N.getClearAlpha(),Ve=ye.r,Ke=ye.g,ht=ye.b;Fe?(x[0]=Ve,x[1]=Ke,x[2]=ht,x[3]=we,O.clearBufferuiv(O.COLOR,0,x)):(y[0]=Ve,y[1]=Ke,y[2]=ht,y[3]=we,O.clearBufferiv(O.COLOR,0,y))}else G|=O.COLOR_BUFFER_BIT}F&&(G|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),B=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),N.dispose(),le.dispose(),J.dispose(),Ye.dispose(),Oe.dispose(),R.dispose(),he.dispose(),k.dispose(),Q.dispose(),ve.dispose(),ie.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",St),oe.removeEventListener("sessionend",Hi),Mn.stop()};function Be(b){b.preventDefault(),sc("WebGLRenderer: Context Lost."),L=!0}function Ze(){sc("WebGLRenderer: Context Restored."),L=!1;let b=mt.autoReset,F=me.enabled,K=me.autoUpdate,G=me.needsUpdate,W=me.type;Ae(),mt.autoReset=b,me.enabled=F,me.autoUpdate=K,me.needsUpdate=G,me.type=W}function Ee(b){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function _t(b){let F=b.target;F.removeEventListener("dispose",_t),Ct(F)}function Ct(b){hn(b),Oe.remove(b)}function hn(b){let F=Oe.get(b).programs;F!==void 0&&(F.forEach(function(K){ie.releaseProgram(K)}),b.isShaderMaterial&&ie.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,K,G,W,Me){F===null&&(F=et);let Fe=W.isMesh&&W.matrixWorld.determinantAffine()<0,ye=qr(b,F,K,G,W);ge.setMaterial(G,Fe);let we=K.index,Ve=1;if(G.wireframe===!0){if(we=k.getWireframeAttribute(K),we===void 0)return;Ve=2}let Ke=K.drawRange,ht=K.attributes.position,He=Ke.start*Ve,lt=(Ke.start+Ke.count)*Ve;Me!==null&&(He=Math.max(He,Me.start*Ve),lt=Math.min(lt,(Me.start+Me.count)*Ve)),we!==null?(He=Math.max(He,0),lt=Math.min(lt,we.count)):ht!=null&&(He=Math.max(He,0),lt=Math.min(lt,ht.count));let Ut=lt-He;if(Ut<0||Ut===1/0)return;Q.setup(W,G,ye,K,we);let yt,xt=U;if(we!==null&&(yt=S.get(we),xt=H,xt.setIndex(yt)),W.isMesh)G.wireframe===!0?(ge.setLineWidth(G.wireframeLinewidth*rt()),xt.setMode(O.LINES)):xt.setMode(O.TRIANGLES);else if(W.isLine){let Lt=G.linewidth;Lt===void 0&&(Lt=1),ge.setLineWidth(Lt*rt()),W.isLineSegments?xt.setMode(O.LINES):W.isLineLoop?xt.setMode(O.LINE_LOOP):xt.setMode(O.LINE_STRIP)}else W.isPoints?xt.setMode(O.POINTS):W.isSprite&&xt.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(it.get("WEBGL_multi_draw"))xt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Lt=W._multiDrawStarts,ze=W._multiDrawCounts,Xt=W._multiDrawCount,gt=we?S.get(we).bytesPerElement:1,Pn=Oe.get(G).currentProgram.getUniforms();for(let Bt=0;Bt<Xt;Bt++)Pn.setValue(O,"_gl_DrawID",Bt),xt.render(Lt[Bt]/gt,ze[Bt])}else if(W.isInstancedMesh)xt.renderInstances(He,Ut,W.count);else if(K.isInstancedBufferGeometry){let Lt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ze=Math.min(K.instanceCount,Lt);xt.renderInstances(He,Ut,ze)}else xt.render(He,Ut)};function Bi(b,F,K,G){B!==null&&b.isNodeMaterial&&B.setObject(G,b),ue===!0&&ee.setState(b,K,!1),b.transparent===!0&&b.side===xn&&b.forceSinglePass===!1?(b.side=Jt,b.needsUpdate=!0,Qn(b,F,G),b.side=fi,b.needsUpdate=!0,Qn(b,F,G),b.side=xn):Qn(b,F,G)}this.compile=function(b,F,K=null){K===null&&(K=b),B!==null&&B.renderStart(b,F,K),T=J.get(K),T.init(F),E.push(T),K.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),b!==K&&b.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights(),B!==null&&B.updateLights(T.state.lightsArray),Te=this.localClippingEnabled,ue=ee.init(this.clippingPlanes,Te),ue===!0&&ee.setGlobalState(this.clippingPlanes,F),B!==null&&me.render(T.state.shadowsArray,K,F);let G=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Me=W.material;if(Me)if(Array.isArray(Me))for(let Fe=0;Fe<Me.length;Fe++){let ye=Me[Fe];Bi(ye,K,F,W),G.add(ye)}else Bi(Me,K,F,W),G.add(Me)}),T=E.pop(),B!==null&&B.renderEnd(),G},this.compileAsync=function(b,F,K=null){let G=this.compile(b,F,K);return new Promise(W=>{function Me(){if(G.forEach(function(Fe){let we=Oe.get(Fe).currentProgram;(we===void 0||we.isReady())&&G.delete(Fe)}),G.size===0){W(b);return}setTimeout(Me,10)}it.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Wr=null;function ja(b){Wr&&Wr(b)}function St(){Mn.stop()}function Hi(){Mn.start()}let Mn=new _u;Mn.setAnimationLoop(ja),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(b){Wr=b,oe.setAnimationLoop(b),b===null?Mn.stop():Mn.start()},oe.addEventListener("sessionstart",St),oe.addEventListener("sessionend",Hi),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;B!==null&&B.renderStart(b,F);let K=oe.enabled===!0&&oe.isPresenting===!0,G=I!==null&&(ne===null||K)&&I.begin(A,ne);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(F),F=oe.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,F,ne),T=J.get(b,E.length),T.init(F),T.state.textureUnits=Ye.getTextureUnits(),E.push(T),xe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?pe.setFromArrayCamera(F):Z.setFromProjectionMatrix(xe,fn,F.reversedDepth),Te=this.localClippingEnabled,ue=ee.init(this.clippingPlanes,Te),w=le.get(b,g.length),w.init(),g.push(w),this.info.render.frame++,oe.enabled===!0&&oe.isPresenting===!0){let Fe=A.xr.getDepthSensingMesh();Fe!==null&&mi(Fe,F,-1/0,A.sortObjects)}mi(b,F,0,A.sortObjects),w.finish(),B!==null&&B.updateLights(T.state.lightsArray),A.sortObjects===!0&&w.sort(Le,st),je=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,je&&N.addToRenderList(w,b),this.info.autoReset===!0&&this.info.reset(),ue===!0&&ee.beginShadows();let W=T.state.shadowsArray;if(me.render(W,b,F),ue===!0&&ee.endShadows(),(G&&I.hasRenderPass())===!1){let Fe=w.opaque,ye=w.transmissive;if(T.setupLights(),F.isArrayCamera){let we=F.cameras;if(ye.length>0)for(let Ve=0,Ke=we.length;Ve<Ke;Ve++){let ht=we[Ve];Ls(Fe,ye,b,ht)}je&&N.render(b);for(let Ve=0,Ke=we.length;Ve<Ke;Ve++){let ht=we[Ve];gi(w,b,ht,ht.viewport)}}else ye.length>0&&Ls(Fe,ye,b,F),je&&N.render(b),gi(w,b,F)}ne!==null&&q===0&&(Ye.updateMultisampleRenderTarget(ne),Ye.updateRenderTargetMipmap(ne)),G&&I.end(A),b.isScene===!0&&b.onAfterRender(A,b,F),Q.resetDefaultState(),$=-1,se=null,E.pop(),E.length>0?(T=E[E.length-1],Ye.setTextureUnits(T.state.textureUnits),ue===!0&&ee.setGlobalState(A.clippingPlanes,T.state.camera)):T=null,g.pop(),g.length>0?w=g[g.length-1]:w=null,B!==null&&B.renderEnd()};function mi(b,F,K,G){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)K=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){let Fe=F.isArrayCamera?pe:Z;if(!b.frustumCulled||b.intersectsFrustum(Fe)){G&&Ne.setFromMatrixPosition(b.matrixWorld).applyMatrix4(xe);let ye=he.update(b),we=b.material;we.visible&&w.push(b,ye,we,K,Ne.z,null,F)}}else if(b.isMesh||b.isLine||b.isPoints){let Fe=F.isArrayCamera?pe:Z;if(!b.frustumCulled||b.intersectsFrustum(Fe)){let ye=he.update(b),we=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ne.copy(b.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ne.copy(ye.boundingSphere.center)),Ne.applyMatrix4(b.matrixWorld).applyMatrix4(xe)),Array.isArray(we)){let Ve=ye.groups;for(let Ke=0,ht=Ve.length;Ke<ht;Ke++){let He=Ve[Ke],lt=we[He.materialIndex];lt&&lt.visible&&w.push(b,ye,lt,K,Ne.z,He,F)}}else we.visible&&w.push(b,ye,we,K,Ne.z,null,F)}}}let Me=b.children;for(let Fe=0,ye=Me.length;Fe<ye;Fe++)mi(Me[Fe],F,K,G)}function gi(b,F,K,G){let{opaque:W,transmissive:Me,transparent:Fe}=b;T.setupLightsView(K),ue===!0&&ee.setGlobalState(A.clippingPlanes,K),G&&ge.viewport(re.copy(G)),W.length>0&&_i(W,F,K),Me.length>0&&_i(Me,F,K),Fe.length>0&&_i(Fe,F,K),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Ls(b,F,K,G){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){let He=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new an(1,1,{generateMipmaps:!0,type:He?Rn:sn,minFilter:Jn,samples:Math.max(4,dt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ft.workingColorSpace})}let Me=T.state.transmissionRenderTarget[G.id],Fe=G.viewport||re;Me.setSize(Fe.z*A.transmissionResolutionScale,Fe.w*A.transmissionResolutionScale);let ye=A.getRenderTarget(),we=A.getActiveCubeFace(),Ve=A.getActiveMipmapLevel();A.setRenderTarget(Me),A.getClearColor(j),_e=A.getClearAlpha(),_e<1&&A.setClearColor(16777215,.5),A.clear(),je&&N.render(K);let Ke=A.toneMapping;A.toneMapping=On;let ht=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),ue===!0&&ee.setGlobalState(A.clippingPlanes,G),_i(b,K,G),Ye.updateMultisampleRenderTarget(Me),Ye.updateRenderTargetMipmap(Me),it.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let lt=0,Ut=F.length;lt<Ut;lt++){let yt=F[lt],{object:xt,geometry:Lt,material:ze,group:Xt}=yt;if(ze.side===xn&&xt.layers.test(G.layers)){let gt=ze.side;ze.side=Jt,ze.needsUpdate=!0,zi(xt,K,G,Lt,ze,Xt),ze.side=gt,ze.needsUpdate=!0,He=!0}}He===!0&&(Ye.updateMultisampleRenderTarget(Me),Ye.updateRenderTargetMipmap(Me))}A.setRenderTarget(ye,we,Ve),A.setClearColor(j,_e),ht!==void 0&&(G.viewport=ht),A.toneMapping=Ke}function _i(b,F,K){let G=F.isScene===!0?F.overrideMaterial:null;for(let W=0,Me=b.length;W<Me;W++){let Fe=b[W],{object:ye,geometry:we,group:Ve}=Fe,Ke=Fe.material;Ke.allowOverride===!0&&G!==null&&(Ke=G),ye.layers.test(K.layers)&&zi(ye,F,K,we,Ke,Ve)}}function zi(b,F,K,G,W,Me){B!==null&&W.isNodeMaterial&&B.setObject(b,W),b.onBeforeRender(A,F,K,G,W,Me),b.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(A,F,K,G,b,Me),W.transparent===!0&&W.side===xn&&W.forceSinglePass===!1?(W.side=Jt,W.needsUpdate=!0,A.renderBufferDirect(K,F,G,W,b,Me),W.side=fi,W.needsUpdate=!0,A.renderBufferDirect(K,F,G,W,b,Me),W.side=xn):A.renderBufferDirect(K,F,G,W,b,Me),b.onAfterRender(A,F,K,G,W,Me)}function Ds(b){let F=0;for(let K of b)K.texture!==null&&F++;return F}function Qn(b,F,K){F.isScene!==!0&&(F=et);let G=Oe.get(b),W=T.state.lights,Me=T.state.shadowsArray,Fe=W.state.version,ye=ie.getParameters(b,W.state,Me,F,K,T.state.lightProbeGridArray),we=ie.getProgramCacheKey(ye),Ve=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;let Ke=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=R.get(b.envMap||G.environment,Ke),G.envMapRotation=G.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Ve===void 0&&(b.addEventListener("dispose",_t),Ve=new Map,G.programs=Ve,G.programVariants=new Map);let ht=Ve.get(we);if(ht!==void 0){if(G.currentProgram===ht&&G.lightsStateVersion===Fe)return xi(b,ye),ht}else ye.uniforms=ie.getUniforms(b),B!==null&&b.isNodeMaterial&&B.build(b,K,ye),b.onBeforeCompile(ye,A),ht=ie.acquireProgram(ye,we),Ve.set(we,ht),G.uniforms=ye.uniforms;let He=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(He.clippingPlanes=ee.uniform),xi(b,ye),G.needsLights=vi(b),G.lightsStateVersion=Fe,G.needsLights&&(He.ambientLightColor.value=W.state.ambient,He.lightProbe.value=W.state.probe,He.sunLights.value=W.state.sun,He.sunLightShadows.value=W.state.sunShadow,He.directionalLights.value=W.state.directional,He.directionalLightShadows.value=W.state.directionalShadow,He.spotLights.value=W.state.spot,He.spotLightShadows.value=W.state.spotShadow,He.rectAreaLights.value=W.state.rectArea,He.ltc_1.value=W.state.rectAreaLTC1,He.ltc_2.value=W.state.rectAreaLTC2,He.pointLights.value=W.state.point,He.pointLightShadows.value=W.state.pointShadow,He.hemisphereLights.value=W.state.hemi,He.sunShadowMatrix.value=W.state.sunShadowMatrix,He.sunShadowCascade.value=W.state.sunShadowCascade,He.directionalShadowMatrix.value=W.state.directionalShadowMatrix,He.spotLightMatrix.value=W.state.spotLightMatrix,He.spotLightMap.value=W.state.spotLightMap,He.pointShadowMatrix.value=W.state.pointShadowMatrix),G.numLightProbeGrids=Ds(T.state.lightProbeGridArray),G.currentProgram=ht,G.uniformsList=null,ht}function Xr(b,F,K,G,W){let Me=Oe.get(b),Fe=Me.currentProgram.id+","+G+","+W,ye=Me.programVariants.get(Fe);return ye===void 0?(ye=Qn(b,F,K),Me.programVariants.set(Fe,ye)):(Me.currentProgram=ye,Me.uniformsList=null,Me.outputColorSpace=G,Me.toneMapping=W),ye}function ki(b){if(b.uniformsList===null){let F=b.currentProgram.getUniforms();b.uniformsList=ws.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function xi(b,F){let K=Oe.get(b);K.outputColorSpace=F.outputColorSpace,K.batching=F.batching,K.batchingColor=F.batchingColor,K.instancing=F.instancing,K.instancingColor=F.instancingColor,K.instancingMorph=F.instancingMorph,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function qr(b,F,K,G,W){F.isScene!==!0&&(F=et),Ye.resetTextureUnits();let Me=F.fog,Fe=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,ye=ne===null?A.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ft.workingColorSpace,we=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ve=R.get(G.envMap||Fe,we),Ke=G.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ht=!!K.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),He=!!K.morphAttributes.position,lt=!!K.morphAttributes.normal,Ut=!!K.morphAttributes.color,yt=On;G.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(yt=A.toneMapping);let xt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Lt=xt!==void 0?xt.length:0,ze=Oe.get(G),Xt=T.state.lights;if(ue===!0&&(Te===!0||b!==se)){let bt=b===se&&G.id===$;ee.setState(G,b,bt)}let gt=!1,Pn=!1;G.version===ze.__version?ze.needsLights&&ze.lightsStateVersion!==Xt.state.version||W.isBatchedMesh&&ze.batching===!1||!W.isBatchedMesh&&ze.batching===!0||W.isBatchedMesh&&ze.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&ze.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&ze.instancing===!1||!W.isInstancedMesh&&ze.instancing===!0||W.isSkinnedMesh&&ze.skinning===!1||!W.isSkinnedMesh&&ze.skinning===!0||W.isInstancedMesh&&ze.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&ze.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&ze.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&ze.instancingMorph===!1&&W.morphTexture!==null||ze.envMap!==Ve||G.fog===!0&&ze.fog!==Me||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ee.numPlanes||ze.numIntersection!==ee.numIntersection)||ze.vertexAlphas!==Ke||ze.vertexTangents!==ht||ze.morphTargets!==He||ze.morphNormals!==lt||ze.morphColors!==Ut||ze.morphTargetsCount!==Lt||ze.numLightProbeGrids!==Ds(T.state.lightProbeGridArray)?gt=!0:(ze.outputColorSpace!==ye||ze.toneMapping!==yt)&&(Pn=!0):(gt=!0,ze.__version=G.version);let Bt=ze.currentProgram;(gt===!0||Pn===!0)&&(Bt=Pn===!0?Xr(G,F,W,ye,yt):Qn(G,F,W),B&&G.isNodeMaterial&&B.onUpdateProgram(G,Bt,ze));let be=!1,Ie=!1,Xe=!1,Re=Bt.getUniforms(),ut=ze.uniforms;if(ge.useProgram(Bt.program)&&(be=!0,Ie=!0,Xe=!0),G.id!==$&&($=G.id,Ie=!0),be||se!==b){ge.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Re.setValue(O,"projectionMatrix",b.projectionMatrix),Re.setValue(O,"viewMatrix",b.matrixWorldInverse);let Tt=Re.map.cameraPosition;Tt!==void 0&&Tt.setValue(O,Je.setFromMatrixPosition(b.matrixWorld)),dt.logarithmicDepthBuffer&&Re.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Re.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),se!==b&&(se=b,Ie=!0,Xe=!0)}if(ze.needsLights&&(Xt.state.sunShadowMap.length>0&&Re.setValue(O,"sunShadowMap",Xt.state.sunShadowMap,Ye),Xt.state.directionalShadowMap.length>0&&Re.setValue(O,"directionalShadowMap",Xt.state.directionalShadowMap,Ye),Xt.state.spotShadowMap.length>0&&Re.setValue(O,"spotShadowMap",Xt.state.spotShadowMap,Ye),Xt.state.pointShadowMap.length>0&&Re.setValue(O,"pointShadowMap",Xt.state.pointShadowMap,Ye)),W.isSkinnedMesh){Re.setOptional(O,W,"bindMatrix"),Re.setOptional(O,W,"bindMatrixInverse");let bt=W.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),Re.setValue(O,"boneTexture",bt.boneTexture,Ye))}W.isBatchedMesh&&(Re.setOptional(O,W,"batchingTexture"),Re.setValue(O,"batchingTexture",W._matricesTexture,Ye),Re.setOptional(O,W,"batchingIdTexture"),Re.setValue(O,"batchingIdTexture",W._indirectTexture,Ye),Re.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&Re.setValue(O,"batchingColorTexture",W._colorsTexture,Ye));let qt=K.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0)&&P.update(W,K,Bt),(Ie||ze.receiveShadow!==W.receiveShadow)&&(ze.receiveShadow=W.receiveShadow,Re.setValue(O,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(ut.envMapIntensity.value=F.environmentIntensity),ut.dfgLUT!==void 0&&(ut.dfgLUT.value=J0()),Ie){if(Re.setValue(O,"toneMappingExposure",A.toneMappingExposure),ze.needsLights&&Ns(ut,Xe),Me&&G.fog===!0&&X.refreshFogUniforms(ut,Me),X.refreshMaterialUniforms(ut,G,fe,Pe,T.state.transmissionRenderTarget[b.id]),ze.needsLights&&ze.numLightProbeGrids>0){let bt=v,Tt=0;for(let Gt of T.state.lightProbeGridArray)Gt.texture!==null&&(bt.textures[Tt]=Gt.texture,bt.min[Tt]=Gt.boundingBox.min,bt.max[Tt]=Gt.boundingBox.max,bt.resolution[Tt]=Gt.resolution,Tt++);for(let Gt in bt)bt[Gt].length=Tt;ut.probesSH.value=bt.textures,ut.probesMin.value=bt.min,ut.probesMax.value=bt.max,ut.probesResolution.value=bt.resolution}ws.upload(O,ki(ze),ut,Ye)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ws.upload(O,ki(ze),ut,Ye),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Re.setValue(O,"center",W.center),Re.setValue(O,"modelViewMatrix",W.modelViewMatrix),Re.setValue(O,"normalMatrix",W.normalMatrix),Re.setValue(O,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let bt=G.uniformsGroups;for(let Tt=0,Gt=bt.length;Tt<Gt;Tt++){let un=bt[Tt];ve.update(un,Bt),ve.bind(un,Bt)}}return Bt}function Ns(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.sunLights.needsUpdate=F,b.sunLightShadows.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function vi(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(b,F,K){let G=Oe.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Oe.get(b.texture).__webglTexture=F,Oe.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:K,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){let K=Oe.get(b);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,K=0){ne=b,Y=F,q=K;let G=null,W=!1,Me=!1;if(b){let ye=Oe.get(b);if(ye.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(O.FRAMEBUFFER,ye.__webglFramebuffer),re.copy(b.viewport),de.copy(b.scissor),Ge=b.scissorTest,ge.viewport(re),ge.scissor(de),ge.setScissorTest(Ge),$=-1;return}else if(ye.__webglFramebuffer===void 0)Ye.setupRenderTarget(b);else if(ye.__hasExternalTextures)Ye.rebindTextures(b,Oe.get(b.texture).__webglTexture,Oe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ke=b.depthTexture;if(ye.__boundDepthTexture!==Ke){if(Ke!==null&&Oe.has(Ke)&&(b.width!==Ke.image.width||b.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ye.setupDepthRenderbuffer(b)}}let we=b.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(Me=!0);let Ve=Oe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ve[F])?G=Ve[F][K]:G=Ve[F],W=!0):b.samples>0&&Ye.useMultisampledRTT(b)===!1?G=Oe.get(b).__webglMultisampledFramebuffer:Array.isArray(Ve)?G=Ve[K]:G=Ve,re.copy(b.viewport),de.copy(b.scissor),Ge=b.scissorTest}else re.copy(De).multiplyScalar(fe).floor(),de.copy(ke).multiplyScalar(fe).floor(),Ge=We;if(K!==0&&(G=V),ge.bindFramebuffer(O.FRAMEBUFFER,G)&&ge.drawBuffers(b,G),ge.viewport(re),ge.scissor(de),ge.setScissorTest(Ge),W){let ye=Oe.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,ye.__webglTexture,K)}else if(Me){let ye=F;for(let we=0;we<b.textures.length;we++){let Ve=Oe.get(b.textures[we]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+we,Ve.__webglTexture,K,ye)}}else if(b!==null&&K!==0){let ye=Oe.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ye.__webglTexture,K)}$=-1};function Gi(b){let F=Oe.get(b);return(F.__readFormat!==b.format||F.__readType!==b.type)&&(F.__readFormat=b.format,F.__readType=b.type,F.__formatReadable=dt.textureFormatReadable(b.format),F.__typeReadable=dt.textureTypeReadable(b.type)),F}this.readRenderTargetPixels=function(b,F,K,G,W,Me,Fe,ye=0){if(!(b&&b.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Oe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Fe!==void 0&&(we=we[Fe],Array.isArray(we)&&(we=we[0])),we){ge.bindFramebuffer(O.FRAMEBUFFER,we);try{let Ve=b.textures[ye],Ke=Ve.format,ht=Ve.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ye);let He=Gi(Ve);if(He.__formatReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-G&&K>=0&&K<=b.height-W&&O.readPixels(F,K,G,W,te.convert(Ke),te.convert(ht),Me)}finally{let Ve=ne!==null?Oe.get(ne).__webglFramebuffer:null;ge.bindFramebuffer(O.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(b,F,K,G,W,Me,Fe,ye=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Oe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Fe!==void 0&&(we=we[Fe],Array.isArray(we)&&(we=we[0])),we)if(F>=0&&F<=b.width-G&&K>=0&&K<=b.height-W){ge.bindFramebuffer(O.FRAMEBUFFER,we);let Ve=b.textures[ye],Ke=Ve.format,ht=Ve.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ye);let He=Gi(Ve);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let lt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,lt),O.bufferData(O.PIXEL_PACK_BUFFER,Me.byteLength,O.STREAM_READ),O.readPixels(F,K,G,W,te.convert(Ke),te.convert(ht),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ut=ne!==null?Oe.get(ne).__webglFramebuffer:null;ge.bindFramebuffer(O.FRAMEBUFFER,Ut);let yt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Bh(O,yt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,lt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Me),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(lt),O.deleteSync(yt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,K=0){let G=Math.pow(2,-K),W=Math.floor(b.image.width*G),Me=Math.floor(b.image.height*G),Fe=F!==null?F.x:0,ye=F!==null?F.y:0;Ye.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,K,0,0,Fe,ye,W,Me),ge.unbindTexture()},this.copyTextureToTexture=function(b,F,K=null,G=null,W=0,Me=0){let Fe,ye,we,Ve,Ke,ht,He,lt,Ut,yt=b.isCompressedTexture?b.mipmaps[Me]:b.image;if(K!==null)Fe=K.max.x-K.min.x,ye=K.max.y-K.min.y,we=K.isBox3?K.max.z-K.min.z:1,Ve=K.min.x,Ke=K.min.y,ht=K.isBox3?K.min.z:0;else{let Re=Math.pow(2,-W);Fe=Math.floor(yt.width*Re),ye=Math.floor(yt.height*Re),b.isDataArrayTexture?we=yt.depth:b.isData3DTexture?we=Math.floor(yt.depth*Re):we=1,Ve=0,Ke=0,ht=0}G!==null?(He=G.x,lt=G.y,Ut=G.z):(He=0,lt=0,Ut=0);let xt=te.convert(F.format),Lt=te.convert(F.type),ze;F.isData3DTexture?(Ye.setTexture3D(F,0),ze=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Ye.setTexture2DArray(F,0),ze=O.TEXTURE_2D_ARRAY):(Ye.setTexture2D(F,0),ze=O.TEXTURE_2D),ge.activeTexture(O.TEXTURE0),ge.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),ge.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),ge.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);let Xt=ge.getParameter(O.UNPACK_ROW_LENGTH),gt=ge.getParameter(O.UNPACK_IMAGE_HEIGHT),Pn=ge.getParameter(O.UNPACK_SKIP_PIXELS),Bt=ge.getParameter(O.UNPACK_SKIP_ROWS),be=ge.getParameter(O.UNPACK_SKIP_IMAGES);ge.pixelStorei(O.UNPACK_ROW_LENGTH,yt.width),ge.pixelStorei(O.UNPACK_IMAGE_HEIGHT,yt.height),ge.pixelStorei(O.UNPACK_SKIP_PIXELS,Ve),ge.pixelStorei(O.UNPACK_SKIP_ROWS,Ke),ge.pixelStorei(O.UNPACK_SKIP_IMAGES,ht);let Ie=b.isDataArrayTexture||b.isData3DTexture,Xe=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){let Re=Oe.get(b),ut=Oe.get(F),qt=Oe.get(Re.__renderTarget),bt=Oe.get(ut.__renderTarget);ge.bindFramebuffer(O.READ_FRAMEBUFFER,qt.__webglFramebuffer),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Tt=0;Tt<we;Tt++)Ie&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Oe.get(b).__webglTexture,W,ht+Tt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Oe.get(F).__webglTexture,Me,Ut+Tt)),O.blitFramebuffer(Ve,Ke,Ve+Fe,Ke+ye,He,lt,He+Fe,lt+ye,O.DEPTH_BUFFER_BIT,O.NEAREST);ge.bindFramebuffer(O.READ_FRAMEBUFFER,null),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||Oe.has(b)){let Re=Oe.get(b),ut=Oe.get(F);ge.bindFramebuffer(O.READ_FRAMEBUFFER,D),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,z);for(let qt=0;qt<we;qt++)Ie?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.__webglTexture,W,ht+qt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Re.__webglTexture,W),Xe?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ut.__webglTexture,Me,Ut+qt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ut.__webglTexture,Me),W!==0?O.blitFramebuffer(Ve,Ke,Ve+Fe,Ke+ye,He,lt,He+Fe,lt+ye,O.COLOR_BUFFER_BIT,O.NEAREST):Xe?O.copyTexSubImage3D(ze,Me,He,lt,Ut+qt,Ve,Ke,Fe,ye):O.copyTexSubImage2D(ze,Me,He,lt,Ve,Ke,Fe,ye);ge.bindFramebuffer(O.READ_FRAMEBUFFER,null),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Xe?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(ze,Me,He,lt,Ut,Fe,ye,we,xt,Lt,yt.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(ze,Me,He,lt,Ut,Fe,ye,we,xt,yt.data):O.texSubImage3D(ze,Me,He,lt,Ut,Fe,ye,we,xt,Lt,yt):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Me,He,lt,Fe,ye,xt,Lt,yt.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Me,He,lt,yt.width,yt.height,xt,yt.data):O.texSubImage2D(O.TEXTURE_2D,Me,He,lt,Fe,ye,xt,Lt,yt);ge.pixelStorei(O.UNPACK_ROW_LENGTH,Xt),ge.pixelStorei(O.UNPACK_IMAGE_HEIGHT,gt),ge.pixelStorei(O.UNPACK_SKIP_PIXELS,Pn),ge.pixelStorei(O.UNPACK_SKIP_ROWS,Bt),ge.pixelStorei(O.UNPACK_SKIP_IMAGES,be),Me===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&O.generateMipmap(ze),ge.unbindTexture()},this.initRenderTarget=function(b){Oe.get(b).__webglFramebuffer===void 0&&Ye.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ye.setTextureCube(b,0):b.isData3DTexture?Ye.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ye.setTexture2DArray(b,0):Ye.setTexture2D(b,0),ge.unbindTexture()},this.resetState=function(){Y=0,q=0,ne=null,ge.reset(),Q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};var zr=new C;function yn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;zr.copy(e),zr[n]=0,zr.normalize();let c=.5*o/(o+a),h=1-zr.angleTo(i)/l;return Math.sign(zr[t])===1?h*c:a/(o+a)+c+c*(1-h)}var Za=class i extends Ue{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new C,c=new C,h=new C(e,t,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,_=f.length/6,M=new C,p=.5/o;for(let m=0,x=0;m<f.length;m+=3,x+=2)switch(l.fromArray(f,m),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),f[m+0]=h.x*Math.sign(l.x)+c.x*r,f[m+1]=h.y*Math.sign(l.y)+c.y*r,f[m+2]=h.z*Math.sign(l.z)+c.z*r,d[m+0]=c.x,d[m+1]=c.y,d[m+2]=c.z,Math.floor(m/_)){case 0:M.set(1,0,0),u[x+0]=yn(M,c,"z","y",r,n),u[x+1]=1-yn(M,c,"y","z",r,t);break;case 1:M.set(-1,0,0),u[x+0]=1-yn(M,c,"z","y",r,n),u[x+1]=1-yn(M,c,"y","z",r,t);break;case 2:M.set(0,1,0),u[x+0]=1-yn(M,c,"x","z",r,e),u[x+1]=yn(M,c,"z","x",r,n);break;case 3:M.set(0,-1,0),u[x+0]=1-yn(M,c,"x","z",r,e),u[x+1]=1-yn(M,c,"z","x",r,n);break;case 4:M.set(0,0,1),u[x+0]=1-yn(M,c,"x","y",r,e),u[x+1]=1-yn(M,c,"y","x",r,t);break;case 5:M.set(0,0,-1),u[x+0]=yn(M,c,"x","y",r,e),u[x+1]=1-yn(M,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function Cs(i){let e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)}function Ft(i,e){let t=i-21,n=e-15.2,s=Math.exp(-(t*t)/145-n*n/95)*1.08,r=Math.hypot(i-4,e),o=vt.smoothstep(r,34,85),a=(Math.sin(i*.055)*Math.cos(e*.05)*1.45+Math.cos((i+e)*.035)*.85)*o;return s+a}function Ec(i,e,t,n,s){let r=new gs,o=i/2,a=e/2;r.moveTo(-o+n,-a),r.lineTo(o-n,-a),r.quadraticCurveTo(o,-a,o,-a+n),r.lineTo(o,a-n),r.quadraticCurveTo(o,a,o-n,a),r.lineTo(-o+n,a),r.quadraticCurveTo(-o,a,-o,a-n),r.lineTo(-o,-a+n),r.quadraticCurveTo(-o,-a,-o+n,-a);let l=new _r(r,{depth:t,bevelEnabled:!0,bevelThickness:.05,bevelSize:.06,bevelSegments:2});l.rotateX(-Math.PI/2);let c=new ae(l,s);return c.castShadow=!1,c.receiveShadow=!0,c}function Ps(i,e,t){if(!i)return null;let n=new nt({map:i,transparent:!0,alphaTest:.14,roughness:.35,metalness:.12}),s=new ae(new Ht(e,t),n);return s.castShadow=!1,s.receiveShadow=!1,s}function Ru(i){let e=new Et;e.name="AnthriseEnergyCampus";let t=[],n=[],s=be=>(t.push(be),be),r=be=>(n.push(be),be),o=r(new nt({map:i.grassGround,color:10336132,roughness:.94,metalness:0})),a=r(new nt({map:i.limestoneWall,color:15329248,roughness:.86,metalness:.04})),l=r(new nt({map:i.limestoneWall,color:16184300,roughness:.82,metalness:.02})),c=r(new nt({color:3885133,roughness:.56,metalness:.28})),h=r(new nt({color:13949917,roughness:.55,metalness:.25})),f=r(new nt({color:12766417,roughness:.32,metalness:.72})),d=r(new nt({color:2503738,roughness:.38,metalness:.65})),u=r(new ci({color:14676726,roughness:.08,metalness:.05,transparent:!0,opacity:.34,ior:1.48,reflectivity:.7})),_=r(new ci({map:i.solarPanel,roughness:.22,metalness:.38,clearcoat:.65,clearcoatRoughness:.16})),M=r(new nt({map:i.timberDeck,color:14136203,roughness:.8,metalness:.04})),p=r(new nt({map:i.roadAsphalt,color:9279385,roughness:.88,metalness:.05})),m=r(new nt({color:27477,roughness:.44,metalness:.18})),x=r(new nt({color:15725299,roughness:.42,metalness:.22})),y=r(new nt({color:7305853,roughness:.72,metalness:.3})),v=[],w=[],T=[],g=[],E=s(new Ht(190,190,72,72));E.rotateX(-Math.PI/2);let I=E.attributes.position;for(let be=0;be<I.count;be++){let Ie=I.getX(be),Xe=I.getZ(be);I.setY(be,Ft(Ie,Xe))}E.computeVertexNormals();let A=new ae(E,o);A.receiveShadow=!0,e.add(A);let L=new gn([new C(-85,.04,9.6),new C(-23,.04,9.6),new C(-11,.04,10.2),new C(2.5,.04,6.2),new C(14,.04,2.8),new C(26.5,.04,2.2),new C(31.5,.08,6.4),new C(85,.08,12)]),B=(be,Ie,Xe)=>{let Re=[],ut=[],qt=[],bt=new C(0,1,0),Tt=new C;for(let un=0;un<=Xe;un++){let Yr=un/Xe,Vi=be.getPointAt(Yr),ku=be.getTangentAt(Yr).normalize();Tt.crossVectors(ku,bt).normalize();let bc=Ft(Vi.x,Vi.z)+.045;if(Re.push(Vi.x-Tt.x*(Ie*.5),bc,Vi.z-Tt.z*(Ie*.5)),Re.push(Vi.x+Tt.x*(Ie*.5),bc,Vi.z+Tt.z*(Ie*.5)),ut.push(Yr*6,0,Yr*6,1),un<Xe){let Wi=un*2;qt.push(Wi,Wi+1,Wi+2,Wi+1,Wi+3,Wi+2)}}let Gt=new Yt;return Gt.setAttribute("position",new pt(Re,3)),Gt.setAttribute("uv",new pt(ut,2)),Gt.setIndex(qt),Gt.computeVertexNormals(),s(Gt)},V=new ae(B(L,3.3,180),p);V.receiveShadow=!0,e.add(V);let D=s(new Ue(.65,.015,.12)),z=r(new nn({color:16777215,transparent:!0,opacity:.34})),Y=26,q=new Zt(D,z,Y),ne=new It;for(let be=0;be<Y;be++){let Ie=(be+.5)/Y,Xe=L.getPointAt(Ie),Re=L.getTangentAt(Ie);ne.position.set(Xe.x,Ft(Xe.x,Xe.z)+.06,Xe.z),ne.rotation.set(0,Math.atan2(-Re.z,Re.x),0),ne.scale.setScalar(1),ne.updateMatrix(),q.setMatrixAt(be,ne.matrix)}q.instanceMatrix.needsUpdate=!0,e.add(q);let $=new gn([new C(30.5,0,7.2),new C(28.5,0,11.2),new C(25.2,0,14.2)]),se=r(new nt({color:13157044,roughness:.92,metalness:.02})),re=new ae(B($,1.35,22),se);re.receiveShadow=!0,e.add(re);let de=new Et;de.position.set(-11.5,0,2),e.add(de);let Ge=Ec(17.4,12.6,.24,.7,a);Ge.position.set(0,0,.2),de.add(Ge),t.push(Ge.geometry);let j=s(new Ue(5.8,.08,3.6)),_e=new ae(j,p);_e.position.set(-4.6,.23,6.2),_e.receiveShadow=!0,de.add(_e);for(let be=0;be<5;be++){let Ie=s(new Ue(.9,.05,.55)),Xe=new ae(Ie,a);Xe.position.set(2.2+be*1.15,.26,4.4),Xe.receiveShadow=!0,de.add(Xe)}let ce=new Et;ce.position.set(0,.26,-.3),de.add(ce);let Pe=new ae(s(new Ue(5.2,3.5,5.4)),l);Pe.position.set(-3.4,1.75,0),Pe.castShadow=!0,Pe.receiveShadow=!0,ce.add(Pe);let fe=new ae(s(new Ue(7.2,.14,5.2)),M);fe.position.set(2.8,.07,0),fe.receiveShadow=!0,ce.add(fe);let Le=new ae(s(new Ue(7.3,3.4,.26)),l);Le.position.set(2.8,1.7,-2.47),Le.castShadow=!0,Le.receiveShadow=!0,ce.add(Le);let st=new ae(s(new Ue(.26,3.4,5.2)),l);st.position.set(6.32,1.7,0),st.castShadow=!0,st.receiveShadow=!0,ce.add(st);let De=new ae(s(new Ue(7.3,.42,.34)),c);De.position.set(2.8,3.22,2.43),De.castShadow=!0,ce.add(De),[-.75,2.8,6.2].forEach(be=>{let Ie=new ae(s(new Ue(.11,3.1,.14)),d);Ie.position.set(be,1.55,2.44),ce.add(Ie)});let ke=new ae(s(new Ht(3.3,2.9)),u);ke.position.set(4.5,1.6,2.44),ce.add(ke);let We=new ae(s(new Ue(1.45,.4,.32)),x);We.position.set(2.6,2.75,-2.18),ce.add(We);let Z=new ae(s(new Ue(1.25,.05,.06)),d);Z.position.set(2.6,2.6,-2.02),ce.add(Z);let pe=r(new nt({color:14279140,roughness:.28,metalness:.45})),ue=new ae(s(new Ue(.95,2.05,.85)),pe);ue.position.set(-.05,1.08,-1.75),ue.castShadow=!0,ce.add(ue);let Te=new ae(s(new Ue(3.2,.03,2.2)),r(new nt({color:13227215,roughness:.95})));Te.position.set(2.9,.15,.2),ce.add(Te);let xe=r(new nt({color:5401191,roughness:.86})),Je=new ae(s(new Ue(2.3,.52,.95)),xe);Je.position.set(2.9,.4,-1.05),ce.add(Je);let Ne=new ae(s(new Ue(2.3,.55,.25)),xe);Ne.position.set(2.9,.78,-1.4),ce.add(Ne);let et=new ae(s(new Ue(1.15,.34,.65)),M);et.position.set(2.9,.32,.25),ce.add(et);let je=new ae(s(new Ue(.48,.5,1.75)),M);je.position.set(5.9,.38,.1),ce.add(je);let rt=r(new nt({color:1977395,emissive:6797526,emissiveIntensity:.12,roughness:.25}));v.push(rt);let O=new ae(s(new Ue(.08,.9,1.48)),rt);O.position.set(6.08,1.45,.1),ce.add(O);let ot=r(new nt({color:16774108,emissive:16759388,emissiveIntensity:.25,roughness:.35}));v.push(ot);let it=new ae(s(new Rt(.18,.42,.28,18)),ot);it.position.set(2.9,2.95,.2),ce.add(it);let dt=new _n(16758886,0,12,1.6);dt.position.set(2.9,2.65,.2),ce.add(dt),g.push({light:dt,maxIntensity:6.5});let ge=new Et;ge.position.set(.3,3.68,0),ce.add(ge);let mt=new ae(s(new Ue(13.2,.28,6.4)),c);mt.rotation.x=.22,mt.position.set(0,.55,.1),mt.castShadow=!0,mt.receiveShadow=!0,ge.add(mt);for(let be=0;be<2;be++)for(let Ie=0;Ie<4;Ie++){let Xe=new ae(s(new Ue(2.55,.08,1.9)),f),Re=new ae(s(new Ht(2.45,1.8)),_);Re.rotation.x=-Math.PI/2,Re.position.y=.045;let ut=new Et;ut.add(Xe,Re),ut.rotation.x=.22,ut.position.set(-4.2+Ie*2.8,.72+(be===0?.26:-.22),be===0?-1.05:1.15),ge.add(ut)}let Oe=new ae(s(new Ue(1.1,1.35,.32)),x);Oe.position.set(-4.3,2.05,2.86),Oe.castShadow=!0,ce.add(Oe);let Ye=new ae(s(new Ue(.45,.24,.04)),m);Ye.position.set(-4.3,2.32,3.03),ce.add(Ye);let R=Ps(i.productTextures.get("/assets/images/stage-inverter.png"),1.02,1.25);R&&(R.position.set(-4.3,2.05,3.04),ce.add(R),n.push(R.material),t.push(R.geometry));let S=new ae(s(new Ue(1.35,1.55,.56)),x);S.position.set(-2.75,.85,2.98),S.castShadow=!0,ce.add(S);let k=new ae(s(new Ue(1.42,.14,.62)),d);k.position.set(-2.75,.07,2.98),ce.add(k);let he=Ps(i.productTextures.get("/assets/images/stage-battery.png"),1.25,1.48);he&&(he.position.set(-2.75,.88,3.28),ce.add(he),n.push(he.material),t.push(he.geometry));let ie=new ae(s(new Rt(.14,.19,6.6,12)),y);ie.position.set(-9.6,3.3,-.8),ie.castShadow=!0,ce.add(ie);let X=new ae(s(new Ue(.16,.14,1.65)),d);X.position.set(-9.6,6.1,-.8),ce.add(X);let le=new ae(s(new Ue(.18,.85,.72)),x);le.position.set(-6.08,1.85,-.8),ce.add(le);let J=new ae(s(new Ue(.2,1.05,.92)),d);J.position.set(-6.08,1.85,.45),ce.add(J);let ee=new ae(s(new Rt(.08,.11,1.55,10)),d);ee.position.set(7.1,1.02,4.4),ee.castShadow=!0,de.add(ee);let me=r(new nt({color:16708824,emissive:16762472,emissiveIntensity:.04,roughness:.25}));w.push(me);let N=new ae(s(new Rt(.24,.19,.28,14)),me);N.position.set(7.1,1.84,4.4),de.add(N);let P=new ae(s(new Rt(.25,.25,.04,14)),_);P.position.set(7.1,2,4.4),de.add(P);let U=new _n(16763768,0,8,1.8);U.position.set(7.1,1.75,4.4),de.add(U),g.push({light:U,maxIntensity:3.4});let H=new Et;H.position.set(19,0,-7),e.add(H);let te=Ec(22.4,16.5,.26,.85,a);te.position.set(0,0,.4),H.add(te),t.push(te.geometry);let Q=new Et;Q.position.set(.8,.26,-1.6),H.add(Q);let ve=new ae(s(new Ue(9.6,5.2,8.2)),h);ve.position.set(-3.2,2.6,0),ve.castShadow=!0,ve.receiveShadow=!0,Q.add(ve);let Ae=r(new nt({color:14936038,emissive:16764040,emissiveIntensity:.04,roughness:.72}));v.push(Ae);let oe=new ae(s(new Ue(7,4.2,7)),Ae);oe.position.set(4.8,2.2,0),Q.add(oe);let Be=new ae(s(new Ue(7.4,4.5,7.6)),u);Be.position.set(4.8,2.35,0),Q.add(Be),[.2,2.35,4.65].forEach(be=>{let Ie=new ae(s(new Ue(7.7,.22,7.9)),c);Ie.position.set(4.8,be,0),Ie.castShadow=!0,Q.add(Ie)}),[1.2,3.6,6,8.4].forEach(be=>{let Ie=new ae(s(new Ue(.16,4.6,.18)),d);Ie.position.set(be,2.3,3.84),Q.add(Ie)});let Ze=new _n(16763775,0,14,1.5);Ze.position.set(4.8,3,4.5),Q.add(Ze),g.push({light:Ze,maxIntensity:5.5}),[-4.6,-2.1].forEach(be=>{let Ie=new ae(s(new Ue(1.75,1,1.5)),f);Ie.position.set(be+8.5,5.25,-1.8),Ie.castShadow=!0,Q.add(Ie);let Xe=new ae(s(new Rt(.48,.48,.14,16)),d);Xe.position.set(be+8.5,5.8,-1.8),Q.add(Xe)});for(let be=0;be<2;be++)for(let Ie=0;Ie<5;Ie++){let Xe=new ae(s(new Ue(2.55,.09,2.15)),f),Re=new ae(s(new Ht(2.45,2.05)),_);Re.rotation.x=-Math.PI/2,Re.position.y=.05;let ut=new Et;ut.add(Xe,Re),ut.rotation.x=.24,ut.position.set(-6+Ie*2.8,5.55,-2+be*2.8),Q.add(ut)}[-6.8,-5.3].forEach(be=>{let Ie=new ae(s(new Ue(1.22,2.35,1.05)),x);Ie.position.set(be,1.44,3.55),Ie.castShadow=!0,H.add(Ie);let Xe=new ae(s(new Ue(1.24,.14,1.07)),m);Xe.position.set(be,2.48,3.55),H.add(Xe);let Re=Ps(i.productTextures.get("/assets/images/products/series_horizon.png"),1.15,2.1);Re&&(Re.position.set(be,1.44,4.1),H.add(Re),n.push(Re.material),t.push(Re.geometry))});let Ee=new ae(s(new Ue(1.55,.55,.85)),d);Ee.position.set(-3.4,.52,3.55),H.add(Ee);let _t=new ae(s(new Ue(1.32,1.42,.52)),x);_t.position.set(-3.4,1.5,3.55),_t.castShadow=!0,H.add(_t);let Ct=Ps(i.productTextures.get("/assets/images/products/hybrid50.png"),1.24,1.32);Ct&&(Ct.position.set(-3.4,1.5,3.84),H.add(Ct),n.push(Ct.material),t.push(Ct.geometry));let hn=new ae(s(new Ue(1.45,2.05,.95)),c);hn.position.set(-1.3,1.28,3.55),hn.castShadow=!0,H.add(hn);let Bi=new ae(s(new Rt(.16,.22,7.2,12)),y);Bi.position.set(-10.5,3.6,-4.5),Bi.castShadow=!0,H.add(Bi),[[-1.2,10],[7.2,8.6]].forEach(([be,Ie])=>{let Xe=new ae(s(new Rt(.09,.13,4.4,10)),d);Xe.position.set(be,2.2,Ie),Xe.castShadow=!0,H.add(Xe);let Re=new ae(s(new Ue(1.35,.14,.46)),f);Re.position.set(be,4.4,Ie-.32),H.add(Re);let ut=new ae(s(new Ht(1.28,.42)),_);ut.rotation.x=-Math.PI/2,ut.position.set(be,4.48,Ie-.32),H.add(ut);let qt=r(new nt({color:16777215,emissive:16770216,emissiveIntensity:.05,roughness:.2}));w.push(qt);let bt=new ae(s(new Ue(.88,.06,.32)),qt);bt.position.set(be,4.31,Ie-.32),H.add(bt);let Tt=new _n(16768944,0,13,1.7);Tt.position.set(be,4,Ie-.3),H.add(Tt),g.push({light:Tt,maxIntensity:5.5});let Gt=r(new nn({color:16769436,transparent:!0,opacity:0,depthWrite:!1}));T.push(Gt);let un=new ae(s(new ps(2.6,24)),Gt);un.rotation.x=-Math.PI/2,un.position.set(be,.08,Ie-.5),H.add(un)});let ja=Ft(21,15.2),St=new Et;St.position.set(21,ja,15.2),e.add(St);let Hi=Ec(10.6,6.8,.28,.45,M);Hi.position.set(.2,.02,0),St.add(Hi),t.push(Hi.geometry);let Mn=new ae(s(new Ue(5.2,2.75,.24)),M);Mn.position.set(1.2,1.68,-1.65),Mn.castShadow=!0,St.add(Mn);let mi=new ae(s(new Ue(.24,2.75,3.2)),c);mi.position.set(3.7,1.68,-.15),mi.castShadow=!0,St.add(mi);let gi=new ae(s(new Ue(6.2,.2,4.2)),c);gi.rotation.x=.14,gi.position.set(1.2,3.22,-.1),gi.castShadow=!0,St.add(gi),[-1.3,3.6].forEach(be=>{let Ie=new ae(s(new Rt(.08,.08,2.75,8)),d);Ie.position.set(be,1.68,1.35),St.add(Ie)});let Ls=new ae(s(new Ue(2.1,.72,.85)),M);Ls.position.set(1.6,.68,-.8),St.add(Ls);let _i=r(new nt({color:1451562,emissive:6478268,emissiveIntensity:.35,roughness:.25}));v.push(_i);let zi=new ae(s(new Ue(.54,.36,.04)),_i);zi.position.set(1.4,1.24,-.88),zi.rotation.x=-.15,St.add(zi);let Ds=new ae(s(new Ue(.68,.56,.48)),x);Ds.position.set(2.9,.6,-.8),St.add(Ds);let Qn=r(new nt({color:16773332,emissive:16758614,emissiveIntensity:.1,roughness:.28}));v.push(Qn);let Xr=new ae(s(new Rt(.14,.16,.28,12)),Qn);Xr.position.set(.8,2.6,.6),St.add(Xr);let ki=new _n(16760422,0,10,1.7);ki.position.set(.8,2.45,.6),St.add(ki),g.push({light:ki,maxIntensity:4.8});let xi=new Et;xi.position.set(-5.2,.1,-.7),St.add(xi),[-1,1].forEach(be=>{let Ie=new ae(s(new Rt(.06,.07,1.15,8)),d);Ie.position.set(be,.55,.65);let Xe=new ae(s(new Rt(.06,.07,2.15,8)),d);Xe.position.set(be,1.05,-.65),xi.add(Ie,Xe)});for(let be=0;be<2;be++){let Ie=new ae(s(new Ue(1.75,.08,2.35)),f),Xe=new ae(s(new Ht(1.65,2.25)),_);Xe.rotation.x=-Math.PI/2,Xe.position.y=.05;let Re=new Et;Re.add(Ie,Xe),Re.rotation.x=.56,Re.position.set(be===0?-.95:.95,1.48,0),xi.add(Re)}let qr=new ae(s(new Ue(3.8,.22,1.15)),c);qr.position.set(-.9,.36,1.65),St.add(qr);let Ns=new ae(s(new Ue(1.02,.78,.65)),x);Ns.position.set(-2.1,.86,1.65),Ns.castShadow=!0,St.add(Ns);let vi=Ps(i.productTextures.get("/assets/images/products/series_seed24.png"),.94,.72);vi&&(vi.position.set(-2.1,.86,2),St.add(vi),n.push(vi.material),t.push(vi.geometry));let Gi=new ae(s(new Ue(.95,.72,.62)),d);Gi.position.set(.55,.84,2.05),Gi.castShadow=!0,St.add(Gi);let b=Ps(i.productTextures.get("/assets/images/products/origAEV1000.png"),.9,.68);b&&(b.position.set(.55,.84,2.38),St.add(b),n.push(b.material),t.push(b.geometry));let F=new ae(s(new Rt(.09,.14,4.35,10)),d);F.position.set(5.8,2.15,1.3),F.castShadow=!0,St.add(F);let K=new ae(s(new Ue(.32,.56,.24)),f);K.position.set(5.8,3.15,1.44),St.add(K);let G=new ae(s(new Ue(1.15,.06,.88)),f);G.rotation.x=.42,G.position.set(5.8,4.5,1.3),St.add(G);let W=new ae(s(new Ht(1.08,.8)),_);W.rotation.x=-Math.PI/2+.42,W.position.set(5.8,4.54,1.32),St.add(W);let Me=new ae(s(new Ue(1.25,.1,.2)),d);Me.position.set(5.2,3.92,1.3),St.add(Me);let Fe=r(new nt({color:16775398,emissive:16765306,emissiveIntensity:.06,roughness:.2}));w.push(Fe);let ye=new ae(s(new Ue(.64,.09,.34)),Fe);ye.position.set(4.65,3.88,1.3),St.add(ye);let we=new _n(16766856,0,14,1.6);we.position.set(4.65,3.65,1.3),St.add(we),g.push({light:we,maxIntensity:6.2});let Ve=r(new nn({color:16767370,transparent:!0,opacity:0,depthWrite:!1}));T.push(Ve);let Ke=new ae(s(new ps(2.5,24)),Ve);Ke.rotation.x=-Math.PI/2,Ke.position.set(4.65,.05,1.3),St.add(Ke);let ht=s(new Rt(.11,.16,1.15,7));ht.translate(0,.58,0);let He=r(new nt({color:7297607,roughness:.9})),lt=s(new li(.95,1));lt.scale(1,1.35,1),lt.translate(0,1.85,0);let Ut=r(new nt({color:6065005,roughness:.85})),yt=[[-22.5,-6.5,1.05],[-21,5.2,.85],[-16,-7.2,1.15],[-2.5,-5.8,1.1],[-1.2,.2,.9],[3.8,-9.5,1.25],[5.2,2.2,.95],[7.2,-16.5,1.15],[14.2,-16.8,1.2],[29.5,-14.8,1.1],[32.4,-7.2,1.15],[33.8,.5,1],[10.2,13.8,1.1],[11.4,21.2,1.25],[16.2,22.8,.95],[27.4,21.8,1.15],[31.8,17.5,1.05],[-8.5,16.2,1.1],[-18.8,15,1.2],[-26.5,6.2,1.25],[-25.5,-13,1.3],[22.5,-18.5,1.18]],xt=new Zt(ht,He,yt.length),Lt=new Zt(lt,Ut,yt.length);xt.castShadow=!0,Lt.castShadow=!0,yt.forEach(([be,Ie,Xe],Re)=>{let ut=Ft(be,Ie);ne.position.set(be,ut,Ie),ne.rotation.set(0,Cs(Re)*Math.PI*2,0),ne.scale.setScalar(Xe),ne.updateMatrix(),xt.setMatrixAt(Re,ne.matrix),Lt.setMatrixAt(Re,ne.matrix),Lt.setColorAt(Re,new qe().setHSL(.39+(Cs(Re+5)-.5)*.04,.26,.42+Cs(Re+12)*.08))}),xt.instanceMatrix.needsUpdate=!0,Lt.instanceMatrix.needsUpdate=!0,Lt.instanceColor&&(Lt.instanceColor.needsUpdate=!0);let ze=s(new ar(.55,0)),Xt=r(new nt({color:11449261,roughness:.92})),gt=[[13.8,13,.9],[14.9,17.2,.65],[17.6,20.6,1.1],[24.2,20,.85],[28.5,18.8,1.05],[29.5,12.6,.72],[12.2,10.6,.8],[8.6,15.8,1.15]],Pn=new Zt(ze,Xt,gt.length);gt.forEach(([be,Ie,Xe],Re)=>{ne.position.set(be,Ft(be,Ie)+.15,Ie),ne.rotation.set(Cs(Re)*.6,Cs(Re+9)*Math.PI,Cs(Re+17)*.5),ne.scale.set(Xe*1.25,Xe*.72,Xe),ne.updateMatrix(),Pn.setMatrixAt(Re,ne.matrix)}),Pn.instanceMatrix.needsUpdate=!0;let Bt=be=>{let Ie=vt.clamp(be,0,1);v.forEach((Xe,Re)=>{let ut=Re===2?.35:.12;Xe.emissiveIntensity=vt.lerp(ut,1.35,Ie)}),w.forEach(Xe=>{Xe.emissiveIntensity=vt.lerp(.05,1.9,Ie)}),T.forEach(Xe=>{Xe.opacity=vt.lerp(0,.22,Ie)}),g.forEach(Xe=>{Xe.light.intensity=Xe.maxIntensity*Ie})};return Bt(0),{root:e,terrainHeightAt:Ft,setNightFactor:Bt,dispose:()=>{t.forEach(be=>be.dispose()),n.forEach(be=>be.dispose())}}}function Cu(i,e){let t=new Et;t.name="ArchitecturalDetailLayer",i.add(t);let n=[],s=[],r=[],o=P=>(n.push(P),P),a=P=>(s.push(P),P),l=(P,U=.75,H=0)=>a(new nt({color:P,roughness:U,metalness:H})),c=l(14210505,.88),h=l(2505270,.36,.4),f=l(9398085,.85),d=l(12500917,.9),u=a(new ci({color:7312540,roughness:.18,metalness:.25,transparent:!0,opacity:.64,envMapIntensity:1.2})),_=l(15921640,.64),M=l(2107429,.54,.25),p=l(6837061,.95),m=a(new nt({color:16772547,emissive:16759139,emissiveIntensity:.12,roughness:.6})),x=o(new Ue(1,1,1));function y(P,U,H,te,Q,ve,Ae,oe,Be=!1){let Ze=new ae(Be?o(new Za(Q,ve,Ae,2,Math.min(Q,ve,Ae)*.12)):x,oe);return Be||Ze.scale.set(Q,ve,Ae),Ze.position.set(U,H,te),Ze.castShadow=!0,Ze.receiveShadow=!0,P.add(Ze),Ze}function v(P,U,H,te,Q){let ve=H.clone().sub(U),Ae=new ae(o(new Rt(te*.74,te,ve.length(),7)),Q);return Ae.position.copy(U).add(H).multiplyScalar(.5),Ae.quaternion.setFromUnitVectors(new C(0,1,0),ve.normalize()),Ae.castShadow=!0,P.add(Ae),Ae}function w(P,U,H,te){let Q=new gn(U),ve=new ae(o(new Ci(Q,48,H,6,!1)),te);return P.add(ve),ve}let g=new Pi().load("/assets/brand/anthrise-official.png");g.colorSpace=Dt,r.push(g);let E=a(new nt({map:g,color:16777215,roughness:.65,metalness:0})),I=new Et;I.position.set(.8,Ft(.8,-12.8)+.1,-12.8),I.name="AnthriseConceptOffice",t.add(I),y(I,0,.02,0,11,.22,8,d),y(I,0,4.25,0,9.6,8.2,5.8,c),y(I,0,4.3,3.02,8.9,7.5,.1,u);for(let P=0;P<4;P++){let U=.6+P*2;y(I,0,U,3.13,9.7,.14,.3,h);for(let H=0;H<7;H++)y(I,-4.4+H*1.47,U+.92,3.12,.055,1.84,.16,h);for(let H=0;H<5;H++)y(I,-3.5+H*1.6,U+.4,1.95,.95,.05,.5,f),y(I,-3.5+H*1.6,U+.7,2.1,.35,.35,.1,M)}y(I,-3.4,1,3.15,2.2,2,.08,u);for(let P of[-3.9,-2.9])y(I,P,.95,3.25,.04,.5,.05,h);y(I,-2.9,2.25,3.65,3.8,.12,1.5,h),y(I,2.2,6.8,3.18,4.1,2.1,.15,_);let A=new ae(o(new Ht(3.55,.68)),E);A.position.set(2.2,7.05,3.27),I.add(A);let L=document.createElement("canvas");L.width=768,L.height=100;let B=L.getContext("2d");B.clearRect(0,0,768,100),B.fillStyle="#174e40",B.font="500 49px sans-serif",B.textAlign="center",B.fillText("T E C H N O L O G Y",384,66);let V=new mn(L);V.colorSpace=Dt,r.push(V);let D=new ae(o(new Ht(3.1,.4)),a(new nt({map:V,transparent:!0,roughness:.8})));D.position.set(2.2,6.42,3.28),I.add(D),y(I,0,8.48,0,10.1,.24,6.3,h);for(let P=0;P<4;P++)y(I,-3.3+P*2.1,8.7,-.8,1.7,.08,2.5,a(new nt({map:e.solarPanel,roughness:.25,metalness:.3})));let z=new Et;z.position.set(-11.5,.26,1.7),t.add(z);for(let P=.4;P<3.5;P+=.52)y(z,-3.4,P,2.715,5.12,.022,.025,d);for(let P=-5.5;P<-1;P+=1.1)y(z,P,1.75,2.72,.022,3.3,.025,d);for(let P of[-.76,2.8,6.2])y(z,P,1.55,2.5,.045,3.02,.04,_),y(z,P,1.1,2.55,.04,.38,.04,h);for(let P=0;P<22;P++)y(z,-5.8+P*.55,3.75,2.76,.2,.09,.35,f);w(z,[new C(-6,3.65,2.8),new C(-6,2.8,2.8),new C(-6,.2,2.8)],.065,h);let Y=y(z,-.05,1.08,-1.29,.91,2,.03,_);y(z,.29,1.2,-1.25,.04,.65,.07,h),y(z,-.05,1.4,-1.24,.85,.018,.03,h);let q=y(z,5.15,.65,-1.6,1.25,1.15,.8,f);y(z,5.15,1.25,-1.6,1.35,.08,.9,c);for(let P=0;P<2;P++){let U=new ae(o(new Rt(.18,.18,.02,24)),M);U.position.set(4.85+P*.6,1.31,-1.6),z.add(U)}y(z,5.15,.7,-1.17,.85,.62,.04,M);let ne=new Et;ne.position.set(18.5,.25,-7.8),t.add(ne);for(let P=0;P<22;P++)y(ne,-6.5+P*.6,2.7,4.83,.025,5.3,.03,d);for(let P=1;P<5;P++)y(ne,0,P,4.84,13.2,.022,.025,d);y(ne,3.6,1.6,4.9,3.3,3.1,.14,h);for(let P=0;P<10;P++)y(ne,3.6,.35+P*.27,5,3.1,.16,.04,d);y(ne,3.6,3.25,5.1,3.9,.12,.7,h);for(let P of[-4.2,-1.3,1.7]){y(ne,P,5.65,1,1.5,.45,1.2,d);for(let U=0;U<9;U++)y(ne,P-.6+U*.15,5.91,1,.04,.025,1,h)}let $=new gn([new C(-85,.04,9.6),new C(-23,.04,9.6),new C(-11,.04,10.2),new C(2.5,.04,6.2),new C(14,.04,2.8),new C(26.5,.04,2.2),new C(31.5,.08,6.4),new C(85,.08,12)]),se=l(13158073,.9),re=a(new nn({color:15131862}));for(let P of[-1,1]){let U=[];for(let H=0;H<=140;H++){let te=H/140,Q=$.getPointAt(te),ve=$.getTangentAt(te),Ae=new C(-ve.z,0,ve.x).normalize();Q.addScaledVector(Ae,P*1.73),Q.y=Ft(Q.x,Q.z)+.12,U.push(Q)}w(t,U,.065,se)}for(let P=0;P<7;P++)y(t,-1.1+P*.47,Ft(0,6.8)+.07,6.8,.27,.015,2.45,re);let de=l(3753024,.65,.4),Ge=l(10272181,.2,.15),j=[[-24,1],[-24,-10],[-6,-18],[13,-19],[29,-18]];for(let[P,U]of j){let H=Ft(P,U);v(t,new C(P,H,U),new C(P,H+7.4,U),.105,f),y(t,P,H+6.9,U,2.3,.13,.18,f);for(let te of[-.87,0,.87]){v(t,new C(P+te,H+6.95,U),new C(P+te,H+7.23,U),.06,Ge);let Q=new ae(o(new xr(.1,.023,5,12)),Ge);Q.rotation.x=Math.PI/2,Q.position.set(P+te,H+7.15,U),t.add(Q)}}for(let P=0;P<j.length-1;P++)for(let U of[-.87,0,.87]){let H=j[P],te=j[P+1],Q=Ft(...H)+7.24,ve=Ft(...te)+7.24;w(t,[new C(H[0]+U,Q,H[1]),new C((H[0]+te[0])/2+U,(Q+ve)/2-.5,(H[1]+te[1])/2),new C(te[0]+U,ve,te[1])],.016,de)}let _e=[[-22.5,-6.5,1.05],[-21,5.2,.85],[-16,-7.2,1.15],[-2.5,-5.8,1.1],[-1.2,.2,.9],[5.2,2.2,.95],[14.2,-16.8,1.2],[29.5,-14.8,1.1],[32.4,-7.2,1.15],[33.8,.5,1],[10.2,13.8,1.1],[11.4,21.2,1.25],[16.2,22.8,.95],[27.4,21.8,1.15],[31.8,17.5,1.05],[-8.5,16.2,1.1],[-18.8,15,1.2],[-26.5,6.2,1.25],[-25.5,-13,1.3],[22.5,-18.5,1.18]],ce=document.createElement("canvas");ce.width=64,ce.height=128;let Pe=ce.getContext("2d");Pe.fillStyle="#ffffff",Pe.beginPath(),Pe.ellipse(32,61,25,55,-.12,0,Math.PI*2),Pe.fill(),Pe.strokeStyle="#c0d3ad",Pe.lineWidth=2,Pe.beginPath(),Pe.moveTo(31,113),Pe.lineTo(33,8),Pe.stroke();let fe=new mn(ce);fe.colorSpace=Dt,r.push(fe);let Le=a(new nt({map:fe,transparent:!1,alphaTest:.5,side:xn,color:6523707,roughness:.9})),st=window.innerWidth<=768?130:240,De=new Zt(o(new Ht(.28,.49)),Le,_e.length*st);De.castShadow=!1;let ke=new It,We=0,Z=P=>{let U=Math.sin(P*78.233+11.73)*43758.5453;return U-Math.floor(U)};_e.forEach(([P,U,H],te)=>{let Q=Ft(P,U),ve=3.3*H;v(t,new C(P,Q,U),new C(P+.12,Q+ve*.8,U),.115*H,p);for(let Ae=0;Ae<7;Ae++){let oe=Ae*2.399+te,Be=new C(P+Math.sin(oe)*.9*H,Q+ve*(.58+Z(te*13+Ae)*.24),U+Math.cos(oe)*.9*H);v(t,new C(P,Q+ve*.42,U),Be,.045*H,p)}for(let Ae=0;Ae<st;Ae++){let oe=te*997+Ae,Be=Z(oe+1)*Math.PI*2,Ze=Math.sqrt(Z(oe+3))*1.38*H;ke.position.set(P+Math.cos(Be)*Ze,Q+ve*.64+(Z(oe+7)-.35)*1.8*H,U+Math.sin(Be)*Ze),ke.rotation.set(Z(oe+9)*Math.PI,Z(oe+10)*Math.PI,Z(oe+11)*Math.PI),ke.scale.setScalar((.7+Z(oe+12)*1.2)*H),ke.updateMatrix(),De.setMatrixAt(We,ke.matrix),De.setColorAt(We,new qe().setHSL(.23+Z(oe+14)*.11,.3+Z(oe+15)*.2,.3+Z(oe+16)*.16)),We++}}),t.add(De);let pe=l(7902548,.95),ue=l(10716327,.85),Te=l(15131589,.8),xe=o(new ai(.12,.65,3)),Je=1100,Ne=new Zt(xe,pe,Je);for(let P=0;P<Je;P++){let U=P%2===0,H=U?-22+Z(P*7)*20:10+Z(P*7)*23,te=U?13.4+Z(P*13)*3.8:19.8+Z(P*13)*5.5;ke.position.set(H,Ft(H,te)+.14,te),ke.rotation.set((Z(P+6)-.5)*.5,Z(P+8)*Math.PI*2,(Z(P+11)-.5)*.5),ke.scale.set(.5+Z(P+2),.35+Z(P+5)*.6,.5+Z(P+9)),ke.updateMatrix(),Ne.setMatrixAt(P,ke.matrix)}t.add(Ne);let et=o(new li(.075,1));for(let P=0;P<2;P++){let U=new Zt(et,P?Te:ue,180);for(let H=0;H<180;H++){let te=-20+Z(H*3+P*8)*15,Q=13+Z(H*7+P)*2;ke.position.set(te,Ft(te,Q)+.38+Z(H)*.17,Q),ke.scale.setScalar(.7+Z(H+4)*.6),ke.updateMatrix(),U.setMatrixAt(H,ke.matrix)}t.add(U)}let je=o(new li(1,2)),rt=je.getAttribute("position");for(let P=0;P<rt.count;P++){let U=new C().fromBufferAttribute(rt,P),H=1+.12*Math.sin(U.x*6+U.y*9)+.07*Math.cos(U.z*13);rt.setXYZ(P,U.x*H,U.y*H*.6,U.z*H)}je.computeVertexNormals();let O=l(10065802,.97);for(let P=0;P<18;P++){let U=12+Z(P+44)*19,H=20+Z(P+61)*6,te=new ae(je,O);te.position.set(U,Ft(U,H)+.13,H),te.scale.setScalar(.25+Z(P+77)*.9),te.rotation.y=Z(P+83)*6,te.castShadow=!0,te.receiveShadow=!0,t.add(te)}let ot=new Et;ot.position.set(18,Ft(18,19.2)+.12,19.2),t.add(ot),y(ot,0,1,0,2.6,.12,1.1,f);for(let P of[-1,1])for(let U of[-.37,.37])y(ot,P,.5,U,.075,1,.075,h);let it=y(ot,-.5,1.39,0,.9,.65,.5,_,!0),dt=e.productTextures.get("/assets/images/products/origAEV1000.png");if(dt){let P=new ae(o(new Ht(.86,.6)),a(new nt({map:dt,transparent:!0,alphaTest:.15})));P.position.set(-.5,1.4,.27),ot.add(P)}let ge=y(ot,.65,1.49,-.1,.8,.52,.035,h);ge.rotation.x=-.16,y(ot,.65,1.08,.12,.8,.03,.5,h),y(ot,.65,1.49,-.075,.68,.4,.008,a(new nt({color:11389393,emissive:8235173,emissiveIntensity:.24})));let mt=new ae(o(new Rt(.11,.11,.32,16)),m);mt.position.set(1.08,1.26,.1),ot.add(mt);for(let P=0;P<2;P++){let U=y(ot,-2.05-P*.85,.6,1,.8,.045,1.3,a(new nt({map:e.solarPanel,roughness:.28,metalness:.25})));U.rotation.x=-.65}w(ot,[new C(-2.1,.24,1.45),new C(-1.5,.1,1.6),new C(-.55,.2,.6),new C(-.8,1.2,.1)],.024,M),w(ot,[new C(-.2,1.3,.25),new C(.05,1.14,.4),new C(.6,1.13,.3)],.018,M);let Oe=new Et;Oe.position.set(4,0,1.5),ot.add(Oe);let Ye=l(11837560,.9),R=o(new ai(1.5,1.9,4,1,!0)),S=new ae(R,Ye);S.position.y=.95,S.rotation.y=Math.PI/4,S.scale.z=1.45,Oe.add(S),v(Oe,new C(-1.2,0,.8),new C(0,1.9,0),.025,h),v(Oe,new C(1.2,0,.8),new C(0,1.9,0),.025,h);let k=o(new Rt(.22,.22,.14,16)),he=l(2369575,.95),ie=l(11976641,.25,.8),X=l(2704462,.16,.35),le=$.getLength(),J=[];[14476511,2378560,7175047,11449525].forEach((P,U)=>{let H=new Et;H.name="MovingVehicle"+U,y(H,0,.47,0,1.04,.44,2.35,l(P,.27,.55),!0),y(H,0,.88,-.12,.9,.53,1.35,X,!0),y(H,0,1.12,-.12,.91,.06,1.1,l(P,.27,.55),!0);for(let Q of[-.7,.52])y(H,0,.88,Q,.92,.035,.045,h);for(let Q of[-.52,.52])y(H,Q,.86,-.12,.035,.53,.08,h);let te=[];for(let Q of[-.51,.51])for(let ve of[-.76,.76]){let Ae=new ae(k,he);Ae.rotation.z=Math.PI/2,Ae.position.set(Q,.25,ve),H.add(Ae),te.push(Ae);let oe=new ae(o(new Rt(.11,.11,.151,12)),ie);oe.rotation.z=Math.PI/2,oe.position.copy(Ae.position),H.add(oe)}for(let Q of[-.34,.34])y(H,Q,.56,1.18,.2,.1,.03,m),y(H,Q,.56,-1.18,.2,.1,.03,l(9978680,.35));t.add(H),J.push({group:H,wheels:te,phase:[.21,.36,.62,.79][U],dir:U%2===0?1:-1,speed:1.8+U*.15})});let ee=0,me=0,N=(P,U=!1)=>{U||(ee+=Math.max(0,P));let H=new C,te=new C;for(let Q of J){let ve=((Q.phase+Q.dir*ee*Q.speed/le)%1+1)%1,Ae=$.getPointAt(ve);$.getTangentAt(ve,H),te.set(-H.z,0,H.x).normalize(),Ae.addScaledVector(te,Q.dir*.78),Ae.y=Ft(Ae.x,Ae.z)+.09,Q.group.position.copy(Ae),Q.group.rotation.y=Math.atan2(H.x,H.z)+(Q.dir===1?0:Math.PI),Q.wheels.forEach(oe=>{oe.rotation.x=-ee*Q.speed/.22})}};return N(0,!0),{root:t,update:N,setNightFactor(P){me=P,m.emissiveIntensity=.03+P*1.4},dispose(){n.forEach(P=>P.dispose()),s.forEach(P=>P.dispose()),r.forEach(P=>P.dispose())}}}var Ja=class extends Ai{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Ue;e.deleteAttribute("uv");let t=new nt({side:Jt}),n=new nt,s=new _n(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ae(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Zt(e,n,6),a=new It;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new ae(e,Is(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ae(e,Is(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new ae(e,Is(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new ae(e,Is(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let d=new ae(e,Is(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let u=new ae(e,Is(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Is(i){return new vr({color:0,emissive:16777215,emissiveIntensity:i})}var $a=[{id:"overview",progress:0,pos:new C(2.8,28.8,52),target:new C(5.6,-.2,4.2),fov:39},{id:"home",progress:.34,pos:new C(-16.5,9.2,20.5),target:new C(-10.8,2.1,2.2),fov:38},{id:"commercial",progress:.67,pos:new C(24.5,11.4,13.5),target:new C(18.5,2.5,-5.8),fov:39},{id:"offgrid",progress:1,pos:new C(28.5,9.6,33.5),target:new C(21.6,1.5,15.6),fov:39}];function Pu(i){let e=0,t=0,n=0,s=0,r=0,o=0,a=!0,l=new C,c=new C,h=new C,f=new Tr,d=new C,u=new C,_=new C,M=new C,p=(x,y)=>{let v=vt.clamp(x,0,1),w=0;for(;w<$a.length-2&&v>$a[w+1].progress;)w++;let T=$a[w],g=$a[w+1],E=Math.max(1e-4,g.progress-T.progress),I=vt.clamp((v-T.progress)/E,0,1),A=I*I*(3-2*I);if(d.copy(T.pos),u.copy(g.pos),_.copy(T.target),M.copy(g.target),l.lerpVectors(d,u,A),c.lerpVectors(_,M,A),window.innerWidth<=768||y<1.05){let B=vt.lerp(1.42,1,vt.clamp((y-.45)/.6,0,1)),V=Math.max(B,1.75/Math.max(y,.35)),D=1-vt.smoothstep(v,0,.3),z=vt.lerp(B,V,D);h.subVectors(l,c).multiplyScalar(z),h.y*=1.08,l.copy(c).add(h)}let L=vt.lerp(T.fov,g.fov,A)+(y<.85?5:0);Math.abs(i.fov-L)>.05&&(i.fov=L,i.updateProjectionMatrix())},m=x=>{p(t,x),h.subVectors(l,c),f.setFromVector3(h),f.theta+=r,f.phi=vt.clamp(f.phi+o,.36,1.32),h.setFromSpherical(f),i.position.copy(c).add(h),i.lookAt(c)};return m(16/9),{setScrollProgress:x=>{let y=vt.clamp(x,0,1);y!==e&&(e=y,a=!0)},getZoneForProgress:x=>x<.17?"overview":x<.505?"home":x<.835?"commercial":"offgrid",setOrbitOffset:(x,y)=>{n=vt.clamp(n+x,-.45,.45),s=vt.clamp(s+y,-.18,.22),a=!0},resetOrbit:()=>{(n!==0||s!==0)&&(n=0,s=0,a=!0)},snapToProgress:(x,y)=>{e=vt.clamp(x,0,1),t=e,n=0,s=0,r=0,o=0,a=!1,m(y)},update:(x,y,v)=>{if(!(a||t!==e||r!==n||o!==s))return!1;if(v)t=e,r=n,o=s;else{let T=1-Math.exp(-6.4*Math.min(x,.08));t=Math.abs(e-t)<25e-5?e:vt.lerp(t,e,T),r=Math.abs(n-r)<4e-4?n:vt.lerp(r,n,T),o=Math.abs(s-o)<4e-4?s:vt.lerp(o,s,T)}return m(y),a=t!==e||r!==n||o!==s,!0}}}var Ka={pv:16751135,bat:53662,ac:1892534,grid:5943016,light:16760386,bms:10679007},$0=9480368;function Iu(){let i=new Et;i.name="EnergyFlowSystem",i.visible=!1;let e=Ft(21,15.2),t=[{id:"z1-pv-inv",kind:"pv",when:"day",points:[[-12.5,4.5,2.9],[-15.4,4.15,4.15],[-15.8,3.05,4.6]],packetCount:3,speed:.36},{id:"z1-inv-bat-day",kind:"bat",when:"day",points:[[-15.3,2,4.72],[-14.25,2,4.72],[-14.25,1.45,4.72]],packetCount:2,speed:.42},{id:"z1-bat-inv-night",kind:"bat",when:"night",points:[[-14.25,1.45,4.72],[-14.25,2,4.72],[-15.3,2,4.72]],packetCount:2,speed:.4},{id:"z1-bms",kind:"bms",when:"both",points:[[-15.2,2.22,4.76],[-14.1,2.22,4.76],[-14.1,1.55,4.76]],packetCount:2,speed:.55},{id:"z1-inv-ac-loads",kind:"ac",when:"both",points:[[-16.2,2.2,4.65],[-17.65,2.2,3.85],[-17.65,2.2,2.15],[-16.2,3.25,4.48],[-12.2,3.25,4.48],[-8.9,2.95,2.6],[-8.9,2.85,-.35]],packetCount:5,speed:.28},{id:"z1-grid",kind:"grid",when:"night",points:[[-21.1,6.2,.9],[-17.7,3.2,.9],[-17.7,2.1,2]],packetCount:3,speed:.34},{id:"z1-garden-light-day",kind:"pv",when:"day",points:[[-4.4,2.02,6.4],[-4.4,1.65,6.4]],packetCount:1,speed:.65},{id:"z1-garden-light-night",kind:"light",when:"night",points:[[-4.4,1.45,6.4],[-4.4,1.85,6.4]],packetCount:1,speed:.65},{id:"z2-pv-inv",kind:"pv",when:"day",points:[[17.2,5.85,-7.2],[15.6,5.5,-4.6],[15.6,2.35,-3.5]],packetCount:4,speed:.34},{id:"z2-inv-bat-day",kind:"bat",when:"day",points:[[15.2,1.65,-3.15],[13.8,1.65,-3.15],[12.3,1.65,-3.15]],packetCount:3,speed:.42},{id:"z2-bat-inv-night",kind:"bat",when:"night",points:[[12.3,1.65,-3.15],[13.8,1.65,-3.15],[15.2,1.65,-3.15]],packetCount:3,speed:.4},{id:"z2-ac-loads",kind:"ac",when:"both",points:[[16,1.65,-3.15],[17.7,1.65,-3.15],[21.4,2.4,-3.8],[24.2,4.9,-6.2]],packetCount:4,speed:.28},{id:"z2-grid",kind:"grid",when:"night",points:[[8.5,6.8,-11.5],[14.5,4.2,-7.2],[17.7,2.2,-3.6]],packetCount:3,speed:.3},{id:"z2-roadlight-day",kind:"pv",when:"day",points:[[17.8,4.55,2.7],[17.8,4.15,2.7]],packetCount:1,speed:.7},{id:"z2-roadlight-night",kind:"light",when:"night",points:[[17.8,4.35,2.7],[17.8,3.3,2.7]],packetCount:2,speed:.6},{id:"z3-pv-storage",kind:"pv",when:"day",points:[[15.8,e+1.45,14.6],[17.6,e+.9,16.4],[18.9,e+.85,16.85],[21.4,e+.85,17.25]],packetCount:3,speed:.38},{id:"z3-bat-night",kind:"bat",when:"night",points:[[18.9,e+.9,16.85],[20.4,e+.9,17.15],[21.55,e+.9,17.25]],packetCount:2,speed:.42},{id:"z3-field-loads",kind:"ac",when:"both",points:[[21.55,e+1.05,17.25],[22,e+1.1,15.6],[22.4,e+1.3,14.4]],packetCount:2,speed:.42},{id:"z3-split-day",kind:"pv",when:"day",points:[[26.8,e+4.5,16.5],[26.8,e+3.25,16.65]],packetCount:1,speed:.7},{id:"z3-split-night",kind:"light",when:"night",points:[[26.8,e+3.25,16.65],[26.75,e+3.9,16.5],[25.65,e+3.9,16.5]],packetCount:2,speed:.55}],n=[],s=new rr(.06,.2,4,8);s.rotateX(Math.PI/2);let r=new ai(.09,.24,8);r.rotateX(Math.PI/2);let o=new nn({color:16777215}),a=t.reduce((T,g)=>T+g.packetCount,0),l=new Zt(s,o,a);l.instanceMatrix.setUsage(nc),i.add(l);let c=new It,h=new C,f=new C,d=new C(0,1,0),u=new pn,_=new qe;t.forEach(T=>{let g=new gn(T.points.map(([D,z,Y])=>new C(D,z,Y))),E=new Ci(g,Math.max(12,T.points.length*10),.024,7,!1),I=new nn({color:Ka[T.kind],transparent:!0,opacity:.9}),A=new ae(E,I);i.add(A);let L=new nn({color:Ka[T.kind],transparent:!0,opacity:.95}),B=Math.max(1,T.packetCount),V=new Zt(r,L,B);for(let D=0;D<B;D++){let z=(D+.5)/B;g.getPointAt(z,h),g.getTangentAt(z,f).normalize(),c.position.copy(h),u.setFromUnitVectors(new C(0,0,1),f),c.quaternion.copy(u),c.scale.setScalar(1),c.updateMatrix(),V.setMatrixAt(D,c.matrix)}V.instanceMatrix.needsUpdate=!0,V.visible=!1,i.add(V),n.push({spec:T,curve:g,tube:A,tubeMat:I,staticArrows:V})});let M=!1,p=!1,m=!1,x=0,y=T=>T.when==="both"||T.when==="night"&&M||T.when==="day"&&!M,v=()=>{let T=p||m;l.visible=!T,n.forEach(g=>{y(g.spec)?(g.tubeMat.color.setHex(Ka[g.spec.kind]),g.tubeMat.opacity=g.spec.kind==="bms"?.55:.92,g.staticArrows.visible=T):(g.tubeMat.color.setHex($0),g.tubeMat.opacity=.24,g.staticArrows.visible=!1)})};return v(),{group:i,setVisible:T=>{i.visible=T},setState:(T,g,E)=>{let I=T>=.5;(I!==M||g!==p||E!==m)&&(M=I,p=g,m=E,v())},update:T=>{if(!i.visible)return;!p&&!m&&(x+=T);let g=0;for(let E=0;E<n.length;E++){let I=n[E],A=y(I.spec),L=I.spec.packetCount;_.setHex(Ka[I.spec.kind]);for(let B=0;B<L;B++){if(!A||p||m)c.scale.setScalar(1e-4),c.position.set(0,-100,0),c.updateMatrix(),l.setMatrixAt(g,c.matrix);else{let V=((x*I.spec.speed+B/L)%1+1)%1;I.curve.getPointAt(V,h),I.curve.getTangentAt(V,f).normalize(),c.position.copy(h),c.lookAt(h.x+f.x,h.y+f.y,h.z+f.z);let D=Math.min(V*6,(1-V)*6,1),z=(I.spec.kind==="bms"?.65:1)*Math.max(.2,D);c.scale.setScalar(z),c.updateMatrix(),l.setMatrixAt(g,c.matrix),l.setColorAt(g,_)}g++}}l.instanceMatrix.needsUpdate=!0,l.instanceColor&&(l.instanceColor.needsUpdate=!0)},dispose:()=>{s.dispose(),r.dispose(),o.dispose(),n.forEach(T=>{T.tube.geometry.dispose(),T.tubeMat.dispose(),T.staticArrows.material.dispose()})}}}var kr={overview:{id:"overview",num:"00",progress:0,title:{en:"Clean Energy Campus",zh:"\u7ACB\u4F53\u6E05\u6D01\u80FD\u6E90\u56ED\u533A"},subtitle:{en:"Scroll or choose a zone to explore residential, commercial, and off-grid energy architectures in one landscape.",zh:"\u5411\u4E0B\u6EDA\u52A8\u6216\u9009\u62E9\u533A\u57DF\uFF0C\u8FDE\u7EED\u63A2\u7D22\u5BB6\u5EAD\u3001\u5DE5\u5546\u4E1A\u4E0E\u504F\u8FDC\u79BB\u7F51\u80FD\u6E90\u7CFB\u7EDF\u3002"},noteDay:{en:"Day: Solar generation & storage charging",zh:"\u767D\u663C\uFF1A\u5149\u4F0F\u91C7\u96C6\u53D1\u7535\u4E0E\u50A8\u80FD\u84C4\u80FD"},noteNight:{en:"Night: Stored battery supply & autonomous solar lighting",zh:"\u591C\u665A\uFF1A\u50A8\u80FD\u653E\u7535\u4F9B\u7535\u4E0E\u72EC\u7ACB\u592A\u9633\u80FD\u7167\u660E"}},home:{id:"home",num:"01",progress:.34,title:{en:"HOME ENERGY",zh:"\u5BB6\u5EAD\u80FD\u6E90"},subtitle:{en:"Rooftop PV, hybrid inverter, 16 kWh battery, utility meter & cutaway everyday appliances.",zh:"\u5C4B\u9876\u5149\u4F0F\u3001\u6DF7\u5408\u9006\u53D8\u5668\u300116 kWh \u5BB6\u7528\u50A8\u80FD\u3001\u7535\u8868\u914D\u7535\u7BB1\u4E0E\u5BA4\u5185\u5BB6\u7535\u8D1F\u8F7D\u3002"},noteDay:{en:"Day: Roof PV feeds hybrid inverter, home loads & 16 kWh battery",zh:"\u767D\u663C\uFF1A\u5C4B\u9876\u5149\u4F0F\u7ECF\u6DF7\u5408\u9006\u53D8\u5668\u4F9B\u7535\u5BB6\u5C45\u8D1F\u8F7D\u5E76\u4E3A 16 kWh \u7535\u6C60\u84C4\u80FD"},noteNight:{en:"Night: 16 kWh battery discharges via inverter with grid backup & yard solar light on",zh:"\u591C\u665A\uFF1A16 kWh \u50A8\u80FD\u7ECF\u9006\u53D8\u5668\u4F9B\u80FD\uFF0C\u7535\u8868\u914D\u7535\u63D0\u4F9B\u7F51\u683C\u652F\u6491\uFF0C\u5EAD\u9662\u592A\u9633\u80FD\u706F\u4EAE\u8D77"}},commercial:{id:"commercial",num:"02",progress:.67,title:{en:"COMMERCIAL & INDUSTRIAL",zh:"\u5DE5\u5546\u4E1A\u80FD\u6E90"},subtitle:{en:"Concept scenario: rooftop PV, HORIZON ESS cabinets, 50 kW conversion, switchgear & road lighting.",zh:"\u6982\u5FF5\u5E94\u7528\u793A\u610F\uFF1A\u5927\u8DE8\u5EA6\u5149\u4F0F\u5C4B\u9762\u3001HORIZON \u50A8\u80FD\u67DC\u300150 kW \u53D8\u6D41\u5E76\u7F51\u4E0E\u56ED\u533A\u8DEF\u706F\u3002"},noteDay:{en:"Day: Facility PV array supplies operations & charges HORIZON ESS cabinets",zh:"\u767D\u663C\uFF1A\u5DE5\u5546\u4E1A\u5C4B\u9762\u5149\u4F0F\u652F\u6491\u5EFA\u7B51\u4E0E\u7A7A\u8C03\u8D1F\u8F7D\u5E76\u4E3A HORIZON \u50A8\u80FD\u67DC\u84C4\u80FD"},noteNight:{en:"Night: HORIZON ESS & switchgear support facility loads while road solar lights illuminate drive",zh:"\u591C\u665A\uFF1AHORIZON \u50A8\u80FD\u4E0E\u914D\u7535\u652F\u6301\u5EFA\u7B51\u8D1F\u8F7D\uFF0C\u56ED\u533A\u4E00\u4F53\u5316\u592A\u9633\u80FD\u8DEF\u706F\u81EA\u52A8\u4EAE\u706F"}},offgrid:{id:"offgrid",num:"03",progress:1,title:{en:"REMOTE & OFF-GRID",zh:"\u504F\u8FDC\u4E0E\u79BB\u7F51\u5E94\u7528"},subtitle:{en:"Disconnected from utility grid: standalone PV rack, SEED & Volt 1000 field power, and split street light.",zh:"\u72EC\u7ACB\u4E8E\u516C\u7528\u7535\u7F51\u4E4B\u5916\uFF1A\u72EC\u7ACB\u5149\u4F0F\u652F\u67B6\u3001SEED \u50A8\u80FD\u4E0E Volt 1000 \u79FB\u52A8\u4F5C\u4E1A\u4F9B\u7535\u3001\u5206\u4F53\u5F0F\u592A\u9633\u80FD\u8DEF\u706F\u3002"},noteDay:{en:"Day: Independent solar rack charges SEED storage & portable workstation power",zh:"\u767D\u663C\uFF1A\u79BB\u7F51\u5149\u4F0F\u72EC\u7ACB\u4E3A SEED \u7535\u6C60\u4E0E\u79FB\u52A8\u5DE5\u4F5C\u53F0\u4F9B\u7535\u84C4\u80FD\uFF08\u65E0\u7535\u7F51\u63A5\u5165\uFF09"},noteNight:{en:"Night: SEED & Volt 1000 power field tools & camp light; split street light runs independently",zh:"\u591C\u665A\uFF1ASEED \u4E0E Volt 1000 \u652F\u6491\u79FB\u52A8\u4EEA\u5668\u4E0E\u8425\u5730\u706F\uFF0C\u5206\u4F53\u5F0F\u592A\u9633\u80FD\u8DEF\u706F\u72EC\u7ACB\u7167\u660E"}}},Lu=[{id:"brand-office",zone:"overview",kind:"info",worldPos:[-1,10.6,-12.8],kicker:{en:"Brand architecture concept",zh:"\u54C1\u724C\u5EFA\u7B51\u6982\u5FF5"},title:{en:"Anthrise Technology \xB7 Concept Office",zh:"Anthrise Technology \xB7 \u6982\u5FF5\u529E\u516C\u697C"},usage:{en:"A conceptual branded office in the energy landscape. Actual company contact details remain on the website.",zh:"\u80FD\u6E90\u573A\u666F\u4E2D\u7684\u54C1\u724C\u6982\u5FF5\u529E\u516C\u5EFA\u7B51\uFF0C\u5B9E\u9645\u516C\u53F8\u5730\u5740\u53CA\u8054\u7CFB\u4FE1\u606F\u4EE5\u7F51\u7AD9\u8054\u7CFB\u65B9\u5F0F\u4E3A\u51C6\u3002"}},{id:"ov-home",zone:"overview",targetZone:"home",kind:"zone",worldPos:[-11.5,6.2,2],kicker:{en:"01 \xB7 Residential",zh:"01 \xB7 \u5BB6\u5EAD\u573A\u666F"},title:{en:"Home Energy",zh:"\u5BB6\u5EAD\u80FD\u6E90"},usage:{en:"Click to inspect rooftop solar, hybrid inverter, 16 kWh battery & cutaway appliances.",zh:"\u70B9\u51FB\u8FDB\u5165\u67E5\u770B\u5C4B\u9876\u5149\u4F0F\u3001\u6DF7\u5408\u9006\u53D8\u5668\u300116 kWh \u7535\u6C60\u4E0E\u5BA4\u5185\u5BB6\u7535\u3002"}},{id:"ov-commercial",zone:"overview",targetZone:"commercial",kind:"zone",worldPos:[18.8,7.6,-7.2],kicker:{en:"02 \xB7 Commercial & Industrial",zh:"02 \xB7 \u5DE5\u5546\u4E1A\u573A\u666F"},title:{en:"Commercial & Industrial",zh:"\u5DE5\u5546\u4E1A\u80FD\u6E90"},usage:{en:"Click to inspect C&I solar array, HORIZON ESS cabinets, switchgear & road lights.",zh:"\u70B9\u51FB\u8FDB\u5165\u67E5\u770B\u5DE5\u5546\u4E1A\u5149\u4F0F\u5C4B\u9762\u3001HORIZON \u50A8\u80FD\u67DC\u3001\u914D\u7535\u4E0E\u9053\u8DEF\u7167\u660E\u3002"}},{id:"ov-offgrid",zone:"overview",targetZone:"offgrid",kind:"zone",worldPos:[20.5,5.4,15.2],kicker:{en:"03 \xB7 Remote & Off-Grid",zh:"03 \xB7 \u79BB\u7F51\u573A\u666F"},title:{en:"Remote & Off-Grid",zh:"\u504F\u8FDC\u4E0E\u79BB\u7F51\u5E94\u7528"},usage:{en:"Click to explore standalone solar power beyond utility lines.",zh:"\u70B9\u51FB\u63A2\u7D22\u8131\u79BB\u5E02\u7535\u7F51\u7684\u72EC\u7ACB\u5149\u4F0F\u4E0E\u4FBF\u643A\u50A8\u80FD\u7CFB\u7EDF\u3002"}},{id:"home-solar",zone:"home",kind:"product",worldPos:[-10.8,5.2,1.8],skuId:"origAER400",modelCode:"AE-R400",img:"/assets/images/stage-solar.png",topic:"home",hrefEn:"/products/origAER400-en.html",hrefZh:"/products/origAER400-zh.html",kicker:{en:"Photovoltaic modules \xB7 AE-R400",zh:"\u5149\u4F0F\u7EC4\u4EF6 \xB7 AE-R400"},title:{en:"Rooftop Solar Panels (400W)",zh:"\u5C4B\u9876\u5149\u4F0F\u677F\uFF08400W\uFF09"},usage:{en:"Generates DC electricity during daylight and routes via PV isolation to the wall-mounted hybrid inverter.",zh:"\u65E5\u95F4\u4EA7\u751F\u6E05\u6D01\u76F4\u6D41\u7535\uFF0C\u7ECF\u5149\u4F0F\u76F4\u6D41\u4FDD\u62A4\u901A\u9053\u8F93\u9001\u81F3\u5EFA\u7B51\u5916\u5899\u6DF7\u5408\u9006\u53D8\u5668\u3002"}},{id:"home-inverter",zone:"home",kind:"product",worldPos:[-15.8,3.18,4.72],skuId:"hybrid20",modelCode:"AE-I-HYBRID-20K",img:"/assets/images/stage-inverter.png",topic:"home",hrefEn:"/products/hybrid20-en.html",hrefZh:"/products/hybrid20-zh.html",kicker:{en:"Power conversion \xB7 AE-I-HYBRID-20K",zh:"\u6DF7\u5408\u9006\u53D8\u5668 \xB7 AE-I-HYBRID-20K"},title:{en:"Hybrid Inverter",zh:"\u6DF7\u5408\u9006\u53D8\u5668"},usage:{en:"Coordinates rooftop PV DC input, bidirectional battery DC charge/discharge via BMS, and AC output to the house panel.",zh:"\u7EDF\u7B79\u5149\u4F0F\u76F4\u6D41\u8F93\u5165\u3001\u901A\u8FC7 BMS \u4E0E\u50A8\u80FD\u53CC\u5411\u5145\u653E\u7535\uFF0C\u5E76\u5411\u6237\u5185\u914D\u7535\u7BB1\u8F93\u51FA\u7A33\u5B9A\u4EA4\u6D41\u7535\u3002"}},{id:"home-battery",zone:"home",kind:"product",worldPos:[-13,1.05,4.95],skuId:"ess16",modelCode:"AE-E-DAWN-16",img:"/assets/images/stage-battery.png",topic:"home",hrefEn:"/products/ess16-en.html",hrefZh:"/products/ess16-zh.html",kicker:{en:"Home storage \xB7 AE-E-DAWN-16",zh:"\u6237\u7528\u50A8\u80FD \xB7 AE-E-DAWN-16"},title:{en:"16 kWh Home Storage",zh:"16 kWh \u50A8\u80FD\u7535\u6C60"},usage:{en:"51.2V LiFePO4 residential unit storing surplus daytime solar energy through the hybrid inverter for evening household loads.",zh:"51.2V \u78F7\u9178\u94C1\u9502\u6237\u7528\u50A8\u80FD\u5355\u5143\uFF0C\u7531\u6DF7\u5408\u9006\u53D8\u5668\u534F\u8C03\u65E5\u95F4\u84C4\u80FD\u4E0E\u591C\u95F4\u4F4F\u5B85\u4F9B\u7535\u3002"}},{id:"home-grid",zone:"home",kind:"info",worldPos:[-19.8,4.9,1.05],topic:"home",kicker:{en:"AC interface \xB7 Utility & breaker",zh:"\u5E76\u7F51\u4E0E\u914D\u7535\u63A5\u53E3"},title:{en:"Grid Meter & AC Panel",zh:"\u7535\u7F51\u63A5\u5165\u3001\u7535\u8868\u4E0E\u914D\u7535\u7BB1"},usage:{en:"Safely connects utility service metering and inverter AC output before feeding indoor household circuits.",zh:"\u5C06\u516C\u7528\u7535\u7F51\u8BA1\u91CF\u7AEF\u53E3\u4E0E\u6DF7\u5408\u9006\u53D8\u5668\u4EA4\u6D41\u8F93\u51FA\u5B89\u5168\u6C47\u5165\u5EFA\u7B51\u5185\u90E8\u914D\u7535\u56DE\u8DEF\u3002"}},{id:"home-loads",zone:"home",kind:"info",worldPos:[-8.4,2.05,2.35],topic:"home",kicker:{en:"Indoor AC circuits \xB7 Cutaway",zh:"\u5BA4\u5185\u4EA4\u6D41\u8D1F\u8F7D \xB7 \u5256\u89C6\u5C55\u793A"},title:{en:"Residential Appliances",zh:"\u5BA4\u5185\u65E5\u5E38\u7535\u5668"},usage:{en:"Kitchen refrigeration, split climate control, lighting, and living room electronics supplied via the AC distribution panel.",zh:"\u5305\u62EC\u7A7A\u8C03\u3001\u51B0\u7BB1\u3001\u5BA4\u5185\u7167\u660E\u4E0E\u5F71\u97F3\u529E\u516C\u8BBE\u5907\uFF0C\u5747\u7531\u6237\u5185\u4EA4\u6D41\u914D\u7535\u56DE\u8DEF\u89C4\u8303\u4F9B\u7535\u3002"}},{id:"home-light",zone:"home",kind:"light",worldPos:[-4.4,1.85,6.4],skuId:"jcLight28",modelCode:"AE-L-BLOOM-01",img:"/assets/images/products/jcLight28.png",topic:"lighting",hrefEn:"/products/jcLight28-en.html",hrefZh:"/products/jcLight28-zh.html",kicker:{en:"Independent lighting \xB7 AE-L-BLOOM-01",zh:"\u72EC\u7ACB\u5EAD\u9662\u706F \xB7 AE-L-BLOOM-01"},title:{en:"Solar Courtyard Column Light",zh:"\u592A\u9633\u80FD\u5EAD\u9662\u67F1\u706F"},usage:{en:"Self-contained top PV panel and internal LiFePO4 battery \u2014 charges by day and illuminates garden walkways at night off-grid.",zh:"\u5185\u7F6E\u9876\u90E8\u5149\u4F0F\u677F\u4E0E\u78F7\u9178\u94C1\u9502\u7535\u6C60\uFF0C\u767D\u5929\u81EA\u884C\u5145\u7535\u3001\u591C\u665A\u81EA\u52A8\u70B9\u4EAE\u5EAD\u9662\u8DEF\u5F84\uFF0C\u4E0D\u63A5\u5165\u6237\u5185\u7535\u7F51\u3002"}},{id:"ci-solar",zone:"commercial",kind:"product",worldPos:[19.8,6.2,-7.8],skuId:"origAER400",modelCode:"AE-R400",img:"/assets/images/stage-solar.png",topic:"business",hrefEn:"/products/origAER400-en.html",hrefZh:"/products/origAER400-zh.html",kicker:{en:"Commercial array \xB7 AE-R400",zh:"\u5C4B\u9762\u5149\u4F0F\u9635\u5217 \xB7 AE-R400"},title:{en:"Commercial Rooftop PV Array",zh:"\u5DE5\u5546\u4E1A\u5C4B\u9762\u5149\u4F0F"},usage:{en:"Conceptual large-span photovoltaic roof generation feeding high-power conversion equipment by day.",zh:"\u6982\u5FF5\u5C4B\u9762\u5149\u4F0F\u7CFB\u7EDF\uFF0C\u65E5\u95F4\u4E3A\u5DE5\u5546\u4E1A\u56ED\u533A\u63D0\u4F9B\u76F4\u6D41\u53D1\u7535\u5E76\u63A5\u5165\u9AD8\u529F\u7387\u53D8\u6D41\u8BBE\u5907\u3002"}},{id:"ci-horizon",zone:"commercial",kind:"product",worldPos:[12.95,2.25,-3.25],skuId:"series_horizon",modelCode:"AE-E-HORIZON",img:"/assets/images/products/series_horizon.png",topic:"business",hrefEn:"/products/series_horizon-en.html",hrefZh:"/products/series_horizon-zh.html",kicker:{en:"Concept BESS \xB7 AE-E-HORIZON",zh:"\u5DE5\u5546\u4E1A\u50A8\u80FD\u67DC \xB7 AE-E-HORIZON"},title:{en:"Commercial & Industrial ESS Cabinet",zh:"\u5DE5\u5546\u4E1A\u50A8\u80FD\u67DC"},usage:{en:"Planned modular HV DC battery cabinets (e.g. 50 kW / 112 kWh pairing concept) coordinated externally via CAN/RS-485.",zh:"\u6A21\u5757\u5316\u9AD8\u538B\u76F4\u6D41\u50A8\u80FD\u67DC\u65B9\u6848\uFF08\u5982 50 kW / 112 kWh \u6982\u5FF5\u642D\u914D\uFF09\uFF0C\u7ECF\u5916\u90E8\u53D8\u6D41\u4E0E\u914D\u7535\u67DC\u6309\u9879\u76EE\u5DE5\u51B5\u914D\u7F6E\u3002"}},{id:"ci-inverter",zone:"commercial",kind:"product",worldPos:[15.6,2.15,-3.25],skuId:"hybrid50",modelCode:"AE-I-HYBRID-50K",img:"/assets/images/products/hybrid50.png",topic:"business",hrefEn:"/products/hybrid50-en.html",hrefZh:"/products/hybrid50-zh.html",kicker:{en:"Three-phase HV \xB7 AE-I-HYBRID-50K",zh:"\u4E09\u76F8\u9AD8\u538B\u53D8\u6D41 \xB7 AE-I-HYBRID-50K"},title:{en:"50 kW Hybrid Inverter",zh:"50 kW \u6DF7\u7F51\u9006\u53D8\u5668"},usage:{en:"Three-phase power conversion bridging rooftop PV arrays, HORIZON ESS battery cabinets, and AC facility switchgear.",zh:"\u4E09\u76F8\u9AD8\u538B\u6DF7\u7F51\u9006\u53D8\u6838\u5FC3\uFF0C\u8FDE\u63A5\u5C4B\u9762\u5149\u4F0F\u3001HORIZON \u50A8\u80FD\u67DC\u4E0E\u5DE5\u5546\u4E1A\u4EA4\u6D41\u914D\u7535\u6BCD\u7EBF\u3002"}},{id:"ci-loads",zone:"commercial",kind:"info",worldPos:[23.8,3.1,-5.2],topic:"business",kicker:{en:"Switchgear & facility loads",zh:"\u914D\u7535\u6BCD\u7EBF\u4E0E\u56ED\u533A\u8D1F\u8F7D"},title:{en:"Switchgear, HVAC & Office Loads",zh:"\u914D\u7535\u67DC\u3001\u6696\u901A\u4E0E\u529E\u516C\u8D1F\u8F7D"},usage:{en:"Main AC distribution bay feeding rooftop cooling units, production bay lighting, and workspace circuits. Sizing requires site engineering review.",zh:"\u4EA4\u6D41\u914D\u7535\u603B\u67DC\u7EDF\u4E00\u8C03\u914D\u5C4B\u9762\u5236\u51B7\u3001\u8F66\u95F4\u7167\u660E\u4E0E\u529E\u516C\u8D1F\u8377\uFF0C\u5177\u4F53\u914D\u6BD4\u6309\u9879\u76EE\u6D4B\u7B97\u5B9A\u5236\u3002"}},{id:"ci-light",zone:"commercial",kind:"light",worldPos:[17.8,4.3,2.75],skuId:"jcLight09",modelCode:"AE-L-GUARD-05",img:"/assets/images/products/jcLight09.png",topic:"lighting",hrefEn:"/products/jcLight09-en.html",hrefZh:"/products/jcLight09-zh.html",kicker:{en:"Road luminaire \xB7 AE-L-GUARD-05",zh:"\u9053\u8DEF\u7167\u660E \xB7 AE-L-GUARD-05"},title:{en:"All-in-One Solar Street Light",zh:"\u4E00\u4F53\u5316\u592A\u9633\u80FD\u8DEF\u706F"},usage:{en:"Autonomous roadway luminaire with integrated PV and LiFePO4 battery illuminating commercial drives without trenching AC cable.",zh:"\u96C6\u6210\u5149\u4F0F\u677F\u4E0E\u78F7\u9178\u94C1\u9502\u7535\u6C60\u7684\u4E00\u4F53\u5316\u8DEF\u706F\uFF0C\u65E0\u9700\u5F00\u6316\u7535\u7F06\u5373\u53EF\u4E3A\u56ED\u533A\u9053\u8DEF\u63D0\u4F9B\u591C\u95F4\u7167\u660E\u3002"}},{id:"off-solar",zone:"offgrid",kind:"product",worldPos:[15.8,3.05,14.5],skuId:"origAESK1",modelCode:"AE-SK1",img:"/assets/images/products/origAESK1.png",topic:"outdoor",hrefEn:"/products/origAESK1-en.html",hrefZh:"/products/origAESK1-zh.html",kicker:{en:"Off-grid generation \xB7 AE-SK1",zh:"\u79BB\u7F51\u5149\u4F0F\u91C7\u96C6 \xB7 AE-SK1"},title:{en:"Ground Solar Array & Kit",zh:"\u72EC\u7ACB\u5149\u4F0F\u53D1\u7535\u5355\u5143"},usage:{en:"Stand-alone tilted ground PV rack deployed where no utility poles reach, charging field storage by day.",zh:"\u90E8\u7F72\u4E8E\u65E0\u5E02\u7535\u8986\u76D6\u533A\u57DF\u7684\u5730\u9762\u72EC\u7ACB\u5149\u4F0F\u9635\u5217\uFF0C\u65E5\u95F4\u76F4\u63A5\u4E3A\u79BB\u7F51\u50A8\u80FD\u5355\u5143\u8865\u7535\u3002"}},{id:"off-seed",zone:"offgrid",kind:"product",worldPos:[18.9,2.2,16.85],skuId:"series_seed24",modelCode:"AE-E-SEED",img:"/assets/images/products/series_seed24.png",topic:"outdoor",hrefEn:"/products/series_seed24-en.html",hrefZh:"/products/series_seed24-zh.html",kicker:{en:"Deep-cycle storage \xB7 AE-E-SEED",zh:"\u6DF1\u5FAA\u73AF\u50A8\u80FD \xB7 AE-E-SEED"},title:{en:"25.6V Deep Cycle LiFePO\u2084 Battery",zh:"25.6V \u6DF1\u5FAA\u73AF\u78F7\u9178\u94C1\u9502\u7535\u6C60"},usage:{en:"2.56 kWh deep-cycle battery storage serving remote cabins, monitoring gear, and off-grid field stations.",zh:"2.56 kWh \u6DF1\u5FAA\u73AF\u78F7\u9178\u94C1\u9502\u7535\u6C60\uFF0C\u9002\u7528\u4E8E\u504F\u8FDC\u9A7B\u70B9\u3001\u76D1\u6D4B\u7AD9\u4E0E\u79BB\u7F51\u57FA\u7840\u8D1F\u8377\u50A8\u80FD\u3002"}},{id:"off-volt",zone:"offgrid",kind:"product",worldPos:[21.55,2.15,17.25],skuId:"origAEV1000",modelCode:"AE-E-VOLT-1000",img:"/assets/images/products/origAEV1000.png",topic:"outdoor",hrefEn:"/products/origAEV1000-en.html",hrefZh:"/products/origAEV1000-zh.html",kicker:{en:"Portable station \xB7 AE-E-VOLT-1000",zh:"\u4FBF\u643A\u7535\u6E90 \xB7 AE-E-VOLT-1000"},title:{en:"Volt 1000 Portable Power Station",zh:"Volt 1000 \u6237\u5916\u4FBF\u643A\u7535\u6E90"},usage:{en:"768 Wh / 1000 W LiFePO4 portable unit supplying modest mobile loads: field laptops, camp lighting, radios & portable coolers.",zh:"768 Wh / 1000 W \u78F7\u9178\u94C1\u9502\u4FBF\u643A\u7535\u6E90\uFF0C\u4E13\u4E3A\u79FB\u52A8\u5DE5\u4F5C\u7AD9\u7B14\u8BB0\u672C\u3001\u901A\u4FE1\u8BBE\u5907\u3001\u8425\u5730\u7167\u660E\u4E0E\u8F66\u8F7D\u5C0F\u51B7\u7BB1\u7B49\u8F7B\u91CF\u8D1F\u8F7D\u4F9B\u7535\u3002"}},{id:"off-light",zone:"offgrid",kind:"light",worldPos:[26.8,5.15,16.5],skuId:"jcLight27",modelCode:"AE-L-GUARD-06",img:"/assets/images/stage-light.png",topic:"lighting",hrefEn:"/products/jcLight27-en.html",hrefZh:"/products/jcLight27-zh.html",kicker:{en:"Off-grid street light \xB7 AE-L-GUARD-06",zh:"\u72EC\u7ACB\u8DEF\u706F \xB7 AE-L-GUARD-06"},title:{en:"Split Solar Street Light",zh:"\u5206\u4F53\u5F0F\u592A\u9633\u80FD\u8DEF\u706F"},usage:{en:"IP66 weather-sealed luminaire with dedicated mast PV panel and integrated LiFePO4 battery \u2014 zero trenching or grid connection.",zh:"IP66 \u6237\u5916\u9632\u62A4\u7B49\u7EA7\uFF0C\u81EA\u5E26\u72EC\u7ACB\u5149\u4F0F\u677F\u4E0E\u78F7\u9178\u94C1\u9502\u7535\u6C60\u5305\uFF0C\u65E0\u9700\u62C9\u7EBF\u6216\u7535\u7F51\u63A5\u5165\u5373\u53EF\u591C\u95F4\u7167\u660E\u3002"}}],Qa={en:{zones:{overview:"Overview",home:"01 Home Energy",commercial:"02 Commercial",offgrid:"03 Off-Grid"},dayBtn:"Day",nightBtn:"Night",flowShow:"Show energy flow",flowHide:"Hide energy flow",pauseMotion:"Pause motion",resumeMotion:"Resume motion",pauseFollow:"Pause Risey",resumeFollow:"Resume Risey",productsBtn:"Products",discussBtn:"Discuss your project",legendPv:"PV DC",legendBat:"Battery DC",legendAc:"AC Supply",legendGrid:"Grid Tie",legendLight:"Autonomous Solar Light",legendNote:"Conceptual application diagram \xB7 Zones 01\u201302 grid-interfaced, Zone 03 isolated off-grid",viewSpecs:"View specifications",inquireSetup:"Discuss this setup",visitZone:"Explore this zone",dragHint:"Scroll to tour \xB7 Drag to orbit",fallbackTitle:"3D preview unavailable in this browser context",fallbackDesc:"Use the section links below to browse Anthrise residential, commercial, and off-grid products."},zh:{zones:{overview:"\u56ED\u533A\u5168\u666F",home:"01 \u5BB6\u5EAD\u80FD\u6E90",commercial:"02 \u5DE5\u5546\u4E1A\u80FD\u6E90",offgrid:"03 \u504F\u8FDC\u79BB\u7F51"},dayBtn:"\u767D\u663C",nightBtn:"\u591C\u665A",flowShow:"\u67E5\u770B\u80FD\u6E90\u6D41\u5411",flowHide:"\u9690\u85CF\u80FD\u6E90\u6D41\u5411",pauseMotion:"\u6682\u505C\u52A8\u6548",resumeMotion:"\u6062\u590D\u52A8\u6548",pauseFollow:"\u6682\u505C Risey",resumeFollow:"\u6062\u590D Risey",productsBtn:"\u4EA7\u54C1\u7CFB\u5217",discussBtn:"\u54A8\u8BE2\u60A8\u7684\u9879\u76EE",legendPv:"\u5149\u4F0F\u76F4\u6D41",legendBat:"\u50A8\u80FD\u76F4\u6D41",legendAc:"\u4EA4\u6D41\u4F9B\u7535",legendGrid:"\u5E76\u7F51\u7EBF\u8DEF",legendLight:"\u72EC\u7ACB\u592A\u9633\u80FD\u706F\u5177",legendNote:"\u6982\u5FF5\u8FD0\u884C\u793A\u610F \xB7 \u533A\u57DF 01\u201302 \u542B\u5E02\u7535\u63A5\u5165\uFF0C\u533A\u57DF 03 \u5B8C\u5168\u79BB\u7F51\u8FD0\u884C",viewSpecs:"\u67E5\u770B\u4EA7\u54C1\u53C2\u6570",inquireSetup:"\u54A8\u8BE2\u8BE5\u65B9\u6848",visitZone:"\u8FDB\u5165\u8BE5\u533A\u57DF",dragHint:"\u4E0B\u6ED1\u6F2B\u6E38\u56ED\u533A \xB7 \u62D6\u62FD\u5FAE\u8C03\u89C6\u89D2",fallbackTitle:"\u5F53\u524D\u73AF\u5883\u6682\u4E0D\u652F\u6301\u5B9E\u65F6 3D \u6E32\u67D3",fallbackDesc:"\u60A8\u53EF\u901A\u8FC7\u4E0B\u65B9\u5165\u53E3\u6D4F\u89C8 Anthrise \u5BB6\u5EAD\u3001\u5DE5\u5546\u4E1A\u53CA\u504F\u8FDC\u79BB\u7F51\u4EA7\u54C1\u4E0E\u65B9\u6848\u3002"}};function Du(i,e){let t="en",n=null,s=null,r=new C,o=[],a=()=>{n=null,o.forEach(u=>{u.pinBtn.setAttribute("aria-expanded","false"),u.popEl.hidden=!0,u.rootEl.classList.remove("is-open")})},l=u=>{let _=u.popEl;if(_.hidden)return;_.style.setProperty("--pop-shift-x","0px"),_.classList.remove("hotspot-popover-below");let M=i.getBoundingClientRect(),p=_.getBoundingClientRect();if(!M.width||!p.width)return;let m=12,x=0;p.left<M.left+m?x=M.left+m-p.left:p.right>M.right-m&&(x=M.right-m-p.right),Math.abs(x)>.5&&_.style.setProperty("--pop-shift-x",`${x.toFixed(1)}px`),p.top<M.top+m&&_.classList.add("hotspot-popover-below")},c=u=>{let _=n===u.def.id;a(),!_&&(n=u.def.id,u.pinBtn.setAttribute("aria-expanded","true"),u.popEl.hidden=!1,u.rootEl.classList.add("is-open"),l(u))};i.innerHTML="",Lu.forEach(u=>{let _=document.createElement("div");_.className=`campus-hotspot campus-hotspot-${u.kind}`,_.dataset.hotspotId=u.id,_.dataset.zone=u.zone;let M=document.createElement("button");M.type="button",M.className=`campus-pin campus-pin-${u.kind}`,M.setAttribute("aria-expanded","false");let p=document.createElement("span");p.className="campus-pin-dot",p.setAttribute("aria-hidden","true");let m=document.createElement("span");m.className="campus-pin-label",m.textContent=u.title.en,M.appendChild(p),M.appendChild(m);let x=document.createElement("div");x.className="campus-popover",x.hidden=!0;let y=document.createElement("div");if(y.className="campus-pop-head",u.img){let A=document.createElement("div");A.className="campus-pop-thumb";let L=document.createElement("img");L.src=u.img,L.alt=u.title.en,L.loading="eager",L.decoding="async",A.appendChild(L),y.appendChild(A)}let v=document.createElement("div");v.className="campus-pop-titles";let w=document.createElement("p");w.className="campus-pop-kicker";let T=document.createElement("p");T.className="campus-pop-title",v.append(w,T),y.appendChild(v);let g=document.createElement("p");g.className="campus-pop-usage";let E=document.createElement("div");E.className="campus-pop-actions";let I={def:u,worldVec:new C(u.worldPos[0],u.worldPos[1],u.worldPos[2]),rootEl:_,pinBtn:M,tagEl:m,popEl:x,kickerEl:w,titleEl:T,usageEl:g,lastPx:-9999,lastPy:-9999};if(u.targetZone){let A=document.createElement("button");A.type="button",A.className="campus-pop-cta",A.addEventListener("click",L=>{L.stopPropagation(),a(),e.onSelectZone(u.targetZone)}),E.appendChild(A),I.visitBtn=A}else{if(u.skuId){let L=document.createElement("button");L.type="button",L.className="campus-pop-cta",L.addEventListener("click",B=>{B.stopPropagation(),a(),e.onInspectProduct(u.skuId)}),E.appendChild(L),I.specsBtn=L}if(u.hrefEn){let L=document.createElement("a");L.className="campus-pop-link",L.href=u.hrefEn,L.target="_blank",L.rel="noopener noreferrer",E.appendChild(L),I.linkEl=L}let A=document.createElement("button");A.type="button",A.className=u.skuId?"campus-pop-link":"campus-pop-cta",A.addEventListener("click",L=>{L.stopPropagation(),a(),e.onInquireProduct(u)}),E.appendChild(A),I.inquireBtn=A}x.append(y,g,E),_.append(M,x),i.appendChild(_),M.addEventListener("click",A=>{if(A.stopPropagation(),u.targetZone){a(),e.onSelectZone(u.targetZone);return}c(I)}),o.push(I)});let h=u=>{t=u;let _=Qa[t];o.forEach(M=>{let{def:p}=M;M.tagEl.textContent=p.title[t],M.pinBtn.setAttribute("aria-label",p.title[t]),M.kickerEl.textContent=p.kicker[t],M.titleEl.textContent=p.title[t],M.usageEl.textContent=p.usage[t],M.visitBtn&&(M.visitBtn.textContent=_.visitZone),M.specsBtn&&(M.specsBtn.textContent=_.viewSpecs),M.linkEl&&p.hrefEn&&p.hrefZh&&(M.linkEl.href=t==="zh"?p.hrefZh:p.hrefEn,M.linkEl.textContent=t==="zh"?"\u4EA7\u54C1\u9875 \u2197":"Page \u2197"),M.inquireBtn&&(M.inquireBtn.textContent=_.inquireSetup)})};h("en");let f=u=>{let _=u.target;(!(_ instanceof Element)||!_.closest(".campus-hotspot"))&&a()};return document.addEventListener("click",f),{updateProjection:(u,_,M,p)=>{if(s!==p&&(a(),s=p),!(_<10||M<10))for(let m=0;m<o.length;m++){let x=o[m];if(!(x.def.zone===p)){x.rootEl.style.display="none";continue}if(r.copy(x.worldVec).project(u),r.z>1||r.z<-1||r.x<-1.04||r.x>1.04||r.y<-1.04||r.y>1.04){x.rootEl.style.display="none";continue}let v=(r.x*.5+.5)*_,w=(-r.y*.5+.5)*M;x.rootEl.style.display="",(Math.abs(v-x.lastPx)>=.35||Math.abs(w-x.lastPy)>=.35)&&(x.lastPx=v,x.lastPy=w,x.rootEl.style.left=`${v.toFixed(1)}px`,x.rootEl.style.top=`${w.toFixed(1)}px`),n===x.def.id&&l(x)}},setLanguage:h,closeAll:a,getOpenId:()=>n,dispose:()=>{document.removeEventListener("click",f),i.innerHTML=""}}}function Gr(i,e){let t=document.createElement("canvas");t.width=i,t.height=e;let n=t.getContext("2d");return[t,n]}function Vr(i,e,t=1,n=1){return i.colorSpace=Dt,i.wrapS=wi,i.wrapT=wi,i.repeat.set(t,n),i.anisotropy=e,i.needsUpdate=!0,i}function K0(i){let[e,t]=Gr(512,512);t.fillStyle="#0e1b2d",t.fillRect(0,0,512,512);let n=t.createLinearGradient(0,0,512,512);n.addColorStop(0,"#13243b"),n.addColorStop(.5,"#0d192b"),n.addColorStop(1,"#152a44"),t.fillStyle=n,t.fillRect(10,10,492,492),t.strokeStyle="#cbd5dc",t.lineWidth=10,t.strokeRect(5,5,502,502);let s=6,r=10,o=12,a=(512-o*2)/s,l=(512-o*2)/r;for(let h=0;h<r;h++)for(let f=0;f<s;f++){let d=o+f*a,u=o+h*l;t.fillStyle=(h+f)%2===0?"#112238":"#142740",t.fillRect(d+2,u+2,a-4,l-4),t.fillStyle="rgba(205, 222, 236, 0.22)",t.fillRect(d+a*.25,u+2,1.2,l-4),t.fillRect(d+a*.5,u+2,1.2,l-4),t.fillRect(d+a*.75,u+2,1.2,l-4)}t.fillStyle="rgba(215, 226, 234, 0.42)",t.fillRect(10,254,492,4);let c=new mn(e);return Vr(c,i,1,1)}function Q0(i){let[e,t]=Gr(256,256);t.fillStyle="#f2eee6",t.fillRect(0,0,256,256);for(let s=0;s<1800;s++){let r=s*73%256,o=s*137%256;t.fillStyle=s%3===0?"rgba(198, 190, 176, 0.18)":"rgba(255, 255, 255, 0.22)",t.fillRect(r,o,2,2)}t.strokeStyle="rgba(176, 168, 154, 0.24)",t.lineWidth=1;for(let s=64;s<256;s+=64)t.beginPath(),t.moveTo(0,s),t.lineTo(256,s),t.stroke();let n=new mn(e);return Vr(n,i,2,2)}function j0(i){let[e,t]=Gr(256,256);t.fillStyle="#6c777a",t.fillRect(0,0,256,256);for(let s=0;s<2600;s++){let r=s*97%256,o=s*53%256;t.fillStyle=s%2===0?"rgba(255, 255, 255, 0.055)":"rgba(18, 28, 30, 0.08)",t.fillRect(r,o,2,2)}let n=new mn(e);return Vr(n,i,6,1)}function e_(i){let[e,t]=Gr(512,512);t.fillStyle="#c5d3c6",t.fillRect(0,0,512,512);for(let s=0;s<4200;s++){let r=(Math.sin(s*127.1+17)*43758.5453%1+1)%1*512,o=(Math.sin(s*311.7+83)*29743.2347%1+1)%1*512,a=s%3;t.fillStyle=a===0?"rgba(164, 188, 166, 0.24)":a===1?"rgba(218, 226, 210, 0.22)":"rgba(128, 158, 134, 0.16)",t.fillRect(r,o,3,3)}let n=new mn(e);return Vr(n,i,16,16)}function t_(i){let[e,t]=Gr(256,256);t.fillStyle="#b98f63",t.fillRect(0,0,256,256);for(let s=0;s<256;s+=28)t.fillStyle=s%56===0?"rgba(155, 112, 70, 0.25)":"rgba(210, 174, 132, 0.15)",t.fillRect(0,s,256,25),t.fillStyle="rgba(72, 48, 28, 0.32)",t.fillRect(0,s+25,256,3);let n=new mn(e);return Vr(n,i,2,2)}function Nu(i){let e=Math.min(i.capabilities.getMaxAnisotropy(),4),t=K0(e),n=Q0(e),s=j0(e),r=e_(e),o=t_(e),a=["/assets/images/stage-battery.png","/assets/images/stage-inverter.png","/assets/images/products/series_horizon.png","/assets/images/products/hybrid50.png","/assets/images/products/series_seed24.png","/assets/images/products/origAEV1000.png","/assets/images/stage-solar.png","/assets/images/stage-light.png","/assets/images/products/jcLight28.png","/assets/images/products/jcLight09.png"],l=new Pi,c=new Map;return a.forEach(h=>{let f=l.load(h,d=>{d.colorSpace=Dt,d.anisotropy=e,d.needsUpdate=!0});f.colorSpace=Dt,c.set(h,f)}),{solarPanel:t,limestoneWall:n,roadAsphalt:s,grassGround:r,timberDeck:o,productTextures:c,dispose:()=>{t.dispose(),n.dispose(),s.dispose(),r.dispose(),o.dispose(),c.forEach(h=>h.dispose()),c.clear()}}}var Uu=new qe(14543083),n_=new qe(1451570),Fu=new qe(16774628),i_=new qe(10207983),Ou=new qe(15135743),s_=new qe(4944020),Bu=new qe(11978172),r_=new qe(1912374);function Hu(i){let{heroSection:e,stickyViewport:t,canvasHost:n,hotspotsHost:s,fallbackView:r}=i,o=!1,a=!1,l=!1,c=!1,h=!1,f=!1,d="day",u="overview",_="en",M=window.matchMedia("(prefers-reduced-motion: reduce)"),p=M.matches,m=0,x=0,y=null,v=null,w=0,T=null,g=null,E=X=>{console.warn("[Anthrise Campus 3D]",X),e.dataset.webglState="fallback",r.hidden=!1},I=window.setTimeout(()=>{!a&&!o&&E("WebGL initialization timed out")},3e3),A;try{A=document.createElement("canvas"),A.className="campus-webgl-canvas",A.setAttribute("aria-label","Interactive 3D Clean Energy Campus"),n.appendChild(A),y=new Xa({canvas:A,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch(X){return window.clearTimeout(I),E(String(X)),{bridge:{setTime:()=>{},setFlowVisible:()=>{},setMotionPaused:()=>{},setZone:()=>{},setLanguage:()=>{},setSuspended:()=>{},closeHotspots:()=>{},getState:()=>({ready:!1,time:d,flowVisible:f,activeZone:u})},dispose:()=>{}}}let L=y.getContext(),B=L.getExtension("WEBGL_debug_renderer_info"),V=B?String(L.getParameter(B.UNMASKED_RENDERER_WEBGL)):"",D=/SwiftShader|llvmpipe|softpipe/i.test(V),z=window.innerWidth<=768;y.outputColorSpace=Dt,y.toneMapping=Ar,y.toneMappingExposure=1.02,y.setPixelRatio(D?1:Math.min(window.devicePixelRatio||1,z?1.5:2)),y.shadowMap.enabled=!0,y.shadowMap.type=ta;let Y=new Ai,q=Uu.clone(),ne=new Ks(q.getHex(),.0068);Y.background=q,Y.fog=ne;let $=new As(y),se=new Ja;v=$.fromScene(se,.04),Y.environment=v.texture,Y.environmentIntensity=.5,se.dispose(),$.dispose();let re=new Mr(Ou.getHex(),Bu.getHex(),.92);Y.add(re);let de=new ys(Fu.getHex(),2.1);de.position.set(28,36,22),de.castShadow=!0,de.shadow.mapSize.set(D||z?1024:2048,D||z?1024:2048),de.shadow.camera.near=6,de.shadow.camera.far=96,de.shadow.camera.left=-36,de.shadow.camera.right=36,de.shadow.camera.top=34,de.shadow.camera.bottom=-34,de.shadow.bias=-4e-4,de.shadow.normalBias=.025,Y.add(de);let Ge=new ys(13362158,.45);Ge.position.set(-28,16,-24),Y.add(Ge);let j=new Qt(40,16/9,.4,220),_e=Nu(y),ce=Ru(_e);Y.add(ce.root);let Pe=Cu(ce.root,_e),fe=Iu();Y.add(fe.group);let Le=Pu(j),st=Math.max(1,n.clientWidth),De=Math.max(1,n.clientHeight),ke=Du(s,{onSelectZone:X=>Je(X,!1),onInspectProduct:X=>i.onInspectProduct?.(X),onInquireProduct:X=>i.onInquireProduct?.(X)}),We=!0,Z=()=>{y&&(st=Math.max(1,n.clientWidth),De=Math.max(1,n.clientHeight),y.setSize(st,De,!1),j.aspect=st/De,j.updateProjectionMatrix(),We=!0)};Z();let pe=null,ue=0,Te=()=>{let X=e.getBoundingClientRect(),le=Math.max(1,t.clientHeight||window.innerHeight-70),J=X.height-le;if(J<=40)return pe?kr[pe].progress:ue;let ee=vt.clamp(-X.top/J,0,1);return ue=ee,ee},xe=X=>{q.copy(Uu).lerp(n_,X),ne.color.copy(q),ne.density=vt.lerp(.0068,.0076,X),Y.environmentIntensity=vt.lerp(.5,.25,X),de.color.copy(Fu).lerp(i_,X),de.intensity=vt.lerp(2.1,.85,X),re.color.copy(Ou).lerp(s_,X),re.groundColor.copy(Bu).lerp(r_,X),re.intensity=vt.lerp(.92,.64,X),Ge.intensity=vt.lerp(.45,.36,X),ce.setNightFactor(X),Pe.setNightFactor(X),fe.setState(X,p,h)},Je=(X,le=!1)=>{let J=kr[X];if(!J)return;let ee=e.getBoundingClientRect(),me=Math.max(1,t.clientHeight||window.innerHeight-70),N=ee.height-me;if(Le.resetOrbit(),ke.closeAll(),N>40){let P=window.scrollY+ee.top-70,U=Math.max(0,P+J.progress*N);le||p?(window.scrollTo({top:U,behavior:"auto"}),Le.snapToProgress(J.progress,st/De)):window.scrollTo({top:U,behavior:"smooth"})}else pe=X,ue=J.progress,le||p?Le.snapToProgress(J.progress,st/De):Le.setScrollProgress(J.progress);u!==X&&(u=X,i.onZoneChange?.(X)),We=!0},Ne=!1,et=0,je=0,rt=0,O=X=>{X.button!==0&&X.pointerType==="mouse"||X.target?.closest(".campus-hotspot, .campus-hud, button, a")||(Ne=!0,rt=0,et=X.clientX,je=X.clientY,n.classList.add("is-dragging"))},ot=X=>{if(!Ne)return;let le=X.clientX-et,J=X.clientY-je;et=X.clientX,je=X.clientY,rt+=Math.hypot(le,J),Le.setOrbitOffset(-le*.0042,-J*.0024),We=!0},it=()=>{Ne&&(Ne=!1,n.classList.remove("is-dragging"),rt>6&&(n.dataset.recentDrag="1",window.setTimeout(()=>{delete n.dataset.recentDrag},90)))};n.addEventListener("pointerdown",O),window.addEventListener("pointermove",ot,{passive:!0}),window.addEventListener("pointerup",it,{passive:!0});let dt=()=>{pe=null;let X=Te();Le.setScrollProgress(X);let le=Le.getZoneForProgress(X);le!==u&&(u=le,i.onZoneChange?.(le)),We=!0};window.addEventListener("scroll",dt,{passive:!0});let ge=X=>{X.preventDefault(),c=!0,E("WebGL context lost")},mt=()=>{c=!1,We=!0,e.dataset.webglState="active",r.hidden=!0};A.addEventListener("webglcontextlost",ge),A.addEventListener("webglcontextrestored",mt),"ResizeObserver"in window&&(T=new ResizeObserver(()=>Z()),T.observe(n)),"IntersectionObserver"in window&&(g=new IntersectionObserver(X=>{X.forEach(le=>{l=!le.isIntersecting})},{threshold:.02}),g.observe(e));let Oe=()=>{document.visibilityState==="visible"&&(R=performance.now())};document.addEventListener("visibilitychange",Oe);let Ye=X=>{p=X.matches,fe.setState(m,p,h)};M.addEventListener("change",Ye);let R=performance.now(),S=0,k=0,he=X=>{if(o)return;if(w=window.requestAnimationFrame(he),l||c||document.visibilityState==="hidden"){R=X;return}if(D&&X-S<45)return;let le=Math.max(0,Math.min((X-R)/1e3,.08));R=X;let J=!1;if(Math.abs(m-x)>.002){if(p||h)m=x;else{let U=1-Math.exp(-3.6*le);m=Math.abs(x-m)<.008?x:vt.lerp(m,x,U)}xe(m),J=!0}let ee=Te();Le.setScrollProgress(ee);let me=Le.update(le,st/Math.max(1,De),p),N=f&&!p&&!h,P=!p&&!h;Pe.update(le,!P),N?fe.update(le):We&&f&&fe.update(0),(We||J||me||N||P||k<2)&&(S=X,We=!1,y.render(Y,j),ke.updateProjection(j,st,De,u),k++,!a&&k>=2&&(a=!0,window.clearTimeout(I),e.dataset.webglState="active",r.hidden=!0))};return xe(0),Le.snapToProgress(Te(),st/Math.max(1,De)),y.render(Y,j),ke.updateProjection(j,st,De,u),a=!0,window.clearTimeout(I),e.dataset.webglState="active",r.hidden=!0,w=window.requestAnimationFrame(he),{bridge:{setTime:(X,le=!1)=>{d=X,x=X==="night"?1:0,(le||p)&&(m=x,xe(m)),We=!0},setFlowVisible:X=>{f=X,fe.setVisible(X),We=!0},setMotionPaused:X=>{h=X,fe.setState(m,p,h),We=!0},setZone:Je,setLanguage:X=>{_=X,ke.setLanguage(_),We=!0},setSuspended:X=>{c=X,X||(We=!0)},closeHotspots:()=>{ke.closeAll()},getState:()=>({ready:a,time:d,flowVisible:f,activeZone:u})},dispose:()=>{o=!0,window.clearTimeout(I),w&&window.cancelAnimationFrame(w),n.removeEventListener("pointerdown",O),window.removeEventListener("pointermove",ot),window.removeEventListener("pointerup",it),window.removeEventListener("scroll",dt),document.removeEventListener("visibilitychange",Oe),M.removeEventListener("change",Ye),A.removeEventListener("webglcontextlost",ge),A.removeEventListener("webglcontextrestored",mt),T?.disconnect(),g?.disconnect(),ke.dispose(),fe.dispose(),Pe.dispose(),ce.dispose(),_e.dispose(),v?.dispose(),y?.dispose(),A.remove()}}}function zu(){let i=document.getElementById("hero-section"),e=document.getElementById("hero-scene-viewport"),t=document.getElementById("campus-canvas-host"),n=document.getElementById("campus-hotspots"),s=document.getElementById("campus-fallback-view");if(!i||!e||!t||!n||!s)return;let r=document.getElementById("campus-zone-num"),o=document.getElementById("campus-zone-title"),a=document.getElementById("campus-zone-subtitle"),l=document.getElementById("campus-zone-note"),c=document.getElementById("campus-drag-hint"),h=Array.from(document.querySelectorAll("[data-campus-zone]")),f="overview",d=i.dataset.sceneTime==="night"?"night":"day",u=document.documentElement.lang.startsWith("zh")?"zh":"en",_=()=>{let v=kr[f],w=Qa[u];r&&(r.textContent=v.num),o&&(o.textContent=v.title[u]),a&&(a.textContent=v.subtitle[u]),l&&(l.textContent=d==="night"?v.noteNight[u]:v.noteDay[u]),c&&(c.textContent=w.dragHint),h.forEach(T=>{let g=T.dataset.campusZone;if(!g)return;let E=g===f;T.classList.toggle("is-active",E),T.setAttribute("aria-pressed",String(E));let I=T.querySelector(".campus-zone-label");I&&(I.textContent=w.zones[g])}),i.dataset.activeZone=f},m=Hu({heroSection:i,stickyViewport:e,canvasHost:t,hotspotsHost:n,fallbackView:s,onZoneChange:v=>{f=v,_()},onInspectProduct:v=>{if(typeof window.__anthriseOpenStageProduct=="function"){window.__anthriseOpenStageProduct(v);return}document.getElementById("products")?.scrollIntoView({behavior:"smooth",block:"start"})},onInquireProduct:v=>{let w=v.title[u],T=v.modelCode||"",g=v.topic||"home";if(typeof window.__anthrisePrefillInquiry=="function"){window.__anthrisePrefillInquiry(g,T,w);return}let E=document.getElementById("project-inquiry"),I=document.getElementById("inq-topic"),A=document.getElementById("inq-message");if(I instanceof HTMLSelectElement&&(I.value=g),A instanceof HTMLTextAreaElement){let L=u==="zh"?`[\u56ED\u533A\u573A\u666F\u54A8\u8BE2] ${w}${T?`\uFF08${T}\uFF09`:""}
`:`[Campus Inquiry] ${w}${T?` (${T})`:""}
`;A.value.includes(w)||(A.value=A.value.trim()?`${L}${A.value}`:L)}E?.scrollIntoView({behavior:"smooth",block:"start"})}}),x={...m.bridge,setTime:(v,w)=>{d=v,m.bridge.setTime(v,w),_()},setZone:(v,w)=>{f=v,m.bridge.setZone(v,w),_()},setLanguage:v=>{u=v,m.bridge.setLanguage(v),_()}};window.ANTHRISE_CAMPUS=x,h.forEach(v=>{v.addEventListener("click",()=>{let w=v.dataset.campusZone;w&&x.setZone(w,!1)})}),x.setTime(d,!0),x.setLanguage(u),_();let y=document.getElementById("scene-flow-toggle");y instanceof HTMLButtonElement&&y.getAttribute("aria-pressed")!=="true"&&y.click(),window.addEventListener("beforeunload",()=>{m.dispose()})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",zu,{once:!0}):zu();
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
