/************
 * DATABASE *
 ************/
var mongoose = require('mongoose');

 var mydb = require('../models');
 var Question = require('../models/questions.js');
var express = require('express');


function index(req, res) {
  mydb.Question.find({}, function(err, succ){
    res.json({
      questions: succ
    });
  });
}

function answer(req, res) {
    if (req.params.userAnswer === 'yes') {
          console.log('it got it');
    }


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

    // questions.push(newQuestion);
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
//db.connectionClose();
