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

  it('POST user creates a user with valid data', function (done) {
    const userData = {
      username: 'TestRouteUser',
      email: 'TestRouteUser@gmail.com',
      password: '5!E@c#r$e%1',
    };
    request(app)
      .post('/api/users')
      .send(userData)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(StatusCodes.CREATED)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });

  it("POST user doesn't create user when user already exists", function (done) {
    const userData = {
      username: 'TestRouteUser',
      email: 'TestRouteUser2@gmail.com',
      password: '5!E@c#r$e%1',
    };
    request(app)
      .post('/api/users')
      .send(userData)
      .expect(StatusCodes.CONFLICT)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
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

  it('DELETE user removes not only the user, but also its profile and settings', async () => {
    const user = await mongoose.model('User').findOne({ username: 'TestRouteUser' });
    const id = user._id;
    await request(app).delete(`/api/users/${id}`).expect(StatusCodes.OK);
    const userProfile = await mongoose.model('Profile').findOne({ _id: user.profileRef });
    const userSettings = await mongoose.model('Settings').findOne({ _id: user.settingsRef });
    expect(userProfile).toBeNull();
    expect(userSettings).toBeNull();
  });

  it('DELETE non existing user fails', async () => {
    const id = '507f191e810c19729de860ea';
    await request(app).delete(`/api/users/${id}`).expect(StatusCodes.NOT_FOUND);
  });

  afterAll(async () => {
    try {
      const user = await mongoose.model('User').findOne({ username: 'TestRouteUser' });
      if (user) {
        await mongoose.model('Profile').find({ _id: user.profileRef }).deleteOne();
        await mongoose.model('Settings').find({ _id: user.settingsRef }).deleteOne();
        await user.deleteOne();
      }
      await mongoose.model('User').findOne({ username: MOCK_USERS[0].username }).deleteOne();

      await mongoose.connection.close();
    } catch (err) {
      console.log(err);
    }
  });
});
