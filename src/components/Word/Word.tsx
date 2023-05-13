import { memo, useEffect, useRef } from "react";
import classes from "./Word.module.css";
import { ExtraLetter, Letter } from "./Letter";
import { UpdateCaret } from "@components/Caret/Caret";

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
    <div className={classes.word} ref={wordRef}>
      {longerArray.map((currentLetter, i) => {
        const letter = word[i];
        const userLetter = userWord[i];
        return i < word.length ? (
          <Letter generated={letter} entered={userLetter} key={i} />
        ) : (
          <ExtraLetter letter={currentLetter} key={i} />
        );
      })}
    </div>
  );
}

export default memo(Word);
