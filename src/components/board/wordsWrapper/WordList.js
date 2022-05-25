import { useState, useEffect } from "react";
import Word from "../word/Word";
import classes from "../Board.module.css";

function WordList(props) {
  // useEffect(() => setwords(props.words), [props.words]);
  // useEffect(() => {
  //   setwords((prevWords) =>
  //     prevWords.map((word, i) => {
  //       if (activeWordIndex === i) return { ...word, entered: userInput };
  //       return word;
  //     })
  //   );
  // }, [userInput]);

  return (
    <div className={classes.words}>
      {props.children}
      {props.words.map((word, i) => {
        return <Word word={word.generated} userWord={word.entered} key={i}></Word>;
      })}
    </div>
  );
}

export default WordList;
