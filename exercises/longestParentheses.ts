const isParenthesesValid = (input: string) => {
  const openParenthesesStack: string[] = [];

  for (const currentChar of input) {
    if (currentChar === "(") {
      openParenthesesStack.push("(");
    } else {
      const lastOpenParentheses = openParenthesesStack.pop();
      if (lastOpenParentheses === undefined) return false;
    }
  }

  return openParenthesesStack.length === 0;
};

const longestValidParentheses = (input: string) => {
  let longestParentheses = "";

  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      const substring = input.slice(i, j + 1);
      const isValid = isParenthesesValid(substring);

      if (!isValid) continue;

      if (substring.length > longestParentheses.length) {
        longestParentheses = substring;
      }
    }
  }

  return longestParentheses;
};

const input = ")()())";
console.log(longestValidParentheses("(()"));
