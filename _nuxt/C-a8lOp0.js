import u from"./DfF1GqTv.js";import{_}from"./B0JTbJ0m.js";import{e as f,r as c,O as d,o as l,f as s,w as x,g as o,a6 as g,i as h}from"./BAgJTPCY.js";const V=f({__name:"InstagramUserProfileDisplayName",props:{user:{}},emits:["update"],setup(r,{emit:k}){const a=r,e=c(a.user.profile.name??"");d(()=>a.user.profile.name,t=>{e.value=t});function m(){a.user.profile.updateName(e.value)}return(t,n)=>{const p=u;return l(),s(p,{class:"dx-profile-page__header__display-name"},{default:x(()=>[o(e)?(l(),s(o(_),{key:0,tag:"p",contenteditable:"",spellcheck:"false",modelValue:o(e),"onUpdate:modelValue":n[0]||(n[0]=i=>g(e)?e.value=i:null),"no-html":"","no-nl":"",onBlur:m},null,8,["modelValue"])):h("",!0)]),_:1})}}});export{V as _};
