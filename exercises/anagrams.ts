const countLetter = (word: string, letter: string) => {
  let counter = 0;
  for (const char of word) {
    if (char === letter) counter++;
  }
  return counter;
};

const isAnagram = (wordA: string, wordB: string) => {
  for (const currentLetter of wordA) {
    const letterCountA = countLetter(wordA, currentLetter);
    const letterCountB = countLetter(wordB, currentLetter);

    if (letterCountA !== letterCountB) return false;
  }

  return true;
};

const wordA = "holaaa";
const wordB = "alaaho";
console.log(isAnagram(wordA, wordB));
