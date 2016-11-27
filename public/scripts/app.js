console.log("Sanity Check: JS is working!");
var currQuestion = 0;
var stackDecider = 0;

$(document).ready(function() {

    $.ajax({
        method: 'GET',
        url: '/api',
        type: 'json',
        success: getQuestion
        // TODO: What happens when you have an error? -jc
    });

    // TODO: Please write a comment on what these following three selectors do -jc
    $('#htmlBtn').on('click', function(event) {
        event.preventDefault();
        stackDecider = 1;
        runQuestions(stackDecider);
    });

    $('#cssBtn').on('click', function(event) {
        event.preventDefault();
        stackDecider = 2;
        runQuestions(stackDecider);
    });

    $('#javascriptBtn').on('click', function(event) {
        event.preventDefault();
        stackDecider = 3;
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
            data: $(this).serialize(), //TODO: assign this data to a variable and pass that variable to data instead -jc
            success: postQuestion
            // TODO: What happens when you have an error? -jc

        });
    });

    $('#noBtn').on('click', function(event) {
        event.preventDefault();
        currQuestion++;
        //console.log('no');
        $.ajax({
            method: 'GET',
            //TODO: extract string you're making below to a variable and pass the variable instead -jc
            url: '/api/' + $('.userResponse').attr('data-id'),
            type: 'json',
            success: nextQuestion
            // TODO: What happens when you have an error? -jc

        });

    });
});

function runQuestions(num) {
  // TODO: Don't use a switch case. Maybe some sort of OBJECT that has key/value pairs would come in handy here? -jc
    switch (num) {
        case 1:
            window.location.href = "/html";
            stackDecider = 1;
            break;
        case 2:
            window.location.href = "/css"
            stackDecider = 2;
            break;
        case 3:
            window.location.href = "/js";
            stackDecider = 3;
            break;
    }
}

function nextQuestion(data) {
    // TODO: avoid displaying console logs in production code on client side -jc
    console.log(currQuestion);
    $('#duckBubble').empty();
    $('#relatedLink').empty();
      // TODO: don't use switches. Also, aren't all three cases the same?
        switch (stackDecider) {
            case 1:
            $('#duckBubble').prepend(data.questions[currQuestion].text);
            $('#relatedLink').append('<a href="' + data.questions[currQuestion].relatedLinks[0] + '">Learn More!</a>');
            case 2:
            $('#duckBubble').prepend(data.questions[currQuestion].text);
            $('#relatedLink').append('<a href="' + data.questions[currQuestion].relatedLinks[0] + '">Learn More!</a>');
            case 3:
            $('#duckBubble').prepend(data.questions[currQuestion].text);
            $('#relatedLink').append('<a href="' + data.questions[currQuestion].relatedLinks[0] + '">Learn More!</a>');
          }
    if (currQuestion === data.questions[currQuestion].length - 1) {
        currQuestion = 0;
        $('#relatedLink').empty();
        $('#duckBubble').empty();
        // TODO: You don't need to append the copy with the html string, it is interpreted all as html -jc
        // TODO: Also, do you always want to redirect users to /html -jc
        $('#relatedLink').append('You problem doesnt seem to be in this language. Please click ' + '<a href = /html>here</a>' + 'to try another language');
    }
}

function getQuestion(data) {
  // TODO: avoid displaying console logs in production code on client side -jc
    console.log(currQuestion);
    $('#duckBubble').prepend(data.questions[currQuestion].text);
    $('#relatedLink').append('<a href="' + data.questions[currQuestion].relatedLinks[0] + '">Learn More!</a>');
}

function postQuestion(data) {
  // TODO: avoid displaying console logs in production code on client side -jc
  // TODO: this function does nothing for the user interface -jc
    console.log(data);
}
