"use strict";(self.webpackChunk_ember_auto_import_=self.webpackChunk_ember_auto_import_||[]).push([[910],{112:(t,n,e)=>{function r(t,n){return null==t||null==n?NaN:t<n?-1:t>n?1:t>=n?0:NaN}e.d(n,{Z:()=>r})},191:(t,n,e)=>{e.d(n,{Nw:()=>s,ZP:()=>l,ZR:()=>c,ml:()=>a})
var r=e(112),i=e(462),o=e(69)
const u=(0,i.Z)(r.Z),a=u.right,s=u.left,c=(0,i.Z)(o.Z).center,l=a},462:(t,n,e)=>{e.d(n,{Z:()=>i})
var r=e(112)
function i(t){let n=t,e=t
function i(t,n,r,i){for(null==r&&(r=0),null==i&&(i=t.length);r<i;){const o=r+i>>>1
e(t[o],n)<0?r=o+1:i=o}return r}return 1===t.length&&(n=(n,e)=>t(n)-e,e=function(t){return(n,e)=>(0,r.Z)(t(n),e)}(t)),{left:i,center:function(t,e,r,o){null==r&&(r=0),null==o&&(o=t.length)
const u=i(t,e,r,o-1)
return u>r&&n(t[u-1],e)>-n(t[u],e)?u-1:u},right:function(t,n,r,i){for(null==r&&(r=0),null==i&&(i=t.length);r<i;){const o=r+i>>>1
e(t[o],n)>0?i=o:r=o+1}return r}}}},612:(t,n,e)=>{e.r(n),e.d(n,{Adder:()=>d,InternMap:()=>x.L,InternSet:()=>x.H,ascending:()=>i.Z,bin:()=>z,bisect:()=>r.ZP,bisectCenter:()=>r.ZR,bisectLeft:()=>r.Nw,bisectRight:()=>r.ml,bisector:()=>o.Z,count:()=>u,cross:()=>h,cumsum:()=>f,descending:()=>_,deviation:()=>y,difference:()=>wt,disjoint:()=>Mt,every:()=>yt,extent:()=>g,fcumsum:()=>m,filter:()=>dt,flatGroup:()=>A,flatRollup:()=>k,fsum:()=>v,greatest:()=>ut,greatestIndex:()=>at,group:()=>M,groupSort:()=>q,groups:()=>b,histogram:()=>z,index:()=>C,indexes:()=>E,intersection:()=>Tt,least:()=>it,leastIndex:()=>ot,map:()=>vt,max:()=>B.Z,maxIndex:()=>X,mean:()=>$,median:()=>G,merge:()=>W,min:()=>Q.Z,minIndex:()=>J,mode:()=>K,nice:()=>H,pairs:()=>tt,permute:()=>Z,quantile:()=>I.Z,quantileSorted:()=>I.s,quickselect:()=>et.Z,range:()=>rt.Z,reduce:()=>mt,reverse:()=>xt,rollup:()=>N,rollups:()=>S,scan:()=>st,shuffle:()=>ct,shuffler:()=>lt,some:()=>gt,sort:()=>P,subset:()=>kt,sum:()=>ht,superset:()=>At,thresholdFreedmanDiaconis:()=>j,thresholdScott:()=>V,thresholdSturges:()=>R,tickIncrement:()=>O.G9,tickStep:()=>O.ly,ticks:()=>O.ZP,transpose:()=>ft,union:()=>Nt,variance:()=>p,zip:()=>pt})
var r=e(191),i=e(112),o=e(462)
function u(t,n){let e=0
if(void 0===n)for(let r of t)null!=r&&(r=+r)>=r&&++e
else{let r=-1
for(let i of t)null!=(i=n(i,++r,t))&&(i=+i)>=i&&++e}return e}function a(t){return 0|t.length}function s(t){return!(t>0)}function c(t){return"object"!=typeof t||"length"in t?t:Array.from(t)}function l(t){return n=>t(...n)}function h(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e]
const r="function"==typeof n[n.length-1]&&l(n.pop()),i=(n=n.map(c)).map(a),o=n.length-1,u=new Array(o+1).fill(0),h=[]
if(o<0||i.some(s))return h
for(;;){h.push(u.map(((t,e)=>n[e][t])))
let t=o
for(;++u[t]===i[t];){if(0===t)return r?h.map(r):h
u[t--]=0}}}function f(t,n){var e=0,r=0
return Float64Array.from(t,void 0===n?t=>e+=+t||0:i=>e+=+n(i,r++,t)||0)}function _(t,n){return null==t||null==n?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function p(t,n){let e,r=0,i=0,o=0
if(void 0===n)for(let u of t)null!=u&&(u=+u)>=u&&(e=u-i,i+=e/++r,o+=e*(u-i))
else{let u=-1
for(let a of t)null!=(a=n(a,++u,t))&&(a=+a)>=a&&(e=a-i,i+=e/++r,o+=e*(a-i))}if(r>1)return o/(r-1)}function y(t,n){const e=p(t,n)
return e?Math.sqrt(e):e}function g(t,n){let e,r
if(void 0===n)for(const i of t)null!=i&&(void 0===e?i>=i&&(e=r=i):(e>i&&(e=i),r<i&&(r=i)))
else{let i=-1
for(let o of t)null!=(o=n(o,++i,t))&&(void 0===e?o>=o&&(e=r=o):(e>o&&(e=o),r<o&&(r=o)))}return[e,r]}class d{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const n=this._partials
let e=0
for(let r=0;r<this._n&&r<32;r++){const i=n[r],o=t+i,u=Math.abs(t)<Math.abs(i)?t-(o-i):i-(o-t)
u&&(n[e++]=u),t=o}return n[e]=t,this._n=e+1,this}valueOf(){const t=this._partials
let n,e,r,i=this._n,o=0
if(i>0){for(o=t[--i];i>0&&(n=o,e=t[--i],o=n+e,r=e-(o-n),!r););i>0&&(r<0&&t[i-1]<0||r>0&&t[i-1]>0)&&(e=2*r,n=o+e,e==n-o&&(o=n))}return o}}function v(t,n){const e=new d
if(void 0===n)for(let r of t)(r=+r)&&e.add(r)
else{let r=-1
for(let i of t)(i=+n(i,++r,t))&&e.add(i)}return+e}function m(t,n){const e=new d
let r=-1
return Float64Array.from(t,void 0===n?t=>e.add(+t||0):i=>e.add(+n(i,++r,t)||0))}var x=e(691)
function w(t){return t}function M(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r]
return U(t,w,w,e)}function b(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r]
return U(t,Array.from,w,e)}function T(t,n){for(let e=1,r=n.length;e<r;++e)t=t.flatMap((t=>t.pop().map((n=>{let[e,r]=n
return[...t,e,r]}))))
return t}function A(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r]
return T(b(t,...e),e)}function k(t,n){for(var e=arguments.length,r=new Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i]
return T(S(t,n,...r),r)}function N(t,n){for(var e=arguments.length,r=new Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i]
return U(t,w,n,r)}function S(t,n){for(var e=arguments.length,r=new Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i]
return U(t,Array.from,n,r)}function C(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r]
return U(t,w,D,e)}function E(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r]
return U(t,Array.from,D,e)}function D(t){if(1!==t.length)throw new Error("duplicate key")
return t[0]}function U(t,n,e,r){return function t(i,o){if(o>=r.length)return e(i)
const u=new x.L,a=r[o++]
let s=-1
for(const n of i){const t=a(n,++s,i),e=u.get(t)
e?e.push(n):u.set(t,[n])}for(const[n,e]of u)u.set(n,t(e,o))
return n(u)}(t,0)}function Z(t,n){return Array.from(n,(n=>t[n]))}function P(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r]
if("function"!=typeof t[Symbol.iterator])throw new TypeError("values is not iterable")
t=Array.from(t)
let[o=i.Z]=e
if(1===o.length||e.length>1){const n=Uint32Array.from(t,((t,n)=>n))
return e.length>1?(e=e.map((n=>t.map(n))),n.sort(((t,n)=>{for(const r of e){const e=(0,i.Z)(r[t],r[n])
if(e)return e}}))):(o=t.map(o),n.sort(((t,n)=>(0,i.Z)(o[t],o[n])))),Z(t,n)}return t.sort(o)}function q(t,n,e){return(1===n.length?P(N(t,n,e),((t,n)=>{let[e,r]=t,[o,u]=n
return(0,i.Z)(r,u)||(0,i.Z)(e,o)})):P(M(t,e),((t,e)=>{let[r,o]=t,[u,a]=e
return n(o,a)||(0,i.Z)(r,u)}))).map((t=>{let[n]=t
return n}))}var F=Array.prototype,L=F.slice
function Y(t){return function(){return t}}F.map
var O=e(543)
function H(t,n,e){let r
for(;;){const i=(0,O.G9)(t,n,e)
if(i===r||0===i||!isFinite(i))return[t,n]
i>0?(t=Math.floor(t/i)*i,n=Math.ceil(n/i)*i):i<0&&(t=Math.ceil(t*i)/i,n=Math.floor(n*i)/i),r=i}}function R(t){return Math.ceil(Math.log(u(t))/Math.LN2)+1}function z(){var t=w,n=g,e=R
function i(i){Array.isArray(i)||(i=Array.from(i))
var o,u,a=i.length,s=new Array(a)
for(o=0;o<a;++o)s[o]=t(i[o],o,i)
var c=n(s),l=c[0],h=c[1],f=e(s,l,h)
if(!Array.isArray(f)){const t=h,e=+f
if(n===g&&([l,h]=H(l,h,e)),(f=(0,O.ZP)(l,h,e))[f.length-1]>=h)if(t>=h&&n===g){const t=(0,O.G9)(l,h,e)
isFinite(t)&&(t>0?h=(Math.floor(h/t)+1)*t:t<0&&(h=(Math.ceil(h*-t)+1)/-t))}else f.pop()}for(var _=f.length;f[0]<=l;)f.shift(),--_
for(;f[_-1]>h;)f.pop(),--_
var p,y=new Array(_+1)
for(o=0;o<=_;++o)(p=y[o]=[]).x0=o>0?f[o-1]:l,p.x1=o<_?f[o]:h
for(o=0;o<a;++o)null!=(u=s[o])&&l<=u&&u<=h&&y[(0,r.ZP)(f,u,0,_)].push(i[o])
return y}return i.value=function(n){return arguments.length?(t="function"==typeof n?n:Y(n),i):t},i.domain=function(t){return arguments.length?(n="function"==typeof t?t:Y([t[0],t[1]]),i):n},i.thresholds=function(t){return arguments.length?(e="function"==typeof t?t:Array.isArray(t)?Y(L.call(t)):Y(t),i):e},i}var I=e(637)
function j(t,n,e){return Math.ceil((e-n)/(2*((0,I.Z)(t,.75)-(0,I.Z)(t,.25))*Math.pow(u(t),-1/3)))}function V(t,n,e){return Math.ceil((e-n)/(3.5*y(t)*Math.pow(u(t),-1/3)))}var B=e(972)
function X(t,n){let e,r=-1,i=-1
if(void 0===n)for(const o of t)++i,null!=o&&(e<o||void 0===e&&o>=o)&&(e=o,r=i)
else for(let o of t)null!=(o=n(o,++i,t))&&(e<o||void 0===e&&o>=o)&&(e=o,r=i)
return r}function $(t,n){let e=0,r=0
if(void 0===n)for(let i of t)null!=i&&(i=+i)>=i&&(++e,r+=i)
else{let i=-1
for(let o of t)null!=(o=n(o,++i,t))&&(o=+o)>=o&&(++e,r+=o)}if(e)return r/e}function G(t,n){return(0,I.Z)(t,.5,n)}function W(t){return Array.from(function*(t){for(const n of t)yield*n}(t))}var Q=e(331)
function J(t,n){let e,r=-1,i=-1
if(void 0===n)for(const o of t)++i,null!=o&&(e>o||void 0===e&&o>=o)&&(e=o,r=i)
else for(let o of t)null!=(o=n(o,++i,t))&&(e>o||void 0===e&&o>=o)&&(e=o,r=i)
return r}function K(t,n){const e=new x.L
if(void 0===n)for(let o of t)null!=o&&o>=o&&e.set(o,(e.get(o)||0)+1)
else{let r=-1
for(let i of t)null!=(i=n(i,++r,t))&&i>=i&&e.set(i,(e.get(i)||0)+1)}let r,i=0
for(const[o,u]of e)u>i&&(i=u,r=o)
return r}function tt(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:nt
const e=[]
let r,i=!1
for(const o of t)i&&e.push(n(r,o)),r=o,i=!0
return e}function nt(t,n){return[t,n]}var et=e(391),rt=e(319)
function it(t){let n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.Z,r=!1
if(1===e.length){let o
for(const u of t){const t=e(u);(r?(0,i.Z)(t,o)<0:0===(0,i.Z)(t,t))&&(n=u,o=t,r=!0)}}else for(const i of t)(r?e(i,n)<0:0===e(i,i))&&(n=i,r=!0)
return n}function ot(t){let n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.Z
if(1===e.length)return J(t,e)
let r=-1,o=-1
for(const i of t)++o,(r<0?0===e(i,i):e(i,n)<0)&&(n=i,r=o)
return r}function ut(t){let n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.Z,r=!1
if(1===e.length){let o
for(const u of t){const t=e(u);(r?(0,i.Z)(t,o)>0:0===(0,i.Z)(t,t))&&(n=u,o=t,r=!0)}}else for(const i of t)(r?e(i,n)>0:0===e(i,i))&&(n=i,r=!0)
return n}function at(t){let n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.Z
if(1===e.length)return X(t,e)
let r=-1,o=-1
for(const i of t)++o,(r<0?0===e(i,i):e(i,n)>0)&&(n=i,r=o)
return r}function st(t,n){const e=ot(t,n)
return e<0?void 0:e}const ct=lt(Math.random)
function lt(t){return function(n){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.length,i=r-(e=+e)
for(;i;){const r=t()*i--|0,o=n[i+e]
n[i+e]=n[r+e],n[r+e]=o}return n}}function ht(t,n){let e=0
if(void 0===n)for(let r of t)(r=+r)&&(e+=r)
else{let r=-1
for(let i of t)(i=+n(i,++r,t))&&(e+=i)}return e}function ft(t){if(!(i=t.length))return[]
for(var n=-1,e=(0,Q.Z)(t,_t),r=new Array(e);++n<e;)for(var i,o=-1,u=r[n]=new Array(i);++o<i;)u[o]=t[o][n]
return r}function _t(t){return t.length}function pt(){return ft(arguments)}function yt(t,n){if("function"!=typeof n)throw new TypeError("test is not a function")
let e=-1
for(const r of t)if(!n(r,++e,t))return!1
return!0}function gt(t,n){if("function"!=typeof n)throw new TypeError("test is not a function")
let e=-1
for(const r of t)if(n(r,++e,t))return!0
return!1}function dt(t,n){if("function"!=typeof n)throw new TypeError("test is not a function")
const e=[]
let r=-1
for(const i of t)n(i,++r,t)&&e.push(i)
return e}function vt(t,n){if("function"!=typeof t[Symbol.iterator])throw new TypeError("values is not iterable")
if("function"!=typeof n)throw new TypeError("mapper is not a function")
return Array.from(t,((e,r)=>n(e,r,t)))}function mt(t,n,e){if("function"!=typeof n)throw new TypeError("reducer is not a function")
const r=t[Symbol.iterator]()
let i,o,u=-1
if(arguments.length<3){if(({done:i,value:e}=r.next()),i)return;++u}for(;({done:i,value:o}=r.next()),!i;)e=n(e,o,++u,t)
return e}function xt(t){if("function"!=typeof t[Symbol.iterator])throw new TypeError("values is not iterable")
return Array.from(t).reverse()}function wt(t){t=new Set(t)
for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r]
for(const i of e)for(const n of i)t.delete(n)
return t}function Mt(t,n){const e=n[Symbol.iterator](),r=new Set
for(const i of t){if(r.has(i))return!1
let t,n
for(;({value:t,done:n}=e.next())&&!n;){if(Object.is(i,t))return!1
r.add(t)}}return!0}function bt(t){return t instanceof Set?t:new Set(t)}function Tt(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r]
t=new Set(t),e=e.map(bt)
t:for(const i of t)for(const n of e)if(!n.has(i)){t.delete(i)
continue t}return t}function At(t,n){const e=t[Symbol.iterator](),r=new Set
for(const i of n){if(r.has(i))continue
let t,n
for(;({value:t,done:n}=e.next());){if(n)return!1
if(r.add(t),Object.is(i,t))break}}return!0}function kt(t,n){return At(n,t)}function Nt(){const t=new Set
for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r]
for(const i of e)for(const n of i)t.add(n)
return t}},972:(t,n,e)=>{function r(t,n){let e
if(void 0===n)for(const r of t)null!=r&&(e<r||void 0===e&&r>=r)&&(e=r)
else{let r=-1
for(let i of t)null!=(i=n(i,++r,t))&&(e<i||void 0===e&&i>=i)&&(e=i)}return e}e.d(n,{Z:()=>r})},331:(t,n,e)=>{function r(t,n){let e
if(void 0===n)for(const r of t)null!=r&&(e>r||void 0===e&&r>=r)&&(e=r)
else{let r=-1
for(let i of t)null!=(i=n(i,++r,t))&&(e>i||void 0===e&&i>=i)&&(e=i)}return e}e.d(n,{Z:()=>r})},69:(t,n,e)=>{function r(t){return null===t?NaN:+t}function*i(t,n){if(void 0===n)for(let e of t)null!=e&&(e=+e)>=e&&(yield e)
else{let e=-1
for(let r of t)null!=(r=n(r,++e,t))&&(r=+r)>=r&&(yield r)}}e.d(n,{K:()=>i,Z:()=>r})},637:(t,n,e)=>{e.d(n,{Z:()=>a,s:()=>s})
var r=e(972),i=e(331),o=e(391),u=e(69)
function a(t,n,e){if(a=(t=Float64Array.from((0,u.K)(t,e))).length){if((n=+n)<=0||a<2)return(0,i.Z)(t)
if(n>=1)return(0,r.Z)(t)
var a,s=(a-1)*n,c=Math.floor(s),l=(0,r.Z)((0,o.Z)(t,c).subarray(0,c+1))
return l+((0,i.Z)(t.subarray(c+1))-l)*(s-c)}}function s(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u.Z
if(r=t.length){if((n=+n)<=0||r<2)return+e(t[0],0,t)
if(n>=1)return+e(t[r-1],r-1,t)
var r,i=(r-1)*n,o=Math.floor(i),a=+e(t[o],o,t),s=+e(t[o+1],o+1,t)
return a+(s-a)*(i-o)}}},391:(t,n,e)=>{e.d(n,{Z:()=>i})
var r=e(112)
function i(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.length-1,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r.Z
for(;u>e;){if(u-e>600){const r=u-e+1,o=n-e+1,s=Math.log(r),c=.5*Math.exp(2*s/3),l=.5*Math.sqrt(s*c*(r-c)/r)*(o-r/2<0?-1:1)
i(t,n,Math.max(e,Math.floor(n-o*c/r+l)),Math.min(u,Math.floor(n+(r-o)*c/r+l)),a)}const r=t[n]
let s=e,c=u
for(o(t,e,n),a(t[u],r)>0&&o(t,e,u);s<c;){for(o(t,s,c),++s,--c;a(t[s],r)<0;)++s
for(;a(t[c],r)>0;)--c}0===a(t[e],r)?o(t,e,c):(++c,o(t,c,u)),c<=n&&(e=c+1),n<=c&&(u=c-1)}return t}function o(t,n,e){const r=t[n]
t[n]=t[e],t[e]=r}},319:(t,n,e)=>{function r(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e
for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),o=new Array(i);++r<i;)o[r]=t+r*e
return o}e.d(n,{Z:()=>r})},543:(t,n,e)=>{e.d(n,{G9:()=>a,ZP:()=>u,ly:()=>s})
var r=Math.sqrt(50),i=Math.sqrt(10),o=Math.sqrt(2)
function u(t,n,e){var r,i,o,u,s=-1
if(e=+e,(t=+t)==(n=+n)&&e>0)return[t]
if((r=n<t)&&(i=t,t=n,n=i),0===(u=a(t,n,e))||!isFinite(u))return[]
if(u>0){let e=Math.round(t/u),r=Math.round(n/u)
for(e*u<t&&++e,r*u>n&&--r,o=new Array(i=r-e+1);++s<i;)o[s]=(e+s)*u}else{u=-u
let e=Math.round(t*u),r=Math.round(n*u)
for(e/u<t&&++e,r/u>n&&--r,o=new Array(i=r-e+1);++s<i;)o[s]=(e+s)/u}return r&&o.reverse(),o}function a(t,n,e){var u=(n-t)/Math.max(0,e),a=Math.floor(Math.log(u)/Math.LN10),s=u/Math.pow(10,a)
return a>=0?(s>=r?10:s>=i?5:s>=o?2:1)*Math.pow(10,a):-Math.pow(10,-a)/(s>=r?10:s>=i?5:s>=o?2:1)}function s(t,n,e){var u=Math.abs(n-t)/Math.max(0,e),a=Math.pow(10,Math.floor(Math.log(u)/Math.LN10)),s=u/a
return s>=r?a*=10:s>=i?a*=5:s>=o&&(a*=2),n<t?-a:a}},848:(t,n,e)=>{function r(t){return t}e.r(n),e.d(n,{axisBottom:()=>_,axisLeft:()=>p,axisRight:()=>f,axisTop:()=>h})
var i=1e-6
function o(t){return"translate("+t+",0)"}function u(t){return"translate(0,"+t+")"}function a(t){return n=>+t(n)}function s(t,n){return n=Math.max(0,t.bandwidth()-2*n)/2,t.round()&&(n=Math.round(n)),e=>+t(e)+n}function c(){return!this.__axis}function l(t,n){var e=[],l=null,h=null,f=6,_=6,p=3,y="undefined"!=typeof window&&window.devicePixelRatio>1?0:.5,g=1===t||4===t?-1:1,d=4===t||2===t?"x":"y",v=1===t||3===t?o:u
function m(o){var u=null==l?n.ticks?n.ticks.apply(n,e):n.domain():l,m=null==h?n.tickFormat?n.tickFormat.apply(n,e):r:h,x=Math.max(f,0)+p,w=n.range(),M=+w[0]+y,b=+w[w.length-1]+y,T=(n.bandwidth?s:a)(n.copy(),y),A=o.selection?o.selection():o,k=A.selectAll(".domain").data([null]),N=A.selectAll(".tick").data(u,n).order(),S=N.exit(),C=N.enter().append("g").attr("class","tick"),E=N.select("line"),D=N.select("text")
k=k.merge(k.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),N=N.merge(C),E=E.merge(C.append("line").attr("stroke","currentColor").attr(d+"2",g*f)),D=D.merge(C.append("text").attr("fill","currentColor").attr(d,g*x).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),o!==A&&(k=k.transition(o),N=N.transition(o),E=E.transition(o),D=D.transition(o),S=S.transition(o).attr("opacity",i).attr("transform",(function(t){return isFinite(t=T(t))?v(t+y):this.getAttribute("transform")})),C.attr("opacity",i).attr("transform",(function(t){var n=this.parentNode.__axis
return v((n&&isFinite(n=n(t))?n:T(t))+y)}))),S.remove(),k.attr("d",4===t||2===t?_?"M"+g*_+","+M+"H"+y+"V"+b+"H"+g*_:"M"+y+","+M+"V"+b:_?"M"+M+","+g*_+"V"+y+"H"+b+"V"+g*_:"M"+M+","+y+"H"+b),N.attr("opacity",1).attr("transform",(function(t){return v(T(t)+y)})),E.attr(d+"2",g*f),D.attr(d,g*x).text(m),A.filter(c).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),A.each((function(){this.__axis=T}))}return m.scale=function(t){return arguments.length?(n=t,m):n},m.ticks=function(){return e=Array.from(arguments),m},m.tickArguments=function(t){return arguments.length?(e=null==t?[]:Array.from(t),m):e.slice()},m.tickValues=function(t){return arguments.length?(l=null==t?null:Array.from(t),m):l&&l.slice()},m.tickFormat=function(t){return arguments.length?(h=t,m):h},m.tickSize=function(t){return arguments.length?(f=_=+t,m):f},m.tickSizeInner=function(t){return arguments.length?(f=+t,m):f},m.tickSizeOuter=function(t){return arguments.length?(_=+t,m):_},m.tickPadding=function(t){return arguments.length?(p=+t,m):p},m.offset=function(t){return arguments.length?(y=+t,m):y},m}function h(t){return l(1,t)}function f(t){return l(2,t)}function _(t){return l(3,t)}function p(t){return l(4,t)}},297:(t,n,e)=>{e.r(n),e.d(n,{scaleBand:()=>c,scaleDiverging:()=>Br,scaleDivergingLog:()=>Xr,scaleDivergingPow:()=>Gr,scaleDivergingSqrt:()=>Wr,scaleDivergingSymlog:()=>$r,scaleIdentity:()=>Ut,scaleImplicit:()=>a,scaleLinear:()=>Dt,scaleLog:()=>Rt,scaleOrdinal:()=>s,scalePoint:()=>h,scalePow:()=>Wt,scaleQuantile:()=>rn,scaleQuantize:()=>on,scaleRadial:()=>tn,scaleSequential:()=>Yr,scaleSequentialLog:()=>Or,scaleSequentialPow:()=>Rr,scaleSequentialQuantile:()=>Ir,scaleSequentialSqrt:()=>zr,scaleSequentialSymlog:()=>Hr,scaleSqrt:()=>Qt,scaleSymlog:()=>Vt,scaleThreshold:()=>un,scaleTime:()=>Pr,scaleUtc:()=>qr,tickFormat:()=>Ct})
var r=e(319)
function i(t,n){switch(arguments.length){case 0:break
case 1:this.range(t)
break
default:this.range(n).domain(t)}return this}function o(t,n){switch(arguments.length){case 0:break
case 1:"function"==typeof t?this.interpolator(t):this.range(t)
break
default:this.domain(t),"function"==typeof n?this.interpolator(n):this.range(n)}return this}var u=e(691)
const a=Symbol("implicit")
function s(){var t=new u.L,n=[],e=[],r=a
function o(i){let o=t.get(i)
if(void 0===o){if(r!==a)return r
t.set(i,o=n.push(i)-1)}return e[o%e.length]}return o.domain=function(e){if(!arguments.length)return n.slice()
n=[],t=new u.L
for(const r of e)t.has(r)||t.set(r,n.push(r)-1)
return o},o.range=function(t){return arguments.length?(e=Array.from(t),o):e.slice()},o.unknown=function(t){return arguments.length?(r=t,o):r},o.copy=function(){return s(n,e).unknown(r)},i.apply(o,arguments),o}function c(){var t,n,e=s().unknown(void 0),o=e.domain,u=e.range,a=0,l=1,h=!1,f=0,_=0,p=.5
function y(){var e=o().length,i=l<a,s=i?l:a,c=i?a:l
t=(c-s)/Math.max(1,e-f+2*_),h&&(t=Math.floor(t)),s+=(c-s-t*(e-f))*p,n=t*(1-f),h&&(s=Math.round(s),n=Math.round(n))
var y=(0,r.Z)(e).map((function(n){return s+t*n}))
return u(i?y.reverse():y)}return delete e.unknown,e.domain=function(t){return arguments.length?(o(t),y()):o()},e.range=function(t){return arguments.length?([a,l]=t,a=+a,l=+l,y()):[a,l]},e.rangeRound=function(t){return[a,l]=t,a=+a,l=+l,h=!0,y()},e.bandwidth=function(){return n},e.step=function(){return t},e.round=function(t){return arguments.length?(h=!!t,y()):h},e.padding=function(t){return arguments.length?(f=Math.min(1,_=+t),y()):f},e.paddingInner=function(t){return arguments.length?(f=Math.min(1,t),y()):f},e.paddingOuter=function(t){return arguments.length?(_=+t,y()):_},e.align=function(t){return arguments.length?(p=Math.max(0,Math.min(1,t)),y()):p},e.copy=function(){return c(o(),[a,l]).round(h).paddingInner(f).paddingOuter(_).align(p)},i.apply(y(),arguments)}function l(t){var n=t.copy
return t.padding=t.paddingOuter,delete t.paddingInner,delete t.paddingOuter,t.copy=function(){return l(n())},t}function h(){return l(c.apply(null,arguments).paddingInner(1))}var f=e(543),_=e(191)
function p(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function y(t,n){var e=Object.create(t.prototype)
for(var r in n)e[r]=n[r]
return e}function g(){}var d=.7,v=1/d,m="\\s*([+-]?\\d+)\\s*",x="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",w="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",M=/^#([0-9a-f]{3,8})$/,b=new RegExp("^rgb\\("+[m,m,m]+"\\)$"),T=new RegExp("^rgb\\("+[w,w,w]+"\\)$"),A=new RegExp("^rgba\\("+[m,m,m,x]+"\\)$"),k=new RegExp("^rgba\\("+[w,w,w,x]+"\\)$"),N=new RegExp("^hsl\\("+[x,w,w]+"\\)$"),S=new RegExp("^hsla\\("+[x,w,w,x]+"\\)$"),C={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074}
function E(){return this.rgb().formatHex()}function D(){return this.rgb().formatRgb()}function U(t){var n,e
return t=(t+"").trim().toLowerCase(),(n=M.exec(t))?(e=n[1].length,n=parseInt(n[1],16),6===e?Z(n):3===e?new L(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===e?P(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===e?P(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=b.exec(t))?new L(n[1],n[2],n[3],1):(n=T.exec(t))?new L(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=A.exec(t))?P(n[1],n[2],n[3],n[4]):(n=k.exec(t))?P(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=N.exec(t))?R(n[1],n[2]/100,n[3]/100,1):(n=S.exec(t))?R(n[1],n[2]/100,n[3]/100,n[4]):C.hasOwnProperty(t)?Z(C[t]):"transparent"===t?new L(NaN,NaN,NaN,0):null}function Z(t){return new L(t>>16&255,t>>8&255,255&t,1)}function P(t,n,e,r){return r<=0&&(t=n=e=NaN),new L(t,n,e,r)}function q(t){return t instanceof g||(t=U(t)),t?new L((t=t.rgb()).r,t.g,t.b,t.opacity):new L}function F(t,n,e,r){return 1===arguments.length?q(t):new L(t,n,e,null==r?1:r)}function L(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function Y(){return"#"+H(this.r)+H(this.g)+H(this.b)}function O(){var t=this.opacity
return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function H(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function R(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new I(t,n,e,r)}function z(t){if(t instanceof I)return new I(t.h,t.s,t.l,t.opacity)
if(t instanceof g||(t=U(t)),!t)return new I
if(t instanceof I)return t
var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),u=NaN,a=o-i,s=(o+i)/2
return a?(u=n===o?(e-r)/a+6*(e<r):e===o?(r-n)/a+2:(n-e)/a+4,a/=s<.5?o+i:2-o-i,u*=60):a=s>0&&s<1?0:u,new I(u,a,s,t.opacity)}function I(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function j(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}function V(t,n,e,r,i){var o=t*t,u=o*t
return((1-3*t+3*o-u)*n+(4-6*o+3*u)*e+(1+3*t+3*o-3*u)*r+u*i)/6}p(g,U,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:E,formatHex:E,formatHsl:function(){return z(this).formatHsl()},formatRgb:D,toString:D}),p(L,F,y(g,{brighter:function(t){return t=null==t?v:Math.pow(v,t),new L(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?d:Math.pow(d,t),new L(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Y,formatHex:Y,formatRgb:O,toString:O})),p(I,(function(t,n,e,r){return 1===arguments.length?z(t):new I(t,n,e,null==r?1:r)}),y(g,{brighter:function(t){return t=null==t?v:Math.pow(v,t),new I(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?d:Math.pow(d,t),new I(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r
return new L(j(t>=240?t-240:t+120,i,r),j(t,i,r),j(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity
return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}))
const B=t=>()=>t
function X(t,n){var e=n-t
return e?function(t,n){return function(e){return t+e*n}}(t,e):B(isNaN(t)?n:t)}const $=function t(n){var e=function(t){return 1==(t=+t)?X:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):B(isNaN(n)?e:n)}}(n)
function r(t,n){var r=e((t=F(t)).r,(n=F(n)).r),i=e(t.g,n.g),o=e(t.b,n.b),u=X(t.opacity,n.opacity)
return function(n){return t.r=r(n),t.g=i(n),t.b=o(n),t.opacity=u(n),t+""}}return r.gamma=t,r}(1)
function G(t){return function(n){var e,r,i=n.length,o=new Array(i),u=new Array(i),a=new Array(i)
for(e=0;e<i;++e)r=F(n[e]),o[e]=r.r||0,u[e]=r.g||0,a[e]=r.b||0
return o=t(o),u=t(u),a=t(a),r.opacity=1,function(t){return r.r=o(t),r.g=u(t),r.b=a(t),r+""}}}function W(t,n){var e,r=n?n.length:0,i=t?Math.min(r,t.length):0,o=new Array(i),u=new Array(r)
for(e=0;e<i;++e)o[e]=it(t[e],n[e])
for(;e<r;++e)u[e]=n[e]
return function(t){for(e=0;e<i;++e)u[e]=o[e](t)
return u}}function Q(t,n){var e=new Date
return t=+t,n=+n,function(r){return e.setTime(t*(1-r)+n*r),e}}function J(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}function K(t,n){var e,r={},i={}
for(e in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)e in t?r[e]=it(t[e],n[e]):i[e]=n[e]
return function(t){for(e in r)i[e]=r[e](t)
return i}}G((function(t){var n=t.length-1
return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1],u=r>0?t[r-1]:2*i-o,a=r<n-1?t[r+2]:2*o-i
return V((e-r/n)*n,u,i,o,a)}})),G((function(t){var n=t.length
return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n),i=t[(r+n-1)%n],o=t[r%n],u=t[(r+1)%n],a=t[(r+2)%n]
return V((e-r/n)*n,i,o,u,a)}}))
var tt=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,nt=new RegExp(tt.source,"g")
function et(t,n){var e,r,i,o=tt.lastIndex=nt.lastIndex=0,u=-1,a=[],s=[]
for(t+="",n+="";(e=tt.exec(t))&&(r=nt.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),a[u]?a[u]+=i:a[++u]=i),(e=e[0])===(r=r[0])?a[u]?a[u]+=r:a[++u]=r:(a[++u]=null,s.push({i:u,x:J(e,r)})),o=nt.lastIndex
return o<n.length&&(i=n.slice(o),a[u]?a[u]+=i:a[++u]=i),a.length<2?s[0]?function(t){return function(n){return t(n)+""}}(s[0].x):function(t){return function(){return t}}(n):(n=s.length,function(t){for(var e,r=0;r<n;++r)a[(e=s[r]).i]=e.x(t)
return a.join("")})}function rt(t,n){n||(n=[])
var e,r=t?Math.min(n.length,t.length):0,i=n.slice()
return function(o){for(e=0;e<r;++e)i[e]=t[e]*(1-o)+n[e]*o
return i}}function it(t,n){var e,r,i=typeof n
return null==n||"boolean"===i?B(n):("number"===i?J:"string"===i?(e=U(n))?(n=e,$):et:n instanceof U?$:n instanceof Date?Q:(r=n,!ArrayBuffer.isView(r)||r instanceof DataView?Array.isArray(n)?W:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?K:J:rt))(t,n)}function ot(t,n){return t=+t,n=+n,function(e){return Math.round(t*(1-e)+n*e)}}function ut(t){return+t}var at=[0,1]
function st(t){return t}function ct(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:(e=isNaN(n)?NaN:.5,function(){return e})
var e}function lt(t,n,e){var r=t[0],i=t[1],o=n[0],u=n[1]
return i<r?(r=ct(i,r),o=e(u,o)):(r=ct(r,i),o=e(o,u)),function(t){return o(r(t))}}function ht(t,n,e){var r=Math.min(t.length,n.length)-1,i=new Array(r),o=new Array(r),u=-1
for(t[r]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++u<r;)i[u]=ct(t[u],t[u+1]),o[u]=e(n[u],n[u+1])
return function(n){var e=(0,_.ZP)(t,n,1,r)-1
return o[e](i[e](n))}}function ft(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function _t(){var t,n,e,r,i,o,u=at,a=at,s=it,c=st
function l(){var t,n,e,s=Math.min(u.length,a.length)
return c!==st&&(t=u[0],n=u[s-1],t>n&&(e=t,t=n,n=e),c=function(e){return Math.max(t,Math.min(n,e))}),r=s>2?ht:lt,i=o=null,h}function h(n){return null==n||isNaN(n=+n)?e:(i||(i=r(u.map(t),a,s)))(t(c(n)))}return h.invert=function(e){return c(n((o||(o=r(a,u.map(t),J)))(e)))},h.domain=function(t){return arguments.length?(u=Array.from(t,ut),l()):u.slice()},h.range=function(t){return arguments.length?(a=Array.from(t),l()):a.slice()},h.rangeRound=function(t){return a=Array.from(t),s=ot,l()},h.clamp=function(t){return arguments.length?(c=!!t||st,l()):c!==st},h.interpolate=function(t){return arguments.length?(s=t,l()):s},h.unknown=function(t){return arguments.length?(e=t,h):e},function(e,r){return t=e,n=r,l()}}function pt(){return _t()(st,st)}var yt,gt=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i
function dt(t){if(!(n=gt.exec(t)))throw new Error("invalid format: "+t)
var n
return new vt({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}function vt(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function mt(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null
var e,r=t.slice(0,e)
return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]}function xt(t){return(t=mt(Math.abs(t)))?t[1]:NaN}function wt(t,n){var e=mt(t,n)
if(!e)return t+""
var r=e[0],i=e[1]
return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}dt.prototype=vt.prototype,vt.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type}
const Mt={"%":(t,n)=>(100*t).toFixed(n),b:t=>Math.round(t).toString(2),c:t=>t+"",d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:(t,n)=>t.toExponential(n),f:(t,n)=>t.toFixed(n),g:(t,n)=>t.toPrecision(n),o:t=>Math.round(t).toString(8),p:(t,n)=>wt(100*t,n),r:wt,s:function(t,n){var e=mt(t,n)
if(!e)return t+""
var r=e[0],i=e[1],o=i-(yt=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,u=r.length
return o===u?r:o>u?r+new Array(o-u+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+mt(t,Math.max(0,n+o-1))[0]},X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)}
function bt(t){return t}var Tt,At,kt,Nt=Array.prototype.map,St=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"]
function Ct(t,n,e,r){var i,o=(0,f.ly)(t,n,e)
switch((r=dt(null==r?",f":r)).type){case"s":var u=Math.max(Math.abs(t),Math.abs(n))
return null!=r.precision||isNaN(i=function(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(xt(n)/3)))-xt(Math.abs(t)))}(o,u))||(r.precision=i),kt(r,u)
case"":case"e":case"g":case"p":case"r":null!=r.precision||isNaN(i=function(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,xt(n)-xt(t))+1}(o,Math.max(Math.abs(t),Math.abs(n))))||(r.precision=i-("e"===r.type))
break
case"f":case"%":null!=r.precision||isNaN(i=function(t){return Math.max(0,-xt(Math.abs(t)))}(o))||(r.precision=i-2*("%"===r.type))}return At(r)}function Et(t){var n=t.domain
return t.ticks=function(t){var e=n()
return(0,f.ZP)(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){var r=n()
return Ct(r[0],r[r.length-1],null==t?10:t,e)},t.nice=function(e){null==e&&(e=10)
var r,i,o=n(),u=0,a=o.length-1,s=o[u],c=o[a],l=10
for(c<s&&(i=s,s=c,c=i,i=u,u=a,a=i);l-- >0;){if((i=(0,f.G9)(s,c,e))===r)return o[u]=s,o[a]=c,n(o)
if(i>0)s=Math.floor(s/i)*i,c=Math.ceil(c/i)*i
else{if(!(i<0))break
s=Math.ceil(s*i)/i,c=Math.floor(c*i)/i}r=i}return t},t}function Dt(){var t=pt()
return t.copy=function(){return ft(t,Dt())},i.apply(t,arguments),Et(t)}function Ut(t){var n
function e(t){return null==t||isNaN(t=+t)?n:t}return e.invert=e,e.domain=e.range=function(n){return arguments.length?(t=Array.from(n,ut),e):t.slice()},e.unknown=function(t){return arguments.length?(n=t,e):n},e.copy=function(){return Ut(t).unknown(n)},t=arguments.length?Array.from(t,ut):[0,1],Et(e)}function Zt(t,n){var e,r=0,i=(t=t.slice()).length-1,o=t[r],u=t[i]
return u<o&&(e=r,r=i,i=e,e=o,o=u,u=e),t[r]=n.floor(o),t[i]=n.ceil(u),t}function Pt(t){return Math.log(t)}function qt(t){return Math.exp(t)}function Ft(t){return-Math.log(-t)}function Lt(t){return-Math.exp(-t)}function Yt(t){return isFinite(t)?+("1e"+t):t<0?0:t}function Ot(t){return function(n){return-t(-n)}}function Ht(t){var n,e,r=t(Pt,qt),i=r.domain,o=10
function u(){return n=function(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t})}(o),e=function(t){return 10===t?Yt:t===Math.E?Math.exp:function(n){return Math.pow(t,n)}}(o),i()[0]<0?(n=Ot(n),e=Ot(e),t(Ft,Lt)):t(Pt,qt),r}return r.base=function(t){return arguments.length?(o=+t,u()):o},r.domain=function(t){return arguments.length?(i(t),u()):i()},r.ticks=function(t){var r,u=i(),a=u[0],s=u[u.length-1];(r=s<a)&&(_=a,a=s,s=_)
var c,l,h,_=n(a),p=n(s),y=null==t?10:+t,g=[]
if(!(o%1)&&p-_<y){if(_=Math.floor(_),p=Math.ceil(p),a>0){for(;_<=p;++_)for(l=1,c=e(_);l<o;++l)if(!((h=c*l)<a)){if(h>s)break
g.push(h)}}else for(;_<=p;++_)for(l=o-1,c=e(_);l>=1;--l)if(!((h=c*l)<a)){if(h>s)break
g.push(h)}2*g.length<y&&(g=(0,f.ZP)(a,s,y))}else g=(0,f.ZP)(_,p,Math.min(p-_,y)).map(e)
return r?g.reverse():g},r.tickFormat=function(t,i){if(null==i&&(i=10===o?".0e":","),"function"!=typeof i&&(i=At(i)),t===1/0)return i
null==t&&(t=10)
var u=Math.max(1,o*t/r.ticks().length)
return function(t){var r=t/e(Math.round(n(t)))
return r*o<o-.5&&(r*=o),r<=u?i(t):""}},r.nice=function(){return i(Zt(i(),{floor:function(t){return e(Math.floor(n(t)))},ceil:function(t){return e(Math.ceil(n(t)))}}))},r}function Rt(){var t=Ht(_t()).domain([1,10])
return t.copy=function(){return ft(t,Rt()).base(t.base())},i.apply(t,arguments),t}function zt(t){return function(n){return Math.sign(n)*Math.log1p(Math.abs(n/t))}}function It(t){return function(n){return Math.sign(n)*Math.expm1(Math.abs(n))*t}}function jt(t){var n=1,e=t(zt(n),It(n))
return e.constant=function(e){return arguments.length?t(zt(n=+e),It(n)):n},Et(e)}function Vt(){var t=jt(_t())
return t.copy=function(){return ft(t,Vt()).constant(t.constant())},i.apply(t,arguments)}function Bt(t){return function(n){return n<0?-Math.pow(-n,t):Math.pow(n,t)}}function Xt(t){return t<0?-Math.sqrt(-t):Math.sqrt(t)}function $t(t){return t<0?-t*t:t*t}function Gt(t){var n=t(st,st),e=1
function r(){return 1===e?t(st,st):.5===e?t(Xt,$t):t(Bt(e),Bt(1/e))}return n.exponent=function(t){return arguments.length?(e=+t,r()):e},Et(n)}function Wt(){var t=Gt(_t())
return t.copy=function(){return ft(t,Wt()).exponent(t.exponent())},i.apply(t,arguments),t}function Qt(){return Wt.apply(null,arguments).exponent(.5)}function Jt(t){return Math.sign(t)*t*t}function Kt(t){return Math.sign(t)*Math.sqrt(Math.abs(t))}function tn(){var t,n=pt(),e=[0,1],r=!1
function o(e){var i=Kt(n(e))
return isNaN(i)?t:r?Math.round(i):i}return o.invert=function(t){return n.invert(Jt(t))},o.domain=function(t){return arguments.length?(n.domain(t),o):n.domain()},o.range=function(t){return arguments.length?(n.range((e=Array.from(t,ut)).map(Jt)),o):e.slice()},o.rangeRound=function(t){return o.range(t).round(!0)},o.round=function(t){return arguments.length?(r=!!t,o):r},o.clamp=function(t){return arguments.length?(n.clamp(t),o):n.clamp()},o.unknown=function(n){return arguments.length?(t=n,o):t},o.copy=function(){return tn(n.domain(),e).round(r).clamp(n.clamp()).unknown(t)},i.apply(o,arguments),Et(o)}Tt=function(t){var n,e,r=void 0===t.grouping||void 0===t.thousands?bt:(n=Nt.call(t.grouping,Number),e=t.thousands+"",function(t,r){for(var i=t.length,o=[],u=0,a=n[0],s=0;i>0&&a>0&&(s+a+1>r&&(a=Math.max(1,r-s)),o.push(t.substring(i-=a,i+a)),!((s+=a+1)>r));)a=n[u=(u+1)%n.length]
return o.reverse().join(e)}),i=void 0===t.currency?"":t.currency[0]+"",o=void 0===t.currency?"":t.currency[1]+"",u=void 0===t.decimal?".":t.decimal+"",a=void 0===t.numerals?bt:function(t){return function(n){return n.replace(/[0-9]/g,(function(n){return t[+n]}))}}(Nt.call(t.numerals,String)),s=void 0===t.percent?"%":t.percent+"",c=void 0===t.minus?"−":t.minus+"",l=void 0===t.nan?"NaN":t.nan+""
function h(t){var n=(t=dt(t)).fill,e=t.align,h=t.sign,f=t.symbol,_=t.zero,p=t.width,y=t.comma,g=t.precision,d=t.trim,v=t.type
"n"===v?(y=!0,v="g"):Mt[v]||(void 0===g&&(g=12),d=!0,v="g"),(_||"0"===n&&"="===e)&&(_=!0,n="0",e="=")
var m="$"===f?i:"#"===f&&/[boxX]/.test(v)?"0"+v.toLowerCase():"",x="$"===f?o:/[%p]/.test(v)?s:"",w=Mt[v],M=/[defgprs%]/.test(v)
function b(t){var i,o,s,f=m,b=x
if("c"===v)b=w(t)+b,t=""
else{var T=(t=+t)<0||1/t<0
if(t=isNaN(t)?l:w(Math.abs(t),g),d&&(t=function(t){t:for(var n,e=t.length,r=1,i=-1;r<e;++r)switch(t[r]){case".":i=n=r
break
case"0":0===i&&(i=r),n=r
break
default:if(!+t[r])break t
i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(n+1):t}(t)),T&&0==+t&&"+"!==h&&(T=!1),f=(T?"("===h?h:c:"-"===h||"("===h?"":h)+f,b=("s"===v?St[8+yt/3]:"")+b+(T&&"("===h?")":""),M)for(i=-1,o=t.length;++i<o;)if(48>(s=t.charCodeAt(i))||s>57){b=(46===s?u+t.slice(i+1):t.slice(i))+b,t=t.slice(0,i)
break}}y&&!_&&(t=r(t,1/0))
var A=f.length+t.length+b.length,k=A<p?new Array(p-A+1).join(n):""
switch(y&&_&&(t=r(k+t,k.length?p-b.length:1/0),k=""),e){case"<":t=f+t+b+k
break
case"=":t=f+k+t+b
break
case"^":t=k.slice(0,A=k.length>>1)+f+t+b+k.slice(A)
break
default:t=k+f+t+b}return a(t)}return g=void 0===g?6:/[gprs]/.test(v)?Math.max(1,Math.min(21,g)):Math.max(0,Math.min(20,g)),b.toString=function(){return t+""},b}return{format:h,formatPrefix:function(t,n){var e=h(((t=dt(t)).type="f",t)),r=3*Math.max(-8,Math.min(8,Math.floor(xt(n)/3))),i=Math.pow(10,-r),o=St[8+r/3]
return function(t){return e(i*t)+o}}}}({thousands:",",grouping:[3],currency:["$",""]}),At=Tt.format,kt=Tt.formatPrefix
var nn=e(637),en=e(112)
function rn(){var t,n=[],e=[],r=[]
function o(){var t=0,i=Math.max(1,e.length)
for(r=new Array(i-1);++t<i;)r[t-1]=(0,nn.s)(n,t/i)
return u}function u(n){return null==n||isNaN(n=+n)?t:e[(0,_.ZP)(r,n)]}return u.invertExtent=function(t){var i=e.indexOf(t)
return i<0?[NaN,NaN]:[i>0?r[i-1]:n[0],i<r.length?r[i]:n[n.length-1]]},u.domain=function(t){if(!arguments.length)return n.slice()
n=[]
for(let e of t)null==e||isNaN(e=+e)||n.push(e)
return n.sort(en.Z),o()},u.range=function(t){return arguments.length?(e=Array.from(t),o()):e.slice()},u.unknown=function(n){return arguments.length?(t=n,u):t},u.quantiles=function(){return r.slice()},u.copy=function(){return rn().domain(n).range(e).unknown(t)},i.apply(u,arguments)}function on(){var t,n=0,e=1,r=1,o=[.5],u=[0,1]
function a(n){return null!=n&&n<=n?u[(0,_.ZP)(o,n,0,r)]:t}function s(){var t=-1
for(o=new Array(r);++t<r;)o[t]=((t+1)*e-(t-r)*n)/(r+1)
return a}return a.domain=function(t){return arguments.length?([n,e]=t,n=+n,e=+e,s()):[n,e]},a.range=function(t){return arguments.length?(r=(u=Array.from(t)).length-1,s()):u.slice()},a.invertExtent=function(t){var i=u.indexOf(t)
return i<0?[NaN,NaN]:i<1?[n,o[0]]:i>=r?[o[r-1],e]:[o[i-1],o[i]]},a.unknown=function(n){return arguments.length?(t=n,a):a},a.thresholds=function(){return o.slice()},a.copy=function(){return on().domain([n,e]).range(u).unknown(t)},i.apply(Et(a),arguments)}function un(){var t,n=[.5],e=[0,1],r=1
function o(i){return null!=i&&i<=i?e[(0,_.ZP)(n,i,0,r)]:t}return o.domain=function(t){return arguments.length?(n=Array.from(t),r=Math.min(n.length,e.length-1),o):n.slice()},o.range=function(t){return arguments.length?(e=Array.from(t),r=Math.min(n.length,e.length-1),o):e.slice()},o.invertExtent=function(t){var r=e.indexOf(t)
return[n[r-1],n[r]]},o.unknown=function(n){return arguments.length?(t=n,o):t},o.copy=function(){return un().domain(n).range(e).unknown(t)},i.apply(o,arguments)}var an=e(462)
const sn=1e3,cn=6e4,ln=36e5,hn=864e5,fn=6048e5,_n=31536e6
var pn=new Date,yn=new Date
function gn(t,n,e,r){function i(n){return t(n=0===arguments.length?new Date:new Date(+n)),n}return i.floor=function(n){return t(n=new Date(+n)),n},i.ceil=function(e){return t(e=new Date(e-1)),n(e,1),t(e),e},i.round=function(t){var n=i(t),e=i.ceil(t)
return t-n<e-t?n:e},i.offset=function(t,e){return n(t=new Date(+t),null==e?1:Math.floor(e)),t},i.range=function(e,r,o){var u,a=[]
if(e=i.ceil(e),o=null==o?1:Math.floor(o),!(e<r&&o>0))return a
do{a.push(u=new Date(+e)),n(e,o),t(e)}while(u<e&&e<r)
return a},i.filter=function(e){return gn((function(n){if(n>=n)for(;t(n),!e(n);)n.setTime(n-1)}),(function(t,r){if(t>=t)if(r<0)for(;++r<=0;)for(;n(t,-1),!e(t););else for(;--r>=0;)for(;n(t,1),!e(t););}))},e&&(i.count=function(n,r){return pn.setTime(+n),yn.setTime(+r),t(pn),t(yn),Math.floor(e(pn,yn))},i.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?i.filter(r?function(n){return r(n)%t==0}:function(n){return i.count(0,n)%t==0}):i:null}),i}var dn=gn((function(){}),(function(t,n){t.setTime(+t+n)}),(function(t,n){return n-t}))
dn.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?gn((function(n){n.setTime(Math.floor(n/t)*t)}),(function(n,e){n.setTime(+n+e*t)}),(function(n,e){return(e-n)/t})):dn:null}
const vn=dn
dn.range
var mn=gn((function(t){t.setTime(t-t.getMilliseconds())}),(function(t,n){t.setTime(+t+n*sn)}),(function(t,n){return(n-t)/sn}),(function(t){return t.getUTCSeconds()}))
const xn=mn
mn.range
var wn=gn((function(t){t.setTime(t-t.getMilliseconds()-t.getSeconds()*sn)}),(function(t,n){t.setTime(+t+n*cn)}),(function(t,n){return(n-t)/cn}),(function(t){return t.getMinutes()}))
const Mn=wn
wn.range
var bn=gn((function(t){t.setTime(t-t.getMilliseconds()-t.getSeconds()*sn-t.getMinutes()*cn)}),(function(t,n){t.setTime(+t+n*ln)}),(function(t,n){return(n-t)/ln}),(function(t){return t.getHours()}))
const Tn=bn
bn.range
var An=gn((t=>t.setHours(0,0,0,0)),((t,n)=>t.setDate(t.getDate()+n)),((t,n)=>(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*cn)/hn),(t=>t.getDate()-1))
const kn=An
function Nn(t){return gn((function(n){n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)}),(function(t,n){t.setDate(t.getDate()+7*n)}),(function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*cn)/fn}))}An.range
var Sn=Nn(0),Cn=Nn(1),En=Nn(2),Dn=Nn(3),Un=Nn(4),Zn=Nn(5),Pn=Nn(6),qn=(Sn.range,Cn.range,En.range,Dn.range,Un.range,Zn.range,Pn.range,gn((function(t){t.setDate(1),t.setHours(0,0,0,0)}),(function(t,n){t.setMonth(t.getMonth()+n)}),(function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())}),(function(t){return t.getMonth()})))
const Fn=qn
qn.range
var Ln=gn((function(t){t.setMonth(0,1),t.setHours(0,0,0,0)}),(function(t,n){t.setFullYear(t.getFullYear()+n)}),(function(t,n){return n.getFullYear()-t.getFullYear()}),(function(t){return t.getFullYear()}))
Ln.every=function(t){return isFinite(t=Math.floor(t))&&t>0?gn((function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)}),(function(n,e){n.setFullYear(n.getFullYear()+e*t)})):null}
const Yn=Ln
Ln.range
var On=gn((function(t){t.setUTCSeconds(0,0)}),(function(t,n){t.setTime(+t+n*cn)}),(function(t,n){return(n-t)/cn}),(function(t){return t.getUTCMinutes()}))
const Hn=On
On.range
var Rn=gn((function(t){t.setUTCMinutes(0,0,0)}),(function(t,n){t.setTime(+t+n*ln)}),(function(t,n){return(n-t)/ln}),(function(t){return t.getUTCHours()}))
const zn=Rn
Rn.range
var In=gn((function(t){t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCDate(t.getUTCDate()+n)}),(function(t,n){return(n-t)/hn}),(function(t){return t.getUTCDate()-1}))
const jn=In
function Vn(t){return gn((function(n){n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCDate(t.getUTCDate()+7*n)}),(function(t,n){return(n-t)/fn}))}In.range
var Bn=Vn(0),Xn=Vn(1),$n=Vn(2),Gn=Vn(3),Wn=Vn(4),Qn=Vn(5),Jn=Vn(6),Kn=(Bn.range,Xn.range,$n.range,Gn.range,Wn.range,Qn.range,Jn.range,gn((function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCMonth(t.getUTCMonth()+n)}),(function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())}),(function(t){return t.getUTCMonth()})))
const te=Kn
Kn.range
var ne=gn((function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n)}),(function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()}),(function(t){return t.getUTCFullYear()}))
ne.every=function(t){return isFinite(t=Math.floor(t))&&t>0?gn((function(n){n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)}),(function(n,e){n.setUTCFullYear(n.getUTCFullYear()+e*t)})):null}
const ee=ne
function re(t,n,e,r,i,o){const u=[[xn,1,sn],[xn,5,5e3],[xn,15,15e3],[xn,30,3e4],[o,1,cn],[o,5,3e5],[o,15,9e5],[o,30,18e5],[i,1,ln],[i,3,108e5],[i,6,216e5],[i,12,432e5],[r,1,hn],[r,2,1728e5],[e,1,fn],[n,1,2592e6],[n,3,7776e6],[t,1,_n]]
function a(n,e,r){const i=Math.abs(e-n)/r,o=(0,an.Z)((t=>{let[,,n]=t
return n})).right(u,i)
if(o===u.length)return t.every((0,f.ly)(n/_n,e/_n,r))
if(0===o)return vn.every(Math.max((0,f.ly)(n,e,r),1))
const[a,s]=u[i/u[o-1][2]<u[o][2]/i?o-1:o]
return a.every(s)}return[function(t,n,e){const r=n<t
r&&([t,n]=[n,t])
const i=e&&"function"==typeof e.range?e:a(t,n,e),o=i?i.range(t,+n+1):[]
return r?o.reverse():o},a]}ne.range
const[ie,oe]=re(ee,te,Bn,jn,zn,Hn),[ue,ae]=re(Yn,Fn,Sn,kn,Tn,Mn)
function se(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L)
return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function ce(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L))
return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function le(t,n,e){return{y:t,m:n,d:e,H:0,M:0,S:0,L:0}}var he,fe,_e,pe={"-":"",_:" ",0:"0"},ye=/^\s*\d+/,ge=/^%/,de=/[\\^$*+?|[\]().{}]/g
function ve(t,n,e){var r=t<0?"-":"",i=(r?-t:t)+"",o=i.length
return r+(o<e?new Array(e-o+1).join(n)+i:i)}function me(t){return t.replace(de,"\\$&")}function xe(t){return new RegExp("^(?:"+t.map(me).join("|")+")","i")}function we(t){return new Map(t.map(((t,n)=>[t.toLowerCase(),n])))}function Me(t,n,e){var r=ye.exec(n.slice(e,e+1))
return r?(t.w=+r[0],e+r[0].length):-1}function be(t,n,e){var r=ye.exec(n.slice(e,e+1))
return r?(t.u=+r[0],e+r[0].length):-1}function Te(t,n,e){var r=ye.exec(n.slice(e,e+2))
return r?(t.U=+r[0],e+r[0].length):-1}function Ae(t,n,e){var r=ye.exec(n.slice(e,e+2))
return r?(t.V=+r[0],e+r[0].length):-1}function ke(t,n,e){var r=ye.exec(n.slice(e,e+2))
return r?(t.W=+r[0],e+r[0].length):-1}function Ne(t,n,e){var r=ye.exec(n.slice(e,e+4))
return r?(t.y=+r[0],e+r[0].length):-1}function Se(t,n,e){var r=ye.exec(n.slice(e,e+2))
return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function Ce(t,n,e){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e,e+6))
return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function Ee(t,n,e){var r=ye.exec(n.slice(e,e+1))
return r?(t.q=3*r[0]-3,e+r[0].length):-1}function De(t,n,e){var r=ye.exec(n.slice(e,e+2))
return r?(t.m=r[0]-1,e+r[0].length):-1}function Ue(t,n,e){var r=ye.exec(n.slice(e,e+2))
return r?(t.d=+r[0],e+r[0].length):-1}function Ze(t,n,e){var r=ye.exec(n.slice(e,e+3))
return r?(t.m=0,t.d=+r[0],e+r[0].length):-1}function Pe(t,n,e){var r=ye.exec(n.slice(e,e+2))
return r?(t.H=+r[0],e+r[0].length):-1}function qe(t,n,e){var r=ye.exec(n.slice(e,e+2))
return r?(t.M=+r[0],e+r[0].length):-1}function Fe(t,n,e){var r=ye.exec(n.slice(e,e+2))
return r?(t.S=+r[0],e+r[0].length):-1}function Le(t,n,e){var r=ye.exec(n.slice(e,e+3))
return r?(t.L=+r[0],e+r[0].length):-1}function Ye(t,n,e){var r=ye.exec(n.slice(e,e+6))
return r?(t.L=Math.floor(r[0]/1e3),e+r[0].length):-1}function Oe(t,n,e){var r=ge.exec(n.slice(e,e+1))
return r?e+r[0].length:-1}function He(t,n,e){var r=ye.exec(n.slice(e))
return r?(t.Q=+r[0],e+r[0].length):-1}function Re(t,n,e){var r=ye.exec(n.slice(e))
return r?(t.s=+r[0],e+r[0].length):-1}function ze(t,n){return ve(t.getDate(),n,2)}function Ie(t,n){return ve(t.getHours(),n,2)}function je(t,n){return ve(t.getHours()%12||12,n,2)}function Ve(t,n){return ve(1+kn.count(Yn(t),t),n,3)}function Be(t,n){return ve(t.getMilliseconds(),n,3)}function Xe(t,n){return Be(t,n)+"000"}function $e(t,n){return ve(t.getMonth()+1,n,2)}function Ge(t,n){return ve(t.getMinutes(),n,2)}function We(t,n){return ve(t.getSeconds(),n,2)}function Qe(t){var n=t.getDay()
return 0===n?7:n}function Je(t,n){return ve(Sn.count(Yn(t)-1,t),n,2)}function Ke(t){var n=t.getDay()
return n>=4||0===n?Un(t):Un.ceil(t)}function tr(t,n){return t=Ke(t),ve(Un.count(Yn(t),t)+(4===Yn(t).getDay()),n,2)}function nr(t){return t.getDay()}function er(t,n){return ve(Cn.count(Yn(t)-1,t),n,2)}function rr(t,n){return ve(t.getFullYear()%100,n,2)}function ir(t,n){return ve((t=Ke(t)).getFullYear()%100,n,2)}function or(t,n){return ve(t.getFullYear()%1e4,n,4)}function ur(t,n){var e=t.getDay()
return ve((t=e>=4||0===e?Un(t):Un.ceil(t)).getFullYear()%1e4,n,4)}function ar(t){var n=t.getTimezoneOffset()
return(n>0?"-":(n*=-1,"+"))+ve(n/60|0,"0",2)+ve(n%60,"0",2)}function sr(t,n){return ve(t.getUTCDate(),n,2)}function cr(t,n){return ve(t.getUTCHours(),n,2)}function lr(t,n){return ve(t.getUTCHours()%12||12,n,2)}function hr(t,n){return ve(1+jn.count(ee(t),t),n,3)}function fr(t,n){return ve(t.getUTCMilliseconds(),n,3)}function _r(t,n){return fr(t,n)+"000"}function pr(t,n){return ve(t.getUTCMonth()+1,n,2)}function yr(t,n){return ve(t.getUTCMinutes(),n,2)}function gr(t,n){return ve(t.getUTCSeconds(),n,2)}function dr(t){var n=t.getUTCDay()
return 0===n?7:n}function vr(t,n){return ve(Bn.count(ee(t)-1,t),n,2)}function mr(t){var n=t.getUTCDay()
return n>=4||0===n?Wn(t):Wn.ceil(t)}function xr(t,n){return t=mr(t),ve(Wn.count(ee(t),t)+(4===ee(t).getUTCDay()),n,2)}function wr(t){return t.getUTCDay()}function Mr(t,n){return ve(Xn.count(ee(t)-1,t),n,2)}function br(t,n){return ve(t.getUTCFullYear()%100,n,2)}function Tr(t,n){return ve((t=mr(t)).getUTCFullYear()%100,n,2)}function Ar(t,n){return ve(t.getUTCFullYear()%1e4,n,4)}function kr(t,n){var e=t.getUTCDay()
return ve((t=e>=4||0===e?Wn(t):Wn.ceil(t)).getUTCFullYear()%1e4,n,4)}function Nr(){return"+0000"}function Sr(){return"%"}function Cr(t){return+t}function Er(t){return Math.floor(+t/1e3)}function Dr(t){return new Date(t)}function Ur(t){return t instanceof Date?+t:+new Date(+t)}function Zr(t,n,e,r,i,o,u,a,s,c){var l=pt(),h=l.invert,f=l.domain,_=c(".%L"),p=c(":%S"),y=c("%I:%M"),g=c("%I %p"),d=c("%a %d"),v=c("%b %d"),m=c("%B"),x=c("%Y")
function w(t){return(s(t)<t?_:a(t)<t?p:u(t)<t?y:o(t)<t?g:r(t)<t?i(t)<t?d:v:e(t)<t?m:x)(t)}return l.invert=function(t){return new Date(h(t))},l.domain=function(t){return arguments.length?f(Array.from(t,Ur)):f().map(Dr)},l.ticks=function(n){var e=f()
return t(e[0],e[e.length-1],null==n?10:n)},l.tickFormat=function(t,n){return null==n?w:c(n)},l.nice=function(t){var e=f()
return t&&"function"==typeof t.range||(t=n(e[0],e[e.length-1],null==t?10:t)),t?f(Zt(e,t)):l},l.copy=function(){return ft(l,Zr(t,n,e,r,i,o,u,a,s,c))},l}function Pr(){return i.apply(Zr(ue,ae,Yn,Fn,Sn,kn,Tn,Mn,xn,fe).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function qr(){return i.apply(Zr(ie,oe,ee,te,Bn,jn,zn,Hn,xn,_e).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function Fr(){var t,n,e,r,i,o=0,u=1,a=st,s=!1
function c(n){return null==n||isNaN(n=+n)?i:a(0===e?.5:(n=(r(n)-t)*e,s?Math.max(0,Math.min(1,n)):n))}function l(t){return function(n){var e,r
return arguments.length?([e,r]=n,a=t(e,r),c):[a(0),a(1)]}}return c.domain=function(i){return arguments.length?([o,u]=i,t=r(o=+o),n=r(u=+u),e=t===n?0:1/(n-t),c):[o,u]},c.clamp=function(t){return arguments.length?(s=!!t,c):s},c.interpolator=function(t){return arguments.length?(a=t,c):a},c.range=l(it),c.rangeRound=l(ot),c.unknown=function(t){return arguments.length?(i=t,c):i},function(i){return r=i,t=i(o),n=i(u),e=t===n?0:1/(n-t),c}}function Lr(t,n){return n.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())}function Yr(){var t=Et(Fr()(st))
return t.copy=function(){return Lr(t,Yr())},o.apply(t,arguments)}function Or(){var t=Ht(Fr()).domain([1,10])
return t.copy=function(){return Lr(t,Or()).base(t.base())},o.apply(t,arguments)}function Hr(){var t=jt(Fr())
return t.copy=function(){return Lr(t,Hr()).constant(t.constant())},o.apply(t,arguments)}function Rr(){var t=Gt(Fr())
return t.copy=function(){return Lr(t,Rr()).exponent(t.exponent())},o.apply(t,arguments)}function zr(){return Rr.apply(null,arguments).exponent(.5)}function Ir(){var t=[],n=st
function e(e){if(null!=e&&!isNaN(e=+e))return n(((0,_.ZP)(t,e,1)-1)/(t.length-1))}return e.domain=function(n){if(!arguments.length)return t.slice()
t=[]
for(let e of n)null==e||isNaN(e=+e)||t.push(e)
return t.sort(en.Z),e},e.interpolator=function(t){return arguments.length?(n=t,e):n},e.range=function(){return t.map(((e,r)=>n(r/(t.length-1))))},e.quantiles=function(n){return Array.from({length:n+1},((e,r)=>(0,nn.Z)(t,r/n)))},e.copy=function(){return Ir(n).domain(t)},o.apply(e,arguments)}function jr(t,n){void 0===n&&(n=t,t=it)
for(var e=0,r=n.length-1,i=n[0],o=new Array(r<0?0:r);e<r;)o[e]=t(i,i=n[++e])
return function(t){var n=Math.max(0,Math.min(r-1,Math.floor(t*=r)))
return o[n](t-n)}}function Vr(){var t,n,e,r,i,o,u,a=0,s=.5,c=1,l=1,h=st,f=!1
function _(t){return isNaN(t=+t)?u:(t=.5+((t=+o(t))-n)*(l*t<l*n?r:i),h(f?Math.max(0,Math.min(1,t)):t))}function p(t){return function(n){var e,r,i
return arguments.length?([e,r,i]=n,h=jr(t,[e,r,i]),_):[h(0),h(.5),h(1)]}}return _.domain=function(u){return arguments.length?([a,s,c]=u,t=o(a=+a),n=o(s=+s),e=o(c=+c),r=t===n?0:.5/(n-t),i=n===e?0:.5/(e-n),l=n<t?-1:1,_):[a,s,c]},_.clamp=function(t){return arguments.length?(f=!!t,_):f},_.interpolator=function(t){return arguments.length?(h=t,_):h},_.range=p(it),_.rangeRound=p(ot),_.unknown=function(t){return arguments.length?(u=t,_):u},function(u){return o=u,t=u(a),n=u(s),e=u(c),r=t===n?0:.5/(n-t),i=n===e?0:.5/(e-n),l=n<t?-1:1,_}}function Br(){var t=Et(Vr()(st))
return t.copy=function(){return Lr(t,Br())},o.apply(t,arguments)}function Xr(){var t=Ht(Vr()).domain([.1,1,10])
return t.copy=function(){return Lr(t,Xr()).base(t.base())},o.apply(t,arguments)}function $r(){var t=jt(Vr())
return t.copy=function(){return Lr(t,$r()).constant(t.constant())},o.apply(t,arguments)}function Gr(){var t=Gt(Vr())
return t.copy=function(){return Lr(t,Gr()).exponent(t.exponent())},o.apply(t,arguments)}function Wr(){return Gr.apply(null,arguments).exponent(.5)}he=function(t){var n=t.dateTime,e=t.date,r=t.time,i=t.periods,o=t.days,u=t.shortDays,a=t.months,s=t.shortMonths,c=xe(i),l=we(i),h=xe(o),f=we(o),_=xe(u),p=we(u),y=xe(a),g=we(a),d=xe(s),v=we(s),m={a:function(t){return u[t.getDay()]},A:function(t){return o[t.getDay()]},b:function(t){return s[t.getMonth()]},B:function(t){return a[t.getMonth()]},c:null,d:ze,e:ze,f:Xe,g:ir,G:ur,H:Ie,I:je,j:Ve,L:Be,m:$e,M:Ge,p:function(t){return i[+(t.getHours()>=12)]},q:function(t){return 1+~~(t.getMonth()/3)},Q:Cr,s:Er,S:We,u:Qe,U:Je,V:tr,w:nr,W:er,x:null,X:null,y:rr,Y:or,Z:ar,"%":Sr},x={a:function(t){return u[t.getUTCDay()]},A:function(t){return o[t.getUTCDay()]},b:function(t){return s[t.getUTCMonth()]},B:function(t){return a[t.getUTCMonth()]},c:null,d:sr,e:sr,f:_r,g:Tr,G:kr,H:cr,I:lr,j:hr,L:fr,m:pr,M:yr,p:function(t){return i[+(t.getUTCHours()>=12)]},q:function(t){return 1+~~(t.getUTCMonth()/3)},Q:Cr,s:Er,S:gr,u:dr,U:vr,V:xr,w:wr,W:Mr,x:null,X:null,y:br,Y:Ar,Z:Nr,"%":Sr},w={a:function(t,n,e){var r=_.exec(n.slice(e))
return r?(t.w=p.get(r[0].toLowerCase()),e+r[0].length):-1},A:function(t,n,e){var r=h.exec(n.slice(e))
return r?(t.w=f.get(r[0].toLowerCase()),e+r[0].length):-1},b:function(t,n,e){var r=d.exec(n.slice(e))
return r?(t.m=v.get(r[0].toLowerCase()),e+r[0].length):-1},B:function(t,n,e){var r=y.exec(n.slice(e))
return r?(t.m=g.get(r[0].toLowerCase()),e+r[0].length):-1},c:function(t,e,r){return T(t,n,e,r)},d:Ue,e:Ue,f:Ye,g:Se,G:Ne,H:Pe,I:Pe,j:Ze,L:Le,m:De,M:qe,p:function(t,n,e){var r=c.exec(n.slice(e))
return r?(t.p=l.get(r[0].toLowerCase()),e+r[0].length):-1},q:Ee,Q:He,s:Re,S:Fe,u:be,U:Te,V:Ae,w:Me,W:ke,x:function(t,n,r){return T(t,e,n,r)},X:function(t,n,e){return T(t,r,n,e)},y:Se,Y:Ne,Z:Ce,"%":Oe}
function M(t,n){return function(e){var r,i,o,u=[],a=-1,s=0,c=t.length
for(e instanceof Date||(e=new Date(+e));++a<c;)37===t.charCodeAt(a)&&(u.push(t.slice(s,a)),null!=(i=pe[r=t.charAt(++a)])?r=t.charAt(++a):i="e"===r?" ":"0",(o=n[r])&&(r=o(e,i)),u.push(r),s=a+1)
return u.push(t.slice(s,a)),u.join("")}}function b(t,n){return function(e){var r,i,o=le(1900,void 0,1)
if(T(o,t,e+="",0)!=e.length)return null
if("Q"in o)return new Date(o.Q)
if("s"in o)return new Date(1e3*o.s+("L"in o?o.L:0))
if(n&&!("Z"in o)&&(o.Z=0),"p"in o&&(o.H=o.H%12+12*o.p),void 0===o.m&&(o.m="q"in o?o.q:0),"V"in o){if(o.V<1||o.V>53)return null
"w"in o||(o.w=1),"Z"in o?(i=(r=ce(le(o.y,0,1))).getUTCDay(),r=i>4||0===i?Xn.ceil(r):Xn(r),r=jn.offset(r,7*(o.V-1)),o.y=r.getUTCFullYear(),o.m=r.getUTCMonth(),o.d=r.getUTCDate()+(o.w+6)%7):(i=(r=se(le(o.y,0,1))).getDay(),r=i>4||0===i?Cn.ceil(r):Cn(r),r=kn.offset(r,7*(o.V-1)),o.y=r.getFullYear(),o.m=r.getMonth(),o.d=r.getDate()+(o.w+6)%7)}else("W"in o||"U"in o)&&("w"in o||(o.w="u"in o?o.u%7:"W"in o?1:0),i="Z"in o?ce(le(o.y,0,1)).getUTCDay():se(le(o.y,0,1)).getDay(),o.m=0,o.d="W"in o?(o.w+6)%7+7*o.W-(i+5)%7:o.w+7*o.U-(i+6)%7)
return"Z"in o?(o.H+=o.Z/100|0,o.M+=o.Z%100,ce(o)):se(o)}}function T(t,n,e,r){for(var i,o,u=0,a=n.length,s=e.length;u<a;){if(r>=s)return-1
if(37===(i=n.charCodeAt(u++))){if(i=n.charAt(u++),!(o=w[i in pe?n.charAt(u++):i])||(r=o(t,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}return m.x=M(e,m),m.X=M(r,m),m.c=M(n,m),x.x=M(e,x),x.X=M(r,x),x.c=M(n,x),{format:function(t){var n=M(t+="",m)
return n.toString=function(){return t},n},parse:function(t){var n=b(t+="",!1)
return n.toString=function(){return t},n},utcFormat:function(t){var n=M(t+="",x)
return n.toString=function(){return t},n},utcParse:function(t){var n=b(t+="",!0)
return n.toString=function(){return t},n}}}({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}),fe=he.format,he.parse,_e=he.utcFormat,he.utcParse},270:(t,n,e)=>{e.r(n),e.d(n,{create:()=>mt,creator:()=>s,local:()=>wt,matcher:()=>p,namespace:()=>o,namespaces:()=>i,pointer:()=>Tt,pointers:()=>At,select:()=>vt,selectAll:()=>kt,selection:()=>dt,selector:()=>l,selectorAll:()=>_,style:()=>Y,window:()=>P})
var r="http://www.w3.org/1999/xhtml"
const i={svg:"http://www.w3.org/2000/svg",xhtml:r,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"}
function o(t){var n=t+="",e=n.indexOf(":")
return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),i.hasOwnProperty(n)?{space:i[n],local:t}:t}function u(t){return function(){var n=this.ownerDocument,e=this.namespaceURI
return e===r&&n.documentElement.namespaceURI===r?n.createElement(t):n.createElementNS(e,t)}}function a(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function s(t){var n=o(t)
return(n.local?a:u)(n)}function c(){}function l(t){return null==t?c:function(){return this.querySelector(t)}}function h(t){return null==t?[]:Array.isArray(t)?t:Array.from(t)}function f(){return[]}function _(t){return null==t?f:function(){return this.querySelectorAll(t)}}function p(t){return function(){return this.matches(t)}}function y(t){return function(n){return n.matches(t)}}var g=Array.prototype.find
function d(){return this.firstElementChild}var v=Array.prototype.filter
function m(){return Array.from(this.children)}function x(t){return new Array(t.length)}function w(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function M(t){return function(){return t}}function b(t,n,e,r,i,o){for(var u,a=0,s=n.length,c=o.length;a<c;++a)(u=n[a])?(u.__data__=o[a],r[a]=u):e[a]=new w(t,o[a])
for(;a<s;++a)(u=n[a])&&(i[a]=u)}function T(t,n,e,r,i,o,u){var a,s,c,l=new Map,h=n.length,f=o.length,_=new Array(h)
for(a=0;a<h;++a)(s=n[a])&&(_[a]=c=u.call(s,s.__data__,a,n)+"",l.has(c)?i[a]=s:l.set(c,s))
for(a=0;a<f;++a)c=u.call(t,o[a],a,o)+"",(s=l.get(c))?(r[a]=s,s.__data__=o[a],l.delete(c)):e[a]=new w(t,o[a])
for(a=0;a<h;++a)(s=n[a])&&l.get(_[a])===s&&(i[a]=s)}function A(t){return t.__data__}function k(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function N(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function S(t){return function(){this.removeAttribute(t)}}function C(t){return function(){this.removeAttributeNS(t.space,t.local)}}function E(t,n){return function(){this.setAttribute(t,n)}}function D(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function U(t,n){return function(){var e=n.apply(this,arguments)
null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function Z(t,n){return function(){var e=n.apply(this,arguments)
null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function P(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function q(t){return function(){this.style.removeProperty(t)}}function F(t,n,e){return function(){this.style.setProperty(t,n,e)}}function L(t,n,e){return function(){var r=n.apply(this,arguments)
null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function Y(t,n){return t.style.getPropertyValue(n)||P(t).getComputedStyle(t,null).getPropertyValue(n)}function O(t){return function(){delete this[t]}}function H(t,n){return function(){this[t]=n}}function R(t,n){return function(){var e=n.apply(this,arguments)
null==e?delete this[t]:this[t]=e}}function z(t){return t.trim().split(/^|\s+/)}function I(t){return t.classList||new j(t)}function j(t){this._node=t,this._names=z(t.getAttribute("class")||"")}function V(t,n){for(var e=I(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function B(t,n){for(var e=I(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function X(t){return function(){V(this,t)}}function $(t){return function(){B(this,t)}}function G(t,n){return function(){(n.apply(this,arguments)?V:B)(this,t)}}function W(){this.textContent=""}function Q(t){return function(){this.textContent=t}}function J(t){return function(){var n=t.apply(this,arguments)
this.textContent=null==n?"":n}}function K(){this.innerHTML=""}function tt(t){return function(){this.innerHTML=t}}function nt(t){return function(){var n=t.apply(this,arguments)
this.innerHTML=null==n?"":n}}function et(){this.nextSibling&&this.parentNode.appendChild(this)}function rt(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function it(){return null}function ot(){var t=this.parentNode
t&&t.removeChild(this)}function ut(){var t=this.cloneNode(!1),n=this.parentNode
return n?n.insertBefore(t,this.nextSibling):t}function at(){var t=this.cloneNode(!0),n=this.parentNode
return n?n.insertBefore(t,this.nextSibling):t}function st(t){return t.trim().split(/^|\s+/).map((function(t){var n="",e=t.indexOf(".")
return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}}))}function ct(t){return function(){var n=this.__on
if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.options);++i?n.length=i:delete this.__on}}}function lt(t,n,e){return function(){var r,i=this.__on,o=function(t){return function(n){t.call(this,n,this.__data__)}}(n)
if(i)for(var u=0,a=i.length;u<a;++u)if((r=i[u]).type===t.type&&r.name===t.name)return this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=e),void(r.value=n)
this.addEventListener(t.type,o,e),r={type:t.type,name:t.name,value:n,listener:o,options:e},i?i.push(r):this.__on=[r]}}function ht(t,n,e){var r=P(t),i=r.CustomEvent
"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function ft(t,n){return function(){return ht(this,t,n)}}function _t(t,n){return function(){return ht(this,t,n.apply(this,arguments))}}w.prototype={constructor:w,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}},j.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t)
n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}}
var pt=[null]
function yt(t,n){this._groups=t,this._parents=n}function gt(){return new yt([[document.documentElement]],pt)}yt.prototype=gt.prototype={constructor:yt,select:function(t){"function"!=typeof t&&(t=l(t))
for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u,a=n[i],s=a.length,c=r[i]=new Array(s),h=0;h<s;++h)(o=a[h])&&(u=t.call(o,o.__data__,h,a))&&("__data__"in o&&(u.__data__=o.__data__),c[h]=u)
return new yt(r,this._parents)},selectAll:function(t){t="function"==typeof t?function(t){return function(){return h(t.apply(this,arguments))}}(t):_(t)
for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var u,a=n[o],s=a.length,c=0;c<s;++c)(u=a[c])&&(r.push(t.call(u,u.__data__,c,a)),i.push(u))
return new yt(r,i)},selectChild:function(t){return this.select(null==t?d:function(t){return function(){return g.call(this.children,t)}}("function"==typeof t?t:y(t)))},selectChildren:function(t){return this.selectAll(null==t?m:function(t){return function(){return v.call(this.children,t)}}("function"==typeof t?t:y(t)))},filter:function(t){"function"!=typeof t&&(t=p(t))
for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u=n[i],a=u.length,s=r[i]=[],c=0;c<a;++c)(o=u[c])&&t.call(o,o.__data__,c,u)&&s.push(o)
return new yt(r,this._parents)},data:function(t,n){if(!arguments.length)return Array.from(this,A)
var e=n?T:b,r=this._parents,i=this._groups
"function"!=typeof t&&(t=M(t))
for(var o=i.length,u=new Array(o),a=new Array(o),s=new Array(o),c=0;c<o;++c){var l=r[c],h=i[c],f=h.length,_=k(t.call(l,l&&l.__data__,c,r)),p=_.length,y=a[c]=new Array(p),g=u[c]=new Array(p),d=s[c]=new Array(f)
e(l,h,y,g,d,_,n)
for(var v,m,x=0,w=0;x<p;++x)if(v=y[x]){for(x>=w&&(w=x+1);!(m=g[w])&&++w<p;);v._next=m||null}}return(u=new yt(u,r))._enter=a,u._exit=s,u},enter:function(){return new yt(this._enter||this._groups.map(x),this._parents)},exit:function(){return new yt(this._exit||this._groups.map(x),this._parents)},join:function(t,n,e){var r=this.enter(),i=this,o=this.exit()
return"function"==typeof t?(r=t(r))&&(r=r.selection()):r=r.append(t+""),null!=n&&(i=n(i))&&(i=i.selection()),null==e?o.remove():e(o),r&&i?r.merge(i).order():i},merge:function(t){for(var n=t.selection?t.selection():t,e=this._groups,r=n._groups,i=e.length,o=r.length,u=Math.min(i,o),a=new Array(i),s=0;s<u;++s)for(var c,l=e[s],h=r[s],f=l.length,_=a[s]=new Array(f),p=0;p<f;++p)(c=l[p]||h[p])&&(_[p]=c)
for(;s<i;++s)a[s]=e[s]
return new yt(a,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,u=i[o];--o>=0;)(r=i[o])&&(u&&4^r.compareDocumentPosition(u)&&u.parentNode.insertBefore(r,u),u=r)
return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=N)
for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var u,a=e[o],s=a.length,c=i[o]=new Array(s),l=0;l<s;++l)(u=a[l])&&(c[l]=u)
c.sort(n)}return new yt(i,this._parents).order()},call:function(){var t=arguments[0]
return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var u=r[i]
if(u)return u}return null},size:function(){let t=0
for(const n of this)++t
return t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],u=0,a=o.length;u<a;++u)(i=o[u])&&t.call(i,i.__data__,u,o)
return this},attr:function(t,n){var e=o(t)
if(arguments.length<2){var r=this.node()
return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?C:S:"function"==typeof n?e.local?Z:U:e.local?D:E)(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?q:"function"==typeof n?L:F)(t,n,null==e?"":e)):Y(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?O:"function"==typeof n?R:H)(t,n)):this.node()[t]},classed:function(t,n){var e=z(t+"")
if(arguments.length<2){for(var r=I(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1
return!0}return this.each(("function"==typeof n?G:n?X:$)(e,n))},text:function(t){return arguments.length?this.each(null==t?W:("function"==typeof t?J:Q)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?K:("function"==typeof t?nt:tt)(t)):this.node().innerHTML},raise:function(){return this.each(et)},lower:function(){return this.each(rt)},append:function(t){var n="function"==typeof t?t:s(t)
return this.select((function(){return this.appendChild(n.apply(this,arguments))}))},insert:function(t,n){var e="function"==typeof t?t:s(t),r=null==n?it:"function"==typeof n?n:l(n)
return this.select((function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)}))},remove:function(){return this.each(ot)},clone:function(t){return this.select(t?at:ut)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=st(t+""),u=o.length
if(!(arguments.length<2)){for(a=n?lt:ct,r=0;r<u;++r)this.each(a(o[r],n,e))
return this}var a=this.node().__on
if(a)for(var s,c=0,l=a.length;c<l;++c)for(r=0,s=a[c];r<u;++r)if((i=o[r]).type===s.type&&i.name===s.name)return s.value},dispatch:function(t,n){return this.each(("function"==typeof n?_t:ft)(t,n))},[Symbol.iterator]:function*(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r,i=t[n],o=0,u=i.length;o<u;++o)(r=i[o])&&(yield r)}}
const dt=gt
function vt(t){return"string"==typeof t?new yt([[document.querySelector(t)]],[document.documentElement]):new yt([[t]],pt)}function mt(t){return vt(s(t).call(document.documentElement))}var xt=0
function wt(){return new Mt}function Mt(){this._="@"+(++xt).toString(36)}function bt(t){let n
for(;n=t.sourceEvent;)t=n
return t}function Tt(t,n){if(t=bt(t),void 0===n&&(n=t.currentTarget),n){var e=n.ownerSVGElement||n
if(e.createSVGPoint){var r=e.createSVGPoint()
return r.x=t.clientX,r.y=t.clientY,[(r=r.matrixTransform(n.getScreenCTM().inverse())).x,r.y]}if(n.getBoundingClientRect){var i=n.getBoundingClientRect()
return[t.clientX-i.left-n.clientLeft,t.clientY-i.top-n.clientTop]}}return[t.pageX,t.pageY]}function At(t,n){return t.target&&(t=bt(t),void 0===n&&(n=t.currentTarget),t=t.touches||[t]),Array.from(t,(t=>Tt(t,n)))}function kt(t){return"string"==typeof t?new yt([document.querySelectorAll(t)],[document.documentElement]):new yt([h(t)],pt)}Mt.prototype=wt.prototype={constructor:Mt,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return
return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}}},494:(t,n,e)=>{e.r(n),e.d(n,{arc:()=>D,area:()=>O,areaRadial:()=>$,curveBasis:()=>Nt,curveBasisClosed:()=>Ct,curveBasisOpen:()=>Dt,curveBumpX:()=>Zt,curveBumpY:()=>Pt,curveBundle:()=>Ft,curveCardinal:()=>Ot,curveCardinalClosed:()=>Rt,curveCardinalOpen:()=>It,curveCatmullRom:()=>Bt,curveCatmullRomClosed:()=>$t,curveCatmullRomOpen:()=>Wt,curveLinear:()=>q,curveLinearClosed:()=>Jt,curveMonotoneX:()=>an,curveMonotoneY:()=>sn,curveNatural:()=>hn,curveStep:()=>_n,curveStepAfter:()=>yn,curveStepBefore:()=>pn,line:()=>Y,lineRadial:()=>X,linkHorizontal:()=>et,linkRadial:()=>it,linkVertical:()=>rt,pie:()=>z,pointRadial:()=>G,radialArea:()=>$,radialLine:()=>X,stack:()=>xn,stackOffsetDiverging:()=>Mn,stackOffsetExpand:()=>wn,stackOffsetNone:()=>gn,stackOffsetSilhouette:()=>bn,stackOffsetWiggle:()=>Tn,stackOrderAppearance:()=>An,stackOrderAscending:()=>Nn,stackOrderDescending:()=>Cn,stackOrderInsideOut:()=>En,stackOrderNone:()=>dn,stackOrderReverse:()=>Dn,symbol:()=>bt,symbolCircle:()=>ot,symbolCross:()=>ut,symbolDiamond:()=>ct,symbolSquare:()=>pt,symbolStar:()=>_t,symbolTriangle:()=>gt,symbolWye:()=>wt,symbols:()=>Mt})
const r=Math.PI,i=2*r,o=1e-6,u=i-o
function a(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function s(){return new a}a.prototype=s.prototype={constructor:a,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,n,e,i,u){t=+t,n=+n,e=+e,i=+i,u=+u
var a=this._x1,s=this._y1,c=e-t,l=i-n,h=a-t,f=s-n,_=h*h+f*f
if(u<0)throw new Error("negative radius: "+u)
if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n)
else if(_>o)if(Math.abs(f*c-l*h)>o&&u){var p=e-a,y=i-s,g=c*c+l*l,d=p*p+y*y,v=Math.sqrt(g),m=Math.sqrt(_),x=u*Math.tan((r-Math.acos((g+_-d)/(2*v*m)))/2),w=x/m,M=x/v
Math.abs(w-1)>o&&(this._+="L"+(t+w*h)+","+(n+w*f)),this._+="A"+u+","+u+",0,0,"+ +(f*p>h*y)+","+(this._x1=t+M*c)+","+(this._y1=n+M*l)}else this._+="L"+(this._x1=t)+","+(this._y1=n)},arc:function(t,n,e,a,s,c){t=+t,n=+n,c=!!c
var l=(e=+e)*Math.cos(a),h=e*Math.sin(a),f=t+l,_=n+h,p=1^c,y=c?a-s:s-a
if(e<0)throw new Error("negative radius: "+e)
null===this._x1?this._+="M"+f+","+_:(Math.abs(this._x1-f)>o||Math.abs(this._y1-_)>o)&&(this._+="L"+f+","+_),e&&(y<0&&(y=y%i+i),y>u?this._+="A"+e+","+e+",0,1,"+p+","+(t-l)+","+(n-h)+"A"+e+","+e+",0,1,"+p+","+(this._x1=f)+","+(this._y1=_):y>o&&(this._+="A"+e+","+e+",0,"+ +(y>=r)+","+p+","+(this._x1=t+e*Math.cos(s))+","+(this._y1=n+e*Math.sin(s))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}}
const c=s
function l(t){return function(){return t}}var h=Math.abs,f=Math.atan2,_=Math.cos,p=Math.max,y=Math.min,g=Math.sin,d=Math.sqrt,v=1e-12,m=Math.PI,x=m/2,w=2*m
function M(t){return t>1?0:t<-1?m:Math.acos(t)}function b(t){return t>=1?x:t<=-1?-x:Math.asin(t)}function T(t){return t.innerRadius}function A(t){return t.outerRadius}function k(t){return t.startAngle}function N(t){return t.endAngle}function S(t){return t&&t.padAngle}function C(t,n,e,r,i,o,u,a){var s=e-t,c=r-n,l=u-i,h=a-o,f=h*s-l*c
if(!(f*f<v))return[t+(f=(l*(n-o)-h*(t-i))/f)*s,n+f*c]}function E(t,n,e,r,i,o,u){var a=t-e,s=n-r,c=(u?o:-o)/d(a*a+s*s),l=c*s,h=-c*a,f=t+l,_=n+h,y=e+l,g=r+h,v=(f+y)/2,m=(_+g)/2,x=y-f,w=g-_,M=x*x+w*w,b=i-o,T=f*g-y*_,A=(w<0?-1:1)*d(p(0,b*b*M-T*T)),k=(T*w-x*A)/M,N=(-T*x-w*A)/M,S=(T*w+x*A)/M,C=(-T*x+w*A)/M,E=k-v,D=N-m,U=S-v,Z=C-m
return E*E+D*D>U*U+Z*Z&&(k=S,N=C),{cx:k,cy:N,x01:-l,y01:-h,x11:k*(i/b-1),y11:N*(i/b-1)}}function D(){var t=T,n=A,e=l(0),r=null,i=k,o=N,u=S,a=null
function s(){var s,l,p=+t.apply(this,arguments),T=+n.apply(this,arguments),A=i.apply(this,arguments)-x,k=o.apply(this,arguments)-x,N=h(k-A),S=k>A
if(a||(a=s=c()),T<p&&(l=T,T=p,p=l),T>v)if(N>w-v)a.moveTo(T*_(A),T*g(A)),a.arc(0,0,T,A,k,!S),p>v&&(a.moveTo(p*_(k),p*g(k)),a.arc(0,0,p,k,A,S))
else{var D,U,Z=A,P=k,q=A,F=k,L=N,Y=N,O=u.apply(this,arguments)/2,H=O>v&&(r?+r.apply(this,arguments):d(p*p+T*T)),R=y(h(T-p)/2,+e.apply(this,arguments)),z=R,I=R
if(H>v){var j=b(H/p*g(O)),V=b(H/T*g(O));(L-=2*j)>v?(q+=j*=S?1:-1,F-=j):(L=0,q=F=(A+k)/2),(Y-=2*V)>v?(Z+=V*=S?1:-1,P-=V):(Y=0,Z=P=(A+k)/2)}var B=T*_(Z),X=T*g(Z),$=p*_(F),G=p*g(F)
if(R>v){var W,Q=T*_(P),J=T*g(P),K=p*_(q),tt=p*g(q)
if(N<m&&(W=C(B,X,K,tt,Q,J,$,G))){var nt=B-W[0],et=X-W[1],rt=Q-W[0],it=J-W[1],ot=1/g(M((nt*rt+et*it)/(d(nt*nt+et*et)*d(rt*rt+it*it)))/2),ut=d(W[0]*W[0]+W[1]*W[1])
z=y(R,(p-ut)/(ot-1)),I=y(R,(T-ut)/(ot+1))}}Y>v?I>v?(D=E(K,tt,B,X,T,I,S),U=E(Q,J,$,G,T,I,S),a.moveTo(D.cx+D.x01,D.cy+D.y01),I<R?a.arc(D.cx,D.cy,I,f(D.y01,D.x01),f(U.y01,U.x01),!S):(a.arc(D.cx,D.cy,I,f(D.y01,D.x01),f(D.y11,D.x11),!S),a.arc(0,0,T,f(D.cy+D.y11,D.cx+D.x11),f(U.cy+U.y11,U.cx+U.x11),!S),a.arc(U.cx,U.cy,I,f(U.y11,U.x11),f(U.y01,U.x01),!S))):(a.moveTo(B,X),a.arc(0,0,T,Z,P,!S)):a.moveTo(B,X),p>v&&L>v?z>v?(D=E($,G,Q,J,p,-z,S),U=E(B,X,K,tt,p,-z,S),a.lineTo(D.cx+D.x01,D.cy+D.y01),z<R?a.arc(D.cx,D.cy,z,f(D.y01,D.x01),f(U.y01,U.x01),!S):(a.arc(D.cx,D.cy,z,f(D.y01,D.x01),f(D.y11,D.x11),!S),a.arc(0,0,p,f(D.cy+D.y11,D.cx+D.x11),f(U.cy+U.y11,U.cx+U.x11),S),a.arc(U.cx,U.cy,z,f(U.y11,U.x11),f(U.y01,U.x01),!S))):a.arc(0,0,p,F,q,S):a.lineTo($,G)}else a.moveTo(0,0)
if(a.closePath(),s)return a=null,s+""||null}return s.centroid=function(){var e=(+t.apply(this,arguments)+ +n.apply(this,arguments))/2,r=(+i.apply(this,arguments)+ +o.apply(this,arguments))/2-m/2
return[_(r)*e,g(r)*e]},s.innerRadius=function(n){return arguments.length?(t="function"==typeof n?n:l(+n),s):t},s.outerRadius=function(t){return arguments.length?(n="function"==typeof t?t:l(+t),s):n},s.cornerRadius=function(t){return arguments.length?(e="function"==typeof t?t:l(+t),s):e},s.padRadius=function(t){return arguments.length?(r=null==t?null:"function"==typeof t?t:l(+t),s):r},s.startAngle=function(t){return arguments.length?(i="function"==typeof t?t:l(+t),s):i},s.endAngle=function(t){return arguments.length?(o="function"==typeof t?t:l(+t),s):o},s.padAngle=function(t){return arguments.length?(u="function"==typeof t?t:l(+t),s):u},s.context=function(t){return arguments.length?(a=null==t?null:t,s):a},s}var U=Array.prototype.slice
function Z(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function P(t){this._context=t}function q(t){return new P(t)}function F(t){return t[0]}function L(t){return t[1]}function Y(t,n){var e=l(!0),r=null,i=q,o=null
function u(u){var a,s,l,h=(u=Z(u)).length,f=!1
for(null==r&&(o=i(l=c())),a=0;a<=h;++a)!(a<h&&e(s=u[a],a,u))===f&&((f=!f)?o.lineStart():o.lineEnd()),f&&o.point(+t(s,a,u),+n(s,a,u))
if(l)return o=null,l+""||null}return t="function"==typeof t?t:void 0===t?F:l(t),n="function"==typeof n?n:void 0===n?L:l(n),u.x=function(n){return arguments.length?(t="function"==typeof n?n:l(+n),u):t},u.y=function(t){return arguments.length?(n="function"==typeof t?t:l(+t),u):n},u.defined=function(t){return arguments.length?(e="function"==typeof t?t:l(!!t),u):e},u.curve=function(t){return arguments.length?(i=t,null!=r&&(o=i(r)),u):i},u.context=function(t){return arguments.length?(null==t?r=o=null:o=i(r=t),u):r},u}function O(t,n,e){var r=null,i=l(!0),o=null,u=q,a=null
function s(s){var l,h,f,_,p,y=(s=Z(s)).length,g=!1,d=new Array(y),v=new Array(y)
for(null==o&&(a=u(p=c())),l=0;l<=y;++l){if(!(l<y&&i(_=s[l],l,s))===g)if(g=!g)h=l,a.areaStart(),a.lineStart()
else{for(a.lineEnd(),a.lineStart(),f=l-1;f>=h;--f)a.point(d[f],v[f])
a.lineEnd(),a.areaEnd()}g&&(d[l]=+t(_,l,s),v[l]=+n(_,l,s),a.point(r?+r(_,l,s):d[l],e?+e(_,l,s):v[l]))}if(p)return a=null,p+""||null}function h(){return Y().defined(i).curve(u).context(o)}return t="function"==typeof t?t:void 0===t?F:l(+t),n="function"==typeof n?n:l(void 0===n?0:+n),e="function"==typeof e?e:void 0===e?L:l(+e),s.x=function(n){return arguments.length?(t="function"==typeof n?n:l(+n),r=null,s):t},s.x0=function(n){return arguments.length?(t="function"==typeof n?n:l(+n),s):t},s.x1=function(t){return arguments.length?(r=null==t?null:"function"==typeof t?t:l(+t),s):r},s.y=function(t){return arguments.length?(n="function"==typeof t?t:l(+t),e=null,s):n},s.y0=function(t){return arguments.length?(n="function"==typeof t?t:l(+t),s):n},s.y1=function(t){return arguments.length?(e=null==t?null:"function"==typeof t?t:l(+t),s):e},s.lineX0=s.lineY0=function(){return h().x(t).y(n)},s.lineY1=function(){return h().x(t).y(e)},s.lineX1=function(){return h().x(r).y(n)},s.defined=function(t){return arguments.length?(i="function"==typeof t?t:l(!!t),s):i},s.curve=function(t){return arguments.length?(u=t,null!=o&&(a=u(o)),s):u},s.context=function(t){return arguments.length?(null==t?o=a=null:a=u(o=t),s):o},s}function H(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function R(t){return t}function z(){var t=R,n=H,e=null,r=l(0),i=l(w),o=l(0)
function u(u){var a,s,c,l,h,f=(u=Z(u)).length,_=0,p=new Array(f),y=new Array(f),g=+r.apply(this,arguments),d=Math.min(w,Math.max(-w,i.apply(this,arguments)-g)),v=Math.min(Math.abs(d)/f,o.apply(this,arguments)),m=v*(d<0?-1:1)
for(a=0;a<f;++a)(h=y[p[a]=a]=+t(u[a],a,u))>0&&(_+=h)
for(null!=n?p.sort((function(t,e){return n(y[t],y[e])})):null!=e&&p.sort((function(t,n){return e(u[t],u[n])})),a=0,c=_?(d-f*m)/_:0;a<f;++a,g=l)s=p[a],l=g+((h=y[s])>0?h*c:0)+m,y[s]={data:u[s],index:a,value:h,startAngle:g,endAngle:l,padAngle:v}
return y}return u.value=function(n){return arguments.length?(t="function"==typeof n?n:l(+n),u):t},u.sortValues=function(t){return arguments.length?(n=t,e=null,u):n},u.sort=function(t){return arguments.length?(e=t,n=null,u):e},u.startAngle=function(t){return arguments.length?(r="function"==typeof t?t:l(+t),u):r},u.endAngle=function(t){return arguments.length?(i="function"==typeof t?t:l(+t),u):i},u.padAngle=function(t){return arguments.length?(o="function"==typeof t?t:l(+t),u):o},u}P.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2
default:this._context.lineTo(t,n)}}}
var I=V(q)
function j(t){this._curve=t}function V(t){function n(n){return new j(t(n))}return n._curve=t,n}function B(t){var n=t.curve
return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(V(t)):n()._curve},t}function X(){return B(Y().curve(I))}function $(){var t=O().curve(I),n=t.curve,e=t.lineX0,r=t.lineX1,i=t.lineY0,o=t.lineY1
return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.lineStartAngle=function(){return B(e())},delete t.lineX0,t.lineEndAngle=function(){return B(r())},delete t.lineX1,t.lineInnerRadius=function(){return B(i())},delete t.lineY0,t.lineOuterRadius=function(){return B(o())},delete t.lineY1,t.curve=function(t){return arguments.length?n(V(t)):n()._curve},t}function G(t,n){return[(n=+n)*Math.cos(t-=Math.PI/2),n*Math.sin(t)]}function W(t){return t.source}function Q(t){return t.target}function J(t){var n=W,e=Q,r=F,i=L,o=null
function u(){var u,a=U.call(arguments),s=n.apply(this,a),l=e.apply(this,a)
if(o||(o=u=c()),t(o,+r.apply(this,(a[0]=s,a)),+i.apply(this,a),+r.apply(this,(a[0]=l,a)),+i.apply(this,a)),u)return o=null,u+""||null}return u.source=function(t){return arguments.length?(n=t,u):n},u.target=function(t){return arguments.length?(e=t,u):e},u.x=function(t){return arguments.length?(r="function"==typeof t?t:l(+t),u):r},u.y=function(t){return arguments.length?(i="function"==typeof t?t:l(+t),u):i},u.context=function(t){return arguments.length?(o=null==t?null:t,u):o},u}function K(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n=(n+r)/2,e,n,i,r,i)}function tt(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n,e=(e+i)/2,r,e,r,i)}function nt(t,n,e,r,i){var o=G(n,e),u=G(n,e=(e+i)/2),a=G(r,e),s=G(r,i)
t.moveTo(o[0],o[1]),t.bezierCurveTo(u[0],u[1],a[0],a[1],s[0],s[1])}function et(){return J(K)}function rt(){return J(tt)}function it(){var t=J(nt)
return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t}j.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}}
const ot={draw:function(t,n){var e=Math.sqrt(n/m)
t.moveTo(e,0),t.arc(0,0,e,0,w)}},ut={draw:function(t,n){var e=Math.sqrt(n/5)/2
t.moveTo(-3*e,-e),t.lineTo(-e,-e),t.lineTo(-e,-3*e),t.lineTo(e,-3*e),t.lineTo(e,-e),t.lineTo(3*e,-e),t.lineTo(3*e,e),t.lineTo(e,e),t.lineTo(e,3*e),t.lineTo(-e,3*e),t.lineTo(-e,e),t.lineTo(-3*e,e),t.closePath()}}
var at=Math.sqrt(1/3),st=2*at
const ct={draw:function(t,n){var e=Math.sqrt(n/st),r=e*at
t.moveTo(0,-e),t.lineTo(r,0),t.lineTo(0,e),t.lineTo(-r,0),t.closePath()}}
var lt=Math.sin(m/10)/Math.sin(7*m/10),ht=Math.sin(w/10)*lt,ft=-Math.cos(w/10)*lt
const _t={draw:function(t,n){var e=Math.sqrt(.8908130915292852*n),r=ht*e,i=ft*e
t.moveTo(0,-e),t.lineTo(r,i)
for(var o=1;o<5;++o){var u=w*o/5,a=Math.cos(u),s=Math.sin(u)
t.lineTo(s*e,-a*e),t.lineTo(a*r-s*i,s*r+a*i)}t.closePath()}},pt={draw:function(t,n){var e=Math.sqrt(n),r=-e/2
t.rect(r,r,e,e)}}
var yt=Math.sqrt(3)
const gt={draw:function(t,n){var e=-Math.sqrt(n/(3*yt))
t.moveTo(0,2*e),t.lineTo(-yt*e,-e),t.lineTo(yt*e,-e),t.closePath()}}
var dt=-.5,vt=Math.sqrt(3)/2,mt=1/Math.sqrt(12),xt=3*(mt/2+1)
const wt={draw:function(t,n){var e=Math.sqrt(n/xt),r=e/2,i=e*mt,o=r,u=e*mt+e,a=-o,s=u
t.moveTo(r,i),t.lineTo(o,u),t.lineTo(a,s),t.lineTo(dt*r-vt*i,vt*r+dt*i),t.lineTo(dt*o-vt*u,vt*o+dt*u),t.lineTo(dt*a-vt*s,vt*a+dt*s),t.lineTo(dt*r+vt*i,dt*i-vt*r),t.lineTo(dt*o+vt*u,dt*u-vt*o),t.lineTo(dt*a+vt*s,dt*s-vt*a),t.closePath()}}
var Mt=[ot,ut,ct,pt,_t,gt,wt]
function bt(t,n){var e=null
function r(){var r
if(e||(e=r=c()),t.apply(this,arguments).draw(e,+n.apply(this,arguments)),r)return e=null,r+""||null}return t="function"==typeof t?t:l(t||ot),n="function"==typeof n?n:l(void 0===n?64:+n),r.type=function(n){return arguments.length?(t="function"==typeof n?n:l(n),r):t},r.size=function(t){return arguments.length?(n="function"==typeof t?t:l(+t),r):n},r.context=function(t){return arguments.length?(e=null==t?null:t,r):e},r}function Tt(){}function At(t,n,e){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+e)/6)}function kt(t){this._context=t}function Nt(t){return new kt(t)}function St(t){this._context=t}function Ct(t){return new St(t)}function Et(t){this._context=t}function Dt(t){return new Et(t)}kt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:At(this,this._x1,this._y1)
case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2
break
case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6)
default:At(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},St.prototype={areaStart:Tt,areaEnd:Tt,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath()
break
case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath()
break
case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n
break
case 1:this._point=2,this._x3=t,this._y3=n
break
case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6)
break
default:At(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},Et.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1
break
case 1:this._point=2
break
case 2:this._point=3
var e=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+n)/6
this._line?this._context.lineTo(e,r):this._context.moveTo(e,r)
break
case 3:this._point=4
default:At(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}}
class Ut{constructor(t,n){this._context=t,this._x=n}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line}point(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2
default:this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,n,t,n):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+n)/2,t,this._y0,t,n)}this._x0=t,this._y0=n}}function Zt(t){return new Ut(t,!0)}function Pt(t){return new Ut(t,!1)}function qt(t,n){this._basis=new kt(t),this._beta=n}qt.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,n=this._y,e=t.length-1
if(e>0)for(var r,i=t[0],o=n[0],u=t[e]-i,a=n[e]-o,s=-1;++s<=e;)r=s/e,this._basis.point(this._beta*t[s]+(1-this._beta)*(i+r*u),this._beta*n[s]+(1-this._beta)*(o+r*a))
this._x=this._y=null,this._basis.lineEnd()},point:function(t,n){this._x.push(+t),this._y.push(+n)}}
const Ft=function t(n){function e(t){return 1===n?new kt(t):new qt(t,n)}return e.beta=function(n){return t(+n)},e}(.85)
function Lt(t,n,e){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-e),t._x2,t._y2)}function Yt(t,n){this._context=t,this._k=(1-n)/6}Yt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2)
break
case 3:Lt(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2,this._x1=t,this._y1=n
break
case 2:this._point=3
default:Lt(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
const Ot=function t(n){function e(t){return new Yt(t,n)}return e.tension=function(n){return t(+n)},e}(0)
function Ht(t,n){this._context=t,this._k=(1-n)/6}Ht.prototype={areaStart:Tt,areaEnd:Tt,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath()
break
case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath()
break
case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n
break
case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n)
break
case 2:this._point=3,this._x5=t,this._y5=n
break
default:Lt(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
const Rt=function t(n){function e(t){return new Ht(t,n)}return e.tension=function(n){return t(+n)},e}(0)
function zt(t,n){this._context=t,this._k=(1-n)/6}zt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1
break
case 1:this._point=2
break
case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2)
break
case 3:this._point=4
default:Lt(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
const It=function t(n){function e(t){return new zt(t,n)}return e.tension=function(n){return t(+n)},e}(0)
function jt(t,n,e){var r=t._x1,i=t._y1,o=t._x2,u=t._y2
if(t._l01_a>v){var a=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,s=3*t._l01_a*(t._l01_a+t._l12_a)
r=(r*a-t._x0*t._l12_2a+t._x2*t._l01_2a)/s,i=(i*a-t._y0*t._l12_2a+t._y2*t._l01_2a)/s}if(t._l23_a>v){var c=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,l=3*t._l23_a*(t._l23_a+t._l12_a)
o=(o*c+t._x1*t._l23_2a-n*t._l12_2a)/l,u=(u*c+t._y1*t._l23_2a-e*t._l12_2a)/l}t._context.bezierCurveTo(r,i,o,u,t._x2,t._y2)}function Vt(t,n){this._context=t,this._alpha=n}Vt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2)
break
case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n
this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2
break
case 2:this._point=3
default:jt(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
const Bt=function t(n){function e(t){return n?new Vt(t,n):new Yt(t,0)}return e.alpha=function(n){return t(+n)},e}(.5)
function Xt(t,n){this._context=t,this._alpha=n}Xt.prototype={areaStart:Tt,areaEnd:Tt,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath()
break
case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath()
break
case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n
this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n
break
case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n)
break
case 2:this._point=3,this._x5=t,this._y5=n
break
default:jt(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
const $t=function t(n){function e(t){return n?new Xt(t,n):new Ht(t,0)}return e.alpha=function(n){return t(+n)},e}(.5)
function Gt(t,n){this._context=t,this._alpha=n}Gt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n
this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1
break
case 1:this._point=2
break
case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2)
break
case 3:this._point=4
default:jt(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
const Wt=function t(n){function e(t){return n?new Gt(t,n):new zt(t,0)}return e.alpha=function(n){return t(+n)},e}(.5)
function Qt(t){this._context=t}function Jt(t){return new Qt(t)}function Kt(t){return t<0?-1:1}function tn(t,n,e){var r=t._x1-t._x0,i=n-t._x1,o=(t._y1-t._y0)/(r||i<0&&-0),u=(e-t._y1)/(i||r<0&&-0),a=(o*i+u*r)/(r+i)
return(Kt(o)+Kt(u))*Math.min(Math.abs(o),Math.abs(u),.5*Math.abs(a))||0}function nn(t,n){var e=t._x1-t._x0
return e?(3*(t._y1-t._y0)/e-n)/2:n}function en(t,n,e){var r=t._x0,i=t._y0,o=t._x1,u=t._y1,a=(o-r)/3
t._context.bezierCurveTo(r+a,i+a*n,o-a,u-a*e,o,u)}function rn(t){this._context=t}function on(t){this._context=new un(t)}function un(t){this._context=t}function an(t){return new rn(t)}function sn(t){return new on(t)}function cn(t){this._context=t}function ln(t){var n,e,r=t.length-1,i=new Array(r),o=new Array(r),u=new Array(r)
for(i[0]=0,o[0]=2,u[0]=t[0]+2*t[1],n=1;n<r-1;++n)i[n]=1,o[n]=4,u[n]=4*t[n]+2*t[n+1]
for(i[r-1]=2,o[r-1]=7,u[r-1]=8*t[r-1]+t[r],n=1;n<r;++n)e=i[n]/o[n-1],o[n]-=e,u[n]-=e*u[n-1]
for(i[r-1]=u[r-1]/o[r-1],n=r-2;n>=0;--n)i[n]=(u[n]-i[n+1])/o[n]
for(o[r-1]=(t[r]+i[r-1])/2,n=0;n<r-1;++n)o[n]=2*t[n+1]-i[n+1]
return[i,o]}function hn(t){return new cn(t)}function fn(t,n){this._context=t,this._t=n}function _n(t){return new fn(t,.5)}function pn(t){return new fn(t,0)}function yn(t){return new fn(t,1)}function gn(t,n){if((i=t.length)>1)for(var e,r,i,o=1,u=t[n[0]],a=u.length;o<i;++o)for(r=u,u=t[n[o]],e=0;e<a;++e)u[e][1]+=u[e][0]=isNaN(r[e][1])?r[e][0]:r[e][1]}function dn(t){for(var n=t.length,e=new Array(n);--n>=0;)e[n]=n
return e}function vn(t,n){return t[n]}function mn(t){const n=[]
return n.key=t,n}function xn(){var t=l([]),n=dn,e=gn,r=vn
function i(i){var o,u,a=Array.from(t.apply(this,arguments),mn),s=a.length,c=-1
for(const t of i)for(o=0,++c;o<s;++o)(a[o][c]=[0,+r(t,a[o].key,c,i)]).data=t
for(o=0,u=Z(n(a));o<s;++o)a[u[o]].index=o
return e(a,u),a}return i.keys=function(n){return arguments.length?(t="function"==typeof n?n:l(Array.from(n)),i):t},i.value=function(t){return arguments.length?(r="function"==typeof t?t:l(+t),i):r},i.order=function(t){return arguments.length?(n=null==t?dn:"function"==typeof t?t:l(Array.from(t)),i):n},i.offset=function(t){return arguments.length?(e=null==t?gn:t,i):e},i}function wn(t,n){if((r=t.length)>0){for(var e,r,i,o=0,u=t[0].length;o<u;++o){for(i=e=0;e<r;++e)i+=t[e][o][1]||0
if(i)for(e=0;e<r;++e)t[e][o][1]/=i}gn(t,n)}}function Mn(t,n){if((a=t.length)>0)for(var e,r,i,o,u,a,s=0,c=t[n[0]].length;s<c;++s)for(o=u=0,e=0;e<a;++e)(i=(r=t[n[e]][s])[1]-r[0])>0?(r[0]=o,r[1]=o+=i):i<0?(r[1]=u,r[0]=u+=i):(r[0]=0,r[1]=i)}function bn(t,n){if((e=t.length)>0){for(var e,r=0,i=t[n[0]],o=i.length;r<o;++r){for(var u=0,a=0;u<e;++u)a+=t[u][r][1]||0
i[r][1]+=i[r][0]=-a/2}gn(t,n)}}function Tn(t,n){if((i=t.length)>0&&(r=(e=t[n[0]]).length)>0){for(var e,r,i,o=0,u=1;u<r;++u){for(var a=0,s=0,c=0;a<i;++a){for(var l=t[n[a]],h=l[u][1]||0,f=(h-(l[u-1][1]||0))/2,_=0;_<a;++_){var p=t[n[_]]
f+=(p[u][1]||0)-(p[u-1][1]||0)}s+=h,c+=f*h}e[u-1][1]+=e[u-1][0]=o,s&&(o-=c/s)}e[u-1][1]+=e[u-1][0]=o,gn(t,n)}}function An(t){var n=t.map(kn)
return dn(t).sort((function(t,e){return n[t]-n[e]}))}function kn(t){for(var n,e=-1,r=0,i=t.length,o=-1/0;++e<i;)(n=+t[e][1])>o&&(o=n,r=e)
return r}function Nn(t){var n=t.map(Sn)
return dn(t).sort((function(t,e){return n[t]-n[e]}))}function Sn(t){for(var n,e=0,r=-1,i=t.length;++r<i;)(n=+t[r][1])&&(e+=n)
return e}function Cn(t){return Nn(t).reverse()}function En(t){var n,e,r=t.length,i=t.map(Sn),o=An(t),u=0,a=0,s=[],c=[]
for(n=0;n<r;++n)e=o[n],u<a?(u+=i[e],s.push(e)):(a+=i[e],c.push(e))
return c.reverse().concat(s)}function Dn(t){return dn(t).reverse()}Qt.prototype={areaStart:Tt,areaEnd:Tt,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n))}},rn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1)
break
case 3:en(this,this._t0,nn(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var e=NaN
if(n=+n,(t=+t)!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2
break
case 2:this._point=3,en(this,nn(this,e=tn(this,t,n)),e)
break
default:en(this,this._t0,e=tn(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e}}},(on.prototype=Object.create(rn.prototype)).point=function(t,n){rn.prototype.point.call(this,n,t)},un.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,e,r,i,o){this._context.bezierCurveTo(n,t,r,e,o,i)}},cn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,e=t.length
if(e)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===e)this._context.lineTo(t[1],n[1])
else for(var r=ln(t),i=ln(n),o=0,u=1;u<e;++o,++u)this._context.bezierCurveTo(r[0][o],i[0][o],r[1][o],i[1][o],t[u],n[u]);(this._line||0!==this._line&&1===e)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}},fn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2
default:if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n)
else{var e=this._x*(1-this._t)+t*this._t
this._context.lineTo(e,this._y),this._context.lineTo(e,n)}}this._x=t,this._y=n}}},691:(t,n,e)=>{e.d(n,{H:()=>i,L:()=>r})
class r extends Map{constructor(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s
if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),null!=t)for(const[e,r]of t)this.set(e,r)}get(t){return super.get(o(this,t))}has(t){return super.has(o(this,t))}set(t,n){return super.set(u(this,t),n)}delete(t){return super.delete(a(this,t))}}class i extends Set{constructor(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s
if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),null!=t)for(const e of t)this.add(e)}has(t){return super.has(o(this,t))}add(t){return super.add(u(this,t))}delete(t){return super.delete(a(this,t))}}function o(t,n){let{_intern:e,_key:r}=t
const i=r(n)
return e.has(i)?e.get(i):n}function u(t,n){let{_intern:e,_key:r}=t
const i=r(n)
return e.has(i)?e.get(i):(e.set(i,n),n)}function a(t,n){let{_intern:e,_key:r}=t
const i=r(n)
return e.has(i)&&(n=e.get(n),e.delete(i)),n}function s(t){return null!==t&&"object"==typeof t?t.valueOf():t}}}])
