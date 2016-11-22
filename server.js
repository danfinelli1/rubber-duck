// server.js

// require express framework and additional modules
var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  session = require('express-session'),
  hbs = require('hbs'),
  Question = require('./models/questions.js')
  mydb = require('./models')

// middleware
app.use(express.static('public'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({extended: true}));

hbs.localsAsTemplateData(app);

var controllers = require('./controllers');


/**********
 * ROUTES *
 **********/


app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
app.get('/form', function addQPage(req, res){
  res.render('qForm')
});
app.get('/api', controllers.questions.index);
app.get('/html', function quesitonPage (req, res){
  mydb.Question.findOne({}, function(err, quest){

    res.render('html', {Question: quest});
  });
});
app.get('/api', controllers.questions.answer);
app.post('/api', controllers.questions.create);



/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
