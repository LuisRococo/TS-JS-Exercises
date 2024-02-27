/*
Write a function that takes a string as input and returns true if the string is a palindrome (reads the same forwards and backwards), 
and false otherwise. For example, if the input is "racecar", the output should be true.
*/

const isPalindromeRecursive = (word: string): boolean => {
  console.log(word);

  if (word.length === 1) return true;
  if (word.length === 0) return false;

  const firstChar = word.charAt(0);
  const lastChar = word.charAt(word.length - 1);

  if (firstChar !== lastChar) return false;

  const newPortion = word.slice(1, word.length - 1);

  if (newPortion.length === 0) return true;

  return isPalindromeRecursive(newPortion);
};

console.log(isPalindromeRecursive("asdxdsa"));
