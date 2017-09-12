'use strict';
var app = app || {};

(function(module) {
  const projectsController = {};
  projectsController.init = function() {

      $('#work-section').show().siblings().hide();


    var $navList = $('.nav-ul');
    // $navList.hide();


  };

app.repos.requestRepos(app.repoView.index);

  module.projectsController = projectsController;
})(app);


// function() {
//  $('#intro, #about-span').hide();
//  });
