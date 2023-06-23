const mongoose = require('mongoose');
  
var UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String,
})

var UserModel = mongoose.model('Users', UserSchema, 'Users')

module.exports = UserModel