import classes from "./Play.module.css";

function Word(props) {
  return (
    <div className={classes.word}>
      {props.letters.map((letter, i) => {
        return <span key={i}>{letter}</span>;
      })}
    </div>
  );
}

export default Word;
