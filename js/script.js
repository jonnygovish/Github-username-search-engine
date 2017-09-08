//Back end logic
//var apiKey = require('./../.env').apiKey;
var apiKey = "ee9dbb36843ae12d1a5da073b5a2c361858f5082"

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