import { useState, useRef, useCallback } from "preact/hooks";

interface Options {
  startTime?: number;
  mode?: "timer" | "countdown";
  interval?: number;
}

const defaultOptions: Options = {
  startTime: 0,
  mode: "timer",
  interval: 1000,
};

function useClock(options: Options = defaultOptions) {
  const { startTime = 0, mode = "timer", interval = 1000 } = options;

  const [time, setTime] = useState(startTime || 0);
  const intervalID = useRef<number>();

  const createInterval = useCallback(() => {
    if (intervalID) clearInterval(intervalID.current);

    const updateAmount = mode === "timer" ? 1000 : -1000;
    const updateTime = () => setTime((time) => time + updateAmount);
    intervalID.current = setInterval(updateTime, interval);
  }, []);

  const clockControls = useRef({
    start: (time?: number) => {
      setTime(time ?? 0);
      createInterval();
    },
    restart: () => {
      setTime(0);
      createInterval();
    },
    pause: () => clearInterval(intervalID.current),
    resume: () => createInterval(),
  });

  return [time, clockControls.current] as const;
}
export default useClock;
