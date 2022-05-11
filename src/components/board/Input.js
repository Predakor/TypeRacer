import { forwardRef } from "react";
import classes from "./Board.module.css";

const Input = forwardRef((props, ref) => {
  const changeHandler = (e) => props.onInput(e.target.value);

  function clickHandler(e) {
    if (e.key === " ") return props.onSpaceBar();
    if (e.key === "Backspace") return props.onBackSpace();
  }

  const focusLostHandler = () => {
    // prompt("you lost focus");
  };

  return (
    <input
      className={classes.input}
      onChange={changeHandler}
      onKeyDown={clickHandler}
      onBlur={focusLostHandler}
      tabIndex={0}
      autoFocus
      ref={ref}
    />
  );
});

export default Input;
