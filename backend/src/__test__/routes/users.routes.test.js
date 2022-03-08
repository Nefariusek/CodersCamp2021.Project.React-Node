import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';
import request from 'supertest';
import connectDataBase from '../../config/components/connectDB.js';

import app from '../../app.js';

describe('User endpoint test suite', () => {
  beforeAll(async () => {
    try {
      connectDataBase();
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

  afterAll(async () => {
    try {
      const user = await mongoose.model('User').findOne({ username: 'TestRouteUser' });
      const id = user._id;
      await mongoose.model('Profile').find({ user: id }).deleteOne();
      await mongoose.model('User').find({ _id: id }).deleteOne();
      await mongoose.connection.close();
    } catch (err) {
      console.log(err);
    }
  });
});
