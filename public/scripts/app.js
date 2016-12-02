console.log("Sanity Check: JS is working!");
var currQuestion = 0;
var stack = 0;

$(document).ready(function() {
    var data = $.ajax({
        method: 'GET',
        url: '/api',
        type: 'json'
    });

    $('#htmlBtn').on('click', function(event) {
        event.preventDefault();
        window.location.href = "/html";
        runQuestions(data.responseJSON[0], currQuestion-1);

    });

    $('#cssBtn').on('click', function(event) {
        event.preventDefault();
        window.location.href = "/css";
        runQuestions(stack);
    });
    //
    // $('#javascriptBtn').on('click', function(event) {
    //     event.preventDefault();
    //     var stack = 3;
    //     window.location.href = "/js";
    //     runQuestions(stack);
    // });

    $('#yesBtn').on('click', function(event) {
        event.preventDefault();
        window.alert('You have found your answer!');
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
        console.log('stack '+stack);
        console.log(window.location.pathname);
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

    function nextQuestion(currQuestion) {
        console.log(currQuestion);

        $('#duckBubble').prepend(data.questions[stack].text);
        $('#relatedLink').append('<a href="' + data.questions[currQuestion - 1].relatedLinks[0] + '">Learn More!</a>');
        if (currQuestion > data.questions[currQuestion].length - 1) {
            currQuestion = 0;
            $('#relatedLink').empty();
            $('#duckBubble').empty();
            $('#relatedLink').append('You problem doesnt seem to be in this language. Please click ' + '<a href = /html>here</a>' + 'to try another language');
        }
    }

    // function getQuestion(data) {
    //     console.log(stack);
    //     console.log(data);
    //
    //     var html = data.find(function(err, succ) {
    //         console.log(succ);
    //         succ = html;
    //     }, {
    //         name: 'css'
    //     });
    //     console.log(currQuestion);
    //     $('#duckBubble').prepend(data[0].questions[0].text);
    //     $('#relatedLink').append('<a href="' + data[0].questions[0].relatedLinks + '">Learn More!</a>');
    // }

});
