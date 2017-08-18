'use strict';

// function handleNav() {
//   $('nav').on('click', 'li', function() {
//     var $navValue = $(this).data('content');
//     console.log($navValue);
//     if ($navValue === 'projects') {
//       $('.section-container').hide();
//       $('section#projects').show();
//     } else if ($navValue === 'about') {
//       $('.section-container').hide();
//       $('section#about-me').show();
//       $('section#skills').show();
//     } else {
//       $('.section-container').show();
//     }
//
//   });
// }
//
// handleNav();

function handleNav() {
  $('#nav-list').on('click', 'i.fa-bars', function() {
    var $navList = $('ul');
    console.log($navList);
    $navList.slideToggle();

  });
}

function handleCarousel() {
$('#carousel').on('click', 'i', function() {
var $img = $('#img-container');
var $imgShow = $img.children().first();
$imgShow.addClass('carousel-img');
  var $clickId = $(this).attr('id');
console.log($imgShow.siblings());
var $imgNext = $imgShow.siblings();



if ($clickId === 'left') {

  $imgNext.addClass('carousel-img');
  $imgNext.next().removeClass('carousel-img');
} else if ($clickId === 'right') {
  $imgNext.addClass('carousel-img');
  $imgNext.previous().removeClass('carousel-img');
}



});

}

handleNav();
handleCarousel();
