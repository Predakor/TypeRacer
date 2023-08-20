import Clock from "@components/Clock";
import { useGameStateContext } from "contexts/gameState-context";
import { useGameSettings } from "contexts/settings-context";
import GameHint from "./GameHint/GameHint";

function InfoPanel() {
  const [{ started, paused }, actions] = useGameStateContext();
  const [{ mode, time }] = useGameSettings();

  const visible = started && !paused ? "opacity-0" : "";
  return (
    <header className={`navbar`}>
      <Clock
        mode={mode}
        time={time}
        onEnd={actions.end}
        className="navbar-start"
      />
      <div className={"navbar-center whitespace-nowrap"}>
        <GameHint gameStarted={started} />
      </div>

      <div
        className={`navbar-end ${visible} transition-opacity duration-1000 `}
      >
        {mode}
      </div>
    </header>
  );
}

export default InfoPanel;
