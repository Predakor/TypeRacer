import { useGameStateContext } from "@store/gameState-context";
import Modal from "./Modal";

function PauseModal() {
  const [gameState, actions] = useGameStateContext();
  if (!gameState.paused || !gameState.started) return null;
  return (
    <Modal onClose={actions.resume} className="backdrop-blur-sm">
      <h2 className={"text-3xl font-bold text-primary-content"}>
        Click me or start typing to resume
      </h2>
    </Modal>
  );
}

export default PauseModal;
