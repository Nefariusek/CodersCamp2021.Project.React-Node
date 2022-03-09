import { postUser } from '../../middlewares/userMiddlewares.js';
import { userValidator } from '../../models/User.js';

const userRoutes = (router) => {
  router.post('/users', userValidator, postUser);
};

export default userRoutes;
