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
