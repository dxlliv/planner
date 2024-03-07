import{j as C,a as v,s as Z,m as ee,o as te,w as m,I as ae,n as _,l,y as P,F as S,a9 as A,aa as ne,al as le,d as oe,O as re,Q as ie}from"./swiper-vue.CEq_1mxI.js";import{m as ue,f as se,V as ce,a as de}from"./VField.8TmpmRx6.js";import{a as fe,u as ve,V as E}from"./VLabel.CMoPuKXz.js";import{f as me}from"./forwardRefs.D3j0TLhE.js";import{s as xe,x as ge,W as he,z as we,K as Ve,av as ye,aw as Fe,an as Ce}from"./entry.Dlrc_O8N.js";import{I as Pe}from"./index.C-ny6lzg.js";const ke=xe({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...fe(),...ue()},"VTextarea"),Ie=ge()({name:"VTextarea",directives:{Intersect:Pe},inheritAttrs:!1,props:ke(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,x){let{attrs:g,emit:B,slots:i}=x;const o=he(e,"modelValue"),{isFocused:f,focus:G,blur:U}=ve(e),D=C(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),O=C(()=>{if(g.maxlength)return g.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function $(t,n){var a,r;!e.autofocus||!t||(r=(a=n[0].target)==null?void 0:a.focus)==null||r.call(a)}const b=v(),h=v(),M=Z(""),w=v(),j=C(()=>e.persistentPlaceholder||f.value||e.active);function k(){var t;w.value!==document.activeElement&&((t=w.value)==null||t.focus()),f.value||G()}function K(t){k(),B("click:control",t)}function Q(t){B("mousedown:control",t)}function W(t){t.stopPropagation(),k(),_(()=>{o.value="",Fe(e["onClick:clear"],t)})}function q(t){var a;const n=t.target;if(o.value=n.value,(a=e.modelModifiers)!=null&&a.trim){const r=[n.selectionStart,n.selectionEnd];_(()=>{n.selectionStart=r[0],n.selectionEnd=r[1]})}}const c=v(),V=v(+e.rows),I=C(()=>["plain","underlined"].includes(e.variant));ee(()=>{e.autoGrow||(V.value=+e.rows)});function d(){e.autoGrow&&_(()=>{if(!c.value||!h.value)return;const t=getComputedStyle(c.value),n=getComputedStyle(h.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),r=c.value.scrollHeight,y=parseFloat(t.lineHeight),p=Math.max(parseFloat(e.rows)*y+a,parseFloat(n.getPropertyValue("--v-input-control-height"))),R=parseFloat(e.maxRows)*y+a||1/0,s=Ce(r??0,p,R);V.value=Math.floor((s-a)/y),M.value=Ve(s)})}te(d),m(o,d),m(()=>e.rows,d),m(()=>e.maxRows,d),m(()=>e.density,d);let u;return m(c,t=>{t?(u=new ResizeObserver(d),u.observe(c.value)):u==null||u.disconnect()}),ae(()=>{u==null||u.disconnect()}),we(()=>{const t=!!(i.counter||e.counter||e.counterValue),n=!!(t||i.details),[a,r]=ye(g),{modelValue:y,...p}=E.filterProps(e),R=se(e);return l(E,P({ref:b,modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":I.value},e.class],style:e.style},a,p,{centerAffix:V.value===1&&!I.value,focused:f.value}),{...i,default:s=>{let{id:F,isDisabled:z,isDirty:H,isReadonly:J,isValid:L}=s;return l(ce,P({ref:h,style:{"--v-textarea-control-height":M.value},onClick:K,onMousedown:Q,"onClick:clear":W,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},R,{id:F.value,active:j.value||H.value,centerAffix:V.value===1&&!I.value,dirty:H.value||e.dirty,disabled:z.value,focused:f.value,error:L.value===!1}),{...i,default:X=>{let{props:{class:N,...T}}=X;return l(S,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),A(l("textarea",P({ref:w,class:N,value:o.value,onInput:q,autofocus:e.autofocus,readonly:J.value,disabled:z.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:k,onBlur:U},T,r),null),[[ne("intersect"),{handler:$},null,{once:!0}]]),e.autoGrow&&A(l("textarea",{class:[N,"v-textarea__sizer"],id:`${T.id}-sizer`,"onUpdate:modelValue":Y=>o.value=Y,ref:c,readonly:!0,"aria-hidden":"true"},null),[[le,o.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:n?s=>{var F;return l(S,null,[(F=i.details)==null?void 0:F.call(i,s),t&&l(S,null,[l("span",null,null),l(de,{active:e.persistentCounter||f.value,value:D.value,max:O.value},i.counter)])])}:void 0})}),me({},b,h,w)}}),Me=oe({__name:"UserEditorFieldTextarea",props:{data:{},variant:{}},setup(e){return(x,g)=>(re(),ie(Ie,P(x.$props,{placeholder:x.data.placeholder,"hide-details":"",spellcheck:"false"}),null,16,["placeholder"]))}});export{Me as _};
