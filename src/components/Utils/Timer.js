import { useEffect, useState } from "react";

function Timer(props) {
  const [time, setTime] = useState(props.time);

  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setTime((prevState) => {
          if (prevState > 1) return prevState - 1;

          clearInterval(intervalId);
          props.onTimerEnd();
          return 0;
        }),
      1000
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock">
      <p>{time}</p>
    </div>
  );
}
export default Timer;
