const numbers = require('./numbers');

const total = numbers.addNumbers(10, 5);

const bigSum = numbers.multiplyNumbers(43, 632);

const evenBigger = numbers.multiplyByTen(bigSum);

console.log({ total, bigSum, evenBigger });

console.log('done');