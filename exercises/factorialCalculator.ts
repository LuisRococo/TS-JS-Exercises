const calculateFactorial = (number: number): number => {
  if (number === 0) return 0;
  if (number === 1) return 1;

  return number * calculateFactorial(number - 1);
};

console.log(calculateFactorial(5));
