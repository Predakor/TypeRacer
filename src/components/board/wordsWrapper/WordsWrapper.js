import { useState, useRef, useContext } from "react";
import PauseScreen from "../PauseScreen";
import Input from "./Input";
import WordList from "./WordList";
import gameStatsContext from "../../../store/stats-context";
function WordsWrapper(props) {
  const inputRef = useRef();
  const gameStats = useContext(gameStatsContext);
  const [userInput, setUserInput] = useState("");
  const [index, setIndex] = useState(0);

  const [words, setActiveWords] = props.words;
  const { controls, gameState } = props;

  function textHandler(userText) {
    const currentWord = words[index].generated;
    userText = userText.trim();

    if (index === words.length - 1) {
      if (userText === currentWord) controls.endGame();
    }
    setUserInput((prevText) => {
      let letterIndex = userText.length - 1;
      let wordChar = userText.charAt(letterIndex);
      let userChar = currentWord.charAt(letterIndex);

      if (userText.length > prevText.length) {
        if (userChar === wordChar) gameStats.keyCount++;
        else gameStats.errorCount++;
      }
      return userText;
    });
  }
  function spaceBarHandler() {
    if (index >= words.length - 1) return controls.endGame();

    setActiveWords((prevWords) =>
      prevWords.map((word, i) => {
        return i === index ? { ...word, entered: userInput } : word;
      })
    );
    inputRef.current.value = "";
    setIndex((prevIndex) => prevIndex + 1);
  }
  function backSpaceHandler() {
    if (userInput === "" && index > 0) {
      const prevWord = words[index - 1].entered;
      inputRef.current.value = prevWord;

      setIndex((prevIndex) => prevIndex - 1);
      setUserInput(prevWord);
      setActiveWords((prevWords) =>
        prevWords.map((word, i) => {
          return i === index ? { ...word, entered: userInput } : word;
        })
      );
    }
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
