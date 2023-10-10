//jQuery to collapse the navbar on scroll
$(window).scroll(function(){$(".navbar").offset().top>50?$(".navbar-fixed-top").addClass("top-nav-collapse"):$(".navbar-fixed-top").removeClass("top-nav-collapse")}),//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function(){$(document).on("click","a.page-scroll",function(o){var a=$(this);$("html, body").stop().animate({scrollTop:$(a.attr("href")).offset().top},1500,"easeInOutExpo"),o.preventDefault()})});//# sourceMappingURL=index.b5586f7c.js.map

//# sourceMappingURL=index.b5586f7c.js.map
