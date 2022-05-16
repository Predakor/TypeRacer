let intervalID;
let currentTime = 0;

const getCurrentTime = () => currentTime;

function startClock(updateCallback) {
  intervalID = setInterval(() => {
    currentTime += 1;
    updateTimer(currentTime, updateCallback);
  }, 1000);
}

function startCountdown(time, updateCallback, onEnd) {
  currentTime = time;
  intervalID = setInterval(() => {
    if (currentTime > 0) return updateTimer(currentTime - 1, updateCallback);

    updateTimer(currentTime, updateCallback);
    stopTimer(onEnd);
  }, 1000);
}

function updateTimer(newTime, updateCallback) {
  currentTime = newTime;
  updateCallback(currentTime);
}

function stopTimer(onEnd) {
  clearInterval(intervalID);
  onEnd(currentTime);
  return currentTime;
}

export { startClock, startCountdown, stopTimer, getCurrentTime };
