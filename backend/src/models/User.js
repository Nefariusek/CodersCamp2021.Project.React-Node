import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import { RegExpressions, RequiredMessages, NotMatchMessages } from '../constants/validations.js';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      minlength: [6, '{PATH} must have at least {MINLENGTH} characters, {VALUE} is too short'],
      maxlength: [16, '{PATH} can have maximum {MAXLENGTH} characters, {VALUE} is too long'],
      unique: true,
      uniqueCaseInsensitive: true,
      match: [RegExpressions.USERNAME, NotMatchMessages.USERNAME],
      required: [true, RequiredMessages.USERNAME],
      index: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      match: [RegExpressions.EMAIL, NotMatchMessages.EMAIL],
      required: [true, RequiredMessages.EMAIL],
      index: true,
    },
    password: {
      type: String,
      trim: true,
      minlength: [8, '{PATH} must have at least {MINLENGTH} characters, {VALUE} is too short'],
      maxlength: [16, '{PATH} can have maximum {MAXLENGTH} characters, {VALUE} is too long'],
      match: [RegExpressions.PASSWORD, NotMatchMessages.PASSWORD],
      required: [true, RequiredMessages.PASSWORD],
    },
    profileRef: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Profile',
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    isVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true },
);

userSchema.plugin(uniqueValidator, { message: '{PATH} {VALUE} is already taken' });

const User = mongoose.model('User', userSchema);

export default User;
