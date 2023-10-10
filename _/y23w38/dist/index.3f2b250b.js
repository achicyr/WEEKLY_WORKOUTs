var t,i,n,s;t=jQuery,i=window,n=document,// the plugin prototype
(s=function(s,e){this.elem=s,this.$elem=t(s),this.options=e,this.metadata=this.$elem.data("plugin-options"),this.$win=t(i),this.sections={},this.didScroll=!1,this.$doc=t(n),this.docHeight=this.$doc.height()}).prototype={defaults:{navItems:"a",currentClass:"current",changeHash:!1,easing:"swing",filter:"",scrollSpeed:750,scrollThreshold:.5,begin:!1,end:!1,scrollChange:!1},init:function(){return(// Introduce defaults that can be extended either
// globally or using an object literal.
this.config=t.extend({},this.defaults,this.options,this.metadata),this.$nav=this.$elem.find(this.config.navItems),""!==this.config.filter&&(this.$nav=this.$nav.filter(this.config.filter)),//Handle clicks on the nav
this.$nav.on("click.onePageNav",t.proxy(this.handleClick,this)),//Get the section positions
this.getPositions(),//Handle scroll changes
this.bindInterval(),//Update the positions on resize too
this.$win.on("resize.onePageNav",t.proxy(this.getPositions,this)),this)},adjustNav:function(t,i){t.$elem.find("."+t.config.currentClass).removeClass(t.config.currentClass),i.addClass(t.config.currentClass)},bindInterval:function(){var t,i=this;i.$win.on("scroll.onePageNav",function(){i.didScroll=!0}),i.t=setInterval(function(){t=i.$doc.height(),i.didScroll&&(i.didScroll=!1,i.scrollChange()),t!==i.docHeight&&(i.docHeight=t,i.getPositions())},250)},getHash:function(t){return t.attr("href").split("#")[1]},getPositions:function(){var i,n,s,e=this;e.$nav.each(function(){i=e.getHash(t(this)),(s=t("#"+i)).length&&(n=s.offset().top,e.sections[i]=Math.round(n))})},getSection:function(t){var i=null,n=Math.round(this.$win.height()*this.config.scrollThreshold);for(var s in this.sections)this.sections[s]-n<t&&(i=s);return i},handleClick:function(n){var s=this,e=t(n.currentTarget),o=e.parent(),a="#"+s.getHash(e);o.hasClass(s.config.currentClass)||(s.config.begin&&s.config.begin(),//Change the highlighted nav item
s.adjustNav(s,o),//Removing the auto-adjust on scroll
s.unbindInterval(),//Scroll to the correct position
s.scrollTo(a,function(){s.config.changeHash&&(i.location.hash=a),//Add the auto-adjust on scroll back in
s.bindInterval(),s.config.end&&s.config.end()})),n.preventDefault()},scrollChange:function(){var t,i=this.$win.scrollTop(),n=this.getSection(i);//If the position is set
null!==n&&!(t=this.$elem.find('a[href$="#'+n+'"]').parent()).hasClass(this.config.currentClass)&&(//Change the highlighted nav item
this.adjustNav(this,t),this.config.scrollChange&&this.config.scrollChange(t))},scrollTo:function(i,n){var s=t(i).offset().top;t("html, body").animate({scrollTop:s},this.config.scrollSpeed,this.config.easing,n)},unbindInterval:function(){clearInterval(this.t),this.$win.unbind("scroll.onePageNav")}},s.defaults=s.prototype.defaults,t.fn.onePageNav=function(t){return this.each(function(){new s(this,t).init()})};//# sourceMappingURL=index.3f2b250b.js.map

//# sourceMappingURL=index.3f2b250b.js.map
