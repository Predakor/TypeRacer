import Card from "./Utils/Card";
import Modal from "./Utils/Modal";
import ControlButtons from "./controlButtons/ControlButtons";
import classes from "./GameStats.module.css";

function GameStats(props) {
  let stats = props.stats;
  let settings = props.gameSettings;

  let keyCount = stats.keyCount;
  let errors = stats.errorCount;
  let time = settings.time > 0 ? settings.time - stats.timePassed : stats.timePassed;

  let wpm = (keyCount - errors) / 4.7;
  if (time < 60) wpm *= 60 / time;
  if (time > 60) wpm /= time / 60;
  wpm = Math.round(wpm);

  let accuracy = Math.round(((keyCount - errors) / keyCount) * 100);

  const closeModal = (e) => e.target.classList.contains("modal") && props.close(false);

  return (
    <Modal onClose={closeModal}>
      <Card>
        <StatList>
          <Stat>wpm: {wpm}</Stat>
          <Stat>time: {time}s </Stat>
          <Stat>errors: {errors}</Stat>
          <Stat>accuracy: {accuracy}%</Stat>
          <Stat>keyStrokes: {keyCount}</Stat>
        </StatList>
        <ControlButtons controls={props.controls} />
      </Card>
    </Modal>
  );
}

const Stat = (props) => <p className={classes.stat}>{props.children}</p>;
const StatList = (props) => <div className={classes.statContainer}>{props.children}</div>;
const Buttons = (props) => <div className={classes.buttonContainer}>{props.children}</div>;

export default GameStats;
