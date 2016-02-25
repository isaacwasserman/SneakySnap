var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res){
  res.json("It's good");
});

module.exports = router;