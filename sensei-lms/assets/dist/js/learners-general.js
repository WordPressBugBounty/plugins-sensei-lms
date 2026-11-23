/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e={
/***/43813(e,t,r){
/* harmony import */var o=r(27723);
/* harmony import */
/* harmony export */r.d(t,[
/* harmony export */"A",0,()=>(0,o.__)("We couldn't finish resetting progress. Some progress or quiz answers may already have been cleared. Refresh the page and review student progress before taking further action. If it looks inconsistent, contact your site administrator.","sensei-lms")])},
/***/27723(e){e.exports=window.wp.i18n;
/***/}
/******/};
/************************************************************************/
/******/ // The module cache
/******/const t={};
/******/
/******/ // The require function
/******/function r(o){
/******/ // Check if module is in cache
/******/const n=t[o];
/******/if(void 0!==n)
/******/return n.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/const s=t[o]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[o](s,s.exports,r),s.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/r.n=e=>{
/******/const t=e&&e.__esModule?
/******/()=>e.default:
/******/()=>e;
/******/
/******/return r.d(t,{a:t}),t;
/******/},
/******/
/******/ /* webpack/runtime/define property getters */
/******/ // define getter/value functions for harmony exports
/******/r.d=(e,t)=>{
/******/if(Array.isArray(t))
/******/for(
/******/var o=0;o<t.length;){
/******/var n=t[o++],s=t[o++],a=0===s?{enumerable:!0,value:t[o++]}:{enumerable:!0,get:s};
/******/
/******/r.o(e,n)||Object.defineProperty(e,n,a)
/******/}
/******/else
/******/for(var n in t)
/******/r.o(t,n)&&!r.o(e,n)&&
/******/Object.defineProperty(e,n,{enumerable:!0,get:t[n]})
/******/;
/******/
/******/},
/******/
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/r.o=(e,t)=>Object.hasOwn(e,t);
/* harmony import */var o=r(27723),n=r(43813);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
jQuery(document).ready(function(e){
/***************************************************************************************************
   * 	1 - Helper Functions.
   ***************************************************************************************************/
/**
   * exists checks if selector exists
   * @since  1.6.0
   * @return {boolean} Whether the selector matches any elements.
   */
jQuery.fn.exists=function(){return this.length>0},jQuery(".edit-date-date-picker").datepicker({
// The space and colon characters are added to allow users typing a datetime manually.
dateFormat:"yy-mm-dd :",onSelect(t){const r=e(this).attr("value").split(" ");t.indexOf(" :")>-1&&(t=t.substring(0,t.length-2)),r[1]&&(t=t+" "+r[1]),e(this).val(t)}}),
/***************************************************************************************************
   * 	2 - Learner Management Overview Functions.
   ***************************************************************************************************/
/**
   * Used for student enrolment hints.
   *
   * @since 3.0.0
   */
jQuery(document).tooltip({items:".sensei-tooltip",tooltipClass:"sensei-ui-tooltip",content(){return jQuery(this).data("tooltip")}}),
/**
   * Course Category Change Event.
   *
   * @since 1.6.0
   * @access public
   */
jQuery("#course-category-options").on("change","",function(){const e="course_cat="+jQuery(this).val();jQuery.post(ajaxurl,{action:"get_redirect_url_learners",data:e,security:window.woo_learners_general_data.course_category_nonce},function(e){
// Check for a response
""!==e&&(window.location=e)})}),e(".edit-start-date-submit").click(function(){const t=e(this),r=t.attr("data-user-id"),o=t.attr("data-post-id"),n=t.attr("data-post-type"),s={};if(t.parents("tr").find(".edit-date-date-picker").each((e,t)=>{s[t.getAttribute("data-name")]=t.value}),!r||!o||!n||0===Object.keys(s).length)return;const a={user_id:r,post_id:o,post_type:n,new_dates:s},i=t.closest("table");i.prev(".sensei-edit-date-error").remove(),e.post(ajaxurl,{action:"edit_date_started",data:a,security:window.woo_learners_general_data.edit_date_nonce},function(e){e&&location.reload()}).fail(function(){e("<div>",{class:"sensei-edit-date-error notice notice-error",role:"alert"}).append(e("<p>").text(window.woo_learners_general_data.edit_date_error)).insertBefore(i)})}),jQuery(".learner-action").click(function(e){const t=jQuery(this).attr("data-action"),r={withdraw:{message:window.woo_learners_general_data.remove_from_course_confirm,eventName:"learner_management_remove_enrollment"},enrol:{message:window.woo_learners_general_data.enrol_in_course_confirm,eventName:"learner_management_enroll"},restore_enrollment:{message:window.woo_learners_general_data.restore_enrollment_confirm,eventName:"learner_management_restore_enrollment"}}[t];if(void 0===r)return;const o=r.message;
// eslint-disable-next-line no-alert -- Intentional confirmation before a destructive enrollment change.
if(confirm(o)){const e=jQuery(this).attr("data-provider"),t=e?{provider:e}:null;window.sensei_log_event(r.eventName,t)}else e.preventDefault()}),jQuery(".learner-async-action").click(function(){let t="";const r=jQuery(this).attr("data-action");let s=window.woo_learners_general_data.remove_generic_confirm;const a={remove_progress:{lesson:window.woo_learners_general_data.remove_from_lesson_confirm,course:window.woo_learners_general_data.remove_progress_confirm,action:"remove_user_from_post",errorMessage:(0,o.__)("We couldn't finish removing progress. Some progress or quiz answers may already have been cleared. Refresh the page and review student progress before taking further action. If it looks inconsistent, contact your site administrator.","sensei-lms")},reset_progress:{lesson:window.woo_learners_general_data.reset_lesson_confirm,course:window.woo_learners_general_data.reset_course_confirm,action:"reset_user_post",errorMessage:(0,n/* .resetProgressErrorMessage */.A)()}};if(void 0===a[r])return;const i=jQuery(this).attr("data-post-type");
// eslint-disable-next-line no-alert -- Intentional confirmation before a destructive progress change.
if(s=a[r][i],!confirm(s))return;const d=jQuery(this).attr("data-user-id"),c=jQuery(this).attr("data-post-id"),l=jQuery(this).closest("tr"),_=()=>{const t=l.closest("table");t.prev(".sensei-progress-action-error").remove(),e("<div>",{class:"sensei-progress-action-error notice notice-error",role:"alert"}).append(e("<p>").text(a[r].errorMessage)).insertBefore(t)};if(d&&c&&i){t+="user_id="+d,t+="&post_id="+c,t+="&post_type="+i;const e=jQuery.post(ajaxurl,{action:a[r].action,data:t,security:window.woo_learners_general_data.modify_user_post_nonce});e.done(function(e){"removed"===e||"altered"===e?"removed"!==e?"reset_progress"===r&&(l.find(".column-user_status").text("course"===i?window.slgL10n.notstarted:window.slgL10n.inprogress),l.find(".column-date_completed").text("-")):l.fadeTo(400,0,function(){l.remove()}):
// The legacy handlers return an empty body when the action fails.
_()}),e.fail(_),window.sensei_log_event("learner_management_"+r)}});const t=jQuery("select#add_learner_search"),r=jQuery("[name='add_learner_submit']").first(),s=jQuery(".sensei-learners-extra .add-student-form-container");t.select2({minimumInputLength:3,placeholder:window.woo_learners_general_data.selectplaceholder,width:"100%",ajax:{
// in wp-admin ajaxurl is supplied by WordPress and is available globaly
url:window.ajaxurl,dataType:"json",cache:!0,id:e=>e._id,data:e=>({term:e.term,
//search term
page:e.page||1,action:"sensei_json_search_users",security:window.woo_learners_general_data.search_users_nonce,default:""}),processResults(e,t){const r=[];
// wrap the users inside results for select 2 usage
return jQuery.each(e,function(e,t){jQuery.isEmptyObject(t)||r.push({id:e,text:t})}),{results:r,page:t}}}}),// end select2
t.on("change.select2",()=>{const e=t.select2("data").length<1;r.prop("disabled",e),e?s.addClass("student-search-empty"):s.removeClass("student-search-empty")});
// For mobile devices (below 783px) put the filters and bulk actions below the table, else keep above.
const a=e(".tablenav.top > .sensei-student-bulk-actions__wrapper").first(),i=e(".tablenav.bottom > .tablenav-pages"),d=e(".tablenav.top > .tablenav-pages"),c=e("#woothemes-sensei"),l=()=>{const t=e(window).width(),r=t<783?i:d,o=t<783?"inherit":"";r.has(a).length||(r.before(a),c.css({position:o}))};l(),e(window).resize(l),
/***************************************************************************************************
   * 	3 - Load Select2 Dropdowns.
   ***************************************************************************************************/
// Learner Management Drop Downs
jQuery("#course-category-options").exists()&&jQuery("#course-category-options").select2()})})();