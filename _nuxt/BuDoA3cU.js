import D from"./99n-HVSG.js";import E from"./CJBbgYS2.js";import{_ as P}from"./DZX8KsDo.js";import x from"./OGeBezJI.js";import{_ as M}from"./B6bQeLBr.js";import{_ as F}from"./D2t0z4E5.js";import{ar as N,c as O}from"./BNCagIqf.js";import{V as R}from"./CyfJ1GE1.js";import{d as w,r as z,a as A,a9 as I,Q as s,R as d,F as Y,l as t,a4 as u,V as i,Z as l,W as f,S as L,a5 as Q,u as m,Y as T,k as W,aa as X,n as Z}from"./CBwktElb.js";const j=["textContent"],q=["href"],se=w({__name:"UserSelector",props:{user:{},add:{type:Boolean}},setup(_){const p=_,g=N(),c=O(),o=z({enabled:!1,x:0,y:0}),r=A(!1);function v(){c.push(p.user.route)}function C(){r.value=!0}function k(e){if(g.mdAndUp.value){c.push(p.user.route);return}o.enabled=!0}function U(e){e.preventDefault(),o.enabled=!1,o.x=e.clientX,o.y=e.clientY,Z(()=>{o.enabled=!0})}return(e,n)=>{const V=I("router-link"),b=D,h=E,y=P,S=x,B=M,$=F;return s(),d("div",{class:X(["ig-profile-selector",{"ig-profile-selector--add":e.add}])},[e.user?(s(),d(Y,{key:0},[t(V,{to:e.user.route},null,8,["to"]),u("a",{class:"cursor-pointer",onClick:k,onContextmenu:U},[(s(),i(L,null,{default:l(()=>[(s(),i(h,{key:e.user.profile.avatar,avatar:e.user.profile.avatar},{inner:l(()=>[e.user.hasLocalChanges||e.user.hasUnsavedChanges?(s(),i(b,{key:0})):f("",!0)]),_:1},8,["avatar"]))]),_:1})),u("h3",{class:"mt-4 text-truncate",textContent:Q(e.user.profile.username)},null,8,j),t(S,{modelValue:m(o).enabled,"onUpdate:modelValue":n[0]||(n[0]=a=>m(o).enabled=a)},{default:l(()=>[t(y,{onOpen:v,onEdit:C,user:e.user},null,8,["user"])]),_:1},8,["modelValue"])],32),u("a",{class:"d-inline-block text-blue-grey-lighten-2 mt-n1",href:e.user.profile.publicProfile,target:"_blank"},[t(R,{icon:"mdi-arrow-top-right",size:"14px"})],8,q)],64)):f("",!0),T(e.$slots,"default"),t($,{title:e.$t("common.actions.editProfile"),modelValue:m(r),"onUpdate:modelValue":n[2]||(n[2]=a=>W(r)?r.value=a:null)},{default:l(()=>[t(B,{user:e.user,onClose:n[1]||(n[1]=a=>r.value=!1)},null,8,["user"])]),_:1},8,["title","modelValue"])],2)}}});export{se as _};
