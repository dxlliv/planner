import{s as f,C as m}from"./entry.Dlrc_O8N.js";import{j as p}from"./swiper-vue.CEq_1mxI.js";import{p as u}from"./anchor.NBCuhVUE.js";const l={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},y=f({location:String},"location");function x(o){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:i}=m();return{locationStyles:p(()=>{if(!o.location)return{};const{side:e,align:n}=u(o.location.split(" ").length>1?o.location:`${o.location} center`,i.value);function r(c){return a?a(c):0}const t={};return e!=="center"&&(s?t[l[e]]=`calc(100% - ${r(e)}px)`:t[e]=0),n!=="center"?s?t[l[n]]=`calc(100% - ${r(n)}px)`:t[n]=0:(e==="center"?t.top=t.left="50%":t[{top:"left",bottom:"left",left:"top",right:"top"}[e]]="50%",t.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[e]),t})}}export{y as m,x as u};
