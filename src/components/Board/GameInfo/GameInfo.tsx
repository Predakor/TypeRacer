import Clock from "@components/Clock";
import { useGameStateContext } from "contexts/gameState-context";
import { useGameSettings } from "contexts/settings-context";
import GameHint from "./GameHint/GameHint";
import GameModes from "./GameModes/GameModes";
import GameDuration from "./GameDuration/GameDuration";

function InfoPanel() {
  const [{ started }, actions] = useGameStateContext();
  const [{ mode, time, wordCount }, setSettings] = useGameSettings();

  return (
    <header className={`flex justify-center p-4 md:navbar`}>
      <div className={"navbar-start hidden md:flex"}>
        {started ? (
          <Clock mode={mode} time={time} onEnd={actions.end} />
        ) : (
          <GameDuration
            setDuration={(duration) =>
              setSettings(
                mode === "time" ? { time: duration } : { wordCount: duration }
              )
            }
            gameMode={mode}
            selectedDuration={mode === "time" ? time : wordCount}
          />
        )}
      </div>

      <div className={"whitespace-nowrap md:navbar-center md:flex"}>
        <GameHint gameStarted={started} />
      </div>

      <div
        className={`navbar-end hidden transition-opacity duration-1000 md:flex `}
      >
        {started ? (
          mode
        ) : (
          <GameModes
            selectedGameMode={mode}
            setGameMode={(gameMode) => setSettings({ mode: gameMode })}
          />
        )}
      </div>
    </header>
  );
}

export default InfoPanel;
