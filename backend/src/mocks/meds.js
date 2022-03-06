import mongoose from 'mongoose';

const medications = [
  {
    nameOfMedication: 'Xanax',
    quantity: 4,
    dosage: '2 a day',
    category: new mongoose.Types.ObjectId(),
    expirationDate: new Date(),
    profile: new mongoose.Types.ObjectId(),
  },
  {
    nameOfMedication: 'Ibuprom',
    quantity: 20,
    dosage: '1 a day',
    category: new mongoose.Types.ObjectId(),
    expirationDate: new Date(),
    profile: new mongoose.Types.ObjectId(),
  },
];

export default medications;
