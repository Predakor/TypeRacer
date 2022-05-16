import { useEffect, useState } from "react";

function Clock(props) {
  const [time, setTime] = useState(props.time);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevState) => prevState + 1);
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
