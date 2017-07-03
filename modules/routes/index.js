var express = require('express');
var path = require('path');
var router = express.Router();
var bodyParser = require('body-parser');
var userModel = require('../userModel');
var bcrypt = require('bcrypt');

// uses
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get('/', function(req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/views/index.html'));
}); // end router.get

router.post('/', function(req, res) {
console.log('base post hit', req.body);
// seeing if the username exits
userModel.findOne({
    username: req.body.username
  }, function(err, userModel) {
    if (err) {
      console.log('find userModel err', err);
      res.sendStatus(400);
    } else {
      // compare passwords
      if (userModel !== undefined) {
        console.log('comparing:', req.body.password, userModel.password);
        bcrypt.compare(req.body.password, userModel.password, function(err, isMatch){
        if (err) {
          console.log('compare err', err);
          res.sendStatus(400);
        } else {
          console.log('found you');
          if (isMatch) {
            res.send('Match!');
          } else {
            res.send('No match');
          }
        }
      });
    } else {
      console.log('no user found');
      res.sendStatus(400);
      }
    }
  }); // end findOne function
}); // end post

module.exports = router;
