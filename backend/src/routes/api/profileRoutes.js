import Profile from '../../models/Profile.js';
import { profileValidator } from '../../models/Profile.js';
import { StatusCodes } from 'http-status-codes';

const profileRoutes = async (router) => {
  router.patch('/profiles/:id', profileValidator, patchUserProfile);
  router.get('/profiles/:id', getUserProfile);
};

const patchUserProfile = async (req, res, next) => {
  try {
    const currentProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!currentProfile) {
      throw new Error('Profile not found');
    } else {
      res.status(StatusCodes.OK).send(currentProfile);
      }
  } catch (error) {
    next(error);
  }
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
