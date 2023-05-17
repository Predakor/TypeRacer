import { UpdateCaret } from "@components/Caret/Caret";
import { memo, useEffect, useRef } from "react";
import { Letter } from "./Letter";

interface Props {
  word: string;
  userWord: string;
  updateCaret: UpdateCaret;
}

function Word({ word, userWord, updateCaret }: Props) {
  const wordRef = useRef<HTMLDivElement>(null);

  const longerArray = Array.from(
    word.length >= userWord.length ? word : userWord
  );

  useEffect(() => {
    const target = wordRef.current;
    if (!target) return;

    const textLength = userWord.length;
    const currentLetter = target.children[textLength] as HTMLElement;

    let { offsetLeft, offsetTop } = target;

    if (textLength > 0 && currentLetter) {
      offsetLeft = currentLetter.offsetLeft;
    }
    if (textLength >= word.length) {
      offsetLeft += target.clientWidth;
    }
    updateCaret(offsetLeft, offsetTop);
  }, [userWord]);

  return (
    <div className="whitespace-nowrap" ref={wordRef}>
      {longerArray.map((l, i) => (
        <Letter
          generated={word[i]}
          entered={userWord[i]}
          extra={i >= word.length}
          key={i}
        />
      ))}
    </div>
  );
}

export default memo(Word);
