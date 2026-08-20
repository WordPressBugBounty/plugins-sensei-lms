/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e={
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
/******/const t=r[o];
/******/if(void 0!==t)
/******/return t.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/const i=r[o]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[o](i,i.exports,n),i.exports;
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
/******/var t=r[o++],i=r[o++];
/******/
/******/n.o(e,t)?0===i&&o++
/******/:
/******/0===i?
/******/Object.defineProperty(e,t,{enumerable:!0,value:r[o++]}):
/******/Object.defineProperty(e,t,{enumerable:!0,get:i})
/******/}
/******/else
/******/for(var t in r)
/******/n.o(r,t)&&!n.o(e,t)&&
/******/Object.defineProperty(e,t,{enumerable:!0,get:r[t]})
/******/;
/******/
/******/},
/******/n.o=(e,r)=>Object.hasOwn(e,r)
/******/;
/******/
/************************************************************************/
/* harmony import */var o=n(27723);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Add placeholder to tinymce editor
 *
 * @param editor tinymce editor.
 */
window.addPlaceholderInTinymceEditor=e=>{
// Remove placeholder on submit.
jQuery("#sensei-quiz-form").submit(function(){return e.dom.remove("multi-line-placeholder"),!0}),
// Add placeholder on init and blur.
e.on("blur init",function(){""==e.getContent()&&e.setContent("<p id='multi-line-placeholder'>"+(0,o.__)("Your answer","sensei-lms")+"</p>")}),
// Remove placeholder on focus.
e.on("focus",function(){e.dom.remove("multi-line-placeholder")})}})();