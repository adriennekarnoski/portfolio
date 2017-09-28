'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};
  aboutController.init = function() {
    $('#about-section').show().siblings().hide();
    // $('nav ul').hide();

    app.pageView.handleSubNav();
  };

  module.aboutController = aboutController;
})(app);
