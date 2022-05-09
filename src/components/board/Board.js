import { useState } from "react";
import commons from "../../words/common.json";
import classes from "./Board.module.css";
import WordList from "./WordList";
import Input from "./Input";
import Clock from "../Clock";

let keyCount = 0;
let correctCount = 0;
let wrongCount = 0;
let clockDuration = 30;

function generateWords(amount, func) {
  let words = commons["common500"];
  let generatedWords = [];

  for (let i = 0; i < amount; i++) {
    let random = Math.floor(Math.random() * words.length);
    let word = { word: words[random], userWord: "" };
    generatedWords.push(word);
  }
  func(generatedWords);
}
function endGame() {
  let wpm = keyCount / 4.7;
  if (clockDuration < 60) {
    wpm *= 60 / clockDuration;
  } else if (clockDuration > 60) {
    wpm /= clockDuration / 60;
  }
  console.log(wpm);
}

function Board() {
  const [activeWords, setActiveWords] = useState([]);
  const [index, setIndex] = useState(0);
  activeWords.length === 0 && generateWords(40, setActiveWords);

  function inputHandler(text) {
    let lastChar = text.slice(-1);
    let word = activeWords[index]["word"];
    if (lastChar === " ") {
      if (text.trim() === word) {
        setIndex((prevState) => prevState + 1);
        if (index === activeWords.length - 1) endGame();
      }
    } else {
      keyCount++;
      lastChar === word.charAt(text.length - 1) ? correctCount++ : wrongCount++;

      setActiveWords((prevState) => {
        prevState[index]["userWord"] = text;
        return [...prevState];
      });
    }
  }

  return (
    <>
      <Clock time={clockDuration} onTimerEnd={endGame}></Clock>
      <Input onInput={inputHandler}></Input>
      <div className={classes.board}>
        <WordList class={classes.Board} words={activeWords} />
      </div>
    </>
  );
}
export default Board;
