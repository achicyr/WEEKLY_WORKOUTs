var e;/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */e=function(e){var t,i,n,o,r,a,s,l="Close",c="BeforeClose",d="MarkupParse",p="Open",u="Change",f=".mfp",m="mfp-ready",g="mfp-removing",v="mfp-prevent-close",h=function(){},y=!!window.jQuery,C=e(window),w=function(e,t){i.ev.on("mfp"+e+f,t)},b=function(t,i,n,o){var r=document.createElement("div");return r.className="mfp-"+t,n&&(r.innerHTML=n),o?i&&i.appendChild(r):(r=e(r),i&&r.appendTo(i)),r},I=function(t,n){i.ev.triggerHandler("mfp"+t,n),i.st.callbacks&&(t=t.charAt(0).toLowerCase()+t.slice(1),i.st.callbacks[t]&&i.st.callbacks[t].apply(i,e.isArray(n)?n:[n]))},x=function(t){return t===s&&i.currTemplate.closeBtn||(i.currTemplate.closeBtn=e(i.st.closeMarkup.replace("%title%",i.st.tClose)),s=t),i.currTemplate.closeBtn},k=function(){e.magnificPopup.instance||((i=new h).init(),e.magnificPopup.instance=i)},T=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition" in e)return!0;return!1};h.prototype={constructor:h,init:function(){var t=navigator.appVersion;i.isLowIE=i.isIE8=document.all&&!document.addEventListener,i.isAndroid=/android/gi.test(t),i.isIOS=/iphone|ipad|ipod/gi.test(t),i.supportsTransition=T(),i.probablyMobile=i.isAndroid||i.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),o=e(document),i.popupsCache={}},open:function(t){if(!1===t.isObj){i.items=t.items.toArray(),i.index=0;var n,r,s=t.items;for(n=0;n<s.length;n++)if((r=s[n]).parsed&&(r=r.el[0]),r===t.el[0]){i.index=n;break}}else i.items=e.isArray(t.items)?t.items:[t.items],i.index=t.index||0;if(i.isOpen)return void i.updateItemHTML();i.types=[],a="",t.mainEl&&t.mainEl.length?i.ev=t.mainEl.eq(0):i.ev=o,t.key?(i.popupsCache[t.key]||(i.popupsCache[t.key]={}),i.currTemplate=i.popupsCache[t.key]):i.currTemplate={},i.st=e.extend(!0,{},e.magnificPopup.defaults,t),i.fixedContentPos="auto"===i.st.fixedContentPos?!i.probablyMobile:i.st.fixedContentPos,i.st.modal&&(i.st.closeOnContentClick=!1,i.st.closeOnBgClick=!1,i.st.showCloseBtn=!1,i.st.enableEscapeKey=!1),i.bgOverlay||(i.bgOverlay=b("bg").on("click"+f,function(){i.close()}),i.wrap=b("wrap").attr("tabindex",-1).on("click"+f,function(e){i._checkIfClose(e.target)&&i.close()}),i.container=b("container",i.wrap)),i.contentContainer=b("content"),i.st.preloader&&(i.preloader=b("preloader",i.container,i.st.tLoading));var l=e.magnificPopup.modules;for(n=0;n<l.length;n++){var c=l[n];i["init"+(c=c.charAt(0).toUpperCase()+c.slice(1))].call(i)}I("BeforeOpen"),i.st.showCloseBtn&&(i.st.closeBtnInside?(w(d,function(e,t,i,n){i.close_replaceWith=x(n.type)}),a+=" mfp-close-btn-in"):i.wrap.append(x())),i.st.alignTop&&(a+=" mfp-align-top"),i.fixedContentPos?i.wrap.css({overflow:i.st.overflowY,overflowX:"hidden",overflowY:i.st.overflowY}):i.wrap.css({top:C.scrollTop(),position:"absolute"}),!1!==i.st.fixedBgPos&&("auto"!==i.st.fixedBgPos||i.fixedContentPos)||i.bgOverlay.css({height:o.height(),position:"absolute"}),i.st.enableEscapeKey&&o.on("keyup"+f,function(e){27===e.keyCode&&i.close()}),C.on("resize"+f,function(){i.updateSize()}),i.st.closeOnContentClick||(a+=" mfp-auto-cursor"),a&&i.wrap.addClass(a);var u=i.wH=C.height(),g={};if(i.fixedContentPos&&i._hasScrollBar(u)){var v=i._getScrollbarSize();v&&(g.marginRight=v)}i.fixedContentPos&&(i.isIE7?e("body, html").css("overflow","hidden"):g.overflow="hidden");var h=i.st.mainClass;return i.isIE7&&(h+=" mfp-ie7"),h&&i._addClassToMFP(h),i.updateItemHTML(),I("BuildControls"),e("html").css(g),i.bgOverlay.add(i.wrap).prependTo(i.st.prependTo||e(document.body)),i._lastFocusedEl=document.activeElement,setTimeout(function(){i.content?(i._addClassToMFP(m),i._setFocus()):i.bgOverlay.addClass(m),o.on("focusin"+f,i._onFocusIn)},16),i.isOpen=!0,i.updateSize(u),I(p),t},close:function(){i.isOpen&&(I(c),i.isOpen=!1,i.st.removalDelay&&!i.isLowIE&&i.supportsTransition?(i._addClassToMFP(g),setTimeout(function(){i._close()},i.st.removalDelay)):i._close())},_close:function(){I(l);var t=g+" "+m+" ";if(i.bgOverlay.detach(),i.wrap.detach(),i.container.empty(),i.st.mainClass&&(t+=i.st.mainClass+" "),i._removeClassFromMFP(t),i.fixedContentPos){var n={marginRight:""};i.isIE7?e("body, html").css("overflow",""):n.overflow="",e("html").css(n)}o.off("keyup"+f+" focusin"+f),i.ev.off(f),i.wrap.attr("class","mfp-wrap").removeAttr("style"),i.bgOverlay.attr("class","mfp-bg"),i.container.attr("class","mfp-container"),!i.st.showCloseBtn||i.st.closeBtnInside&&!0!==i.currTemplate[i.currItem.type]||i.currTemplate.closeBtn&&i.currTemplate.closeBtn.detach(),i.st.autoFocusLast&&i._lastFocusedEl&&e(i._lastFocusedEl).focus(),i.currItem=null,i.content=null,i.currTemplate=null,i.prevHeight=0,I("AfterClose")},updateSize:function(e){if(i.isIOS){var t=document.documentElement.clientWidth/window.innerWidth,n=window.innerHeight*t;i.wrap.css("height",n),i.wH=n}else i.wH=e||C.height();i.fixedContentPos||i.wrap.css("height",i.wH),I("Resize")},updateItemHTML:function(){var t=i.items[i.index];i.contentContainer.detach(),i.content&&i.content.detach(),t.parsed||(t=i.parseEl(i.index));var n=t.type;if(I("BeforeChange",[i.currItem?i.currItem.type:"",n]),i.currItem=t,!i.currTemplate[n]){var o=!!i.st[n]&&i.st[n].markup;I("FirstMarkupParse",o),o?i.currTemplate[n]=e(o):i.currTemplate[n]=!0}r&&r!==t.type&&i.container.removeClass("mfp-"+r+"-holder");var a=i["get"+n.charAt(0).toUpperCase()+n.slice(1)](t,i.currTemplate[n]);i.appendContent(a,n),t.preloaded=!0,I(u,t),r=t.type,i.container.prepend(i.contentContainer),I("AfterChange")},appendContent:function(e,t){i.content=e,e?i.st.showCloseBtn&&i.st.closeBtnInside&&!0===i.currTemplate[t]?i.content.find(".mfp-close").length||i.content.append(x()):i.content=e:i.content="",I("BeforeAppend"),i.container.addClass("mfp-"+t+"-holder"),i.contentContainer.append(i.content)},parseEl:function(t){var n,o=i.items[t];if(o.tagName?o={el:e(o)}:(n=o.type,o={data:o,src:o.src}),o.el){for(var r=i.types,a=0;a<r.length;a++)if(o.el.hasClass("mfp-"+r[a])){n=r[a];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=n||i.st.type||"inline",o.index=t,o.parsed=!0,i.items[t]=o,I("ElementParse",o),i.items[t]},addGroup:function(e,t){var n=function(n){n.mfpEl=this,i._openClick(n,e,t)};t||(t={});var o="click.magnificPopup";t.mainEl=e,t.items?(t.isObj=!0,e.off(o).on(o,n)):(t.isObj=!1,t.delegate?e.off(o).on(o,t.delegate,n):(t.items=e,e.off(o).on(o,n)))},_openClick:function(t,n,o){if((void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick)||!(2===t.which||t.ctrlKey||t.metaKey||t.altKey||t.shiftKey)){var r=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(r){if(e.isFunction(r)){if(!r.call(i))return!0}else if(C.width()<r)return!0}t.type&&(t.preventDefault(),i.isOpen&&t.stopPropagation()),o.el=e(t.mfpEl),o.delegate&&(o.items=n.find(o.delegate)),i.open(o)}},updateStatus:function(e,t){if(i.preloader){n!==e&&i.container.removeClass("mfp-s-"+n),t||"loading"!==e||(t=i.st.tLoading);var o={status:e,text:t};I("UpdateStatus",o),e=o.status,t=o.text,i.preloader.html(t),i.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),i.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(t){if(!e(t).hasClass(v)){var n=i.st.closeOnContentClick,o=i.st.closeOnBgClick;if(n&&o||!i.content||e(t).hasClass("mfp-close")||i.preloader&&t===i.preloader[0])return!0;if(t===i.content[0]||e.contains(i.content[0],t)){if(n)return!0}else if(o&&e.contains(document,t))return!0;return!1}},_addClassToMFP:function(e){i.bgOverlay.addClass(e),i.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),i.wrap.removeClass(e)},_hasScrollBar:function(e){return(i.isIE7?o.height():document.body.scrollHeight)>(e||C.height())},_setFocus:function(){(i.st.focus?i.content.find(i.st.focus).eq(0):i.wrap).focus()},_onFocusIn:function(t){return t.target===i.wrap[0]||e.contains(i.wrap[0],t.target)?void 0:(i._setFocus(),!1)},_parseMarkup:function(t,i,n){var o;n.data&&(i=e.extend(n.data,i)),I(d,[t,i,n]),e.each(i,function(i,n){if(void 0===n||!1===n)return!0;if((o=i.split("_")).length>1){var r=t.find(f+"-"+o[0]);if(r.length>0){var a=o[1];"replaceWith"===a?r[0]!==n[0]&&r.replaceWith(n):"img"===a?r.is("img")?r.attr("src",n):r.replaceWith(e("<img>").attr("src",n).attr("class",r.attr("class"))):r.attr(o[1],n)}}else t.find(f+"-"+i).html(n)})},_getScrollbarSize:function(){if(void 0===i.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),i.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return i.scrollbarSize}},e.magnificPopup={instance:null,proto:h.prototype,modules:[],open:function(t,i){return k(),(t=t?e.extend(!0,{},t):{}).isObj=!0,t.index=i||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,i){i.options&&(e.magnificPopup.defaults[t]=i.options),e.extend(this.proto,i.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},e.fn.magnificPopup=function(t){k();var n=e(this);if("string"==typeof t){if("open"===t){var o,r=y?n.data("magnificPopup"):n[0].magnificPopup,a=parseInt(arguments[1],10)||0;r.items?o=r.items[a]:(o=n,r.delegate&&(o=o.find(r.delegate)),o=o.eq(a)),i._openClick({mfpEl:o},n,r)}else i.isOpen&&i[t].apply(i,Array.prototype.slice.call(arguments,1))}else t=e.extend(!0,{},t),y?n.data("magnificPopup",t):n[0].magnificPopup=t,i.addGroup(n,t);return n};var _,P,S,E="inline",z=function(){S&&(P.after(S.addClass(_)).detach(),S=null)};e.magnificPopup.registerModule(E,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){i.types.push(E),w(l+"."+E,function(){z()})},getInline:function(t,n){if(z(),t.src){var o=i.st.inline,r=e(t.src);if(r.length){var a=r[0].parentNode;a&&a.tagName&&(P||(P=b(_=o.hiddenClass),_="mfp-"+_),S=r.after(P).detach().removeClass(_)),i.updateStatus("ready")}else i.updateStatus("error",o.tNotFound),r=e("<div>");return t.inlineElement=r,r}return i.updateStatus("ready"),i._parseMarkup(n,{},t),n}}});var O,M="ajax",B=function(){O&&e(document.body).removeClass(O)},L=function(){B(),i.req&&i.req.abort()};e.magnificPopup.registerModule(M,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){i.types.push(M),O=i.st.ajax.cursor,w(l+"."+M,L),w("BeforeChange."+M,L)},getAjax:function(t){O&&e(document.body).addClass(O),i.updateStatus("loading");var n=e.extend({url:t.src,success:function(n,o,r){var a={data:n,xhr:r};I("ParseAjax",a),i.appendContent(e(a.data),M),t.finished=!0,B(),i._setFocus(),setTimeout(function(){i.wrap.addClass(m)},16),i.updateStatus("ready"),I("AjaxContentAdded")},error:function(){B(),t.finished=t.loadError=!0,i.updateStatus("error",i.st.ajax.tError.replace("%url%",t.src))}},i.st.ajax.settings);return i.req=e.ajax(n),""}}});var H,A=function(t){if(t.data&&void 0!==t.data.title)return t.data.title;var n=i.st.image.titleSrc;if(n){if(e.isFunction(n))return n.call(i,t);if(t.el)return t.el.attr(n)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var t=i.st.image,n=".image";i.types.push("image"),w(p+n,function(){"image"===i.currItem.type&&t.cursor&&e(document.body).addClass(t.cursor)}),w(l+n,function(){t.cursor&&e(document.body).removeClass(t.cursor),C.off("resize"+f)}),w("Resize"+n,i.resizeImage),i.isLowIE&&w("AfterChange",i.resizeImage)},resizeImage:function(){var e=i.currItem;if(e&&e.img&&i.st.image.verticalFit){var t=0;i.isLowIE&&(t=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",i.wH-t)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,H&&clearInterval(H),e.isCheckingImgSize=!1,I("ImageHasSize",e),e.imgHidden&&(i.content&&i.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var t=0,n=e.img[0],o=function(r){H&&clearInterval(H),H=setInterval(function(){return n.naturalWidth>0?void i._onImageHasSize(e):(t>200&&clearInterval(H),void(3==++t?o(10):40===t?o(50):100===t&&o(500)))},r)};o(1)},getImage:function(t,n){var o=0,r=function(){t&&(t.img[0].complete?(t.img.off(".mfploader"),t===i.currItem&&(i._onImageHasSize(t),i.updateStatus("ready")),t.hasSize=!0,t.loaded=!0,I("ImageLoadComplete")):200>++o?setTimeout(r,100):a())},a=function(){t&&(t.img.off(".mfploader"),t===i.currItem&&(i._onImageHasSize(t),i.updateStatus("error",s.tError.replace("%url%",t.src))),t.hasSize=!0,t.loaded=!0,t.loadError=!0)},s=i.st.image,l=n.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",t.el&&t.el.find("img").length&&(c.alt=t.el.find("img").attr("alt")),t.img=e(c).on("load.mfploader",r).on("error.mfploader",a),c.src=t.src,l.is("img")&&(t.img=t.img.clone()),(c=t.img[0]).naturalWidth>0?t.hasSize=!0:c.width||(t.hasSize=!1)}return i._parseMarkup(n,{title:A(t),img_replaceWith:t.img},t),i.resizeImage(),t.hasSize?(H&&clearInterval(H),t.loadError?(n.addClass("mfp-loading"),i.updateStatus("error",s.tError.replace("%url%",t.src))):(n.removeClass("mfp-loading"),i.updateStatus("ready"))):(i.updateStatus("loading"),t.loading=!0,t.hasSize||(t.imgHidden=!0,n.addClass("mfp-loading"),i.findImageSize(t))),n}}}),e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,t=i.st.zoom,n=".zoom";if(t.enabled&&i.supportsTransition){var o,r,a=t.duration,s=function(e){var i=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),n="all "+t.duration/1e3+"s "+t.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=n,i.css(o),i},d=function(){i.content.css("visibility","visible")};w("BuildControls"+n,function(){if(i._allowZoom()){if(clearTimeout(o),i.content.css("visibility","hidden"),!(e=i._getItemToZoom()))return void d();(r=s(e)).css(i._getOffset()),i.wrap.append(r),o=setTimeout(function(){r.css(i._getOffset(!0)),o=setTimeout(function(){d(),setTimeout(function(){r.remove(),e=r=null,I("ZoomAnimationEnded")},16)},a)},16)}}),w(c+n,function(){if(i._allowZoom()){if(clearTimeout(o),i.st.removalDelay=a,!e){if(!(e=i._getItemToZoom()))return;r=s(e)}r.css(i._getOffset(!0)),i.wrap.append(r),i.content.css("visibility","hidden"),setTimeout(function(){r.css(i._getOffset())},16)}}),w(l+n,function(){i._allowZoom()&&(d(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===i.currItem.type},_getItemToZoom:function(){return!!i.currItem.hasSize&&i.currItem.img},_getOffset:function(n){var o,r=(o=n?i.currItem.img:i.st.zoom.opener(i.currItem.el||i.currItem)).offset(),a=parseInt(o.css("padding-top"),10),s=parseInt(o.css("padding-bottom"),10);r.top-=e(window).scrollTop()-a;var l={width:o.width(),height:(y?o.innerHeight():o[0].offsetHeight)-s-a};return(void 0===t&&(t=void 0!==document.createElement("p").style.MozTransform),t)?l["-moz-transform"]=l.transform="translate("+r.left+"px,"+r.top+"px)":(l.left=r.left,l.top=r.top),l}}});var F="iframe",j=function(e){if(i.currTemplate[F]){var t=i.currTemplate[F].find("iframe");t.length&&(e||(t[0].src="//about:blank"),i.isIE8&&t.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(F,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){i.types.push(F),w("BeforeChange",function(e,t,i){t!==i&&(t===F?j():i===F&&j(!0))}),w(l+"."+F,function(){j()})},getIframe:function(t,n){var o=t.src,r=i.st.iframe;e.each(r.patterns,function(){return o.indexOf(this.index)>-1?(this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1):void 0});var a={};return r.srcAction&&(a[r.srcAction]=o),i._parseMarkup(n,a,t),i.updateStatus("ready"),n}}});var N=function(e){var t=i.items.length;return e>t-1?e-t:0>e?t+e:e},W=function(e,t,i){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,i)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var t=i.st.gallery,n=".mfp-gallery";return i.direction=!0,!!t&&!!t.enabled&&(a+=" mfp-gallery",w(p+n,function(){t.navigateByImgClick&&i.wrap.on("click"+n,".mfp-img",function(){return i.items.length>1?(i.next(),!1):void 0}),o.on("keydown"+n,function(e){37===e.keyCode?i.prev():39===e.keyCode&&i.next()})}),w("UpdateStatus"+n,function(e,t){t.text&&(t.text=W(t.text,i.currItem.index,i.items.length))}),w(d+n,function(e,n,o,r){var a=i.items.length;o.counter=a>1?W(t.tCounter,r.index,a):""}),w("BuildControls"+n,function(){if(i.items.length>1&&t.arrows&&!i.arrowLeft){var n=t.arrowMarkup,o=i.arrowLeft=e(n.replace(/%title%/gi,t.tPrev).replace(/%dir%/gi,"left")).addClass(v),r=i.arrowRight=e(n.replace(/%title%/gi,t.tNext).replace(/%dir%/gi,"right")).addClass(v);o.click(function(){i.prev()}),r.click(function(){i.next()}),i.container.append(o.add(r))}}),w(u+n,function(){i._preloadTimeout&&clearTimeout(i._preloadTimeout),i._preloadTimeout=setTimeout(function(){i.preloadNearbyImages(),i._preloadTimeout=null},16)}),void w(l+n,function(){o.off(n),i.wrap.off("click"+n),i.arrowRight=i.arrowLeft=null}))},next:function(){i.direction=!0,i.index=N(i.index+1),i.updateItemHTML()},prev:function(){i.direction=!1,i.index=N(i.index-1),i.updateItemHTML()},goTo:function(e){i.direction=e>=i.index,i.index=e,i.updateItemHTML()},preloadNearbyImages:function(){var e,t=i.st.gallery.preload,n=Math.min(t[0],i.items.length),o=Math.min(t[1],i.items.length);for(e=1;e<=(i.direction?o:n);e++)i._preloadItem(i.index+e);for(e=1;e<=(i.direction?n:o);e++)i._preloadItem(i.index-e)},_preloadItem:function(t){if(t=N(t),!i.items[t].preloaded){var n=i.items[t];n.parsed||(n=i.parseEl(t)),I("LazyLoad",n),"image"===n.type&&(n.img=e('<img class="mfp-img" />').on("load.mfploader",function(){n.hasSize=!0}).on("error.mfploader",function(){n.hasSize=!0,n.loadError=!0,I("LazyLoadError",n)}).attr("src",n.src)),n.preloaded=!0}}}});var Z="retina";e.magnificPopup.registerModule(Z,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=i.st.retina,t=e.ratio;(t=isNaN(t)?t():t)>1&&(w("ImageHasSize."+Z,function(e,i){i.img.css({"max-width":i.img[0].naturalWidth/t,width:"100%"})}),w("ElementParse."+Z,function(i,n){n.src=e.replaceSrc(n,t)}))}}}}),k()},"function"==typeof define&&define.amd?define(["jquery"],e):e(window.jQuery||window.Zepto);//# sourceMappingURL=index.bab74b25.js.map

//# sourceMappingURL=index.bab74b25.js.map