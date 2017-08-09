// requires
var express = require('express');
var app = express();
var index = require('./modules/routes/index');
var journalEntry = require('./modules/routes/journalEntry');
var register = require('./modules/routes/register');
var wishlist = require('./modules/routes/wishlist');

// uses
app.use(express.static('public'));
app.use('/', index);
app.use('/journalEntry', journalEntry);
app.use('/register', register);
app.use('/wishlist', wishlist);

// globals
var port = process.env.PORT || 3505;

// spin up server
app.listen(port, function(){
  console.log('server up on:', port);
}); // end spin up server
