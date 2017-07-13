var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var userModel = require('../userModel');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('localhost:27017/journal');
var wishlistSchema = new mongoose.Schema({
  date: Date,
  city: String,
  state: String,
  country: String,
  place: String,
  wish: String,
  picture: String
}); // end wishlistSchema
var wishlistModel = mongoose.model('wishlistModel', wishlistSchema);

router.get('/', function(req, res) {
  console.log('wishlistObject');
  wishlistModel.find().then(function(wish){
    res.send(wish);
  });
}); // end wish get call

router.post('/', function(req, res) {
  console.log('wishlistEntry url hit', req.body);
  var newWish = req.body;
  wishlistModel( newWish ).save().then(function(){
    res.sendStatus(201);
  }).catch(function(err){
    console.log('error', err);
  });
}); // end router.post for wishlistEntry

module.exports = router;
