$(document).ready(function(){
         $('.slide1Hover').hide();
         $('.slide2Hover').hide();
         $('.slide3Hover').hide();
         $('.slide4Hover').hide();

 
    $('.slide-1').mouseenter(function() {
    $('.slide1Hover').show('slow'); 
    });
    
    $('.slide-1').mouseleave(function() {
    $('.slide1Hover').hide('slow'); 
    });
    
      $('.slide-2').mouseenter(function() {
    $('.slide2Hover').show('slow'); 
    });
    
    $('.slide-2').mouseleave(function() {
    $('.slide2Hover').hide('slow'); 
    });
    
      $('.slide-3').mouseenter(function() {
    $('.slide3Hover').show('slow'); 
    });
    
    $('.slide-3').mouseleave(function() {
    $('.slide3Hover').hide('slow'); 
    });
    
      $('.slide-4').mouseenter(function() {
    $('.slide4Hover').show('slow'); 
    });
    
    $('.slide-4').mouseleave(function() {
    $('.slide4Hover').hide('slow'); 
    });
    
  });