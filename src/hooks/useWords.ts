import { generateWords } from "@utils/wordGenerator";
import { useGameSettings } from "contexts/settings-context";
import { useRef, useState } from "preact/hooks";

function useWords() {
  const [{ wordCount }] = useGameSettings();
  const [words, setWords] = useState(generateWords(wordCount));

  const controls = useRef({
    repeatWords: () => {
      return setWords((prevWords) =>
        prevWords.map(({ generated }) => ({
          generated,
          entered: "",
        }))
      );
    },
    newWords: () => setWords(generateWords(wordCount)),
    moreWords: (amount?: number) => {
      return setWords([...words, ...generateWords(amount ?? 30)]);
    },
  }).current;

  return [words, controls] as const;
}
export default useWords;
