import { IoArrowForward, IoSyncOutline, IoPersonOutline, IoSettingsOutline } from "react-icons/io5";
import Button, { NavButton } from "../Utils/Button/Button";

import classes from "./ControlButtons.module.css";
function ControlButtons(props) {
  const { restartGame, repeatGame } = props.controls;
  const { isPaused, started, ended } = props.gameState;
  const hide = isPaused || !started ? "" : "hide";

  return (
    <div className={`${classes.container} ${hide}`}>
      {!ended && (
        <Button forwardClass={hide} click={restartGame} tabIndex={0}>
          <IoSyncOutline />
        </Button>
      )}
      {ended && (
        <>
          <NavButton forwardClass={classes.hide} click={restartGame}>
            <IoArrowForward />
          </NavButton>
          <NavButton forwardClass={classes.hide} click={repeatGame}>
            <IoSyncOutline />
          </NavButton>
          <NavButton forwardClass={classes.hide} click={restartGame}>
            <IoPersonOutline />
          </NavButton>
          <NavButton forwardClass={classes["settings-button"]} click={1}>
            <IoSettingsOutline />
          </NavButton>
        </>
      )}
    </div>
  );
}

export default ControlButtons;
