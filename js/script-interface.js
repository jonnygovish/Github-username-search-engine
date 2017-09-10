
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