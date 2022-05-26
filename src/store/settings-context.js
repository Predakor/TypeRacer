import { createContext } from "react";

let gameSettings = createContext({
  mode: "time",
  time: 60,
  wordCount: 50,
});

export default gameSettings;
