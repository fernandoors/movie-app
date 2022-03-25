const constants = {
  env: process.env.NODE_ENV,
  port: parseInt(process.env.PORT || 3333),
  mongodb: {
    url: `mongodb://${process.env.MONGO_HOST}/movies`,
  },
};

module.exports = constants;
