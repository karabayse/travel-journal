var express = require ('express');
var router = express.Router();
var bodyParser = require('body-parser');
var userModel = require('../userModel');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/journal');
var journalSchema = new mongoose.Schema({

}); // end journalSchema
var journalModel = mongoose.model('journalModel', journalSchema);



module.exports = router;
