import { getUserById, patchUser } from '../../middlewares/userMiddlewares.js';
import { userValidator } from '../../models/User.js';

const userRoutes = (router) => {
  router.patch('/users/:id', getUserById, userValidator, patchUser);
};

export default userRoutes;
