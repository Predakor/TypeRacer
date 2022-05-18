import { useState, useEffect } from "react";
import Word from "./word/Word";
import classes from "./Board.module.css";

function WordList(props) {
  let index = props.currentIndex;
  let userInput = props.userInput;

  const [words, setwords] = useState(props.words);

  useEffect(() => setwords(props.words), [props.words]);

  useEffect(() => {
    setwords((prevWords) =>
      prevWords.map((word, i) => {
        if (index === i) return { ...word, entered: userInput };
        return word;
      })
    );
  }, [props.userInput]);

  return (
    <div className={classes.words}>
      {words.map((word, i) => {
        return <Word word={word.generated} userWord={word.entered} key={i}></Word>;
      })}
    </div>
  );
}

export default WordList;
