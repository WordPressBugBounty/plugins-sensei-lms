/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e={
/***/98490(e){e.exports=window.wp.domReady;
/***/}
/******/};
/************************************************************************/
/******/ // The module cache
/******/const s={};
/******/
/******/ // The require function
/******/function t(i){
/******/ // Check if module is in cache
/******/const n=s[i];
/******/if(void 0!==n)
/******/return n.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/const o=s[i]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[i](o,o.exports,t),o.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/t.n=e=>{
/******/const s=e&&e.__esModule?
/******/()=>e.default:
/******/()=>e;
/******/
/******/return t.d(s,{a:s}),s;
/******/},
/******/
/******/ /* webpack/runtime/define property getters */
/******/ // define getter/value functions for harmony exports
/******/t.d=(e,s)=>{
/******/for(var i in s)
/******/t.o(s,i)&&!t.o(e,i)&&
/******/Object.defineProperty(e,i,{enumerable:!0,get:s[i]})
/******/;
/******/},
/******/
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/t.o=(e,s)=>Object.hasOwn(e,s);
/******/
/************************************************************************/
/* harmony import */var i=t(98490);
/* harmony import */
/**
 * WordPress dependencies
 */
t.n(i)()(()=>{const e="sensei-notice--is-hidden",s=e=>{const s=new FormData;e.dataset.dismissNotice&&s.append("notice",e.dataset.dismissNotice),s.append("action",e.dataset.dismissAction),s.append("nonce",e.dataset.dismissNonce),fetch(ajaxurl,{method:"POST",body:s})};
/**
   * Handle tasks present on the element if the element has the attribute "data-sensei-notice-tasks".
   *
   * @param {Event} event The event to handle.
   */document.body.addEventListener("click",t=>{const i=t.target.closest(".sensei-notice");i&&(i.dataset.dismissNonce&&i.dataset.dismissAction&&t.target.classList.contains("notice-dismiss")?s(i):(t=>{const{target:i}=t,n=i.closest("[data-sensei-notice-tasks]");if(!n)return;const o=JSON.parse(n.dataset.senseiNoticeTasks);if(o)for(const i of o){const n=i.notice_id&&document.querySelector(`.sensei-notice[data-sensei-notice-id="${i.notice_id}"]`);switch(i.type){case"preventDefault":t.preventDefault();break;case"show":n?.classList.remove(e);break;case"dismiss":n&&s(n);
//  We need to also hide the notice being dismissed:
// eslint-disable-next-line no-fallthrough
case"hide":n?.classList.add(e)}}})(t))})})})();