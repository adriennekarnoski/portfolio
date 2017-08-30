'use strict';

// navigation
var app = app || {};

(function(module) {
  const pageView = {};
  pageView.handleNav = function() {
  $('#nav-list').on('click', 'i.fa-bars', function() {
    var $navList = $('.nav-ul');
    $navList.slideDown();
  });
}

//image carousel

pageView.handleCarousel = function() {
  var index = 0;
  var imgList = [$('#1'), $('#2'), $('#3')];
  $('.carousel-img').hide();
  imgList[index].show();

  $('#carousel').on('click', 'i#right', function() {
    index++;
    $('.carousel-img').hide();
    if (index === 3) {
      index = 0;
    }
    imgList[index].fadeIn('fast');
    });

  $('#carousel').on('click', 'i#left', function() {
    index--;
    $('.carousel-img').hide();
    if (index < 0) {
      index = 2;
    }
    imgList[index].show();
  });
}

// project images and description

pageView.handleProjectDescription = function() {
  $('#projects').on('mouseenter', '.project-article', function() {
    var $description = $($(this).children('p'));
    var $img = $($(this).children('img'));
    var $imgHeight = $($(this).siblings().children('img').height());
    var $newHeight = $imgHeight[0] + 'px';
    $img.hide();
    $description.fadeIn().css('height', $newHeight);
  })
  $('#projects').on('mouseleave', '.project-article', function() {
    var $description = $($(this).children('p'));
    var $img = $($(this).children('img'));
    $img.fadeIn();
    $description.hide();
  })
}

pageView.handleNav();
pageView.handleCarousel();
pageView.handleProjectDescription();

module.pageView = pageView;
})(app);
