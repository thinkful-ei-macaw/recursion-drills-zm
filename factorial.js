// Write a recursive function that finds the factorial of a given number.
// The factorial of a number can be found by multiplying that number by each number between itself and 1.
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function factorial(number) {

  // base case
  if (number === 0) return 0;
  if (number === 1) return 1;

  // recursive case
  return number * factorial(number - 1);

}

// test
console.log(factorial(5)); // => 120