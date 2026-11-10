/******/(()=>{// webpackBootstrap
/******/var e={
/***/33205(e,s,t){"use strict";
/* harmony export */t.d(s,{
/* harmony export */A:()=>/* binding */o
/* harmony export */});
/* harmony import */var n=t(10790),r=t(5573),o=(0,n.jsx)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(r.Path,{d:"M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"})});
/* harmony import */},
/***/5823(e,s,t){"use strict";
/* harmony export */t.d(s,{
/* harmony export */A:()=>/* binding */o
/* harmony export */});
/* harmony import */var n=t(10790),r=t(5573),o=(0,n.jsx)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(r.Path,{d:"M13 5c-3.3 0-6 2.7-6 6 0 1.4.5 2.7 1.3 3.7l-3.8 3.8 1.1 1.1 3.8-3.8c1 .8 2.3 1.3 3.7 1.3 3.3 0 6-2.7 6-6S16.3 5 13 5zm0 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"})});
/* harmony import */},
/***/21181(e,s,t){"use strict";
/* harmony export */t.d(s,{
/* harmony export */A:()=>/* binding */r
/* harmony export */});
/* harmony import */var n=t(86087);
/* harmony import */
/**
 * WordPress dependencies
 */
// Solution borrowed from https://gist.github.com/kentcdodds/b36572b6e9227207e6c71fd80e63f3b4.
function r(){const e=(0,n.useRef)(),s=(0,n.useCallback)(()=>(e.current||(e.current=new AbortController),e.current),[]);(0,n.useEffect)(()=>()=>s().abort(),[s]);return{getSignal:(0,n.useCallback)(()=>s().signal,[s])}}
/***/},
/***/37134(e,s,t){"use strict";
/* unused harmony export CourseList */
/* harmony import */var n=t(56427),r=t(86087),o=t(18537),i=t(27723),l=t(3582),a=t(93301),c=t(10790);
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
const u=()=>(0,c.jsx)("li",{className:"sensei-student-modal__course-list--loading",children:(0,c.jsx)(n.Spinner,{})}),d=()=>(0,c.jsx)("li",{className:"sensei-student-modal__course-list--empty",children:(0,i.__)("No courses found.","sensei-lms")}),p=({course:e,checked:s=!1,onChange:t})=>{const i=e?.id,l=(0,o.decodeEntities)(e?.title?.rendered),[a,u]=(0,r.useState)(s),d=(0,r.useCallback)(s=>{u(s),t({isSelected:s,course:e})},[e,t]);
return(0,c.jsxs)("li",{className:"sensei-student-modal__course-list__item",children:[(0,c.jsx)(n.CheckboxControl,{id:`course-${i}`,title:l,checked:a,onChange:d}),(0,c.jsx)("label",{htmlFor:`course-${i}`,title:l,children:l})]},i)},m=({searchQuery:e,onChange:s})=>{const t=(0,r.useRef)([]),n=(0,r.useCallback)(({isSelected:e,course:n})=>{t.current=e?[...t.current,n]:t.current.filter(e=>e.id!==n.id),s(t.current)},[s]),{courses:o,isFetching:m}=(0,a/* ["default"] */.A)(s=>{const t=s(l.store),n={per_page:100,search:e,filter:"teacher"};return{courses:t.getEntityRecords("postType","course",n)||[],isFetching:!t.hasFinishedResolution("getEntityRecords",["postType","course",n])}},[e],500);
return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("span",{className:"sensei-student-modal__course-list__header",children:(0,i.__)("Your Courses","sensei-lms")}),(0,c.jsxs)("ul",{className:"sensei-student-modal__course-list",children:[m&&(0,c.jsx)(u,{}),!m&&0===o.length&&(0,c.jsx)(d,{}),!m&&0<o.length&&o.map(e=>(0,c.jsx)(p,{course:e,onChange:n,checked:t.current.length>0&&t.current.find(({id:s})=>s===e.id)},e.id))]})]})};
/**
 * Empty course list component.
 */
