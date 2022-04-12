jQuery(document).ready(function () {

//   Brand section
function setDots(){
  $(".owl-dots").removeClass('disabled');
}
$('.about-wrapper').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  dots:true,
  nav:false,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      500:{
          items:1,
          nav:false
      },
      992:{
          items:1,
          loop:true
      }
  },
  onInitialized:setDots,
  onChanged:setDots
})

// Clients
$('.client-wrapper').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  dots:true,
  nav:false,
  responsive:{
      0:{
          items:3,
          nav:false
      },
      576:{
          items:4,
          nav:false
      },
      992:{
          items:5,
          loop:true
      }
  },
})
new WOW().init();

var header = $(".nav-area")
$(window).on('scroll', function(){
    var scrolling = $(this).scrollTop();
    if(scrolling < 100){
        header.fadeIn(500);	
    }
    else {
        header.fadeOut(500);
    }	
    });


// smooth scrool
var html_body = $('html, body');
$('a.nav-link.contact').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 0
            }, 100);
            return false;
        }
    }
});	










});