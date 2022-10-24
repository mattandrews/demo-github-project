const addNumbers = (x, y) => {
  return x + y;
}

const multiplyNumbers = (x, y) => {
  return x * y;
}

const multiplyByTen = x => {
  return x * 10;
}

const roundNumber = x => {
  return Math.floor(x);
}

const randomNumber = () => {
  // return Math.floor(Math.random() * (max - min + 1) + min)
  return 42;
}

module.exports = {
  addNumbers,
  multiplyNumbers,
  multiplyByTen,
  roundNumber,
  randomNumber
}