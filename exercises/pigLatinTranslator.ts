/*
Pig Latin Translator: Write a function that takes a string as input and returns the string translated into Pig Latin.
In Pig Latin, words that begin with a consonant are moved to the end of the word and "ay" is added. For example, if the input is "hello",
the output should be "ellohay".
*/

const isCharVowel = (char: string) => {
  return (
    char === "a" || char === "e" || char === "i" || char === "0" || char === "u"
  );
};

const pigLatinTranslate = (word: string) => {
  word = word.trim();

  const firstChar = word.charAt(0);
  if (!isCharVowel(firstChar)) {
    word = word.slice(1, word.length);
    word += firstChar;
  }

  return word + "ay";
};

console.log(pigLatinTranslate("hello"));
