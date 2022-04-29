import { compare } from "./controller";
import classes from "./Board.module.css";

let activeKeys = [];
const addKey = (e) => {
  let letter = e.key;
  if (!activeKeys.includes(letter)) {
    activeKeys.push(letter);
  }
  compare(activeKeys);
};

const removeKey = (e) => {
  let index = activeKeys.indexOf(e.key);
  if (index > -1) activeKeys = activeKeys.slice(index, -1);
};

function Input() {
  return (
    <input
      className={classes.input}
      onKeyUp={(e) => removeKey(e)}
      onKeyDown={(e) => addKey(e)}
      tabIndex={0}
      autoFocus
    />
  );
}

export default Input;
