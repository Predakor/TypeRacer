import Caret, { UpdateCaret } from "@components/Caret/Caret";
import Word from "@components/Word/Word";
import { useCallback, useRef } from "react";
import type { Word as WordT } from "types/types";

interface Props {
  words: WordT[];
  currentWord: any;
  currentIndex: number;
}

function WordList({ words, currentWord, currentIndex }: Props) {
  const caretRef = useRef<HTMLSpanElement>(null);

  const updateCaretPosition = useCallback<UpdateCaret>((left, top) => {
    const caret = caretRef.current;
    if (!caret) return;
    caret.style.translate = `${left}px ${top}px`;
  }, []);

  return (
    <section className="relative flex flex-row flex-wrap gap-x-2 text-xl">
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
    </section>
  );
}

export default WordList;
