import bcrypt from 'bcrypt';
import User from '../models/User.js';
import Profile from '../models/Profile.js';
import Settings from '../models/Settings.js';
import { LIGHT_THEME } from '../constants/themes.js';
import { StatusCodes } from 'http-status-codes';
import ExpressError from './ExpressError.js';

const INITIAL_PROFILE = {
  age: 0,
  firstName: 'Your first name',
  lastName: 'Your last name',
  registerDate: new Date(),
  onlineDate: new Date(),
};

const INITIAL_SETTINGS = {
  appTheme: LIGHT_THEME,
  soonExpiringFilterLength: 3,
};

export async function getOneUser(req, res) {
  res.status(StatusCodes.OK).json(res.user);
}

export async function getAllUsers(req, res, next) {
  try {
    const users = await User.find();
    res.status(StatusCodes.OK).json(users);
  } catch (err) {
    next(err);
  }
}

export async function postUser(req, res, next) {
  try {
    const newUser = await registerNewUser(req.body);
    res.status(StatusCodes.CREATED).json(newUser);
  } catch (err) {
    next(err);
  }
}

export async function patchUser(req, res, next) {
  try {
    const updatedUser = await User.updateOne({ _id: req.params.id }, { $set: req.body }, { runValidators: true });
    res.status(StatusCodes.OK).json(updatedUser);
  } catch (err) {
    next(err);
  }
}

export async function deleteUser(req, res, next) {
  try {
    await Profile.find({ _id: res.user.profileRef }).deleteOne();
    await Settings.find({ _id: res.user.settingsRef }).deleteOne();
    await res.user.deleteOne();
    res.status(StatusCodes.OK).json({ message: 'User deleted' });
  } catch (err) {
    next(err);
  }
}

export async function getUserById(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      throw new ExpressError("Can't find a user", StatusCodes.NOT_FOUND);
    }
  } catch (err) {
    next(err);
  }

  res.user = user;
  next();
}

async function registerNewUser(userData) {
  const existingUser = await User.findOne({ username: userData.username });
  if (existingUser) {
    throw new ExpressError('User already exists', StatusCodes.CONFLICT);
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);

  const user = new User({
    username: userData.username,
    email: userData.email,
    password: hashedPassword,
  });
  const savedUser = await user.save();

  const profile = new Profile({
    ...INITIAL_PROFILE,
    user: savedUser._id,
  });
  const savedProfile = await profile.save();

  const settings = new Settings({
    ...INITIAL_SETTINGS,
  });
  const savedSettings = await settings.save();

  const savedUserWithReferences = await User.updateOne(
    { username: userData.username },
    { $set: { profileRef: savedProfile._id, settingsRef: savedSettings._id } },
  );

  return savedUserWithReferences;
}
