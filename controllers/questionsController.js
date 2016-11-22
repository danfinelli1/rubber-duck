/************
 * DATABASE *
 ************/
var mongoose = require('mongoose');

var mydb = require('../models');
var Question = require('../models/questions.js');
var express = require('express');


function index(req, res) {
    mydb.Question.find({}, function(err, succ) {
        res.json({
            questions: succ
        });
    });
}

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
    newQuestion.save();

    res.json({
        questions: newQuestion
    });
}

function show(req, res) {
    res.json();
}


// export public methods here
module.exports = {
    index: index,
    answer: answer,
    create: create,
    show: show
};
