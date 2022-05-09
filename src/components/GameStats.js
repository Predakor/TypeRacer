import classes from "./GameStats.module.css";
function GameStats(props) {
  let keyCount = props.keyCount;
  let wrongCount = props.wrongCount;
  let time = props.time;

  let wpm = keyCount / 4.7;
  if (time < 60) {
    wpm *= 60 / time;
  } else if (time > 60) {
    wpm /= time / 60;
  }
  return (
    <div className="card">
      <p className={classes.stat}>wpm:{wpm}</p>
      <p className={classes.stat}>accuracy:{keyCount - wrongCount}</p>
      <p className={classes.stat}>keyStrokes {keyCount}</p>
      <p className={classes.stat}>errors {wrongCount}</p>
    </div>
  );
}
export default GameStats;
