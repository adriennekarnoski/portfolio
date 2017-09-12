'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#repo-spot');

  };

  repoView.index = function() {
    ui();
    let render = Handlebars.compile($('#repo-template').text());

    $('#repo-spot').append(
       app.repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);
