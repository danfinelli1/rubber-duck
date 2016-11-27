//TODO: If this file is not to be used for production remove completely or keep off master branch -jc

/************
 * DATABASE *
 ************/
 //var db = require('./models');
 var users = [];


function index(req, res){
  res.json({users: users});
}

function create(req, res){
  var newUser = new User;
  newUser = {
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  };

  console.log(newUser);
  users.push(newUser);
  res.json({users: users});
}

function show(req, res){
  res.json();
}

function destroy(req, res){
  res.json();
}

function update(req, res){

}

 // export public methods here
 module.exports = {
   index: index,
   create: create,
   show: show,
   destroy: destroy,
   update: update
 };
