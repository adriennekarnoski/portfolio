'use strict';
var app = app || {};

(function(module) {
  const projectsController = {};
  projectsController.init = function() {
      $('#work-section').show().siblings().hide();
      // $('nav ul').hide();
  };



  module.projectsController = projectsController;
})(app);
