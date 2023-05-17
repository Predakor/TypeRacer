import { useGameStateContext } from "@store/gameState-context";
import { forwardRef, useEffect } from "react";

export type UpdateCaret = (left: number | string, top: number | string) => void;

const Caret = forwardRef<HTMLSpanElement>((props, ref) => {
  const [gameState] = useGameStateContext();
  const pulse = !gameState.started ? "animate-pulse-more" : "";

  useEffect(() => {
    if (gameState.paused) return;
    const caret = ref?.current as HTMLSpanElement;
    if (caret) caret.style.inset = "0";
  }, [gameState]);

  return (
    <span
      id="caret"
      className={`absolute h-6 w-0.5 overflow-clip bg-primary duration-150 ${pulse}`}
      ref={ref}
      aria-hidden
    />
  );
});
export default Caret;
