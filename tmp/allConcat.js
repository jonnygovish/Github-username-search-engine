
var Repos = require('./../js/script.js').reposModule;

$(document).ready(function(){
    var currentReposObject = new Repos();
    $('#form-group').submit(function(event){
        event.preventDefault();
        //storing the user input
        var userInput = $('#username').val();
        console.log(userInput);
        //Displ#y the name
        $('#display-name').text(userInput);
        //clearing the input field after submit
        $('#username').val("");
        currentReposObject.getRepos(userInput);
    });
});