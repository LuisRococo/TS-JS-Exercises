/*
Write a function that takes two strings as input and returns true if the two strings are anagrams (contain the same letters in a different order),
and false otherwise. For example, if the input is "listen" and "silent", the output should be true.
*/

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
