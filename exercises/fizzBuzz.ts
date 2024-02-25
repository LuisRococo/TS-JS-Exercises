const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) console.log("Fizz");
    if (i % 5 === 0) console.log("Buzz");
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
  }
};

const fizzBuzzII = () => {
  for (let i = 1; i <= 100; i++) {
    let result = "";

    if (i % 3 === 0) result += "Fizz";
    if (i % 5 === 0) result += "Buzz";

    if (result.length !== 0) console.log(result);
  }
};

console.log("FizzBuzz UWU");
fizzBuzzII();
