/************
 * DATABASE *
 ************/
var mongoose = require('mongoose');
var mydb = require('../models');

function index(req, res) {
    mydb.Language.find({},function(err, succ) {
        res.json( { succ } );
    });
}

function admin(req, res) {
    mydb.Language.find({},function(err, succ) {
        res.render('admin', { succ });
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
        lang.questions.push(newQuestion._id);
        lang.save();
      }
      else{
        var newLanguage = new mydb.Language({
          name: req.body.language,
          questions: []
        });
        newLanguage.questions.push(newQuestion._id);
        newLanguage.save();
      }
      res.json(newLanguage);
    }));
  }

function show(req, res) {
  res.json(res);
}

function edit(req, res){
  mydb.Question.findOne({
    _id: req.params._id
  }, function(err, question){
    question.text = req.body.text;
    question.relatedLinks = req.body.relatedLinks;
    question.save();
    });
  }

function destroy(req, res){
  mydb.Question.findByIdAndRemove(req.params._id, function(err, question){
    var response = {
      message: "Question Deleted",
      id: question._id
      };
    res.send(response);
    });
}

// export public methods here
module.exports = {
    index: index,
    admin: admin,
    create: create,
    show: show,
    edit: edit,
    destroy: destroy
};
