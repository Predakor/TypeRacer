import Word from "../word/Word";
import classes from "../Board.module.css";

function WordList(props) {
  return (
    <div className={classes.words}>
      {props.children}
      {props.words.map((word, i) => {
        const currentWord = i === props.currentIndex ? props.currentWord : word.entered;
        return <Word word={word.generated} userWord={currentWord} key={i}></Word>;
      })}
    </div>
  );
}

export default WordList;
