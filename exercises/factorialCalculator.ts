/*
Write a function that takes an integer as input and returns the factorial of that integer.
The factorial of a number is the product of all positive integers less than or equal to that number. For example,
if the input is 5, the output should be 120 (5 * 4 * 3 * 2 * 1 = 120).
*/

const calculateFactorial = (number: number): number => {
  if (number === 0) return 0;
  if (number === 1) return 1;

  return number * calculateFactorial(number - 1);
};

console.log(calculateFactorial(5));
