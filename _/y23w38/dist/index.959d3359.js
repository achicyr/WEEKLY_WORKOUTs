/*
 *  Vide - v0.5.1
 *  Easy as hell jQuery plugin for video backgrounds.
 *  http://vodkabears.github.io/vide/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */var e;e=function(e){/**
   * Name of the plugin
   * @private
   * @const
   * @type {String}
   */var t="vide",o={volume:1,playbackRate:1,muted:!0,loop:!0,autoplay:!0,position:"50% 50%",posterType:"detect",resizing:!0,bgColor:"transparent",className:""},i="Not implemented";/**
   * Parse a string with options
   * @private
   * @param {String} str
   * @returns {Object|String}
   */function s(e){var t,o,i,s,r,n,a,p={};// Parse a string
for(a=0,n=// Remove spaces around delimiters and split
(r=e.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,",").split(",")).length;// Ignore urls and a string without colon delimiters
a<n&&-1===(o=r[a]).search(/^(http|https|ftp):\/\//)&&-1!==o.search(":");a++)t=o.indexOf(":"),i=o.substring(0,t),(s=o.substring(t+1))||(s=void 0),"string"==typeof s&&(s="true"===s||"false"!==s&&s),"string"==typeof s&&(s=isNaN(s)?s:+s),p[i]=s;return(// If nothing is parsed
null==i&&null==s?e:p)}/**
   * Vide constructor
   * @param {HTMLElement} element
   * @param {Object|String} path
   * @param {Object|String} options
   * @constructor
   */function r(t,r,n){// Remove an extension
if(this.$element=e(t),"string"==typeof r&&(r=s(r)),n?"string"==typeof n&&(n=s(n)):n={},"string"==typeof r)r=r.replace(/\.\w*$/,"");else if("object"==typeof r)for(var a in r)r.hasOwnProperty(a)&&(r[a]=r[a].replace(/\.\w*$/,""));this.settings=e.extend({},o,n),this.path=r;// https://github.com/VodkaBears/Vide/issues/110
try{this.init()}catch(e){if(e.message!==i)throw e}}/**
   * Initialization
   * @public
   */r.prototype.init=function(){var o,s,r=this,n=r.path,a=n,p="",c=r.$element,d=r.settings,u=/**
   * Parse a position option
   * @private
   * @param {String} str
   * @returns {Object}
   */function(e){// Default value is a center
var t,o,i,s=(e=""+e).split(/\s+/),r="50%",n="50%";for(i=0,t=s.length;i<t;i++)// Convert values
"left"===(o=s[i])?r="0%":"right"===o?r="100%":"top"===o?n="0%":"bottom"===o?n="100%":"center"===o?0===i?r="50%":n="50%":0===i?r=o:n=o;return{x:r,y:n}}(d.position),l=d.posterType;// Set styles of a video wrapper
s=r.$wrapper=e("<div>").addClass(d.className).css({position:"absolute","z-index":-1,top:0,left:0,bottom:0,right:0,overflow:"hidden","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","background-color":d.bgColor,"background-repeat":"no-repeat","background-position":u.x+" "+u.y}),"object"==typeof n&&(n.poster?a=n.poster:n.mp4?a=n.mp4:n.webm?a=n.webm:n.ogv&&(a=n.ogv)),"detect"===l||"none"!==l&&s.css("background-image","url("+a+"."+l+")"),"static"===c.css("position")&&c.css("position","static"),c.prepend(s),"object"==typeof n?(n.mp4&&(p+='<source src="'+n.mp4+'.mp4" type="video/mp4">'),n.webm&&(p+='<source src="'+n.webm+'.webm" type="video/webm">'),n.ogv&&(p+='<source src="'+n.ogv+'.ogv" type="video/ogg">'),o=r.$video=e("<video>"+p+"</video>")):o=r.$video=e('<video><source src="'+n+'.mp4" type="video/mp4"><source src="'+n+'.webm" type="video/webm"><source src="'+n+'.ogv" type="video/ogg"></video>');// https://github.com/VodkaBears/Vide/issues/110
try{o// Set video properties
.prop({autoplay:d.autoplay,loop:d.loop,volume:d.volume,muted:d.muted,defaultMuted:d.muted,playbackRate:d.playbackRate,defaultPlaybackRate:d.playbackRate})}catch(e){throw Error(i)}// Video alignment
o.css({margin:"auto",position:"absolute","z-index":-1,top:u.y,left:u.x,"-webkit-transform":"translate(-"+u.x+", -"+u.y+")","-ms-transform":"translate(-"+u.x+", -"+u.y+")","-moz-transform":"translate(-"+u.x+", -"+u.y+")",transform:"translate(-"+u.x+", -"+u.y+")",// Disable visibility, while loading
visibility:"hidden",opacity:0})// Resize a video, when it's loaded
.one("canplaythrough."+t,function(){r.resize()})// Make it visible, when it's already playing
.one("playing."+t,function(){o.css({visibility:"visible",opacity:1}),s.css("background-image","none")}),// Resize event is available only for 'window'
// Use another code solutions to detect DOM elements resizing
c.on("resize."+t,function(){d.resizing&&r.resize()}),// Append a video
s.append(o)},/**
   * Get a video element
   * @public
   * @returns {HTMLVideoElement}
   */r.prototype.getVideoObject=function(){return this.$video[0]},/**
   * Resize a video background
   * @public
   */r.prototype.resize=function(){if(this.$video){var e=this.$wrapper,t=this.$video,o=t[0],i=o.videoHeight,s=o.videoWidth,r=e.height(),n=e.width();n/s>r/i?t.css({// +2 pixels to prevent an empty space after transformation
width:n+2,height:"auto"}):t.css({width:"auto",// +2 pixels to prevent an empty space after transformation
height:r+2})}},/**
   * Destroy a video background
   * @public
   */r.prototype.destroy=function(){delete e[t].lookup[this.index],this.$video&&this.$video.off(t),this.$element.off(t).removeData(t),this.$wrapper.remove()},/**
   * Special plugin object for instances.
   * @public
   * @type {Object}
   */e[t]={lookup:[]},/**
   * Plugin constructor
   * @param {Object|String} path
   * @param {Object|String} options
   * @returns {JQuery}
   * @constructor
   */e.fn[t]=function(o,i){var s;return this.each(function(){// Destroy the plugin instance if exists
(s=e.data(this,t))&&s.destroy(),// Create the plugin instance
(s=new r(this,o,i)).index=e[t].lookup.push(s)-1,e.data(this,t,s)}),this},e(document).ready(function(){var o=e(window);// Window resize event listener
o.on("resize."+t,function(){for(var o,i=e[t].lookup.length,s=0;s<i;s++)(o=e[t].lookup[s])&&o.settings.resizing&&o.resize()}),// https://github.com/VodkaBears/Vide/issues/68
o.on("unload."+t,function(){return!1}),// Auto initialization
// Add 'data-vide-bg' attribute with a path to the video without extension
// Also you can pass options throw the 'data-vide-options' attribute
// 'data-vide-options' must be like 'muted: false, volume: 0.5'
e(document).find("[data-"+t+"-bg]").each(function(o,i){var s=e(i),r=s.data(t+"-options"),n=s.data(t+"-bg");s[t](n,r)})})},"function"==typeof define&&define.amd?define(["jquery"],e):e(this.jQuery);//# sourceMappingURL=index.959d3359.js.map

//# sourceMappingURL=index.959d3359.js.map
