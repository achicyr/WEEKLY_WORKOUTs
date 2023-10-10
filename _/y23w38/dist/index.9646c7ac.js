function e(){$("#contactForm").removeClass().addClass("shake animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass()})}function t(e,t){if(e)var a="h3 text-center tada animated text-success";else var a="h3 text-center text-danger";$("#msgSubmit").removeClass().addClass(a).text(t)}//# sourceMappingURL=index.9646c7ac.js.map
$("#contactForm").validator().on("submit",function(a){// Initiate Variables With Form Content
var n,s,i,o;a.isDefaultPrevented()?(// handle the invalid form...
e(),t(!1,"Did you fill in the form properly?")):(// everything looks good!
a.preventDefault(),n=$("#name").val(),s=$("#email").val(),i=$("#msg_subject").val(),o=$("#message").val(),$.ajax({type:"POST",url:"php/form-process.php",data:"name="+n+"&email="+s+"&msg_subject="+i+"&message="+o,success:function(a){"success"==a?($("#contactForm")[0].reset(),t(!0,"Message Submitted!")):(e(),t(!1,a))}}))});
//# sourceMappingURL=index.9646c7ac.js.map
