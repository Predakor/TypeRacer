import { createPortal } from "react-dom";
import classes from "./GameStats.module.css";

function GameStats(props) {
  let stats = props.stats;
  let keyCount = stats.keyCount;
  let errors = stats.errorCount;
  let time = 60 - stats.timePassed;

  let wpm = keyCount / 4.7;
  if (time < 60) wpm *= 60 / time;
  if (time > 60) wpm /= time / 60;

  wpm = Math.round(wpm);

  const closeModal = (e) => {
    if (e.target.classList.contains("modal")) props.close(false);
  };
  return (
    <>
      {createPortal(
        <div className="modal" onClick={closeModal}>
          <div className="card" onClick={() => console.log(1)}>
            <p className={classes.stat}>wpm: {wpm}</p>
            <p className={classes.stat}>accuracy: {keyCount - errors}</p>
            <p className={classes.stat}>keyStrokes: {keyCount}</p>
            <p className={classes.stat}>errors: {errors}</p>
            <p className={classes.stat}>time passed: {time} </p>
          </div>
        </div>,
        document.getElementById("modal")
      )}
    </>
  );
}
export default GameStats;
