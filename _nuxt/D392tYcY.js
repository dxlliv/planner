import{a as h,O as C,I as M,J as j,u as F,j as A,w as k,o as W,g as R}from"./CBwktElb.js";function x(n){return M()?(j(n),!0):!1}function q(){const n=new Set,o=r=>{n.delete(r)};return{on:r=>{n.add(r);const t=()=>o(r);return x(t),{off:t}},off:o,trigger:(...r)=>Promise.all(Array.from(n).map(t=>t(...r)))}}function T(n){return typeof n=="function"?n():F(n)}const E=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const H=Object.prototype.toString,I=n=>H.call(n)==="[object Object]",U=()=>{},G=(n,o)=>Object.prototype.hasOwnProperty.call(n,o);function N(n){let o;function e(){return o||(o=n()),o}return e.reset=async()=>{const i=o;o=void 0,i&&await i},e}function B(n,o,e={}){const{immediate:i=!0}=e,r=h(!1);let t=null;function a(){t&&(clearTimeout(t),t=null)}function c(){r.value=!1,a()}function f(...l){a(),r.value=!0,t=setTimeout(()=>{r.value=!1,t=null,n(...l)},T(o))}return i&&(r.value=!0,E&&f()),x(c),{isPending:C(r),start:f,stop:c}}function D(n){var o;const e=T(n);return(o=e==null?void 0:e.$el)!=null?o:e}const J=E?window:void 0,V=E?window.document:void 0,P=E?window.navigator:void 0;function S(...n){let o,e,i,r;if(typeof n[0]=="string"||Array.isArray(n[0])?([e,i,r]=n,o=J):[o,e,i,r]=n,!o)return U;Array.isArray(e)||(e=[e]),Array.isArray(i)||(i=[i]);const t=[],a=()=>{t.forEach(d=>d()),t.length=0},c=(d,p,m,g)=>(d.addEventListener(p,m,g),()=>d.removeEventListener(p,m,g)),f=k(()=>[D(o),T(r)],([d,p])=>{if(a(),!d)return;const m=I(p)?{...p}:p;t.push(...e.flatMap(g=>i.map(s=>c(d,g,s,m))))},{immediate:!0,flush:"post"}),l=()=>{f(),a()};return x(l),l}const Y=500,$=10;function Z(n,o,e){var i,r;const t=A(()=>D(n));let a,c;function f(){a&&(clearTimeout(a),a=void 0),c=void 0}function l(s){var w,b,y,u;(w=e==null?void 0:e.modifiers)!=null&&w.self&&s.target!==t.value||(f(),(b=e==null?void 0:e.modifiers)!=null&&b.prevent&&s.preventDefault(),(y=e==null?void 0:e.modifiers)!=null&&y.stop&&s.stopPropagation(),c={x:s.x,y:s.y},a=setTimeout(()=>o(s),(u=e==null?void 0:e.delay)!=null?u:Y))}function d(s){var w,b,y,u;if((w=e==null?void 0:e.modifiers)!=null&&w.self&&s.target!==t.value||!c||(e==null?void 0:e.distanceThreshold)===!1)return;(b=e==null?void 0:e.modifiers)!=null&&b.prevent&&s.preventDefault(),(y=e==null?void 0:e.modifiers)!=null&&y.stop&&s.stopPropagation();const v=s.x-c.x,_=s.y-c.y;Math.sqrt(v*v+_*_)>=((u=e==null?void 0:e.distanceThreshold)!=null?u:$)&&f()}const p={capture:(i=e==null?void 0:e.modifiers)==null?void 0:i.capture,once:(r=e==null?void 0:e.modifiers)==null?void 0:r.once},m=[S(t,"pointerdown",l,p),S(t,"pointermove",d,p),S(t,["pointerup","pointerleave"],f,p)];return()=>m.forEach(s=>s())}function z(){const n=h(!1),o=R();return o&&W(()=>{n.value=!0},o),n}function L(n){const o=z();return A(()=>(o.value,!!n()))}function O(n,o={}){const{controls:e=!1,navigator:i=P}=o,r=L(()=>i&&"permissions"in i);let t;const a=typeof n=="string"?{name:n}:n,c=h(),f=()=>{t&&(c.value=t.state)},l=N(async()=>{if(r.value){if(!t)try{t=await i.permissions.query(a),S(t,"change",f),f()}catch{c.value="prompt"}return t}});return l(),e?{state:c,isSupported:r,query:l}:c}function ee(n={}){const{navigator:o=P,read:e=!1,source:i,copiedDuring:r=1500,legacy:t=!1}=n,a=L(()=>o&&"clipboard"in o),c=O("clipboard-read"),f=O("clipboard-write"),l=A(()=>a.value||t),d=h(""),p=h(!1),m=B(()=>p.value=!1,r);function g(){a.value&&y(c.value)?o.clipboard.readText().then(u=>{d.value=u}):d.value=b()}l.value&&e&&S(["copy","cut"],g);async function s(u=T(i)){l.value&&u!=null&&(a.value&&y(f.value)?await o.clipboard.writeText(u):w(u),d.value=u,p.value=!0,m.start())}function w(u){const v=document.createElement("textarea");v.value=u??"",v.style.position="absolute",v.style.opacity="0",document.body.appendChild(v),v.select(),document.execCommand("copy"),v.remove()}function b(){var u,v,_;return(_=(v=(u=document==null?void 0:document.getSelection)==null?void 0:u.call(document))==null?void 0:v.toString())!=null?_:""}function y(u){return u==="granted"||u==="prompt"}return{isSupported:l,text:d,copied:p,copy:s}}const K={multiple:!0,accept:"*",reset:!1,directory:!1};function te(n={}){const{document:o=V}=n,e=h(null),{on:i,trigger:r}=q();let t;o&&(t=o.createElement("input"),t.type="file",t.onchange=f=>{const l=f.target;e.value=l.files,r(e.value)});const a=()=>{e.value=null,t&&(t.value="",r(null))},c=f=>{if(!t)return;const l={...K,...n,...f};t.multiple=l.multiple,t.accept=l.accept,t.webkitdirectory=l.directory,G(l,"capture")&&(t.capture=l.capture),l.reset&&a(),t.click()};return{files:C(e),open:c,reset:a,onChange:i}}export{ee as a,Z as o,te as u};