'use strict';
var app = app || {};

(function(module) {
  const homeController = {};

  homeController.init = function() {
    var $navList = $('.nav-ul');
    $navList.hide();
  $('.section-container').hide();
  $('#intro').show();
  };

  module.homeController = homeController;
})(app);
