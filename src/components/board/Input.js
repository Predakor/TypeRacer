import { forwardRef } from "react";
import classes from "./Board.module.css";

const Input = forwardRef((props, ref) => {
  const { textHandler, spaceBarHandler, backSpaceHandler } = props.handlers;
  const { pauseGame, resumeGame, startGame } = props.controls;
  const { isPaused, isRunning, ended } = props.gameState;

  const changeHandler = (e) => textHandler(e.target.value);

  const clickHandler = (e) => {
    if (ended) return;
    if (!isRunning) startGame();
    if (e.key === " ") return spaceBarHandler();
    if (e.key === "Backspace") return backSpaceHandler();
  };

  return (
    <input
      className={classes.input}
      onChange={changeHandler}
      onKeyDown={clickHandler}
      onBlur={() => isRunning && pauseGame()}
      tabIndex={0}
      autoFocus
      ref={ref}
    />
  );
});

export default Input;
