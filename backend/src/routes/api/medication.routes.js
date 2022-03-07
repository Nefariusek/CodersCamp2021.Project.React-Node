import Medication from '../../models/Medication.js';

import ExpressError from '../../middlewares/ExpressError.js';

const MedicationRoutes = (router) => {
  router.get('/me/meds', getAllMedications);
};

async function getAllMedications(_req, res, next) {
  try {
    const medications = await Medication.find({});
    if (!medications) {
      throw new ExpressError('No medication found', 404);
    }
    res.status(200).send({ medications });
  } catch (err) {
    next(err);
  }
  next();
}

export default MedicationRoutes;
