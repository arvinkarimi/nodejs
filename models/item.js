// models/Book.js

const mongoose = require('mongoose');
const ImageSchema = new mongoose.Schema({
    src: {
      type: String,
      
    }
  });
  const CategorySchema = new mongoose.Schema({
    name: {
      type: String,
      
    }
  });
const BookSchema = new mongoose.Schema({
    start: {
      type: Date,
      
    },
    end: {
      type: Date,
      
    }
  });
const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  images: [ImageSchema],
  price: {
    type: String,
    required: true
  },
  hourly:{
    type: Boolean,
    default: false
  },
  booked: [BookSchema],
  featured : {
    type:Boolean,
    default:false
  },
  categories: {
    type: String,
    required: true
  },
  location:{
    type:String,
    required: true
  },
  owner:{

      type:String,
    required: true
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);