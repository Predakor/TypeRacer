import classes from "../Layout.module.css";

function Panel(props) {
  return <section className={classes.section}>{props.children}</section>;
}
export default Panel;
