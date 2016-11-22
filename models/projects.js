var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
     name: String,
     language: String
});

var Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;
