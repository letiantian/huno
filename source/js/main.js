$(document).ready(function() {

  $('a.blog-button').click(function() {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    currentWidth = $('.panel-cover').width();
    //if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
      $('.content-wrapper').addClass('animated slideInRight');
    //} else {
    //  $('.panel-cover').css('max-width',currentWidth);
    //  $('.panel-cover').animate({'max-width': '430px', 'width': '32%'}, 400, swing = 'swing', function() {} );
    //}
  });

  if (window.location.hash && window.location.hash == "#blog") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  if (window.location.pathname != "/") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  $('.btn-mobile-menu').click(function() {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

  $('.navigation-wrapper .blog-button').click(function() {
    $('.navigation-wrapper').toggleClass('visible');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

});
