import { StatusCodes } from 'http-status-codes';
import supertest from 'supertest';

import app from '../app.js';

describe('Sample Test Suite', () => {
  it('Test hello route', async () => {
    await supertest(app).get('/api/hello').expect(StatusCodes.OK);
  });
});
