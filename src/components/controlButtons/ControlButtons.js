import { IoArrowForward, IoSyncOutline, IoPersonOutline } from "react-icons/io5";
import classes from "./ControlButtons.module.css";
function ControlButtons(props) {
  const { restartGame, repeatGame } = props.controls;
  return (
    <div className={classes.container}>
      <IoArrowForward className={classes.button} onClick={restartGame} />
      <IoSyncOutline className={classes.button} onClick={repeatGame} />
      <IoPersonOutline className={classes.button} onClick={() => console.log("something")} />
    </div>
  );
}

export default ControlButtons;
