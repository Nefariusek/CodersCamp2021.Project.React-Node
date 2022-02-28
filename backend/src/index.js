import mongoose from 'mongoose';
import pkg from 'mongoose';
const { connection } = pkg;
import app from './app.js';
import env from './constants/env.js';
import logger from './config/components/logger.js';

import getConnectionUrl from './config/components/urlBuilder.js';

import initializeData from './config/components/dataInitializer.js';

const dbConfig = env.NODE_ENV === 'PROD' ? {} : { dbName: env[`DB_NAME_${env.NODE_ENV}`] };

let server;

mongoose.connect(getConnectionUrl(), dbConfig).then(() => {
  logger.info('Connected to MongoDB');

  server = app.listen(env.PORT, () => {
    logger.info(`Listening to port ${env.PORT}`);
  });
});

if (env.NODE_ENV === 'development') {
  connection.dropDatabase();
  initializeData();
}

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');

  if (server) {
    server.close();
  }
});
