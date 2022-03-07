import { Router } from 'express';

import testEndpoint from './api/test.routes.js';
import MedicationCategoryRoutes from './api/medicationCategories.routes.js';

const router = Router();

testEndpoint(router);
MedicationCategoryRoutes(router);

export default router;
