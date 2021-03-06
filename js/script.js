//Back end logic
var apiKey = require('./../.env').apiKey;

function Repos() {
}

Repos.prototype.getRepos = function (userInput) {
    $.get('https://api.github.com/users/' + userInput + '?access_token=' + apiKey).then(function (response) {
        console.log(response);
        $('#results').show();
        $('#output-name').html(response.name);
        $('#output-avatar').html('<img id="user-avatarImage" src=' + response.avatar_url + '>');
    }).fail(function (error) {
        $('#error').show().text("We couldn’t find any users matching "+"'"+ userInput +"'");
    });
    $.get('https://api.github.com/users/' + userInput + '/repos?access_token=' + apiKey).then(function (response) {
        for (var n = 0; n <= response.length; n++)
            if (response[n].description === null) {
                $('#display-info').append('<li><a target="_blank" href="' + response[n].html_url + '"><p>' + response[n].name + '</p><p>This repo doesnt have a description </p></a></li>');
            } else {
                $('#display-info').append('<li><a target="_blank" href="' + response[n].html_url + '"><p>' + response[n].name + '</p><p>' + response[n].description + '</p></a></li>');
            }
    }).fail(function (error) {
        //        console.log(error.responseJSON.message);
    });
};

exports.reposModule = Repos;
