import gameStatsContext from "@store/stats-context";
import { useContext } from "react";

function useGameStats() {
  const gameStats = useContext(gameStatsContext);
  return gameStats;
}
export default useGameStats;
