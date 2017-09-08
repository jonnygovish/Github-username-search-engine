//Back end logic
var apiKey = require('./../.env').apiKey;

function Repos(){
}

Repos.prototype.getRepos = function(userInput){
  $.get('https://api.github.com/users/' + userInput +'?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.reposModule = Repos;