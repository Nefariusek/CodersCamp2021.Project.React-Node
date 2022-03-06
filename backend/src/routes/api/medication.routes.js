import Medication from '../../models/Medication';

import ExpressError from '../../../middlewares/ExpressError';

const MedicationRoutes = (router) => {
  router.get('/me/meds', getAllMedications);
};

async function getAllMedications(req, res, next) {
  try {
    const medications = await Medication.find({});
    if (!medications) {
      throw new ExpressError('No medication found', 404);
    }
    res.status(StatusCodes.OK).send({ medication });
  } catch (err) {
    next(err);
  }
  next();
}

export default MedicationRoutes;
