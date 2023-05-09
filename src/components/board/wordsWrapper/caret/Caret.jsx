import { forwardRef } from "react";
import classes from "./Caret.module.css";

const Pointer = forwardRef((props, ref) => {
  const fade = !props.gameState.started ? classes.fade : "";
  return <div className={`${classes.pointer} ${fade}`} ref={ref} />;
});
export default Pointer;
