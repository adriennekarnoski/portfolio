'use strict';

// navigation

function handleNav() {
  $('#nav-list').on('click', 'i.fa-bars', function() {
    var $navList = $('.nav-ul');
    console.log($navList);
    $navList.slideToggle();

    $('nav').on('click', '.nav-li', function() {
      var $navValue = $(this).data('content');
      if ($navValue === 'projects') {
        $navList.hide();
        $('.section-container').hide();
        $('section#projects').fadeIn('slow');
      } else if ($navValue === 'about') {
        $navList.hide();
        $('.section-container').hide();
        $('section#about-me').fadeIn();
        $('section#skills').fadeIn();
        $('section#contact').fadeIn();
      } else {
        $navList.hide();
        $('.section-container').fadeIn();
      }
});
  });
}

//image carousel

function handleCarousel() {
  var index = 0;
  var imgList = [$('#1'), $('#2'), $('#3')];

  $('.carousel-img').hide();
  imgList[index].show();

  $('#carousel').on('click', 'i#right', function() {
    index++;
    $('.carousel-img').hide();

    if (index === 3) {
      console.log(index);
      index = 0;
    }
imgList[index].fadeIn('fast');
  });

  $('#carousel').on('click', 'i#left', function() {
    console.log(index);
    index--;
    $('.carousel-img').hide();
    if (index < 0) {
      index = 2;
    }
    imgList[index].show();
  });
}

// project images and description

function handleProjectDescription() {
  $('#projects').on('mouseenter', '.project-article', function() {
    var $description = $($(this).children('p'));
    var $img = $($(this).children('img'));
    var $imgHeight = $($(this).siblings().children('img').height());
    var $newHeight = $imgHeight[0] + 'px';

    $img.hide();
    $description.fadeIn().css('height', $newHeight);
    console.log($description.css('height'));
  })
  $('#projects').on('mouseleave', '.project-article', function() {
    var $description = $($(this).children('p'));
    var $img = $($(this).children('img'));
    $img.fadeIn();
    $description.hide();
  })
}

handleNav();
handleCarousel();
handleProjectDescription();
