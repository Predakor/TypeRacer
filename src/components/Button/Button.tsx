import { PropsWithChildren } from "preact/compat";

interface Props extends PropsWithChildren {
  className?: string;
  onClick?: VoidFunction;
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
