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
