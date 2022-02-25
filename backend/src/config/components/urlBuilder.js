import env from '../../constants/env';

const getValueByEnviroment = () => {
  const enviroment = env.NODE_ENV;
  const config = {};

  config.username = env[`DB_USER_${enviroment}`];
  config.password = env[`DB_PASS_${enviroment}`];
  config.host = env[`DB_HOST_${enviroment}`];
  config.port = env[`DB_PORT_${enviroment}`];
  config.name = env[`DB_NAME_${enviroment}`];

  return config;
};

const urlBuilder = () => {
  const config = getValueByEnviroment();

  const url =
    config.username && config.password
      ? 'mongodb://' +
        config.username +
        ':' +
        config.password +
        '@' +
        config.host +
        ':' +
        config.port +
        '/' +
        config.name
      : 'mongodb://' + config.host + ':' + config.port + '/' + config.name;

  return url;
};

export default urlBuilder;
