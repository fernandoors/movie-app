const { describe, it, expect, beforeEach } = require('@jest/globals');
const movieRepository = require('../repository');

const generateMovie = require('../../../test/generateMovie');
const inMemoryDb = require('../../../config/db')();

describe('Movie Repository', () => {
  beforeEach(() => {
    inMemoryDb.clear();
  });
  it('should list movies saved', () => {
    const movie = generateMovie(0);
    const repository = movieRepository(inMemoryDb);

    expect(repository.findAll()).toHaveLength(0);

    repository.save(movie);
    expect(repository.findAll()).toHaveLength(1);

    repository.save(movie);
    expect(repository.findAll()).toHaveLength(2);
  });

  it('should show a movie by ID saved', () => {
    const movie = generateMovie(0);
    const repository = movieRepository(inMemoryDb);
    repository.save(movie);

    const movieSaved = repository.save(movie);

    const movieFound = repository.findById(movieSaved['_id']);

    expect(movieFound.title).toBe(movie.title);
    expect(movieFound.plot).toBe(movie.plot);
  });

  it('should create a movie', () => {
    const movie = generateMovie(0);

    const repository = movieRepository(inMemoryDb);

    const movieSaved = repository.save(movie);

    expect(movieSaved.title).toBe(movie.title);
    expect(movieSaved).toHaveProperty('_id');
    expect(movieSaved.plot).toBe(movie.plot);
  });

  it('should remove a movie', () => {
    const movie = generateMovie(0);

    const repository = movieRepository(inMemoryDb);

    const movieSaved = repository.save(movie);
    expect(repository.findAll()).toHaveLength(1);

    expect(repository.remove(movieSaved)).toBeUndefined();
    expect(repository.findAll()).toHaveLength(0);
  });
});
