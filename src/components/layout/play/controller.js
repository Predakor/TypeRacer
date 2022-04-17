let wordIndex = 0;
let letterIndex = 0;
let words = [];
let userWord = "";

function currentWord() {
  return words[wordIndex];
}

function compare(letter) {
  if (letter === "Backspace") {
    letterIndex--;
  }
  if (true) {
    //add shortcut check

    userWord += letter;
    if (letter === currentWord().charAt(letterIndex)) {
      console.log(12);
    }
    letterIndex++;
  }
}

function checkWord() {
  if (userWord === currentWord) {
    nextWord();
  } else {
    console.log("Not correct");
  }
}

function nextWord() {
  userWord = "";
  letterIndex = 0;
  nextWord++;
  console.log("Jackpot");
}

function pushWords(generatedWords) {
  words = [...generatedWords];
  wordIndex = 0;
}

export { compare, pushWords };
