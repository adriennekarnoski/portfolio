'use strict';
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];
 repos.commits = [];
  repos.requestRepos = function(callback) {

    $.ajax({
      url: 'https://api.github.com/user/repos',
      method: 'GET',
      headers: {
        Authorization: `token ${githubToken}`
      }
        })
          .then(
            data => data.forEach(function(ele) {repos.all.push(ele)}),

            err => console.error(err))
            .then(callback)
};


repos.filteredList = repos.commits.filter(function(user) { return user.author.login === 'adriennekarnoski'});
repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
