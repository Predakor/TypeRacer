import React from "react";
import Clock from "../../Clock";
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

      <p hide={hide}>
        {`
          ${settings.mode}
          ${settings.mode === "time" ? settings.time : settings.wordCount}
        `}
      </p>
    </div>
  );
}

function Hint(props) {
  return <div className={classes.hint_container}>{props.children}</div>;
}
export default InfoPanel;
