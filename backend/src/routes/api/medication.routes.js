import Medication, { medicationValidator } from '../../models/Medication.js';
import { StatusCodes } from 'http-status-codes';

const MedicationRoutes = (router) => {
  router.delete('me/meds/:id', deleteMedication);
};

export async function deleteMedication(req, res, next) {
  try {
    const medication = await Medication.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.OK).json({ message: 'Medication delted' });
  } catch (err) {
    next(err);
  }
}

export default MedicationRoutes;
