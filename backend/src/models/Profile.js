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
});

const Profile = mongoose.model('Profile', profileSchema);
export default Profile;
