import{t as i,j as h,l,af as q,ah as H,z as O,s as W,a as X}from"./CK7iLweF.js";import{V as J}from"./C6qYbWsE.js";import{u as Q,b as Y,c as Z,d as E,a as j,m as ee,e as te}from"./DqUtL0CO.js";import{a1 as ae,t as S,P as x,v as T,x as B,z as F,K as ne,E as se,F as oe,G as ie,a2 as le,a3 as P,a4 as re}from"./toyJVOOD.js";import{u as ue}from"./CgnoIz2I.js";import{m as A}from"./Jenkb-9w.js";import{M as ce}from"./B_q-1z95.js";import{V as de}from"./Bvwa_7js.js";import{u as me,a as ve}from"./brZaqqJc.js";import{V as fe}from"./CVgeKdVM.js";import{m as pe,u as ge}from"./9GnyyO61.js";import{m as ye,u as be}from"./BjFUtTBf.js";import{m as Ce,u as he}from"./DWpEEEb-.js";import{m as Ve,u as Ie}from"./loxWndA1.js";import{m as Pe,u as Se}from"./u-l0zx1s.js";import{m as ke}from"./CONEV2eP.js";const Le=ae({name:"VListGroupActivator",setup(e,n){let{slots:t}=n;return Q(),()=>{var s;return(s=t.default)==null?void 0:s.call(t)}}}),xe=S({activeColor:String,baseColor:String,color:String,collapseIcon:{type:x,default:"$collapse"},expandIcon:{type:x,default:"$expand"},prependIcon:x,appendIcon:x,fluid:Boolean,subgroup:Boolean,title:String,value:null,...T(),...A()},"VListGroup"),_=B()({name:"VListGroup",props:xe(),setup(e,n){let{slots:t}=n;const{isOpen:s,open:d,id:m}=Y(i(e,"value"),!0),u=h(()=>`v-list-group--id-${String(m.value)}`),a=Z(),{isBooted:p}=ue();function v(f){d(!s.value,f)}const g=h(()=>({onClick:v,class:"v-list-group__header",id:u.value})),y=h(()=>s.value?e.collapseIcon:e.expandIcon),b=h(()=>({VListItem:{active:s.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&y.value,appendIcon:e.appendIcon||!e.subgroup&&y.value,title:e.title,value:e.value}}));return F(()=>l(e.tag,{class:["v-list-group",{"v-list-group--prepend":a==null?void 0:a.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":s.value},e.class],style:e.style},{default:()=>[t.activator&&l(de,{defaults:b.value},{default:()=>[l(Le,null,{default:()=>[t.activator({props:g.value,isOpen:s.value})]})]}),l(ce,{transition:{component:J},disabled:!p.value},{default:()=>{var f;return[q(l("div",{class:"v-list-group__items",role:"group","aria-labelledby":u.value},[(f=t.default)==null?void 0:f.call(t)]),[[H,s.value]])]}})]})),{isOpen:s}}}),Be=S({color:String,inset:Boolean,sticky:Boolean,title:String,...T(),...A()},"VListSubheader"),Te=B()({name:"VListSubheader",props:Be(),setup(e,n){let{slots:t}=n;const{textColorClasses:s,textColorStyles:d}=me(i(e,"color"));return F(()=>{const m=!!(t.default||e.title);return l(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},s.value,e.class],style:[{textColorStyles:d},e.style]},{default:()=>{var u;return[m&&l("div",{class:"v-list-subheader__text"},[((u=t.default)==null?void 0:u.call(t))??e.title])]}})}),{}}}),Fe=S({items:Array,returnObject:Boolean},"VListChildren"),N=B()({name:"VListChildren",props:Fe(),setup(e,n){let{slots:t}=n;return E(),()=>{var s,d;return((s=t.default)==null?void 0:s.call(t))??((d=e.items)==null?void 0:d.map(m=>{var b,f;let{children:u,props:a,type:p,raw:v}=m;if(p==="divider")return((b=t.divider)==null?void 0:b.call(t,{props:a}))??l(fe,a,null);if(p==="subheader")return((f=t.subheader)==null?void 0:f.call(t,{props:a}))??l(Te,a,null);const g={subtitle:t.subtitle?c=>{var o;return(o=t.subtitle)==null?void 0:o.call(t,{...c,item:v})}:void 0,prepend:t.prepend?c=>{var o;return(o=t.prepend)==null?void 0:o.call(t,{...c,item:v})}:void 0,append:t.append?c=>{var o;return(o=t.append)==null?void 0:o.call(t,{...c,item:v})}:void 0,title:t.title?c=>{var o;return(o=t.title)==null?void 0:o.call(t,{...c,item:v})}:void 0},y=_.filterProps(a);return u?l(_,O({value:a==null?void 0:a.value},y),{activator:c=>{let{props:o}=c;const k={...a,...o,value:e.returnObject?v:a.value};return t.header?t.header({props:k}):l(j,k,g)},default:()=>l(N,{items:u,returnObject:e.returnObject},t)}):t.item?t.item({props:a}):l(j,O(a,{value:e.returnObject?v:a.value}),g)}))}}}),Ae=S({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:ne}},"list-items");function we(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function De(e,n){const t=P(n,e.itemType,"item"),s=we(n)?n:P(n,e.itemTitle),d=P(n,e.itemValue,void 0),m=P(n,e.itemChildren),u=e.itemProps===!0?re(n,["children"]):P(n,e.itemProps),a={title:s,value:d,...u};return{type:t,title:a.title,value:a.value,props:a,children:t==="item"&&m?R(e,m):void 0,raw:n}}function R(e,n){const t=[];for(const s of n)t.push(De(e,s));return t}function Ge(e){return{items:h(()=>R(e,e.items))}}const Oe=S({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...ee({selectStrategy:"single-leaf",openStrategy:"list"}),...pe(),...T(),...ye(),...Ce(),...Ve(),itemType:{type:String,default:"type"},...Ae(),...Pe(),...A(),...se(),...ke({variant:"text"})},"VList"),Ye=B()({name:"VList",props:Oe(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,n){let{slots:t}=n;const{items:s}=Ge(e),{themeClasses:d}=oe(e),{backgroundColorClasses:m,backgroundColorStyles:u}=ve(i(e,"bgColor")),{borderClasses:a}=ge(e),{densityClasses:p}=be(e),{dimensionStyles:v}=he(e),{elevationClasses:g}=Ie(e),{roundedClasses:y}=Se(e),{children:b,open:f,parents:c,select:o}=te(e),k=h(()=>e.lines?`v-list--${e.lines}-line`:void 0),w=i(e,"activeColor"),D=i(e,"baseColor"),G=i(e,"color");E(),ie({VListGroup:{activeColor:w,baseColor:D,color:G,expandIcon:i(e,"expandIcon"),collapseIcon:i(e,"collapseIcon")},VListItem:{activeClass:i(e,"activeClass"),activeColor:w,baseColor:D,color:G,density:i(e,"density"),disabled:i(e,"disabled"),lines:i(e,"lines"),nav:i(e,"nav"),slim:i(e,"slim"),variant:i(e,"variant")}});const V=W(!1),I=X();function M(r){V.value=!0}function $(r){V.value=!1}function K(r){var L;!V.value&&!(r.relatedTarget&&((L=I.value)!=null&&L.contains(r.relatedTarget)))&&C()}function z(r){const L=r.target;if(!(!I.value||["INPUT","TEXTAREA"].includes(L.tagName))){if(r.key==="ArrowDown")C("next");else if(r.key==="ArrowUp")C("prev");else if(r.key==="Home")C("first");else if(r.key==="End")C("last");else return;r.preventDefault()}}function U(r){V.value=!0}function C(r){if(I.value)return le(I.value,r)}return F(()=>l(e.tag,{ref:I,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},d.value,m.value,a.value,p.value,g.value,k.value,y.value,e.class],style:[u.value,v.value,e.style],tabindex:e.disabled||V.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:M,onFocusout:$,onFocus:K,onKeydown:z,onMousedown:U},{default:()=>[l(N,{items:s.value,returnObject:e.returnObject},t)]})),{open:f,select:o,focus:C,children:b,parents:c}}});export{Ye as V};
