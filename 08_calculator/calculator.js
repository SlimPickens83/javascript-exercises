const add = function(x, y) {
  let result = x + y;
  return result;
	
};

const subtract = function(x, y) {
	let result = x - y;
  return result;
};

const sum = function(x) {
  let lengthCount = x.length - 1;
  let count = 0;
  let result = 0;

  for(i = 0; i < lengthCount; i++) {
    result += x.count;
    count++;
  }

  return result;
	
};

const multiply = function(x, y) {
  let result = x * y;
  return result;
};

const power = function(x, y) {
	let result = x ** y;
  return result;
};

const factorial = function(x) {
	let result = x;

  if (x === 0 || x === 1) {
    return 1;
  }

  while (x > 1) {
    x--;
    result *= x;
  }

  return result;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
