import{_ as l}from"./InstagramMediaDropzone.vue.BMPWPzWo.js";import{_ as c}from"./DialogContent.vue.CfahcOqT.js";import{F as _}from"./entry.nxeMeOXT.js";import{d as p,a4 as d,a6 as f,aa as a,D as s}from"./swiper-vue.Dnu8qG6n.js";const M=p({__name:"InstagramMediaCreate",props:{user:{}},emits:["close"],setup(u,{emit:n}){const t=n;function r(e){t("close")}return(e,o)=>{const i=l,m=c;return d(),f(_,{"content-class":"ig-media-create","max-width":700,onClose:o[0]||(o[0]=g=>t("close"))},{default:a(()=>[s(m,{title:e.$t("instagram.profile.media.add.title")},{default:a(()=>[s(i,{class:"mx-4",user:e.user,onAdd:r},null,8,["user"])]),_:1},8,["title"])]),_:1})}}});export{M as _};