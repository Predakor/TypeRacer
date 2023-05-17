import { useGameStateContext } from "@store/gameState-context";
import { ChangeEvent, KeyboardEvent, forwardRef } from "react";

interface Props {
  onChange: (text: string) => void;
  nextWord: VoidFunction;
  prevWord: VoidFunction;
}

type ChangeEv = ChangeEvent<HTMLInputElement>;
type KeyEv = KeyboardEvent<HTMLInputElement>;

const UserInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const [game, actions] = useGameStateContext();
  const { onChange, nextWord, prevWord } = props;

  const changeHandler = (e: ChangeEv) => {
    if (game.started) onChange(e.target.value);
  };

  const blurHandler = () => {
    if (game.started) actions.pause();
  };

  const focusHandler = () => {
    if (game.started) actions.resume();
  };

  const clickHandler = (e: KeyEv) => {
    if (game.ended) return;
    if (!game.started) actions.start();
    if (e.key === " ") return nextWord();
    if (e.key === "Backspace") return prevWord();
  };

  return (
    <input
      className={"sr-only"}
      onChange={changeHandler}
      onKeyDown={clickHandler}
      onBlur={blurHandler}
      onFocus={focusHandler}
      tabIndex={0}
      autoFocus
      autoCapitalize="off"
      autoCorrect="off"
      autoComplete="off"
      autoSave="off"
      ref={ref}
    />
  );
});

export default UserInput;
