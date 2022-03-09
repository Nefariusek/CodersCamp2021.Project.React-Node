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

  it('PATCH user', async () => {
    const userData = {
      email: 'TestRouteUser2@gmail.com',
    };
    const user = await mongoose.model('User').findOne({ username: MOCK_USERS[0].username });
    const id = user._id;

    await request(app).patch(`/api/users/${id}`).send(userData).expect(StatusCodes.OK);
  });

  it('PATCH with wrong data fails', async () => {
    const userData = {
      email: 'TestRouteUser3@gmail',
    };

    const user = await mongoose.model('User').findOne({ username: MOCK_USERS[0].username });
    const id = user._id;

    await request(app).patch(`/api/users/${id}`).send(userData).expect(StatusCodes.BAD_REQUEST);
  });

  it('PATCH non existing user fails', async () => {
    const userData = {
      username: `OtherUsername`,
      email: 'OtherUsername@gmail.com',
      password: '5!E@c#r$e%12',
    };
    const id = '507f191e810c19729de860ea';

    await request(app).patch(`/api/users/${id}`).send(userData).expect(StatusCodes.NOT_FOUND);
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
