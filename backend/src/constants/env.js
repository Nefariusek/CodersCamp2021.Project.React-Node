import dotenv from 'dotenv';
import Joi from 'joi';

dotenv.config();

const schema = Joi.object().keys({
  NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
  PORT: Joi.number().required(),

  DB_USER_PROD: Joi.string().required(),
  DB_PASS_PROD: Joi.string().required(),
  DB_HOST_PROD: Joi.string().required(),
  DB_PORT_PROD: Joi.string().required(),
  DB_NAME_PROD: Joi.string().required(),

  DB_USER_DEV: Joi.string().allow(''),
  DB_PASS_DEV: Joi.string().allow(''),
  DB_HOST_DEV: Joi.string().required(),
  DB_PORT_DEV: Joi.string().required(),
  DB_NAME_DEV: Joi.string().required(),

  DB_USER_TEST: Joi.string().required(),
  DB_PASS_TEST: Joi.string().required(),
  DB_HOST_TEST: Joi.string().required(),
  DB_PORT_TEST: Joi.string().required(),
  DB_NAME_TEST: Joi.string().required(),
});

const { value: envVars, error } = schema.validate(process.env, { stripUnknown: true, convert: true });

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const env = {
  NODE_ENV: envVars.NODE_ENV,
  PORT: envVars.PORT,

  DB_USER_production: envVars.DB_USER_PROD,
  DB_PASS_production: envVars.DB_PASS_PROD,
  DB_HOST_production: envVars.DB_HOST_PROD,
  DB_PORT_production: envVars.DB_PORT_PROD,
  DB_NAME_production: envVars.DB_NAME_PROD,

  DB_USER_development: envVars.DB_USER_DEV,
  DB_PASS_development: envVars.DB_PASS_DEV,
  DB_HOST_development: envVars.DB_HOST_DEV,
  DB_PORT_development: envVars.DB_PORT_DEV,
  DB_NAME_development: envVars.DB_NAME_DEV,

  DB_USER_test: envVars.DB_USER_TEST,
  DB_PASS_test: envVars.DB_PASS_TEST,
  DB_HOST_test: envVars.DB_HOST_TEST,
  DB_PORT_test: envVars.DB_PORT_TEST,
  DB_NAME_test: envVars.DB_NAME_TEST,
};

export default env;
