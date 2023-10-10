var e;/* 
   CounterUp
   ========================================================================== */(e=jQuery)(".counter").counterUp({time:500}),/* 
   MixitUp
   ========================================================================== */e("#portfolio").mixItUp(),e("#clients-scroller").owlCarousel({items:5,itemsTablet:3,margin:90,stagePadding:90,smartSpeed:450,itemsDesktop:[1199,4],itemsDesktopSmall:[980,3],itemsTablet:[768,3],itemsTablet:[767,2],itemsTabletSmall:[480,2],itemsMobile:[479,1]}),e("#testimonials").owlCarousel({navigation:!1,pagination:!0,slideSpeed:1e3,stopOnHover:!0,autoPlay:!0,items:2,itemsDesktop:[1199,2],itemsDesktopSmall:[980,2],itemsTablet:[768,1],itemsTablet:[767,1],itemsTabletSmall:[480,1],itemsMobile:[479,1]}),e(".touch-slider").owlCarousel({navigation:!1,pagination:!0,slideSpeed:1e3,stopOnHover:!0,autoPlay:!0,items:1,itemsDesktopSmall:[1024,1],itemsTablet:[600,1],itemsMobile:[479,1]}),e(".touch-slider").find(".owl-prev").html('<i class="lni-chevron-left"></i>'),e(".touch-slider").find(".owl-next").html('<i class="lni-chevron-right"></i>'),/* 
   Sticky Nav
   ========================================================================== */e(window).on("scroll",function(){e(window).scrollTop()>200?e(".header-top-area").addClass("menu-bg"):e(".header-top-area").removeClass("menu-bg")}),/* 
   VIDEO POP-UP
   ========================================================================== */e(".video-popup").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),e(window).scroll(function(){e(this).scrollTop()>200?e(".back-to-top").fadeIn(400):e(".back-to-top").fadeOut(400)}),e(".back-to-top").on("click",function(o){return o.preventDefault(),e("html, body").animate({scrollTop:0},600),!1}),/* 
   One Page Navigation & wow js
   ========================================================================== *///Initiat WOW JS
new WOW().init(),// one page navigation 
e(".main-navigation").onePageNav({currentClass:"active"}),e(window).on("load",function(){e("body").scrollspy({target:".navbar-collapse",offset:195}),e(window).on("scroll",function(){e(window).scrollTop()>200?e(".fixed-top").addClass("menu-bg"):e(".fixed-top").removeClass("menu-bg")})}),/* Nivo Lightbox
  ========================================================*/e(".lightbox").nivoLightbox({effect:"fadeScale",keyboardNav:!0}),/* stellar js
  ========================================================*/e.stellar({horizontalScrolling:!1,verticalOffset:30,responsive:!1}),/* 
   Page Loader
   ========================================================================== */e(window).on("load",function(){e("#loader").fadeOut()});//# sourceMappingURL=index.af3f7cbd.js.map

//# sourceMappingURL=index.af3f7cbd.js.map
