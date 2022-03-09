import { Router } from 'express';

import testEndpoint from './api/test.routes.js';
import UserRoutes from './api/users.routes.js';

const router = Router();

testEndpoint(router);
UserRoutes(router);

export default router;
