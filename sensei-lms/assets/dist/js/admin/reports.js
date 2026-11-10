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
/******/function o(r){
/******/ // Check if module is in cache
/******/const n=t[r];
/******/if(void 0!==n)
/******/return n.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/const s=t[r]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[r](s,s.exports,o),s.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/o.n=e=>{
/******/const t=e&&e.__esModule?
/******/()=>e.default:
/******/()=>e;
/******/
/******/return o.d(t,{a:t}),t;
/******/},
/******/
/******/ /* webpack/runtime/define property getters */
/******/ // define getter/value functions for harmony exports
/******/o.d=(e,t)=>{
/******/for(var r in t)
/******/o.o(t,r)&&!o.o(e,r)&&
/******/Object.defineProperty(e,r,{enumerable:!0,get:t[r]})
/******/;
/******/},
/******/
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/o.o=(e,t)=>Object.hasOwn(e,t);
/******/
/************************************************************************/
/* harmony import */var r=o(98490);
/* harmony import */
/**
 * WordPress dependencies
 */
o.n(r)()(()=>{jQuery(".sensei-date-picker").datepicker({dateFormat:"yy-mm-dd"});const e=Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone;e&&jQuery('.sensei-analysis__top-filters input[name="timezone"]').val(e)})})();