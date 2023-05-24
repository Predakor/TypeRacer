import { generateWords } from "@utils/wordGenerator";
import { useGameSettings } from "contexts/settings-context";
import { useState } from "preact/hooks";

function useWords() {
  const [{ wordCount }] = useGameSettings();
  const [words, setWords] = useState(generateWords(wordCount));

  const repeatWords = () =>
    setWords((prevWords) =>
      prevWords.map(({ generated }) => ({
        generated,
        entered: "",
      }))
    );
  const newWords = () => setWords(generateWords(wordCount));

  return [words, { newWords, repeatWords }] as const;
}
export default useWords;
