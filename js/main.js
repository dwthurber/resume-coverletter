$(document).ready(function(){
    
// resume "dots" menues
   $("#one-education").click(function(){
        $("#one-menu").fadeIn(100);
   }); 
   $("#one-close").click(function(){
        $("#one-menu").fadeOut(100);
   });
   $("#two-dot").click(function(){
        $("#two-menu").fadeIn(100);
   }); 
   $("#two-close").click(function(){
        $("#two-menu").fadeOut(100);
   });
   
//   resume page toggle
   $('#toggle-one').addClass("toggle-active");
   
   $("#toggle-one").click(function(){
       $("#resume-one").show();
       $("#resume-two").hide();
       $("#toggle-one").addClass('toggle-active');
       $("#toggle-two").removeClass('toggle-active');
   });
   $("#toggle-two").click(function(){
       $("#resume-two").show();
       $("#resume-one").hide();
       $("#toggle-two").addClass('toggle-active');
       $("#toggle-one").removeClass('toggle-active');
   });
});