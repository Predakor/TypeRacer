import { useState } from "react";
import classes from "./Word.module.css";

function Word(props) {
  const [letters, setLetters] = useState(Array.from(props.word));
  return (
    <div className={classes.word}>
      {letters.map((letter, i) => {
        return <Letter letter={letter} key={i}></Letter>;
      })}
    </div>
  );
}
const Letter = (props) => <div className={classes.letter}>{props.letter}</div>;

export default Word;
