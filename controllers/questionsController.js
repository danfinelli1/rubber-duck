/************
 * DATABASE *
 ************/
var mongoose = require('mongoose');

var mydb = require('../models');
// TODO: Instead of requiring a file that is already called via mydb, simply assign a variable Question like so:
// var Question = mydb.Question;

var Question = require('../models/questions.js');
// TODO: You don't need to require express for this file -jc
var express = require('express');


function index(req, res) {
    mydb.Question.find({}, function(err, succ) {
      // TODO: what happens if there is an error? -jc
        res.json({
            questions: succ
        });
    });
}

// TODO: Remove unused code from production codebase -jc
//failed attempt
function answer(req, res) {

    mydb.Question.findOneAndUpdate({
        _id: req.params._id
    }, {
        $set: {
            answer: true
        }
    });
    mydb.Question.save();
    res.json({
        Question: Question
    });
}


function create(req, res) {
    var newQuestion = new Question({
        _id: mongoose.Types.ObjectId(),
        language: req.body.language,
        text: req.body.text,
        answer: req.body.answer,
        relatedLinks: req.body.relatedLinks
    });
    // TODO Move your res.json into a newQuestion.save() callback. This will give you an actual database entry rather than whatever data you sent to the database to be entered.
    newQuestion.save();

    res.json({
        questions: newQuestion
    });
}

// TODO: Remove unused code from production codebase -jc
function show(req, res) {
    res.json();
}

// TODO: Remove unused code from production codebase -jc
// export public methods here
module.exports = {
    index: index,
    answer: answer,
    create: create,
    show: show
};
// TODO: Remove unused code from production codebase -jc
//db.connectionClose();//WORST bug
