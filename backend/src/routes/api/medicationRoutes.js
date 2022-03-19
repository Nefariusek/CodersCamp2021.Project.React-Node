import { deleteMedication } from '../../middlewares/medicationMiddlewares.js';
import { medicationValidator } from '../../models/Medication.js';

const medicationRoutes = async (router) => {
  router.patch('/medications/:id', medicationValidator, patchMedication);
  router.delete('/medications/:id', deleteMedication);
};

export default medicationRoutes;
