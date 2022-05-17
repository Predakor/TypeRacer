import { useRef, useState } from "react";
import Input from "./Input";
import Clock from "../Utils/Clock";
import WordList from "./WordList";
import GameStats from "../GameStats";
import { generateWords } from "../Utils/wordGenerator";
import { getCurrentTime } from "../Utils/time";
import classes from "./Board.module.css";

let statsData = {
  keyCount: 0,
  errorCount: 0,
  clockDuration: 60,
  timePassed: 0,
};

function Board() {
  const inputRef = useRef();
  const [index, setIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [activeWords, setActiveWords] = useState([]);
  const [gameEnded, setGameEnded] = useState(false);

  console.log(generateWords);
  activeWords.length === 0 && setActiveWords(generateWords(50));

  const endGame = () => {
    setGameEnded(true);
    statsData.timePassed = getCurrentTime();
  };

  function inputHandler(text) {
    text = text.trim();
    let lastChar = text.slice(-1);
    let lastWordChar = activeWords[index].generated.charAt(text.length - 1);

    setUserInput(text);
    lastChar !== lastWordChar && statsData.errorCount++;
    statsData.keyCount++;
  }

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
