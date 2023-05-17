import { useGameStateContext } from "@store/gameState-context";
import useClock from "hooks/useClock";
import useGameStats from "hooks/useGameStats";
import { useEffect } from "react";

interface Props {
  mode: "words" | "time";
  time: number;
  onEnd: (time: number) => void;
  className?: string;
}

function Clock({ mode, time, onEnd, className = "" }: Props) {
  const [game] = useGameStateContext();
  const gameStats = useGameStats();

  const wordsMode = mode === "words";
  const startTime = wordsMode ? 0 : time;
  const gameMode = wordsMode ? "timer" : "countdown";

  const [clock, controls] = useClock({ mode: gameMode, startTime });

  useEffect(() => {
    if (game.paused) return controls.pause();
    if (game.started) {
      if (!game.paused) controls.resume();
      else controls.restart();
    }
    if (game.ended) onEnd(clock);
  }, [game]);

  useEffect(() => {
    gameStats.time = clock / 1000;
  }, [clock]);

  return (
    <span className={`${className} text-accent`} aria-label="clock">
      {clock / 1000}
    </span>
  );
}
export default Clock;
