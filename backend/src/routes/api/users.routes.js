import { StatusCodes } from 'http-status-codes';
import User, { userValidator } from '../../models/User.js';
import Profile from '../../models/Profile.js';
import getUserById from '../../middlewares/userMiddlewares.js';

const UserRoutes = (router) => {
  router.get('/users/:id', getUserById, async (req, res) => {
    res.status(StatusCodes.OK).json(res.user);
  });

  router.get('/users', getAllUsers);

  router.delete('/users/:id', getUserById, deleteUser);

  async function getAllUsers(req, res, next) {
    try {
      const users = await User.find();
      res.status(StatusCodes.OK).json(users);
    } catch (err) {
      next(err);
    }
  }

  async function deleteUser(req, res, next) {
    try {
      await Profile.find({ user: res.user._id }).deleteOne();
      await res.user.deleteOne();
      res.status(StatusCodes.OK).json({ message: 'User deleted' });
    } catch (err) {
      next(err);
    }
  }
};

export default UserRoutes;
