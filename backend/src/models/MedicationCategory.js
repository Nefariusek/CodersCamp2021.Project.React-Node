import mongoose from 'mongoose';
import {
  PILLS_COLOR,
  SYRUP_COLOR,
  INHALER_COLOR,
  INJECTION_COLOR,
  DROPS_COLOR,
  PATCHES_COLOR,
} from '../constants/MedicationCategory/pillColors';
import { QUANTITY_UNIT, VOLUME_UNIT } from '../constants/MedicationCategory/medsUnits';
import {
  PILLS_ICON,
  SYRUP_ICON,
  INHALER_ICON,
  INJECTION_ICON,
  DROPS_ICON,
  PATCHES_ICON,
} from '../constants/MedicationCategory/medsIcons';

const { Schema } = mongoose;

const medicationCategorySchema = new Schema({
  name: String,
  unit: { type: String, enum: [VOLUME_UNIT, QUANTITY_UNIT], default: 'pcs' },
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
