let intervalID;
let lastSettings;
let currentTime = 0;

function startTimer(time, updateCallback, onEnd) {
  lastSettings = [time, updateCallback, onEnd];
  if (intervalID) stopTimer();
  if (time > 0) {
    currentTime = time;
    intervalID = setInterval(() => {
      if (currentTime > 0) return updateTimer(currentTime - 1, updateCallback);

      updateTimer(currentTime, updateCallback);
      stopTimer();
      onEnd();
    }, 1000);
  } else {
    currentTime = time;
    intervalID = setInterval(() => {
      currentTime += 1;
      updateTimer(currentTime, updateCallback);
    }, 1000);
  }
}

function updateTimer(newTime, updateCallback) {
  currentTime = newTime;
  updateCallback(currentTime);
}

const stopTimer = () => {
  clearInterval(intervalID);
  intervalID = null;
};

const getCurrentTime = () => currentTime;
const resumeTimer = () => startTimer(...lastSettings);
const restartTimer = (newTime) => {
  lastSettings[0] = newTime;
  startTimer(...lastSettings);
};

export { startTimer, stopTimer, getCurrentTime, restartTimer, resumeTimer };
