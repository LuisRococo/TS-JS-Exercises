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
