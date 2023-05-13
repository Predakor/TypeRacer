import { useGameStateContext } from "@store/gameState-context";
import classes from "./modal.module.css";
import Modal from "./Modal";
function PauseModal() {
  const [gameState, actions] = useGameStateContext();

  if (!gameState.paused || !gameState.started) return null;
  return (
    <Modal onClose={actions.resume}>
      <h2 className={classes.pause_screen}>Click me to resume</h2>
    </Modal>
  );
}

export default PauseModal;
