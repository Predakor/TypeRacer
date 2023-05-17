import ControlButtons from "@components/ControlButtons/ControlButtons";
import { useGameStateContext } from "@store/gameState-context";
import settingsContext from "@store/settings-context";
import { generateWords } from "@utils/wordGenerator";
import GameStats from "../GameStats/GameStats";
import InfoPanel from "./InfoPanel/InfoPanel";
import WordsPanel from "./WordsWrapper/WordsWrapper";
import PauseModal from "@components/Modal/PauseModal";
import { useContext, useState } from "preact/hooks";

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
      <>
        <GameStats words={words} />
        <ControlButtons controls={gameControls} ended={game.ended} />
      </>
    );
  }

  return (
    <>
      <InfoPanel />
      <WordsPanel controls={gameControls} generatedWords={words} />
      <ControlButtons controls={gameControls} ended={game.ended} />
      <PauseModal />
    </>
  );
}
export default Board;
