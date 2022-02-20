import mongoose from 'mongoose';
import {
  PILLS_COLOR,
  SYRUP_COLOR,
  INHALER_COLOR,
  INJECTION_COLOR,
  DROPS_COLOR,
  PATCHES_COLOR,
} from '../constants/pillColors';

import { PILLS_ICON, SYRUP_ICON, INHALER_ICON, INJECTION_ICON, DROPS_ICON, PATCHES_ICON } from '../constants/medsIcons';

const { Schema } = mongoose;

const MedicationCategorySchema = new Schema({
  name: String,
  unit: { type: String, enum: ['ml', 'pcs'], default: 'pcs' },
  color: {
    type: String,
    enum: [PILLS_COLOR, SYRUP_COLOR, INHALER_COLOR, INJECTION_COLOR, DROPS_COLOR, PATCHES_COLOR],
    default: PILLS_COLOR,
  },
  icon: {
    type: String,
    enum: [PILLS_ICON, SYRUP_ICON, INHALER_ICON, INJECTION_ICON, DROPS_ICON, PATCHES_ICON],
    default: PILLS_ICON,
  },
});

const MedicationCategory = mongoose.model('MedicationCategory', MedicationCategorySchema);

export default MedicationCategory;
