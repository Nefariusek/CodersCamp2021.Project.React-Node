import { StatusCodes } from 'http-status-codes';
import Medication from '../models/Medication.js';
import ExpressError from './ExpressError.js';

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
    const existingMedication = await Medication.findOne({
      profile: req.body.profile,
      nameOfMedication: req.body.nameOfMedication,
    });
    if (existingMedication) {
      throw new ExpressError('Medication already in your aidkit', StatusCodes.CONFLICT);
    } else {
      const medication = new Medication({
        ...req.body,
      });
      const addedMedication = await medication.save();
      res.status(StatusCodes.OK).send(addedMedication);
    }
  } catch (err) {
    next(err);
  }
}

export { postMedication };
