$(document).ready(function(){

 $(".navbar-toggle").click(function(e){

   e.preventDefault();
   $("body").toggleClass("sidebar-collapse");
   $(".content").css({left:0});
 });


});