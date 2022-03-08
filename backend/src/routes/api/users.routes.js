import { StatusCodes } from 'http-status-codes';
import User, { userValidator } from '../../models/User.js';
import ExpressError from '../../middlewares/ExpressError.js';

const userEndpoint = (router) => {
  router.patch('/users/:id', getUser, userValidator, patchUser);

  async function getUser(req, res, next) {
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

  async function patchUser(req, res, next) {
    try {
      const updatedUser = await User.updateOne(
        { _id: req.params.id },
        { $set: req.body },
        { upsert: true, runValidators: true },
      );
      res.status(StatusCodes.OK).json(updatedUser);
    } catch (err) {
      next(err);
    }
  }
};

export default userEndpoint;
