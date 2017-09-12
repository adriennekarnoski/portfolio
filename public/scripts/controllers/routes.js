'use strict';

var app = app || {};

page('/', app.homeController.init, app.pageView.handleNav);
page('/home', app.homeController.init, app.pageView.handleNav);
page('/projects', app.projectsController.init, app.pageView.handleNav);
page('/about', app.aboutController.init, app.pageView.handleNav);

page();
