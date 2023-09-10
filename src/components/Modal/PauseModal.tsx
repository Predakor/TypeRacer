import { useGameStateContext } from "contexts/gameState-context";
import Modal from "./Modal";

function PauseModal() {
  const [gameState, actions] = useGameStateContext();
  if (gameState.paused) {
    return (
      <Modal onClose={actions.resume} className="backdrop-blur-sm">
        <h2
          className={"text-3xl font-bold text-primary-content"}
          onClick={() => actions.resume()}
        >
          Click me or start typing to resume
        </h2>
      </Modal>
    );
  }
}

export default PauseModal;
