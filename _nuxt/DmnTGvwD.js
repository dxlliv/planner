import{u as r}from"./Cgb_vm35.js";import{V as p,a as c}from"./SnztWVyS.js";import{e as l,o as u,f as d,w as f,b as g,t as C,g as _}from"./BYLsYk1G.js";const V=l({__name:"InstagramMediaMenuItemAddCover",props:{media:{}},emits:["close"],setup(o,{emit:a}){const n=o,s=a,{open:i,onChange:m}=r({accept:"image/jpg, image/jpeg, image/png",multiple:!1});return m(e=>{if(!e)return;const t=e[0];n.media.setCover(t),s("close")}),(e,t)=>(u(),d(c,{onClick:_(i)},{default:f(()=>[g(p,{textContent:C(e.$t("profile.media.menu.addCover"))},null,8,["textContent"])]),_:1},8,["onClick"]))}});export{V as _};