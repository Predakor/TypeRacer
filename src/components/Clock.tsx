import { useGameStateContext } from "@store/gameState-context";
import useClock from "hooks/useClock";
import useGameStats from "hooks/useGameStats";
import { useEffect } from "react";

interface Props {
  mode: "words" | "time";
  time: number;
  onEnd: (time: number) => void;
}

function Clock({ mode, time, onEnd }: Props) {
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
      else controls.start();
    }
    if (game.ended) onEnd(clock);
  }, [game]);

  useEffect(() => {
    gameStats.time = clock / 1000;
  }, [clock]);

  return (
    <div className="clock" aria-label="clock">
      {clock / 1000}
    </div>
  );
}
export default Clock;
