import ControlButtons from "@components/ControlButtons/ControlButtons";
import PauseModal from "@components/Modal/PauseModal";
import { useGameStateContext } from "contexts/gameState-context";
import GameStats from "../GameStats/GameStats";
import InfoPanel from "./InfoPanel/InfoPanel";
import WordsPanel from "./WordsWrapper/WordsWrapper";
import useWords from "hooks/useWords";

function Board() {
  const [game, actions] = useGameStateContext();
  const [words, { newWords, repeatWords }] = useWords();

  const gameControls = {
    restartGame() {
      newWords();
      actions.restart();
    },
    repeatGame() {
      repeatWords();
      actions.restart();
    },
    endGame: () => actions.end(),
  };

  if (game.ended)
    return (
      <>
        <GameStats words={words} />
        <ControlButtons controls={gameControls} ended={game.ended} />
      </>
    );

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
