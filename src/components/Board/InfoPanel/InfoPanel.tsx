import Clock from "@components/Clock";
import { useGameStateContext } from "contexts/gameState-context";
import { useGameSettings } from "contexts/settings-context";
import GameHint from "./GameHint/GameHint";

function InfoPanel() {
  const [game, actions] = useGameStateContext();
  const [{ mode, time }] = useGameSettings();

  return (
    <header className={`navbar`}>
      <Clock
        mode={mode}
        time={time}
        onEnd={actions.end}
        className="navbar-start"
      />
      <div className={"navbar-center whitespace-nowrap"}>
        <GameHint gameStarted={game.started} />
      </div>

      <div className={"navbar-end"}>{mode}</div>
    </header>
  );
}

export default InfoPanel;
