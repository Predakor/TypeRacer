import { forwardRef } from "react";
import classes from "../Board.module.css";

const Input = forwardRef((props, ref) => {
  const { pauseGame, resumeGame, startGame } = props.controls;
  const { isPaused, started, ended } = props.gameState;
  const { onChange, onSpaceBar, onBackSpace } = props;

  const changeHandler = (e) => started && onChange(e.target.value);

  const clickHandler = (e) => {
    if (ended) return;
    if (!started) startGame();

    if (e.key === " ") return onSpaceBar();
    if (e.key === "Backspace") return onBackSpace();
  };

  return (
    <input
      className={classes.input}
      onChange={changeHandler}
      onKeyDown={clickHandler}
      onBlur={() => started && pauseGame()}
      tabIndex={0}
      autoFocus
      ref={ref}
    />
  );
});

export default Input;
