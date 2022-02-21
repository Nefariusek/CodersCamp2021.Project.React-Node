import mongoose from 'mongoose';
import Joi from 'joi';
import { LIGHT_THEME, DARK_THEME } from '../constants/themes';

const settingsSchema = new mongoose.Schema({
  appTheme: { type: String, enum: [LIGHT_THEME, DARK_THEME], default: LIGHT_THEME },
  soonExpiringFilterLength: { type: Number, enum: [3, 5, 7], default: 3 },
});

settingsSchema.methods.joiValidate = (requestBody) => {
  const schema = Joi.object({
    appTheme: Joi.string().valid(LIGHT_THEME, DARK_THEME),
    soonExpiringFilterLength: Joi.number().valid(3, 5, 7),
  });
  return schema.validate(requestBody);
};

const Settings = mongoose.model('Settings', settingsSchema);
export default Settings;
