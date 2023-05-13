import { common500 as words } from "@utils/words/common.json";
import { Word } from "types/types";

function generateWords(amount: number) {
  const generatedWords = new Array<Word>(amount);

  const wordsLength = words.length;
  for (let i = 0; i < amount; i++) {
    const random = Math.floor(Math.random() * wordsLength);
    const word = { generated: words[random], entered: "" };
    generatedWords[i] = word;
  }
  return generatedWords;
}

export { generateWords };
