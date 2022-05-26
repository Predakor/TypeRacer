import { useState, useRef } from "react";
import PauseScreen from "../PauseScreen";
import Input from "./Input";
import WordList from "./WordList";

function WordsWrapper(props) {
  const inputRef = useRef();
  const [index, setIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [words, setActiveWords] = props.words;
  const { controls, gameState } = props;

  function textHandler(text) {
    setUserInput((prevText) => {
      text = text.trim();
      let lastChar = text.slice(-1);
      let lastWordChar = words[index].entered.slice(-1);

      if (prevText.length > text);
      {
        // lastChar !== lastWordChar && statsData.errorCount++;
        // statsData.keyCount++;
      }

      return text;
    });
  }
  function spaceBarHandler() {
    if (index + 1 >= words.length) return controls.endGame();
    setActiveWords((prevWords) =>
      prevWords.map((word, i) => {
        return i === index ? { ...word, entered: userInput } : word;
      })
    );

    setIndex((prevIndex) => {
      inputRef.current.value = "";
      return prevIndex + 1;
    });
  }
  function backSpaceHandler() {
    setIndex((prevIndex) => {
      if (userInput === "" && index > 0) {
        let prevWord = words[prevIndex - 1].entered;

        inputRef.current.value = prevWord;
        setUserInput(prevWord);
        return prevIndex - 1;
      }
      return prevIndex;
    });
  }

  return (
    <>
      <Input
        onChange={textHandler}
        onSpaceBar={spaceBarHandler}
        onBackSpace={backSpaceHandler}
        controls={controls}
        gameState={gameState}
        ref={inputRef}
      />

      <WordList words={words} currentIndex={index} currentWord={userInput}>
        {gameState.isPaused && <PauseScreen onResume={controls.resumeGame} />}
      </WordList>
    </>
  );
}

export default WordsWrapper;
