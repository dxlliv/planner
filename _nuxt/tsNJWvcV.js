import{m as x,a as v}from"./LTO01vc5.js";import{f as D}from"./D3j0TLhE.js";import{t as h,x as A,J as L,ag as S,z as w,a6 as B}from"./toyJVOOD.js";import{u as F}from"./BWrCqiFU.js";import{V as I}from"./Nad3TBlY.js";import{V as R}from"./Bvwa_7js.js";import{a as T,w as d,n as z,z as f,l as g}from"./CK7iLweF.js";const O=h({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...x({origin:"center center",scrollStrategy:"block",transition:{component:I},zIndex:2400})},"VDialog"),j=A()({name:"VDialog",props:O(),emits:{"update:modelValue":a=>!0,afterLeave:()=>!0},setup(a,p){let{emit:V,slots:u}=p;const l=L(a,"modelValue"),{scopeId:E}=F(),e=T();function m(t){var r,c;const n=t.relatedTarget,s=t.target;if(n!==s&&((r=e.value)!=null&&r.contentEl)&&((c=e.value)!=null&&c.globalTop)&&![document,e.value.contentEl].includes(s)&&!e.value.contentEl.contains(s)){const o=B(e.value.contentEl);if(!o.length)return;const i=o[0],y=o[o.length-1];n===i?y.focus():i.focus()}}S&&d(()=>l.value&&a.retainFocus,t=>{t?document.addEventListener("focusin",m):document.removeEventListener("focusin",m)},{immediate:!0});function P(){var t;(t=e.value)!=null&&t.contentEl&&!e.value.contentEl.contains(document.activeElement)&&e.value.contentEl.focus({preventScroll:!0})}function b(){V("afterLeave")}return d(l,async t=>{var n;t||(await z(),(n=e.value.activatorEl)==null||n.focus({preventScroll:!0}))}),w(()=>{const t=v.filterProps(a),n=f({"aria-haspopup":"dialog","aria-expanded":String(l.value)},a.activatorProps),s=f({tabindex:-1},a.contentProps);return g(v,f({ref:e,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable},a.class],style:a.style},t,{modelValue:l.value,"onUpdate:modelValue":r=>l.value=r,"aria-modal":"true",activatorProps:n,contentProps:s,role:"dialog",onAfterEnter:P,onAfterLeave:b},E),{activator:u.activator,default:function(){for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return g(R,{root:"VDialog"},{default:()=>{var i;return[(i=u.default)==null?void 0:i.call(u,...c)]}})}})}),D({},e)}});export{j as V,O as m};