import { useEffect, useState } from "react";
import { startClock, startCountdown } from "./time";
function Clock(props) {
  const [time, setTime] = useState(props.time);
  useEffect(() => {
    if (props.time > 0) {
      startCountdown(props.time, setTime, props.onTimerEnd);
    } else startClock(setTime);
  }, []);

  return (
    <div className="clock">
      <p>{time}</p>
    </div>
  );
}
export default Clock;
