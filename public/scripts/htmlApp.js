console.log("Sanity Check: JS is working!");

var currQuestion = 0;

$(document).ready(function() {
$.ajax({
    method: 'GET',
    url: '/api',
    type: 'json',
    success: getQuestion
  });

$('.form-userResponse').on('submit', function (event){
  event.preventDefault();
  currQuestion++;
  //getQuestion(data);
  $.ajax({
    method: 'GET',
    url: '/api',
    type: 'json',
    data: $(this).serialize(),
    success: postUserRes
  });
  //console.log(userResponse);
});

});
function postUserRes(data){
  console.log(data);
  console.log($('#userAnswer').val());
if($('#userAnswer').val() === 'yes'){
  console.log('it was yes');
  data.questions[currQuestion-1].answer = true;
  // qId = true;
  //questions[currQuestion-1] = data.questions[currQuestion-1].answer
  console.log(data.questions[currQuestion-1].answer );
  // data.questions[currQuestion-1].save();
}

}

function getQuestion(data){

  //  $('#duckBubble').prepend(data.questions[currQuestion].text);
}
