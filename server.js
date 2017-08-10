// requires
var express = require('express');
var app = express();
var index = require('./modules/routes/index');
var journalEntry = require('./modules/routes/journalEntry');
var register = require('./modules/routes/register');
var wishlist = require('./modules/routes/wishlist');
var mongoose = require('mongoose');


var databaseURI = '';
// process.env.MONGODB_URI will only be defined if you
// are running on Heroku
if(process.env.MONGODB_URI != undefined) {
    // use the string value of the environment variable
    databaseURI = process.env.MONGODB_URI;
} else {
    // use the local database server
    databaseURI = 'mongodb://localhost:27017/journal';
}

mongoose.connect('mongodb://heroku_8339j86v:rqv595v25p7vsn05ersj7r58du@ds021694.mlab.com:21694/heroku_8339j86v');

// mongoose.connect('localhost:27017/journal');

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
