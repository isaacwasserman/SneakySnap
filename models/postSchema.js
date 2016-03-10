// grab the things we need
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var postSchema = new Schema({
  username: { type: String, required: true },
  imageURL: { type: String, required: true, unique: true },
  taggedUsername: { type: String, required: true },
  created_at: Number
});

// the schema is useless so far
// we need to create a model using it
var Post = mongoose.model('Post', postSchema);

// make this available to our users in our Node applications
var Post = module.exports = mongoose.model('Post', postSchema);