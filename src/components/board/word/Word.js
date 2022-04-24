import classes from "./Word.module.css";

function Word(props) {
  let letters = Array.from(props.word);

  return (
    <div className={classes.word}>
      {letters.map((letter, i) => {
        return (
          <div className={classes.letter} key={i}>
            {letter}
          </div>
        );
      })}
    </div>
  );
}

export default Word;
