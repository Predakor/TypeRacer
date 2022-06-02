import Button from "../../button/Button";
import classes from "./SettingsButton.module.css";
function SettingsButon(props) {
  const extraClass = props.className ? props.className : "";
  const active = Math.random() * 3 > 2 ? classes.active : "";
  return (
    <Button forwardClass={`${extraClass} ${classes.button} ${active}`} click={props.onClick}>
      {props.children}
    </Button>
  );
}
export default SettingsButon;
