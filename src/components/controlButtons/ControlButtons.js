import { IoArrowForward, IoSyncOutline, IoPersonOutline } from "react-icons/io5";
import classes from "./ControlButtons.module.css";
function ControlButtons(props) {
  const { restartGame, repeatGame } = props.controls;
  const gameState = props.gameState;
  let hide = gameState.isPaused || !gameState.isRunning ? "" : "hide";
  return (
    <div className={`${classes.container} ${hide}`}>
      <IoArrowForward className={classes.button} onClick={restartGame} />
      <IoSyncOutline className={classes.button} onClick={repeatGame} />
      <IoPersonOutline className={classes.button} onClick={() => console.log("something")} />
    </div>
  );
}

export default ControlButtons;
