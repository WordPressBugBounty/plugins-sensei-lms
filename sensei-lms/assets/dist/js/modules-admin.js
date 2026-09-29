/******/jQuery(document).ready(function(){const e=window._;
/**
   * Add select to the modules select boxes
   */
// module order screen
jQuery("select#module-order-course").select2({width:"resolve"}),
/**
   * Sortable functionality
   */
jQuery(".sortable-module-list").sortable(),jQuery(".sortable-tab-list").disableSelection(),jQuery(".sortable-module-list").on("sortstop",function(){let e="";jQuery(this).find(".module").each(function(o){o>0&&(e+=","),e+=jQuery(this).find("span").attr("rel")}),jQuery('input[name="module-order"]').val(e)}),
/**
   * Searching for courses on the modules admin edit screen
   */
jQuery("select.ajax_chosen_select_courses").select2({minimumInputLength:2,placeholder:window.modulesAdmin.selectplaceholder,width:"300px",multiple:!0,ajax:{
// in wp-admin ajaxurl is supplied by WordPress and is available globaly
url:ajaxurl,delay:250,dataType:"json",cache:!0,data:e=>({term:e.term,
//search term
page:e.page||1,action:"sensei_json_search_courses",security:window.modulesAdmin.search_courses_nonce,default:""}),processResults(e,o){const t=[];
// wrap the users inside results for select 2 usage
return jQuery.each(e,function(e,o){if(!jQuery.isEmptyObject(o)){const s={id:e,text:o};t.push(s)}}),{results:t,page:o}}}}),// end select2
jQuery("#sensei-module-add-toggle").on("click",function(){const e="wp-hidden-child",o=jQuery(this).parent().next("p#sensei-module-add"),t=o.children("#newmodule");if(o.hasClass(e))return o.removeClass(e),t.val(""),void t.focus();o.addClass(e)}),jQuery("#sensei-module-add-submit").on("click",function(){
// setup the fields
const o=jQuery(this).parent().children("#newmodule"),t=jQuery(this).parent().children("#add_module_nonce"),s=o.val(),n=t.val();if(e.isEmpty(s)||e.isEmpty(n))return void o.focus();const l=// webpackBootstrap
/**
 * Get the url qiuery paramater by name
 *
 * Credit: http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
 *
 * @param {string} name
 * @return {string}
 */
function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");const o=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===o?"":decodeURIComponent(o[1].replace(/\+/g," "))}("post"),r=jQuery("#module_course_mb #taxonomy-module #module-all ul#modulechecklist"),u={newTerm:s,security:n,action:"sensei_add_new_module_term",course_id:l,from_page:"course"};jQuery.post(ajaxurl,u,function(t){let s,n;if(t.success){
// make sure the return values are valid
if(s=t.data.termId,n=t.data.termName,!(parseInt(s)>0)||e.isEmpty(n))return void o.focus();
// setup the new list item
let l='<li id="module-'+s+'">';l+='<label class="selectit">',l+='<input value="'+s+'" type="checkbox" checked="checked" name="tax_input[module][]" id="in-module-'+s+'">',l+=n,l+="</label></li>",
// ad the list item
r.prepend(l),
// clear the input
o.val(""),o.focus()}else if(void 0!==t.data.errors&&void 0!==t.data.errors.term_exists){s=t.data.term.id;
// find term with id and just make sure it is
const e=r.find("#module-"+s+" input");
// checked also move the focus of the user there
e.prop("checked","checked"),
// then empty the field that was added
e.focus(),o.val("")}})});
/**
   * After changing the course teacher, it prevents updating the modules
   * until the next page refresh. Otherwise, some issues can happen because
   * the modules list in the frontend can be out of date with the server.
   */
const o=document.querySelector('select[name="sensei-course-teacher-author"]');o&&o.addEventListener("change",()=>{const e=document.querySelector("#module_course_mb");e&&e.parentNode.removeChild(e)}),
// Refresh the modules meta box on course select change.
jQuery("#lesson-course-options").on("change",function(){
// Try to get the lesson ID from the wp data store. If not present, fallback to getting it from the DOM.
const e=wp.data.select("core/editor")?.getCurrentPostId()||jQuery("#post_ID").val(),o=jQuery(this).val();jQuery.get(ajaxurl,{action:"sensei_get_lesson_module_metabox",lesson_id:e,course_id:o,security:window.modulesAdmin.getLessonModuleMetaBoxNonce},function(e){""!==e&&(
// Replace the meta box and re-initialize select2.
jQuery("> .inside","#module_select").html(e),jQuery("#lesson-module-metabox-select select#lesson-module-options").select2({width:"resolve"}))})})});