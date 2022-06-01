import classes from "./Button.module.css";

function Button(props) {
  const extraClass = props.forwardClass;
  return (
    <button className={`${classes.button} ${extraClass} ${classes.animate}`} onClick={props.click}>
      {props.children}
    </button>
  );
}

export default Button;
