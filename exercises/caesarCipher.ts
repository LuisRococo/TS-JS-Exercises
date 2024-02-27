/*
Caesar Cipher: Write a function that takes a string and a number (the shift) as input and returns the string with each letter shifted by the specified number.
For example, if the input is "hello" and 3, the output should be "khoor" (each letter is shifted 3 positions in the alphabet).
*/

const caesarCipher = (word: string, shift: number) => {
  let result = "";

  for (const currentChar of word) {
    const newCodeChar = currentChar.charCodeAt(0) + shift;
    result += String.fromCharCode(newCodeChar);
  }

  return result;
};

console.log(caesarCipher("hello", 3));
console.log(caesarCipher("khoor", -3));
