/* eslint-disable no-unused-vars */
'use strict';

const { formatNumber, averagePopulation } = require('./main');

// write your code here
// eslint-disable-next-line max-len
document.querySelector('.average-population').textContent = formatNumber(
  Math.round(averagePopulation),
);
