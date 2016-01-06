$(document).ready(function(){
    
    $(window).scroll(function () {

        var y = $(this).scrollTop();

        $('.link').each(function (event) {
            if (y >= $($(this).attr('href')).offset().top - 40) {
                $('.link').not(this).removeClass('cc-active');
                $(this).addClass('cc-active');
            }
        });
    });

// resume "dots" menues
    $(".info").click(function() { 
        event.stopPropagation();
        $(this).children(".info-menu").fadeIn(200);
    });
    
    $(".info-close").click(function(){
        event.stopPropagation();
        $(this).closest(".info-menu").fadeOut(200);
    });
    
    $(".resume").click(function(){
        event.stopPropagation();
        $(".info-menu").fadeOut(200); 
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
   
// Activity page toggle
   $('#toggle-sample-one').addClass("toggle-active");
   
   $("#toggle-sample-one").click(function(){
       $("#example-one").show();
       $("#example-two, #example-three").hide();
       $("#toggle-sample-one").addClass('toggle-active');
       $("#toggle-sample-two, #toggle-sample-three").removeClass('toggle-active');
   });
   $("#toggle-sample-two").click(function(){
       $("#example-two").show();
       $("#example-one, #example-three").hide();
       $("#toggle-sample-two").addClass('toggle-active');
       $("#toggle-sample-one, #toggle-sample-three").removeClass('toggle-active');
   });
   $("#toggle-sample-three").click(function(){
       $("#example-three").show();
       $("#example-one, #example-two").hide();
       $("#toggle-sample-three").addClass('toggle-active');
       $("#toggle-sample-one, #toggle-sample-two").removeClass('toggle-active');
   });
});