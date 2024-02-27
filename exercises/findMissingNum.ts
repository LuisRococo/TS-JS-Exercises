/*
Write a function that takes an array of integers as input and returns the missing number in the sequence. 
The input array will contain all the integers from 1 to n, except for one. For example,
if the input is [1, 2, 4, 5], the output should be 3.
*/

const findMissingNumber = (numbers: number[]) => {
  if (numbers.length < 2)
    throw Error("The array should have at least 2 numbers");

  numbers = numbers.sort();

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    if (i < numbers.length - 1) {
      const nextNumberInList = numbers[i + 1];
      if (nextNumberInList !== currentNumber + 1) return currentNumber + 1;
    }
  }

  return null;
};

const numbers = [1, 2, 4, 5];
console.log(findMissingNumber(numbers));
