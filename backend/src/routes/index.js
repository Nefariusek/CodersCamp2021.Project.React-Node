import { Router } from 'express';

import testEndpoint from './api/test.routes.js';
import userProfileEndpoint from './api/getUserProfileById.js';

const router = Router();

testEndpoint(router);
userProfileEndpoint(router);

export default router;
