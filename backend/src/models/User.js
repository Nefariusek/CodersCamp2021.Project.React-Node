import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import { RegExpressions, RequiredMessages, NotMatchMessages } from '../constants/validations.js';
import { isValidObjectId } from '../common/validations.js';
import Joi from 'joi';
import { StatusCodes } from 'http-status-codes';
import ExpressError from '../middlewares/ExpressError.js';

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

userSchema.plugin(uniqueValidator, { message: '{VALUE} already exists' });

const userJoiSchema = Joi.object({
  username: Joi.string().trim().min(6).max(16).alphanum().required().messages({
    'string.alphanum': NotMatchMessages.USERNAME,
    'string.min': '{{#label}} must have at least {{#limit}} characters, {{#value}} is too short',
    'string.max': '{{#label}} can have maximum {{#limit}} characters, {{#value}} is too long',
    'any.required': RequiredMessages.USERNAME,
  }),
  email: Joi.string().trim().lowercase().email().required().messages({
    'string.email': NotMatchMessages.EMAIL,
    'any.required': RequiredMessages.EMAIL,
  }),
  password: Joi.string().trim().min(8).max(16).pattern(new RegExp(RegExpressions.PASSWORD)).required().messages({
    'string.min': '{{#label}} must have at least {{#limit}} characters, {{#value}} is too short',
    'string.max': '{{#label}} can have maximum {{#limit}} characters, {{#value}} is too long',
    'string.pattern.base': NotMatchMessages.PASSWORD,
    'any.required': RequiredMessages.PASSWORD,
  }),
  profileRef: Joi.custom(isValidObjectId).messages({
    objectId: `{{#label}} ${NotMatchMessages.OBJECTID}`,
  }),
  isAdmin: Joi.boolean().default(false).messages({
    'boolean.base': '{{#label} must be a true or false',
  }),
  isVerified: Joi.boolean().default(false).messages({
    'boolean.base': '{{#label} must be a true or false',
  }),
});

export const userValidator = (req, res, next) => {
  const { error } = userJoiSchema.validate(req.body, { context: { requestType: req.method } });
  if (error) {
    return next(new ExpressError(error.message, StatusCodes.BAD_REQUEST));
  }
  return next();
};

const User = mongoose.model('User', userSchema);

export default User;
