const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  age: Number,
  firstName: { type: String, required: true, lowercase: true },
  lastName: { type: String, required: true, lowercase: true },
  userBio: { type: String, maxlength: 180 },
  registerDate: { type: Date, required: true, max: Date.now },
  onlineDate: { type: Date, required: true, max: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  medicationsList: [String],
});

const Profile = mongoose.model('Profile', profileSchema);
export default Profile;
