import { Router } from 'express';

import testEndpoint from './api/test.routes.js';
import settingsEndpoint from './api/settings.routes.js';

const router = Router();

testEndpoint(router);
settingsEndpoint(router);

export default router;
