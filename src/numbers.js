const addNumbers = (x, y) => {
  return x + y;
}

const multiplyNumbers = (x, y) => {
  return x * y;
}

const multiplyByTen = x => {
  return multiplyNumbers(x, 10);
}

const addTen = x => {
  let total = x;
  total = total + 1;
  total = total + 1;
  total = total + 1;
  total = total + 1;
  total = total + 1;
  total = total + 1;
  total = total + 1;
  total = total + 1;
  total = total + 1;
  total = total + 1;
  return total;
}

const addTenV2 = x => {
  let total = x;
  for (let i = 0; i < 10; i++) {
    total += 1;
  }
  return total;
}

module.exports = {
  addNumbers,
  multiplyNumbers,
  multiplyByTen,
  addTen,
  addTenV2
}