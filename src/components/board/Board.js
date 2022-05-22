import { useReducer, useRef, useState } from "react";
import Input from "./Input";
import Clock from "../Clock";
import WordList from "./WordList";
import GameStats from "../GameStats";
import PauseScreen from "../PauseScreen";
import ControlButtons from "../controlButtons/ControlButtons";
import { generateWords } from "../Utils/wordGenerator";
import { stopTimer, resumeTimer, getCurrentTime, restartTimer, updateTimer } from "../Clock";
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

function gameReducer(prevState, action) {
  switch (action) {
    case "active":
      return { isPaused: false, isRunning: true, ended: false };
    case "paused":
      return { isPaused: true, isRunning: true, ended: false };
    case "ended":
      return { isPaused: false, isRunning: false, ended: true };
    default:
      return { isPaused: false, isRunning: false, ended: false };
  }
}

function Board() {
  const inputRef = useRef();
  const [index, setIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [activeWords, setActiveWords] = useState([]);

  const [game, dispatchGame] = useReducer(gameReducer, {
    isPaused: false,
    isRunning: false,
    ended: false,
  });

  activeWords.length === 0 && setActiveWords(generateWords(gameSettings.wordCount));

  const gameControls = {
    repeatGame() {
      setActiveWords((prevWords) =>
        prevWords.map((word) => {
          return { ...word, entered: "" };
        })
      );
      gameControls.clearBoard();
    },
    restartGame() {
      setActiveWords(generateWords(gameSettings.wordCount));
      gameControls.clearBoard();
    },
    resumeGame() {
      resumeTimer();
      dispatchGame("active");
    },
    pauseGame() {
      stopTimer();
      dispatchGame("paused");
    },
    startGame() {
      restartTimer();
      dispatchGame("active");
    },
    endGame() {
      stopTimer();
      dispatchGame("ended");
      statsData.timePassed = getCurrentTime();
    },
    clearBoard() {
      setIndex(0);
      dispatchGame();
      setUserInput("");

      updateTimer();
      statsData.clear();
      inputRef.current.focus();
      inputRef.current.value = "";
    },
  };

  const inputHandlers = {
    textHandler(text) {
      text = text.trim();
      let lastChar = text.slice(-1);
      let lastWordChar = activeWords[index].generated.charAt(text.length - 1);

      setUserInput(text);
      lastChar !== lastWordChar && statsData.errorCount++;
      statsData.keyCount++;
    },
    spaceBarHandler() {
      if (index + 1 >= activeWords.length) return gameControls.endGame();
      setIndex((prevIndex) => {
        inputRef.current.value = "";
        return prevIndex + 1;
      });
    },
    backSpaceHandler() {
      setIndex((prevIndex) => {
        if (userInput === "" && index > 0) {
          let prevWord = activeWords[prevIndex - 1].entered;

          inputRef.current.value = prevWord;
          setUserInput(prevWord);
          return prevIndex - 1;
        }
        return prevIndex;
      });
    },
  };

  return (
    <div className={classes.board}>
      {game.ended && (
        <GameStats gameStats={statsData} gameSettings={gameSettings} controls={gameControls} />
      )}
      <Clock settings={gameSettings} onTimerEnd={gameControls.endGame} />
      <button onClick={gameControls.endGame}>debug button</button>

      <Input handlers={inputHandlers} controls={gameControls} gameState={game} ref={inputRef} />

      <WordList words={activeWords} currentIndex={index} userInput={userInput}>
        {game.isPaused && <PauseScreen onResume={gameControls.resumeGame} />}
      </WordList>
      {(game.isPaused || !game.isRunning) && <ControlButtons controls={gameControls} />}
    </div>
  );
}
export default Board;
