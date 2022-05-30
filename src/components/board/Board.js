import { useReducer, useState, useContext } from "react";
import GameStatsPanel from "./gameStats/GameStats";
import InfoPanel from "./infoPanel/InfoPanel";
import WordsPanel from "./wordsWrapper/WordsWrapper";
import ControlButtons from "../controlButtons/ControlButtons";
import { generateWords } from "../Utils/wordGenerator";
import { stopTimer, resumeTimer, restartTimer, updateTimer } from "../Clock";
import settingsContext from "../../store/settings-context";
import classes from "./Board.module.css";

function gameReducer(prevState, action) {
  const operation = {
    active: () => ({ isPaused: false, started: true, ended: false }),
    paused: () => ({ isPaused: true, started: true, ended: false }),
    ended: () => ({ isPaused: false, started: false, ended: true }),
    default: () => ({ isPaused: false, started: false, ended: false }),
  };
  return action ? operation[action]() : operation["default"]();
}

function Board() {
  const gameSettings = useContext(settingsContext);
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
    resumeGame(inputRef) {
      resumeTimer();
      dispatchGame("active");
      inputRef.current.focus();
    },
    startGame() {
      restartTimer();
      dispatchGame("active");
    },
    pauseGame() {
      stopTimer();
      dispatchGame("paused");
    },
    endGame() {
      stopTimer();
      dispatchGame("ended");
    },
    clearBoard() {
      dispatchGame();
      updateTimer();
    },
  };
  return (
    <div className={classes.board}>
      {!game.ended && (
        <InfoPanel settings={gameSettings} controls={gameControls.endGame} gameState={game} />
      )}
      {game.ended ? (
        <GameStatsPanel controls={gameControls} gameState={game} />
      ) : (
        <WordsPanel
          controls={gameControls}
          gameState={game}
          words={[activeWords, setActiveWords]}
        />
      )}
      <ControlButtons controls={gameControls} gameState={game} />
    </div>
  );
}
export default Board;
