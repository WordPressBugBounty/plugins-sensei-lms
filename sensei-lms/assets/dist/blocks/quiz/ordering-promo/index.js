/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e={
/***/96516(e,s,r){
/* harmony export */r.d(s,[
/* harmony export */"h",0,(e="")=>{const{upsellUrl:s}=window.sensei_admin,r=new URL(s);return r.searchParams.set("utm_source","plugin_sensei"),r.searchParams.set("utm_medium","upsell"),r.searchParams.set("utm_campaign",e),r.toString()}])},
/***/10790(e){e.exports=window.ReactJSXRuntime;
/***/},
/***/56427(e){e.exports=window.wp.components;
/***/},
/***/52619(e){e.exports=window.wp.hooks;
/***/},
/***/27723(e){e.exports=window.wp.i18n;
/***/}
/******/};
/************************************************************************/
/******/ // The module cache
/******/const s={};
/******/
/******/ // The require function
/******/function r(n){
/******/ // Check if module is in cache
/******/const i=s[n];
/******/if(void 0!==i)
/******/return i.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/const o=s[n]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[n](o,o.exports,r),o.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/r.n=e=>{
/******/const s=e&&e.__esModule?
/******/()=>e.default:
/******/()=>e;
/******/
/******/return r.d(s,{a:s}),s;
/******/},
/******/
/******/ /* webpack/runtime/define property getters */
/******/ // define getter/value functions for harmony exports
/******/r.d=(e,s)=>{
/******/if(Array.isArray(s))
/******/for(
/******/var n=0;n<s.length;){
/******/var i=s[n++],o=s[n++],t=0===o?{enumerable:!0,value:s[n++]}:{enumerable:!0,get:o};
/******/
/******/r.o(e,i)||Object.defineProperty(e,i,t)
/******/}
/******/else
/******/for(var i in s)
/******/r.o(s,i)&&!r.o(e,i)&&
/******/Object.defineProperty(e,i,{enumerable:!0,get:s[i]})
/******/;
/******/
/******/},
/******/
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/r.o=(e,s)=>Object.hasOwn(e,s);
/* harmony import */var n=r(27723),i=r(52619),o=r(56427),t=r(96516),l=r(10790);
/* harmony import */(0,i.addFilter)("senseiQuestionTypeToolbarOptions","sensei-lms/ordering-promo",
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
function(e){return e.push({title:(0,n.__)("Ordering","sensei-lms"),description:(0,n.__)("Place the answers in the correct order.","sensei-lms"),label:(0,n.__)("Ordering","sensei-lms"),value:"ordering",disabled:!0}),e}),(0,i.addFilter)("senseiQuestionTypeToolbarOptionChildren","sensei-lms/ordering-promo",function(e,s){return"ordering"!==s.value?e:(0,l.jsxs)("div",{className:"sensei-lms-question-block__type-selector__option__container--disabled",children:[(0,l.jsxs)("strong",{children:[" ",s.title]}),(0,l.jsx)("div",{className:"sensei-lms-question-block__type-selector__option__description sensei-lms-question-block__type-selector__option__description--disabled",children:s.description}),(0,l.jsx)(o.ExternalLink,{href:(0,t/* .getSenseiProUpsellUrl */.h)("quiz_ordering_question_type"),children:(0,n.__)("Upgrade to Sensei Pro","sensei-lms")})]})})})();