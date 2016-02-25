var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var stormpath = require('express-stormpath');

router.post('/', function(req, res){
  
  var fullName = req.body.userName;
  var firstName = fullName.substring(0,fullName.indexOf(" "));
  var lastName = fullName.substring(fullName.indexOf(" ") + 1);
  
  var account = {
    givenName: firstName,
    surname: lastName,
    email: req.body.userEmail,
    password: req.body.password
  };
  
  res.json("Account Successfully Created");
});

module.exports = router;