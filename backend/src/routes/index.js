import { Router } from 'express';

import testEndpoint from './api/test.routes.js';
import patchProfileEndpoint from './api/patchProfile.js';

const router = Router();

testEndpoint(router);
patchProfileEndpoint(router);

export default router;
