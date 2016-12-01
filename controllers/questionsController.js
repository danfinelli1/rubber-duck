/************
 * DATABASE *
 ************/
var mongoose = require('mongoose');
var mydb = require('../models');

// var Question = mydb.Question;


function index(req, res) {
    mydb.Language.find({}, function(err, succ) {
        res.json( succ );
    });
}

function create(req, res) {
  var newQuestion = new mydb.Question({
    text: req.body.text,
    relatedLinks: req.body.relatedLinks
  });
  newQuestion.save();

    if (mydb.Language.findOne({name: req.body.language}, function(err, lang){
      if(lang!=null){
        lang.questions.push(newQuestion);
        lang.save();
      }
      else{
        var newLanguage = new mydb.Language({
          name: req.body.language,
          questions: []
        });
        newLanguage.questions.push(newQuestion);
        newLanguage.save();
      }
      res.json(newLanguage);
    }));
  }

function show(req, res) {
    res.json(res);
}


// export public methods here
module.exports = {
    index: index,
    create: create,
    show: show
};
