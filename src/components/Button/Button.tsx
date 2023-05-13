import { ReactNode } from "react";
import classes from "./Button.module.css";

interface Props {
  className?: string;
  onClick?: VoidFunction;
  children?: ReactNode;
}

function Button({ className, onClick, children }: Props) {
  return (
    <button
      className={`${classes.button} ${classes.animate} ${className ?? ""}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

export default Button;
