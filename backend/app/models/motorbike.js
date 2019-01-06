var mongoose = require('mongoose');

var motorbikeSchema= new mongoose.Schema({
  name: {type: String, required: true},
  year: {type: Number},
},);

mongoose.model('motorbike', motorbikeSchema);