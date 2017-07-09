var express = require ('express');
var router = express.Router();
var bodyParser = require('body-parser');
var userModel = require('../userModel');
var mongoose = require('mongoose');
var journalEntry = require('/journalEntry');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get('/', function(req, res) {
  console.log('router.get location');
  journalModel.find().then(function(location){
    res.send(location);
  });
}); // end router.get for location

router.post('/', function(req, res) {
  console.log('router.post location');
  var newLocation = req.body;
  journalModel( newLocation ).save().then(function(){
    res.sendStatus(201);
  }).catch(function(err){
    console.log('error');
  });
}); // end router.post

module.exports = router;
