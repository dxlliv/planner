import{t as f,Z as m}from"./toyJVOOD.js";import{j as p}from"./CK7iLweF.js";import{p as u}from"./Cfm-9vfM.js";const l={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},y=f({location:String},"location");function x(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=arguments.length>2?arguments[2]:void 0;const{isRtl:i}=m();return{locationStyles:p(()=>{if(!o.location)return{};const{side:e,align:n}=u(o.location.split(" ").length>1?o.location:`${o.location} center`,i.value);function s(c){return r?r(c):0}const t={};return e!=="center"&&(a?t[l[e]]=`calc(100% - ${s(e)}px)`:t[e]=0),n!=="center"?a?t[l[n]]=`calc(100% - ${s(n)}px)`:t[n]=0:(e==="center"?t.top=t.left="50%":t[{top:"left",bottom:"left",left:"top",right:"top"}[e]]="50%",t.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[e]),t})}}export{y as m,x as u};
