import { useEffect, useState } from "react";

let timeUpdate, timeEnd, gameMode;
let clockData = {
  startTime: null,
  currentTime: null,
  intervalID: null,
};

function startTimer(startTime) {
  if (clockData.intervalID) stopTimer();
  updateTimer(startTime);
  if (gameMode === "time") {
    clockData.intervalID = setInterval(() => {
      if (startTime > 0) return updateTimer(--startTime);
      updateTimer(startTime);
      stopTimer();
      timeEnd();
    }, 1000);
  } else {
    clockData.intervalID = setInterval(() => {
      updateTimer(++startTime);
    }, 1000);
  }
}

function updateTimer(newTime) {
  if (newTime) {
    clockData.currentTime = newTime;
    timeUpdate(newTime);
  } else timeUpdate(clockData.startTime);
}

function stopTimer() {
  clearInterval(clockData.intervalID);
  clockData.intervalID = null;
}

const restartTimer = () => startTimer(clockData.startTime);
const resumeTimer = () => startTimer(clockData.currentTime);
const getCurrentTime = () => clockData.currentTime;

function Clock(props) {
  const { time, mode } = props.settings;
  const [curentTime, setCurrentTime] = useState(time);
  useEffect(() => {
    [timeUpdate, timeEnd, gameMode] = [setCurrentTime, props.onTimerEnd, mode];
    clockData.startTime = time;
  }, [time || mode]);

  return (
    <div className="clock">
      <p>{curentTime}</p>
    </div>
  );
}
export default Clock;
export { startTimer, stopTimer, getCurrentTime, restartTimer, resumeTimer, updateTimer };
