import { useRef, useState } from "react";
import WordList from "./WordList";
import Input from "./Input";
import Clock from "../Clock";
import GameStats from "../GameStats";
import commons from "../../words/common.json";
import classes from "./Board.module.css";
let statsData = {
  keyCount: 0,
  wrongCount: 0,
  clockDuration: 5,
};

function generateWords(amount, func) {
  let words = commons["common500"];
  let generatedWords = [];

  for (let i = 0; i < amount; i++) {
    let random = Math.floor(Math.random() * words.length);
    let word = { generated: words[random], entered: "" };
    generatedWords.push(word);
  }
  func(generatedWords);
}

const endGame = () => <GameStats stats={statsData}></GameStats>;

function Board() {
  const inputRef = useRef();
  const [userInput, setUserInput] = useState("");
  const [index, setIndex] = useState(0);
  const [activeWords, setActiveWords] = useState([]);
  activeWords.length === 0 && generateWords(40, setActiveWords);

  const inputHandler = (text) => {
    setUserInput((prevText) => {
      if (text.slice(-1) === " ") return text;
      else return text.trim();
    });
  };

  function spaceBarHandler() {
    setIndex((prevIndex) => {
      inputRef.current.value = "";
      return prevIndex + 1;
    });
  }
  function backSpaceHandler() {
    setIndex((prevIndex) => {
      if (userInput === "" && index > 0) {
        inputRef.current.value = activeWords[prevIndex - 1].generated;
        return prevIndex - 1;
      }
      return prevIndex;
    });
  }

  return (
    <div className={classes.board}>
      <Clock time={statsData.clockDuration} onTimerEnd={endGame}></Clock>
      <Input
        onInput={inputHandler}
        onSpaceBar={spaceBarHandler}
        onBackSpace={backSpaceHandler}
        ref={inputRef}
      />
      <WordList words={activeWords} currentIndex={index} userInput={userInput} />
    </div>
  );
}
export default Board;
