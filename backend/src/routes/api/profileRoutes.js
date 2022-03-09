import { StatusCodes } from 'http-status-codes';
import Profile from '../../models/Profile.js';

const userRoutes = async (router) => {
  router.get('/users/:id', getUser);
};

const getUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const currentProfile = await Profile.findById(userId);
    if (currentProfile) {
      res.status(StatusCodes.OK).send(currentProfile);
    } else {
      res.status(StatusCodes.BAD_REQUEST).send('User not found.');
    }
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).send('Something went wrong.');
    throw error;
  }
};

export default userRoutes;
