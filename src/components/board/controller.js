import styles from "./word/Word.module.css";

let words = [];
let divs = [];
let wordIndex = 0;
let letterIndex = 0;
let userWord = "";

const currentWord = () => words[wordIndex];
const currentDiv = () => divs[wordIndex];
const currentLetter = () => currentWord().charAt(letterIndex);
const currentDivLetter = () => currentDiv().childNodes[letterIndex];

function compare(activeKeys) {
  if (activeKeys.length === 1) {
    let letter = activeKeys[0];
    if (letter.length === 1) {
      let isLetter = letter.length === 1 && letter.toUpperCase() !== letter.toLowerCase();

      if (isLetter) {
        addLetter(letter);
      } else {
        switch (letter) {
          case "Backspace":
            removeLetter();
            break;
          case " ":
            nextWord();
            break;
          default:
            break;
        }
      }
    }
  } else {
    if (activeKeys.length === 2) {
      if (activeKeys.includes("Backspace") && activeKeys.includes("Control")) {
        removeWord();
      }
    }
  }

  function removeLetter() {
    if (letterIndex > 0) {
      userWord = userWord.slice(0, -1);
      letterIndex--;
      if (letterIndex < currentWord().length)
        currentDivLetter().classList.remove(styles.correct, styles.wrong);
    }
  }
  function removeWord() {
    userWord = "";
    letterIndex = 0;
  }
  function addLetter(letter) {
    userWord += letter;
    checkLetter(letter);
    letterIndex++;
  }
}

function checkLetter(letter) {
  if (letterIndex < currentWord().length) {
    let result = letter === currentLetter() ? styles.correct : styles.wrong;
    currentDivLetter().classList.add(result);
  }
}

function nextWord() {
  console.log(`${currentWord()} ${userWord}`);
  if (userWord === currentWord()) {
    userWord = "";
    letterIndex = 0;
    wordIndex++;
  }
}

function addLetter() {
  divs[wordIndex].classList.add(styles.correct);
}

function pushWords(generatedWords) {
  words = [...generatedWords];
  wordIndex = 0;
  letterIndex = 0;
  divs = document.getElementsByClassName(styles.word);
  for (let word of divs) {
    console.log(getComputedStyle(word).top);
  }
}

export { compare, pushWords };
