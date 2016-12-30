var mongoose = require("mongoose");

var Schema = mongoose.Schema,
QuestionSchema = new Schema({
       text: String,
       relatedLinks: String

});


var Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;
