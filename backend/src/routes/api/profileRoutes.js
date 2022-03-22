import Profile from '../../models/Profile.js';
import Medication from '../../models/Medication.js';
import { profileValidator } from '../../models/Profile.js';
import { StatusCodes } from 'http-status-codes';
import ExpressError from '../../middlewares/ExpressError.js';

const profileRoutes = async (router) => {
  router.patch('/profiles/:id', profileValidator, patchUserProfile);
  router.get('/profiles/:id', getUserProfile);
  router.get('/profiles/:id/meds', getUsersMedications);
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

async function getUsersMedications(req, res, next) {
  try {
    const currentProfile = await Profile.findById(req.params.id);
    if (!currentProfile) {
      throw new ExpressError('User not found', 404);
    }

    const currentProfileMedicationList = await Medication.find({ _id: { $in: currentProfile.medicationList } });

    res.status(StatusCodes.OK).send(currentProfileMedicationList);
  } catch (error) {
    next(error);
  }
}

export default profileRoutes;
