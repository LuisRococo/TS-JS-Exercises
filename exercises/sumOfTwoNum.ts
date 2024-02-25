/*
Sum of Two Numbers: Write a function that takes an array of integers 
and a target value as input and returns true if there are two numbers in the array 
that add up to the target value, and false otherwise. For example,
if the input is [2, 7, 11, 15] and 9, the output should be true (2 + 7 = 9).
*/

const sumOfTwoNumbers = (list: number[], target: number) => {
  for (let i = 0; i < list.length; i++) {
    const numA = list[i];

    for (let j = i + 1; j < list.length; j++) {
      const numB = list[j];

      if (numA + numB === target) return true;
    }
  }

  return false;
};

const input = [2, 7, 11, 15];
console.log(sumOfTwoNumbers(input, 9));
