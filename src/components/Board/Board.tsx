import ControlButtons from "@components/ControlButtons/ControlButtons";
import { useGameStateContext } from "contexts/gameState-context";
import { useGameSettings } from "contexts/settings-context";
import useWords from "hooks/useWords";
import { useEffect } from "preact/hooks";
import GameStats from "../GameStats/GameStats";
import InfoPanel from "./GameInfo/GameInfo";
import WordsPanel from "./WordsWrapper/WordsWrapper";
import Kbd from "@components/Kbd/Kbd";

function Board() {
  const [game, actions] = useGameStateContext();
  const [settings] = useGameSettings();
  const [words, { newWords, repeatWords }] = useWords();

  const visible = game.started && !game.paused ? "opacity-0" : "";

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

  return (
    <>
      {game.ended ? (
        <GameStats words={words} />
      ) : (
        <>
          <InfoPanel />
          <WordsPanel controls={gameControls} generatedWords={words} />
        </>
      )}
      <ControlButtons controls={gameControls} ended={game.ended} />

      <div
        class={`hidden justify-center text-sm md:flex ${visible} transition-opacity duration-1000`}
      >
        <p>
          <Kbd className="kbd-sm">tab</Kbd>
          {" + "}
          <Kbd className="kbd-sm">enter</Kbd>
          {" - restart test"}
        </p>
      </div>
    </>
  );
}
export default Board;
