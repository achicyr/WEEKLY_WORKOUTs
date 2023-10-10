!/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 *//*jshint browser: true, strict: true, undef: true *//*global define: false */function(s){// class helper functions from bonzo https://github.com/ded/bonzo
function n(s){return RegExp("(^|\\s+)"+s+"(\\s+|$)")}function e(s,n){(a(s,n)?c:t)(s,n)}"classList"in document.documentElement?(a=function(s,n){return s.classList.contains(n)},t=function(s,n){s.classList.add(n)},c=function(s,n){s.classList.remove(n)}):(a=function(s,e){return n(e).test(s.className)},t=function(s,n){a(s,n)||(s.className=s.className+" "+n)},c=function(s,e){s.className=s.className.replace(n(e)," ")});var a,t,c,i={// full names
hasClass:a,addClass:t,removeClass:c,toggleClass:e,// short names
has:a,add:t,remove:c,toggle:e};"function"==typeof define&&define.amd?define(i):s.classie=i}(window);//# sourceMappingURL=index.918f5d36.js.map

//# sourceMappingURL=index.918f5d36.js.map
