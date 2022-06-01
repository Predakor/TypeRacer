import React from "react";
import Clock from "../../Clock";
import { IoSettingsOutline } from "react-icons/io5";
import Button from "../../Utils/Button/Button";
import classes from "./InfoPanel.module.css";

function InfoPanel(props) {
  const { settings, controls, gameState } = props;
  const hide = gameState.started ? "hide" : "";
  return (
    <div className={classes.container}>
      <Clock settings={settings} onTimerEnd={controls.endGame} />
      <p className={hide}>Press any key to start typing</p>
      <Button forwardClass={`${classes["settings-button"]} ${hide}`} click={() => {}}>
        <IoSettingsOutline />
      </Button>
    </div>
  );
}

export default InfoPanel;
