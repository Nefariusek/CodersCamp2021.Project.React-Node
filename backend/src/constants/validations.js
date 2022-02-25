import mongoose from 'mongoose';

export const RegExpressions = {
  USERNAME: /^[a-zA-Z0-9]+$/,
  EMAIL:
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
  PASSWORD: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
};

export const RequiredMessages = {
  USERNAME: 'Username is required',
  EMAIL: 'Email is required',
  PASSWORD: 'Password is required',
};

export const NotMatchMessages = {
  USERNAME: 'Username must have only letters and digits',
  EMAIL: 'Email is invalid',
  PASSWORD: 'Password must include at least one uppercase letter, number and special character',
};

export const isValidObjectId = (value) => {
  value = value + '';
  if (mongoose.Types.ObjectId.isValid(value) && new mongoose.Types.ObjectId(value).toString() === value) {
    return value;
  }
  throw new Error("it's not a valid ObjectId");
};
