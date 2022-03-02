import { Router } from 'express';

import testEndpoint from './api/test.routes.js';
import userPatchEndpoint from './api/userPatch.routes.js';

const router = Router();

testEndpoint(router);

userPatchEndpoint(router);

export default router;
