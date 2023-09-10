import { useGameStateContext } from "contexts/gameState-context";

function PauseModal() {
  const [gameState, actions] = useGameStateContext();

  if (!gameState.paused) {
    return null;
  }

  return (
    <div
      class={
        "absolute inset-0 z-50 flex h-full w-full scale-105 items-center justify-center backdrop-blur-sm"
      }
    >
      <div onClick={() => actions.resume()} className="cursor-default">
        <h2 className={"text-3xl font-bold text-primary-content"}>
          Click me or start typing to resume
        </h2>
      </div>
    </div>
  );
}

export default PauseModal;
