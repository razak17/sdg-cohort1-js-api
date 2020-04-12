const fs = require("fs");
const jsonxml = require('jsontoxml');

const filePath = "logs.txt";

const estimator = require("../estimator");

exports.getEstimates = (req, res) => {
  res.set('Content-Type', 'application/json');
  const data = req.body;
  let estimates;
  estimates = estimator(data);
  res.status(200).json(estimates);
};

exports.getEstimatesXml = (req, res) => {
  res.set('Content-Type', 'application/xml');
  const data = req.body;
  let estimates;
  estimates = jsonxml(estimator(data));
  res.status(200).send(estimates);
};

exports.getLogData = (req, res) => {
  const logData = fs.readFileSync(filePath);
  res.set('Content-Type', 'text/plain');
  res.status(200).send(logData);
};
