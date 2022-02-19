const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  appTheme: { type: String, enum: ['light', 'dark'], default: 'light' },
  soonExpLenght: { type: Number, enum: [3, 5, 7], default: 3 },
});

module.exports = mongoose.model('Settings', settingsSchema);
