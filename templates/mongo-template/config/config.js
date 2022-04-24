/* istanbul ignore file */
require('dotenv').config();

const config = {
  app: {
    port: process.env.WEB_SERVICE_PORT || 3000,
    auth: `Bearer ${process.env.HASH_AUTH}`,
  },
  db: {
    uri: process.env.MONGO_DB_URI,
    options: {
      useUnifiedTopology: true,
      autoIndex: false,
      autoCreate: true,
    },
  },
  redis: {
    redisUri: process.env.REDIS_URI,
    time: 120,
  },
  numCPUs: require('os').cpus().length,
};

module.exports = config;
