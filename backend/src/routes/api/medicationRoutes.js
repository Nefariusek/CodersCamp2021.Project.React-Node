import { patchMedication } from '../../middlewares/medicationMiddlewares.js';
import { medicationValidator } from '../../models/Medication.js';

const medicationRoutes = async (router) => {
  router.patch('/medications/:id', medicationValidator, patchMedication);
};

export default medicationRoutes;
