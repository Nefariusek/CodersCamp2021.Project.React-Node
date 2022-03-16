import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import ExpressError from './ExpressError.js';

export async function patchUser(req, res, next) {
  try {
    const updatedUser = await User.updateOne({ _id: req.params.id }, { $set: req.body }, { runValidators: true });
    res.status(StatusCodes.OK).json(updatedUser);
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
