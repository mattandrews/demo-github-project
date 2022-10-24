const addNumbers = (x, y) => {
  return x + y;
}

const multiplyNumbers = (x, y) => {
  return x * y;
}

const multiplyByTen = x => {
  return multiplyNumbers(x, 10);
}

module.exports = {
  addNumbers,
  multiplyNumbers,
  multiplyByTen
}