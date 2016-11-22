$(document).ready(function() {
  var source=$('#solution-p-template').html();
  console.log('template script source', source);
  var template=handlebars.compile(source);
  var solutionHTML=template({json: key});
  console.log('generated HTML string:', solutionHTML);
  $("#solutionText").append(solutionHTML);
}
