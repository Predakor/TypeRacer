import Word from "@components/Word/Word";
import { ReactNode, useRef } from "react";
import type { Word as WordT } from "types/types";
import classes from "../Board.module.css";
import Caret, { UpdateCaret } from "@components/Caret/Caret";

interface Props {
  words: WordT[];
  currentWord: any;
  currentIndex: number;
}

function WordList({ words, currentWord, currentIndex }: Props) {
  const caretRef = useRef<HTMLSpanElement>(null);

  const updateCaretPosition: UpdateCaret = (left, top) => {
    const caret = caretRef.current;
    if (!caret) return;
    caret.style.left = `${left}px`;
    caret.style.top = `${top}px`;
  };

  return (
    <div className={classes.words}>
      <Caret ref={caretRef} />

      {words.map(({ entered, generated }, i) => {
        const isCurrentWord = i === currentIndex;
        const userWord = isCurrentWord ? currentWord : entered;
        return (
          <Word
            word={generated}
            userWord={userWord}
            updateCaret={updateCaretPosition}
            key={i}
          />
        );
      })}
    </div>
  );
}

export default WordList;
