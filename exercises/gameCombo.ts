const combos = {
  kick: "edft",
  punch: "cccg",
  headbutt: "hrtyu",
};

const gameComboDetector = (input: string) => {
  const comboList = Object.entries(combos);

  for (const combo of comboList) {
    if (input.includes(combo[1])) {
      return combo[0];
    }
  }

  return null;
};

console.log(gameComboDetector("oiefedftgwieof"));
