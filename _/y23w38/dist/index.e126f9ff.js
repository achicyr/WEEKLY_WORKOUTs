/* Styles Switcher */var o;window.console=window.console||((o={}).log=o.warn=o.debug=o.info=o.error=o.time=o.dir=o.profile=o.clear=o.exception=o.trace=o.assert=function(){},o),jQuery(document).ready(function(o){o("ul.colors .color1").click(function(){return o("#colors").attr("href","css/colors/preset.css"),!1}),o("ul.colors .color2").click(function(){return o("#colors").attr("href","css/colors/blue.css"),!1}),o("ul.colors .color3").click(function(){return o("#colors").attr("href","css/colors/turquoise.css"),!1}),o("ul.colors .color4").click(function(){return o("#colors").attr("href","css/colors/orange.css"),!1}),o("ul.colors .color5").click(function(){return o("#colors").attr("href","css/colors/wisteria.css"),!1}),o("ul.colors .color6").click(function(){return o("#colors").attr("href","css/colors/alizarin.css"),!1}),o("#color-style-switcher .bottom a.settings").click(function(c){c.preventDefault(),"-145px"===o("#color-style-switcher").css("left")?o("#color-style-switcher").animate({left:"0px"}):o("#color-style-switcher").animate({left:"-145px"})}),o("ul.colors li a").click(function(c){c.preventDefault(),o(this).parent().parent().find("a").removeClass("active"),o(this).addClass("active")})}),//Inject Necessary Styles and HTML
// jQuery('head').append('<link rel="stylesheet" id="colors" href="css/colors/preset.css" type="text/css" />');
// jQuery('head').append('<link rel="stylesheet" href="css/color-switcher.css" type="text/css" />'); 
jQuery("body").append('<div id="color-style-switcher"><div><h3>Color Palette</h3><ul class="colors"><li><a class="color1 active" href="#"></a></li><li><a class="color2" href="#"></a></li><li><a class="color3" href="#"></a></li><li><a class="color4" href="#"></a></li><li><a class="color5" href="#"></a></li><li><a class="color6" href="#"></a></li></ul></div><div class="bottom"> <a href="#" class="settings"><i class="lni-cog"></i></a> </div></div>');//# sourceMappingURL=index.e126f9ff.js.map

//# sourceMappingURL=index.e126f9ff.js.map
