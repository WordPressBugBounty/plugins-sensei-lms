/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e={
/***/98490(e){e.exports=window.wp.domReady;
/***/}
/******/};
/************************************************************************/
/******/ // The module cache
/******/const t={};
/******/
/******/ // The require function
/******/function n(o){
/******/ // Check if module is in cache
/******/const r=t[o];
/******/if(void 0!==r)
/******/return r.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/const s=t[o]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[o](s,s.exports,n),s.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/n.n=e=>{
/******/const t=e&&e.__esModule?
/******/()=>e.default:
/******/()=>e;
/******/
/******/return n.d(t,{a:t}),t;
/******/},
/******/
/******/ /* webpack/runtime/define property getters */
/******/ // define getter/value functions for harmony exports
/******/n.d=(e,t)=>{
/******/for(var o in t)
/******/n.o(t,o)&&!n.o(e,o)&&
/******/Object.defineProperty(e,o,{enumerable:!0,get:t[o]})
/******/;
/******/},
/******/
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/n.o=(e,t)=>Object.hasOwn(e,t);
/******/
/************************************************************************/
/* harmony import */var o=n(98490);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Handles uploading a file for a file upload question.
 *
 */
n.n(o)()(()=>{document.querySelectorAll(".sensei-lms-question-block__file-input").forEach(e=>{e.addEventListener("change",e=>{const t=e.target,n=t.files?.[0],o=t.parentElement.parentElement.querySelector(".sensei-lms-question-block__file-upload-name");o&&(o.innerText=n&&n.name)})})})})();