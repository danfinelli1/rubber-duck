var mongoose = require("mongoose");

var Schema = mongoose.Schema,
//TODO: remove unused code from production codebase -jc
  //ObjectId = Schema.ObjectId;
QuestionSchema = new Schema({

     language: String,
     text: String,
     answer: Boolean,
     relatedLinks: [String]
});


var Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;
