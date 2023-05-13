import Button from "@components/Button/Button";
import {
  IoArrowForward,
  IoPersonOutline,
  IoSettingsOutline,
  IoSyncOutline,
} from "react-icons/io5";
import classes from "./ControlButtons.module.css";

function ControlButtons(props) {
  const { restartGame, repeatGame } = props.controls;
  const { isPaused, started, ended } = props.gameState;
  const hide = isPaused || !started ? "" : "hide";
  const animate = ended ? classes.animate : "";

  if (!ended) {
    return (
      <Button className={hide} onClick={restartGame}>
        <IoSyncOutline />
      </Button>
    );
  }

  return (
    <div className={`${classes.container} ${hide} ${animate}`}>
      <Button onClick={restartGame}>
        <IoArrowForward />
      </Button>
      <Button onClick={repeatGame}>
        <IoSyncOutline />
      </Button>
      <Button onClick={restartGame}>
        <IoPersonOutline />
      </Button>
      <Button onClick={() => {}}>
        <IoSettingsOutline />
      </Button>
    </div>
  );
}

export default ControlButtons;
