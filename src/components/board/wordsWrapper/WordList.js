import Word from "../word/Word";
import classes from "../Board.module.css";

function WordList(props) {
  return (
    <div className={classes.words}>
      {props.children}
      {props.words.map((word, i) => {
        return i === props.currentIndex ? (
          <Word
            word={word.generated}
            userWord={props.currentWord}
            updateCaret={props.updateCaret}
            key={i}></Word>
        ) : (
          <Word word={word.generated} userWord={word.entered} key={i}></Word>
        );
      })}
    </div>
  );
}

export default WordList;
