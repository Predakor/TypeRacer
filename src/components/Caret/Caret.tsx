import { useGameStateContext } from "contexts/gameState-context";
import { forwardRef } from "preact/compat";

export type UpdateCaret = (left: number | string, top: number | string) => void;

const Caret = forwardRef<HTMLSpanElement>((_, ref) => {
  const [gameState] = useGameStateContext();
  const pulse = !gameState.started ? "animate-pulse-more" : "";

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
