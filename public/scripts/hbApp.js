console.log("Sanity Check: JS is working!");


$(document).ready(function() {


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
function postQuestion(data){
console.log(data);
}
