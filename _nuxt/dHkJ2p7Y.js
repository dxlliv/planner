import c from"./DT5jjoMZ.js";import i from"./B_y1004c.js";import{q as p}from"./B6w2PrMr.js";import{u as l}from"./c_JOaGhb.js";import{d as u,a as _,u as t,Q as f,V as d,Z as g,l as x,W as k}from"./CBwktElb.js";const y=u({__name:"PagePlannerProfileMedia",props:{username:{},platform:{},collection:{},media:{}},setup(r){const o=r,s=p(),e=_();e.value=s.getUser(o.username,o.platform);const a=e.value.media.fetchSingleMedia(o.collection,o.media);return l(a.seoMeta),(M,P)=>{const n=c,m=i;return t(e)?(f(),d(m,{key:0,user:t(e)},{default:g(()=>[x(n,{class:"mt-10",border:"",profile:t(e).profile,media:t(a)},null,8,["profile","media"])]),_:1},8,["user"])):k("",!0)}}});export{y as _};