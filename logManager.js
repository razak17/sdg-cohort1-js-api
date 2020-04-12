const fs = require('fs');

const filePath = 'logs.txt';

const logManager = () => {
  fs.access(filePath, (error) => {
    if (!error) {
      fs.unlink(filePath, () => {
        fs.writeFileSync(filePath, '');
      });
    }
  });
};

module.exports = logManager;
