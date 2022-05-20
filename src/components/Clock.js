import { useEffect, useState } from "react";
import { startTimer } from "./Utils/time";
function Clock(props) {
  const [time, setTime] = useState(props.time);

  useEffect(() => startTimer(props.time, setTime, props.onTimerEnd), []);

  return (
    <div className="clock">
      <p>{time}</p>
    </div>
  );
}
export default Clock;
