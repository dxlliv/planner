import{af as L,aA as M,ae as B,b5 as y,ak as X,r as A,S as R,ah as _,B as v,s as Z,ac as Ie,ab as $,ad as Ce,b6 as ee,T as te,U as ae,W as ne,Y as le,b as m,at as z,ay as W,a8 as Oe,N as Me,a9 as Le,b7 as Be,au as Ne,b8 as je,F as Y,V as q,am as _e}from"./Cirpr_rb.js";import{c as De}from"./CabCFWR6.js";import{m as Re,u as Te}from"./Bi7VbEN7.js";import{m as Ee,u as Fe}from"./dSc3CDW6.js";import{m as Ge,u as xe}from"./ByJVORdI.js";import{m as Ue,u as He}from"./D3_05vs_.js";import{m as Ke,u as $e}from"./CTUMSMpw.js";import{m as ze,u as We}from"./C7m_hONE.js";import{m as Ye,u as qe,g as Je}from"./_oNXTPOZ.js";import{R as Qe}from"./CgnZuRDB.js";import{V as J}from"./CudEcz0c.js";import{V as Q}from"./CgYo3cvc.js";const D=Symbol.for("vuetify:list");function At(){const e=L(D,{hasPrepend:M(!1),updateHasPrepend:()=>null}),r={hasPrepend:M(!1),updateHasPrepend:l=>{l&&(r.hasPrepend.value=l)}};return B(D,r),e}function Xe(){return L(D,null)}const T=e=>{const r={activate:l=>{let{id:a,value:n,activated:t}=l;return a=y(a),e&&!n&&t.size===1&&t.has(a)||(n?t.add(a):t.delete(a)),t},in:(l,a,n)=>{let t=new Set;if(l!=null)for(const s of X(l))t=r.activate({id:s,value:!0,activated:new Set(t),children:a,parents:n});return t},out:l=>Array.from(l)};return r},ie=e=>{const r=T(e);return{activate:a=>{let{activated:n,id:t,...s}=a;t=y(t);const c=n.has(t)?new Set([t]):new Set;return r.activate({...s,id:t,activated:c})},in:(a,n,t)=>{let s=new Set;if(a!=null){const c=X(a);c.length&&(s=r.in(c.slice(0,1),n,t))}return s},out:(a,n,t)=>r.out(a,n,t)}},Ze=e=>{const r=T(e);return{activate:a=>{let{id:n,activated:t,children:s,...c}=a;return n=y(n),s.has(n)?t:r.activate({id:n,activated:t,children:s,...c})},in:r.in,out:r.out}},et=e=>{const r=ie(e);return{activate:a=>{let{id:n,activated:t,children:s,...c}=a;return n=y(n),s.has(n)?t:r.activate({id:n,activated:t,children:s,...c})},in:r.in,out:r.out}},tt={open:e=>{let{id:r,value:l,opened:a,parents:n}=e;if(l){const t=new Set;t.add(r);let s=n.get(r);for(;s!=null;)t.add(s),s=n.get(s);return t}else return a.delete(r),a},select:()=>null},se={open:e=>{let{id:r,value:l,opened:a,parents:n}=e;if(l){let t=n.get(r);for(a.add(r);t!=null&&t!==r;)a.add(t),t=n.get(t);return a}else a.delete(r);return a},select:()=>null},at={open:se.open,select:e=>{let{id:r,value:l,opened:a,parents:n}=e;if(!l)return a;const t=[];let s=n.get(r);for(;s!=null;)t.push(s),s=n.get(s);return new Set(t)}},E=e=>{const r={select:l=>{let{id:a,value:n,selected:t}=l;if(a=y(a),e&&!n){const s=Array.from(t.entries()).reduce((c,h)=>{let[g,S]=h;return S==="on"&&c.push(g),c},[]);if(s.length===1&&s[0]===a)return t}return t.set(a,n?"on":"off"),t},in:(l,a,n)=>{let t=new Map;for(const s of l||[])t=r.select({id:s,value:!0,selected:new Map(t),children:a,parents:n});return t},out:l=>{const a=[];for(const[n,t]of l.entries())t==="on"&&a.push(n);return a}};return r},re=e=>{const r=E(e);return{select:a=>{let{selected:n,id:t,...s}=a;t=y(t);const c=n.has(t)?new Map([[t,n.get(t)]]):new Map;return r.select({...s,id:t,selected:c})},in:(a,n,t)=>{let s=new Map;return a!=null&&a.length&&(s=r.in(a.slice(0,1),n,t)),s},out:(a,n,t)=>r.out(a,n,t)}},nt=e=>{const r=E(e);return{select:a=>{let{id:n,selected:t,children:s,...c}=a;return n=y(n),s.has(n)?t:r.select({id:n,selected:t,children:s,...c})},in:r.in,out:r.out}},lt=e=>{const r=re(e);return{select:a=>{let{id:n,selected:t,children:s,...c}=a;return n=y(n),s.has(n)?t:r.select({id:n,selected:t,children:s,...c})},in:r.in,out:r.out}},it=e=>{const r={select:l=>{let{id:a,value:n,selected:t,children:s,parents:c}=l;a=y(a);const h=new Map(t),g=[a];for(;g.length;){const f=g.shift();t.set(y(f),n?"on":"off"),s.has(f)&&g.push(...s.get(f))}let S=y(c.get(a));for(;S;){const f=s.get(S),w=f.every(i=>t.get(y(i))==="on"),b=f.every(i=>!t.has(y(i))||t.get(y(i))==="off");t.set(S,w?"on":b?"off":"indeterminate"),S=y(c.get(S))}return e&&!n&&Array.from(t.entries()).reduce((w,b)=>{let[i,u]=b;return u==="on"&&w.push(i),w},[]).length===0?h:t},in:(l,a,n)=>{let t=new Map;for(const s of l||[])t=r.select({id:s,value:!0,selected:new Map(t),children:a,parents:n});return t},out:(l,a)=>{const n=[];for(const[t,s]of l.entries())s==="on"&&!a.has(t)&&n.push(t);return n}};return r},C=Symbol.for("vuetify:nested"),ce={id:M(),root:{register:()=>null,unregister:()=>null,parents:A(new Map),children:A(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:A(!1),selectable:A(!1),opened:A(new Set),activated:A(new Set),selected:A(new Map),selectedValues:A([]),getPath:()=>[]}},Pt=R({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),Vt=e=>{let r=!1;const l=A(new Map),a=A(new Map),n=_(e,"opened",e.opened,i=>new Set(i),i=>[...i.values()]),t=v(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return Ze(e.mandatory);case"single-leaf":return et(e.mandatory);case"independent":return T(e.mandatory);case"single-independent":default:return ie(e.mandatory)}}),s=v(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return lt(e.mandatory);case"leaf":return nt(e.mandatory);case"independent":return E(e.mandatory);case"single-independent":return re(e.mandatory);case"classic":default:return it(e.mandatory)}}),c=v(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return at;case"single":return tt;case"multiple":default:return se}}),h=_(e,"activated",e.activated,i=>t.value.in(i,l.value,a.value),i=>t.value.out(i,l.value,a.value)),g=_(e,"selected",e.selected,i=>s.value.in(i,l.value,a.value),i=>s.value.out(i,l.value,a.value));Z(()=>{r=!0});function S(i){const u=[];let o=i;for(;o!=null;)u.unshift(o),o=a.value.get(o);return u}const f=Ie("nested"),w=new Set,b={id:M(),root:{opened:n,activatable:$(e,"activatable"),selectable:$(e,"selectable"),activated:h,selected:g,selectedValues:v(()=>{const i=[];for(const[u,o]of g.value.entries())o==="on"&&i.push(u);return i}),register:(i,u,o)=>{if(w.has(i)){S(i).map(String).join(" -> "),S(u).concat(i).map(String).join(" -> ");return}else w.add(i);u&&i!==u&&a.value.set(i,u),o&&l.value.set(i,[]),u!=null&&l.value.set(u,[...l.value.get(u)||[],i])},unregister:i=>{if(r)return;w.delete(i),l.value.delete(i);const u=a.value.get(i);if(u){const o=l.value.get(u)??[];l.value.set(u,o.filter(p=>p!==i))}a.value.delete(i)},open:(i,u,o)=>{f.emit("click:open",{id:i,value:u,path:S(i),event:o});const p=c.value.open({id:i,value:u,opened:new Set(n.value),children:l.value,parents:a.value,event:o});p&&(n.value=p)},openOnSelect:(i,u,o)=>{const p=c.value.select({id:i,value:u,selected:new Map(g.value),opened:new Set(n.value),children:l.value,parents:a.value,event:o});p&&(n.value=p)},select:(i,u,o)=>{f.emit("click:select",{id:i,value:u,path:S(i),event:o});const p=s.value.select({id:i,value:u,selected:new Map(g.value),children:l.value,parents:a.value,event:o});p&&(g.value=p),b.root.openOnSelect(i,u,o)},activate:(i,u,o)=>{if(!e.activatable)return b.root.select(i,!0,o);f.emit("click:activate",{id:i,value:u,path:S(i),event:o});const p=t.value.activate({id:i,value:u,activated:new Set(h.value),children:l.value,parents:a.value,event:o});p&&(h.value=p)},children:l,parents:a,getPath:S}};return B(C,b),b.root},st=(e,r)=>{const l=L(C,ce),a=Symbol(Ce()),n=v(()=>e.value!==void 0?e.value:a),t={...l,id:n,open:(s,c)=>l.root.open(n.value,s,c),openOnSelect:(s,c)=>l.root.openOnSelect(n.value,s,c),isOpen:v(()=>l.root.opened.value.has(n.value)),parent:v(()=>l.root.parents.value.get(n.value)),activate:(s,c)=>l.root.activate(n.value,s,c),isActivated:v(()=>l.root.activated.value.has(y(n.value))),select:(s,c)=>l.root.select(n.value,s,c),isSelected:v(()=>l.root.selected.value.get(y(n.value))==="on"),isIndeterminate:v(()=>l.root.selected.value.get(n.value)==="indeterminate"),isLeaf:v(()=>!l.root.children.value.get(n.value)),isGroupActivator:l.isGroupActivator};return ee(()=>{!l.isGroupActivator&&l.root.register(n.value,l.id.value,r)}),Z(()=>{!l.isGroupActivator&&l.root.unregister(n.value)}),r&&B(C,t),t},It=()=>{const e=L(C,ce);B(C,{...e,isGroupActivator:!0})},rt=R({opacity:[Number,String],...te(),...ae()},"VListItemSubtitle"),ct=ne()({name:"VListItemSubtitle",props:rt(),setup(e,r){let{slots:l}=r;return le(()=>m(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},l)),{}}}),ut=De("v-list-item-title"),ot=R({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:z,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:z,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:W(),onClickOnce:W(),...Re(),...te(),...Ee(),...Ge(),...Ue(),...Ke(),...ze(),...ae(),...Oe(),...Ye({variant:"text"})},"VListItem"),Ct=ne()({name:"VListItem",directives:{Ripple:Qe},props:ot(),emits:{click:e=>!0},setup(e,r){let{attrs:l,slots:a,emit:n}=r;const t=We(e,l),s=v(()=>e.value===void 0?t.href.value:e.value),{activate:c,isActivated:h,select:g,isOpen:S,isSelected:f,isIndeterminate:w,isGroupActivator:b,root:i,parent:u,openOnSelect:o,id:p}=st(s,!1),P=Xe(),V=v(()=>{var d;return e.active!==!1&&(e.active||((d=t.isActive)==null?void 0:d.value)||(i.activatable.value?h.value:f.value))}),F=v(()=>e.link!==!1&&t.isLink.value),G=v(()=>!!P&&(i.selectable.value||i.activatable.value||e.value!=null)),I=v(()=>!e.disabled&&e.link!==!1&&(e.link||t.isClickable.value||G.value)),ue=v(()=>e.rounded||e.nav),oe=v(()=>e.color??e.activeColor),de=v(()=>({color:V.value?oe.value??e.baseColor:e.baseColor,variant:e.variant}));Me(()=>{var d;return(d=t.isActive)==null?void 0:d.value},d=>{d&&x()}),ee(()=>{var d;(d=t.isActive)!=null&&d.value&&x()});function x(){u.value!=null&&i.open(u.value,!0),o(!0)}const{themeClasses:ve}=Le(e),{borderClasses:fe}=Te(e),{colorClasses:me,colorStyles:ye,variantClasses:ge}=qe(de),{densityClasses:Se}=Fe(e),{dimensionStyles:pe}=xe(e),{elevationClasses:he}=He(e),{roundedClasses:be}=$e(ue),ke=v(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),N=v(()=>({isActive:V.value,select:g,isOpen:S.value,isSelected:f.value,isIndeterminate:w.value}));function we(d){var O;n("click",d),I.value&&((O=t.navigate)==null||O.call(t,d),!b&&(i.activatable.value?c(!h.value,d):(i.selectable.value||e.value!=null)&&g(!f.value,d)))}function Ae(d){(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),d.target.dispatchEvent(new MouseEvent("click",d)))}return le(()=>{const d=F.value?"a":e.tag,O=a.title||e.title!=null,Pe=a.subtitle||e.subtitle!=null,U=!!(e.appendAvatar||e.appendIcon),Ve=!!(U||a.append),H=!!(e.prependAvatar||e.prependIcon),j=!!(H||a.prepend);return P==null||P.updateHasPrepend(j),e.activeColor&&Be("active-color",["color","base-color"]),Ne(m(d,_e({class:["v-list-item",{"v-list-item--active":V.value,"v-list-item--disabled":e.disabled,"v-list-item--link":I.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!j&&(P==null?void 0:P.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&V.value},ve.value,fe.value,me.value,Se.value,he.value,ke.value,be.value,ge.value,e.class],style:[ye.value,pe.value,e.style],tabindex:I.value?P?-2:0:void 0,"aria-selected":G.value?i.activatable.value?h.value:i.selectable.value?f.value:V.value:void 0,onClick:we,onKeydown:I.value&&!F.value&&Ae},t.linkProps),{default:()=>{var K;return[Je(I.value||V.value,"v-list-item"),j&&m("div",{key:"prepend",class:"v-list-item__prepend"},[a.prepend?m(Q,{key:"prepend-defaults",disabled:!H,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var k;return[(k=a.prepend)==null?void 0:k.call(a,N.value)]}}):m(Y,null,[e.prependAvatar&&m(J,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&m(q,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),m("div",{class:"v-list-item__spacer"},null)]),m("div",{class:"v-list-item__content","data-no-activator":""},[O&&m(ut,{key:"title"},{default:()=>{var k;return[((k=a.title)==null?void 0:k.call(a,{title:e.title}))??e.title]}}),Pe&&m(ct,{key:"subtitle"},{default:()=>{var k;return[((k=a.subtitle)==null?void 0:k.call(a,{subtitle:e.subtitle}))??e.subtitle]}}),(K=a.default)==null?void 0:K.call(a,N.value)]),Ve&&m("div",{key:"append",class:"v-list-item__append"},[a.append?m(Q,{key:"append-defaults",disabled:!U,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var k;return[(k=a.append)==null?void 0:k.call(a,N.value)]}}):m(Y,null,[e.appendIcon&&m(q,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&m(J,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),m("div",{class:"v-list-item__spacer"},null)])]}}),[[je("ripple"),I.value&&e.ripple]])}),{activate:c,isActivated:h,isGroupActivator:b,isSelected:f,list:P,select:g,root:i,id:p}}});export{ut as V,Ct as a,st as b,Xe as c,At as d,Vt as e,Pt as m,It as u};
