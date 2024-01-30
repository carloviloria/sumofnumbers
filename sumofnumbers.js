const sumFor = function (numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
};

const sumWhile = function (numbers) {
  let sum = 0;
  let i = 0;
  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  return sum;
};

const sumRecursion = function (numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers[0] + sumRecursion(numbers.slice(1, numbers.length));
};

const sumTheSimpleWay = function (numbers) {
  return _.reduce(numbers, function (memo, num) { return memo + num; }, 0);
};

const numbers = [1, 2, 3, 4, 5];
console.log(sumFor(numbers));
console.log(sumWhile(numbers));
console.log(sumRecursion(numbers));
console.log(sumTheSimpleWay(numbers));
