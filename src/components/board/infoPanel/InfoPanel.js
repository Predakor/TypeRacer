import React from "react";
import Clock from "../../Clock";
import { IoSettingsOutline } from "react-icons/io5";
import Button from "../../Utils/Button/Button";
import classes from "./InfoPanel.module.css";
import { Link } from "react-router-dom";

function InfoPanel(props) {
  const { settings, controls, gameState } = props;
  const hide = gameState.started ? "hide" : "";
  return (
    <div className={classes.container}>
      <Clock settings={settings} onTimerEnd={controls.endGame} />
      <p className={hide}>Press any key to start typing</p>

      <Link to="settings">
        <Button forwardClass={`${classes["settings-button"]} ${hide}`}>
          <IoSettingsOutline />
        </Button>
      </Link>
    </div>
  );
}

export default InfoPanel;
