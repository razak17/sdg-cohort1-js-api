const fs = require("fs");
const jsonxml = require('jsontoxml');
const path = require('path');

const estimator = require("../estimator/estimator");
const filePath = path.join(__dirname, '../logs/logs.txt');


// @desc Return Estimates in JSON
// @route POST /api/v1/on-covid-19
// @route POST /api/v1/on-covid-19/json
// @access Public
exports.getEstimates = (req, res) => {
  try {
    res.set('Content-Type', 'application/json');
    const data = req.body;
    let estimates;
    estimates = estimator(data);
    res.status(200).json({
      success: true,
      data: estimates
    });
  } catch (error) {
      res.status(400).json({
      success: false,
      message: error
    });
  }
};

// @desc Return Estimates in XML
// @route POST /api/v1/on-covid-19/xml
// @access Public
exports.getEstimatesXml = (req, res) => {
  try {
    res.set('Content-Type', 'application/xml');
    const data = req.body;
    let estimates;
    estimates = jsonxml(estimator(data));
    res.status(200).send(estimates);
  } catch (error) {
      res.status(404).json({
      success: false,
      message: error
    });
  }
};

// @desc Return API Logs
// @route GET /api/v1/on-covid-19/logs
// @access Public
exports.getLogData = (req, res) => {
  try {
    const logData = fs.readFileSync(filePath, 'utf8');
    res.header('Content-Type', 'text/plain; charset=UTF-8');
    res.status(200).send(logData);
  } catch (error) {
      res.status(404).json({
      success: false,
      message: error
    });
  }
};
