if(!self.define){let e,n={};const o=(o,t)=>(o=new URL(o+".js",t).href,n[o]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=n,document.head.appendChild(e)}else e=o,importScripts(o),n()})).then((()=>{let e=n[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(t,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let f={};const i=e=>o(e,r),l={module:{uri:r},exports:f,require:i};n[r]=Promise.all(t.map((e=>l[e]||i(e)))).then((e=>(s(...e),f)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-notes"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/alenotes-frontend/css/app.158fa881.css",revision:null},{url:"/alenotes-frontend/fonts/JetBrainsMono-Bold.b1d3835c.ttf",revision:null},{url:"/alenotes-frontend/fonts/JetBrainsMono-Bold.ttf",revision:"8658ffe39dbfa1c12436789a50212180"},{url:"/alenotes-frontend/fonts/JetBrainsMono-Light.5d95308b.ttf",revision:null},{url:"/alenotes-frontend/fonts/JetBrainsMono-Light.ttf",revision:"5f68b90fb3ae2b26792475f2e92f966a"},{url:"/alenotes-frontend/fonts/JetBrainsMono-Regular.d01d422c.ttf",revision:null},{url:"/alenotes-frontend/fonts/JetBrainsMono-Regular.ttf",revision:"d09f65145228b709a10fa0a06d522d89"},{url:"/alenotes-frontend/index.html",revision:"540f51b6a080ff006307a0002120ff26"},{url:"/alenotes-frontend/js/app.a2e15e5c.js",revision:null},{url:"/alenotes-frontend/js/chunk-vendors.2b472ec0.js",revision:null},{url:"/alenotes-frontend/manifest.json",revision:"c3bb47f34ae88a80a86d4412269b5584"},{url:"/alenotes-frontend/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map