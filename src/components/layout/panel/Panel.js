import classes from "./Panel.module.css";

function Panel(props) {
  return <section className={classes.panel}>{props.children}</section>;
}
export default Panel;
