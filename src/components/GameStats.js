import { useContext } from "react";
import Card from "./Utils/Card";
import Modal from "./Utils/Modal";
import ControlButtons from "./controlButtons/ControlButtons";
import gameSettingsContext from "../store/settings-context";
import statsDataContext from "../store/stats-context";
import classes from "./GameStats.module.css";

function GameStats(props) {
  const gameStats = useContext(statsDataContext);
  const gameSettings = useContext(gameSettingsContext);

  let { keyCount, errorCount, timePassed } = gameStats;
  let { time: startTime, mode } = gameSettings;

  let duration = mode === "time" ? startTime - timePassed : timePassed;

  let wpm = (keyCount - errorCount) / 5;
  if (duration != 60) wpm *= 60 / duration;
  wpm = Math.round(wpm);

  let accuracy = Math.round(((keyCount - errorCount) / keyCount) * 100);

  const closeModal = (e) => e.target.classList.contains("modal") && props.controls.clearBoard;

  return (
    <Modal onClose={closeModal}>
      <Card>
        <StatList>
          <Stat>wpm: {wpm}</Stat>
          <Stat>duration: {duration}</Stat>
          <Stat>errors: {errorCount}</Stat>
          <Stat>accuracy: {accuracy}%</Stat>
          <Stat>keyStrokes: {keyCount}</Stat>
          <Stat>mode: {mode}</Stat>
          <Stat>time: {startTime}s </Stat>
        </StatList>
        <ControlButtons controls={props.controls} gameState={props.gameState} />
      </Card>
    </Modal>
  );
}

const Stat = (props) => <p className={classes.stat}>{props.children}</p>;
const StatList = (props) => <div className={classes.statContainer}>{props.children}</div>;
const Buttons = (props) => <div className={classes.buttonContainer}>{props.children}</div>;

export default GameStats;
