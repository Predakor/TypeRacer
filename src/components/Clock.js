import { useEffect, useState } from "react";

function Clock(props) {
  const [time, setTime] = useState(props.time);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevState) => {
        if (prevState - 1 === 0) {
          clearInterval(intervalId);
          props.onTimerEnd();
        } else return prevState - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function updateTimer() {}

  return (
    <div className="clock">
      <p>{time}</p>
    </div>
  );
}
export default Clock;
