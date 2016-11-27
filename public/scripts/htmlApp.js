console.log("Sanity Check: JS is working!");

var currQuestion = 0;

$(document).ready(function() {

    $.ajax({
        method: 'GET',
        url: '/api',
        type: 'json',
        success: getQuestion
        // TODO: What happens when you have an error? -jc

    });


    $('#yesBtn').on('click', function(event) {
        event.preventDefault();
        currQuestion++;

    });

    $('#noBtn').on('click', function(event) {
        event.preventDefault();
        currQuestion++;
        // TODO: remove unused code from production codebase -jc
        //console.log('no');
        $.ajax({
            method: 'GET',
            // TODO: assign the url string to a variable and pass the variable instead -jc
            url: '/api/' + $('.userResponse').attr('data-id'),
            type: 'json',
            success: nextQuestion
            // TODO: What happens when you have an error? -jc

        });

    });

});

function nextQuestion(data) {
  // TODO: Avoid logging to the display of the client's browser in production codebase -jc
  console.log(currQuestion);
    //TODO: You empty and prepend or empty and append these two selectors to the point that yous should consider writing your own function to handle the id and the replacement text of each. -jc
    $('#duckBubble').empty();
    $('#duckBubble').prepend(data.questions[currQuestion].text);
    $('#relatedLink').empty();
    $('#relatedLink').append('<a href="'+data.questions[currQuestion].relatedLinks[0]+'">Learn More!</a>');
    if(currQuestion === data.questions[currQuestion].length-1){
      currQuestion = 0;
      $('#relatedLink').empty();
      $('#duckBubble').empty();
      // TODO: You don't need to append the copy with the html string, it is interpreted all as html -jc
      // TODO: Also, do you always want to redirect users to /html -jc
      $('#relatedLink').append('You problem doesnt seem to be in this language. Please click '+'<a href = /html>here</a>'+'to try another language');
    }
}

// TODO: Remove unused code from production codebase -jc
function postUserRes(data) {
    //TODO: end of app
}


function getQuestion(data) {
  // TODO: Avoid logging to the display of the client's browser in production codebase -jc
  // TODO: Indent this console log to adhere to convention -jc
console.log(currQuestion);
    $('#duckBubble').prepend(data.questions[currQuestion].text);
    $('#relatedLink').append('<a href="'+data.questions[currQuestion].relatedLinks[0]+'">Learn More!</a>');
}
