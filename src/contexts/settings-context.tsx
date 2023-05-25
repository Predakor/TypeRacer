import { createContext } from "preact";
import {
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "preact/compat";

interface GameSettings {
  mode: "words" | "time" | "quotes";
  time: number;
  wordCount: number;
  punctuaction: boolean;
  numbers: boolean;
  uppercase: boolean;
}

type SettingsContext = [
  settings: Readonly<GameSettings>,
  updateSettings: (newSettings: Partial<GameSettings>) => void
];

const deafultSettings = {
  mode: "words",
  time: 0,
  wordCount: 50,
  punctuaction: false,
  numbers: false,
  uppercase: false,
} satisfies GameSettings;

const GameSettingsContext = createContext<SettingsContext>([
  deafultSettings,
] as unknown as SettingsContext);

function GameSettingsProvider({ children }: PropsWithChildren) {
  const [settings, setSettings] = useState<GameSettings>(() => {
    const localSettings = localStorage.getItem("game-settings");
    return localSettings ? JSON.parse(localSettings) : deafultSettings;
  });

  const updateSettings = useCallback(
    (changedSettings: Partial<GameSettings>) => {
      setSettings((prev) => {
        const newSettings = { ...prev, ...changedSettings };
        localStorage.setItem("game-settings", JSON.stringify(newSettings));
        return newSettings;
      });
    },
    []
  );

  return (
    <GameSettingsContext.Provider value={[settings, updateSettings]}>
      {children}
    </GameSettingsContext.Provider>
  );
}
export const useGameSettings = () => useContext(GameSettingsContext);
export default GameSettingsProvider;
