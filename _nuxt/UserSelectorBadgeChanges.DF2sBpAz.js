import{s as P,ad as S,x as b,W as O,V as T,z as k,_ as B}from"./entry.Dlrc_O8N.js";import{m as C,V as m}from"./VOverlay.CYVJ_36w.js";import{f as w}from"./forwardRefs.D3j0TLhE.js";import{u as W}from"./scopeId.c-DE_LfO.js";import{j as e,a as A,y as d,l as v,O as I,Q as N,W as f,a3 as R,a2 as U}from"./swiper-vue.CEq_1mxI.js";import{V as $}from"./VBadge.BGGXubVu.js";import"./anchor.NBCuhVUE.js";import"./color.BhqTrDwI.js";import"./dimensions.afEoaX4U.js";import"./router.QmMRyV9b.js";import"./transition.1l_03ulU.js";import"./location.BpLe17-d.js";import"./rounded.BO8GkCMC.js";import"./tag.DURzlijk.js";import"./VIcon.CYG3HdRR.js";const j=P({id:String,text:String,...S(C({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),z=b()({name:"VTooltip",props:j(),emits:{"update:modelValue":t=>!0},setup(t,n){let{slots:o}=n;const i=O(t,"modelValue"),{scopeId:g}=W(),p=T(),s=e(()=>t.id||`v-tooltip-${p}`),l=A(),V=e(()=>t.location.split(" ").length>1?t.location:t.location+" center"),y=e(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),_=e(()=>t.transition?t.transition:i.value?"scale-transition":"fade-transition"),x=e(()=>d({"aria-describedby":s.value},t.activatorProps));return k(()=>{const h=m.filterProps(t);return v(m,d({ref:l,class:["v-tooltip",t.class],style:t.style,id:s.value},h,{modelValue:i.value,"onUpdate:modelValue":a=>i.value=a,transition:_.value,absolute:!0,location:V.value,origin:y.value,persistent:!0,role:"tooltip",activatorProps:x.value,_disableGlobalStack:!0},g),{activator:o.activator,default:function(){var u;for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return((u=o.default)==null?void 0:u.call(o,...c))??t.text}})}),w({},l)}}),D={};function F(t,n){return I(),N($,{color:"primary"},{default:f(()=>[v(z,{"content-class":"text-overline",activator:"parent",offset:[16,3]},{default:f(()=>[R(U(t.$t("common.hasChanges")),1)]),_:1})]),_:1})}const at=B(D,[["render",F]]);export{at as default};
