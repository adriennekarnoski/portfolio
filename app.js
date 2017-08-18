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
    $navList.show();

  });
}

handleNav();
