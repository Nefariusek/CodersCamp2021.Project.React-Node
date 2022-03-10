import { Router } from 'express';

import testEndpoint from './api/test.routes.js';
import profileRoutes from './api/profileRoutes.js';

const router = Router();

testEndpoint(router);
profileRoutes(router);

export default router;
