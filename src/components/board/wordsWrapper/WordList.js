import Word from "../word/Word";
import classes from "../Board.module.css";
import { useState } from "react";

function WordList(props) {
  const [wordsState, setWordsState] = useState([]);
  return (
    <div className={classes.words}>
      {props.children}
      {props.words.map((word, i) => {
        let currentWord = i === props.currentIndex ? props.currentWord : word.entered;
        return <Word word={word.generated} userWord={currentWord} key={i}></Word>;
      })}
    </div>
  );
}

export default WordList;
