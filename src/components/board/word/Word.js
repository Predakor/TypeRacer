import { useState, memo } from "react";
import classes from "./Word.module.css";

function Word(props) {
  const [letters, setLetters] = useState(Array.from(props.word));
  const userLetters = Array.from(props.userWord);
  const longerArray = letters.length >= userLetters.length ? letters : userLetters;

  return (
    <div className={classes.word}>
      {longerArray.map((currentLetter, i) => {
        let letter = letters[i];
        let userLetter = userLetters[i];
        if (i < letters.length) {
          return <Letter generated={letter} entered={userLetter} key={i} />;
        }
        return <ExtraLetter letter={currentLetter} key={i} />;
      })}
    </div>
  );
}

function Letter(props) {
  const { generated, entered } = props;
  let correct = "";
  if (entered) correct = generated === entered ? classes.correct : classes.wrong;
  return <div className={`${classes.letter} ${correct}`}>{generated}</div>;
}
function ExtraLetter(props) {
  return <div className={`${classes.letter} ${classes.wrong}`}>{props.letter}</div>;
}

export default memo(Word);
