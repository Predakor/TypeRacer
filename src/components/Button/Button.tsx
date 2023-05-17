import { ReactNode } from "react";

interface Props {
  className?: string;
  onClick?: VoidFunction;
  children?: ReactNode;
  ariaLabel: string;
}

function Button({ className, onClick, children, ariaLabel }: Props) {
  return (
    <button
      className={`btn-ghost tooltip btn ${className}`}
      onClick={onClick}
      type="button"
      data-tip={ariaLabel}
    >
      {children}
    </button>
  );
}

export default Button;
