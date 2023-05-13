import SettingsButton from "@components/Button/SettingsButton";
import Clock from "@components/Clock";
import { useGameStateContext } from "@store/gameState-context";
import useGameSettings from "hooks/useGameSettings";
import { Link } from "react-router-dom";
import classes from "./InfoPanel.module.css";

function InfoPanel() {
  const [gameState, actions] = useGameStateContext();
  const { mode, time } = useGameSettings();

  const hide = gameState.started ? "hide" : "";

  return (
    <div className={classes.container}>
      <Clock mode={mode} time={time} onEnd={actions.end} />
      <p className={hide}>Press any key to start typing</p>

      <Link to="settings">
        <SettingsButton />
      </Link>
    </div>
  );
}

export default InfoPanel;
