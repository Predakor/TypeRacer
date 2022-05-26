import { createContext } from "react";

let gameStats = createContext({
  keyCount: 0,
  errorCount: 0,
  timePassed: 0,
  clear() {
    gameStats.keyCount = 0;
    gameStats.errorCount = 0;
    gameStats.timePassed = 0;
  },
});

export default gameStats;
