require('dotenv').config();
require('../config/db');

const constants = require('../config/constants');
const httpServer = require('../config/http-server');
const routes  = require('./routes');

routes(httpServer);

httpServer.listen(constants.port, () => {
  console.log(`SERVER IS RUNNING ${constants.port}...`);
});
