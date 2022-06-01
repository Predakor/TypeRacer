import classes from "./Settings.module.css";

function SettingsContainer(props) {
  return <div className={classes.container}>{props.children}</div>;
}
export default SettingsContainer;
