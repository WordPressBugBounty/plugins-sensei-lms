/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e={
/***/98490(e){e.exports=window.wp.domReady;
/***/}
/******/};
/************************************************************************/
/******/ // The module cache
/******/const r={};
/******/
/******/ // The require function
/******/function t(n){
/******/ // Check if module is in cache
/******/const o=r[n];
/******/if(void 0!==o)
/******/return o.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/const s=r[n]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[n](s,s.exports,t),s.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/t.n=e=>{
/******/const r=e&&e.__esModule?
/******/()=>e.default:
/******/()=>e;
/******/
/******/return t.d(r,{a:r}),r;
/******/},
/******/ // define getter/value functions for harmony exports
/******/t.d=(e,r)=>{
/******/if(Array.isArray(r))
/******/for(
/******/var n=0;n<r.length;){
/******/var o=r[n++],s=r[n++];
/******/
/******/t.o(e,o)?0===s&&n++
/******/:
/******/0===s?
/******/Object.defineProperty(e,o,{enumerable:!0,value:r[n++]}):
/******/Object.defineProperty(e,o,{enumerable:!0,get:s})
/******/}
/******/else
/******/for(var o in r)
/******/t.o(r,o)&&!t.o(e,o)&&
/******/Object.defineProperty(e,o,{enumerable:!0,get:r[o]})
/******/;
/******/
/******/},
/******/t.o=(e,r)=>Object.hasOwn(e,r)
/******/;
/******/
/************************************************************************/
/* harmony import */var n=t(98490);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Handles uploading a file for a file upload question.
 *
 */
t.n(n)()(()=>{document.querySelectorAll(".sensei-lms-question-block__file-input").forEach(e=>{e.addEventListener("change",e=>{const r=e.target,t=r.files?.[0],n=r.parentElement.parentElement.querySelector(".sensei-lms-question-block__file-upload-name");n&&(n.innerText=t&&t.name)})})})})();