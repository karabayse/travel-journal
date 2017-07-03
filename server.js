// requires
var express = require('express');
var app = express();
var index = require('./modules/routes/index');
var journalEntry = require('./modules/routes/journalEntry');
var register = require('./modules/routes/register');

// uses
app.use(express.static('public'));
app.use('/', index);
app.use('/journalEntry', journalEntry);
app.use('/register', register);

// globals
var port = process.env.PORT || 3505;

// spin up server
app.listen(port, function(){
  console.log('server up on:', port);
}); // end spin up server
