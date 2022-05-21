import { useRef, useState } from "react";
import Input from "./Input";
import Clock from "../Clock";
import WordList from "./WordList";
import GameStats from "../GameStats";
import PauseScreen from "../PauseScreen";
import ControlButtons from "../controlButtons/ControlButtons";
import { generateWords } from "../Utils/wordGenerator";
import { stopTimer, resumeTimer, getCurrentTime, restartTimer } from "../Clock";
import classes from "./Board.module.css";

let statsData = {
  keyCount: 0,
  errorCount: 0,
  timePassed: 0,
  clear() {
    statsData.keyCount = 0;
    statsData.errorCount = 0;
    statsData.timePassed = 0;
  },
};
let gameSettings = {
  mode: "time",
  time: 60,
  wordCount: 50,
};

function Board() {
  const inputRef = useRef();
  const [index, setIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [activeWords, setActiveWords] = useState([]);
  const [gameEnded, setGameEnded] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  activeWords.length === 0 && setActiveWords(generateWords(gameSettings.wordCount));

  const gameControls = {
    repeatGame() {
      setActiveWords((prevWords) =>
        prevWords.map((word) => {
          return { ...word, entered: "" };
        })
      );
      gameControls.clearBoard();
      restartTimer();
    },
    restartGame() {
      setActiveWords([]);
      gameControls.clearBoard();
      restartTimer();
    },
    pauseGame() {
      stopTimer();
      setIsPaused(true);
    },
    resumeGame() {
      resumeTimer();
      setIsPaused(false);
      inputRef.current.focus();
    },
    endGame() {
      stopTimer();
      setGameEnded(true);
      statsData.timePassed = getCurrentTime();
    },
    clearBoard() {
      setIndex(0);
      setUserInput("");
      setGameEnded(false);

      restartTimer();
      statsData.clear();
      inputRef.current.focus();
      inputRef.current.value = "";
    },
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
      gameControls.endGame();
    }
  }

  function backSpaceHandler() {
    setIndex((prevIndex) => {
      if (userInput === "" && index > 0) {
        let prevWord = activeWords[prevIndex - 1].entered;
        inputRef.current.value = prevWord;
        setUserInput(prevWord);
        return prevIndex - 1;
      }
      return prevIndex;
    });
  }

  return (
    <div className={classes.board}>
      {gameEnded && (
        <GameStats
          close={setGameEnded}
          stats={statsData}
          gameSettings={gameSettings}
          controls={gameControls}
        />
      )}
      <Clock settings={gameSettings} onTimerEnd={gameControls.endGame}></Clock>
      <button onClick={gameControls.endGame}> debug button</button>
      <Input
        onInput={inputHandler}
        onSpaceBar={spaceBarHandler}
        onBackSpace={backSpaceHandler}
        onLostFocus={gameControls.pauseGame}
        ref={inputRef}
      />
      <WordList words={activeWords} currentIndex={index} userInput={userInput}>
        {isPaused && <PauseScreen onResume={gameControls.resumeGame} />}
      </WordList>

      <ControlButtons controls={gameControls}></ControlButtons>
    </div>
  );
}
export default Board;
