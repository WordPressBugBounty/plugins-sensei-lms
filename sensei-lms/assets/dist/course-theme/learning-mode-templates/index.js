/******/(()=>{// webpackBootstrap
/******/var e={
/***/24206(e,t,s){"use strict";const n=window.sensei?.learningModeTemplateSetting||{},r=n.value,i=n.name,l=n.options,a=n.customizeUrl,o=n.formId,c=n.section;
/* harmony export */s.d(t,[
/* harmony export */"HJ",0,/* binding */c,
/* harmony export */"Us",0,/* binding */r,
/* harmony export */"du",0,/* binding */a,
/* harmony export */"eV",0,/* binding */o,
/* harmony export */"kT",0,/* binding */l,
/* harmony export */"yu",0,/* binding */i
/* harmony export */])},
/***/64778(e,t,s){"use strict";
/* harmony import */var n=s(86087),r=s(27723),i=s(56427),l=s(24206),a=s(10790);
/* harmony import */
/* harmony export */s.d(t,[
/* harmony export */"u",0,e=>{const{upsell:t,name:s,isActive:o}=e,c=(0,n.useCallback)(()=>{const e=document.querySelector(`#${l/* .formId */.eV} input[name="_wp_http_referer"]`),t=e.getAttribute("value");e.setAttribute("value",`${t}#${l/* .tabId */.HJ}`)},[]);
// Update the _wp_http_referer so it opens the current settings
// tab after page refresh.
return(0,a.jsxs)(a.Fragment,{children:[t&&(0,a.jsx)(i.Button,{isPrimary:!0,href:t.url,target:"_blank",children:t.title}),!o&&!t&&(0,a.jsx)(i.Button,{isPrimary:!0,type:"submit",value:s,name:l/* .inputName */.yu,form:l/* .formId */.eV,onClick:c,children:(0,r.__)("Activate","sensei-lms")}),o&&(0,a.jsx)(i.Button,{isPrimary:!0,href:l/* .customizeUrl */.du,children:(0,r.__)("Customize","sensei-lms")})]})}])},
/***/48583(e,t,s){"use strict";
/* harmony import */var n=s(4452),r=s.n(n),i=s(27723),l=s(70728),a=s(64778),o=s(10790);
/* harmony import */
/* harmony export */s.d(t,[
/* harmony export */"H",0,e=>{const{title:t,isActive:s,upsell:n}=e;
return(0,o.jsxs)("div",{className:r()({"sensei-lm-template-option__footer":!0,"sensei-lm-template-option__footer--active":s}),children:[(0/* .TemplateOptionTitle */,o.jsx)(l._,{isActive:s,tag:s?t:n?.tag,children:s?(0,i.__)("Active","sensei-lms"):t}),(0,o.jsx)("div",{className:"sensei-lm-template-option__actions",children:(0/* .TemplateActions */,o.jsx)(a.u,{...e})})]})}])},
/***/79738(e,t,s){"use strict";
/* harmony import */var n=s(27723),r=s(10790);
/* harmony import */
/* harmony export */s.d(t,[
/* harmony export */"u",0,({title:e,url:t,onPreview:s})=>(0,r.jsxs)("div",{className:"sensei-lm-template-option__thumbnail",onKeyPress:s,onClick:s,tabIndex:"0",role:"option",title:e,children:[(0,r.jsx)("img",{alt:e,src:t}),(0,r.jsx)("div",{className:"sensei-lm-template-option__preview",children:(0,r.jsx)("h4",{className:"sensei-lm-template-option__preview-title",children:(0,n.__)("Preview","sensei-lms")})})]})])},
/***/70728(e,t,s){"use strict";
/* harmony import */var n=s(4452),r=s.n(n),i=s(10790);
/* harmony import */
/* harmony export */s.d(t,[
/* harmony export */"_",0,({children:e,isActive:t,tag:s=""})=>(0,i.jsxs)("h4",{className:r()({"sensei-lm-template-option__title":!0,"sensei-lm-template-option__title--active":t}),children:[e,s&&(0,i.jsxs)(i.Fragment,{children:[": ",(0,i.jsx)("span",{className:"sensei-lm-template-option__title-tag",children:s})]})]})])},
/***/90907(e,t,s){"use strict";
/* harmony import */var n=s(86087),r=s(48583),i=s(79738),l=s(10790);
/* harmony import */
/* harmony export */s.d(t,[
/* harmony export */"Y",0,e=>{const{name:t,title:s,screenshots:a,onPreview:o}=e,c=(0,n.useCallback)(()=>o(t),[o,t]);
return(0,l.jsxs)("li",{className:"sensei-lm-template-option__container",children:[(0/* .TemplateOptionThumbnail */,l.jsx)(i.u,{title:s,url:a.thumbnail,onPreview:c}),(0/* .TemplateOptionFooter */,l.jsx)(r.H,{...e})]})}])},
/***/58009(e,t,s){"use strict";
/* harmony import */var n=s(56427),r=s(27723),i=s(64778),l=s(10790);
/* harmony import */
/* harmony export */s.d(t,[
/* harmony export */"p",0,e=>{const{onClose:t,title:s,screenshots:a}=e;
return(0,l.jsx)(n.Modal,{onRequestClose:t,title:(0,r.sprintf)((0,r.__)("Preview %1$s","sensei-lms"),s),className:"sensei-lm-template-preview__modal",children:(0,l.jsxs)("div",{className:"sensei-lm-template-preview__container",children:[(0,l.jsx)("div",{className:"sensei-lm-template-preview__img",children:(0,l.jsx)("img",{alt:s,src:a.full})}),(0,l.jsxs)("div",{className:"sensei-lm-template-preview__footer",children:[(0,l.jsx)(n.Button,{className:"sensei-lm-template-preview__cancel-btn",onClick:t,variant:"tertiary",children:(0,r.__)("Cancel","sensei-lms")}),(0/* .TemplateActions */,l.jsx)(i.u,{...e})]})]})})}])},
/***/55284(e,t,s){"use strict";
/* harmony import */var n=s(86087),r=s(24206),i=s(90907),l=s(58009),a=s(51609),o=s(10790);
/* harmony import */
/* harmony export */s.d(t,[
/* harmony export */"U",0,()=>{const[e,t]=(0,n.useState)(null),s=r/* .templates */.kT[e]||{},c=(0,n.useCallback)(e=>t(e),[]),u=(0,n.useCallback)(()=>t(null),[]);
return(0,o.jsxs)(o.Fragment,{children:[Object.keys(r/* .templates */.kT).map(e=>{const t=r/* .templates */.kT[e];
return(0/* .TemplateOption */,a.createElement)(i.Y,{...t,key:t.name,isActive:r/* .activeTemplateName */.Us===t.name,onPreview:c})}),e&&(0/* .TemplatePreview */,o.jsx)(l.p,{...s,onClose:u,isActive:r/* .activeTemplateName */.Us===s.name})]})}])},
/***/51609(e){"use strict";e.exports=window.React},
/***/10790(e){"use strict";e.exports=window.ReactJSXRuntime},
/***/56427(e){"use strict";e.exports=window.wp.components},
/***/86087(e){"use strict";e.exports=window.wp.element},
/***/27723(e){"use strict";e.exports=window.wp.i18n},
/***/4452(e,t){var s;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var s=arguments[t];s&&(e=l(e,i(s)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var s in e)n.call(e,s)&&e[s]&&(t=l(t,s));return t}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(s=function(){return r}.apply(t,[]))||(e.exports=s)}()}
/******/};
/************************************************************************/
/******/ // The module cache
/******/const t={};
/******/
/******/ // The require function
/******/function s(n){
/******/ // Check if module is in cache
/******/const r=t[n];
/******/if(void 0!==r)
/******/return r.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/const i=t[n]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[n](i,i.exports,s),i.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/s.n=e=>{
/******/const t=e&&e.__esModule?
/******/()=>e.default:
/******/()=>e;
/******/
/******/return s.d(t,{a:t}),t;
/******/},
/******/
/******/ /* webpack/runtime/define property getters */
/******/ // define getter/value functions for harmony exports
/******/s.d=(e,t)=>{
/******/if(Array.isArray(t))
/******/for(
/******/var n=0;n<t.length;){
/******/var r=t[n++],i=t[n++],l=0===i?{enumerable:!0,value:t[n++]}:{enumerable:!0,get:i};
/******/
/******/s.o(e,r)||Object.defineProperty(e,r,l)
/******/}
/******/else
/******/for(var r in t)
/******/s.o(t,r)&&!s.o(e,r)&&
/******/Object.defineProperty(e,r,{enumerable:!0,get:t[r]})
/******/;
/******/
/******/},
/******/
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/s.o=(e,t)=>Object.hasOwn(e,t),
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(()=>{"use strict";
/* harmony import */var e=s(86087),t=s(55284),n=s(10790);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
const r=document.getElementById("sensei-lm-block-template__options");r&&(0,e.createRoot)(r).render((0/* .TemplateSelector */,n.jsx)(t.U,{}))})()})();