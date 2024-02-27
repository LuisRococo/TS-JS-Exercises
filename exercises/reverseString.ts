/*
Write a function that takes a string as input and returns the string reversed.
For example, if the input is "hello", the output should be "olleh".
*/

const reverseString = (text: string) => {
  let reversedString: string = "";

  for (let i = text.length - 1; i >= 0; i--) {
    const character = text[i];
    reversedString += character;
  }

  return reversedString;
};

console.log(reverseString("!!!ooodnum aloooh"));
