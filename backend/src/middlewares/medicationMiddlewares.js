import { StatusCodes } from 'http-status-codes';
import Medication from '../models/Medication.js';

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
