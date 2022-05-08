import { useRef } from "react";
import classes from "./Board.module.css";

function Input(props) {
  const inputRef = useRef();

  function changeHandler(e) {
    props.onInput(e.target.value);
    if (e.target.value.slice(-1) === " ") {
      inputRef.current.value = "";
    }
  }

  const focusLostHandler = () => {
    // prompt("you lost focus");
  };

  return (
    <input
      className={classes.input}
      onChange={changeHandler}
      onBlur={focusLostHandler}
      tabIndex={0}
      autoFocus
      ref={inputRef}
    />
  );
}

export default Input;
