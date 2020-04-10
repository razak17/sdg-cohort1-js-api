const convertToDays = (data) => {
  if (data.periodType === 'months') {
    return data.timeToElapse * 30;
  }
  if (data.periodType === 'weeks') {
    return data.timeToElapse * 7;
  }
  return data.timeToElapse;
};

const requestedTime = (data) => {
  if (data.periodType === 'months') {
    return 2 ** Math.trunc((data.timeToElapse * 30) / 3);
  }
  if (data.periodType === 'weeks') {
    return 2 ** Math.trunc((data.timeToElapse * 7) / 3);
  }
  return 2 ** Math.trunc(data.timeToElapse / 3);
};

exports.impactEstimates = (data) => {
  const currentlyInfected = data.reportedCases * 10;
  const infectionsByRequestedTime = currentlyInfected * requestedTime(data);

  const severeCasesByRequestedTime = infectionsByRequestedTime * 0.15;
  const availableBeds = data.totalHospitalBeds * 0.35;
  const hospitalBedsByRequestedTime = Math.ceil(availableBeds - severeCasesByRequestedTime);

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
  const currentlyInfected = data.reportedCases * 50;
  const infectionsByRequestedTime = currentlyInfected * requestedTime(data);

  const severeCasesByRequestedTime = infectionsByRequestedTime * 0.15;
  const availableBeds = data.totalHospitalBeds * 0.35;
  const hospitalBedsByRequestedTime = Math.ceil(availableBeds - severeCasesByRequestedTime);

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