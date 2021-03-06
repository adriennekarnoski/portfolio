'use strict';
var app = app || {};

(function(module) {

function Project(rawDataObj) {
  this.title = rawDataObj.title;
  this.image = rawDataObj.image;
  this.description = rawDataObj.description;
  this.demoHref = rawDataObj.demoHref;
  this.codeHref = rawDataObj.codeHref;
};

Project.all = [];

Project.prototype.toHtml = function() {
  let template = Handlebars.compile($('#project-template').text());

  return template(this);
};

Project.loadAll = function(rawData) {
  rawData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  })
};

Project.fetchAll = function() {
  if (localStorage.rawData) {
    Project.loadAll(JSON.parse(localStorage.rawData));
    Project.initProjectSection();
  } else {
    $.getJSON('/data/projectData.json')
    .then(function(rawData) {
      Project.loadAll(rawData);
      localStorage.rawData = JSON.stringify(rawData);
      Project.initProjectSection();
    }, function(err) {
      console.error(err);
    });
  }
}

Project.initProjectSection = function() {
  Project.all.forEach(function(project) {
    $('#projects').append(project.toHtml())
  });
}

Project.fetchAll();

module.Project = Project;
})(app);
