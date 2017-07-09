var express = require ('express');
var router = express.Router();
var bodyParser = require('body-parser');
var userModel = require('../userModel');
var mongoose = require('mongoose');
var journalEntry = require('/journalEntry');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get('/', function(req, res) {
  console.log('position');
  journalModel.find().then(function(position){
    res.send(position);
  });
}); // end router.get for position

router.post('/', function(req, res) {
  console.log('post position');
  var newPosition = req.body;
  journalModel( newPosition ).save().then(function(){
    res.sendStatus(201);
  }).catch(function(err){
    console.log('error');
  });
}); // end router.position

module.exports = router;
