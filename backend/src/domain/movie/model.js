const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: String,
  release_date: String,
  poster_image: String,
  user_rating: Number,
  plot: String,
});

module.exports = mongoose.model('Movie', MovieSchema);
