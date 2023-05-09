import wordList from "../../words/common.json";
function generateWords(amount) {
  let words = wordList.common500;
  let generatedWords = [];

  for (let i = 0; i < amount; i++) {
    let random = Math.floor(Math.random() * words.length);
    let word = { generated: words[random], entered: "" };
    generatedWords.push(word);
  }
  return generatedWords;
}

export { generateWords };
