import classes from "./Button.module.css";

function Button(props) {
  const extraClass = classes[props.forwardClass];
  return (
    <button className={`${classes.button} ${extraClass}`} onClick={props.click}>
      {props.children}
    </button>
  );
}

function NavButton(props) {
  const extraClass = classes[props.forwardClass];
  return (
    <Button forwardClass={extraClass} click={props.click} tabIndex={0}>
      {props.children}
    </Button>
  );
}
export default Button;
export { NavButton };
