const mongoose = require('mongoose');

let placeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  acceptCrediCard: {
    type: Boolean,
    default: false
  },
  converImage: String,
  avatarImage: String,
  openHour: Number,
  closeHour: Number
});

let Place = mongoose.model('Place', placeSchema);

module.exports = Place;
