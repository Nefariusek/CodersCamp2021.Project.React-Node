import { Router } from 'express';

import testEndpoint from './api/test.routes.js';
import userPostEndpoint from './api/userPost.routes.js';

const router = Router();

testEndpoint(router);
userPostEndpoint(router);

export default router;
