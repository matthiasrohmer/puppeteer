/*! For license information please see 119e08be.5bea45af.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73272],{46256:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var t=s(74848),o=s(28453);const n={sidebar_label:"BrowserContext.clearPermissionOverrides"},i="BrowserContext.clearPermissionOverrides() method",a={id:"api/puppeteer.browsercontext.clearpermissionoverrides",title:"BrowserContext.clearPermissionOverrides() method",description:"Clears all permission overrides for this browser context.",source:"@site/versioned_docs/version-23.2.1/api/puppeteer.browsercontext.clearpermissionoverrides.md",sourceDirName:"api",slug:"/api/puppeteer.browsercontext.clearpermissionoverrides",permalink:"/api/puppeteer.browsercontext.clearpermissionoverrides",draft:!1,unlisted:!1,tags:[],version:"23.2.1",frontMatter:{sidebar_label:"BrowserContext.clearPermissionOverrides"},sidebar:"api",previous:{title:"BrowserContext.browser",permalink:"/api/puppeteer.browsercontext.browser"},next:{title:"BrowserContext.close",permalink:"/api/puppeteer.browsercontext.close"}},c={},l=[{value:"Signature",id:"signature",level:3},{value:"Example",id:"example",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"browsercontextclearpermissionoverrides-method",children:"BrowserContext.clearPermissionOverrides() method"})}),"\n",(0,t.jsxs)(r.p,{children:["Clears all permission overrides for this ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"class BrowserContext {\n  abstract clearPermissionOverrides(): Promise<void>;\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(r.p,{children:["Clearing overridden permissions in the ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.defaultbrowsercontext",children:"default browser context"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"const context = browser.defaultBrowserContext();\ncontext.overridePermissions('https://example.com', ['clipboard-read']);\n// do stuff ..\ncontext.clearPermissionOverrides();\n"})})]})}function d(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},21020:(e,r,s)=>{var t=s(96540),o=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,s){var t,n={},l=null,p=null;for(t in void 0!==s&&(l=""+s),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(p=r.ref),r)i.call(r,t)&&!c.hasOwnProperty(t)&&(n[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===n[t]&&(n[t]=r[t]);return{$$typeof:o,type:e,key:l,ref:p,props:n,_owner:a.current}}r.Fragment=n,r.jsx=l,r.jsxs=l},74848:(e,r,s)=>{e.exports=s(21020)},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>a});var t=s(96540);const o={},n=t.createContext(o);function i(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);