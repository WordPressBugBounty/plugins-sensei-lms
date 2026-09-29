/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e={
/***/27723(e){e.exports=window.wp.i18n;
/***/}
/******/};
/************************************************************************/
/******/ // The module cache
/******/const r={};
/******/
/******/ // The require function
/******/function n(t){
/******/ // Check if module is in cache
/******/const a=r[t];
/******/if(void 0!==a)
/******/return a.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/const i=r[t]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[t](i,i.exports,n),i.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/n.n=e=>{
/******/const r=e&&e.__esModule?
/******/()=>e.default:
/******/()=>e;
/******/
/******/return n.d(r,{a:r}),r;
/******/},
/******/ // define getter/value functions for harmony exports
/******/n.d=(e,r)=>{
/******/if(Array.isArray(r))
/******/for(
/******/var t=0;t<r.length;){
/******/var a=r[t++],i=r[t++];
/******/
/******/n.o(e,a)?0===i&&t++
/******/:
/******/0===i?
/******/Object.defineProperty(e,a,{enumerable:!0,value:r[t++]}):
/******/Object.defineProperty(e,a,{enumerable:!0,get:i})
/******/}
/******/else
/******/for(var a in r)
/******/n.o(r,a)&&!n.o(e,a)&&
/******/Object.defineProperty(e,a,{enumerable:!0,get:r[a]})
/******/;
/******/
/******/},
/******/n.o=(e,r)=>Object.hasOwn(e,r)
/******/;
/******/
/************************************************************************/
/* harmony import */var t=n(27723);
/* harmony import */
/**
 * WordPress dependencies
 */
jQuery(document).ready(function(e){
/***************************************************************************************************
   * 	1 - Helper Functions.
   ***************************************************************************************************/
/**
   * exists checks if selector exists
   * @since  1.2.0
   * @return {boolean} Whether the selector matches any elements.
   */
jQuery.fn.exists=function(){return this.length>0},
/**
   * Calculates the total grade based on the questions already graded
   */
jQuery.fn.calculateTotalGrade=function(){let e,r,n=0,a=0;jQuery(".question_box.user_right").each(function(){e=jQuery(this).find(".question_id").val(),r=parseInt(jQuery(this).find("#question_"+e+"_grade").val()),n+=r,a++}),jQuery(".question_box.user_wrong").each(function(){a++}),jQuery("#total_graded_questions").val(a);const i=parseInt(jQuery("#total_questions").val()),s=parseInt(jQuery("#quiz_grade_total").val());let o="0";0<s&&(o=parseFloat(100*n/s).toFixed(2)),o=o.replace(".00",""),jQuery("#total_grade").val(n),jQuery(".total_grade_total").html(n),jQuery(".total_grade_percent").html(o),jQuery(".quiz_grade_total").html(s),i===a?(jQuery("#all_questions_graded").val("yes"),jQuery(".grade-button").val((0,t.__)("Grade","sensei-lms"))):(jQuery("#all_questions_graded").val("no"),jQuery(".grade-button").val((0,t.__)("Save","sensei-lms")))},jQuery.fn.updateFeedback=function(){jQuery(".question_box").each(function(){const e=jQuery(this).find(".question_id").val(),r=parseInt(jQuery(this).find("#question_"+e+"_grade").val()),n=jQuery(this).find(".answer-feedback-correct"),t=jQuery(this).find(".answer-feedback-incorrect");n.toggle(0<r),t.toggle(!r)})},
/**
   * Automatically grades questions where possible
   */
e.fn.autoGrade=function(){e(".question_box").each(function(){const r=e(this);let n=!1;
// Only grade questions that haven't already been graded.
if(r.hasClass("user_right")||r.hasClass("user_wrong")||r.hasClass("zero-graded"))jQuery(this).hasClass("zero-graded")&&(r.find(".grading-mark.icon_wrong input").attr("checked",!1),r.find(".grading-mark.icon_right input").attr("checked",!1),r.find("input.question-grade").val(0));else{let t,a;
// Auto-grading
if(r.addClass("ungraded"),r.hasClass("gap-fill")?(t=r.find(".user-answer").contents().find(".highlight").html(),a=r.find(".correct-answer .highlight").html()):(t=r.find(".user-answer").contents().find("body").map(function(){return this.innerHTML.trim()}).toArray().join("<br>"),a=r.find(".correct-answer").html()),t=t.trim(),a=a.trim(),r.hasClass("auto-grade")){
// Split answers to multiple choice questions into an array since there may be
// multiple correct answers.
if(r.hasClass("multiple-choice")){const r=t.split("<br>"),i=a.split("<br>");n=!0,r.forEach(function(r){-1===e.inArray(r,i)&&(n=!1)}),r.length!==i.length-1&&(n=!1)}else t=t.split("<br>")[0],a=a.split("<br>")[0];n||t===a?(
// Right answer
r.addClass("user_right").removeClass("user_wrong").removeClass("ungraded"),r.find(".grading-mark.icon_right input").attr("checked",!0),r.find(".grading-mark.icon_wrong input").attr("checked",!1),r.find("input.question-grade").val(r.find("input.question_total_grade").val())):(
// Wrong answer
r.addClass("user_wrong").removeClass("user_right").removeClass("ungraded"),r.find(".grading-mark.icon_wrong input").attr("checked",!0),r.find(".grading-mark.icon_right input").attr("checked",!1),r.find("input.question-grade").val(0))}else
// Manual grading
r.find(".grading-mark.icon_wrong input").attr("checked",!1),r.find(".grading-mark.icon_right input").attr("checked",!1),r.removeClass("user_wrong").removeClass("user_right");
// Question with a grade value of 0.
}}),e.fn.calculateTotalGrade(),e.fn.updateFeedback()},
// Calculate total grade on page load to make sure everything is set up correctly
jQuery.fn.autoGrade(),
/**
   * Resets all graded questions.
   */
jQuery.fn.resetGrades=function(){jQuery(".question_box").find(".grading-mark.icon_wrong input").attr("checked",!1),jQuery(".question_box").find(".grading-mark.icon_right input").attr("checked",!1),jQuery(".question_box").removeClass("user_wrong").removeClass("user_right").removeClass("ungraded"),jQuery(".question-grade").val("0"),jQuery.fn.calculateTotalGrade(),jQuery.fn.updateFeedback()},jQuery.fn.getQueryVariable=function(e){const r=window.location.search.substring(1).split("&");for(let n=0;n<r.length;n++){const t=r[n].split("=");if(t[0]===e)return t[1]}return!1},
/***************************************************************************************************
   * 	2 - Grading Overview Functions.
   ***************************************************************************************************/
/**
   * Course Change Event.
   *
   * @since 1.3.0
   * @access public
   */
jQuery("#grading-course-options").on("change","",function(){
// Populate the Lessons select box
const e=jQuery(this).val();return jQuery.get(ajaxurl,{action:"get_lessons_dropdown",course_id:e},function(e){
// Check for a response
""!==e&&(
// Empty the results div's
jQuery("#learners-to-grade").empty(),jQuery("#learners-graded").empty(),
// Populate the Lessons drop down
jQuery("#grading-lesson-options").empty().append(e),
// Add Chosen to the drop down
jQuery("#grading-lesson-options").exists()&&(
// Show the Lessons label
jQuery("#grading-lesson-options-label").show(),jQuery("#grading-lesson-options").trigger("change")))}),!1}),
/**
   * Lesson Change Event.
   *
   * @since 1.3.0
   * @access public
   */
jQuery("#grading-lesson-options").on("change","",function(){
// Populate the Lessons select box
const e=jQuery(this).val(),r=jQuery("#grading-course-options").val(),n=jQuery.fn.getQueryVariable("view");
// Perform the AJAX call to get the select box.
return jQuery.get(ajaxurl,{action:"get_redirect_url",course_id:r,lesson_id:e,view:n},function(e){
// Check for a response
""!==e&&(window.location=e)}),!1}),
/***************************************************************************************************
   * 	3 - Grading User Quiz Functions.
   ***************************************************************************************************/
/**
   * Grade change event
   *
   * @since 1.3.0
   * @access public
   */
jQuery(".grading-mark").on("change","input",function(){"right"===this.value?(jQuery("#"+this.name+"_box").addClass("user_right").removeClass("user_wrong ungraded"),jQuery("#"+this.name+"_box").find("input.question-grade").val(jQuery("#"+this.name+"_box").find("input.question_total_grade").val())):(jQuery("#"+this.name+"_box").addClass("user_wrong").removeClass("user_right ungraded"),jQuery("#"+this.name+"_box").find("input.question-grade").val(0)),jQuery.fn.calculateTotalGrade(),jQuery.fn.updateFeedback()}),
/**
   * Grade value change event
   *
   * @since 1.4.0
   * @access public
   */
jQuery(".question-grade").on("change","",function(){const e=parseInt(jQuery(this).val()),r=this.id.replace("_grade","");e>0?(jQuery("#"+r+"_box").addClass("user_right").removeClass("user_wrong"),jQuery("#"+r+"_box .grading-mark input."+r+"_right_option").attr("checked","checked"),jQuery("#"+r+"_box .grading-mark input."+r+"_wrong_option").attr("checked",!1)):(jQuery("#"+r+"_box").addClass("user_wrong").removeClass("user_right"),jQuery("#"+r+"_box .grading-mark input."+r+"_wrong_option").attr("checked","checked"),jQuery("#"+r+"_box .grading-mark input."+r+"_right_option").attr("checked",!1)),jQuery.fn.calculateTotalGrade(),jQuery.fn.updateFeedback()}),
/**
   * Grade reset event
   *
   * @since 1.3.0
   * @access public
   */
jQuery(".sensei-grading-main .buttons").on("click",".reset-button",function(){jQuery.fn.resetGrades()}),
/**
   * Auto grade event
   *
   * @since 1.3.0
   * @access public
   */
jQuery(".sensei-grading-main .buttons").on("click",".autograde-button",function(){
// Toggle manual-grade questions to auto-grade for question types that are able to be
// automatically graded, so that they will now be scored.
e(".boolean.manual-grade, .multiple-choice.manual-grade, .gap-fill.manual-grade").addClass("auto-grade").removeClass("manual-grade"),jQuery.fn.autoGrade()}),jQuery(".sensei-grading-main").length&&jQuery.fn.updateFeedback(),
/***************************************************************************************************
   * 	4 - Load Select2 Dropdowns.
   ***************************************************************************************************/
// Grading Overview Drop Downs
jQuery("#grading-course-options").exists()&&jQuery("#grading-course-options").select2(),jQuery("#grading-lesson-options").exists()&&jQuery("#grading-lesson-options").select2()})})();