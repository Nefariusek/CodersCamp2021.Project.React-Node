import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import env from './constants/env.js';
import routes from './routes/index.js';
import { getCorsOptions } from './config/components/cors.js';
import ExpressError from './middlewares/ExpressError.js';

const app = express();

//setup CORS
const corsOptions = getCorsOptions();
app.use(cors(corsOptions));

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// serving client files in production
if (env.NODE_ENV === 'PROD') {
  app.use(express.static('public'));
}

// gzip compression
app.use(compression());
console.log('test');
// api routes
app.use('/api', routes);
// non valid routes
app.all('*', (req, res, next) => {
  next(new ExpressError('Page Not Found', 404));
});
app.use((err, _req, res, _next) => {
  const { statusCode = 500, message = 'something went wrong' } = err;
  res.status(statusCode).send(message);
});

export default app;
