const mongoose = require('mongoose');
  
var ToyGallerySchema = new mongoose.Schema({
  name: String,
  price: Number,
  img: String,
  quantity: Number,
  cate: String,
  vid: String
})

var ToyGalleryModel = mongoose.model('ToyGallery', ToyGallerySchema, 'ToyGallery')

module.exports = ToyGalleryModel