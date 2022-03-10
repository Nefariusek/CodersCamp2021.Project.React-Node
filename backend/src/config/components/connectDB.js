import mongoose from 'mongoose';
import env from '../../constants/env.js';
import logger from './logger.js';
import getConnectionUrl from './urlBuilder.js';

const connectDataBase = async () => {
  try {
    const conn = await mongoose.connect(getConnectionUrl(), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: env[`DB_NAME_${env.NODE_ENV}`],
    });

    logger.info(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    logger.error(err);
  }
};

export default connectDataBase;
