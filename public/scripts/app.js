console.log("Sanity Check: JS is working!");
var currQuestion = 0;

$(document).ready(function() {

    $.ajax({
        method: 'GET',
        url: '/api',
        type: 'json',
        success: getQuestion
    })

    $('#htmlBtn').on('click', function(event) {
        event.preventDefault();
        var stackDecider = 1;
        stackDecider=1;

        runQuestions(stackDecider);
    });

    $('#cssBtn').on('click', function(event) {
        event.preventDefault();
        var stackDecider = 2;
        stackDecider=2;
        runQuestions(stackDecider);
    });
    $('#javascriptBtn').on('click', function(event) {
        event.preventDefault();
        var stackDecider = 3;
        runQuestions(stackDecider);
    });

    $('#yesBtn').on('click', function(event) {
        event.preventDefault();
        currQuestion++;
    });

    $('.question-form').on('submit', function(event) {
        event.preventDefault();
        $.ajax({
            method: 'POST',
            url: '/api',
            type: 'json',
            data: $(this).serialize(),
            success: postQuestion
        });
    });

    $('#noBtn').on('click', function(event) {
        event.preventDefault();
        currQuestion++;
        $.ajax({
            method: 'GET',
            url: '/api/' + $('.userResponse').attr('data-id'),
            type: 'json',
            success: nextQuestion
        });

    });
    function runQuestions(stackDecider) {
        switch (stackDecider) {
            case 1:
                $('#duckBubble').prepend(data.questions[currQuestion].text);
                $('#relatedLink').append('<a href="' + data.questions[stackDecider].relatedLinks[0] + '">Learn More!</a>');
                break;
            case 2:
                $('#duckBubble').prepend(data.questions[currQuestion + 5].text);
                $('#relatedLink').append('<a href="' + data.questions[stackDecider + 5].relatedLinks[0] + '">Learn More!</a>');
                break;
            case 3:
                $('#duckBubble').prepend(data.questions[currQuestion + 10].text);
                $('#relatedLink').append('<a href="' + data.questions[stackDecider + 10].relatedLinks[0] + '">Learn More!</a>');
                break;
        }
    }

    function nextQuestion(data) {
      console.log(currQuestion);
        console.log(stackDecider);
        console.log(data);
        $('#duckBubble').empty();
        $('#relatedLink').empty();
        switch (stackDecider) {
            case 1:
                $('#duckBubble').prepend(data.questions[stackDecider].text);
                $('#relatedLink').append('<a href="' + data.questions[stackDecider].relatedLinks[0] + '">Learn More!</a>');
            case 2:
                $('#duckBubble').prepend(data.questions[currQuestion].text);
                $('#relatedLink').append('<a href="' + data.questions[stackDecider+5].relatedLinks[0] + '">Learn More!</a>');
            case 3:
                $('#duckBubble').prepend(data.questions[currQuestion].text);
                $('#relatedLink').append('<a href="' + data.questions[stackDecider+10].relatedLinks[0] + '">Learn More!</a>');
        }
       if (currQuestion === data.questions[currQuestion].length - 1) {
            currQuestion = 0;
            $('#relatedLink').empty();
            $('#duckBubble').empty();
            $('#relatedLink').append('You problem doesnt seem to be in this language. Please click ' + '<a href = /html>here</a>' + 'to try another language');
        }
    }

});


function getQuestion(data) {
    console.log(currQuestion);
    $('#duckBubble').prepend(data.questions[currQuestion].text);
    $('#relatedLink').append('<a href="' + data.questions[currQuestion].relatedLinks[0] + '">Learn More!</a>');
}

function postQuestion(data) {
    console.log(data);
}
