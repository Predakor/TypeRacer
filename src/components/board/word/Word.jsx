import { memo, useEffect, useRef } from "react";
import classes from "./Word.module.css";

function Word(props) {
  const wordRef = useRef();
  const letters = Array.from(props.word);
  const userLetters = Array.from(props.userWord);
  const longerArray = letters.length >= userLetters.length ? letters : userLetters;

  useEffect(() => {
    let target = wordRef.current;
    const len = userLetters.length;

    if (len > 0) {
      let left = 0;
      if (target.childNodes[len]) target = target.childNodes[len];
      else left = target.offsetWidth;

      return props.updateCaret?.(target.offsetLeft + left, target.offsetTop);
    }
    props.updateCaret?.(target.offsetLeft, target.offsetTop);
  }, [props.userWord]);

  return (
    <div className={classes.word} ref={wordRef}>
      {longerArray.map((currentLetter, i) => {
        let letter = letters[i];
        let userLetter = userLetters[i];

        return i < letters.length ? (
          <Letter generated={letter} entered={userLetter} key={i} />
        ) : (
          <ExtraLetter letter={currentLetter} key={i} />
        );
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
