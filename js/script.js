//Back end logic
var apiKey = require('./../.env').apiKey;

function Repos(){
}

Repos.prototype.getRepos = function(){
  $.get('https://api.github.com/users/jonnygovish?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.reposModule = Repos;