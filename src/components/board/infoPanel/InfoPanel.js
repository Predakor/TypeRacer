import React from "react";
import Clock from "../../Clock";
import classes from "./InfoPanel.module.css";

function InfoPanel(props) {
  const { settings, controls, gameState } = props;
  let hide = gameState.started ? "hide" : "";
  return (
    <div className={classes.container}>
      <Clock settings={settings} onTimerEnd={controls.endGame} />

      <div className="hint_container">
        <p className={`${classes.start_hint} ${hide} `}>Press any key to start typing</p>
      </div>

      <Group hide={hide}>
        <p>{settings.mode}</p>
        <p>{settings.mode === "time" ? settings.time : settings.wordCount}</p>
      </Group>
    </div>
  );
}

function Group(props) {
  return <div className={`${classes.group} ${props.hide}`}>{props.children}</div>;
}
export default InfoPanel;
