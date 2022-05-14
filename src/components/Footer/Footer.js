import classes from "./Footer.module.css";
function Footer() {
  return (
    <div className={classes.footer}>
      <Link link="mailto:patrykbusko@gmail.com">@ email</Link>
      <Link link="https://github.com/Predakor/TypeRacer">{"</>"} github</Link>
      <Link link="https://github.com/Predakor/TypeRacer">My page</Link>
    </div>
  );
}

function Link(props) {
  return (
    <a href="{props.link}" className={classes.link} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  );
}
export default Footer;
