const mongoose = require('mongoose');
  
var ToyGallerySchema = new mongoose.Schema({
  name: String,
  price: Number,
  img: String,
})

var ToyGalleryModel = mongoose.model('ToyGallery', ToyGallerySchema, 'ToyGallery')

module.exports = ToyGalleryModel