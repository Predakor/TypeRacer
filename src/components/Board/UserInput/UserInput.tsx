import { useGameStateContext } from "contexts/gameState-context";
import { forwardRef, useEffect } from "preact/compat";
interface Props {
  onChange: (text: string) => void;
  nextWord: VoidFunction;
  prevWord: VoidFunction;
}

type InputTarget = {
  currentTarget: HTMLInputElement;
};

const UserInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const [game, actions] = useGameStateContext();
  const { onChange, nextWord, prevWord } = props;

  useEffect(() => {
    if (!game.started || game.paused) {
      return;
    }
    const { current: input } = ref as React.Ref<HTMLInputElement>;
    if (input && document.activeElement !== input) {
      input.focus();
    }
  }, [game]);

  const changeHandler = ({ currentTarget }: InputTarget) => {
    if (game.started) onChange(currentTarget.value);
  };

  const clickHandler = (e: KeyboardEvent) => {
    if (game.ended) return;
    if (!game.started) actions.start();
    if (game.paused) {
      actions.resume();
    }
    if (e.key === " ") return nextWord();
    if (e.key === "Backspace") return prevWord();
  };

  const blurHandler = () => {
    if (game.started) actions.pause();
  };

  const focusHandler = () => {
    if (game.started) actions.resume();
  };

  return (
    <input
      id={"words-input"}
      className={"sr-only"}
      onChange={changeHandler}
      onKeyDown={clickHandler}
      onFocus={focusHandler}
      onBlur={blurHandler}
      autoCapitalize="off"
      autoCorrect="off"
      autoComplete="off"
      spellCheck={false}
      autoFocus={true}
      ref={ref}
    />
  );
});

export default UserInput;
