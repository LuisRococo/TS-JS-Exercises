/*
Check for Balanced Parentheses: Write a function that takes a string of parentheses as input and returns true if the parentheses are balanced (every opening parenthesis has a corresponding closing parenthesis),
and false otherwise. For example, if the input is "(())", the output should be true.
*/

const areParenthesesBalanced = (parentheses: string) => {
  const openingParenthesesStack: string[] = [];

  for (const currentChar of parentheses) {
    if (currentChar === "(") {
      openingParenthesesStack.push("(");
    } else {
      const nextOpeningPar = openingParenthesesStack.pop();
      if (!nextOpeningPar) return false;
    }
  }

  return openingParenthesesStack.length === 0;
};

const userInput = "(())";
console.log(areParenthesesBalanced(userInput));
