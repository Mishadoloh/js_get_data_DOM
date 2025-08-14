/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
'use strict';

const populationElements = document.querySelectorAll('.population');

// eslint-disable-next-line max-len
const population = Array.from(populationElements).map((el) =>
  Number(el.textContent.replace(/,/g, '').trim()));

const totalPopulation = population.reduce((sum, num) => sum + num, 0);

export const averagePopulation = totalPopulation / population.length;

export function formatNumber(num) {
  return num.toLocaleString('en-US');
}

// eslint-disable-next-line max-len
document.querySelector('.total-population').textContent =
  formatNumber(totalPopulation);
