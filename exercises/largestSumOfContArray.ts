/*
Largest Sum of Contiguous Subarray: Write a function that takes an array of integers as input and returns the largest sum of a contiguous subarray.
For example, if the input is [-2, 1, -3, 4, -1, 2, 1, -5, 4], the output should be 6 (the subarray [4, -1, 2, 1] has the largest sum of 6).
*/

const largestSum = (numbers: number[]) => {
  let largestSum = 0;

  for (let i = 0; i < numbers.length; i++) {
    const numA = numbers[i];
    let sum = numA;

    for (let j = i + 1; j < numbers.length; j++) {
      const numB = numbers[j];
      sum += numB;

      if (sum > largestSum) {
        largestSum = sum;
      }
    }
  }

  return largestSum;
};

const values = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(largestSum(values));
