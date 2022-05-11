import { memo } from "react";
import classes from "./Word.module.css";

function Word(props) {
  let letters = Array.from(props.word);
  let userLetters = Array.from(props.userWord);
  let longerArray = userLetters.length > letters.length ? userLetters : letters;

  return (
    <div className={classes.word}>
      {longerArray.map((letter, i) => {
        let correct;
        if (letter === "") letter = "_";
        if (userLetters.length === 0) {
          correct = "";
        } else if (i > letters.length) {
          correct = classes.wrong;
        } else if (i <= userLetters.length) {
          correct = letters[i] === userLetters[i] ? classes.correct : classes.wrong;
        }
        return <Letter letter={letter} key={i} style={correct}></Letter>;
      })}
    </div>
  );
}
const Letter = (props) => <div className={`${classes.letter} ${props.style}`}>{props.letter}</div>;

export default memo(Word);
