import Section from "../Section/Section";
import classes from "../Layout.module.css";
function Main(props) {
  return (
    <main className={classes.main}>
      <Section>{props.children}</Section>
    </main>
  );
}
export default Main;
