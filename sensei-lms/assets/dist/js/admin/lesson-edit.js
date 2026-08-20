/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e={
/***/82127(e,s,t){
/* unused harmony export hasSomeBlocks */
/* harmony import */var o=t(47143),n=t(14309),r=t(43656),i=t(45953);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
// Sensei blocks by post type.
const l={outline:"sensei-lms/course-outline",takeCourse:"sensei-lms/button-take-course",contactTeacher:"sensei-lms/button-contact-teacher",courseProgress:"sensei-lms/course-progress",viewResults:"sensei-lms/button-view-results"},c={lessonActions:"sensei-lms/lesson-actions",lessonProperties:"sensei-lms/lesson-properties",contactTeacher:"sensei-lms/button-contact-teacher",featuredVideo:"sensei-lms/featured-video"},a={course:{"meta-box-course-lessons":[l.outline],"meta-box-module_course_mb":[l.outline],"meta-box-course-video":Object.values(l)},lesson:{"meta-box-lesson-info":[c.lessonProperties]}},u=(0,o.select)(r.store),d=(0,o.dispatch)(r.store),b=(0,o.select)(n.store),p=(0,o.dispatch)(n.store),m=u.isEditorPanelEnabled?u.isEditorPanelEnabled:b.isEditorPanelEnabled,v=d.toggleEditorPanelEnabled?d.toggleEditorPanelEnabled:p.toggleEditorPanelEnabled,g=(e,s=[])=>s.some(s=>{var t;return e.includes(s.name)||g(e,null!==(t=s.innerBlocks)&&void 0!==t?t:[])});
// Metabox replacements.
/* harmony export */t.d(s,[
/* harmony export */"b",0,e=>{if(!u)return;let s;(0,i/* ["default"] */.A)({subscribeListener:()=>{const e=u.getEditorBlocks();
// Check if blocks were changed.
e!==s&&(s=e,t())}});
/**
   * Toggle metaboxes if a replacement block is present or not.
   */
const t=()=>{const s=u.getEditorBlocks();Object.entries(a[e]).forEach(([e,t])=>{!g(t,s)!==m(e)&&v(e)}),
// Prevent submit course modules.
document.querySelectorAll("#module_course_mb input").forEach(e=>{e.disabled=!m("meta-box-module_course_mb")}),
// Don't submit lesson length and complexity values in metaboxes.
document.querySelectorAll("#lesson-info input, #lesson-info select").forEach(e=>{e.disabled=!m("meta-box-lesson-info")})};t()}])},
/***/45953(e,s,t){
/* harmony import */var o=t(47143);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Helper function to fire callbacks on editor lifecycles.
 *
 * @param {Object}   options
 * @param {Function} options.subscribeListener Callback called everytime the subscribe listener is called.
 * @param {Function} options.onSetDirty        Callback called when the editor becomes dirty.
 * @param {Function} options.onSaveStart       Callback called when editor starts saving.
 * @param {Function} options.onSave            Callback called when a save is completed.
 *
 * @return {Function} Unsubscribe function.
 */
const n=({subscribeListener:e=()=>{},onSetDirty:s=()=>{},onSaveStart:t=()=>{},onSave:n=()=>{}})=>{const r=(0,o.select)("core/editor");let i=!1,l=!1;return(0,o.subscribe)(()=>{e();const o=r.isEditedPostDirty(),c=r.isSavingPost()&&!r.isAutosavingPost();!l&&o?(
// If editor becomes dirty.
l=!0,s()):l=o,i&&!c?(
// If it completed a saving.
i=c,n()):!i&&c?(
// If it started saving.
i=c,t()):i=c})};
/* harmony default export */
/* harmony export */t.d(s,[
/* harmony export */"A",0,/* export default binding */n
/* harmony export */])},
/***/47143(e){e.exports=window.wp.data;
/***/},
/***/98490(e){e.exports=window.wp.domReady;
/***/},
/***/14309(e){e.exports=window.wp.editPost;
/***/},
/***/43656(e){e.exports=window.wp.editor;
/***/}
/******/};
/************************************************************************/
/******/ // The module cache
/******/const s={};
/******/
/******/ // The require function
/******/function t(o){
/******/ // Check if module is in cache
/******/const n=s[o];
/******/if(void 0!==n)
/******/return n.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/const r=s[o]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[o](r,r.exports,t),r.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/t.n=e=>{
/******/const s=e&&e.__esModule?
/******/()=>e.default:
/******/()=>e;
/******/
/******/return t.d(s,{a:s}),s;
/******/},
/******/ // define getter/value functions for harmony exports
/******/t.d=(e,s)=>{
/******/if(Array.isArray(s))
/******/for(
/******/var o=0;o<s.length;){
/******/var n=s[o++],r=s[o++];
/******/
/******/t.o(e,n)?0===r&&o++
/******/:
/******/0===r?
/******/Object.defineProperty(e,n,{enumerable:!0,value:s[o++]}):
/******/Object.defineProperty(e,n,{enumerable:!0,get:r})
/******/}
/******/else
/******/for(var n in s)
/******/t.o(s,n)&&!t.o(e,n)&&
/******/Object.defineProperty(e,n,{enumerable:!0,get:s[n]})
/******/;
/******/
/******/},
/******/t.o=(e,s)=>Object.hasOwn(e,s)
/******/;
/* harmony import */var o=t(98490),n=t.n(o),r=t(82127);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
n()(()=>{(0,r/* .startBlocksTogglingControl */.b)("lesson");
// Lessons Write Panel.
const e=jQuery("#lesson-complexity-options");e.length>0&&e.select2({width:"resolve"});const s=jQuery("#lesson-prerequisite-options");s.length>0&&s.select2({width:"resolve"});const t=jQuery("#lesson-course-options");t.length>0&&t.select2({width:"resolve"});const o=jQuery("#lesson-module-options");o.length>0&&o.select2({width:"resolve"}),
// Refresh the prerequisite meta box when the course changes in order to get the relevant prerequisites.
jQuery("#lesson-course-options").on("change",function(){
// Try to get the lesson ID from the wp data store. If not present, fallback to getting it from the DOM.
const e=wp.data.select("core/editor")?.getCurrentPostId()||jQuery("#post_ID").val(),s=jQuery(this).val();jQuery.get(ajaxurl,{action:"get_prerequisite_meta_box_content",lesson_id:e,course_id:s,security:window.sensei_lesson_metadata.get_prerequisite_meta_box_content_nonce},function(e){""!==e&&(
// Replace the meta box and re-initialize select2.
jQuery("> .inside","#lesson-prerequisite").html(e),jQuery("#lesson-prerequisite-options").select2({width:"resolve"}))})})})})();