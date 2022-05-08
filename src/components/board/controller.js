import styles from "./word/Word.module.css";

let words = [];
let divs = [];
let wordIndex = 0;
let letterIndex = 0;
let wordToMatch = "";

function compare(text) {
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) === wordToMatch.charAt(i)) {
      console.log("it does");
    }
  }
}

function wordsToString(words) {
  console.log(words);
}

function pushWords(generatedWords) {
  words = [...generatedWords];
  wordIndex = 0;
  letterIndex = 0;
  divs = document.getElementsByClassName(styles.word);
  for (let word of divs) {
    let previous = word.previousElementSibling;
    if (previous && word.offsetLeft < previous.offsetLeft) {
      previous.classList.add("end");
    }
  }
}

export { compare, pushWords };
