(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = 'ee9dbb36843ae12d1a5da073b5a2c361858f5082';
},{}],2:[function(require,module,exports){
//Back end logic
var apiKey = require('./../.env').apiKey;

function Repos() {
}

Repos.prototype.getRepos = function (userInput) {
    $.get('https://api.github.com/users/' + userInput + '?access_token=' + apiKey).then(function (response) {
        console.log(response);
        $('#output-name').html(response.name);
        $('#output-avatar').html('<img id="user-avatarImage" src=' + response.avatar_url + '>');
    }).fail(function (error) {

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

},{"./../.env":1}],3:[function(require,module,exports){

var Repos = require('./../js/script.js').reposModule;
$(document).ready(function(){
    var currentReposObject = new Repos();
    $('#form-group').submit(function(event){
        event.preventDefault();
        //storing the user input
        var userInput = $('#username').val();
        console.log(userInput);
        $('#results').show();
        //Displ#y the name
        $('#output-username').text(userInput);
        debugger;
        //clearing the input field after submit
        $('#username').val("");
        currentReposObject.getRepos(userInput);
        $('#display-info').html("");
    });
});
},{"./../js/script.js":2}]},{},[3]);
