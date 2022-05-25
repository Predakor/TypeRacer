import { useReducer, useRef, useState } from "react";
import GameStats from "../GameStats";
import ControlButtons from "../controlButtons/ControlButtons";
import InfoPanel from "./infoPanel/InfoPanel";
import WordsWrapper from "./wordsWrapper/WordsWrapper";
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
  const operation = {
    active: () => ({ isPaused: false, started: true, ended: false }),
    paused: () => ({ isPaused: true, started: true, ended: false }),
    ended: () => ({ isPaused: false, started: false, ended: true }),
    default: () => ({ isPaused: false, started: false, ended: false }),
  };
  return operation[action]();
}

function Board() {
  const inputRef = useRef();
  const [activeWords, setActiveWords] = useState(generateWords(gameSettings.wordCount));

  const [game, dispatchGame] = useReducer(gameReducer, {
    started: false,
    isPaused: false,
    ended: false,
  });

  const gameControls = {
    restartGame() {
      setActiveWords(generateWords(gameSettings.wordCount));
      gameControls.clearBoard();
    },
    repeatGame() {
      setActiveWords((prevWords) => {
        return prevWords.map((word) => ({ ...word, entered: "" }));
      });
      gameControls.clearBoard();
    },
    resumeGame() {
      resumeTimer();
      dispatchGame("active");
      // inputRef.current.focus();
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
      // setIndex(0);
      dispatchGame("default");
      updateTimer();
      statsData.clear();
      // inputRef.current.focus();
      // inputRef.current.value = "";
    },
  };

  return (
    <div className={classes.board}>
      <InfoPanel settings={gameSettings} controls={gameControls.endGame} gameState={game} />
      {game.ended && (
        <GameStats
          gameStats={statsData}
          gameSettings={gameSettings}
          controls={gameControls}
          gameState={game}
        />
      )}

      <WordsWrapper
        controls={gameControls}
        gameState={game}
        words={[activeWords, setActiveWords]}
      />

      <ControlButtons controls={gameControls} gameState={game} />
    </div>
  );
}
export default Board;
