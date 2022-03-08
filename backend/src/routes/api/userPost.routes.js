import mongoose from 'mongoose';
import { StatusCodes } from 'http-status-codes';
import User, { userValidator } from '../../models/User.js';
import Profile from '../../models/Profile.js';

export const INITIAL_PROFILE = {
  age: 0,
  firstName: 'Your first name',
  lastName: 'Your last name',
  registerDate: new Date(),
  onlineDate: new Date(),
};

const userPostEndpoint = (router) => {
  router.post('/users', userValidator, postUser);

  async function postUser(req, res) {
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      return res.status(StatusCodes.CONFLICT).json({ message: 'User already exists' });
    }
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    try {
      const profileId = new mongoose.Types.ObjectId();

      user.profileRef = profileId;
      const savedUser = await user.save();

      const profile = new Profile({
        _id: profileId,
        ...INITIAL_PROFILE,
        user: savedUser._id,
      });

      profile.save();
      res.status(StatusCodes.CREATED).json(savedUser);
    } catch (err) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: err.message });
    }
  }
};

export default userPostEndpoint;
