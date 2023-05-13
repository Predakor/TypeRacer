import { ReactNode } from "react";
import Button from "../../Button/Button";
import classes from "./SettingsButton.module.css";
interface Props {
  className?: string;
  onClick?: VoidFunction;
  children: ReactNode;
}

function SettingButon({ className, onClick, children }: Props) {
  const extraClass = className ?? "";
  const active = Math.random() * 3 > 2 ? classes.active : "";
  return (
    <Button
      forwardClass={`${extraClass} ${classes.button} ${active}`}
      click={onClick}
    >
      {children}
    </Button>
  );
}
export default SettingButon;
