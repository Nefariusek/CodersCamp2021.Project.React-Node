import User from '../models/User.js';
import Profile from '../models/Profile.js';
import { StatusCodes } from 'http-status-codes';
import ExpressError from './ExpressError.js';

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

export async function deleteUser(req, res, next) {
  try {
    await Profile.find({ user: res.user._id }).deleteOne();
    await res.user.deleteOne();
    res.status(StatusCodes.OK).json({ message: 'User deleted' });
  } catch (err) {
    next(err);
  }
}
