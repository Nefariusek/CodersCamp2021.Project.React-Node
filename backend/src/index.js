
import app from './app.js';
import env from './constants/env.js';
import logger from './config/components/logger.js';
import connectDataBase from './config/components/connectDB.js';
import pkg from 'mongoose';
import initializeData from './config/components/dataInitializer.js';

connectDataBase();

const { connection } = pkg;

const server = app.listen(env.PORT, () => {
  logger.info(`Listening to port ${env.PORT}`);
});

if (env.NODE_ENV === 'DEV') {
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
