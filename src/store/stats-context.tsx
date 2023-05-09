import { createContext } from "react";

let gameStats = createContext({
  totalClicks: 0,
  totalErrors: 0,
  time: 0,
  clear() {
    this.totalClicks = 0;
    this.totalErrors = 0;
    this.time = 0;
  },
});

export default gameStats;
