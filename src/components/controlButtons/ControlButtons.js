import { IoArrowForward, IoSyncOutline, IoPersonOutline, IoSettingsOutline } from "react-icons/io5";
import Button from "../Utils/Button/Button";
import classes from "./ControlButtons.module.css";

function ControlButtons(props) {
  const { restartGame, repeatGame } = props.controls;
  const { isPaused, started, ended } = props.gameState;
  const hide = isPaused || !started ? "" : "hide";
  const animate = ended ? classes.animate : "";

  return (
    <div className={`${classes.container} ${hide} ${animate}`}>
      {!ended && (
        <Button forwardClass={hide} click={restartGame} tabIndex={0}>
          <IoSyncOutline />
        </Button>
      )}
      {ended && (
        <>
          <Button click={restartGame} tabIndex={0}>
            <IoArrowForward />
          </Button>
          <Button click={repeatGame} tabIndex={0}>
            <IoSyncOutline />
          </Button>
          <Button click={restartGame} tabIndex={0}>
            <IoPersonOutline />
          </Button>
          <Button click={() => {}} tabIndex={0}>
            <IoSettingsOutline />
          </Button>
        </>
      )}
    </div>
  );
}

export default ControlButtons;
