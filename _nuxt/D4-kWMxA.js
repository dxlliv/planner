import{u as r}from"./CG1WuBLN.js";import{V as l,a as p}from"./Y655z9Rr.js";import{e as c,o as u,f as d,w as f,b as g,t as C,g as _}from"./C9j35KK9.js";const T=c({__name:"InstagramMediaMenuItemAddToAlbum",props:{media:{}},emits:["close"],setup(a,{emit:o}){const n=a,s=o,{files:b,open:i,reset:k,onChange:m}=r({accept:"image/jpg, image/jpeg, image/png",multiple:!1});return m(e=>{if(!e)return;const t=e[0];n.media.addToAlbum(t),s("close")}),(e,t)=>(u(),d(p,{onClick:_(i)},{default:f(()=>[g(l,{textContent:C(e.$t("instagram.profile.media.menu.addToAlbum"))},null,8,["textContent"])]),_:1},8,["onClick"]))}});export{T as _};