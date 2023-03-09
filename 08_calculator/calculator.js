const add = function(...numbers) {
  let total = 0;
  for (let i=0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
};

const subtract = function(...numbers) {
  let total = numbers[0] * 2;
  for (let i=0; i < numbers.length; i++) {
    total = total - numbers[i];
  }
  return total;
};

const sum = function(nums) {
  let total = 0;
  for (let i=0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
};

const multiply = function(nums) {
  let total = 1;
  for (let i=0; i < nums.length; i++) {
    total *= nums[i];
  }
  return total;
};

const power = (num1, num2) => num1**num2;

const factorial = function(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    let total = num;
    let dec = num;
    for (let i=0; i <= num; i++) {
      dec--;
      total *= dec; 
      console.log(total);
      if (dec === 1) break;
    } return total;
  }
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
