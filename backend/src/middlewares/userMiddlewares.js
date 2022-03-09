import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import ExpressError from './ExpressError.js';

export default async function getUserById(req, res, next) {
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
