import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';
import request from 'supertest';
import getConnectionUrl from '../../config/components/urlBuilder.js';
import MOCK_USERS from '../../mocks/users.js';

import app from '../../app.js';

describe('User endpoint test suite', () => {
  beforeAll(async () => {
    try {
      const url = getConnectionUrl();
      await mongoose.connect(url, { useNewUrlParser: true });
      await mongoose.model('User').create(MOCK_USERS[0]);
    } catch (err) {
      console.log(err);
    }
  });

  it('PATCH user', async () => {
    const userData = {
      username: 'TestRouteUser2',
      email: 'TestRouteUser2@gmail.com',
      password: '5!E@c#r$e%12',
    };
    const user = await mongoose.model('User').findOne({ username: MOCK_USERS[0].username });
    const id = user._id;

    await request(app).patch(`/api/users/${id}`).send(userData).expect(StatusCodes.OK);
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
      const patchedUser = await mongoose.model('User').findOne({ username: 'TestRouteUser2' }).deleteOne();
      await mongoose.connection.close();
    } catch (err) {
      console.log(err);
    }
  });
});
