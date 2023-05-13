import { ReactNode } from "react";
import { createPortal } from "react-dom";
import classes from "./modal.module.css";
interface Props {
  children: ReactNode;
  className?: string;
  onClose?: VoidFunction;
}

function Modal({ children, className, onClose }: Props) {
  const container = document.getElementById("modal") as HTMLElement;

  return createPortal(
    <div className={`${classes.modal} ${className}`} onClick={onClose}>
      {children}
    </div>,
    container
  );
}

export default Modal;
