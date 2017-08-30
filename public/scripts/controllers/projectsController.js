'use strict';
var app = app || {};

(function(module) {
  const projectsController = {};

  projectsController.init = function() {
    var $navList = $('.nav-ul');
    $navList.hide();
    $('.section-container').hide();
    $('section#projects').fadeIn('slow');
    $('section#project-repo').fadeIn('slow');
  };

app.repos.requestRepos(app.repoView.index);

  module.projectsController = projectsController;
})(app);
