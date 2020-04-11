const fs = require('fs');

const start = new Date();

const logs = (req, res, next) => {
  const logData = `${req.method}\t\t${req.url}\t\t${res.statusCode}\t\t${
    new Date() - start
  } ms`;

  fs.appendFile('logs.txt', `${logData}\n`, () => {});
  next();
};

module.exports = logs;
