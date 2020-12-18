const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/assignement11DB', {useNewUrlParser: true, useUnifiedTopology: true});
const userSchema = mongoose.Schema({
  name: {type:String, required:true},
  age: {type: Number, required:true},
  email: {type:String, unique:true, required:true},
  password: {type:String, required:true},
  sex: {type: String, required:true},
  imgURL: {type: String},
  updated_at: {type: Date, default: Date.now}
});

let userModel = mongoose.model('user', userSchema) //name of model is always single

module.exports = userModel;