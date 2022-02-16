// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */

const config = {
  verbose: true,
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  testEnvironment: 'jest-environment-node',
  transform: {},
};

export default config;
