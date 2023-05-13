import { useGameStateContext } from "@store/gameState-context";
import { forwardRef, useEffect } from "react";
import classes from "./Caret.module.css";

export type UpdateCaret = (left: number | string, top: number | string) => void;

const Caret = forwardRef<HTMLElement>((props, ref) => {
  const [gameState] = useGameStateContext();
  const fade = gameState.started ? "" : classes.fade;

  useEffect(() => {
    if (gameState.paused) return;
    const caret = ref.current as HTMLSpanElement;
    if (caret) caret.style.inset = "0";
  }, [gameState]);

  return (
    <span className={`${classes.pointer} ${fade}`} ref={ref} aria-hidden />
  );
});
export default Caret;
