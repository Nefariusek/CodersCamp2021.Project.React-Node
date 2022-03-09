import { StatusCodes } from 'http-status-codes';
import User, { userValidator } from '../../models/User.js';
import Profile from '../../models/Profile.js';
import ExpressError from '../../middlewares/ExpressError.js';

export const INITIAL_PROFILE = {
  age: 0,
  firstName: 'Your first name',
  lastName: 'Your last name',
  registerDate: new Date(),
  onlineDate: new Date(),
};

const UserRoutes = (router) => {
  router.post('/users', userValidator, postUser);

  async function postUser(req, res, next) {
    try {
      const existingUser = await User.findOne({ username: req.body.username });
      if (existingUser) {
        throw new ExpressError('User already exists', StatusCodes.CONFLICT);
      }

      const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      const savedUser = await user.save();

      const profile = new Profile({
        ...INITIAL_PROFILE,
        user: savedUser._id,
      });
      const savedProfile = await profile.save();

      const savedUserWithProfileRef = await User.updateOne(
        { username: req.body.username },
        { $set: { profileRef: savedProfile._id } },
      );

      res.status(StatusCodes.CREATED).json(savedUserWithProfileRef);
    } catch (err) {
      next(err);
    }
  }
};

export default UserRoutes;
