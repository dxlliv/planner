import m from"./By5aryMc.js";import{e as c,r as d,N as f,o as _,f as b,w as g,b as h,g as o,aK as E,a5 as P}from"./BYLsYk1G.js";import{_ as y}from"./CzVhoKZT.js";const k=c({__name:"InstagramUserProfileDescription",props:{user:{}},emits:["update"],setup(t,{emit:l}){const n=t,s=l,e=d(n.user.profile.biography??"");f(()=>n.user.profile.biography,a=>{e.value=a});function i(){s("update",e.value)}return(a,r)=>{const p=m;return _(),b(p,null,{default:g(()=>[h(o(y),{tag:"p",class:"dx-profile-page__header__biography",contenteditable:("isPlannerFeatureEnabled"in a?a.isPlannerFeatureEnabled:o(E))("profileEditor"),spellcheck:"false",modelValue:o(e),"onUpdate:modelValue":r[0]||(r[0]=u=>P(e)?e.value=u:null),"no-html":!0,onBlur:i},null,8,["contenteditable","modelValue"])]),_:1})}}});export{k as _};