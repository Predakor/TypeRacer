import Board from "@components/Board/Board";
import { GameStateProvider } from "@store/gameState-context";

function Play() {
  return (
    <GameStateProvider>
      <Board />
    </GameStateProvider>
  );
}

export default Play;
