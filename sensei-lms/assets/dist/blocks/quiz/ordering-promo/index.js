/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e={
/***/96516(e,r,n){
/* harmony export */n.d(r,[
/* harmony export */"h",0,(e="")=>{const{upsellUrl:r}=window.sensei_admin;return`${r}?${new URLSearchParams({utm_source:"plugin_sensei",utm_medium:"upsell",utm_campaign:e}).toString()}`}])},
/***/2192(e,r,n){var o=n(51609),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function _(e,r,n){var o,t={},_=null,a=null;for(o in void 0!==n&&(_=""+n),void 0!==r.key&&(_=""+r.key),void 0!==r.ref&&(a=r.ref),r)i.call(r,o)&&!d.hasOwnProperty(o)&&(t[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===t[o]&&(t[o]=r[o]);return{$$typeof:s,type:e,key:_,ref:a,props:t,_owner:l.current}}r.jsx=_,r.jsxs=_},
/***/62540(e,r,n){e.exports=n(2192)},
/***/51609(e){e.exports=window.React;
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
/******/const r={};
/******/
/******/ // The require function
/******/function n(o){
/******/ // Check if module is in cache
/******/const s=r[o];
/******/if(void 0!==s)
/******/return s.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/const t=r[o]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[o](t,t.exports,n),t.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/n.n=e=>{
/******/const r=e&&e.__esModule?
/******/()=>e.default:
/******/()=>e;
/******/
/******/return n.d(r,{a:r}),r;
/******/},
/******/ // define getter/value functions for harmony exports
/******/n.d=(e,r)=>{
/******/if(Array.isArray(r))
/******/for(
/******/var o=0;o<r.length;){
/******/var s=r[o++],t=r[o++];
/******/
/******/n.o(e,s)?0===t&&o++
/******/:
/******/0===t?
/******/Object.defineProperty(e,s,{enumerable:!0,value:r[o++]}):
/******/Object.defineProperty(e,s,{enumerable:!0,get:t})
/******/}
/******/else
/******/for(var s in r)
/******/n.o(r,s)&&!n.o(e,s)&&
/******/Object.defineProperty(e,s,{enumerable:!0,get:r[s]})
/******/;
/******/
/******/},
/******/n.o=(e,r)=>Object.hasOwn(e,r)
/******/;
/* harmony import */var o=n(27723),s=n(52619),t=n(56427),i=n(96516),l=n(62540);
/* harmony import */(0,s.addFilter)("senseiQuestionTypeToolbarOptions","sensei-lms/ordering-promo",
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
function(e){return e.push({title:(0,o.__)("Ordering","sensei-lms"),description:(0,o.__)("Place the answers in the correct order.","sensei-lms"),label:(0,o.__)("Ordering","sensei-lms"),value:"ordering",disabled:!0}),e}),(0,s.addFilter)("senseiQuestionTypeToolbarOptionChildren","sensei-lms/ordering-promo",function(e,r){return"ordering"!==r.value?e:(0,l.jsxs)("div",{className:"sensei-lms-question-block__type-selector__option__container--disabled",children:[(0,l.jsxs)("strong",{children:[" ",r.title]}),(0,l.jsx)("div",{className:"sensei-lms-question-block__type-selector__option__description sensei-lms-question-block__type-selector__option__description--disabled",children:r.description}),(0,l.jsx)(t.ExternalLink,{href:(0,i/* .getSenseiProUpsellUrl */.h)("quiz_ordering_question_type"),children:(0,o.__)("Upgrade to Sensei Pro","sensei-lms")})]})})})();