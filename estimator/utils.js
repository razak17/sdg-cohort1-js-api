exports.convertToDays = (data) => {
  if (data.periodType === 'months') {
    return data.timeToElapse * 30;
  }
  if (data.periodType === 'weeks') {
    return data.timeToElapse * 7;
  }
  return data.timeToElapse;
};

exports.requestedTime = (data) => {
  if (data.periodType === 'months') {
    return 2 ** Math.trunc((data.timeToElapse * 30) / 3);
  }
  if (data.periodType === 'weeks') {
    return 2 ** Math.trunc((data.timeToElapse * 7) / 3);
  }
  return 2 ** Math.trunc(data.timeToElapse / 3);
};
