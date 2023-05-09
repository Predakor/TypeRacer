import { createContext } from "react";

let gameSettings = createContext({
  mode: "words",
  time: 0,
  wordCount: 50,
});

export default gameSettings;
