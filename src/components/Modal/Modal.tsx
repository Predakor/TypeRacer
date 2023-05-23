import { PropsWithChildren, createPortal } from "preact/compat";

interface Props extends PropsWithChildren {
  className?: string;
  onClose?: VoidFunction;
}

function Modal({ children, className = "", onClose }: Props) {
  const container = document.getElementById("modal") as HTMLElement;

  return createPortal(
    <div
      className={`absolute inset-0 flex items-center justify-center backdrop-blur ${className}`}
      onClick={onClose}
    >
      {children}
    </div>,
    container
  );
}

export default Modal;
