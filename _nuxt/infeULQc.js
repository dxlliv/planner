import $ from"./qcLmySaE.js";import D from"./BD1fADdW.js";import{_ as E}from"./MafaSMpV.js";import x from"./CWSjNk9U.js";import{_ as M}from"./wMvOm9a-.js";import{_ as O}from"./CetZiOoG.js";import{au as F,d as N}from"./toyJVOOD.js";import{V as R}from"./SHXT7idA.js";import{d as w,r as z,a as A,a7 as I,O as s,P as c,F as X,l as t,a2 as u,R as i,X as l,U as f,S as L,a3 as T,u as m,W,k as Y,a8 as j,n as q}from"./CK7iLweF.js";const G=["textContent"],H=["href"],se=w({__name:"UserSelector",props:{user:{},add:{type:Boolean}},setup(_){const p=_,g=F(),d=N(),o=z({enabled:!1,x:0,y:0}),r=A(!1);function v(){d.push(p.user.route)}function C(){r.value=!0}function k(e){if(g.mdAndUp.value){d.push(p.user.route);return}o.enabled=!0}function U(e){e.preventDefault(),o.enabled=!1,o.x=e.clientX,o.y=e.clientY,q(()=>{o.enabled=!0})}return(e,n)=>{const V=I("router-link"),b=$,h=D,y=E,S=x,B=M,P=O;return s(),c("div",{class:j(["ig-profile-selector",{"ig-profile-selector--add":e.add}])},[e.user?(s(),c(X,{key:0},[t(V,{to:e.user.route},null,8,["to"]),u("a",{class:"cursor-pointer",onClick:k,onContextmenu:U},[(s(),i(L,null,{default:l(()=>[(s(),i(h,{key:e.user.profile.avatar,avatar:e.user.profile.avatar},{inner:l(()=>[e.user.hasLocalChanges||e.user.hasUnsavedChanges?(s(),i(b,{key:0})):f("",!0)]),_:1},8,["avatar"]))]),_:1})),u("h3",{class:"mt-4 text-truncate",textContent:T(e.user.profile.username)},null,8,G),t(S,{modelValue:m(o).enabled,"onUpdate:modelValue":n[0]||(n[0]=a=>m(o).enabled=a)},{default:l(()=>[t(y,{onOpen:v,onEdit:C,user:e.user},null,8,["user"])]),_:1},8,["modelValue"])],32),u("a",{class:"d-inline-block text-blue-grey-lighten-2 mt-n1",href:e.user.profile.publicProfile,target:"_blank"},[t(R,{icon:"mdi-arrow-top-right",size:"14px"})],8,H)],64)):f("",!0),W(e.$slots,"default"),t(P,{title:e.$t("common.actions.editProfile"),modelValue:m(r),"onUpdate:modelValue":n[2]||(n[2]=a=>Y(r)?r.value=a:null)},{default:l(()=>[t(B,{user:e.user,onClose:n[1]||(n[1]=a=>r.value=!1)},null,8,["user"])]),_:1},8,["title","modelValue"])],2)}}});export{se as _};
