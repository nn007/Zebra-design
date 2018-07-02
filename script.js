$(window).on('load',function(){
   $('.wrapper').removeClass('hidden');
   $('.preloader').addClass('hidden');
});
$(document).ready(function(){
   
   var $firstP = $(".text-two p");
   var $secondP = $(".text-three p");
   var $thirdP = $(".we ");
   var $fiveP = $(".eat ");

   $(window).on("scroll", () =>{
   		var $win = $(window).scrollTop()/2; 
   		$firstP.css('transform', 'translateX('+$win+'px)');
   		$secondP.css('transform', 'translateX('+$win*(-1)+'px)'); 
   		$thirdP.css('transform', 'translateY('+$win*(-1)+'px)');
   		$fiveP.css('transform', 'translateY('+$win*(-1)+'px)');
   });
   
   $('.first-content').on('mouseover',function(){
      $('.first-section').css({
         'filter':'invert(100%)',
         '-webkit-filter':'invert(100%)'
      });  
   });
   $('.first-content').on('mouseleave',function(){
      $('.first-section').css({
         'filter':'invert(0)',
         '-webkit-filter':'invert(0)'
      });  
   });
});
