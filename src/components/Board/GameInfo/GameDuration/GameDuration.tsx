import { AvaibleGameModes } from "contexts/settings-context";

interface Props {
  gameMode: AvaibleGameModes;
  selectedDuration: string | number;
  setDuration: (duration: number) => void;
}

const gameModesDurations: Record<AvaibleGameModes, string[]> = {
  words: ["10", "25", "50", "100"],
  time: ["30", "60", "90", "120"],
  quotes: ["short", "medium", "long"],
};
function GameDuration({ gameMode, selectedDuration, setDuration }: Props) {
  const avaibleGameModeDurations = gameModesDurations[gameMode];
  if (gameMode === "quotes") {
    return <p>Work in progress</p>;
  }
  return (
    <>
      {avaibleGameModeDurations.map((duration) => (
        <button
          className={`btn-sm btn ${
            duration == selectedDuration ? "btn-primary" : "btn-ghost"
          }`}
          onClick={() => setDuration(parseInt(duration))}
        >
          {duration}
        </button>
      ))}
    </>
  );
}
export default GameDuration;
