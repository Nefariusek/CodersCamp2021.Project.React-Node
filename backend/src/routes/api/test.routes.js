import { StatusCodes } from 'http-status-codes';

const testEndpoint = (router) => {
  router.get('/hello', (_req, res) => {
    res.status(StatusCodes.OK).send({ message: 'Hello from the server' });
  });
  router.delete('/hello', (_req, res) => {
    res.status(StatusCodes.OK).send();
    console.log('delete request!');
  });
  router.post('/hello', (_req, res) => {
    res.status(StatusCodes.OK).send({ message: 'Post request' });
  });
};

export default testEndpoint;
