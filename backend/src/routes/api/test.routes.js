import { StatusCodes } from 'http-status-codes';

const testEndpoint = (router) => {
  router.get('/hello', (_req, res) => {
    res.status(StatusCodes.OK).send({ message: 'Hello from the server' });
  });
};

export default testEndpoint;
