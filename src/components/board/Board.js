import { useState } from "react";
import commons from "../../words/common.json";
import classes from "./Board.module.css";
import WordList from "./WordList";
import Input from "./Input";
import Clock from "../Clock";

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

function Board() {
  const [activeWords, setActiveWords] = useState([]);
  const [index, setIndex] = useState(0);
  activeWords.length === 0 && generateWords(5, setActiveWords);

  function inputHandler(text) {
    let lastChar = text.charAt(text.length - 1);
    if (lastChar === " ") {
      if (text.trim() === activeWords[index]["word"]) {
        setIndex((prevState) => prevState + 1);
        if (index > activeWords.length) {
          console.log("You won");
        }
      }
    } else {
      setActiveWords((prevState) => {
        prevState[index]["userWord"] = text;
        return [...prevState];
      });
    }
  }

  return (
    <>
      <Clock time={5} onTimerEnd={() => console.log("timerEnded")}></Clock>
      <Input onInput={inputHandler}></Input>
      <div className={classes.board}>
        <WordList class={classes.Board} words={activeWords} />
      </div>
    </>
  );
}
export default Board;
