$(document).ready(function(){
    var height = $(window).height();
    $('body > section:last-of-type').css('min-height', height);
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(window).scroll(function(){
    var scrollTop = $(document).scrollTop();
    if( $(window).width() > 800){
        $('#intro .wrapper').css('padding-top', scrollTop/2);
    }
    if( scrollTop > $(window).height() - 150){
        $('#main-nav').addClass('back-to-top-active');
    }else{
        $('#main-nav').removeClass('back-to-top-active');
    }
})