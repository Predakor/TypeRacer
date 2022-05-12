import { useRef, useState } from "react";
import WordList from "./WordList";
import Input from "./Input";
import Clock from "../Clock";
import GameStats from "../GameStats";
import commons from "../../words/common.json";
import classes from "./Board.module.css";

let statsData = {
  keyCount: 0,
  errorCount: 0,
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

function Board() {
  const inputRef = useRef();
  const [index, setIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [activeWords, setActiveWords] = useState([]);
  const [gameEnded, setGameEnded] = useState(false);

  activeWords.length === 0 && generateWords(40, setActiveWords);

  const endGame = () => setGameEnded(true);

  const inputHandler = (text) => {
    text = text.trim();
    let lastChar = text.slice(-1);
    let lastWordChar = activeWords[index].generated.charAt(text.length - 1);

    setUserInput((prevText) => text);
    lastChar !== lastWordChar && statsData.errorCount++;
    statsData.keyCount++;
  };

  function spaceBarHandler() {
    setIndex((prevIndex) => {
      inputRef.current.value = "";
      return prevIndex + 1;
    });
    if (index >= activeWords.length - 1) {
      endGame();
    }
  }

  function backSpaceHandler() {
    setIndex((prevIndex) => {
      if (userInput === "" && index > 0) {
        inputRef.current.value = activeWords[prevIndex - 1].entered;
        return prevIndex - 1;
      }
      return prevIndex;
    });
  }

  return (
    <div className={classes.board}>
      {gameEnded && <GameStats close={setGameEnded} stats={statsData}></GameStats>}
      {/* <Clock time={statsData.clockDuration} onTimerEnd={endGame}></Clock> */}
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
