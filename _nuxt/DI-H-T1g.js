import{_ as S}from"./D4WvPjaZ.js";import v from"./BJ29i_1W.js";import F from"./CfEi91xz.js";import{d as g,a as C,w as B,O as n,R as i,X as t,W as o,l as _,u as f,a9 as D,P as I,F as k,aa as h,ab as w,U as m,S as c}from"./CK7iLweF.js";import A from"./BYiPin1o.js";import E from"./BY9SLOc3.js";import{_ as x}from"./toyJVOOD.js";const O=g({__name:"InstagramMediaAlbum",props:{media:{},user:{},isFromDetail:{type:Boolean}},setup(l){const e=l,u=C(!1);B(()=>e.media.list,()=>{let a=!1;for(const s of e.media.list)s.isEditing;u.value=a},{deep:!0});function r(a){e.media.listIndex=a.activeIndex}return(a,s)=>{const d=P,y=A,b=E;return n(),i(b,{type:"album",media:a.media},{actions:t(()=>[o(a.$slots,"actions",{},void 0,!0)]),default:t(()=>[_(f(D),{"initial-slide":a.media.listIndex,onSlideChange:r},{default:t(()=>[(n(!0),I(k,null,h(a.media.list,(p,$)=>(n(),i(f(w),{key:$},{default:t(()=>[(n(),i(d,{key:p.id,"context-menu":!1,media:p,user:a.user},{default:t(()=>[o(a.$slots,"single-post",{},void 0,!0)]),_:2},1032,["media","user"]))]),_:2},1024))),128))]),_:3},8,["initial-slide"]),_(y,{index:a.media.currentIndex,max:a.media.itemsCount},null,8,["index","max"]),o(a.$slots,"link",{},void 0,!0)]),_:3},8,["media"])}}}),M=x(O,[["__scopeId","data-v-5a57b76d"]]),U=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),P=g({__name:"InstagramMedia",props:{user:{},media:{},isFromDetail:{type:Boolean},contextMenu:{type:Boolean}},setup(l){return(e,u)=>{const r=S,a=v,s=M,d=F;return n(),I(k,null,[(n(),i(c,null,{default:t(()=>[e.media.type==="image"?(n(),i(r,{key:0,"is-from-detail":e.isFromDetail,"context-menu":e.contextMenu,media:e.media},{link:t(()=>[o(e.$slots,"link")]),_:3},8,["is-from-detail","context-menu","media"])):m("",!0)]),_:3})),(n(),i(c,null,{default:t(()=>[e.media.type==="video"?(n(),i(a,{key:0,"is-from-detail":e.isFromDetail,"context-menu":e.contextMenu,media:e.media,"cover-selector":""},{link:t(()=>[o(e.$slots,"link")]),_:3},8,["is-from-detail","context-menu","media"])):m("",!0)]),_:3})),e.media.type==="album"?(n(),i(s,{key:0,"is-from-detail":e.isFromDetail,"context-menu":e.contextMenu,media:e.media,user:e.user},{link:t(()=>[o(e.$slots,"link")]),_:3},8,["is-from-detail","context-menu","media","user"])):m("",!0),e.media.type==="iframe"?(n(),i(d,{key:1,"is-from-detail":e.isFromDetail,"context-menu":e.contextMenu,media:e.media},{link:t(()=>[o(e.$slots,"link")]),_:3},8,["is-from-detail","context-menu","media"])):m("",!0)],64)}}});export{U as I,P as _};