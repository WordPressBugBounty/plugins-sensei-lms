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
/******/const a=r[n]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[n](a,a.exports,t),a.exports;
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
/******/var o=r[n++],a=r[n++];
/******/
/******/t.o(e,o)?0===a&&n++
/******/:
/******/0===a?
/******/Object.defineProperty(e,o,{enumerable:!0,value:r[n++]}):
/******/Object.defineProperty(e,o,{enumerable:!0,get:a})
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
t.n(n)()(()=>{jQuery(".sensei-date-picker").datepicker({dateFormat:"yy-mm-dd"});const e=Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone;e&&jQuery('.sensei-analysis__top-filters input[name="timezone"]').val(e)})})();