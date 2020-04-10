const express = require('express');

const {
  getEstimates,
  getEstimatesXml,
  getLogData,
} = require('../controllers/controller');

const router = express.Router();

router.route('/').post(getEstimates);

router.route('/json').post(getEstimates);

router.route('/xml').post(getEstimatesXml);

router.route('/logs').get(getLogData);

module.exports = router;
