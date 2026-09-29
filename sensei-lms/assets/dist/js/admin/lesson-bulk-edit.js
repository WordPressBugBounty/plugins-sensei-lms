/******/ // webpackBootstrap
/**
 * Lesson bulk edit screen save functionality
 */
jQuery(function(e){e("#the-list").on("click","#bulk-edit #bulk_edit ",function(){
// define the bulk edit row
const s=e("#bulk-edit"),i=new Array;
// get the selected post ids that are being edited
s.find("#bulk-titles-list button").each(function(){i.push(e(this).attr("id").replace(/^(_)/i,""))});
// get the data:
//security as the wordpress nonce
const n=e('input[name="_edit_lessons_nonce"]').val(),t=s.find("#sensei-edit-lesson-course").val(),d=s.find("#sensei-edit-lesson-complexity").val(),a=s.find("#sensei-edit-lesson-pass-required").val(),_=s.find("#sensei-edit-quiz-pass-percentage").val(),o=s.find("#sensei-edit-enable-quiz-reset").val(),l=s.find("#sensei-edit-show-questions").val(),u=s.find("#sensei-edit-random-question-order").val(),r=s.find("#sensei-edit-quiz-grade-type").val();
// selected course value
// save the data
e.ajax({url:ajaxurl,
// this is a variable that WordPress has already defined for us
type:"POST",async:!1,cache:!1,data:{action:"save_bulk_edit_book",
// this is the name of our WP AJAX function that we'll set up next
security:n,
// sending the field values
sensei_edit_lesson_course:t,sensei_edit_complexity:d,sensei_edit_pass_required:a,sensei_edit_pass_percentage:_,sensei_edit_enable_quiz_reset:o,sensei_edit_show_questions:l,sensei_edit_random_question_order:u,sensei_edit_quiz_grade_type:r,
// post ids to apply the changes to
post_ids:i}})})});