/*global $, jQuery, alert*/
$(document).ready(function() {

  'use strict';

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //


  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');

    var target = this.hash,
        menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top - 80
    }, 500, 'swing', function() {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  });


  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //


  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 200 ) {
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass('subpage-nav');
    } else {
      $("#main-nav").slideUp(700);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass('subpage-nav');
    }
  });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });

  // ========================================================================= //
  //  // HEADER CONTENT
  // ========================================================================= //
  $(".spark").sparkle({

    color: ["#2eafea","#e56604"],
    speed: 0.4

  });


  let hint = document.getElementById('code');
  let hint2 = document.getElementById('windowbar');
  let btn = document.getElementById('codebutton');
  let btnclose = document.getElementById('buttonclose');

  btn.addEventListener('click', function(){

      $(".header-content").css('display', 'none')
      hint.style.display = 'block';
      window.setTimeout(function(){
        hint.style.opacity = 1;
        hint.style.transform = 'scale(1)';
      },0);

      $(".header-content").css('display', 'none')
      hint2.style.display = 'block';
      window.setTimeout(function(){
        hint2.style.opacity = 1;
        hint2.style.transform = 'scale(1)';
      },0);

  });

  btnclose.addEventListener('click', function(){

      hint.style.opacity = 0;
      hint2.style.opacity = 0;
      hint.style.transform = 'scale(0)';
      hint2.style.transform = 'scale(0)';
      window.setTimeout(function(){
        hint.style.display = 'none';
        hint2.style.display = 'none';
      },700);
      $(".header-content").css('display', 'flex')
  
  });

  // $(".buttonclose").on('click', function(e) {
  //   $(".header-content").css('display', 'flex')
  //   $("#code").css('display', 'none')
  //   $("#windowbar").css('display', 'none')
  // })




});

