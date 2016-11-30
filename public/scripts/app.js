console.log("Sanity Check: JS is working!");
var currQuestion = 0;
var stack = 0;

$(document).ready(function() {
    $.ajax({
        method: 'GET',
        url: '/api',
        type: 'json',
        success: getQuestion
    })

    $('#htmlBtn').on('click', function(event) {
        event.preventDefault();
         stack++;
        runQuestions(stack);
    });

    $('#cssBtn').on('click', function(event) {
        event.preventDefault();
        stack++;
        stack++;
        runQuestions(stack);
    });
    $('#javascriptBtn').on('click', function(event) {
        event.preventDefault();
        stack++;
        stack++;
        stack++;
        runQuestions(stack);
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
        stack++;
        currQuestion++;
        $.ajax({
            method: 'GET',
            url: '/api/' + $('.userResponse').attr('data-id'),
            type: 'json',
            success: nextQuestion
        });

    });
    function runQuestions(stack) {
      console.log(stack);
        switch (stack) {
            case 1:
                $('#duckBubble').prepend(data.questions[currQuestion].text);
                $('#relatedLink').append('<a href="' + data.questions[stack].relatedLinks[0] + '">Learn More!</a>');
                break;
            case 2:
                $('#duckBubble').prepend(data.questions[currQuestion + 5].text);
                $('#relatedLink').append('<a href="' + data.questions[stack + 5].relatedLinks[0] + '">Learn More!</a>');
                break;
            case 3:
                $('#duckBubble').prepend(data.questions[currQuestion + 10].text);
                $('#relatedLink').append('<a href="' + data.questions[stack + 10].relatedLinks[0] + '">Learn More!</a>');
                break;
        }
    }

    function nextQuestion(data) {
      console.log(currQuestion);
        console.log(stack);
        $('#duckBubble').empty();
        $('#relatedLink').empty();
        switch (currQuestion) {
            case 1:
                $('#duckBubble').prepend(data.questions[currQuestion-1].text);
                $('#relatedLink').append('<a href="' + data.questions[currQuestion-1].relatedLinks[0] + '">Learn More!</a>');
            case 2:
                $('#duckBubble').prepend(data.questions[currQuestion+4].text);
                $('#relatedLink').append('<a href="' + data.questions[currQuestion+4].relatedLinks[0] + '">Learn More!</a>');
            case 3:
                $('#duckBubble').prepend(data.questions[currQuestion+9].text);
                $('#relatedLink').append('<a href="' + data.questions[currQuestion+9].relatedLinks[0] + '">Learn More!</a>');
        }
       if (currQuestion > data.questions[currQuestion].length - 1) {
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
