import { StatusCodes } from 'http-status-codes';
import Medication from '../models/Medication.js';
import ExpressError from '../middlewares/ExpressError';

async function patchMedication(req, res, next) {
  try {
    const currentMedication = await Medication.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!currentMedication) {
      throw new Error('Medication not found');
    } else {
      res.status(StatusCodes.OK).send(currentMedication);
    }
  } catch (error) {
    next(error);
  }
}

export { patchMedication };

async function deleteMedication(req, res, next) {
  try {
    const deletedMedication = await Medication.findByIdAndDelete(req.params.id);
    if (!deletedMedication) {
      throw new ExpressError('No medication found', 404);
    } else {
      res.status(StatusCodes.OK).json({ message: 'Medication deleted' });
    }
  } catch (err) {
    next(err);
  }
}

export { deleteMedication };

async function postMedication(req, res, next) {
  try {
    const newMedication = await addNewMedication(req.body);
    res.status(StatusCodes.CREATED).json(newMedication);
  } catch (err) {
    next(err);
  }
}

export { postMedication };

async function addNewMedication(medicationData) {
  const existingMedication = await Medication.findOne({ nameOfMedication: medicationData.nameOfMedication });

  if (existingMedication) {
    throw new ExpressError('Medication already in database', StatusCodes.CONFLICT);
  }

  const medication = new Medication({
    nameOfMedication: medicationData.nameOfMedication,
    quantity: medicationData.quantity,
    addDate: medicationData.addDate,
    dosage: medicationData.dosage,
    category: medicationData.category,
    expirationDate: medicationData.expirationDate,
    profile: medicationData.profile,
  });
  await medication.save();
  res.status(StatusCodes.OK).json(medication);
}
