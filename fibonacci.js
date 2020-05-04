// expected input: 7
// expected output: 1, 1, 2, 3, 5, 8, 13

function fibonacci(n, seq){
  seq = seq || [1,1];

  // base case
  if (n < seq.length) return seq;

  // recursive case
  return fibonacci(n, [...seq, seq[seq.length - 1] + seq[seq.length - 2]]);
}

console.log(fibonacci(7));