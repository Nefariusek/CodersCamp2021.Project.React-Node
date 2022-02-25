import env from '../../constants/env';

const urlBuilder = () => {
  let url = 'mongodb://';
  switch (env.NODE_ENV) {
    case 'production':
      url += env.DB_USER + ':' + env.DB_PASS + '@' + env.DB_HOST + ':' + env.DB_PORT + '/' + env.DB_NAME;
      break;
    case 'development':
      url += env.DB_USER + ':' + env.DB_PASS + '@' + env.DB_HOST_DEV + ':' + env.DB_PORT_DEV + '/' + env.DB_NAME_DEV;
      break;
    case 'test':
      url += env.DB_USER + ':' + env.DB_PASS + '@' + env.DB_HOST_TEST + ':' + env.DB_PORT_TEST + '/' + env.DB_NAME_TEST;
      break;
  }
  return url;
};

export default urlBuilder;
