import Profile from '../../models/Profile.js';
import { profileValidator } from '../../models/Profile.js';
import { StatusCodes } from 'http-status-codes';

const profileRoutes = async (router) => {
  router.patch('/profiles/:id', profileValidator, patchUserProfile);
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

export default profileRoutes;
