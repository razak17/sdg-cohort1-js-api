const {
  convertToDays,
  requestedTime
} = require('./utils');

exports.impactEstimates = (data) => {
  // Challenge 1
  const currentlyInfected = data.reportedCases * 10;
  const infectionsByRequestedTime = currentlyInfected * requestedTime(data);

  // Challenge 2
  const severeCasesByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.15);
  const availableBeds = data.totalHospitalBeds * 0.35;
  const hospitalBedsByRequestedTime = Math.trunc(availableBeds - severeCasesByRequestedTime);

  // Challenge 3
  const casesForICUByRequestedTimeRaw = infectionsByRequestedTime * 0.05;
  const casesForVentilatorsByRequestedTimeRaw = infectionsByRequestedTime * 0.02;
  const initial = data.region.avgDailyIncomeInUSD * data.region.avgDailyIncomePopulation;
  const dollarsInFlightRaw = (infectionsByRequestedTime * initial) / convertToDays(data);

  const casesForICUByRequestedTime = Math.trunc(casesForICUByRequestedTimeRaw);
  const casesForVentilatorsByRequestedTime = Math.trunc(casesForVentilatorsByRequestedTimeRaw);
  const dollarsInFlight = Math.trunc(dollarsInFlightRaw);

  return {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
    casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
  };
};

exports.severeImpactEstimates = (data) => {
  // Challenge 1
  const currentlyInfected = data.reportedCases * 50;
  const infectionsByRequestedTime = currentlyInfected * requestedTime(data);

  // Challenge 2
  const severeCasesByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.15);
  const availableBeds = data.totalHospitalBeds * 0.35;
  const hospitalBedsByRequestedTime = Math.trunc(availableBeds - severeCasesByRequestedTime);

  // Challenge 3
  const casesForICUByRequestedTimeRaw = infectionsByRequestedTime * 0.05;
  const casesForVentilatorsByRequestedTimeRaw = infectionsByRequestedTime * 0.02;
  const initial = data.region.avgDailyIncomeInUSD * data.region.avgDailyIncomePopulation;
  const dollarsInFlightRaw = (infectionsByRequestedTime * initial) / convertToDays(data);

  const casesForICUByRequestedTime = Math.trunc(casesForICUByRequestedTimeRaw);
  const casesForVentilatorsByRequestedTime = Math.trunc(casesForVentilatorsByRequestedTimeRaw);
  const dollarsInFlight = Math.trunc(dollarsInFlightRaw);

  return {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
    casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
  };
};
