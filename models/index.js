var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost");

module.exports.Question = require("./questions.js");
