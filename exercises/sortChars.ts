const sortCharacters = (text: string) => {
  const characters = text.split("");

  for (let i = 0; i < characters.length - 1; i++) {
    for (let j = 0; j < characters.length - i - 1; j++) {
      if (characters[j] > characters[j + 1]) {
        const aux = characters[j];
        characters[j] = characters[j + 1];
        characters[j + 1] = aux;
      }
    }
  }

  return characters.join("");
};

console.log(sortCharacters("zxyucba"));
