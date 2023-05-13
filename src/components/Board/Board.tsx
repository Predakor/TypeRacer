import ControlButtons from "@components/ControlButtons/ControlButtons";
import { useGameStateContext } from "@store/gameState-context";
import settingsContext from "@store/settings-context";
import { generateWords } from "@utils/wordGenerator";
import { useContext, useState } from "react";
import GameStats from "../GameStats/GameStats";
import classes from "./Board.module.css";
import InfoPanel from "./InfoPanel/InfoPanel";
import WordsPanel from "./WordsWrapper/WordsWrapper";

function Board() {
  const gameSettings = useContext(settingsContext);
  const [game, actions] = useGameStateContext();
  const [words, setWords] = useState(generateWords(gameSettings.wordCount));

  const gameControls = {
    restartGame() {
      setWords(generateWords(gameSettings.wordCount));
      actions.restart();
    },
    repeatGame() {
      setWords((prevWords) =>
        prevWords.map(({ generated }) => ({
          generated,
          entered: "",
        }))
      );
      actions.restart();
    },
    endGame: () => actions.end(),
  };

  if (game.ended) {
    return (
      <div className={classes.board}>
        <GameStats words={words} />
        <ControlButtons controls={gameControls} gameState={game} />
      </div>
    );
  }

  return (
    <div className={classes.board}>
      <InfoPanel />

      <WordsPanel controls={gameControls} generatedWords={words} />

      <ControlButtons controls={gameControls} gameState={game} />
    </div>
  );
}
export default Board;
