/******/(()=>{// webpackBootstrap
/******/var e={
/***/5823(e,t,s){"use strict";
/* harmony export */s.d(t,{
/* harmony export */A:()=>/* binding */o
/* harmony export */});
/* harmony import */var n=s(10790),r=s(5573),o=(0,n.jsx)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(r.Path,{d:"M13 5c-3.3 0-6 2.7-6 6 0 1.4.5 2.7 1.3 3.7l-3.8 3.8 1.1 1.1 3.8-3.8c1 .8 2.3 1.3 3.7 1.3 3.3 0 6-2.7 6-6S16.3 5 13 5zm0 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"})});
/* harmony import */},
/***/21181(e,t,s){"use strict";
/* harmony export */s.d(t,{
/* harmony export */A:()=>/* binding */r
/* harmony export */});
/* harmony import */var n=s(86087);
/* harmony import */
/**
 * WordPress dependencies
 */
// Solution borrowed from https://gist.github.com/kentcdodds/b36572b6e9227207e6c71fd80e63f3b4.
function r(){const e=(0,n.useRef)(),t=(0,n.useCallback)(()=>(e.current||(e.current=new AbortController),e.current),[]);(0,n.useEffect)(()=>()=>t().abort(),[t]);return{getSignal:(0,n.useCallback)(()=>t().signal,[t])}}
/***/},
/***/37134(e,t,s){"use strict";
/* unused harmony export CourseList */
/* harmony import */var n=s(56427),r=s(86087),o=s(18537),i=s(27723),l=s(3582),a=s(93301),c=s(10790);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/**
 * Callback for select or unselect courseItem
 *
 * @callback onChangeEvent
 * @param {boolean} isSelected Describes if the course was selected or unselected
 * @param {boolean} course     Course related to the triggered event
 */
/**
 * Loading course list component.
 */
const u=()=>(0,c.jsx)("li",{className:"sensei-student-modal__course-list--loading",children:(0,c.jsx)(n.Spinner,{})}),d=()=>(0,c.jsx)("li",{className:"sensei-student-modal__course-list--empty",children:(0,i.__)("No courses found.","sensei-lms")}),p=({course:e,checked:t=!1,onChange:s})=>{const i=e?.id,l=(0,o.decodeEntities)(e?.title?.rendered),[a,u]=(0,r.useState)(t),d=(0,r.useCallback)(t=>{u(t),s({isSelected:t,course:e})},[e,s]);
return(0,c.jsxs)("li",{className:"sensei-student-modal__course-list__item",children:[(0,c.jsx)(n.CheckboxControl,{id:`course-${i}`,title:l,checked:a,onChange:d}),(0,c.jsx)("label",{htmlFor:`course-${i}`,title:l,children:l})]},i)},m=({searchQuery:e,onChange:t})=>{const s=(0,r.useRef)([]),n=(0,r.useCallback)(({isSelected:e,course:n})=>{s.current=e?[...s.current,n]:s.current.filter(e=>e.id!==n.id),t(s.current)},[t]),{courses:o,isFetching:m}=(0,a/* ["default"] */.A)(t=>{const s=t(l.store),n={per_page:100,search:e,filter:"teacher"};return{courses:s.getEntityRecords("postType","course",n)||[],isFetching:!s.hasFinishedResolution("getEntityRecords",["postType","course",n])}},[e],500);
return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("span",{className:"sensei-student-modal__course-list__header",children:(0,i.__)("Your Courses","sensei-lms")}),(0,c.jsxs)("ul",{className:"sensei-student-modal__course-list",children:[m&&(0,c.jsx)(u,{}),!m&&0===o.length&&(0,c.jsx)(d,{}),!m&&0<o.length&&o.map(e=>(0,c.jsx)(p,{course:e,onChange:n,checked:s.current.length>0&&s.current.find(({id:t})=>t===e.id)},e.id))]})]})};
/**
 * Empty course list component.
 */
