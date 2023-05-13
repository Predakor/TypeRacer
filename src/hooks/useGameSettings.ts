import gameSettingsContext from "@store/settings-context";
import { useContext } from "react";

function useGameSettings() {
  const gameSettings = useContext(gameSettingsContext);
  return gameSettings;
}
export default useGameSettings;
