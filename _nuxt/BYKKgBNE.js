import{_ as S}from"./uZEDhMY-.js";import v from"./D7xaIPZj.js";import F from"./BJFXls-N.js";import{d as g,a as C,w as B,Q as n,V as t,Z as i,Y as o,l as f,u as _,ab as D,R as I,F as k,ac as h,ad as w,W as s,S as c}from"./CBwktElb.js";import A from"./08nNcm3R.js";import E from"./Pii-ZZMK.js";import{_ as V}from"./B6w2PrMr.js";const x=g({__name:"InstagramMediaAlbum",props:{media:{},profile:{},isFromDetail:{type:Boolean}},setup(d){const e=d,u=C(!1);B(()=>e.media.list,()=>{let a=!1;for(const m of e.media.list)m.isEditing;u.value=a},{deep:!0});function r(a){e.media.listIndex=a.activeIndex}return(a,m)=>{const l=j,y=A,b=E;return n(),t(b,{type:"album",media:a.media},{actions:i(()=>[o(a.$slots,"actions",{},void 0,!0)]),default:i(()=>[f(_(D),{"initial-slide":a.media.listIndex,onSlideChange:r},{default:i(()=>[(n(!0),I(k,null,h(a.media.list,(p,$)=>(n(),t(_(w),{key:$},{default:i(()=>[(n(),t(l,{key:p.id,"context-menu":!1,media:p,profile:a.profile},{default:i(()=>[o(a.$slots,"single-post",{},void 0,!0)]),_:2},1032,["media","profile"]))]),_:2},1024))),128))]),_:3},8,["initial-slide"]),f(y,{index:a.media.currentIndex,max:a.media.itemsCount},null,8,["index","max"]),o(a.$slots,"link",{},void 0,!0)]),_:3},8,["media"])}}}),M=V(x,[["__scopeId","data-v-d89af4e5"]]),T=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),j=g({__name:"InstagramMedia",props:{profile:{},media:{},isFromDetail:{type:Boolean},contextMenu:{type:Boolean}},setup(d){return(e,u)=>{const r=S,a=v,m=M,l=F;return n(),I(k,null,[(n(),t(c,null,{default:i(()=>[e.media.type==="image"?(n(),t(r,{key:0,"is-from-detail":e.isFromDetail,"context-menu":e.contextMenu,media:e.media},{link:i(()=>[o(e.$slots,"link")]),_:3},8,["is-from-detail","context-menu","media"])):s("",!0)]),_:3})),(n(),t(c,null,{default:i(()=>[e.media.type==="video"?(n(),t(a,{key:0,"is-from-detail":e.isFromDetail,"context-menu":e.contextMenu,media:e.media,"cover-selector":""},{link:i(()=>[o(e.$slots,"link")]),_:3},8,["is-from-detail","context-menu","media"])):s("",!0)]),_:3})),e.media.type==="album"?(n(),t(m,{key:0,"is-from-detail":e.isFromDetail,"context-menu":e.contextMenu,media:e.media,profile:e.profile},{link:i(()=>[o(e.$slots,"link")]),_:3},8,["is-from-detail","context-menu","media","profile"])):s("",!0),e.media.type==="iframe"?(n(),t(l,{key:1,"is-from-detail":e.isFromDetail,"context-menu":e.contextMenu,media:e.media},{link:i(()=>[o(e.$slots,"link")]),_:3},8,["is-from-detail","context-menu","media"])):s("",!0)],64)}}});export{T as I,j as _};
