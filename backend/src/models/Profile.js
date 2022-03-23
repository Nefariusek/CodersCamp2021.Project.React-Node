import Joi from 'joi';
import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  age: Number,
  firstName: { type: String, required: true, lowercase: true },
  lastName: { type: String, required: true, lowercase: true },
  userBio: { type: String, maxlength: 180 },
  registerDate: { type: Date, required: true, max: Date.now },
  onlineDate: { type: Date, default: Date.now, required: true, max: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  medicationList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Medication' }],
  settings: { type: mongoose.Schema.Types.ObjectId, ref: 'Settings' },
});

const Profile = mongoose.model('Profile', profileSchema);

export const profileValidator = (req, res, next) => {
  const schema = Joi.object({
    age: Joi.number().positive().precision(0).less(120),
    firstName: Joi.string().alphanum().lowercase(),
    lastName: Joi.string().alphanum().lowercase(),
    userBio: Joi.string().alphanum().max(180),
    registerDate: Joi.date().max('now'),
    onlineDate: Joi.date().max('now'),
    user: Joi.ref('$User'),
    medicationList: Joi.ref('$Medication'),
    settings: Joi.ref('$Settings'),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return next(new Error(error));
  }
  return next();
};

export default Profile;
