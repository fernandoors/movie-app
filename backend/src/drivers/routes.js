const movieRouter = require('../domain/movie/router');

const domainRoutes = [ movieRouter ];

const routes = server => domainRoutes.forEach(route => route(server));

module.exports = routes;
