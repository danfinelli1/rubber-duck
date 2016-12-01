var mongoose = require("mongoose");
var QuestionSchema = require('./questions.js');

var Schema = mongoose.Schema,
LanguageSchema = new Schema({
     name: String,
     questions: [QuestionSchema.schema]
});


var Language = mongoose.model('Language', LanguageSchema);
module.exports = Language;
