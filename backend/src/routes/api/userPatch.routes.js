import { StatusCodes } from 'http-status-codes';
import User, { userValidator } from '../../models/User.js';

const userPatchEndpoint = (router) => {
  router.patch('/users/:id', getUser, userValidator, async (req, res) => {
    res.user_patch = {};
    if (req.body.username != null) {
      res.user_patch.username = req.body.username;
    }
    if (req.body.email != null) {
      res.user_patch.email = req.body.email;
    }
    if (req.body.password != null) {
      res.user_patch.password = req.body.password;
    }
    try {
      const updatedUser = await User.updateOne(
        { _id: req.params.id },
        { $set: res.user_patch },
        { upsert: true, runValidators: true },
      );
      res.status(StatusCodes.OK).json(updatedUser);
    } catch (err) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: err.message });
    }
  });

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
};

export default userPatchEndpoint;
