function movieService(repository) {
  async function getMovies() {
    return repository.findAll();
  }

  function getMovieByID(id) {
    return repository.findById(id);
  }

  function createMovie(payload) {
    return repository.save(payload);
  }

  return { getMovies, getMovieByID, createMovie };
}

module.exports = movieService;
