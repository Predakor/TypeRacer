import gameSettingsContext from "@store/settings-context";
import { useContext } from "preact/hooks";

function useGameSettings() {
  const gameSettings = useContext(gameSettingsContext);
  return gameSettings;
}

export default useGameSettings;
