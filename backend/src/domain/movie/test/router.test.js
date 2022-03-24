const { describe, it, expect, beforeEach } = require('@jest/globals');
const request = require('supertest');

const httpServer = require('../../../config/http-server');
const moviesMocked = require('../../../test/moviesMocked');

const movieRouter = require('../router');

describe('Movie Router', () => {
  beforeEach(() => {
    movieRouter(httpServer);
  });
  it('should list movies on /movie endpoint', async () => {
    const response = await request(httpServer).get('/movie/');
    expect(response.statusCode).toBe(200);
  });
  it('should create a movie on /movie endpoint', async () => {
    const response = await request(httpServer)
      .post('/movie/')
      .send(moviesMocked[0]);
    expect(response.statusCode).toBe(201);
  });

  it('should list a movie on /movie/:id endpoint', async () => {
    const movie = moviesMocked[0];
    await request(httpServer).post('/movie/').send(movie);
    
    const response = await request(httpServer).get('/movie/' + movie['_id']);
    
    expect(response.statusCode).toBe(200);
  });
});
