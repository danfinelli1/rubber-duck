// server.js

// require express framework and additional modules
// TODO: Why did you include ejs in your package.json yet never use it on your server.js? -jc
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    session = require('express-session'),
    hbs = require('hbs'),
    Question = require('./models/questions.js'),
    mydb = require('./models');

// middleware
app.use(express.static('public'));

app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({

    extended: true

}));

hbs.localsAsTemplateData(app);

var controllers = require('./controllers');


/**********
 * ROUTES *
 **********/


app.get('/', function homepage(req, res) {

    res.sendFile(__dirname + '/views/index.html');

});

app.get('/form', function addQPage(req, res) {

    res.render('qForm')

});

app.get('/api', controllers.questions.index);

app.get('/html', function quesitonPage(req, res) {
    // TODO: You are calling findOne on your Question DB and passing in an empty search {}. What is the expected DB return value? -jc
    mydb.Question.findOne({}, function(err, quest) {
      // TODO: What if there is an error? -jc

        // TODO: Are you supposed to be sending a json object or an array of json objects as the second argument? -jc
        res.render('html', [{
          // TODO: this shouldn't be capitalized -jc
            Question: quest

        }]);

    });

});

// TODO: The RESTful routing convention states that this route should return a single 'api' object from the DB of apis. Should you use /api/Question/:id instad? -jc
app.get('/api/:_id', function(req, res) {

    mydb.Question.findOne({

        _id: req.params._id

    }, function(err, data) {
      // TODO: What if there is an error? -jc
        res.json(data);

    });

});

//TODO: Did you mean to call the function questionPage? -jc
app.get('/css', function quesitonPage(req, res) {
    // TODO: You are calling findOne on your Question DB and passing in an empty search {}. What is the expected DB return value? -jc
    mydb.Question.findOne({}, function(err, quest) {

        // TODO: Are you supposed to be sending a json object or an array of json objects as the second argument? -jc
        res.render('html', [{
          // TODO: this shouldn't be capitalized -jc
            Question: quest

        }]);

    });

});

app.get('/js', function quesitonPage(req, res) {

    mydb.Question.findOne({}, function(err, quest) {

        res.render('html', [{

            Question: quest

        }]);

    });

});

app.post('/api', controllers.questions.create);



/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function() {
    console.log('Express server is running on http://localhost:3000/');
});
