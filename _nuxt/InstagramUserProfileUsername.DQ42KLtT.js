import{z as m,y as d,_ as u}from"./entry.nxeMeOXT.js";import{_ as p}from"./vue-contenteditable.es.DE2ZCxgv.js";import{d as f,a as c,a4 as t,a5 as _,D as b,u as n,k,a6 as B,a7 as E,al as V}from"./swiper-vue.Dnu8qG6n.js";const g=f({__name:"InstagramUserProfileUsername",props:{profile:{},editable:{type:Boolean},size:{default:"medium"}},emits:["update"],setup(r,{emit:v}){const o=r,a=c(o.profile.username??"");function s(){o.profile.updateUsername(a.value)}return(e,l)=>(t(),_("div",{class:V(["ig-profile__header__username",{"font-weight-bold text-subtitle-2":e.size==="medium"}])},[b(n(p),{tag:"span",contenteditable:e.editable&&("isPlannerFeatureEnabled"in e?e.isPlannerFeatureEnabled:n(m))("profileEditor"),spellcheck:"false",modelValue:n(a),"onUpdate:modelValue":l[0]||(l[0]=i=>k(a)?a.value=i:null),"no-html":"","no-nl":"",onBlur:s},null,8,["contenteditable","modelValue"]),e.profile.verified?(t(),B(d,{key:0,icon:"mdi-check-decagram"})):E("",!0)],2))}}),P=u(g,[["__scopeId","data-v-c94f99fa"]]);export{P as default};