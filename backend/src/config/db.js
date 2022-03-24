/* istanbul ignore file */
const inMemoryDb = require('./inMemory/inMemoryDb');
const mongoConnection = require('./mongoose/connection');
const mongoInterface = require('./mongoose/interface');

const isTest = process.env.NODE_ENV === 'test';

if (!isTest) {
  mongoConnection();
}

module.exports = isTest ? inMemoryDb : mongoInterface;
