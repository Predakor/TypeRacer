import { useState } from "react";
import classes from "./Word.module.css";

function Word(props) {
  let letters = Array.from(props.word);
  let userLetters = Array.from(props.userWord);
  return (
    <div className={classes.word}>
      {letters.map((letter, i) => {
        if (userLetters.length === 0) {
          return <Letter letter={letter} key={i}></Letter>;
        }
        if (i <= userLetters.length) {
          let correct = letter === userLetters[i] ? classes.correct : classes.wrong;
          return <Letter letter={letter} key={i} style={correct}></Letter>;
        }
        return <Letter letter={letter} key={i}></Letter>;
      })}
    </div>
  );
}
const Letter = (props) => <div className={`${classes.letter} ${props.style}`}>{props.letter}</div>;

export default Word;
