/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e={
/***/27723(e){e.exports=window.wp.i18n;
/***/}
/******/};
/************************************************************************/
/******/ // The module cache
/******/const n={};
/******/
/******/ // The require function
/******/function o(t){
/******/ // Check if module is in cache
/******/const r=n[t];
/******/if(void 0!==r)
/******/return r.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/const i=n[t]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[t](i,i.exports,o),i.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/o.n=e=>{
/******/const n=e&&e.__esModule?
/******/()=>e.default:
/******/()=>e;
/******/
/******/return o.d(n,{a:n}),n;
/******/},
/******/
/******/ /* webpack/runtime/define property getters */
/******/ // define getter/value functions for harmony exports
/******/o.d=(e,n)=>{
/******/for(var t in n)
/******/o.o(n,t)&&!o.o(e,t)&&
/******/Object.defineProperty(e,t,{enumerable:!0,get:n[t]})
/******/;
/******/},
/******/
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/o.o=(e,n)=>Object.hasOwn(e,n);
/******/
/************************************************************************/
/* harmony import */var t=o(27723);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Add placeholder to tinymce editor
 *
 * @param {Object} editor The tinymce editor.
 */
window.addPlaceholderInTinymceEditor=e=>{
// Remove placeholder on submit.
jQuery("#sensei-quiz-form").submit(function(){return e.dom.remove("multi-line-placeholder"),!0}),
// Add placeholder on init and blur.
e.on("blur init",function(){""===e.getContent()&&e.setContent("<p id='multi-line-placeholder'>"+(0,t.__)("Your answer","sensei-lms")+"</p>")}),
// Remove placeholder on focus.
e.on("focus",function(){e.dom.remove("multi-line-placeholder")})}})();