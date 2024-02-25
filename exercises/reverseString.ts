const reverseString = (text: string) => {
  let reversedString: string = "";

  for (let i = text.length - 1; i >= 0; i--) {
    const character = text[i];
    reversedString += character;
  }

  return reversedString;
};

console.log(reverseString("!!!ooodnum aloooh"));
