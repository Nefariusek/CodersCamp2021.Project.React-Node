import { postUser } from '../../middlewares/userMiddlewares.js';
import { userValidator } from '../../models/User.js';

const UserRoutes = (router) => {
  router.post('/users', userValidator, postUser);
};

export default UserRoutes;
