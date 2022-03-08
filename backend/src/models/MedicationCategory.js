import mongoose from 'mongoose';
import Joi from 'joi';
import {
  PILLS_COLOR,
  SYRUP_COLOR,
  INHALER_COLOR,
  INJECTION_COLOR,
  DROPS_COLOR,
  PATCHES_COLOR,
} from '../constants/MedicationCategory/pillColors.js';
import { QUANTITY_UNIT, VOLUME_UNIT } from '../constants/MedicationCategory/medsUnits.js';
import {
  PILLS_ICON,
  SYRUP_ICON,
  INHALER_ICON,
  INJECTION_ICON,
  DROPS_ICON,
  PATCHES_ICON,
} from '../constants/MedicationCategory/medsIcons.js';
import {
  DROPS_MED_TYPE,
  INHALER_MED_TYPE,
  INJECTION_MED_TYPE,
  PATCHES_MED_TYPE,
  PILL_MED_TYPE,
  SYRUP_MED_TYPE,
} from '../constants/MedicationCategory/medTypes.js';
const COLORS = [PILLS_COLOR, SYRUP_COLOR, INHALER_COLOR, INJECTION_COLOR, DROPS_COLOR, PATCHES_COLOR];
const ICONS = [PILLS_ICON, SYRUP_ICON, INHALER_ICON, INJECTION_ICON, DROPS_ICON, PATCHES_ICON];
const UNITS = [QUANTITY_UNIT, VOLUME_UNIT];
const MEDICATION_CATEGORIES = [
  DROPS_MED_TYPE,
  INHALER_MED_TYPE,
  INJECTION_MED_TYPE,
  PATCHES_MED_TYPE,
  PILL_MED_TYPE,
  SYRUP_MED_TYPE,
];
const { Schema } = mongoose;

const medicationCategorySchema = new Schema({
  name: { type: String, enum: MEDICATION_CATEGORIES, default: PILL_MED_TYPE, required: true },
  unit: { type: String, enum: UNITS, default: QUANTITY_UNIT, required: true },
  color: {
    type: String,
    enum: COLORS,
    default: PILLS_COLOR,
    required: true,
  },
  icon: {
    type: String,
    enum: ICONS,
    default: PILLS_ICON,
    required: true,
  },
});

const MedicationCategory = mongoose.model('MedicationCategory', medicationCategorySchema);

export const medicationCategoryValidator = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    unit: Joi.string()
      .valid(...UNITS)
      .required(),
    color: Joi.string()
      .valid(...COLORS)
      .required(),
    icon: Joi.string()
      .valid(...ICONS)
      .required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return next(new Error(error));
  }
  return next();
};

export default MedicationCategory;
