import Medication, { medicationValidator } from '../../models/Medication.js';
import { StatusCodes } from 'http-status-codes';
import ExpressError from '../../middlewares/ExpressError.js';

const MedicationRoutes = (router) => {
  router.get('/me/meds', getAllMedications);
  router.post('/me/meds', medicationValidator, postMedication);
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

async function postMedication(req, res, next) {
  const { nameOfMedication, quantity, addDate, dosage, expirationDate } = req.body;
  const medication = new Medication({
    nameOfMedication,
    quantity,
    addDate,
    dosage,
    expirationDate,
  });
  await medication.save();
  res.status(StatusCodes.OK).json(medication);
}

export default MedicationRoutes;
