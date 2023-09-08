import Clock from "@components/Clock";
import { useGameStateContext } from "contexts/gameState-context";
import { useGameSettings } from "contexts/settings-context";
import GameHint from "./GameHint/GameHint";
import GameModes from "./GameModes/GameModes";
import GameDuration from "./GameDuration/GameDuration";

function InfoPanel() {
  const [{ started, paused }, actions] = useGameStateContext();
  const [{ mode, time, wordCount }, setSettings] = useGameSettings();

  const visible = started && !paused ? "opacity-0" : "";

  return (
    <header className={`navbar`}>
      <div className={"navbar-start"}>
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

      <div className={"navbar-center whitespace-nowrap"}>
        <GameHint gameStarted={started} />
      </div>

      <div className={`navbar-end transition-opacity duration-1000 `}>
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
