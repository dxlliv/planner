import u from"./MediaActionEdit.C1Cr9lbj.js";import f from"./MediaImageEditor.CuWIVRiI.js";import g from"./InstagramMediaContainer.D9J_ZZuO.js";import{N as E,z as y,P as C}from"./entry.nxeMeOXT.js";import{d as M,a8 as h,a4 as n,a6 as t,aa as k,D as F,u as r,a0 as I,a7 as m}from"./swiper-vue.Dnu8qG6n.js";const v=M({__name:"InstagramMediaImage",props:{media:{},isFromDetail:{type:Boolean}},async setup(s){let a,o;const d=s,p=([a,o]=h(()=>C(d.media)),a=await a,o(),a);return(e,i)=>{const _=u,c=f,l=g;return n(),t(l,{type:"image",media:e.media},{default:k(()=>[F(E,{cover:"",height:"100%",src:r(p)},null,8,["src"]),("isPlannerFeatureEnabled"in e?e.isPlannerFeatureEnabled:r(y))("mediaEditor")?(n(),t(_,{key:0,onClick:i[0]||(i[0]=I(w=>e.media.setEditing(!0),["stop"]))})):m("",!0),e.media.isEditing?(n(),t(c,{key:1,media:e.media},null,8,["media"])):m("",!0)]),_:1},8,["media"])}}});export{v as _};