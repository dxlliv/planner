import{a as W,w as L,I as H,j as x,n as ce,m as ue,e as Pe,i as Ce,z as D,s as q,o as Ve,r as Ae,y as We,G as ze,x as De,t as je,M as qe,l as V,ai as $e,af as Ye,ah as Ge,ag as Ue,F as Xe,N as Ze}from"./CK7iLweF.js";import{ar as pe,as as Te,t as G,ag as j,ao as fe,R as Je,O as N,ae as me,H as Le,ab as ye,at as Ke,au as Qe,v as et,E as tt,x as nt,J as ot,F as at,Z as rt,z as it}from"./toyJVOOD.js";import{g as lt,B as ne,a as ge,n as st,b as ct,s as ut}from"./D3j0TLhE.js";import{p as he,f as oe,a as ae,b as be,g as we}from"./Cfm-9vfM.js";import{m as ft,a as vt,u as dt}from"./BWrCqiFU.js";import{a as mt}from"./brZaqqJc.js";import{m as yt,u as gt}from"./DWpEEEb-.js";import{a as ht,b as bt}from"./Beb0bSkS.js";import{m as wt,M as Et}from"./B_q-1z95.js";const Z=new WeakMap;function St(e,t){Object.keys(t).forEach(n=>{if(pe(n)){const o=Te(n),a=Z.get(e);if(t[n]==null)a==null||a.forEach(r=>{const[l,i]=r;l===o&&(e.removeEventListener(o,i),a.delete(r))});else if(!a||![...a].some(r=>r[0]===o&&r[1]===t[n])){e.addEventListener(o,t[n]);const r=a||new Set;r.add([o,t[n]]),Z.has(e)||Z.set(e,r)}}else t[n]==null?e.removeAttribute(n):e.setAttribute(n,t[n])})}function xt(e,t){Object.keys(t).forEach(n=>{if(pe(n)){const o=Te(n),a=Z.get(e);a==null||a.forEach(r=>{const[l,i]=r;l===o&&(e.removeEventListener(o,i),a.delete(r))})}else e.removeAttribute(n)})}function Be(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function Ot(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(t?kt(e):ve(e))return e;e=e.parentElement}return document.scrollingElement}function K(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(ve(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function ve(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function kt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}function Pt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function re(e,t){return{x:e.x+t.x,y:e.y+t.y}}function Ct(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ee(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:o}=e,a=o==="left"?0:o==="center"?t.width/2:o==="right"?t.width:o,r=n==="top"?0:n==="bottom"?t.height:n;return re({x:a,y:r},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:o}=e,a=n==="left"?0:n==="right"?t.width:n,r=o==="top"?0:o==="center"?t.height/2:o==="bottom"?t.height:o;return re({x:a,y:r},t)}return re({x:t.width/2,y:t.height/2},t)}const Me={static:Tt,connected:Bt},At=G({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Me},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function pt(e,t){const n=W({}),o=W();j&&fe(()=>!!(t.isActive.value&&e.locationStrategy),r=>{var l,i;L(()=>e.locationStrategy,r),H(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(l=e.locationStrategy(t,e,n))==null?void 0:l.updateLocation:o.value=(i=Me[e.locationStrategy](t,e,n))==null?void 0:i.updateLocation});function a(r){var l;(l=o.value)==null||l.call(o,r)}return{contentStyles:n,updateLocation:o}}function Tt(){}function Lt(e,t){t?e.style.removeProperty("left"):e.style.removeProperty("right");const n=st(e);return t?n.x+=parseFloat(e.style.right||0):n.x-=parseFloat(e.style.left||0),n.y-=parseFloat(e.style.top||0),n}function Bt(e,t,n){(Array.isArray(e.target.value)||Pt(e.target.value))&&Object.assign(n.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:r}=Je(()=>{const c=he(t.location,e.isRtl.value),u=t.origin==="overlap"?c:t.origin==="auto"?oe(c):he(t.origin,e.isRtl.value);return c.side===u.side&&c.align===ae(u).align?{preferredAnchor:be(c),preferredOrigin:be(u)}:{preferredAnchor:c,preferredOrigin:u}}),[l,i,m,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(c=>x(()=>{const u=parseFloat(t[c]);return isNaN(u)?1/0:u})),y=x(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const c=t.offset.split(" ").map(parseFloat);return c.length<2&&c.push(0),c}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let g=!1;const O=new ResizeObserver(()=>{g&&k()});L([e.target,e.contentEl],(c,u)=>{let[A,p]=c,[E,h]=u;E&&!Array.isArray(E)&&O.unobserve(E),A&&!Array.isArray(A)&&O.observe(A),h&&O.unobserve(h),p&&O.observe(p)},{immediate:!0}),H(()=>{O.disconnect()});function k(){if(g=!1,requestAnimationFrame(()=>g=!0),!e.target.value||!e.contentEl.value)return;const c=lt(e.target.value),u=Lt(e.contentEl.value,e.isRtl.value),A=K(e.contentEl.value),p=12;A.length||(A.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(u.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),u.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const E=A.reduce((S,b)=>{const v=b.getBoundingClientRect(),d=new ne({x:b===document.documentElement?0:v.x,y:b===document.documentElement?0:v.y,width:b.clientWidth,height:b.clientHeight});return S?new ne({x:Math.max(S.left,d.left),y:Math.max(S.top,d.top),width:Math.min(S.right,d.right)-Math.max(S.left,d.left),height:Math.min(S.bottom,d.bottom)-Math.max(S.top,d.top)}):d},void 0);E.x+=p,E.y+=p,E.width-=p*2,E.height-=p*2;let h={anchor:a.value,origin:r.value};function I(S){const b=new ne(u),v=Ee(S.anchor,c),d=Ee(S.origin,b);let{x:F,y:B}=Ct(v,d);switch(S.anchor.side){case"top":B-=y.value[0];break;case"bottom":B+=y.value[0];break;case"left":F-=y.value[0];break;case"right":F+=y.value[0];break}switch(S.anchor.align){case"top":B-=y.value[1];break;case"bottom":B+=y.value[1];break;case"left":F-=y.value[1];break;case"right":F+=y.value[1];break}return b.x+=F,b.y+=B,b.width=Math.min(b.width,m.value),b.height=Math.min(b.height,f.value),{overflows:ge(b,E),x:F,y:B}}let M=0,P=0;const s={x:0,y:0},T={x:!1,y:!1};let ee=-1;for(;!(ee++>10);){const{x:S,y:b,overflows:v}=I(h);M+=S,P+=b,u.x+=S,u.y+=b;{const d=we(h.anchor),F=v.x.before||v.x.after,B=v.y.before||v.y.after;let $=!1;if(["x","y"].forEach(C=>{if(C==="x"&&F&&!T.x||C==="y"&&B&&!T.y){const R={anchor:{...h.anchor},origin:{...h.origin}},U=C==="x"?d==="y"?ae:oe:d==="y"?oe:ae;R.anchor=U(R.anchor),R.origin=U(R.origin);const{overflows:z}=I(R);(z[C].before<=v[C].before&&z[C].after<=v[C].after||z[C].before+z[C].after<(v[C].before+v[C].after)/2)&&(h=R,$=T[C]=!0)}}),$)continue}v.x.before&&(M+=v.x.before,u.x+=v.x.before),v.x.after&&(M-=v.x.after,u.x-=v.x.after),v.y.before&&(P+=v.y.before,u.y+=v.y.before),v.y.after&&(P-=v.y.after,u.y-=v.y.after);{const d=ge(u,E);s.x=E.width-d.x.before-d.x.after,s.y=E.height-d.y.before-d.y.after,M+=d.x.before,u.x+=d.x.before,P+=d.y.before,u.y+=d.y.before}break}const te=we(h.anchor);return Object.assign(n.value,{"--v-overlay-anchor-origin":`${h.anchor.side} ${h.anchor.align}`,transformOrigin:`${h.origin.side} ${h.origin.align}`,top:N(ie(P)),left:e.isRtl.value?void 0:N(ie(M)),right:e.isRtl.value?N(ie(-M)):void 0,minWidth:N(te==="y"?Math.min(l.value,c.width):l.value),maxWidth:N(Se(me(s.x,l.value===1/0?0:l.value,m.value))),maxHeight:N(Se(me(s.y,i.value===1/0?0:i.value,f.value)))}),{available:s,contentBox:u}}return L(()=>[a.value,r.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>k()),ce(()=>{const c=k();if(!c)return;const{available:u,contentBox:A}=c;A.height>u.y&&requestAnimationFrame(()=>{k(),requestAnimationFrame(()=>{k()})})}),{updateLocation:k}}function ie(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Se(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let le=!0;const Q=[];function Mt(e){!le||Q.length?(Q.push(e),se()):(le=!1,e(),se())}let xe=-1;function se(){cancelAnimationFrame(xe),xe=requestAnimationFrame(()=>{const e=Q.shift();e&&e(),Q.length?se():le=!0})}const J={none:null,close:Nt,block:_t,reposition:Ht},Ft=G({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in J}},"VOverlay-scroll-strategies");function Rt(e,t){if(!j)return;let n;ue(async()=>{n==null||n.stop(),t.isActive.value&&e.scrollStrategy&&(n=Pe(),await new Promise(o=>setTimeout(o)),n.active&&n.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(t,e,n):(o=J[e.scrollStrategy])==null||o.call(J,t,e,n)}))}),H(()=>{n==null||n.stop()})}function Nt(e){function t(n){e.isActive.value=!1}Fe(e.targetEl.value??e.contentEl.value,t)}function _t(e,t){var l;const n=(l=e.root.value)==null?void 0:l.offsetParent,o=[...new Set([...K(e.targetEl.value,t.contained?n:void 0),...K(e.contentEl.value,t.contained?n:void 0)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,r=(i=>ve(i)&&i)(n||document.documentElement);r&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((i,m)=>{i.style.setProperty("--v-body-scroll-x",N(-i.scrollLeft)),i.style.setProperty("--v-body-scroll-y",N(-i.scrollTop)),i!==document.documentElement&&i.style.setProperty("--v-scrollbar-offset",N(a)),i.classList.add("v-overlay-scroll-blocked")}),H(()=>{o.forEach((i,m)=>{const f=parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),y=parseFloat(i.style.getPropertyValue("--v-body-scroll-y")),g=i.style.scrollBehavior;i.style.scrollBehavior="auto",i.style.removeProperty("--v-body-scroll-x"),i.style.removeProperty("--v-body-scroll-y"),i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked"),i.scrollLeft=-f,i.scrollTop=-y,i.style.scrollBehavior=g}),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Ht(e,t,n){let o=!1,a=-1,r=-1;function l(i){Mt(()=>{var y,g;const m=performance.now();(g=(y=e.updateLocation).value)==null||g.call(y,i),o=(performance.now()-m)/(1e3/60)>2})}r=(typeof requestIdleCallback>"u"?i=>i():requestIdleCallback)(()=>{n.run(()=>{Fe(e.targetEl.value??e.contentEl.value,i=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{l(i)})})):l(i)})})}),H(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(r),cancelAnimationFrame(a)})}function Fe(e,t){const n=[document,...K(e)];n.forEach(o=>{o.addEventListener("scroll",t,{passive:!0})}),H(()=>{n.forEach(o=>{o.removeEventListener("scroll",t)})})}const It=Symbol.for("vuetify:v-menu"),Vt=G({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...ft()},"VOverlay-activator");function Wt(e,t){let{isActive:n,isTop:o}=t;const a=Le("useActivator"),r=W();let l=!1,i=!1,m=!0;const f=x(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),y=x(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!f.value),{runOpenDelay:g,runCloseDelay:O}=vt(e,s=>{s===(e.openOnHover&&l||f.value&&i)&&!(e.openOnHover&&n.value&&!o.value)&&(n.value!==s&&(m=!0),n.value=s)}),k=W(),c={onClick:s=>{s.stopPropagation(),r.value=s.currentTarget||s.target,n.value||(k.value=[s.clientX,s.clientY]),n.value=!n.value},onMouseenter:s=>{var T;(T=s.sourceCapabilities)!=null&&T.firesTouchEvents||(l=!0,r.value=s.currentTarget||s.target,g())},onMouseleave:s=>{l=!1,O()},onFocus:s=>{Ke(s.target,":focus-visible")!==!1&&(i=!0,s.stopPropagation(),r.value=s.currentTarget||s.target,g())},onBlur:s=>{i=!1,s.stopPropagation(),O()}},u=x(()=>{const s={};return y.value&&(s.onClick=c.onClick),e.openOnHover&&(s.onMouseenter=c.onMouseenter,s.onMouseleave=c.onMouseleave),f.value&&(s.onFocus=c.onFocus,s.onBlur=c.onBlur),s}),A=x(()=>{const s={};if(e.openOnHover&&(s.onMouseenter=()=>{l=!0,g()},s.onMouseleave=()=>{l=!1,O()}),f.value&&(s.onFocusin=()=>{i=!0,g()},s.onFocusout=()=>{i=!1,O()}),e.closeOnContentClick){const T=Ce(It,null);s.onClick=()=>{n.value=!1,T==null||T.closeParents()}}return s}),p=x(()=>{const s={};return e.openOnHover&&(s.onMouseenter=()=>{m&&(l=!0,m=!1,g())},s.onMouseleave=()=>{l=!1,O()}),s});L(o,s=>{s&&(e.openOnHover&&!l&&(!f.value||!i)||f.value&&!i&&(!e.openOnHover||!l))&&(n.value=!1)}),L(n,s=>{s||setTimeout(()=>{k.value=void 0})},{flush:"post"});const E=ye();ue(()=>{E.value&&ce(()=>{r.value=E.el})});const h=ye(),I=x(()=>e.target==="cursor"&&k.value?k.value:h.value?h.el:Re(e.target,a)||r.value),M=x(()=>Array.isArray(I.value)?void 0:I.value);let P;return L(()=>!!e.activator,s=>{s&&j?(P=Pe(),P.run(()=>{zt(e,a,{activatorEl:r,activatorEvents:u})})):P&&P.stop()},{flush:"post",immediate:!0}),H(()=>{P==null||P.stop()}),{activatorEl:r,activatorRef:E,target:I,targetEl:M,targetRef:h,activatorEvents:u,contentEvents:A,scrimEvents:p}}function zt(e,t,n){let{activatorEl:o,activatorEvents:a}=n;L(()=>e.activator,(m,f)=>{if(f&&m!==f){const y=i(f);y&&l(y)}m&&ce(()=>r())},{immediate:!0}),L(()=>e.activatorProps,()=>{r()}),H(()=>{l()});function r(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;m&&St(m,D(a.value,f))}function l(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;m&&xt(m,D(a.value,f))}function i(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const f=Re(m,t);return o.value=(f==null?void 0:f.nodeType)===Node.ELEMENT_NODE?f:void 0,o.value}}function Re(e,t){var o,a;if(!e)return;let n;if(e==="parent"){let r=(a=(o=t==null?void 0:t.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;r!=null&&r.hasAttribute("data-no-activator");)r=r.parentNode;n=r}else typeof e=="string"?n=document.querySelector(e):"$el"in e?n=e.$el:n=e;return n}function Dt(){if(!j)return q(!1);const{ssr:e}=Qe();if(e){const t=q(!1);return Ve(()=>{t.value=!0}),t}else return q(!0)}const jt=G({eager:Boolean},"lazy");function qt(e,t){const n=q(!1),o=x(()=>n.value||e.eager||t.value);L(t,()=>n.value=!0);function a(){e.eager||(n.value=!1)}return{isBooted:n,hasContent:o,onAfterLeave:a}}const Oe=Symbol.for("vuetify:stack"),Y=Ae([]);function $t(e,t,n){const o=Le("useStack"),a=!n,r=Ce(Oe,void 0),l=Ae({activeChildren:new Set});We(Oe,l);const i=q(+t.value);fe(e,()=>{var g;const y=(g=Y.at(-1))==null?void 0:g[1];i.value=y?y+10:+t.value,a&&Y.push([o.uid,i.value]),r==null||r.activeChildren.add(o.uid),H(()=>{if(a){const O=ze(Y).findIndex(k=>k[0]===o.uid);Y.splice(O,1)}r==null||r.activeChildren.delete(o.uid)})});const m=q(!0);a&&ue(()=>{var g;const y=((g=Y.at(-1))==null?void 0:g[0])===o.uid;setTimeout(()=>m.value=y)});const f=x(()=>!l.activeChildren.size);return{globalTop:De(m),localTop:f,stackStyles:x(()=>({zIndex:i.value}))}}function Yt(e){return{teleportTarget:x(()=>{const n=e.value;if(n===!0||!j)return;const o=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function Gt(){return!0}function Ne(e,t,n){if(!e||_e(e,n)===!1)return!1;const o=Be(t);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof n.value=="object"&&n.value.include||(()=>[]))();return a.push(t),!a.some(r=>r==null?void 0:r.contains(e.target))}function _e(e,t){return(typeof t.value=="object"&&t.value.closeConditional||Gt)(e)}function Ut(e,t,n){const o=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&Ne(e,t,n)&&setTimeout(()=>{_e(e,n)&&o&&o(e)},0)}function ke(e,t){const n=Be(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const Xt={mounted(e,t){const n=a=>Ut(a,e,t),o=a=>{e._clickOutside.lastMousedownWasOutside=Ne(a,e,t)};ke(e,a=>{a.addEventListener("click",n,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:o}},unmounted(e,t){e._clickOutside&&(ke(e,n=>{var r;if(!n||!((r=e._clickOutside)!=null&&r[t.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",o,!0),n.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[t.instance.$.uid])}};function Zt(e){const{modelValue:t,color:n,...o}=e;return V(Ze,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&V("div",D({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const Jt=G({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Vt(),...et(),...yt(),...jt(),...At(),...Ft(),...tt(),...wt()},"VOverlay"),sn=nt()({name:"VOverlay",directives:{ClickOutside:Xt},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Jt()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:o,emit:a}=t;const r=ot(e,"modelValue"),l=x({get:()=>r.value,set:w=>{w&&e.disabled||(r.value=w)}}),{teleportTarget:i}=Yt(x(()=>e.attach||e.contained)),{themeClasses:m}=at(e),{rtlClasses:f,isRtl:y}=rt(),{hasContent:g,onAfterLeave:O}=qt(e,l),k=mt(x(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:c,localTop:u,stackStyles:A}=$t(l,je(e,"zIndex"),e._disableGlobalStack),{activatorEl:p,activatorRef:E,target:h,targetEl:I,targetRef:M,activatorEvents:P,contentEvents:s,scrimEvents:T}=Wt(e,{isActive:l,isTop:u}),{dimensionStyles:ee}=gt(e),te=Dt(),{scopeId:S}=dt();L(()=>e.disabled,w=>{w&&(l.value=!1)});const b=W(),v=W(),d=W(),{contentStyles:F,updateLocation:B}=pt(e,{isRtl:y,contentEl:d,target:h,isActive:l});Rt(e,{root:b,contentEl:d,targetEl:I,isActive:l,updateLocation:B});function $(w){a("click:outside",w),e.persistent?X():l.value=!1}function C(w){return l.value&&c.value&&(!e.scrim||w.target===v.value)}j&&L(l,w=>{w?window.addEventListener("keydown",R):window.removeEventListener("keydown",R)},{immediate:!0}),qe(()=>{j&&window.removeEventListener("keydown",R)});function R(w){var _,de;w.key==="Escape"&&c.value&&(e.persistent?X():(l.value=!1,(_=d.value)!=null&&_.contains(document.activeElement)&&((de=p.value)==null||de.focus())))}const U=ht();fe(()=>e.closeOnBack,()=>{bt(U,w=>{c.value&&l.value?(w(!1),e.persistent?X():l.value=!1):w()})});const z=W();L(()=>l.value&&(e.absolute||e.contained)&&i.value==null,w=>{if(w){const _=Ot(b.value);_&&_!==document.scrollingElement&&(z.value=_.scrollTop)}});function X(){e.noClickAnimation||d.value&&ct(d.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ut})}function He(){a("afterEnter")}function Ie(){O(),a("afterLeave")}return it(()=>{var w;return V(Xe,null,[(w=n.activator)==null?void 0:w.call(n,{isActive:l.value,targetRef:M,props:D({ref:E},P.value,e.activatorProps)}),te.value&&g.value&&V($e,{disabled:!i.value,to:i.value},{default:()=>[V("div",D({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":l.value,"v-overlay--contained":e.contained},m.value,f.value,e.class],style:[A.value,{"--v-overlay-opacity":e.opacity,top:N(z.value)},e.style],ref:b},S,o),[V(Zt,D({color:k,modelValue:l.value&&!!e.scrim,ref:v},T.value),null),V(Et,{appear:!0,persisted:!0,transition:e.transition,target:h.value,onAfterEnter:He,onAfterLeave:Ie},{default:()=>{var _;return[Ye(V("div",D({ref:d,class:["v-overlay__content",e.contentClass],style:[ee.value,F.value]},s.value,e.contentProps),[(_=n.default)==null?void 0:_.call(n,{isActive:l})]),[[Ge,l.value],[Ue("click-outside"),{handler:$,closeConditional:C,include:()=>[p.value]}]])]}})])]})])}),{activatorEl:p,scrimEl:v,target:h,animateClick:X,contentEl:d,globalTop:c,localTop:u,updateLocation:B}}});export{It as V,sn as a,Jt as m};