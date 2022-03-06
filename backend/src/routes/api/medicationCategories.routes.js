import MedicationCategory from '../../models/MedicationCategory';
import { StatusCodes } from 'http-status-codes';
import ExpressError from '../../../middlewares/ExpressError';

const MedicationCategoryRoutes = (router) => {
  router.get('/categories', getAllMedicationCategories);
};

async function getAllMedicationCategories(req, res, next) {
  try {
    const medicationCategories = await MedicationCategory.find({});
    if (!medicationCategories) {
      throw new ExpressError('No medication categories found', 404);
    }
    res.status(StatusCodes.OK).send({ medicationCategories });
  } catch (err) {
    next(err);
  }
  next();
}

export default MedicationCategoryRoutes;
