import c from"./BXTJljn1.js";import p from"./B2I2tQ7j.js";import{e as _,r as d,au as l,o as f,f as u,w as t,$ as n,b as I,g,av as h}from"./BYLsYk1G.js";import{I as w}from"./BCUWs55e.js";const C=_({__name:"InstagramMediaImage",props:{media:{},isFromDetail:{type:Boolean}},setup(s){const a=s,o=d(a.media.rawFilePath);async function r(e){e&&(o.value=await h(a.media))}return(e,M)=>{const i=c,m=p;return l((f(),u(m,{type:"image",media:e.media},{actions:t(()=>[n(e.$slots,"actions")]),default:t(()=>[I(i,{src:g(o)},null,8,["src"]),n(e.$slots,"link")]),_:3},8,["media"])),[[w,r]])}}});export{C as _};