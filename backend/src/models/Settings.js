import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema({
  appTheme: { type: String, enum: ['light', 'dark'], default: 'light' },
  soonExpLenght: { type: Number, enum: [3, 5, 7], default: 3 },
});

const Settings = mongoose.model('Settings', settingsSchema);
export default Settings;
