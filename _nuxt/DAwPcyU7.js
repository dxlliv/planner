import{aA as B,B as w,ar as ne,n as J,N as R,s as K,bx as oe,bc as L,L as le,aX as ie,S as re,T as ue,by as se,bn as ce,U as ve,a8 as de,W as me,aE as fe,a9 as he,az as U,ab as q,bg as ge,ah as ye,r as we,bo as be,aa as pe,Y as Se,b as k,am as Z,aU as ke,F as Ee,as as Te,_ as _e,o as xe,f as Me,w as Y,$ as N}from"./BYLsYk1G.js";import{V as $}from"./FT01nU7u.js";import{m as Pe,u as Be}from"./CDYu0uB8.js";import{m as Ve,u as Ce,a as De}from"./B4VdROZG.js";import{m as Re,u as He}from"./DMlAGobw.js";import{m as Ie,u as Ye}from"./DsrZhzQB.js";import{a as Le}from"./BGQxq7ei.js";import{u as Ne}from"./CY7zOgD5.js";import{t as $e}from"./CtGgWQJi.js";import{V as We}from"./BFySSyVu.js";import{V as Oe}from"./CPha9Gh8.js";import"./BLetekya.js";import"./SnztWVyS.js";import"./BQNVVJac.js";import"./xnwTHuJG.js";import"./D9YIxWGL.js";import"./5t-nmYIh.js";import"./D9Wnntnm.js";import"./abAnzQ94.js";import"./D_ZrrTCF.js";import"./NZ_0M_So.js";import"./BCUWs55e.js";function Xe(e){let{rootEl:s,isSticky:r,layoutItemStyles:T}=e;const t=B(!1),u=B(0),a=w(()=>{const b=typeof t.value=="boolean"?"top":t.value;return[r.value?{top:"auto",bottom:"auto",height:void 0}:void 0,t.value?{[b]:ne(u.value)}:{top:T.value.top}]});J(()=>{R(r,b=>{b?window.addEventListener("scroll",E,{passive:!0}):window.removeEventListener("scroll",E)},{immediate:!0})}),K(()=>{window.removeEventListener("scroll",E)});let g=0;function E(){const b=g>window.scrollY?"up":"down",v=s.value.getBoundingClientRect(),d=parseFloat(T.value.top??0),c=window.scrollY-Math.max(0,u.value-d),f=v.height+Math.max(u.value,d)-window.scrollY-window.innerHeight,y=parseFloat(getComputedStyle(s.value).getPropertyValue("--v-body-scroll-y"))||0;v.height<window.innerHeight-d?(t.value="top",u.value=d):b==="up"&&t.value==="bottom"||b==="down"&&t.value==="top"?(u.value=window.scrollY+v.top-y,t.value=!0):b==="down"&&f<=0?(u.value=0,t.value="bottom"):b==="up"&&c<=0&&(y?t.value!=="top"&&(u.value=-c+y+d,t.value="top"):(u.value=v.top+c,t.value="top")),g=window.scrollY}return{isStuck:t,stickyStyles:a}}const ze=100,Ae=20;function j(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function G(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let s=0;for(let r=e.length-1;r>0;r--){if(e[r].t===e[r-1].t)continue;const T=j(s),t=(e[r].d-e[r-1].d)/(e[r].t-e[r-1].t);s+=(t-T)*Math.abs(t),r===e.length-1&&(s*=.5)}return j(s)*1e3}function Fe(){const e={};function s(t){Array.from(t.changedTouches).forEach(u=>{(e[u.identifier]??(e[u.identifier]=new oe(Ae))).push([t.timeStamp,u])})}function r(t){Array.from(t.changedTouches).forEach(u=>{delete e[u.identifier]})}function T(t){var b;const u=(b=e[t])==null?void 0:b.values().reverse();if(!u)throw new Error(`No samples for touch id ${t}`);const a=u[0],g=[],E=[];for(const v of u){if(a[0]-v[0]>ze)break;g.push({t:v[0],d:v[1].clientX}),E.push({t:v[0],d:v[1].clientY})}return{x:G(g),y:G(E),get direction(){const{x:v,y:d}=this,[c,f]=[Math.abs(v),Math.abs(d)];return c>f&&v>=0?"right":c>f&&v<=0?"left":f>c&&d>=0?"down":f>c&&d<=0?"up":Ue()}}}return{addMovement:s,endTouch:r,getVelocity:T}}function Ue(){throw new Error}function qe(e){let{el:s,isActive:r,isTemporary:T,width:t,touchless:u,position:a}=e;J(()=>{window.addEventListener("touchstart",x,{passive:!0}),window.addEventListener("touchmove",_,{passive:!1}),window.addEventListener("touchend",H,{passive:!0})}),K(()=>{window.removeEventListener("touchstart",x),window.removeEventListener("touchmove",_),window.removeEventListener("touchend",H)});const g=w(()=>["left","right"].includes(a.value)),{addMovement:E,endTouch:b,getVelocity:v}=Fe();let d=!1;const c=B(!1),f=B(0),y=B(0);let S;function V(n,o){return(a.value==="left"?n:a.value==="right"?document.documentElement.clientWidth-n:a.value==="top"?n:a.value==="bottom"?document.documentElement.clientHeight-n:P())-(o?t.value:0)}function C(n){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const l=a.value==="left"?(n-y.value)/t.value:a.value==="right"?(document.documentElement.clientWidth-n-y.value)/t.value:a.value==="top"?(n-y.value)/t.value:a.value==="bottom"?(document.documentElement.clientHeight-n-y.value)/t.value:P();return o?Math.max(0,Math.min(1,l)):l}function x(n){if(u.value)return;const o=n.changedTouches[0].clientX,l=n.changedTouches[0].clientY,i=25,h=a.value==="left"?o<i:a.value==="right"?o>document.documentElement.clientWidth-i:a.value==="top"?l<i:a.value==="bottom"?l>document.documentElement.clientHeight-i:P(),m=r.value&&(a.value==="left"?o<t.value:a.value==="right"?o>document.documentElement.clientWidth-t.value:a.value==="top"?l<t.value:a.value==="bottom"?l>document.documentElement.clientHeight-t.value:P());(h||m||r.value&&T.value)&&(S=[o,l],y.value=V(g.value?o:l,r.value),f.value=C(g.value?o:l),d=y.value>-20&&y.value<80,b(n),E(n))}function _(n){const o=n.changedTouches[0].clientX,l=n.changedTouches[0].clientY;if(d){if(!n.cancelable){d=!1;return}const h=Math.abs(o-S[0]),m=Math.abs(l-S[1]);(g.value?h>m&&h>3:m>h&&m>3)?(c.value=!0,d=!1):(g.value?m:h)>3&&(d=!1)}if(!c.value)return;n.preventDefault(),E(n);const i=C(g.value?o:l,!1);f.value=Math.max(0,Math.min(1,i)),i>1?y.value=V(g.value?o:l,!0):i<0&&(y.value=V(g.value?o:l,!1))}function H(n){if(d=!1,!c.value)return;E(n),c.value=!1;const o=v(n.changedTouches[0].identifier),l=Math.abs(o.x),i=Math.abs(o.y);(g.value?l>i&&l>400:i>l&&i>3)?r.value=o.direction===({left:"right",right:"left",top:"down",bottom:"up"}[a.value]||P()):r.value=f.value>.5}const D=w(()=>c.value?{transform:a.value==="left"?`translateX(calc(-100% + ${f.value*t.value}px))`:a.value==="right"?`translateX(calc(100% - ${f.value*t.value}px))`:a.value==="top"?`translateY(calc(-100% + ${f.value*t.value}px))`:a.value==="bottom"?`translateY(calc(100% - ${f.value*t.value}px))`:P(),transition:"none"}:void 0);return L(c,()=>{var l,i;const n=((l=s.value)==null?void 0:l.style.transform)??null,o=((i=s.value)==null?void 0:i.style.transition)??null;le(()=>{var h,m,M,I;(m=s.value)==null||m.style.setProperty("transform",((h=D.value)==null?void 0:h.transform)||"none"),(I=s.value)==null||I.style.setProperty("transition",((M=D.value)==null?void 0:M.transition)||null)}),ie(()=>{var h,m;(h=s.value)==null||h.style.setProperty("transform",n),(m=s.value)==null||m.style.setProperty("transition",o)})}),{isDragging:c,dragProgress:f,dragStyles:D}}function P(){throw new Error}const Ze=["start","end","left","right","top","bottom"],je=re({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,persistent:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Ze.includes(e)},sticky:Boolean,...Pe(),...ue(),...Ve(),...se({mobile:null}),...Re(),...ce(),...Ie(),...ve({tag:"nav"}),...de()},"VNavigationDrawer"),Ge=me()({name:"VNavigationDrawer",props:je(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,s){let{attrs:r,emit:T,slots:t}=s;const{isRtl:u}=fe(),{themeClasses:a}=he(e),{borderClasses:g}=Be(e),{backgroundColorClasses:E,backgroundColorStyles:b}=U(q(e,"color")),{elevationClasses:v}=He(e),{displayClasses:d,mobile:c}=ge(e),{roundedClasses:f}=Ye(e),y=Le(),S=ye(e,"modelValue",null,p=>!!p),{ssrBootStyles:V}=Ne(),{scopeId:C}=Ce(),x=we(),_=B(!1),{runOpenDelay:H,runCloseDelay:D}=De(e,p=>{_.value=p}),n=w(()=>e.rail&&e.expandOnHover&&_.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),o=w(()=>$e(e.location,u.value)),l=w(()=>e.persistent),i=w(()=>!e.permanent&&(c.value||e.temporary)),h=w(()=>e.sticky&&!i.value&&o.value!=="bottom");L(()=>e.expandOnHover&&e.rail!=null,()=>{R(_,p=>T("update:rail",!p))}),L(()=>!e.disableResizeWatcher,()=>{R(i,p=>!e.permanent&&Te(()=>S.value=!p))}),L(()=>!e.disableRouteWatcher&&!!y,()=>{R(y.currentRoute,()=>i.value&&(S.value=!1))}),R(()=>e.permanent,p=>{p&&(S.value=!0)}),e.modelValue==null&&!i.value&&(S.value=e.permanent||!c.value);const{isDragging:m,dragProgress:M}=qe({el:x,isActive:S,isTemporary:i,width:n,touchless:q(e,"touchless"),position:o}),I=w(()=>{const p=i.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):n.value;return m.value?p*M.value:p}),Q=w(()=>["top","bottom"].includes(e.location)?0:n.value),{layoutItemStyles:W,layoutItemScrimStyles:ee}=be({id:e.name,order:w(()=>parseInt(e.order,10)),position:o,layoutSize:I,elementSize:Q,active:w(()=>S.value||m.value),disableTransitions:w(()=>m.value),absolute:w(()=>e.absolute||h.value&&typeof O.value!="string")}),{isStuck:O,stickyStyles:te}=Xe({rootEl:x,isSticky:h,layoutItemStyles:W}),X=U(w(()=>typeof e.scrim=="string"?e.scrim:null)),ae=w(()=>({...m.value?{opacity:M.value*.2,transition:"none"}:void 0,...ee.value}));return pe({VList:{bgColor:"transparent"}}),Se(()=>{const p=t.image||e.image;return k(Ee,null,[k(e.tag,Z({ref:x,onMouseenter:H,onMouseleave:D,class:["v-navigation-drawer",`v-navigation-drawer--${o.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":_.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":i.value,"v-navigation-drawer--persistent":l.value,"v-navigation-drawer--active":S.value,"v-navigation-drawer--sticky":h.value},a.value,E.value,g.value,d.value,v.value,f.value,e.class],style:[b.value,W.value,V.value,te.value,e.style,["top","bottom"].includes(o.value)?{height:"auto"}:{}]},C,r),{default:()=>{var z,A,F;return[p&&k("div",{key:"image",class:"v-navigation-drawer__img"},[t.image?k(Oe,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:e.image}}},t.image):k(We,{key:"image-img",alt:"",cover:!0,height:"inherit",src:e.image},null)]),t.prepend&&k("div",{class:"v-navigation-drawer__prepend"},[(z=t.prepend)==null?void 0:z.call(t)]),k("div",{class:"v-navigation-drawer__content"},[(A=t.default)==null?void 0:A.call(t)]),t.append&&k("div",{class:"v-navigation-drawer__append"},[(F=t.append)==null?void 0:F.call(t)])]}}),k(ke,{name:"fade-transition"},{default:()=>[i.value&&(m.value||S.value)&&!!e.scrim&&k("div",Z({class:["v-navigation-drawer__scrim",X.backgroundColorClasses.value],style:[ae.value,X.backgroundColorStyles.value],onClick:()=>{l.value||(S.value=!1)}},C),null)]})])}),{isStuck:O}}}),Je={};function Ke(e,s){return xe(),Me(Ge,{class:"dx-navigation-drawer",permanent:e.$vuetify.display.smAndUp,rail:e.$vuetify.display.mdAndDown,width:300,"rail-width":98},{default:Y(()=>[k($,{density:"compact",nav:"",class:"dx-navigation-drawer__header"},{default:Y(()=>[N(e.$slots,"header",{},void 0,!0)]),_:3}),k($,{density:"compact",nav:""},{default:Y(()=>[N(e.$slots,"default",{},void 0,!0)]),_:3}),k($,{density:"compact",nav:"",class:"dx-navigation-drawer__actions"},{default:Y(()=>[N(e.$slots,"actions",{},void 0,!0)]),_:3})]),_:3},8,["permanent","rail"])}const St=_e(Je,[["render",Ke],["__scopeId","data-v-65e5afa0"]]);export{St as default};