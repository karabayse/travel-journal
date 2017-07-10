var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var journalModel = require('../journalEntry');
var mongoose = require('mongoose');

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
