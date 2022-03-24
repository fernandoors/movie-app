const movieController = require('./controller');

const routeBase = '/movie';

function movieRouter(server) {
  server.get(routeBase + '/', movieController.index);
  server.get(routeBase + '/:id', movieController.show);
  server.post(routeBase + '/', movieController.create);
}

module.exports = movieRouter;
