import mongoose from 'mongoose';
import TestUser, { userValidator } from '../../models/User';
import { RegExpressions } from '../../constants/validations';

describe('User model', () => {
  let testUser;

  beforeEach(() => {
    testUser = new TestUser({
      username: 'AidKitMan',
      email: 'aidkitman@gmail.com',
      password: '5!E@c#r$e%1',
      profileRef: new mongoose.Types.ObjectId('507f191e810c19729de860ea'),
    });
  });

  it('User is created', () => {
    expect(testUser).toBeDefined();
  });

  it('Username has only letters and digits', () => {
    const regex = new RegExp(RegExpressions.USERNAME);
    expect(regex.test(testUser.username)).toBe(true);
  });

  it('Password must include at least one uppercase letter, number and special character', () => {
    const regex = new RegExp(RegExpressions.PASSWORD);
    expect(regex.test(testUser.password)).toBe(true);
  });

  it('Profile reference is correct Object Id', () => {
    const expectedObjectId = new mongoose.Types.ObjectId('507f191e810c19729de860ea');
    expect(testUser.profileRef).toEqual(expectedObjectId);
  });

  it('User by default is not admin and is not verified', () => {
    expect(testUser.isAdmin).toBe(false);
    expect(testUser.isVerified).toBe(false);
  });
});

describe('Joi validator for User model', () => {
  let testRequest;
  let res;
  let error;

  beforeEach(() => {
    testRequest = {
      body: {},
    };
    res = undefined;
    error = undefined;
  });

  describe('Joi validator accepts valid data', () => {
    it('All data valid', () => {
      testRequest.body.username = 'AidKitMan';
      testRequest.body.email = 'aidkitman@gmail.com';
      testRequest.body.password = '5!E@c#r$e%1';
      testRequest.body.profileRef = new mongoose.Types.ObjectId();
      userValidator(testRequest, res, (err) => {
        error = err;
      });
      expect(error).toBeUndefined();
    });
  });

  describe('Joi validator rejects invalid data', () => {
    afterEach(() => {
      userValidator(testRequest, res, (err) => {
        error = err;
      });
      expect(error).not.toBeUndefined();
    });

    it('Rejects invalid username', () => {
      testRequest.body.username = 'Someone$';
      testRequest.body.email = 'aidkitman@gmail.com';
      testRequest.body.password = '5!E@c#r$e%1';
      testRequest.body.profileRef = new mongoose.Types.ObjectId();
    });
    it('Rejects invalid email', () => {
      testRequest.body.username = 'AidKitMan';
      testRequest.body.email = 'aidkitman@gmail';
      testRequest.body.password = '5!E@c#r$e%1';
      testRequest.body.profileRef = new mongoose.Types.ObjectId();
    });
    it('Rejects invalid password', () => {
      testRequest.body.username = 'AidKitMan';
      testRequest.body.email = 'aidkitman@gmail.com';
      testRequest.body.password = 'secret123';
      testRequest.body.profileRef = new mongoose.Types.ObjectId();
    });
    it('Rejects invalid profile reference', () => {
      testRequest.body.username = 'AidKitMan';
      testRequest.body.email = 'aidkitman@gmail.com';
      testRequest.body.password = '5!E@c#r$e%1';
      testRequest.body.profileRef = '100';
    });
  });
});
