import I from"./InstagramIconHome.C1ZtTng1.js";import x from"./InstagramIconHeart.Btm1p1Cm.js";import V from"./InstagramIconNewPost.BLp30SYf.js";import P from"./InstagramIconExplore.3YZLLNAk.js";import S from"./InstagramUserAvatar.9iFPKsoL.js";import{_ as N}from"./nuxt-link.DK4YLQsX.js";import{p as h}from"./project.mSBezFTX.js";import{m as w,u as z,a as D,V as n}from"./VBtn.Fj12V0FI.js";import{m as R,u as T}from"./border.CVV9H6h1.js";import{u as $}from"./color.BhqTrDwI.js";import{s as E,t as H,a5 as j,D as A,x as G,a6 as L,a7 as O,O as U,z as F,K as y,_ as K}from"./entry.Dlrc_O8N.js";import{m as Q,u as W}from"./density.D-_y36pz.js";import{m as Y,u as q}from"./elevation.CTNmy1SF.js";import{m as J,u as M}from"./rounded.BO8GkCMC.js";import{u as X}from"./ssrBoot.BgOGdUa4.js";import{m as Z}from"./tag.DURzlijk.js";import{t as r,j as s,l as o,d as tt,O as b,Q as k,W as e,u as C,R as ot}from"./swiper-vue.CEq_1mxI.js";import"./VAvatar.BXNdKfvm.js";import"./VIcon.CYG3HdRR.js";import"./variant.JFsEiyeK.js";import"./dimensions.afEoaX4U.js";import"./transition.1l_03ulU.js";import"./index.C-ny6lzg.js";import"./VDefaultsProvider.ByfMg-vc.js";import"./loader.B3wZ-kw1.js";import"./location.BpLe17-d.js";import"./anchor.NBCuhVUE.js";import"./position.DCOeE75P.js";import"./router.QmMRyV9b.js";import"./index.C_4sEVhZ.js";const et=E({bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:t=>!t||["horizontal","shift"].includes(t)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...R(),...H(),...Q(),...Y(),...J(),...j({name:"bottom-navigation"}),...Z({tag:"header"}),...w({modelValue:!0,selectedClass:"v-btn--selected"}),...A()},"VBottomNavigation"),at=G()({name:"VBottomNavigation",props:et(),emits:{"update:modelValue":t=>!0},setup(t,c){let{slots:m}=c;const{themeClasses:a}=L(),{borderClasses:i}=T(t),{backgroundColorClasses:d,backgroundColorStyles:_}=$(r(t,"bgColor")),{densityClasses:v}=W(t),{elevationClasses:p}=q(t),{roundedClasses:f}=M(t),{ssrBootStyles:g}=X(),u=s(()=>Number(t.height)-(t.density==="comfortable"?8:0)-(t.density==="compact"?16:0)),l=r(t,"active"),{layoutItemStyles:B}=O({id:t.name,order:s(()=>parseInt(t.order,10)),position:s(()=>"bottom"),layoutSize:s(()=>l.value?u.value:0),elementSize:u,active:l,absolute:r(t,"absolute")});return z(t,D),U({VBtn:{color:r(t,"color"),density:r(t,"density"),stacked:s(()=>t.mode!=="horizontal"),variant:"text"}},{scoped:!0}),F(()=>o(t.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":l.value,"v-bottom-navigation--grow":t.grow,"v-bottom-navigation--shift":t.mode==="shift"},a.value,d.value,i.value,v.value,p.value,f.value,t.class],style:[_.value,B.value,{height:y(u.value),transform:`translateY(${y(l.value?0:100,"%")})`},g.value,t.style]},{default:()=>[m.default&&o("div",{class:"v-bottom-navigation__content"},[m.default()])]})),{}}}),nt=tt({__name:"InstagramNavigationDrawerHorizontal",props:{user:{}},emits:["create","export"],setup(t,{emit:c}){const m=c;return(a,i)=>{const d=I,_=x,v=V,p=P,f=S,g=N;return b(),k(at,{class:"ig-navigation-drawer ig-navigation-drawer--horizontal",height:"50"},{default:e(()=>[o(n,{to:"/"},{default:e(()=>[o(d)]),_:1}),o(n,{href:C(h).support,target:"_blank"},{default:e(()=>[o(_)]),_:1},8,["href"]),o(n,{onClick:i[0]||(i[0]=u=>m("create"))},{default:e(()=>[o(v)]),_:1}),o(n,{href:C(h).docs},{default:e(()=>[o(p)]),_:1},8,["href"]),o(n,null,{default:e(()=>[o(g,{to:a.user.route},{default:e(()=>[a.user.ready?(b(),k(f,{key:0,avatar:a.user.profile.avatar,size:26},null,8,["avatar"])):ot("",!0)]),_:1},8,["to"])]),_:1})]),_:1})}}}),$t=K(nt,[["__scopeId","data-v-c52188b4"]]);export{$t as default};
