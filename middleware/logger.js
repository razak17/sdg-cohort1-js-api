const path = require('path');
const { getTimeInMilliseconds, saveToFile } =  require('../utils/utils');


const requestLogger = (request, response, next) => {
  const { method, url } = request;
  const { statusCode } = response;
  const startTime = process.hrtime();
  const timeInMS = getTimeInMilliseconds(startTime).toLocaleString();
  const message = `${method}\t\t${url}\t\t${statusCode}\t\t${Math.ceil(
    timeInMS
  )
    .toString()
    .padStart(2, '00')}ms`;
  const filePath = path.join(__dirname, '../logs/logs.txt');

  saveToFile(message, filePath);
  next();
};

module.exports = requestLogger;