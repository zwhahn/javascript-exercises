const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
  return a-b;
};

const sum = function(array) {
  return array.reduce((accumulator, current) => 
    accumulator + current, 0);
};

const multiply = function(array) {
  return array.reduce((accumulator, current) => 
    accumulator * current, 1);
};

const power = function(base, power) {
  return base ** power;
};

const factorial = function(num) {
  let sum = 1;
  if (num === 0){
    return sum = 1;
  }
  for (i = num; i > 0; i--){
    sum = sum * i;
  }
  return sum
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
