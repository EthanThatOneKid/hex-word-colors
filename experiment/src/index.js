const validCharacters = new Set("abcdefgilostz".split(""));

const replaceInvalidLettersWithNumbers = (word) => {
  word = word.toLowerCase().split("");
  for (let i = 0; i < word.length; i++) {
    switch (word[i]) {
      case "g":
        word[i] = "9";
        break;
      case "i":
        word[i] = "1";
        break;
      case "l":
        word[i] = "1";
        break;
      case "o":
        word[i] = "0";
        break;
      case "s":
        word[i] = "5";
        break;
      case "t":
        word[i] = "7";
        break;
      case "z":
        word[i] = "2";
        break;
      default:
        if (!validCharacters.has(word[i])) {
          return null;
        }
        break;
    }
  }
  return word.join("");
};

const validateHexNumeral = (word) => {
  if (word.length !== 6 && word.length !== 3) {
    return null;
  }
  const validHexWord = replaceInvalidLettersWithNumbers(word);
  if (validHexWord === null) {
    return null;
  }
  return validHexWord;
};

module.exports = { validateHexNumeral };
