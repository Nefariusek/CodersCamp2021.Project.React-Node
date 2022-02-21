import mongoose from 'mongoose';
import Joi from 'joi';
import { MEDICATION_CATEGORIES } from '../constants/MedicationCategory/medicationCategories';

const medicationSchema = new mongoose.Schema({
  nameOfMedication: { type: String, required: true, minlength: 2, maxlength: 64 },
  quantity: { type: Number, required: true, min: 1 },
  addDate: { type: Date, default: new Date() },
  dosage: { type: String, required: true, minlength: 2 },
  category: { type: String, enum: MEDICATION_CATEGORIES },
  expirationDate: { type: Date, required: true },
  profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
});

export const medicationValidator = (req, res, next) => {
  const schema = Joi.object({
    nameOfMedication: Joi.string().alphanum().min(2).max(64).required(),
    quantity: Joi.number().min(1).required(),
    addDate: Joi.date(),
    dosage: Joi.string().min(2).required(),
    category: Joi.string().valid(...MEDICATION_CATEGORIES),
    expirationDate: Joi.date().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return next(new Error(error));
  }
  return next();
};
const Medication = mongoose.model('Medication', medicationSchema);
export default Medication;
