/*
Find the Longest Word: Write a function that takes a string as input and returns the length of the longest word in the string. 
For example, if the input is "The quick brown fox jumps over the lazy dog",
the output should be 5 (the longest word is "jumps").
*/

const longestWord = (words: string[]) => {
  const longestWord: { word: string | null; length: number } = {
    word: null,
    length: 0,
  };

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord.word = word;
      longestWord.length = word.length;
    }
  }

  return longestWord.word;
};

console.log(longestWord(["hola", "como estas?", "requiero salir"]));
