const {
  impactEstimates,
  severeImpactEstimates
} = require('./utils/handlers');

const covid19ImpactEstimator = (data) => ({
  data,
  impact: impactEstimates(data),
  severeImpact: severeImpactEstimates(data)
});

module.exports = covid19ImpactEstimator;