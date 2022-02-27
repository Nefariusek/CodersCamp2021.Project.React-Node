import mongoose from 'mongoose';

import app from './app.js';
import env from './constants/env.js';
import logger from './config/components/logger.js';
import initializeData from './config/components/dataInitializer.js';

const dbConfig = env.NODE_ENV === 'production' ? {} : { dbName: 'local-project-db' };

let server;

mongoose.connect(env.MONGODB_URL, dbConfig).then(() => {
  logger.info('Connected to MongoDB');

  server = app.listen(env.PORT, () => {
    logger.info(`Listening to port ${env.PORT}`);
  });
});

initializeData();

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
