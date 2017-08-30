'use strict';
var app = app || {};

(function(module) {
  const projectsController = {};

  projectsController.init = function() {
    var $navList = $('.nav-ul');
    $navList.hide();
    $('.section-container').hide();
    $('section#projects').fadeIn('slow');
  };

  module.projectsController = projectsController;
})(app);
