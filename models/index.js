var mongoose = require("mongoose");
// TODO: Give your mongoDB a name (i.e. /rubber-duck)
mongoose.connect("mongodb://localhost");

module.exports.Question = require("./questions.js");
