import settingsContext from "@store/settings-context";
import { generateWords } from "@utils/wordGenerator";
import { useContext, useState } from "preact/hooks";

function useWords() {
  const { wordCount } = useContext(settingsContext);
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
