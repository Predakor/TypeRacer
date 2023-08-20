import useKeyListener from "hooks/useKeyListener";
import hints from "./hints.json";

function GameHint({ gameStarted }: { gameStarted: boolean }) {
  const { capsLock } = useKeyListener();

  if (!gameStarted) {
    return <h2>{hints.startGame}</h2>;
  }

  return (
    <h2
      className={`font-bold text-error opacity-0 ${
        capsLock ? "scale-110 opacity-100" : ""
      } duration-200`}
    >
      {hints.capsLockOn}
    </h2>
  );
}
export default GameHint;
