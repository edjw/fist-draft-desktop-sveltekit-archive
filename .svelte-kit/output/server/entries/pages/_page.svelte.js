import{c as t,d as i,e as v,v as $}from"../../chunks/index.js";import"@tauri-apps/api/tauri";const n=t((e,s,a,o)=>{let r="",l="";return`<div><div class="row"><input id="greet-input" placeholder="Enter a name..."${i("value",r,0)}>
    <button>Greet </button></div>
  <p>${v(l)}</p></div>`});const d={code:".logo.vite.svelte-8riyuw:hover{filter:drop-shadow(0 0 2em #747bff)}.logo.svelte.svelte-8riyuw:hover{filter:drop-shadow(0 0 2em #ff3e00)}",map:null},c=t((e,s,a,o)=>(e.css.add(d),`<h1>Welcome to Tauri!</h1>

<div class="row"><a href="https://vitejs.dev" target="_blank"><img src="/vite.svg" class="logo vite svelte-8riyuw" alt="Vite Logo"></a>
  <a href="https://tauri.app" target="_blank"><img src="/tauri.svg" class="logo tauri" alt="Tauri Logo"></a>
  <a href="https://kit.svelte.dev" target="_blank"><img src="/svelte.svg" class="logo svelte svelte-8riyuw" alt="Svelte Logo"></a></div>

<p>Click on the Tauri, Vite, and Svelte logos to learn more.</p>

<div class="row">${$(n,"Greet").$$render(e,{},{},{})}
</div>`));export{c as default};
