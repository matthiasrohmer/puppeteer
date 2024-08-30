/*! For license information please see 5d4e6556.d9ba2f7e.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2123],{10372:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=n(74848),a=n(28453);const s={sidebar_label:"Frame.name"},i="Frame.name() method",o={id:"api/puppeteer.frame.name",title:"Frame.name() method",description:"Warning: This API is now obsolete.",source:"@site/versioned_docs/version-23.2.1/api/puppeteer.frame.name.md",sourceDirName:"api",slug:"/api/puppeteer.frame.name",permalink:"/api/puppeteer.frame.name",draft:!1,unlisted:!1,tags:[],version:"23.2.1",frontMatter:{sidebar_label:"Frame.name"},sidebar:"api",previous:{title:"Frame.locator",permalink:"/api/puppeteer.frame.locator"},next:{title:"Frame.page",permalink:"/api/puppeteer.frame.page"}},l={},c=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2}];function p(e){const r={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"framename-method",children:"Frame.name() method"})}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Warning: This API is now obsolete."}),"\n",(0,t.jsx)(r.p,{children:"Use"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"const element = await frame.frameElement();\nconst nameOrId = await element.evaluate(frame => frame.name ?? frame.id);\n"})}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["The frame's ",(0,t.jsx)(r.code,{children:"name"})," attribute as specified in the tag."]}),"\n",(0,t.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"class Frame {\n  name(): string;\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(r.p,{children:"string"}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsx)(r.p,{children:"This value is calculated once when the frame is created, and will not update if the attribute is changed later."})]})}function m(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},21020:(e,r,n)=>{var t=n(96540),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var t,s={},c=null,p=null;for(t in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(p=r.ref),r)i.call(r,t)&&!l.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:a,type:e,key:c,ref:p,props:s,_owner:o.current}}r.Fragment=s,r.jsx=c,r.jsxs=c},74848:(e,r,n)=>{e.exports=n(21020)},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var t=n(96540);const a={},s=t.createContext(a);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);