import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';
import request from 'supertest';
import connectDataBase from '../../config/components/connectDB.js';
import MOCK_USERS from '../../mocks/users.js';

import app from '../../app.js';

describe('User endpoint test suite', () => {
  beforeAll(async () => {
    try {
      connectDataBase();
      await mongoose.model('User').create(MOCK_USERS[0]);
    } catch (err) {
      console.log(err);
    }
  });

  it('GET all users', async () => {
    await request(app).get('/api/users').expect(StatusCodes.OK);
  });

  it('GET selected user', async () => {
    const user = await mongoose.model('User').findOne({ username: MOCK_USERS[0].username });
    const id = user._id;
    await request(app).get(`/api/users/${id}`).expect(StatusCodes.OK);
  });

  it('GET non existing user fails', async () => {
    const id = '507f191e810c19729de860ea';
    await request(app).get(`/api/users/${id}`).expect(StatusCodes.NOT_FOUND);
  });

  it('DELETE user', async () => {
    const user = await mongoose.model('User').findOne({ username: MOCK_USERS[0].username });
    const id = user._id;
    await request(app).delete(`/api/users/${id}`).expect(StatusCodes.OK);
  });

  it('DELETE non existing user fails', async () => {
    const id = '507f191e810c19729de860ea';
    await request(app).delete(`/api/users/${id}`).expect(StatusCodes.NOT_FOUND);
  });

  afterAll(async () => {
    try {
      await mongoose.model('User').findOne({ username: MOCK_USERS[0].username }).deleteOne();
      await mongoose.connection.close();
    } catch (err) {
      console.log(err);
    }
  });
});
