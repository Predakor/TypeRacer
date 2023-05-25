import Clock from "@components/Clock";
import { useGameStateContext } from "contexts/gameState-context";
import { useGameSettings } from "contexts/settings-context";

function InfoPanel() {
  const [game, actions] = useGameStateContext();
  const [{ mode, time }] = useGameSettings();

  const infoMessage = game.started ? "" : "Press any key to start typing";

  return (
    <header className={`navbar`}>
      <Clock
        mode={mode}
        time={time}
        onEnd={actions.end}
        className="navbar-start"
      />

      <h2 className={"navbar-center whitespace-nowrap"}>{infoMessage}</h2>

      <div className={"navbar-end"}>{mode}</div>
    </header>
  );
}

export default InfoPanel;
