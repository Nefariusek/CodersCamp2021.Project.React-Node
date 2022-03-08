import { Router } from 'express';

import testEndpoint from './api/test.routes.js';
import userEndpoint from './api/users.routes.js';

const router = Router();

testEndpoint(router);
userEndpoint(router);

export default router;
