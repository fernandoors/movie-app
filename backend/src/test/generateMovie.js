const moviesMocked = require('./moviesMocked');

function generateMovie(index) {
  return moviesMocked[index];
}

module.exports = generateMovie;
