import { StatusCodes } from 'http-status-codes';
import User, { userValidator } from '../../models/User.js';
import getUserById from '../../middlewares/userMiddlewares.js';

const UserRoutes = (router) => {
  router.patch('/users/:id', getUserById, userValidator, patchUser);

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

export default UserRoutes;