/* harmony export */s.d(t,[
/* harmony export */"A",0,m
/* harmony export */])},
/***/69946(e,t,s){"use strict";
/* unused harmony export StudentModal */
/* harmony import */var n=s(56427),r=s(86087),o=s(5823),i=s(27723),l=s(89877),a=s(1455),c=s.n(a),u=s(37134),d=s(72108),p=s(21181),m=s(10790);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
const h=({action:e,onClose:t,students:s,studentDisplayName:a})=>{const{description:h,buttonLabel:g,errorMessage:_,isDestructive:f,sendAction:b}=((e,t,s)=>{const n=(0,l.escapeHTML)(s);return{add:{description:t>1?(0,i.sprintf)(
// Translators: placeholder is the number of selected students.
// Translators: placeholder is the number of selected students.
(0,i.__)("Select the course(s) you would like to add <strong>%d students</strong> to:","sensei-lms"),t):(0,i.sprintf)(
// Translators: placeholder is the student's name.
// Translators: placeholder is the student's name.
(0,i.__)("Select the course(s) you would like to add <strong>%s</strong> to:","sensei-lms"),n),buttonLabel:(0,i.__)("Add to Course","sensei-lms"),errorMessage:e=>(0,i._n)("We couldn't finish enrolling the selected student. You can repeat the enrollment action. If the problem continues, contact your site administrator for help.","We couldn't finish enrolling the selected students. You can repeat the enrollment action. If the problem continues, contact your site administrator for help.",e.length,"sensei-lms"),sendAction:(e,t,{signal:s})=>c()({path:"/sensei-internal/v1/course-students/batch",method:"POST",data:{student_ids:e,course_ids:t},signal:s}),isDestructive:!1},remove:{description:t>1?(0,i.sprintf)(
// Translators: placeholder is the number of selected students.
// Translators: placeholder is the number of selected students.
(0,i.__)("Select the course(s) you would like to remove <strong>%d students</strong> from:","sensei-lms"),t):(0,i.sprintf)(
// Translators: placeholder is the student's name.
// Translators: placeholder is the student's name.
(0,i.__)("Select the course(s) you would like to remove <strong>%s</strong> from:","sensei-lms"),n),buttonLabel:(0,i.__)("Remove from Course","sensei-lms"),errorMessage:e=>(0,i._n)("Unable to remove student. Please try again.","Unable to remove students. Please try again.",e.length,"sensei-lms"),sendAction:(e,t,{signal:s})=>c()({path:"/sensei-internal/v1/course-students/batch",method:"DELETE",data:{student_ids:e,course_ids:t},signal:s}),isDestructive:!0},"reset-progress":{
// Translators: placeholder is the number of selected students for plural, student's name for singular.
description:t>1?(0,i.sprintf)(
// Translators: placeholder is the number of selected students.
// Translators: placeholder is the number of selected students.
(0,i.__)("Select the course(s) you would like to reset progress from for <strong>%d students</strong>:","sensei-lms"),t):(0,i.sprintf)(
// Translators: placeholder is the student's name.
// Translators: placeholder is the student's name.
(0,i.__)("Select the course(s) you would like to reset progress from for <strong>%s</strong>:","sensei-lms"),n),buttonLabel:(0,i.__)("Reset Progress","sensei-lms"),errorMessage:e=>(0,i._n)("Unable to reset progress for this student. Please try again.","Unable to reset progress for these students. Please try again.",e.length,"sensei-lms"),sendAction:(e,t,{signal:s})=>c()({path:"/sensei-internal/v1/course-progress/batch",method:"DELETE",data:{student_ids:e,course_ids:t},signal:s}),isDestructive:!0}}[e]})(e,s.length,a),[w,v]=(0,r.useState)([]),[x,y]=(0,r.useState)(""),[S,j]=(0,r.useState)(!1),[k,C]=(0,r.useState)(!1),[A,N]=(0,r.useState)(!1),{getSignal:E}=(0,p/* ["default"] */.A)(),D=(0,r.useCallback)(async()=>{j(!0),C(!1);try{const n=await b(s,w.map(e=>e.id),{signal:E()});if("add"===e){
// A completed request can contain failed or missing student/course results.
const e=s.flatMap(e=>w.map(t=>!0===n?.[e]?.[t.id]));if(e.includes(!1)){const t=e.filter(Boolean).length,n=e.length-t,r=t>0;
// Keep the modal and selection available for retry.
return r&&
// Show saved enrollments when the modal is dismissed.
N(!0),C(r?(0,i.sprintf)(
// Translators: %1$d is completed enrollments; %2$d is failed enrollments.
// Translators: %1$d is completed enrollments; %2$d is failed enrollments.
(0,i._n)("%1$d enrollment completed; %2$d couldn't be completed. Successful enrollments were kept. You can repeat the action to retry the failed enrollments.","%1$d enrollments completed; %2$d couldn't be completed. Successful enrollments were kept. You can repeat the action to retry the failed enrollments.",t,"sensei-lms"),t,n):_(s)),void j(!1)}}t(!0)}catch{E().aborted||(C(_(s)),j(!1))}},[e,b,s,w,t,E,_]);
return(0,m.jsxs)(n.Modal,{className:"sensei-student-modal",title:(0,i.__)("Choose Course","sensei-lms"),onRequestClose:()=>t(A),children:[(0,m.jsx)(r.RawHTML,{children:h}),(0/* ["default"] */,m.jsx)(d.A,{iconRight:o/* ["default"] */.A,onChange:e=>y(e),placeholder:(0,i.__)("Search courses","sensei-lms"),value:x}),(0/* ["default"] */,m.jsx)(u.A,{searchQuery:x,onChange:e=>{v(e)}}),k&&(0,m.jsx)(n.Notice,{status:"error",isDismissible:!1,className:"sensei-student-modal__notice",children:k}),(0,m.jsx)("div",{className:"sensei-student-modal__action",children:(0,m.jsxs)(n.Button,{className:"sensei-student-modal__action",variant:f?"":"primary",onClick:()=>D(),disabled:S||0===w.length,isDestructive:f,children:[S&&(0,m.jsx)(n.Spinner,{}),g]})})]})};
/**
 * Student Actions Modal.
 *
 * @param {Object}   props
 * @param {Object}   props.action             Action that is being performed.
 * @param {Function} props.onClose            Close callback.
 * @param {Array}    props.students           A list of Student ids related to the action should be applied.
 * @param {string}   props.studentDisplayName Name of the student, shown when there's only one student.
 */
/* harmony export */s.d(t,[
/* harmony export */"A",0,h
/* harmony export */])},
/***/72108(e,t,s){"use strict";
/* harmony import */var n=s(4452),r=s.n(n),o=s(56427),i=s(10790);
/* harmony import */
/**
 * External dependencies
 */
/**
 * WordPress dependencies
 */
/**
 * Input control component.
 *
 * It can use or be replaced by the
 * WordPress [InputControl]{@link https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/input-control} when it's stable.
 *
 * @param {Object}   props             Component props.
 * @param {string}   [props.className] Additional classnames for the input.
 * @param {string}   [props.id]        Component id used to connect label and input - required if label is set.
 * @param {string}   [props.label]     Input label.
 * @param {number}   [props.value]     Input value.
 * @param {string}   [props.help]      Help text.
 * @param {string}   [props.iconRight] Icon right.
 * @param {Function} [props.onChange]  Change function.
 */
const l=({className:e,id:t,label:s,value:n,help:l,iconRight:a,onChange:c,...u})=>(0,i.jsx)(o.BaseControl,{id:t,label:s,help:l,children:(0,i.jsxs)("div",{className:"sensei-input-control",children:[(0,i.jsx)("input",{className:r()("sensei-input-control__input",{"sensei-input-control__input--with-icon-right":a},e),type:"text",id:t,value:null===n?"":n,onChange:e=>c(e.target.value),...u}),a&&(0,i.jsx)("span",{className:"sensei-input-control__icon",children:(0,i.jsx)(o.Icon,{icon:a})})]})});
/* harmony default export */
/* harmony export */s.d(t,[
/* harmony export */"A",0,l
/* harmony export */])},
/***/93301(e,t,s){"use strict";
/* harmony import */var n=s(66087),r=s(47143),o=s(86087);
/* harmony import */
/**
 * External dependencies
 */
/**
 * WordPress dependencies
 */
/**
 * Use select hook with debounce.
 *
 * @param {Function} mapSelect Map select function.
 * @param {Array}    deps      Use select dependencies.
 * @param {number}   wait      Wait time for the debounce.
 *
 * @return {*} Returns what useSelect returns through the mapSelect argument.
 */
const i=(e,t,s)=>{const[i,l]=(0,o.useState)(t),a=(0,o.useCallback)((0,n.debounce)(l,s),[l,s]);
// eslint-disable-next-line react-hooks/exhaustive-deps -- Using debounce as callback.
return(0,o.useEffect)(()=>{a(t);
// eslint-disable-next-line react-hooks/exhaustive-deps -- Dependencies coming from args.
},t),(0,r.useSelect)(e,i)};
/* harmony default export */
/* harmony export */s.d(t,[
/* harmony export */"A",0,i
/* harmony export */])},
/***/10790(e){"use strict";e.exports=window.ReactJSXRuntime},
/***/66087(e){"use strict";e.exports=window.lodash},
/***/1455(e){"use strict";e.exports=window.wp.apiFetch},
/***/56427(e){"use strict";e.exports=window.wp.components},
/***/3582(e){"use strict";e.exports=window.wp.coreData},
/***/47143(e){"use strict";e.exports=window.wp.data},
/***/86087(e){"use strict";e.exports=window.wp.element},
/***/89877(e){"use strict";e.exports=window.wp.escapeHtml},
/***/52619(e){"use strict";e.exports=window.wp.hooks},
/***/18537(e){"use strict";e.exports=window.wp.htmlEntities},
/***/27723(e){"use strict";e.exports=window.wp.i18n},
/***/5573(e){"use strict";e.exports=window.wp.primitives},
/***/4452(e,t){var s;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var s=arguments[t];s&&(e=i(e,o(s)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var s in e)n.call(e,s)&&e[s]&&(t=i(t,s));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(s=function(){return r}.apply(t,[]))||(e.exports=s)}()}
/******/};
/************************************************************************/
/******/ // The module cache
/******/const t={};
/******/
/******/ // The require function
/******/function s(n){
/******/ // Check if module is in cache
/******/const r=t[n];
/******/if(void 0!==r)
/******/return r.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/const o=t[n]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[n](o,o.exports,s),o.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/s.n=e=>{
/******/const t=e&&e.__esModule?
/******/()=>e.default:
/******/()=>e;
/******/
/******/return s.d(t,{a:t}),t;
/******/},
/******/
/******/ /* webpack/runtime/define property getters */
/******/ // define getter/value functions for harmony exports
/******/s.d=(e,t)=>{
/******/if(Array.isArray(t))
/******/for(
/******/var n=0;n<t.length;){
/******/var r=t[n++],o=t[n++],i=0===o?{enumerable:!0,value:t[n++]}:{enumerable:!0,get:o};
/******/
/******/s.o(e,r)||Object.defineProperty(e,r,i)
/******/}
/******/else
/******/for(var r in t)
/******/s.o(t,r)&&!s.o(e,r)&&
/******/Object.defineProperty(e,r,{enumerable:!0,get:t[r]})
/******/;
/******/
/******/},
/******/
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/s.o=(e,t)=>Object.hasOwn(e,t),
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(()=>{"use strict";
/* unused harmony export StudentBulkActionButton */
/* harmony import */var e=s(56427),t=s(86087),n=s(52619),r=s(27723),o=s(69946),i=s(10790);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/**
 *  Student bulk action button.
 *
 * @param {Object}  props
 * @param {boolean} props.isDisabled Set button's initial state to be disabled or enabled, defaults to disabled.
 */
const l=({isDisabled:s=!0})=>{const[l,a]=(0,t.useState)("add"),[c,u]=(0,t.useState)(!1),[d,p]=(0,t.useState)([]),[m,h]=(0,t.useState)(""),[g,_]=(0,t.useState)(s),f=e=>{e&&window.location.reload(),u(!1)},b=e=>{_(!(e.detail&&e.detail.enable))};(0,t.useEffect)(()=>(globalThis.addEventListener("enableDisableCourseSelectionToggle",b),()=>{globalThis.removeEventListener("enableDisableCourseSelectionToggle",b)}),[]);const w=(0/* ["default"] */,i.jsx)(o.A,{action:l,onClose:f,students:d,studentDisplayName:m}),v=(0,n.applyFilters)("senseiStudentBulkActionModal",w,l,f,d,m);
return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.Button,{className:"button button-primary sensei-student-bulk-actions__button",disabled:g,id:"sensei-bulk-learner-actions-modal-toggle",onClick:()=>{const e=document.getElementById("bulk-action-selector-top"),t=Array.from(document.querySelectorAll("input.sensei_user_select_id:checked")),s=t.map(e=>Number(e.value));e&&(e=>{switch(e){case"enrol_restore_enrolment":a("add");break;case"remove_enrolment":a("remove");break;case"remove_progress":a("reset-progress");break;default:a(e)}})(e.value),p(s),1===t.length&&h(t[0].closest("tr").querySelector(".student-action-menu").getAttribute("data-user-display-name")),u(!0)},children:(0,r.__)("Select Action","sensei-lms")}),c&&v]})};Array.from(document.querySelectorAll("div.sensei-student-bulk-actions__button")).forEach(e=>{(0,t.createRoot)(e).render((0,i.jsx)(l,{}))})})()})();