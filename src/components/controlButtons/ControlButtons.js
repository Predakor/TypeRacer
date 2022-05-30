import { IoArrowForward, IoSyncOutline, IoPersonOutline } from "react-icons/io5";
import classes from "./ControlButtons.module.css";
function ControlButtons(props) {
  const { restartGame, repeatGame } = props.controls;
  const { isPaused, started, ended } = props.gameState;
  const hide = isPaused || !started ? "" : "hide";
  return (
    <div className={`${classes.container} ${hide}`}>
      {!started && !ended && (
        <button onClick={restartGame} tabIndex={0}>
          <IoSyncOutline className={classes.button} onClick={repeatGame} />
        </button>
      )}
      {ended && (
        <>
          <button className={classes.hide} onClick={restartGame} tabIndex={0}>
            <IoArrowForward className={classes.button} />
          </button>
          <button className={classes.hide} onClick={restartGame} tabIndex={0}>
            <IoSyncOutline className={classes.button} onClick={repeatGame} />
          </button>
          <button className={classes.hide} onClick={restartGame} tabIndex={0}>
            <IoPersonOutline className={classes.button} onClick={repeatGame} />
          </button>
        </>
      )}
    </div>
  );
}

export default ControlButtons;
