console.log("Sanity Check: JS is working!");

var currQuestion = 0;

$(document).ready(function() {
    $.ajax({
        method: 'GET',
        url: '/api',
        type: 'json',
        success: getQuestion
    });

    $('#yesBtn').on('click', function(event) {
        event.preventDefault();
        currQuestion++;

    });

    $('#noBtn').on('click', function(event) {
        event.preventDefault();
        currQuestion++;
        //console.log('no');
        $.ajax({
            method: 'GET',
            url: '/api/' + $('.userResponse').attr('data-id'),
            type: 'json',
            success: nextQuestion
        });

    });

});

function nextQuestion(data) {
  console.log(currQuestion);
    $('#duckBubble').empty();
    $('#duckBubble').prepend(data.questions[currQuestion].text);
    $('#relatedLink').empty();
    $('#relatedLink').append('<a href="'+data.questions[currQuestion].relatedLinks[0]+'">Learn More!</a>');
    if(currQuestion === data.questions[currQuestion].length-1){
      currQuestion = 0;
      $('#relatedLink').empty();
      $('#duckBubble').empty();
      $('#relatedLink').append('You problem doesnt seem to be in this language. Please click '+'<a href = /html>here</a>'+'to try another language');
    }
}

function postUserRes(data) {
    //TODO: end of app
}


function getQuestion(data) {
console.log(currQuestion);
    $('#duckBubble').prepend(data.questions[currQuestion].text);
    $('#relatedLink').append('<a href="'+data.questions[currQuestion].relatedLinks[0]+'">Learn More!</a>');
}
