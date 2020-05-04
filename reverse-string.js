// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

function reverseString(str) {
  // base case
  if (str === '') {
    return '';
  }

  // recursive case
  const lastIndex = str.length - 1;
  return str[lastIndex] + reverseString(str.slice(0, lastIndex));
}

// test
console.log( reverseString('cat') );