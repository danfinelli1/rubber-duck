// TODO: Why is a js file in the view folder? Move this to the public/scripts folder -jc
$(document).ready(function() {
  var source=$('#solution-p-template').html();
  // TODO: avoid displaying console logs in production code on client side -jc
  console.log('template script source', source);
  var template=handlebars.compile(source);
  var solutionHTML=template({json: key});
  // TODO: avoid displaying console logs in production code on client side -jc
  console.log('generated HTML string:', solutionHTML);
  $("#solutionText").append(solutionHTML);
}
