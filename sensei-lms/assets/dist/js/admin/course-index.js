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
/******/function t(o){
/******/ // Check if module is in cache
/******/const n=r[o];
/******/if(void 0!==n)
/******/return n.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/const s=r[o]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[o](s,s.exports,t),s.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/t.n=e=>{
/******/const r=e&&e.__esModule?
/******/()=>e.default:
/******/()=>e;
/******/
/******/return t.d(r,{a:r}),r;
/******/},
/******/
/******/ /* webpack/runtime/define property getters */
/******/ // define getter/value functions for harmony exports
/******/t.d=(e,r)=>{
/******/for(var o in r)
/******/t.o(r,o)&&!t.o(e,o)&&
/******/Object.defineProperty(e,o,{enumerable:!0,get:r[o]})
/******/;
/******/},
/******/
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/t.o=(e,r)=>Object.hasOwn(e,r);
/******/
/************************************************************************/
/* harmony import */var o=t(98490);
/* harmony import */
/**
 * WordPress dependencies
 */
t.n(o)()(()=>{jQuery(".sensei-show-more").on("click",e=>{e.preventDefault(),jQuery(e.target).addClass("hidden").siblings().removeClass("hidden")})})})();