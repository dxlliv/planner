import{aw as H,S,at as h,T as A,U as F,W as x,ab as i,B as V,Y as w,b as l,au as X,ax as Y,ap as J,am as G,aj as Q,ay as T,a8 as Z,a9 as ee,az as te,aa as ae,aA as ne,r as oe,aB as se,aC as I,aD as ie}from"./C5m_Cme5.js";import{V as le}from"./imCT1EVG.js";import{u as re,b as ue,c as ce,d as N,a as _,m as de,e as ve}from"./CLqfsjAT.js";import{u as me}from"./CO4ucrKk.js";import{M as fe}from"./nZzHZelX.js";import{V as pe}from"./B6me1FGO.js";import{V as ge}from"./Cf58RqGx.js";import{m as ye,u as be}from"./eLe8Zfql.js";import{m as Ce,u as he}from"./Dyq2yMq1.js";import{m as Ve,u as Pe}from"./N_y0hvxj.js";import{m as ke,u as Ie}from"./DImQCP9-.js";import{m as Se,u as Le}from"./DB__60yQ.js";import{m as Be}from"./C1pO7a5W.js";const xe=H({name:"VListGroupActivator",setup(e,n){let{slots:t}=n;return re(),()=>{var o;return(o=t.default)==null?void 0:o.call(t)}}}),Te=S({activeColor:String,baseColor:String,color:String,collapseIcon:{type:h,default:"$collapse"},expandIcon:{type:h,default:"$expand"},prependIcon:h,appendIcon:h,fluid:Boolean,subgroup:Boolean,title:String,value:null,...A(),...F()},"VListGroup"),E=x()({name:"VListGroup",props:Te(),setup(e,n){let{slots:t}=n;const{isOpen:o,open:d,id:v}=ue(i(e,"value"),!0),u=V(()=>`v-list-group--id-${String(v.value)}`),a=ce(),{isBooted:p}=me();function m(f){f.stopPropagation(),d(!o.value,f)}const g=V(()=>({onClick:m,class:"v-list-group__header",id:u.value})),y=V(()=>o.value?e.collapseIcon:e.expandIcon),b=V(()=>({VListItem:{active:o.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&y.value,appendIcon:e.appendIcon||!e.subgroup&&y.value,title:e.title,value:e.value}}));return w(()=>l(e.tag,{class:["v-list-group",{"v-list-group--prepend":a==null?void 0:a.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":o.value},e.class],style:e.style},{default:()=>[t.activator&&l(pe,{defaults:b.value},{default:()=>[l(xe,null,{default:()=>[t.activator({props:g.value,isOpen:o.value})]})]}),l(fe,{transition:{component:le},disabled:!p.value},{default:()=>{var f;return[X(l("div",{class:"v-list-group__items",role:"group","aria-labelledby":u.value},[(f=t.default)==null?void 0:f.call(t)]),[[Y,o.value]])]}})]})),{isOpen:o}}}),Ae=S({color:String,inset:Boolean,sticky:Boolean,title:String,...A(),...F()},"VListSubheader"),Fe=x()({name:"VListSubheader",props:Ae(),setup(e,n){let{slots:t}=n;const{textColorClasses:o,textColorStyles:d}=J(i(e,"color"));return w(()=>{const v=!!(t.default||e.title);return l(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},o.value,e.class],style:[{textColorStyles:d},e.style]},{default:()=>{var u;return[v&&l("div",{class:"v-list-subheader__text"},[((u=t.default)==null?void 0:u.call(t))??e.title])]}})}),{}}}),we=S({items:Array,returnObject:Boolean},"VListChildren"),R=x()({name:"VListChildren",props:we(),setup(e,n){let{slots:t}=n;return N(),()=>{var o,d;return((o=t.default)==null?void 0:o.call(t))??((d=e.items)==null?void 0:d.map(v=>{var b,f;let{children:u,props:a,type:p,raw:m}=v;if(p==="divider")return((b=t.divider)==null?void 0:b.call(t,{props:a}))??l(ge,a,null);if(p==="subheader")return((f=t.subheader)==null?void 0:f.call(t,{props:a}))??l(Fe,a,null);const g={subtitle:t.subtitle?c=>{var s;return(s=t.subtitle)==null?void 0:s.call(t,{...c,item:m})}:void 0,prepend:t.prepend?c=>{var s;return(s=t.prepend)==null?void 0:s.call(t,{...c,item:m})}:void 0,append:t.append?c=>{var s;return(s=t.append)==null?void 0:s.call(t,{...c,item:m})}:void 0,title:t.title?c=>{var s;return(s=t.title)==null?void 0:s.call(t,{...c,item:m})}:void 0},y=E.filterProps(a);return u?l(E,G({value:a==null?void 0:a.value},y),{activator:c=>{let{props:s}=c;const L={...a,...s,value:e.returnObject?m:a.value};return t.header?t.header({props:L}):l(_,L,g)},default:()=>l(R,{items:u,returnObject:e.returnObject},t)}):t.item?t.item({props:a}):l(_,G(a,{value:e.returnObject?m:a.value}),g)}))}}}),De=S({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:Q}},"list-items");function Oe(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function je(e,n){const t=I(n,e.itemType,"item"),o=Oe(n)?n:I(n,e.itemTitle),d=I(n,e.itemValue,void 0),v=I(n,e.itemChildren),u=e.itemProps===!0?ie(n,["children"]):I(n,e.itemProps),a={title:o,value:d,...u};return{type:t,title:a.title,value:a.value,props:a,children:t==="item"&&v?M(e,v):void 0,raw:n}}function M(e,n){const t=[];for(const o of n)t.push(je(e,o));return t}function Ge(e){return{items:V(()=>M(e,e.items))}}const _e=S({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:h,collapseIcon:h,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,"onClick:open":T(),"onClick:select":T(),"onUpdate:opened":T(),...de({selectStrategy:"single-leaf",openStrategy:"list"}),...ye(),...A(),...Ce(),...Ve(),...ke(),itemType:{type:String,default:"type"},...De(),...Se(),...F(),...Z(),...Be({variant:"text"})},"VList"),Je=x()({name:"VList",props:_e(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,n){let{slots:t}=n;const{items:o}=Ge(e),{themeClasses:d}=ee(e),{backgroundColorClasses:v,backgroundColorStyles:u}=te(i(e,"bgColor")),{borderClasses:a}=be(e),{densityClasses:p}=he(e),{dimensionStyles:m}=Pe(e),{elevationClasses:g}=Ie(e),{roundedClasses:y}=Le(e),{children:b,open:f,parents:c,select:s,getPath:L}=ve(e),U=V(()=>e.lines?`v-list--${e.lines}-line`:void 0),D=i(e,"activeColor"),O=i(e,"baseColor"),j=i(e,"color");N(),ae({VListGroup:{activeColor:D,baseColor:O,color:j,expandIcon:i(e,"expandIcon"),collapseIcon:i(e,"collapseIcon")},VListItem:{activeClass:i(e,"activeClass"),activeColor:D,baseColor:O,color:j,density:i(e,"density"),disabled:i(e,"disabled"),lines:i(e,"lines"),nav:i(e,"nav"),slim:i(e,"slim"),variant:i(e,"variant")}});const P=ne(!1),k=oe();function $(r){P.value=!0}function K(r){P.value=!1}function W(r){var B;!P.value&&!(r.relatedTarget&&((B=k.value)!=null&&B.contains(r.relatedTarget)))&&C()}function q(r){const B=r.target;if(!(!k.value||["INPUT","TEXTAREA"].includes(B.tagName))){if(r.key==="ArrowDown")C("next");else if(r.key==="ArrowUp")C("prev");else if(r.key==="Home")C("first");else if(r.key==="End")C("last");else return;r.preventDefault()}}function z(r){P.value=!0}function C(r){if(k.value)return se(k.value,r)}return w(()=>l(e.tag,{ref:k,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},d.value,v.value,a.value,p.value,g.value,U.value,y.value,e.class],style:[u.value,m.value,e.style],tabindex:e.disabled||P.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:$,onFocusout:K,onFocus:W,onKeydown:q,onMousedown:z},{default:()=>[l(R,{items:o.value,returnObject:e.returnObject},t)]})),{open:f,select:s,focus:C,children:b,parents:c,getPath:L}}});export{Je as V};
