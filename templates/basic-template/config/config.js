/* istanbul ignore file */
require('dotenv').config();

const config = {
  app: {
    port: process.env.WEB_SERVICE_PORT || 3000,
    auth: `Bearer ${process.env.HASH_AUTH}`,
  },
  numCPUs: require('os').cpus().length,
};

module.exports = config;
