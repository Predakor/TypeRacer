import gameStatsContext from "contexts/stats-context";
import { useContext } from "preact/hooks";

function useGameStats() {
  const gameStats = useContext(gameStatsContext);
  return gameStats;
}
export default useGameStats;
