/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e={
/***/65419(e,n,s){
/* harmony import */var t,r=s(51609);
/* harmony import */function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var s=arguments[n];for(var t in s)({}).hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e},o.apply(null,arguments)}
/* harmony default export */const i=function(e){
return r.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},e),t||(t=r.createElement("path",{fill:"#00594F",fillRule:"evenodd",d:"M16.5 9.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0M10 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4.75 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5",clipRule:"evenodd"})))};
/* harmony export */s.d(n,[
/* harmony export */"A",0,i
/* harmony export */])},
/***/12417(e,n,s){
/* harmony export */s.d(n,{
/* harmony export */A:()=>/* binding */r
/* harmony export */});
/* harmony import */var t=s(86087),r=(0,t.forwardRef)(({icon:e,size:n=24,...s},r)=>(0,t.cloneElement)(e,{width:n,height:n,...s,ref:r}));
/* harmony import */},
/***/96516(e,n,s){
/* harmony export */s.d(n,[
/* harmony export */"h",0,(e="")=>{const{upsellUrl:n}=window.sensei_admin,s=new URL(n);return s.searchParams.set("utm_source","plugin_sensei"),s.searchParams.set("utm_medium","upsell"),s.searchParams.set("utm_campaign",e),s.toString()}])},
/***/51609(e){e.exports=window.React;
/***/},
/***/10790(e){e.exports=window.ReactJSXRuntime;
/***/},
/***/56427(e){e.exports=window.wp.components;
/***/},
/***/29491(e){e.exports=window.wp.compose;
/***/},
/***/86087(e){e.exports=window.wp.element;
/***/},
/***/52619(e){e.exports=window.wp.hooks;
/***/},
/***/27723(e){e.exports=window.wp.i18n;
/***/}
/******/};
/************************************************************************/
/******/ // The module cache
/******/const n={};
/******/
/******/ // The require function
/******/function s(t){
/******/ // Check if module is in cache
/******/const r=n[t];
/******/if(void 0!==r)
/******/return r.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/const o=n[t]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[t](o,o.exports,s),o.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/s.n=e=>{
/******/const n=e&&e.__esModule?
/******/()=>e.default:
/******/()=>e;
/******/
/******/return s.d(n,{a:n}),n;
/******/},
/******/
/******/ /* webpack/runtime/define property getters */
/******/ // define getter/value functions for harmony exports
/******/s.d=(e,n)=>{
/******/if(Array.isArray(n))
/******/for(
/******/var t=0;t<n.length;){
/******/var r=n[t++],o=n[t++],i=0===o?{enumerable:!0,value:n[t++]}:{enumerable:!0,get:o};
/******/
/******/s.o(e,r)||Object.defineProperty(e,r,i)
/******/}
/******/else
/******/for(var r in n)
/******/s.o(n,r)&&!s.o(e,r)&&
/******/Object.defineProperty(e,r,{enumerable:!0,get:n[r]})
/******/;
/******/
/******/},
/******/
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/s.o=(e,n)=>Object.hasOwn(e,n);
/* unused harmony export addQuestionGeneratorUpsellButtonToQuizBlock */
/* harmony import */var t=s(56427),r=s(27723),o=s(52619),i=s(29491),a=s(12417),l=s(65419),c=s(96516),d=s(10790);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
const u=e=>n=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.Fill,{name:"SenseiQuizHeader",children:(0,d.jsxs)(t.Button,{variant:"secondary",className:"sensei-pro-ai-generate-questions-button upsell",onClick:()=>{window.open((0,c/* .getSenseiProUpsellUrl */.h)("question-ai"),"_blank")},children:[(0,d.jsxs)("div",{className:"button-text-content",children:[(0/* ["default"] */,d.jsx)(a.A,{icon:(0/* ["default"] */,d.jsx)(l.A,{})}),(0,r.__)("Generate quiz questions with AI","sensei-lms")]}),(0,d.jsx)("span",{className:"awaiting-mod sensei-upsell-pro-badge",children:(0,r.__)("Pro","sensei-lms")})]})}),(0,d.jsx)(e,{...n})]});(0,o.addFilter)("blocks.registerBlockType","sensei-lms/with-chat-gpt-question-generator",e=>"sensei-lms/quiz"!==e.name?e:{...e,edit:(0,i.compose)(u)(e.edit)})})();