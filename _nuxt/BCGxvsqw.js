import{_ as S}from"./D7IUFf3m.js";import $ from"./BxNFREMQ.js";import B from"./DSckO6BL.js";import{e as c,r as F,O as C,o as n,f as o,w as i,a0 as t,b as g,g as m,c as v,F as y,a2 as D,_ as h,i as r,a3 as _}from"./BAgJTPCY.js";import w from"./C-PqXgWI.js";import A from"./BKPJV_Bq.js";import{S as E,a as N}from"./qt7Xr2SU.js";import{N as P,P as O}from"./BRvcpjE1.js";const V=c({__name:"InstagramMediaAlbum",props:{media:{},user:{},isFromDetail:{type:Boolean},navigation:{type:Boolean}},setup(u){const e=u,p=F(!1);C(()=>e.media.list,()=>{let a=!1;for(const s of e.media.list)s.isEditing;p.value=a},{deep:!0});function d(a){e.media.listIndex=a.activeIndex}return(a,s)=>{const l=j,M=w,k=A;return n(),o(k,{type:"album",media:a.media},{actions:i(()=>[t(a.$slots,"actions",{},void 0,!0)]),default:i(()=>[g(m(E),{"initial-slide":a.media.listIndex,modules:[m(P),m(O)],navigation:a.navigation,pagination:a.navigation,onSlideChange:d},{default:i(()=>[(n(!0),v(y,null,D(a.media.list,(f,b)=>(n(),o(m(N),{key:b},{default:i(()=>[(n(),o(l,{key:f.id,"context-menu":!1,media:f,user:a.user},{default:i(()=>[t(a.$slots,"single-post",{},void 0,!0)]),_:2},1032,["media","user"]))]),_:2},1024))),128))]),_:3},8,["initial-slide","modules","navigation","pagination"]),g(M,{index:a.media.currentIndex,max:a.media.itemsCount},null,8,["index","max"]),t(a.$slots,"link",{},void 0,!0)]),_:3},8,["media"])}}}),I=h(V,[["__scopeId","data-v-e3fd1b1a"]]),Q=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"})),j=c({__name:"InstagramMedia",props:{user:{},media:{},isFromDetail:{type:Boolean},contextMenu:{type:Boolean},navigation:{type:Boolean},pagination:{type:Boolean}},setup(u){return(e,p)=>{const d=S,a=$,s=I,l=B;return n(),v(y,null,[(n(),o(_,null,{default:i(()=>[e.media.type==="image"?(n(),o(d,{key:0,"is-from-detail":e.isFromDetail,"context-menu":e.contextMenu,media:e.media},{link:i(()=>[t(e.$slots,"link")]),_:3},8,["is-from-detail","context-menu","media"])):r("",!0)]),_:3})),(n(),o(_,null,{default:i(()=>[e.media.type==="video"?(n(),o(a,{key:0,"is-from-detail":e.isFromDetail,"context-menu":e.contextMenu,media:e.media,"cover-selector":""},{link:i(()=>[t(e.$slots,"link")]),_:3},8,["is-from-detail","context-menu","media"])):r("",!0)]),_:3})),e.media.type==="album"?(n(),o(s,{key:0,"is-from-detail":e.isFromDetail,navigation:e.navigation,pagination:e.pagination,"context-menu":e.contextMenu,media:e.media,user:e.user},{link:i(()=>[t(e.$slots,"link")]),_:3},8,["is-from-detail","navigation","pagination","context-menu","media","user"])):r("",!0),e.media.type==="iframe"?(n(),o(l,{key:1,"is-from-detail":e.isFromDetail,"context-menu":e.contextMenu,media:e.media},{link:i(()=>[t(e.$slots,"link")]),_:3},8,["is-from-detail","context-menu","media"])):r("",!0)],64)}}});export{Q as I,j as _};
