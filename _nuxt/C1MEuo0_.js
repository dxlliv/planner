import{a as _,w as L,J as D,j as x,n as ce,m as ue,e as Pe,i as Ce,z as j,s as z,o as De,r as Ae,y as Ve,H as Ie,O as We,t as je,N as qe,l as I,aj as ze,ag as $e,ai as Ye,ah as Ge,F as Je,P as Ue}from"./CBwktElb.js";import{ak as pe,al as Te,s as $,ac as q,am as fe,J as Xe,G as N,an as me,ao as Ze,a8 as Le,ap as ye,aq as Ke,ar as Qe,t as et,C as tt,v as nt,Z as ot,D as at,R as rt,y as it}from"./B6w2PrMr.js";import{g as lt,B as ne,a as ge,n as st,b as ct,s as ut}from"./D3j0TLhE.js";import{p as he,f as oe,a as ae,b as be,g as we}from"./B4p2TDL0.js";import{a as ft}from"./D6yCXfUK.js";import{m as vt,u as dt}from"./Bt0jqUgS.js";import{a as mt,b as yt}from"./BBNKp1Ql.js";import{u as gt}from"./DsWwqOVK.js";import{m as ht,M as bt}from"./DFKb_UKW.js";const X=new WeakMap;function wt(e,n){Object.keys(n).forEach(t=>{if(pe(t)){const o=Te(t),a=X.get(e);if(n[t]==null)a==null||a.forEach(r=>{const[l,i]=r;l===o&&(e.removeEventListener(o,i),a.delete(r))});else if(!a||![...a].some(r=>r[0]===o&&r[1]===n[t])){e.addEventListener(o,n[t]);const r=a||new Set;r.add([o,n[t]]),X.has(e)||X.set(e,r)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function Et(e,n){Object.keys(n).forEach(t=>{if(pe(t)){const o=Te(t),a=X.get(e);a==null||a.forEach(r=>{const[l,i]=r;l===o&&(e.removeEventListener(o,i),a.delete(r))})}else e.removeAttribute(t)})}function Be(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function St(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?xt(e):ve(e))return e;e=e.parentElement}return document.scrollingElement}function K(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(ve(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function ve(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function xt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function Ot(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function re(e,n){return{x:e.x+n.x,y:e.y+n.y}}function kt(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Ee(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,r=t==="top"?0:t==="bottom"?n.height:t;return re({x:a,y:r},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,r=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return re({x:a,y:r},n)}return re({x:n.width/2,y:n.height/2},n)}const Me={static:At,connected:Tt},Pt=$({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Me},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Ct(e,n){const t=_({}),o=_();q&&fe(()=>!!(n.isActive.value&&e.locationStrategy),r=>{var l,i;L(()=>e.locationStrategy,r),D(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(l=e.locationStrategy(n,e,t))==null?void 0:l.updateLocation:o.value=(i=Me[e.locationStrategy](n,e,t))==null?void 0:i.updateLocation});function a(r){var l;(l=o.value)==null||l.call(o,r)}return{contentStyles:t,updateLocation:o}}function At(){}function pt(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=st(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Tt(e,n,t){(Array.isArray(e.target.value)||Ot(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:r}=Xe(()=>{const c=he(n.location,e.isRtl.value),u=n.origin==="overlap"?c:n.origin==="auto"?oe(c):he(n.origin,e.isRtl.value);return c.side===u.side&&c.align===ae(u).align?{preferredAnchor:be(c),preferredOrigin:be(u)}:{preferredAnchor:c,preferredOrigin:u}}),[l,i,m,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(c=>x(()=>{const u=parseFloat(n[c]);return isNaN(u)?1/0:u})),y=x(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const c=n.offset.split(" ").map(parseFloat);return c.length<2&&c.push(0),c}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let g=!1;const O=new ResizeObserver(()=>{g&&k()});L([e.target,e.contentEl],(c,u)=>{let[A,p]=c,[E,h]=u;E&&!Array.isArray(E)&&O.unobserve(E),A&&!Array.isArray(A)&&O.observe(A),h&&O.unobserve(h),p&&O.observe(p)},{immediate:!0}),D(()=>{O.disconnect()});function k(){if(g=!1,requestAnimationFrame(()=>g=!0),!e.target.value||!e.contentEl.value)return;const c=lt(e.target.value),u=pt(e.contentEl.value,e.isRtl.value),A=K(e.contentEl.value),p=12;A.length||(A.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(u.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),u.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const E=A.reduce((S,b)=>{const v=b.getBoundingClientRect(),d=new ne({x:b===document.documentElement?0:v.x,y:b===document.documentElement?0:v.y,width:b.clientWidth,height:b.clientHeight});return S?new ne({x:Math.max(S.left,d.left),y:Math.max(S.top,d.top),width:Math.min(S.right,d.right)-Math.max(S.left,d.left),height:Math.min(S.bottom,d.bottom)-Math.max(S.top,d.top)}):d},void 0);E.x+=p,E.y+=p,E.width-=p*2,E.height-=p*2;let h={anchor:a.value,origin:r.value};function V(S){const b=new ne(u),v=Ee(S.anchor,c),d=Ee(S.origin,b);let{x:F,y:B}=kt(v,d);switch(S.anchor.side){case"top":B-=y.value[0];break;case"bottom":B+=y.value[0];break;case"left":F-=y.value[0];break;case"right":F+=y.value[0];break}switch(S.anchor.align){case"top":B-=y.value[1];break;case"bottom":B+=y.value[1];break;case"left":F-=y.value[1];break;case"right":F+=y.value[1];break}return b.x+=F,b.y+=B,b.width=Math.min(b.width,m.value),b.height=Math.min(b.height,f.value),{overflows:ge(b,E),x:F,y:B}}let M=0,P=0;const s={x:0,y:0},T={x:!1,y:!1};let ee=-1;for(;!(ee++>10);){const{x:S,y:b,overflows:v}=V(h);M+=S,P+=b,u.x+=S,u.y+=b;{const d=we(h.anchor),F=v.x.before||v.x.after,B=v.y.before||v.y.after;let Y=!1;if(["x","y"].forEach(C=>{if(C==="x"&&F&&!T.x||C==="y"&&B&&!T.y){const R={anchor:{...h.anchor},origin:{...h.origin}},J=C==="x"?d==="y"?ae:oe:d==="y"?oe:ae;R.anchor=J(R.anchor),R.origin=J(R.origin);const{overflows:W}=V(R);(W[C].before<=v[C].before&&W[C].after<=v[C].after||W[C].before+W[C].after<(v[C].before+v[C].after)/2)&&(h=R,Y=T[C]=!0)}}),Y)continue}v.x.before&&(M+=v.x.before,u.x+=v.x.before),v.x.after&&(M-=v.x.after,u.x-=v.x.after),v.y.before&&(P+=v.y.before,u.y+=v.y.before),v.y.after&&(P-=v.y.after,u.y-=v.y.after);{const d=ge(u,E);s.x=E.width-d.x.before-d.x.after,s.y=E.height-d.y.before-d.y.after,M+=d.x.before,u.x+=d.x.before,P+=d.y.before,u.y+=d.y.before}break}const te=we(h.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${h.anchor.side} ${h.anchor.align}`,transformOrigin:`${h.origin.side} ${h.origin.align}`,top:N(ie(P)),left:e.isRtl.value?void 0:N(ie(M)),right:e.isRtl.value?N(ie(-M)):void 0,minWidth:N(te==="y"?Math.min(l.value,c.width):l.value),maxWidth:N(Se(me(s.x,l.value===1/0?0:l.value,m.value))),maxHeight:N(Se(me(s.y,i.value===1/0?0:i.value,f.value)))}),{available:s,contentBox:u}}return L(()=>[a.value,r.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>k()),ce(()=>{const c=k();if(!c)return;const{available:u,contentBox:A}=c;A.height>u.y&&requestAnimationFrame(()=>{k(),requestAnimationFrame(()=>{k()})})}),{updateLocation:k}}function ie(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Se(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let le=!0;const Q=[];function Lt(e){!le||Q.length?(Q.push(e),se()):(le=!1,e(),se())}let xe=-1;function se(){cancelAnimationFrame(xe),xe=requestAnimationFrame(()=>{const e=Q.shift();e&&e(),Q.length?se():le=!0})}const Z={none:null,close:Ft,block:Rt,reposition:Nt},Bt=$({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in Z}},"VOverlay-scroll-strategies");function Mt(e,n){if(!q)return;let t;ue(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Pe(),await new Promise(o=>setTimeout(o)),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=Z[e.scrollStrategy])==null||o.call(Z,n,e,t)}))}),D(()=>{t==null||t.stop()})}function Ft(e){function n(t){e.isActive.value=!1}Fe(e.targetEl.value??e.contentEl.value,n)}function Rt(e,n){var l;const t=(l=e.root.value)==null?void 0:l.offsetParent,o=[...new Set([...K(e.targetEl.value,n.contained?t:void 0),...K(e.contentEl.value,n.contained?t:void 0)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,r=(i=>ve(i)&&i)(t||document.documentElement);r&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((i,m)=>{i.style.setProperty("--v-body-scroll-x",N(-i.scrollLeft)),i.style.setProperty("--v-body-scroll-y",N(-i.scrollTop)),i!==document.documentElement&&i.style.setProperty("--v-scrollbar-offset",N(a)),i.classList.add("v-overlay-scroll-blocked")}),D(()=>{o.forEach((i,m)=>{const f=parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),y=parseFloat(i.style.getPropertyValue("--v-body-scroll-y")),g=i.style.scrollBehavior;i.style.scrollBehavior="auto",i.style.removeProperty("--v-body-scroll-x"),i.style.removeProperty("--v-body-scroll-y"),i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked"),i.scrollLeft=-f,i.scrollTop=-y,i.style.scrollBehavior=g}),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Nt(e,n,t){let o=!1,a=-1,r=-1;function l(i){Lt(()=>{var y,g;const m=performance.now();(g=(y=e.updateLocation).value)==null||g.call(y,i),o=(performance.now()-m)/(1e3/60)>2})}r=(typeof requestIdleCallback>"u"?i=>i():requestIdleCallback)(()=>{t.run(()=>{Fe(e.targetEl.value??e.contentEl.value,i=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{l(i)})})):l(i)})})}),D(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(r),cancelAnimationFrame(a)})}function Fe(e,n){const t=[document,...K(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),D(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const _t=Symbol.for("vuetify:v-menu"),Ht=$({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Dt(e,n){let t=()=>{};function o(l){t==null||t();const i=Number(l?e.openDelay:e.closeDelay);return new Promise(m=>{t=Ze(i,()=>{n==null||n(l),m(l)})})}function a(){return o(!0)}function r(){return o(!1)}return{clearDelay:t,runOpenDelay:a,runCloseDelay:r}}const Vt=$({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Ht()},"VOverlay-activator");function It(e,n){let{isActive:t,isTop:o}=n;const a=Le("useActivator"),r=_();let l=!1,i=!1,m=!0;const f=x(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),y=x(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!f.value),{runOpenDelay:g,runCloseDelay:O}=Dt(e,s=>{s===(e.openOnHover&&l||f.value&&i)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==s&&(m=!0),t.value=s)}),k=_(),c={onClick:s=>{s.stopPropagation(),r.value=s.currentTarget||s.target,t.value||(k.value=[s.clientX,s.clientY]),t.value=!t.value},onMouseenter:s=>{var T;(T=s.sourceCapabilities)!=null&&T.firesTouchEvents||(l=!0,r.value=s.currentTarget||s.target,g())},onMouseleave:s=>{l=!1,O()},onFocus:s=>{Ke(s.target,":focus-visible")!==!1&&(i=!0,s.stopPropagation(),r.value=s.currentTarget||s.target,g())},onBlur:s=>{i=!1,s.stopPropagation(),O()}},u=x(()=>{const s={};return y.value&&(s.onClick=c.onClick),e.openOnHover&&(s.onMouseenter=c.onMouseenter,s.onMouseleave=c.onMouseleave),f.value&&(s.onFocus=c.onFocus,s.onBlur=c.onBlur),s}),A=x(()=>{const s={};if(e.openOnHover&&(s.onMouseenter=()=>{l=!0,g()},s.onMouseleave=()=>{l=!1,O()}),f.value&&(s.onFocusin=()=>{i=!0,g()},s.onFocusout=()=>{i=!1,O()}),e.closeOnContentClick){const T=Ce(_t,null);s.onClick=()=>{t.value=!1,T==null||T.closeParents()}}return s}),p=x(()=>{const s={};return e.openOnHover&&(s.onMouseenter=()=>{m&&(l=!0,m=!1,g())},s.onMouseleave=()=>{l=!1,O()}),s});L(o,s=>{s&&(e.openOnHover&&!l&&(!f.value||!i)||f.value&&!i&&(!e.openOnHover||!l))&&(t.value=!1)}),L(t,s=>{s||setTimeout(()=>{k.value=void 0})},{flush:"post"});const E=_();ue(()=>{E.value&&ce(()=>{r.value=ye(E.value)})});const h=_(),V=x(()=>e.target==="cursor"&&k.value?k.value:h.value?ye(h.value):Re(e.target,a)||r.value),M=x(()=>Array.isArray(V.value)?void 0:V.value);let P;return L(()=>!!e.activator,s=>{s&&q?(P=Pe(),P.run(()=>{Wt(e,a,{activatorEl:r,activatorEvents:u})})):P&&P.stop()},{flush:"post",immediate:!0}),D(()=>{P==null||P.stop()}),{activatorEl:r,activatorRef:E,target:V,targetEl:M,targetRef:h,activatorEvents:u,contentEvents:A,scrimEvents:p}}function Wt(e,n,t){let{activatorEl:o,activatorEvents:a}=t;L(()=>e.activator,(m,f)=>{if(f&&m!==f){const y=i(f);y&&l(y)}m&&ce(()=>r())},{immediate:!0}),L(()=>e.activatorProps,()=>{r()}),D(()=>{l()});function r(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;m&&wt(m,j(a.value,f))}function l(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;m&&Et(m,j(a.value,f))}function i(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const f=Re(m,n);return o.value=(f==null?void 0:f.nodeType)===Node.ELEMENT_NODE?f:void 0,o.value}}function Re(e,n){var o,a;if(!e)return;let t;if(e==="parent"){let r=(a=(o=n==null?void 0:n.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;r!=null&&r.hasAttribute("data-no-activator");)r=r.parentNode;t=r}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function jt(){if(!q)return z(!1);const{ssr:e}=Qe();if(e){const n=z(!1);return De(()=>{n.value=!0}),n}else return z(!0)}const qt=$({eager:Boolean},"lazy");function zt(e,n){const t=z(!1),o=x(()=>t.value||e.eager||n.value);L(n,()=>t.value=!0);function a(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:o,onAfterLeave:a}}const Oe=Symbol.for("vuetify:stack"),G=Ae([]);function $t(e,n,t){const o=Le("useStack"),a=!t,r=Ce(Oe,void 0),l=Ae({activeChildren:new Set});Ve(Oe,l);const i=z(+n.value);fe(e,()=>{var g;const y=(g=G.at(-1))==null?void 0:g[1];i.value=y?y+10:+n.value,a&&G.push([o.uid,i.value]),r==null||r.activeChildren.add(o.uid),D(()=>{if(a){const O=Ie(G).findIndex(k=>k[0]===o.uid);G.splice(O,1)}r==null||r.activeChildren.delete(o.uid)})});const m=z(!0);a&&ue(()=>{var g;const y=((g=G.at(-1))==null?void 0:g[0])===o.uid;setTimeout(()=>m.value=y)});const f=x(()=>!l.activeChildren.size);return{globalTop:We(m),localTop:f,stackStyles:x(()=>({zIndex:i.value}))}}function Yt(e){return{teleportTarget:x(()=>{const t=e.value;if(t===!0||!q)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function Gt(){return!0}function Ne(e,n,t){if(!e||_e(e,t)===!1)return!1;const o=Be(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(r=>r==null?void 0:r.contains(e.target))}function _e(e,n){return(typeof n.value=="object"&&n.value.closeConditional||Gt)(e)}function Jt(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&Ne(e,n,t)&&setTimeout(()=>{_e(e,t)&&o&&o(e)},0)}function ke(e,n){const t=Be(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const Ut={mounted(e,n){const t=a=>Jt(a,e,n),o=a=>{e._clickOutside.lastMousedownWasOutside=Ne(a,e,n)};ke(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},unmounted(e,n){e._clickOutside&&(ke(e,t=>{var r;if(!t||!((r=e._clickOutside)!=null&&r[n.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[n.instance.$.uid])}};function Xt(e){const{modelValue:n,color:t,...o}=e;return I(Ue,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&I("div",j({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const Zt=$({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Vt(),...et(),...vt(),...qt(),...Pt(),...Bt(),...tt(),...ht()},"VOverlay"),sn=nt()({name:"VOverlay",directives:{ClickOutside:Ut},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Zt()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const r=ot(e,"modelValue"),l=x({get:()=>r.value,set:w=>{w&&e.disabled||(r.value=w)}}),{teleportTarget:i}=Yt(x(()=>e.attach||e.contained)),{themeClasses:m}=at(e),{rtlClasses:f,isRtl:y}=rt(),{hasContent:g,onAfterLeave:O}=zt(e,l),k=ft(x(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:c,localTop:u,stackStyles:A}=$t(l,je(e,"zIndex"),e._disableGlobalStack),{activatorEl:p,activatorRef:E,target:h,targetEl:V,targetRef:M,activatorEvents:P,contentEvents:s,scrimEvents:T}=It(e,{isActive:l,isTop:u}),{dimensionStyles:ee}=dt(e),te=jt(),{scopeId:S}=gt();L(()=>e.disabled,w=>{w&&(l.value=!1)});const b=_(),v=_(),d=_(),{contentStyles:F,updateLocation:B}=Ct(e,{isRtl:y,contentEl:d,target:h,isActive:l});Mt(e,{root:b,contentEl:d,targetEl:V,isActive:l,updateLocation:B});function Y(w){a("click:outside",w),e.persistent?U():l.value=!1}function C(w){return l.value&&c.value&&(!e.scrim||w.target===v.value)}q&&L(l,w=>{w?window.addEventListener("keydown",R):window.removeEventListener("keydown",R)},{immediate:!0}),qe(()=>{q&&window.removeEventListener("keydown",R)});function R(w){var H,de;w.key==="Escape"&&c.value&&(e.persistent?U():(l.value=!1,(H=d.value)!=null&&H.contains(document.activeElement)&&((de=p.value)==null||de.focus())))}const J=mt();fe(()=>e.closeOnBack,()=>{yt(J,w=>{c.value&&l.value?(w(!1),e.persistent?U():l.value=!1):w()})});const W=_();L(()=>l.value&&(e.absolute||e.contained)&&i.value==null,w=>{if(w){const H=St(b.value);H&&H!==document.scrollingElement&&(W.value=H.scrollTop)}});function U(){e.noClickAnimation||d.value&&ct(d.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ut})}function He(){O(),a("afterLeave")}return it(()=>{var w;return I(Je,null,[(w=t.activator)==null?void 0:w.call(t,{isActive:l.value,props:j({ref:E,targetRef:M},P.value,e.activatorProps)}),te.value&&g.value&&I(ze,{disabled:!i.value,to:i.value},{default:()=>[I("div",j({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":l.value,"v-overlay--contained":e.contained},m.value,f.value,e.class],style:[A.value,{"--v-overlay-opacity":e.opacity,top:N(W.value)},e.style],ref:b},S,o),[I(Xt,j({color:k,modelValue:l.value&&!!e.scrim,ref:v},T.value),null),I(bt,{appear:!0,persisted:!0,transition:e.transition,target:h.value,onAfterLeave:He},{default:()=>{var H;return[$e(I("div",j({ref:d,class:["v-overlay__content",e.contentClass],style:[ee.value,F.value]},s.value,e.contentProps),[(H=t.default)==null?void 0:H.call(t,{isActive:l})]),[[Ye,l.value],[Ge("click-outside"),{handler:Y,closeConditional:C,include:()=>[p.value]}]])]}})])]})])}),{activatorEl:p,scrimEl:v,target:h,animateClick:U,contentEl:d,globalTop:c,localTop:u,updateLocation:B}}});export{_t as V,sn as a,St as g,Zt as m};
