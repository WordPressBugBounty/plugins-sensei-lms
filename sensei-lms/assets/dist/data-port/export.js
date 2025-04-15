/******/(()=>{// webpackBootstrap
/******/var e={
/***/2192:
/***/(e,t,s)=>{"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=s(51609),o=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,s){var r,n={},l=null,d=null;for(r in void 0!==s&&(l=""+s),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,r)&&!a.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===n[r]&&(n[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:d,props:n,_owner:c.current}}t.Fragment=n,t.jsx=l,t.jsxs=l}
/***/,
/***/4452:
/***/(e,t)=>{var s;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var s=arguments[t];s&&(e=i(e,n(s)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var s in e)r.call(e,s)&&e[s]&&(t=i(t,s));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(s=function(){return o}.apply(t,[]))||(e.exports=s)}()}
/***/,
/***/6934:
/***/(e,t,s)=>{"use strict";
/* harmony export */s.d(t,{
/* harmony export */B:()=>/* binding */l
/* harmony export */});
/* harmony import */var r=s(56427),o=s(27723),n=s(84299),i=s(77389),c=s(72266),a=s(62540);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
const l=({onSubmit:e,job:t})=>{const[s,l]=(0,n/* .useMergeReducer */.a)({course:!1,lesson:!1,question:!1}),d=Object.values(s).some((e=>e)),u=t&&"creating"===t.status;
return(0,a.jsx)("form",{onSubmit:t=>{t.preventDefault(),e((0,i/* .getSelectedKeys */.W)(s))},children:(0,a.jsxs)("div",{className:"sensei-data-port-step__body",children:[(0,a.jsx)("p",{className:"sensei-export__select-content__label",children:(0,o.__)("Which type of content would you like to export?","sensei-lms")}),(0,a.jsx)("div",{className:"sensei-export__select-content__options",children:["course","lesson","question"].map((e=>(0,a.jsx)(r.CheckboxControl,{className:"sensei-export__select-content__option sensei-data-port-step__line",name:e,checked:s[e],onChange:t=>l({[e]:t}),label:c/* .postTypeLabels */.C[e]},e)))}),(0,a.jsx)("div",{className:"sensei-data-port-step__footer",children:(0,a.jsx)(r.Button,{type:"submit",isPrimary:!0,disabled:!d||u,isBusy:u,children:(0,o.__)("Continue","sensei-lms")})})]})})};
/***/},
/***/14659:
/***/(e,t,s)=>{"use strict";
/* harmony export */s.d(t,{
/* harmony export */l:()=>/* binding */l
/* harmony export */});
/* harmony import */var r=s(56427),o=s(86087),n=s(27723),i=s(20408),c=s(75808),a=s(62540);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/**
 * @typedef Job
 * @property {string}       status     Export status.
 * @property {number}       percentage Export progress percentage.
 * @property {ExportFile[]} files      Exported files.
 * @property {string}       error      Error message.
 */
/**
 * @typedef ExportFile
 * @property {string} url  File URL.
 * @property {string} name File name.
 */
/**
 * Exporter progress and result.
 *
 * @param {Object}   props
 * @param {Job}      props.job    Export job state.
 * @param {Function} props.reset  Function to return to initial export screen.
 * @param {Function} props.cancel Function to request job cancellation.
 */
const l=({job:e,reset:t,cancel:s})=>{const{status:l,percentage:d,files:u,error:p}=e||{},_="completed"!==l;return(0,o.useEffect)((()=>{!_&&u&&u.forEach(i/* .downloadFile */.P)}),[u,_]),(0,a.jsx)("section",{className:"sensei-data-port-step__body",children:_?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{children:(0,a.jsx)("progress",{className:"sensei-data-port__progressbar",max:"100",value:d||0})}),(0,a.jsx)("div",{className:"sensei-data-port-step__footer",children:(0,a.jsx)(r.Button,{isPrimary:!0,onClick:()=>s(),children:(0,n.__)("Cancel","sensei-lms")})})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"sensei-export__output-result",children:[u&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{children:(0,n._n)("The following file was exported:","The following files were exported:",u.length,"sensei-lms")}),(0,a.jsx)("ul",{className:"sensei-export__output-files",children:u.map((({name:e,url:t})=>(0,a.jsx)("li",{className:"sensei-export__output-file sensei-data-port-step__line",children:(0,a.jsx)("a",{href:t,download:e,children:e})},e)))})]}),p&&(0,a.jsx)("div",{className:"sensei-data-port-step__line",children:(0/* .Notice */,a.jsx)(c.$,{isError:!0,message:p})})]}),(0,a.jsx)("div",{className:"sensei-data-port-step__footer",children:(0,a.jsx)(r.Button,{isPrimary:!0,onClick:()=>t(),children:(0,n.__)("Export More Content","sensei-lms")})})]})})};
/***/},
/***/20408:
/***/(e,t,s)=>{"use strict";
/* harmony export */
/**
 * Prompt opening a file from the given url.
 *
 * @param {Object} options
 * @param {string} options.url    The file URL.
 * @param {string} [options.name] Filename for the downloaded file.
 */
function r({url:e,name:t}){const s=document.createElement("a");s.href=e,s.download=t||!0,document.body.appendChild(s),s.click(),document.body.removeChild(s)}
/***/s.d(t,{
/* harmony export */P:()=>/* binding */r
/* harmony export */})},
/***/27723:
/***/e=>{"use strict";e.exports=window.wp.i18n}
/***/,
/***/29491:
/***/e=>{"use strict";e.exports=window.wp.compose}
/***/,
/***/32404:
/***/(e,t,s)=>{"use strict";s.r(t),
/* harmony export */s.d(t,{
/* harmony export */cancel:()=>/* binding */y
/* harmony export */,checkForActiveJob:()=>/* binding */x
/* harmony export */,reset:()=>/* binding */_
/* harmony export */,start:()=>/* binding */p
/* harmony export */,update:()=>/* binding */m
/* harmony export */});
/* harmony import */var r=s(66161),o=s(87671),n=s(54106);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
const i="/sensei-internal/v1/export",c=e=>({type:"SET_JOB",job:e}),a=e=>({type:"UPDATE_JOB",job:e}),l=()=>(0/* .EXPORT_STORE */,r.select)(o.zz,"getJobId")
/**
 * Set error.
 *
 * @param {string} error Error message.
 */,d=e=>({type:"SET_ERROR",error:e})
/**
 * Clear job state.
 */,u=function*(e){e&&!e.error&&"pending"===e.status.status&&(yield(0,n/* .timeout */.wR)(m,1e3))},p=function*(e){yield c({status:"creating"}),yield b();const t=yield v(e);yield u(t)},_=function*(){yield(0,n/* .cancelTimeout */.yV)(),yield{type:"CLEAR_JOB"}},y=function*(e){yield(0,n/* .cancelTimeout */.yV)(),e||(e=yield l()),yield{type:"CLEAR_JOB"},yield j({method:"DELETE",jobId:e})},m=function*(){let e=yield l();if(!e)return;const t=yield j({endpoint:"process",method:"POST",jobId:e});e=yield l(),e&&(yield a(t),yield u(t),yield f(t))},f=function*(e){if("completed"===e.status.status){const e=yield j({endpoint:"logs",skipJobCheck:!0});e.items.length>0&&(yield d(e.items.map((e=>e.message)).join(" ")))}},x=function*(){const e=yield j({jobId:"active"});e&&e.id&&("setup"===e.status.status?yield y(e.id):(yield c(e),yield u(e)))},j=function*(e={}){let{jobId:t,...s}=e;if(t||(t=yield l(),t))return yield*h({jobId:t,...s});yield d("No job ID")},h=function*(e={}){const{skipJobCheck:t,endpoint:s,jobId:o,...n}=e,c=[i,o,s].filter((e=>!!e)).join("/");try{const e=yield(0,r.apiFetch)({path:c,...n});if(t||!e||!o||o===e.id||"active"===o)return e}catch(e){if("active"===o&&"sensei_data_port_job_not_found"===e.code)return yield{type:"CLEAR_JOB"};yield d(e.message)}},b=function*(){const e=yield h({method:"POST"});yield c(e)},v=function*(e){const t=yield j({endpoint:"start",method:"POST",data:{content_types:e}}),s=e.map((e=>e+"s")).join(",");
// Log when users start an export.
return window.sensei_log_event("export_continue_click",{type:s}),yield a(t),t};
/**
 * @typedef LogItem
 *
 * @property {string} message Log message.
 */
/**
 * @typedef LogsResponse
 *
 * @property {LogItem[]} items Log items.
 */
/**
 * @typedef JobResponse
 *
 * @property {Object}   status            Job status.
 * @property {string}   status.status     Job status name.
 * @property {number}   status.percentage Job progress percentage.
 * @property {string}   id                Job ID.
 * @property {boolean}  deleted           Was the job deleted.
 * @property {Object}   result            Job result.
 * @property {Object[]} files             Job files.
 * @property {Object}   error             Error message.
 */
/**
 * Set job state. Clears request error.
 *
 * @param {JobResponse} job Job state.
 */}
