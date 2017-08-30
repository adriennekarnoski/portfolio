'use strict';

var app = app || {};

page('/home', app.homeController.init);
page('/projects', app.projectsController.init);
page('/about', app.aboutController.init);

page();
