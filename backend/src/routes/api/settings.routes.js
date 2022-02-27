import { StatusCodes } from 'http-status-codes';

const settingsEndpoint = (router) => {
  router.get('/settings', (_req, res) => {
    res.status(StatusCodes.OK).send({ message: 'Hello from the server' });
  });
};

export default settingsEndpoint;
