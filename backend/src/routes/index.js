import { Router } from 'express';

import testEndpoint from './api/test.routes.js';
import userRoutes from './api/profileRoutes.js';

const router = Router();

testEndpoint(router);
userRoutes(router);

export default router;
