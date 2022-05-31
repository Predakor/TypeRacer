import React from "react";
import Clock from "../../Clock";
import { IoSettingsOutline } from "react-icons/io5";
import Button from "../../Utils/Button/Button";
import classes from "./InfoPanel.module.css";

function InfoPanel(props) {
  const { settings, controls, gameState } = props;
  let hide = gameState.started ? "hide" : "";
  return (
    <div className={classes.container}>
      <Clock settings={settings} onTimerEnd={controls.endGame} />

      <Hint>
        <p className={`${hide} `}>Press any key to start typing</p>
      </Hint>

      <Button forwardClass={classes["settings-button"]} click={1}>
        <IoSettingsOutline />
      </Button>

      {/* <div hide={hide}>
        {settings.mode} {settings.mode === "time" ? settings.time : settings.wordCount}
      </div> */}
    </div>
  );
}

function Hint(props) {
  return <div className={classes.hint_container}>{props.children}</div>;
}
export default InfoPanel;
