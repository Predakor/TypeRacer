import ControlButtons from "@components/ControlButtons/ControlButtons";
import PauseModal from "@components/Modal/PauseModal";
import { useGameStateContext } from "contexts/gameState-context";
import { useGameSettings } from "contexts/settings-context";
import useWords from "hooks/useWords";
import { useEffect } from "preact/hooks";
import GameStats from "../GameStats/GameStats";
import InfoPanel from "./GameInfo/GameInfo";
import WordsPanel from "./WordsWrapper/WordsWrapper";

function Board() {
  const [game, actions] = useGameStateContext();
  const [settings] = useGameSettings();
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

  useEffect(() => {
    newWords(settings.wordCount);
  }, [settings]);

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
