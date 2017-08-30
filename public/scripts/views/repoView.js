'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#repo-spot');

  };

  // DONE: Remember that new Handlebars template? Let's compile it!
  // Save the result in this `render` variable.

  repoView.index = function() {
    ui();
    let render = Handlebars.compile($('#repo-template').text());

    // The jQuery `append` method lets us append an entire array of HTML elements at once:
    $('#repo-spot').append(
       app.repos.with('name').map(render)
      //  app.repos.with('name')
    );
  };

  module.repoView = repoView;
})(app);
