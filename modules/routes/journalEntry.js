var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var userModel = require('../userModel');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var journalSchema = new mongoose.Schema({
  date: Date,
  city: String,
  state: String,
  country: String,
  place: String,
  entry: String,
  latitude: Number,
  longitude: Number,
  picture: String
}); // end journalSchema
var journalModel = mongoose.model('journalModel', journalSchema);

router.get('/', function(req, res) {
  console.log('journalObject');
  journalModel.find().then(function(entry){
    res.send(entry);
  });
}); // end entry get call

router.post('/', function(req, res) {
  console.log('journalEntry url hit', req.body);
  var newEntry = req.body;
  journalModel( newEntry ).save().then(function(){
    res.sendStatus(201);
  }).catch(function(err){
    console.log('error', err);
  });
}); // end router.post for journalEntry

router.delete('/:id', function(req, res) {
  var id = req.params.id;
  console.log(id);
  journalModel.remove( {_id: id }).then(function(err) {
    if(!err) {
      res.send('No error!');
    } else {
      res.send('error');
    }
  });
}); // end router.delete

module.exports = router;
