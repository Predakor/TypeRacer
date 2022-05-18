import Card from "./Utils/Card";
import { createPortal } from "react-dom";
import { IoArrowForward, IoSyncOutline, IoPersonOutline } from "react-icons/io5";
import classes from "./GameStats.module.css";

function GameStats(props) {
  let stats = props.stats;
  let settings = props.gameSettings;

  let keyCount = stats.keyCount;
  let errors = stats.errorCount;
  let time = settings.time > 0 ? settings.time - stats.timePassed : stats.timePassed;
  console.log(time);

  let wpm = (keyCount - errors) / 4.7;
  if (time < 60) wpm *= 60 / time;
  if (time > 60) wpm /= time / 60;
  wpm = Math.round(wpm);

  let accuracy = Math.round(((keyCount - errors) / keyCount) * 100);

  const closeModal = (e) => {
    if (e.target.classList.contains("modal")) props.close(false);
  };
  return (
    <>
      {createPortal(
        <div className="modal" onClick={closeModal}>
          <Card>
            <StatList>
              <Stat>wpm: {wpm}</Stat>
              <Stat>time: {time}s </Stat>
              <Stat>errors: {errors}</Stat>
              <Stat>accuracy: {accuracy}%</Stat>
              <Stat>keyStrokes: {keyCount}</Stat>
            </StatList>

            <Buttons>
              <IoArrowForward className={classes.btn} onClick={props.controls.restartGame} />
              <IoSyncOutline className={classes.btn} onClick={props.controls.repeatGame} />
              <IoPersonOutline className={classes.btn} onClick={() => console.log("something")} />
            </Buttons>
          </Card>
        </div>,
        document.getElementById("modal")
      )}
    </>
  );
}

const Stat = (props) => <p className={classes.stat}>{props.children}</p>;
const StatList = (props) => <div className={classes.statContainer}>{props.children}</div>;
const Buttons = (props) => <div className={classes.buttonContainer}>{props.children}</div>;

export default GameStats;
