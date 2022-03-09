import { getUserById, getOneUser, getAllUsers, deleteUser } from '../../middlewares/userMiddlewares.js';

const userRoutes = (router) => {
  router.get('/users/:id', getUserById, getOneUser);

  router.get('/users', getAllUsers);

  router.delete('/users/:id', getUserById, deleteUser);
};

export default userRoutes;
