import{L as Q,t as j,J as N,H as we,I as ke,v as W,x as X,z as Y,P as H,a8 as K,E as Ae,F as Pe,aq as Ie}from"./toyJVOOD.js";import{m as Z}from"./Jenkb-9w.js";import{i as L,s as C,y as M,G as b,a as k,j as f,M as ee,t as U,l as y,w as Ve,af as Ce,ag as Le,F as z}from"./CK7iLweF.js";import{c as Me}from"./DB1xLVpR.js";import{m as Oe,u as Be}from"./9GnyyO61.js";import{m as Ne,u as _e}from"./BjFUtTBf.js";import{m as je,u as De}from"./DWpEEEb-.js";import{m as Re,u as Fe}from"./loxWndA1.js";import{m as Ge,u as Te}from"./u-l0zx1s.js";import{m as xe,u as Ee}from"./Beb0bSkS.js";import{m as He,u as Ke,g as Ue}from"./CONEV2eP.js";import{R as ze}from"./Ciyr4XB4.js";import{V as $}from"./DyI-7cgv.js";import{V as q}from"./SHXT7idA.js";import{V as J}from"./Bvwa_7js.js";const _=Symbol.for("vuetify:list");function bt(){const e=L(_,{hasPrepend:C(!1),updateHasPrepend:()=>null}),s={hasPrepend:C(!1),updateHasPrepend:l=>{l&&(s.hasPrepend.value=l)}};return M(_,s),e}function $e(){return L(_,null)}const D=e=>{const s={activate:l=>{let{id:a,value:n,activated:t}=l;return a=b(a),e&&!n&&t.size===1&&t.has(a)||(n?t.add(a):t.delete(a)),t},in:(l,a,n)=>{let t=new Set;if(l!=null)for(const i of Q(l))t=s.activate({id:i,value:!0,activated:new Set(t),children:a,parents:n});return t},out:l=>Array.from(l)};return s},te=e=>{const s=D(e);return{activate:a=>{let{activated:n,id:t,...i}=a;t=b(t);const u=n.has(t)?new Set([t]):new Set;return s.activate({...i,id:t,activated:u})},in:(a,n,t)=>{let i=new Set;if(a!=null){const u=Q(a);u.length&&(i=s.in(u.slice(0,1),n,t))}return i},out:(a,n,t)=>s.out(a,n,t)}},qe=e=>{const s=D(e);return{activate:a=>{let{id:n,activated:t,children:i,...u}=a;return n=b(n),i.has(n)?t:s.activate({id:n,activated:t,children:i,...u})},in:s.in,out:s.out}},Je=e=>{const s=te(e);return{activate:a=>{let{id:n,activated:t,children:i,...u}=a;return n=b(n),i.has(n)?t:s.activate({id:n,activated:t,children:i,...u})},in:s.in,out:s.out}},Qe={open:e=>{let{id:s,value:l,opened:a,parents:n}=e;if(l){const t=new Set;t.add(s);let i=n.get(s);for(;i!=null;)t.add(i),i=n.get(i);return t}else return a.delete(s),a},select:()=>null},ae={open:e=>{let{id:s,value:l,opened:a,parents:n}=e;if(l){let t=n.get(s);for(a.add(s);t!=null&&t!==s;)a.add(t),t=n.get(t);return a}else a.delete(s);return a},select:()=>null},We={open:ae.open,select:e=>{let{id:s,value:l,opened:a,parents:n}=e;if(!l)return a;const t=[];let i=n.get(s);for(;i!=null;)t.push(i),i=n.get(i);return new Set(t)}},R=e=>{const s={select:l=>{let{id:a,value:n,selected:t}=l;if(a=b(a),e&&!n){const i=Array.from(t.entries()).reduce((u,w)=>{let[g,m]=w;return m==="on"&&u.push(g),u},[]);if(i.length===1&&i[0]===a)return t}return t.set(a,n?"on":"off"),t},in:(l,a,n)=>{let t=new Map;for(const i of l||[])t=s.select({id:i,value:!0,selected:new Map(t),children:a,parents:n});return t},out:l=>{const a=[];for(const[n,t]of l.entries())t==="on"&&a.push(n);return a}};return s},ne=e=>{const s=R(e);return{select:a=>{let{selected:n,id:t,...i}=a;t=b(t);const u=n.has(t)?new Map([[t,n.get(t)]]):new Map;return s.select({...i,id:t,selected:u})},in:(a,n,t)=>{let i=new Map;return a!=null&&a.length&&(i=s.in(a.slice(0,1),n,t)),i},out:(a,n,t)=>s.out(a,n,t)}},Xe=e=>{const s=R(e);return{select:a=>{let{id:n,selected:t,children:i,...u}=a;return n=b(n),i.has(n)?t:s.select({id:n,selected:t,children:i,...u})},in:s.in,out:s.out}},Ye=e=>{const s=ne(e);return{select:a=>{let{id:n,selected:t,children:i,...u}=a;return n=b(n),i.has(n)?t:s.select({id:n,selected:t,children:i,...u})},in:s.in,out:s.out}},Ze=e=>{const s={select:l=>{let{id:a,value:n,selected:t,children:i,parents:u}=l;a=b(a);const w=new Map(t),g=[a];for(;g.length;){const S=g.shift();t.set(S,n?"on":"off"),i.has(S)&&g.push(...i.get(S))}let m=u.get(a);for(;m;){const S=i.get(m),p=S.every(c=>t.get(c)==="on"),r=S.every(c=>!t.has(c)||t.get(c)==="off");t.set(m,p?"on":r?"off":"indeterminate"),m=u.get(m)}return e&&!n&&Array.from(t.entries()).reduce((p,r)=>{let[c,o]=r;return o==="on"&&p.push(c),p},[]).length===0?w:t},in:(l,a,n)=>{let t=new Map;for(const i of l||[])t=s.select({id:i,value:!0,selected:new Map(t),children:a,parents:n});return t},out:(l,a)=>{const n=[];for(const[t,i]of l.entries())i==="on"&&!a.has(t)&&n.push(t);return n}};return s},I=Symbol.for("vuetify:nested"),le={id:C(),root:{register:()=>null,unregister:()=>null,parents:k(new Map),children:k(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:k(!1),selectable:k(!1),opened:k(new Set),activated:k(new Set),selected:k(new Map),selectedValues:k([])}},wt=j({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),kt=e=>{let s=!1;const l=k(new Map),a=k(new Map),n=N(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),t=f(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return qe(e.mandatory);case"single-leaf":return Je(e.mandatory);case"independent":return D(e.mandatory);case"single-independent":default:return te(e.mandatory)}}),i=f(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return Ye(e.mandatory);case"leaf":return Xe(e.mandatory);case"independent":return R(e.mandatory);case"single-independent":return ne(e.mandatory);case"classic":default:return Ze(e.mandatory)}}),u=f(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return We;case"single":return Qe;case"multiple":default:return ae}}),w=N(e,"activated",e.activated,r=>t.value.in(r,l.value,a.value),r=>t.value.out(r,l.value,a.value)),g=N(e,"selected",e.selected,r=>i.value.in(r,l.value,a.value),r=>i.value.out(r,l.value,a.value));ee(()=>{s=!0});function m(r){const c=[];let o=r;for(;o!=null;)c.unshift(o),o=a.value.get(o);return c}const S=we("nested"),p={id:C(),root:{opened:n,activatable:U(e,"activatable"),selectable:U(e,"selectable"),activated:w,selected:g,selectedValues:f(()=>{const r=[];for(const[c,o]of g.value.entries())o==="on"&&r.push(c);return r}),register:(r,c,o)=>{c&&r!==c&&a.value.set(r,c),o&&l.value.set(r,[]),c!=null&&l.value.set(c,[...l.value.get(c)||[],r])},unregister:r=>{if(s)return;l.value.delete(r);const c=a.value.get(r);if(c){const o=l.value.get(c)??[];l.value.set(c,o.filter(d=>d!==r))}a.value.delete(r),n.value.delete(r)},open:(r,c,o)=>{S.emit("click:open",{id:r,value:c,path:m(r),event:o});const d=u.value.open({id:r,value:c,opened:new Set(n.value),children:l.value,parents:a.value,event:o});d&&(n.value=d)},openOnSelect:(r,c,o)=>{const d=u.value.select({id:r,value:c,selected:new Map(g.value),opened:new Set(n.value),children:l.value,parents:a.value,event:o});d&&(n.value=d)},select:(r,c,o)=>{S.emit("click:select",{id:r,value:c,path:m(r),event:o});const d=i.value.select({id:r,value:c,selected:new Map(g.value),children:l.value,parents:a.value,event:o});d&&(g.value=d),p.root.openOnSelect(r,c,o)},activate:(r,c,o)=>{if(!e.activatable)return p.root.select(r,!0,o);S.emit("click:activate",{id:r,value:c,path:m(r),event:o});const d=t.value.activate({id:r,value:c,activated:new Set(w.value),children:l.value,parents:a.value,event:o});d&&(w.value=d)},children:l,parents:a}};return M(I,p),p.root},et=(e,s)=>{const l=L(I,le),a=Symbol(ke()),n=f(()=>e.value!==void 0?e.value:a),t={...l,id:n,open:(i,u)=>l.root.open(n.value,i,u),openOnSelect:(i,u)=>l.root.openOnSelect(n.value,i,u),isOpen:f(()=>l.root.opened.value.has(n.value)),parent:f(()=>l.root.parents.value.get(n.value)),activate:(i,u)=>l.root.activate(n.value,i,u),isActivated:f(()=>l.root.activated.value.has(b(n.value))),select:(i,u)=>l.root.select(n.value,i,u),isSelected:f(()=>l.root.selected.value.get(b(n.value))==="on"),isIndeterminate:f(()=>l.root.selected.value.get(n.value)==="indeterminate"),isLeaf:f(()=>!l.root.children.value.get(n.value)),isGroupActivator:l.isGroupActivator};return!l.isGroupActivator&&l.root.register(n.value,l.id.value,s),ee(()=>{!l.isGroupActivator&&l.root.unregister(n.value)}),s&&M(I,t),t},At=()=>{const e=L(I,le);M(I,{...e,isGroupActivator:!0})},tt=j({opacity:[Number,String],...W(),...Z()},"VListItemSubtitle"),at=X()({name:"VListItemSubtitle",props:tt(),setup(e,s){let{slots:l}=s;return Y(()=>y(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},l)),{}}}),nt=Me("v-list-item-title"),lt=j({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:H,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:H,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:K(),onClickOnce:K(),...Oe(),...W(),...Ne(),...je(),...Re(),...Ge(),...xe(),...Z(),...Ae(),...He({variant:"text"})},"VListItem"),Pt=X()({name:"VListItem",directives:{Ripple:ze},props:lt(),emits:{click:e=>!0},setup(e,s){let{attrs:l,slots:a,emit:n}=s;const t=Ee(e,l),i=f(()=>e.value===void 0?t.href.value:e.value),{activate:u,isActivated:w,select:g,isSelected:m,isIndeterminate:S,isGroupActivator:p,root:r,parent:c,openOnSelect:o}=et(i,!1),d=$e(),P=f(()=>{var v;return e.active!==!1&&(e.active||((v=t.isActive)==null?void 0:v.value)||(r.activatable.value?w.value:m.value))}),F=f(()=>e.link!==!1&&t.isLink.value),A=f(()=>!e.disabled&&e.link!==!1&&(e.link||t.isClickable.value||!!d&&(r.selectable.value||r.activatable.value||e.value!=null))),ie=f(()=>e.rounded||e.nav),se=f(()=>e.color??e.activeColor),re=f(()=>({color:P.value?se.value??e.baseColor:e.baseColor,variant:e.variant}));Ve(()=>{var v;return(v=t.isActive)==null?void 0:v.value},v=>{v&&c.value!=null&&r.open(c.value,!0),v&&o(v)},{immediate:!0});const{themeClasses:ce}=Pe(e),{borderClasses:ue}=Be(e),{colorClasses:oe,colorStyles:de,variantClasses:ve}=Ke(re),{densityClasses:fe}=_e(e),{dimensionStyles:me}=De(e),{elevationClasses:ye}=Fe(e),{roundedClasses:ge}=Te(ie),Se=f(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),O=f(()=>({isActive:P.value,select:g,isSelected:m.value,isIndeterminate:S.value}));function G(v){var V;n("click",v),A.value&&((V=t.navigate)==null||V.call(t,v),!p&&(r.activatable.value?u(!w.value,v):(r.selectable.value||e.value!=null)&&g(!m.value,v)))}function pe(v){(v.key==="Enter"||v.key===" ")&&(v.preventDefault(),G(v))}return Y(()=>{const v=F.value?"a":e.tag,V=a.title||e.title!=null,he=a.subtitle||e.subtitle!=null,T=!!(e.appendAvatar||e.appendIcon),be=!!(T||a.append),x=!!(e.prependAvatar||e.prependIcon),B=!!(x||a.prepend);return d==null||d.updateHasPrepend(B),e.activeColor&&Ie("active-color",["color","base-color"]),Ce(y(v,{class:["v-list-item",{"v-list-item--active":P.value,"v-list-item--disabled":e.disabled,"v-list-item--link":A.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!B&&(d==null?void 0:d.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&P.value},ce.value,ue.value,oe.value,fe.value,ye.value,Se.value,ge.value,ve.value,e.class],style:[de.value,me.value,e.style],href:t.href.value,tabindex:A.value?d?-2:0:void 0,onClick:G,onKeydown:A.value&&!F.value&&pe},{default:()=>{var E;return[Ue(A.value||P.value,"v-list-item"),B&&y("div",{key:"prepend",class:"v-list-item__prepend"},[a.prepend?y(J,{key:"prepend-defaults",disabled:!x,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var h;return[(h=a.prepend)==null?void 0:h.call(a,O.value)]}}):y(z,null,[e.prependAvatar&&y($,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&y(q,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),y("div",{class:"v-list-item__spacer"},null)]),y("div",{class:"v-list-item__content","data-no-activator":""},[V&&y(nt,{key:"title"},{default:()=>{var h;return[((h=a.title)==null?void 0:h.call(a,{title:e.title}))??e.title]}}),he&&y(at,{key:"subtitle"},{default:()=>{var h;return[((h=a.subtitle)==null?void 0:h.call(a,{subtitle:e.subtitle}))??e.subtitle]}}),(E=a.default)==null?void 0:E.call(a,O.value)]),be&&y("div",{key:"append",class:"v-list-item__append"},[a.append?y(J,{key:"append-defaults",disabled:!T,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var h;return[(h=a.append)==null?void 0:h.call(a,O.value)]}}):y(z,null,[e.appendIcon&&y(q,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&y($,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),y("div",{class:"v-list-item__spacer"},null)])]}}),[[Le("ripple"),A.value&&e.ripple]])}),{isGroupActivator:p,isSelected:m,list:d,select:g}}});export{nt as V,Pt as a,et as b,$e as c,bt as d,kt as e,wt as m,At as u};
