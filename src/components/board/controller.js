import styles from "./word/Word.module.css";

let wordIndex = 0;
let letterIndex = 0;
let words = [];
let divs = [];
let userWord = "";

const currentWord = () => words[wordIndex];
const currentLetter = () => currentWord().charAt(letterIndex);
const currentDiv = () => divs[wordIndex];
const currentDivLetter = () => currentDiv().childNodes[letterIndex];

function compare(letter) {
  console.log(letter);
  if (letter === "Backspace") {
    removeLetter();
  } else if (letter === "Enter" || letter === " ") {
    nextWord();
  } else {
    addLetter(letter);
  }

  function removeLetter() {
    if (letterIndex > 0) {
      userWord = userWord.slice(0, -1);
      letterIndex--;
      currentDivLetter().classList.remove(styles.correct, styles.wrong);
    }
  }
  function addLetter(letter) {
    userWord += letter;
    checkLetter(letter);
    if (letter === currentWord().charAt(letterIndex)) {
      checkWord();
    }
    letterIndex++;
  }
}

function checkLetter(letter) {
  let result = letter === currentWord().charAt(letterIndex) ? styles.correct : styles.wrong;
  currentDivLetter().classList.add(result);
}
const checkWord = () => (userWord === currentWord() ? true : false);

function nextWord() {
  if (checkWord()) {
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
function addLetter() {
  divs[wordIndex].classList.add(styles.correct);
}

export { compare, pushWords };
