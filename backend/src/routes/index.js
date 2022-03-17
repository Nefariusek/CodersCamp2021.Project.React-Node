import { Router } from 'express';

import testEndpoint from './api/test.routes.js';
import MedicationCategoryRoutes from './api/medicationCategories.routes.js';
import profileRoutes from './api/profileRoutes.js';
import userRoutes from './api/users.routes.js';

const router = Router();

testEndpoint(router);
MedicationCategoryRoutes(router);
profileRoutes(router);
userRoutes(router);

export default router;
