import classes from "./Footer.module.css";
function Footer() {
  return (
    <div className={classes.footer}>
      <Link target="mailto:patrykbusko@gmail.com">@ email</Link>
      <Link target="https://github.com/Predakor/TypeRacer">{"</>"} github</Link>
      <Link target="https://github.io/Predakor/">My page</Link>
    </div>
  );
}

function Link(props) {
  return (
    <a href={props.target} className={classes.link} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  );
}
export default Footer;
