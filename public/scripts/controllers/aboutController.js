'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.init = function() {
    var $navList = $('.nav-ul');
    $navList.hide();
    $('.section-container').hide();
    $('section#about-me').fadeIn();
    $('section#skills').fadeIn();
    $('section#contact').fadeIn();
  };

  module.aboutController = aboutController;
})(app);
