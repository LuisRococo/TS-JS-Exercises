/*
Write a function that takes an integer n as input and returns the nth number in the Fibonacci sequence.
The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones,
starting with 0 and 1. For example, if the input is 5, the output should be 5 (0, 1, 1, 2, 3, 5).
*/

const fibonacciSequence = (position: number) => {
  let a = 0;
  let b = 1;
  let c = null;

  if (position < 1) return null;
  if (position === 1) return 0;
  if (position === 2) return 1;

  let currentPos = 2;
  while (currentPos < position) {
    c = a + b;
    a = b;
    b = c;
    currentPos++;
  }

  return c;
};

console.log(fibonacciSequence(6));
