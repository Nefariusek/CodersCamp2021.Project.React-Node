import { StatusCodes } from 'http-status-codes';
import User, { userValidator } from '../../models/User.js';

const userPatchEndpoint = (router) => {
  router.patch('/users/:id', getUser, userValidator, patchUser);

  async function getUser(req, res, next) {
    let user;
    try {
      user = await User.findById(req.params.id);
      if (user == null) {
        return res.status(StatusCodes.NOT_FOUND).json({ message: "Can't find a user" });
      }
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
    }

    res.user = user;
    next();
  }

  async function patchUser(req, res) {
    try {
      const updatedUser = await User.updateOne(
        { _id: req.params.id },
        { $set: req.body },
        { upsert: true, runValidators: true },
      );
      res.status(StatusCodes.OK).json(updatedUser);
    } catch (err) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: err.message });
    }
  }
};

export default userPatchEndpoint;
