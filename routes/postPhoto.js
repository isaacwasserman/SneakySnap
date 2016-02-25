var express = require('express');
var router = express.Router();
var request = require('request');

var postModel = require('../models/postSchema');

router.get('/', function(req, res){
  
  var username = "i_wasserman";
  var picURL = "http://interfacelift.com/wallpaper/D14dddf0/01819_birdonabranch_1920x1080.jpg";
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
    console.log(post);
  });
  
  res.json("Posted!");
});

module.exports = router;