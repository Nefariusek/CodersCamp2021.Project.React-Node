import User from '../models/User.js';
import Profile from '../models/Profile.js';
import { StatusCodes } from 'http-status-codes';
import ExpressError from './ExpressError.js';

export const INITIAL_PROFILE = {
  age: 0,
  firstName: 'Your first name',
  lastName: 'Your last name',
  registerDate: new Date(),
  onlineDate: new Date(),
};

export async function postUser(req, res, next) {
  try {
    const newUser = await registerNewUser(req.body);
    res.status(StatusCodes.CREATED).json(newUser);
  } catch (err) {
    next(err);
  }
}

async function registerNewUser(userData) {
  const existingUser = await User.findOne({ username: userData.username });
  if (existingUser) {
    throw new ExpressError('User already exists', StatusCodes.CONFLICT);
  }

  const user = new User({
    username: userData.username,
    email: userData.email,
    password: userData.password,
  });
  const savedUser = await user.save();

  const profile = new Profile({
    ...INITIAL_PROFILE,
    user: savedUser._id,
  });
  const savedProfile = await profile.save();

  const savedUserWithProfileRef = await User.updateOne(
    { username: userData.username },
    { $set: { profileRef: savedProfile._id } },
  );

  return savedUserWithProfileRef;
}
