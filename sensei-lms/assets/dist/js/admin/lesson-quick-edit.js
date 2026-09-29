/******/ // webpackBootstrap
!function(e){
// we create a copy of the WP inline edit post function
const n=window.inlineEditPost.edit;
// and then we overwrite the function with our own code
window.inlineEditPost.edit=function(i){
// "call" the original WP edit function
// we don't want to leave WordPress hanging
n.apply(this,arguments);
// now we take care of our business
// get the post ID
let t=0;if(i instanceof Element&&(t=parseInt(this.getId(i))),t>0){
// define the edit row
const n=e("#edit-"+t),i=window["sensei_quick_edit_"+t];
//on the save button click, set senseiFieldValues to the values user entered in the form fields
n.find(".save").on("click",function(){e(".sensei-quiz-settings :input",n).each(function(){const n=e(this).attr("name"),t=e(this).val();i[n]=t})}),
// populate the data
//data is localized in sensei_quick_edit object
["on","1",1].includes(i.pass_required)?i.pass_required=1:i.pass_required=0,["on","1",1].includes(i.enable_quiz_reset)?i.enable_quiz_reset=1:i.enable_quiz_reset=0,"auto"===i.quiz_grade_type||"1"===i.quiz_grade_type?i.quiz_grade_type=1:i.quiz_grade_type=0,["yes","1",1].includes(i.random_question_order)?i.random_question_order=1:i.random_question_order=0;for(const[t,s]of Object.entries(i)){const i=e(':input[name="'+t+'"]',n);"INPUT"===i.prop("nodeName")?i.val(parseInt(s)):e(':input[name="'+t+'"] option[value="'+s+'"] ',n).attr("selected",!0)}}}}(jQuery);