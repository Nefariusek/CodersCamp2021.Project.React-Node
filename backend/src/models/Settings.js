import mongoose from 'mongoose';
import { LIGHT_THEME, DARK_THEME } from '../constants/themes';

const settingsSchema = new mongoose.Schema({
  appTheme: { type: String, enum: [LIGHT_THEME, DARK_THEME], default: LIGHT_THEME },
  soonExpiringFilterLength: { type: Number, enum: [3, 5, 7], default: 3 },
});

const Settings = mongoose.model('Settings', settingsSchema);
export default Settings;
