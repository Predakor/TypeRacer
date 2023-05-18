import { createContext } from "preact";

interface GameSettings {
  mode: "words" | "time" | "quotes";
  time: number;
  wordCount: number;
}
const gameSettings = createContext<GameSettings>({
  mode: "words",
  time: 0,
  wordCount: 50,
});

export default gameSettings;
