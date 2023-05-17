import gameStatsContext from "@store/stats-context";
import { useContext } from "preact/hooks";

function useGameStats() {
  const gameStats = useContext(gameStatsContext);
  return gameStats;
}
export default useGameStats;