/***/,
/***/37283:
/***/(e,t,s)=>{"use strict";
/* harmony export */s.d(t,{
/* harmony export */W:()=>/* binding */l
/* harmony export */});
/* harmony import */var r=s(27723),o=s(46979),n=s(56427),i=s(14659),c=s(6934),a=s(62540);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/**
 * Export page.
 *
 * @param {Object}   props
 * @param {Object}   props.job
 * @param {Object}   props.error
 * @param {Function} props.start
 * @param {Function} props.reset
 * @param {Function} props.cancel
 */
const l=({job:e,error:t,start:s,reset:l,cancel:d})=>((0,o/* .useSenseiColorTheme */.x)(),(0,a.jsx)("div",{className:"sensei-page-export",children:(0,a.jsxs)("section",{className:"sensei-data-port-step",children:[(0,a.jsxs)("header",{className:"sensei-data-port-step__header",children:[(0,a.jsx)("h2",{children:(0,r.__)("Export content to a CSV file","sensei-lms")}),(0,a.jsx)("p",{children:(0,r.__)("This tool enables you to export courses, lessons, and questions to CSV files. These files are bundled together and downloaded to your computer in .zip format.","sensei-lms")})]}),t&&(0,a.jsx)(n.Notice,{status:"error",isDismissible:!1,children:t}),e&&"creating"!==e.status?(0/* .ExportProgressPage */,a.jsx)(i.l,{job:e,reset:l,cancel:d}):(0/* .ExportSelectContentPage */,a.jsx)(c.B,{onSubmit:s,job:e})]})}));
/***/},
/***/46979:
/***/(e,t,s)=>{"use strict";
/* harmony export */s.d(t,{
/* harmony export */x:()=>/* binding */o
/* harmony export */});
/* harmony import */var r=s(86087);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Use Sensei color theme.
 *
 * Requires enqueueing the sensei-wp-components stylesheet.
 */
function o(){(0,r.useLayoutEffect)((()=>(document.body.classList.add("sensei-color"),()=>document.body.classList.remove("sensei-color"))))}
/***/},
/***/47143:
/***/e=>{"use strict";e.exports=window.wp.data}
/***/,
/***/51609:
/***/e=>{"use strict";e.exports=window.React}
/***/,
/***/54106:
/***/(e,t,s)=>{"use strict";
/* harmony export */
/**
 * Schedule to run action creator after the given time.
 *
 * @param {Function} action Action creator to dispatch.
 * @param {number}   wait   Timeout in milliseconds.
 */
function*r(e,t){yield{type:"TIMEOUT",wait:t},yield e()}
/**
 * Clear current timeout.
 */function o(){return{type:"CLEAR_TIMEOUT"}}
/**
 * Manage timeout reference.
 */s.d(t,{
/* harmony export */Ay:()=>i
/* harmony export */,wR:()=>/* binding */r
/* harmony export */,yV:()=>/* binding */o
/* harmony export */});const n={current:null,
/**
   * Create a new timeout promise.
   *
   * @param {number} wait Timeout in ms.
   * @return {Promise} Promise resolved after the timeout.
   */
create:e=>new Promise((t=>{n.clear(),n.current=setTimeout((()=>{t()}),e)})),
/**
   * Clear current scheduled timeout.
   */
clear(){n.current&&(clearTimeout(n.current),n.current=null)}},i={TIMEOUT:({wait:e})=>n.create(e),CLEAR_TIMEOUT:()=>n.clear()};
/* harmony default export */}
/***/,
/***/56427:
/***/e=>{"use strict";e.exports=window.wp.components}
/***/,
/***/62540:
/***/(e,t,s)=>{"use strict";e.exports=s(2192)}
/***/,
/***/66161:
/***/e=>{"use strict";e.exports=window.wp.dataControls}
/***/,
/***/72266:
/***/(e,t,s)=>{"use strict";
/* harmony export */s.d(t,{
/* harmony export */C:()=>/* binding */o
/* harmony export */});
/* unused harmony export logTypeLabels */
/* harmony import */var r=s(27723);
/* harmony import */
/**
 * WordPress dependencies
 */
const o={course:(0,r.__)("Courses","sensei-lms"),lesson:(0,r.__)("Lessons","sensei-lms"),question:(0,r.__)("Questions","sensei-lms")};(0,r.__)("Error","sensei-lms"),(0,r.__)("Warning","sensei-lms")}
/***/,
/***/74073:
/***/(e,t,s)=>{"use strict";
/* harmony export */s.d(t,{
/* harmony export */A:()=>c
/* harmony export */});
/* harmony import */var r=s(47143),o=s(29491),n=s(37283),i=s(87671);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
(0,i/* ["default"] */.Ay)();
/* harmony default export */const c=(0,o.compose)((0,r.withSelect)((e=>({job:e(i/* .EXPORT_STORE */.zz).getJob(),error:e(i/* .EXPORT_STORE */.zz).getError()}))),(0,r.withDispatch)((e=>{const{start:t,cancel:s,reset:r}=e(i/* .EXPORT_STORE */.zz);return{start:t,cancel:s,reset:r}})))(n/* .ExportPage */.W);
/***/},
/***/75808:
/***/(e,t,s)=>{"use strict";
/* harmony export */s.d(t,{
/* harmony export */$:()=>/* binding */c
/* harmony export */});
/* harmony import */var r=s(4452),o=s.n(r),n=s(56427),i=s(62540);
/* harmony import */
/**
 * External dependencies
 */
/**
 * WordPress dependencies
 */
/**
 * Sensei data port error notice.
 *
 * @param {Object}  input         Notice input.
 * @param {string}  input.message The message to be displayed.
 * @param {boolean} input.isError Whether the message is an error.
 */
const c=({message:e,isError:t})=>{const s=o()({"sensei-data-port-notice__message":!0,error:t});
return(0,i.jsxs)("div",{className:"sensei-data-port-notice",children:[t&&(0,i.jsx)(n.Dashicon,{className:"sensei-data-port-notice__icon error",icon:"warning"}),(0,i.jsx)("span",{className:s,children:e})]})};
/***/},
/***/77389:
/***/(e,t,s)=>{"use strict";
/* harmony export */s.d(t,{
/* harmony export */W:()=>/* binding */r
/* harmony export */});
/**
 * Return keys of a key-value map where their value is true.
 *
 * @param {Object} map Data.
 * @return {string[]} Selected keys.
 */
const r=e=>Object.keys(e).filter((t=>e[t]))
/***/},
/***/77505:
/***/(e,t,s)=>{"use strict";
/* harmony export */s.d(t,{
/* harmony export */$x:()=>/* binding */o
/* harmony export */});
/* unused harmony exports composeFetchAction, createStore */
/* harmony import */s(47143);
/* harmony import */
/**
 * WordPress dependencies
 */
// We register the store in the global scope to avoid registering it multiple times.
// The reason to be in the global scope is that some times we have different built files using the same source.
window.senseiStores=window.senseiStores||[];const{senseiStores:r}=window,o=(e,t)=>(s=t,r)=>(e[r.type]||e.DEFAULT)(r,s);
/**
 * Compose an action creator with the given start, success and error actions.
 *
 * @param {string}   startAction   Start action type.
 * @param {Function} fetchFn       The action creator to be wrapped. Should return the resolved data.
 * @param {string}   successAction Success action type.
 * @param {string}   errorAction   Error action type.
 * @return {Function} The wrapped action creator.
 */}
