import { Router } from 'express';

import testEndpoint from './api/test.routes.js';

const router = Router();

testEndpoint(router);

export default router;
