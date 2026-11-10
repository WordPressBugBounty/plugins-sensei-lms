/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e={
/***/96516(e,s,n){
/* harmony export */n.d(s,[
/* harmony export */"h",0,(e="")=>{const{upsellUrl:s}=window.sensei_admin;return`${s}?${new URLSearchParams({utm_source:"plugin_sensei",utm_medium:"upsell",utm_campaign:e}).toString()}`}])},
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
/******/function n(r){
/******/ // Check if module is in cache
/******/const i=s[r];
/******/if(void 0!==i)
/******/return i.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/const o=s[r]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[r](o,o.exports,n),o.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/n.n=e=>{
/******/const s=e&&e.__esModule?
/******/()=>e.default:
/******/()=>e;
/******/
/******/return n.d(s,{a:s}),s;
/******/},
/******/
/******/ /* webpack/runtime/define property getters */
/******/ // define getter/value functions for harmony exports
/******/n.d=(e,s)=>{
/******/if(Array.isArray(s))
/******/for(
/******/var r=0;r<s.length;){
/******/var i=s[r++],o=s[r++],t=0===o?{enumerable:!0,value:s[r++]}:{enumerable:!0,get:o};
/******/
/******/n.o(e,i)||Object.defineProperty(e,i,t)
/******/}
/******/else
/******/for(var i in s)
/******/n.o(s,i)&&!n.o(e,i)&&
/******/Object.defineProperty(e,i,{enumerable:!0,get:s[i]})
/******/;
/******/
/******/},
/******/
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/n.o=(e,s)=>Object.hasOwn(e,s);
/* harmony import */var r=n(27723),i=n(52619),o=n(56427),t=n(96516),l=n(10790);
/* harmony import */(0,i.addFilter)("senseiQuestionTypeToolbarOptions","sensei-lms/ordering-promo",
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
function(e){return e.push({title:(0,r.__)("Ordering","sensei-lms"),description:(0,r.__)("Place the answers in the correct order.","sensei-lms"),label:(0,r.__)("Ordering","sensei-lms"),value:"ordering",disabled:!0}),e}),(0,i.addFilter)("senseiQuestionTypeToolbarOptionChildren","sensei-lms/ordering-promo",function(e,s){return"ordering"!==s.value?e:(0,l.jsxs)("div",{className:"sensei-lms-question-block__type-selector__option__container--disabled",children:[(0,l.jsxs)("strong",{children:[" ",s.title]}),(0,l.jsx)("div",{className:"sensei-lms-question-block__type-selector__option__description sensei-lms-question-block__type-selector__option__description--disabled",children:s.description}),(0,l.jsx)(o.ExternalLink,{href:(0,t/* .getSenseiProUpsellUrl */.h)("quiz_ordering_question_type"),children:(0,r.__)("Upgrade to Sensei Pro","sensei-lms")})]})})})();