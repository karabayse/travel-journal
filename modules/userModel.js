var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: String,
  password: String
}); // end userSchema

var userModel = mongoose.model('userModel', userSchema);

module.exports = userModel;
