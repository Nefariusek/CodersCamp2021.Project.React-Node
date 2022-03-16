import { getUserById, patchUser, postUser } from '../../middlewares/userMiddlewares.js';
import { userValidator } from '../../models/User.js';

const userRoutes = (router) => {
  router.post('/users', userValidator, postUser);

  router.patch('/users/:id', getUserById, userValidator, patchUser);
};

export default userRoutes;
