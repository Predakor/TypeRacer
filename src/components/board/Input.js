import { compare } from "./controller";
import classes from "./Board.module.css";

const readKey = (e) => {
  compare(e.key);
};

function Input() {
  return <input className={classes.input} onKeyUp={(e) => readKey(e)} autoFocus />;
}

export default Input;
