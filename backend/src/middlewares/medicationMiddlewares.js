import { StatusCodes } from 'http-status-codes';
import Medication from '../models/Medication.js';
import ExpressError from '../../middlewares/ExpressError';

async function deleteMedication(req, res, next) {
  try {
    const deletedMed = await Medication.findByIdAndDelete(req.params.id);
    if (!deletedMed) {
      throw new ExpressError('No medication found', 404);
    }
    res.status(StatusCodes.OK).json({ message: 'Medication deleted' });
  } catch (err) {
    next(err);
  }
}

export { deleteMedication };
