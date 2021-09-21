const mongoose = require('mongoose');

const urlRegexp = /^(http(s)?:\/\/(www.)?)([a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+)#*$/gm;

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    match: [urlRegexp, 'Введите корректный URL'],
  },
  trailer: {
    type: String,
    required: true,
    match: [urlRegexp, 'Введите корректный URL'],
  },
  thumbnail: {
    type: String,
    required: true,
    match: [urlRegexp, 'Введите корректный URL'],
  },
  owner: {
    type: mongoose.ObjectId,
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
