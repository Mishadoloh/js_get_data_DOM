/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
'use strict';
const { populations } = require("./main");

export const totalPopulation = populations.reduce((acc, curr) => acc + curr, 0);
