import mongoose from 'mongoose';

export const isValidObjectId = (value) => {
  value = value + '';
  if (mongoose.Types.ObjectId.isValid(value) && new mongoose.Types.ObjectId(value).toString() === value) {
    return value;
  }
  throw new Error("it's not a valid ObjectId");
};
