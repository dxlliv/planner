import f from"./B1uPTWcd.js";import{u as _}from"./D392tYcY.js";import{V as v}from"./zAwBFt0n.js";import{V as d}from"./D7vnNKzI.js";import{d as g,a as k,Q as o,V as r,Z as C,u as s}from"./CBwktElb.js";const B=g({__name:"UserEditorFieldAvatar",props:{user:{}},emits:["update"],setup(i,{emit:c}){const n=i,p=c,e=k(n.user?n.user.profile.avatar:void 0),{files:V,open:m,reset:x,onChange:l}=_({accept:"image/jpg, image/jpeg, image/png",multiple:!1});return l(async a=>{if(!a)return;const t=a[0];e.value={file:Promise.resolve(t)},p("update",t)}),(a,t)=>{const u=f;return o(),r(d,{class:"cursor-pointer",variant:"outlined",size:64,onClick:s(m)},{default:C(()=>[s(e)?(o(),r(u,{key:1,avatar:s(e),size:64},null,8,["avatar"])):(o(),r(v,{key:0,icon:"mdi-account"}))]),_:1},8,["onClick"])}}});export{B as _};
