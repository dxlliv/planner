import{s as p,aa as b,a0 as V,$ as B,W as E,a5 as P,ab as U}from"./CfW_1GVk.js";import{z as y,i as $,t as w,j as h,O as C,w as k,r as A,o as M,aj as q,u as O}from"./CSSan7tc.js";const N=p({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),R=p({value:null,disabled:Boolean,selectedClass:String},"group-item");function D(s,r){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const e=b("useGroupItem");if(!e)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const t=V();y(Symbol.for(`${r.description}:id`),t);const l=$(r,null);if(!l){if(!a)return l;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${r.description}`)}const m=w(s,"value"),v=h(()=>!!(l.disabled.value||s.disabled));l.register({id:t,value:m,disabled:v},e),C(()=>{l.unregister(t)});const f=h(()=>l.isSelected(t)),I=h(()=>f.value&&[l.selectedClass.value,s.selectedClass]);return k(f,g=>{e.emit("group:selected",{value:g})},{flush:"sync"}),{id:t,isSelected:f,toggle:()=>l.select(t,!f.value),select:g=>l.select(t,g),selectedClass:I,value:m,disabled:v,group:l}}function H(s,r){let a=!1;const e=A([]),t=B(s,"modelValue",[],n=>n==null?[]:S(e,P(n)),n=>{const i=j(e,n);return s.multiple?i:i[0]}),l=b("useGroup");function m(n,i){const d=n,u=Symbol.for(`${r.description}:id`),c=U(u,l==null?void 0:l.vnode).indexOf(i);O(d.value)==null&&(d.value=c,d.useIndexAsValue=!0),c>-1?e.splice(c,0,d):e.push(d)}function v(n){if(a)return;f();const i=e.findIndex(d=>d.id===n);e.splice(i,1)}function f(){const n=e.find(i=>!i.disabled);n&&s.mandatory==="force"&&!t.value.length&&(t.value=[n.id])}M(()=>{f()}),C(()=>{a=!0}),q(()=>{for(let n=0;n<e.length;n++)e[n].useIndexAsValue&&(e[n].value=n)});function I(n,i){const d=e.find(u=>u.id===n);if(!(i&&(d!=null&&d.disabled)))if(s.multiple){const u=t.value.slice(),o=u.findIndex(G=>G===n),c=~o;if(i=i??!c,c&&s.mandatory&&u.length<=1||!c&&s.max!=null&&u.length+1>s.max)return;o<0&&i?u.push(n):o>=0&&!i&&u.splice(o,1),t.value=u}else{const u=t.value.includes(n);if(s.mandatory&&u)return;t.value=i??!u?[n]:[]}}function g(n){if(s.multiple,t.value.length){const i=t.value[0],d=e.findIndex(c=>c.id===i);let u=(d+n)%e.length,o=e[u];for(;o.disabled&&u!==d;)u=(u+n)%e.length,o=e[u];if(o.disabled)return;t.value=[e[u].id]}else{const i=e.find(d=>!d.disabled);i&&(t.value=[i.id])}}const x={register:m,unregister:v,selected:t,select:I,disabled:w(s,"disabled"),prev:()=>g(e.length-1),next:()=>g(1),isSelected:n=>t.value.includes(n),selectedClass:h(()=>s.selectedClass),items:h(()=>e),getItemIndex:n=>W(e,n)};return y(r,x),x}function W(s,r){const a=S(s,[r]);return a.length?s.findIndex(e=>e.id===a[0]):-1}function S(s,r){const a=[];return r.forEach(e=>{const t=s.find(m=>E(e,m.value)),l=s[e];(t==null?void 0:t.value)!=null?a.push(t.id):l!=null&&a.push(l.id)}),a}function j(s,r){const a=[];return r.forEach(e=>{const t=s.findIndex(l=>l.id===e);if(~t){const l=s[t];a.push(l.value!=null?l.value:t)}}),a}export{R as a,D as b,N as m,H as u};
