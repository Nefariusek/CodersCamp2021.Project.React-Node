import mongoose from 'mongoose';

const medicationSchema = new mongoose.Schema({
  nameOfMedication: { type: String, required: true, minlength: 2, maxlength: 64 },
  quantity: { type: Number, required: true, min: 1 },
  addDate: { type: Date, default: new Date() },
  dosage: { type: String, required: true, minlength: 2 },
  category: { type: String, enum: ['pills', 'syrup', 'inhaler', 'injections', 'drops', 'patches'] },
  expirationDate: { type: Date, required: true },
  profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
});

const Medication = mongoose.model('Medication', medicationSchema);
export default Medication;
