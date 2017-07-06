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

router.post('/entry', function(req, res) {
  console.log('journalEntry url hit', req.body);
  var newEntry = req.body;
  journalModel( newEntry ).save();
  res.sendStatus(201);
}); // end router.post for journalEntry

module.exports = router;
