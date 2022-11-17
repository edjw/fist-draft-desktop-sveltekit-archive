import{g as n,c as i,b as c,e as t}from"../../chunks/index.js";const b=()=>{const e=n("__svelte__"),r={page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated};return Object.defineProperties(r,{preloading:{get(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},enumerable:!1},session:{get(){return g(),{}},enumerable:!1}}),r},u={subscribe(e){return b().page.subscribe(e)}};function g(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}const d=i((e,r,p,l)=>{let s,o;return o=c(u,a=>s=a),o(),`<h1>${t(s.status)}</h1>

<pre>${t(s.error.message)}</pre>



${s.error.frame?`<pre>${t(s.error.frame)}</pre>`:""}
${s.error.stack?`<pre>${t(s.error.stack)}</pre>`:""}`});export{d as default};
