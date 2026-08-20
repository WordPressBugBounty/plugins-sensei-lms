/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e={
/***/66087(e){e.exports=window.lodash;
/***/},
/***/52619(e){e.exports=window.wp.hooks;
/***/}
/******/};
/************************************************************************/
/******/ // The module cache
/******/const t={};
/******/
/******/ // The require function
/******/function r(o){
/******/ // Check if module is in cache
/******/const s=t[o];
/******/if(void 0!==s)
/******/return s.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/const a=t[o]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[o](a,a.exports,r),a.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/r.n=e=>{
/******/const t=e&&e.__esModule?
/******/()=>e.default:
/******/()=>e;
/******/
/******/return r.d(t,{a:t}),t;
/******/},
/******/ // define getter/value functions for harmony exports
/******/r.d=(e,t)=>{
/******/if(Array.isArray(t))
/******/for(
/******/var o=0;o<t.length;){
/******/var s=t[o++],a=t[o++];
/******/
/******/r.o(e,s)?0===a&&o++
/******/:
/******/0===a?
/******/Object.defineProperty(e,s,{enumerable:!0,value:t[o++]}):
/******/Object.defineProperty(e,s,{enumerable:!0,get:a})
/******/}
/******/else
/******/for(var s in t)
/******/r.o(t,s)&&!r.o(e,s)&&
/******/Object.defineProperty(e,s,{enumerable:!0,get:t[s]})
/******/;
/******/
/******/},
/******/r.o=(e,t)=>Object.hasOwn(e,t)
/******/;
/******/
/************************************************************************/
/* unused harmony export default */
/* harmony import */var o=r(52619),s=r(66087);
/* harmony import */(0,o.addFilter)("blocks.registerBlockType","sensei-lms/email-blocks",
/**
   * Update the blocks to remove extra settings when used in email editor.
   *
   * @param {Object} settings Block settings.
   * @param {string} name     Block name.
   */
function(e,t){const r={...e.supports?e.supports:{}};
// Remove font family setting.
return((0,s.has)(e,"supports.typography.fontFamily")||(0,s.has)(e,"supports.typography.__experimentalFontFamily"))&&(r.typography={...r.typography,__experimentalFontFamily:!1,fontFamily:!1}),
// Remove alignWide setting.
(0,s.has)(e,"supports.alignWide")&&(r.alignWide=!1),
// Remove wide from align options.
(0,s.has)(e,"supports.align.length")&&(r.align=r.align.filter(e=>"wide"!==e)),
// Alignment is not supported for buttons block in emails.
"core/buttons"===t&&(0,s.has)(r,"layout")&&(r.layout=!1),
// Alingment is not supported for image block in emails.
"core/image"===t&&(0,s.has)(r,"align")&&(r.align=!1),{...e,supports:r}},10)})();