import classes from "./Board.module.css";
function PauseScreen(props) {
  return (
    <div className={classes.pause_screen} onClick={props.onResume}>
      Click me to resume
    </div>
  );
}

export default PauseScreen;
