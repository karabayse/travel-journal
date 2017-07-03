var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var userModel = require('../userModel');
var bcrypt = require('bcrypt');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.post('/', function(req, res) {
  console.log('in register post:', req.body);
  // use bcrypt to generate a salt
  bcrypt.genSalt(12, function(err, salt) {
    if (err) {
      console.log('salt err:', err);
      res.sendStatus(400);
    } else {
      console.log('salt:', salt);
      bcrypt.hash(req.body.password, salt, function(err, hash){
        if (err) {
          console.log('hash err:', err);
          res.sendStatus(400);
        } else {
          console.log('hash:', hash);
          // only save hashed password
          var newUser = {
            username: req.body.username,
            password: hash
          }; // end newUser
          console.log('saving user:', newUser);
          // save newUser to DB
          // exporting model from userModel
          userModel(newUser).save();
          res.sendStatus(201);
        }
      });
    }
  });
}); // end router.post

  router.get('/', function(req, res) {
    console.log('in register get', req.body);
    userModel.find().then(function(results) {
      res.send(results);
    });
  }); // end router.get

module.exports = router;
