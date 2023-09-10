import Caret, { UpdateCaret } from "@components/Caret/Caret";
import PauseModal from "@components/Modal/PauseModal";
import Word from "@components/Word/Word";
import { useRef, useCallback, useEffect } from "preact/hooks";
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

  useEffect(() => {
    const caret = caretRef.current;
    const firstWord = caret?.nextSibling?.firstChild;
    if (caret && firstWord) {
      const { offsetLeft } = firstWord as HTMLElement;
      updateCaretPosition(offsetLeft - 2, 0);
    }
  }, [words]);

  return (
    <section className="relative ">
      <PauseModal />
      <Caret ref={caretRef} />
      <div className="flex flex-row flex-wrap justify-center gap-x-2 text-xl">
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
    </section>
  );
}

export default WordList;
