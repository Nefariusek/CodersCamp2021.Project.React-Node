import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      minlength: 6,
      maxlength: 16,
      unique: true,
      match: /^[a-zA-Z0-9]+$/,
      required: true,
      index: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      match:
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
      required: true,
      index: true,
    },
    password: {
      type: String,
      trim: true,
      minlength: 8,
      maxlength: 16,
      match: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
      required: true,
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

const User = mongoose.model('User', userSchema);

export default User;
