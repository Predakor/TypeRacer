import { useGameStateContext } from "contexts/gameState-context";
import { useEffect, useState } from "preact/hooks";

function useKeyListener() {
  const [capsLock, setCapsLock] = useState(false);
  const [currentKey, setCurrentKey] = useState<string>("");
  const [game, actions] = useGameStateContext();

  useEffect(() => {
    if (game.paused) {
      const validKey = /^[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]$/;
      if (validKey.test(currentKey)) {
        actions.resume();
      }
    }
  }, [currentKey, game]);

  useEffect(() => {
    const clickHandler = (e: KeyboardEvent) => {
      const { key } = e;
      if (key === "CapsLock") {
        const capsOn = e.getModifierState("CapsLock");
        setCapsLock(capsOn);
        return;
      }
      setCurrentKey(key);
    };

    document.addEventListener("keydown", clickHandler);
    return () => document.removeEventListener("keydown", clickHandler);
  }, []);

  return { currentKey, capsLock };
}
export default useKeyListener;
