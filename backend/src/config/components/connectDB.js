import mongoose from 'mongoose';
import env from '../../constants/env.js';
import logger from './logger.js';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    logger.info(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    logger.error(err);
  }
};

export default connectDB;
