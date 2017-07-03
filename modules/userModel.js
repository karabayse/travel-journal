var mongoose = require('mongoose');

mongoose.connect('localhost:27017/journal');

var userSchema = new mongoose.Schema({
  username: String,
  password: String
}); // end userSchema

var userModel = mongoose.model('userModel', userSchema);

module.exports = userModel;
