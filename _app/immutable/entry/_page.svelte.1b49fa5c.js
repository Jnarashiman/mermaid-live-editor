import{S as n,i as s,s as i,o as l}from"../chunks/index.787ce9b5.js";import{h as a}from"../chunks/singletons.2194a2f6.js";import{b as r}from"../chunks/paths.43914ff1.js";a.disable_scroll_handling;const c=a.goto;a.invalidate;a.invalidateAll;a.preload_data;a.preload_code;a.before_navigate;a.after_navigate;function d(o){return l(async()=>{const t=window.location.hash.split("/");let e="edit";t.length>2&&(e=`${t[1]}#${t[2]}`),await c(`${r}/${e}`,{replaceState:!0})}),[]}class h extends n{constructor(t){super(),s(this,t,d,null,i,{})}}export{h as default};
