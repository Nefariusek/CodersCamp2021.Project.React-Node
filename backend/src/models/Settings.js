import mongoose from 'mongoose';
import Joi from 'joi';
import { LIGHT_THEME, DARK_THEME } from '../constants/themes';

const themes = [LIGHT_THEME, DARK_THEME];
const possibleLengths = [3, 5, 7];

const settingsSchema = new mongoose.Schema({
  appTheme: { type: String, enum: themes, default: LIGHT_THEME },
  soonExpiringFilterLength: { type: Number, enum: possibleLengths, default: 3 },
});

export const settingsValidator = (req, res, next) => {
  const schema = Joi.object({
    appTheme: Joi.string().valid(...themes),
    soonExpiringFilterLength: Joi.number().valid(...possibleLengths),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return next(new Error(error));
  }
  return next();
};

const Settings = mongoose.model('Settings', settingsSchema);
export default Settings;
