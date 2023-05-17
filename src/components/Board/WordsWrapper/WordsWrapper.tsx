import useGameStats from "hooks/useGameStats";
import { useEffect, useRef, useState } from "react";
import { Word } from "types/types";
import UserInput from "../UserInput/UserInput";
import WordList from "./WordList";
import PauseModal from "@components/Modal/PauseModal";

interface Props {
  controls: any;
  generatedWords: Word[];
}

function WordsWrapper({ controls, generatedWords }: Props) {
  const gameStats = useGameStats();
  const [words, setWords] = useState(generatedWords);
  const [userInput, setUserInput] = useState("");
  const [index, setIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIndex(0);
    setUserInput("");
    setWords(generatedWords);
    gameStats.clear();
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.value = "";
    }
  }, [generatedWords]);

  const endGame = () => {
    if (!inputRef.current) return;
    words[index].entered = inputRef.current.value.trim();
    controls.endGame();
  };

  const textHandler = (userText: string) => {
    userText = userText.trim();

    const currentWord = words[index].generated;
    const isLastWord = index === words.length - 1;

    if (isLastWord && userText === currentWord) {
      endGame();
      return;
    }

    setUserInput((prevText) => {
      const letterIndex = userText.length - 1;
      const userChar = userText.charAt(letterIndex);
      const wordChar = currentWord.charAt(letterIndex);

      if (userText.length > prevText.length) {
        userChar === wordChar
          ? gameStats.totalClicks++
          : gameStats.totalErrors++;
      }
      return userText;
    });
  };

  const spaceBarHandler = () => {
    if (index >= words.length - 1) return endGame();
    words[index].entered = userInput;
    inputRef.current.value = "";
    setIndex((prevIndex) => prevIndex + 1);
  };

  const backSpaceHandler = () => {
    if (userInput === "" && index > 0) {
      const prevWord = words[index - 1].entered;
      inputRef.current.value = prevWord;
      words[index].entered = userInput;
      setIndex((prevIndex) => prevIndex - 1);
      setUserInput(prevWord);
    }
  };

  return (
    <>
      <UserInput
        onChange={textHandler}
        nextWord={spaceBarHandler}
        prevWord={backSpaceHandler}
        ref={inputRef}
      />
      <WordList words={words} currentIndex={index} currentWord={userInput} />
    </>
  );
}

export default WordsWrapper;
