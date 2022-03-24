const db = require('../../config/db');
const movieModel = require('./model');
const movieRepository = require('./repository');
const movieService = require('./service');

function movieController() {
  const repository = movieRepository(db(movieModel));
  const service = movieService(repository);

  async function index(req, res) {
    return res.status(200).json(await service.getMovies());
  }

  async function create(req, res) {
    const { body } = req;
    return res.status(201).json(await service.createMovie(body));
  }

  async function show(req, res) {
    const { id } = req.params;
    return res.status(200).json(await service.getMovieByID(id));
  }

  return { index, create, show };
}

module.exports = movieController();
