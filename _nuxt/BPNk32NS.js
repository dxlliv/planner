import{u as r}from"./D392tYcY.js";import{V as l,a as p}from"./DtLYoY7C.js";import{d as c,Q as u,V as d,Z as f,l as g,a5 as C,u as _}from"./CBwktElb.js";const T=c({__name:"InstagramMediaContextMenuItemAddToAlbum",props:{media:{}},emits:["close"],setup(a,{emit:o}){const n=a,s=o,{files:x,open:i,reset:V,onChange:m}=r({accept:"image/jpg, image/jpeg, image/png",multiple:!1});return m(e=>{if(!e)return;const t=e[0];n.media.addToAlbum(t),s("close")}),(e,t)=>(u(),d(p,{onClick:_(i)},{default:f(()=>[g(l,{textContent:C(e.$t("instagram.profile.menu.addToAlbum"))},null,8,["textContent"])]),_:1},8,["onClick"]))}});export{T as _};