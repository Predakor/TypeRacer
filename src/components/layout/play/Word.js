import classes from "./Play.module.css";

function Word(props) {
  return <div className={classes.word}>{props.text}</div>;
}
export default Word;
