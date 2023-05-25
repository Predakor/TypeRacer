import { createContext } from "preact";
import { PropsWithChildren } from "preact/compat";
import { useState, useRef, useContext } from "preact/hooks";

interface GameState {
  started: boolean;
  paused: boolean;
  ended: boolean;
}

interface GameActions {
  pause: VoidFunction;
  resume: VoidFunction;
  end: VoidFunction;
  start: VoidFunction;
  restart: VoidFunction;
}

type exportType = [GameState, GameActions];

const gameStateContext = createContext([{}, {}] as exportType);

export const GameStateProvider = ({ children }: PropsWithChildren) => {
  const [gameState, setGameState] = useState<GameState>({
    started: false,
    paused: false,
    ended: false,
  });

  const updateGame = (newGame: Partial<GameState>) => {
    return setGameState((game) => ({ ...game, ...newGame }));
  };

  const actions = useRef({
    pause: () => updateGame({ paused: true }),
    resume: () => updateGame({ paused: false }),
    end: () => updateGame({ ended: true, paused: false, started: false }),
    start: () => updateGame({ started: true, paused: false }),
    restart: () => updateGame({ ended: false, paused: false, started: false }),
  }).current;

  return (
    <gameStateContext.Provider value={[gameState, actions] as exportType}>
      {children}
    </gameStateContext.Provider>
  );
};
export const useGameState = () => useContext(gameStateContext);
export const useGameStateContext = () => useContext(gameStateContext);
