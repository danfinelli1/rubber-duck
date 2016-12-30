// server.js

// require express framework and additional modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    hbs = require('hbs'),
    mydb = require('./models'),
    controllers = require('./controllers');

// middleware
app.use(express.static('public'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({
    extended: true
}));

hbs.localsAsTemplateData(app);



/**********
 * ROUTES *
 **********/


app.get('/', function homepage(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/html', function(req, res){
  res.render('language/html');
})

app.get('/js', function(req, res){
  res.render('language/js');
})

app.get('/css', function(req, res){
  res.render('language/css');
})

app.get('/form', function addQPage(req, res) {
    res.render('qForm')
});

app.get('/api', controllers.questions.index);

// app.get('/', function quesitonPage(req, res) {
//     mydb.Question.findOne({}, function(err, quest) {
//         res.render('html', [{
//             Question: quest
//         }]);
//     });
// });

app.get('/api/:_id', function(req, res) {
    mydb.Question.findOne({
        _id: req.params._id
    }, function(err, data) {
        res.json(data);
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
