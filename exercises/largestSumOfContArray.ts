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
