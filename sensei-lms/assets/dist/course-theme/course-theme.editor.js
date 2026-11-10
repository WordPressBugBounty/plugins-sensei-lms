/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e={
/***/12418(){
/* unused harmony export StylesProbe */
/**
 * Probe base colors and update Sensei theme variables when they change.
 */
const e=(()=>{let e,t,o={};return{update:function(){e&&e.isConnected||function(){const o=document.querySelector(".edit-site-visual-editor__editor-canvas")?.contentDocument||document;e=o?.querySelector(".editor-styles-wrapper"),e&&(t=o.createElement("a"),Object.assign(t.attributes,{tabindex:"-1",id:"sensei-theme-style-probe"}),Object.assign(t.style,{position:"fixed",top:"-100vh"}),e.appendChild(t))}(),e&&function(t){for(const[o,r]of Object.entries(t))e.style.setProperty(o,r)}(function(){const{getComputedStyle:r}=window,{color:n,backgroundColor:s}=r(e),{color:c}=r(t),i={"--sensei-primary-color":c,"--sensei-text-color":n,"--sensei-background-color":s,"--sensei-primary-contrast-color":s};for(const e in{...i})o[e]===i[e]&&delete i[e];return o={...o,...i},i}())}}})();setInterval(e.update,1e3)},
/***/78269(e,t,o){
/* harmony import */var r=o(52619);
/* harmony import */
/**
 * Turn variable reference to CSS.
 *
 * From @wordpress/edit-site/src/components/global-styles/use-global-styles-output.js
 *
 * @param {string} uncompiledValue
 * @return {string} CSS property value.
 */
function n(e){const t="var:";if(e?.startsWith?.(t)){return`var(--wp--${e.slice(4).split("|").join("--")})`}return e}
/**
 * Turn color name to CSS.
 *
 * @param {string} value A color name.
 * @return {string} CSS property value.
 */(0,r.addFilter)("blocks.registerBlockType","sensei/supports-color/withColorVariableSupport",
/**
 * WordPress dependencies
 */
/**
 * Add settings to generate CSS variables for colors in the edit and save wrappers.
 *
 * @param {Object} settings Block settings.
 */
function(e){const{getEditWrapperProps:t}=e;return{...e,getEditWrapperProps:e=>{let o={};t&&(o=t(e));const r=
/**
 * Get CSS variables for colors from style and color attributes.
 *
 * @param {Object} attributes Block attributes.
 * @return {Object} CSS variable name-value pairs.
 */
function(e){const{style:t,backgroundColor:o,customBackgroundColor:r}=e,s=t?.elements?.link?.color?.text,c=n(t?.color?.background)||(l=o,l&&`var(--wp--preset--color--${l})`)||r,i={};var l;s&&(i["--sensei-primary-color"]=n(s));c&&(i["--sensei-background-color"]=c,i["--sensei-primary-contrast-color"]=c);return i}(e);return{...o,style:{...o?.style||{},...r||{}}}}}})},
/***/52619(e){e.exports=window.wp.hooks;
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
/* harmony import */o(78269),o(12418)
/* harmony import */})();