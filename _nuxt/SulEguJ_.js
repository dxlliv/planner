import{V as m}from"./wjBXyAAh.js";import{e as p,B as d,o as s,c as a,F as u,a0 as f,g,S as b,b as h,w as x,d as C,t as n,a as v,_ as k}from"./C9j35KK9.js";import"./DT_k8Ksj.js";import"./CstALlm4.js";const V={class:"ig-profile-page__tabs"},B=["onClick"],y=["textContent"],I=p({__name:"InstagramUserTabs",props:{media:{},active:{}},emits:["select"],setup(i,{emit:c}){const l=c,o=i,r=d(()=>{let e=[{name:"posts",label:"Posts",icon:"mdi-grid"}];return o.media.hasCollection("reels")&&o.media.collections.reels.length>0&&e.push({name:"reels",label:"Reels",icon:"mdi-play-box-multiple-outline"}),e});return(e,N)=>(s(),a("div",V,[(s(!0),a(u,null,f(g(r),(t,_)=>(s(),a("div",{key:_,class:b(["ig-profile-page__tabs__tab",{"ig-profile-page__tabs__tab--active":e.active===t.name}]),onClick:w=>l("select",t.name)},[h(m,{size:"15"},{default:x(()=>[C(n(t.icon),1)]),_:2},1024),v("span",{textContent:n(t.label)},null,8,y)],10,B))),128))]))}}),D=k(I,[["__scopeId","data-v-cb93c37c"]]);export{D as default};