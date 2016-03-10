var express = require('express');
var router = express.Router();
var request = require('request');

var postModel = require('../models/postSchema');

router.get('/', function(req, res){
  
  var username = "i_wasserman";
  var picURL = "https://static.pexels.com/photos/9752/taking-photo-hiking-sport-adventure.jpg";
  var taggedUsername = "aharonw";
  
  var postData = new Post({
    username: username,
    imageURL: picURL,
    taggedUsername: taggedUsername,
    created_at: new Date().getTime()
  });
  
  postData.save(function(err) {
    if (err) throw err;

    console.log('Post saved successfully!');
  });
  
  res.json("Posted!");
});

module.exports = router;