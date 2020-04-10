const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

const PORT = process.env.PORT || 5010;

app.listen(PORT, () => {
  console.log(`[CONNECTED] sever running in ${process.env.NODE_ENV} on port ${PORT}`);
});
