import supertest from 'supertest';

import app from '../../app.js';

describe('Test getting user profile by Id', () => {
  it('Get error response if ID has a wrong format', async () => {
    await supertest(app).get(`/api/users/1234`).expect('Something went wrong.');
  });
});