/***/,
/***/84299:
/***/(e,t,s)=>{"use strict";
/* harmony export */s.d(t,{
/* harmony export */a:()=>/* binding */o
/* harmony export */});
/* harmony import */var r=s(86087);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Shallow-merge new value into state object.
 *
 * @param {Object} initialState Initial state.
 * @return {Array.<(Object|Function)>} State object and updateState function.
 */
const o=e=>(0,r.useReducer)(((e,t)=>({...e,...t})),e);
/***/},
/***/86087:
/***/e=>{"use strict";e.exports=window.wp.element}
/***/,
/***/87671:
/***/(e,t,s)=>{"use strict";
/* harmony export */s.d(t,{
/* harmony export */Ay:()=>y
/* harmony export */,zz:()=>/* binding */p
/* harmony export */});
/* unused harmony export EXPORT_STORE_OPTIONS */
/* harmony import */var r=s(47143),o=s(66161),n=s(54106),i=s(77505),c=s(32404);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
const a={},l=e=>e&&!e.deleted?{job:{...e,...e.status,files:e.files&&Object.values(e.files)}}:a,d={UPDATE_JOB:({job:e},t)=>t.job?l(e):t,SET_JOB:({job:e})=>l(e),SET_ERROR:({error:e},t)=>({...t,error:e}),CLEAR_JOB:()=>a,DEFAULT:(e,t)=>t},u={
/**
   * Check for active job on first access.
   */
getJob:()=>c.checkForActiveJob()},p="sensei/export",_={reducer:(0,i/* .createReducerFromActionMap */.$x)(d,a),actions:c,selectors:{getJobId:({job:e})=>e&&e.id||null,getJob:({job:e})=>e,getError:({error:e})=>e},resolvers:u,controls:{...o.controls,...n/* ["default"] */.Ay}},y=()=>(0,r.registerStore)(p,_)
/* harmony default export */}
/***/
/******/},t={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function s(r){
/******/ // Check if module is in cache
/******/var o=t[r];
/******/if(void 0!==o)
/******/return o.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var n=t[r]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[r](n,n.exports,s),n.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/s.n=e=>{
/******/var t=e&&e.__esModule?
/******/()=>e.default
/******/:()=>e
/******/;
/******/return s.d(t,{a:t}),t;
/******/},
/******/ // define getter functions for harmony exports
/******/s.d=(e,t)=>{
/******/for(var r in t)
/******/s.o(t,r)&&!s.o(e,r)&&
/******/Object.defineProperty(e,r,{enumerable:!0,get:t[r]})
/******/;
/******/},
/******/s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)
/******/,
/******/ // define __esModule on exports
/******/s.r=e=>{
/******/"undefined"!=typeof Symbol&&Symbol.toStringTag&&
/******/Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})
/******/,Object.defineProperty(e,"__esModule",{value:!0})}
/******/,
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(()=>{"use strict";
/* harmony import */var e=s(86087),t=s(74073),r=s(62540);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
(0,e.render)((0/* ["default"] */,r.jsx)(t.A,{}),document.getElementById("sensei-export-page"))})()})
/******/();