const { describe, it, expect } = require('@jest/globals');
const { buildReq, buildRes } = require('../../../test/builders');
const moviesMocked = require('../../../test/moviesMocked');
const { create, index, show } = require('../controller');

// const movieController = require('../controller');

describe('Movie Controller', () => {
  it('should list all movies', async () => {
    const req = buildReq({});
    const res = buildRes();

    await index(req, res);

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(200);
  });
  it('should create a new movie', async () => {
    const req = buildReq({ body: moviesMocked[0] });
    const res = buildRes();

    await create(req, res);

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(201);
  });
  it('should show a movie', async () => {
    const movie = moviesMocked[0];
    const req = buildReq({ params: { id: movie['_id'] } });
    const res = buildRes();

    await show(req, res);

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(200);

    expect(res.json).toHaveBeenCalledWith(movie);
  });
});
