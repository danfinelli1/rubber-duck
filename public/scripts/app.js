console.log("Sanity Check: JS is working!");
var currQuestion = 0;
var stack = 0;

$(document).ready(function() {
    var data = $.ajax({
        method: 'GET',
        url: '/api',
        type: 'json',
        success: getQuestion
    });

    $('#htmlBtn').on('click', function(event) {
        event.preventDefault();
        stack = 1;
        window.location.href = "/html";
        runQuestions(stack);
    });

    $('#cssBtn').on('click', function(event) {
        event.preventDefault();
        stack = 2;
        window.location.href = "/css";
        runQuestions(stack);
    });

    $('#javascriptBtn').on('click', function(event) {
        event.preventDefault();
        stack = 3;
        window.location.href = "/js";
        runQuestions(stack);
    });

    $('#yesBtn').on('click', function(event) {
        event.preventDefault();
        currQuestion++;
    });

    $('.question-form').on('submit', function(event) {
      console.log($(this).serialize());
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
    });

    function postQuestion(data){
      console.log(data);
    }

    function nextQuestion(data) {
        console.log(currQuestion);
        console.log(stack);
        switch (currQuestion) {
            case 1:
                $('#relatedLink').empty();
                $('#duckBubble').empty();
                $('#duckBubble').prepend(data.questions[currQuestion - 1].text);
                $('#relatedLink').append('<a href="' + data.questions[currQuestion - 1].relatedLinks[0] + '">Learn More!</a>');
            case 2:
                $('#relatedLink').empty();
                $('#duckBubble').empty();
                $('#duckBubble').prepend(data.questions[currQuestion + 4].text);
                $('#relatedLink').append('<a href="' + data.questions[currQuestion + 4].relatedLinks[0] + '">Learn More!</a>');
            case 3:
                $('#relatedLink').empty();
                $('#duckBubble').empty();
                $('#duckBubble').prepend(data.questions[currQuestion + 9].text);
                $('#relatedLink').append('<a href="' + data.questions[currQuestion + 9].relatedLinks[0] + '">Learn More!</a>');
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
