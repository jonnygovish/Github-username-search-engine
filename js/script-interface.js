$(document).ready(function(){
    $('#form-group').submit(function(event){
        event.preventDefault();
        var userInput = $('#username').val();
        debugger;
        console.log(userInput)
        $('#username').val("");
    });
});