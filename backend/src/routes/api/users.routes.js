import {
  getUserById,
  getOneUser,
  getAllUsers,
  postUser,
  patchUser,
  deleteUser,
} from '../../middlewares/userMiddlewares.js';
import { userValidator } from '../../models/User.js';

const userRoutes = (router) => {
  router.get('/users/:id', getUserById, getOneUser);

  router.get('/users', getAllUsers);

  router.post('/users', userValidator, postUser);

  router.patch('/users/:id', getUserById, userValidator, patchUser);

  router.delete('/users/:id', getUserById, deleteUser);
};

export default userRoutes;
