import { AvaibleGameModes } from "contexts/settings-context";

interface Props {
  selectedGameMode: AvaibleGameModes;
  setGameMode: (gameMode: AvaibleGameModes) => void;
}

const avaibleGameModes = ["words", "time", "quotes"] as AvaibleGameModes[];

function GameModes({ selectedGameMode, setGameMode }: Props) {
  return (
    <>
      {avaibleGameModes.map((gameMode) => {
        const isSelected = selectedGameMode === gameMode;
        const changeGameMode = () => setGameMode(gameMode);
        return (
          <button
            className={`btn-sm btn ${isSelected ? "btn-primary" : "btn-ghost"}`}
            onClick={changeGameMode}
          >
            {gameMode}
          </button>
        );
      })}
    </>
  );
}
export default GameModes;
