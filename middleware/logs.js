const fs = require('fs');

const start = new Date();

const logs = (req, res, next) => {
  let logData = [];
  logData.push(`"${req.method}\t\t${req.url}\t\t${res.statusCode}\t\t${
        new Date() - start
      } ms",`);

  fs.appendFile('logs.json', `${logData}\n`, () => {});
  next();
};

module.exports = logs;
