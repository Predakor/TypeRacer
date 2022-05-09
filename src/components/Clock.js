import { useEffect, useState } from "react";

function Clock(props) {
  const [time, setTime] = useState(props.time);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevState) => {
        if (prevState - 1 === 0) {
          clearInterval(intervalId);
          props.onTimerEnd();
          return 0;
        } else return prevState - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock">
      <p>{time}</p>
    </div>
  );
}
export default Clock;
