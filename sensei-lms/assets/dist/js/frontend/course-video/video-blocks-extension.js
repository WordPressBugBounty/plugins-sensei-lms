/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e={
/***/95656(e,t,n){
/* harmony import */var r=n(52619);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * The Course Video Progression settings.
 */
const{courseVideoRequired:o,courseVideoAutoComplete:s,courseVideoAutoPause:i}=window.sensei.courseVideoSettings,a={},d=()=>{let e=!0;for(const t in a)a[t].completed||(e=!1);
/**
   * Tells if all the required videos for the current lesson are finished playing or not.
   *
   * @since 4.4.3
   *
   * @hook sensei.videoProgression.allCompleted Hook used to tell if all the required videos for the current lesson have finished playing.
   *
   * @param {boolean} allCompleted Whether all the required videos for the current lesson are completed.
   */return e=(0,r.applyFilters)("sensei.videoProgression.allCompleted",e),e},u=()=>{(0,r.applyFilters)("sensei.videoProgression.preventLessonCompletion",!0)&&document.querySelectorAll('[data-id="complete-lesson-button"]').forEach(e=>{e.disabled=!0,e.addEventListener("click",l)})},l=e=>(e.preventDefault(),!1),c=()=>{(0,r.applyFilters)("sensei.videoProgression.allowLessonCompletion",!0)&&document.querySelectorAll('[data-id="complete-lesson-button"]').forEach(e=>{e.removeEventListener("click",l),e.disabled=!1})},m=()=>{const e=document.querySelector('[data-id="complete-lesson-button"]');e&&setTimeout(()=>{e.click()},3e3)};
/**
 * Map of videos.
 */
/**
 * If pause video setting is set. Then attach an event listener
 * to detect user navigating away and pause the videos.
 */
i&&void 0!==document.hidden&&document.addEventListener("visibilitychange",()=>{if(document.hidden)for(const e in a){const t=a[e].pauseVideo;"function"==typeof t&&t()}},!1)
/* harmony export */,n.d(t,[
/* harmony export */"J",0,({pauseVideo:e=()=>{},registerVideoEndHandler:t=()=>{},url:n="",blockElement:i})=>{const l=i.hasAttribute("data-sensei-is-required"),p=i.hasAttribute("data-sensei-is-not-required");
// Block level setting overwrites the course level setting.
(l||o&&!p)&&(
/**
     * Called when a required video for the current lesson is registered.
     *
     * @since 4.4.3
     *
     * @hook sensei.videoProgression.registerVideo Hook used to run an arbitrary code when new required
     *                                             video for the current lesson is registered.
     * @param {Object}      video
     * @param {string}      video.url          The source url of the video.
     * @param {HTMLElement} video.blockElement The video block DOM element.
     */
/**
     * Called when a required video for the current lesson is registered.
     *
     * @since 4.4.3
     *
     * @hook sensei.videoProgression.registerVideo Hook used to run an arbitrary code when new required
     *                                             video for the current lesson is registered.
     * @param {Object}      video
     * @param {string}      video.url          The source url of the video.
     * @param {HTMLElement} video.blockElement The video block DOM element.
     */
(0,r.doAction)("sensei.videoProgression.registerVideo",{url:n,blockElement:i}),a[n]={pauseVideo:e,completed:!1},u()),t(()=>{
// Block level setting overwrites the course level setting.
(l||o&&!p)&&(
/**
       * Called when a required video for the current lesson is finished playing.
       *
       * @since 4.4.3
       *
       * @hook sensei.videoProgression.videoEnded Hook used to run an arbitrary code when a required video
       *                                          for the current lesson is finished playing.
       * @param {Object} video
       * @param {string} video.url The source url of the video.
       */
/**
       * Called when a required video for the current lesson is finished playing.
       *
       * @since 4.4.3
       *
       * @hook sensei.videoProgression.videoEnded Hook used to run an arbitrary code when a required video
       *                                          for the current lesson is finished playing.
       * @param {Object} video
       * @param {string} video.url The source url of the video.
       */
(0,r.doAction)("sensei.videoProgression.videoEnded",{url:n}),a[n].completed=!0,d()&&c()),s&&d()&&m()})}])},
/***/40839(e,t,n){
/* harmony import */var r=n(95656),o=n(53791);
/* harmony import */
/**
 * Internal dependencies
 */
/**
 * Initializes the Video block player.
 *
 * @param {HTMLElement} video The video element of the Video block.
 */
const s=e=>{const t=new o/* ["default"] */.A(e);(0,r/* .registerVideo */.J)({registerVideoEndHandler:e=>{t.on("ended",e)},pauseVideo:()=>{t.pause()},url:e.src.split("?")[0],blockElement:e.closest("figure")})};
/* harmony export */n.d(t,[
/* harmony export */"F",0,()=>{document.querySelectorAll(".wp-block-video video").forEach(s)}])},
/***/28908(e,t,n){
/* harmony import */var r=n(95656),o=n(53791);
/* harmony import */
/**
 * Internal dependencies
 */
/**
 * Initializes the VideoPress block player.
 *
 * @param {HTMLIFrameElement} iframe The iframe of the VideoPress block.
 */
const s=e=>{const t=new o/* ["default"] */.A(e);(0,r/* .registerVideo */.J)({registerVideoEndHandler:e=>{t.on("ended",e)},pauseVideo:()=>{t.pause()},url:e.src.split("?")[0],blockElement:e.closest("figure")})};
/* harmony export */n.d(t,[
/* harmony export */"s",0,()=>{document.querySelectorAll(".wp-block-embed-videopress iframe, .wp-block-jetpack-videopress iframe").forEach(s)}])},
/***/23572(e,t,n){
/* harmony import */var r=n(95656),o=n(53791);
/* harmony import */
/**
 * Internal dependencies
 */
/**
 * Initializes Vimeo block video player.
 *
 * @param {HTMLElement} iframe The iframe element of the Vimeo video block.
 */
const s=e=>{const t=new o/* ["default"] */.A(e),n="https://vimeo.com/"+e.src.split("?")[0].split("/").pop();
// iframe.src should be in the format:
// https://player.vimeo.com/video/VIDEO_ID?other-query-parameters=and-their-values
(0,r/* .registerVideo */.J)({pauseVideo:()=>{t.pause()},registerVideoEndHandler:e=>{t.on("ended",e)},url:n,blockElement:e.closest("figure")})};
/* harmony export */n.d(t,[
/* harmony export */"k",0,()=>{document.querySelectorAll(".wp-block-embed-vimeo iframe").forEach(s)}])},
/***/99821(e,t,n){
/* harmony import */var r=n(95656),o=n(53791);
/* harmony import */
/**
 * Internal dependencies
 */
/**
 * Initializes the YouTube video block player.
 *
 * @param {HTMLElement} iframe The iframe element of the YouTube video block.
 */
const s=e=>{const t=new o/* ["default"] */.A(e),n="https://www.youtube.com/watch?v="+e.src.split("?")[0].split("/").pop();
// iframe.src should be in the format:
// https://www.youtube.com/embed/VIDEO_ID?other-query-parameters=and-their-values&origin=https://example.com
(0,r/* .registerVideo */.J)({pauseVideo:()=>{t.pause()},registerVideoEndHandler:e=>{t.on("ended",e)},url:n,blockElement:e.closest("figure")})};
/* harmony export */n.d(t,[
/* harmony export */"Z",0,()=>{document.querySelectorAll(".wp-block-embed-youtube iframe").forEach(s)}])},
/***/53791(e,t,n){
/* unused harmony export useVideoDuration */
/* unused harmony import specifier */n(86087);
/* unused harmony import specifier */var r=n(78889),o=n(38439),s=n(52204),i=n(99697),a=n(9737),d={};n.r(d),n.d(d,{ADAPTER_NAME:()=>r.U,getCurrentTime:()=>r.Ln,getDuration:()=>r.Ds,initializePlayer:()=>r.qf,onEnded:()=>r.g9,onTimeupdate:()=>r.a8,pause:()=>r.v7,play:()=>r.ZH,setCurrentTime:()=>r.hW});var u={};n.r(u),n.d(u,{ADAPTER_NAME:()=>o.U,EMBED_PATTERN:()=>o.DM,getCurrentTime:()=>o.Ln,getDuration:()=>o.Ds,initializePlayer:()=>o.qf,onEnded:()=>o.g9,onTimeupdate:()=>o.a8,pause:()=>o.v7,play:()=>o.ZH,setCurrentTime:()=>o.hW});var l={};n.r(l),n.d(l,{ADAPTER_NAME:()=>s.U,EMBED_PATTERN:()=>s.DM,getCurrentTime:()=>s.Ln,getDuration:()=>s.Ds,initializePlayer:()=>s.qf,onEnded:()=>s.g9,onTimeupdate:()=>s.a8,pause:()=>s.v7,play:()=>s.ZH,setCurrentTime:()=>s.hW});var c={};n.r(c),n.d(c,{ADAPTER_NAME:()=>i.U,EMBED_PATTERN:()=>i.DM,getCurrentTime:()=>i.Ln,getDuration:()=>i.Ds,initializePlayer:()=>i.qf,onEnded:()=>i.g9,onTimeupdate:()=>i.a8,pause:()=>i.v7,play:()=>i.ZH,setCurrentTime:()=>i.hW});
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
const m=r/* .ADAPTER_NAME */.U,p=o/* .ADAPTER_NAME */.U,h=s/* .ADAPTER_NAME */.U,v=i/* .ADAPTER_NAME */.U,g={[m]:d,[p]:u,[h]:l,[v]:c};
/**
 * Hook to get the video duration.
 *
 * @param {Object} player Player instance.
 *
 * @return {number|undefined} The video duration.
 */
const y=
/**
 * A class that abstracts the use of the player APIs: Video, VideoPress, YouTube, and Vimeo.
 */
class{
/**
   * Player constructor.
   *
   * @param {HTMLVideoElement|HTMLIFrameElement} element The player element.
   * @param {Window}                             w       A custom window.
   */
constructor(e,t=window){this.playerPromise=null,this.adapterName=null,this.element=e,this.w=t,this.setAdapter()}
/**
   * Set the player adapter.
   */setAdapter(){this.element instanceof this.w.HTMLVideoElement?this.adapterName=m:this.element instanceof this.w.HTMLIFrameElement&&(this.adapterName=Object.entries(g).find(([,{EMBED_PATTERN:e=null}])=>e&&this.element.src?.match(e))?.[0]),this.adapterName||
// eslint-disable-next-line no-console -- We want to expose the element with problem.
console.error("Video adapter not found",this.element)}
/**
   * Get the adapter.
   *
   * @access private
   *
   * @return {Object} The adapter.
   */getAdapter(){return g[this.adapterName]}
/**
   * Get the video player.
   *
   * @return {Promise<Object|HTMLVideoElement|HTMLIFrameElement>} The video player through a promise.
   */getPlayer(){return this.playerPromise||(this.playerPromise=this.getAdapter()?.initializePlayer(this.element,this.w)||
// A promise that never resolves if it doesn't exist.
Promise.reject(new Error("Failed getting the player"))),this.playerPromise}
/**
   * Get the video duration.
   *
   * @return {Promise<number>} The duration of the video in seconds through a promise.
   */getDuration(){return this.getPlayer().then(e=>this.getAdapter().getDuration(e))}
/**
   * Get the video current time.
   *
   * @return {Promise<number>} The current video time in seconds through a promise.
   */getCurrentTime(){return this.getPlayer().then(e=>this.getAdapter().getCurrentTime(e)).then(e=>(0,a/* ["default"] */.A)(e,3))}
/**
   * Set the video to a current time.
   *
   * @param {number} seconds The video time in seconds to set.
   *
   * @return {Promise} A promise that resolves if the video was set to a current time successfully.
   */setCurrentTime(e){return this.getPlayer().then(t=>this.getAdapter().setCurrentTime(t,e))}
/**
   * Play the video.
   *
   * @return {Promise} A promise that resolves if the video play was called successfully.
   */play(){return this.getPlayer().then(e=>this.getAdapter().play(e))}
/**
   * Pause the video.
   *
   * @return {Promise} A promise that resolves if the video pause was called successfully.
   */pause(){return this.getPlayer().then(e=>this.getAdapter().pause(e))}
/**
   * Add an event listener to the player.
   *
   * @param {string}   eventName Event name (supported: `timeupdate`).
   * @param {Function} callback  Listener callback.
   *
   * @throws Will throw an error if the event is not supported.
   *
   * @return {Promise<Function>} The function to unsubscribe the event through a promise.
   */on(e,t){
// Supported events.
const n={timeupdate:this.onTimeUpdate.bind(this),ended:this.onEnded.bind(this)}[e];if(!n)throw new Error(`Event ${e} not supported`);return n(t)}
/**
   * Wrapper to the `onTimeUpdate` event from the adapters.
   *
   * @access private
   *
   * @param {Function} callback Listener callback.
   *
   * @return {Promise<Function>} The function to unsubscribe the event through a promise.
   */onTimeUpdate(e){const t=t=>{e((0,a/* ["default"] */.A)(t,3))};return this.getPlayer().then(e=>this.getAdapter().onTimeupdate(e,t,this.w))}
/**
   * Wrapper to the `onEnded` event from the adapters.
   *
   * @access private
   *
   * @param {Function} callback Listener callback.
   *
   * @return {Promise<Function>} The function to unsubscribe the event through a promise.
   */onEnded(e){return this.getPlayer().then(t=>this.getAdapter().onEnded(t,e,this.w))}};
/* harmony default export */
/* harmony export */n.d(t,[
/* harmony export */"A",0,/* export default binding */y
/* harmony export */])},
/***/9737(e,t,n){
/**
 * Round a number with certain amount of decimal digits.
 *
 * @param {number} number The number to be rounded.
 * @param {number} digits The number of digits to appear after the decimal point.
 *
 * @return {number} Rounded number.
 */
const r=(e,t)=>{const n=Math.pow(10,t);return Math.round((e+Number.EPSILON)*n)/n};
/* harmony default export */
/* harmony export */n.d(t,[
/* harmony export */"A",0,/* export default binding */r
/* harmony export */])},
/***/78889(e,t,n){n.r(t);
/* harmony export */n.d(t,[
/* harmony export */"Ds",0,e=>new Promise(t=>{t(e.duration)}),
/* harmony export */"Ln",0,e=>new Promise(t=>{t(e.currentTime)}),
/* harmony export */"U",0,"video-file",
/* harmony export */"ZH",0,e=>e.play(),
/* harmony export */"a8",0,(e,t)=>{const n=e=>{t(e.target.currentTime)};return e.addEventListener("timeupdate",n),()=>{e.removeEventListener("timeupdate",n)}},
/* harmony export */"g9",0,(e,t)=>(e.addEventListener("ended",t),()=>{e.removeEventListener("timeupdate",t)}),
/* harmony export */"hW",0,(e,t)=>new Promise(n=>{e.currentTime=t,n()}),
/* harmony export */"qf",0,e=>new Promise(t=>{
// Return that it's ready when it can get the video duration.
isNaN(e.duration)||t(e),e.addEventListener("durationchange",()=>{t(e)},{once:!0})}),
/* harmony export */"v7",0,e=>new Promise((t,n)=>{e.pause(),e.paused&&t(),n(new Error("Video didn't pause"))})])},
/***/38439(e,t,n){n.r(t);
/**
 * Adapter name.
 */
const r=e=>new Promise(t=>{e.contentWindow.postMessage({event:"videopress_action_play"},"*"),t()}),o=e=>new Promise(t=>{e.contentWindow.postMessage({event:"videopress_action_pause"},"*"),t()});
/**
 * The embed pattern to check if it's the respective type.
 */
/* harmony export */n.d(t,[
/* harmony export */"DM",0,/(videopress|video\.wordpress)\.com\/.+/i,
/* harmony export */"Ds",0,e=>new Promise((t,n)=>{const{duration:r}=e.dataset;r||n(new Error("Video duration not found")),t(parseFloat(r))}),
/* harmony export */"Ln",0,e=>new Promise((t,n)=>{const{currentTime:r}=e.dataset;r?t(parseFloat(r)):n(new Error("Video current time not found"))}),
/* harmony export */"U",0,"videopress",
/* harmony export */"ZH",0,/* binding */r,
/* harmony export */"a8",0,(e,t,n=window)=>{const r=n=>{n.source===e.contentWindow&&"videopress_timeupdate"===n.data.event&&n.data.currentTimeMs&&t(n.data.currentTimeMs/1e3)};return n.addEventListener("message",r),()=>{n.removeEventListener("message",r)}},
/* harmony export */"g9",0,(e,t,n=window)=>{const r=n=>{n.source===e.contentWindow&&"videopress_ended"===n.data.event&&t()};return n.addEventListener("message",r),()=>{n.removeEventListener("message",r)}},
/* harmony export */"hW",0,(e,t)=>new Promise(n=>{const s=()=>{e.contentWindow.postMessage({event:"videopress_action_set_currenttime",currentTime:t},"*"),n()};e.dataset.hasPlayed?s():r(e).then(()=>o(e)).then(s)}),
/* harmony export */"qf",0,(e,t=window)=>new Promise(n=>{
// It was already initialized earlier.
const{duration:r}=e.dataset;if(r)return void n(e);t.addEventListener("message",t=>{if(t.source!==e.contentWindow)return;const{data:r}=t;"videopress_durationchange"===r.event&&r.durationMs?(
// Set the duration to a dataset in order to be available later,
// and consider the initialization done.
e.dataset.duration=r.durationMs/1e3,
// If current time didn't return yet, set it to `0`.
e.dataset.currentTime||(e.dataset.currentTime=0),n(e)):"videopress_timeupdate"===r.event&&r.currentTimeMs?
// Set the current time to a dataset in order to be available later.
e.dataset.currentTime=r.currentTimeMs/1e3:"videopress_play"===r.event&&(
// Identify that video was already played.
e.dataset.hasPlayed="has-played")})}),
/* harmony export */"v7",0,/* binding */o
/* harmony export */])},
/***/99697(e,t,n){n.r(t);
/**
 * Adapter name.
 */
const r=e=>e.play(),o=e=>e.pause();
/**
 * The embed pattern to check if it's the respective type.
 */
/* harmony export */n.d(t,[
/* harmony export */"DM",0,/vimeo\.com\/.+/i,
/* harmony export */"Ds",0,e=>e.getDuration(),
/* harmony export */"Ln",0,e=>e.getCurrentTime(),
/* harmony export */"U",0,"vimeo",
/* harmony export */"ZH",0,/* binding */r,
/* harmony export */"a8",0,(e,t)=>{const n=e=>{t(e.seconds)};return e.on("timeupdate",n),()=>{e.off("timeupdate",n)}},
/* harmony export */"g9",0,(e,t)=>(e.on("ended",t),()=>{e.off("ended",t)}),
/* harmony export */"hW",0,(e,t)=>e.element.dataset.hasPlayed?e.setCurrentTime(t):r(e).then(()=>o(e)).then(()=>e.setCurrentTime(t)),
/* harmony export */"qf",0,(e,t=window)=>{const n=new t.Vimeo.Player(e),r=()=>{e.dataset.hasPlayed="has-played",n.off("play",r)};
// Add a dataset to identify if video has played already.
return"has-played"!==e.dataset.hasPlayed&&n.on("play",r),n.ready().then(()=>n)},
/* harmony export */"v7",0,/* binding */o
/* harmony export */])},
/***/52204(e,t,n){n.r(t);
/**
 * Adapter name.
 */
const r=e=>new Promise(t=>{e.playVideo(),t()}),o=e=>new Promise(t=>{e.pauseVideo(),t()});
/**
 * The embed pattern to check if it's the respective type.
 */
/* harmony export */n.d(t,[
/* harmony export */"DM",0,/(youtu\.be|youtube\.com)\/.+/i,
/* harmony export */"Ds",0,e=>new Promise(t=>{t(e.getDuration())}),
/* harmony export */"Ln",0,e=>new Promise(t=>{t(e.getCurrentTime())}),
/* harmony export */"U",0,"youtube",
/* harmony export */"ZH",0,/* binding */r,
/* harmony export */"a8",0,(e,t,n=window)=>{let r;const o=e=>{r!==e&&(t(e),r=e)},s=setInterval(()=>{e.getPlayerState()!==n.YT.PlayerState.ENDED&&o(e.getCurrentTime())},250),i=()=>{e.getPlayerState()===n.YT.PlayerState.ENDED&&o(e.getDuration())};
// Update the current time based on an interval.
return e.addEventListener("onStateChange",i),()=>{clearInterval(s),e.removeEventListener("onStateChange",i)}},
/* harmony export */"g9",0,(e,t,n=window)=>{const r=()=>{e.getPlayerState()===n.YT.PlayerState.ENDED&&t()};return e.addEventListener("onStateChange",r),()=>{e.removeEventListener("onStateChange",r)}},
/* harmony export */"hW",0,(e,t)=>new Promise(n=>{e.getIframe().dataset.hasPlayed?(e.seekTo(t),n()):r(e).then(()=>o(e)).then(()=>{e.seekTo(t),n()})}),
/* harmony export */"qf",0,(e,t=window)=>new Promise(n=>{t.senseiYouTubeIframeAPIReady.then(()=>{const r=t.YT.get(e.id)||new t.YT.Player(e),o=()=>{n(r)};r.getDuration?
// Just in case it's called after the player is ready.
o():r.addEventListener("onReady",o);
// Add a dataset to identify if video has played already.
const s=n=>{n.data===t.YT.PlayerState.PLAYING&&(e.dataset.hasPlayed="has-played",r.removeEventListener("onStateChange",s))};"has-played"!==e.dataset.hasPlayed&&r.addEventListener("onStateChange",s)})}),
/* harmony export */"v7",0,/* binding */o
/* harmony export */])},
/***/86087(e){e.exports=window.wp.element;
/***/},
/***/52619(e){e.exports=window.wp.hooks;
/***/}
/******/};
/************************************************************************/
/******/ // The module cache
/******/const t={};
/******/
/******/ // The require function
/******/function n(r){
/******/ // Check if module is in cache
/******/const o=t[r];
/******/if(void 0!==o)
/******/return o.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/const s=t[r]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[r](s,s.exports,n),s.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/n.n=e=>{
/******/const t=e&&e.__esModule?
/******/()=>e.default:
/******/()=>e;
/******/
/******/return n.d(t,{a:t}),t;
/******/},
/******/ // define getter/value functions for harmony exports
/******/n.d=(e,t)=>{
/******/if(Array.isArray(t))
/******/for(
/******/var r=0;r<t.length;){
/******/var o=t[r++],s=t[r++];
/******/
/******/n.o(e,o)?0===s&&r++
/******/:
/******/0===s?
/******/Object.defineProperty(e,o,{enumerable:!0,value:t[r++]}):
/******/Object.defineProperty(e,o,{enumerable:!0,get:s})
/******/}
/******/else
/******/for(var o in t)
/******/n.o(t,o)&&!n.o(e,o)&&
/******/Object.defineProperty(e,o,{enumerable:!0,get:t[o]})
/******/;
/******/
/******/},
/******/n.o=(e,t)=>Object.hasOwn(e,t)
/******/,
/******/ // define __esModule on exports
/******/n.r=e=>{
/******/Symbol.toStringTag&&
/******/Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})
/******/,Object.defineProperty(e,"__esModule",{value:!0})};
/* harmony import */var r=n(99821),o=n(40839),s=n(23572),i=n(28908);
/* harmony import */
/**
 * Internal dependencies
 */
// Initialize video extensions only after all the resources are loaded.
// This makes sure that Required Blocks feature can hook into the
// Course Video Progression feature before it starts firing it's hooks.
window.addEventListener("load",()=>{(0,i/* .initVideoPressExtension */.s)(),(0,o/* .initVideoExtension */.F)(),(0,s/* .initVimeoExtension */.k)(),(0,r/* .initYouTubeExtension */.Z)()})})();