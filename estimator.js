const {
  impactEstimates,
  severeImpactEstimates
} = require('./utils/handler')

const covid19ImpactEstimator = (data) => ({
  data,
  impact: impactEstimates(data),
  severeImpact: severeImpactEstimates(data)
});

module.exports = covid19ImpactEstimator;