/* harmony export */t.d(s,[
/* harmony export */"A",0,m
/* harmony export */])},
/***/69946(e,s,t){"use strict";
/* unused harmony export StudentModal */
/* harmony import */var n=t(56427),r=t(86087),o=t(5823),i=t(27723),l=t(89877),a=t(1455),c=t.n(a),u=t(37134),d=t(72108),p=t(21181),m=t(10790);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
const h=({action:e,onClose:s,students:t,studentDisplayName:a})=>{const{description:h,buttonLabel:g,errorMessage:_,isDestructive:f,sendAction:w}=((e,s,t)=>{const n=(0,l.escapeHTML)(t);return{add:{description:s>1?(0,i.sprintf)(
// Translators: placeholder is the number of selected students.
// Translators: placeholder is the number of selected students.
(0,i.__)("Select the course(s) you would like to add <strong>%d students</strong> to:","sensei-lms"),s):(0,i.sprintf)(
// Translators: placeholder is the student's name.
// Translators: placeholder is the student's name.
(0,i.__)("Select the course(s) you would like to add <strong>%s</strong> to:","sensei-lms"),n),buttonLabel:(0,i.__)("Add to Course","sensei-lms"),errorMessage:e=>(0,i._n)("We couldn't finish enrolling the selected student. You can repeat the enrollment action. If the problem continues, contact your site administrator for help.","We couldn't finish enrolling the selected students. You can repeat the enrollment action. If the problem continues, contact your site administrator for help.",e.length,"sensei-lms"),sendAction:(e,s,{signal:t})=>c()({path:"/sensei-internal/v1/course-students/batch",method:"POST",data:{student_ids:e,course_ids:s},signal:t}),isDestructive:!1},remove:{description:s>1?(0,i.sprintf)(
// Translators: placeholder is the number of selected students.
// Translators: placeholder is the number of selected students.
(0,i.__)("Select the course(s) you would like to remove <strong>%d students</strong> from:","sensei-lms"),s):(0,i.sprintf)(
// Translators: placeholder is the student's name.
// Translators: placeholder is the student's name.
(0,i.__)("Select the course(s) you would like to remove <strong>%s</strong> from:","sensei-lms"),n),buttonLabel:(0,i.__)("Remove from Course","sensei-lms"),errorMessage:e=>(0,i._n)("Unable to remove student. Please try again.","Unable to remove students. Please try again.",e.length,"sensei-lms"),sendAction:(e,s,{signal:t})=>c()({path:"/sensei-internal/v1/course-students/batch",method:"DELETE",data:{student_ids:e,course_ids:s},signal:t}),isDestructive:!0},"reset-progress":{
// Translators: placeholder is the number of selected students for plural, student's name for singular.
description:s>1?(0,i.sprintf)(
// Translators: placeholder is the number of selected students.
// Translators: placeholder is the number of selected students.
(0,i.__)("Select the course(s) you would like to reset progress from for <strong>%d students</strong>:","sensei-lms"),s):(0,i.sprintf)(
// Translators: placeholder is the student's name.
// Translators: placeholder is the student's name.
(0,i.__)("Select the course(s) you would like to reset progress from for <strong>%s</strong>:","sensei-lms"),n),buttonLabel:(0,i.__)("Reset Progress","sensei-lms"),errorMessage:e=>(0,i._n)("Unable to reset progress for this student. Please try again.","Unable to reset progress for these students. Please try again.",e.length,"sensei-lms"),sendAction:(e,s,{signal:t})=>c()({path:"/sensei-internal/v1/course-progress/batch",method:"DELETE",data:{student_ids:e,course_ids:s},signal:t}),isDestructive:!0}}[e]})(e,t.length,a),[x,v]=(0,r.useState)([]),[y,b]=(0,r.useState)(""),[j,S]=(0,r.useState)(!1),[C,A]=(0,r.useState)(!1),[k,N]=(0,r.useState)(!1),{getSignal:R}=(0,p/* ["default"] */.A)(),D=(0,r.useCallback)(async()=>{S(!0),A(!1);try{const n=await w(t,x.map(e=>e.id),{signal:R()});if("add"===e){
// A completed request can contain failed or missing student/course results.
const e=t.flatMap(e=>x.map(s=>!0===n?.[e]?.[s.id]));if(e.includes(!1)){const s=e.filter(Boolean).length,n=e.length-s,r=s>0;
// Keep the modal and selection available for retry.
return r&&
// Show saved enrollments when the modal is dismissed.
N(!0),A(r?(0,i.sprintf)(
// Translators: %1$d is completed enrollments; %2$d is failed enrollments.
// Translators: %1$d is completed enrollments; %2$d is failed enrollments.
(0,i._n)("%1$d enrollment completed; %2$d couldn't be completed. Successful enrollments were kept. You can repeat the action to retry the failed enrollments.","%1$d enrollments completed; %2$d couldn't be completed. Successful enrollments were kept. You can repeat the action to retry the failed enrollments.",s,"sensei-lms"),s,n):_(t)),void S(!1)}}s(!0)}catch{R().aborted||(A(_(t)),S(!1))}},[e,w,t,x,s,R,_]);
return(0,m.jsxs)(n.Modal,{className:"sensei-student-modal",title:(0,i.__)("Choose Course","sensei-lms"),onRequestClose:()=>s(k),children:[(0,m.jsx)(r.RawHTML,{children:h}),(0/* ["default"] */,m.jsx)(d.A,{iconRight:o/* ["default"] */.A,onChange:e=>b(e),placeholder:(0,i.__)("Search courses","sensei-lms"),value:y}),(0/* ["default"] */,m.jsx)(u.A,{searchQuery:y,onChange:e=>{v(e)}}),C&&(0,m.jsx)(n.Notice,{status:"error",isDismissible:!1,className:"sensei-student-modal__notice",children:C}),(0,m.jsx)("div",{className:"sensei-student-modal__action",children:(0,m.jsxs)(n.Button,{className:"sensei-student-modal__action",variant:f?"":"primary",onClick:()=>D(),disabled:j||0===x.length,isDestructive:f,children:[j&&(0,m.jsx)(n.Spinner,{}),g]})})]})};
/**
 * Student Actions Modal.
 *
 * @param {Object}   props
 * @param {Object}   props.action             Action that is being performed.
 * @param {Function} props.onClose            Close callback.
 * @param {Array}    props.students           A list of Student ids related to the action should be applied.
 * @param {string}   props.studentDisplayName Name of the student, shown when there's only one student.
 */
/* harmony export */t.d(s,[
/* harmony export */"A",0,h
/* harmony export */])},
/***/72108(e,s,t){"use strict";
/* harmony import */var n=t(4452),r=t.n(n),o=t(56427),i=t(10790);
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
const l=({className:e,id:s,label:t,value:n,help:l,iconRight:a,onChange:c,...u})=>(0,i.jsx)(o.BaseControl,{id:s,label:t,help:l,children:(0,i.jsxs)("div",{className:"sensei-input-control",children:[(0,i.jsx)("input",{className:r()("sensei-input-control__input",{"sensei-input-control__input--with-icon-right":a},e),type:"text",id:s,value:null===n?"":n,onChange:e=>c(e.target.value),...u}),a&&(0,i.jsx)("span",{className:"sensei-input-control__icon",children:(0,i.jsx)(o.Icon,{icon:a})})]})});
/* harmony default export */
/* harmony export */t.d(s,[
/* harmony export */"A",0,l
/* harmony export */])},
/***/93301(e,s,t){"use strict";
/* harmony import */var n=t(66087),r=t(47143),o=t(86087);
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
const i=(e,s,t)=>{const[i,l]=(0,o.useState)(s),a=(0,o.useCallback)((0,n.debounce)(l,t),[l,t]);
// eslint-disable-next-line react-hooks/exhaustive-deps -- Using debounce as callback.
return(0,o.useEffect)(()=>{a(s);
// eslint-disable-next-line react-hooks/exhaustive-deps -- Dependencies coming from args.
},s),(0,r.useSelect)(e,i)};
/* harmony default export */
/* harmony export */t.d(s,[
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
/***/4452(e,s){var t;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e="",s=0;s<arguments.length;s++){var t=arguments[s];t&&(e=i(e,o(t)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var s="";for(var t in e)n.call(e,t)&&e[t]&&(s=i(s,t));return s}function i(e,s){return s?e?e+" "+s:e+s:e}e.exports?(r.default=r,e.exports=r):void 0===(t=function(){return r}.apply(s,[]))||(e.exports=t)}()}
/******/};
/************************************************************************/
/******/ // The module cache
/******/const s={};
/******/
/******/ // The require function
/******/function t(n){
/******/ // Check if module is in cache
/******/const r=s[n];
/******/if(void 0!==r)
/******/return r.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/const o=s[n]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[n](o,o.exports,t),o.exports;
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
/******/if(Array.isArray(s))
/******/for(
/******/var n=0;n<s.length;){
/******/var r=s[n++],o=s[n++],i=0===o?{enumerable:!0,value:s[n++]}:{enumerable:!0,get:o};
/******/
/******/t.o(e,r)||Object.defineProperty(e,r,i)
/******/}
/******/else
/******/for(var r in s)
/******/t.o(s,r)&&!t.o(e,r)&&
/******/Object.defineProperty(e,r,{enumerable:!0,get:s[r]})
/******/;
/******/
/******/},
/******/
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/t.o=(e,s)=>Object.hasOwn(e,s),
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(()=>{"use strict";
/* unused harmony export StudentActionMenu */
/* harmony import */var e=t(56427),s=t(86087),n=t(33205),r=t(52619),o=t(27723),i=t(69946),l=t(10790);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/**
 * Student action menu.
 *
 * @param {Object} props
 * @param {string} props.studentId          Student's user id
 * @param {string} props.studentName        Student's user name.
 * @param {string} props.studentDisplayName Student's displayName.
 */
const a=({studentId:t,studentName:a,studentDisplayName:c})=>{const[u,d]=(0,s.useState)(""),[p,m]=(0,s.useState)(!1),h=e=>{e&&window.location.reload(),m(!1)},g=[{title:(0,o.__)("Add to Course","sensei-lms"),onClick:()=>f()},{title:(0,o.__)("Remove from Course","sensei-lms"),onClick:()=>w()},{title:(0,o.__)("Reset Progress","sensei-lms"),onClick:()=>x()},{title:(0,o.__)("Grading","sensei-lms"),onClick:()=>window.open(`admin.php?page=sensei_grading&view=ungraded&s=${a}`,"_self")}],_=(0,r.applyFilters)("senseiStudentActionMenuControls",g,d,m),f=()=>{d("add"),m(!0)},w=()=>{d("remove"),m(!0)},x=()=>{d("reset-progress"),m(!0)},v=(0/* ["default"] */,l.jsx)(i.A,{action:u,onClose:h,students:[t],studentDisplayName:c}),y=(0,r.applyFilters)("senseiStudentBulkActionModal",v,u,h,[t],c);
return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.DropdownMenu,{icon:n/* ["default"] */.A,label:(0,o.__)("Select an action","sensei-lms"),controls:_}),p&&y]})};Array.from(document.getElementsByClassName("student-action-menu")).forEach(e=>{(0,s.createRoot)(e).render((0,l.jsx)(a,{studentId:e?.dataset?.userId,studentName:e?.dataset?.userName,studentDisplayName:e?.dataset?.userDisplayName}))})})()})();