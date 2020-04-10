const express = require('express');
const jsonxml = require('jsontoxml');
const morgan = require('morgan');
const logs = require('./middleware/logs');
const router = require('./routes/router');
const logManager = require('./logManager');

logManager();
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(logs);
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// ROUTES
app.use('/api/v1/on-covid-19', router);

module.exports = app;
