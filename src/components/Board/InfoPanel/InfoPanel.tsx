import SettingsButton from "@components/Button/SettingsButton";
import Clock from "@components/Clock";
import { useGameStateContext } from "contexts/gameState-context";
import { useGameSettings } from "contexts/settings-context";
import { Link } from "react-router-dom";

function InfoPanel() {
  const [game, actions] = useGameStateContext();
  const [{ mode, time }] = useGameSettings();

  const infoMessage = game.started ? "" : "Press any key to start typing";

  return (
    <nav className={`navbar`}>
      <Clock
        mode={mode}
        time={time}
        onEnd={actions.end}
        className="navbar-start"
      />

      <h2 className={"navbar-center whitespace-nowrap"}>{infoMessage}</h2>

      <Link to="settings" className="navbar-end">
        <SettingsButton />
      </Link>
    </nav>
  );
}

export default InfoPanel;
