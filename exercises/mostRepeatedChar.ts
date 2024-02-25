const mostRepeatedChar = (text: string) => {
  const characterCount: { [key: string]: number } = {};

  for (const char of text) {
    if (characterCount[char]) {
      characterCount[char]++;
    } else {
      characterCount[char] = 1;
    }
  }

  const mostRepeatedChar: { char: null | string; count: number } = {
    char: null,
    count: 0,
  };

  const characterCountList = Object.entries(characterCount);

  for (const charCount of characterCountList) {
    const currentChar = charCount[0];
    const currentCount = charCount[1];

    if (characterCount[currentChar] > mostRepeatedChar.count) {
      mostRepeatedChar.char = currentChar;
      mostRepeatedChar.count = currentCount;
    }
  }

  return mostRepeatedChar.char;
};

console.log(mostRepeatedChar("hellooooo world"));
