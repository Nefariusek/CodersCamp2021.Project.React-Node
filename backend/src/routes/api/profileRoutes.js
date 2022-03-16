import { StatusCodes } from 'http-status-codes';
import Profile from '../../models/Profile.js';

const profileRoutes = async (router) => {
  router.get('/profiles/:id', getUserProfile);
};

const getUserProfile = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const currentProfile = await Profile.findById(userId);
    if (currentProfile) {
      res.status(StatusCodes.OK).send(currentProfile);
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    next(error);
  }
};

export default profileRoutes;
