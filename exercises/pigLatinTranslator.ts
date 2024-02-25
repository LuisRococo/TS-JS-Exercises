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
