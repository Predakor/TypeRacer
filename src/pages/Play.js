import { useState } from "react";
import Board from "../components/board/Board";

const defaultGameMode = {
  time: 60,
  mode: "time",
};
function Play() {
  const [gameMode, setGameMode] = useState(defaultGameMode);
  return <Board></Board>;
}

export default Play;
