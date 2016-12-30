console.log("Sanity Check: JS is working!");
var currQuestion = 0;

$(document).ready(function() {

    var data = $.ajax({
        method: 'GET',
        url: '/api',
        type: 'json'
    });

    $('#htmlBtn').on('click', function(event) {
        event.preventDefault();
        window.location.href = "/html";
    });

    $('#cssBtn').on('click', function(event) {
        event.preventDefault();
        window.location.href = "/css";
    });

    $('#javascriptBtn').on('click', function(event) {
        event.preventDefault();
        window.location.href = "/js";
    });

    $('#yesBtn').on('click', function(event) {
        event.preventDefault();
        window.alert('You have found your answer!');
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
        switch (window.location.pathname) {
          case '/html':
            console.log('hi');
            runQuestions(data.responseJSON[0], currQuestion-1);
            break;
          case '/css':
            console.log('css');
            runQuestions(data.responseJSON[1], currQuestion-1);
          case '/js':
            console.log('js');
            runQuestions(data.responseJSON[2], currQuestion-1);
        }
    });

    function runQuestions(data, currQuestion) {
      console.log(data);
        $('#relatedLink').empty();
        $('#duckBubble').empty();
        $('#duckBubble').prepend(data.questions[currQuestion].text);
        $('#relatedLink').append('<a href="' + data.questions[currQuestion].relatedLinks + '">Learn More!</a>');
    }

    function postQuestion(data) {
        console.log(data);
    }


});
