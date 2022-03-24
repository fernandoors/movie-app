/* istanbul ignore file */
const mongoose = require('mongoose');
const moviesMocked = require('../../test/moviesMocked');
const constants = require('../constants');

async function mongoConnection() {
  try {
    const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    await mongoose.connect(constants.mongodb.url, mongoOptions);
    const initialData = await mongoose.model('Movie');
    await initialData.remove();
    await initialData.insertMany(moviesMocked);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

module.exports = mongoConnection;
