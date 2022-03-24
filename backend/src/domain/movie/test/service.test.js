const { describe, it, expect, beforeEach } = require('@jest/globals');
const db = require('../../../config/db');
const moviesMocked = require('../../../test/moviesMocked');
const movieRepository = require('../repository');

const movieService = require('../service');

describe('Movie Service', () => {
  let repository;
  beforeEach(() => {
    repository = movieRepository(db(moviesMocked));
  });
  it('should list movies saved', async () => {
    const service = movieService(repository);
    expect(await service.getMovies()).toHaveLength(10);
  });
  it('should create a movie saved', async () => {
    const service = movieService(repository);
    const movie = moviesMocked[0];

    if (movie['_id']) {
      delete movie._id;
    }
    const movieSaved = await service.createMovie(movie);

    expect(movieSaved.title).toEqual(movie.title);
    expect(movieSaved).toHaveProperty('_id');
  });
  it('should list an movie by id saved', async () => {
    const service = movieService(repository);
    const initalData = moviesMocked[0];
    const savedMovie = await service.getMovieByID(initalData['_id']);
    expect(savedMovie).toEqual(initalData);
  });
});
