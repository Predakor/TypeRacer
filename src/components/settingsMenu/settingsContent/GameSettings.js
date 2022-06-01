import classes from "./Settings.module.css";

function GameSettings() {
  return (
    <>
      <h3>Modes</h3>
      <p className={classes.selected}>words</p>
      <p>quotes</p>
      <p>time</p>

      <h3>Duration</h3>
      <p>short</p>
      <p>medium</p>
      <p className={classes.selected}>long</p>

      <h3>text addons</h3>
      <p>numbers</p>
      <p className={classes.selected}>uppercase</p>
      <p>punctuation</p>

      <h3>Optionals</h3>
      <p>option</p>
      <p className={classes.selected}>option</p>
      <p>option</p>
    </>
  );
}
export default GameSettings;
