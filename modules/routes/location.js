var express = require ('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var journalEntry = require('/journalEntry');


router.get('/', function(req, res) {
  console.log('location');
  journalModel.find().then(function(location){
    res.send(location);
  });
}); // end router.get for location

router.post('/', function(req, res) {
  console.log('post location');
  var newLocation = req.body;
  journalModel( newLocation ).save().then(function(){
    res.sendStatus(201);
  }).catch(function(err){
    console.log('error');
  });
}); // end router.post

module.exports = router;
