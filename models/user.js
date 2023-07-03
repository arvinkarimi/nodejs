const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
      type: String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
    },
    image:{
        type:String,
        default:"/images/6.jpg",
        required:true
    }
  },{timestamps: true});


  module.exports = User = mongoose.model('user', UserSchema);