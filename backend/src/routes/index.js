import { Router } from 'express';

import testEndpoint from './api/test.routes.js';
import settingsRoutes from './api/settings.routes.js';

const router = Router();

testEndpoint(router);
settingsRoutes(router);

export default router;
