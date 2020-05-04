// Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

// Input: 02/20/2020
// Output: ["02", "20", "2020"]

function stringSplitter(str, separator) {

  // base case
  if (str === '') return [];
  const index = str.indexOf(separator);
  if (index === -1) return [str];

  // recursive
  const firstPart = str.slice(0, index);
  const rest = str.slice(index + 1);

  return [ firstPart, ...stringSplitter(rest, separator) ];

}

console.log( stringSplitter('02/20/2020', '/') );
  