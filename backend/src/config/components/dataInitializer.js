import models from '../../constants/models.js';
import {
  ADMIN_PROFILE,
  ADMIN_USER,
  MEDICATION1,
  MEDICATION2,
  USER_PROFILE,
  USER_USER,
} from '../../constants/mockData.js';

const Medication = models.medication;
const Profile = models.profile;
const Settings = models.settings;
const User = models.user;

export default function initializeData() {
  console.log('Initializing mock data...');
  const settings = new Settings();
  const adminProfile = new Profile(ADMIN_PROFILE);
  const admin = new User(ADMIN_USER);
  const medication1 = new Medication(MEDICATION1);
  const medication2 = new Medication(MEDICATION2);
  const userProfile = new Profile(USER_PROFILE);
  const user = new User(USER_USER);

  adminProfile.user = admin;
  userProfile.medicationList = [medication1, medication2];
  userProfile.user = user;

  settings.save();
  adminProfile.save().catch((err) => {
    console.log('Admin profile already exists');
  });
  admin.save().catch((err) => {
    console.log('Admin user already exists');
  });
  medication1.save();
  medication2.save();
  userProfile.save().catch((err) => {
    console.log('Example user profile already exists');
  });
  user.save().catch((err) => {
    console.log('Example user already exists');
  });
}
