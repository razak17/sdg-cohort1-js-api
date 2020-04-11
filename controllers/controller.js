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
  estimates = estimator(data);
  res.status(200).send(jsonxml(estimates));
};

exports.getLogData = (req, res) => {
  res.set("Content-Type", "text/html");
  const logData = fs.readFileSync(filePath, "utf8");
  res.status(200).send( logData);
};
