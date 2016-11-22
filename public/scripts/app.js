console.log("Sanity Check: JS is working!");

var stackDecider = 0;

$(document).ready(function() {


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

    $('#jQueryBtn').on('click', function(event) {
        event.preventDefault();
        stackDecider = 4;
        runQuestions(stackDecider);
    });
    $('#expressBtn').on('click', function(event) {
        event.preventDefault();
        stackDecider = 5;
        runQuestions(stackDecider);
    });
    $('#rubyBtn').on('click', function(event) {
        event.preventDefault();
        stackDecider = 6;
        runQuestions(stackDecider);
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

});

function runQuestions(num) {
    switch (num) {
        case 1:
          window.location.href = "/html";
            break;
        case 2:
          window.location.href = "/html"
            break;

        default:

    }
}
function postQuestion(data){
console.log(data);
}
