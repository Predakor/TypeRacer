import { useState, useEffect, useRef, useContext } from "react";
import PauseScreen from "../PauseScreen";
import Input from "./Input";
import WordList from "./WordList";
import gameStatsContext from "../../../store/stats-context";
import Caret from "./caret/Caret";

function WordsWrapper(props) {
  const { controls, gameState } = props;

  const inputRef = useRef();
  const caretRef = useRef();
  const gameStats = useContext(gameStatsContext);
  const [index, setIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [words, setWords] = useState(props.words[0]);

  useEffect(() => {
    setIndex(0);
    setUserInput("");
    setWords(props.words[0]);
    gameStats.clear();
    inputRef.current.focus();
    inputRef.current.value = "";
  }, [props.words[0]]);

  function updateCaretPosition(newLeft, newTop) {
    caretRef.current.style.left = `${newLeft}px`;
    caretRef.current.style.top = `${5 + newTop}px`;
  }
  function endGame() {
    words[index].entered = inputRef.current.value.trim();
    controls.endGame();
  }
  function textHandler(userText) {
    const currentWord = words[index].generated;
    userText = userText.trim();

    if (index === words.length - 1) {
      if (userText === currentWord) endGame();
    }
    setUserInput((prevText) => {
      let letterIndex = userText.length - 1;
      let wordChar = userText.charAt(letterIndex);
      let userChar = currentWord.charAt(letterIndex);

      if (userText.length > prevText.length) {
        if (userChar === wordChar) gameStats.totalClicks++;
        else gameStats.totalErrors++;
      }
      return userText;
    });
  }
  function spaceBarHandler() {
    if (index >= words.length - 1) return endGame();
    words[index].entered = userInput;
    inputRef.current.value = "";
    setIndex((prevIndex) => prevIndex + 1);
  }
  function backSpaceHandler() {
    if (userInput === "" && index > 0) {
      const prevWord = words[index - 1].entered;
      inputRef.current.value = prevWord;
      words[index].entered = userInput;
      setIndex((prevIndex) => prevIndex - 1);
      setUserInput(prevWord);
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
      <WordList
        words={words}
        currentIndex={index}
        currentWord={userInput}
        updateCaret={updateCaretPosition}>
        <Caret ref={caretRef} gameState={gameState} />
        {gameState.isPaused && <PauseScreen onResume={controls.resumeGame} />}
      </WordList>
    </>
  );
}

export default WordsWrapper;
