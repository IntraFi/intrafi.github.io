import{g as T}from"./preact.module.dOkjm3yY.js";import{p as E}from"./hooks.module.obzsRR2F.js";import{u as g}from"./jsxRuntime.module.Jvx7hqTl.js";const a=64,w=a+16,y=a-1,b=({isSection:r=!1})=>(E(()=>{const m=document.querySelectorAll(`.anchorContent :is(${r?"section":"h1, h2, h3, h4, h5, h6"})`),i=Array.from(m).map(e=>document.getElementById(e.getAttribute("id")||"")).filter(e=>e!=null);function u(e){const t=e.getBoundingClientRect();return r?t.top>=0||t.bottom-a>=0:t.top>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)}function s(e){const t=document.querySelectorAll(".anchorGroup a.tocAnchorLinks");let o;t.forEach(n=>{n.querySelector("span")?.classList.add("opacity-40"),n.classList.remove("text-primary"),n.hash.replace("#","")===e&&(o=n)}),o!==void 0&&(o.classList.add("text-primary"),o.querySelector("span")?.classList.remove("opacity-40"))}function h(){if(!i.some(t=>{const o=u(t);return o&&s(t.id),o})){let t;i.forEach(o=>{const n=o.getBoundingClientRect();(t===void 0||n.bottom<0&&t.rectBottom<n.bottom)&&(t={id:o.id,rectBottom:n.bottom})}),t!==void 0&&s(t.id)}}function f(){window.location.hash!==""?i.some(e=>{const t=window.location.hash.replace("#","")===e.id;return t&&s(e.id),t}):h()}function p(){document.querySelectorAll(".tocAnchorLinks").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const o=e.hash;if(!i.some(l=>o.replace("#","")===l.id))return;const d=document.querySelector(`.anchorContent ${o}`);if(d){const l=d.offsetTop;window.scrollTo({top:l-(r?y:w),behavior:"smooth"}),history.replaceState({},document.title,window.location.pathname+window.location.search+o);const c=document.getElementById("layout-sidebar");c&&c.checked&&c.click()}})})}function S(){let e;window.addEventListener("scroll",()=>{e!==void 0&&clearTimeout(e),e=setTimeout(()=>h(),100)})}f(),p(),S()},[]),g(T,{}));export{b as default};
