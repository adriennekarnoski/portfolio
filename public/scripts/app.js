'use strict';

function handleNav() {
  $('#nav-list').on('click', 'i.fa-bars', function() {
    var $navList = $('ul');
    console.log($navList);
    $navList.slideToggle();

    $('nav').on('click', 'li', function() {
      var $navValue = $(this).data('content');
      console.log($navValue);
      if ($navValue === 'projects') {
        $navList.hide();
        $('.section-container').hide();
        $('section#projects').show();
      } else if ($navValue === 'about') {
        $navList.hide();
        $('.section-container').hide();
        $('section#about-me').show();
        $('section#skills').show();
      } else {
        $navList.hide();
        $('.section-container').show();
      }
});
  });
}

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

handleNav();
handleCarousel();
