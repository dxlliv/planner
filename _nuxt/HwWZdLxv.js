import{_ as $}from"./BoeeBnLI.js";import v from"./CA5fn-CO.js";import F from"./C-U4PoCi.js";import{e as g,r as C,N as B,o as a,f as i,w as t,Z as o,b as f,g as _,c as I,F as M,a0 as D,_ as h,i as m,a1 as c}from"./C9j35KK9.js";import w from"./BdBLcUzX.js";import A from"./B1Qqzk3b.js";import{S as E,a as x}from"./D8qP43Dd.js";const N=g({__name:"InstagramMediaAlbum",props:{media:{},user:{},isFromDetail:{type:Boolean}},setup(l){const e=l,u=C(!1);B(()=>e.media.list,()=>{let n=!1;for(const s of e.media.list)s.isEditing;u.value=n},{deep:!0});function r(n){e.media.listIndex=n.activeIndex}return(n,s)=>{const d=V,y=w,b=A;return a(),i(b,{type:"album",media:n.media},{actions:t(()=>[o(n.$slots,"actions",{},void 0,!0)]),default:t(()=>[f(_(E),{"initial-slide":n.media.listIndex,onSlideChange:r},{default:t(()=>[(a(!0),I(M,null,D(n.media.list,(p,S)=>(a(),i(_(x),{key:S},{default:t(()=>[(a(),i(d,{key:p.id,"context-menu":!1,media:p,user:n.user},{default:t(()=>[o(n.$slots,"single-post",{},void 0,!0)]),_:2},1032,["media","user"]))]),_:2},1024))),128))]),_:3},8,["initial-slide"]),f(y,{index:n.media.currentIndex,max:n.media.itemsCount},null,8,["index","max"]),o(n.$slots,"link",{},void 0,!0)]),_:3},8,["media"])}}}),k=h(N,[["__scopeId","data-v-c51bf61f"]]),q=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),V=g({__name:"InstagramMedia",props:{user:{},media:{},isFromDetail:{type:Boolean},contextMenu:{type:Boolean}},setup(l){return(e,u)=>{const r=$,n=v,s=k,d=F;return a(),I(M,null,[(a(),i(c,null,{default:t(()=>[e.media.type==="image"?(a(),i(r,{key:0,"is-from-detail":e.isFromDetail,"context-menu":e.contextMenu,media:e.media},{link:t(()=>[o(e.$slots,"link")]),_:3},8,["is-from-detail","context-menu","media"])):m("",!0)]),_:3})),(a(),i(c,null,{default:t(()=>[e.media.type==="video"?(a(),i(n,{key:0,"is-from-detail":e.isFromDetail,"context-menu":e.contextMenu,media:e.media,"cover-selector":""},{link:t(()=>[o(e.$slots,"link")]),_:3},8,["is-from-detail","context-menu","media"])):m("",!0)]),_:3})),e.media.type==="album"?(a(),i(s,{key:0,"is-from-detail":e.isFromDetail,"context-menu":e.contextMenu,media:e.media,user:e.user},{link:t(()=>[o(e.$slots,"link")]),_:3},8,["is-from-detail","context-menu","media","user"])):m("",!0),e.media.type==="iframe"?(a(),i(d,{key:1,"is-from-detail":e.isFromDetail,"context-menu":e.contextMenu,media:e.media},{link:t(()=>[o(e.$slots,"link")]),_:3},8,["is-from-detail","context-menu","media"])):m("",!0)],64)}}});export{q as I,V as _};