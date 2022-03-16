import { Router } from 'express';

import testEndpoint from './api/test.routes.js';
import profileRoutes from './api/profileRoutes.js';
import userRoutes from './api/users.routes.js';
import medicationRoutes from './api/medicationRoutes.js';

const router = Router();

testEndpoint(router);
profileRoutes(router);
userRoutes(router);
medicationRoutes(router);

export default router;
