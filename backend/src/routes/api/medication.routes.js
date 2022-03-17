import Medication, { medicationValidator } from '../../models/Medication.js';
import { StatusCodes } from 'http-status-codes';
import ExpressError from '../../middlewares/ExpressError.js';

const MedicationRoutes = (router) => {
  router.get('/me/meds', getAllMedications);
  router.post('/me/meds', medicationValidator, postMedication);
  router.delete('me/meds/:id', deleteMedication);
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
  try {
    const newMedication = await addNewMedication(req.body);
    res.status(StatusCodes.CREATED).json(newMedication);
  } catch (err) {
    next(err);
  }
}

async function addNewMedication(req, _res, _next) {
  const { nameOfMedication, quantity, addDate, dosage, category, expirationDate, profile } = req.body;
  const existingMedication = await Medication.findOne({ nameOfMedication: nameOfMedication });

  if (existingMedication) {
    throw new ExpressError('Medication already in database', StatusCodes.CONFLICT);
  }

  const medication = new Medication({
    nameOfMedication,
    quantity,
    addDate,
    dosage,
    category,
    expirationDate,
    profile,
  });
  await medication.save();
}

export async function deleteMedication(req, res, next) {
  try {
    const medication = await Medication.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.OK).json({ message: 'Medication delted' });
  } catch (err) {
    next(err);
  }
}

export default MedicationRoutes;
