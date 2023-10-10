var t,e;/**
	 * MixItUp Constructor Function
	 * @constructor
	 * @extends jQuery
	 */(t=jQuery).MixItUp=function(){this._execAction("_constructor",0),t.extend(this,{/* Public Properties
			---------------------------------------------------------------------- */selectors:{target:".mix",filter:".filter",sort:".sort"},animation:{enable:!0,effects:"fade scale",duration:600,easing:"ease",perspectiveDistance:"3000",perspectiveOrigin:"50% 50%",queue:!0,queueLimit:1,animateChangeLayout:!1,animateResizeContainer:!0,animateResizeTargets:!1,staggerSequence:!1,reverseOut:!1},callbacks:{onMixLoad:!1,onMixStart:!1,onMixBusy:!1,onMixEnd:!1,onMixFail:!1,_user:!1},controls:{enable:!0,live:!1,toggleFilterButtons:!1,toggleLogic:"or",activeClass:"active"},layout:{display:"inline-block",containerClass:"",containerClassFail:"fail"},load:{filter:"all",sort:!1},/* Private Properties
			---------------------------------------------------------------------- */_$body:null,_$container:null,_$targets:null,_$parent:null,_$sortButtons:null,_$filterButtons:null,_suckMode:!1,_mixing:!1,_sorting:!1,_clicking:!1,_loading:!0,_changingLayout:!1,_changingClass:!1,_changingDisplay:!1,_origOrder:[],_startOrder:[],_newOrder:[],_activeFilter:null,_toggleArray:[],_toggleString:"",_activeSort:"default:asc",_newSort:null,_startHeight:null,_newHeight:null,_incPadding:!0,_newDisplay:null,_newClass:null,_targetsBound:0,_targetsDone:0,_queue:[],_$show:t(),_$hide:t()}),this._execAction("_constructor",1)},/**
	 * MixItUp Prototype
	 * @override
	 */t.MixItUp.prototype={constructor:t.MixItUp,/* Static Properties
		---------------------------------------------------------------------- */_instances:{},_handled:{_filter:{},_sort:{}},_bound:{_filter:{},_sort:{}},_actions:{},_filters:{},/* Static Methods
		---------------------------------------------------------------------- *//**
		 * Extend
		 * @since 2.1.0
		 * @param {object} new properties/methods
		 * @extends {object} prototype
		 */extend:function(e){for(var i in e)t.MixItUp.prototype[i]=e[i]},/**
		 * Add Action
		 * @since 2.1.0
		 * @param {string} hook name
		 * @param {string} namespace
		 * @param {function} function to execute
		 * @param {number} priority
		 * @extends {object} $.MixItUp.prototype._actions
		 */addAction:function(e,i,s,a){t.MixItUp.prototype._addHook("_actions",e,i,s,a)},/**
		 * Add Filter
		 * @since 2.1.0
		 * @param {string} hook name
		 * @param {string} namespace
		 * @param {function} function to execute
		 * @param {number} priority
		 * @extends {object} $.MixItUp.prototype._filters
		 */addFilter:function(e,i,s,a){t.MixItUp.prototype._addHook("_filters",e,i,s,a)},/**
		 * Add Hook
		 * @since 2.1.0
		 * @param {string} type of hook
		 * @param {string} hook name
		 * @param {function} function to execute
		 * @param {number} priority
		 * @extends {object} $.MixItUp.prototype._filters
		 */_addHook:function(e,i,s,a,n){var r=t.MixItUp.prototype[e],o={};n=1===n||"post"===n?"post":"pre",o[i]={},o[i][n]={},o[i][n][s]=a,t.extend(!0,r,o)},/* Private Methods
		---------------------------------------------------------------------- *//**
		 * Initialise
		 * @since 2.0.0
		 * @param {object} domNode
		 * @param {object} config
		 */_init:function(e,i){if(this._execAction("_init",0,arguments),i&&t.extend(!0,this,i),this._$body=t("body"),this._domNode=e,this._$container=t(e),this._$container.addClass(this.layout.containerClass),this._id=e.id,this._platformDetect(),this._brake=this._getPrefixedCSS("transition","none"),this._refresh(!0),this._$parent=this._$targets.parent().length?this._$targets.parent():this._$container,this.load.sort&&(this._newSort=this._parseSort(this.load.sort),this._newSortString=this.load.sort,this._activeSort=this.load.sort,this._sort(),this._printSort()),this._activeFilter="all"===this.load.filter?this.selectors.target:"none"===this.load.filter?"":this.load.filter,this.controls.enable&&this._bindHandlers(),this.controls.toggleFilterButtons){this._buildToggleArray();for(var s=0;s<this._toggleArray.length;s++)this._updateControls({filter:this._toggleArray[s],sort:this._activeSort},!0)}else this.controls.enable&&this._updateControls({filter:this._activeFilter,sort:this._activeSort});this._filter(),this._init=!0,this._$container.data("mixItUp",this),this._execAction("_init",1,arguments),this._buildState(),this._$targets.css(this._brake),this._goMix(this.animation.enable)},/**
		 * Platform Detect
		 * @since 2.0.0
		 */_platformDetect:function(){var t=["Webkit","Moz","O","ms"],i=["webkit","moz"],s=window.navigator.appVersion.match(/Chrome\/(\d+)\./)||!1,a="undefined"!=typeof InstallTrigger,n=function(e){for(var i=0;i<t.length;i++)if(t[i]+"Transition" in e.style)return{prefix:"-"+t[i].toLowerCase()+"-",vendor:t[i]};return"transition"in e.style&&""}(this._domNode);this._execAction("_platformDetect",0),this._chrome=!!s&&parseInt(s[1],10),this._ff=!!a&&parseInt(window.navigator.userAgent.match(/rv:([^)]+)\)/)[1]),this._prefix=n.prefix,this._vendor=n.vendor,this._suckMode=!window.atob||!this._prefix,this._suckMode&&(this.animation.enable=!1),this._ff&&this._ff<=4&&(this.animation.enable=!1);/* Polyfills
			---------------------------------------------------------------------- *//**
			 * window.requestAnimationFrame
			 */for(var r=0;r<i.length&&!window.requestAnimationFrame;r++)window.requestAnimationFrame=window[i[r]+"RequestAnimationFrame"];"function"!=typeof Object.getPrototypeOf&&("object"==typeof"test".__proto__?Object.getPrototypeOf=function(t){return t.__proto__}:Object.getPrototypeOf=function(t){return t.constructor.prototype}),this._domNode.nextElementSibling===e&&Object.defineProperty(Element.prototype,"nextElementSibling",{get:function(){for(var t=this.nextSibling;t;){if(1===t.nodeType)return t;t=t.nextSibling}return null}}),this._execAction("_platformDetect",1)},/**
		 * Refresh
		 * @since 2.0.0
		 * @param {boolean} init
		 * @param {boolean} force
		 */_refresh:function(t,i){this._execAction("_refresh",0,arguments),this._$targets=this._$container.find(this.selectors.target);for(var s=0;s<this._$targets.length;s++){var a=this._$targets[s];if(a.dataset===e||i){a.dataset={};for(var n=0;n<a.attributes.length;n++){var r=a.attributes[n],o=r.name,l=r.value;if(o.indexOf("data-")>-1){var h=this._helpers._camelCase(o.substring(5,o.length));a.dataset[h]=l}}}a.mixParent===e&&(a.mixParent=this._id)}if(this._$targets.length&&t||!this._origOrder.length&&this._$targets.length){this._origOrder=[];for(var s=0;s<this._$targets.length;s++){var a=this._$targets[s];this._origOrder.push(a)}}this._execAction("_refresh",1,arguments)},/**
		 * Bind Handlers
		 * @since 2.0.0
		 */_bindHandlers:function(){var i=this,s=t.MixItUp.prototype._bound._filter,a=t.MixItUp.prototype._bound._sort;i._execAction("_bindHandlers",0),i.controls.live?i._$body.on("click.mixItUp."+i._id,i.selectors.sort,function(){i._processClick(t(this),"sort")}).on("click.mixItUp."+i._id,i.selectors.filter,function(){i._processClick(t(this),"filter")}):(i._$sortButtons=t(i.selectors.sort),i._$filterButtons=t(i.selectors.filter),i._$sortButtons.on("click.mixItUp."+i._id,function(){i._processClick(t(this),"sort")}),i._$filterButtons.on("click.mixItUp."+i._id,function(){i._processClick(t(this),"filter")})),s[i.selectors.filter]=s[i.selectors.filter]===e?1:s[i.selectors.filter]+1,a[i.selectors.sort]=a[i.selectors.sort]===e?1:a[i.selectors.sort]+1,i._execAction("_bindHandlers",1)},/**
		 * Process Click
		 * @since 2.0.0
		 * @param {object} $button
		 * @param {string} type
		 */_processClick:function(i,s){var a=this,n=function(i,s,n){var r=t.MixItUp.prototype;r._handled["_"+s][a.selectors[s]]=r._handled["_"+s][a.selectors[s]]===e?1:r._handled["_"+s][a.selectors[s]]+1,r._handled["_"+s][a.selectors[s]]===r._bound["_"+s][a.selectors[s]]&&(i[(n?"remove":"add")+"Class"](a.controls.activeClass),delete r._handled["_"+s][a.selectors[s]])};if(a._execAction("_processClick",0,arguments),!a._mixing||a.animation.queue&&a._queue.length<a.animation.queueLimit){if(a._clicking=!0,"sort"===s){var r=i.attr("data-sort");(!i.hasClass(a.controls.activeClass)||r.indexOf("random")>-1)&&(t(a.selectors.sort).removeClass(a.controls.activeClass),n(i,s),a.sort(r))}if("filter"===s){var o,l=i.attr("data-filter"),h="or"===a.controls.toggleLogic?",":"";a.controls.toggleFilterButtons?(a._buildToggleArray(),i.hasClass(a.controls.activeClass)?(n(i,s,!0),o=a._toggleArray.indexOf(l),a._toggleArray.splice(o,1)):(n(i,s),a._toggleArray.push(l)),a._toggleArray=t.grep(a._toggleArray,function(t){return t}),a._toggleString=a._toggleArray.join(h),a.filter(a._toggleString)):i.hasClass(a.controls.activeClass)||(t(a.selectors.filter).removeClass(a.controls.activeClass),n(i,s),a.filter(l))}a._execAction("_processClick",1,arguments)}else"function"==typeof a.callbacks.onMixBusy&&a.callbacks.onMixBusy.call(a._domNode,a._state,a),a._execAction("_processClickBusy",1,arguments)},/**
		 * Build Toggle Array
		 * @since 2.0.0
		 */_buildToggleArray:function(){var t=this._activeFilter.replace(/\s/g,"");if(this._execAction("_buildToggleArray",0,arguments),"or"===this.controls.toggleLogic)this._toggleArray=t.split(",");else{this._toggleArray=t.split("."),this._toggleArray[0]||this._toggleArray.shift();for(var e,i=0;e=this._toggleArray[i];i++)this._toggleArray[i]="."+e}this._execAction("_buildToggleArray",1,arguments)},/**
		 * Update Controls
		 * @since 2.0.0
		 * @param {object} command
		 * @param {boolean} multi
		 */_updateControls:function(i,s){var a=this,n={filter:i.filter,sort:i.sort},r="filter",o=null;a._execAction("_updateControls",0,arguments),i.filter===e&&(n.filter=a._activeFilter),i.sort===e&&(n.sort=a._activeSort),n.filter===a.selectors.target&&(n.filter="all");for(var l=0;l<2;l++)(o=a.controls.live?t(a.selectors[r]):a["_$"+r+"Buttons"])&&function(t,e){try{s&&"filter"===r&&!("none"===n.filter||""===n.filter)?t.filter(e).addClass(a.controls.activeClass):t.removeClass(a.controls.activeClass).filter(e).addClass(a.controls.activeClass)}catch(t){}}(o,"[data-"+r+'="'+n[r]+'"]'),r="sort";a._execAction("_updateControls",1,arguments)},/**
		 * Filter (private)
		 * @since 2.0.0
		 */_filter:function(){this._execAction("_filter",0);for(var e=0;e<this._$targets.length;e++){var i=t(this._$targets[e]);i.is(this._activeFilter)?this._$show=this._$show.add(i):this._$hide=this._$hide.add(i)}this._execAction("_filter",1)},/**
		 * Sort (private)
		 * @since 2.0.0
		 */_sort:function(){var t=this;t._execAction("_sort",0),t._startOrder=[];for(var e=0;e<t._$targets.length;e++){var i=t._$targets[e];t._startOrder.push(i)}switch(t._newSort[0].sortBy){case"default":t._newOrder=t._origOrder;break;case"random":t._newOrder=function(t){for(var e=t.slice(),i=e.length,s=i;s--;){var a=parseInt(Math.random()*i),n=e[s];e[s]=e[a],e[a]=n}return e}(t._startOrder);break;case"custom":t._newOrder=t._newSort[0].order;break;default:t._newOrder=t._startOrder.concat().sort(function(e,i){return t._compare(e,i)})}t._execAction("_sort",1)},/**
		 * Compare Algorithm
		 * @since 2.0.0
		 * @param {string|number} a
		 * @param {string|number} b
		 * @param {number} depth (recursion)
		 * @return {number}
		 */_compare:function(t,e,i){i=i||0;var s=this,a=s._newSort[i].order,n=function(t){return t.dataset[s._newSort[i].sortBy]||0},r=isNaN(1*n(t))?n(t).toLowerCase():1*n(t),o=isNaN(1*n(e))?n(e).toLowerCase():1*n(e);return r<o?"asc"===a?-1:1:r>o?"asc"===a?1:-1:r===o&&s._newSort.length>i+1?s._compare(t,e,i+1):0},/**
		 * Print Sort
		 * @since 2.0.0
		 * @param {boolean} reset
		 */_printSort:function(t){var e=t?this._startOrder:this._newOrder,i=this._$parent[0].querySelectorAll(this.selectors.target),s=i.length?i[i.length-1].nextElementSibling:null,a=document.createDocumentFragment();this._execAction("_printSort",0,arguments);for(var n=0;n<i.length;n++){var r=i[n],o=r.nextSibling;"absolute"!==r.style.position&&(o&&"#text"===o.nodeName&&this._$parent[0].removeChild(o),this._$parent[0].removeChild(r))}for(var n=0;n<e.length;n++){var l=e[n];if("default"!==this._newSort[0].sortBy||"desc"!==this._newSort[0].order||t)a.appendChild(l),a.appendChild(document.createTextNode(" "));else{var h=a.firstChild;a.insertBefore(l,h),a.insertBefore(document.createTextNode(" "),l)}}s?this._$parent[0].insertBefore(a,s):this._$parent[0].appendChild(a),this._execAction("_printSort",1,arguments)},/**
		 * Parse Sort
		 * @since 2.0.0
		 * @param {string} sortString
		 * @return {array} newSort
		 */_parseSort:function(t){for(var e="string"==typeof t?t.split(" "):[t],i=[],s=0;s<e.length;s++){var a="string"==typeof t?e[s].split(":"):["custom",e[s]],n={sortBy:this._helpers._camelCase(a[0]),order:a[1]||"asc"};if(i.push(n),"default"===n.sortBy||"random"===n.sortBy)break}return this._execFilter("_parseSort",i,arguments)},/**
		 * Parse Effects
		 * @since 2.0.0
		 * @return {object} effects
		 */_parseEffects:function(){var t=this,e={opacity:"",transformIn:"",transformOut:"",filter:""},i=function(e,i,s){if(!(t.animation.effects.indexOf(e)>-1))return!1;if(i){var a=t.animation.effects.indexOf(e+"(");if(a>-1){var n=t.animation.effects.substring(a);return{val:/\(([^)]+)\)/.exec(n)[1]}}}return!0},s=function(t,s){for(var a=[["scale",".01"],["translateX","20px"],["translateY","20px"],["translateZ","20px"],["rotateX","90deg"],["rotateY","90deg"],["rotateZ","180deg"]],n=0;n<a.length;n++){var r,o=a[n][0],l=a[n][1],h=s&&"scale"!==o;e[t]+=i(o)?o+"("+(r=i(o,!0).val||l,h?"-"===r.charAt(0)?r.substr(1,r.length):"-"+r:r)+") ":""}};return e.opacity=i("fade")?i("fade",!0).val||"0":"1",s("transformIn"),t.animation.reverseOut?s("transformOut",!0):e.transformOut=e.transformIn,e.transition={},e.transition=t._getPrefixedCSS("transition","all "+t.animation.duration+"ms "+t.animation.easing+", opacity "+t.animation.duration+"ms linear"),t.animation.stagger=!!i("stagger"),t.animation.staggerDuration=parseInt(i("stagger")&&i("stagger",!0).val?i("stagger",!0).val:100),t._execFilter("_parseEffects",e)},/**
		 * Build State
		 * @since 2.0.0
		 * @param {boolean} future
		 * @return {object} futureState
		 */_buildState:function(t){var e={};if(this._execAction("_buildState",0),e={activeFilter:""===this._activeFilter?"none":this._activeFilter,activeSort:t&&this._newSortString?this._newSortString:this._activeSort,fail:!this._$show.length&&""!==this._activeFilter,$targets:this._$targets,$show:this._$show,$hide:this._$hide,totalTargets:this._$targets.length,totalShow:this._$show.length,totalHide:this._$hide.length,display:t&&this._newDisplay?this._newDisplay:this.layout.display},t)return this._execFilter("_buildState",e);this._state=e,this._execAction("_buildState",1)},/**
		 * Go Mix
		 * @since 2.0.0
		 * @param {boolean} animate
		 */_goMix:function(t){var e=this,i=function(){e._chrome&&31===e._chrome&&n(e._$parent[0]),e._setInter(),s()},s=function(){var t=window.pageYOffset,i=window.pageXOffset;document.documentElement.scrollHeight,e._getInterMixData(),e._setFinal(),e._getFinalMixData(),window.pageYOffset!==t&&window.scrollTo(i,t),e._prepTargets(),window.requestAnimationFrame?requestAnimationFrame(a):setTimeout(function(){a()},20)},a=function(){e._animateTargets(),0===e._targetsBound&&e._cleanUp()},n=function(t){var e=t.parentElement,i=document.createElement("div"),s=document.createDocumentFragment();e.insertBefore(i,t),s.appendChild(t),e.replaceChild(t,i)},r=e._buildState(!0);e._execAction("_goMix",0,arguments),e.animation.duration||(t=!1),e._mixing=!0,e._$container.removeClass(e.layout.containerClassFail),"function"==typeof e.callbacks.onMixStart&&e.callbacks.onMixStart.call(e._domNode,e._state,r,e),e._$container.trigger("mixStart",[e._state,r,e]),e._getOrigMixData(),t&&!e._suckMode?window.requestAnimationFrame?requestAnimationFrame(i):i():e._cleanUp(),e._execAction("_goMix",1,arguments)},/**
		 * Get Target Data
		 * @since 2.0.0
		 */_getTargetData:function(t,e){var i;t.dataset[e+"PosX"]=t.offsetLeft,t.dataset[e+"PosY"]=t.offsetTop,this.animation.animateResizeTargets&&(i=this._suckMode?{marginBottom:"",marginRight:""}:window.getComputedStyle(t),t.dataset[e+"MarginBottom"]=parseInt(i.marginBottom),t.dataset[e+"MarginRight"]=parseInt(i.marginRight),t.dataset[e+"Width"]=t.offsetWidth,t.dataset[e+"Height"]=t.offsetHeight)},/**
		 * Get Original Mix Data
		 * @since 2.0.0
		 */_getOrigMixData:function(){var t=this._suckMode?{boxSizing:""}:window.getComputedStyle(this._$parent[0]),e=t.boxSizing||t[this._vendor+"BoxSizing"];this._incPadding="border-box"===e,this._execAction("_getOrigMixData",0),this._suckMode||(this.effects=this._parseEffects()),this._$toHide=this._$hide.filter(":visible"),this._$toShow=this._$show.filter(":hidden"),this._$pre=this._$targets.filter(":visible"),this._startHeight=this._incPadding?this._$parent.outerHeight():this._$parent.height();for(var i=0;i<this._$pre.length;i++){var s=this._$pre[i];this._getTargetData(s,"orig")}this._execAction("_getOrigMixData",1)},/**
		 * Set Intermediate Positions
		 * @since 2.0.0
		 */_setInter:function(){this._execAction("_setInter",0),this._changingLayout&&this.animation.animateChangeLayout?(this._$toShow.css("display",this._newDisplay),this._changingClass&&this._$container.removeClass(this.layout.containerClass).addClass(this._newClass)):this._$toShow.css("display",this.layout.display),this._execAction("_setInter",1)},/**
		 * Get Intermediate Mix Data
		 * @since 2.0.0
		 */_getInterMixData:function(){this._execAction("_getInterMixData",0);for(var t=0;t<this._$toShow.length;t++){var e=this._$toShow[t];this._getTargetData(e,"inter")}for(var t=0;t<this._$pre.length;t++){var e=this._$pre[t];this._getTargetData(e,"inter")}this._execAction("_getInterMixData",1)},/**
		 * Set Final Positions
		 * @since 2.0.0
		 */_setFinal:function(){this._execAction("_setFinal",0),this._sorting&&this._printSort(),this._$toHide.removeStyle("display"),this._changingLayout&&this.animation.animateChangeLayout&&this._$pre.css("display",this._newDisplay),this._execAction("_setFinal",1)},/**
		 * Get Final Mix Data
		 * @since 2.0.0
		 */_getFinalMixData:function(){this._execAction("_getFinalMixData",0);for(var t=0;t<this._$toShow.length;t++){var e=this._$toShow[t];this._getTargetData(e,"final")}for(var t=0;t<this._$pre.length;t++){var e=this._$pre[t];this._getTargetData(e,"final")}this._newHeight=this._incPadding?this._$parent.outerHeight():this._$parent.height(),this._sorting&&this._printSort(!0),this._$toShow.removeStyle("display"),this._$pre.css("display",this.layout.display),this._changingClass&&this.animation.animateChangeLayout&&this._$container.removeClass(this._newClass).addClass(this.layout.containerClass),this._execAction("_getFinalMixData",1)},/**
		 * Prepare Targets
		 * @since 2.0.0
		 */_prepTargets:function(){var e={_in:this._getPrefixedCSS("transform",this.effects.transformIn),_out:this._getPrefixedCSS("transform",this.effects.transformOut)};this._execAction("_prepTargets",0),this.animation.animateResizeContainer&&this._$parent.css("height",this._startHeight+"px");for(var i=0;i<this._$toShow.length;i++){var s=this._$toShow[i],a=t(s);s.style.opacity=this.effects.opacity,s.style.display=this._changingLayout&&this.animation.animateChangeLayout?this._newDisplay:this.layout.display,a.css(e._in),this.animation.animateResizeTargets&&(s.style.width=s.dataset.finalWidth+"px",s.style.height=s.dataset.finalHeight+"px",s.style.marginRight=-(s.dataset.finalWidth-s.dataset.interWidth)+1*s.dataset.finalMarginRight+"px",s.style.marginBottom=-(s.dataset.finalHeight-s.dataset.interHeight)+1*s.dataset.finalMarginBottom+"px")}for(var i=0;i<this._$pre.length;i++){var s=this._$pre[i],a=t(s),n={x:s.dataset.origPosX-s.dataset.interPosX,y:s.dataset.origPosY-s.dataset.interPosY},e=this._getPrefixedCSS("transform","translate("+n.x+"px,"+n.y+"px)");a.css(e),this.animation.animateResizeTargets&&(s.style.width=s.dataset.origWidth+"px",s.style.height=s.dataset.origHeight+"px",s.dataset.origWidth-s.dataset.finalWidth&&(s.style.marginRight=-(s.dataset.origWidth-s.dataset.interWidth)+1*s.dataset.origMarginRight+"px"),s.dataset.origHeight-s.dataset.finalHeight&&(s.style.marginBottom=-(s.dataset.origHeight-s.dataset.interHeight)+1*s.dataset.origMarginBottom+"px"))}this._execAction("_prepTargets",1)},/**
		 * Animate Targets
		 * @since 2.0.0
		 */_animateTargets:function(){this._execAction("_animateTargets",0),this._targetsDone=0,this._targetsBound=0,this._$parent.css(this._getPrefixedCSS("perspective",this.animation.perspectiveDistance+"px")).css(this._getPrefixedCSS("perspective-origin",this.animation.perspectiveOrigin)),this.animation.animateResizeContainer&&this._$parent.css(this._getPrefixedCSS("transition","height "+this.animation.duration+"ms ease")).css("height",this._newHeight+"px");for(var e=0;e<this._$toShow.length;e++){var i=this._$toShow[e],s=t(i),a={x:i.dataset.finalPosX-i.dataset.interPosX,y:i.dataset.finalPosY-i.dataset.interPosY},n=this._getDelay(e),r={};i.style.opacity="";for(var o=0;o<2;o++){var l=0===o?l=this._prefix:"";this._ff&&this._ff<=20&&(r[l+"transition-property"]="all",r[l+"transition-timing-function"]=this.animation.easing+"ms",r[l+"transition-duration"]=this.animation.duration+"ms"),r[l+"transition-delay"]=n+"ms",r[l+"transform"]="translate("+a.x+"px,"+a.y+"px)"}(this.effects.transform||this.effects.opacity)&&this._bindTargetDone(s),this._ff&&this._ff<=20?s.css(r):s.css(this.effects.transition).css(r)}for(var e=0;e<this._$pre.length;e++){var i=this._$pre[e],s=t(i),a={x:i.dataset.finalPosX-i.dataset.interPosX,y:i.dataset.finalPosY-i.dataset.interPosY},n=this._getDelay(e);i.dataset.finalPosX===i.dataset.origPosX&&i.dataset.finalPosY===i.dataset.origPosY||this._bindTargetDone(s),s.css(this._getPrefixedCSS("transition","all "+this.animation.duration+"ms "+this.animation.easing+" "+n+"ms")),s.css(this._getPrefixedCSS("transform","translate("+a.x+"px,"+a.y+"px)")),this.animation.animateResizeTargets&&(i.dataset.origWidth-i.dataset.finalWidth&&1*i.dataset.finalWidth&&(i.style.width=i.dataset.finalWidth+"px",i.style.marginRight=-(i.dataset.finalWidth-i.dataset.interWidth)+1*i.dataset.finalMarginRight+"px"),i.dataset.origHeight-i.dataset.finalHeight&&1*i.dataset.finalHeight&&(i.style.height=i.dataset.finalHeight+"px",i.style.marginBottom=-(i.dataset.finalHeight-i.dataset.interHeight)+1*i.dataset.finalMarginBottom+"px"))}this._changingClass&&this._$container.removeClass(this.layout.containerClass).addClass(this._newClass);for(var e=0;e<this._$toHide.length;e++){for(var i=this._$toHide[e],s=t(i),n=this._getDelay(e),h={},o=0;o<2;o++){var l=0===o?l=this._prefix:"";h[l+"transition-delay"]=n+"ms",h[l+"transform"]=this.effects.transformOut,h.opacity=this.effects.opacity}s.css(this.effects.transition).css(h),(this.effects.transform||this.effects.opacity)&&this._bindTargetDone(s)}this._execAction("_animateTargets",1)},/**
		 * Bind Targets TransitionEnd
		 * @since 2.0.0
		 * @param {object} $el
		 */_bindTargetDone:function(e){var i=this,s=e[0];i._execAction("_bindTargetDone",0,arguments),s.dataset.bound||(s.dataset.bound=!0,i._targetsBound++,e.on("webkitTransitionEnd.mixItUp transitionend.mixItUp",function(a){(a.originalEvent.propertyName.indexOf("transform")>-1||a.originalEvent.propertyName.indexOf("opacity")>-1)&&t(a.originalEvent.target).is(i.selectors.target)&&(e.off(".mixItUp"),s.dataset.bound="",i._targetDone())})),i._execAction("_bindTargetDone",1,arguments)},/**
		 * Target Done
		 * @since 2.0.0
		 */_targetDone:function(){this._execAction("_targetDone",0),this._targetsDone++,this._targetsDone===this._targetsBound&&this._cleanUp(),this._execAction("_targetDone",1)},/**
		 * Clean Up
		 * @since 2.0.0
		 */_cleanUp:function(){var e=this,i=e.animation.animateResizeTargets?"transform opacity width height margin-bottom margin-right":"transform opacity";e._execAction("_cleanUp",0),e._changingLayout?e._$show.css("display",e._newDisplay):e._$show.css("display",e.layout.display),e._$targets.css(e._brake),e._$targets.removeStyle(i,e._prefix).removeAttr("data-inter-pos-x data-inter-pos-y data-final-pos-x data-final-pos-y data-orig-pos-x data-orig-pos-y data-orig-height data-orig-width data-final-height data-final-width data-inter-width data-inter-height data-orig-margin-right data-orig-margin-bottom data-inter-margin-right data-inter-margin-bottom data-final-margin-right data-final-margin-bottom"),e._$hide.removeStyle("display"),e._$parent.removeStyle("height transition perspective-distance perspective perspective-origin-x perspective-origin-y perspective-origin perspectiveOrigin",e._prefix),e._sorting&&(e._printSort(),e._activeSort=e._newSortString,e._sorting=!1),e._changingLayout&&(e._changingDisplay&&(e.layout.display=e._newDisplay,e._changingDisplay=!1),e._changingClass&&(e._$parent.removeClass(e.layout.containerClass).addClass(e._newClass),e.layout.containerClass=e._newClass,e._changingClass=!1),e._changingLayout=!1),e._refresh(),e._buildState(),e._state.fail&&e._$container.addClass(e.layout.containerClassFail),e._$show=t(),e._$hide=t(),window.requestAnimationFrame&&requestAnimationFrame(function(){e._$targets.removeStyle("transition",e._prefix)}),e._mixing=!1,"function"==typeof e.callbacks._user&&e.callbacks._user.call(e._domNode,e._state,e),"function"==typeof e.callbacks.onMixEnd&&e.callbacks.onMixEnd.call(e._domNode,e._state,e),e._$container.trigger("mixEnd",[e._state,e]),e._state.fail&&("function"==typeof e.callbacks.onMixFail&&e.callbacks.onMixFail.call(e._domNode,e._state,e),e._$container.trigger("mixFail",[e._state,e])),e._loading&&("function"==typeof e.callbacks.onMixLoad&&e.callbacks.onMixLoad.call(e._domNode,e._state,e),e._$container.trigger("mixLoad",[e._state,e])),e._queue.length&&(e._execAction("_queue",0),e.multiMix(e._queue[0][0],e._queue[0][1],e._queue[0][2]),e._queue.splice(0,1)),e._execAction("_cleanUp",1),e._loading=!1},/**
		 * Get Prefixed CSS
		 * @since 2.0.0
		 * @param {string} property
		 * @param {string} value
		 * @param {boolean} prefixValue
		 * @return {object} styles
		 */_getPrefixedCSS:function(t,e,i){var s={},a="",n=-1;for(n=0;n<2;n++)a=0===n?this._prefix:"",i?s[a+t]=a+e:s[a+t]=e;return this._execFilter("_getPrefixedCSS",s,arguments)},/**
		 * Get Delay
		 * @since 2.0.0
		 * @param {number} i
		 * @return {number} delay
		 */_getDelay:function(t){var e="function"==typeof this.animation.staggerSequence?this.animation.staggerSequence.call(this._domNode,t,this._state):t,i=this.animation.stagger?e*this.animation.staggerDuration:0;return this._execFilter("_getDelay",i,arguments)},/**
		 * Parse MultiMix Arguments
		 * @since 2.0.0
		 * @param {array} args
		 * @return {object} output
		 */_parseMultiMixArgs:function(t){for(var e={command:null,animate:this.animation.enable,callback:null},i=0;i<t.length;i++){var s=t[i];null!==s&&("object"==typeof s||"string"==typeof s?e.command=s:"boolean"==typeof s?e.animate=s:"function"==typeof s&&(e.callback=s))}return this._execFilter("_parseMultiMixArgs",e,arguments)},/**
		 * Parse Insert Arguments
		 * @since 2.0.0
		 * @param {array} args
		 * @return {object} output
		 */_parseInsertArgs:function(e){for(var i={index:0,$object:t(),multiMix:{filter:this._state.activeFilter},callback:null},s=0;s<e.length;s++){var a=e[s];"number"==typeof a?i.index=a:"object"==typeof a&&a instanceof t?i.$object=a:"object"==typeof a&&this._helpers._isElement(a)?i.$object=t(a):"object"==typeof a&&null!==a?i.multiMix=a:"boolean"!=typeof a||a?"function"==typeof a&&(i.callback=a):i.multiMix=!1}return this._execFilter("_parseInsertArgs",i,arguments)},/**
		 * Execute Action
		 * @since 2.0.0
		 * @param {string} methodName
		 * @param {boolean} isPost
		 * @param {array} args
		 */_execAction:function(t,e,i){var s=e?"post":"pre";if(!this._actions.isEmptyObject&&this._actions.hasOwnProperty(t))for(var a in this._actions[t][s])this._actions[t][s][a].call(this,i)},/**
		 * Execute Filter
		 * @since 2.0.0
		 * @param {string} methodName
		 * @param {mixed} value
		 * @return {mixed} value
		 */_execFilter:function(t,e,i){if(!(!this._filters.isEmptyObject&&this._filters.hasOwnProperty(t)))return e;for(var s in this._filters[t])return this._filters[t][s].call(this,i)},/* Helpers
		---------------------------------------------------------------------- */_helpers:{/**
			 * CamelCase
			 * @since 2.0.0
			 * @param {string}
			 * @return {string}
			 */_camelCase:function(t){return t.replace(/-([a-z])/g,function(t){return t[1].toUpperCase()})},/**
			 * Is Element
			 * @since 2.1.3
			 * @param {object} element to test
			 * @return {boolean}
			 */_isElement:function(t){return window.HTMLElement?t instanceof HTMLElement:null!==t&&1===t.nodeType&&"string"===t.nodeName}},/* Public Methods
		---------------------------------------------------------------------- *//**
		 * Is Mixing
		 * @since 2.0.0
		 * @return {boolean}
		 */isMixing:function(){return this._execFilter("isMixing",this._mixing)},/**
		 * Filter (public)
		 * @since 2.0.0
		 * @param {array} arguments
		 */filter:function(){var t=this._parseMultiMixArgs(arguments);this._clicking&&(this._toggleString=""),this.multiMix({filter:t.command},t.animate,t.callback)},/**
		 * Sort (public)
		 * @since 2.0.0
		 * @param {array} arguments
		 */sort:function(){var t=this._parseMultiMixArgs(arguments);this.multiMix({sort:t.command},t.animate,t.callback)},/**
		 * Change Layout (public)
		 * @since 2.0.0
		 * @param {array} arguments
		 */changeLayout:function(){var t=this._parseMultiMixArgs(arguments);this.multiMix({changeLayout:t.command},t.animate,t.callback)},/**
		 * MultiMix
		 * @since 2.0.0
		 * @param {array} arguments
		 */multiMix:function(){var t=this._parseMultiMixArgs(arguments);if(this._execAction("multiMix",0,arguments),this._mixing)this.animation.queue&&this._queue.length<this.animation.queueLimit?(this._queue.push(arguments),this.controls.enable&&!this._clicking&&this._updateControls(t.command),this._execAction("multiMixQueue",1,arguments)):("function"==typeof this.callbacks.onMixBusy&&this.callbacks.onMixBusy.call(this._domNode,this._state,this),this._$container.trigger("mixBusy",[this._state,this]),this._execAction("multiMixBusy",1,arguments));else{this.controls.enable&&!this._clicking&&(this.controls.toggleFilterButtons&&this._buildToggleArray(),this._updateControls(t.command,this.controls.toggleFilterButtons)),this._queue.length<2&&(this._clicking=!1),delete this.callbacks._user,t.callback&&(this.callbacks._user=t.callback);var i=t.command.sort,s=t.command.filter,a=t.command.changeLayout;this._refresh(),i&&(this._newSort=this._parseSort(i),this._newSortString=i,this._sorting=!0,this._sort()),s!==e&&(s="all"===s?this.selectors.target:s,this._activeFilter=s),this._filter(),a&&(this._newDisplay="string"==typeof a?a:a.display||this.layout.display,this._newClass=a.containerClass||"",(this._newDisplay!==this.layout.display||this._newClass!==this.layout.containerClass)&&(this._changingLayout=!0,this._changingClass=this._newClass!==this.layout.containerClass,this._changingDisplay=this._newDisplay!==this.layout.display)),this._$targets.css(this._brake),this._goMix(t.animate^this.animation.enable?t.animate:this.animation.enable),this._execAction("multiMix",1,arguments)}},/**
		 * Insert
		 * @since 2.0.0
		 * @param {array} arguments
		 */insert:function(){var t=this._parseInsertArgs(arguments),e="function"==typeof t.callback?t.callback:null,i=document.createDocumentFragment(),s=(this._refresh(),this._$targets.length)?t.index<this._$targets.length||!this._$targets.length?this._$targets[t.index]:this._$targets[this._$targets.length-1].nextElementSibling:this._$parent[0].children[0];if(this._execAction("insert",0,arguments),t.$object){for(var a=0;a<t.$object.length;a++){var n=t.$object[a];i.appendChild(n),i.appendChild(document.createTextNode(" "))}this._$parent[0].insertBefore(i,s)}this._execAction("insert",1,arguments),"object"==typeof t.multiMix&&this.multiMix(t.multiMix,e)},/**
		 * Prepend
		 * @since 2.0.0
		 * @param {array} arguments
		 */prepend:function(){var t=this._parseInsertArgs(arguments);this.insert(0,t.$object,t.multiMix,t.callback)},/**
		 * Append
		 * @since 2.0.0
		 * @param {array} arguments
		 */append:function(){var t=this._parseInsertArgs(arguments);this.insert(this._state.totalTargets,t.$object,t.multiMix,t.callback)},/**
		 * Get Option
		 * @since 2.0.0
		 * @param {string} string
		 * @return {mixed} value
		 */getOption:function(t){return t?this._execFilter("getOption",function(t,i){for(var s=i.split("."),a=s.pop(),n=s.length,r=1,o=s[0]||i;(t=t[o])&&r<n;)o=s[r],r++;if(t!==e)return t[a]!==e?t[a]:t}(this,t),arguments):this},/**
		 * Set Options
		 * @since 2.0.0
		 * @param {object} config
		 */setOptions:function(e){this._execAction("setOptions",0,arguments),"object"==typeof e&&t.extend(!0,this,e),this._execAction("setOptions",1,arguments)},/**
		 * Get State
		 * @since 2.0.0
		 * @return {object} state
		 */getState:function(){return this._execFilter("getState",this._state,this)},/**
		 * Force Refresh
		 * @since 2.1.2
		 */forceRefresh:function(){this._refresh(!1,!0)},/**
		 * Destroy
		 * @since 2.0.0
		 * @param {boolean} hideAll
		 */destroy:function(e){var i=t.MixItUp.prototype._bound._filter,s=t.MixItUp.prototype._bound._sort;this._execAction("destroy",0,arguments),this._$body.add(t(this.selectors.sort)).add(t(this.selectors.filter)).off(".mixItUp");for(var a=0;a<this._$targets.length;a++){var n=this._$targets[a];e&&(n.style.display=""),delete n.mixParent}this._execAction("destroy",1,arguments),i[this.selectors.filter]&&i[this.selectors.filter]>1?i[this.selectors.filter]--:1===i[this.selectors.filter]&&delete i[this.selectors.filter],s[this.selectors.sort]&&s[this.selectors.sort]>1?s[this.selectors.sort]--:1===s[this.selectors.sort]&&delete s[this.selectors.sort],delete t.MixItUp.prototype._instances[this._id]}},/* jQuery Methods
	---------------------------------------------------------------------- *//**
	 * jQuery .mixItUp() method
	 * @since 2.0.0
	 * @extends $.fn
	 */t.fn.mixItUp=function(){var i,s=arguments,a=[],n=function(e,i){var s=new t.MixItUp;s._execAction("_instantiate",0,arguments),e.id=e.id?e.id:"MixItUp"+("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6).toUpperCase(),s._instances[e.id]||(s._instances[e.id]=s,s._init(e,i)),s._execAction("_instantiate",1,arguments)};return(i=this.each(function(){if(s&&"string"==typeof s[0]){var i=t.MixItUp.prototype._instances[this.id];if("isLoaded"===s[0])a.push(!!i);else{var r=i[s[0]](s[1],s[2],s[3]);r!==e&&a.push(r)}}else n(this,s[0])}),a.length)?a.length>1?a:a[0]:i},/**
	 * jQuery .removeStyle() method
	 * @since 2.0.0
	 * @extends $.fn
	 */t.fn.removeStyle=function(i,s){return s=s||"",this.each(function(){for(var a=i.split(" "),n=0;n<a.length;n++)for(var r=0;r<4;r++){switch(r){case 0:var o=a[n];break;case 1:var o=t.MixItUp.prototype._helpers._camelCase(o);break;case 2:var o=s+a[n];break;case 3:var o=t.MixItUp.prototype._helpers._camelCase(s+a[n])}if(this.style[o]!==e&&"unknown"!=typeof this.style[o]&&this.style[o].length>0&&(this.style[o]=""),!s&&1===r)break}this.attributes&&this.attributes.style&&this.attributes.style!==e&&""===this.attributes.style.value&&this.attributes.removeNamedItem("style")})};//# sourceMappingURL=index.ebf73c4a.js.map

//# sourceMappingURL=index.ebf73c4a.js.map
