import{t as d,l as t,ag as V,ai as B,z as u}from"./CBwktElb.js";import{a as h,u as x}from"./CTjs6bfA.js";import{s as N,I as P,t as T,C as R,v as _,a7 as w,ax as I,y as L,aG as A}from"./DhfqOKzv.js";import{m as M,u as X}from"./XLmlN98c.js";import{m as Y,u as $}from"./DCbmHiO_.js";import{m as z}from"./CrWmManI.js";import{m as D,M as F}from"./DVSEIoFp.js";import{V as G}from"./BZVa_d-4.js";const W=N({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:P,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...T(),...M({location:"top end"}),...Y(),...z(),...R(),...D({transition:"scale-rotate-transition"})},"VBadge"),U=_()({name:"VBadge",inheritAttrs:!1,props:W(),setup(e,o){const{backgroundColorClasses:m,backgroundColorStyles:c}=h(d(e,"color")),{roundedClasses:g}=$(e),{t:b}=w(),{textColorClasses:f,textColorStyles:v}=x(d(e,"textColor")),{themeClasses:C}=I(),{locationStyles:y}=X(e,!0,a=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(a)?+(e.offsetY??0):["left","right"].includes(a)?+(e.offsetX??0):0));return L(()=>{const a=Number(e.content),n=!e.max||isNaN(a)?e.content:a<=+e.max?a:`${e.max}+`,[k,S]=A(o.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return t(e.tag,u({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},S,{style:e.style}),{default:()=>{var s,l;return[t("div",{class:"v-badge__wrapper"},[(l=(s=o.slots).default)==null?void 0:l.call(s),t(F,{transition:e.transition},{default:()=>{var i,r;return[V(t("span",u({class:["v-badge__badge",C.value,m.value,g.value,f.value],style:[c.value,v.value,e.inline?{}:y.value],"aria-atomic":"true","aria-label":b(e.label,a),"aria-live":"polite",role:"status"},k),[e.dot?void 0:o.slots.badge?(r=(i=o.slots).badge)==null?void 0:r.call(i):e.icon?t(G,{icon:e.icon},null):n]),[[B,e.modelValue]])]}})])]}})}),{}}});export{U as V};