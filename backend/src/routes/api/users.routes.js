import {
  getUserById,
  getOneUser,
  getAllUsers,
  postUser,
  patchUser,
  deleteUser,
  loginUser,
} from '../../middlewares/userMiddlewares.js';
import { userValidator } from '../../models/User.js';

const userRoutes = (router) => {
  router.get('/users/:id', getUserById, getOneUser);

  router.get('/users', getAllUsers);

  router.post('/users', userValidator, postUser);

  router.patch('/users/:id', getUserById, userValidator, patchUser);

  router.delete('/users/:id', getUserById, deleteUser);

  router.post('/users/login', loginUser);
};

export default userRoutes;
