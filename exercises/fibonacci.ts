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
