const A=document.getElementsByTagName("main")[0],y=document.getElementsByClassName("idioma-espanyol")[0],b=document.getElementsByClassName("idioma-ingles")[0];y.addEventListener("click",()=>{y.className.includes("idioma-seleccionado")||(b.className=b.className.replace("idioma-seleccionado",""),y.className=y.className+" idioma-seleccionado",A.className=A.className.replace("ingles","espanyol"))});b.addEventListener("click",()=>{b.className.includes("idioma-seleccionado")||(y.className=y.className.replace("idioma-seleccionado",""),b.className=b.className+" idioma-seleccionado",A.className=A.className.replace("espanyol","ingles"))});const v="data-astro-transition-persist";function ee(e){for(const t of document.scripts)for(const n of e.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!t.src&&t.textContent===n.textContent||t.src&&t.type===n.type&&t.src===n.src)){n.dataset.astroExec="";break}}function te(e){const t=document.documentElement,n=[...t.attributes].filter(({name:o})=>(t.removeAttribute(o),o.startsWith("data-astro-")));[...e.documentElement.attributes,...n].forEach(({name:o,value:r})=>t.setAttribute(o,r))}function ne(e){for(const t of Array.from(document.head.children)){const n=ie(t,e);n?n.remove():t.remove()}document.head.append(...e.head.children)}function oe(e,t){t.replaceWith(e);for(const n of t.querySelectorAll(`[${v}]`)){const o=n.getAttribute(v),r=e.querySelector(`[${v}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&se(n)&&!ae(n,r)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const re=()=>{const e=document.activeElement;if(e?.closest(`[${v}]`)){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const t=e.selectionStart,n=e.selectionEnd;return()=>P({activeElement:e,start:t,end:n})}return()=>P({activeElement:e})}else return()=>P({activeElement:null})},P=({activeElement:e,start:t,end:n})=>{e&&(e.focus(),(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&(typeof t=="number"&&(e.selectionStart=t),typeof n=="number"&&(e.selectionEnd=n)))},ie=(e,t)=>{const n=e.getAttribute(v),o=n&&t.head.querySelector(`[${v}="${n}"]`);if(o)return o;if(e.matches("link[rel=stylesheet]")){const r=e.getAttribute("href");return t.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},se=e=>{const t=e.dataset.astroTransitionPersistProps;return t==null||t==="false"},ae=(e,t)=>e.getAttribute("props")===t.getAttribute("props"),ce=e=>{ee(e),te(e),ne(e);const t=re();oe(e.body,document.body),t()},le="astro:before-preparation",ue="astro:after-preparation",de="astro:before-swap",fe="astro:after-swap",me=e=>document.dispatchEvent(new Event(e));class U extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(t,n,o,r,s,u,a,l,d,c){super(t,n),this.from=o,this.to=r,this.direction=s,this.navigationType=u,this.sourceElement=a,this.info=l,this.newDocument=d,this.signal=c,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class he extends U{formData;loader;constructor(t,n,o,r,s,u,a,l,d,c){super(le,{cancelable:!0},t,n,o,r,s,u,a,l),this.formData=d,this.loader=c.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class pe extends U{direction;viewTransition;swap;constructor(t,n){super(de,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument,t.signal),this.direction=t.direction,this.viewTransition=n,this.swap=()=>ce(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function ge(e,t,n,o,r,s,u,a,l){const d=new he(e,t,n,o,r,s,window.document,u,a,l);return document.dispatchEvent(d)&&(await d.loader(),d.defaultPrevented||(me(ue),d.navigationType!=="traverse"&&I({scrollX,scrollY}))),d}function we(e,t){const n=new pe(e,t);return document.dispatchEvent(n),n.swap(),n}const ye=history.pushState.bind(history),S=history.replaceState.bind(history),I=e=>{history.state&&(history.scrollRestoration="manual",S({...history.state,...e},""))},H=!!document.startViewTransition,M=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),V=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let f,g,R;const W=e=>document.dispatchEvent(new Event(e)),j=()=>W("astro:page-load"),be=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},C="data-astro-transition-persist",F="data-astro-transition",D="data-astro-transition-fallback";let X,T=0;history.state?(T=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):M()&&(S({index:T,scrollX,scrollY},""),history.scrollRestoration="manual");async function ve(e,t){try{const n=await fetch(e,t),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function K(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function Te(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const s=new Promise(u=>{o.onload=o.onerror=u});e=e.then(()=>s)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const G=(e,t,n,o,r)=>{const s=V(t,e),u=document.title;document.title=o;let a=!1;if(e.href!==location.href&&!r)if(n.history==="replace"){const l=history.state;S({...n.state,index:l.index,scrollX:l.scrollX,scrollY:l.scrollY},"",e.href)}else ye({...n.state,index:++T,scrollX:0,scrollY:0},"",e.href);if(document.title=u,R=e,s||(scrollTo({left:0,top:0,behavior:"instant"}),a=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const l=history.state;location.href=e.href,history.state||(S(l,""),s&&window.dispatchEvent(new PopStateEvent("popstate")))}else a||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function Ee(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${C}="${n.getAttribute(C)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(s=>o.addEventListener(s,r)),document.head.append(o)}))}return t}async function Y(e,t,n,o,r){async function s(l){function d(h){const m=h.effect;return!m||!(m instanceof KeyframeEffect)||!m.target?!1:window.getComputedStyle(m.target,m.pseudoElement).animationIterationCount==="infinite"}const c=document.getAnimations();document.documentElement.setAttribute(D,l);const p=document.getAnimations().filter(h=>!c.includes(h)&&!d(h));return Promise.allSettled(p.map(h=>h.finished))}if(r==="animate"&&!n.transitionSkipped&&!e.signal.aborted)try{await s("old")}catch{}const u=document.title,a=we(e,n.viewTransition);G(a.to,a.from,t,u,o),W(fe),r==="animate"&&(!n.transitionSkipped&&!a.signal.aborted?s("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function Ae(){return f?.controller.abort(),f={controller:new AbortController}}async function z(e,t,n,o,r){const s=Ae();if(!M()||location.origin!==n.origin){s===f&&(f=void 0),location.href=n.href;return}const u=r?"traverse":o.history==="replace"?"replace":"push";if(u!=="traverse"&&I({scrollX,scrollY}),V(t,n)&&(e!=="back"&&n.hash||e==="back"&&t.hash)){G(n,t,o,document.title,r),s===f&&(f=void 0);return}const a=await ge(t,n,e,u,o.sourceElement,o.info,s.controller.signal,o.formData,l);if(a.defaultPrevented||a.signal.aborted){s===f&&(f=void 0),a.signal.aborted||(location.href=n.href);return}async function l(i){const p=i.to.href,h={signal:i.signal};if(i.formData){h.method="POST";const w=i.sourceElement instanceof HTMLFormElement?i.sourceElement:i.sourceElement instanceof HTMLElement&&"form"in i.sourceElement?i.sourceElement.form:i.sourceElement?.closest("form");h.body=w?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(i.formData):i.formData}const m=await ve(p,h);if(m===null){i.preventDefault();return}if(m.redirected){const w=new URL(m.redirected);if(w.origin!==i.to.origin){i.preventDefault();return}i.to=w}if(X??=new DOMParser,i.newDocument=X.parseFromString(m.html,m.mediaType),i.newDocument.querySelectorAll("noscript").forEach(w=>w.remove()),!i.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!i.formData){i.preventDefault();return}const k=Ee(i.newDocument);k.length&&!i.signal.aborted&&await Promise.all(k)}async function d(){if(g&&g.viewTransition){try{g.viewTransition.skipTransition()}catch{}try{await g.viewTransition.updateCallbackDone}catch{}}return g={transitionSkipped:!1}}const c=await d();if(a.signal.aborted){s===f&&(f=void 0);return}if(document.documentElement.setAttribute(F,a.direction),H)c.viewTransition=document.startViewTransition(async()=>await Y(a,o,c,r));else{const i=(async()=>{await Promise.resolve(),await Y(a,o,c,r,K())})();c.viewTransition={updateCallbackDone:i,ready:i,finished:new Promise(p=>c.viewTransitionFinished=p),skipTransition:()=>{c.transitionSkipped=!0,document.documentElement.removeAttribute(D)}}}c.viewTransition?.updateCallbackDone.finally(async()=>{await Te(),j(),be()}),c.viewTransition?.finished.finally(()=>{c.viewTransition=void 0,c===g&&(g=void 0),s===f&&(f=void 0),document.documentElement.removeAttribute(F),document.documentElement.removeAttribute(D)});try{await c.viewTransition?.updateCallbackDone}catch(i){const p=i;console.log("[astro]",p.name,p.message,p.stack)}}async function _(e,t){await z("forward",R,new URL(e,location.href),t??{})}function Se(e){if(!M()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>T?"forward":"back";T=n,z(o,R,new URL(location.href),{},t)}const $=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&I({scrollX,scrollY})};{if(H||K()!=="none")if(R=new URL(location.href),addEventListener("popstate",Se),addEventListener("load",j),"onscrollend"in window)addEventListener("scrollend",$);else{let e,t,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(e),e=void 0;return}if(t===scrollY&&n===scrollX){clearInterval(e),e=void 0,$();return}else t=scrollY,n=scrollX};addEventListener("scroll",()=>{e===void 0&&(o=history.state.index,t=scrollY,n=scrollX,e=window.setInterval(r,50))},{passive:!0})}for(const e of document.scripts)e.dataset.astroExec=""}const J=new Set,L=new WeakSet;let x,Q,B=!1;function Le(e){B||(B=!0,x??=e?.prefetchAll,Q??=e?.defaultStrategy??"hover",Re(),Ne(),ke(),De())}function Re(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{E(t.target,"tap")&&N(t.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function Ne(){let e;document.body.addEventListener("focusin",o=>{E(o.target,"hover")&&t(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),O(()=>{for(const o of document.getElementsByTagName("a"))L.has(o)||E(o,"hover")&&(L.add(o),o.addEventListener("mouseenter",t,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function t(o){const r=o.target.href;e&&clearTimeout(e),e=setTimeout(()=>{N(r)},80)}function n(){e&&(clearTimeout(e),e=0)}}function ke(){let e;O(()=>{for(const t of document.getElementsByTagName("a"))L.has(t)||E(t,"viewport")&&(L.add(t),e??=Pe(),e.observe(t))})}function Pe(){const e=new WeakMap;return new IntersectionObserver((t,n)=>{for(const o of t){const r=o.target,s=e.get(r);o.isIntersecting?(s&&clearTimeout(s),e.set(r,setTimeout(()=>{n.unobserve(r),e.delete(r),N(r.href)},300))):s&&(clearTimeout(s),e.delete(r))}})}function De(){O(()=>{for(const e of document.getElementsByTagName("a"))E(e,"load")&&N(e.href)})}function N(e,t){e=e.replace(/#.*/,"");const n=t?.ignoreSlowConnection??!1;if(xe(e,n))if(J.add(e),document.createElement("link").relList?.supports?.("prefetch")&&t?.with!=="fetch"){const o=document.createElement("link");o.rel="prefetch",o.setAttribute("href",e),document.head.append(o)}else fetch(e,{priority:"low"})}function xe(e,t){if(!navigator.onLine||!t&&Z())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!J.has(e)}catch{}return!1}function E(e,t){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:t==="tap"&&(n!=null||x)&&Z()?!0:n==null&&x||n===""?t===Q:n===t}function Z(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function O(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function Ie(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function q(e){return e.dataset.astroReload!==void 0}(H||Ie()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(o,location.href).origin;q(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),_(o,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||q(t))return;const n=t,o=e.submitter,r=new FormData(n,o),s=typeof n.action=="string"?n.action:n.getAttribute("action"),u=typeof n.method=="string"?n.method:n.getAttribute("method");let a=o?.getAttribute("formaction")??s??location.pathname;const l=o?.getAttribute("formmethod")??u??"get";if(l==="dialog"||location.origin!==new URL(a,location.href).origin)return;const d={sourceElement:o??n};if(l==="get"){const c=new URLSearchParams(r),i=new URL(a);i.search=c.toString(),a=i.toString()}else d.formData=r;e.preventDefault(),_(a,d)}),Le({prefetchAll:!0}));
