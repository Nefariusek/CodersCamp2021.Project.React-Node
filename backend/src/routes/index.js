import { Router } from 'express';

import testEndpoint from './api/test.routes.js';
import MedicationRoutes from './api/medication.routes.js';
const router = Router();

testEndpoint(router);
MedicationRoutes(router);

export default router;
