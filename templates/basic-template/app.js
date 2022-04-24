const express = require('express'); // FRAMEWORK
const compression = require('compression'); // MIDDLEWARES
const helmet = require('helmet');
const {
  app: { port },
} = require('./config/config'); // CONFIG

const listenMessage = `Listening on port ${port}...`;

const app = express();

// ROUTES
const routeFirst = require('./routes/routeFirst');

// MIDDLEWARES ACTIVACTION
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.get('/', (req, res) => res.status(200).send('Node Web Service'));
app.use('/api/first', routeFirst);

// eslint-disable-next-line no-console
const server = app.listen(port, () => console.log(listenMessage));

module.exports = server;
