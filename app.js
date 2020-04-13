const express = require('express');
const jsonxml = require('jsontoxml');
const morgan = require('morgan');
const logger = require('./middleware/logger');
const router = require('./routes/router');

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(logger);

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// ROUTES
app.use('/api/v1/on-covid-19', router);

module.exports = app;
