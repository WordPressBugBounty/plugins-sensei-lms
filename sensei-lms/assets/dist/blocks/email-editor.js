/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var t={
/***/66087(t){t.exports=window.lodash;
/***/},
/***/52619(t){t.exports=window.wp.hooks;
/***/}
/******/};
/************************************************************************/
/******/ // The module cache
/******/const o={};
/******/
/******/ // The require function
/******/function e(s){
/******/ // Check if module is in cache
/******/const r=o[s];
/******/if(void 0!==r)
/******/return r.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/const a=o[s]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return t[s](a,a.exports,e),a.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/e.n=t=>{
/******/const o=t&&t.__esModule?
/******/()=>t.default:
/******/()=>t;
/******/
/******/return e.d(o,{a:o}),o;
/******/},
/******/
/******/ /* webpack/runtime/define property getters */
/******/ // define getter/value functions for harmony exports
/******/e.d=(t,o)=>{
/******/for(var s in o)
/******/e.o(o,s)&&!e.o(t,s)&&
/******/Object.defineProperty(t,s,{enumerable:!0,get:o[s]})
/******/;
/******/},
/******/
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/e.o=(t,o)=>Object.hasOwn(t,o);
/******/
/************************************************************************/
/* unused harmony export default */
/* harmony import */var s=e(52619),r=e(66087);
/* harmony import */(0,s.addFilter)("blocks.registerBlockType","sensei-lms/email-blocks",
/**
   * Update the blocks to remove extra settings when used in email editor.
   *
   * @param {Object} settings Block settings.
   * @param {string} name     Block name.
   */
function(t,o){const e={...t.supports?t.supports:{}};
// Remove font family setting.
return((0,r.has)(t,"supports.typography.fontFamily")||(0,r.has)(t,"supports.typography.__experimentalFontFamily"))&&(e.typography={...e.typography,__experimentalFontFamily:!1,fontFamily:!1}),
// Remove alignWide setting.
(0,r.has)(t,"supports.alignWide")&&(e.alignWide=!1),
// Remove wide from align options.
(0,r.has)(t,"supports.align.length")&&(e.align=e.align.filter(t=>"wide"!==t)),
// Alignment is not supported for buttons block in emails.
"core/buttons"===o&&(0,r.has)(e,"layout")&&(e.layout=!1),
// Alingment is not supported for image block in emails.
"core/image"===o&&(0,r.has)(e,"align")&&(e.align=!1),{...t,supports:e}},10)})();