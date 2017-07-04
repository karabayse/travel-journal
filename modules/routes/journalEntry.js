var express = require ('express');
var router = express.Router();
var bodyParser = require('body-parser');
var userModel = require('../userModel');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/journal');
var journalSchema = new mongoose.Schema({
  date: Number,
  city: String,
  place: String,
  entry: String,
  latitude: Number,
  longitude: Number,
  photo: String
}); // end journalSchema
var journalModel = mongoose.model('journalModel', journalSchema);

router.get('/', function(req, res) {
  console.log('journalObject');
});

module.exports = router;
