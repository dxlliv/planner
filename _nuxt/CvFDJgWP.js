import{aU as L,B as o,aV as E,a9 as m,ae as g,ah as x,S as B,aa as y,aH as P,an as S,aW as w}from"./E5Lotu8k.js";function T(){const e=y("useRoute");return o(()=>{var a;return(a=e==null?void 0:e.proxy)==null?void 0:a.$route})}function q(){var e,a;return(a=(e=y("useRouter"))==null?void 0:e.proxy)==null?void 0:a.$router}function A(e,a){var d,h;const u=L("RouterLink"),n=o(()=>!!(e.href||e.to)),i=o(()=>(n==null?void 0:n.value)||E(a,"click")||E(e,"click"));if(typeof u=="string"||!("useLink"in u)){const s=m(e,"href");return{isLink:n,isClickable:i,href:s,linkProps:g({href:s})}}const l=o(()=>({...e,to:m(()=>e.to||"")})),c=u.useLink(l.value),t=o(()=>e.to?c:void 0),r=T(),v=o(()=>{var s,R,p;return t.value?e.exact?r.value?((p=t.value.isExactActive)==null?void 0:p.value)&&x(t.value.route.value.query,r.value.query):((R=t.value.isExactActive)==null?void 0:R.value)??!1:((s=t.value.isActive)==null?void 0:s.value)??!1:!1}),k=o(()=>{var s;return e.to?(s=t.value)==null?void 0:s.route.value.href:e.href});return{isLink:n,isClickable:i,isActive:v,route:(d=t.value)==null?void 0:d.route,navigate:(h=t.value)==null?void 0:h.navigate,href:k,linkProps:g({href:k,"aria-current":o(()=>v.value?"page":void 0)})}}const C=B({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let f=!1;function D(e,a){let u=!1,n,i;P&&(S(()=>{window.addEventListener("popstate",l),n=e==null?void 0:e.beforeEach((c,t,r)=>{f?u?a(r):r():setTimeout(()=>u?a(r):r()),f=!0}),i=e==null?void 0:e.afterEach(()=>{f=!1})}),w(()=>{window.removeEventListener("popstate",l),n==null||n(),i==null||i()}));function l(c){var t;(t=c.state)!=null&&t.replaced||(u=!0,setTimeout(()=>u=!1))}}export{q as a,D as b,C as m,A as u};
