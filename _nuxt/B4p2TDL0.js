import{K as r}from"./B6w2PrMr.js";const l=["top","bottom"],s=["start","end","left","right"];function a(t,e){let[i,n]=t.split(" ");return n||(n=r(l,i)?"start":r(s,i)?"top":"center"),{side:o(i,e),align:o(n,e)}}function o(t,e){return t==="start"?e?"right":"left":t==="end"?e?"left":"right":t}function g(t){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[t.side],align:t.align}}function u(t){return{side:t.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[t.align]}}function c(t){return{side:t.align,align:t.side}}function p(t){return r(l,t.side)?"y":"x"}export{u as a,c as b,g as f,p as g,a as p,o as t};
