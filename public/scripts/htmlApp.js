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
        console.log('yes');
        //getQuestion(data);
        $.ajax({
            method: 'GET',
            url: '/api/' + $('.userResponse').attr('data-id'),
            type: 'json',
            success: postUserRes
        });
    });

    $('#noBtn').on('click', function(event) {
        event.preventDefault();
        currQuestion++;
        console.log('no');
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
    console.log(data);
}

function postUserRes(data) {
    //TODO: end of app
}


function getQuestion(data) {
console.log(currQuestion);
    $('#duckBubble').prepend(data.questions[currQuestion].text);
    $('#relatedLink').append('<a href="'+data.questions[currQuestion].relatedLinks[0]+'">Learn More!</a>');
}
