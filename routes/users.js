var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//...................................................
      //register
//----------------------------------------------------
router.get('/register', function(req, res, next) {
  res.render('register'),{
    'title': 'Register'
  }
});
router.post('/register', function(res, req, next){
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var email = req.body.email;
  var username = req.body.username;
  var password =req.body.password;
  var password2 = req.body.password2;


// Form Validation
  req.checkBody('firstname', 'Name field is required').notEmpty();
  req.checkBody('lastname', 'Name field is required').notEmpty();
  req.checkBody('email', 'Name field is required').notEmpty();
  req.checkBody('email', 'Name field is required').isEmail();
  req.checkBody('username', 'username field is required').notEmpty();
  req.checkBody('password', 'password field is required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

  //Checking for errors
  var errors = req.validationErrors();
  if(errors){
    res.render('register',{
      errors: errors,
      firstname : firstname,
      lastname : lastname,
      email : email,
      username : username,
      password : password,
      password2 : password2
    });
  }else{
    var newUser = new User ({
      firstname : firstname,
      lastname : lastname,
      username: username,
      password: password,
    });
    //Create users
    User.createUser(newUser, function(err, user){
      if(err) throw err;
      console.log(user);

    });
    // success Message
    req.flash('success', 'You are now registered');
    res.location('/');
    res.redirect('/');
  }


});
//...................................................
      //login
//----------------------------------------------------
router.get('/login', function(req, res, next) {
  res.render('login'),{
    'title': 'login'
  }
});

router.get('/search', function(req, res, next) {
  res.render('search')

});

router.get('/result', function(req, res, next) {
  res.render('results')

});

module.exports = router;
