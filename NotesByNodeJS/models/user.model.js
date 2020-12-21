const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  fname: {type:String, required:true},
  lname: {type:String, required:true},
  email: {type:String, unique:true, required:true},
  password: {type:String, required:true},
  updated_at: {type: Date, default: Date.now}
});

let userModel = mongoose.model('user', userSchema) //name of model is always single

module.exports = userModel;