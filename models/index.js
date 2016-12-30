var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/rubber-duck");

module.exports.Question = require("./questions.js");
module.exports.Language = require("./language.js");
