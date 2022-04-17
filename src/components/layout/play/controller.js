import styles from "./Play.module.css";

let wordIndex = 0;
let letterIndex = 0;
let words = [];
let divs = [];
let userWord = "";

function currentWord() {
  return words[wordIndex];
}

function compare(letter) {
  if (letter === "Backspace") {
    if (letterIndex > 0) {
      userWord = userWord.slice(0, -1);
      letterIndex--;
    }
  } else if (letter === "Enter") {
    nextWord();
  } else {
    userWord += letter;
    if (letter === currentWord().charAt(letterIndex)) {
      checkWord();
    }
    letterIndex++;
  }
}

function checkWord() {
  if (userWord === currentWord()) {
    return true;
  }
  return false;
}

function nextWord() {
  if (checkWord()) {
    divs[wordIndex].classList.add(styles.correct);
    userWord = "";
    letterIndex = 0;
    wordIndex++;
  }
}

function pushWords(generatedWords) {
  words = [...generatedWords];
  wordIndex = 0;
  letterIndex = 0;
  divs = document.getElementsByClassName(styles.word);
}

export { compare, pushWords };
