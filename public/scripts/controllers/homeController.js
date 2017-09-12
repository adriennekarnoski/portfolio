'use strict';
var app = app || {};

(function(module) {
  const homeController = {};
  homeController.init = function() {

      $('#home-section').show().siblings().hide();


  $('footer').hide();
  };

  module.homeController = homeController;
})(app);
