import Medication from '../models/Medication.js';
import MedicationCategory from '../models/MedicationCategory.js';
import Profile from '../models/Profile.js';
import Settings from '../models/Settings.js';
import User from '../models/User.js';

const models = {
  medication: Medication,
  medicationCategory: MedicationCategory,
  profile: Profile,
  settings: Settings,
  user: User,
};

export default models;
